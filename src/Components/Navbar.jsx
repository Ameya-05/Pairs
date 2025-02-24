import { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { BsFillInfoCircleFill } from "react-icons/bs";
import { GrServices } from "react-icons/gr";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import pairs from "../images/pairs.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-screen-xl text-white mx-auto py-4 px-6 bg-transparent flex items-center justify-between w-full">
      {/* Logo Section */}
      <div className="mt-3 flex items-center gap-2">
        <a href="/" className="text-3xl md:text-4xl italic font-bold">
          Pairs
        </a>
        <img src={pairs} alt="Pairs Logo" className="w-6 h-6 md:w-7 md:h-7" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 mt-3 gap-8 border-b-[1px] border-zinc-500 pb-2">
        <Link to="about" smooth={true} duration={500} className="hover:text-gray-400 font-semibold italic flex items-center gap-2 cursor-pointer">
          About us <BsFillInfoCircleFill />
        </Link>
        <Link to="services" smooth={true} duration={500} className="hover:text-gray-400 font-semibold italic flex items-center gap-2 cursor-pointer">
          Services <GrServices />
        </Link>
        <Link to="team" smooth={true} duration={500} className="hover:text-gray-400 font-semibold italic flex items-center gap-2 cursor-pointer">
          Team <RiTeamFill />
        </Link>
        <Link to="contact" smooth={true} duration={500} className="hover:text-gray-400 font-semibold italic flex items-center gap-2 cursor-pointer">
          Contact us <MdOutlineContactSupport />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-zinc-900 shadow-lg flex flex-col items-center py-4 space-y-4 z-50">
          <a href="#about" smooth={true} duration={500} className="hover:text-gray-600 font-semibold italic flex items-center gap-2 cursor-pointer" onClick={() => setIsOpen(false)}>
            About us <BsFillInfoCircleFill />
          </a>
          <a href="#services" smooth={true} duration={500} className="hover:text-gray-600 font-semibold italic flex items-center gap-2 cursor-pointer" onClick={() => setIsOpen(false)}>
            Services <GrServices />
          </a>
          <a href="#team" smooth={true} duration={500} className="hover:text-gray-600 font-semibold italic flex items-center gap-2 cursor-pointer" onClick={() => setIsOpen(false)}>
            Team <RiTeamFill />
          </a>
          <a href="#contact" smooth={true} duration={500} className="hover:text-gray-600 font-semibold italic flex items-center gap-2 cursor-pointer" onClick={() => setIsOpen(false)}>
            Contact us <MdOutlineContactSupport />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;