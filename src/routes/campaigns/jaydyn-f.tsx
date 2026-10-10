import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { SiteFooter } from "../../sunday/site-footer";
import { useState } from "react";
import { CaseBookingCta } from "../../sunday/services";
import { CaseFacts, CaseRead } from "../../sunday/case-kit";

export const Route = createFileRoute("/campaigns/jaydyn-f")({
  head: () => seoHead("/campaigns/jaydyn-f"),
  component: JaydynCase,
});

const CONTRIBUTED = [
  "Behind-the-scenes video",
  "Photography",
  "Social content support",
  "Short-form content ideas",
  "Extra photos and clips around music releases",
  "Photos he posted on his own social",
  "Shooting for his stories and posting around music-video drops",
];

const REELS = [
  { n: "REEL 1", stats: "120K VIEWS · 6K LIKES · 760 SHARES · 58 REPOSTS", note: "the one I shot for Instagram", u: "https://www.instagram.com/p/DORrPfiklMt/" },
  { n: "REEL 2", stats: "30K VIEWS · 1.5K LIKES · 304 SHARES · 38 REPOSTS", note: "he cut it, I contributed", u: "https://www.instagram.com/reel/DOE71FMEkqQ/" },
];

const GALLERY = [
  { src: "/assets/campaigns/jaydyn-f/jd-07.jpg", cap: "THE HERO · IN MOTION", hero: true },
  { src: "/assets/campaigns/jaydyn-f/jd-01.jpg", cap: "01", hero: false },
  { src: "/assets/campaigns/jaydyn-f/jd-02.jpg", cap: "02", hero: false },
  { src: "/assets/campaigns/jaydyn-f/jd-03.jpg", cap: "03", hero: false },
  { src: "/assets/campaigns/jaydyn-f/jd-04.jpg", cap: "04", hero: false },
  { src: "/assets/campaigns/jaydyn-f/jd-05.jpg", cap: "05", hero: false },
  { src: "/assets/campaigns/jaydyn-f/jd-06.jpg", cap: "06", hero: false },
  { src: "/assets/campaigns/jaydyn-f/jd-08.jpg", cap: "07", hero: false },
  { src: "/assets/campaigns/jaydyn-f/jd-09.jpg", cap: "08", hero: false },
  { src: "/assets/campaigns/jaydyn-f/jd-10.jpg", cap: "09", hero: false },
];

function JaydynCase() {
  const [bw, setBw] = useState(false);
  const [gal, setGal] = useState<number | null>(null);
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">CASE STUDY · ARTIST SOCIAL · MUSIC</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 92px)", marginTop: 14 }}>
          Jaydyn F.
        </h1>
        <p className="so-micro mt-3">SEATTLE HIP-HOP / RAP · PHOTOS AND SOCIAL AROUND MUSIC RELEASES</p>
        <CaseFacts
          items={[
            { k: "FOR", v: "Jaydyn F., Seattle rapper" },
            { k: "WHAT I DID", v: "Photos, behind-the-scenes video and social content around his releases" },
            { k: "RESULT", v: "120K views on the reel I shot", h: "https://www.instagram.com/p/DORrPfiklMt/" },
          ]}
        />

        {/* The artist — text left, the frame right */}
        <div className="so-case-cols" style={{ marginTop: 28, alignItems: "start" }}>
          <div>
            <p className="so-micro">THE ARTIST</p>
            <p style={{ marginTop: 12, lineHeight: 1.5 }}>
              Jaydyn F. is part of Seattle's underground rap scene. He makes
              music, throws shows and brings local artists, touring names
              and friends into the same room. People like UnoTheActivist and
              ILY KIMCHI end up around him too.
            </p>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            <button
              type="button"
              onClick={() => setBw((s) => !s)}
              aria-label="Toggle black and white"
              style={{
                display: "block",
                width: "100%",
                background: "#ffffff",
                border: "1px solid var(--color-sepia)",
                borderRadius: 18,
                padding: 14,
                cursor: "pointer",
              }}
            >
              <img
                src="/assets/campaigns/jaydyn-f/jd-artist.jpg"
                alt="Jaydyn F., hands over face, three frames"
                loading="lazy"
                style={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  objectFit: "contain",
                  background: "#ffffff",
                  display: "block",
                  borderRadius: 10,
                  filter: bw ? "grayscale(1)" : "none",
                  transition: "filter 0.35s ease",
                }}
              />
            </button>
          </div>
        </div>

        {/* The need */}
        <div style={{ marginTop: 28, maxWidth: "58ch" }}>
          <p className="so-micro">THE NEED</p>
          <p style={{ marginTop: 12, lineHeight: 1.5 }}>
            He wanted regular photos and video around his releases, so there's always something new to post between drops.
          </p>
        </div>

        {/* What I contributed */}
        <div
          style={{
            marginTop: 44,
            border: "1px solid var(--color-sepia)",
            borderRadius: 22,
            background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
            padding: "24px",
          }}
        >
          <p className="so-micro">WHAT I CONTRIBUTED</p>
          <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
            {CONTRIBUTED.map((c) => (
              <div key={c} style={{ display: "flex", gap: 12, alignItems: "baseline", borderTop: "1px solid var(--color-sepia)", paddingTop: 10 }}>
                <span className="so-micro" style={{ color: "var(--color-verm)", minWidth: 18 }}>
                  ·
                </span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* One video, more than one life */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">ONE VIDEO, MORE THAN ONE LIFE</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            One music video can turn into BTS clips, short edits, teasers, stills, launch posts and follow-ups. That gives him weeks of posts from one shoot.
          </p>
        </div>

        {/* The work — tap any frame to scroll through */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro">THE WORK · PHOTOS BY HANA · TAP TO OPEN</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14, marginTop: 14 }}>
            {GALLERY.map((g, i) => (
              <button
                key={g.src}
                type="button"
                onClick={() => setGal(i)}
                aria-label={`Open frame ${g.cap}`}
                style={{
                  display: "block",
                  padding: 0,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  gridColumn: g.hero ? "span 3" : "span 1",
                  textAlign: "left",
                }}
              >
                <img
                  src={g.src}
                  alt={`Jaydyn F., Seattle artist photography ${g.cap}`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    aspectRatio: g.hero ? "21 / 9" : "3 / 4",
                    objectFit: "cover",
                    borderRadius: 14,
                    display: "block",
                    border: "1px solid var(--color-sepia)",
                    transition: "opacity 0.25s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                />
                {g.hero && (
                  <p className="so-micro" style={{ marginTop: 8, color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}>
                    {g.cap}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Results — the numbers */}
        <div
          style={{
            marginTop: 44,
            border: "1px solid var(--color-sepia)",
            borderRadius: 22,
            background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
            padding: "24px",
          }}
        >
          <p className="so-micro">RESULTS · NUMBERS FROM THE POSTS</p>
          <div style={{ marginTop: 12, display: "grid", gap: 0 }}>
            {REELS.map((r) => (
              <a
                key={r.n}
                href={r.u}
                target="_blank"
                rel="noreferrer"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap", borderTop: "1px solid var(--color-sepia)", padding: "14px 2px 12px", textDecoration: "none", color: "inherit" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-verm)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-sepia)")}
              >
                <div>
                  <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.14em", fontWeight: 700 }}>
                    {r.n}
                  </p>
                  <p className="so-micro" style={{ marginTop: 4, color: "var(--color-stone)", letterSpacing: "0.08em" }}>
                    {r.note.toUpperCase()}
                  </p>
                  <p className="so-micro" style={{ marginTop: 6, color: "var(--color-verm)", letterSpacing: "0.14em", fontWeight: 600 }}>
                    WATCH ON INSTAGRAM →
                  </p>
                </div>
                <p className="so-serif so-jd-stats" style={{ fontSize: 22, margin: 0, textAlign: "right" }}>
                  {r.stats}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* The circle + the community — side by side */}
        <div className="so-case-cols" style={{ marginTop: 44, alignItems: "start" }}>
          <div style={{ maxWidth: "58ch" }}>
            <p className="so-micro">THE CIRCLE · REAL WORLD JAKE</p>
            <p style={{ marginTop: 12, lineHeight: 1.55 }}>
              There’s a small group of people around Jaydyn’s releases who all know each other.{" "}
              <strong>Real World Jake</strong> (
              <a href="https://www.instagram.com/realwrldjake/" target="_blank" rel="noreferrer" style={{ color: "var(--color-verm)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                @realwrldjake →
              </a>) is an LA-based music video director and editor managed by
              Zero Zero MGMT. He’s worked with artists like Bhad Bhabie,
              TEZZUS and Lil Tracy, and he still has ties to Seattle’s music
              scene. He shoots with Jaydyn regularly, and I’ve helped with
              lighting on some of his video sets.
            </p>
          </div>
          <div style={{ maxWidth: "58ch" }}>
            <p className="so-micro">THE COMMUNITY</p>
            <p style={{ marginTop: 12, lineHeight: 1.55 }}>
              A lot of this is promotion, and I also do it for the people.
              I like working with people who care about the community and
              put something into it. I appreciate all of them.
            </p>
            <p style={{ marginTop: 14, lineHeight: 1.55 }}>
              The goal was to keep him visible between releases, with more than one post for each drop.
            </p>
          </div>
        </div>

        {/* Lightbox — scroll through the set */}
        {gal !== null && (
          <div
            className="lb-overlay so-photo-lb"
            onClick={(e) => {
              if (e.target === e.currentTarget) setGal(null);
            }}
          >
            <div className="so-photo-lb-card">
              <img src={GALLERY[gal].src} alt={`Jaydyn F., Seattle artist photography ${GALLERY[gal].cap}`} />
              <div className="so-photo-lb-meta">
                <span className="so-micro">{GALLERY[gal].cap}</span>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <button
                    className="lb-btn"
                    aria-label="Previous frame"
                    onClick={() => setGal((gal + GALLERY.length - 1) % GALLERY.length)}
                  >
                    ←
                  </button>
                  <button
                    className="lb-btn"
                    aria-label="Next frame"
                    onClick={() => setGal((gal + 1) % GALLERY.length)}
                  >
                    →
                  </button>
                  <button className="lb-btn" aria-label="Close" onClick={() => setGal(null)}>
                    ✕
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <CaseBookingCta />

        <div style={{ marginTop: 56 }}>
          <a href="/" className="so-arrow">
            <span className="arr">←</span> Back to Sunday Office
          </a>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}