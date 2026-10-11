import Link from "next/link";
import BeritaCard from "@/components/BeritaCard";
import { beritaList } from "@/data/beritaData";

export default function Home() {
  const beritaTerbaru = beritaList.slice(0, 3);

  return (
    <main className="space-y-16 pb-16 bg-white text-slate-900">
      {/* Hero / Banner Section: Gradasi Jelas Biru Muda Cerah & Biru Tua ala Logo */}
      <section 
        className="relative overflow-hidden text-white border-b border-sky-400/30 shadow-md"
        style={{
          background: "linear-gradient(135deg, #38bdf8 0%, #0284c7 30%, #1e3a8a 70%, #172554 100%)"
        }}
      >
        {/* Efek Pendaran Cahaya Dekoratif agar Lebih Estetik */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/50 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-[480px] items-stretch">
          
          {/* Kolom Kiri: Tagline & Deskripsi */}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md">
              “Generasi Terampil – Tangguh – Berdaya Saing Global”
            </h1>
            <p className="text-sky-100 text-sm sm:text-base leading-relaxed font-medium">
              <strong className="text-white font-extrabold">SMK Negeri 1 Pakis Aji</strong> mencetak generasi unggul yang <strong className="text-white font-extrabold">Siap Kerja</strong> secara profesional, <strong className="text-white font-extrabold">Siap Karya</strong> melalui inovasi Teaching Factory, dan <strong className="text-white font-extrabold">Siap Wirausaha</strong> secara mandiri demi memajukan potensi daerah.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="bg-white hover:bg-sky-50 text-slate-900 font-bold px-6 py-3 rounded-lg shadow-lg transition transform active:scale-95"
              >
                Profil Sekolah
              </Link>
              <Link
                href="/berita"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold px-6 py-3 rounded-lg transition shadow-sm"
              >
                Lihat Berita
              </Link>
            </div>
          </div>

          {/* Kolom Kanan: Foto Kegiatan Siswa */}
          <div className="relative min-h-[300px] md:min-h-full">
            <img
              src="/foto-home.jpg"
              alt="Kegiatan Siswa SMK Negeri 1 Pakis Aji"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Sambutan Kepala Sekolah */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Foto Kepala Sekolah */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-md bg-white border border-gray-200">
              <img
                src="/kepala-sekolah.jpg"
                alt="Kepala Sekolah SMK Negeri 1 Pakis Aji"
                className="w-full h-[380px] object-cover object-top"
              />
            </div>
          </div>

          {/* Teks Sambutan & Statistik */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Sambutan Kepala Sekolah
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                Selamat datang di website resmi <strong className="text-slate-900">SMK Negeri 1 Pakis Aji (Nespajira)</strong>.
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Sebagai pusat pendidikan vokasi di Jepara, kami berkomitmen menyelenggarakan pendidikan bermutu yang adaptif terhadap perkembangan teknologi dan kebutuhan industri global. Melalui optimalisasi <em>Teaching Factory (TeFa)</em> dan kemitraan strategis, kami tidak hanya mengasah keahlian teknis siswa, tetapi juga membentuk karakter unggul berakhlak mulia.
              </p>
            </div>

            {/* Angka Statistik */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-200">
              <div>
                <p className="text-4xl font-extrabold text-sky-600">1100</p>
                <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Siswa / Siswi</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-sky-600">4</p>
                <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Program Keahlian</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Berita Terbaru */}
      <section className="max-w-6xl mx-auto px-4 space-y-6">
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Berita & Pengumuman Terbaru</h2>
            <p className="text-xs text-slate-500">Informasi kegiatan dan prestasi terkini SMK Nespajira</p>
          </div>
          <Link
            href="/berita"
            className="text-sm font-semibold text-sky-600 hover:text-sky-800 transition"
          >
            Semua Berita &rarr;
          </Link>
        </div>

        {/* Grid 3 Kartu Berita */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {beritaTerbaru.map((berita) => (
            <BeritaCard key={berita.id} berita={berita} />
          ))}
        </div>
      </section>
    </main>
  );
}