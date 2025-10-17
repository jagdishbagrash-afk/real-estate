// Achivement.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import AnimatedHeading from "../component/AnimatedHeading";

const Achivement = () => {
    // Note: I corrected the key for the Rajasthan image in the array
    const cities = [
        {
            name: "Chennai",
            img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/image18.png",
        },
        {
            name: "Bangalore",
            img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/image19.png",
        },
        {
            name: "Rajasthan",
            img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/image17.png",
        },
    ];

    return (
        <div className="py-8 md:py-12 px-4 bg-white">
            <AnimatedHeading>
                <h2 className="fontspring text-[25px] md:text-[35px] lg:text-[45px] xl:text-[50px] text-center mb-[25px] text-black">
                    Honours and Achievements
                </h2>
            </AnimatedHeading>
            <div className="relative max-w-[1200px] mx-auto">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false 
                    }}
                    loop={true} // This ensures the carousel repeats
                    breakpoints={{
                        200: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Autoplay]}
                    className="w-full"
                >
                    {/* Map over the cities array to generate slides dynamically */}
                    {cities.map((item, index) => (
                        <SwiperSlide key={item.name || index}>
                            <div
                                className={`flex flex-col items-center justify-center transition-all duration-500 p-4`}
                            >
                                <img
                                    src={item.img} // Use the image URL from the object
                                    alt={item.name} // Use the name as the alt text
                                    className="h-[450px] md:h-[480px] object-contain w-full"
                                />
                                {/* Optional: You could add the city name here if you want it visible */}
                                {/* <p className="mt-2 text-lg font-semibold">{item.name}</p> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Achivement;