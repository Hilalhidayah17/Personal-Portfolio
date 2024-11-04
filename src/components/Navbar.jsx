import React from "react";
import Logo from "../assets/logo-header.png";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">
          <img src={Logo} alt="Logo" className="bg-black w-12 rounded-full" />
        </div>
        <div className="space-x-6 className='">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact Me
          </a>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-blue-500 hidden md:inline   transition duration-300 hover:scale-105 px-4 py-2 rounded-full">
          <button>Connect Me</button>
        </div>
      </div>
    </nav>
  );
}
