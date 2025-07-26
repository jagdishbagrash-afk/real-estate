import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar ,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";


// Our Service Images
import img1 from "../img/offerimg01.jpg";
import img2 from "../img/offerimg02.jpg";
import img3 from "../img/offerimg03.jpg";
import img4 from "../img/offerimg04.jpg";
import img5 from "../img/offerimg05.jpg";

const services = [
  { title: "Land Acquisition, Feasibility Studies", image: img1 },
  { title: "Master Planning, Urban Design", image: img2 },
  { title: "Regulatory Approvals, Liaisoning", image: img3 },
  { title: "Post-Completion Evaluation, Reporting", image: img4 },
  { title: "Post-Completion Evaluation, Reporting", image: img5 },
];

export default function WeOffer() {
  return (
    <section className="bg-[#F8F6F2] py-[40px] md:py-[50px] lg:py-[77px]">
    <div className=" mx-auto px-4 text-center">
    <h2 className="fontspring text-[25px] text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] leading-[30px] md:leading-[35px] lg:leading-[45px] xl:leading-[55px] mb-[40px] text-[#000112]">What We Offer</h2>

      {/* Swiper with drag + progress line */}
      <Swiper
        grabCursor={true}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        // scrollbar={{ draggable: true }}
        breakpoints={{
            400: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
        }}
        modules={[ Scrollbar ,Autoplay]}
        className="!pb-8" // extra padding for scrollbar spacing
        >
        {services.map((service, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-[300px] md:h-[350px] lg:md:h-[420px] xl:md:h-[520px] w-full overflow-hidden shadow-lg group cursor-grab">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-[10%] flex items-end justify-start px-[15px] pb-[15px]">
                <h3 className="fontspring text-white text-[18px] md:text-[22px] lg:text-[26px] text-left tracking-wider leading-[22px] md:leading-[28px] lg:leading-[30px]">{service.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
  );
}
