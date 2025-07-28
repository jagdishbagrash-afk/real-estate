// CitySlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Autoplay } from "swiper/modules";

// Our Service Images
import team1 from "../img/team01.jpg";
import team2 from "../img/team02.jpg";
import team3 from "../img/team03.jpg";
import team4 from "../img/team04.jpg";
import team5 from "../img/team01.jpg";

const teams = [
  { name: "Mr. Ramesh Chand Sharma", desiganation: "Director", img: team1 },
  { name: "Ms. Priya Mehta", desiganation: "Project Manager", img: team2 },
  { name: "Mr. Anil Gupta", desiganation: "Product Owner", img: team3 },
  { name: "Dr. Sneha Verma", desiganation: "Lead Developer", img: team4 },
  { name: "Ms. Kavita Rao", desiganation: "UX Designer", img: team5 },
];

const TeamSlider = () => {
  return (
    <div className="">
    
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          200: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Autoplay]}

        className="w-full"
      >
        {teams.map((team, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-start justify-start">
              <img src={team.img} alt={team.name}
                className="w-full object-cover" />
              <p className="text-start fontspring mt-4 text-[16px] md:text-[20px] lg:text-[24px] text-[#000112]">{team.name}</p>
              <p className="text-start  text-[14px] md:text-[18px] lg:text-[20px] text-[#94A393] font-[500] uppercase ">{team.desiganation}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
