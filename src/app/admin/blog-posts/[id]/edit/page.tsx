"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditBlogPost() {
  const router = useRouter();
  const params = useParams();
  const [form, setForm] = useState({
    id: 0,
    slug: "",
    title: "",
    excerpt: "",
    content: "",
    image: "",
    topic_id: "",
    topic: "",
    lang: "EN",
    read_time: "",
    featured: false,
    published: true,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/admin/blog-posts?id=${params.id}`)
      .then((r) => r.json())
      .then((data) => {
        setForm({
          id: data.id,
          slug: data.slug,
          title: data.title,
          excerpt: data.excerpt || "",
          content: data.content || "",
          image: data.image || "",
          topic_id: data.topic_id || "",
          topic: data.topic || "",
          lang: data.lang || "EN",
          read_time: data.read_time || "",
          featured: Boolean(data.featured),
          published: Boolean(data.published),
        });
        setLoading(false);
      })
      .catch(() => { setError("Failed to load post"); setLoading(false); });
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    const res = await fetch("/api/admin/blog-posts", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) router.push("/admin/blog-posts");
    else {
      const d = await res.json();
      setError(d.error || "Failed to save");
    }
    setSaving(false);
  };

  if (loading) return <p className="text-sm text-[#1F3A2D]/50">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-xl font-bold text-[#1F3A2D] mb-6" style={{ fontFamily: "var(--font-heading)" }}>Edit Blog Post</h1>

      {error && <div className="mb-4 px-4 py-3 rounded-lg text-sm bg-red-50 text-red-600 border border-red-200">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-[#ECE9E2] p-6 space-y-4">
        <div>
          <label className="block text-xs font-medium text-[#1F3A2D]/60 mb-1.5">Title *</label>
          <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required className="w-full px-3 py-2.5 border border-[#ECE9E2] rounded-lg text-sm focus:outline-none focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C]" />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#1F3A2D]/60 mb-1.5">Slug</label>
          <input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full px-3 py-2.5 border border-[#ECE9E2] rounded-lg text-sm text-[#1F3A2D]/60 focus:outline-none focus:border-[#C89B3C]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-[#1F3A2D]/60 mb-1.5">Topic</label>
            <input value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })} className="w-full px-3 py-2.5 border border-[#ECE9E2] rounded-lg text-xs focus:outline-none focus:border-[#C89B3C]" />
          </div>
          <div>
            <label className="block text-xs font-medium text-[#1F3A2D]/60 mb-1.5">Topic ID</label>
            <input value={form.topic_id} onChange={(e) => setForm({ ...form, topic_id: e.target.value })} className="w-full px-3 py-2.5 border border-[#ECE9E2] rounded-lg text-xs focus:outline-none focus:border-[#C89B3C]" />
          </div>
          <div>
            <label className="block text-xs font-medium text-[#1F3A2D]/60 mb-1.5">Read Time</label>
            <input value={form.read_time} onChange={(e) => setForm({ ...form, read_time: e.target.value })} className="w-full px-3 py-2.5 border border-[#ECE9E2] rounded-lg text-xs focus:outline-none focus:border-[#C89B3C]" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#1F3A2D]/60 mb-1.5">Image Path</label>
          <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="w-full px-3 py-2.5 border border-[#ECE9E2] rounded-lg text-xs focus:outline-none focus:border-[#C89B3C]" />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#1F3A2D]/60 mb-1.5">Excerpt</label>
          <textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} rows={2} className="w-full px-3 py-2.5 border border-[#ECE9E2] rounded-lg text-xs focus:outline-none focus:border-[#C89B3C]" />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#1F3A2D]/60 mb-1.5">Content (HTML)</label>
          <textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} rows={12} className="w-full px-3 py-2.5 border border-[#ECE9E2] rounded-lg text-xs font-mono focus:outline-none focus:border-[#C89B3C]" />
        </div>

        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="rounded border-[#ECE9E2]" />
            <span className="text-xs text-[#1F3A2D]/80">Featured</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} className="rounded border-[#ECE9E2]" />
            <span className="text-xs text-[#1F3A2D]/80">Published</span>
          </label>
        </div>

        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={saving} className="px-6 py-2.5 bg-[#1F3A2D] text-white rounded-lg text-sm font-medium hover:bg-[#1F3A2D]/90 disabled:opacity-50">
            {saving ? "Saving..." : "Save Changes"}
          </button>
          <button type="button" onClick={() => router.push("/admin/blog-posts")} className="px-6 py-2.5 border border-[#ECE9E2] rounded-lg text-sm text-[#1F3A2D]/60 hover:bg-[#F6F1E7]">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
