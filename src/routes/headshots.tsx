import { createFileRoute } from "@tanstack/react-router";
import { useState, type CSSProperties } from "react";

export const Route = createFileRoute("/headshots")({
  component: HeadshotsPage,
});

const BLACK: CSSProperties = {
  background: "#0e0e10",
  aspectRatio: "4 / 5",
  borderRadius: 14,
  border: "1px solid rgba(236, 231, 221, 0.12)",
  display: "block",
};

const STANDARD = [
  {
    t: "WHO IT'S FOR",
    d: "LinkedIn, corporate, the page that introduces you. The ones that get you hired — clean, classic, instantly professional.",
  },
  {
    t: "THE FEEL",
    d: "Professional with temperature. Approachable and capable — you at your best on a Tuesday, in front of the right light.",
  },
];

const CREATIVE = [
  {
    t: "WHO IT'S FOR",
    d: "Your creative brand, your socials, the projects where the photo should feel like your work. The ones that get remembered.",
  },
  {
    t: "THE FEEL",
    d: "Editorial and stylized — color, mood, wardrobe, character. A branding-related headshot package for people whose photo shouldn't look like everyone else's.",
  },
];

const DIGITALS = [
  {
    t: "WHO IT'S FOR",
    d: "Agencies, casting, booking queues. The go-see set — front, sides, full length, close-ups, straight to the point.",
  },
  {
    t: "THE FEEL",
    d: "Clean, natural light, no gimmicks — you, measured honestly. The set that lets the next door open.",
  },
];

const NOTES = [
  "Light does the talking — I compose you with it before anything else. It shapes the face, sets the mood, and makes you look like your favorite version of yourself.",
  "Posing is direction, not performance — you don't need to know how to pose. I'll place you, move you, talk you into it. The camera is the excuse to feel seen.",
  "Emotion before perfection — a real smile beats a perfect one. We chase the feeling first; the technique follows it.",
  "Your 100th shot or your first — same care, same light, same intention. Experience shows; first-timers land.",
];

const ADVICE = [
  {
    t: "WEAR WHAT FEELS LIKE YOU",
    d: "Solid tones, soft necks, clothes you already feel good in. The confident you is the best version — let the outfit behave and the face do the work.",
  },
  {
    t: "LIGHT IS THE SHORTCUT",
    d: "Most headshots die in flat light. My job is shaping it — on your best angles before you even pose. You bring the face; I bring the light.",
  },
  {
    t: "KNOW WHAT IT'S FOR",
    d: "LinkedIn, creative brand, social, or something in the creative realm — each has its own energy and its own crop. Tell me the job and the photo gets built for it.",
  },
  {
    t: "BRING THE QUESTION, NOT THE ANXIETY",
    d: "No idea how to pose? Perfect. You decide the goal and I compose everything else. First-timers leave looking like they do this weekly.",
  },
];

function HeadshotsPage() {
  const [std, setStd] = useState(0);
  const [crt, setCrt] = useState(0);
  const [dgt, setDgt] = useState(0);
  const [note, setNote] = useState(0);
  const [darkCards, setDarkCards] = useState<Set<number>>(new Set());
  const toggleCard = (i: number) =>
    setDarkCards((s) => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });

  const TapBox = ({ label, data, idx, setIdx }: { label: string; data: { t: string; d: string }[]; idx: number; setIdx: (n: number) => void }) => (
    <div
      style={{
        marginTop: 22,
        border: "1px solid var(--color-sepia)",
        borderRadius: 22,
        background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
        padding: "24px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
        <p className="so-micro">{label}</p>
        <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
          {idx + 1} / {data.length} · TAP THE BOX FOR THE NEXT
        </p>
      </div>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIdx((idx + 1) % data.length);
        }}
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
          {data[idx].t}
        </p>
        <p key={idx} className="so-chapter-fade" style={{ margin: "8px 0 0", lineHeight: 1.78, maxWidth: "62ch" }}>
          {data[idx].d}
        </p>
        <span style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 12 }}>
          {data.map((_, d) => (
            <span
              key={d}
              aria-hidden
              style={{ width: 6, height: 6, borderRadius: 999, background: d === idx ? "var(--color-verm)" : "var(--color-sepia)", display: "inline-block" }}
            />
          ))}
          <span className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.13em", marginLeft: 5 }}>
            TAP FOR THE NEXT →
          </span>
        </span>
      </button>
    </div>
  );

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">SERVICES · PORTRAITS · SEATTLE / TACOMA</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(44px, 8vw, 104px)", marginTop: 14 }}>
          Headshots.
        </h1>
        <p style={{ marginTop: 18, maxWidth: "58ch", lineHeight: 1.78 }}>
          This could be your 100th shot — or your first. Either way, I
          compose you. Lighting, posing, feeling, emotion — that's the
          job. Are we doing this for LinkedIn? For your creative brand?
          For social media? Or something more in the creative realm — a
          branding-related headshot package? There's a bunch of ways to
          go; tell me the goal and the session gets built around it.
        </p>
        <hr className="so-rule mt-6" />

        {/* Standard */}
        <div style={{ marginTop: 48 }}>
          <p className="so-micro">01 · STANDARD HEADSHOTS</p>
          <p style={{ marginTop: 12, maxWidth: "58ch", lineHeight: 1.78 }}>
            The ones that get you hired. Clean, classic, professional —
            corporate and LinkedIn-ready, actor and model basics, one
            light setup, no fuss.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 18, marginTop: 18 }}>
            {["standard-01", "standard-02", "standard-03"].map((s, n) => (
              <div key={s}>
                <img
                  src={`/assets/headshots/${s}.jpg`}
                  alt={`Standard headshot ${n + 1}`}
                  loading="lazy"
                  style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: 14, display: "block", border: "1px solid var(--color-sepia)" }}
                />
                <p className="so-micro" style={{ marginTop: 10 }}>
                  STANDARD {String(n + 1).padStart(2, "0")} · BY HANA
                </p>
              </div>
            ))}
          </div>
          <TapBox label="THE STANDARD, UP CLOSE" data={STANDARD} idx={std} setIdx={setStd} />
        </div>

        {/* Creative */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">02 · CREATIVE HEADSHOTS</p>
          <p style={{ marginTop: 12, maxWidth: "58ch", lineHeight: 1.78 }}>
            The ones that get remembered. Editorial and stylized — color,
            mood, wardrobe, character. For people whose photo shouldn't
            look like everyone else's.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 18, marginTop: 18 }}>
            <div>
              <img
                src="/assets/headshots/creative-01.jpg"
                alt="Creative headshot 01"
                loading="lazy"
                style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: 14, display: "block", border: "1px solid var(--color-sepia)" }}
              />
              <p className="so-micro" style={{ marginTop: 10 }}>
                CREATIVE 01 · BY HANA
              </p>
            </div>
            {[2, 3].map((n) => (
              <div key={n}>
                <div style={BLACK} />
                <p className="so-micro" style={{ marginTop: 10 }}>
                  CREATIVE {String(n).padStart(2, "0")} · TO BE ADDED
                </p>
              </div>
            ))}
          </div>
          <TapBox label="THE CREATIVE, UP CLOSE" data={CREATIVE} idx={crt} setIdx={setCrt} />
        </div>

        {/* Model digitals */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">03 · MODEL DIGITALS</p>
          <p style={{ marginTop: 12, maxWidth: "58ch", lineHeight: 1.78 }}>
            The go-see set. Clean full-body and close-up digitals — front,
            sides, natural light, no gimmicks. For agencies, casting and
            booking queues.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 18, marginTop: 18 }}>
            {[1, 2, 3].map((n) => (
              <div key={n}>
                <div style={BLACK} />
                <p className="so-micro" style={{ marginTop: 10 }}>
                  DIGITAL {String(n).padStart(2, "0")} · TO BE ADDED
                </p>
              </div>
            ))}
          </div>
          <TapBox label="THE DIGITALS, UP CLOSE" data={DIGITALS} idx={dgt} setIdx={setDgt} />
        </div>

        {/* Creative note — tap the whole box for another */}
        <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setNote((s) => (s + 1) % NOTES.length);
        }}
          style={{
            marginTop: 56,
            display: "block",
            width: "100%",
            textAlign: "left",
            border: "1px solid var(--color-sepia)",
            borderRadius: 22,
            background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
            padding: "26px 28px",
            cursor: "pointer",
            color: "inherit",
            font: "inherit",
          }}
        >
          <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}>
            CREATIVE NOTE
          </p>
          <p key={note} className="so-chapter-fade" style={{ marginTop: 12, lineHeight: 1.78, maxWidth: "58ch" }}>
            {NOTES[note]}
          </p>
          <p className="so-micro" style={{ marginTop: 14, color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 600 }}>
            TAP FOR ANOTHER →
          </p>
        </button>

        {/* The advice — flip to black, four side by side */}
        <div style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 14, alignItems: "start" }}>
          {ADVICE.map((c, i) => {
            const isDark = darkCards.has(i);
            return (
              <button
                key={c.t}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCard(i);
                }}
                aria-pressed={isDark}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  border: `1px solid ${isDark ? "#131210" : "var(--color-sepia)"}`,
                  borderRadius: 16,
                  padding: "24px 26px",
                  background: isDark ? "#131210" : "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
                  color: "inherit",
                  font: "inherit",
                  cursor: "pointer",
                  transition: "background 0.3s ease, color 0.3s ease, border-color 0.2s ease",
                }}
              >
                {isDark ? (
                  <>
                    <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}>
                      THE ADVICE
                    </p>
                    <p className="so-micro" style={{ marginTop: 10, color: "#f5f2ea", lineHeight: 1.8, letterSpacing: "0.08em", fontSize: 13 }}>
                      {c.d}
                    </p>
                    <p className="so-micro" style={{ marginTop: 14, color: "rgba(245,242,234,0.6)", letterSpacing: "0.14em" }}>
                      TAP TO RESTORE ↑
                    </p>
                  </>
                ) : (
                  <>
                    <p className="so-micro" style={{ letterSpacing: "0.16em", fontWeight: 700 }}>
                      {c.t}
                    </p>
                    <p className="so-micro" style={{ marginTop: 10, color: "var(--color-stone)", lineHeight: 1.7, letterSpacing: "0.08em" }}>
                      TAP FOR THE ADVICE ↓
                    </p>
                  </>
                )}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: 64,
            padding: "30px 0",
            borderTop: "1px solid var(--color-sepia)",
            borderBottom: "1px solid var(--color-sepia)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
          }}
        >
          <p className="so-micro" style={{ maxWidth: "46ch" }}>
            NOT SURE WHICH ONE YOU NEED? TELL ME WHAT IT'S FOR — I'LL SET YOU UP.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="/#office-hours" className="so-nav-link cta" style={{ textDecoration: "none", margin: 0 }}>
              BOOK A SESSION →
            </a>
            <a href="/photography" className="so-nav-link cta" style={{ textDecoration: "none", margin: 0, border: "1px solid var(--color-sepia)" }}>
              MORE WORK →
            </a>
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