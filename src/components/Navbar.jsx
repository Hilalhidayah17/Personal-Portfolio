import React, { useEffect, useState } from "react";
import Logo from "../assets/logo-header.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [windowY, setWindowY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setWindowY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getNavbarClass = () => {
    if (windowY === 0) {
      return "w-full ";
    } else if (windowY > 0 && windowY <= 100) {
      return "w-[95%]  ";
    } else if (windowY > 100 && windowY <= 200) {
      return "w-[90%]   ";
    } else {
      return "w-[80%]  ";
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 px-6 md:px-12 lg:px-24 text-white mt-5 } flex justify-center  `}
    >
      <div
        className={`${getNavbarClass()} py-2 flex justify-center md:justify-between items-center rounded-full  transition-all duration-300 
        ${
          scrolled
            ? "bg-white/10 backdrop-blur-md shadow-md "
            : "bg-transparent "
        }
        px-4 `}
      >
        {/* Logo */}
        <div className="text-2xl font-bold hidden md:inline">
          <img
            src={Logo}
            alt="Logo"
            className="w-12 rounded-full border border-white/20 shadow-sm"
          />
        </div>

        {/* Navigation */}
        <div className="space-x-4 md:space-x-6 text-sm md:text-base">
          <a
            href="#home"
            className="hover:text-green-400 hover:underline underline-offset-4 decoration-green-400 transition-all duration-200"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-green-400 hover:underline underline-offset-4 decoration-green-400 transition-all duration-200"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="hover:text-green-400 hover:underline underline-offset-4 decoration-green-400 transition-all duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-green-400 hover:underline underline-offset-4 decoration-green-400 transition-all duration-200"
          >
            Contact Me
          </a>
        </div>

        {/* Button */}
        <a
          href="#contact"
          className="bg-gradient-to-r from-green-500 to-blue-500 hidden md:inline transition duration-200 hover:scale-105 px-4 py-2 rounded-full text-sm"
        >
          Connect Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
