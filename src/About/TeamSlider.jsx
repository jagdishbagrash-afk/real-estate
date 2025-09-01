// CitySlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
// Our Service Images
import about4 from "../img/about/about4.jpg"
import about7 from "../img/about/about7.jpg";
import about12 from "../img/about/about12.jpg";
import about14 from "../img/about/about14.jpg";
import about10 from "../img/about/about10.jpg";
import about13 from "../img/about/about13.jpg";
import about11 from "../img/about/about11.jpg";
import about9 from "../img/about/about9.jpg";
import about6 from "../img/about/about6.jpg"
import about3 from "../img/about/about3.jpg"





const teams = [
  { name: "Mr. Ramesh Chand Sharma", desiganation: "Chairman", img: about3 },
  { name: "Mr. Rakesh Sharma", desiganation: "Director", img: about4 },
  { name: "Ms. Sunita Sharma", desiganation: "Proprietor – Cadmax Stupika", img: about6 },
  { name: "Mr. Lokesh Sharma", desiganation: "Proprietor- Cadmax Archinterio", img: about7 },
  { name: "Mr. Sunil Sharma", desiganation: "H.O.D. Of Planning 1st", img: about12 },
  { name: "Mr. Shankar Sharma", desiganation: "H.O.D. Of Planning 2nd", img: about11 },
  { name: "Mr. Suresh Sharma", desiganation: "H.O.D. Of Surveying", img: about9 },
  { name: "Mr. Nanuram Kumawat", desiganation: "H.O.D. Of Accountants", img: about13 },
  { name: "Mr. M.S. Bhati", desiganation: "H.O.D. Of Architecture", img: about10 },
  { name: "Mr. Govind Kumar", desiganation: "H.O.D. Of Management", img: about14 },
];

const TeamSlider = () => {
  return (
    <div className="">

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          200: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Autoplay]}

        className="w-full"
      >
        {teams && teams.map((team, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-start justify-start transform transition-transform duration-500 hover:-translate-y-4 min-h-[600px]">

              {/* Image Box */}
              <div className="w-full h-[520px] flex items-center justify-center overflow-hidden bg-transparent">
                <img
                  src={team.img}
                  alt={team.name}
                  className="h-[480px] object-contain"
                />
              </div>

              {/* Text */}
              <p className="text-start fontspring mt-2 text-[16px] md:text-[20px] lg:text-[24px] text-[#000112] transition-transform duration-500">
                {team.name}
              </p>
              <p className="text-start text-[14px] md:text-[18px] lg:text-[20px] text-[#94A393] font-[500] uppercase transition-opacity duration-500">
                {team.desiganation}
              </p>
            </div>

          </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
