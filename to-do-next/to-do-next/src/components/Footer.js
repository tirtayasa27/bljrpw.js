export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 border-t-4 border-yellow-500">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">SMA NEGERI 1 JEPARA</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Jl. Jendral Sudirman No. 1, Kabupaten Jepara, Jawa Tengah 59411
            <br />
            Telepon: (0291) 591234 | Email: info@sman1jepara.sch.id
          </p>
        </div>
        <div className="md:text-right">
          <h4 className="text-lg font-semibold text-white mb-2">Jam Operasional</h4>
          <p className="text-sm text-gray-400">
            Senin - Jumat: 07.00 - 15.30 WIB
            <br />
            Sabtu & Minggu: Libur
          </p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 border-t border-gray-800 pt-4">
        &copy; 2026 SMA Negeri 1 Jepara. All rights reserved.
      </div>
    </footer>
  );
}