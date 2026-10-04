"use client";

import { type CSSProperties, type ReactNode } from "react";

/* Staggered entrance on load — the hero typesets itself as you arrive. */
function Rise({ i = 0, children }: { i?: number; children: ReactNode }) {
  return (
    <div className="so-rise" style={{ "--i": i } as CSSProperties}>
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="so-cover">
      <img
        className="so-cover-img"
        src="/assets/work/hero-night-desk.jpg"
        alt="Hana at her desk at night, camera beside the keyboard"
      />
      <span className="so-cover-shade" aria-hidden />
      <div className="so-cover-inner">
        <h1 className="so-cover-title">
          {/* The script cuts a clear gap through SUNDAY, so the photo shows through. */}
          <span className="sr-only">Sunday Office, a Seattle creative agency</span>
          <svg className="so-cover-mark" viewBox="0 0 1000 330" aria-hidden="true" focusable="false">
            <defs>
              <mask id="so-cut" maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="330">
                <rect x="0" y="0" width="1000" height="330" fill="#fff" />
                <text x="500" y="250" textAnchor="middle" className="so-mark-script" fill="#000" stroke="#000" strokeWidth="10" strokeLinejoin="round">
                  Office
                </text>
              </mask>
            </defs>
            <text x="508" y="170" textAnchor="middle" className="so-mark-caps" mask="url(#so-cut)">
              SUNDAY
            </text>
            <text x="500" y="250" textAnchor="middle" className="so-mark-script">
              Office
            </text>
          </svg>
        </h1>
        <Rise i={2}>
          <p className="so-cover-sub">
            A Seattle creative agency building brands, websites and imagery
            for the businesses worth knowing
          </p>
        </Rise>
        <Rise i={3}>
          <a href="#office-hours" className="so-cover-btn">
            Start a project
          </a>
        </Rise>
      </div>
      <a href="#build" className="so-cover-down" aria-label="Scroll down">
        <span aria-hidden>↓</span>
      </a>
    </section>
  );
}
