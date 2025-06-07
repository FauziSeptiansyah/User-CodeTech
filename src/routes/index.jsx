import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { Profil } from "../pages/Profil";
import { JasaPembuatanWeb } from "../pages/JasaPembuatanWeb";
import { CreativeAgency } from "../pages/CreativeAgency";
import { Portofolio } from "../pages/Portofolio";
import { Faq } from "../pages/Faq";
import { Blog } from "../pages/Blog";
import { DetailBlog } from "../pages/DetailBlog";
import { Kontak } from "../pages/Kontak";
import { NotFound } from "../pages/NotFound";

export default function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/jasa-pembuatan-website" element={<JasaPembuatanWeb />} />
        <Route path="/creative-agency" element={<CreativeAgency />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<DetailBlog />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
