import React, { useEffect, useState } from "react";

const HOLD = 1700; // ms each item stays
const FADE = 500; // ms crossfade

// Cycles through product photos, one at a time. The photos have white
// backgrounds, so they are multiplied onto the card to blend in.
const ItemRotator = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      HOLD + FADE
    );
    return () => clearInterval(id);
  }, [images]);

  return (
    <div className="pointer-events-none absolute inset-0 p-10">
      <div className="relative h-full w-full">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            draggable="false"
            className="absolute inset-0 h-full w-full object-contain mix-blend-multiply"
            style={{
              opacity: i === index ? 1 : 0,
              transition: `opacity ${FADE}ms ease-in-out`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemRotator;
