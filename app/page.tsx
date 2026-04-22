import Image from "next/image";
import InquiryForm from "@/components/InquiryForm";
import SolutionCard from "@/components/SolutionCard";
import { 
  CalculatorIcon, 
  DocumentCheckIcon, 
  CameraIcon, 
  DocumentTextIcon 
} from "@heroicons/react/24/outline";

export default function Home() {
  const solutions = [
    {
      title: "AI Quantity Surveyor",
      subtitle: "Otomasi Estimasi Biaya",
      icon: <CalculatorIcon className="w-8 h-8" />,
      description: "Computer Vision untuk memindai gambar teknis (PDF/CAD) dan mengekstrak volume material (besi, semen, bata) ke format Excel/RAB. Pemangkasan waktu dari 3-5 hari menjadi 15 menit.",
      painPoint: "Quantity Surveyor manual butuh 3-5 hari untuk satu gambar teknis"
    },
    {
      title: "AI Legal Construction",
      subtitle: "Review Kontrak & Kepatuhan",
      icon: <DocumentCheckIcon className="w-8 h-8" />,
      description: "LLM Agent yang dilatih dengan standar kontrak FIDIC dan aturan PUPR. Mendeteksi pasal merugikan, risiko keterlambatan, dan poin K3 yang terlewat.",
      painPoint: "Kontrak 200+ halaman, tim hukum kewalahan membaca satu per satu"
    },
    {
      title: "AI Site Supervisor",
      subtitle: "Monitoring Proyek via Visi Komputer",
      icon: <CameraIcon className="w-8 h-8" />,
      description: "Analisis foto/drone untuk deteksi APD (helm, rompi), progres pemasangan dinding vs jadwal Gantt Chart, dan laporan anomali otomatis.",
      painPoint: "Site engineer keliling lapangan 2-3 jam setiap hari hanya untuk inspeksi"
    },
    {
      title: "AI Report Generator",
      subtitle: "Laporan Harian/Mingguan Otomatis",
      icon: <DocumentTextIcon className="w-8 h-8" />,
      description: "Input suara atau foto nota material, AI menyusun laporan naratif profesional, rapi, dan siap kirim ke klien/manajemen.",
      painPoint: "Insinyur habis 1-2 jam per hari hanya untuk mengetik laporan"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-block bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium mb-6">
              Solusi AI untuk Konstruksi Indonesia
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Otomasi Aliran Data & Dokumen<br />
              <span className="text-emerald-400">Proyek Konstruksi Anda</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Pangkas waktu estimasi RAB dari 3 hari menjadi 15 menit. 
              Deteksi risiko kontrak otomatis. Pantau progres lapangan tanpa keliling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#inquiry" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition text-center">
                Minta Demo Sekarang →
              </a>
              <a href="#solutions" className="border border-slate-600 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg transition text-center">
                Lihat Solusi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              📋 Masalah yang Sering Terjadi di Lapangan
            </h2>
            <p className="text-slate-600 text-lg">
              Kontraktor Indonesia kehilangan waktu dan uang karena proses manual yang lambat
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <div className="text-3xl mb-2">⏱️</div>
              <h3 className="font-bold text-slate-900">Estimasi Volume</h3>
              <p className="text-slate-600 text-sm">3-5 hari untuk hitung material dari gambar teknis</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <div className="text-3xl mb-2">📄</div>
              <h3 className="font-bold text-slate-900">Review Kontrak</h3>
              <p className="text-slate-600 text-sm">Tim hukum kewalahan baca kontrak 200+ halaman</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <div className="text-3xl mb-2">📸</div>
              <h3 className="font-bold text-slate-900">Monitoring Lapangan</h3>
              <p className="text-slate-600 text-sm">Site engineer habis 2-3 jam hanya untuk inspeksi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              🤖 Solusi AI untuk Setiap Celah Kerja
            </h2>
            <p className="text-slate-600 text-lg">
              Otomasi yang bisa langsung terintegrasi dengan alur kerja Anda saat ini
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((sol, idx) => (
              <SolutionCard key={idx} {...sol} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              🚀 Cara Kerja
            </h2>
            <p className="text-slate-600 text-lg">
              Cukup 3 langkah, tim kami yang akan membantu implementasi
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-xl mb-2">Kirim Data Uji</h3>
              <p className="text-slate-600">Gambar teknis, kontrak, atau data lapangan Anda</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-xl mb-2">Kami Proses dengan AI</h3>
              <p className="text-slate-600">Tim kami jalankan model AI untuk data Anda</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-xl mb-2">Lihat Hasil & Konsultasi</h3>
              <p className="text-slate-600">Demo interaktif dan rekomendasi implementasi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-slate-900 rounded-2xl p-6 md:p-10 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              📞 Tertarik Mengotomasi Proyek Anda?
            </h2>
            <p className="text-slate-300 text-center mb-8">
              Isi form berikut, tim kami akan menghubungi untuk jadwal demo
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 py-8">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© 2025 AI Construction Solutions | Konsultan Otomasi Data untuk Kontraktor Indonesia</p>
          <p className="mt-2">📧 Email: hello@aiconstruksi.id | 📱 WhatsApp: 0812-3456-7890</p>
        </div>
      </footer>
    </main>
  );
}