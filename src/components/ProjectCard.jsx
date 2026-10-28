import React from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const ProjectCard = ({ project, index }) => {
  const { id, number, name, year, tags, cover, featured } = project;

  return (
    <Reveal
      delay={(index % 3) * 80}
      className={featured ? "lg:col-span-2" : ""}
    >
      <Link
        to={`/project/${id}`}
        className="wave group block"
        style={{ "--phase": index * 0.8 }}
      >
        <div
          className={`overflow-hidden bg-card ${
            featured ? "aspect-[4/3] lg:aspect-[16/9]" : "aspect-[4/3]"
          }`}
        >
          <img
            src={cover}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />
        </div>
        <div className="mt-3 flex items-baseline justify-between gap-4">
          <h2 className="text-lg tracking-tight">
            <span className="mr-2 text-mute">{number}</span>
            {name}
          </h2>
          <p className="truncate text-sm text-mute">
            {[tags[0], year].filter(Boolean).join(" · ")}
          </p>
        </div>
      </Link>
    </Reveal>
  );
};

export default ProjectCard;
