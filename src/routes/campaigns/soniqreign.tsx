import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type { CSSProperties } from "react";
import { CaseBookingCta } from "../../sunday/services";

export const Route = createFileRoute("/campaigns/soniqreign")({
  component: SoniqReignPage,
});

const COLLECTIVE = [
  {
    t: "WHO RUNS IT",
    d: "Soniq Reign is run by one person: FANCI. She built the collective herself and what she does for this community is real: a platform that keeps artists seen, connected and working.",
  },
  {
    t: "WHAT THEY DO",
    d: "CREATE · NETWORK · GROW. Soniq Reign is a Greater Seattle creative collective built around music, events, and visual content — bringing artists and musicians together under one banner: sonic unity, uplifting community.",
  },
  {
    t: "WHAT IT'S FOR",
    d: "Performers need videos. They need platform content, photos, footage that makes people stop. Soniq Reign exists to make sure the people making the scene have the media to match the work.",
  },
];

const COMMUNITY = [
  {
    t: "THE CONNECTION",
    d: "It's about meeting people — creators, artists, organizers — and building relationships that outlast any single project. One good connection turns into the next shoot, the next feature, the next collab.",
  },
  {
    t: "THE CONTENT",
    d: "Performers live on visibility. A video, a photo set, a platform moment — that's how a show becomes a presence. Giving artists content like this is giving them a career asset, not just a post.",
  },
  {
    t: "THE PURPOSE",
    d: "And it doesn't have to be a celebrity. Anyone with a face and a purpose — creators, small brands, organizations that care about this — deserves the same firepower. That's the point.",
  },
];

const VIDEOS = ["MUSIC VIDEO 01", "MUSIC VIDEO 02", "MUSIC VIDEO 03", "MUSIC VIDEO 04", "MUSIC VIDEO 05", "MUSIC VIDEO 06", "MUSIC VIDEO 07", "MUSIC VIDEO 08"];

const SLOTS = ["SET DESIGN", "BRAND PHOTOGRAPHY", "CONCEPTS & SOURCING", "GRAPHIC DESIGN"];

const BLACK: CSSProperties = {
  background: "#0e0e10",
  aspectRatio: "4 / 3",
  borderRadius: 14,
  border: "1px solid rgba(236, 231, 221, 0.12)",
  display: "block",
};

const CAST = [
  { name: "Kenshi Killzzz", handle: "@kenshikilla", note: "Artist · He Rules Us All" },
  { name: "Alexis Brooke", handle: "@alexxisbrooke", note: "Artist" },
  { name: "G.u.a.p.p.o", handle: "@slg_guappo", note: "Artist · Stop Playn W Me" },
  { name: "MUNDY.", handle: "@munhundreds", note: "Artist · In Your Life" },
  { name: "Soniq Reign", handle: "@soniqrei", note: "Partner · Sonic Unity, Uplifting Community" },
];

function SoniqReignPage() {
  const [col, setCol] = useState(0);
  const [com, setCom] = useState(0);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">CAMPAIGN · CREATIVE DIRECTION · MOVING IMAGE</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 96px)", marginTop: 14 }}>
          Soniq Reign.
        </h1>
        <p className="so-micro mt-3">@SONIQREIGN · GREATER SEATTLE · SONIC UNITY, UPLIFTING COMMUNITY</p>
        <hr className="so-rule mt-6" />

        {/* The collective — tap through */}
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
            <p className="so-micro">THE COLLECTIVE</p>
            <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
              {col + 1} / 3 · TAP THE BOX FOR THE NEXT
            </p>
          </div>
          <button
            type="button"
            onClick={() => setCol((s) => (s + 1) % COLLECTIVE.length)}
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
              {COLLECTIVE[col].t}
            </p>
            <p key={col} className="so-chapter-fade" style={{ margin: "8px 0 0", lineHeight: 1.78, maxWidth: "62ch" }}>
              {COLLECTIVE[col].d}
            </p>
            <span style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 12 }}>
              {COLLECTIVE.map((_, d) => (
                <span
                  key={d}
                  aria-hidden
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: d === col ? "var(--color-verm)" : "var(--color-sepia)",
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

        {/* The day */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">THE DAY</p>
          <p style={{ marginTop: 12, lineHeight: 1.78 }}>
            We set the whole thing up at a studio in South Seattle and ran a
            full production day — performances, interviews, the works. Hana
            came to shoot photos and ended up on video too, plus set design
            and planning: the layout, the look, the photography pulled to
            give the production its best results. The interviews were
            handled by the crew — she didn't facilitate those — but the
            frame around them is hers.
          </p>
        </div>

        {/* Why community — tap through */}
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
            <p className="so-micro">WHY COMMUNITY MATTERS</p>
            <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
              {com + 1} / 3 · TAP THE BOX FOR THE NEXT
            </p>
          </div>
          <button
            type="button"
            onClick={() => setCom((s) => (s + 1) % COMMUNITY.length)}
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
              {COMMUNITY[com].t}
            </p>
            <p key={com} className="so-chapter-fade" style={{ margin: "8px 0 0", lineHeight: 1.78, maxWidth: "62ch" }}>
              {COMMUNITY[com].d}
            </p>
            <span style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 12 }}>
              {COMMUNITY.map((_, d) => (
                <span
                  key={d}
                  aria-hidden
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: d === com ? "var(--color-verm)" : "var(--color-sepia)",
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

        {/* The music videos */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE MUSIC VIDEOS — 8 SLOTS · IN POST</p>
          <div className="mt-6" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
            {VIDEOS.map((v) => (
              <div key={v}>
                <div style={BLACK} />
                <p className="so-micro" style={{ marginTop: 10 }}>
                  {v} · IN POST
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Behind the work */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">BEHIND THE WORK — PLACEHOLDERS</p>
          <div className="mt-6" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
            {SLOTS.map((s) => (
              <div key={s}>
                <div style={BLACK} />
                <p className="so-micro" style={{ marginTop: 10 }}>
                  {s} · TO BE PLACED
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Credits */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE CAST — GIVING EVERYONE THEIR FLOWERS</p>
          <div className="mt-4" style={{ display: "grid", gap: 12, maxWidth: 620 }}>
            {CAST.map((a) => (
              <div
                key={a.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  borderBottom: "1px solid var(--color-sepia)",
                  paddingBottom: 10,
                  gap: 16,
                }}
              >
                <div>
                  <div style={{ fontWeight: 600 }}>{a.name}</div>
                  <div className="so-micro" style={{ marginTop: 4, color: "var(--color-stone)" }}>
                    {a.note}
                  </div>
                </div>
                <a
                  className="so-micro"
                  href={`https://www.instagram.com/${a.handle.replace("@", "")}/`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--color-verm)", textDecoration: "none" }}
                >
                  {a.handle} →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* The crew — with space for more credits */}
        <div style={{ marginTop: 40 }}>
          <p className="so-micro">THE CREW — CREDITS TO BE LINKED</p>
          <div className="mt-4" style={{ display: "grid", gap: 12, maxWidth: 620 }}>
            {[
              { name: "FANCI", role: "Founder of Soniq Reign · runs it for the community", ig: null },
              { name: "ReelClip", role: "Music videos + TV performances, Greater Seattle — came through to connect and facilitate", ig: null, page: "/campaigns/reelclip" },
              { name: "VIC", role: "Production partner · and he has a twin", ig: null },
            ].map((c) => (
              <div
                key={c.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  borderBottom: "1px solid var(--color-sepia)",
                  paddingBottom: 10,
                  gap: 16,
                }}
              >
                <div>
                  <div style={{ fontWeight: 600 }}>{c.name}</div>
                  <div className="so-micro" style={{ marginTop: 4, color: "var(--color-stone)" }}>
                    {c.role}
                  </div>
                </div>
                {c.page ? (
                  <a className="so-micro" href={c.page} style={{ color: "var(--color-verm)", textDecoration: "none" }}>
                    HIS PAGE →
                  </a>
                ) : (
                  <span className="so-micro" style={{ color: "var(--color-stone)" }}>
                    IG TO BE LINKED
                  </span>
                )}
              </div>
            ))}
            <p className="so-micro" style={{ marginTop: 6, color: "var(--color-stone)" }}>
              MORE CREDITS LAND HERE — SEND THE HANDLES AND THEY GET TAGGED.
            </p>
          </div>
        </div>

        {/* Partner */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">THE PARTNER</p>
          <p style={{ marginTop: 12, lineHeight: 1.78 }}>
            This project also partnered with local brand{" "}
            <a href="/campaigns/exhibition" style={{ color: "var(--color-verm)", textDecoration: "underline", textUnderlineOffset: 3 }}>
              Exhibition →
            </a>{" "}
            — associated with Paradice, Seattle — and Hana shot content for
            their socials along the way.
          </p>
        </div>

        <p className="so-micro" style={{ marginTop: 32 }}>
          PHOTOGRAPHS AND FRAMES TO BE PLACED — THE WORK IS BEING FINISHED
        </p>

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