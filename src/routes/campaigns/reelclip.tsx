import { createFileRoute } from "@tanstack/react-router";
import { CaseBookingCta } from "../../sunday/services";
import type { CSSProperties } from "react";

export const Route = createFileRoute("/campaigns/reelclip")({
  component: ReelClipPage,
});

type ArtistCover = { src: string; credit?: string };

const ARTISTS: { name: string; note: string; cover?: ArtistCover; links: { label: string; url: string }[] }[] = [
  {
    name: "Saunjay",
    note: `Seattle popstar — "Virtual Popstar!" — making dreamy, melodic hip-hop out of the city.`,
    links: [
      { label: "SPOTIFY", url: "https://open.spotify.com/artist/0ZzLEWyqa58lQFuko9nAJA" },
      { label: "SOUNDCLOUD", url: "https://soundcloud.com/lilsaunjay" },
    ],
  },
  {
    name: "Tooley",
    note: `Drill-leaning Seattle artist; "Chauffeur" and more.`,
    links: [
      { label: "INSTAGRAM", url: "https://www.instagram.com/tooleymusic/" },
      { label: "LINKTREE", url: "https://linktr.ee/tooley" },
    ],
  },
  {
    name: "TB Nino",
    note: `Seattle-sampling flow with California cadence — "Winter in Seattle" to the TRENCHBABY era.`,
    cover: {
      src: "/assets/campaigns/reelclip/tbnino-cover.jpg",
      credit: "TRENCHBABY THE DELUXE — COVER BY HANA",
    },
    links: [
      { label: "TRENCHBABY THE DELUXE · SPOTIFY", url: "https://open.spotify.com/album/1puxHuMRqunIyh86eznHNC" },
      { label: "TB NINO — ARTIST PAGE", url: "https://open.spotify.com/artist/7ub6pc2PB7JRnKIu7FN0lC" },
    ],
  },
  {
    name: "3Way Heff",
    note: `Portland's "street rage" pioneer — 3 Real 4 the Industry, Sinsta.`,
    links: [
      { label: "SPOTIFY", url: "https://open.spotify.com/album/0lduoLMDTo408YrLlCaIOt" },
      { label: "SOUNDCLOUD", url: "https://soundcloud.com/heffsqd" },
    ],
  },
];

const BLACK: CSSProperties = {
  background: "#0e0e10",
  aspectRatio: "4 / 3",
  borderRadius: 14,
  border: "1px solid rgba(236, 231, 221, 0.12)",
  display: "block",
};

function ReelClipPage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">MUSIC · VIDEO · REELS</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 96px)", marginTop: 14 }}>
          ReelClip.
        </h1>
        <p className="so-micro mt-3">@REELCLIP.TV · SEATTLE · MUSIC-VIDEO & REEL VIDEOGRAPHER</p>
        <hr className="so-rule mt-6" />

        {/* The creator */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE CREATOR</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            <strong>ReelClip</strong> is a videographer — one person, one
            camera, pointed at the artist. He specializes in{" "}
            <strong>music videos</strong> and <strong>reels</strong>,{" "}
            supporting Seattle artists and the local scene — a polished,
            share-ready stage for rising voices. "Smile — you're on
            ReelClip."
          </p>
        </div>

        {/* The work */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE WORK</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            Music videos and reels built around the artist — visuals made to
            move: sharp cuts, strong frames, and a look that makes a Seattle
            artist feel like the main event. Short-form first, share-ready,
            and always in support of local talent.
          </p>
        </div>

        {/* Hana's contribution */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">HANA'S CONTRIBUTION</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            For the sets that needed a second eye, Hana helped with{" "}
            <strong>filming sets and locations</strong>. Her primary role was{" "}
            <strong>photography</strong> — one part behind-the-scenes of the
            performances themselves, and one part standard creative portraits
            for the artists to use across their pages, press and promotion.
          </p>
        </div>

        {/* The artists */}
        <div style={{ marginTop: 48 }}>
          <p className="so-micro">THE ARTISTS — SHOT & SUPPORTED</p>
          <div className="mt-4" style={{ display: "grid", gap: 18, maxWidth: 640 }}>
            {ARTISTS.map((a) => (
              <div
                key={a.name}
                style={{
                  borderBottom: "1px solid var(--color-line)",
                  paddingBottom: 14,
                }}
              >
                <div style={{ fontWeight: 600 }}>{a.name}</div>
                <p className="so-micro" style={{ marginTop: 4 }}>
                  {a.note}
                </p>
                {a.cover ? (
                  <div style={{ marginTop: 14 }}>
                    <img
                      src={a.cover.src}
                      alt={a.name}
                      loading="lazy"
                      style={{ width: "100%", maxWidth: 200, display: "block", borderRadius: 12, aspectRatio: "1 / 1", objectFit: "cover" }}
                    />
                    {a.cover.credit ? (
                      <p className="so-micro" style={{ marginTop: 8, color: "var(--color-verm)", letterSpacing: "0.12em" }}>
                        {a.cover.credit}
                      </p>
                    ) : null}
                  </div>
                ) : null}
                <div className="mt-3" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  {a.links.map((l) => (
                    <a
                      key={l.url}
                      className="so-link-jump"
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <p className="so-micro">
              … AND MORE — LINKED AS THEY COME THROUGH THE FRAME
            </p>
          </div>
        </div>

        {/* Frames placeholder */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE FRAMES — BTS & PORTRAITS BY HANA · TO BE PLACED</p>
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