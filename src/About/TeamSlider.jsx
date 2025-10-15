// CitySlider.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Listing from "../Admin/Apis/Listing";
// Our Service Images


const TeamSlider = () => {
  const [team, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTeamList = async () => {
    try {
      setLoading(true);
      const main = new Listing();
      const response = await main.teamlist();
      console.log("response", response);
      setTeams(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching team list:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeamList();
  }, []);
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
        loop={true}
        className="w-full"
      >
        {team && team.map((team, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-start justify-start transform transition-transform duration-500 hover:-translate-y-4 min-h-[600px]">

              {/* Image Box */}
              <div className="w-full h-[520px] flex items-center justify-center overflow-hidden bg-transparent">
                <img
                  src={team.imageUrl}
                  alt={team.name}
                  className="h-[480px] object-contain"
                />
              </div>

              {/* Text */}
              <p className="text-start fontspring mt-2 text-[16px] md:text-[20px] lg:text-[24px] text-[#000112] transition-transform duration-500">
                {team.name}
              </p>
              <p className="text-start text-[14px] md:text-[18px] lg:text-[20px] text-[#94A393] font-[500] uppercase transition-opacity duration-500">
                {team.position}
              </p>
            </div>

          </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
