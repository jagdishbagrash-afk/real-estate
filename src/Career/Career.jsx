import "../App.css"
import Header from '../component/Header';
import Footer from "../component/Footer";
import WhyChooseUs from '../Home/WhyChooseUs';
import builbanner from '../img/builbanner.jpg';
import exploreservicebg from '../img/exploreservicebg.jpg';

function Career() {
    return (<>

        <div className="min-h-screen ">
            <Header />
            <div className="relative mt-[-150px] ">
                <img src={exploreservicebg} alt="Logo" className="object-cover min-h-[350px] md:min-h-[400px] lg:min-h-[450px] w-full" />
                <div className="max-w-[1320px] m-auto absolute left-[0] right-[0]  bottom-[30px] md:bottom-[50px] lg:bottom-[90px] z-[1] px-[15px]">
                    <h2 className="fontspring text-[20px] md:text-[40px] lg:text-[60px] xl:text-[80px] text-white  ">Careers at Cadmax</h2>
                </div>
            </div>

            <section className="bg-white py-[30px] md:py-[70px] lg:py-[80px] xl:py-[100px]">
               
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-1/2">
                        <img src={builbanner} alt="Interior" className=" w-full h-auto object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="fontspring text-[25px] text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] leading-[30px] md:leading-[35px] lg:leading-[45px] xl:leading-[55px] text-[#000112]">Build the Future With Us</h2>
                        <p className="mt-6 text-[16px] md:text-[18px] xl:text-[20px] font-[400] text-[#00011299]">
                        At Cadmax Projects Pvt. Ltd., we believe that our people are our greatest strength. From urban planners and survey engineers to architects and project managers, our diverse team shares a passion for innovation, excellence, and sustainable development.
If you’re driven by purpose and eager to make a real impact on India’s urban landscape, we invite you to explore a career with us.
                        </p>
                    </div>
                </div>
            </section>

            <WhyChooseUs />

            <section className="py-[40px] md:py-[60px] lg:py-[70px] px-4 md:px-8 lg:px-20 bg-white">
                <div className="text-center mb-10">
                    <h2 className="fontspring text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] text-[#000112] mb-4">Opportunities Await</h2>
                    <p className="text-[14px] md:text-[18px] lg:text-[20px] text-[#000112a6]">
                    We’re always looking for talented professionals in areas such as:
                    </p>
                </div>

                <div className="border border-[#999999] p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-[10px] md:gap-[20px] max-w-7xl mx-auto">
                    <div>
                    <h3 className="fontspring text-[18px] md:text-[22px] lg:text-[26px] font-medium text-[#000112] mb-2">Survey Engineer</h3>
                    <p className="max-w-full md:max-w-[70%] lg:max-w-[80%] text-[14px] md:text-[18px] lg:text-[20px] text-[#000112a6]">
                        You will play a key role in executing precise surveys and supporting infrastructure and
                        urban development projects.
                    </p>
                    </div>
                    <button className="min-w-[150px] xl:min-w-[200px] px-[10px] py-3 border border-[94A393] text-[#94A393] text-[14px] font-[600] tracking-wide text-[#94A393] hover:bg-[#94A393] hover:text-[#fff] transition-all uppercase tracking-wider">
                    View Details
                    </button>
                </div>
                </section>
        </div>
    </>);
}

export default Career;