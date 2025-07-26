import "../App.css"
import Header from '../component/Header';
import WeOffer from './WeOffer';
import WhyChooseUs from '../Home/WhyChooseUs';
import Readybring from '../Home/ReadyBring';
import exploreservicebg from '../img/exploreservicebg.jpg';

import spacebanner from '../img/spacebanner.jpg';
import Footer from "../component/Footer";

function Estate() {
    return (<>
    <div className="min-h-screen ">
        <Header />
        <div className="relative mt-[-150px] ">
            <img src={exploreservicebg} alt="Logo" className="object-cover min-h-[350px] md:min-h-[400px] lg:min-h-[450px] w-full" />
            <div className="max-w-[1320px] m-auto absolute left-[0] right-[0]  bottom-[30px] md:bottom-[50px] lg:bottom-[90px] z-[1] px-[15px]">
                <h2 className="fontspring text-[20px] md:text-[40px] lg:text-[60px] xl:text-[80px] text-white  ">Real Estate</h2>
            </div>
        </div>


        <section className="bg-white py-[30px] md:py-[70px] lg:py-[80px] xl:py-[100px]">
            <div className=" mb-[15px] text-center">
                <p className="text-[14px] font-[600] tracking-widest text-[#000112a6] uppercase mb-4">Shaping Land into Landmarks</p>
                <h2 className="fontspring text-[18px] md:text-[20px] lg:text-[28px] xl:text-[32px] leading-[25px] lg:leading-[30px] xl:leading-[45px] text-[#000112] mb-10 max-w-[1140px] mx-auto">
                At Cadmax Projects Pvt. Ltd., we understand that every successful real estate development starts with a powerful vision, robust planning, and precise execution. Our Real Estate Services are designed to transform raw land into thriving communities, modern commercial hubs, and sustainable developments that stand the test of time.
                </h2>
            </div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img src={spacebanner} alt="Interior" className=" w-full h-auto object-cover" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="fontspring text-[25px] text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] leading-[30px] md:leading-[35px] lg:leading-[45px] xl:leading-[55px] text-[#000112]">Our Expertise</h2>
            <p className="mt-6 text-[16px] md:text-[18px] xl:text-[20px] font-[400] text-[#00011299]">
            From concept to completion, we deliver end-to-end real estate solutions that blend innovation, regulatory compliance, and engineering excellence. Whether it’s residential townships, industrial parks, or mixed-use developments, our team of specialists ensures that each project is planned and delivered with unmatched precision.
            </p>
        
          </div>
        </div>
      </section>
      <WeOffer />

      <WhyChooseUs />

      <Readybring />

        <Footer />
    </div>
    </>  );
}

export default Estate;