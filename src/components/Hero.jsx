import React from "react";
import Profile from "../assets/2011101010012.png";
export default function Hero() {
  return (
    <div className="bg-black text-white text-center py-16 ">
      <img
        src={Profile}
        alt="profile"
        className="grayscale-[50%] mx-auto mb-8 w-48 h-48 rounded-full object-cover transition duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
          M. Hilal Hidayah
        </span>
        ,Full-Stack Developer{" "}
      </h1>
      <p className="mt-4 text-lg text-grey-300">
        I specialize in building modern and responsive web applications
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-gradient-to-r from-green-500 to-blue-500 hidden md:inline   transition duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact Me
        </button>
        <button className="bg-gradient-to-l from-green-500 to-blue-500 hidden md:inline   transition duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Resume
        </button>
      </div>
    </div>
  );
}
