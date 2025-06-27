import { Layout } from "../layout/Layout";
import { useState, useEffect } from "react";
import FetchData from "../hooks/FetchData";
import { faqContent } from "../utils/data";

export const Faq = () => {
  const api = import.meta.env.VITE_API;

  // Hit data page
  const { data: dataPage } = FetchData({ url: `${api}/pages` });

  // Cek dataPage sebelum filter
  const pagesFilter = dataPage?.data?.filter((page) => page.type === "faq");

  // Hit data kategori
  const { data: dataCategories } = FetchData({ url: `${api}/category-faqs` });

  // Hit data faq
  const { data: dataFaq } = FetchData({ url: `${api}/faqs` });

  // State
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  // Set kategori default saat data kategori tersedia
  useEffect(() => {
    if (dataCategories?.data?.length > 0 && !selectedCategory) {
      setSelectedCategory(dataCategories.data[0].category);
    }
  }, [dataCategories]);

  // Filter FAQ sesuai kategori terpilih
  const filteredQuestions =
    dataFaq?.data?.filter(
      (question) => question.category === selectedCategory
    ) || [];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      {/* Section Hero */}
      <section className="relative w-full">
        {pagesFilter?.map((page) => (
          <div key={page.id} className="relative w-full">
            {/* Gambar latar hero */}
            <img
              src={`${import.meta.env.VITE_IMG}${page.banner}`}
              alt="Hero Background"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            {/* Teks overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center -mt-10 sm:-mt-16 md:-mt-20">
              <div className="max-w-6xl">
                <h1 className="mb-2 sm:mb-3 text-3xl sm:text-4xl md:text-5xl font-bold">
                  {page.title}
                </h1>
                <p className="text-sm sm:text-md text-gray-400">
                  {page.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Section FAQ */}
      <section className="relative z-10 -mt-20 sm:-mt-32 md:-mt-40 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 md:p-12 text-center">
          {/* Judul dan deskripsi FAQ */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {dataCategories?.data?.map((category, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedCategory(category.category);
                    setOpenIndex(null);
                  }}
                  className={`rounded-xl shadow-lg p-6 cursor-pointer transition ${
                    selectedCategory === category.category
                      ? "bg-gray-200"
                      : "bg-white"
                  }`}
                >
                  <img
                    src={`${import.meta.env.VITE_IMG}${category.icon}`}
                    alt={category.category}
                    className="w-6 h-6 mx-auto mb-4"
                  />
                  <h4 className="text-md font-medium text-gray-800 mb-2">
                    {category.category}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Accordion pertanyaan */}
          <div className="flex justify-center">
            <div className="w-full max-w-4xl space-y-4">
              {filteredQuestions.map((question) => (
                <div
                  key={question.id}
                  onClick={() => toggleDropdown(question.id)}
                  className="border border-gray-200 rounded-xl p-4 cursor-pointer hover:shadow transition"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-gray-800 font-semibold">
                      {question.question}
                    </h4>
                    <span className="text-indigo-600 text-xl">
                      {openIndex === question.id ? "−" : "+"}
                    </span>
                  </div>
                  {openIndex === question.id && (
                    <p className="mt-4 border-t border-gray-200 pt-4 text-sm text-gray-800 text-left">
                      {question.answer}
                    </p>
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
