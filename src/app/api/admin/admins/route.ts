import { NextRequest, NextResponse } from "next/server";
import { getDb, saveDb } from "@/lib/db";
import { getTokenFromCookies, verifyToken, hashPassword } from "@/lib/auth";

async function requireAdmin() {
 const token = await getTokenFromCookies();
 if (!token || !verifyToken(token)) throw new Error("Unauthorized");
}

export async function GET() {
 try {
  await requireAdmin();
  const db = await getDb();
  const result = db.exec("SELECT id, username, email, created_at FROM admins ORDER BY id");
  const rows = result[0]?.values.map((row: unknown[]) => ({
   id: row[0] as number,
   username: row[1] as string,
   email: row[2] as string,
   created_at: row[3] as string,
  })) || [];
  return NextResponse.json(rows);
 } catch {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
 }
}

export async function POST(req: NextRequest) {
 try {
  await requireAdmin();
  const { username, email, password } = await req.json();
  if (!username || !email || !password) {
   return NextResponse.json({ error: "All fields required" }, { status: 400 });
  }
  const db = await getDb();
  const hashed = await hashPassword(password);
  db.run("INSERT INTO admins (username, email, password) VALUES (?, ?, ?)", [username, email, hashed]);
  saveDb();
  return NextResponse.json({ success: true });
 } catch (err) {
  return NextResponse.json({ error: String(err) }, { status: 500 });
 }
}

export async function DELETE(req: NextRequest) {
 try {
  await requireAdmin();
  const { id } = await req.json();
  const db = await getDb();
  const count = db.exec("SELECT COUNT(*) FROM admins");
  if (count[0]?.values[0][0] as number <= 1) {
   return NextResponse.json({ error: "Cannot delete the last admin" }, { status: 400 });
  }
  db.run("DELETE FROM admins WHERE id = ?", [id]);
  saveDb();
  return NextResponse.json({ success: true });
 } catch {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
 }
}
