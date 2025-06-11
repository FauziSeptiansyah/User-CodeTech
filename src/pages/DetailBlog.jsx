import { Layout } from "../layout/Layout";
import { data, Link, useParams } from "react-router-dom";
import FetchData from "../hooks/FetchData";

export const DetailBlog = () => {
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

  const { slug } = useParams();
  const selectedBlog = dataBlog?.data?.find((blog) => blog.slug === slug);

  if (!selectedBlog) {
    return <div>Blog not found</div>;
  }

  return (
    <Layout>
      <section className="relative w-full">
        {pagesFilter?.map((page) => (
          <div key={page.id} className="relative h-full w-full">
            <img
              src={`${import.meta.env.VITE_IMG}${page.banner}`}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center -mt-20">
              <div className="max-w-6xl">
                <div className="mb-10">
                  <h1 className="mb-3 text-5xl font-bold">{page.title}</h1>
                  <p className="text-md text-gray-400">{page.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Blog */}
      <section className="relative z-10 -mt-40 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl bg-gradient-to-b from-white to-0% p-6 md:p-12 text-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Detail Blog */}
            <div className="col-span-2 w-full items-start text-left">
              <div className="overflow-hidden mb-8">
                <img
                  src={`${import.meta.env.VITE_IMG}${selectedBlog.thumbnail}`}
                  alt={selectedBlog.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {selectedBlog.title}
                </h1>
                <span className="text-sm text-indigo-600 font-medium">
                  Post on : {selectedBlog.created_at && selectedBlog.created_at.slice(0, 10)}
                </span>
                <div className="text-gray-700 text-base space-y-4">
                  {selectedBlog.description}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Search menu */}
              <div className="flex justify-center">
                <div className="relative w-full">
                  <input
                    type="text"
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
              </div>

              {/* box category */}
              <div className="bg-white rounded-xl p-6 shadow-md w-full h-fit">
                <h3 className="text-start text-base font-semibold mb-4 text-black">
                  Category Article
                </h3>
                <div className="flex flex-wrap gap-3">
                  {dataCategories?.data?.map((category) => (
                    <a
                      key={category.id}
                      href="#"
                      className="text-sm text-gray-600 hover:text-indigo-600 transition duration-300 border border-gray-300 px-4 py-2 rounded-full"
                    >
                      {category.category}
                    </a>
                  ))}
                </div>
              </div>

              {/* box list article */}
              <div className="bg-white rounded-xl p-6 shadow-md w-full h-fit">
                <h3 className="text-start text-base font-semibold mb-4 text-black">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {dataBlog?.data?.map((blog) => (
                    <Link
                      to="/home"
                      key={blog.id}
                      className="flex text-start items-start space-x-3"
                    >
                      <img
                        src={`${import.meta.env.VITE_IMG}${blog.thumbnail}`}
                        alt={blog.title}
                        className="w-12 h-12 rounded-md object-cover flex-shrink-0"
                      />
                      <div className="flex flex-col justify-center">
                        <h4 className="text-sm font-semibold text-gray-900 leading-tight line-clamp-2">
                          {blog.title}
                        </h4>
                        <span className="text-xs text-gray-400 mt-1">
                          {blog.created_at && blog.created_at.slice(0, 10)}
                        </span>
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
