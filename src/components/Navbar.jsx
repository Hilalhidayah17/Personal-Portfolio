import React from "react";
import Logo from "../assets/logo-header.png";

export default function Navbar() {
  return (
    <nav className="  text-white px-8 md:px-16 lg:px-24 fixed w-full z-10  ">
      <div className="container py-2 flex justify-center md:justify-between items-center bg-white/10 backdrop-blur-sm rounded-full px-3">
        <div className="text-2xl font-bold hidden md:inline">
          <img src={Logo} alt="Logo" className="bg-black w-12 rounded-full" />
        </div>
        <div className="space-x-6 className='">
          <a
            href="#home"
            className="hover:text-green-400 hover:underline-offset-1 hover:underline  duration-200"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-green-400 hover:underline-offset-1 hover:underline  duration-200 "
          >
            About Me
          </a>
          <a
            href="#projects"
            className="hover:text-green-400 hover:underline-offset-1 hover:underline  duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-green-400 hover:underline-offset-1 hover:underline  duration-200"
          >
            Contact Me
          </a>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-blue-500 hidden md:inline   transition duration-300 hover:scale-105 px-4 py-2 rounded-full">
          <button>
            <a href="#contact">Connect Me</a>
          </button>
        </div>
      </div>
    </nav>
  );
}
