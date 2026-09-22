import { createFileRoute } from "@tanstack/react-router";
import { CaseBookingCta } from "../../sunday/services";
import { useState } from "react";

export const Route = createFileRoute("/campaigns/still-different")({
  component: StillDifferentPage,
});

const PHOTOS = [
  { src: "/assets/campaigns/still-different/sd-01.jpg", cap: "the light" },
  { src: "/assets/campaigns/still-different/sd-02.jpg", cap: "the couch" },
  { src: "/assets/campaigns/still-different/sd-03.jpg", cap: "the rack, the TV" },
  { src: "/assets/campaigns/still-different/sd-04.jpg", cap: "shopping the rack" },
  { src: "/assets/campaigns/still-different/sd-05.jpg", cap: "ETC · TACOMA" },
  { src: "/assets/campaigns/still-different/sd-06.jpg", cap: "mic in hand" },
];

function StillDifferentPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">MUSIC · GEAR · SHOOT</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 92px)", marginTop: 14 }}>
          Still Different.
        </h1>
        <p className="so-micro mt-3">IN ETC TACOMA · PHOTOS BY HANA</p>
        <hr className="so-rule mt-6" />

        {/* The artist */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE ARTIST</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            <strong>Still Different</strong> is an MC with a name that runs
            deep in the 206 hip-hop scene — he's been carrying it since his
            first project in 2013, and he's never swapped it for the easy
            one. Live performance is his home turf: straight to the mic,
            no frills, the way the circuit out here likes it.
          </p>
        </div>

        {/* The gear */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE GEAR — ETC TACOMA</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            For this one he's rocking <strong>ETC</strong> — a Tacoma
            streetwear label that wears its hometown on its chest, literally:
            the jacket says <strong>ETC · 1996 OFFICIAL DREAM</strong> on
            the sleeve and spells <strong>TACOMA</strong> across the front,
            with the big red C on the back. This is the depth of the
            city's scene: no borrowed logos, no LA labels — the gear is
            made for T-Town, by T-Town, and the artist shows up in it.
          </p>
        </div>

        {/* Tacoma */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">WHY TACOMA MATTERS</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            Tacoma is the underdog city down the road from Seattle — a port
            town that has always had to build its own thing while the big
            city got the spotlight. Out of that came a real scene: hip-hop,
            streetwear, DIY shows, artists grinding without anyone watching.
            The city on the jacket isn't a fashion statement — it's a
            hometown. Wearing TACOMA on your chest is the whole point.
          </p>
        </div>

        {/* The TV segment */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE TV SEGMENT — A SEPARATE THING</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            The same run brought a television-performance segment shot with{" "}
            <strong>ReelClip</strong> — one person, one camera — but
            that's its own story, filed on its own page. These frames are the other side of the
            visit: the artist, the gear, the room, straight from the camera.
          </p>
          <div className="mt-3">
            <a className="so-link-jump" href="/campaigns/reelclip">
              REELCLIP — TV PERFORMANCES →
            </a>
          </div>
        </div>

        {/* The shoot */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE SHOOT — PHOTOS BY HANA</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            White room, bright ceiling lights, a rack of tees and a vintage
            mic on a stand. He pointed at the fixture like it owed him
            something, sat the orange couch like he owned it, and the jacket
            did the rest. Six frames, no set dressing needed.
          </p>
        </div>

        {/* Frames */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE FRAMES — 6</p>
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