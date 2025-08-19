import logo from '../img/logo.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
            <Link to="#" className="hover:text-gray-400">
              <FaFacebookF />
            </Link>
            <Link to="#" className="hover:text-gray-400">
              <FaInstagram />
            </Link>
            <Link to="#" className="hover:text-gray-400">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Middle Nav Links */}
        <div className="border-t border-gray-700 mt-6 pt-6 ">
          <div className="footNav flex flex-wrap justify-center gap-[10px] md:gap-[15px] lg:gap-[40px] xl:gap-[80px] text-sm md:text-base font-semibold tracking-wide text-[#ffffff9c] tracking-widest ">
            <Link to="/">Home</Link>
            <Link to="/about">ABOUT US</Link>
            <Link to="/services">SERVICES</Link>
            <Link to="/project">OUR PROJECTS</Link>
            <Link to="/blog">NEWS & ARTICLES</Link>
            <Link to="/career">CAREER</Link>
            <Link to="/contact">CONTACT US</Link>
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
