import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white text-slate-800 border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Logo & Identitas Sekolah */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo Sekolah Menggunakan Gambar */}
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
            <img
              src="/logo.png"
              alt="Logo SMK Negeri 1 Pakis Aji"
              className="w-full h-full object-contain group-hover:scale-105 transition"
            />
          </div>

          <div>
            <h1 className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight leading-snug">
              SMK NEGERI 1 PAKIS AJI
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Pusat Keunggulan & Vokasi Terampil
            </p>
          </div>
        </Link>

        {/* Menu Navigasi */}
        <nav className="flex items-center gap-6 font-semibold text-sm">
          <Link
            href="/"
            className="text-slate-700 hover:text-sky-600 transition py-1 border-b-2 border-transparent hover:border-sky-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-slate-700 hover:text-sky-600 transition py-1 border-b-2 border-transparent hover:border-sky-600"
          >
            About
          </Link>
          <Link
            href="/prestasi"
            className="text-slate-700 hover:text-sky-600 transition py-1 border-b-2 border-transparent hover:border-sky-600"
          >
            Prestasi
          </Link>
          <Link
            href="/berita"
            className="text-slate-700 hover:text-sky-600 transition py-1 border-b-2 border-transparent hover:border-sky-600"
          >
            Berita
          </Link>
        </nav>

      </div>
    </header>
  );
}