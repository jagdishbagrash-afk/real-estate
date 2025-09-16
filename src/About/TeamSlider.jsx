// CitySlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
// Our Service Images


const TeamSlider = () => {
  const teams = [
    { name: "Mr. Ramesh Chand Sharma", desiganation: "Chairman", img: "/about/about3.jpg" },
    { name: "Mr. Rakesh Sharma", desiganation: "Director", img: "/about/about4.jpg" },
    { name: "Ms. Sunita Sharma", desiganation: "Proprietor – Cadmax Stupika", img: "/about/about6.jpg" },
    { name: "Mr. Lokesh Sharma", desiganation: "Proprietor- Cadmax Archinterio", img: "/about/about7.jpg" },
    { name: "Mr. Sunil Sharma", desiganation: "H.O.D. Of Planning 1st", img: "/about/about12.jpg" },
    { name: "Mr. Shankar Sharma", desiganation: "H.O.D. Of Planning 2nd", img: "/about/about11.jpg" },
    { name: "Mr. Suresh Sharma", desiganation: "H.O.D. Of Surveying", img: "/about/about9.jpg" },
    { name: "Mr. Nanuram Kumawat", desiganation: "H.O.D. Of Accountants", img: "/about/about13.jpg" },
    { name: "Mr. M.S. Bhati", desiganation: "H.O.D. Of Architecture", img: "/about/about10.jpg" },
    { name: "Mr. Govind Kumar", desiganation: "H.O.D. Of Management", img: "/about/about14.jpg" },
  ];
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
