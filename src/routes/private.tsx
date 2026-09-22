import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/private")({
  component: PrivateRoom,
});

/* The staff key — change it any time. */
const PASSWORD = "sundayoffice";

const FILES: { t: string; h: string }[] = [
  { t: "Angie Tiara Beauty", h: "/campaigns/angie-tiara-beauty" },
  { t: "Avery Tien", h: "/campaigns/avery-tien" },
  { t: "Bar Bistro", h: "/campaigns/bar-bistro" },
  { t: "Big Baby Gucci", h: "/campaigns/big-baby-gucci" },
  { t: "Chitos International", h: "/campaigns/chitos" },
  { t: "Chutneys", h: "/campaigns/chutneys" },
  { t: "Iconic 2000s Boat Party", h: "/campaigns/dj-prashant-hiyu" },
  { t: "DJ Wzrd", h: "/campaigns/dj-wzrd" },
  { t: "Essential Brows Studio", h: "/campaigns/essential-brows-studio" },
  { t: "Exhibition", h: "/campaigns/exhibition" },
  { t: "Green Grillz · Nine Vicious", h: "/campaigns/green-grillz" },
  { t: "Highway", h: "/campaigns/highway" },
  { t: "Jaydyn F.", h: "/campaigns/jaydyn-f" },
  { t: "Jazmin Events", h: "/campaigns/jazmins-events" },
  { t: "Kenshi Killz", h: "/campaigns/kenshi-killz" },
  { t: "Leon Thomas", h: "/campaigns/leon-thomas" },
  { t: "Itz Pz.", h: "/campaigns/paradice" },
  { t: "ReelClip", h: "/campaigns/reelclip" },
  { t: "Rockstar Flaco", h: "/campaigns/rockstar-flaco" },
  { t: "Soniq Reign", h: "/campaigns/soniqreign" },
  { t: "Still Different", h: "/campaigns/still-different" },
  { t: "The Issue", h: "/campaigns/the-issue" },
];

const ROOMS: { t: string; h: string }[] = [
  { t: "The Archive", h: "/archive" },
  { t: "Photography", h: "/photography" },
  { t: "Websites", h: "/websites" },
  { t: "Build a World", h: "/branding" },
  { t: "Creative Direction + Social", h: "/creative-direction-content" },
  { t: "Moving Image", h: "/moving-image" },
  { t: "Logo + Identity", h: "/logo-identity" },
  { t: "Headshots", h: "/headshots" },
];

function PrivateRoom() {
  const [authed, setAuthed] = useState(false);
  const [val, setVal] = useState("");
  const [err, setErr] = useState(false);

  const tryKey = () => {
    if (val.trim().toLowerCase() === PASSWORD) {
      setAuthed(true);
      setErr(false);
    } else {
      setErr(true);
    }
  };

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <p className="so-micro so-micro-red">PRIVATE FILE ROOM · STAFF ONLY</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 92px)", marginTop: 14 }}>
          The File Room.
        </h1>
        <p className="so-micro mt-3">EVERY PORTFOLIO PAGE, ONE PLACE — BEHIND THE LOCK.</p>

        {!authed ? (
          <div style={{ marginTop: 40, maxWidth: 420 }}>
            <p style={{ lineHeight: 1.75, color: "var(--color-stone)" }}>
              Type the key to open every archive and case file.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              <input
                type="password"
                value={val}
                onChange={(e) => {
                  setVal(e.target.value);
                  setErr(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") tryKey();
                }}
                placeholder="the key"
                autoComplete="off"
                style={{
                  flex: 1,
                  border: "1px solid var(--color-sepia)",
                  borderRadius: 999,
                  padding: "11px 18px",
                  background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
                  font: "inherit",
                  color: "inherit",
                  outline: "none",
                }}
              />
              <button
                type="button"
                onClick={tryKey}
                style={{
                  background: "#131210",
                  color: "#f5f2ea",
                  border: 0,
                  borderRadius: 999,
                  padding: "11px 20px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                OPEN →
              </button>
            </div>
            {err && (
              <p className="so-micro" style={{ marginTop: 12, color: "var(--color-verm)", letterSpacing: "0.14em" }}>
                NOPE — TRY AGAIN.
              </p>
            )}
          </div>
        ) : (
          <>
            <div style={{ marginTop: 44 }}>
              <p className="so-micro">THE CASE FILES — 22</p>
              <div style={{ marginTop: 10, display: "grid", gap: 0 }}>
                {FILES.map((f, i) => (
                  <a
                    key={f.h}
                    href={f.h}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: 16,
                      textDecoration: "none",
                      color: "inherit",
                      borderTop: "1px solid var(--color-sepia)",
                      padding: "12px 2px",
                    }}
                  >
                    <span className="so-micro" style={{ letterSpacing: "0.12em", fontWeight: 600 }}>
                      {String(i + 1).padStart(2, "0")} · {f.t}
                    </span>
                    <span className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.12em" }}>
                      OPEN →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 44 }}>
              <p className="so-micro">THE ROOMS</p>
              <div style={{ marginTop: 10, display: "grid", gap: 0 }}>
                {ROOMS.map((r, i) => (
                  <a
                    key={r.h}
                    href={r.h}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: 16,
                      textDecoration: "none",
                      color: "inherit",
                      borderTop: "1px solid var(--color-sepia)",
                      padding: "12px 2px",
                    }}
                  >
                    <span className="so-micro" style={{ letterSpacing: "0.12em", fontWeight: 600 }}>
                      R{i + 1} · {r.t.toUpperCase()}
                    </span>
                    <span className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.12em" }}>
                      OPEN →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </>
        )}

        <div style={{ marginTop: 56 }}>
          <a href="/about" className="so-arrow">
            <span className="arr">←</span> Back
          </a>
        </div>
      </div>
    </div>
  );
}