import React from 'react';
import logo from './img/logo.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#000112] text-white px-[15px]  pt-[30px] md:pt-[40px] lg:pt-[70px]">
      <div className="max-w-[1320px] mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-3xl font-serif tracking-wider mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Middle Nav Links */}
        <div className="border-t border-gray-700 mt-6 pt-6 ">
          <div className="footNav flex flex-wrap justify-center gap-[20px] md:gap-[50px] lg:gap-[80px] text-sm md:text-base font-semibold tracking-wide text-[#ffffff9c] tracking-widest ">
            <a href="#">Home</a>
            <a href="#">ABOUT US</a>
            <a href="#">SERVICES</a>
            <a href="#">OUR PROJECTS</a>
            <a href="#">NEWS & ARTICLES</a>
            <a href="#">CAREER</a>
            <a href="#">CONTACT US</a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 pb-[15px] text-center text-sm text-[#ffffff9c]">
          Copyright &copy; Dipen Gada & Associates. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
