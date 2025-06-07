import { Layout } from "../layout/Layout";
import heroImage from "../assets/image/hero.png";

import porto1 from "../assets/image/Artinn.png";
import porto2 from "../assets/image/healtykids.png";
import porto3 from "../assets/image/Katar.png";
import porto4 from "../assets/image/JasaGo.png";
import porto5 from "../assets/image/PAKampus.png";
import porto6 from "../assets/image/Stunting.png";

export const Portofolio = () => {
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
                  {hero.page.pagePortofolio.title}
                </h1>
                <p className="text-md text-gray-400">
                  {hero.page.pagePortofolio.slogan}
                </p>
              </div>
            </div>
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
    </Layout>
  );
};
