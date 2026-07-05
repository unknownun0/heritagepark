import { NextRequest, NextResponse } from "next/server";
import { getDb, saveDb } from "@/lib/db";
import { getTokenFromCookies, verifyToken } from "@/lib/auth";

async function requireAdmin() {
  const token = await getTokenFromCookies();
  if (!token || !verifyToken(token)) throw new Error("Unauthorized");
}

export async function GET() {
  try {
    await requireAdmin();
    const db = await getDb();
    const result = db.exec("SELECT id, page_name, section_key, content_value, content_type FROM page_contents ORDER BY page_name, section_key");
    const rows = result[0]?.values.map((row: unknown[]) => ({
      id: row[0] as number,
      page_name: row[1] as string,
      section_key: row[2] as string,
      content_value: row[3] as string | null,
      content_type: row[4] as string,
    })) || [];
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    await requireAdmin();
    const { id, content_value } = await req.json();
    const db = await getDb();
    db.run("UPDATE page_contents SET content_value = ?, updated_at = datetime('now') WHERE id = ?", [content_value, id]);
    saveDb();
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await requireAdmin();
    const { page_name, section_key, content_value, content_type } = await req.json();
    const db = await getDb();
    db.run(
      "INSERT OR REPLACE INTO page_contents (page_name, section_key, content_value, content_type, updated_at) VALUES (?, ?, ?, ?, datetime('now'))",
      [page_name, section_key, content_value || "", content_type || "text"]
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
    db.run("DELETE FROM page_contents WHERE id = ?", [id]);
    saveDb();
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
