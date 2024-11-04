import React from "react";
import AboutImg from "../assets/About-me.jpg";

export default function About() {
  return (
    <div className="bg-black text-white py-20" id="about">
      <hr />
      <div className="container mx-auto px-7 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImg}
            alt="about-me-img"
            className="w-72  rounded object-cover mb-8 md:mb-0 mt-12"
          />
          <div className="flex-1 mt-12">
            <h2 className="text-4xl font-bold text-left mb-12">About Me</h2>
            <p className="text-lg mb-8">
              I'm a Marine Science graduate with a passion for full-stack
              JavaScript development. I’m excited to transition into tech,
              applying my analytical background to build responsive,
              user-friendly web applications. Eager to learn and grow, I’m
              driven to create meaningful digital solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
