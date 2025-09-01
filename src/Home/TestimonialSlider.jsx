// TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AnimatedHeading from "../component/AnimatedHeading";


const TestimonialSlider = () => {

  const testimonials = [
    {
      "testimonial": "We use Cadmax for land surveying and township planning, they are super accurate, quick, and affordable. Highly recommended for developers!",
      "author": "Mr. Gaurav Kedia",
      "company": "Kedia BDL"
    },
    {
      "testimonial": "The team at Cadmax made my real estate work efficiant. Great communication and quality construction.",
      "author": "Mr. Kamal Saini",
      "company": "High Fly Real Estate"
    },
    {
      "testimonial": "Very professional urban planners. Their designs are modern, well thought out, and delivered on time.",
      "author": "Mr. Vinod Goyal",
      "company": "Mangalam BDL"
    },
    {
      "testimonial": "Amazing support throughout our township project. From planning to surveying, everything was done with precision.",
      "author": "Mr. Sumer Saini",
      "company": "Riyasat Infra Developers"
    },
    {
      "testimonial": "One of the most reliable firms I’ve worked with in Jaipur. They actually care about quality and client satisfaction.",
      "author": "Mr. Vikas Saini",
      "company": "VRB Group Of Companies"
    }
  ]

  return (
    <div className="clintSays bg-[#F8F6F2] py-[40px] md:py-[80px] lg:py-[100px] text-center px-4">
      <AnimatedHeading>

        <h2 className="fontspring text-[25px] md:text-[40px] lg:text-[50px] mb-[30px] md:mb-[45px] text-[#000112]">
          What our clients think about us
        </h2>
      </AnimatedHeading>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        loop={true}  // ✅ Infinite loop enabled
        centeredSlides
        slidesPerView={1}
        spaceBetween={10}
        className="testimonial-swiper"
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-start justify-start flex-col fade-slide transition-all duration-500">
              <div className="clientreview">
                <p className="text-start fontspring text-[15px] md:text-[18px] lg:text-[22px] mb-[2px] text-[#000112]">{item.testimonial}</p>
              </div>
              <p className="title mt-2 text-[14px] font-[500] text-[#000112a3] uppercase tracking-wide">
                — {item.author} <span className="">({item.company})</span>
              </p>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Arrows */}
        <div className="hidden md:flex prev-btn bg-white absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center border border-[#FF792D] text-[#FF792D] rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer">
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.328 4.99977V6.99977H4.5L7.743 10.2428L6.328 11.6568L0.672001 5.99977L6.328 0.342773L7.743 1.75677L4.5 4.99977H17.328Z" fill="currentColor" />
          </svg>

        </div>
        <div className="hidden md:flex next-btn bg-white absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center border border-[#FF792D] text-[#FF792D] rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer">
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.672005 4.99977V6.99977H13.5L10.257 10.2428L11.672 11.6568L17.328 5.99977L11.672 0.342773L10.257 1.75677L13.5 4.99977H0.672005Z" fill="currentColor" />
          </svg>


        </div>
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
