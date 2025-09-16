import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";




export default function TownshipSlider() {
  const slides = [
  {
    image: "/home/projectdetailimg02.jpg",
    title: "Green Crest Smart Township",
    type: "Integrated Residential Township",
    location: "Ajmer Road, Jaipur",
    launch: "December 2025",
    area: "180 Acres",
  },

  {
      image: "/home/projectdetailimg01.jpg",
    title: "Sustainable Development and Green Cities",
    type: "Integrated Residential Township",
    location: "Ajmer Road, Jaipur",
    launch: "December 2025",
    area: "180 Acres",
  },

  {
    image: "/home//projectdetailimg02.jpg",
    title: "The Rise of Smart Homes",
    type: "Integrated Residential Township",
    location: "Ajmer Road, Jaipur",
    launch: "December 2025",
    area: "180 Acres",
  },
  // Add more slides if needed
];
  return (
    <div className="relative w-full max-w-[1320px] h-[350px] md:h-[450px] lg:h-[550px] xl:h-[620px] m-auto overflow-hidden">
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        effect="fade"
        loop ="true"
        autoplay={{ delay: 5000 }}
        
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-full bg-cover bg-center relative" style={{ backgroundImage: `url(${slide.image})` }}>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-16 text-white z-10">
                <h2 className="fontspring text-2xl md:text-5xl font-light mb-6 md:mb-6">{slide.title}</h2>
                <div className="text-sm md:text-base font-medium uppercase space-x-4">
                  <span>TYPE: {slide.type}</span>
                  <span>|</span>
                  <span>LOCATION: {slide.location}</span>
                  <span>|</span>
                  <span>LAUNCH: {slide.launch}</span>
                  <span>|</span>
                  <span>AREA: {slide.area}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    
    </div>
  );
}
