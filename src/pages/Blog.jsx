import { Layout } from "../layout/Layout";
import { Link } from "react-router-dom";
import FetchData from "../hooks/FetchData";
import { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

export const Blog = () => {
  const api = import.meta.env.VITE_API;

  // Hit data page
  const { data: dataPage } = FetchData({ url: `${api}/pages` });

  // Cek dataPage sebelum filter
  const pagesFilter = dataPage?.data?.filter((page) => page.type === "blog");

  // Hit data kategori
  const { data: dataCategories } = FetchData({
    url: `${api}/category-articles`,
  });

  // Hit data blog
  const { data: dataBlog } = FetchData({ url: `${api}/articles` });

  const blogContent = {
    subtitle: "Blog",
    title: "Wawasan, Tips, & Cerita Terbaru untuk Anda",
    description:
      "Kami menghadirkan berbagai artikel informatif, inspiratif, dan relevan yang dirancang untuk membantu Anda mendapatkan pemahaman yang lebih baik, menemukan solusi, dan tetap terhubung dengan tren terbaru. Temukan panduan praktis, ulasan mendalam, hingga berita terbaru yang kami sajikan khusus untuk Anda.",
  };

  // State filter artikel
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Handler input pencarian
  const handleSearch = (e) => setSearchQuery(e.target.value);

  // Filter artikel
  const filteredBlogs = dataBlog?.data
    ?.filter((blog) =>
      selectedCategory === null || selectedCategory === "all"
        ? true
        : blog.category === selectedCategory
    )
    ?.filter((blog) =>
      blog.slug.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full">
        {pagesFilter?.map((page) => (
          <div key={page.id} className="relative w-full">
            {/* Gambar latar belakang */}
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

      {/* Blog Section */}
      <section className="relative z-10 -mt-20 sm:-mt-32 md:-mt-40 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 md:p-12 text-center">
          {/* Header Blog */}
          <h3 className="text-indigo-600 font-semibold text-sm uppercase">
            {blogContent.subtitle}
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            {blogContent.title}
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            {blogContent.description}
          </p>

          {/* Search Bar */}
          <div className="flex justify-center mb-6">
            <div className="relative w-full max-w-7xl">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search for keywords..."
                className="w-full px-6 py-3 text-gray-600 rounded-md shadow-sm"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Grid Blog & Category */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-start">
            {/* Kategori Artikel */}
            <div className="order-1 md:order-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-fit">
              <h3 className="text-base font-semibold mb-4 text-gray-800 text-center">
                Category Article
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`text-sm px-4 py-2 rounded-full border transition ${
                    selectedCategory === null || selectedCategory === "all"
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "text-gray-600 hover:text-indigo-600 border-gray-300"
                  }`}
                >
                  All
                </button>
                {dataCategories?.data?.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.category)}
                    className={`text-sm px-4 py-2 rounded-full border transition ${
                      selectedCategory === category.category
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "text-gray-600 hover:text-indigo-600 border-gray-300"
                    }`}
                  >
                    {category.category === "all"
                      ? "Semua Artikel"
                      : category.category}
                  </button>
                ))}
              </div>
            </div>

            {/* Daftar Blog */}
            <div className="order-2 md:order-1 md:col-span-2 space-y-8">
              {filteredBlogs?.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <Link
                    to={`/blog/${blog.slug}`}
                    key={blog.id}
                    className="block rounded-xl hover:bg-gray-50 transition"
                  >
                    <div className="flex flex-col md:flex-row gap-5 items-start p-4">
                      {/* Thumbnail Blog */}
                      <div className="w-full md:w-[250px] h-[160px] overflow-hidden rounded-lg border shadow-sm">
                        <img
                          src={`${import.meta.env.VITE_IMG}${blog.thumbnail}`}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Konten Blog */}
                      <div className="flex-1 space-y-2 text-start">
                        <h3 className="text-lg md:text-xl font-medium text-gray-800 hover:text-indigo-600 transition line-clamp-2">
                          {blog.title}
                        </h3>

                        {/* Info tanggal dan view */}
                        <div className="text-sm text-gray-500 flex flex-wrap items-center gap-3">
                          <div className="flex items-center gap-1">
                            <FiCalendar className="text-indigo-500" />
                            <span className="text-indigo-600 font-medium">
                              {new Date(blog.created_at).toLocaleDateString(
                                "id-ID",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiEye className="text-indigo-500" />
                            <span>{blog.views} views</span>
                          </div>
                        </div>

                        {/* Deskripsi singkat */}
                        <p
                          className="text-sm text-gray-600 line-clamp-3"
                          dangerouslySetInnerHTML={{
                            __html:
                              blog.description.length > 200
                                ? blog.description.slice(0, 200) + "..."
                                : blog.description,
                          }}
                        ></p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-gray-500 text-center italic py-8">
                  Blog tidak ditemukan.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
