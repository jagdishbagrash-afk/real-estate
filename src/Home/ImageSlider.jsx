// ImageSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    src: "../img/sliderimg01.jpg",
    title: "Luxury Villa Interiors – Whitefield",
  },
  {
    id: 2,
    src: "../img/sliderimg01.jpg",
    title: "Modern Office – Bangalore",
  },
  {
    id: 3,
    src: "../img/sliderimg01.jpg",
    title: "Elegant Living Room – Mumbai",
  },
  {
    id: 4,
    src: "../img/sliderimg01.jpg",
    title: "Contemporary Home – Pune",
  },
];

const ImageSlider = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-10">
      <h2 className="text-center text-4xl font-serif text-white mb-8">Our Work</h2>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={20}
        className="custom-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img src={slide.src} alt={slide.title} className="w-full h-[400px] object-cover" />
              <div className="absolute bottom-0 w-full text-center bg-white py-3 text-sm font-semibold uppercase">
                {slide.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="swiper-button-prev custom-nav left-0" />
      <div className="swiper-button-next custom-nav right-0" />
    </div>
  );
};

export default ImageSlider;
