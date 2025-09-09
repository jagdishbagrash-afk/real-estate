import "../App.css"
import Header from '../component/Header';
import AnimatedHeading from "../component/AnimatedHeading";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import exploreservicebg from "../img/projectbanner.jpg";
import Banner from "../component/Banner";

function Project() {

    const projects = [
        {
            title: "Cadmax Group Headoffice",
            link: "/project/cadmax-group-headoffice",
            image: "/project/RK_02188.jpg",
            minHeight: { base: "350px", md: "400px", lg: "600px", xl: "730px" },
        },
        {
            title: "Ravi Kiran Vihar",
            link: "/project/ravi-kiran-vihar",
            image: "/project/Ravi.jpg",
            minHeight: { base: "300px", md: "350px", lg: "400px", xl: "450px" },
        },
        {
            title: "Shivam Majestic",
            link: "/project/shivam-majestic",
            image: "/services/HAMSAfinaloct01(1).jpg",
            minHeight: { base: "350px", md: "400px", lg: "600px", xl: "730px" },
        },
        {
            title: "Sukoon Farms",
            link: "/project/sukoon-farms",
            image: "/project/SUKOON.jpg",
            minHeight: { base: "300px", md: "350px", lg: "400px", xl: "450px" },
        },
        {
            title: "Cadmax Valley",
            link: "/project/cadmax-valley",
            image: "/project/renderA01.jpg",
            minHeight: { base: "350px", md: "400px", lg: "600px", xl: "730px" },
            upcoming: true, // special badge
        },
        {
            title: "Dravyawati River",
            link: "/project/dravyawati-river",
            image: "/project/FrbWZYLWYAInZAr.jpg",
            minHeight: { base: "300px", md: "350px", lg: "400px", xl: "450px" },
        },
        {
            title: "Mangalam Vishwakarma Industrial Park",
            link: "/project/mangalam-vishwakarma-industrial-park",
            image: "/project/data.webp",
            minHeight: { base: "350px", md: "400px", lg: "600px", xl: "730px" },
        },
        {
            title: "Govind Bagh",
            link: "/project/govind-bagh",
            image: "/project/image-1.webp",
            minHeight: { base: "300px", md: "350px", lg: "400px", xl: "450px" },
        },
        {
            title: "Kedia’s Landmark",
            link: "/project/kedia-landmark",
            image: "/project/LANDMARK-003.jpg",
            minHeight: { base: "350px", md: "400px", lg: "600px", xl: "730px" },
        },
        {
            title: "Topographical Survey, Kumbhalgarh",
            link: "/project/topographical-survey",
            image: "/project/6-1519215128.jpg",
            minHeight: { base: "300px", md: "350px", lg: "400px", xl: "450px" },
        },
    ];
    return (<>
        <div className="min-h-screen ">
            <Header />
            <Banner image={exploreservicebg} title={"Our Projects"} />
            <div className="flex flex-wrap sm:flex-nowrap  gap-[20px] py-[30px] md:py-[60px] px-[15px] w-full max-w-[1300px] m-auto">
                <div className="flex flex-col gap-[20px] w-full md:w-[48%]">
                    <div className="relative">
                        <Link to="/project/cadmax-group-headoffice" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={"/project/RK_02188.jpg"} alt="Logo" className="object-cover min-h-[350px] md:min-h-[400px] lg:min-h-[600px] xl:min-h-[730px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Cadmax Group Headoffice</div>
                    </div>

                    <div className="relative">
                        <Link to="/project/ravi-kiran-vihar" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={"/project/Ravi.jpg"} alt="Logo" className="object-cover min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Ravi Kiran Vihar</div>
                    </div>

                    <div className="relative">
                        <Link to="/project/shivam-majestic" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={"/services/HAMSAfinaloct01(1).jpg"} alt="Logo" className="object-cover min-h-[350px] md:min-h-[400px] lg:min-h-[600px] xl:min-h-[730px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Shivam Majestic</div>
                    </div>

                    <div className="relative">
                        <Link to="/project/sukoon-farms" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={"/project/SUKOON.jpg"} alt="Logo" className="object-cover min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Sukoon Farms</div>
                    </div>

                    <div className="relative">
                        <Link to="/project/rudra-mahal" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={"/project/hotelrenderA_4Photo.jpg"} alt="Logo" className="object-cover min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Rudra  Mahal</div>
                    </div>



                    <div className="relative">
                        <Link to="/project/riyasat-sankalp" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={"/project/proj_img-45861_1-770x400.jpg"} alt="Logo" className="object-cover min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Riyasat Sankalp</div>
                    </div>


                    <div className="relative">
                        <Link to="/project/cadmax-valley" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img
                                src={"/project/renderA01.jpg"}
                                alt="Logo"
                                className="object-cover min-h-[350px] md:min-h-[400px] lg:min-h-[600px] xl:min-h-[730px] w-full"
                            />
                            <div className="absolute top-4 left-4 bg-yellow-500 text-white text-sm md:text-base font-semibold px-3 py-1 rounded-lg shadow-lg">
                                Upcoming Project
                            </div>
                        </Link>

                        <div className="bg-white px-3 py-2 text-[16px] md:text-[18px] uppercase text-[#000112]">
                            Cadmax Valley
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[20px] w-full md:w-[48%]">
                    <div className="relative">
                        <Link to="/project/dravyawati-river" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={"/project/FrbWZYLWYAInZAr.jpg"} alt="Logo" className="object-cover min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Dravyawati River</div>
                    </div>

                    <div className="relative">
                        <Link to="/project/mangalam-vishwakarma-industrial-park" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={"/project/data.webp"} alt="Logo" className="object-cover min-h-[350px] md:min-h-[400px] lg:min-h-[600px] xl:min-h-[730px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Mangalam Vishwakarma Industrial Park</div>
                    </div>

                    <div className="relative">
                        <Link to="/project/govind-bagh" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={"/project/image-1.webp"} alt="Logo" className="object-cover min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Govind Bagh</div>
                    </div>

                    <div className="relative">
                        <Link to="/project/kedia-landmark" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={"/project/LANDMARK-003.jpg"} alt="Logo" className="object-cover min-h-[350px] md:min-h-[400px] lg:min-h-[600px] xl:min-h-[730px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Kedia’s Landmark</div>
                    </div>
                    <div className="relative">
                        <Link to="/project/topographical-survey" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={"/project/6-1519215128.jpg"} alt="Logo" className="object-cover min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Topographical Survey, Kumbhalgarh</div>
                    </div>
                    <div className="relative">
                        <Link to="/project/riyasat-ecopark" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={"/project/proj_img.jpeg.jpg"} alt="Logo" className="object-cover min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] w-full" />
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">Riyasat Ecopark</div>
                    </div>

                    <div className="relative">
                        <Link to="/project/shivam-magnus" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={"/project/mahakal001.jpg"} alt="Logo" className="object-cover min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] w-full" />
                            <div className="absolute top-4 left-4 bg-yellow-500 text-white text-sm md:text-base font-semibold px-3 py-1 rounded-lg shadow-lg">
                                Upcoming Project
                            </div>
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]">  shivam magnus</div>
                    </div>
                    {/* 
                    <div className="relative">
                        <Link to="#" className="overlaybx">
                            <div className="blackOverlay"></div>
                            <img src={"/project/villa-for-sale-in-jaipur.webp"} alt="Logo" className="object-cover min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] w-full" />
                            <div className="absolute top-4 left-4 bg-yellow-500 text-white text-sm md:text-base font-semibold px-3 py-1 rounded-lg shadow-lg">
                                Upcoming Project
                            </div>
                        </Link>
                        <div className="bg-white px-[10px] py-[10px] text-[16px] uppercase text-[#000112]"> Upcoming Project</div>
                    </div> */}
                </div>
            </div>
            <Footer />
        </div>
    </>);
}



export default Project;