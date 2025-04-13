import React from "react";
import GradientText from "../blocks/TextAnimations/GradientText/GradientText";

const Experience = () => {
  return (
    <div className="bg-black py-32 relative">
      <section className="flex space-x-20 justify-center ">
        <div className="flex-1 flex justify-end items-start ">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={5}
            showBorder={false}
            className="text-3xl mr-0 font-inter"
          >
            Experience
          </GradientText>
        </div>
        <div className="flex-1 font-inter space-y-2">
          <h2 className="text-3xl text-[#40ffaa]">Freelance</h2>
          <p className="text-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-fit rounded-lg px-2">
            January 2025 - Now
          </p>
          <p className="pr-28 text-md text-gray-500">
            Designed and developed full-stack web applications and responsive
            landing pages for 3–4 local MSMEs (Micro, Small, and Medium
            Enterprises), tailored to support their business operations and
            digital presence.
          </p>
        </div>
      </section>
      <div className="absolute left-[49.5%] top-32">
        <div className="w-5 h-5 rounded-full bg-white"></div>
        <div className="min-h-[130px] w-1 bg-white ml-2"></div>
      </div>
    </div>
  );
};

export default Experience;
