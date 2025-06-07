import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-white px-6 py-12 mt-20">
      <div className="max-w-7xl mx-auto relative">
        {/* Bagian atas: Grid 4 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-800">
          {/* Logo kiri */}
          <div>
            <h1 className="flex font-semibold items-center text-center text-4xl justify-center mx-auto">
              CodeTech
            </h1>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm text-gray-500 font-semibold uppercase mb-3">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Websites</li>
              <li>Creative Agency</li>
              <li>Features</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm text-gray-500 font-semibold uppercase mb-3">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Blog</li>
              <li>Portofolio</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm text-gray-500 font-semibold uppercase mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Profil</li>
              <li>Kontak</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        {/* Bagian bawah */}
        <div className="mt-12 relative flex items-center mx-auto">
          {/* Copyright kiri */}
          <p className="text-sm text-gray-500 mr-4">© 2025 CodeTech</p>

          {/* Icon sosmed tengah secara absolut */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-4">
            <div className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-gray-800">
              <FaFacebookF />
            </div>
            <div className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-gray-800">
              <FaTwitter />
            </div>
            <div className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-gray-800">
              <FaInstagram />
            </div>
            <div className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-gray-800">
              <FaGooglePlusG />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
