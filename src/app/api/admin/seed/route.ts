import { NextResponse } from "next/server";
import { getDb, saveDb } from "@/lib/db";
import { hashPassword } from "@/lib/auth";

export async function POST() {
 try {
  const db = await getDb();

  const existing = db.exec("SELECT id FROM admins LIMIT 1");
  let adminCreated = false;
  if (!existing.length || !existing[0].values.length) {
   const password = await hashPassword("admin123");
   db.run("INSERT INTO admins (username, email, password) VALUES (?, ?, ?)", ["admin", "admin@heritagepark.com", password]);
   adminCreated = true;
  }

  const contentCount = db.exec("SELECT COUNT(*) FROM page_contents");
  let contentSeeded = false;
  if (!contentCount[0]?.values[0]?.[0] || (contentCount[0].values[0][0] as number) === 0) {
   const defaults = [
    ["home", "hero_title", "A Place Worth Planning For", "text"],
    ["home", "hero_subtitle", "Plan ahead with dignity and peace of mind.", "text"],
    ["home", "hero_left_label", "Planning for the Future", "text"],
    ["home", "hero_right_label", "We Need Help Now", "text"],
    ["about", "title", "About Heritage Park", "text"],
    ["contact", "email", "sales@heritageparktaguig.com", "text"],
    ["contact", "phone", "0917 884 1009", "text"],
    ["footer", "address", "Heritage Park, Quezon City, Philippines", "text"],
   ];
   for (const [page, key, value, type] of defaults) {
    db.run("INSERT OR IGNORE INTO page_contents (page_name, section_key, content_value, content_type) VALUES (?, ?, ?, ?)", [page, key, value, type]);
   }
   contentSeeded = true;
  }

  saveDb();
  return NextResponse.json({
   success: true,
   admin_created: adminCreated,
   content_seeded: contentSeeded,
   login_hint: "Username: admin | Password: admin123",
  });
 } catch (err) {
  return NextResponse.json({ error: String(err) }, { status: 500 });
 }
}
