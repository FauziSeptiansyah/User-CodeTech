import { Layout } from "../layout/Layout";
import heroImage from "../assets/image/hero.png";
import { useState } from "react";

import icon1 from "../assets/image/icon1 (1).png";
import icon2 from "../assets/image/icon1 (2).png";

export const Faq = () => {
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

  const faqContent = {
    subtitle: "Tanya Jawab",
    title: "Pertanyaan & Jawaban Yang Sering Ditanyakan",
    description:
      "Kami telah mengumpulkan pertanyaan umum yang sering diajukan oleh klien kami dan menjawabnya secara komprehensif.",
    categories: [
      {
        icon: icon1,
        title: "Tentang CodeTech",
        category: "tentang-kami",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      },
      {
        icon: icon2,
        title: "Layanan Kami",
        category: "layanan-kami",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      },
    ],
  };

  const faqQuestions = [
    {
      title: "What is Lorem Ipsum?",
      category: "tentang-kami",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    },
    {
      title: "Where does it come from?",
      category: "layanan-kami",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(
    faqContent.categories[0].category
  );
  const [openIndex, setOpenIndex] = useState(null);

  const filteredQuestions = faqQuestions.filter(
    (q) => q.category === selectedCategory
  );

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
                  {hero.page.pageFaq.title}
                </h1>
                <p className="text-md text-gray-400">
                  {hero.page.pageFaq.slogan}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
       <section className="relative z-10 -mt-40 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl bg-gradient-to-b from-white to-0% p-6 md:p-12 text-center items-center">
        <h3 className="text-indigo-600 font-semibold text-sm uppercase">
          {faqContent.subtitle}
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
          {faqContent.title}
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          {faqContent.description}
        </p>

        {/* Kategori FAQ */}
        <div className="flex justify-center mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-auto max-w-3xl">
            {faqContent.categories.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedCategory(item.category);
                  setOpenIndex(null);
                }}
                className={`rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 ${
                  selectedCategory === item.category
                    ? "bg-gray-200"
                    : "bg-white"
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-6 h-6 mx-auto mb-4"
                />
                <h4 className="text-md font-medium text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Accordion FAQ */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl space-y-4">
            {filteredQuestions.map((q, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-4 cursor-pointer hover:shadow transition"
              onClick={() => toggleDropdown(index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-gray-800 font-semibold">{q.title}</h4>
                <span className="text-indigo-600 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-4 border-t border-gray-200 pt-4 text-sm text-gray-800 text-left">{q.description}</p>
              )}
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
};
