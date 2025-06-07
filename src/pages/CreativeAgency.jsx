import { Layout } from "../layout/Layout";
import heroImage from "../assets/image/hero.png";

import icon1 from "../assets/image/icon1 (1).png";
import icon2 from "../assets/image/icon1 (2).png";
import icon3 from "../assets/image/icon1 (3).png";

export const CreativeAgency = () => {
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
    subtitle: "Creative Agency",
    title: "Harga Jasa Creative Agency di CodeTech",
    description:
      "Kami menyediakan solusi bisnis terintegrasi, mulai dari perencanaan, desain, pengembangan, hingga digital marketing untuk mendorong pertumbuhan bisnis Anda.",
    items: [
      {
        icon: icon1,
        title: "Landing Page",
        price: "IDR 100.00",
        features: ["Harga di atas per-1 Desain Banner/Slider", "1x Revisi"],
        provision: {
          description: "Materi design disediakan oleh klien:",
          listProvision: [
            "Minimal 3 foto",
            "Layanan",
            "Alamat",
            "Kontak wa/telp",
            "Promo (jika ada)",
          ],
        },
      },
      {
        icon: icon2,
        title: "Desain Kartu Nama",
        price: "IDR 100.00",
        features: ["Harga di atas per-1 Desain Banner/Slider", "1x Revisi"],
        provision: {
          description: "Materi design disediakan oleh klien:",
          listProvision: [
            "Minimal 3 foto",
            "Layanan",
            "Alamat",
            "Kontak wa/telp",
            "Promo (jika ada)",
          ],
        },
      },
      {
        icon: icon3,
        title: "Desain Logo",
        price: "IDR 100.00",
        features: ["Harga di atas per-1 Desain Banner/Slider", "1x Revisi"],
        provision: {
          description: "Materi design disediakan oleh klien:",
          listProvision: [
            "Minimal 3 foto",
            "Layanan",
            "Alamat",
            "Kontak wa/telp",
            "Promo (jika ada)",
          ],
        },
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

          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                {harga.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between text-center"
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-5 h-5 mx-auto"
                    />
                    <h4 className="text-md font-medium text-gray-800 mb-2 mt-4">
                      {item.title}
                    </h4>
                    <p className="text-gray-800 font-semibold text-xl mb-4">
                      {item.price}
                    </p>
                    <hr className="border-t border-gray-300 mb-4" />

                    {/* Features */}
                    {item.features?.length > 0 && (
                      <ul className="text-left text-sm text-gray-600 mb-4 space-y-2">
                        {item.features.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                    )}

                    {/* Provision (opsional) */}
                    {item.provision && (
                      <>
                        <p className="text-left text-sm text-gray-600 font-semibold mb-1">
                          {item.provision.description}
                        </p>
                        <ul className="text-left text-sm text-gray-600 space-y-1">
                          {item.provision.listProvision?.map((prov, idx) => (
                            <li key={idx}>• {prov}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
