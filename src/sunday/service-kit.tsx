import { useEffect, useRef, useState, type ReactNode } from "react";

/* Shared building blocks for the service pages, so every page reads the
   same way: intro, what you get, how it works, the work, one next step. */

export const SERVICES_NAV = [
  { k: "branding", t: "Build a World", h: "/branding" },
  { k: "logo", t: "Logo + Identity", h: "/logo-identity" },
  { k: "websites", t: "Websites + Digital", h: "/websites" },
  { k: "photography", t: "Photography", h: "/photography" },
  { k: "moving", t: "Moving Image", h: "/moving-image" },
  { k: "direction", t: "Creative Direction + Social", h: "/creative-direction-content" },
];

export type Step = { t: string; d: string; more?: string };

/** "How it works" — tap a step and it lifts into its own tinted box,
 *  with a little more detail underneath. */
export function ServiceSteps({ steps, label = "HOW IT WORKS", id = "how" }: { steps: Step[]; label?: string; id?: string }) {
  const [on, setOn] = useState(0);
  const cur = steps[on];
  return (
    <section id={id} className="so-bw-sec so-bw-how so-steps">
      <div className="so-steps-head">
        <p className="so-micro">{label}</p>
        <p className="so-micro so-steps-hint">TAP A STEP</p>
      </div>
      <ol className="so-steps-row" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
        {steps.map((s, i) => (
          <li key={s.t}>
            <button
              type="button"
              className={"so-step" + (i === on ? " is-on" : "") + (i < on ? " is-past" : "")}
              aria-pressed={i === on}
              onClick={() => setOn(i)}
            >
              <span className="so-step-dot" aria-hidden>
                {i + 1}
              </span>
              <span className="so-step-t">{s.t}</span>
              <span className="so-step-d">{s.d}</span>
            </button>
          </li>
        ))}
      </ol>
      {cur.more && (
        <div key={on} className="so-step-more so-chapter-fade">
          <span className="so-micro">
            STEP {on + 1} · {cur.t.toUpperCase()}
          </span>
          <p>{cur.more}</p>
          {on < steps.length - 1 && (
            <button type="button" className="so-step-next" onClick={() => setOn(on + 1)}>
              Next: {steps[on + 1].t} →
            </button>
          )}
        </div>
      )}
    </section>
  );
}

/** Heading on the left, a clean list on the right. */
export function ListBlock({
  id,
  label,
  title,
  note,
  rows,
}: {
  id?: string;
  label: string;
  title: string;
  note?: ReactNode;
  rows: { t: string; d: ReactNode }[];
}) {
  return (
    <section id={id} className="so-bw-sec so-bw-inc">
      <div>
        <p className="so-micro">{label}</p>
        <h2 className="so-serif so-bw-h">{title}</h2>
        {note && (
          <p className="so-bw-d" style={{ maxWidth: "36ch" }}>
            {note}
          </p>
        )}
      </div>
      <div className="so-bw-list">
        {rows.map((x) => (
          <div key={x.t} className="so-bw-row">
            <p className="so-bw-t">{x.t}</p>
            <p className="so-bw-d">{x.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export type WorkItem = { t: string; w: string; d: string; img: string; h: string; s?: string };

/** Project cards — picture, what was made, name ↗, one line. */
export function WorkCards({ id = "work", label, items }: { id?: string; label: string; items: WorkItem[] }) {
  return (
    <section id={id} className="so-bw-sec">
      <p className="so-micro">{label}</p>
      <div className="so-bw-work" style={{ gridTemplateColumns: `repeat(${Math.min(items.length, 3)}, minmax(0, 1fr))` }}>
        {items.map((b) => {
          const ext = b.h.startsWith("http");
          return (
            <a key={b.t} href={b.h} className="so-bw-card" target={ext ? "_blank" : undefined} rel={ext ? "noreferrer" : undefined}>
              <span className="so-bw-card-img">
                <img src={b.img} alt={b.t} loading="lazy" />
                {b.s && <span className={"so-status so-status-on-card" + (b.s === "Launched" ? " is-live" : "")}>{b.s}</span>}
              </span>
              <span className="so-micro so-bw-card-w">{b.w}</span>
              <span className="so-bw-card-c">
                {b.t} <span className="arr" aria-hidden>↗</span>
              </span>
              <span className="so-bw-d">{b.d}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

/** The closing box: one clear next step, plus the rest of the services. */
export function ServiceCta({ title, sub, current }: { title: string; sub: string; current: string }) {
  return (
    <div className="so-bw-cta so-bw-cta-full">
      <div className="so-bw-cta-top">
        <div>
          <p className="so-serif so-bw-cta-t">{title}</p>
          <p className="so-micro so-bw-cta-s">{sub}</p>
        </div>
        <a href="/#inquiry" className="so-bw-cta-btn">
          START A PROJECT →
        </a>
      </div>
      <div className="so-bw-cta-next">
        <p className="so-micro">MORE WAYS TO BUILD YOUR WORLD</p>
        <div className="so-bw-cta-links">
          {SERVICES_NAV.filter((s) => s.k !== current).map((r) => (
            <a key={r.k} href={r.h}>
              {r.t} <span aria-hidden>→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Page top: label, title, lead, a small helper line and jump links. */
export function ServiceIntro({
  label,
  title,
  lead,
  aside,
  jumps,
}: {
  label: string;
  title: string;
  lead: ReactNode;
  aside?: ReactNode;
  jumps: { t: string; h: string }[];
}) {
  return (
    <>
      <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
        <span className="arr">←</span> Back to Sunday Office
      </a>
      <p className="so-micro so-micro-red">{label}</p>
      <h1 className="so-serif" style={{ fontSize: "clamp(44px, 8vw, 104px)", marginTop: 14 }}>
        {title}
      </h1>
      <div className="so-bw-intro" style={{ marginTop: 22 }}>
        <p className="so-bw-intro-lead">{lead}</p>
        <div>
          {aside && (
            <p className="so-bw-d" style={{ marginTop: 0, maxWidth: "44ch" }}>
              {aside}
            </p>
          )}
          <nav className="so-bw-jump" aria-label="On this page">
            {jumps.map((j) => (
              <a key={j.h} href={j.h}>
                {j.t}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export function BackHome() {
  return (
    <div style={{ marginTop: 48 }}>
      <a href="/" className="so-arrow">
        <span className="arr">←</span> Back to Sunday Office
      </a>
    </div>
  );
}

export type Price = { t: string; p: string; d: string; tag?: string };

/** Simple, honest pricing cards. */
export function PriceList({
  id = "pricing",
  label = "PRICING",
  title,
  items,
  foot,
}: {
  id?: string;
  label?: string;
  title: string;
  items: Price[];
  foot?: ReactNode;
}) {
  return (
    <section id={id} className="so-bw-sec">
      <p className="so-micro">{label}</p>
      <h2 className="so-serif so-bw-h">{title}</h2>
      <div className="so-prices" style={{ gridTemplateColumns: `repeat(${Math.min(items.length, 4)}, minmax(0, 1fr))` }}>
        {items.map((x) => (
          <div key={x.t} className={"so-price" + (x.p === "Quoted" ? " is-quoted" : "")}>
            {x.tag && <span className="so-micro so-price-tag">{x.tag}</span>}
            <p className="so-bw-t">{x.t}</p>
            <p className="so-price-p">{x.p}</p>
            <p className="so-bw-d">{x.d}</p>
          </div>
        ))}
      </div>
      {foot && <p className="so-bw-d so-price-foot">{foot}</p>}
    </section>
  );
}

export type Chapter = { tab: string; head: string; body: string };

/** The tap-through box: tabs along the side, one paragraph at a time.
 *  Tap a tab to jump, or tap the paragraph to read the next one. */
export function TapStory({ label, chapters, id }: { label: string; chapters: Chapter[]; id?: string }) {
  const [i, setI] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const next = () => setI((n) => (n + 1) % chapters.length);
  useEffect(() => {
    const box = tabsRef.current;
    const on = box?.querySelector<HTMLElement>(".so-tap-tab.is-on");
    if (!box || !on || box.scrollWidth <= box.clientWidth) return;
    box.scrollTo({ left: on.offsetLeft - (box.clientWidth - on.offsetWidth) / 2, behavior: "smooth" });
  }, [i]);
  const c = chapters[i];
  return (
    <section id={id} className="so-bw-sec">
      <div className="so-tap">
        <div ref={tabsRef} className="so-tap-tabs" role="tablist" aria-label={label}>
          <p className="so-micro so-tap-label">{label}</p>
          {chapters.map((ch, n) => (
            <button
              key={ch.tab}
              type="button"
              role="tab"
              aria-selected={n === i}
              className={"so-tap-tab" + (n === i ? " is-on" : "")}
              onClick={() => setI(n)}
            >
              <span className="so-tap-no">{String(n + 1).padStart(2, "0")}</span>
              {ch.tab}
            </button>
          ))}
        </div>
        <button type="button" className="so-tap-body" onClick={next} aria-label="Read the next one">
          <span key={i} className="so-chapter-fade so-tap-inner">
            <span className="so-micro so-tap-count">
              {String(i + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}
            </span>
            <span className="so-tap-head">{c.head}</span>
            <span className="so-tap-text">{c.body}</span>
          </span>
          <span className="so-tap-foot">
            <span className="so-tap-dots" aria-hidden>
              {chapters.map((_, n) => (
                <span key={n} className={n === i ? "is-on" : ""} />
              ))}
            </span>
            <span className="so-micro so-tap-next">
              {i < chapters.length - 1 ? `TAP FOR THE NEXT: ${chapters[i + 1].tab.toUpperCase()} →` : "TAP TO START AGAIN ↺"}
            </span>
          </span>
        </button>
      </div>
    </section>
  );
}
