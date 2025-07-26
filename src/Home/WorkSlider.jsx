import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import slideroverlay from '../img/slideroverlay.png';

import imgfront1 from '../img/sliderfront01.jpg';
import imgback1 from '../img/sliderimg01.jpg';

import imgfront2 from '../img/sliderfront02.jpg';
import imgback2 from '../img/sliderimg02.jpg';

const slides = [
  {
    front: imgfront1,
    back: imgback1,
    title: "LUXURY VILLA INTERIORS – WHITEFIELD",
  },
  {
    front: imgfront2,
    back: imgback2,
    title: "MODERN APARTMENT – BANGALORE",
  },
];

const SliderWithFade = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  return (
    <div className="w-full mx-auto relative">
      
      <Swiper
        modules={[EffectFade, Autoplay, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        navigation={true}
        slidesPerView={1}
        onInit={(swiper) => {
          // Bind navigation buttons after DOM has mounted
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <h2 className='absolute top-[80px] left-[0] right-[0] z-[1] fontspring text-[50px] text-white text-center'>Our Work</h2>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Each slide needs to be fully contained for fade to apply */}
            <div className="relative w-full h-[820px]">
              {/* BACK IMAGE */}
              <img
                src={slide.back}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* OVERLAY IMAGE */}
              <img
                src={slideroverlay}
                alt="Overlay"
                className="absolute inset-0 w-full h-full object-cover z-10"
              />

              {/* CENTERED CARD WITH FRONT IMAGE + TITLE */}
              <div className="w-full max-w-[785px] m-auto absolute inset-0 flex items-center justify-center z-20">
                <div className="w-full bg-white shadow-lg p-[15px] w-[90%] max-w-3xl flex flex-col items-center">
                  <img
                    src={slide.front}
                    alt="Front"
                    className="w-full h-auto object-cover mb-4"
                  />
                  <p className="tracking-wider text-center text-[16px] font-[600] text-[#000112a1] uppercase">
                    {slide.title}
                  </p>
                </div>
              </div>
            </div>
            
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div
          ref={prevRef}
          className="swiper-button-prev !text-white !left-2 z-30"
        />
        <div
          ref={nextRef}
          className="swiper-button-next !text-white !right-2 z-30"
        />
        
        {/* <div className="swiper-button-prev !text-white !left-2" >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="31" transform="matrix(-1 0 0 1 64 0)" stroke="white" stroke-width="2"/>
<path d="M35 38L29 32L35 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
dfdsf


        </div>
        <div className="swiper-button-next !text-white !right-2" >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="31" stroke="white" stroke-width="2"/>
        <path d="M29 38L35 32L29 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        </div> */}
      </Swiper>
    </div>
  );
};

export default SliderWithFade;
