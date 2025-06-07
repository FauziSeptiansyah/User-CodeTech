import { Layout } from "../layout/Layout";
import heroImage from "../assets/image/hero.png";

export const JasaPembuatanWeb = () => {
  const hero = {
    image: heroImage,
    page: {
      pageHome: {
        title: "Bangun Masa Depan Digital Anda Bersama Codetech",
        slogan: "Pilihan Utama anda dalam Membangun Website Profesional",
      },
      pageProfil: {
        title: "Profil Kami",
        slogan:
          "Bersama tim ahli kami, kami siap membantu Anda menciptakan pengalaman online yang memukau dan mengubah pengunjung menjadi pelanggan setia.",
      },
      pageLayanan: {
        title: "Layanan Kami",
        slogan:
          "Bersama tim ahli kami, kami siap membantu Anda menciptakan pengalaman online yang memukau dan mengubah pengunjung menjadi pelanggan setia.",
      },
      pagePortofolio: {
        title: "Portofolio",
        slogan:
          "Bersama tim ahli kami, kami siap membantu Anda menciptakan pengalaman online yang memukau dan mengubah pengunjung menjadi pelanggan setia.",
      },
      pageFaq: {
        title: "Frequently Asked Questions",
        slogan:
          "Bersama tim ahli kami, kami siap membantu Anda menciptakan pengalaman online yang memukau dan mengubah pengunjung menjadi pelanggan setia.",
      },
      pageBlog: {
        title: "Blog",
        slogan:
          "Bersama tim ahli kami, kami siap membantu Anda menciptakan pengalaman online yang memukau dan mengubah pengunjung menjadi pelanggan setia.",
      },
      pageKontak: {
        title: "Kontak",
        slogan:
          "Bersama tim ahli kami, kami siap membantu Anda menciptakan pengalaman online yang memukau dan mengubah pengunjung menjadi pelanggan setia.",
      },
    },
  };

  const harga = {
    subtitle: "Website",
    title: "Harga Website di CodeTech",
    description:
      "Lebih dari 2.000 website profesional yang telah berhasil tim profesional kami bangun dan online optimal.",
    items: [
      {
        page: "1 Halaman",
        title: "Landing Page",
        price: {
          priceTotal: "IDR 1.500.000",
          pricePerMonth: "IDR 500.000",
        },
        features: [
          "8 Menu",
          "Gratis Domain com",
          "Hosting 3 GB (70 foto kuota kerja)",
          "Integrasi Media Sosial",
          "Free Whatsapp/Telepon",
          "Website SSL",
          "Template WP Premium",
          "Perpanjang Setiap Tahun",
          "User dan Video Panduan Edit",
          "Free Banner dan Logo",
          "Pemasangan Google Map",
          "Respon Server Rata-Rata 5 Mili Detik",
          "Bandwidth Unlimited",
          "Statistic Kunjungan Website",
          "Standar Kontak Form",
          "Free Support",
          "Garansi Selamanya",
        ],
        description:
          "Cocok sebagai halaman landing untuk promosi dengan budget terbatas.",
      },
      {
        page: "1 Halaman",
        title: "Landing Page",
        price: {
          priceTotal: "IDR 1.500.000",
          pricePerMonth: "IDR 500.000",
        },
        features: [
          "8 Menu",
          "Gratis Domain com",
          "Hosting 3 GB (70 foto kuota kerja)",
          "Integrasi Media Sosial",
          "Free Whatsapp/Telepon",
          "Website SSL",
          "Template WP Premium",
          "Perpanjang Setiap Tahun",
          "User dan Video Panduan Edit",
          "Free Banner dan Logo",
          "Pemasangan Google Map",
          "Respon Server Rata-Rata 5 Mili Detik",
          "Bandwidth Unlimited",
          "Statistic Kunjungan Website",
          "Standar Kontak Form",
          "Free Support",
          "Garansi Selamanya",
        ],
        description:
          "Cocok sebagai halaman landing untuk promosi dengan budget terbatas.",
      },
      {
        page: "1 Halaman",
        title: "Landing Page",
        price: {
          priceTotal: "IDR 1.500.000",
          pricePerMonth: "IDR 500.000",
        },
        features: [
          "8 Menu",
          "Gratis Domain com",
          "Hosting 3 GB (70 foto kuota kerja)",
          "Integrasi Media Sosial",
          "Free Whatsapp/Telepon",
          "Website SSL",
          "Template WP Premium",
          "Perpanjang Setiap Tahun",
          "User dan Video Panduan Edit",
          "Free Banner dan Logo",
          "Pemasangan Google Map",
          "Respon Server Rata-Rata 5 Mili Detik",
          "Bandwidth Unlimited",
          "Statistic Kunjungan Website",
          "Standar Kontak Form",
          "Free Support",
          "Garansi Selamanya",
        ],
        description:
          "Cocok sebagai halaman landing untuk promosi dengan budget terbatas.",
      },
      {
        page: "1 Halaman",
        title: "Landing Page",
        price: {
          priceTotal: "IDR 1.500.000",
          pricePerMonth: "IDR 500.000",
        },
        features: [
          "8 Menu",
          "Gratis Domain com",
          "Hosting 3 GB (70 foto kuota kerja)",
          "Integrasi Media Sosial",
          "Free Whatsapp/Telepon",
          "Website SSL",
          "Template WP Premium",
          "Perpanjang Setiap Tahun",
          "User dan Video Panduan Edit",
          "Free Banner dan Logo",
          "Pemasangan Google Map",
          "Respon Server Rata-Rata 5 Mili Detik",
          "Bandwidth Unlimited",
          "Statistic Kunjungan Website",
          "Standar Kontak Form",
          "Free Support",
          "Garansi Selamanya",
        ],
        description:
          "Cocok sebagai halaman landing untuk promosi dengan budget terbatas.",
      },
    ],
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative w-full">
        <div className="relative h-full w-full">
          <img
            src={hero.image}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center -mt-20">
            <div className="max-w-6xl">
              <div className="mb-10">
                <h1 className="mb-3 text-5xl font-bold">
                  {hero.page.pageLayanan.title}
                </h1>
                <p className="text-md text-gray-400">
                  {hero.page.pageLayanan.slogan}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Harga */}
      <section className="relative z-10 -mt-40 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl bg-gradient-to-b from-white to-0% p-6 md:p-12 text-center items-center">
            <h3 className="text-indigo-600 font-semibold text-sm uppercase">
              {harga.subtitle}
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              {harga.title}
            </h2>
            <p className="text-gray-600 mb-12 max-w-xl mx-auto">
              {harga.description}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {harga.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between"
                >
                  <span className="text-sm text-gray-400">{item.page}</span>
                  <h4 className="text-md font-medium mb-2">{item.title}</h4>
                  <p className="text-gray-800 font-semibold text-xl">
                    {item.price.priceTotal}
                  </p>
                  <span className="text-gray-400 text-sm mb-4">
                    {item.price.pricePerMonth} / bulan
                  </span>
                  <hr className="border-t border-gray-300 mb-6" />
                  <ul className="text-left text-sm text-gray-600 mb-4 space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <button className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-700 transition">
                    Pesan Sekarang
                  </button>
                </div>
              ))}
            </div>
        </div>
      </section>
    </Layout>
  );
};
