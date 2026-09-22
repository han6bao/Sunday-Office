import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CaseBookingCta } from "../../sunday/services";

export const Route = createFileRoute("/campaigns/highway")({
  component: HighwayPage,
});

const ARTIST = [
  {
    t: "WHO HE IS",
    d: "Highway (@highway2009) is a Seattle-based artist — rapper, storyteller and visual presence. His Monochrome project set the tone: sharp, black-and-white, fashion-forward imagery rolled out across visuals and a limited apparel line. A rising breakout in Seattle's music scene, with clothing brands taking notice.",
  },
  {
    t: "THE COVER",
    d: "His latest, Forever (Count Fast Millionaire), landed with a cover photographed by Hana. Test shots first, then the direction locked, then the frames — the cover and the content grew from one session.",
  },
  {
    t: "THE LOOK",
    d: "Dark and grainy. Low light, heavy film grain, high contrast — monochrome, like the music and the clothes are the same thing. Nothing glossy, nothing soft. Street luxury, printed in charcoal.",
  },
];

const PROCESS = [
  {
    t: "THE OPENING",
    d: "I arrived at the shoot and he already had the whole concept. So I stayed open — take his creative direction, see what I can do with it.",
  },
  {
    t: "THE TEST SHOTS",
    d: "I gave him some test shots first — quick edits so he could feel the direction before we committed. He liked what he saw, so we went with it.",
  },
  {
    t: "THE DELIVERY",
    d: "The frames that came out of that session ended up on his cover and his socials. That's the process: listen, test, lock, deliver.",
  },
];

function HighwayPage() {
  const [art, setArt] = useState(0);
  const [proc, setProc] = useState(0);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">MUSIC · ALBUM COVER · PHOTOGRAPHY</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 88px)", marginTop: 14 }}>
          Highway.
        </h1>
        <p className="so-micro mt-3">@HIGHWAY2009 · SEATTLE, WA · FOREVER (COUNT FAST MILLIONAIRE) — COVER PHOTO BY HANA</p>
        <hr className="so-rule mt-6" />

        {/* The artist — tap through */}
        <div
          style={{
            marginTop: 44,
            border: "1px solid var(--color-sepia)",
            borderRadius: 22,
            background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
            padding: "24px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
            <p className="so-micro">THE ARTIST</p>
            <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
              {art + 1} / 3 · TAP THE BOX FOR THE NEXT
            </p>
          </div>
          <button
            type="button"
            onClick={() => setArt((s) => (s + 1) % ARTIST.length)}
            style={{
              width: "100%",
              display: "block",
              textAlign: "left",
              background: "none",
              border: 0,
              borderTop: "1px solid var(--color-sepia)",
              padding: "16px 2px 10px",
              cursor: "pointer",
              color: "inherit",
              font: "inherit",
            }}
          >
            <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}>
              {ARTIST[art].t}
            </p>
            <p key={art} className="so-chapter-fade" style={{ margin: "8px 0 0", lineHeight: 1.78, maxWidth: "62ch" }}>
              {ARTIST[art].d}
            </p>
            <span style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 12 }}>
              {ARTIST.map((_, d) => (
                <span
                  key={d}
                  aria-hidden
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: d === art ? "var(--color-verm)" : "var(--color-sepia)",
                    display: "inline-block",
                  }}
                />
              ))}
              <span className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.13em", marginLeft: 5 }}>
                TAP FOR THE NEXT →
              </span>
            </span>
          </button>
        </div>

        {/* The cover */}
        <div style={{ marginTop: 44 }}>
          <img
            src="/assets/campaigns/highway-chitos/forever-cover.jpg"
            alt="Forever (Count Fast Millionaire) — album cover"
            loading="lazy"
            style={{ width: "100%", maxWidth: 420, display: "block", borderRadius: 14, aspectRatio: "1 / 1", objectFit: "cover" }}
          />
          <p className="so-micro" style={{ marginTop: 10, color: "var(--color-verm)", letterSpacing: "0.14em" }}>
            FOREVER (COUNT FAST MILLIONAIRE) — COVER PHOTO BY HANA
          </p>
          <div className="mt-3" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="so-link-jump" href="https://soundcloud.com/highway2009/sets/forever" target="_blank" rel="noreferrer">
              FOREVER — SOUNDCLOUD →
            </a>
            <a className="so-link-jump" href="https://soundcloud.com/highway2009" target="_blank" rel="noreferrer">
              @HIGHWAY2009 →
            </a>
            <a className="so-link-jump" href="https://www.instagram.com/p/DY9dDCtGy0H/" target="_blank" rel="noreferrer">
              THE POST — INSTAGRAM →
            </a>
          </div>
        </div>

        {/* The visuals credit — small, not a headline */}
        <p className="so-micro" style={{ marginTop: 14, color: "var(--color-stone)", letterSpacing: "0.14em" }}>
          COVER VISUALS BY — TO BE DISCOVERED · CREDITED THE SECOND THEY'RE FOUND
        </p>

        {/* My process — tap through */}
        <div
          style={{
            marginTop: 44,
            border: "1px solid var(--color-sepia)",
            borderRadius: 22,
            background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
            padding: "24px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
            <p className="so-micro">MY PROCESS</p>
            <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
              {proc + 1} / 3 · TAP THE BOX FOR THE NEXT
            </p>
          </div>
          <button
            type="button"
            onClick={() => setProc((s) => (s + 1) % PROCESS.length)}
            style={{
              width: "100%",
              display: "block",
              textAlign: "left",
              background: "none",
              border: 0,
              borderTop: "1px solid var(--color-sepia)",
              padding: "16px 2px 10px",
              cursor: "pointer",
              color: "inherit",
              font: "inherit",
            }}
          >
            <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}>
              {PROCESS[proc].t}
            </p>
            <p key={proc} className="so-chapter-fade" style={{ margin: "8px 0 0", lineHeight: 1.78, maxWidth: "62ch" }}>
              {PROCESS[proc].d}
            </p>
            <span style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 12 }}>
              {PROCESS.map((_, d) => (
                <span
                  key={d}
                  aria-hidden
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: d === proc ? "var(--color-verm)" : "var(--color-sepia)",
                    display: "inline-block",
                  }}
                />
              ))}
              <span className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.13em", marginLeft: 5 }}>
                TAP FOR THE NEXT →
              </span>
            </span>
          </button>
        </div>

        {/* For album covers */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">FOR YOUR ALBUM COVER</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            This is what the process can look like: you bring the concept —
            or sometimes we build it together. World building is part of
            what I do, so the idea can come first and the camera follows.
            Test shots, direction locked, frames delivered.
          </p>
          <div className="mt-3" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="so-link-jump" href="/branding">
              WORLD BUILDING — BUILD A WORLD FIRST →
            </a>
          </div>
        </div>

        {/* The collab */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">THE COLLABORATION</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            Count Boss — the shoot that brought Highway and CHITO into one
            frame, styled in the Chitos International monochrome. Two
            Seattle scenes, one roll of film.
          </p>
          <div className="mt-3">
            <a className="so-link-jump" href="/campaigns/chitos">
              CHITOS INTERNATIONAL — THE OTHER HALF →
            </a>
          </div>
        </div>

        {/* The set */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE SET — A FEW FRAMES · BY HANA</p>
          <div className="so-photo-grid mt-6">
            {[
              { src: "/assets/campaigns/highway-chitos/hc01.jpg", cap: "frame 01" },
              { src: "/assets/campaigns/highway-chitos/hc02.jpg", cap: "frame 02" },
              { src: "/assets/campaigns/highway-chitos/hc03.jpg", cap: "frame 03" },
            ].map((ph) => (
              <div key={ph.src} className="so-photo-cell">
                <img src={ph.src} alt={ph.cap} loading="lazy" />
                <span className="so-photo-cap">{ph.cap}</span>
              </div>
            ))}
          </div>
          <p className="so-micro" style={{ marginTop: 12, color: "var(--color-stone)" }}>
            MORE FROM THE SET LIVES ON THE POST — @HIGHWAY2009
          </p>
        </div>

        <CaseBookingCta />

        <div style={{ marginTop: 56 }}>
          <a href="/" className="so-arrow">
            <span className="arr">←</span> Back to Sunday Office
          </a>
        </div>
      </div>
    </div>
  );
}