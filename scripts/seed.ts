import { getDb, saveDb } from "../src/lib/db";
import { hashPassword } from "../src/lib/auth";

async function seed() {
  const db = await getDb();

  const existing = db.exec("SELECT id FROM admins LIMIT 1");
  if (existing.length > 0 && existing[0].values.length > 0) {
    console.log("Admin already exists, skipping seed.");
    return;
  }

  const password = await hashPassword("admin123");
  db.run(
    "INSERT INTO admins (username, email, password) VALUES (?, ?, ?)",
    ["admin", "admin@heritagepark.com", password]
  );
  console.log("Default admin created: admin / admin123");

  const pages = [
    { page: "home", key: "hero_title", value: "A Place Worth Planning For", type: "text" },
    { page: "home", key: "hero_subtitle", value: "Plan ahead with dignity and peace of mind.", type: "text" },
    { page: "home", key: "hero_left_label", value: "Planning for the Future", type: "text" },
    { page: "home", key: "hero_right_label", value: "We Need Help Now", type: "text" },
    { page: "about", key: "title", value: "About Heritage Park", type: "text" },
    { page: "contact", key: "email", value: "sales@heritageparktaguig.com", type: "text" },
    { page: "contact", key: "phone", value: "0917 884 1009", type: "text" },
    { page: "footer", key: "address", value: "Heritage Park, Quezon City, Philippines", type: "text" },
  ];

  for (const p of pages) {
    db.run(
      "INSERT OR IGNORE INTO page_contents (page_name, section_key, content_value, content_type) VALUES (?, ?, ?, ?)",
      [p.page, p.key, p.value, p.type]
    );
  }
  console.log(`Seeded ${pages.length} page content entries.`);

  saveDb();
  console.log("Database seeded successfully.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
