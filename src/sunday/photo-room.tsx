import { SiteBar } from "./site-bar";
import { SiteFooter } from "./site-footer";
/* One layout for the four photography rooms (People, Brands, Events,
   Creative): a short intro, a grid of Hana's own photos that each open
   their case study, and a way to book. Only photos credited to Hana. */

export type RoomPhoto = { src: string; h: string; cap: string };

export function PhotoRoom({
  label,
  title,
  intro,
  photos,
}: {
  label: string;
  title: string;
  intro: string;
  photos: RoomPhoto[];
}) {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/photography" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Photography
        </a>

        <p className="so-micro so-micro-red">PHOTOGRAPHY · {label}</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(44px, 8vw, 96px)", marginTop: 14 }}>
          {title}
        </h1>
        <p style={{ marginTop: 18, maxWidth: "52ch", lineHeight: 1.55, color: "var(--color-print)" }}>{intro}</p>

        <div className="so-room-grid">
          {photos.map((p) => (
            <a key={p.src} href={p.h} className="so-room-photo">
              <img src={p.src} alt={p.cap} loading="lazy" />
              <span className="so-room-photo-cap">
                {p.cap} <span aria-hidden>→</span>
              </span>
            </a>
          ))}
        </div>

        <div className="so-room-book">
          <p className="so-serif" style={{ fontSize: "clamp(22px, 2.6vw, 30px)", margin: 0 }}>
            Have something to shoot?
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="/#inquiry" className="so-btn">
              Start a project
            </a>
            <a href="/photography" className="so-btn so-btn-ghost">
              All photography
            </a>
          </div>
        </div>

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
