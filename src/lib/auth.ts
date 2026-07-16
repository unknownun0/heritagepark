import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "heritage-park-admin-secret-change-in-production";
const COOKIE_NAME = "admin_token";

export async function hashPassword(password: string): Promise<string> {
 return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
 return bcrypt.compare(password, hash);
}

export function generateToken(adminId: number): string {
 return jwt.sign({ adminId }, JWT_SECRET, { expiresIn: "24h" });
}

export function verifyToken(token: string): { adminId: number } | null {
 try {
  return jwt.verify(token, JWT_SECRET) as { adminId: number };
 } catch {
  return null;
 }
}

export async function getTokenFromCookies(): Promise<string | undefined> {
 const cookieStore = await cookies();
 return cookieStore.get(COOKIE_NAME)?.value;
}

export function createAuthResponse(token: string) {
 return {
  success: true,
  token,
 };
}
