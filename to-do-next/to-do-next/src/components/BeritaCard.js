import Link from "next/link";

export default function BeritaCard({ berita }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
      {/* Garis Aksen Biru di Atas Kartu */}
      <div className="h-1.5 bg-sky-600 w-full" />

      {/* Foto Berita */}
      <div className="h-48 overflow-hidden bg-slate-100">
        <img
          src={berita.gambar}
          alt={berita.judul}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Konten Teks */}
      <div className="p-5 flex flex-col flex-grow space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
            Berita Sekolah
          </span>
          <span className="text-xs text-slate-500 font-medium">{berita.tanggal}</span>
        </div>
        
        <h3 className="font-bold text-slate-900 text-lg leading-snug line-clamp-2">
          {berita.judul}
        </h3>
        
        <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
          {berita.ringkasan}
        </p>
        
        <div className="pt-2 mt-auto">
          <Link
            href={`/berita/${berita.id}`}
            className="text-sm font-bold text-sky-600 hover:text-sky-800 transition flex items-center gap-1"
          >
            Baca Selengkapnya &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}