import { useEffect, useState } from "react";

export const Header = () => {
  // Data untuk brand dan menu navbar
  const navbar = {
    navbarBrand: "CodeTech",
    navbarMenu: [
      { id: 1, name: "Home", url: "/" },
      { id: 2, name: "Profil", url: "/profil" },
      {
        id: 3,
        name: "Layanan",
        url: "/layanan",
        section: [
          {
            id: 1,
            name: "Jasa Pembuatan Website",
            url: "/jasa-pembuatan-website",
          },
          { id: 2, name: "Creative Agency", url: "/creative-agency" },
          { id: 3, name: "Features", url: "/features" },
        ],
      },
      { id: 4, name: "Portofolio", url: "/portofolio" },
      { id: 5, name: "Faq", url: "/faq" },
      { id: 6, name: "Blog", url: "/blog" },
      { id: 7, name: "Kontak", url: "/kontak" },
    ],
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/40 backdrop-blur-md shadow-sm text-black"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-between">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white/40 backdrop-blur-md rounded-box w-52 text-black"
            >
              {navbar.navbarMenu.map((item) =>
                item.section ? (
                  <li key={item.id}>
                    <details>
                      <summary>{item.name}</summary>
                      <ul className="p-2 text-black">
                        {item.section.map((sub) => (
                          <li key={sub.id}>
                            <a href={sub.url}>{sub.name}</a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={item.id}>
                    <a href={item.url}>{item.name}</a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Desktop Menu Left */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navbar.navbarMenu.slice(0, 4).map((item) =>
                item.section ? (
                  <li key={item.id}>
                    <details>
                      <summary>{item.name}</summary>
                      <ul className="p-2 w-52 bg-white/40 backdrop-blur-md text-black">
                        {item.section.map((sub) => (
                          <li key={sub.id}>
                            <a href={sub.url}>{sub.name}</a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={item.id}>
                    <a href={item.url}>{item.name}</a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Navbar Center (Brand) */}
        <div className="navbar-center">
          <a className="text-2xl font-semibold" href="/">
            {navbar.navbarBrand}
          </a>
        </div>

        {/* Navbar End */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navbar.navbarMenu.slice(4).map((item) => (
              <li key={item.id}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
