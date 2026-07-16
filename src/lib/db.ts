import initSqlJs, { Database as SqlJsDatabase } from "sql.js";
import fs from "node:fs";
import path from "node:path";

const DB_PATH = path.join(process.cwd(), "data", "heritagepark.db");
const IS_VERCEL = !!process.env.VERCEL;

let db: SqlJsDatabase | null = null;

function createSchema(db: SqlJsDatabase) {
 db.run(`
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

async function seedDefaults(db: SqlJsDatabase) {
 const existing = db.exec("SELECT id FROM admins LIMIT 1");
 if (existing.length && existing[0].values.length) return;

 const { hashPassword } = await import("./auth");
 const password = await hashPassword("admin123");
 db.run("INSERT INTO admins (username, email, password) VALUES (?, ?, ?)", ["admin", "admin@heritagepark.com", password]);

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
  db.run("INSERT OR IGNORE INTO page_contents (page_name, section_key, content_value, content_type) VALUES (?, ?, ?, ?)", [page, key, value, type]);
 }
}

export async function getDb(): Promise<SqlJsDatabase> {
 if (db) return db;

 const SQL = await initSqlJs({
  locateFile: (file: string) => {
   if (IS_VERCEL) return `/wasm/${file}`;
   return path.join(process.cwd(), "node_modules", "sql.js", "dist", file);
  },
 });

 if (IS_VERCEL) {
  db = new SQL.Database();
  createSchema(db);
  await seedDefaults(db);
  return db;
 }

 const dir = path.dirname(DB_PATH);
 if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

 if (fs.existsSync(DB_PATH)) {
  const buffer = fs.readFileSync(DB_PATH);
  db = new SQL.Database(buffer);
 } else {
  db = new SQL.Database();
 }

 createSchema(db);
 await seedDefaults(db);
 saveDb();
 return db;
}

export function saveDb() {
 if (!db || IS_VERCEL) return;
 const data = db.export();
 const buffer = Buffer.from(data);
 fs.writeFileSync(DB_PATH, buffer);
}
