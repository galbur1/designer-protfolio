import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Model3D from "./Model3D";

const ProjectCard = ({ title, image, id, logo, model, bg }) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div
      onClick={() => navigate(`/project/${id}`)}
      className="group relative w-full cursor-pointer overflow-hidden border border-black md:border-0 md:border-r md:border-b h-[300px] md:h-full
        transition-all duration-300 ease-in-out"
      style={{
        ...(logo || model
          ? { backgroundColor: bg }
          : { backgroundImage: `url(${image})` }),
        backgroundSize: isMobile ? "contain" : "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {model && (
        <div className="pointer-events-none absolute inset-0 p-4">
          <Model3D src={model} />
        </div>
      )}
      {logo && (
        <img
          src={logo}
          alt=""
          className="pointer-events-none absolute inset-0 m-auto h-[55%] w-auto"
        />
      )}
      <div
        className={`
          relative z-10 p-1 
          ${isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"} 
          transition-opacity duration-300
        `}
      >
        <h2 className="text-base pl-1">{title}</h2>
      </div>
    </div>
  );
};

export default ProjectCard;
