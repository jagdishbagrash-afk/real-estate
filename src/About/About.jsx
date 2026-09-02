import "../App.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Readybring from "../Home/ReadyBring";
import Achivement from "./Achivement";
import AnimatedHeading from "../component/AnimatedHeading";

import { Helmet } from "react-helmet-async";

function About() {
    const aboutPoints = [
        "A multidisciplinary approach, combining urban planning, real estate, infrastructure, architecture, and interior design services under one roof.",

        "Investment in the latest geospatial technology, including DGPS, total station and drone surveying.",

        "Deep knowledge of local regulations, approvals, and development standards.",

        "An experienced team driven by integrity and a shared purpose.",
    ];
    const StatIcon = ({ type }) => {
        const props = {
            width: 29,
            height: 29,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#C89546",
            strokeWidth: 1.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
        };

        if (type === "project") {
            return (
                <svg {...props}>
                    <rect x="5" y="6" width="14" height="15" />
                    <path d="M9 6V3h6v3" />
                    <path d="M9 10h2" />
                    <path d="M13 10h2" />
                    <path d="M9 14h2" />
                    <path d="M13 14h2" />
                    <path d="M10 21v-4h4v4" />
                </svg>
            );
        }

        if (type === "recognition") {
            return (
                <svg {...props}>
                    <circle cx="12" cy="10" r="6" />
                    <circle cx="12" cy="10" r="3" />
                    <path d="M8 15l-2 6 6-3 6 3-2-6" />
                </svg>
            );
        }

        if (type === "quality") {
            return (
                <svg {...props}>
                    <circle cx="12" cy="12" r="7" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v3" />
                    <path d="M12 19v3" />
                    <path d="M2 12h3" />
                    <path d="M19 12h3" />
                </svg>
            );
        }

        return (
            <svg {...props}>
                <circle cx="12" cy="9" r="6" />
                <circle cx="12" cy="9" r="3" />
                <path d="M8 14l-2 7 4-2 2 3 2-3 4 2-2-7" />
            </svg>
        );
    };
    const stats = [
        {
            number: "20+",
            title: "Years of Excellence",
        },
        {
            number: "250+",
            title: "Projects Completed",
        },
        {
            number: "15+",
            title: "Awards & Recognitions",
        },
        {
            number: "98%",
            title: "Client Satisfaction",
        },
    ];

    return (
        <>
            {/* =====================================================
          SEO
      ====================================================== */}

            <Helmet>
                <title>
                    About CADMAX Pro | Architecture & Urban Planning Firm in India
                </title>

                <meta
                    name="description"
                    content="Discover CADMAX Pro, a leading architecture, urban planning and infrastructure consultancy delivering sustainable, innovative and future-ready projects across India."
                />

                <meta
                    name="keywords"
                    content="CADMAX Pro, urban planning company, architecture firm Rajasthan, infrastructure consultancy, architecture firm Jaipur, urban planning firm India"
                />

                <link
                    rel="canonical"
                    href="https://cadmaxpro.com/about"
                />
            </Helmet>

            <div className="min-h-screen bg-white">
                <Header />

                {/* =====================================================
            HERO BANNER
        ====================================================== */}

                {/* =====================================================
    WHY CHOOSE CADMAX PRO HERO
====================================================== */}

                <section
                    className="
    relative
    h-[600px]
    md:h-[700px]
    lg:h-[80vh]
    xl:h-[80vh]
    min-h-[700px]
    max-h-[850px]
    bg-cover
    bg-center
    bg-no-repeat
    overflow-hidden
    md:mt-[-100px]
  "
                    style={{
                        backgroundImage:
                            "url('https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/Updated.png')",
                    }}
                >
                    {/* DARK LEFT OVERLAY */}

                    <div
                        className="
      absolute
      inset-0
      bg-[linear-gradient(90deg,rgba(4,13,21,0.96)_0%,rgba(5,14,22,0.85)_30%,rgba(5,14,22,0.35)_62%,rgba(5,14,22,0.08)_100%)]
    "
                    />

                    {/* BOTTOM OVERLAY */}

                    <div
                        className="
      absolute
      inset-0
      bg-[linear-gradient(0deg,rgba(5,10,15,0.70)_0%,transparent_45%)]
    "
                    />

                    {/* =====================================================
      CONTENT
  ====================================================== */}

                    <div
                        className="
      relative
      z-10
      max-w-[1450px]
      mx-auto
      px-[20px]
      md:px-[45px]
      lg:px-[70px]

      pt-[110px]
      md:pt-[180px]
      lg:pt-[185px]

      pb-[170px]
    "
                    >
                        <div className="max-w-[520px]">

                            {/* HEADING */}

                            <h1
                                className="
          fontspring
          text-white
          text-[42px]
          sm:text-[50px]
          md:text-[58px]
          lg:text-[66px]
          leading-[1.08]
          font-normal
          mb-[22px]
        "
                            >
                                Why Choose
                                <br />

                                <span>
                                    CADMAX{" "}
                                    <span className="text-[#D29A4A]">
                                        Pro
                                    </span>
                                </span>
                            </h1>

                            {/* SUB HEADING */}

                            <p
                                className="
          text-white
          text-[14px]
          md:text-[16px]
          lg:text-[17px]
          leading-[1.6]
          mb-[20px]
        "
                            >
                                Architecture. Urban Planning. Infrastructure.
                                <br />
                                Designing Excellence, Building Futures.
                            </p>

                            {/* DESCRIPTION */}

                            <p
                                className="
          text-[#CACED2]
          text-[12px]
          md:text-[14px]
          leading-[1.75]
          max-w-[470px]
          mb-[27px]
        "
                            >
                                From visionary concepts to iconic landmarks, we blend
                                creativity, technology and sustainability to deliver spaces
                                that inspire and transform lives.
                            </p>

                            {/* BREADCRUMB */}

                            <div
                                className="
          flex
          items-center
          gap-[12px]
          text-[12px]
          md:text-[13px]
        "
                            >
                                <a
                                    href="/"
                                    className="
            text-white
            hover:text-[#D29A4A]
            transition-colors
          "
                                >
                                    Home
                                </a>

                                <span className="text-[#92989E]">
                                    ›
                                </span>

                                <span className="text-[#D29A4A]">
                                    About CADMAX Pro
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* =====================================================
      BOTTOM STATS
  ====================================================== */}

                    <div
                        className="
      absolute
      z-20
      bottom-[18px]
      left-1/2
      -translate-x-1/2

      w-[calc(100%-30px)]
      max-w-[1020px]
    "
                    >
                        <div
                            className="
        grid
        grid-cols-2
        lg:grid-cols-4

        bg-[#111921]/90
        backdrop-blur-[8px]

        border
        border-[#FFFFFF55]

        rounded-[9px]

        shadow-[0_15px_40px_rgba(0,0,0,0.40)]

        overflow-hidden
      "
                        >
                            {stats.map((item, index) => (
                                <div
                                    key={index}
                                    className="
            flex
            items-center
            justify-center
            gap-[12px]
            md:gap-[15px]

            px-[12px]
            md:px-[20px]

            py-[16px]
            md:py-[20px]

            border-r
            border-b
            lg:border-b-0
            border-[#FFFFFF20]

            last:border-r-0
          "
                                >
                                    {/* ICON */}

                                    <div
                                        className="
              w-[44px]
              h-[44px]
              md:w-[50px]
              md:h-[50px]

              shrink-0

              flex
              items-center
              justify-center

              bg-[#FFFFFF08]
            "
                                    >
                                        <StatIcon type={item.icon} />
                                    </div>

                                    {/* TEXT */}

                                    <div>
                                        <h3
                                            className="
                text-white
                text-[23px]
                md:text-[28px]
                lg:text-[31px]
                leading-none
                font-light
                mb-[5px]
              "
                                        >
                                            {item.number}
                                        </h3>

                                        <p
                                            className="
                text-[#E0E2E4]
                text-[8px]
                md:text-[10px]
                whitespace-nowrap
              "
                                        >
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
            ABOUT US
        ====================================================== */}

                <section
                    className="
            bg-white
            py-[60px]
            md:py-[80px]
            lg:py-[100px]
            px-[15px]
          "
                >
                    <div
                        className="
              max-w-[1320px]
              mx-auto
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-[45px]
              lg:gap-[80px]
              items-center
            "
                    >
                        {/* LEFT IMAGE */}

                        <div className="relative">
                            <div
                                className="
                  absolute
                  left-[-12px]
                  md:left-[-25px]
                  bottom-[-20px]
                  w-[100px]
                  h-[150px]
                  opacity-40
                  hidden
                  md:block
                "
                                style={{
                                    backgroundImage:
                                        "radial-gradient(#C58B3B 1.5px, transparent 1.5px)",
                                    backgroundSize: "12px 12px",
                                }}
                            />

                            <div
                                className="
                  relative
                  overflow-hidden
                  rounded-[7px]
                "
                            >
                                <img
                                    src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/about1.jpg"
                                    alt="CADMAX Pro architecture and surveying team"
                                    className="
                    w-full
                    h-[320px]
                    md:h-[460px]
                    lg:h-[500px]
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.03]
                  "
                                />
                            </div>

                            {/* EXPERIENCE CARD */}

                            <div
                                className="
                  absolute
                  right-[15px]
                  md:right-[40px]
                  bottom-[-28px]
                  bg-white
                  shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                  px-[20px]
                  py-[14px]
                  min-w-[170px]
                  rounded-[4px]
                "
                            >
                                <div className="flex items-center gap-[12px]">
                                    <div
                                        className="
                      w-[42px]
                      h-[42px]
                      border
                      border-[#C58B3B]
                      flex
                      items-center
                      justify-center
                      text-[#C58B3B]
                    "
                                    >
                                        <span className="text-[20px]">⌂</span>
                                    </div>

                                    <div>
                                        <p className="text-[10px] text-[#777]">
                                            Shaping
                                        </p>

                                        <p className="text-[11px] font-semibold text-[#333]">
                                            Better Spaces
                                        </p>

                                        <p className="text-[#B5782C] font-semibold text-[12px]">
                                            Since 2003
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}

                        <div className="pt-[20px] lg:pt-0">
                            <AnimatedHeading>
                                <div className="flex items-center gap-[10px] mb-[20px]">
                                    <h1
                                        className="
                      fontspring
                      text-[30px]
                      md:text-[38px]
                      lg:text-[44px]
                      xl:text-[48px]
                      text-[#17191E]
                    "
                                    >
                                        About Us
                                    </h1>

                                    <span className="w-[35px] h-[1px] bg-[#C58B3B]" />
                                </div>

                                <p
                                    className="
                    text-[#565B65]
                    text-[14px]
                    md:text-[16px]
                    leading-[1.8]
                    mb-[15px]
                  "
                                >
                                    At Cadmax Projects, we believe that great designs and
                                    engineering have the power to change lives.
                                </p>

                                <p
                                    className="
                    text-[#565B65]
                    text-[14px]
                    md:text-[16px]
                    leading-[1.8]
                    mb-[20px]
                  "
                                >
                                    From first blueprints to the final design, our work
                                    reflects a commitment to accuracy, innovation, and
                                    sustainability.
                                </p>

                                <p
                                    className="
                    text-[#25282E]
                    text-[14px]
                    md:text-[16px]
                    font-semibold
                    mb-[18px]
                  "
                                >
                                    What sets us apart?
                                </p>
                            </AnimatedHeading>

                            <div className="flex flex-col gap-[17px]">
                                {aboutPoints.map((point, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-[12px]"
                                    >
                                        <div
                                            className="
                        mt-[2px]
                        min-w-[22px]
                        w-[22px]
                        h-[22px]
                        rounded-full
                        border
                        border-[#C58B3B]
                        flex
                        items-center
                        justify-center
                      "
                                        >
                                            <span className="text-[#C58B3B] text-[11px]">
                                                ✓
                                            </span>
                                        </div>

                                        <p
                                            className="
                        text-[#61666E]
                        text-[13px]
                        md:text-[14px]
                        leading-[1.65]
                      "
                                        >
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            COMPANY PROFILE
        ====================================================== */}

                <section
                    className="
            bg-[#FAFAF8]
            pt-[50px]
            md:pt-[70px]
            lg:pt-[85px]
            pb-[55px]
            md:pb-[80px]
            px-[15px]
            border-t
            border-[#EEEAE3]
          "
                >
                    <div className="max-w-[1200px] mx-auto">
                        <AnimatedHeading>
                            <div className="text-center mb-[28px]">
                                <h2
                                    className="
                    fontspring
                    text-[28px]
                    md:text-[38px]
                    lg:text-[46px]
                    text-[#17191E]
                  "
                                >
                                    Company Profile
                                </h2>

                                <div
                                    className="
                    w-[55px]
                    h-[2px]
                    bg-[#C58B3B]
                    mx-auto
                    mt-[12px]
                  "
                                />
                            </div>
                        </AnimatedHeading>

                        <div
                            className="
                max-w-[950px]
                mx-auto
                text-center
                mb-[35px]
                md:mb-[45px]
              "
                        >
                            <p
                                className="
                  text-[#60646C]
                  text-[13px]
                  md:text-[15px]
                  leading-[1.8]
                  mb-[10px]
                "
                            >
                                Cadmax Projects is a leading urban planning and
                                infrastructure company dedicated to transforming the
                                future of India.
                            </p>

                            <p
                                className="
                  text-[#60646C]
                  text-[13px]
                  md:text-[15px]
                  leading-[1.8]
                  mb-[10px]
                "
                            >
                                Founded with a vision to integrate cutting-edge
                                technology and unmatched expertise, CADMAX has evolved
                                from its origins as Pinkcity Survey Services into one of
                                the trusted groups in infrastructure consultancy,
                                planning and design.
                            </p>

                            <p
                                className="
                  text-[#60646C]
                  text-[13px]
                  md:text-[15px]
                  leading-[1.8]
                  mb-[10px]
                "
                            >
                                Our work spans urban master planning, real estate,
                                infrastructure, architecture and interior design.
                            </p>

                            <p
                                className="
                  text-[#60646C]
                  text-[13px]
                  md:text-[15px]
                  leading-[1.8]
                "
                            >
                                With extensive experience, our focus remains on building
                                sustainable, smart and inclusive spaces that empower
                                communities and drive progress.
                            </p>
                        </div>

                        {/* COMPANY GROUP IMAGE */}

                        <div
                            className="
                max-w-[930px]
                mx-auto
                overflow-hidden
                rounded-[5px]
                shadow-sm
              "
                        >
                            <img
                                src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/a1bout2.jpg"
                                alt="CADMAX Pro team and company profile"
                                className="
                  w-full
                  h-[250px]
                  md:h-[420px]
                  lg:h-[470px]
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                "
                            />
                        </div>
                    </div>
                </section>

                {/* =====================================================
            HONOURS + URBAN PLANNING + ARCHITECTURE
            All these are inside updated Achivement.jsx
        ====================================================== */}

                <Achivement />

                {/* =====================================================
            CTA
        ====================================================== */}

                <Readybring />
            </div>

            <Footer />
        </>
    );
}

export default About;