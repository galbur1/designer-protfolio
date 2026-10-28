import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutMeCard from "../components/AboutMeCard";
import Reveal from "../components/Reveal";
import { projects, getProject } from "../data/projects";

const ProjectPage = () => {
  const { id } = useParams();
  const project = getProject(id);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="p-10">
        Project not found. <Link to="/" className="underline">Back home</Link>
      </div>
    );
  }

  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <div className="min-h-screen">
      <Navbar onAboutClick={() => setShowAbout(true)} />
      <AboutMeCard visible={showAbout} onClose={() => setShowAbout(false)} />

      <main className="mx-auto max-w-[1500px] px-5 pt-32 md:px-8 md:pt-40">
        <header className="grid gap-10 pb-16 md:grid-cols-12 md:pb-24">
          <div className="md:col-span-7">
            <p className="mb-4 text-base text-mute">
              {project.number} · {project.year}
            </p>
            <h1 className="font-serif text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] tracking-tight">
              {project.name}
            </h1>
          </div>
          <div className="md:col-span-5 md:pt-9">
            <p className="text-lg leading-relaxed">{project.description}</p>
            {project.collaboration && (
              <p className="mt-4 text-mute">
                With <span className="text-ink">{project.collaboration}</span>
              </p>
            )}
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line px-4 py-1.5 text-sm text-mute"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </header>

        <section className="mx-auto flex max-w-5xl flex-col gap-14 md:gap-20">
          {project.media.map((item, idx) => {
            const desktopOnly = item.src === "/images/forNow/try1.png";
            return (
              <Reveal
                key={idx}
                className={desktopOnly ? "hidden md:block" : ""}
              >
                <figure>
                  {item.type === "video" ? (
                    <video
                      controls
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.des || `${project.name} ${idx + 1}`}
                      loading="lazy"
                      className="w-full"
                    />
                  )}
                  {item.des && (
                    <figcaption className="mt-3 text-sm text-mute">
                      {item.des.replace(/^\[|\]$/g, "")}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            );
          })}
        </section>

        <Link
          to={`/project/${next.id}`}
          className="group mt-28 block border-t border-line py-14 md:py-20"
        >
          <p className="mb-3 text-base text-mute">Next project</p>
          <p className="font-serif text-[clamp(2.5rem,7vw,6rem)] leading-none tracking-tight transition-transform duration-500 group-hover:translate-x-3">
            {next.name} <span aria-hidden>→</span>
          </p>
        </Link>
      </main>
    </div>
  );
};

export default ProjectPage;
