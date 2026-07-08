"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewBlogPost() {
  const router = useRouter();
  const [form, setForm] = useState({
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
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const handleTitleChange = (title: string) => {
    setForm((f) => ({ ...f, title, slug: generateSlug(title) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    const res = await fetch("/api/admin/blog-posts", {
      method: "POST",
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

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-xl font-bold text-[#1F3A2D] mb-6" style={{ fontFamily: "var(--font-heading)" }}>New Blog Post</h1>

      {error && <div className="mb-4 px-4 py-3 rounded-lg text-sm bg-red-50 text-red-600 border border-red-200">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-[#ECE9E2] p-6 space-y-4">
        <div>
          <label className="block text-xs font-medium text-[#1F3A2D]/60 mb-1.5">Title *</label>
          <input value={form.title} onChange={(e) => handleTitleChange(e.target.value)} required className="w-full px-3 py-2.5 border border-[#ECE9E2] rounded-lg text-sm focus:outline-none focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C]" />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#1F3A2D]/60 mb-1.5">Slug</label>
          <input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full px-3 py-2.5 border border-[#ECE9E2] rounded-lg text-sm text-[#1F3A2D]/60 focus:outline-none focus:border-[#C89B3C]" />
          <p className="text-[10px] text-[#1F3A2D]/30 mt-1">Auto generated from title, but editable</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-[#1F3A2D]/60 mb-1.5">Topic</label>
            <input value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })} placeholder="e.g., Planning Basics" className="w-full px-3 py-2.5 border border-[#ECE9E2] rounded-lg text-xs focus:outline-none focus:border-[#C89B3C]" />
          </div>
          <div>
            <label className="block text-xs font-medium text-[#1F3A2D]/60 mb-1.5">Topic ID</label>
            <input value={form.topic_id} onChange={(e) => setForm({ ...form, topic_id: e.target.value })} className="w-full px-3 py-2.5 border border-[#ECE9E2] rounded-lg text-xs focus:outline-none focus:border-[#C89B3C]" />
          </div>
          <div>
            <label className="block text-xs font-medium text-[#1F3A2D]/60 mb-1.5">Read Time</label>
            <input value={form.read_time} onChange={(e) => setForm({ ...form, read_time: e.target.value })} placeholder="e.g., 5 min" className="w-full px-3 py-2.5 border border-[#ECE9E2] rounded-lg text-xs focus:outline-none focus:border-[#C89B3C]" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#1F3A2D]/60 mb-1.5">Image Path</label>
          <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="/images/blog-post.jpg" className="w-full px-3 py-2.5 border border-[#ECE9E2] rounded-lg text-xs focus:outline-none focus:border-[#C89B3C]" />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#1F3A2D]/60 mb-1.5">Excerpt</label>
          <textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} rows={2} className="w-full px-3 py-2.5 border border-[#ECE9E2] rounded-lg text-xs focus:outline-none focus:border-[#C89B3C]" />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#1F3A2D]/60 mb-1.5">Content (HTML)</label>
          <textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} rows={12} className="w-full px-3 py-2.5 border border-[#ECE9E2] rounded-lg text-xs font-mono focus:outline-none focus:border-[#C89B3C]" />
          <p className="text-[10px] text-[#1F3A2D]/30 mt-1">You can use HTML tags for formatting (&lt;h2&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;ul&gt;, etc.)</p>
        </div>

        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="rounded border-[#ECE9E2]" />
            <span className="text-xs text-[#1F3A2D]/80">Featured post</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} className="rounded border-[#ECE9E2]" />
            <span className="text-xs text-[#1F3A2D]/80">Published</span>
          </label>
        </div>

        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={saving} className="px-6 py-2.5 bg-[#1F3A2D] text-white rounded-lg text-sm font-medium hover:bg-[#1F3A2D]/90 transition-colors disabled:opacity-50">
            {saving ? "Saving..." : "Create Post"}
          </button>
          <button type="button" onClick={() => router.push("/admin/blog-posts")} className="px-6 py-2.5 border border-[#ECE9E2] rounded-lg text-sm text-[#1F3A2D]/60 hover:bg-[#F6F1E7] transition-colors">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
