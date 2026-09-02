import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/autoplay";

import AnimatedHeading from "../component/AnimatedHeading";
import "../App.css";
import UrbenPlanningImage from "../assets/images/urben_planning.png";
import ArchitectureImage from "../assets/images/architecture.png";

const Achivement = () => {

    const [isMobile, setIsMobile] = useState(false);

    const [showAwardsModal, setShowAwardsModal] = useState(false);

    const awardSliderRef = useRef(null);

    // =========================================================
    // SCREEN SIZE
    // =========================================================
    useEffect(() => {
        if (showAwardsModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [showAwardsModal]);
    const modalSliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        adaptiveHeight: false,
    };
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // =========================================================
    // AWARDS IMAGES
    // =========================================================

    const cities = [
        {
            img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/image18.png",
        },
        {
            img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/image19.png",
        },
        {
            img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/image17.png",
        },
        {
            img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/about/awardscadmax.png",
        },
    ];

    // =========================================================
    // URBAN PLANNING DATA
    // =========================================================

    const urbanPlanningFeatures = [
        {
            title: "Integrated Master Planning",
            description:
                "Smart growth strategies for sustainable communities.",
        },
        {
            title: "Sustainable Urban Development",
            description:
                "Green, resilient and future-ready urban solutions.",
        },
        {
            title: "Infrastructure & Connectivity",
            description:
                "Roads, utilities and mobility solutions for seamless connectivity.",
        },
        {
            title: "Strategic Advisory Services",
            description:
                "Data-driven insights for impactful urban decisions.",
        },
    ];

    // =========================================================
    // ARCHITECTURE DATA
    // =========================================================

    const architectureFeatures = [
        {
            title: "Innovative Architecture",
            description:
                "Contemporary designs with timeless appeal.",
        },
        {
            title: "Sustainable Solutions",
            description:
                "Eco-friendly and energy-efficient buildings.",
        },
        {
            title: "Thoughtful Interiors",
            description:
                "Functional, elegant and people-centric spaces.",
        },
        {
            title: "Large Scale Developments",
            description:
                "Townships, commercial and institutional projects.",
        },
    ];

    // =========================================================
    // SLICK SETTINGS
    // =========================================================

    const slickSettings = {
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 800,
        infinite: true,
        centerMode: true,
        centerPadding: "0px",
        cssEase: "ease-in-out",
        pauseOnHover: false,
        arrows: false,
        slidesToShow: 3,
    };

    // =========================================================
    // FEATURE ICON
    // =========================================================

    const FeatureIcon = () => {
        return (
            <div className="w-[38px] h-[38px] min-w-[38px] rounded-full border border-[#C99546] flex items-center justify-center">
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C99546"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="8" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
            </div>
        );
    };

    return (
        <>
            {/* =====================================================
    HONOURS AND ACHIEVEMENTS
====================================================== */}

            <section className="bg-[#FBFAF7] py-[45px] md:py-[60px] lg:py-[75px] border-t border-[#EEE8DF] overflow-hidden">
                <div className="max-w-[1320px] mx-auto px-[15px] md:px-[30px]">
                    <div className="grid grid-cols-1 lg:grid-cols-[34%_66%] items-center gap-[35px] lg:gap-[55px]">

                        {/* =========================================
          LEFT CONTENT
      ========================================== */}

                        <div className="text-left">
                            <AnimatedHeading>
                                <h2
                                    className="
              fontspring
              text-[#17191E]
              text-[28px]
              md:text-[36px]
              lg:text-[42px]
              xl:text-[46px]
              leading-[1.15]
              mb-[12px]
            "
                                >
                                    Honours and Achievements
                                </h2>

                                {/* GOLD LINE */}

                                <div className="w-[48px] h-[2px] bg-[#C58B3B] mb-[20px]" />

                                <p
                                    className="
              max-w-[390px]
              text-[#666B73]
              text-[13px]
              md:text-[14px]
              lg:text-[15px]
              leading-[1.8]
              mb-[25px]
            "
                                >
                                    Recognition drives us to raise the bar and deliver
                                    excellence in every project we undertake.
                                </p>

                                <p
                                    className="
              max-w-[390px]
              text-[#666B73]
              text-[13px]
              md:text-[14px]
              lg:text-[15px]
              leading-[1.8]
              mb-[28px]
            "
                                >
                                    These honours reflect our commitment to quality,
                                    innovation, and sustainable impact.
                                </p>
                            </AnimatedHeading>

                            {/* BUTTON */}

                            <button
                                type="button"
                                onClick={() => setShowAwardsModal(true)}
                                className="
    inline-flex
    items-center
    justify-center
    gap-[12px]
    border
    border-[#C58B3B]
    text-[#A86E27]
    px-[20px]
    py-[11px]
    text-[12px]
    md:text-[13px]
    font-medium
    transition-all
    duration-300
    hover:bg-[#C58B3B]
    hover:text-white
  "
                            >
                                View All Awards

                                <span className="text-[17px] leading-none">
                                    →
                                </span>
                            </button>
                        </div>
                        {/* =====================================================
    AWARDS MODAL
====================================================== */}

                        {showAwardsModal && (
                            <div
                                className="
      fixed
      inset-0
      z-[99999]
      bg-black/80
      backdrop-blur-[5px]
      flex
      items-center
      justify-center
      p-[15px]
      md:p-[30px]
    "
                                onClick={() => setShowAwardsModal(false)}
                            >
                                {/* MODAL BOX */}

                                <div
                                    className="
        relative
        w-full
        max-w-[1000px]
        bg-[#FBFAF7]
        rounded-[12px]
        shadow-[0_25px_80px_rgba(0,0,0,0.45)]
        overflow-hidden
      "
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* =========================================
          MODAL HEADER
      ========================================== */}

                                    <div
                                        className="
          flex
          items-center
          justify-between
          px-[20px]
          md:px-[30px]
          py-[17px]
          border-b
          border-[#E7E0D6]
          bg-white
        "
                                    >
                                        <div>
                                            <h2
                                                className="
              fontspring
              text-[#17191E]
              text-[22px]
              md:text-[30px]
              leading-none
            "
                                            >
                                                Honours and Achievements
                                            </h2>

                                            <div className="w-[45px] h-[2px] bg-[#C58B3B] mt-[9px]" />
                                        </div>

                                        {/* CLOSE */}

                                        <button
                                            type="button"
                                            onClick={() => setShowAwardsModal(false)}
                                            className="
            w-[38px]
            h-[38px]
            rounded-full
            border
            border-[#DDD5C8]
            flex
            items-center
            justify-center
            text-[#333]
            text-[22px]
            transition-all
            duration-300
            hover:bg-[#17191E]
            hover:text-white
            hover:border-[#17191E]
          "
                                        >
                                            ×
                                        </button>
                                    </div>

                                    {/* =========================================
          SLIDER
      ========================================== */}

                                    <div className="relative px-[15px] md:px-[70px] py-[25px] md:py-[35px]">

                                        {/* PREVIOUS BUTTON */}

                                        <button
                                            type="button"
                                            onClick={() => awardSliderRef.current?.slickPrev()}
                                            className="
            hidden
            md:flex
            absolute
            left-[18px]
            top-1/2
            -translate-y-1/2
            z-20

            w-[44px]
            h-[44px]

            rounded-full
            bg-[#17191E]
            text-white

            items-center
            justify-center

            text-[24px]

            transition-all
            duration-300

            hover:bg-[#C58B3B]
          "
                                        >
                                            ‹
                                        </button>

                                        {/* SLIDER */}

                                        <Slider
                                            ref={awardSliderRef}
                                            {...modalSliderSettings}
                                            className="award-modal-slider"
                                        >
                                            {cities.map((item, index) => (
                                                <div key={index}>
                                                    <div
                                                        className="
                  min-h-[420px]
                  md:min-h-[520px]
                  flex
                  flex-col
                  items-center
                  justify-center
                "
                                                    >
                                                        <div
                                                            className="
                    w-full
                    max-w-[750px]
                    h-[390px]
                    md:h-[490px]

                    bg-white

                    rounded-[8px]

                    flex
                    items-center
                    justify-center

                    p-[15px]
                    md:p-[25px]

                    border
                    border-[#EEE8DE]

                    shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                  "
                                                        >
                                                            <img
                                                                src={item.img}
                                                                alt={`CADMAX Award ${index + 1}`}
                                                                className="
                      max-w-full
                      max-h-full
                      object-contain
                    "
                                                            />
                                                        </div>

                                                        <p
                                                            className="
                    text-[#777]
                    text-[12px]
                    md:text-[13px]
                    mt-[12px]
                  "
                                                        >
                                                            Award {index + 1} of {cities.length}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>

                                        {/* NEXT BUTTON */}

                                        <button
                                            type="button"
                                            onClick={() => awardSliderRef.current?.slickNext()}
                                            className="
            hidden
            md:flex
            absolute
            right-[18px]
            top-1/2
            -translate-y-1/2
            z-20

            w-[44px]
            h-[44px]

            rounded-full
            bg-[#17191E]
            text-white

            items-center
            justify-center

            text-[24px]

            transition-all
            duration-300

            hover:bg-[#C58B3B]
          "
                                        >
                                            ›
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* =========================================
          RIGHT AWARDS
      ========================================== */}

                        <div className="relative w-full">
                            {!isMobile ? (

                                // ========================================
                                // DESKTOP SLICK SLIDER
                                // ========================================

                                <Slider
                                    {...slickSettings}
                                    className="achievement-slider"
                                >
                                    {cities.map((item, index) => (
                                        <div
                                            key={index}
                                            className="px-[8px] md:px-[10px]"
                                        >
                                            <div
                                                className="
                    h-[290px]
                    lg:h-[340px]
                    xl:h-[370px]
                    flex
                    items-center
                    justify-center
                    bg-transparent
                  "
                                            >
                                                <img
                                                    src={item.img}
                                                    alt={`CADMAX Achievement ${index + 1}`}
                                                    className="
                      max-w-full
                      max-h-full
                      object-contain
                      transition-transform
                      duration-500
                      hover:scale-[1.04]
                    "
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </Slider>

                            ) : (

                                // ========================================
                                // MOBILE SWIPER
                                // ========================================

                                <Swiper
                                    spaceBetween={15}
                                    slidesPerView={1.4}
                                    centeredSlides={false}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    modules={[Autoplay]}
                                    className="w-full"
                                >
                                    {cities.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div
                                                className="
                    h-[280px]
                    flex
                    items-center
                    justify-center
                  "
                                            >
                                                <img
                                                    src={item.img}
                                                    alt={`CADMAX Achievement ${index + 1}`}
                                                    className="
                      w-full
                      h-full
                      object-contain
                    "
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          BEST URBAN PLANNING SECTION
      ====================================================== */}

            <section className="bg-[#FAF9F6] py-[50px] md:py-[70px] lg:py-[90px] border-t border-[#E9E5DE]">
                <div
                    className="
            max-w-[1320px]
            mx-auto
            px-[15px]
            md:px-[30px]
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-[35px]
            lg:gap-[60px]
            items-center
          "
                >
                    {/* LEFT IMAGE */}

                    <div className="relative">
                        <div className="overflow-hidden rounded-[4px]">
                            <img src={UrbenPlanningImage} alt="Best Urban Planning Firm in India" />
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}

                    <div>
                        <AnimatedHeading>
                            <p
                                className="
                  text-[#C58B3B]
                  text-[11px]
                  md:text-[12px]
                  tracking-[2px]
                  uppercase
                  font-semibold
                  mb-[8px]
                "
                            >
                                Urban Planning Excellence
                            </p>

                            <h2
                                className="
                  fontspring
                  text-[#111318]
                  text-[27px]
                  md:text-[34px]
                  lg:text-[40px]
                  xl:text-[44px]
                  leading-[1.15]
                  mb-[18px]
                "
                            >
                                Shaping the Future as One of the{" "}
                                <span className="text-[#B7772A]">
                                    Best Urban Planning Firms in India
                                </span>
                            </h2>

                            <p
                                className="
                  text-[#5C6169]
                  text-[14px]
                  md:text-[16px]
                  leading-[1.8]
                  mb-[28px]
                "
                            >
                                Cadmax Projects brings together technology, innovation,
                                planning expertise and deep future-ready urban development
                                knowledge to create sustainable, connected and efficient
                                communities.
                            </p>
                        </AnimatedHeading>

                        {/* FEATURES */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-[25px]">
                            {urbanPlanningFeatures.map((item, index) => (
                                <div key={index} className="flex items-start gap-[12px]">
                                    <FeatureIcon />

                                    <div>
                                        <h3 className="text-[#202126] font-semibold text-[14px] md:text-[15px] mb-[3px]">
                                            {item.title}
                                        </h3>

                                        <p className="text-[#777B82] text-[12px] md:text-[13px] leading-[1.5]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-[30px]">
                            <a
                                href="/project"
                                className="
                  inline-flex
                  items-center
                  gap-[12px]
                  bg-[#181B20]
                  text-white
                  px-[22px]
                  py-[13px]
                  text-[13px]
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-[#C18A3E]
                "
                            >
                                Explore Our Urban Planning Projects

                                <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          BEST ARCHITECTURE SECTION
      ====================================================== */}

            <section className="bg-white py-[50px] md:py-[70px] lg:py-[90px] border-t border-[#ECE8E1]">
                <div
                    className="
            max-w-[1320px]
            mx-auto
            px-[15px]
            md:px-[30px]
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-[40px]
            lg:gap-[65px]
            items-center
          "
                >
                    {/* LEFT CONTENT */}

                    <div className="order-2 lg:order-1">
                        <AnimatedHeading>
                            <p
                                className="
                  text-[#C58B3B]
                  text-[11px]
                  md:text-[12px]
                  tracking-[2px]
                  uppercase
                  font-semibold
                  mb-[8px]
                "
                            >
                                Architecture That Defines Landmarks
                            </p>

                            <h2
                                className="
                  fontspring
                  text-[#111318]
                  text-[27px]
                  md:text-[34px]
                  lg:text-[40px]
                  xl:text-[44px]
                  leading-[1.15]
                  mb-[18px]
                "
                            >
                                Creating Iconic Spaces as a Leading{" "}
                                <span className="text-[#B7772A]">
                                    Architecture Firm in Rajasthan
                                </span>
                            </h2>

                            <p
                                className="
                  text-[#5C6169]
                  text-[14px]
                  md:text-[16px]
                  leading-[1.8]
                  mb-[28px]
                "
                            >
                                From heritage-inspired designs to modern architectural
                                marvels, we craft spaces that blend aesthetics,
                                functionality and sustainability to leave a lasting legacy.
                            </p>
                        </AnimatedHeading>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-[25px]">
                            {architectureFeatures.map((item, index) => (
                                <div key={index} className="flex items-start gap-[12px]">
                                    <FeatureIcon />

                                    <div>
                                        <h3 className="text-[#202126] font-semibold text-[14px] md:text-[15px] mb-[3px]">
                                            {item.title}
                                        </h3>

                                        <p className="text-[#777B82] text-[12px] md:text-[13px] leading-[1.5]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-[30px]">
                            <a
                                href="/project"
                                className="
                  inline-flex
                  items-center
                  gap-[12px]
                  bg-[#181B20]
                  text-white
                  px-[22px]
                  py-[13px]
                  text-[13px]
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-[#C18A3E]
                "
                            >
                                Explore Our Architecture Projects

                                <span>→</span>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT IMAGES */}

                    <div className="order-1 lg:order-2 relative pb-[20px] md:pb-0">
                        {/* MAIN IMAGE */}

                        <div className="ml-0 md:ml-[60px] overflow-hidden rounded-[5px]">
                            <img src={ArchitectureImage} alt="Best Urban Planning Firm in India" />
                        </div>

                        {/* SMALL OVERLAP IMAGE */}

                        <div
                            className="
                hidden
                md:block
                absolute
                left-0
                bottom-[35px]
                w-[210px]
                lg:w-[235px]
                bg-white
                p-[5px]
                shadow-[0_10px_40px_rgba(0,0,0,0.18)]
                rounded-[4px]
              "
                        >
                            <img src={ArchitectureImage} alt="Best Urban Planning Firm in India" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Achivement;