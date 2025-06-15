import { Layout } from "../layout/Layout";
import FetchData from "../hooks/FetchData";
import PanoramaSwiper from "../components/PanoramaSwiper";

export const Profil = () => {
  const api = import.meta.env.VITE_API;

  // Hit data page
  const { data: dataPage } = FetchData({
    url: `${api}/pages`,
  });

  // Cek dataPage sebelum filter
  const pagesFilter = dataPage?.data?.filter((page) => page.type === "profil");

  // Hit data profil
  const { data: dataProfil } = FetchData({
    url: `${api}/abouts`,
  });

  // Hit data Tim
  const { data: dataUsers } = FetchData({
    url: `${api}/users`,
  });

  const team = {
    subtitle: "Tim Kami",
    title: "Bangun Website Anda, Raih Kesuksesan Anda",
    description:
      "Dari mengatasi tantangan teknis hingga mendorong pertumbuhan bisnis, tim kami siap mendukung setiap langkah Anda. Mulailah perjalanan digital Anda bersama CodeTech, dan wujudkan kesuksesan yang lebih besar dengan solusi yang tepat dan terpercaya.",
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

      <section className="relative z-10 -mt-40 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl bg-gradient-to-b from-white to-0% p-6 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={`${import.meta.env.VITE_IMG}${dataProfil?.data?.image}`}
              alt={dataProfil?.data?.title}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-indigo-600 font-semibold text-sm uppercase">
              Halo!
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              {dataProfil?.data?.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {dataProfil?.data?.description && dataProfil?.data?.description.slice(0, 450) + "..."}
            </p>
            <button className="btn btn-outline btn-primary">Read More</button>
          </div>
        </div>
      </section>

      <section className="relative z-10 mt-20 px-4">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-indigo-600 font-semibold text-sm uppercase">
            {team.subtitle}
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            {team.title}
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            {team.description}
          </p>
        </div>
      </section>

      <section className="relative z-10 mt-10">
        <PanoramaSwiper>
          {dataUsers?.data?.map((user) => (
            <div
              key={user.id}
              className="relative w-full max-w-xs mx-auto overflow-hidden shadow-lg"
            >
              <img
                src={`${import.meta.env.VITE_IMG}${user.profile}`}
                alt={user.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full text-center py-1 text-sm font-bold text-white">
                {user.name}
              </div>
            </div>
          ))}
        </PanoramaSwiper>
      </section>
    </Layout>
  );
};
