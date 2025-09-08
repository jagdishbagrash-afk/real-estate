import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
// Our Service Images
import img1 from "../img/realestate.jpg";
import img2 from "../img/FINALNADHALLAYOUT20_page-0001.jpg";
import img3 from "../img/Infrastructure.jpg";
import img4 from "../img/Acrchitecture.jpg";
import img5 from "../img/Interior.png";
import AnimatedHeading from "../component/AnimatedHeading";
import { Link, useNavigate } from "react-router-dom";
const services = [
  { title: "URBAN PLANNING", image: img2, slug: "urban-planning" },
  { title: "REAL STATE", image: img1, slug: "real-state" },
  { title: "INFRASTRUCTURE ", image: img3, slug: "infrastructure" },
  { title: "ARCHITECTURE", image: img4, slug: "architecture" },
  { title: "Interior Designing", image: img5, slug: "interior-designing" },
];

export default function OurServices() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F8F6F2] py-[40px] md:py-[50px] lg:py-[77px]">
      <div className=" mx-auto px-4 text-center">
        <AnimatedHeading>

          <p className="text-[14px] font-[600] tracking-widest text-[#000112a6] uppercase mb-4">Our Service</p>
          <h2 className="fontspring text-[18px] md:text-[20px] lg:text-[28px] xl:text-[32px] leading-[25px] lg:leading-[30px] xl:leading-[45px] text-[#000112] mb-10 max-w-[1140px] mx-auto">
            From planning porshe colonies to constructing stunning skyscrapers. We provide all infrastructural services such as
          </h2>
        </AnimatedHeading>

        {/* Swiper with drag + progress line */}
        <Swiper
          grabCursor={true}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            400: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Scrollbar, Autoplay]}
          className="!pb-8" // extra padding for scrollbar spacing
        >
          {services && services?.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div onClick={() => navigate(`/services/${service?.slug}`)}
                className="relative h-[300px] md:h-[350px] lg:md:h-[420px] xl:md:h-[520px] w-full overflow-hidden shadow-lg group cursor-grab">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[300px] md:h-[350px] lg:md:h-[420px] xl:md:h-[520px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* bg-[#0000007d] */}
                <div className="absolute inset-0 bg-[#000000b3]	 hover:bg-transparent bg-opacity-[10%] flex items-center justify-center">
                  <h3 className="text-white  text-lg font-semibold tracking-wider uppercase hover:text-black">{service.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
