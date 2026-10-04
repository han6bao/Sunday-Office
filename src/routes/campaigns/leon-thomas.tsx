import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { CaseBookingCta } from "../../sunday/services";
import { CaseFacts, CaseRead } from "../../sunday/case-kit";

export const Route = createFileRoute("/campaigns/leon-thomas")({
  head: () => seoHead("/campaigns/leon-thomas"),
  component: LeonThomasPage,
});

const CHAPTERS: { t: string; d: string }[] = [
  {
    t: "THE ARTIST",
    d: "Leon Thomas is a Grammy-winning R&B artist. Many people first knew him as Andre Harris, the singer on Victorious. He was touring on Mutts Don't Heel, with the HEEL deluxe edition out.",
  },
  {
    t: "THE NIGHT",
    d: "After his Mutts Don't Heel Tour stop at The Showbox, Leon went to Vice Seattle (Capitol Hill, 1532 Minor Ave) for the official afterparty. He performed his biggest songs there into the early morning, including the Victorious theme.",
  },
  {
    t: "THE SEATTLE LINK",
    d: "In the Victorious and iCarly crossover, \"iParty with Victorious,\" the iCarly crew goes to a party Andre throws in Seattle. Years later, Leon played that show's theme song at a party in Seattle.",
  },
  {
    t: "MY ROLE",
    d: "I photographed the night: the afterparty, the performance and the promo shots.",
  },
];

function LeonThomasPage() {
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
        <CaseFacts
          items={[
            { k: "FOR", v: "Leon Thomas, Grammy-winning R&B artist, and Vice Seattle" },
            { k: "WHAT I DID", v: "Afterparty photos, performance photos, promo shots" },
            {
              k: "RESULT",
              v: "My photos ran in a published write-up of the night",
              h: "https://www.dubsea.com/music/leon-thomas-makes-special-appearance-at-vice-seattle-for-tour-afterparty",
            },
          ]}
        />
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

        {/* The story */}
        <div style={{ marginTop: 44 }}>
          <CaseRead label="THE STORY · LEON THOMAS × VICE SEATTLE" items={CHAPTERS.map((x) => ({ t: x.t, d: x.d }))} />
        </div>

        {/* Who was involved */}
        <div style={{ marginTop: 48 }}>
          <p className="so-micro">WHO WAS INVOLVED</p>
          <div style={{ marginTop: 6, display: "grid", gap: 0, maxWidth: "62ch" }}>
            {[
              { t: "LEON THOMAS", d: "The artist. He was in town on the Mutts Don't Heel Tour and came to the afterparty to perform." },
              { t: "VICE SEATTLE", d: "The Capitol Hill club at 1532 Minor Ave that hosted the official afterparty. I photographed the night for them." },
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

        {/* Frames from the night */}
        <div style={{ marginTop: 48 }}>
          <p className="so-micro">FROM THE NIGHT</p>
          <div className="so-case-cols" style={{ marginTop: 16, alignItems: "start" }}>
            <div style={{ maxWidth: "52ch" }}>
              <p style={{ margin: 0, lineHeight: 1.55 }}>
                Dubsea wrote up the night and used my photos, credited to Hana Hong.
                These are two of them. Tap one to read the article.
              </p>
              <p className="so-micro" style={{ marginTop: 14, color: "var(--color-verm)", letterSpacing: "0.14em", fontWeight: 700 }}>
                PHOTOS BY HANA HONG
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
                    alt="Leon Thomas at the Vice Seattle afterparty"
                    loading="lazy"
                    style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", display: "block", borderRadius: 8 }}
                  />
                  <p className="so-micro" style={{ margin: "8px 2px 0", color: "#6f6474", letterSpacing: "0.14em" }}>
                    {f.n}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* For venues */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">FOR VENUES AND BRANDS</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            Photos from a night like this get used by the club, the artist and the press. If you run a venue or a brand and want your nights covered, let's talk.
          </p>
        </div>

        {/* Links */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro" style={{ textAlign: "center" }}>LINKS</p>
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