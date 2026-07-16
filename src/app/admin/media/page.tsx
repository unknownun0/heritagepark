"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface MediaItem {
 id: number;
 filename: string;
 original_name: string;
 alt_text: string;
 file_path: string;
 file_size: number;
 mime_type: string;
 created_at: string;
}

export default function MediaManager() {
 const [items, setItems] = useState<MediaItem[]>([]);
 const [loading, setLoading] = useState(true);
 const [uploading, setUploading] = useState(false);
 const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
 const [editAlt, setEditAlt] = useState<{ id: number; alt: string } | null>(null);
 const fileRef = useRef<HTMLInputElement>(null);

 const load = useCallback(async () => {
  const res = await fetch("/api/admin/media");
  setItems(await res.json());
  setLoading(false);
 }, []);

 useEffect(() => { load(); }, [load]);

 const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;
  setUploading(true);
  setMessage(null);
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch("/api/admin/media", { method: "POST", body: formData });
  if (res.ok) {
   setMessage({ type: "success", text: "File uploaded!" });
   load();
  } else {
   const err = await res.json();
   setMessage({ type: "error", text: err.error || "Upload failed" });
  }
  setUploading(false);
  if (fileRef.current) fileRef.current.value = "";
 };

 const handleDelete = async (id: number) => {
  if (!confirm("Delete this file permanently?")) return;
  const res = await fetch(`/api/admin/media/${id}`, { method: "DELETE" });
  if (res.ok) {
   setMessage({ type: "success", text: "File deleted" });
   load();
  }
 };

 const handleAltUpdate = async (id: number, alt_text: string) => {
  const res = await fetch(`/api/admin/media/${id}`, {
   method: "PUT",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({ alt_text }),
  });
  if (res.ok) {
   setEditAlt(null);
   setMessage({ type: "success", text: "Alt text updated" });
   load();
  }
 };

 const formatBytes = (bytes: number) => {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
 };

 if (loading) return <p className="text-sm text-[#1F3A2D]/50">Loading...</p>;

 return (
  <div>
   <div className="flex items-center justify-between mb-6">
    <div>
     <h1 className="text-xl font-bold text-[#1F3A2D]" style={{ fontFamily: "var(--font-heading)" }}>Media Library</h1>
     <p className="text-sm text-[#1F3A2D]/50">Upload and manage images</p>
    </div>
    <div>
     <input type="file" ref={fileRef} onChange={handleUpload} accept="image/*" className="hidden" />
     <button onClick={() => fileRef.current?.click()} disabled={uploading} className="px-4 py-2 bg-[#1F3A2D] text-white rounded-lg text-xs font-medium hover:bg-[#1F3A2D]/90 transition-colors disabled:opacity-50">
      {uploading ? "Uploading..." : "+ Upload Image"}
     </button>
    </div>
   </div>

   {message && (
    <div className={`mb-4 px-4 py-3 rounded-lg text-sm ${message.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-600 border border-red-200"}`}>
     {message.text}
     <button onClick={() => setMessage(null)} className="float-right font-bold">&times;</button>
    </div>
   )}

   {items.length === 0 ? (
    <div className="bg-white rounded-xl border border-[#ECE9E2] p-8 text-center">
     <p className="text-sm text-[#1F3A2D]/40">No media files yet. Click "Upload Image" to add one.</p>
    </div>
   ) : (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
     {items.map((item) => (
      <div key={item.id} className="bg-white rounded-xl border border-[#ECE9E2] overflow-hidden group">
       <div className="aspect-square bg-[#F6F1E7] relative">
        <img src={item.file_path} alt={item.alt_text || item.original_name} className="w-full h-full object-cover" />
       </div>
       <div className="p-3">
        <p className="text-xs text-[#1F3A2D] truncate" title={item.original_name}>{item.original_name}</p>
        <p className="text-[10px] text-[#1F3A2D]/40 mt-0.5">{formatBytes(item.file_size)}</p>
        {editAlt?.id === item.id ? (
         <div className="mt-2 flex gap-1">
          <input value={editAlt.alt} onChange={(e) => setEditAlt({ ...editAlt, alt: e.target.value })} className="flex-1 px-2 py-1 border border-[#C89B3C] rounded text-[10px] focus:outline-none" placeholder="Alt text" autoFocus />
          <button onClick={() => handleAltUpdate(item.id, editAlt.alt)} className="px-2 py-1 bg-[#C89B3C] text-white rounded text-[10px]">✓</button>
         </div>
        ) : (
         <button onClick={() => setEditAlt({ id: item.id, alt: item.alt_text })} className="mt-2 text-[10px] text-[#1F3A2D]/40 hover:text-[#C89B3C]">Add alt text</button>
        )}
        <button onClick={() => handleDelete(item.id)} className="mt-1 text-[10px] text-red-400 hover:text-red-600 block opacity-0 group-hover:opacity-100 transition-opacity">Delete</button>
       </div>
      </div>
     ))}
    </div>
   )}
  </div>
 );
}
