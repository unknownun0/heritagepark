import { NextResponse } from "next/server";
import { getTokenFromCookies, verifyToken } from "@/lib/auth";
import { getDb } from "@/lib/db";

export async function GET() {
  try {
    const token = await getTokenFromCookies();
    if (!token) return NextResponse.json({ authenticated: false }, { status: 401 });

    const payload = verifyToken(token);
    if (!payload) return NextResponse.json({ authenticated: false }, { status: 401 });

    const db = await getDb();
    const result = db.exec("SELECT id, username, email FROM admins WHERE id = ?", [payload.adminId]);

    if (!result.length || !result[0].values.length) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const [id, username, email] = result[0].values[0] as [number, string, string];
    return NextResponse.json({ authenticated: true, admin: { id, username, email } });
  } catch {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
