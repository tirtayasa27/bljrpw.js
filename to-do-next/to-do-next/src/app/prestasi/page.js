import Link from "next/link";

export default function PrestasiPage() {
  const juaraLksList = [
    {
      nama: "Cendrine Junita Liguna",
      kelas: "Kelas XI MP 1",
      pembimbing: "Kristin Wahyuni, S.Pd",
      juara: "Juara 1",
      lomba: "Otomatisasi Tata Kelola Perkantoran",
    },
    {
      nama: "Meizza Nuril Falestin",
      kelas: "Kelas X APHP 2",
      pembimbing: "Ira, S.TP.",
      juara: "Juara 2",
      lomba: "Teknologi Pengolahan Pangan",
    },
    {
      nama: "M. Alifebriano Assafar",
      kelas: "Kelas XII TKJ 2",
      pembimbing: "Aang Yogi T. J., S.Kom",
      juara: "Juara 1",
      lomba: "Graphic Design Technology",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-slate-800">
      <main className="py-12 px-4 space-y-10 max-w-6xl mx-auto">
        {/* Header Halaman Prestasi */}
        <section className="text-center space-y-3 border-b border-slate-200 pb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Prestasi & Capaian Unggulan
          </h1>
          <p className="text-sky-600 font-medium text-sm sm:text-base">
            SMK Negeri 1 Pakis Aji (Nespajira) – Bukti Karya Nyata dan Prestasi Warga Sekolah
          </p>
        </section>

        {/* Section Utama: Foto Poster Juara LKS & Detail */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-7 bg-sky-600 rounded-full"></div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Kejuaraan Lomba Kompetensi Siswa (LKS) Tingkat Kabupaten Jepara
              </h2>
              <p className="text-xs text-slate-500">
                Pencapaian gemilang siswa-siswi SMK Negeri 1 Pakis Aji
              </p>
            </div>
          </div>

          {/* Menampilkan Gambar Poster LKS (.png) */}
          <div className="w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white flex justify-center">
            <img
              src="/juara-lks.png"
              alt="Prestasi Juara LKS SMK Negeri 1 Pakis Aji"
              className="w-full max-h-[550px] object-contain bg-slate-900"
            />
          </div>

          {/* Kartu Rincian Peraih Juara */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {juaraLksList.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-sm hover:border-sky-300 transition flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1 rounded-full">
                      {item.juara}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {item.kelas}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {item.nama}
                  </h3>
                  <p className="text-xs font-medium text-sky-700">
                    Bidang: {item.lomba}
                  </p>
                </div>
                <div className="text-xs text-slate-500 border-t border-slate-100 pt-2 mt-2">
                  Pembimbing: <strong className="text-slate-700">{item.pembimbing}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tombol Navigasi Kembali */}
        <div className="pt-6 text-center">
          <Link
            href="/"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-2.5 rounded-xl transition shadow-sm text-sm"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </main>
    </div>
  );
}