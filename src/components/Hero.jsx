import React from "react";
import Profile from "../assets/2011101010012.png";
import { CloudDownload } from "lucide-react";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText";
import Threads from "../blocks/Backgrounds/Threads/Threads";
export default function Hero() {
  return (
    <main className="pt-36 bg-black ">
      <div style={{ width: "100%", height: "400px", position: "relative" }}>
        <Threads amplitude={1} distance={0.3} enableMouseInteraction={true} />
        <div className="absolute top-0 left-0 lg:px-48">
          <span className="text-lg tracking-wider font-inter">
            Hi, M.Hilal Hidayah
          </span>
          <section className="flex justify-center items-center space-x-14">
            <ShinyText
              text="Web  Developer"
              disabled={false}
              speed={5}
              className="custom-class text-[60px]/[60px]"
            />
            <p className="text-left text-3xl ml-8 font-inter">
              Transforming ideas into interactive and seamless digital
              experiences with cutting-edge frontend development.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
