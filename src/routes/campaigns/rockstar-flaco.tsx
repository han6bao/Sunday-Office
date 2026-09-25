import { createFileRoute } from "@tanstack/react-router";
import { CaseBookingCta } from "../../sunday/services";
import type { CSSProperties } from "react";

export const Route = createFileRoute("/campaigns/rockstar-flaco")({
  component: RockstarFlacoPage,
});

const POST = [
  { img: "/assets/campaigns/rockstar-flaco/rf-01.jpg", note: "POST · 01" },
  { img: "/assets/campaigns/rockstar-flaco/rf-02.jpg", note: "POST · 02" },
  { img: "/assets/campaigns/rockstar-flaco/rf-03.jpg", note: "POST · 03" },
  { img: "/assets/campaigns/rockstar-flaco/rf-04.jpg", note: "POST · 04" },
  { img: "/assets/campaigns/rockstar-flaco/rf-05.jpg", note: "POST · 05" },
];

const BLACK: CSSProperties = {
  background: "#0e0e10",
  aspectRatio: "4 / 3",
  borderRadius: 14,
  border: "1px solid rgba(236, 231, 221, 0.12)",
  display: "block",
};

function RockstarFlacoPage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">MUSIC · SHOOT · COLLABORATION</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 92px)", marginTop: 14 }}>
          Rockstar Flaco.
        </h1>
        <p className="so-micro mt-3">@ROCKSTAR.FLACO · SEATTLE · PHOTOS BY HANA · FACILITATED WITH SONIQ REIGN × REELCLIP</p>
        <hr className="so-rule mt-6" />

        {/* The artist */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE ARTIST</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            <strong>Rockstar Flaco</strong> (@rockstar.flaco) — an artist
            running in the same creative circle as <strong>Soniq Reign</strong>{" "}
            and <strong>ReelClip</strong>: Seattle, loud, and always in
            motion. For this one, the crew made the room happen and Hana
            handled the camera — the shoot lives on his page as a carousel
            post, and more of it is landing here soon.
          </p>
        </div>

        {/* The collaboration */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE SET-UP — SONIQ REIGN × REELCLIP</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            The room was made by the family: <strong>Soniq Reign</strong>{" "}
            and <strong>ReelClip</strong> facilitated the shoot — the
            connection, the coordination, the set — bringing the artist
            and the vision together. And the camera work? That's Hana's.{" "}
            <strong>She shot it all</strong> — one artist, the crew behind
            the room, and the frames on this page straight from her
            camera.
          </p>
          <div className="mt-3" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 26px", maxWidth: 640, margin: "0 auto" }}>
            <a className="so-link-jump" href="/campaigns/soniqreign">
              SONIQ REIGN →
            </a>
            <a className="so-link-jump" href="/campaigns/reelclip">
              REELCLIP →
            </a>
          </div>
        </div>

        {/* The shoot */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro">THE SHOOT — FRAMES LANDING SOON</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: 8 }}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n}>
                <div style={BLACK} />
                <p className="so-micro" style={{ marginTop: 10 }}>
                  FRAME {String(n).padStart(2, "0")} · TO BE PLACED
                </p>
              </div>
            ))}
          </div>
          <p className="so-micro mt-4" style={{ color: "var(--color-stone)" }}>
            MORE FROM THE SET ON THE WAY — THE FULL SHOOT FILLS THESE SLOTS
          </p>
        </div>

        {/* From the post */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">FROM THE POST</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14, marginTop: 12 }}>
            {POST.map((f) => (
              <a
                key={f.img}
                href="https://www.instagram.com/p/DYljNySlISB/"
                target="_blank"
                rel="noreferrer"
                style={{ display: "block" }}
              >
                <img
                  src={f.img}
                  alt={`Rockstar Flaco — post ${f.note}`}
                  loading="lazy"
                  style={{ width: "100%", display: "block", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 12 }}
                />
                <p className="so-micro" style={{ marginTop: 8, textDecoration: "underline", textUnderlineOffset: 3 }}>
                  {f.note} →
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro" style={{ textAlign: "center" }}>VISIT ROCKSTAR FLACO</p>
          <div className="mt-3" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 26px", maxWidth: 640, margin: "0 auto" }}>
            <a className="so-link-jump" href="https://www.instagram.com/rockstar.flaco/" target="_blank" rel="noreferrer">
              @ROCKSTAR.FLACO →
            </a>
            <a className="so-link-jump" href="https://www.instagram.com/p/DYljNySlISB/" target="_blank" rel="noreferrer">
              THE POST →
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