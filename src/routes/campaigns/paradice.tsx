import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CaseBookingCta } from "../../sunday/services";

export const Route = createFileRoute("/campaigns/paradice")({
  component: ParadicePage,
});

const PHOTOS = [
  { src: "/assets/campaigns/paradice/pz01.jpg", cap: "Paisley, face down — hands in pockets" },
  { src: "/assets/campaigns/paradice/pz02.jpg", cap: "The back — PARADICE seal on the windbreaker" },
  { src: "/assets/campaigns/paradice/pz03.jpg", cap: "Hood pulled, hand to the chest" },
  { src: "/assets/campaigns/paradice/pz04.jpg", cap: "Look down — the RADICE half-mark" },
  { src: "/assets/campaigns/paradice/pz05.jpg", cap: "PARADICE script — chest level" },
  { src: "/assets/campaigns/paradice/pz06.jpg", cap: "BRIDGE piece — adjusting the zip" },
  { src: "/assets/campaigns/paradice/pz07.jpg", cap: "Hands out, mid-verse" },
  { src: "/assets/campaigns/paradice/pz08.jpg", cap: "The smile — collar held" },
  { src: "/assets/campaigns/paradice/pz09.jpg", cap: "Arms out, in motion" },
];

const ARTIST = [
  {
    t: "WHO HE IS",
    d: "Itz Pz — Peezy to the ones who know — a Seattle artist making music with his group and team inside the ReelClip circle. Rapper, storyteller, one of the city's rising voices: Life of Pz, EFFORTLESS, the YN TAKEOVER EP.",
  },
  {
    t: "THE PICTURES",
    d: "Hana shot him in the paisley session before the deal. He used the pictures for his socials and promotions. The wildest part: a lot of people started using these photos as their profile pictures on Twitter and everywhere else — the image became the avatar.",
  },
  {
    t: "THE SIGNING",
    d: "A couple months after the shoot, he signed to Empire Records — the label system that released Kendrick Lamar's Section.80 and has championed a roster that runs from Nipsey Hussle and Tyga to XXXTentacion, Snoop Dogg, Cardi B, Young Dolph, Key Glock, King Von, Larry June, Blxst, Lucki and Fat Joe on the hip-hop side — and Anderson .Paak, T-Pain, Tink, Yung Bleu and Dree on the R&B + soul side. These frames sit right before that chapter: the last of the independent run.",
  },
];

const THOUGHT = [
  {
    t: "THE LIGHT",
    d: "I helped bring the lighting up for this one. Straight studio, hard even light against the white wall — the kind of setup where the print and the face both have nowhere to hide.",
  },
  {
    t: "THE EDIT",
    d: "I edited it dark and gritty — high saturation, a low-fi grain that keeps the clothes honest. No gloss, no set dressing. The paisley does the talking, and the photo feels like the street it came from.",
  },
  {
    t: "THE WHY",
    d: "It's what a collective is for. One artist's pictures promote him, promote the brand on his back, promote the circle behind him. For artists: this is your promo. For clothing companies: this is your campaign. Everyone wins off the same frame.",
  },
];

function ParadicePage() {
  const [open, setOpen] = useState<number | null>(null);
  const [art, setArt] = useState(0);
  const [thought, setThought] = useState(0);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">CAMPAIGN · ARTIST × STREETWEAR · SEATTLE</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 96px)", marginTop: 14 }}>
          Itz Pz.
        </h1>
        <p className="so-micro mt-3">SHOT IN THE PAISLEY SESSION × PARADICE WORLDWIDE · REELCLIP CIRCLE · BEFORE THE EMPIRE SIGNING</p>
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

        {/* The brand */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">THE BRAND — PARADICE WORLDWIDE</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            Paradice Worldwide is the streetwear label from South Seattle —
            Ari Glass and Harry "Clean," out of 2919 Rainier Ave S. Their
            voice is "TAKING CHANCES.": heavyweight pattern work, dice and
            destiny references, and the paisley print that became their
            signature. The store doubles as the culture — clothing and
            creative under one roof, lifting the scene around them.
          </p>
        </div>

        {/* My thought process — tap through */}
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
            <p className="so-micro">MY THOUGHT PROCESS</p>
            <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
              {thought + 1} / 3 · TAP THE BOX FOR THE NEXT
            </p>
          </div>
          <button
            type="button"
            onClick={() => setThought((s) => (s + 1) % THOUGHT.length)}
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
              {THOUGHT[thought].t}
            </p>
            <p key={thought} className="so-chapter-fade" style={{ margin: "8px 0 0", lineHeight: 1.78, maxWidth: "62ch" }}>
              {THOUGHT[thought].d}
            </p>
            <span style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 12 }}>
              {THOUGHT.map((_, d) => (
                <span
                  key={d}
                  aria-hidden
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: d === thought ? "var(--color-verm)" : "var(--color-sepia)",
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

        {/* For artists + brands */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">FOR ARTISTS + CLOTHING BRANDS</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            If you're an artist: these are the pictures that promote you.
            If you're a clothing company: this is the frame your brand
            lives in. One shoot, both worlds — the collective makes sure
            of it.
          </p>
        </div>

        {/* The circle */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE CIRCLE</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            The session lives inside the same creative circle as{" "}
            <strong>Soniq Reign</strong> and <strong>ReelClip</strong> —
            artists, labels and studios around Seattle's scene, moving as
            one. Same crews, same energy, one long running session across
            the city.
          </p>
        </div>

        {/* The look */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE LOOK — GRITTY / ALT / HIGH SATURATION</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            Straight studio, unretouched, pushed hard — dark and gritty is
            the point. The paisley print does the talking.
          </p>
        </div>

        {/* The artist card */}
        <div style={{ marginTop: 36 }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(180px, 260px) 1fr", gap: 24, marginTop: 14, alignItems: "start" }}>
            <img
              src="/assets/campaigns/paradice/itzpz-cover.jpg"
              alt="YN TAKEOVER Pt. 1 — EP cover"
              loading="lazy"
              style={{ width: "100%", display: "block", borderRadius: 14, aspectRatio: "1 / 1", objectFit: "cover" }}
            />
            <div>
              <p style={{ lineHeight: 1.75 }}>
                <strong>Itz Pz</strong> — now out on the <em>YN TAKEOVER
                Pt. 1</em> EP (2026), the record that follows his Empire
                Records signing. The paisley-era session below was shot
                before the deal; the takeover came right after.
              </p>
              <div className="mt-3" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a className="so-link-jump" href="https://open.spotify.com/album/3zjU0GNnGqslUioWMdnYG1" target="_blank" rel="noreferrer">
                  YN TAKEOVER PT. 1 — SPOTIFY →
                </a>
                <a className="so-link-jump" href="https://open.spotify.com/artist/26FIRgKw5rjzNaeGY5Nrr2" target="_blank" rel="noreferrer">
                  ITZ PZ — ARTIST PAGE →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* The numbers — live from his Spotify */}
        <div
          style={{
            marginTop: 44,
            border: "1px solid var(--color-sepia)",
            borderRadius: 22,
            background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
            padding: "24px",
          }}
        >
          <p className="so-micro">THE NUMBERS — LIVE FROM HIS SPOTIFY</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
              gap: 20,
              borderTop: "1px solid var(--color-sepia)",
              marginTop: 12,
              paddingTop: 16,
            }}
          >
            <div>
              <p className="so-serif" style={{ fontSize: 30, margin: 0 }}>
                20,945
              </p>
              <p className="so-micro" style={{ marginTop: 6, color: "var(--color-stone)", letterSpacing: "0.14em" }}>
                MONTHLY LISTENERS
              </p>
            </div>
            <div>
              <p className="so-serif" style={{ fontSize: 30, margin: 0 }}>
                281,599
              </p>
              <p className="so-micro" style={{ marginTop: 6, color: "var(--color-stone)", letterSpacing: "0.14em" }}>
                TOP TRACK — CLAP SUM
              </p>
            </div>
            <div>
              <p className="so-serif" style={{ fontSize: 30, margin: 0 }}>
                6,129+
              </p>
              <p className="so-micro" style={{ marginTop: 6, color: "var(--color-stone)", letterSpacing: "0.14em" }}>
                PLAYS ON YN TAKEOVER PT. 1 · 4 TRACKS · OUT 3.27.26
              </p>
            </div>
          </div>
          <p style={{ margin: "16px 0 0", lineHeight: 1.75, maxWidth: "58ch" }}>
            The EP's biggest so far: <strong>Pullin' Stuntz at 5,012</strong> and{" "}
            <strong>Stay Wimme at 1,117</strong> — and the record has been out
            since March. Rough money read, if you're curious: at Spotify's
            public per-stream rate the EP sits somewhere around $20–$50 gross
            so far. Features split it, the deal takes its cut — the real
            number starts when the next 100K hits.
          </p>
        </div>

        {/* Gallery */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE SESSION — 9 FRAMES · PHOTOS BY HANA</p>
          <div className="so-photo-grid mt-6">
            {PHOTOS.map((ph, i) => (
              <button
                key={ph.src}
                className="so-photo-cell"
                type="button"
                onClick={() => setOpen(i)}
                aria-label={ph.cap}
              >
                <img src={ph.src} alt={ph.cap} loading="lazy" />
                <span className="so-photo-cap">
                  {String(i + 1).padStart(2, "0")} · {ph.cap}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {open !== null && (
          <div
            className="lb-overlay so-photo-lb"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(null);
            }}
          >
            <div className="so-photo-lb-card">
              <img src={PHOTOS[open].src} alt={PHOTOS[open].cap} />
              <div className="so-photo-lb-meta">
                <span className="so-micro">{PHOTOS[open].cap}</span>
                <button className="lb-btn" aria-label="Close" onClick={() => setOpen(null)}>
                  ✕
                </button>
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
    </div>
  );
}