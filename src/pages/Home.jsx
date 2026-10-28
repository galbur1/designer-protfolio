import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutMeCard from "../components/AboutMeCard";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const skills = ["Branding", "Web", "Motion", "3D", "AI"];

const Home = () => {
  const [showAbout, setShowAbout] = useState(false);
  const { state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo) {
      document.getElementById(state.scrollTo)?.scrollIntoView();
    }
  }, [state]);

  return (
    <div className="min-h-screen">
      <Navbar onAboutClick={() => setShowAbout(true)} />

      <main className="mx-auto max-w-[1500px] px-5 md:px-8">
        <section className="pt-36 pb-20 md:pt-48 md:pb-28">
          <p className="mb-6 text-base text-mute">
            Gal Burshtein — Creative designer
          </p>
          <h1 className="font-serif text-[clamp(3rem,9vw,8.5rem)] leading-[0.95] tracking-tight">
            Design that moves
            <br />
            <em>in waves.</em>
          </h1>
          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-lg leading-relaxed text-mute">
              <span className="text-ink">Gal</span> (גל) means wave. I make
              gentle, considered work across identity, interfaces, motion and
              three dimensions.
            </p>
            <ul className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line px-4 py-1.5 text-sm text-mute"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="work" className="scroll-mt-20 pb-24">
          <div className="mb-8 flex items-baseline justify-between border-t border-line pt-4">
            <h2 className="text-base text-mute">Selected work</h2>
            <span className="text-base text-mute">
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </section>

        <footer className="flex justify-between border-t border-line py-8 text-sm text-mute">
          <span>© {new Date().getFullYear()} Gal Burshtein</span>
          <a href="mailto:galbur1@gmail.com" className="hover:text-ink">
            galbur1@gmail.com
          </a>
        </footer>
      </main>

      <AboutMeCard visible={showAbout} onClose={() => setShowAbout(false)} />
    </div>
  );
};

export default Home;
