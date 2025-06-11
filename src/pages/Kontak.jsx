import { Layout } from "../layout/Layout";
import FetchData from "../hooks/FetchData";

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

  const mapContent = {
    subtitle: "Tanya Jawab",
    title: "Pertanyaan & Jawaban Yang Sering Ditanyakan",
    description:
      "Kami telah mengumpulkan pertanyaan umum yang sering diajukan oleh klien kami dan menjawabnya secara komprehensif.",
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

      {/* Kontak */}
      <section className="relative z-10 -mt-40 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl bg-gradient-to-b from-white to-0% p-6 md:p-12 text-center items-center">
          <h3 className="text-indigo-600 font-semibold text-sm uppercase">
            {mapContent.subtitle}
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            {mapContent.title}
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            {mapContent.description}
          </p>

          {/* Kontak List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {/* Phone */}
            <div className="flex items-start rounded-xl p-5 shadow-sm space-x-4">
              <img
                src={phone}
                alt={dataKontak?.data?.phone}
                className="w-10 h-10"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-800">Phone</p>
                <p className="text-gray-600 text-sm">{dataKontak?.data?.phone}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start rounded-xl p-5 shadow-sm space-x-4">
              <img
                src={email}
                alt={dataKontak?.data?.email}
                className="w-10 h-10"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-600 text-sm">{dataKontak?.data?.email}</p>
              </div>
            </div>

            {/* Whatsapp */}
            <div className="flex items-start rounded-xl p-5 shadow-sm space-x-4">
              <img
                src={office_operation}
                alt={dataKontak?.data?.office_operation}
                className="w-10 h-10"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-800">Office Operation</p>
                <p className="text-gray-600 text-sm">{dataKontak?.data?.office_operation}</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start w-full max-w-6xl">
              {/* Map - 2/3 lebar */}
              <div className="md:col-span-2 w-full aspect-[16/9] rounded-xl overflow-hidden shadow">
                <iframe
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20jl%20edy%20santoso%20Rawageni,%20Ratu%20Jaya,%20Cipayung,%20Depok%20+(CodeTech)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Lokasi CodeTech"
                ></iframe>
              </div>

              {/* Alamat - 1/3 lebar */}
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
