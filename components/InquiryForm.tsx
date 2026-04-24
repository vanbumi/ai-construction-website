"use client";
import { useState } from "react";

// ⚠️ GANTI DENGAN URL APPS SCRIPT ANDA NANTI
// const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbz81BYFooQW-q7i_UEn3prX2vSPDsX5GFmHXxJgKvWYzV_dZIpe0GpNgyJmBPCeH4Jg/exec";

// Ambil dari environment variable
const GOOGLE_SHEETS_WEBHOOK_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || "";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    solution: "quantity-surveyor",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      setStatus("success");
      setFormData({ name: "", company: "", email: "", phone: "", solution: "quantity-surveyor", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Nama Lengkap *"
          required
          className="w-full px-4 py-3 rounded-lg text-slate-900 bg-white border border-slate-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Perusahaan *"
          required
          className="w-full px-4 py-3 rounded-lg text-slate-900 bg-white border border-slate-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="email"
          placeholder="Email *"
          required
          className="w-full px-4 py-3 rounded-lg text-slate-900 bg-white border border-slate-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="No. WhatsApp *"
          required
          className="w-full px-4 py-3 rounded-lg text-slate-900 bg-white border border-slate-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <select
        className="w-full px-4 py-3 rounded-lg text-slate-900 bg-white border border-slate-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
        value={formData.solution}
        onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
      >
        <option value="quantity-surveyor">📊 AI Quantity Surveyor (Estimasi RAB)</option>
        <option value="legal">📄 AI Legal Construction (Review Kontrak)</option>
        <option value="site-supervisor">🎥 AI Site Supervisor (Monitoring Proyek)</option>
        <option value="report">📝 AI Report Generator (Laporan Otomatis)</option>
        <option value="all">🔧 Semua Solusi (Konsultasi Umum)</option>
      </select>
      <textarea
        placeholder="Ceritakan kebutuhan proyek Anda... (contoh: proyek apartemen 10 lantai, butuh estimasi cepat)"
        rows={3}
        className="w-full px-4 py-3 rounded-lg text-slate-900 bg-white border border-slate-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Mengirim..." : "Minta Demo Sekarang →"}
      </button>
      {status === "success" && (
        <p className="text-green-600 text-center text-sm bg-green-50 p-2 rounded">
          ✅ Terima kasih! Tim kami akan menghubungi maksimal 1x24 jam via WhatsApp/Email.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center text-sm bg-red-50 p-2 rounded">
          ❌ Gagal mengirim. Silakan hubungi WhatsApp <strong>0812-3456-7890</strong> langsung.
        </p>
      )}
    </form>
  );
}