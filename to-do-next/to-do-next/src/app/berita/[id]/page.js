import { beritaList } from "@/data/beritaData";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function DetailBerita({ params }) {
  const { id } = await params;
  const berita = beritaList.find((item) => item.id === id);

  if (!berita) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-white text-slate-900">
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        {/* Tombol Kembali ke Daftar Berita */}
        <Link
          href="/berita"
          className="text-sm font-semibold text-sky-600 hover:text-sky-800 transition inline-flex items-center gap-1"
        >
          &larr; Kembali ke Daftar Berita
        </Link>

        <article className="space-y-6">
          {/* Kategori & Tanggal */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              {berita.tanggal}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              {berita.judul}
            </h1>
          </div>

          {/* Foto Utama Berita */}
          <div className="w-full h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100">
            <img
              src={berita.gambar}
              alt={berita.judul}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Isi Lengkap Artikel */}
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-base sm:text-lg pt-4 border-t border-slate-100">
            <p>{berita.isi}</p>
          </div>
        </article>
      </main>
    </div>
  );
}