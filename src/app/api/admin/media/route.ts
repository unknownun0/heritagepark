import { NextRequest, NextResponse } from "next/server";
import { getDb, saveDb } from "@/lib/db";
import { getTokenFromCookies, verifyToken } from "@/lib/auth";
import fs from "node:fs";
import path from "node:path";

async function requireAdmin() {
  const token = await getTokenFromCookies();
  if (!token || !verifyToken(token)) throw new Error("Unauthorized");
}

export async function GET() {
  try {
    await requireAdmin();
    const db = await getDb();
    const result = db.exec("SELECT id, filename, original_name, alt_text, file_path, file_size, mime_type, created_at FROM media ORDER BY created_at DESC");
    const rows = result[0]?.values.map((row: unknown[]) => ({
      id: row[0] as number,
      filename: row[1] as string,
      original_name: row[2] as string,
      alt_text: row[3] as string,
      file_path: row[4] as string,
      file_size: row[5] as number,
      mime_type: row[6] as string,
      created_at: row[7] as string,
    })) || [];
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await requireAdmin();
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });

    const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"];
    if (!allowed.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type. Allowed: jpg, png, webp, gif, svg" }, { status: 400 });
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large. Max 5MB" }, { status: 400 });
    }

    const ext = path.extname(file.name);
    const baseName = path.basename(file.name, ext).replace(/[^a-zA-Z0-9_-]/g, "_");
    const uniqueName = `${baseName}_${Date.now()}${ext}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(path.join(uploadDir, uniqueName), buffer);

    const db = await getDb();
    const alt = formData.get("alt_text") as string || "";
    db.run(
      "INSERT INTO media (filename, original_name, alt_text, file_path, file_size, mime_type) VALUES (?, ?, ?, ?, ?, ?)",
      [uniqueName, file.name, alt, `/uploads/${uniqueName}`, file.size, file.type]
    );
    saveDb();
    return NextResponse.json({ success: true, filename: uniqueName, path: `/uploads/${uniqueName}` });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
