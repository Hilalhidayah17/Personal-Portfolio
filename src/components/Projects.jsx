import React from "react";
import Permalink from "../assets/Permalink.png";
import BookStore from "../assets/Book-Store.png";
import Particles from "../blocks/Backgrounds/Particles/Particles";
import { link } from "framer-motion/client";

const projects = [
  {
    id: 1,
    name: "Permalink",
    image: Permalink,
    technologies: "CRUD",
    github: "https://github.com/Hilalhidayah17",
  },
  {
    id: 2,
    name: "Book List",
    image: BookStore,
    technologies: "MERN Stack, CRUD",
    github: "https://github.com/Hilalhidayah17/BookStore-Mern-stack",
  },
  {
    id: 3,
    name: "OnFeet",
    technologies: "ReactJs, Redux, Firebase",
    link: "",
  },
  {
    id: 3,
    name: "News-App",
    technologies: "NextJS, Typescript",
    link: "",
  },
];

export default function Projects() {
  return (
    <div
      style={{ width: "100%", height: "600px", position: "relative" }}
      className="bg-black py-36"
    >
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <div className="container mx-auto px-8 md:px-16 lg:px-24 absolute top-0">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-2  gap-8 w-full h-full">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-transparent p-6 rounded-lg hover:shadow-lg
            transform transition-transform duration-300 hover:scale-105 border w-fit h-fit border-zinc-800"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4
              w-full  object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
