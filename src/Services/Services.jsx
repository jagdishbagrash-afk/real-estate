import "../App.css";
import Header from "../component/Header";
import exploreservicebg from "../img/exploreservicebg.jpg";
import img1 from "../img/realestate.jpg";
import img2 from "../img/FINALNADHALLAYOUT20_page-0001.jpg";
import img3 from "../img/Infrastructure.jpg";
import img4 from "../img/Acrchitecture.jpg";
import img5 from "../img/Interior.png";
import Footer from "../component/Footer";
import AnimatedHeading from "../component/AnimatedHeading";
import { useState } from "react";
import { Link } from "react-router-dom";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    { title: "URBAN PLANNING", image: img2, slug: "urban-planning" },
    { title: "REAL STATE", image: img1, slug: "real-state" },
    { title: "INFRASTRUCTURE", image: img3, slug: "infrastructure" },
    { title: "ARCHITECTURE", image: img4, slug: "architecture" },
    { title: "INTERIOR DESIGNING", image: img5, slug: "interior-designing" },
  ];

  return (
    <>
      <div className="min-h-screen">
        <Header />

        {/* Hero section */}
        <div className="relative mt-[-150px]">
          <img
            src={exploreservicebg}
            alt="Logo"
            className="object-cover min-h-[350px] md:min-h-[400px] lg:min-h-[450px] w-full"
          />
          <div className="max-w-[1320px] m-auto absolute left-0 right-0 bottom-[30px] md:bottom-[50px] lg:bottom-[90px] z-[1] px-[15px]">
            <AnimatedHeading>
              <h2 className="fontspring text-[20px] md:text-[40px] lg:text-[60px] xl:text-[80px] text-white">
                Explore our services
              </h2>
            </AnimatedHeading>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="w-full py-[40px] md:py-[60px] lg:py-[100px] px-[15px]">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              320: { slidesPerView: 1 },   // mobile
              768: { slidesPerView: 2 },   // tablet
              1024: { slidesPerView: 3 },  // desktop
            }}
            className="h-[500px]"
          >
            {services && services.map((service, index) => (
              <SwiperSlide
                key={index}
                style={{
                  flexBasis:
                    window.innerWidth >= 1024
                      ? hoveredIndex === index
                        ? "40%"
                        : hoveredIndex !== null
                          ? "25%"
                          : "33.33%"
                      : "100%", // ✅ mobile & tablet में हमेशा full width
                  transition: "all 0.5s ease-in-out",
                  height: "100%",
                }}
              >
                <Link
                  to={`/services/${service?.slug}`}
                  className="relative group cursor-pointer overflow-hidden w-full h-full"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-[16px] uppercase font-semibold tracking-wide text-center">
                      {service.title}
                    </h3>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
