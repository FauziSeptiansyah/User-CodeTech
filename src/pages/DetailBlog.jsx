import { Layout } from "../layout/Layout";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import FetchData from "../hooks/FetchData";
import { FiCalendar } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

export const DetailBlog = () => {
  const api = import.meta.env.VITE_API;

  // Hit data page
  const { data: dataPage } = FetchData({ url: `${api}/pages` });

  // Hit data blog
  const { data: dataBlog } = FetchData({ url: `${api}/articles` });

  const { slug } = useParams();

  // Cek dataPage sebelum filter
  const pagesFilter = dataPage?.data?.filter((page) => page.type === "blog");

  // Cari artikel berdasarkan slug
  const selectedBlog = dataBlog?.data?.find((blog) => blog.slug === slug);

  // State filter artikel
  const [searchQuery, setSearchQuery] = useState("");

  // Handler input pencarian
  const handleSearch = (e) => setSearchQuery(e.target.value);

  // Filter artikel berdasarkan judul
  const filteredBlogs = dataBlog?.data?.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Loading atau data belum tersedia
  if (!dataPage || !dataBlog) {
    return (
      <Layout>
        <div className="p-10 text-center text-gray-600">Loading...</div>
      </Layout>
    );
  }

  // Jika blog tidak ditemukan
  if (!selectedBlog) {
    return (
      <Layout>
        <div className="p-10 text-center text-red-500 font-semibold">
          Blog tidak ditemukan.
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
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

      {/* Blog Detail Section */}
      <section className="relative z-10 -mt-20 sm:-mt-32 md:-mt-40 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Detail Content */}
            <div className="md:col-span-2 space-y-5 text-left">
              <div className="mb-8 rounded-xl overflow-hidden shadow">
                <img
                  src={`${import.meta.env.VITE_IMG}${selectedBlog.thumbnail}`}
                  alt={selectedBlog.title}
                  className="w-full h-[300px] sm:h-[400px] object-cover"
                />
              </div>

              {/* Info tanggal dan view */}
              <div className="text-sm text-gray-500 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1">
                  <FiCalendar className="text-indigo-500" />
                  <span className="font-medium text-indigo-600">
                    {new Date(selectedBlog.created_at).toLocaleDateString(
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
                  <span>{selectedBlog.views} views</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                {selectedBlog.title}
              </h1>

              {/* Isi konten blog */}
              <div
                className="text-gray-800 leading-relaxed prose max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedBlog.description }}
              ></div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pencarian */}
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search for keywords..."
                  className="w-full px-6 py-3 text-gray-600 rounded-md shadow-sm"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black">
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

              {/* Hasil Pencarian */}
              {searchQuery && (
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 space-y-4">
                  <h4 className="text-base font-semibold text-gray-800">
                    Hasil Pencarian
                  </h4>

                  {filteredBlogs?.length > 0 ? (
                    filteredBlogs.map((blog) => (
                      <Link
                        to={`/blog/${blog.slug}`}
                        key={blog.id}
                        className="flex items-center gap-4 hover:bg-neutral-50 transition p-2 rounded-lg"
                      >
                        <img
                          src={`${import.meta.env.VITE_IMG}${blog.thumbnail}`}
                          alt={blog.title}
                          className="w-14 h-14 rounded-xl object-cover border shadow-sm"
                        />
                        <div className="text-start">
                          <h4 className="text-sm font-medium text-gray-800 leading-tight line-clamp-2">
                            {blog.title}
                          </h4>
                          <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                            <FiCalendar className="text-indigo-400" />
                            <span>
                              {new Date(blog.created_at).toLocaleDateString(
                                "id-ID",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                }
                              )}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400 italic">
                      Tidak ditemukan.
                    </p>
                  )}
                </div>
              )}

              {/* Artikel Terbaru */}
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h3 className="text-base font-semibold text-gray-800 mb-4">
                  Recent Posts
                </h3>

                <div className="space-y-3">
                  {dataBlog?.data
                    ?.sort(
                      (a, b) => new Date(b.created_at) - new Date(a.created_at)
                    )
                    ?.slice(0, 5)
                    ?.map((blog) => (
                      <Link
                        to={`/blog/${blog.slug}`}
                        key={blog.id}
                        className="flex items-center gap-4 hover:bg-neutral-50 transition p-2 rounded-lg"
                      >
                        <img
                          src={`${import.meta.env.VITE_IMG}${blog.thumbnail}`}
                          alt={blog.title}
                          className="w-14 h-14 rounded-xl object-cover border shadow-sm"
                        />
                        <div className="text-start">
                          <h4 className="text-sm font-medium text-gray-800 leading-tight line-clamp-2">
                            {blog.title}
                          </h4>
                          <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                            <FiCalendar className="text-indigo-400" />
                            <span>
                              {new Date(blog.created_at).toLocaleDateString(
                                "id-ID",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                }
                              )}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
