import { Layout } from "../layout/Layout";
import FetchData from "../hooks/FetchData";

export const JasaPembuatanWeb = () => {
  const api = import.meta.env.VITE_API;

  // Hit data page
  const { data: dataPage } = FetchData({
    url: `${api}/pages`,
  });

  // Cek dataPage sebelum filter
  const pagesFilter = dataPage?.data?.filter((page) => page.type === "layanan");

  // Hit data Layanan
  const { data: dataProduct } = FetchData({
    url: `${api}/products`,
  });

  // Cek dataProduct sebelum filter
  const productFilter = dataProduct?.data?.filter(
    (product) => product.type === "website"
  );

  const harga = {
    subtitle: "Website",
    title: "Harga Website di CodeTech",
    description:
      "Lebih dari 2.000 website profesional yang telah berhasil tim profesional kami bangun dan online optimal.",
  };

  return (
    <Layout>
      <section className="relative w-full">
        {pagesFilter?.map((page) => (
          <div key={page.id} className="relative h-full w-full">
            <img
              src={`${import.meta.env.VITE_IMG}${page.banner}`}
              alt="Hero Background"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center -mt-10 sm:-mt-16 md:-mt-20">
              <div className="max-w-6xl">
                <div className="mb-6 sm:mb-8 md:mb-10">
                  <h1 className="mb-2 sm:mb-3 text-3xl sm:text-4xl md:text-5xl font-bold">
                    {page.title}
                  </h1>
                  <p className="text-sm sm:text-md text-gray-400">
                    {page.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Harga */}
      <section className="relative z-10 -mt-20 sm:-mt-32 md:-mt-40 px-4">
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
            {productFilter?.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between"
              >
                <h4 className="text-md font-medium mb-2 text-gray-800">{product.title}</h4>
                <p className="text-gray-800 font-semibold text-xl">
                  {product.price}
                </p>
                <span className="text-gray-400 text-sm mb-4">
                  {product.discount}
                </span>
                <hr className="border-t border-gray-300 mb-6" />
                <div
                  className="text-gray-700 text-base space-y-4"
                  dangerouslySetInnerHTML={{
                    __html: product.description,
                  }}
                ></div>
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
