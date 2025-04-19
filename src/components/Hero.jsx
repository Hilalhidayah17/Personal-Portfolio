import React from "react";
import Profile from "../assets/2011101010012.png";
import { CloudDownload } from "lucide-react";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText";
import Threads from "../blocks/Backgrounds/Threads/Threads";
export default function Hero() {
  return (
    <main className="pt-36 bg-black ">
      <div className="relative md:h-[400px] h-[250px]">
        <Threads amplitude={1} distance={0.3} enableMouseInteraction={true} />
        <div className="absolute top-0 left-0 lg:px-48 px-8">
          <span className="md:text-lg text-sm tracking-wider font-inter">
            Hi, M.Hilal Hidayah
          </span>
          <section className="flex justify-center items-center md:space-x-14 space-x-7">
            <ShinyText
              text="Web  Developer"
              disabled={false}
              speed={5}
              className="custom-class md:text-[60px]/[60px] text-[30px]/[30px]"
            />
            <p className="hidden md:inline text-left md:text-3xl text-sm md:ml-8 font-inter">
              Transforming ideas into interactive and seamless digital
              experiences with cutting-edge frontend development.
            </p>
            <p className=" md:hidden text-left md:text-3xl text-sm md:ml-8 font-inter">
              Crafting seamless digital experiences with modern frontend tech.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
