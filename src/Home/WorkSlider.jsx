import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";

const SliderWithFade = () => {
  const navigate = useNavigate();

  const slides = [
    {
      image:
        "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/RudraMahal.jpg",
      title:
        "Rudra Mahal – A Luxury Five Star Hotel, Mundota, Rajasthan",
      slug: "rudra-mahal",
    },
    {
      image:
        "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/MAJARDAMECH-6_page-0001.jpg",
      title:
        "Drayvavati River - A Major South-Flowing River in Rajasthan",
      slug: "dravyawati-river",
    },
    {
      image:
        "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/Shivam.jpg",
      title:
        "Shivam Majestic – A Stunning Skyscraper, Jaipur",
      slug: "shivam-magnus",
    },
    {
      image:
        "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/univers.webp",
      title: "Universal City, Delhi Road",
      slug: "universal-city-prime",
    },
    {
      image:
        "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/ravi.jpg",
      title:
        "Cadmax Valley – A Posh Colony, Jaipur",
      slug: "ravi-kiran-vihar",
    },
  ];

  return (
    <div className="w-full mx-auto relative overflow-hidden">
      <Swiper
        slidesPerView={1}
        loop={true}
        speed={700}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.slug}>
            <div
              onClick={() => navigate(`/project/${slide.slug}`)}
              className="
                relative
                w-full
                h-[400px]
                sm:h-[450px]
                md:h-[650px]
                lg:h-[750px]
                xl:h-[820px]
                overflow-hidden
                cursor-pointer
                bg-gray-200
              "
            >
              {/* BACKGROUND IMAGE */}
              <img
                src={slide.image}
                alt=""
                aria-hidden="true"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
                decoding="async"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  scale-105
                  blur-[2px]
                "
              />

              {/* LIGHT DARK OVERLAY - CSS ONLY */}
              <div className="absolute inset-0 bg-black/15 z-10" />

              {/* CENTER CARD */}
              <div
                className="
                  absolute
                  inset-0
                  z-20
                  flex
                  items-center
                  justify-center
                  px-4
                "
              >
                <div
                  className="
                    bg-white
                    shadow-lg
                    p-3
                    sm:p-4
                    w-[96%]
                    max-w-[785px]
                  "
                >
                  {/* FRONT IMAGE */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "low"}
                    decoding="async"
                    width="1200"
                    height="700"
                    className="
                      w-full
                      h-[180px]
                      sm:h-[280px]
                      md:h-[300px]
                      lg:h-[380px]
                      object-cover
                    "
                  />

                  {/* TITLE */}
                  <p
                    className="
                      mt-3
                      tracking-wider
                      text-center
                      text-[14px]
                      sm:text-[16px]
                      font-semibold
                      text-[#000112a1]
                      uppercase
                    "
                  >
                    {slide.title}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderWithFade;