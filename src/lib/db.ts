import fs from "node:fs";
import path from "node:path";

const DB_PATH = path.join(process.cwd(), "data", "heritagepark.db");
const IS_VERCEL = !!process.env.VERCEL;

type Row = Record<string, unknown>;
type JsonDbTable = Row[];

type QueryResult = {
 columns: string[];
 values: unknown[][];
};

class JsonDb {
 private data: Record<string, JsonDbTable>;

 constructor(initial: Record<string, JsonDbTable> = {}) {
  this.data = initial;
 }

 private getTable(name: string): JsonDbTable {
  if (!this.data[name]) this.data[name] = [];
  return this.data[name];
 }

 private nextId(table: string): number {
  const rows = this.getTable(table);
  return rows.reduce((max, row) => Math.max(max, Number(row.id ?? 0)), 0) + 1;
 }

 private getColumnNames(table: string): string[] {
  const rows = this.getTable(table);
  if (!rows.length) return [];
  return Object.keys(rows[0]);
 }

 private valueForPlaceholder(value: unknown): unknown {
  if (value === undefined) return "";
  if (typeof value === "string" && value.toLowerCase() === "datetime('now')") {
   return new Date().toISOString();
  }
  return value;
 }

 private makeSelectResult(table: string, rows: Row[], selectList?: string[]): QueryResult {
  const columns = selectList && selectList.length ? selectList : this.getColumnNames(table);
  return {
   columns,
   values: rows.map((row) => columns.map((column) => row[column] ?? null)),
  };
 }

 private matchesCondition(row: Row, clause: string, params: unknown[]): boolean {
  const normalized = clause.trim();
  if (!normalized) return true;

  const orGroups = normalized.split(/\s+OR\s+/i);
  const matchAny = orGroups.some((group) => {
   const andGroups = group.split(/\s+AND\s+/i);
   return andGroups.every((part) => {
    const match = part.match(/^([A-Za-z0-9_]+)\s*(=|!=|<>|<|>|<=|>=)\s*(.+)$/i);
    if (!match) return true;

    const [, column, operator, rawValue] = match;
    const value = rawValue.trim();
    const actual = row[column] ?? null;
    const paramValue = value === "?" ? params.shift() : this.coerceLiteral(value);

    switch (operator.toLowerCase()) {
     case "=": return actual == paramValue;
     case "!=":
     case "<>": return actual != paramValue;
     case "<": return Number(actual ?? 0) < Number(paramValue ?? 0);
     case ">": return Number(actual ?? 0) > Number(paramValue ?? 0);
     case "<=": return Number(actual ?? 0) <= Number(paramValue ?? 0);
     case ">=": return Number(actual ?? 0) >= Number(paramValue ?? 0);
     default: return true;
    }
   });
  });

  return matchAny;
 }

 private coerceLiteral(value: string): unknown {
  const trimmed = value.trim();
  if ((trimmed.startsWith("'") && trimmed.endsWith("'")) || (trimmed.startsWith('"') && trimmed.endsWith('"'))) {
   return trimmed.slice(1, -1);
  }
  if (trimmed === "NULL") return null;
  if (/^\d+$/.test(trimmed)) return Number(trimmed);
  return trimmed;
 }

 private parseSelect(sql: string, params: unknown[] = []): QueryResult[] {
  const normalized = sql.trim();
  const upper = normalized.toUpperCase();

  if (upper.includes("COUNT(*)")) {
   const tableMatch = normalized.match(/FROM\s+([A-Za-z0-9_]+)/i);
   const table = tableMatch?.[1] || "";
   const rows = this.getTable(table);
   const count = rows.length;
   return [{ columns: ["COUNT(*)"], values: [[count]] }];
  }

  const tableMatch = normalized.match(/FROM\s+([A-Za-z0-9_]+)/i);
  const table = tableMatch?.[1] || "";
  if (!table) return [];

  const selectPart = normalized.slice(0, normalized.toUpperCase().indexOf("FROM")).replace(/^SELECT\s+/i, "").trim();
  const selectColumns = selectPart === "*" ? undefined : selectPart.split(",").map((column) => column.trim().replace(/\s+AS\s+/i, "").split(".").pop() ?? column.trim());

  let whereClause = "";
  let orderBy: string | null = null;
  let limit: number | null = null;

  let rest = normalized;
  const whereIndex = upper.indexOf(" WHERE ");
  const orderIndex = upper.indexOf(" ORDER BY ");
  const limitIndex = upper.indexOf(" LIMIT ");

  if (whereIndex !== -1) {
   const start = whereIndex + " WHERE ".length;
   const end = [orderIndex, limitIndex].filter((index) => index !== -1).sort((a, b) => a - b)[0] ?? normalized.length;
   whereClause = normalized.slice(start, end).trim();
   rest = normalized.slice(0, whereIndex);
  }

  if (orderIndex !== -1) {
   const start = orderIndex + " ORDER BY ".length;
   const end = limitIndex !== -1 ? limitIndex : normalized.length;
   orderBy = normalized.slice(start, end).trim();
  }

  if (limitIndex !== -1) {
   const match = normalized.match(/LIMIT\s+(\d+)/i);
   if (match) limit = Number(match[1]);
  }

  const tableRows = this.getTable(table);
  let rows = [...tableRows];

  if (whereClause) {
   const preparedParams = [...params];
   rows = rows.filter((row) => this.matchesCondition(row, whereClause, preparedParams));
  }

  if (orderBy) {
   const [column, direction = "ASC"] = orderBy.split(/\s+/);
   rows.sort((a, b) => {
    const left = a[column] ?? "";
    const right = b[column] ?? "";
    const compare = String(left).localeCompare(String(right), undefined, { numeric: true });
    return direction.toUpperCase() === "DESC" ? -compare : compare;
   });
  }

  if (limit !== null) rows = rows.slice(0, limit);

  const result = this.makeSelectResult(table, rows, selectColumns);
  return [result];
 }

 private parseInsert(sql: string, params: unknown[] = []) {
  const normalized = sql.trim();
  const insertMatch = normalized.match(/^INSERT\s+(?:OR\s+(IGNORE|REPLACE))?\s*INTO\s+([A-Za-z0-9_]+)\s*\(([^)]*)\)\s*VALUES\s*\((.*)\)$/i);

  if (!insertMatch) {
   throw new Error(`Unsupported insert statement: ${sql}`);
  }

  const [, mode = "", tableName, columnsRaw, valuesRaw] = insertMatch;
  const columns = columnsRaw.split(",").map((item) => item.trim());
  const values = valuesRaw.split(",").map((item) => item.trim());
  const row: Row = {};

  columns.forEach((column, index) => {
   const value = values[index];
   const placeholder = params[index] ?? null;
   const finalValue = value === "?" ? placeholder : this.coerceLiteral(value);
   row[column] = finalValue === "datetime('now')" ? new Date().toISOString() : finalValue;
  });

  const table = this.getTable(tableName);
  if (mode.toUpperCase() === "IGNORE") {
   const duplicate = table.some((candidate) => {
    return columns.every((column) => candidate[column] === row[column]);
   });
   if (duplicate) return;
   table.push(row);
   return;
  }

  if (mode.toUpperCase() === "REPLACE") {
   const duplicateIndex = table.findIndex((candidate) => {
    if (columns.includes("page_name") && columns.includes("section_key")) {
     return candidate.page_name === row.page_name && candidate.section_key === row.section_key;
    }
    return candidate.id === row.id;
   });
   if (duplicateIndex >= 0) {
    table[duplicateIndex] = { ...table[duplicateIndex], ...row };
    return;
   }
  }

  if (!row.id && table.some((candidate) => candidate.id === undefined)) {
   row.id = this.nextId(tableName);
  }

  if (!row.id) row.id = this.nextId(tableName);
  table.push(row);
 }

 private parseUpdate(sql: string, params: unknown[] = []) {
  const match = sql.match(/^UPDATE\s+([A-Za-z0-9_]+)\s+SET\s+(.+?)\s+WHERE\s+(.+)$/i);
  if (!match) throw new Error(`Unsupported update statement: ${sql}`);

  const [, tableName, assignmentsText, whereText] = match;
  const table = this.getTable(tableName);
  const assignments = assignmentsText.split(",").map((part) => part.trim());
  const rowIndex = table.findIndex((row) => {
   const whereClause = whereText;
   const prepared = [...params];
   return this.matchesCondition(row, whereClause, prepared);
  });

  if (rowIndex === -1) return;

  assignments.forEach((assignment) => {
   const singleMatch = assignment.match(/^([A-Za-z0-9_]+)\s*=\s*(.+)$/i);
   if (!singleMatch) return;
   const [, column, rawValue] = singleMatch;
   const value = rawValue.trim() === "?" ? params.shift() : this.coerceLiteral(rawValue);
   table[rowIndex][column] = value;
  });
 }

 private parseDelete(sql: string, params: unknown[] = []) {
  const match = sql.match(/^DELETE\s+FROM\s+([A-Za-z0-9_]+)\s+WHERE\s+(.+)$/i);
  if (!match) throw new Error(`Unsupported delete statement: ${sql}`);

  const [, tableName, whereText] = match;
  const table = this.getTable(tableName);
  const rows = table.filter((row) => !this.matchesCondition(row, whereText, [...params]));
  this.data[tableName] = rows;
 }

 private parseCreateTable(sql: string) {
  const match = sql.match(/^CREATE\s+TABLE\s+IF\s+NOT\s+EXISTS\s+([A-Za-z0-9_]+)\s*\((.*)\)$/is);
  if (!match) return;
  const [, tableName] = match;
  this.getTable(tableName);
 }

 exec(sql: string, params: unknown[] = []): QueryResult[] {
  const normalized = sql.trim();
  const upper = normalized.toUpperCase();

  if (upper.startsWith("CREATE TABLE")) {
   this.parseCreateTable(normalized);
   return [];
  }

  if (upper.startsWith("SELECT")) {
   return this.parseSelect(normalized, params);
  }

  if (upper.startsWith("PRAGMA")) return [];

  throw new Error(`Unsupported SQL statement: ${sql}`);
 }

 run(sql: string, params: unknown[] = []) {
  const normalized = sql.trim();
  const upper = normalized.toUpperCase();

  if (upper.startsWith("CREATE TABLE")) {
   this.parseCreateTable(normalized);
   return;
  }

  if (upper.startsWith("INSERT")) {
   this.parseInsert(normalized, params);
   return;
  }

  if (upper.startsWith("UPDATE")) {
   this.parseUpdate(normalized, params);
   return;
  }

  if (upper.startsWith("DELETE")) {
   this.parseDelete(normalized, params);
   return;
  }

  throw new Error(`Unsupported SQL statement: ${sql}`);
 }

 export(): Uint8Array {
  return Buffer.from(JSON.stringify(this.data, null, 2));
 }
}

let db: JsonDb | null = null;

function createSchema(dbInstance: JsonDb) {
 dbInstance.run(`
  CREATE TABLE IF NOT EXISTS admins (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   username TEXT UNIQUE NOT NULL,
   email TEXT UNIQUE NOT NULL,
   password TEXT NOT NULL,
   created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS page_contents (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   page_name TEXT NOT NULL,
   section_key TEXT NOT NULL,
   content_value TEXT,
   content_type TEXT DEFAULT 'text',
   updated_at TEXT DEFAULT (datetime('now')),
   UNIQUE(page_name, section_key)
  );

  CREATE TABLE IF NOT EXISTS media (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   filename TEXT NOT NULL,
   original_name TEXT NOT NULL,
   alt_text TEXT DEFAULT '',
   file_path TEXT NOT NULL,
   file_size INTEGER DEFAULT 0,
   mime_type TEXT DEFAULT '',
   created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS blog_posts (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   slug TEXT UNIQUE NOT NULL,
   title TEXT NOT NULL,
   excerpt TEXT DEFAULT '',
   content TEXT DEFAULT '',
   image TEXT DEFAULT '',
   topic_id TEXT DEFAULT '',
   topic TEXT DEFAULT '',
   lang TEXT DEFAULT 'EN',
   read_time TEXT DEFAULT '',
   featured INTEGER DEFAULT 0,
   published INTEGER DEFAULT 1,
   created_at TEXT DEFAULT (datetime('now')),
   updated_at TEXT DEFAULT (datetime('now'))
  );
 `);
}

async function seedDefaults(dbInstance: JsonDb) {
 const existing = dbInstance.exec("SELECT id FROM admins LIMIT 1");
 if (existing.length && existing[0].values.length) return;

 const { hashPassword } = await import("./auth");
 const password = await hashPassword("admin123");
 dbInstance.run("INSERT INTO admins (username, email, password) VALUES (?, ?, ?)", ["admin", "admin@heritagepark.com", password]);

 const defaults: [string, string, string, string][] = [
  ["home", "hero_title", "A Place Worth Planning For", "text"],
  ["home", "hero_subtitle", "Plan ahead with dignity and peace of mind.", "text"],
  ["home", "hero_left_label", "Planning for the Future", "text"],
  ["home", "hero_right_label", "We Need Help Now", "text"],
  ["about", "title", "About Heritage Park", "text"],
  ["contact", "email", "sales@heritageparktaguig.com", "text"],
  ["contact", "phone", "0917 884 1009", "text"],
  ["footer", "address", "Heritage Park, Quezon City, Philippines", "text"],
 ];
 for (const [page, key, value, type] of defaults) {
  dbInstance.run("INSERT OR IGNORE INTO page_contents (page_name, section_key, content_value, content_type) VALUES (?, ?, ?, ?)", [page, key, value, type]);
 }
}

export async function getDb(): Promise<JsonDb> {
 if (db) return db;

 const dir = path.dirname(DB_PATH);
 if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

 if (fs.existsSync(DB_PATH)) {
  try {
   const raw = fs.readFileSync(DB_PATH, "utf-8");
   const parsed = JSON.parse(raw);
   db = new JsonDb(parsed);
  } catch {
   db = new JsonDb();
  }
 } else {
  db = new JsonDb();
 }

 createSchema(db);
 await seedDefaults(db);
 saveDb();
 return db;
}

export function saveDb() {
 if (!db || IS_VERCEL) return;
 fs.writeFileSync(DB_PATH, Buffer.from(db.export()));
}

export type DBType = JsonDb;
