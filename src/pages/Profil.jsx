import { Layout } from "../layout/Layout";
import heroImage from "../assets/image/hero.png";
import profilImage from "../assets/image/profil.png";

// team
import orang1 from "../assets/image/orang1.png";
import orang2 from "../assets/image/orang2.png";
import orang3 from "../assets/image/orang3.png";
import orang4 from "../assets/image/orang4.png";
import orang5 from "../assets/image/orang5.png";
import orang6 from "../assets/image/orang6.png";
import orang7 from "../assets/image/orang7.png";

export const Profil = () => {
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

  const profil = {
    image: profilImage,
    page: {
      pageHome: {
        subtitle: "Halo!",
        title: "Apa sih CodeTech?",
        description: [
          "CodeTech merupakan creative agency yang bergerak dalam dunia digital. Kami adalah tim kreatif yang mengkhususkan diri dalam jasa desain website, jasa landing page, jasa SEO murah, jasa company profile, dan advertising.",
          "Dibentuk dengan tujuan yang berjangka panjang, kami berkomitmen untuk memberikan solusi relevan yang efisien dan modern.",
        ],
      },
      pageProfil: {
        subtitle: "Tentang Kami",
        title:
          "Selamat datang di CodeTech - pusat inovasi dan kreativitas digital!",
        description: [
          "Sebagai creative agency yang berfokus pada pembuatan website, landing page, dan advertising, kami menghadirkan tim kreatif berpengalaman untuk memberikan solusi digital yang inspiratif dan tepat sasaran.",
          "Kami memahami bahwa setiap bisnis memiliki karakter dan tujuan unik. Karena itu, kami berkomitmen merancang website yang tidak hanya memikat secara visual, tetapi juga optimal dari sisi fungsi, kemudahan penggunaan, dan pengalaman pengguna. Setiap solusi yang kami kembangkan dirancang khusus untuk mencerminkan identitas brand Anda dan menarik perhatian audiens target Anda.",
          "Di setiap proyek, kami selalu mengedepankan kolaborasi, profesionalisme, dan hasil yang maksimal, dengan tujuan utama: kepuasan Anda. Jika Anda mencari partner kreatif untuk membawa bisnis Anda bersinar di dunia digital, CodeTech adalah jawabannya. Kami siap membantu Anda mewujudkan website yang menarik, inovatif, dan sepenuhnya disesuaikan dengan kebutuhan dan visi Anda.",
        ],
      },
    },
  };

  const team = {
    subtitle: "Tim Kami",
    title: "Bangun Website Anda, Raih Kesuksesan Anda",
    description:
      "Dari mengatasi tantangan teknis hingga mendorong pertumbuhan bisnis, tim kami siap mendukung setiap langkah Anda. Mulailah perjalanan digital Anda bersama CodeTech, dan wujudkan kesuksesan yang lebih besar dengan solusi yang tepat dan terpercaya.",
    human: [
      {
        id: 1,
        image: orang1,
        name: "Gibran Fajar S",
      },
      {
        id: 2,
        image: orang2,
        name: "Fauzi Septiansyah",
      },
      {
        id: 3,
        image: orang3,
        name: "Rino",
      },
      {
        id: 4,
        image: orang4,
        name: "Robi",
      },
      {
        id: 5,
        image: orang5,
        name: "Rico",
      },
      {
        id: 6,
        image: orang6,
        name: "Rasman",
      },
      {
        id: 7,
        image: orang7,
        name: "Rizky",
      },
    ],
  };

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
                  {hero.page.pageProfil.title}
                </h1>
                <p className="text-md text-gray-400">
                  {hero.page.pageProfil.slogan}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profil */}
      <section className="relative z-10 -mt-40 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl bg-gradient-to-b from-white to-0% p-6 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={profil.image}
              alt="Profil Codetech"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-indigo-600 font-semibold text-sm uppercase">
              {profil.page.pageProfil.subtitle}
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              {profil.page.pageProfil.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {profil.page.pageProfil.description[0]}
            </p>
            <p className="text-gray-700 mb-6">
              {profil.page.pageProfil.description[1]}
            </p>
            <p className="text-gray-700 mb-6">
              {profil.page.pageProfil.description[2]}
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.human.map((person) => (
              <div
                key={person.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-gray-800">
                    {person.name}
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
