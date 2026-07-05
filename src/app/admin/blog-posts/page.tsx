"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  topic: string;
  featured: number;
  published: number;
  created_at: string;
}

export default function BlogPostsList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/blog-posts");
    setPosts(await res.json());
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this blog post permanently?")) return;
    const res = await fetch("/api/admin/blog-posts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setMessage({ type: "success", text: "Post deleted" });
      load();
    } else {
      setMessage({ type: "error", text: "Failed to delete" });
    }
  };

  if (loading) return <p className="text-sm text-[#1F3A2D]/50">Loading...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-[#1F3A2D]" style={{ fontFamily: "var(--font-heading)" }}>Blog Posts</h1>
          <p className="text-sm text-[#1F3A2D]/50">Manage articles and announcements</p>
        </div>
        <Link href="/admin/blog-posts/new" className="px-4 py-2 bg-[#1F3A2D] text-white rounded-lg text-xs font-medium hover:bg-[#1F3A2D]/90 transition-colors">
          + New Post
        </Link>
      </div>

      {message && (
        <div className={`mb-4 px-4 py-3 rounded-lg text-sm ${message.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-600 border border-red-200"}`}>
          {message.text}
          <button onClick={() => setMessage(null)} className="float-right font-bold">&times;</button>
        </div>
      )}

      {posts.length === 0 ? (
        <div className="bg-white rounded-xl border border-[#ECE9E2] p-8 text-center">
          <p className="text-sm text-[#1F3A2D]/40">No blog posts yet.</p>
          <Link href="/admin/blog-posts/new" className="text-sm text-[#C89B3C] hover:underline mt-2 inline-block">Create your first post →</Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-[#ECE9E2] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#ECE9E2]">
                <th className="text-left p-4 text-xs font-medium text-[#1F3A2D]/40">Title</th>
                <th className="text-left p-4 text-xs font-medium text-[#1F3A2D]/40 hidden sm:table-cell">Topic</th>
                <th className="text-left p-4 text-xs font-medium text-[#1F3A2D]/40 hidden md:table-cell">Date</th>
                <th className="text-left p-4 text-xs font-medium text-[#1F3A2D]/40">Status</th>
                <th className="text-right p-4 text-xs font-medium text-[#1F3A2D]/40">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-[#ECE9E2] last:border-0 hover:bg-[#F6F1E7]/50">
                  <td className="p-4">
                    <p className="text-sm font-medium text-[#1F3A2D]">{post.title}</p>
                    <p className="text-xs text-[#1F3A2D]/40 mt-0.5">/{post.slug}</p>
                  </td>
                  <td className="p-4 hidden sm:table-cell"><span className="text-xs text-[#1F3A2D]/60">{post.topic || "—"}</span></td>
                  <td className="p-4 hidden md:table-cell"><span className="text-xs text-[#1F3A2D]/40">{new Date(post.created_at).toLocaleDateString()}</span></td>
                  <td className="p-4">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${post.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {post.published ? "Published" : "Draft"}
                    </span>
                    {post.featured ? <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] ml-1">Featured</span> : null}
                  </td>
                  <td className="p-4 text-right">
                    <Link href={`/admin/blog-posts/${post.id}/edit`} className="text-xs text-[#C89B3C] hover:underline mr-3">Edit</Link>
                    <button onClick={() => handleDelete(post.id)} className="text-xs text-red-400 hover:text-red-600">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
