import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CaseBookingCta } from "../../sunday/services";

export const Route = createFileRoute("/campaigns/green-grillz")({
  component: GreenGrillzPage,
});

const PHOTOS = [
  { src: "/assets/campaigns/green-grillz/gg01.jpg", cap: "Green set · shot 01" },
  { src: "/assets/campaigns/green-grillz/gg02.jpg", cap: "Green set · shot 02" },
  { src: "/assets/campaigns/green-grillz/gg03.jpg", cap: "Green set · shot 03" },
  { src: "/assets/campaigns/green-grillz/gg04.jpg", cap: "Green set · shot 04" },
];

const CELEB = [
  {
    t: "WHO HE IS",
    d: "Nine Vicious — Treyvion Echols, born 2002 in Athens, Georgia, raised in Atlanta. He went from SoundCloud uploads in the late 2010s to one of the underground's fastest-rising names, breaking through in 2024 with \"U Fancy?\".",
  },
  {
    t: "THE CO-SIGN + THE RUN",
    d: "Young Thug came out and quoted \"U Fancy?\" on X — the co-sign everyone waits for — and Nine joined the YSL roster. He's been prolific since: Studio Addict, Tumblr Music, For Nothing, Emotions, the Sedition mixtape — with Pitchfork comparing his early work to Young Thug and Ken Carson, and a feature on Kanye West's Bully.",
  },
  {
    t: "THE FACE",
    d: "In the underground, the face is the brand. Before the music gets a chance to speak, people see him — the grillz, the look, the posture — and decide if they're in. That's why these pictures matter. The sound sells the song, but the image sells the artist.",
  },
];

const WHY = [
  {
    t: "THE UNDERGROUND",
    d: "The underground rap scene runs on momentum and visuals. No big campaign budget — just moments made to feel like events. A picture that makes someone stop, save, repost, set as their profile — that's the machine.",
  },
  {
    t: "THE VISIBILITY",
    d: "Good visuals build connections you can't buy: follows, features, collabs, call-outs. One strong image travels further than a press release — it gets picked up, reposted, made into avatars. Visibility is the currency.",
  },
  {
    t: "THE FACE OF PURPOSE",
    d: "And it doesn't need to be a celebrity. The same logic works for anyone with a face and a purpose — an artist, a founder, a business with something to say. Make yourself look like what you're building, and the right people find you.",
  },
];

function GreenGrillzPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [celeb, setCeleb] = useState(0);
  const [why, setWhy] = useState(0);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">CAMPAIGN · CELEBRITY · CUSTOM JEWELRY</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 96px)", marginTop: 14 }}>
          Green Grillz.
        </h1>
        <p className="so-micro mt-3">NINE VICIOUS — CUSTOM GRILLZ · GRILLZ PHOTOS BY MARCUS ADAM @MAARCUSADAM</p>
        <hr className="so-rule mt-6" />

        {/* The celebrity — tap through */}
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
            <p className="so-micro">THE CELEBRITY</p>
            <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
              {celeb + 1} / 3 · TAP THE BOX FOR THE NEXT
            </p>
          </div>
          <button
            type="button"
            onClick={() => setCeleb((s) => (s + 1) % CELEB.length)}
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
              {CELEB[celeb].t}
            </p>
            <p key={celeb} className="so-chapter-fade" style={{ margin: "8px 0 0", lineHeight: 1.78, maxWidth: "62ch" }}>
              {CELEB[celeb].d}
            </p>
            <span style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 12 }}>
              {CELEB.map((_, d) => (
                <span
                  key={d}
                  aria-hidden
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: d === celeb ? "var(--color-verm)" : "var(--color-sepia)",
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

        {/* The jeweler */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">THE JEWELER</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            <strong>Marcus Adam</strong> — <strong>@MAARCUSADAM</strong> on
            Instagram — is the jeweler behind the set. A private jeweler
            and celebrity jeweler working custom pieces for artists, his
            post of the green grillz did real numbers of its own.
          </p>
        </div>

        {/* The traction */}
        <div style={{ marginTop: 48 }}>
          <p className="so-micro">THE TRACTION — REAL NUMBERS</p>
          <div className="so-cases" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", marginTop: 18 }}>
            <div style={{ border: "1px solid var(--color-sepia)", borderRadius: 16, padding: "22px", background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)" }}>
              <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.14em", fontWeight: 700 }}>
                THE JEWELER'S POST
              </p>
              <div style={{ display: "flex", gap: 22, flexWrap: "wrap", marginTop: 14 }}>
                <div>
                  <p className="so-serif" style={{ fontSize: 28, margin: 0 }}>6K</p>
                  <p className="so-micro" style={{ color: "var(--color-stone)", marginTop: 4 }}>LIKES</p>
                </div>
                <div>
                  <p className="so-serif" style={{ fontSize: 28, margin: 0 }}>389</p>
                  <p className="so-micro" style={{ color: "var(--color-stone)", marginTop: 4 }}>REPOSTS</p>
                </div>
                <div>
                  <p className="so-serif" style={{ fontSize: 28, margin: 0 }}>355</p>
                  <p className="so-micro" style={{ color: "var(--color-stone)", marginTop: 4 }}>SAVES</p>
                </div>
              </div>
            </div>
            <div style={{ border: "1px solid var(--color-sepia)", borderRadius: 16, padding: "22px", background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)" }}>
              <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.14em", fontWeight: 700 }}>
                THE PHOTOGRAPHER'S POST
              </p>
              <div style={{ display: "flex", gap: 22, flexWrap: "wrap", marginTop: 14 }}>
                <div>
                  <p className="so-serif" style={{ fontSize: 28, margin: 0 }}>3.5K+</p>
                  <p className="so-micro" style={{ color: "var(--color-stone)", marginTop: 4 }}>LIKES</p>
                </div>
                <div>
                  <p className="so-serif" style={{ fontSize: 28, margin: 0 }}>4,116</p>
                  <p className="so-micro" style={{ color: "var(--color-stone)", marginTop: 4 }}>REPOSTS</p>
                </div>
                <div>
                  <p className="so-serif" style={{ fontSize: 28, margin: 0 }}>635</p>
                  <p className="so-micro" style={{ color: "var(--color-stone)", marginTop: 4 }}>SHARES</p>
                </div>
              </div>
              <p className="so-micro" style={{ marginTop: 12, color: "var(--color-stone)" }}>
                35K VIEWS · 229 PROFILE VISITS · 70.4% FEED REACH — MADE THE DISCOVERY PAGE
              </p>
            </div>
            <div style={{ border: "1px solid var(--color-sepia)", borderRadius: 16, padding: "22px", background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)" }}>
              <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.14em", fontWeight: 700 }}>
                THE PROFILE PICTURES
              </p>
              <p style={{ marginTop: 14, lineHeight: 1.78 }}>
                The wildest part: a lot of people started using these
                photos as their profile pictures on Twitter and
                everywhere else. The image became the avatar.
              </p>
            </div>
          </div>
        </div>

        {/* Why it matters — tap through */}
        <div
          style={{
            marginTop: 48,
            border: "1px solid var(--color-sepia)",
            borderRadius: 22,
            background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
            padding: "24px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
            <p className="so-micro">WHY IT MATTERS</p>
            <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
              {why + 1} / 3 · TAP THE BOX FOR THE NEXT
            </p>
          </div>
          <button
            type="button"
            onClick={() => setWhy((s) => (s + 1) % WHY.length)}
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
              {WHY[why].t}
            </p>
            <p key={why} className="so-chapter-fade" style={{ margin: "8px 0 0", lineHeight: 1.78, maxWidth: "62ch" }}>
              {WHY[why].d}
            </p>
            <span style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 12 }}>
              {WHY.map((_, d) => (
                <span
                  key={d}
                  aria-hidden
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: d === why ? "var(--color-verm)" : "var(--color-sepia)",
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

        {/* The set — jeweler's photos */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE SET — 4 SHOTS · GRILLZ PHOTOS BY MARCUS ADAM @MAARCUSADAM</p>

          {/* The hero — the jeweler's picture, big */}
          <button
            type="button"
            onClick={() => setOpen(0)}
            aria-label={PHOTOS[0].cap}
            style={{ display: "block", width: "100%", background: "none", border: 0, padding: 0, cursor: "zoom-in", marginTop: 18 }}
          >
            <img
              src={PHOTOS[0].src}
              alt={PHOTOS[0].cap}
              loading="lazy"
              style={{ width: "100%", display: "block", borderRadius: 16 }}
            />
          </button>
          <p className="so-micro" style={{ marginTop: 8, color: "var(--color-stone)", letterSpacing: "0.14em" }}>
            THE HERO — GREEN SET · PHOTO BY MARCUS ADAM @MAARCUSADAM
          </p>

          {/* The rest — smaller */}
          <div className="so-photo-grid" style={{ marginTop: 28 }}>
            {PHOTOS.slice(1).map((ph, i) => (
              <button
                key={ph.src}
                className="so-photo-cell"
                type="button"
                onClick={() => setOpen(i + 1)}
                aria-label={ph.cap}
              >
                <img src={ph.src} alt={ph.cap} loading="lazy" />
                <span className="so-photo-cap">
                  {String(i + 2).padStart(2, "0")} · {ph.cap}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro" style={{ textAlign: "center" }}>THE PLAYERS</p>
          <div className="mt-3" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "14px 30px", maxWidth: 640, margin: "0 auto" }}>
            <a className="so-link-jump" href="https://www.instagram.com/maarcusadam/" target="_blank" rel="noreferrer">
              @MAARCUSADAM — THE JEWELER →
            </a>
            <a className="so-link-jump" href="https://www.instagram.com/ninevicious/" target="_blank" rel="noreferrer">
              @NINEVICIOUS →
            </a>
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