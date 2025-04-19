import React from "react";
import Permalink from "../assets/Permalink.png";
import flowfin from "../assets/flowfin.png";
import onfeet from "../assets/onfeet.png";
import ynews from "../assets/ynews.png";
import BookStore from "../assets/Book-Store.png";
import Particles from "../blocks/Backgrounds/Particles/Particles";

const projects = [
  {
    id: 1,
    name: "Permalink",
    image: Permalink,
    technologies: "CRUD",
    link: "https://github.com/Hilalhidayah17",
  },
  {
    id: 2,
    name: "Book List",
    image: BookStore,
    technologies: "MERN Stack, CRUD",
    link: "https://github.com/Hilalhidayah17/BookStore-Mern-stack",
  },
  {
    id: 3,
    name: "OnFeet",
    image: onfeet,
    technologies: "ReactJs, Redux, Firebase",
    link: "http://cms-project-online-shop.web.app/",
  },
  {
    id: 4,
    name: "News-App",
    image: ynews,
    technologies: "NextJS, Typescript",
    link: "https://news-app-3t3p.vercel.app/",
  },
  {
    id: 5,
    name: "FlowFin",
    image: flowfin,
    technologies: "NextJS, Typescript",
    link: "https://github.com/BusinessBudgetingApp/FlowFin",
  },
];

export default function Projects() {
  return (
    <div className="relative w-full bg-black py-18 overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
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
      </div>

      {/* Konten */}
      <div className=" z-10 container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My <span className="text-sky-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900/40 p-6 rounded-xl hover:shadow-lg border border-zinc-800 transform transition duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>

              {project.link ? (
                <a
                  href={project.link}
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-1 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              ) : (
                <span className="text-sm text-gray-500">No link available</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
