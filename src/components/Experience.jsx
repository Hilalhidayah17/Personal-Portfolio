import React from "react";
import GradientText from "../blocks/TextAnimations/GradientText/GradientText";

const Experience = () => {
  return (
    <div className="bg-black md:py-32 relative">
      <section className="flex md:space-x-20 space-x-10 justify-center ">
        <div className="flex-1 flex justify-end items-start ">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={5}
            showBorder={false}
            className="md:text-3xl text-2xl mr-0 font-inter"
          >
            Experience
          </GradientText>
        </div>
        <div className="flex-1 font-inter space-y-2">
          <h2 className="md:text-3xl text-2xl text-[#40ffaa]">Freelance</h2>
          <p className="md:text-lg text-sm bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-fit rounded-lg px-2">
            January 2025 - Now
          </p>
          <p className=" hidden md:inline md:pr-28 md:text-base text-xs text-gray-500 ">
            Designed and developed full-stack web applications and responsive
            landing pages for 3–4 local MSMEs (Micro, Small, and Medium
            Enterprises), tailored to support their business operations and
            digital presence.
          </p>
          <p className=" md:hidden md:pr-28 md:text-base text-xs text-gray-500 ">
            Designed and developed full-stack web applications and responsive
            landing pages
          </p>
        </div>
      </section>
      <div className="absolute md:left-[49.5%] left-48 lg:top-32 top-2">
        <div className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white"></div>
        <div className="min-h-[130px] w-1 bg-white md:ml-2 ml-1"></div>
      </div>
    </div>
  );
};

export default Experience;
