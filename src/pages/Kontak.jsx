import { Layout } from "../layout/Layout";
import FetchData from "../hooks/FetchData";
import { mapContent } from "../utils/data";

// icon kontak
import phone from "../assets/image/telepon.png";
import email from "../assets/image/email.png";
import office_operation from "../assets/image/jam.png";


export const Kontak = () => {
  const api = import.meta.env.VITE_API;

  // Hit data page
  const { data: dataPage } = FetchData({
    url: `${api}/pages`,
  });

  // Cek dataPage sebelum filter
  const pagesFilter = dataPage?.data?.filter((page) => page.type === "kontak");

  // Hit data Kontak
  const { data: dataKontak } = FetchData({
    url: `${api}/contacts`,
  });

  return (
    <Layout>
      {/* Section Hero */}
      <section className="relative w-full">
        {pagesFilter?.map((page) => (
          <div key={page.id} className="relative w-full">
            {/* Gambar background */}
            <img
              src={`${import.meta.env.VITE_IMG}${page.banner}`}
              alt="Hero Background"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            {/* Overlay teks */}
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

      {/* Section Kontak */}
      <section className="relative z-10 -mt-20 sm:-mt-32 md:-mt-40 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 md:p-12 text-center">
          {/* Header kontak */}
          <h3 className="text-indigo-600 font-semibold text-sm uppercase">
            {mapContent.subtitle}
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            {mapContent.title}
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            {mapContent.description}
          </p>

          {/* Daftar kontak */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {/* Phone */}
            <div className="flex items-start p-5 rounded-xl shadow-sm space-x-4">
              <img src={phone} alt="phone" className="w-10 h-10" />
              <div className="text-left">
                <p className="font-semibold text-gray-800">Phone</p>
                <p className="text-sm text-gray-600">
                  {dataKontak?.data?.phone}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start p-5 rounded-xl shadow-sm space-x-4">
              <img src={email} alt="email" className="w-10 h-10" />
              <div className="text-left">
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-sm text-gray-600">
                  {dataKontak?.data?.email}
                </p>
              </div>
            </div>

            {/* Office Operation */}
            <div className="flex items-start p-5 rounded-xl shadow-sm space-x-4">
              <img src={office_operation} alt="office" className="w-10 h-10" />
              <div className="text-left">
                <p className="font-semibold text-gray-800">Office Operation</p>
                <p className="text-sm text-gray-600">
                  {dataKontak?.data?.office_operation}
                </p>
              </div>
            </div>
          </div>

          {/* Peta dan alamat */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start w-full max-w-6xl">
              {/* Peta Google Maps */}
              <div className="md:col-span-2 w-full aspect-[16/9] rounded-xl overflow-hidden shadow">
                <iframe
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20jl%20edy%20santoso%20Rawageni,%20Ratu%20Jaya,%20Cipayung,%20Depok%20+(CodeTech)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Lokasi CodeTech"
                ></iframe>
              </div>

              {/* Alamat Kantor */}
              <div className="text-left flex items-center">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Alamat Kantor
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {dataKontak?.data?.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
