import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { useState } from "react";
import { CaseBookingCta } from "../../sunday/services";

export const Route = createFileRoute("/campaigns/leon-thomas")({
  head: () => seoHead("/campaigns/leon-thomas"),
  component: LeonThomasPage,
});

const CHAPTERS: { t: string; d: string }[] = [
  {
    t: "THE ARTIST",
    d: "Leon Thomas is a Grammy-winning R&B artist. A lot of people first knew him as Andre Harris, the singer on Victorious. Right now he's in his Mutts Don't Heel era, with the HEEL deluxe edition out, and he's selling out venues across the country.",
  },
  {
    t: "THE NIGHT",
    d: "After his Mutts Don't Heel Tour stop at The Showbox, Leon kept going. He pulled up to Vice Seattle (Capitol Hill, 1532 Minor Ave) for the official afterparty and performed his biggest songs into the early morning, the Victorious theme included.",
  },
  {
    t: "THE FEATURE",
    d: "Dubsea wrote it up on December 16, 2025: \"Leon Thomas Makes Special Appearance at VICE for 'Mutts Don't Heel' Tour Afterparty,\" with photos credited to Hana Hong. One article promoted the artist's tour, the club's calendar and the Seattle music scene around them.",
  },
  {
    t: "THE NICK LINK",
    d: "Seattle keeps showing up in Leon's story. He played the Victorious theme that night, from the show that made him famous. In the Victorious × iCarly crossover special, \"iParty with Victorious,\" the iCarly crew goes to a party Andre throws in Seattle. Years later, he's in the same city at another party.",
  },
  {
    t: "HANA'S ROLE",
    d: "I shot the night: the afterparty photos, the promo shots, and the photos used in the Dubsea write-up and on the club's page.",
  },
];

function LeonThomasPage() {
  const [step, setStep] = useState(0);
  const c = CHAPTERS[step];
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
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
              <p className="so-micro">THE STORY · LEON THOMAS × VICE SEATTLE</p>
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
              <p key={step} className="so-chapter-fade" style={{ margin: "10px 0 0", lineHeight: 1.55, maxWidth: "72ch" }}>
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
          <p className="so-micro">WHO WAS INVOLVED</p>
          <div style={{ marginTop: 6, display: "grid", gap: 0, maxWidth: "62ch" }}>
            {[
              { t: "LEON THOMAS", d: "The artist. Grammy-winning R&B, in town on the Mutts Don't Heel Tour, and he came to the afterparty. I was there with the camera." },
              { t: "DUBSEA", d: "The Seattle culture site that wrote up the night in 'Leon Thomas Makes Special Appearance at VICE for Tour Afterparty,' using my photos, credited to Hana Hong." },
              { t: "VICE SEATTLE", d: "The Capitol Hill club at 1532 Minor Ave that hosted the official afterparty. I shot the night, so the club had coverage and the write-up had photos." },
            ].map((s) => (
              <div key={s.t} style={{ borderTop: "1px solid var(--color-sepia)", padding: "16px 2px 14px" }}>
                <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}>
                  {s.t}
                </p>
                <p style={{ margin: "8px 0 0", lineHeight: 1.55 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The feature — the tell + a couple of frames */}
        <div style={{ marginTop: 48 }}>
          <p className="so-micro">THE WRITE-UP</p>
          <div className="so-case-cols" style={{ marginTop: 16, alignItems: "start" }}>
            <div style={{ maxWidth: "52ch" }}>
              <p style={{ margin: 0, lineHeight: 1.55 }}>
                Dubsea wrote up the night, covering the club and the
                artist, with my photos credited. Here are two of the
                photos they used. Tap one to read the full article.
              </p>
              <p className="so-micro" style={{ marginTop: 14, color: "var(--color-verm)", letterSpacing: "0.14em", fontWeight: 700 }}>
                PHOTOS CREDITED TO HANA HONG
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
                    alt={`Leon Thomas, photo from the Dubsea feature`}
                    loading="lazy"
                    style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", display: "block", borderRadius: 8 }}
                  />
                  <p className="so-micro" style={{ margin: "8px 2px 0", color: "#6f6474", letterSpacing: "0.14em" }}>
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
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            One good night helps everyone. The club gets promoted, the artist gets coverage, and the photos keep getting shared. If you run a venue or a brand and want photos like these, let's talk.
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
              READ THE WRITE-UP →
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