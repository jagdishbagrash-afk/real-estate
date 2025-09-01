// CitySlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Make sure you're importing Autoplay from "swiper/modules"
import "swiper/css"; // Required Swiper styles
import "swiper/css/autoplay"; // Optional but helpful
// Our Service Images
import city1 from "../img/jaipur.avif";
import city2 from "../img/panorama-science-centre.jpg";
import city3 from "../img/punjab.jpeg";
import city8 from "../img/utrakhad.jpg";
import city4 from "../img/Narmada-River-Maheshwar-Madhya-Pradesh-India.webp";
import city5 from "../img/pune.jpg";
import city6 from "../img/Telangana.jpg";
import city7 from "../img/Statue-of-Unity-Legacy.jpg";
import city10 from "../img/banglore.jpg";
import city9 from "../img/chennia.jpg";
import AnimatedHeading from "../component/AnimatedHeading";

const cities = [
  { name: "Rajasthan ", img: city1 },
  { name: "Hariyana", img: city2 },
  { name: "Uttrakhand", img: city8 },
  { name: "Punjab", img: city3 },
  { name: "Maharashtra", img: city5 },
  { name: "Madhya Pradesh", img: city4 },
  { name: "Telangana", img: city6 },
  { name: "Gujrat", img: city7 },
  { name: "Chennai", img: city9 },
  { name: "Bangalore", img: city10 },

];

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
          {cities.map((city, idx) => (
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
