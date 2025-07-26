import React from "react";
import chooseicon from '../img/chooseicon.png';
import { FaUserCog } from "react-icons/fa"; // You can use any icons you like

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
  {
    title: "Timely Delivery",
    description:
      "We believe trust is built on clear communication. You’ll always know what’s happening through detailed timelines, regular progress updates, and transparent budgeting. With meticulous planning and reliable execution, we deliver your project on schedule—without compromising quality.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#94A393] py-[40px] md:py-[50px] lg:py-[90px] px-4">
      <div className="max-w-[1320px] mx-auto text-center">
        <h2 className="fontspring text-[25px] md:text-[30px] lg:text-[50px] font-light text-white mb-[25px]">
          Why Choose Us?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item, index) => (
            <div key={index} className="bg-white p-[20px] md:p-[30px] lg:p-[40px] shadow-md text-left hover:shadow-lg transition">
              {/* Replace with your own SVG or icon */}
              <div className="text-[#9aa396] mb-4 text-3xl">
              <img src={chooseicon} alt="Logo" className="" />
              
              </div>
              <h3 className="fontspring text-[18px] md:text-[22px] lg:text-[26px] text-[#000112] mb-2">
                {item.title}
              </h3>
              <p className="text-[#000112ba] text-[18px] md:text-[20px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
