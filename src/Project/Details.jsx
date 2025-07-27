import "../App.css"
import Header from '../component/Header';
import exploreservicebg from '../img/exploreservicebg.jpg';
import projectdetailimg01 from '../img/projectdetailimg01.jpg';
import projectdetailimg02 from '../img/projectdetailimg02.jpg';
import projectdetailimg03 from '../img/projectdetailimg03.jpg';
import projectdetailimg04 from '../img/projectdetailimg04.jpg';
import projectdetailimg05 from '../img/projectdetailimg05.jpg';
import projectdetailimg06 from '../img/projectdetailimg06.jpg';
import Footer from "../component/Footer";
function Details() {
    return (  <>
    <div className="min-h-screen ">
      <Header />
      <div className="relative mt-[-150px] ">
            <img src={exploreservicebg} alt="Logo" className="object-cover min-h-[350px] md:min-h-[400px] lg:min-h-[450px] w-full" />
            <div className="max-w-[1320px] m-auto absolute left-[0] right-[0]  bottom-[30px] md:bottom-[50px] lg:bottom-[90px] z-[1] px-[15px]">
                <h2 className="fontspring text-[20px] md:text-[40px] lg:text-[60px] xl:text-[80px] text-white  ">Projects Details</h2>
            </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-[15px] md:gap-[30px] lg:gap-[45px] xl:gap-[55px] w-full max-w-[1330px] m-auto py-[10px] md:py-[45px] lg-[65px] px-[15px]">
            <div className="bg-white p-[10px] w-full md:w-[38%] ">
                <div className="sticky top-[15px]">
                <h2 className="fontspring text-[20px] md:text-[25px] lg:text-[40px] lg:leading-[24px] md:leading-[32px] lg:leading-[42px] text-[#000112] mb-[5px] md:mb-[15px]">Modern Minimalist Apartment</h2>
                <p className="text-[#000112] text-[12px] md:text-[14px] lg:text-[16px]">Our featured project showcases a stunning transformation, reflecting our commitment to innovation, attention to detail, and client satisfaction. Explore how we turned vision into reality, creating a space that is both functional and beautiful.</p>
                <div className="flex flex-col gap-[20px] border-t-[1px] border-b-[1px] border-t-[#f2f2f2] border-b-[#f2f2f2] py-[15px] mt-[25px]">
                    <div className="flex justify-between gap-[15px]">
                        <div className="text-[#666666] text-[12px] md:text-[14px] lg:text-[18px] font-[500]">
                            Category
                        </div>

                        <div className="text-[#181A20] text-[12px] md:text-[14px] lg:text-[18px] font-[500]">
                        Interior Design
                        </div>
                    </div>


                    <div className="flex justify-between gap-[15px]">
                        <div className="text-[#666666] text-[12px] md:text-[14px] lg:text-[18px] font-[500]">
                        Client
                        </div>

                        <div className="text-[#181A20] text-[12px] md:text-[14px] lg:text-[18px] font-[500]">
                        Mr & Mrs Smith
                        </div>
                    </div>

                    <div className="flex justify-between gap-[15px]">
                        <div className="text-[#666666] text-[12px] md:text-[14px] font-[500]">
                        Date
                        </div>

                        <div className="text-[#181A20] text-[12px] md:text-[14px] font-[500]">
                        April 20, 2024 
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="flex w-full md-w-[67%] flex-col gap-[20px]">
                <img src={projectdetailimg01} alt="Logo" className="object-cover min-h-[250px] md:min-h-[300px] lg:min-h-[450px] w-full" />

                <img src={projectdetailimg02} alt="Logo" className="object-cover min-h-[250px] md:min-h-[300px] lg:min-h-[450px] w-full" />

                <img src={projectdetailimg03} alt="Logo" className="object-cover min-h-[250px] md:min-h-[300px] lg:min-h-[450px] w-full" />

                <img src={projectdetailimg04} alt="Logo" className="object-cover min-h-[250px] md:min-h-[300px] lg:min-h-[450px] w-full" />

                <img src={projectdetailimg05} alt="Logo" className="object-cover min-h-[250px] md:min-h-[300px] lg:min-h-[450px] w-full" />

                <img src={projectdetailimg06} alt="Logo" className="object-cover min-h-[250px] md:min-h-[300px] lg:min-h-[450px] w-full" />
            </div>
        </div>

        <div className="px-[15px] py-[30px] md:py-[60px] lg:py-[100px] bg-[#F8F6F2]">
            <h2 className="fontspring text-[25px] md:text-[40px] lg:text-[50px] text-[#000112] text-center mb-[15px]">What This Client said about Us</h2>
            <div className="bg-white px-[20px] py-[20px] w-[90%] max-w-[960px] m-auto drop-shadow-md">
                <p className="text-[14px] md:text-[18px] lg:text-[22px] text-[#000112] mb-[15px]">
                “We had a vision for our home but didn’t know how to bring it to life—until we found Horizon Interiors. From the very first meeting, the team understood our taste and lifestyle, and turned it into a space that feels warm, elegant, and completely us. The quality of materials, attention to detail, and professionalism throughout the project was simply outstanding. We now have a home we’re proud to show off, and more importantly, a space that brings us peace and joy every day.”
                </p>
                <h2 className="text-[#000112a1] text-[14px] font-[600] uppercase">— Shweta & Rahul, Bangalore</h2>
            </div>
        </div>

      <Footer />
      </div>

    </>);
}

export default Details;