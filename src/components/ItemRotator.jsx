import React, { useEffect, useState } from "react";

const HOLD = 1500; // ms each item stays before the next one appears

// Cycles through product photos, one at a time, with an instant swap. The
// photos have white backgrounds, so they are multiplied onto the card.
const ItemRotator = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), HOLD);
    return () => clearInterval(id);
  }, [images]);

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="relative h-[38%] w-[38%]">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            draggable="false"
            className="absolute inset-0 h-full w-full object-contain mix-blend-multiply"
            style={{ visibility: i === index ? "visible" : "hidden" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemRotator;
