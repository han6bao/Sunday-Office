"use client";

import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";

/* ------------------------------------------------------------------
   Scroll moments, written without an animation library so they behave
   the same everywhere. Each one listens to scroll, works out how far an
   element has travelled through the screen (0 to 1), and writes styles
   directly, once per frame.
   ------------------------------------------------------------------ */

function prefersReduced() {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

/** Calls `onProgress(p)` every frame the page scrolls. `p` goes from 0
 *  (element's top at `startAt` of the viewport) to 1 (element's top at `endAt`). */
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  onProgress: (p: number, el: HTMLElement) => void,
  calc: (rect: DOMRect, vh: number) => number,
) {
  const cb = useRef(onProgress);
  cb.current = onProgress;
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced()) return;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, calc(r, window.innerHeight)));
      cb.current(p, el);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

/* The hero photo opens up to the full width of the screen as it scrolls in. */
export function OpeningPhoto({ children, caption }: { children: ReactNode; caption: ReactNode }) {
  const fig = useRef<HTMLElement>(null);
  const clip = useRef<HTMLDivElement>(null);
  const zoom = useRef<HTMLDivElement>(null);
  useScrollProgress(
    fig,
    (p) => {
      const small = window.innerWidth < 900 ? 5 : 11;
      const i = small * (1 - p);
      const r = 8 * (1 - p);
      if (clip.current) clip.current.style.clipPath = `inset(0% ${i}% 0% ${i}% round ${r}px)`;
      if (zoom.current) zoom.current.style.transform = `scale(${1.12 - 0.12 * p})`;
    },
    // 0 when the photo's top enters the bottom of the screen, 1 when it reaches the top third
    (r, vh) => (vh - r.top) / (vh * 0.75),
  );
  return (
    <figure className="so-hx-photo so-hx-bleed" aria-label="Sunday Office" ref={fig}>
      <div className="so-hx-clip" ref={clip}>
        <div className="so-hx-zoom" ref={zoom}>
          {children}
        </div>
      </div>
      <figcaption className="so-shell so-hx-cap">{caption}</figcaption>
    </figure>
  );
}

/* A slow band of words that drifts across the page. Pauses on hover. */
export function Marquee({ words }: { words: string[] }) {
  const row = (
    <span className="so-mq-row" aria-hidden>
      {words.map((w, i) => (
        <span key={i} className="so-mq-item">
          <span className={i % 2 ? "so-mq-it" : ""}>{w}</span>
          <span className="so-mq-dot">✦</span>
        </span>
      ))}
    </span>
  );
  return (
    <div className="so-mq">
      <p className="sr-only">{words.join(", ")}</p>
      <div className="so-mq-track">
        {row}
        {row}
      </div>
    </div>
  );
}

/* Words light up one by one as the paragraph scrolls through the screen. */
export function LitText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");
  useScrollProgress(
    ref,
    (p, el) => {
      const spans = el.children;
      const n = spans.length;
      for (let k = 0; k < n; k++) {
        const local = Math.min(1, Math.max(0, p * n - k));
        (spans[k] as HTMLElement).style.opacity = String(0.16 + 0.84 * local);
      }
    },
    // 0 when the top reaches 85% down the screen, 1 when the bottom reaches the middle
    (r, vh) => (vh * 0.85 - r.top) / (vh * 0.35 + r.height),
  );
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="so-lit-w">
          {w}{" "}
        </span>
      ))}
    </p>
  );
}

/* A pinned reel: scroll down and the photos glide sideways. */
export type ReelItem = { src: string; t: string; w: string; h: string };

export function ScrollReel({ items, title }: { items: ReelItem[]; title: ReactNode }) {
  const wrap = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  const [dist, setDist] = useState(0);
  const [stat, setStat] = useState(false);

  useEffect(() => {
    if (prefersReduced()) {
      setStat(true);
      return;
    }
    const measure = () => {
      const el = track.current;
      if (el) setDist(Math.max(0, el.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    const imgs = Array.from(track.current?.querySelectorAll("img") ?? []);
    imgs.forEach((im) => im.addEventListener("load", measure));
    return () => {
      window.removeEventListener("resize", measure);
      imgs.forEach((im) => im.removeEventListener("load", measure));
    };
  }, []);

  useScrollProgress(
    wrap,
    (p) => {
      const d = (track.current?.scrollWidth ?? 0) - window.innerWidth;
      const q = Math.min(1, Math.max(0, (p - 0.04) / 0.92));
      if (track.current) track.current.style.transform = `translate3d(${-Math.max(0, d) * q}px,0,0)`;
      if (bar.current) bar.current.style.width = `${q * 100}%`;
    },
    (r, vh) => -r.top / Math.max(1, r.height - vh),
  );

  return (
    <section
      ref={wrap}
      className={"so-reel" + (stat ? " is-static" : "")}
      style={stat ? undefined : { height: `calc(100vh + ${dist}px)` }}
      aria-label="Photographs"
    >
      <div className="so-reel-pin">
        <div className="so-shell so-reel-head">
          {title}
          <span className="so-reel-bar" aria-hidden>
            <span ref={bar} />
          </span>
        </div>
        <div ref={track} className="so-reel-track">
          {items.map((it, i) => (
            <a key={it.src} href={it.h} className={"so-reel-card" + (i % 3 === 1 ? " is-low" : "")}>
              <span className="so-reel-img">
                <img src={it.src} alt={it.t} loading="lazy" />
              </span>
              <span className="so-reel-cap">
                <span className="so-reel-t">{it.t}</span>
                <span className="so-micro">{it.w}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Build your world: four words on the left, one photo on the right.
   Hover or tap a word and the photo changes. It also turns on its own. */
export type WorldRoom = { k: string; line: string; img: string; cap: string; h: string };

export function WorldPicker({ rooms }: { rooms: WorldRoom[] }) {
  const [on, setOn] = useState(0);
  const [held, setHeld] = useState(false);
  useEffect(() => {
    if (held || prefersReduced()) return;
    const t = window.setInterval(() => setOn((n) => (n + 1) % rooms.length), 3800);
    return () => window.clearInterval(t);
  }, [held, rooms.length]);
  const r = rooms[on];
  return (
    <div className="so-wp">
      <ul className="so-wp-words" onMouseLeave={() => setHeld(false)}>
        {rooms.map((x, i) => (
          <li key={x.k}>
            <button
              type="button"
              className={"so-wp-word" + (i === on ? " is-on" : "")}
              onMouseEnter={() => {
                setOn(i);
                setHeld(true);
              }}
              onClick={() => {
                setOn(i);
                setHeld(true);
              }}
              aria-pressed={i === on}
            >
              <span className="so-wp-k">{x.k}.</span>
              <span className="so-wp-line">{x.line}</span>
            </button>
          </li>
        ))}
      </ul>
      <a className="so-wp-photo" href={r.h} aria-label={r.cap}>
        {rooms.map((x, i) => (
          <img key={x.img} src={x.img} alt={x.cap} className={i === on ? "is-on" : ""} loading={i === 0 ? "eager" : "lazy"} />
        ))}
        <span className="so-wp-cap">
          <span className="so-micro">{String(on + 1).padStart(2, "0")} / {String(rooms.length).padStart(2, "0")}</span>
          <span>{r.cap} ↗</span>
        </span>
      </a>
    </div>
  );
}
