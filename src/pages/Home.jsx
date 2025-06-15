import { Layout } from "../layout/Layout";
import FetchData from "../hooks/FetchData";
import bgImage from "../assets/image/background-blue.png";
import { Link } from "react-router-dom";
import AutoSwiper from "../components/AutoSwiper";

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

  const keunggulan = {
    subtitle: "Keunggulan",
    title: "Kenapa CodeTech Layak Jadi Pilihan Anda?",
    description:
      "Kami tidak hanya menawarkan layanan, kami menghadirkan solusi digital terintegrasi yang dirancang untuk mendukung pertumbuhan bisnis Anda secara berkelanjutan. Dengan memadukan inovasi, teknologi terkini, dan pendekatan yang berfokus pada kebutuhan pengguna, kami membantu Anda membangun fondasi digital yang kuat, efisien, dan siap bersaing di era modern.",
    slogan: "Ayo, Mulai Transformasi Digital Anda Hari Ini!",
  };

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

  // Hit data Kontak
  const { data: dataKontak } = FetchData({
    url: `${api}/contacts`,
  });

  const konsultasi = {
    subtitle: "Konsultasi",
    title: "Konsultasikan Sekarang!",
    description: [
      "Jangan ragu! Wujudkan kebutuhan digital Anda bersama CodeTech.",
      "Kami siap menjadi rekan Anda dengan konsultasi gratis 24 jam nonstop. Tim kami hadir untuk memahami tujuan dan tantangan Anda, memberikan solusi tepat guna, dan membantu Anda meraih sukses digital yang tepat sasaran.",
      "Manfaatkan kesempatan ini sebaik mungkin!",
      "Hubungi kami untuk konsultasi gratis, dan mulailah perjalanan menuju keberhasilan digital bagi bisnis Anda.",
    ],
    buttonLink: `https://wa.me/${dataKontak?.data?.phone || ""}`, // ✅ pakai string template benar
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
                <button className="btn bg-white text-black rounded-full">
                  Get Started
                </button>
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
              {dataProfil?.data?.description &&
                dataProfil?.data?.description.slice(0, 360) + "..."}
            </p>
            <button className="btn btn-outline btn-primary">
              <Link to={`/profil`}>Read More</Link>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-20 text-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Judul dan Deskripsi */}
          <div className="lg:col-span-2">
            <h3 className="text-indigo-600 font-semibold text-sm uppercase">
              Keunggulan
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              {keunggulan.title}
            </h2>
            <p className="text-gray-600">{keunggulan.description}</p>
          </div>

          {/* Mapping fitur */}
          {dataKeunggulan?.data?.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-xl p-6 hover:shadow-sm transition"
            >
              <img
                src={`${import.meta.env.VITE_IMG}${feature.icon}`}
                alt={feature.title}
                className="w-14 h-14 mb-4 justify-items-center items-center flex mx-auto"
              />
              <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}

          {/* CTA */}
          <div className="lg:col-span-1 flex items-center justify-center text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              {keunggulan.slogan}
            </h3>
          </div>
        </div>
      </section>

      <div
        className="text-gray-800 bg-cover bg-center py-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Harga */}
        <div className="bg-white max-h-1/2">
          <section className="relative z-10 px-4">
            <div className="max-w-6xl mx-auto px-6 text-center">
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
                    <h4 className="text-md font-medium mb-2">
                      {product.title}
                    </h4>
                    <p className="text-gray-800 font-semibold text-xl">
                      {product.price}
                    </p>
                    <span className="text-gray-400 text-sm mb-4">
                      {product.discount}
                    </span>
                    <hr className="border-t border-gray-300 mb-6" />
                    <ul className="text-left text-sm text-gray-600 mb-4 space-y-2">
                      {/* {product.description.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))} */}
                      {product.description}
                    </ul>
                    <button className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-700 transition">
                      Pesan Sekarang
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

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
          </div>
        </section>

        <section className="relative z-10 mt-10">
          <AutoSwiper>
            {dataPortofolio?.data?.map((portofolio, index) => (
              <div
                key={index}
                className="relative w-full mx-auto overflow-hidden shadow-lg"
              >
                <img
                  src={`${import.meta.env.VITE_IMG}${portofolio.image}`}
                  alt={portofolio.title}
                  className="w-full h-1/2 object-cover"
                />

                <div className="absolute bottom-0 w-full text-center py-1 text-sm font-bold text-gray-800">
                  {portofolio.title}
                </div>
              </div>
            ))}
          </AutoSwiper>
        </section>
      </div>

      {/* Konsultasi */}
      <section className="bg-cover bg-center mt-16">
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
            href={konsultasi.buttonLink}
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
