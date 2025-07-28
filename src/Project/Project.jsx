import "../App.css"
import Header from '../component/Header';
import exploreservicebg from '../img/exploreservicebg.jpg';
import projectimg01 from '../img/projectimg01.jpg';
import projectimg02 from '../img/projectimg02.jpg';
import projectimg03 from '../img/projectimg03.jpg';
import projectimg04 from '../img/projectimg04.jpg';
import projectimg05 from '../img/projectimg05.jpg';
import projectimg06 from '../img/projectimg06.jpg';
import projectimg07 from '../img/projectimg07.jpg';
import projectimg08 from '../img/projectimg08.jpg';
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

function Project() {
    // Array of project data
    const projects = [
        {
            image: projectimg01,
            title: "Modern Minimalist Apartment – Indiranagar",
        },
        {
            image: projectimg03,
            title: "Cozy Studio Flat – Koramangala",
        },
        {
            image: projectimg05,
            title: "Luxury Penthouse – MG Road",
        },
        {
            image: projectimg07,
            title: "Stylish Loft – Whitefield",
        },
        {
            image: projectimg02,
            title: "Modern Minimalist Apartment – Indiranagar",
        },
        {
            image: projectimg04,
            title: "Cozy Studio Loft – Koramangala",
        },
        {
            image: projectimg06,
            title: "Luxurious Penthouse – MG Road",
        },
        {
            image: projectimg08,
            title: "Chic Urban Flat – Whitefield",
        },
    ];

    // Layout to alternate heights
   const imageHeightsByIndex = [
  "min-h-[600px]", // 0 big
  "min-h-[300px]", // 1 small
  "min-h-[300px]", // 2 small
  "min-h-[600px]", // 3 big
  "min-h-[600px]", // 4 big
  "min-h-[300px]", // 5 small
  "min-h-[300px]", // 6 small
  "min-h-[300px]", // 7 small
  "min-h-[700px]", // 8 big
];


    return (<>
        <div className="min-h-screen ">
            <Header />
            <div className="relative mt-[-150px] ">
                <img src={exploreservicebg} alt="Logo" className="object-cover min-h-[350px] md:min-h-[400px] lg:min-h-[450px] w-full" />
                <div className="max-w-[1320px] m-auto absolute left-[0] right-[0]  bottom-[30px] md:bottom-[50px] lg:bottom-[90px] z-[1] px-[15px]">
                    <h2 className="fontspring text-[20px] md:text-[40px] lg:text-[60px] xl:text-[80px] text-white  ">Our Projects</h2>
                </div>
            </div>


            <div className="flex flex-wrap sm:flex-nowrap  gap-[20px] py-[30px] md:py-[60px] px-[15px] w-full max-w-[1300px] m-auto">
                <div className="flex flex-col gap-[20px] w-full md:w-[48%]">
                    <div className="relative">
                        <Link to ="/project/details" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={projectimg01} alt="Logo" className="object-cover min-h-[350px] md:min-h-[400px] lg:min-h-[600px] xl:min-h-[730px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Modern Minimalist Apartment – Indiranagar</div>
                    </div>

                    <div className="relative">
                        <Link to ="/project/details" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={projectimg03} alt="Logo" className="object-cover min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Cozy Studio Flat – Koramangala</div>
                    </div>

                    <div className="relative">
                        <Link to ="/project/details" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={projectimg05} alt="Logo" className="object-cover min-h-[350px] md:min-h-[400px] lg:min-h-[600px] xl:min-h-[730px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Luxury Penthouse – MG Road</div>
                    </div>


                    <div className="relative">
                        <Link to ="/project/details" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={projectimg07} alt="Logo" className="object-cover min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Stylish Loft – Whitefield</div>
                    </div>
                </div>


                <div className="flex flex-col gap-[20px] w-full md:w-[48%]">
                    <div className="relative">
                        <Link to ="/project/details" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={projectimg02} alt="Logo" className="object-cover min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Modern Minimalist Apartment – Indiranagar</div>
                    </div>

                    <div className="relative">
                        <Link to ="/project/details" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={projectimg04} alt="Logo" className="object-cover min-h-[350px] md:min-h-[400px] lg:min-h-[600px] xl:min-h-[730px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Cozy Studio Loft – Koramangala</div>
                    </div>

                    <div className="relative">
                        <Link to ="/project/details" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={projectimg06} alt="Logo" className="object-cover min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Luxurious Penthouse – MG Road</div>
                    </div>

                    <div className="relative">
                        <Link to ="/project/details" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={projectimg08} alt="Logo" className="object-cover min-h-[350px] md:min-h-[400px] lg:min-h-[600px] xl:min-h-[730px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Chic Urban Flat – Whitefield</div>
                    </div>



                </div>
            </div>
            <Footer />
        </div>
    </>);
}

export default Project;