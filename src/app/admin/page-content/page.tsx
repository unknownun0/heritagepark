"use client";

import { useEffect, useState, useCallback } from "react";

interface PageContent {
  id: number;
  page_name: string;
  section_key: string;
  content_value: string | null;
  content_type: string;
}

export default function PageContentManager() {
  const [items, setItems] = useState<PageContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [newItem, setNewItem] = useState({ page_name: "", section_key: "", content_value: "", content_type: "text" });
  const [showNew, setShowNew] = useState(false);

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/page-content");
    setItems(await res.json());
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const handleUpdate = async (id: number) => {
    const res = await fetch("/api/admin/page-content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, content_value: editValue }),
    });
    if (res.ok) {
      setMessage({ type: "success", text: "Content updated successfully!" });
      setEditing(null);
      load();
    } else {
      setMessage({ type: "error", text: "Failed to update" });
    }
  };

  const handleCreate = async () => {
    if (!newItem.page_name || !newItem.section_key) return;
    const res = await fetch("/api/admin/page-content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });
    if (res.ok) {
      setMessage({ type: "success", text: "Content created!" });
      setShowNew(false);
      setNewItem({ page_name: "", section_key: "", content_value: "", content_type: "text" });
      load();
    } else {
      setMessage({ type: "error", text: "Failed to create" });
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this content entry?")) return;
    const res = await fetch("/api/admin/page-content", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setMessage({ type: "success", text: "Deleted!" });
      load();
    }
  };

  const pages = [...new Set(items.map((i) => i.page_name))];

  if (loading) return <p className="text-sm text-[#1F3A2D]/50">Loading...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-[#1F3A2D]" style={{ fontFamily: "var(--font-heading)" }}>Page Content</h1>
          <p className="text-sm text-[#1F3A2D]/50">Manage all text content across the website</p>
        </div>
        <button onClick={() => setShowNew(!showNew)} className="px-4 py-2 bg-[#1F3A2D] text-white rounded-lg text-xs font-medium hover:bg-[#1F3A2D]/90 transition-colors">
          {showNew ? "Cancel" : "+ Add New"}
        </button>
      </div>

      {message && (
        <div className={`mb-4 px-4 py-3 rounded-lg text-sm ${message.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-600 border border-red-200"}`}>
          {message.text}
          <button onClick={() => setMessage(null)} className="float-right font-bold">&times;</button>
        </div>
      )}

      {showNew && (
        <div className="bg-white rounded-xl border border-[#ECE9E2] p-4 mb-6 grid grid-cols-1 sm:grid-cols-4 gap-3">
          <input value={newItem.page_name} onChange={(e) => setNewItem({ ...newItem, page_name: e.target.value })} placeholder="Page name (e.g., home)" className="px-3 py-2 border border-[#ECE9E2] rounded-lg text-xs" />
          <input value={newItem.section_key} onChange={(e) => setNewItem({ ...newItem, section_key: e.target.value })} placeholder="Section key (e.g., hero_title)" className="px-3 py-2 border border-[#ECE9E2] rounded-lg text-xs" />
          <input value={newItem.content_value} onChange={(e) => setNewItem({ ...newItem, content_value: e.target.value })} placeholder="Content value" className="px-3 py-2 border border-[#ECE9E2] rounded-lg text-xs sm:col-span-1" />
          <button onClick={handleCreate} className="px-4 py-2 bg-[#C89B3C] text-white rounded-lg text-xs font-medium">Save</button>
        </div>
      )}

      {pages.map((page) => (
        <div key={page} className="mb-6">
          <h2 className="text-xs font-bold text-[#1F3A2D]/40 uppercase tracking-wider mb-3">{page}</h2>
          <div className="bg-white rounded-xl border border-[#ECE9E2] overflow-hidden">
            {items.filter((i) => i.page_name === page).map((item) => (
              <div key={item.id} className="flex items-start gap-3 p-4 border-b border-[#ECE9E2] last:border-0">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <code className="text-xs bg-[#F6F1E7] px-2 py-0.5 rounded text-[#1F3A2D]/60 font-mono">{item.section_key}</code>
                    <span className="text-[10px] text-[#1F3A2D]/30 uppercase">{item.content_type}</span>
                  </div>
                  {editing === item.id ? (
                    <div className="flex gap-2">
                      {item.content_type === "text" || item.content_type === "html" ? (
                        <textarea value={editValue} onChange={(e) => setEditValue(e.target.value)} rows={2} className="flex-1 px-3 py-2 border border-[#C89B3C] rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#C89B3C]" />
                      ) : (
                        <input value={editValue} onChange={(e) => setEditValue(e.target.value)} className="flex-1 px-3 py-2 border border-[#C89B3C] rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#C89B3C]" />
                      )}
                      <button onClick={() => handleUpdate(item.id)} className="px-3 py-1.5 bg-[#C89B3C] text-white rounded-lg text-xs">Save</button>
                      <button onClick={() => setEditing(null)} className="px-3 py-1.5 border border-[#ECE9E2] rounded-lg text-xs text-[#1F3A2D]/60">Cancel</button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-[#1F3A2D] truncate">{item.content_value || <span className="italic text-[#1F3A2D]/30">Empty</span>}</p>
                      <button onClick={() => { setEditing(item.id); setEditValue(item.content_value || ""); }} className="text-xs text-[#C89B3C] hover:underline shrink-0">Edit</button>
                      <button onClick={() => handleDelete(item.id)} className="text-xs text-red-400 hover:text-red-600 shrink-0">Delete</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
