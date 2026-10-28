// Single source of truth for all projects. To add one: add an entry to `details`
// and a cover in `covers`, then put its media under public/images/<name>/.
const details = {
  "project-1": {
    title: "01 Neve",
    description:
      "Neve is an innovative gel cube designed for emergency conditions such as shelters. It enables the growth of vegetables, fruits, and herbs without soil, watering, or sunlight - providing everything the plant needs through a unique self-sustaining technology.",
    tags: [
      "Branding",
      "Visual Identity",
      "Web",
      "Typography",
      "Print",
      "2025",
      "English",
    ],
    media: [
      { type: "image", src: "/images/neve/1.png", des: "[The product]" },
      { type: "image", src: "/images/neve/2.png", des: "[The product]" },
      {
        type: "image",
        src: "/images/neve/3.png",
        des: "[Product information leaflet]",
      },
      {
        type: "image",
        src: "/images/neve/4.gif",
        des: "[Product information leaflet]",
      },
      {
        type: "video",
        src: "/images/neve/5.mp4",
        des: "[Landing page]",
      },
      { type: "image", src: "/images/neve/6.png", des: "[Advertising poster]" },
      { type: "image", src: "/images/neve/7.png", des: "[Advertising poster]" },
      { type: "image", src: "/images/neve/8.png", des: "[Advertising poster]" },
      { type: "image", src: "/images/neve/9.png", des: "[Advertising poster]" },
      { type: "image", src: "/images/neve/10.png", des: "[Merchandise]" },
      { type: "image", src: "/images/neve/11.png", des: "[Merchandise]" },
      {
        type: "video",
        src: "/images/neve/12.mp4",
        des: "[Merchandise 3D printing process]",
      },
    ],
  },

  "project-2": {
    title: "02 Wellnest",
    description:
      "An app for family caregivers, developed following a research and conversations with caregivers. Our findings showed that the caregiving burden often falls on a single family member. The app offers a collaborative solution: a shared task pool, centralized medical documents, and a focus on positive feedback and mutual recognition.",
    tags: ["App", "UX/UI", "Web", "2025", "Hebrew"],
    collaboration: "Shir Klein",
    media: [
      { type: "image", src: "/images/wellnest/img1.png" },
      {
        type: "video",
        src: "/images/wellnest/vid2.mp4",
        des: "[App navigation]",
      },
      {
        type: "image",
        src: "/images/wellnest/img3.png",
        des: "[App interactions]",
      },
      {
        type: "video",
        src: "/images/wellnest/vid4.mp4",
        des: "[Landing page navigation]",
      },
    ],
  },

  "project-3": {
    title: "03 Maagalim Event",
    description:
      "An event by ״Hazit HaBayit״, an organization that has been furnishing the homes of evacuees since October 7th. The event invites the public to take part in a cycle of giving, receiving, and reuse. In designing the website, I focused on two main values: respect for objects, treating them as if they were people with their own history and story, and creating an inviting and equal experience, with a design language that avoids any sense of awkwardness ensuring that everyone feels comfortable participating.",
    tags: ["Web", "UX/UI", "Visual Identity", "2025", "Hebrew"],
    media: [
      // {
      //   type: "image",
      //   src: "/images/maagalim/1.gif",
      //   des: "[Home page navigation]",
      // },
      {
        type: "video",
        src: "/images/maagalim/Comp1.mp4",
        des: "[Home page navigation]",
      },
      { type: "image", src: "/images/maagalim/2.png", des: "[Catalog page]" },
      // { type: "image", src: "/images/maagalim/3.png", des: "[Catalog page]" },
      // {
      //   type: "image",
      //   src: "/images/maagalim/4.gif",
      //   des: "[Hangar page navigation]",
      // },
      {
        type: "video",
        src: "/images/maagalim/Comp4.mp4",
        des: "[Hangar page navigation]",
      },
      {
        type: "image",
        src: "/images/maagalim/5.png",
        des: "[Event registration page]",
      },
      // { type: "image", src: "/images/maagalim/6.png", des: "[About page]" },
    ],
  },

  "project-4": {
    title: "04 Lifta",
    description:
      "A visual identity for the abandoned village of Lifta, created for a children's summer celebration held on-site. Drawing on the village's distinctive stone architecture, I developed a shape-based graphic language with paper cuts, forming lively creatures that bring the place to life. The project includes a logo, poster and a Animation for social media.",
    tags: ["Visual Identity", "Branding", "Motion", "Print", "2024", "Hebrew"],
    media: [
      { type: "image", src: "/images/lifta/logo.png", des: "[Logo]" },
      {
        type: "image",
        src: "/images/lifta/new_first.gif",
        des: "[Social media animation]",
      },
      {
        type: "image",
        src: "/images/lifta/poster.png",
        des: "[100*50 Poster]",
      },
    ],
  },
  "project-5": {
    title: "05 Princess Diana Tribute",
    description:
      "A booklet that follows Diana's life and the events that followed her death. The project focuses on the less comfortable parts of her story - postpartum depression, bulimia, suicide attempts, and more. Alongside the booklet, I designed a landing page for its launch, continuing the same visual tone and language.",
    tags: ["Typography", "Image Making", "Web", "Print", "2024", "Hebrew"],
    media: [
      {
        type: "image",
        src: "/images/diana/new_book.gif",
        des: "[Booklet browsing]",
      },

      {
        type: "image",
        src: "/images/diana/new1.png",
        des: "[Booklet page 2-3]",
      },
      {
        type: "image",
        src: "/images/diana/new2.png",
        des: "[Booklet page 6-7]",
      },
      {
        type: "image",
        src: "/images/diana/new3.png",
        des: "[Booklet page 14-15]",
      },
      {
        type: "video",
        src: "/images/diana/new_compres.mp4",
        des: "[Landing page navigation]",
      },
    ],
  },
  "project-6": {
    title: "06 Sofa Trip",
    description:
      "A TV app that brings virtual travel experiences straight to your home, allowing users to explore the world without leaving their comfort zone. Inspired by sofa fabrics, I designed a warm and inviting visual language that blends illustration, image-making, and typography into a cohesive identity.",
    tags: ["App", "Branding", "Motion", "2025", "English"],
    media: [
      {
        type: "video",
        src: "/images/sofaTrip/intro.mp4",
        des: "[Introduction video]",
      },
      {
        type: "image",
        src: "/images/sofaTrip/poster.png",
        des: "[Advertising posters]",
      },
      {
        type: "image",
        src: "/images/sofaTrip/grid.png",
        des: "[Instegram posts grid]",
      },
      {
        type: "image",
        src: "/images/sofaTrip/new1.gif",
        des: "[Social media animation]",
      },
      {
        type: "image",
        src: "/images/sofaTrip/2.gif",
        des: "[Social media animation]",
      },
      {
        type: "video",
        src: "/images/sofaTrip/new_app.mp4",
        des: "[App navigation]",
      },
    ],
  },
  "project-7": {
    title: "07 The Dot App",
    description:
      "An educational app designed to assist children and Hebrew learners by adding vocalization marks (nikkud) to words. We designed the app so users can type, photograph, or record a word, and the app will provide the correct vocalization marks, making reading more accessible and intuitive.",
    collaboration: "Niv Yagur",
    tags: ["App", "Visual Identity", "2024", "Hebrew"],
    media: [
      { type: "image", src: "/images/dotApp/frame1.png" },
      {
        type: "image",
        src: "/images/dotApp/frame2.png",
        des: "[App interaction]",
      },
      { type: "video", src: "/images/dotApp/app.mp4", des: "[App navigation]" },
    ],
  },
  "project-8": {
    title: "08 Rujum",
    description:
      "A strategic board game where players compete to conquer mountain peaks by building “Rujums”- traditional stone piles used for trail and summit marking. The game combines natural elements with tactical thinking. The set includes a game board, dice, stones for building the Rujums, game cards, and instructions.",
    collaboration: "Maya Shamir, Goni Israeli",
    tags: ["Board Game", "2024", "Hebrew"],
    media: [
      { type: "image", src: "/images/rujum/image1.png" },
      { type: "image", src: "/images/rujum/new_frames.png" },
      {
        type: "image",
        src: "/images/rujum/instractions.png",
        des: "[Game instruction page]",
      },
      {
        type: "image",
        src: "/images/rujum/proces.gif",
        des: "[3D printing process]",
      },
    ],
  },
  "project-9": {
    title: "09 For Now",
    description:
      "A poster designed for “Jerusalem Design Week 2022”, under the theme “For Now”. The event explored the temporality of design, so in my design I took inspiration from a hourglass in order to make the viewer feel the essence of time and temporality.",
    tags: ["Typography", "2022", "Hebrew"],
    media: [
      { type: "image", src: "/images/forNow/for_now_poster.jpg" },
      { type: "image", src: "/images/forNow/try1.png" },
    ],
  },
};

const covers = {
  "project-1": "/images/neve.png",
  "project-2": "/images/wellnest.gif",
  "project-3": "/images/maagalim_new.png",
  "project-4": "/images/lifta1.gif",
  "project-5": "/images/new_diana_autograph.png",
  "project-6": "/images/sofa_trip_gig.gif",
  "project-7": "/images/dot_app.png",
  "project-8": "/images/rojum.gif",
  "project-9": "/images/for_now.png",
};

// Projects shown wide on the home grid.
const featured = new Set(["project-1", "project-4"]);

export const projects = Object.entries(details).map(([id, p]) => {
  const [, number, name] = p.title.match(/^(\d+)\s+(.*)$/);
  const year = p.tags.find((t) => /^\d{4}$/.test(t));
  return {
    id,
    number,
    name,
    year,
    cover: covers[id],
    featured: featured.has(id),
    ...p,
    tags: p.tags.filter((t) => t !== year),
  };
});

export const getProject = (id) => projects.find((p) => p.id === id);
