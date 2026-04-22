// app/page.tsx - VERSI MARKETING LENGKAP
import InquiryForm from "@/components/InquiryForm";
import SolutionCard from "@/components/SolutionCard";
import { 
  CalculatorIcon, 
  DocumentCheckIcon, 
  CameraIcon, 
  DocumentTextIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/outline";

export default function Home() {
  const solutions = [
    {
      title: "AI Quantity Surveyor",
      subtitle: "Otomasi Estimasi Biaya & Volume Material",
      icon: <CalculatorIcon className="w-8 h-8" />,
      description: "Teknologi Computer Vision yang mampu memindai gambar teknis (PDF, CAD, atau scan) dan secara otomatis mengekstrak volume material seperti besi, semen, bata, pasir, dan kerikil. Hasil langsung terintegrasi ke format Excel/RAB standar SNI. Kesalahan perhitungan manual bisa mencapai 15-20%, AI kami mengurangi error hingga <3%.",
      painPoint: "QS manual butuh 3-5 hari per gambar, rawan kesalahan hitung volume"
    },
    {
      title: "AI Legal Construction",
      subtitle: "Review Kontrak & Kepatuhan Regulasi",
      icon: <DocumentCheckIcon className="w-8 h-8" />,
      description: "LLM Agent yang dilatih khusus dengan ribuan dokumen kontrak konstruksi, termasuk standar FIDIC, kontrak Kementerian PUPR, dan regulasi K3 terbaru. AI mendeteksi pasal-pasal berisiko, klausa merugikan, dan poin kepatuhan yang sering terlewat. Review kontrak 200+ halaman selesai dalam <10 menit.",
      painPoint: "Tim hukum kewalahan review kontrak tebal, banyak klausa jebakan"
    },
    {
      title: "AI Site Supervisor",
      subtitle: "Monitoring Proyek via Visi Komputer",
      icon: <CameraIcon className="w-8 h-8" />,
      description: "Analisis otomatis dari foto drone atau CCTV lapangan. AI mampu: (1) Deteksi APD (helm, rompi, sepatu safety) dengan akurasi 95%, (2) Hitung progres pemasangan dinding, bekisting, atau pengecoran dibanding jadwal Gantt Chart, (3) Identifikasi area yang tertinggal dari target. Laporan anomali dikirim real-time ke WhatsApp Site Manager.",
      painPoint: "Site engineer keliling lapangan 2-3 jam/hari, progres sulit diukur objektif"
    },
    {
      title: "AI Report Generator",
      subtitle: "Laporan Harian/Mingguan Otomatis",
      icon: <DocumentTextIcon className="w-8 h-8" />,
      description: "Cukup rekam suara atau foto nota material, AI menyusun laporan naratif profesional lengkap dengan: volume pekerjaan, material terpakai, kendala lapangan, dan rekomendasi tindak lanjut. Laporan siap kirim ke klien atau manajemen dalam format PDF/Word. Hemat 1-2 jam per hari dari pekerjaan administratif.",
      painPoint: "Insinyur habis 1-2 jam/hari hanya untuk mengetik laporan manual"
    }
  ];

  const stats = [
    { icon: <ClockIcon className="w-6 h-6" />, value: "75%", label: "Waktu Estimasi" },
    { icon: <CurrencyDollarIcon className="w-6 h-6" />, value: "15-20%", label: "Penghematan Biaya" },
    { icon: <ChartBarIcon className="w-6 h-6" />, value: "95%", label: "Akurasi Deteksi" },
    { icon: <ShieldCheckIcon className="w-6 h-6" />, value: "50+", label: "Proyek Telah Terbantu" }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Lebih Kuat */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              🚀 Untuk Kontraktor Skala Menengah & Besar di Indonesia
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Otomasi Aliran Data & Dokumen
              <span className="text-emerald-400 block mt-2">Proyek Konstruksi Anda</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Pangkas waktu estimasi RAB dari 3 hari menjadi 15 menit. 
              Deteksi risiko kontrak otomatis. Pantau progres lapangan tanpa keliling.
              <span className="block text-emerald-400 mt-2 font-medium">Gratis demo dengan data proyek Anda sendiri.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#inquiry" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg transition text-center text-lg">
                Minta Demo Gratis →
              </a>
              <a href="#solutions" className="border border-slate-600 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg transition text-center text-lg">
                Lihat 4 Solusi AI
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistik - Social Proof */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="flex justify-center text-emerald-600 mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section - Diperdalam */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Masalah yang Sering Terjadi</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Kontraktor Indonesia Kehilangan <span className="text-red-600">Miliaran Rupiah</span> Setiap Tahun
            </h2>
            <p className="text-slate-600 text-lg">
              Bukan karena kualitas kerja, tapi karena proses manual yang lambat dan rawan error.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <div className="text-3xl mb-3">📐</div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Estimasi Volume Material</h3>
              <p className="text-slate-600 text-sm mb-3">Quantity Surveyor menghitung manual dari gambar 2D. Satu gambar teknis bisa butuh 3-5 hari.</p>
              <p className="text-red-600 text-sm font-medium">Dampak: RAB molor, tender kalah.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <div className="text-3xl mb-3">📑</div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Review Kontrak</h3>
              <p className="text-slate-600 text-sm mb-3">Dokumen kontrak 200+ halaman. Banyak pasal berisiko dan klausa jebakan yang terlewat.</p>
              <p className="text-red-600 text-sm font-medium">Dampak: Sengketa hukum, denda keterlambatan.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Monitoring Lapangan</h3>
              <p className="text-slate-600 text-sm mb-3">Site engineer keliling 2-3 jam/hari. Progres sulit diukur objektif.</p>
              <p className="text-red-600 text-sm font-medium">Dampak: Pemborosan material, jadwal mundur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section - Detail */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Solusi AI</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              4 Modul AI untuk 4 Celah Kerja Utama
            </h2>
            <p className="text-slate-600 text-lg">
              Pilih sesuai kebutuhan proyek Anda. Bisa implementasi satu per satu atau full suite.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((sol, idx) => (
              <SolutionCard key={idx} {...sol} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Detail */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Proses Mudah</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Demo Gratis dalam 3 Langkah
            </h2>
            <p className="text-slate-600 text-lg">
              Tidak perlu komitmen awal. Coba dengan data proyek Anda yang sebenarnya.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-5 shadow-md">1</div>
              <h3 className="font-bold text-xl mb-3">Kirim Data Uji</h3>
              <p className="text-slate-600 leading-relaxed">
                Upload gambar teknis, kontrak, atau data lapangan Anda. <span className="text-emerald-600 font-medium">Kami tidak menyimpan data</span> setelah demo selesai.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-5 shadow-md">2</div>
              <h3 className="font-bold text-xl mb-3">AI Kami Proses</h3>
              <p className="text-slate-600 leading-relaxed">
                Tim AI engineer kami menjalankan model pada data Anda. Hasil dalam <span className="font-semibold">24-48 jam</span>.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-5 shadow-md">3</div>
              <h3 className="font-bold text-xl mb-3">Lihat Hasil & Konsultasi</h3>
              <p className="text-slate-600 leading-relaxed">
                Demo interaktif via Zoom/Meeting. Bandingkan hasil AI dengan perhitungan manual Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Trust Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="text-5xl mb-4">“</div>
          <p className="text-xl md:text-2xl text-slate-700 italic mb-6">
            Dengan AI Quantity Surveyor, tim saya bisa menyelesaikan estimasi 5 gambar teknis dalam satu hari. 
            Yang biasanya butuh 2 minggu, sekarang cukup 2 hari.
          </p>
          <p className="font-bold text-slate-900">— Project Manager, Kontraktor Menengah Jakarta</p>
          <p className="text-slate-500 text-sm mt-4">*Hasil dapat bervariasi tergantung kompleksitas proyek</p>
        </div>
      </section>

      {/* FAQ Section - Tambahan untuk konversi */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="space-y-5">
            <div className="border-b pb-4">
              <h3 className="font-bold text-slate-900 mb-2">Apakah AI ini bisa integrasi dengan software yang sudah kami pakai (Excel, MS Project, dll)?</h3>
              <p className="text-slate-600">Ya. Output kami dalam format Excel/CSV yang siap Anda import ke software apapun. Untuk kebutuhan khusus, kami bisa bikin API custom.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-bold text-slate-900 mb-2">Apakah data proyek kami aman?</h3>
              <p className="text-slate-600">100%. Kami tidak menyimpan data setelah demo selesai. Untuk klien enterprise, kami sediakan opsi on-premise deployment.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-bold text-slate-900 mb-2">Berapa biaya implementasinya?</h3>
              <p className="text-slate-600">Mulai dari Rp XXX.XXX/bulan per modul. Hubungi kami untuk quote sesuai skala proyek Anda.</p>
            </div>
            <div className="pb-4">
              <h3 className="font-bold text-slate-900 mb-2">Apakah tim kami perlu pelatihan khusus?</h3>
              <p className="text-slate-600">Tidak. Dashboard kami desain untuk user non-teknis. Cukup upload file, klik proses, dapat hasil.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Strong */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Mengotomasi Proyek Konstruksi Anda?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Dapatkan demo gratis dengan data proyek Anda sendiri. 
            Bandingkan hasilnya dengan cara manual Anda saat ini.
          </p>
          <a href="#inquiry" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-10 py-4 rounded-lg transition text-lg">
            Minta Demo Sekarang →
          </a>
          <p className="text-slate-400 text-sm mt-6">Gratis. Tanpa komitmen. Konsultasi 30 menit bersama tim AI engineer kami.</p>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-slate-900 rounded-2xl p-6 md:p-10 text-white shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              📞 Isi Form untuk Demo Gratis
            </h2>
            <p className="text-slate-300 text-center mb-8">
              Tim kami akan menghubungi dalam 1x24 jam untuk jadwal demo
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 py-10">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          <p className="mb-2">© 2025 AI Construction Solutions | Konsultan Otomasi Data untuk Kontraktor Indonesia</p>
          <p className="mb-1">📧 Email: hello@aiconstruksi.id | 📱 WhatsApp: 0812-3456-7890</p>
          <p className="text-xs text-slate-400">*Hasil implementasi dapat bervariasi tergantung kompleksitas dan kualitas data proyek.</p>
        </div>
      </footer>
    </main>
  );
}