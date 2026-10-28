import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ onAboutClick }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goToWork = () => {
    if (pathname === "/") {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "work" } });
    }
  };

  const link =
    "cursor-pointer text-mute hover:text-ink transition-colors duration-300";

  return (
    <nav className="fixed top-0 left-0 z-20 w-full bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="text-lg tracking-tight">
          Gal Burshtein
        </Link>
        <div className="flex items-center gap-5 text-base sm:gap-8">
          <button className={link} onClick={goToWork}>
            Work
          </button>
          <button className={link} onClick={onAboutClick}>
            About
          </button>
          <a
            className={link}
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
