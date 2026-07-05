"use client";

import { useEffect, useState, useCallback } from "react";

interface Admin {
  id: number;
  username: string;
  email: string;
  created_at: string;
}

export default function AdminsManager() {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [newAdmin, setNewAdmin] = useState({ username: "", email: "", password: "" });

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/admins");
    setAdmins(await res.json());
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/admins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAdmin),
    });
    if (res.ok) {
      setMessage({ type: "success", text: "Admin account created!" });
      setShowNew(false);
      setNewAdmin({ username: "", email: "", password: "" });
      load();
    } else {
      const d = await res.json();
      setMessage({ type: "error", text: d.error || "Failed to create" });
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this admin account?")) return;
    const res = await fetch("/api/admin/admins", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setMessage({ type: "success", text: "Admin deleted" });
      load();
    } else {
      const d = await res.json();
      setMessage({ type: "error", text: d.error || "Failed to delete" });
    }
  };

  if (loading) return <p className="text-sm text-[#1F3A2D]/50">Loading...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-[#1F3A2D]" style={{ fontFamily: "var(--font-heading)" }}>Admin Accounts</h1>
          <p className="text-sm text-[#1F3A2D]/50">Manage who can access the admin panel</p>
        </div>
        <button onClick={() => setShowNew(!showNew)} className="px-4 py-2 bg-[#1F3A2D] text-white rounded-lg text-xs font-medium hover:bg-[#1F3A2D]/90 transition-colors">
          {showNew ? "Cancel" : "+ Add Admin"}
        </button>
      </div>

      {message && (
        <div className={`mb-4 px-4 py-3 rounded-lg text-sm ${message.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-600 border border-red-200"}`}>
          {message.text}
          <button onClick={() => setMessage(null)} className="float-right font-bold">&times;</button>
        </div>
      )}

      {showNew && (
        <form onSubmit={handleCreate} className="bg-white rounded-xl border border-[#ECE9E2] p-4 mb-6 grid grid-cols-1 sm:grid-cols-4 gap-3">
          <input value={newAdmin.username} onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })} placeholder="Username" required className="px-3 py-2 border border-[#ECE9E2] rounded-lg text-xs" />
          <input value={newAdmin.email} onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })} type="email" placeholder="Email" required className="px-3 py-2 border border-[#ECE9E2] rounded-lg text-xs" />
          <input value={newAdmin.password} onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })} type="password" placeholder="Password" required className="px-3 py-2 border border-[#ECE9E2] rounded-lg text-xs" />
          <button type="submit" className="px-4 py-2 bg-[#C89B3C] text-white rounded-lg text-xs font-medium">Create</button>
        </form>
      )}

      <div className="bg-white rounded-xl border border-[#ECE9E2] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#ECE9E2]">
              <th className="text-left p-4 text-xs font-medium text-[#1F3A2D]/40">Username</th>
              <th className="text-left p-4 text-xs font-medium text-[#1F3A2D]/40 hidden sm:table-cell">Email</th>
              <th className="text-left p-4 text-xs font-medium text-[#1F3A2D]/40 hidden md:table-cell">Created</th>
              <th className="text-right p-4 text-xs font-medium text-[#1F3A2D]/40">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id} className="border-b border-[#ECE9E2] last:border-0">
                <td className="p-4"><span className="text-sm text-[#1F3A2D]">{admin.username}</span></td>
                <td className="p-4 hidden sm:table-cell"><span className="text-xs text-[#1F3A2D]/60">{admin.email}</span></td>
                <td className="p-4 hidden md:table-cell"><span className="text-xs text-[#1F3A2D]/40">{new Date(admin.created_at).toLocaleDateString()}</span></td>
                <td className="p-4 text-right">
                  <button onClick={() => handleDelete(admin.id)} className="text-xs text-red-400 hover:text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
