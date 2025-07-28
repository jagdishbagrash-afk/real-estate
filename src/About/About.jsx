import "../App.css"
import Header from '../component/Header';
import Footer from "../component/Footer";
import spacebanner from '../img/spacebanner.jpg';
import companybg from '../img/companybg.jpg';
import exploreservicebg from '../img/exploreservicebg.jpg';
import TeamSlider from "./TeamSlider";
import Readybring from "../Home/ReadyBring";
import chooseicon from '../img/chooseicon.png';


function About() {
    const features = [
        {
            title: "End to End Expertise",
            description:
                "From the first mood board to the final handover, we take complete ownership of your project. Our multidisciplinary team handles design concepts, space planning, material selection, procurement, and execution—so you experience a smooth, hassle-free journey from start to finish.",
        },
        {
            title: "Tailored Solutions",
            description:
                "No two spaces—or clients—are the same. We invest time to understand your lifestyle, aesthetic preferences, and functional needs, creating interiors that feel deeply personal. Every detail is thoughtfully curated to tell your story and support the way you live or work.",
        },

    ];
    return (<>

        <div className="min-h-screen ">
            <Header />
            <div className="relative mt-[-150px] ">
                <img src={exploreservicebg} alt="Logo" className="object-cover min-h-[350px] md:min-h-[400px] lg:min-h-[450px] w-full" />
                <div className="max-w-[1320px] m-auto absolute left-[0] right-[0]  bottom-[30px] md:bottom-[50px] lg:bottom-[90px] z-[1] px-[15px]">
                    <h2 className="fontspring text-[20px] md:text-[40px] lg:text-[60px] xl:text-[80px] text-white  ">Why us</h2>
                </div>
            </div>

            <div className="pt-[40px] md:pt-[50px] lg-[80px] pb-[90px] px-[15px]">
                <h2 className="fontspring mb-[20px] text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] text-[#000112] text-center">Company Profile</h2>
                <div className="max-w-[1320px] m-auto">
                    <p className="px-[10px] mb-[20px] text-[14px] md:text-[18px] lg:text-[20px] text-[#00011299] text-center">Cadmax Projects Pvt. Ltd. is a leading urban planning, surveying, and engineering company dedicated to transforming the future of India’s cities and infrastructure.</p>

                    <p className="px-[10px] mb-[20px] text-[14px] md:text-[18px] lg:text-[20px] text-[#00011299] text-center">Founded with a vision to integrate cutting-edge technology and unmatched expertise, Cadmax has evolved from its origins as Pink City Survey Services into a trusted partner for governments, developers, and institutions across the country.</p>

                    <p className="px-[10px] mb-[20px] text-[14px] md:text-[18px] lg:text-[20px] text-[#00011299] text-center">Our work spans comprehensive urban master planning, detailed geospatial surveys, architectural design, infrastructure engineering, and real estate development support.</p>

                    <p className="px-[10px] mb-[20px] text-[14px] md:text-[18px] lg:text-[20px] text-[#00011299] text-center">With over 15 years of proven experience, we have successfully delivered thousands of projects across Rajasthan, Haryana, Delhi, Gujarat, and beyond. Our focus remains unwavering: to build sustainable, smart, and inclusive spaces that empower communities and drive progress.</p>
                </div>





                <div className="max-w-[1320px] m-auto mt-[30px] mb-[20px] md:mb-[10px]">

                    <img src={companybg} alt="Logo" className="object-cover min-h-[300px] md:min-h-[400px] lg:min-h-[480px] w-full" />
                </div>
            </div>


            <section className="bg-[#94A393] py-[40px] md:py-[50px] lg:py-[90px] px-4">
                <div className="max-w-[1320px] mx-auto text-center">
                    <h2 className="fontspring text-[25px] md:text-[30px] lg:text-[50px] font-light text-white mb-[25px]">
                        Why Choose Us?
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2">
                        {features.map((item, index) => (
                            <div key={index} className="bg-white p-[20px] md:p-[20px] lg:p-[40px] shadow-md text-left hover:shadow-lg transition">
                                {/* Replace with your own SVG or icon */}
                                <div className="text-[#9aa396] mb-4 text-3xl">
                                    <img src={chooseicon} alt="Logo" className="" />

                                </div>
                                <h3 className="fontspring text-[18px] md:text-[22px] lg:text-[26px] text-[#000112] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-[#000112ba] text-[16px] md:text-[16px] lg:text-[20px] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="bg-white py-[30px] md:py-[70px] lg:py-[80px] xl:py-[100px]">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-[60px]">
                    <div className="w-full md:w-1/2">
                        <img src={spacebanner} alt="Interior" className=" w-full h-auto object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 md:text-left">
                        <h2 className="fontspring mb-[15px] text-[25px] text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] leading-[30px] md:leading-[35px] lg:leading-[45px] xl:leading-[55px] text-[#000112]">
                            About Us</h2>
                        <p className=" mb-[20px] text-[14px] md:text-[18px] lg:text-[20px] text-[#00011299] ">At Cadmax Projects Pvt. Ltd., we believe that great design and engineering have the power to change lives.</p>

                        <p className=" mb-[20px] text-[14px] md:text-[18px] lg:text-[20px] text-[#00011299] ">From the very first blueprint to the final survey, our work reflects a commitment to accuracy, innovation, and sustainability.</p>

                        <p className=" mb-[20px] text-[14px] md:text-[18px] lg:text-[20px] text-[#00011299] ">What sets us apart?</p>
                        <ul className="flex gap-[15px] flex-col text-[14px] md:text-[18px] lg:text-[20px] text-[#00011299]">
                            <li className="flex gap-[5px]">✅ A multidisciplinary approach combining urban planning, architecture, surveying, and engineering under one roof</li>
                            <li className="flex gap-[5px]">✅ Investment in the latest geospatial technology including DGPS, Total Stations, and Drone Surveying</li>
                            <li className="flex gap-[5px]">✅ Deep knowledge of local regulations, approvals, and development standards</li>
                            <li className="flex gap-[5px]">✅ An experienced team driven by integrity and a shared purpose</li>

                        </ul>
                    </div>
                </div>
            </section>

            <div className="clintSays bg-[#F8F6F2] py-[40px] md:py-[80px] lg:py-[100px] text-center px-4">
                <h2 className="fontspring text-[25px] md:text-[40px] lg:text-[50px] text-[#000112]">
                    Our Team Members
                </h2>
                <p className="mb-[20px] text-[14px] md:text-[18px] lg:text-[20px] text-[#00011299] text-center">At the heart of Cadmax is a dedicated team of professionals whose experience and passion fuel our success.</p>

                <TeamSlider />
            </div>


            <section class="bg-[#94A393] py-[40px] md:py-[50px] lg:py-[90px] px-4"><div class="max-w-[1320px] mx-auto "><h2 class="fontspring text-[25px] md:text-[30px] lg:text-[50px] font-light text-white mb-[5px] text-center">What We Stand For</h2>
                <p className="mb-[40px] text-white text-[16px] md:text-[18px] lg:text-[20px] text-center">These values guide every decision we make and every project we undertake.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 md:p-8 ">
                        <h3 className="fontspring text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px]  leading-relaxed text-[#000112]">
                            Integrity in our commitments and relationships.
                        </h3>
                    </div>
                    <div className="bg-white p-6 md:p-8 ">
                        <h3 className="fontspring text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] leading-relaxed text-[#000112]">
                            Innovation in technology and methodology.
                        </h3>
                    </div>
                    <div className="bg-white p-6 md:p-8 ">
                        <h3 className="fontspring text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] leading-relaxed text-[#000112]">
                            Impact through sustainable, community-focused solutions.
                        </h3>
                    </div>
                </div>
            </div>
            </section>

            <Readybring />



        </div>
        <Footer />
    </>);
}

export default About;