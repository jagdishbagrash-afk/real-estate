// CitySlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Make sure you're importing Autoplay from "swiper/modules"
import "swiper/css"; // Required Swiper styles
import "swiper/css/autoplay"; // Optional but helpful
// Our Service Images
import AnimatedHeading from "../component/AnimatedHeading";
import City from "../Json/city.json"

const CitySlider = () => {
  return (
    <div className="py-8 md:py-12 px-4">
      <AnimatedHeading>
        <h2 className="fontspring text-[25px] md:text-[35px] lg:text-[45px] xl:text-[50px] text-center mb-[25px]">
          Popular States We Serve
        </h2>
      </AnimatedHeading>

      <div className="">

        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true} // Enable looping

          breakpoints={{
            300: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Autoplay]}
          className="w-full "
        >
          {City?.cities.map((city, idx) => (
            <SwiperSlide key={idx}>
              <div className="group flex flex-col items-start justify-start transform transition-transform duration-500 hover:-translate-y-5 hover:shadow-xl">
                <img
                  src={city.img}
                  alt={city.name}
                  className="w-full h-[250px] md:h-[300px] lg:h-[350px] xl:h-[410px] object-cover transition-transform duration-500"
                />
                <p className="text-center fontspring mt-4 text-[15px] md:text-[20px] lg:text-[26px] text-[#000112] transition-opacity duration-500">
                  {city.name}
                </p>
              </div>


            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CitySlider;
