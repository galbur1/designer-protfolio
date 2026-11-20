import React, { useEffect, useRef } from "react";

const CELL = 14; // size of a dissolving "pixel", in css px
const HOLD = 2200; // how long each illustration stays whole
const OUT = 1500; // pixels disappear, one by one, until nothing is left
const EMPTY = 350; // a beat of emptiness
const IN = 1500; // pixels arrive until the illustration is whole
const PADDING = 0.14; // breathing room around the illustration

// Shows illustrations one at a time: pixels arrive from nothing, hold, vanish,
// then the next one begins. Each illustration is pre-rendered once into an
// offscreen canvas, so every frame is only cheap 1:1 copies of the visible
// cells (no clipping paths), and nothing runs while off-screen.
const PixelSlideshow = ({ images }) => {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let imgs = [];
    let layers = []; // one pre-rendered offscreen canvas per illustration
    let W = 0;
    let H = 0;
    let cell = 1;
    let cols = 0;
    let thresholds = []; // one random 0..1 per cell
    let frame;
    let start = performance.now();
    let inView = true;
    let destroyed = false;

    const build = () => {
      const r = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.round(r.width * dpr);
      H = Math.round(r.height * dpr);
      canvas.width = W;
      canvas.height = H;
      if (W === 0 || H === 0) return;

      cell = Math.max(2, Math.round(CELL * dpr));
      cols = Math.ceil(W / cell);
      const rows = Math.ceil(H / cell);
      thresholds = Array.from({ length: cols * rows }, () => Math.random());

      layers = imgs.map((img) => {
        const off = document.createElement("canvas");
        off.width = W;
        off.height = H;
        const octx = off.getContext("2d");
        const box = Math.min(W, H) * (1 - PADDING * 2);
        const s = Math.min(box / img.naturalWidth, box / img.naturalHeight);
        const dw = img.naturalWidth * s;
        const dh = img.naturalHeight * s;
        octx.drawImage(img, (W - dw) / 2, (H - dh) / 2, dw, dh);
        return off;
      });
    };

    // Copy only the cells that should be visible, pixel for pixel.
    const drawCells = (layer, visible) => {
      for (let i = 0; i < thresholds.length; i++) {
        if (!visible(thresholds[i])) continue;
        const x = (i % cols) * cell;
        const y = Math.floor(i / cols) * cell;
        ctx.drawImage(layer, x, y, cell, cell, x, y, cell, cell);
      }
    };

    const render = (now) => {
      if (destroyed) return;
      frame = requestAnimationFrame(render);
      if (layers.length === 0 || W === 0 || !inView || document.hidden) return;

      const cycle = IN + HOLD + OUT + EMPTY;
      const elapsed = now - start;
      const n = Math.floor(elapsed / cycle);
      const t = elapsed - n * cycle;
      const layer = layers[n % layers.length];

      ctx.clearRect(0, 0, W, H);
      if (t < IN) {
        const p = t / IN;
        drawCells(layer, (th) => th <= p); // pixels arrive
      } else if (t < IN + HOLD) {
        ctx.drawImage(layer, 0, 0); // whole
      } else if (t < IN + HOLD + OUT) {
        const p = (t - IN - HOLD) / OUT;
        drawCells(layer, (th) => th >= p); // pixels vanish
      }
      // else: empty for a moment
    };

    const load = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = src;
      });

    Promise.all(images.map(load)).then((loaded) => {
      if (destroyed) return;
      imgs = loaded.filter(Boolean);
      if (imgs.length === 0) return;
      build();
      start = performance.now();
      if (reduceMotion) {
        if (layers[0]) ctx.drawImage(layers[0], 0, 0);
      } else {
        frame = requestAnimationFrame(render);
      }
    });

    const ro = new ResizeObserver(() => {
      if (imgs.length === 0) return;
      build();
      if (reduceMotion && layers[0]) ctx.drawImage(layers[0], 0, 0);
    });
    ro.observe(wrap);

    // Don't animate while the card is scrolled out of view.
    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
    });
    io.observe(wrap);

    return () => {
      destroyed = true;
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
    };
  }, [images]);

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
};

export default PixelSlideshow;
