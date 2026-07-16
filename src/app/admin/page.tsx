"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
 const [stats, setStats] = useState({ pages: 0, posts: 0, media: 0, admins: 0 });

 useEffect(() => {
  Promise.all([
   fetch("/api/admin/page-content").then((r) => r.json()),
   fetch("/api/admin/blog-posts").then((r) => r.json()),
   fetch("/api/admin/media").then((r) => r.json()),
   fetch("/api/admin/admins").then((r) => r.json()),
  ]).then(([pages, posts, media, admins]) => {
   setStats({
    pages: Array.isArray(pages) ? pages.length : 0,
    posts: Array.isArray(posts) ? posts.length : 0,
    media: Array.isArray(media) ? media.length : 0,
    admins: Array.isArray(admins) ? admins.length : 0,
   });
  });
 }, []);

 const cards = [
  { label: "Page Contents", value: stats.pages, href: "/admin/page-content", color: "bg-[#1F3A2D]" },
  { label: "Blog Posts", value: stats.posts, href: "/admin/blog-posts", color: "bg-[#C89B3C]" },
  { label: "Media Files", value: stats.media, href: "/admin/media", color: "bg-[#718A5B]" },
  { label: "Admin Accounts", value: stats.admins, href: "/admin/admins", color: "bg-[#2E322B]" },
 ];

 return (
  <div>
   <h1 className="text-xl font-bold text-[#1F3A2D] mb-1" style={{ fontFamily: "var(--font-heading)" }}>Dashboard</h1>
   <p className="text-sm text-[#1F3A2D]/50 mb-6">Overview of your website content</p>

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
    {cards.map((card) => (
     <Link key={card.href} href={card.href} className="block">
      <div className="bg-white rounded-xl border border-[#ECE9E2] p-5 hover:shadow-md transition-shadow">
       <div className={`w-10 h-10 rounded-lg ${card.color} flex items-center justify-center text-white text-lg mb-3`}>
        {card.label === "Page Contents" ? "📄" : card.label === "Blog Posts" ? "✏" : card.label === "Media Files" ? "🖼" : "🔒"}
       </div>
       <p className="text-2xl font-bold text-[#1F3A2D]">{card.value}</p>
       <p className="text-xs text-[#1F3A2D]/50 mt-1">{card.label}</p>
      </div>
     </Link>
    ))}
   </div>

   <div className="bg-white rounded-xl border border-[#ECE9E2] p-5">
    <h2 className="text-sm font-bold text-[#1F3A2D] mb-3">Quick Actions</h2>
    <div className="flex flex-wrap gap-3">
     <Link href="/admin/page-content" className="px-4 py-2 bg-[#1F3A2D] text-white rounded-lg text-xs font-medium hover:bg-[#1F3A2D]/90 transition-colors">Edit Page Content</Link>
     <Link href="/admin/blog-posts/new" className="px-4 py-2 bg-[#C89B3C] text-white rounded-lg text-xs font-medium hover:bg-[#C89B3C]/90 transition-colors">New Blog Post</Link>
     <Link href="/admin/media" className="px-4 py-2 bg-[#718A5B] text-white rounded-lg text-xs font-medium hover:bg-[#718A5B]/90 transition-colors">Upload Media</Link>
    </div>
   </div>
  </div>
 );
}
