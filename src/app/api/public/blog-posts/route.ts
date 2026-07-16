import { NextRequest, NextResponse } from "next/server";
import { getAllPostsFromDb, getPostFromDb } from "@/lib/content";
import { getAllPosts, getPostBySlug, BlogPost } from "@/data/blog-posts";

function mergePosts(dbPosts: Awaited<ReturnType<typeof getAllPostsFromDb>>): BlogPost[] {
 const staticPosts = getAllPosts();
 const merged: BlogPost[] = [...staticPosts];

 for (const dbp of dbPosts) {
  const existing = merged.findIndex((p) => p.slug === dbp.slug);
  const post: BlogPost = {
   slug: dbp.slug,
   title: dbp.title,
   excerpt: dbp.excerpt,
   topicId: dbp.topic_id,
   topic: dbp.topic,
   lang: dbp.lang,
   image: dbp.image || "/images/blog-planning.jpg",
   readTime: dbp.read_time,
   content: dbp.content ? dbp.content.split("\n\n").filter(Boolean) : [],
   relatedSlugs: [],
   featured: Boolean(dbp.featured),
   fromDb: true,
  };
  if (existing >= 0) {
   merged[existing] = post;
  } else {
   merged.push(post);
  }
 }
 return merged;
}

export async function GET(req: NextRequest) {
 const { searchParams } = new URL(req.url);
 const slug = searchParams.get("slug");

 try {
  if (slug) {
   const dbPost = await getPostFromDb(slug);
   if (dbPost) {
    const merged = mergePosts([dbPost]);
    return NextResponse.json(merged[0]);
   }
   const staticPost = getPostBySlug(slug);
   if (staticPost) return NextResponse.json(staticPost);
   return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const dbPosts = await getAllPostsFromDb();
  const merged = mergePosts(dbPosts);
  return NextResponse.json(merged);
 } catch {
  const staticPosts = getAllPosts();
  return NextResponse.json(staticPosts);
 }
}
