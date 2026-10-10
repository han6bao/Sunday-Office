import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { SiteBar } from "../sunday/site-bar";
import { useState } from "react";
import { CHAPTERS } from "../sunday/chapters";

export const Route = createFileRoute("/about")({
  head: () => seoHead("/about"),
  component: AboutPage,
});


function AboutPage() {
  const [ch, setCh] = useState(0);
  const go = (i: number) => setCh(Math.min(Math.max(i, 0), CHAPTERS.length - 1));
  const c = CHAPTERS[ch];
  return (
    <div className="block so-keep-light fd-about" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap", marginBottom: 40 }}>
          <a href="/" className="so-arrow">
            <span className="arr">←</span> Back to Sunday Office
          </a>
          <span style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
            <span className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
              SUNDAY OFFICE / INDEPENDENT CREATIVE AGENCY
            </span>
          </span>
        </div>

        <p className="so-micro so-micro-red">FILE NO. 004 · ALL ABOUT HANA</p>
        <h1 className="so-serif fd-about-h" style={{ marginTop: 14 }}>
          Meet Hana.
        </h1>
        <p className="so-micro mt-3">FOUNDER / PHOTOGRAPHER / CREATIVE PRODUCER</p>

        <div className="so-profile" style={{ marginTop: 44 }}>
          <div>
            <img
              src="/assets/about-hana.jpg"
              alt="Hana, Seattle photographer and founder of Sunday Office, at her desk at night"
              loading="lazy"
              style={{
                width: "100%",
                aspectRatio: "3 / 4",
                objectFit: "cover",
                borderRadius: 16,
                border: "1px solid var(--color-sepia)",
                display: "block",
              }}
            />
          </div>
          <div className="so-profile-body">
            <p className="lead">Hi, I'm Hana.</p>
            {/* Hana's new blurb lands here — the copy below is the current placeholder */}
            <p>
              I started behind the camera. But somewhere along the way I
              realized the thing I loved wasn't only taking the photograph. It
              was figuring out what the whole thing could be: the image, the
              campaign, the website it lives on, the little film somebody
              remembers, the way a business introduces itself.
            </p>
            <p>
              Sunday Office grew from that. Today I lead it as an independent
              creative agency rooted in photography, creative direction, culture
              and story.
            </p>
            <div className="so-profile-credits" style={{ marginTop: 26 }}>
              <div className="so-profile-credit">
                <p className="so-micro">BASED</p>
                <p style={{ marginTop: 6 }}>Seattle, WA</p>
              </div>
              <div className="so-profile-credit">
                <p className="so-micro">ROLE</p>
                <p style={{ marginTop: 6 }}>Founder, Photographer + Creative Producer</p>
              </div>
              <div className="so-profile-credit" style={{ borderTop: 0 }}>
                <p className="so-micro">WORKS WITH</p>
                <p style={{ marginTop: 6 }}>Brands, businesses + artists</p>
              </div>
            </div>
            <p className="so-hero-sub" style={{ marginTop: 26 }}>
              Good ideas deserve somewhere to go.
            </p>
          </div>
        </div>
      </div>

      {/* The story navigator */}
      <div className="so-shell" style={{ paddingBottom: 120 }}>
        <div
          style={{
            marginTop: 40,
            border: "1px solid var(--color-sepia)",
            borderRadius: 24,
            overflow: "hidden",
            background: "color-mix(in srgb, var(--color-paper) 94%, #efe9e2)",
          }}
        >
          <div
            style={{
              padding: "16px 24px",
              borderBottom: "1px solid var(--color-sepia)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <p className="so-micro" style={{ letterSpacing: "0.2em", fontWeight: 600 }}>
              MORE ABOUT HANA
            </p>
            <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.2em" }}>
              01 / 06
            </p>
          </div>

          {/* Mobile: chapter numbers, horizontally scrollable */}
          <div className="so-chapters-mnav">
            {CHAPTERS.map((x, i) => (
              <button
                key={x.n}
                type="button"
                onClick={() => go(i)}
                style={{
                  border: "1px solid var(--color-sepia)",
                  borderRadius: 999,
                  padding: "7px 13px",
                  background: i === ch ? "var(--color-print)" : "transparent",
                  color: i === ch ? "var(--color-paper)" : "var(--color-stone)",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.1em",
                }}
                className="so-micro"
              >
                {x.n}
              </button>
            ))}
          </div>

          <div className="so-chapters-inner">
            {/* Sidebar */}
            <nav className="so-chapters-nav" aria-label="About chapters">
              {CHAPTERS.map((x, i) => (
                <button
                  key={x.n}
                  type="button"
                  onClick={() => go(i)}
                  className="so-micro"
                  style={{
                    width: "100%",
                    textAlign: "left",
                    border: 0,
                    borderBottom: "1px solid var(--color-sepia)",
                    padding: "15px 20px",
                    cursor: "pointer",
                    background: i === ch ? "color-mix(in srgb, var(--color-paper) 78%, #e9e2da)" : "transparent",
                    boxShadow: i === ch ? "inset 3px 0 0 var(--color-verm)" : "none",
                    color: i === ch ? "var(--color-print)" : "var(--color-stone)",
                    fontWeight: i === ch ? 700 : 500,
                    letterSpacing: "0.12em",
                    display: "flex",
                    gap: 10,
                    alignItems: "baseline",
                  }}
                >
                  <span style={{ color: i === ch ? "var(--color-verm)" : "var(--color-stone)" }}>{x.n}</span>
                  <span>{x.t.toUpperCase()}</span>
                </button>
              ))}
            </nav>

            {/* The open chapter */}
            <div
              className="so-chapter-pane"
              role="button"
              tabIndex={0}
              onClick={() => go(ch === CHAPTERS.length - 1 ? 0 : ch + 1)}
              onKeyDown={(ev) => {
                if (ev.key === "Enter" || ev.key === " ") {
                  ev.preventDefault();
                  go(ch === CHAPTERS.length - 1 ? 0 : ch + 1);
                }
              }}
              aria-label="Tap for the next chapter"
              style={{ position: "relative", cursor: "pointer" }}
            >
              <span
                aria-hidden
                className="so-serif"
                style={{
                  position: "absolute",
                  right: 6,
                  top: -26,
                  fontSize: "clamp(120px, 20vw, 210px)",
                  lineHeight: 1,
                  color: "rgba(120, 105, 95, 0.09)",
                  pointerEvents: "none",
                  userSelect: "none",
                  zIndex: 0,
                }}
              >
                {c.n}
              </span>

              <div style={{ position: "relative", zIndex: 1 }}>
                <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.18em", fontWeight: 600 }}>
                  ABOUT / {c.n} OF 06
                </p>
                <p className="so-serif" style={{ fontSize: "clamp(30px, 4vw, 46px)", marginTop: 12, lineHeight: 1.1 }}>
                  {c.t}
                </p>
                <div key={ch} className="so-chapter-fade" style={{ marginTop: 18, maxWidth: "62ch", display: "grid", gap: 14 }}>
                  {c.p.map((para) => (
                    <p key={para.slice(0, 24)} style={{ margin: 0, lineHeight: 1.55 }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              <div
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                style={{
                  marginTop: 34,
                  paddingTop: 18,
                  borderTop: "1px solid var(--color-sepia)",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 14,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <button
                  type="button"
                  onClick={() => go(ch - 1)}
                  disabled={ch === 0}
                  className="so-micro"
                  style={{
                    background: "none",
                    border: 0,
                    padding: 0,
                    cursor: ch === 0 ? "default" : "pointer",
                    color: ch === 0 ? "var(--color-sepia)" : "var(--color-verm)",
                    letterSpacing: "0.16em",
                    fontWeight: 600,
                  }}
                >
                  ← PREVIOUS
                </button>
                <span className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.16em" }}>
                  {c.n} OF 06
                </span>
                <button
                  type="button"
                  onClick={() => go(ch + 1)}
                  disabled={ch === CHAPTERS.length - 1}
                  className="so-micro"
                  style={{
                    background: "none",
                    border: 0,
                    padding: 0,
                    cursor: ch === CHAPTERS.length - 1 ? "default" : "pointer",
                    color: ch === CHAPTERS.length - 1 ? "var(--color-sepia)" : "var(--color-verm)",
                    letterSpacing: "0.16em",
                    fontWeight: 600,
                  }}
                >
                  NEXT →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}