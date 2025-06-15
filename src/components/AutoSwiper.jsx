// components/AutoSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import stylesheet Swiper
import "swiper/css";
import "swiper/css/pagination";

export default function AutoSwiper({ children }) {
  // Hitung index slide tengah dari jumlah children yang diberikan
  const middleSlide = Math.floor(React.Children.count(children) / 2);

  return (
    <div className="relative w-screen overflow-hidden bg-transparent py-16">
      <Swiper
        // Jumlah slide yang ditampilkan dalam satu waktu (otomatis berdasarkan lebar slide)
        slidesPerView="auto"
        // Pusatkan slide aktif di tengah
        centeredSlides
        // Jarak antar slide
        spaceBetween={30}
        // Aktifkan perulangan tak hingga
        loop={true}
        // Autoplay konfigurasi
        autoplay={{
          delay: 2500,                 // Jeda antar slide (ms)
          disableOnInteraction: false // Tetap autoplay meski pengguna interaksi
        }}
        // Konfigurasi pagination (titik navigasi)
        pagination={{
          el: ".custom-pagination", // Target elemen untuk pagination
          clickable: true           // Membolehkan klik pada titik
        }}
        // Aktifkan modul Swiper yang dibutuhkan
        modules={[Autoplay, Pagination]}
        // Tampilkan slide dari tengah saat pertama kali dimuat
        initialSlide={middleSlide}
        // Kelas tambahan untuk styling Swiper
        className="w-screen"
      >
        {/* Map setiap anak (child) ke dalam SwiperSlide */}
        {React.Children.map(children, (child, i) => (
          <SwiperSlide
            key={i}
            className="!w-[60vw] sm:!w-[45vw] md:!w-[30vw] lg:!w-[22vw] transition-all duration-300 ease-in-out"
          >
            {child} {/* Tampilkan isi slide */}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination ditampilkan di bawah slider */}
      <div className="custom-pagination flex justify-center gap-2 mt-6 z-10 relative" />
    </div>
  );
}
