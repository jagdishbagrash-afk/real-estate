import React from "react";
import chooseicon from '../img/chooseicon.png';
import { FaUserCog } from "react-icons/fa"; // You can use any icons you like



export default function WhyChooseUs({home}) {
  console.log("home",home)
  return (
    <section className="bg-[#94A393] py-[40px] md:py-[50px] lg:py-[90px] px-4">
      <div className="max-w-[1320px] mx-auto text-center">
        <h2 className="fontspring text-[25px] md:text-[30px] lg:text-[50px] font-light text-white mb-[25px]">
          Why Choose Us?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {home && home?.home.map((item, index) => (
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
  );
}
