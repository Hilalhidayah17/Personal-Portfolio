import React from "react";

const techIcons = [
  {
    name: "JavaScript",
    icon: "/icons/js.png",
    className: "drop-shadow-[0_0_10px_rgba(247,223,30,0.5)]",
    hoverShadow: "hover:shadow-[0_0_10px_rgba(247,223,30,0.5)]",
  },
  {
    name: "TypeScript",
    icon: "/icons/ts.png",
    className: "drop-shadow-[0_0_10px_rgba(59,130,198,0.5)]",
    hoverShadow: "hover:shadow-[0_0_10px_rgba(59,130,198,0.5)]",
  },
  {
    name: "PostgreSQL",
    icon: "/icons/pg.png",
    className: "drop-shadow-[0_0_20px_rgba(43,86,120,0.5)]",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(43,86,120,0.5)]",
  },
  {
    name: "React",
    icon: "/icons/react.png",
    className: "drop-shadow-[0_0_10px_rgba(0,216,255,0.5)]",
    hoverShadow: "hover:shadow-[0_0_10px_rgba(0,216,255,0.5)]",
  },
  {
    name: "Next.js",
    icon: "/icons/next.png",
    className: "drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]",
    hoverShadow: "hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]",
  },
  {
    name: "Redux",
    icon: "/icons/redux.png",
    className: "drop-shadow-[0_0_10px_rgba(118,74,188,0.5)]",
    hoverShadow: "hover:shadow-[0_0_10px_rgba(118,74,188,0.5)]",
  },
  {
    name: "Firebase",
    icon: "/icons/firebase.png",
    className: "drop-shadow-[0_0_10px_rgba(247,223,30,0.5)]",
    hoverShadow: "hover:shadow-[0_0_10px_rgba(247,223,30,0.5)]",
  },
  {
    name: "Express",
    icon: "/icons/express.png",
    className: "drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]",
    hoverShadow: "hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]",
  },
  {
    name: "MongoDB",
    icon: "/icons/mongo.png",
    className: "drop-shadow-[0_0_10px_rgba(19,170,82,0.5)]",
    hoverShadow: "hover:shadow-[0_0_10px_rgba(19,170,82,0.5)]",
  },
];

const TechGrid = () => {
  const totalBoxes = 13;
  const startIndex = Math.floor((totalBoxes - techIcons.length) / 2);

  return (
    <div className="bg-black h-fit hidden md:block">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-white mb-10">
        Techstack <span className="text-purple-400">I Use</span>{" "}
        <span className="text-sky-400">on a Daily Basis</span>
      </h2>

      <section className=" relative  min-w-full items-center justify-center gap-6 md:flex overflow-hidden">
        {Array.from({ length: totalBoxes }).map((_, idx) => {
          const iconIndex = idx - startIndex;
          const iconData = techIcons[iconIndex];

          return (
            <div
              key={idx}
              className={` mask-transparent group h-[100px] w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 m-2 transition-all duration-300 ease-in-out hover:scale-105 flex items-center justify-center ${
                iconData?.hoverShadow || ""
              }`}
            >
              {iconData && (
                <>
                  <img
                    src={iconData.icon}
                    alt={iconData.name}
                    title={iconData.name}
                    className={`w-10 h-10 object-contain ${iconData.iconShadow}`}
                  />
                  <span className="absolute bottom-[-1.8rem] text-xs text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {iconData.name}
                  </span>
                </>
              )}
            </div>
          );
        })}
        <div className="absolute left-0 top-0 h-full w-36 bg-gradient-to-r from-black   z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-36 bg-gradient-to-l from-black  z-10 pointer-events-none" />
      </section>
    </div>
  );
};

export default TechGrid;
