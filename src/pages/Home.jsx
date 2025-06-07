import { Layout } from "../layout/Layout";
import heroImage from "../assets/image/hero.png";
import profilImage from "../assets/image/profil.png";
import bgImage from "../assets/image/background-blue.png";

import icon1 from "../assets/image/icon1.png";
import icon2 from "../assets/image/icon2.png";
import icon3 from "../assets/image/icon3.png";
import icon4 from "../assets/image/icon4.png";
import icon5 from "../assets/image/icon5.png";

import porto1 from "../assets/image/Artinn.png";
import porto2 from "../assets/image/healtykids.png";
import porto3 from "../assets/image/Katar.png";
import porto4 from "../assets/image/JasaGo.png";
import porto5 from "../assets/image/PAKampus.png";
import porto6 from "../assets/image/Stunting.png";

export const Home = () => {
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

  const profil = {
    image: profilImage,
    page: {
      pageHome: {
        subtitle: "Halo!",
        title: "Apa sih CodeTech?",
        description: [
          "CodeTech merupakan creative agency yang bergerak dalam dunia digital. Kami adalah tim kreatif yang mengkhususkan diri dalam jasa desain website, jasa landing page, jasa SEO murah, jasa company profile, dan advertising.",
          "Dibentuk dengan tujuan yang berjangka panjang, kami berkomitmen untuk memberikan solusi relevan yang efisien dan modern.",
        ],
      },
      pageProfil: {
        subtitle: "Tentang Kami",
        title:
          "Selamat datang di CodeTech - pusat inovasi dan kreativitas digital!",
        description: [
          "Sebagai creative agency yang berfokus pada pembuatan website, landing page, dan advertising, kami menghadirkan tim kreatif berpengalaman untuk memberikan solusi digital yang inspiratif dan tepat sasaran.",
          "Kami memahami bahwa setiap bisnis memiliki karakter dan tujuan unik. Karena itu, kami berkomitmen merancang website yang tidak hanya memikat secara visual, tetapi juga optimal dari sisi fungsi, kemudahan penggunaan, dan pengalaman pengguna. Setiap solusi yang kami kembangkan dirancang khusus untuk mencerminkan identitas brand Anda dan menarik perhatian audiens target Anda.",
          "Di setiap proyek, kami selalu mengedepankan kolaborasi, profesionalisme, dan hasil yang maksimal, dengan tujuan utama: kepuasan Anda. Jika Anda mencari partner kreatif untuk membawa bisnis Anda bersinar di dunia digital, CodeTech adalah jawabannya. Kami siap membantu Anda mewujudkan website yang menarik, inovatif, dan sepenuhnya disesuaikan dengan kebutuhan dan visi Anda.",
        ],
      },
    },
  };

  const keunggulan = {
    subtitle: "Keunggulan",
    title: "Kenapa CodeTech Layak Jadi Pilihan Anda?",
    description:
      "Kami tidak hanya menawarkan layanan, kami menghadirkan solusi digital terintegrasi yang dirancang untuk mendukung pertumbuhan bisnis Anda secara berkelanjutan. Dengan memadukan inovasi, teknologi terkini, dan pendekatan yang berfokus pada kebutuhan pengguna, kami membantu Anda membangun fondasi digital yang kuat, efisien, dan siap bersaing di era modern.",
    slogan: "Ayo, Mulai Transformasi Digital Anda Hari Ini!",
    items: [
      {
        icon: icon1,
        title: "Free Konsultasi 24 Jam",
        description:
          "Kami siap membantu Anda kapan saja melalui WhatsApp, Zoom/Google Meet.",
      },
      {
        icon: icon2,
        title: "Free Maintenance",
        description:
          "Kami memastikan Website Anda selalu up-to-date & berjalan optimal.",
      },
      {
        icon: icon3,
        title: "Desain Responsif",
        description:
          "Tampilan optimal di semua perangkat: desktop, tablet, dan smartphone.",
      },
      {
        icon: icon4,
        title: "SEO Friendly",
        description:
          "Website Anda mudah ditemukan di Google, meningkatkan traffic dan potensi penjualan.",
      },
      {
        icon: icon5,
        title: "Free Domain & SSL",
        description:
          "Gratis domain dan SSL (https) selama satu tahun, lebih aman dan terpercaya.",
      },
    ],
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

  const portofolio = {
    subtitle: "Portofolio",
    title: "Karya Terbaik untuk Setiap Ide Hebat",
    description:
      "Kami percaya bahwa setiap proyek adalah bukti nyata dari kolaborasi, inovasi, dan dedikasi. Dengan pengalaman dalam mengerjakan berbagai proyek, kami berkomitmen menghadirkan solusi yang tepat sasaran dan berdampak positif bagi setiap klien.",
    items: [
      { title: "Artinn", image: porto1 },
      { title: "HealtyKids", image: porto2 },
      { title: "Katar", image: porto3 },
      { title: "JasaGo", image: porto4 },
      { title: "PAKampus", image: porto5 },
      { title: "Stunting", image: porto6 },
    ],
  };

  const konsultasi = {
    subtitle: "Konsultasi",
    title: "Konsultasikan Sekarang!",
    description: [
      "Jangan ragu! Wujudkan kebutuhan digital Anda bersama CodeTech.",
      "Kami siap menjadi rekan Anda dengan konsultasi gratis 24 jam nonstop. Tim kami hadir untuk memahami tujuan dan tantangan Anda, memberikan solusi tepat guna, dan membantu Anda meraih sukses digital yang tepat sasaran.",
      "Manfaatkan kesempatan ini sebaik mungkin!",
      "Hubungi kami untuk konsultasi gratis, dan mulailah perjalanan menuju keberhasilan digital bagi bisnis Anda.",
    ],
    buttonLink: "https://wa.me/6282112539215", // Ganti dengan link WA asli
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
                  {hero.page.pageHome.title}
                </h1>
                <p className="text-md text-gray-400">
                  {hero.page.pageHome.slogan}
                </p>
              </div>
              <button className="btn bg-white text-black rounded-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Profil */}
      <section className="relative z-10 -mt-40 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl bg-gradient-to-b from-white to-0% p-6 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={profil.image}
              alt="Profil Codetech"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-indigo-600 font-semibold text-sm uppercase">
              {profil.page.pageHome.subtitle}
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              {profil.page.pageHome.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {profil.page.pageHome.description[0]}
            </p>
            <p className="text-gray-700 mb-6">
              {profil.page.pageHome.description[1]}
            </p>
            <button className="btn btn-outline btn-primary">Read More</button>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-16 px-6 md:px-20 text-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Judul dan Deskripsi */}
          <div className="lg:col-span-2">
            <h3 className="text-indigo-600 font-semibold text-sm uppercase">
              {keunggulan.subtitle}
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              {keunggulan.title}
            </h2>
            <p className="text-gray-600">{keunggulan.description}</p>
          </div>

          {/* Mapping fitur */}
          {keunggulan.items.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-xl p-6 hover:shadow-sm transition"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-14 h-14 mb-4 justify-items-center items-center flex mx-auto"
              />
              <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}

          {/* CTA */}
          <div className="lg:col-span-1 flex items-center justify-center text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              {keunggulan.slogan}
            </h3>
          </div>
        </div>
      </section>

      <div
        className="text-gray-800 bg-cover bg-center py-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Harga */}
        <section className="relative z-10 px-4">
          <div className="max-w-6xl mx-auto px-6 text-center">
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

        {/* Portofolio */}
        <section className="relative z-10 mt-20 px-4">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h3 className="text-indigo-600 font-semibold text-sm uppercase">
              {portofolio.subtitle}
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              {portofolio.title}
            </h2>
            <p className="text-gray-600 mb-12 max-w-xl mx-auto">
              {portofolio.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {portofolio.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-gray-800">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Konsultasi */}
      <section className="bg-cover bg-center mt-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-indigo-600 font-semibold text-sm uppercase">
            {konsultasi.subtitle}
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            {konsultasi.title}
          </h2>
          <div className="text-gray-600 space-y-4 mb-8">
            {konsultasi.description.map((text, i) => (
              <p key={i} className="text-sm md:text-base">
                {text}
              </p>
            ))}
          </div>
          <a
            href={konsultasi.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-700 text-white font-medium px-6 py-3 rounded-sm shadow hover:bg-indigo-100 transition"
          >
            Hubungi kami
          </a>
        </div>
      </section>
    </Layout>
  );
};
