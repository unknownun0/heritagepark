import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { getTokenFromCookies, verifyToken } from "@/lib/auth";

export async function GET(_req: Request, { params }: { params: Promise<{ postId: string }> }) {
 try {
  const token = await getTokenFromCookies();
  if (!token || !verifyToken(token)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { postId } = await params;
  const db = await getDb();
  const result = db.exec("SELECT * FROM blog_posts WHERE id = ? OR slug = ?", [postId, postId]);

  if (!result.length || !result[0].values.length) {
   return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const cols = result[0].columns;
  const vals = result[0].values[0];
  const post: Record<string, unknown> = {};
  cols.forEach((col: string, i: number) => { post[col] = vals[i]; });
  return NextResponse.json(post);
 } catch {
  return NextResponse.json({ error: "Server error" }, { status: 500 });
 }
}
