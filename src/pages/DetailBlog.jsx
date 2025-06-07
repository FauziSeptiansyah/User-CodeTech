import { Layout } from "../layout/Layout";
import { Link, useParams } from "react-router-dom";
import heroImage from "../assets/image/hero.png";
import blogImage from "../assets/image/blog.png";

export const DetailBlog = () => {
  const hero = {
    image: heroImage,
    page: {
      pageHome: {
        title: "Bangun Masa Depan Digital Anda Bersama Codetech",
        slogan: "Pilihan Utama anda dalam Membangun Website Profesional",
      },
      pageProfil: {
        title: "Profil Kami",
        slogan:
          "Bersama tim ahli kami, kami siap membantu Anda menciptakan pengalaman online yang memukau dan mengubah pengunjung menjadi pelanggan setia.",
      },
      pageLayanan: {
        title: "Layanan Kami",
        slogan:
          "Bersama tim ahli kami, kami siap membantu Anda menciptakan pengalaman online yang memukau dan mengubah pengunjung menjadi pelanggan setia.",
      },
      pagePortofolio: {
        title: "Portofolio",
        slogan:
          "Bersama tim ahli kami, kami siap membantu Anda menciptakan pengalaman online yang memukau dan mengubah pengunjung menjadi pelanggan setia.",
      },
      pageFaq: {
        title: "Frequently Asked Questions",
        slogan:
          "Bersama tim ahli kami, kami siap membantu Anda menciptakan pengalaman online yang memukau dan mengubah pengunjung menjadi pelanggan setia.",
      },
      pageBlog: {
        title: "Blog",
        slogan:
          "Bersama tim ahli kami, kami siap membantu Anda menciptakan pengalaman online yang memukau dan mengubah pengunjung menjadi pelanggan setia.",
      },
      pageKontak: {
        title: "Kontak",
        slogan:
          "Bersama tim ahli kami, kami siap membantu Anda menciptakan pengalaman online yang memukau dan mengubah pengunjung menjadi pelanggan setia.",
      },
    },
  };

  const categoryBlog = [
    {
      id: 1,
      title: "Website",
    },
    {
      id: 2,
      title: "CodeTech",
    },
    {
      id: 3,
      title: "Aplikasi",
    },
  ];

  const blog = [
    {
      id: 1,
      title: "Paket Website Profesional: Membangun Identitas Online Anda",
      image: blogImage,
      category: "Website",
      slug: "paket-website-profesional-membangun-identitas-online-anda",
      date: "10/04/2025",
      description: [
        "Dalam era digital saat ini, memiliki website profesional bukan lagi pilihan, tetapi kebutuhan.",
        "Website Anda adalah representasi online dari bisnis Anda dan memainkan peran penting dalam membentuk persepsi pelanggan.",
        "Paket Website Profesional dirancang untuk membantu Anda membangun identitas online yang kuat dan terpercaya.",
        "Paket ini ideal untuk bisnis yang ingin tampil profesional dan menarik di dunia maya.",

        "Fitur Utama:",
        "• Desain Responsif: Website akan terlihat menarik dan berfungsi dengan baik di berbagai perangkat, mulai dari desktop hingga smartphone.",
        "• Desain Kustom: Desain yang disesuaikan dengan branding dan kebutuhan bisnis Anda.",
        "• Optimasi SEO Dasar: Website Anda dioptimalkan untuk mesin pencari agar lebih mudah ditemukan oleh calon pelanggan.",
        "• Integrasi Media Sosial: Tautkan akun media sosial Anda untuk meningkatkan interaksi dan jangkauan.",
        "• Formulir Kontak: Memudahkan pengunjung untuk menghubungi Anda secara langsung melalui website.",
        "• Galeri atau Portofolio: Tampilkan produk, layanan, atau hasil kerja Anda dengan tampilan yang menarik.",
        "• Halaman Tentang Kami dan Layanan: Informasi lengkap tentang siapa Anda dan apa yang Anda tawarkan.",
        "• CMS (Content Management System): Kemudahan mengelola dan memperbarui konten website sendiri tanpa keahlian teknis.",
        "• Domain dan Hosting: Termasuk domain dan layanan hosting selama 1 tahun.",
        "• Dukungan Teknis: Bantuan teknis selama proses pembangunan dan setelah website selesai.",

        "Manfaat:",
        "• Meningkatkan kredibilitas bisnis Anda.",
        "• Menjangkau audiens yang lebih luas.",
        "• Memberikan informasi yang jelas dan mudah diakses tentang produk atau layanan Anda.",
        "• Meningkatkan peluang konversi dan penjualan.",
        "• Memperkuat identitas merek Anda secara online.",

        "Paket Website Profesional adalah solusi tepat bagi Anda yang ingin memulai atau memperbarui kehadiran online Anda dengan cara yang efektif dan efisien.",
      ],
    },
    {
      id: 2,
      title: "website bussines untuk anda",
      image: blogImage,
      category: "Website",
      slug: "website-bussines-untuk-anda",
      date: "10/04/2025",
      description: [
        "Dalam era digital saat ini, memiliki website profesional bukan lagi pilihan, tetapi kebutuhan.",
        "Website Anda adalah representasi online dari bisnis Anda dan memainkan peran penting dalam membentuk persepsi pelanggan.",
        "Paket Website Profesional dirancang untuk membantu Anda membangun identitas online yang kuat dan terpercaya.",
        "Paket ini ideal untuk bisnis yang ingin tampil profesional dan menarik di dunia maya.",

        "Fitur Utama:",
        "• Desain Responsif: Website akan terlihat menarik dan berfungsi dengan baik di berbagai perangkat, mulai dari desktop hingga smartphone.",
        "• Desain Kustom: Desain yang disesuaikan dengan branding dan kebutuhan bisnis Anda.",
        "• Optimasi SEO Dasar: Website Anda dioptimalkan untuk mesin pencari agar lebih mudah ditemukan oleh calon pelanggan.",
        "• Integrasi Media Sosial: Tautkan akun media sosial Anda untuk meningkatkan interaksi dan jangkauan.",
        "• Formulir Kontak: Memudahkan pengunjung untuk menghubungi Anda secara langsung melalui website.",
        "• Galeri atau Portofolio: Tampilkan produk, layanan, atau hasil kerja Anda dengan tampilan yang menarik.",
        "• Halaman Tentang Kami dan Layanan: Informasi lengkap tentang siapa Anda dan apa yang Anda tawarkan.",
        "• CMS (Content Management System): Kemudahan mengelola dan memperbarui konten website sendiri tanpa keahlian teknis.",
        "• Domain dan Hosting: Termasuk domain dan layanan hosting selama 1 tahun.",
        "• Dukungan Teknis: Bantuan teknis selama proses pembangunan dan setelah website selesai.",

        "Manfaat:",
        "• Meningkatkan kredibilitas bisnis Anda.",
        "• Menjangkau audiens yang lebih luas.",
        "• Memberikan informasi yang jelas dan mudah diakses tentang produk atau layanan Anda.",
        "• Meningkatkan peluang konversi dan penjualan.",
        "• Memperkuat identitas merek Anda secara online.",

        "Paket Website Profesional adalah solusi tepat bagi Anda yang ingin memulai atau memperbarui kehadiran online Anda dengan cara yang efektif dan efisien.",
      ],
    },
    {
      id: 3,
      title: "CodeTech Dibangun Pada Tahun 2025",
      image: blogImage,
      category: "Website",
      slug: "codetech-dibangun-pada-tahun-2025",
      date: "10/04/2025",
      description: [
        "Dalam era digital saat ini, memiliki website profesional bukan lagi pilihan, tetapi kebutuhan.",
        "Website Anda adalah representasi online dari bisnis Anda dan memainkan peran penting dalam membentuk persepsi pelanggan.",
        "Paket Website Profesional dirancang untuk membantu Anda membangun identitas online yang kuat dan terpercaya.",
        "Paket ini ideal untuk bisnis yang ingin tampil profesional dan menarik di dunia maya.",

        "Fitur Utama:",
        "• Desain Responsif: Website akan terlihat menarik dan berfungsi dengan baik di berbagai perangkat, mulai dari desktop hingga smartphone.",
        "• Desain Kustom: Desain yang disesuaikan dengan branding dan kebutuhan bisnis Anda.",
        "• Optimasi SEO Dasar: Website Anda dioptimalkan untuk mesin pencari agar lebih mudah ditemukan oleh calon pelanggan.",
        "• Integrasi Media Sosial: Tautkan akun media sosial Anda untuk meningkatkan interaksi dan jangkauan.",
        "• Formulir Kontak: Memudahkan pengunjung untuk menghubungi Anda secara langsung melalui website.",
        "• Galeri atau Portofolio: Tampilkan produk, layanan, atau hasil kerja Anda dengan tampilan yang menarik.",
        "• Halaman Tentang Kami dan Layanan: Informasi lengkap tentang siapa Anda dan apa yang Anda tawarkan.",
        "• CMS (Content Management System): Kemudahan mengelola dan memperbarui konten website sendiri tanpa keahlian teknis.",
        "• Domain dan Hosting: Termasuk domain dan layanan hosting selama 1 tahun.",
        "• Dukungan Teknis: Bantuan teknis selama proses pembangunan dan setelah website selesai.",

        "Manfaat:",
        "• Meningkatkan kredibilitas bisnis Anda.",
        "• Menjangkau audiens yang lebih luas.",
        "• Memberikan informasi yang jelas dan mudah diakses tentang produk atau layanan Anda.",
        "• Meningkatkan peluang konversi dan penjualan.",
        "• Memperkuat identitas merek Anda secara online.",

        "Paket Website Profesional adalah solusi tepat bagi Anda yang ingin memulai atau memperbarui kehadiran online Anda dengan cara yang efektif dan efisien.",
      ],
    },
  ];

  const { slug } = useParams();
  const selectedBlog = blog.find((item) => item.slug === slug);

  if (!selectedBlog) {
    return <div>Blog not found</div>;
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative w-full">
        <div className="relative h-full w-full">
          <img
            src={hero.image}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center -mt-20">
            <div className="max-w-6xl">
              <div className="mb-10">
                <h1 className="mb-3 text-5xl font-bold">
                  {hero.page.pageBlog.title}
                </h1>
                <p className="text-md text-gray-400">
                  {hero.page.pageBlog.slogan}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="relative z-10 -mt-40 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl bg-gradient-to-b from-white to-0% p-6 md:p-12 text-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Detail Blog */}
            <div className="col-span-2 w-full items-start text-left">
              <div className="overflow-hidden mb-8">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {selectedBlog.title}
                </h1>
                <span className="text-sm text-indigo-600 font-medium">
                  Post / 0
                </span>
                <div className="text-gray-700 text-base space-y-4">
                  {selectedBlog.description.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
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
                  {categoryBlog.map((category, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-sm text-gray-600 hover:text-indigo-600 transition duration-300 border border-gray-300 px-4 py-2 rounded-full"
                    >
                      {category.title}
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
                  {blog.map((item, index) => (
                    <Link
                      to="/home"
                      key={index}
                      className="flex text-start items-start space-x-3"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 rounded-md object-cover flex-shrink-0"
                      />
                      <div className="flex flex-col justify-center">
                        <h4 className="text-sm font-semibold text-gray-900 leading-tight line-clamp-2">
                          {item.title}
                        </h4>
                        <span className="text-xs text-gray-400 mt-1">
                          {item.date}
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
