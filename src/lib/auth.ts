import crypto from "node:crypto";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "heritage-park-admin-secret-change-in-production";
const COOKIE_NAME = "admin_token";

function base64UrlEncode(value: string): string {
 return Buffer.from(value).toString("base64url");
}

function base64UrlDecode(value: string): string {
 return Buffer.from(value, "base64url").toString("utf-8");
}

function signHmac(data: string): string {
 return crypto.createHmac("sha256", JWT_SECRET).update(data).digest("base64url");
}

export async function hashPassword(password: string): Promise<string> {
 const salt = crypto.randomBytes(16).toString("hex");
 const iterations = 120000;
 const hash = crypto.pbkdf2Sync(password, salt, iterations, 64, "sha512").toString("hex");
 return `pbkdf2$${iterations}$${salt}$${hash}`;
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
 const parts = hash.split("$");
 if (parts.length !== 4 || parts[0] !== "pbkdf2") return false;

 const iterations = Number(parts[1]);
 const salt = parts[2];
 const expected = parts[3];
 const actual = crypto.pbkdf2Sync(password, salt, iterations, 64, "sha512").toString("hex");
 return crypto.timingSafeEqual(Buffer.from(actual, "hex"), Buffer.from(expected, "hex"));
}

export function generateToken(adminId: number): string {
 const header = { alg: "HS256", typ: "JWT" };
 const payload = { adminId, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 };
 const encodedHeader = base64UrlEncode(JSON.stringify(header));
 const encodedPayload = base64UrlEncode(JSON.stringify(payload));
 const signature = signHmac(`${encodedHeader}.${encodedPayload}`);
 return `${encodedHeader}.${encodedPayload}.${signature}`;
}

export function verifyToken(token: string): { adminId: number } | null {
 try {
  const parts = token.split(".");
  if (parts.length !== 3) return null;

  const [headerB64, payloadB64, signature] = parts;
  const expected = signHmac(`${headerB64}.${payloadB64}`);
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;

  const payload = JSON.parse(base64UrlDecode(payloadB64)) as { adminId?: number; exp?: number };
  if (!payload.adminId) return null;
  if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return null;
  return { adminId: payload.adminId };
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
