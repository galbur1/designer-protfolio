import React, { useEffect, useRef } from "react";

const CELL = 14; // size of a dissolving "pixel", in css px
const HOLD = 2200; // how long each illustration stays whole
const OUT = 1500; // pixels disappear, one by one, until nothing is left
const EMPTY = 350; // a beat of emptiness
const IN = 1500; // pixels of the next one appear until it is whole
const PADDING = 0.14; // breathing room around the illustration

// Shows illustrations one at a time. To change slides, the current one's
// pixels vanish gradually, then the next one's pixels fill in.
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
    let size = { w: 0, h: 0, dpr: 1 };
    let thresholds = []; // one random 0..1 per cell
    let cols = 0;
    let rows = 0;
    let frame;
    let start = performance.now();
    let destroyed = false;

    const buildGrid = () => {
      cols = Math.ceil(size.w / CELL);
      rows = Math.ceil(size.h / CELL);
      thresholds = Array.from({ length: cols * rows }, () => Math.random());
    };

    const resize = () => {
      const r = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = { w: r.width, h: r.height, dpr };
      canvas.width = Math.round(r.width * dpr);
      canvas.height = Math.round(r.height * dpr);
      buildGrid();
    };

    // Draw one illustration (contained, centered) showing only the cells
    // for which `visible(threshold)` is true.
    const drawImage = (img, visible) => {
      const { w, h, dpr } = size;
      const box = Math.min(w, h) * (1 - PADDING * 2);
      const s = Math.min(box / img.naturalWidth, box / img.naturalHeight);
      const dw = img.naturalWidth * s;
      const dh = img.naturalHeight * s;

      ctx.save();
      ctx.scale(dpr, dpr);
      const path = new Path2D();
      for (let i = 0; i < thresholds.length; i++) {
        if (!visible(thresholds[i])) continue;
        path.rect((i % cols) * CELL, Math.floor(i / cols) * CELL, CELL, CELL);
      }
      ctx.clip(path);
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
      ctx.restore();
    };

    const render = (now) => {
      if (destroyed || imgs.length === 0) return;
      if (size.w === 0) {
        frame = requestAnimationFrame(render); // hidden layout, nothing to draw
        return;
      }
      // Each illustration: pixels arrive from nothing, hold whole, vanish,
      // then a beat of emptiness before the next one starts.
      const cycle = IN + HOLD + OUT + EMPTY;
      const elapsed = now - start;
      const n = Math.floor(elapsed / cycle);
      const t = elapsed - n * cycle;
      const img = imgs[n % imgs.length];

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (t < IN) {
        const p = t / IN;
        drawImage(img, (th) => th <= p); // pixels arrive
      } else if (t < IN + HOLD) {
        drawImage(img, () => true); // whole
      } else if (t < IN + HOLD + OUT) {
        const p = (t - IN - HOLD) / OUT;
        drawImage(img, (th) => th >= p); // pixels vanish
      }
      // else: empty for a moment
      frame = requestAnimationFrame(render);
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
      resize();
      start = performance.now();
      if (reduceMotion) {
        drawImage(imgs[0], () => true);
      } else {
        frame = requestAnimationFrame(render);
      }
    });

    const ro = new ResizeObserver(() => {
      if (imgs.length === 0) return;
      resize();
      if (reduceMotion) drawImage(imgs[0], () => true);
    });
    ro.observe(wrap);

    return () => {
      destroyed = true;
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, [images]);

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
};

export default PixelSlideshow;
