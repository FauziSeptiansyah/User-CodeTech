import { Layout } from "../layout/Layout";
import FetchData from "../hooks/FetchData";

export const Portofolio = () => {
  const api = import.meta.env.VITE_API;

  // Hit data page
    const { data: dataPage } = FetchData({
      url: `${api}/pages`,
    });

  // Cek dataPage sebelum filter
  const pagesFilter = dataPage?.data?.filter(
    (page) => page.type === "portofolio"
  );

  // Hit data Portofolio
  const { data: dataPortofolio } = FetchData({
    url: `${api}/portfolios`,
  });

  const portofolio = {
    subtitle: "Portofolio",
    title: "Karya Terbaik untuk Setiap Ide Hebat",
    description:
      "Kami percaya bahwa setiap proyek adalah bukti nyata dari kolaborasi, inovasi, dan dedikasi. Dengan pengalaman dalam mengerjakan berbagai proyek, kami berkomitmen menghadirkan solusi yang tepat sasaran dan berdampak positif bagi setiap klien.",
  };

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
            {dataPortofolio?.data?.map((portofolio, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={`${import.meta.env.VITE_IMG}${portofolio.image}`}
                  alt={portofolio.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-gray-800">
                    {portofolio.title}
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
