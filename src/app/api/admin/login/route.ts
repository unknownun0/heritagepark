import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { verifyPassword, generateToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    if (!username || !password) {
      return NextResponse.json({ error: "Username and password required" }, { status: 400 });
    }

    const db = await getDb();
    const result = db.exec("SELECT id, username, password FROM admins WHERE username = ? OR email = ?", [username, username]);

    if (!result.length || !result[0].values.length) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const [id, uname, hash] = result[0].values[0] as [number, string, string];
    const valid = await verifyPassword(password, hash);
    if (!valid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = generateToken(id);
    const res = NextResponse.json({ success: true, admin: { id, username: uname } });
    res.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    });
    return res;
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
