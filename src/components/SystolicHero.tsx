"use client";

import { useEffect, useRef } from "react";

const N = 16;
const SPEED = 9; // diagonals per second
const TRAIL = 7; // how many diagonals the glow trails behind the head
const AUTO_EVERY = 2.8; // seconds between automatic waves
const MAX_WAVES = 6;

type Wave = { r: number; c: number; t0: number };

type Palette = { head: string; trail: string; idle: string; edge: string };

function readPalette(el: HTMLElement): Palette {
  const s = getComputedStyle(el);
  const v = (name: string) => s.getPropertyValue(name).trim();
  return { head: v("--poly"), trail: v("--metal"), idle: v("--cell"), edge: v("--cell-edge") };
}

/**
 * Cell (r, c) of a systolic array sees data at step (r - r0) + (c - c0) after a
 * value enters at (r0, c0), so activity moves as a diagonal wavefront.
 */
function intensity(waves: Wave[], now: number, r: number, c: number) {
  let best = -1;
  for (const w of waves) {
    if (r < w.r || c < w.c) continue;
    const dist = r - w.r + (c - w.c);
    const behind = (now - w.t0) * SPEED - dist;
    if (behind < 0 || behind > TRAIL) continue;
    best = Math.max(best, 1 - behind / TRAIL);
  }
  return best;
}

export default function SystolicHero() {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvas.current;
    const box = wrap.current;
    if (!cv || !box) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const dark = window.matchMedia("(prefers-color-scheme: dark)");
    let palette = readPalette(box);
    let size = 0;
    let dpr = 1;
    let raf = 0;
    let visible = true;
    let lastAuto = -AUTO_EVERY;
    let lastPointer = 0;
    let lastCell = -1;
    const waves: Wave[] = [];
    const clock = () => performance.now() / 1000;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = box.clientWidth;
      cv.width = Math.round(size * dpr);
      cv.height = Math.round(size * dpr);
      cv.style.height = `${size}px`;
      draw(clock());
    };

    const draw = (now: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, size, size);
      const pitch = size / N;
      const gap = Math.max(1.5, pitch * 0.14);
      const radius = pitch * 0.18;
      for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
          const x = c * pitch + gap / 2;
          const y = r * pitch + gap / 2;
          const w = pitch - gap;
          const k = intensity(waves, now, r, c);
          ctx.beginPath();
          ctx.roundRect(x, y, w, w, radius);
          ctx.fillStyle = palette.idle;
          ctx.fill();
          if (k >= 0) {
            ctx.globalAlpha = 0.18 + 0.82 * k;
            ctx.fillStyle = k > 0.86 ? palette.head : palette.trail;
            ctx.fill();
            ctx.globalAlpha = 1;
          } else {
            ctx.strokeStyle = palette.edge;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const frame = () => {
      raf = 0;
      const now = clock();
      if (now - lastAuto > AUTO_EVERY) {
        lastAuto = now;
        waves.push({ r: 0, c: 0, t0: now });
      }
      while (waves.length > MAX_WAVES) waves.shift();
      const horizon = (2 * N + TRAIL) / SPEED;
      for (let i = waves.length - 1; i >= 0; i--) if (now - waves[i].t0 > horizon) waves.splice(i, 1);
      draw(now);
      if (visible && !reduce.matches) raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (!raf && visible && !reduce.matches) raf = requestAnimationFrame(frame);
    };

    const cellAt = (e: PointerEvent) => {
      const rect = cv.getBoundingClientRect();
      const c = Math.floor(((e.clientX - rect.left) / rect.width) * N);
      const r = Math.floor(((e.clientY - rect.top) / rect.height) * N);
      return r < 0 || c < 0 || r >= N || c >= N ? null : { r, c };
    };

    const inject = (e: PointerEvent) => {
      if (reduce.matches) return;
      const cell = cellAt(e);
      if (!cell) return;
      const id = cell.r * N + cell.c;
      const now = clock();
      if (id === lastCell || now - lastPointer < 0.12) return;
      lastCell = id;
      lastPointer = now;
      waves.push({ r: cell.r, c: cell.c, t0: now });
      start();
    };

    const onTheme = () => {
      palette = readPalette(box);
      draw(clock());
    };
    const onMotion = () => {
      if (reduce.matches) {
        waves.length = 0;
        waves.push({ r: 0, c: 0, t0: clock() - 12 / SPEED });
        draw(clock());
      } else {
        start();
      }
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    const ro = new ResizeObserver(resize);

    io.observe(box);
    ro.observe(box);
    cv.addEventListener("pointermove", inject);
    cv.addEventListener("pointerdown", inject);
    dark.addEventListener("change", onTheme);
    reduce.addEventListener("change", onMotion);
    resize();
    onMotion();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      cv.removeEventListener("pointermove", inject);
      cv.removeEventListener("pointerdown", inject);
      dark.removeEventListener("change", onTheme);
      reduce.removeEventListener("change", onMotion);
    };
  }, []);

  return (
    <div ref={wrap} className="array">
      <canvas ref={canvas} aria-hidden="true" />
    </div>
  );
}
