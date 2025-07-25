import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


// Our Service Images
import img1 from "../img/archbanner.jpg";
import img2 from "../img/infrbanner.jpg";
import img3 from "../img/interimg.jpg";
import img4 from "../img/planningbanner.jpg";
import img5 from "../img/realstateimg.jpg";

const services = [
  { title: "REAL STATE", image: img1 },
  { title: "URBAN PLANNING", image: img2 },
  { title: "ARCHITECTURE", image: img3 },
  { title: "INTERIOR", image: img4 },
  { title: "INFRASTRUCTURE ENGINEERING", image: img5 },
];

export default function OurServices() {
  return (
    <section className="bg-[#fdfcf9] py-16">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-[14px] tracking-widest text-[#000112] uppercase mb-4">Our Service</p>
      <h2 className="text-2xl md:text-3xl font-light text-[#000112] mb-10 max-w-3xl mx-auto">
        From elegant residential interiors to functional commercial spaces and bespoke modular
        solutions, our comprehensive interior design services are crafted to bring beauty,
        comfort, and purpose into every corner of your space.
      </h2>

      {/* Swiper with drag + progress line */}
      <Swiper
        grabCursor={true}
        spaceBetween={30}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        }}
        modules={[ Scrollbar]}
        className="!pb-8" // extra padding for scrollbar spacing
        >
        {services.map((service, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg group cursor-grab">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold tracking-wider">{service.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
  );
}
