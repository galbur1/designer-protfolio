import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AboutMeCard from "../components/AboutMeCard";
import ProjectCard from "../components/ProjectCard";

// Neve's illustrations, shown one at a time on its card.
const NEVE_SLIDES = [
  "images/neve/illustrations/1.png",
  "images/neve/illustrations/2.png",
  "images/neve/illustrations/3.png",
];

// Only one of the two layouts (desktop grid / phone list) is mounted at a time,
// so the 3D viewer and the canvas animation are not duplicated off-screen.
const DESKTOP_QUERY = "(min-width: 768px)";
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia(DESKTOP_QUERY).matches,
  );
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return isDesktop;
};

const Home = () => {
  const [showAbout, setShowAbout] = useState(false);
  const isDesktop = useIsDesktop();

  return (
    <div className="px-3 h-screen ">
      <Navbar onAboutClick={() => setShowAbout(true)} />

      {/* Responsive layout */}
      <div className="pt-16  h-full p-2">
        {/* Desktop layout: a scrollable grid */}
        {isDesktop && (
          <div className="hidden md:block h-full overflow-y-auto overscroll-none scrollbar-hidden border-t border-l border-black">
            <div className="grid grid-cols-12 auto-rows-[14vh] gap-0">
              {/* Final project */}
              <div className="col-start-1 col-end-6 row-span-3">
                <ProjectCard
                  title="01 Beit Novak"
                  model="models/sculpture.glb"
                  id="project-10"
                />
              </div>

              {/* New top row */}
              <div className="col-start-6 col-end-9 row-span-3">
                <ProjectCard
                  title="02 Neve"
                  slides={NEVE_SLIDES}
                  id="project-1"
                />
              </div>
              <div className="col-start-9 col-end-13 row-span-3">
                <ProjectCard
                  title="03 Wellnest App"
                  image="images/wellnest.gif"
                  id="project-2"
                />
              </div>
              <div className="col-start-1 col-end-5 row-span-3">
                <ProjectCard
                  title="04 Maagalim Event"
                  image="images/maagalim_new.png"
                  id="project-3"
                />
              </div>

              {/* Original first row */}
              <div className="col-start-5 col-end-10 row-span-3">
                <ProjectCard
                  title="05 Lifta"
                  image="images/lifta1.gif"
                  id="project-4"
                />
              </div>
              <div className="col-start-10 col-end-13 row-span-3">
                <ProjectCard
                  title="06 Princess Diana Tribute"
                  image="images/new_diana_autograph.png"
                  id="project-5"
                />
              </div>
              <div className="col-start-1 col-end-4 row-span-3">
                <ProjectCard
                  title="07 Sofa Trip"
                  image="images/sofa_trip_gig.gif"
                  id="project-6"
                />
              </div>

              {/* Original second row */}
              <div className="col-start-4 col-end-8 row-span-3">
                <ProjectCard
                  title="08 Dot App"
                  image="images/dot_app.png"
                  id="project-7"
                />
              </div>
              <div className="col-start-8 col-end-10 row-span-3">
                <ProjectCard
                  title="09 Rujum"
                  image="images/rojum.gif"
                  id="project-8"
                />
              </div>
              <div className="col-start-10 col-end-13 row-span-3">
                <ProjectCard
                  title="10 For Now"
                  image="images/for_now.png"
                  id="project-9"
                />
              </div>
            </div>
          </div>
        )}

        {/* Mobile layout */}
        {!isDesktop && (
          <div className="flex flex-col gap-6 md:hidden px-1 pb-4">
            <ProjectCard
              title="01 Beit Novak"
              model="models/sculpture.glb"
              id="project-10"
            />

            {/* New row for mobile */}
            <ProjectCard title="02 Neve" slides={NEVE_SLIDES} id="project-1" />
            <ProjectCard
              title="03 Wellnest"
              image="images/wellnest.gif"
              id="project-2"
            />
            <ProjectCard
              title="04 Maagalim"
              image="images/maagalim_new.png"
              id="project-3"
            />

            {/* Existing mobile list */}
            <ProjectCard
              title="05 Lifta"
              image="images/lifta1.gif"
              id="project-4"
            />
            <ProjectCard
              title="06 Princess Diana Tribute"
              image="images/new_diana_autograph.png"
              id="project-5"
            />
            <ProjectCard
              title="07 Sofa Trip"
              image="images/sofa_trip_gig.gif"
              id="project-6"
            />
            <ProjectCard
              title="08 The Dot App"
              image="images/dot_app.png"
              id="project-7"
            />
            <ProjectCard
              title="09 Rujum"
              image="images/rojum.gif"
              id="project-8"
            />
            <ProjectCard
              title="10 For Now"
              image="images/for_now.png"
              id="project-9"
            />
          </div>
        )}
      </div>

      <AboutMeCard visible={showAbout} onClose={() => setShowAbout(false)} />
    </div>
  );
};

export default Home;
