import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/creative-direction-content")({
  component: DirectionAndContentPage,
});

const STATS = [
  { n: "1M+", d: "CUT MEDIA CONCEPT" },
  { n: "2M+", d: "YOUTH-CULTURE YOUTUBE" },
  { n: "1.2M+", d: "TOPICAL SOCIAL CONTENT" },
  { n: "49K+", d: "RESHARES" },
  { n: "29K+", d: "LIKES" },
];

const APPROACH: { n: string; t: string; items: string[]; img: string | null }[] = [
  {
    n: "01",
    t: "THE DIRECTION",
    items: ["Moodboards + references", "Visual treatment", "Campaign thinking"],
    img: "/assets/campaigns/exhibition/exh2.jpg",
  },
  {
    n: "02",
    t: "STRATEGY + IDEAS",
    items: ["Content strategy + planning", "Content pillars", "Hooks, titles + angles"],
    img: null,
  },
  {
    n: "03",
    t: "PHOTO + VIDEO",
    items: ["On-set direction", "Shoot planning", "Creative production"],
    img: "/assets/work/studio-directors.jpg",
  },
  {
    n: "04",
    t: "EDITING + REPURPOSING",
    items: ["Short-form edits", "Platform-native cuts", "Extend the story"],
    img: null,
  },
  {
    n: "05",
    t: "GRAPHICS + DIGITAL",
    items: ["Visual systems", "Title design", "Social assets"],
    img: null,
  },
  {
    n: "06",
    t: "ONGOING CONTENT",
    items: ["Campaign rollout", "Launch direction", "Consistency across photo, video, web, brand content"],
    img: "/assets/campaigns/bar-bistro/bb-01.jpg",
  },
];

const NOTES: { t: string; d: string }[] = [
  { t: "PATTERN INTERRUPTION", d: "If everything in the feed looks the same, give the eye something unexpected. Change the framing, opening line, pace, crop, sound, or format." },
  { t: "THE FIRST LINE MATTERS", d: "“Here are our services” says less than “You probably don’t need everything we offer.” Give people a reason to keep reading." },
  { t: "MAKE IT FEEL LIKE YOU", d: "Trends can be useful. Copying the trend exactly usually isn’t. Pull the format into your own world." },
  { t: "ONE IDEA, MULTIPLE LIVES", d: "A 20-minute conversation can become a long-form video, six short clips, a quote carousel, stories, stills, and a follow-up post." },
  { t: "EMOTION IS INFORMATION", d: "Funny, nostalgic, aspirational, curious, comforting, urgent — decide what somebody should feel before deciding what the post should look like." },
  { t: "THE TITLE IS PART OF THE DESIGN", d: "The right words can stop someone before the visual does. Hooks, captions, headlines, and on-screen text deserve creative direction too." },
  { t: "NOT EVERYTHING NEEDS TO SELL", d: "Some content builds recognition. Some builds trust. Some entertains. Some converts. A healthy content world needs more than one job." },
  { t: "THE GRID IS THE STORY", d: "People visit profiles, not just posts. Your feed and saved folders are a surface — design the whole thing, not just single frames." },
  { t: "CONSISTENCY OUTRANKS PERFECTION", d: "A recognizable voice posted on rhythm beats a perfect experiment nobody can predict. Show up, then get sharper." },
  { t: "SOUND ON, SOUND OFF", d: "Half the audience watches muted with captions; half listens closely. Design for both and you reach everyone." },
  { t: "THE SAVE IS THE NEW LIKE", d: "Saves and shares signal real value. Give people something worth keeping — a list, a tip, a framework, a feeling." },
  { t: "MOOD BEFORE FORMAT", d: "Pick the feeling first, then the container. The same idea can be a story, a reel, a carousel, or a still — start with the emotion." },
];

const SELECTED = [
  { t: "Leon Thomas × Vice Seattle", img: "/assets/campaigns/leon-thomas/night-02.jpg", h: "/campaigns/leon-thomas" },
  { t: "Angie Tiara Beauty", img: "/assets/campaigns/angie-tiara-beauty/at-01.jpg", h: "/campaigns/angie-tiara-beauty" },
  { t: "Iconic 2000s Boat Party", img: "/assets/campaigns/dj-prashant-hiyu/djp-01.jpg", h: "/campaigns/dj-prashant-hiyu" },
];

function DirectionAndContentPage() {
  const [note, setNote] = useState(() => Math.floor(Math.random() * NOTES.length));
  const [darkCards, setDarkCards] = useState<Set<number>>(new Set());
  const toggleCard = (i: number) =>
    setDarkCards((s) => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });
  const n = NOTES[note];
  const title = n.t[0] + n.t.slice(1).toLowerCase();

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">HOW THE WORLD COMES TOGETHER</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 7vw, 88px)", marginTop: 14 }}>
          Creative Direction + Social.
        </h1>
        <p className="so-micro mt-3">THE THINKING, AND THE CONVERSATION IT KEEPS ALIVE</p>

        <p style={{ marginTop: 26, maxWidth: "60ch", lineHeight: 1.78 }}>
          First the direction — what should it feel like, who is it for,
          and how should it show up. Then the content keeps that world
          alive.
        </p>

        {/* The big picture — the numbers, once */}
        <div style={{ marginTop: 76 }}>
          <div style={{ maxWidth: "62ch" }}>
            <p className="so-micro">THE BIG PICTURE</p>
            <p className="so-serif" style={{ fontSize: "clamp(30px, 4vw, 46px)", marginTop: 12, lineHeight: 1.15, color: "#55286F" }}>
              2M+ views · 8.5M impressions
            </p>
            <p className="so-micro" style={{ marginTop: 10, color: "var(--color-stone)", letterSpacing: "0.14em" }}>
              FROM ONE SINGLE VIDEO.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: 28,
              borderRadius: 18,
              background: "#131210",
              padding: "8px 8px 0",
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.n}
                style={{
                  flex: "1 1 160px",
                  padding: "22px 24px 18px",
                  borderLeft: i === 0 ? "none" : "1px solid rgba(245,242,234,0.16)",
                }}
              >
                <p className="so-serif" style={{ fontSize: "clamp(30px, 4vw, 44px)", margin: 0, color: "#f5f2ea" }}>
                  {s.n}
                </p>
                <p className="so-micro" style={{ marginTop: 10, color: "rgba(245,242,234,0.75)", lineHeight: 1.6, letterSpacing: "0.12em" }}>
                  {s.d}
                </p>
              </div>
            ))}
          </div>
          <p className="so-micro" style={{ marginTop: 20, color: "var(--color-stone)", letterSpacing: "0.14em", textAlign: "right" }}>
            A FEW MOMENTS WHERE THE WORK FOUND ITS AUDIENCE.
          </p>
        </div>

        {/* Featured work — the Exhibition campaign */}
        <div style={{ marginTop: 76 }}>
          <a href="/campaigns/exhibition" style={{ position: "relative", display: "block", textDecoration: "none", color: "inherit" }}>
            <img
              src="/assets/campaigns/exhibition/exh8.jpg"
              alt="EXHIBITION — creative direction, social campaign"
              loading="lazy"
              style={{ width: "100%", aspectRatio: "21 / 9", objectFit: "cover", borderRadius: 18, display: "block", border: "1px solid var(--color-sepia)" }}
            />
            <span
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 18,
                background: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 34%), linear-gradient(0deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 34%)",
              }}
            />
            <span style={{ position: "absolute", top: 22, left: 26, display: "flex", flexDirection: "column", gap: 6 }}>
              <span className="so-micro" style={{ letterSpacing: "0.2em", fontWeight: 700 }}>FEATURED WORK</span>
              <span className="so-serif" style={{ fontSize: "clamp(26px, 4vw, 44px)", lineHeight: 1.05 }}>
                Exhibition <span style={{ color: "var(--color-verm)" }}>→</span>
              </span>
            </span>
            <span className="so-micro" style={{ position: "absolute", right: 26, bottom: 20, letterSpacing: "0.14em", color: "var(--color-print)", textAlign: "right", lineHeight: 1.9 }}>
              CREATIVE DIRECTION
              <br />
              SOCIAL CAMPAIGN
              <br />
              2026
            </span>
          </a>
        </div>

        {/* Our approach */}
        <div style={{ marginTop: 76 }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "end", gap: 18 }}>
            <div style={{ maxWidth: "52ch" }}>
              <p className="so-micro">OUR APPROACH</p>
              <p className="so-serif" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginTop: 12, lineHeight: 1.15 }}>
                From direction to daily content.
              </p>
            </div>
            <p style={{ margin: 0, maxWidth: "34ch", lineHeight: 1.75, color: "var(--color-stone)" }}>
              A connected process, from the big idea to the ongoing content
              that keeps it alive.
            </p>
          </div>
          <div className="so-cases" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", marginTop: 28 }}>
            {APPROACH.map((a, ai) => {
              const isDark = darkCards.has(ai);
              return (
                <button
                  key={a.n}
                  type="button"
                  onClick={() => toggleCard(ai)}
                  aria-pressed={isDark}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    border: "1px solid var(--color-sepia)",
                    borderRadius: 16,
                    overflow: "hidden",
                    background: isDark ? "#131210" : "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
                    color: "inherit",
                    font: "inherit",
                    cursor: "pointer",
                    padding: 0,
                    transition: "background 0.3s ease, color 0.3s ease, border-color 0.2s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10, padding: "18px 20px 0" }}>
                    <p className="so-serif" style={{ fontSize: 20, margin: 0, color: isDark ? "rgba(245,242,234,0.6)" : "var(--color-stone)" }}>
                      {a.n}
                    </p>
                    <p className="so-micro" style={{ letterSpacing: "0.14em", fontWeight: 700, textAlign: "right", color: isDark ? "#f5f2ea" : "inherit" }}>
                      {a.t}
                    </p>
                  </div>
                  <div style={{ padding: "10px 20px 18px", display: "grid", gap: 6 }}>
                    {a.items.map((it) => (
                      <p key={it} style={{ margin: 0, fontSize: 13.5, color: isDark ? "rgba(245,242,234,0.8)" : "var(--color-stone)", lineHeight: 1.5 }}>
                        {it}
                      </p>
                    ))}
                  </div>
                  {a.img ? (
                    <img src={a.img} alt={`${a.t} — from the archive`} loading="lazy" style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", display: "block", borderTop: `1px solid ${isDark ? "rgba(245,242,234,0.14)" : "var(--color-sepia)"}` }} />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        aspectRatio: "1 / 1",
                        borderTop: `1px solid ${isDark ? "rgba(245,242,234,0.14)" : "var(--color-sepia)"}`,
                        background: isDark ? "#1a1917" : "color-mix(in srgb, var(--color-paper) 80%, #fffaf2)",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <p className="so-micro" style={{ color: isDark ? "rgba(245,242,234,0.5)" : "var(--color-stone)", letterSpacing: "0.16em", textAlign: "center", lineHeight: 1.9 }}>
                        IMAGE — TO BE ADDED
                      </p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Creative note */}
        <div style={{ marginTop: 76 }}>
          <button
            type="button"
            onClick={() =>
              setNote((c) => {
                let n = Math.floor(Math.random() * NOTES.length);
                if (n === c) n = (n + 1) % NOTES.length;
                return n;
              })
            }
            aria-label="Show another creative note"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              textAlign: "left",
              border: "1px solid var(--color-sepia)",
              borderRadius: 22,
              background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
              padding: "28px 30px",
              cursor: "pointer",
              color: "inherit",
              font: "inherit",
              flexWrap: "wrap",
            }}
          >
            <span style={{ display: "block", maxWidth: "58ch" }}>
              <span className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700, display: "block" }}>
                CREATIVE NOTE
              </span>
              <span className="so-serif" key={note} style={{ display: "block", fontSize: "clamp(22px, 3vw, 32px)", marginTop: 12, lineHeight: 1.2 }}>
                {title}
              </span>
              <span className="so-micro" key={`${note}-d`} style={{ display: "block", marginTop: 10, color: "var(--color-stone)", lineHeight: 1.8, letterSpacing: "0.08em" }}>
                {n.d}
              </span>
              <span className="so-micro" style={{ display: "block", marginTop: 16, color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 600 }}>
                TAP FOR ANOTHER →
              </span>
            </span>
          </button>
        </div>

        {/* Jaydyn F. — compact case box */}
        <a
          href="/campaigns/jaydyn-f"
          style={{
            marginTop: 76,
            border: "1px solid #131210",
            borderRadius: 22,
            background: "#131210",
            color: "#f5f2ea",
            padding: "24px",
            display: "block",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
            <p className="so-micro" style={{ letterSpacing: "0.16em", fontWeight: 700, color: "#f5f2ea" }}>
              JAYDYN F. — ARTIST SOCIAL
            </p>
            <p className="so-micro" style={{ color: "rgba(245,242,234,0.65)", letterSpacing: "0.14em" }}>
              SEATTLE HIP-HOP · MUSIC-RELEASE SUPPORT
            </p>
          </div>
          <div style={{ display: "flex", gap: 24, alignItems: "start", marginTop: 16, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 300px", maxWidth: "56ch" }}>
              <p style={{ margin: 0, lineHeight: 1.45, color: "rgba(245,242,234,0.92)" }}>
                A larger visual doesn't have to live once. For Jaydyn F., I
                contributed behind-the-scenes footage, photography, and
                social-content support around his music work — helping
                create additional entry points into the same visual world.
                Short-form clips, BTS moments, and stills gave the release
                more ways to catch someone's attention and keep the artist
                visible between larger moments.
              </p>
              <div style={{ marginTop: 12, borderTop: "1px solid rgba(245,242,234,0.16)", paddingTop: 10 }}>
                <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.14em", fontWeight: 700 }}>
                  120K VIEWS
                </p>
                <p className="so-micro" style={{ marginTop: 4, color: "rgba(245,242,234,0.7)", letterSpacing: "0.08em", lineHeight: 1.7 }}>
                  ON A REEL I SHOT — 6K LIKES · 760 SHARES · 58 REPOSTS
                </p>
              </div>
              <span
                className="so-micro"
                style={{ display: "inline-block", marginTop: 14, color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}
              >
                EXPLORE THE CASE STUDY →
              </span>
            </div>
            <div style={{ flex: "0 0 150px" }}>
              <img
                src="/assets/campaigns/jaydyn-f/jd-thumb.jpg"
                alt="Jaydyn F. — the POV frame"
                loading="lazy"
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 16,
                  objectFit: "cover",
                  display: "block",
                  border: "1px solid rgba(245,242,234,0.35)",
                }}
              />
            </div>
          </div>
        </a>

        {/* Selected work */}
        <div style={{ marginTop: 76 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
            <p className="so-micro">SELECTED WORK — FROM THE ARCHIVE</p>
            </div>
          <div className="so-cases" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", marginTop: 18 }}>
            {SELECTED.map((s) => (
              <a key={s.t} href={s.h} style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <img
                  src={s.img}
                  alt={s.t}
                  loading="lazy"
                  style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", borderRadius: 16, display: "block", border: "1px solid var(--color-sepia)" }}
                />
                <p className="so-micro" style={{ marginTop: 12, letterSpacing: "0.16em", fontWeight: 700 }}>
                  {s.t.toUpperCase()}
                </p>
                <p className="so-micro" style={{ marginTop: 6, color: "var(--color-verm)", letterSpacing: "0.14em", fontWeight: 600 }}>
                  SEE THE STORY →
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* The footer — black band */}
        <div
          style={{
            marginTop: 76,
            borderRadius: 22,
            background: "#131210",
            color: "#f5f2ea",
            padding: "34px 36px",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: 30,
            alignItems: "center",
          }}
        >
          <div>
            <p className="so-serif" style={{ fontSize: "clamp(20px, 2.6vw, 28px)", margin: 0, lineHeight: 1.2 }}>
              LET'S MAKE
              <br />
              SOMETHING REAL.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p className="so-micro" style={{ letterSpacing: "0.16em", color: "#f5f2ea", lineHeight: 1.7 }}>
              BUILD THE WORLD. KEEP IT ALIVE.
            </p>
            <a
              href="/#office-hours"
              style={{
                display: "inline-block",
                textDecoration: "none",
                marginTop: 12,
                background: "#f5f2ea",
                color: "#131210",
                borderRadius: 999,
                padding: "11px 20px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                fontSize: 12,
                whiteSpace: "nowrap",
              }}
            >
              START A PROJECT →
            </a>
          </div>
          <div style={{ textAlign: "right" }}>
            <p className="so-micro" style={{ letterSpacing: "0.14em", color: "rgba(245,242,234,0.7)", lineHeight: 1.9 }}>
              CREATIVE DIRECTION
              <br />
              SOCIAL CONTENT
              <br />
              REAL IMPACT
            </p>
          </div>
        </div>

        <div style={{ marginTop: 56 }}>
          <a href="/" className="so-arrow">
            <span className="arr">←</span> Back to Sunday Office
          </a>
        </div>
      </div>
    </div>
  );
}