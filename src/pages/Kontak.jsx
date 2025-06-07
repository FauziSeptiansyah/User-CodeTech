import { Layout } from "../layout/Layout";
import heroImage from "../assets/image/hero.png";

import telepon from "../assets/image/telepon.png";
import email from "../assets/image/email.png";
import jam from "../assets/image/jam.png";

export const Kontak = () => {
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

  const mapContent = {
    subtitle: "Tanya Jawab",
    title: "Pertanyaan & Jawaban Yang Sering Ditanyakan",
    description:
      "Kami telah mengumpulkan pertanyaan umum yang sering diajukan oleh klien kami dan menjawabnya secara komprehensif.",
  };

  const kontakList = [
    {
      id: 1,
      icon: telepon,
      title: "Nomor Telpon",
      main: "0812-3456-7890",
    },
    {
      id: 2,
      icon: email,
      title: "Alamat Email",
      main: "2M8e8@example.com",
    },
    {
      id: 3,
      icon: jam,
      title: "Jam Operasional",
      main: "Senin - Jumat: 08:00 - 17:00",
    },
  ];

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
                  {hero.page.pageKontak.title}
                </h1>
                <p className="text-md text-gray-400">
                  {hero.page.pageKontak.slogan}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section className="relative z-10 -mt-40 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl bg-gradient-to-b from-white to-0% p-6 md:p-12 text-center items-center">
          <h3 className="text-indigo-600 font-semibold text-sm uppercase">
            {mapContent.subtitle}
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            {mapContent.title}
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            {mapContent.description}
          </p>

          {/* Kontak List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {kontakList.map((item) => (
              <div
                key={item.id}
                className="flex items-start rounded-xl p-5 shadow-sm space-x-4"
              >
                <img src={item.icon} alt={item.title} className="w-10 h-10" />
                <div className="text-left">
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.main}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start w-full max-w-6xl">
              {/* Map - 2/3 lebar */}
              <div className="md:col-span-2 w-full aspect-[16/9] rounded-xl overflow-hidden shadow">
                <iframe
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20jl%20edy%20santoso%20Rawageni,%20Ratu%20Jaya,%20Cipayung,%20Depok%20+(CodeTech)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Lokasi CodeTech"
                ></iframe>
              </div>

              {/* Alamat - 1/3 lebar */}
              <div className="text-left flex items-center">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Alamat Kantor
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Jl. Edy Santoso Rawageni, Ratu Jaya,
                    <br />
                    Cipayung, Depok, Jawa Barat 16439
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
