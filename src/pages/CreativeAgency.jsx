import { Layout } from "../layout/Layout";
import FetchData from "../hooks/FetchData";

export const CreativeAgency = () => {
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
    (product) => product.type === "design"
  );

  const harga = {
    subtitle: "Creative Agency",
    title: "Harga Jasa Creative Agency di CodeTech",
    description:
      "Kami menyediakan solusi bisnis terintegrasi, mulai dari perencanaan, desain, pengembangan, hingga digital marketing untuk mendorong pertumbuhan bisnis Anda.",
  };

  return (
    <Layout>
      {/* Hero */}
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
                {productFilter?.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between text-center"
                  >
                    <img
                      src={`${import.meta.env.VITE_IMG}${product.icon}`}
                      alt={product.title}
                      className="w-5 h-5 mx-auto"
                    />
                    <h4 className="text-md font-medium text-gray-800 mb-2 mt-4">
                      {product.title}
                    </h4>
                    <p className="text-gray-800 font-semibold text-xl mb-4">
                      {product.price}
                    </p>
                    <hr className="border-t border-gray-300 mb-4" />

                    <ul className="text-left text-sm text-gray-600 mb-4 space-y-2">
                      {product.description}
                    </ul>

                    {/* {item.features?.length > 0 && (
                      <ul className="text-left text-sm text-gray-600 mb-4 space-y-2">
                        {item.features.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                    )}

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
                    )} */}
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
