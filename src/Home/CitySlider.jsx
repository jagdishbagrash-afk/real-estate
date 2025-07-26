// CitySlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Autoplay } from "swiper/modules";

// Our Service Images
import city1 from "../img/cityimg01.jpg";
import city2 from "../img/cityimg02.jpg";
import city3 from "../img/cityimg03.jpg";
import city4 from "../img/cityimg04.jpg";
import city5 from "../img/cityimg05.jpg";

const cities = [
  { name: "Bangalore", img: city1 },
  { name: "Hyderabad", img: city2 },
  { name: "Chennai", img: city3 },
  { name: "Pune", img: city4 },
  { name: "Mumbai", img: city5 },
];

const CitySlider = () => {
  return (
    <div className="py-8 md:py-12 px-4">
      <h2 className="fontspring text-[25px] md:text-[35px] lg:text-[45px] xl:text-[50px] text-center mb-[25px]">
        Popular Cities We Serve
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          400: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Autoplay]}

        className="w-full"
      >
        {cities.map((city, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-start justify-start">
              <img
                src={city.img}
                alt={city.name}
                className="w-full object-cover"
              />
              <p className="text-start fontspring mt-4 text-[15px] md:text-[20px] lg:text-[26px] text-[#000112]">{city.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CitySlider;
