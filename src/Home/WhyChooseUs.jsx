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
    <section className="bg-[#9aa396] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-12">
          Why Choose Us?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-left hover:shadow-lg transition"
            >
              {/* Replace with your own SVG or icon */}
              <div className="text-[#9aa396] mb-4 text-3xl">
              <img src={chooseicon} alt="Logo" className="" />
              
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
