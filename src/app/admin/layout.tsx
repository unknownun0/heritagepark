"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "◈" },
  { href: "/admin/page-content", label: "Page Content", icon: "📄" },
  { href: "/admin/blog-posts", label: "Blog Posts", icon: "✏" },
  { href: "/admin/media", label: "Media", icon: "🖼" },
  { href: "/admin/admins", label: "Admins", icon: "🔒" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/admin/login") { setAuthed(false); return; }
    fetch("/api/admin/check")
      .then((r) => r.json())
      .then((d) => { if (!d.authenticated) router.push("/admin/login"); else setAuthed(true); })
      .catch(() => router.push("/admin/login"));
  }, [pathname, router]);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  if (pathname === "/admin/login") return <>{children}</>;
  if (authed === null) return <div className="min-h-screen bg-[#F6F1E7] flex items-center justify-center"><p className="text-[#1F3A2D]">Checking authorization...</p></div>;
  if (!authed) return null;

  return (
    <div className="min-h-screen bg-[#F6F1E7] flex">
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#1F3A2D] text-white transform transition-transform lg:translate-x-0 lg:static lg:inset-auto ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-5 border-b border-white/10">
          <h1 className="text-lg font-bold tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>Heritage Park</h1>
          <p className="text-xs text-white/50 mt-1">Admin Panel</p>
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href)) ? "bg-white/15 text-gold" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-white/50 hover:bg-white/10 hover:text-white w-full transition-colors">
            <span>🚪</span> Logout
          </button>
        </div>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white border-b border-[#ECE9E2] px-4 lg:px-8 py-3 flex items-center gap-4 sticky top-0 z-30">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-[#1F3A2D] text-xl p-1">☰</button>
          <div className="flex-1" />
          <a href="/" target="_blank" className="text-xs text-[#1F3A2D]/50 hover:text-[#1F3A2D] underline underline-offset-2">View Site →</a>
        </header>
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
