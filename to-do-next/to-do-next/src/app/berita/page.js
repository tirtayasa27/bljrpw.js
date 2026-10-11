import { beritaList } from "@/data/beritaData";
import BeritaCard from "@/components/BeritaCard";

export default function BeritaPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-12 bg-white text-slate-900">
      {/* Header Halaman Berita */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Berita & Informasi Vokasi
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          Kabar terbaru seputar kegiatan prakerin, UKK, dan prestasi siswa SMK Negeri 1 Pakis Aji.
        </p>
      </div>

      {/* Grid Kartu Berita */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {beritaList.map((berita) => (
          <BeritaCard key={berita.id} berita={berita} />
        ))}
      </div>
    </main>
  );
}