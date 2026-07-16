import { getDb } from "./db";

export async function getPageContent(
 page: string,
 key: string,
 defaultValue = ""
): Promise<string> {
 try {
  const db = await getDb();
  const result = db.exec(
   "SELECT content_value FROM page_contents WHERE page_name = ? AND section_key = ?",
   [page, key]
  );
  if (result.length && result[0].values.length) {
   return (result[0].values[0][0] as string) || defaultValue;
  }
 } catch {
  // DB not available - return default
 }
 return defaultValue;
}

export interface DbBlogPost {
 id: number;
 slug: string;
 title: string;
 excerpt: string;
 content: string;
 image: string;
 topic_id: string;
 topic: string;
 lang: string;
 read_time: string;
 featured: number;
 published: number;
 created_at: string;
}

export async function getAllPostsFromDb(): Promise<DbBlogPost[]> {
 try {
  const db = await getDb();
  const result = db.exec(
   "SELECT * FROM blog_posts WHERE published = 1 ORDER BY created_at DESC"
  );
  if (!result.length) return [];
  const cols = result[0].columns;
  return result[0].values.map((row: unknown[]) => {
   const post: Record<string, unknown> = {};
   cols.forEach((col: string, i: number) => {
    post[col] = row[i];
   });
   return post as unknown as DbBlogPost;
  });
 } catch {
  return [];
 }
}

export async function getPostFromDb(
 slug: string
): Promise<DbBlogPost | null> {
 try {
  const db = await getDb();
  const result = db.exec(
   "SELECT * FROM blog_posts WHERE slug = ? AND published = 1",
   [slug]
  );
  if (!result.length || !result[0].values.length) return null;
  const cols = result[0].columns;
  const vals = result[0].values[0];
  const post: Record<string, unknown> = {};
  cols.forEach((col: string, i: number) => {
   post[col] = vals[i];
  });
  return post as unknown as DbBlogPost;
 } catch {
  return null;
 }
}

export async function getFeaturedPostsFromDb(): Promise<DbBlogPost[]> {
 try {
  const db = await getDb();
  const result = db.exec(
   "SELECT * FROM blog_posts WHERE published = 1 AND featured = 1 ORDER BY created_at DESC"
  );
  if (!result.length) return [];
  const cols = result[0].columns;
  return result[0].values.map((row: unknown[]) => {
   const post: Record<string, unknown> = {};
   cols.forEach((col: string, i: number) => {
    post[col] = row[i];
   });
   return post as unknown as DbBlogPost;
  });
 } catch {
  return [];
 }
}
