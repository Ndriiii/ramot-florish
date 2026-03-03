
export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#EFE8E8] flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-6xl font-sansita text-[#171717] mb-4">404</h1>
            <p className="text-gray-500 text-lg mb-8">Halaman tidak ditemukan.</p>
            <a
                href="/"
                className="px-8 py-3 bg-[#171717] text-white rounded-full font-bold hover:bg-gray-800 transition"
            >
                Kembali ke Beranda
            </a>
        </main>
    );
}