import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-2">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-gray-600 mb-6">
          Maaf, halaman yang kamu cari tidak tersedia atau telah dipindahkan.
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
};
