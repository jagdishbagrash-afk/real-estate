// CitySlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Make sure you're importing Autoplay from "swiper/modules"
import "swiper/css"; // Required Swiper styles
import "swiper/css/autoplay"; // Optional but helpful

// Our Service Images
import city1 from "../img/jaipur.avif";
import city2 from "../img/haryana.jpeg";
import city3 from "../img/cityimg03.jpg";
import city6 from "../img/Telangana.jpg";
import city7 from "../img/Statue-of-Unity-Legacy.jpg";



const cities = [
  { name: "Rajasthan ", img: city1 },
  { name: "Hariyana", img: city2 },
  { name: "Uttrakhand", img: city1 },
  { name: "Punjab", img: city1 },
  { name: "Maharashtra", img: city2 },
  { name: "Madhya Pradesh", img: city3 },
  { name: "Telangana", img: city6 },
  { name: "Gujrat", img: city7 },
];

const CitySlider = () => {
  return (
    <div className="py-8 md:py-12 px-4">
      <h2 className="fontspring text-[25px] md:text-[35px] lg:text-[45px] xl:text-[50px] text-center mb-[25px]">
        Popular Cities We Serve
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true} // Enable looping

        breakpoints={{
          400: { slidesPerView: 1 },
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
                className="w-full h-[300px] object-cover"
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
