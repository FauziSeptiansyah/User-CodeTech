import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // ✅ Import module autoplay

import 'swiper/css'; // ✅ Import style dasar Swiper
import 'swiper/css/pagination'; // ✅ (opsional, meskipun tidak dipakai di sini)

export default function PanoramaSlider({ children }) {
  // ✅ Menentukan slide tengah berdasarkan jumlah children
  const middleSlide = Math.floor(React.Children.count(children) / 2);

  // ✅ Fungsi untuk mengatur efek panorama 3D pada setiap slide
  const handleProgress = (swiper) => {
    swiper.slides.forEach((slide) => {
      const progress = slide.progress;

      // Efek transformasi untuk membuat tampilan panorama
      const rotate = progress * 60; // Semakin besar, semakin miring
      const translateZ = -400;      // Semakin minus, semakin ke dalam
      const translateX = progress * 150; // Geser ke kiri/kanan sesuai progress

      // Terapkan efek transformasi ke slide
      slide.style.transform = `
        translateX(${translateX}px)
        translateZ(${translateZ}px)
        rotateY(${rotate}deg)
      `;

      // Atur z-index agar slide di tengah berada di depan
      slide.style.zIndex = -Math.abs(Math.round(progress)) + 10;

      // Slide yang terlalu jauh dari tengah dibuat transparan
      slide.style.opacity = Math.abs(progress) > 4 ? 0 : 1;
    });
  };

  return (
    <div className="relative w-screen overflow-hidden bg-transparent py-16">
      <Swiper
        // ✅ Terapkan efek panorama ketika slide bergerak
        onProgress={handleProgress}
        onSetTranslate={handleProgress}

        // ✅ Slide akan terlihat sebagian (bukan 1 per layar)
        slidesPerView="auto"

        // ✅ Posisikan slide aktif di tengah
        centeredSlides

        // ✅ Jarak antar slide
        spaceBetween={30}

        // ✅ Ulang terus saat sampai akhir
        loop={true}

        // ✅ Atur autoplay supaya terus bergerak smooth
        autoplay={{
          delay: 0,                  // Tidak ada jeda antar slide
          disableOnInteraction: false, // Tetap autoplay meski diklik/di-swipe
          pauseOnMouseEnter: false,    // Tidak pause saat mouse hover
        }}

        speed={6000} // ✅ Waktu transisi antar slide (ms), makin besar makin pelan

        // ✅ Modul Swiper yang digunakan
        modules={[Autoplay]}

        // ✅ Mulai dari slide tengah
        initialSlide={middleSlide}

        // ✅ Atur perspektif untuk efek 3D
        className="w-screen perspective-[4000px]"
      >
        {/* Map children menjadi SwiperSlide */}
        {React.Children.map(children, (child, i) => (
          <SwiperSlide
            key={i}
            // ✅ Ukuran responsif tiap slide
            className="!w-[60vw] sm:!w-[45vw] md:!w-[30vw] lg:!w-[22vw] transition-all duration-300 ease-in-out"
            style={{
              transformStyle: 'preserve-3d', // ✅ Aktifkan efek 3D di tiap slide
            }}
          >
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
