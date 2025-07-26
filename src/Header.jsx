import React, { useState } from "react";
import logo from './img/logo.png';
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="relative z-[99] py-[30px]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">
            <Link>
                <img src={logo} alt="Logo" className="h-10 w-auto" />
            </Link>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li><a href="#" className="">Home</a></li>
          
          <li className="relative group">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-white text-[20px] flex items-center gap-[10px]" >
            Why Us <span className="">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </span>
            </button>
            {dropdownOpen && (
              <ul className="dropdown absolute left-0 top-full mt-2 w-40 bg-black shadow-lg rounded-md z-10">
                <li><a href="#" className="block">Our Projects</a></li>
                <li><a href="#" className="block">Why Us?</a></li>
                <li><a href="#" className="block">Marketing</a></li>
                <li><a href="#" className="block">Blogs</a></li>
                <li><a href="#" className="block">Career</a></li>
                <li><a href="#" className="block">Contact Us</a></li>
              </ul>
            )}
          </li>



          <li><a href="#" className="">Services</a></li>
          <li><a href="#" className="">Our Companies</a></li>
          <li><a href="#" className="">Blogs</a></li>
          <li><a href="#" className="">Careers</a></li>
          <li><a href="#" className="">Contact</a></li>
        </ul>

        <div className="music">
          <button className="p-[0] bg-none border-none"><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="51" height="51" stroke="white"/>
<path d="M26 18C23.8783 18 21.8434 18.8429 20.3431 20.3431C18.8429 21.8434 18 23.8783 18 26H21C21.5304 26 22.0391 26.2107 22.4142 26.5858C22.7893 26.9609 23 27.4696 23 28V33C23 33.5304 22.7893 34.0391 22.4142 34.4142C22.0391 34.7893 21.5304 35 21 35H18C17.4696 35 16.9609 34.7893 16.5858 34.4142C16.2107 34.0391 16 33.5304 16 33V26C16 20.477 20.477 16 26 16C31.523 16 36 20.477 36 26V33C36 33.5304 35.7893 34.0391 35.4142 34.4142C35.0391 34.7893 34.5304 35 34 35H31C30.4696 35 29.9609 34.7893 29.5858 34.4142C29.2107 34.0391 29 33.5304 29 33V28C29 27.4696 29.2107 26.9609 29.5858 26.5858C29.9609 26.2107 30.4696 26 31 26H34C34 23.8783 33.1571 21.8434 31.6569 20.3431C30.1566 18.8429 28.1217 18 26 18ZM18 28V33H21V28H18ZM31 28V33H34V28H31Z" fill="white"/>
</svg>
</button>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2">
            <li><a href="#" className="block text-gray-700">Home</a></li>
            <li><a href="#" className="block text-gray-700">About</a></li>
            <li>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full text-left text-gray-700"
              >
                Services ▼
              </button>
              {dropdownOpen && (
                <ul className="pl-4 mt-1 space-y-1">
                  <li><a href="#" className="block text-gray-600">Web Design</a></li>
                  <li><a href="#" className="block text-gray-600">SEO</a></li>
                  <li><a href="#" className="block text-gray-600">Marketing</a></li>
                </ul>
              )}
            </li>
            <li><a href="#" className="block text-gray-700">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
