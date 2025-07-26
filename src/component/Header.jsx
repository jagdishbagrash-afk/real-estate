import React, { useState } from "react";
import logo from '../img/logo.png';
import { Link } from "react-router-dom";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="relative z-[99] py-[30px]">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-xl font-bold">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-10 w-auto" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 items-center">
                    <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
                    <li><Link to="/about" className="hover:text-blue-500">About</Link></li>

                    <li className="relative group">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="hover:text-blue-500 flex items-center gap-1"
                        >
                            Services
                            <span className="transform transition-transform duration-200 group-hover:rotate-180">▼</span>
                        </button>
                        {dropdownOpen && (
                            <ul className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                                <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Web Design</Link></li>
                                <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">SEO</Link></li>
                                <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Marketing</Link></li>
                            </ul>
                        )}
                    </li>

                    <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
                </ul>

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
                        <li><Link to="/" className="block text-gray-700">Home</Link></li>
                        <li><Link to="/about" className="block text-gray-700">About</Link></li>
                        <li>
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="w-full text-left text-gray-700"
                            >
                                Services ▼
                            </button>
                            {dropdownOpen && (
                                <ul className="pl-4 mt-1 space-y-1">
                                    <li><Link to="/services" className="block text-gray-600">Web Design</Link></li>
                                    <li><Link to="#" className="block text-gray-600">SEO</Link></li>
                                    <li><Link to="#" className="block text-gray-600">Marketing</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link to="/contact" className="block text-gray-700">Contact</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
