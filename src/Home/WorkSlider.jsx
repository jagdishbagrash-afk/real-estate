import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import slideroverlay from '../img/slideroverlay.png';
import imgfront1 from '../img/RudraMahal.jpg';
import imgback1 from '../img/RudraMahal.jpg';
import imgfront2 from '../img/Shivam.jpg';
import imgback2 from '../img/Shivam.jpg';
import imgfront3 from '../img/Cadmax.jpg';
import imgback3 from '../img/Cadmax.jpg';
import imgfront4 from '../img/MAJARDAMECH-6_page-0001.jpg';
import imgback4 from '../img/MAJARDAMECH-6_page-0001.jpg';
import imgfront5 from '../img/ravi.jpg';
import imgback5 from '../img/ravi.jpg';
import { useNavigate } from 'react-router-dom';
const slides = [
  {
    front: imgfront1,
    back: imgback1,
    title: "Rudra Mahal – a luxury five star hotel,  Mundota,Rajasthan ",
    slug :"rudra-mahal"
  },
  {
    front: imgfront4,
    back: imgback4,
    title: "Drayvavati river - a major South-flowing river in Rajasthan",
    slug:"dravyawati-river"
  },
  {
    front: imgfront2,
    back: imgback2,
    title: "Shivam Magnus – a stunning skyscapper , Jaipur",
    slug:"shivam-magnus"
  },
  {
    front: imgfront3,
    back: imgback3,
    slug :"cadmax-group-headoffice",
    title: "Cadmax Consultancy Pvt. Ltd. ; Jaipur",
  },
  {
    front: imgfront5,
    back: imgback5,
    title: "Ravi Kiran Vihar – A porshe colony , Jaipur",
    slug:"ravi-kiran-vihar"
  },
];

const SliderWithFade = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div className="w-full mx-auto relative">

      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true} // Enable looping

        breakpoints={{
          300: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        modules={[Autoplay]}
        className="w-full"
      // modules={[EffectFade, Autoplay, Navigation]}
      // effect="fade"
      // fadeEffect={{ crossFade: true }}
      // autoplay={{ delay: 2500, disableOnInteraction: false }}
      // slidesPerView={1}
      // loop={true}
      // navigation={{
      //   nextEl: ".next-btn",
      //   prevEl: ".prev-btn",
      // }}

      // onInit={(swiper) => {
      //   // Bind navigation buttons after DOM has mounted
      //   swiper.params.navigation.prevEl = prevRef.current;
      //   swiper.params.navigation.nextEl = nextRef.current;
      //   swiper.navigation.init();
      //   swiper.navigation.update();
      // }}
      >

        {slides?.map((slide, index) => (
          <SwiperSlide key={index} >
            {/* Each slide needs to be fully contained for fade to apply */}
            <div onClick={() => navigate(`/project/${slide?.slug}`)} className="relative w-full h-[400px] sm:h-[450px] md:h-[650px] lg:h-[750px] xl:h-[820px]">
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
              <div className="w-[96%] max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[785px] m-auto absolute top-[50px]  inset-0 flex items-center justify-center z-20">
                <div className="w-full bg-white shadow-lg p-[15px] w-[90%] max-w-3xl flex flex-col items-center">
                  <img
                    src={slide.front}
                    alt="Front"
                    className="w-full max-w-[600px] h-[180px] sm:h-[280px] md:h-[300px] lg:h-[380px] object-content mb-4"
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

        {/* <div className="hidden md:flex prev-btn  absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-[64px] h-[64px] flex items-center justify-center text-[#FF792D] rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="31" transform="matrix(-1 0 0 1 64 0)" stroke="white" stroke-width="2" />
            <path d="M35 38L29 32L35 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>

        <div className="hidden md:flex next-btn absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-[64px] h-[64px] flex items-center justify-center text-[#FF792D] rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="31" stroke="white" stroke-width="2" />
            <path d="M29 38L35 32L29 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </div> */}
      </Swiper>
    </div>
  );
};

export default SliderWithFade;
