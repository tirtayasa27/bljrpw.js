import Link from "next/link";

export default function About() {
  const jurusanList = [
    {
      id: 1,
      nama: "1. Teknik Komputer dan Jaringan (TKJ)",
      deskripsi:
        "Mempelajari instalasi jaringan komputer, manajemen server, administrasi sistem, jaringan nirkabel, dan teknologi komunikasi modern.",
    },
    {
      id: 2,
      nama: "2. Agribisnis Ternak (AT)",
      deskripsi:
        "Fokus pada pengelolaan budidaya peternakan modern, formulasi pakan, kesehatan hewan, pemrosesan hasil ternak, dan manajemen agribisnis.",
    },
    {
      id: 3,
      nama: "3. Agribisnis Pengolahan Hasil Pertanian (APHP)",
      deskripsi:
        "Mengembangkan keterampilan pengolahan produk pangan berbasis pertanian, pengujian mutu, keamanan pangan, hingga pengemasan dan pemasaran.",
    },
    {
      id: 4,
      nama: "4. Busana / Tata Busana",
      deskripsi:
        "Mempelajari desain busana, pembuatan pola manual dan digital, teknik menjahit tingkat lanjut, hingga manajemen usaha fashion digital.",
    },
  ];

  return (
    /* Pembungkus terluar w-full min-h-screen bg-white memastikan background layar penuh berwarna putih */
    <div className="w-full min-h-screen bg-white text-slate-800">
      <main className="py-12 px-4 space-y-12 max-w-6xl mx-auto">
        {/* Header Halaman Tentang Sekolah */}
        <section className="text-center space-y-3 border-b border-slate-200 pb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tentang SMK Negeri 1 Pakis Aji
          </h1>
          <p className="text-sky-600 font-medium text-sm sm:text-base">
            SMK Nespajira – Fleksibel | Religius | Edukatif | Sopan | Harmonis
          </p>
        </section>

        {/* Section 1: Sejarah Singkat */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-7 bg-sky-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900">Sejarah Singkat</h2>
          </div>
          
          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed pl-1 sm:pl-4">
            <p>
              <strong className="text-slate-900">SMK Negeri 1 Pakis Aji</strong> – Bermula dari keinginan warga masyarakat daerah khususnya daerah Suwawal Timur dan sekitarnya yang menginginkan anak-anaknya meneruskan sekolah dari bangku Sekolah Menengah Pertama (SMP) ke bangku Sekolah Menengah Kejuruan (SMK). Untuk menjangkau SMK terdekat berjarak -+ 8 KM, maka pemerintah mendirikan SMK Negeri 1 Pakis Aji yang berada di Jl. Mambak – Pakis Aji Km. 04, Desa Suwawal Timur, Kecamatan Pakis Aji, Kabupaten Jepara, Jawa Tengah 59456.
            </p>

            <p>
              Dengan merintis 2 jurusan di awal Tahun 2010 yang disesuaikan dengan mata pencaharian masyarakat sekitar guna membantu meningkatkan perekonomian masyarakat melalui pendidikan, maka dibuka jurusan tersebut:
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong className="text-slate-900">ATR (Agribisnis Ternak Ruminansia)</strong> – Yaitu sebuah kejuruan yang memfokuskan peserta didik ke dalam dunia ternak berkaki empat atau ruminansia, di sini para peserta didik bisa mendapatkan ilmu yang bermanfaat mengenai tata cara memelihara ternak yang bisa menghasilkan hasil yang maksimal.
              </li>
              <li>
                <strong className="text-slate-900">TPHP (Teknik Pengolahan Hasil Pertanian)</strong> – Yaitu sebuah kejuruan yang memfokuskan peserta didik ke dalam dunia pengolahan hasil pertanian dengan cara memanfaatkan hasil pertanian masyarakat sekitar dengan diolah menjadi suatu produk makanan bernilai jual yang lebih untuk dipasarkan, sehingga seluruh peserta didik di jurusan ini bisa menjadi seorang wirausaha di bidang kuliner dan lain sebagainya.
              </li>
            </ol>

            <p className="pt-2">
              Dengan seiring perkembangan masyarakat dan globalisasi saat itu, pada tahun 2011 SMK Negeri 1 Pakis Aji melalui Dinas menambah jurusan di bidang Komputer dan Administrasi yaitu:
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong className="text-slate-900">TKJ (Teknik Komputer dan Jaringan)</strong> – Yaitu sebuah jurusan yang memfokuskan peserta didik di dalam dunia hardware dan software komputer dengan dibuka jurusan ini seluruh peserta didik di dalam jurusan ini bisa berinteraksi dengan problem dan pemecahan masalah di dalam memperbaiki komputer dan jaringan internet.
              </li>
              <li>
                <strong className="text-slate-900">AP (Administrasi Perkantoran)</strong> – Yaitu sebuah jurusan yang memfokuskan peserta didik di dalam suatu kantor atau perusahaan yang mempunyai administrasi yang lengkap, sehingga seluruh peserta didik bisa menjadi sekretaris yang handal di dalam suatu organisasi.
              </li>
            </ol>

            <p className="pt-2">
              Setelah beberapa tahun berlalu tepat pada tahun 2017 jurusan di SMK Negeri 1 Pakis Aji berganti nama sesuai dengan SK yang berlaku pada waktu itu yaitu:
            </p>

            <ul className="list-disc pl-6 space-y-1 font-medium text-sky-800 bg-sky-50/70 p-4 rounded-xl border border-sky-100">
              <li>TKJ (Teknik Komputer dan Jaringan)</li>
              <li>ATR (Agribisnis Ternak Ruminansia)</li>
              <li>APHP (Agribisnis Pengolahan Hasil Pertanian)</li>
              <li>OTKP (Otomatisasi Tata Kelola Perkantoran)</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Profil Sekolah */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-7 bg-sky-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900">Profil Sekolah</h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-1 sm:pl-4">
            <strong className="text-slate-900">SMK Negeri 1 Pakis Aji (SMK Nespajira)</strong> adalah pusat pendidikan vokasi di Kabupaten Jepara yang berkomitmen menyelenggarakan pendidikan bermutu, adaptif terhadap perkembangan teknologi, dan memenuhi kebutuhan industri global. Melalui optimalisasi <em>Teaching Factory (TeFa)</em> dan kemitraan strategis, sekolah mengasah keahlian teknis sekaligus membentuk karakter unggul berakhlak mulia.
          </p>
        </section>

        {/* Section 3: Visi & Misi */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Visi */}
          <div className="md:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="bg-sky-500/20 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full border border-sky-400/30">
                VISI
              </span>
              <h3 className="text-2xl font-bold text-white">Visi Sekolah</h3>
              <p className="text-lg font-medium text-sky-200 italic leading-snug">
                “Terwujudnya Lulusan Yang Beriman dan Bertaqwa Kepada Tuhan Yang Maha Esa, Berakhlak Mulia, Sehat, Mandiri, Kreatif dan Memiliki Daya Saing Tinggi di Dunia Global”
              </p>
            </div>
          </div>

          {/* Misi */}
          <div className="md:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-7 bg-sky-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-slate-900">MISI</h3>
            </div>

            <ol className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed list-decimal pl-5">
              <li>Menumbuhkan penghayatan terhadap ajaran agamanya.</li>
              <li>Menumbuhkan semangat kesungguhan secara intensif kepada warga sekolah.</li>
              <li>Melakukan pembelajaran dan bimbingan secara efektif.</li>
              <li>Menumbuhkan semangat keolahragaan sehingga dapat dikembang secara optimal.</li>
              <li>Menumbuhkan potensi diri, sehingga dapat dikembang secara optimal.</li>
              <li>Menerapkan manajemen partisipatif dengan melibatkan seluruh warga sekolah dan <em>stakeholders</em>.</li>
            </ol>
          </div>
        </section>

        {/* Section 4: 4 Program Keahlian Resmi */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <div className="w-1.5 h-7 bg-sky-600 rounded-full"></div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">4 Program Keahlian Resmi</h2>
              <p className="text-xs text-slate-500">Kompetensi keahlian unggulan di SMK Nespajira</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jurusanList.map((jurusan) => (
              <div
                key={jurusan.id}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-md transition hover:border-sky-300 space-y-2"
              >
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                  {jurusan.nama}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed pl-4">
                  {jurusan.deskripsi}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Alamat Sekolah */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-7 bg-sky-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900">Alamat Sekolah</h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-4">
            Jl. Mambak – Pakis Aji Km. 04, Desa Suwawal Timur, Kecamatan Pakis Aji, Kabupaten Jepara, Jawa Tengah 59456
          </p>
        </section>
      </main>
    </div>
  );
}