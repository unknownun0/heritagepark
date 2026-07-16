import { NextRequest, NextResponse } from "next/server";
import { getDb, saveDb } from "@/lib/db";
import { getTokenFromCookies, verifyToken } from "@/lib/auth";
import fs from "node:fs";
import path from "node:path";

async function requireAdmin() {
 const token = await getTokenFromCookies();
 if (!token || !verifyToken(token)) throw new Error("Unauthorized");
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
 try {
  await requireAdmin();
  const { id } = await params;
  const db = await getDb();
  const result = db.exec("SELECT file_path FROM media WHERE id = ?", [id]);
  if (result.length && result[0].values.length) {
   const filePath = path.join(process.cwd(), "public", result[0].values[0][0] as string);
   if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  }
  db.run("DELETE FROM media WHERE id = ?", [id]);
  saveDb();
  return NextResponse.json({ success: true });
 } catch {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
 }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
 try {
  await requireAdmin();
  const { id } = await params;
  const { alt_text } = await req.json();
  const db = await getDb();
  db.run("UPDATE media SET alt_text = ? WHERE id = ?", [alt_text, id]);
  saveDb();
  return NextResponse.json({ success: true });
 } catch {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
 }
}
