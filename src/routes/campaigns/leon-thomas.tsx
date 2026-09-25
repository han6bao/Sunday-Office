import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CaseBookingCta } from "../../sunday/services";

export const Route = createFileRoute("/campaigns/leon-thomas")({
  component: LeonThomasPage,
});

const CHAPTERS: { t: string; d: string }[] = [
  {
    t: "THE ARTIST",
    d: "Leon Thomas is a Grammy-winning R&B artist — and most people met him first as Andre Harris, the singer on Victorious. These days he's riding the Mutts Don't Heel era and its HEEL deluxe edition, selling out venues across the country.",
  },
  {
    t: "THE NIGHT",
    d: "After lighting up The Showbox with a high-energy stop on his Mutts Don't Heel Tour, Leon didn't call it a night. He pulled up at Vice Seattle — Capitol Hill, 1532 Minor Ave — for the official afterparty, and kept the crowd's energy high into the early morning, performing his biggest songs, including the Victorious theme.",
  },
  {
    t: "THE FEATURE",
    d: "The night became a story — \"Leon Thomas Makes Special Appearance at VICE for 'Mutts Don't Heel' Tour Afterparty,\" published by Dubsea on December 16, 2025, with photos credited to Hana Hong. Promotion for all three sides at once: the artist's tour, the club's calendar, and Seattle's music scene around them.",
  },
  {
    t: "THE NICK LINK",
    d: "Seattle keeps showing up in Leon's story. The Victorious theme he played that night is from the show that made him famous — and the Victorious × iCarly crossover special, \"iParty with Victorious,\" is the one where the iCarly crew comes to the party Andre throws in Seattle. Same city, years apart, still throwing the afterparty.",
  },
  {
    t: "HANA'S ROLE",
    d: "Hana shot the night. The afterparty photos, the promo frames, the stuff that ended up on the Dubsea feature and the club's page — that's all her work. Photographer on the ground, in the background, and the reason the night has a face on it.",
  },
];

function LeonThomasPage() {
  const [step, setStep] = useState(0);
  const c = CHAPTERS[step];
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">MUSIC · NIGHTLIFE · FEATURE</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 96px)", marginTop: 14 }}>
          Leon Thomas.
        </h1>
        <p className="so-micro mt-3">MUTTS DON'T HEEL AFTERPARTY · VICE SEATTLE · PHOTOS BY HANA HONG</p>
        <hr className="so-rule mt-6" />

        {/* Hero */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4 / 3",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid var(--color-sepia)",
            marginTop: 26,
            background: "#0e0d0b",
          }}
        >
          <img
            src="/assets/campaigns/leon-thomas/night-02.jpg"
            alt="Leon Thomas at the afterparty"
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
          />
        </div>

        {/* The story — one chapter at a time, tap to advance */}
        <div style={{ marginTop: 44 }}>
          <div
            style={{
              border: "1px solid var(--color-sepia)",
              borderRadius: 22,
              background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
              padding: "26px 26px 22px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
              <p className="so-micro">THE STORY — LEON THOMAS × VICE SEATTLE</p>
              <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
                {step + 1} / 5 · TAP THE BOX FOR THE NEXT
              </p>
            </div>

            <button
              type="button"
              onClick={() => setStep((s) => (s + 1) % CHAPTERS.length)}
              style={{
                width: "100%",
                display: "block",
                textAlign: "left",
                background: "none",
                border: 0,
                borderTop: "1px solid var(--color-sepia)",
                padding: "18px 2px 12px",
                cursor: "pointer",
                color: "inherit",
                font: "inherit",
              }}
            >
              <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}>
                {c.t}
              </p>
              <p key={step} className="so-chapter-fade" style={{ margin: "10px 0 0", lineHeight: 1.78, maxWidth: "72ch" }}>
                {c.d}
              </p>
              <span style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14 }}>
                {CHAPTERS.map((_, d) => (
                  <span
                    key={d}
                    aria-hidden
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: 999,
                      background: d === step ? "var(--color-verm)" : "var(--color-sepia)",
                      display: "inline-block",
                    }}
                  />
                ))}
                <span className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.14em", marginLeft: 6 }}>
                  TAP FOR THE NEXT →
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* The supporters — everyone the night lifted */}
        <div style={{ marginTop: 48 }}>
          <p className="so-micro">THE SUPPORTERS</p>
          <div style={{ marginTop: 6, display: "grid", gap: 0, maxWidth: "62ch" }}>
            {[
              { t: "LEON THOMAS", d: "The artist — Grammy-winning R&B, the Mutts Don't Heel Tour, the afterparty he pulled up to. The work exists because the moment exists: he shows up, the night happens, the camera is there." },
              { t: "DUBSEA", d: "The Seattle culture publication that covered the scene and put the story out — 'Leon Thomas Makes Special Appearance at VICE for Tour Afterparty,' photos credited to Hana Hong. Contribution: we helped them post and make content for the Leon Thomas piece — the frames, the cutdowns." },
              { t: "VICE SEATTLE", d: "The Capitol Hill club that hosted the official afterparty — 1532 Minor Ave. Contribution: Hana shot the night, so the club got the coverage and the feature got the photos." },
            ].map((s) => (
              <div key={s.t} style={{ borderTop: "1px solid var(--color-sepia)", padding: "16px 2px 14px" }}>
                <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}>
                  {s.t}
                </p>
                <p style={{ margin: "8px 0 0", lineHeight: 1.78 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The feature — the tell + a couple of frames */}
        <div style={{ marginTop: 48 }}>
          <p className="so-micro">THE FEATURE — THEM ON DUBSEA</p>
          <div className="so-case-cols" style={{ marginTop: 16, alignItems: "start" }}>
            <div style={{ maxWidth: "52ch" }}>
              <p style={{ margin: 0, lineHeight: 1.78 }}>
                They ran the night on Dubsea — the club, the artist, the
                photos credited to Hana, cut for the piece. A couple of
                the frames that made it in, straight from the set. Tap
                one to open the full feature.
              </p>
              <p className="so-micro" style={{ marginTop: 14, color: "var(--color-verm)", letterSpacing: "0.14em", fontWeight: 700 }}>
                THEY FEATURED ME — ON DUBSEA
              </p>
            </div>
            <div style={{ display: "grid", gap: 14 }}>
              {[
                { src: "/assets/campaigns/leon-thomas/lt-01.jpg", n: "FRAME 01" },
                { src: "/assets/campaigns/leon-thomas/lt-02.jpg", n: "FRAME 02" },
              ].map((f) => (
                <a
                  key={f.src}
                  href="https://www.dubsea.com/music/leon-thomas-makes-special-appearance-at-vice-seattle-for-tour-afterparty"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "block",
                    background: "#ffffff",
                    border: "1px solid var(--color-sepia)",
                    borderRadius: 16,
                    padding: 10,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img
                    src={f.src}
                    alt={`Leon Thomas — frame from the Dubsea feature`}
                    loading="lazy"
                    style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", display: "block", borderRadius: 8 }}
                  />
                  <p className="so-micro" style={{ margin: "8px 2px 0", color: "var(--color-stone)", letterSpacing: "0.14em" }}>
                    {f.n} · BY HANA
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* The attract line */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">IF THAT'S YOUR WORLD</p>
          <p style={{ marginTop: 12, lineHeight: 1.78 }}>
            One celebrity night lifts everyone: the club gets promoted, the
            publication gets content, the artist gets coverage. If you're a
            club that wants pictures and promotion, or a brand that does
            culture content — this is what that looks like.
          </p>
        </div>

        {/* Links */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro" style={{ textAlign: "center" }}>THE FEATURE & THE PLAYERS</p>
          <div className="mt-3" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 26px", maxWidth: 640, margin: "0 auto" }}>
            <a
              className="so-link-jump"
              href="https://www.dubsea.com/music/leon-thomas-makes-special-appearance-at-vice-seattle-for-tour-afterparty"
              target="_blank"
              rel="noreferrer"
            >
              DUBSEA FEATURE →
            </a>
            <a className="so-link-jump" href="https://www.viceseattle.com/" target="_blank" rel="noreferrer">
              VICE SEATTLE →
            </a>
            <a className="so-link-jump" href="https://www.instagram.com/viceseattle/" target="_blank" rel="noreferrer">
              @VICESEATTLE →
            </a>
            <a className="so-link-jump" href="https://www.instagram.com/leonthomas/" target="_blank" rel="noreferrer">
              @LEONTHOMAS →
            </a>
            <a className="so-link-jump" href="https://www.leonthomas.com/" target="_blank" rel="noreferrer">
              LEONTHOMAS.COM →
            </a>
          </div>
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