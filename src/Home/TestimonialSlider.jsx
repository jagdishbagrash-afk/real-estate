// TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AnimatedHeading from "../Admin/component/AnimatedHeading";

const testimonials = [
  {
    name: "SHWETA & RAHUL, BANGALORE",
    text: `“We had a vision for our home but didn’t know how to bring it to life—until we found Horizon Interiors. From the very first meeting, the team understood our taste and lifestyle, and turned it into a space that feels warm, elegant, and completely us. The quality of materials, attention to detail, and professionalism throughout the project was simply outstanding. We now have a home we’re proud to show off, and more importantly, a space that brings us peace and joy every day.”`,
  },
  {
    name: "RAJ & PRIYA, DELHI",
    text: `“The team at Horizon Interiors made our dream home a reality. Their creativity, expertise, and seamless process were beyond impressive. We felt heard, supported, and inspired throughout.”`,
  },
  {
    name: "AMIT & NEHA, MUMBAI",
    text: `“From the beginning till the end, it was an incredible journey. Horizon Interiors elevated our space into something truly magical.”`,
  },
];

const TestimonialSlider = () => {
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
              <p className="text-start fontspring text-[15px] md:text-[18px] lg:text-[22px] mb-[2px] text-[#000112]">{item.text}</p>
              </div>
              <p className="title mt-2 text-[14px] font-[500] text-[#000112a3] uppercase tracking-wide">
                — {item.name}
              </p>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Arrows */}
        <div className="hidden md:flex prev-btn bg-white absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center border border-[#FF792D] text-[#FF792D] rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.328 4.99977V6.99977H4.5L7.743 10.2428L6.328 11.6568L0.672001 5.99977L6.328 0.342773L7.743 1.75677L4.5 4.99977H17.328Z" fill="currentColor"/>
</svg>

        </div>
        <div className="hidden md:flex next-btn bg-white absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center border border-[#FF792D] text-[#FF792D] rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.672005 4.99977V6.99977H13.5L10.257 10.2428L11.672 11.6568L17.328 5.99977L11.672 0.342773L10.257 1.75677L13.5 4.99977H0.672005Z" fill="currentColor"/>
</svg>


        </div>
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
