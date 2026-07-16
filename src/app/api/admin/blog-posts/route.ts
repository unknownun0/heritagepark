import { NextRequest, NextResponse } from "next/server";
import { getDb, saveDb } from "@/lib/db";
import { getTokenFromCookies, verifyToken } from "@/lib/auth";

async function requireAdmin() {
 const token = await getTokenFromCookies();
 if (!token || !verifyToken(token)) throw new Error("Unauthorized");
}

export async function GET(req: NextRequest) {
 try {
  await requireAdmin();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const db = await getDb();

  if (id) {
   const result = db.exec("SELECT * FROM blog_posts WHERE id = ?", [id]);
   if (!result.length || !result[0].values.length) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
   }
   const cols = result[0].columns;
   const vals = result[0].values[0];
   const post: Record<string, unknown> = {};
   cols.forEach((col: string, i: number) => { post[col] = vals[i]; });
   return NextResponse.json(post);
  }

  const result = db.exec("SELECT id, slug, title, excerpt, image, topic, featured, published, created_at, updated_at FROM blog_posts ORDER BY created_at DESC");
  const rows = result[0]?.values.map((row: unknown[]) => {
   const cols = result[0].columns;
   const post: Record<string, unknown> = {};
   cols.forEach((col: string, i: number) => { post[col] = row[i]; });
   return post;
  }) || [];
  return NextResponse.json(rows);
 } catch {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
 }
}

export async function POST(req: NextRequest) {
 try {
  await requireAdmin();
  const data = await req.json();
  const db = await getDb();
  db.run(
   `INSERT INTO blog_posts (slug, title, excerpt, content, image, topic_id, topic, lang, read_time, featured, published)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
   [
    data.slug, data.title, data.excerpt || "", data.content || "",
    data.image || "", data.topic_id || "", data.topic || "", data.lang || "EN",
    data.read_time || "", data.featured ? 1 : 0, data.published !== undefined ? (data.published ? 1 : 0) : 1,
   ]
  );
  saveDb();
  return NextResponse.json({ success: true });
 } catch (err) {
  return NextResponse.json({ error: String(err) }, { status: 500 });
 }
}

export async function PUT(req: NextRequest) {
 try {
  await requireAdmin();
  const data = await req.json();
  const db = await getDb();
  db.run(
   `UPDATE blog_posts SET slug=?, title=?, excerpt=?, content=?, image=?, topic_id=?, topic=?, lang=?, read_time=?, featured=?, published=?, updated_at=datetime('now') WHERE id=?`,
   [
    data.slug, data.title, data.excerpt || "", data.content || "",
    data.image || "", data.topic_id || "", data.topic || "", data.lang || "EN",
    data.read_time || "", data.featured ? 1 : 0, data.published !== undefined ? (data.published ? 1 : 0) : 1,
    data.id,
   ]
  );
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
  db.run("DELETE FROM blog_posts WHERE id = ?", [id]);
  saveDb();
  return NextResponse.json({ success: true });
 } catch {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
 }
}
