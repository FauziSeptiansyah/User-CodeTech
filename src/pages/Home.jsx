import { Layout } from "../layout/Layout";
import FetchData from "../hooks/FetchData";
import bgImage from "../assets/image/background-blue.png";
import { Link } from "react-router-dom";
import AutoSwiper from "../components/AutoSwiper";
import {
  keunggulan,
  hargaWebsite,
  portofolio,
  konsultasi,
} from "../utils/data";

export const Home = () => {
  const api = import.meta.env.VITE_API;

  // Hit data page
  const { data: dataPage } = FetchData({
    url: `${api}/pages`,
  });

  // Cek dataPage sebelum filter
  const pagesFilter = dataPage?.data?.filter((page) => page.type === "home");

  // Hit data profil
  const { data: dataProfil } = FetchData({
    url: `${api}/abouts`,
  });

  // Hit data keunggulan
  const { data: dataKeunggulan } = FetchData({
    url: `${api}/services`,
  });

  // Hit data Layanan
  const { data: dataProduct } = FetchData({
    url: `${api}/products`,
  });

  // Cek dataProduct sebelum filter
  const productFilter = dataProduct?.data?.filter(
    (product) => product.type === "website"
  );

  // Hit data Portofolio
  const { data: dataPortofolio } = FetchData({
    url: `${api}/portfolios`,
  });

  // Hit data Kontak
  const { data: dataKontak } = FetchData({
    url: `${api}/contacts`,
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full">
        {pagesFilter?.map((page) => (
          <div key={page.id} className="relative w-full">
            <img
              src={`${import.meta.env.VITE_IMG}${page.banner}`}
              alt="Hero Background"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
              <div className="max-w-6xl">
                <div className="mb-6 sm:mb-8 md:mb-10">
                  <h1 className="mb-2 sm:mb-3 text-3xl sm:text-4xl md:text-5xl font-bold">
                    {page.title}
                  </h1>
                  <p className="text-sm sm:text-md text-gray-400">
                    {page.description}
                  </p>
                </div>
                <button className="btn bg-white text-black rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Profil Section */}
      <section className="relative z-10 px-4 -mt-8 sm:-mt-12 md:-mt-16">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-8">
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
            <div
              className="trix-content text-gray-700 text-base space-y-4 mb-4"
              dangerouslySetInnerHTML={{
                __html: dataProfil?.data?.description.slice(0, 430) + "...",
              }}
            ></div>
            <button className="btn btn-outline btn-primary">
              <Link to={`/profil`}>Read More</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section className="py-16 px-6 md:px-20 text-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Judul & Deskripsi */}
          <div className="lg:col-span-2">
            <h3 className="text-indigo-600 font-semibold text-sm uppercase">
              Keunggulan
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              {keunggulan.title}
            </h2>
            <p className="text-gray-600">{keunggulan.description}</p>
          </div>

          {/* Daftar Fitur */}
          {dataKeunggulan?.data?.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-xl p-6 hover:shadow-sm transition"
            >
              <img
                src={`${import.meta.env.VITE_IMG}${feature.icon}`}
                alt={feature.title}
                className="w-14 h-14 mb-4 mx-auto"
              />
              <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}

          {/* Slogan CTA */}
          <div className="lg:col-span-1 flex items-center justify-center text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              {keunggulan.slogan}
            </h3>
          </div>
        </div>
      </section>

      {/* Harga Section */}
      <section className="relative z-10 px-4">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-indigo-600 font-semibold text-sm uppercase">
            {hargaWebsite.subtitle}
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            {hargaWebsite.title}
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            {hargaWebsite.description}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productFilter?.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between"
              >
                <h4 className="text-md font-medium mb-2 text-gray-800">
                  {product.title}
                </h4>
                <p className="text-gray-800 font-semibold text-xl">
                  {product.price}
                </p>
                <span className="text-gray-400 text-sm mb-4">
                  {product.discount}
                </span>
                <hr className="border-t border-gray-300 mb-6" />
                <div
                  className="trix-content text-gray-700 text-base space-y-4 text-left"
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

      {/* Portofolio Section */}
      <section
        className="text-gray-800 bg-cover bg-center bg-no-repeat py-5 mt-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="relative px-4">
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
          </div>
        </div>

        <div className="relative z-10">
          <AutoSwiper>
            {dataPortofolio?.data?.map((portofolio, index) => (
              <div
                key={index}
                className="relative w-full mx-auto overflow-hidden rounded-xl shadow-lg group"
              >
                {/* Gambar Portofolio */}
                <img
                  src={`${import.meta.env.VITE_IMG}${portofolio.image}`}
                  alt={portofolio.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-center px-4">
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-2">
                      {portofolio.title}
                    </h3>
                    <a
                      href={portofolio.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-300 underline hover:text-blue-500"
                    >
                      {portofolio.url}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </AutoSwiper>
        </div>
      </section>

      {/* Konsultasi Section */}
      <section className="bg-cover bg-center mt-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-indigo-600 font-semibold text-sm uppercase">
            {konsultasi.subtitle}
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            {konsultasi.title}
          </h2>
          <div className="text-gray-600 space-y-4 mb-8">
            {konsultasi.description.map((text, i) => (
              <p key={i} className="text-sm md:text-base">
                {text}
              </p>
            ))}
          </div>
          <a
            href={`https://wa.me/${dataKontak?.data?.phone || ""}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-700 text-white font-medium px-6 py-3 rounded-sm shadow hover:bg-indigo-100 transition"
          >
            Hubungi kami
          </a>
        </div>
      </section>
    </Layout>
  );
};
