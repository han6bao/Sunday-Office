import { createFileRoute } from "@tanstack/react-router";
import { CaseBookingCta } from "../../sunday/services";
import type { CSSProperties } from "react";

export const Route = createFileRoute("/campaigns/the-issue")({
  component: TheIssuePage,
});

const FEED: { img: string; code: string; note: string }[] = [
  { img: "/assets/campaigns/the-issue/ti-01.jpg", code: "DW0YvMIlJMD", note: "POST · FROM THE CITY OF SEA" },
  { img: "/assets/campaigns/the-issue/ti-02.jpg", code: "DW0XD6rjoZB", note: "POST · SFX" },
  { img: "/assets/campaigns/the-issue/ti-03.jpg", code: "DVcbQ13ERgv", note: "POST · CAROUSEL" },
  { img: "/assets/campaigns/the-issue/ti-04.jpg", code: "DVFw9OKlB0a", note: "POST · CAROUSEL" },
  { img: "/assets/campaigns/the-issue/ti-05.jpg", code: "DU44MROESaT", note: "POST · CAROUSEL" },
  { img: "/assets/campaigns/the-issue/ti-06.jpg", code: "DUg2LEokpyU", note: "POST · CAROUSEL" },
];

const BLACK: CSSProperties = {
  background: "#0e0e10",
  aspectRatio: "4 / 3",
  borderRadius: 14,
  border: "1px solid rgba(236, 231, 221, 0.12)",
};

function TheIssuePage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">FASHION · INTERVIEWS · CULTURE</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 96px)", marginTop: 14 }}>
          The Issue.
        </h1>
        <p className="so-micro mt-3">@THEISSUE__ · "SEATTLE'S FASHION POSTCARD" · INDEPENDENT FASHION PUBLICATION</p>
        <hr className="so-rule mt-6" />

        {/* What it is */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE PUBLICATION</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            A fashion page that shows what Seattle actually wears — and who
            makes it. <strong>The Issue</strong> showcases{" "}
            <strong>primarily Seattle fashion</strong>: local designers,
            brands, fits and movements, published as moving image — "sent
            from the city of sea." Its look is a love letter to the city: a
            postage-stamp mark, signal red and cream, the Space Needle in the
            corner.
          </p>
        </div>

        {/* Interviews */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE INTERVIEWS</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            The Issue doesn't just showcase the clothes — it interviews the
            people behind them. Designers, makers, stylists, characters of the
            Seattle scene, in conversation. Interviews for the culture: the
            story behind the stitch, the fits, the faces that keep Seattle
            fashion original.
          </p>
        </div>

        {/* Hana's contribution */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">HANA'S CONTRIBUTION</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            Hana works on <strong>the creative image side</strong> of The
            Issue — the visual identity behind the frame — and handles{" "}
            <strong>filming</strong> and <strong>color correcting</strong>,
            keeping every post on the same grade: signal red, cream, Seattle
            light.
          </p>
        </div>

        {/* Links */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro" style={{ textAlign: "center" }}>VISIT THE ISSUE</p>
          <div className="mt-3" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 26px", maxWidth: 640, margin: "0 auto" }}>
            <a className="so-link-jump" href="https://theissue.higgsfield.app" target="_blank" rel="noreferrer">
              THE WEBSITE →
            </a>
            <a className="so-link-jump" href="https://www.instagram.com/theissue__/" target="_blank" rel="noreferrer">
              @THEISSUE__ ON INSTAGRAM →
            </a>
          </div>
        </div>

        {/* From the feed */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">FROM THE FEED</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: 8 }}>
            {FEED.map((f) => (
              <a key={f.code} href={`https://www.instagram.com/p/${f.code}/`} target="_blank" rel="noreferrer">
                <img
                  src={f.img}
                  alt={`The Issue — Instagram post ${f.code}`}
                  loading="lazy"
                  style={{ width: "100%", display: "block", aspectRatio: "4 / 3", objectFit: "cover", borderRadius: 14 }}
                />
                <p className="so-micro" style={{ marginTop: 8, textDecoration: "underline", textUnderlineOffset: 3 }}>
                  {f.note} →
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Hana's frames */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE FRAMES — HANA'S ISSUE FOOTAGE · TO BE PLACED</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginTop: 8 }}>
            {[1, 2, 3, 4].map((n) => (
              <div key={n}>
                <div style={BLACK} />
                <p className="so-micro" style={{ marginTop: 10 }}>
                  FRAME {String(n).padStart(2, "0")} · TO BE PLACED
                </p>
              </div>
            ))}
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