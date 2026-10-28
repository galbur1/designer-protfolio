import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutMeCard from "../components/AboutMeCard";
import Reveal from "../components/Reveal";
import { projects, getProject } from "../data/projects";

// Group media into rows: consecutive "half" items pair up, everything else stands alone.
const toRows = (media) =>
  media.reduce((rows, item) => {
    const last = rows[rows.length - 1];
    if (item.layout === "half" && last?.length === 1 && last[0].layout === "half") {
      last.push(item);
    } else {
      rows.push([item]);
    }
    return rows;
  }, []);

const MediaItem = ({ item, alt }) => (
  <figure className={item.src === "/images/forNow/try1.png" ? "hidden md:block" : ""}>
    {item.type === "video" ? (
      <video controls autoPlay loop muted playsInline className="w-full">
        <source src={item.src} type="video/mp4" />
      </video>
    ) : (
      <img
        src={item.src}
        alt={item.des || alt}
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
);

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

  const rows = toRows(project.media);
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
            {project.link && (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-paper transition-opacity hover:opacity-80"
              >
                {project.link.label} <span aria-hidden>↗</span>
              </a>
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
          {rows.map((row, r) => (
            <Reveal
              key={r}
              className={
                row[0].layout === "half"
                  ? "grid gap-6 md:grid-cols-2 md:gap-8"
                  : row[0].layout === "narrow"
                    ? "mx-auto w-full max-w-md"
                    : ""
              }
            >
              {row.map((item) => (
                <MediaItem key={item.src} item={item} alt={project.name} />
              ))}
            </Reveal>
          ))}
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
