"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

/* Staggered entrance on load — the hero typesets itself as you arrive. */
function Rise({ i = 0, children }: { i?: number; children: ReactNode }) {
  return (
    <div className="so-rise" style={{ "--i": i } as CSSProperties}>
      {children}
    </div>
  );
}

/* Each letter rises in sequence — the masthead typesets itself. */
function Letters({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="so-let"
          style={{ "--i": i } as CSSProperties}
          aria-hidden={ch === " "}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </>
  );
}

/**
 * The opening — petite typography, one wide future-office plate, and quiet
 * scroll interplay. Nothing shouts: as the visitor scrolls, the text drifts
 * up and fades gently, the plate settles into place and then recedes, and
 * the next section takes over on its own.
 */
export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -64]);
  const plateOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.85, 1],
    [0.92, 1, 1, 0]
  );
  const plateScale = useTransform(scrollYProgress, [0, 0.4], [0.98, 1]);
  const plateY = useTransform(scrollYProgress, [0.6, 1], [0, -26]);

  return (
    <section id="top" className="so-hero" ref={ref}>
      <div className="so-shell">
        <motion.div
          className="so-hero-copy"
          style={reduce ? undefined : { opacity: textOpacity, y: textY }}
        >
          <h1 className="so-hero-title so-emboss">
            <Letters text="Sunday" />
            &nbsp;
            <Letters text="Office." />
          </h1>
          <Rise i={1}>
            <p className="so-hero-locale">
              Independent creative agency · Seattle / Tacoma + beyond
            </p>
          </Rise>
          <Rise i={2}>
            <p className="so-hero-sub">
              Good ideas deserve somewhere to go.
            </p>
          </Rise>
        </motion.div>

        <motion.figure
          className="so-hero-mount"
          aria-label="The Sunday Office"
          style={
            reduce
              ? undefined
              : { opacity: plateOpacity, scale: plateScale, y: plateY }
          }
        >
          <div className="so-hm-plate" aria-hidden="true">
            <img
              src="/assets/work/office-hero.jpg"
              alt=""
              loading="lazy"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
          </div>
          <figcaption className="so-hm-cap">
            <span>The Office</span>
            <span className="sep" aria-hidden="true">
              /
            </span>
            <span>Seattle</span>
            <span className="sep" aria-hidden="true">
              /
            </span>
            <span>Established 2026</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}