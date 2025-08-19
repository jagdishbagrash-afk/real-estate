import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import slideroverlay from '../img/slideroverlay.png';

import imgfront1 from '../img/logo/ASHIYANA.png';
import imgback1 from '../img/logo/ASHIYANA.png';
import imgfront2 from '../img/logo/KEDIABUILDERS.jpg';
import imgback2 from '../img/logo/KEDIABUILDERS.jpg';
import imgfront3 from '../img/logo/MAHIMA.png';
import imgback3 from '../img/logo/MAHIMA.png';
import imgfront4 from '../img/logo/MAHINDRAW.png';
import imgback4 from '../img/logo/MAHINDRAW.png';
import imgfront5 from '../img/logo/MANGLAMGROUP.png';
import imgback5 from '../img/logo/MANGLAMGROUP.png';
import imgfront6 from '../img/logo/goorej.png';
import imgback6 from '../img/logo/goorej.png';
import imgfront7 from '../img/logo/riyasat.jpg';
import imgback7 from '../img/logo/riyasat.jpg';
import imgfront8 from '../img/logo/tvtv.jpg';
import imgback8 from '../img/logo/tvtv.jpg';
import imgfront9 from '../img/logo/ultratech.jpg';
import imgback9 from '../img/logo/ultratech.jpg';

const slides = [
    { front: imgfront1, back: imgback1, title: 'Ashiana Housing Ltd' },
    { front: imgfront2, back: imgback2, title: 'Kedia Builders & Colonizers' },
    { front: imgfront3, back: imgback3, title: 'Manglam Group' },
    { front: imgfront4, back: imgback4, title: 'Mahindra World City, Jaipur' },
    { front: imgfront5, back: imgback5, title: 'Mahima Group' },
    { front: imgfront6, back: imgback6, title: 'GODREJ GROUP, Jaipur' },
    { front: imgfront7, back: imgback7, title: 'Riyasat GROUP, Jaipur' },
    { front: imgfront8, back: imgback8, title: 'TATA Projects Enterprise' },
    { front: imgfront9, back: imgback9, title: 'UltraTech Cement Ltd' },
];

const ClientSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="relative w-full mx-auto">
            <Swiper
                // modules={[Autoplay, Navigation]}
                // spaceBetween={20}
                // slidesPerView={1}
                // autoplay={{ delay: 2500, disableOnInteraction: false }}
                // loop={true}
                // navigation={{
                //     nextEl: '.next-btn',
                //     prevEl: '.prev-btn',
                // }}
                // onInit={(swiper) => {
                //     swiper.params.navigation.prevEl = prevRef.current;
                //     swiper.params.navigation.nextEl = nextRef.current;
                //     swiper.navigation.init();
                //     swiper.navigation.update();
                // }}

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

            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[400px] sm:h-[450px] md:h-[650px] lg:h-[750px] xl:h-[820px]">
                            {/* Background */}
                            <img
                                src={slide.back}
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Optional overlay */}
                            <img
                                src={slideroverlay}
                                alt="Overlay"
                                className="absolute inset-0 w-full h-full object-cover z-10"
                            />

                            {/* Content Card */}
                            <div className="relative z-20 flex justify-center items-center h-full px-4">
                                <div className="bg-white shadow-lg p-6 w-full max-w-2xl text-center rounded">
                                    <img
                                        src={slide.front}
                                        alt="Front"
                                        className="w-full max-w-[300px] h-[200px] object-contain mx-auto mb-4"
                                    />
                                    <p className="text-gray-700 font-semibold uppercase tracking-wide text-[16px]">
                                        {slide.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Navigation Buttons */}
                {/* <div
                    ref={prevRef}
                    className="hidden md:flex prev-btn absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-[64px] h-[64px] items-center justify-center text-[#FF792D] rounded-full hover:bg-orange-500 hover:text-white transition duration-300 cursor-pointer"
                >
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="32" cy="32" r="31" stroke="white" strokeWidth="2" />
                        <path
                            d="M35 38L29 32L35 26"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <div
                    ref={nextRef}
                    className="hidden md:flex next-btn absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-[64px] h-[64px] items-center justify-center text-[#FF792D] rounded-full hover:bg-orange-500 hover:text-white transition duration-300 cursor-pointer"
                >
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="32" cy="32" r="31" stroke="white" strokeWidth="2" />
                        <path
                            d="M29 38L35 32L29 26"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div> */}
            </Swiper>
        </div>
    );
};

export default ClientSlider;
