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

/** "How it works": every step visible at once, no tapping needed.
 *  A thin line connects them; hovering a step lifts it a little. */
export function ServiceSteps({ steps, label = "HOW IT WORKS", id = "how", title }: { steps: Step[]; label?: string; id?: string; title?: string }) {
  return (
    <section id={id} className="so-bw-sec so-flow">
      <div className="so-flow-head">
        <p className="so-micro">{label}</p>
        <h2 className="so-serif so-bw-h">{title ?? `${steps.length} steps, start to finish.`}</h2>
      </div>
      <ol className="so-flow-list">
        {steps.map((s, i) => (
          <li key={s.t} className="so-flow-step">
            <span className="so-flow-no" aria-hidden>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="so-flow-main">
              <p className="so-flow-t">{s.t}</p>
              <p className="so-flow-d">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
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
const NEED_FOR: Record<string, string> = {
  branding: "Branding",
  logo: "Logo / Identity",
  websites: "Website",
  photography: "Photography",
  headshots: "Headshots",
  moving: "Video / Moving Image",
  direction: "Creative Direction",
};

const NEXT = [
  { t: "Send the form", d: "A few lines about what you need. It takes about two minutes, and rough ideas are welcome." },
  { t: "I reply", d: "Within a few days, with questions or a time to talk it through." },
  { t: "You get a plan", d: "What it includes, the timeline and the price. You'll know the number before anything starts." },
];

export function ServiceCta({ title, sub, current }: { title: string; sub: string; current: string }) {
  return (
    <div className="so-bw-cta so-bw-cta-full">
      <div className="so-bw-cta-top">
        <div>
          <p className="so-serif so-bw-cta-t">{title}</p>
          <p className="so-micro so-bw-cta-s">{sub}</p>
        </div>
        <a href={bookHref(NEED_FOR[current] ?? "Not sure yet / Other")} className="so-bw-cta-btn">
          START A PROJECT →
        </a>
      </div>
      <ol className="so-next">
        {NEXT.map((x, n) => (
          <li key={x.t}>
            <span className="so-micro">{String(n + 1).padStart(2, "0")}</span>
            <p className="so-next-t">{x.t}</p>
            <p className="so-next-d">{x.d}</p>
          </li>
        ))}
      </ol>
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
  jumps?: { t: string; h: string }[];
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

export type Price = { t: string; p: string; d: string; tag?: string; list?: string[]; foot?: string };

/** Pricing in the same cards as the homepage packages: name, price, who it's
 *  for, what's in it, and one tap to ask about it. */
export function PriceList({
  id = "pricing",
  label = "PRICING",
  title,
  items,
  foot,
  need,
}: {
  id?: string;
  label?: string;
  title: string;
  items: Price[];
  foot?: ReactNode;
  need?: string;
}) {
  return (
    <section id={id} className="so-bw-sec so-pricing">
      <p className="so-micro">{label}</p>
      <h2 className="so-serif so-bw-h">{title}</h2>
      <div className="so-pk-grid" style={{ gridTemplateColumns: `repeat(${Math.min(items.length, 4)}, minmax(0, 1fr))` }}>
        {items.map((x) => (
          <a
            key={x.t}
            href={need ? bookHref(need, `${x.t} (${x.p})`) : "/#inquiry"}
            className={"so-pk-card" + (x.tag ? " is-feat" : "")}
          >
            <span className="so-pk-top">
              <span className="so-pk-name">{x.t}</span>
              {x.tag && <span className="so-pk-tag">{x.tag}</span>}
            </span>
            <span className="so-pk-price">{x.p}</span>
            <span className="so-pk-who">{x.d}</span>
            {x.list && x.list.length > 0 && (
              <ul className="so-pk-list">
                {x.list.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            )}
            <span className="so-pk-foot">
              <span className="so-micro">{x.foot ?? (x.p === "Quoted" ? "QUOTED PER PROJECT" : x.p === "Ask me" ? "BUILT AROUND YOU" : x.p.includes("/mo") ? "PER MONTH" : x.p.includes("/hr") ? "PER HOUR" : x.p.startsWith("from") ? "STARTING PRICE" : "FLAT PRICE")}</span>
              <span className="so-pk-go">
                Ask about it <span className="arr" aria-hidden>→</span>
              </span>
            </span>
          </a>
        ))}
      </div>
      {foot && <p className="so-bw-d so-price-foot">{foot}</p>}
    </section>
  );
}

export type Chapter = { tab: string; head: string; body: string };

/** Questions on the left, the answer on the right. Every answer shares one
 *  grid cell, so the box never jumps in height. On a phone it becomes an
 *  accordion: tap a question, the answer opens right under it. */
export function TapStory({ label, chapters, id, title }: { label: string; chapters: Chapter[]; id?: string; title?: string }) {
  const [i, setI] = useState(0);
  const go = (n: number) => setI((n + chapters.length) % chapters.length);
  return (
    <section id={id} className="so-bw-sec so-qa-sec">
      <div className="so-qa-head">
        <p className="so-micro">{label}</p>
        {title && <h2 className="so-serif so-bw-h">{title}</h2>}
      </div>
      <div className="so-qa" style={{ ["--qa-n" as string]: chapters.length }}>
        {chapters.map((c, n) => (
          <div key={c.tab} className={"so-qa-item" + (n === i ? " is-on" : "")} style={{ ["--qa-row" as string]: n + 1 }}>
            <button
              type="button"
              className="so-qa-tab"
              aria-expanded={n === i}
              aria-controls={`${id ?? "qa"}-${n}`}
              onClick={() => setI(n)}
            >
              <span className="so-qa-no">{String(n + 1).padStart(2, "0")}</span>
              <span className="so-qa-tab-t">{c.tab}</span>
              <span className="so-qa-plus" aria-hidden>{n === i ? "–" : "+"}</span>
            </button>
            <div id={`${id ?? "qa"}-${n}`} className="so-qa-panel" role="region" aria-hidden={n !== i}>
              <p className="so-qa-panel-h">{c.head}</p>
              <p className="so-qa-panel-b">{c.body}</p>
              <div className="so-qa-nav">
                <span className="so-micro">
                  {String(n + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}
                </span>
                <span className="so-qa-nav-btns">
                  <button type="button" onClick={() => go(n - 1)} aria-label="Previous">←</button>
                  <button type="button" onClick={() => go(n + 1)} aria-label="Next">
                    {n < chapters.length - 1 ? `Next: ${chapters[n + 1].tab}` : "Back to the start"} →
                  </button>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Booking helpers ---------------- */

/** A link into the inquiry form with the service (and package) already picked. */
export function bookHref(need: string, pkg?: string) {
  const q = new URLSearchParams({ need });
  if (pkg) q.set("pkg", pkg);
  return `/?${q.toString()}#inquiry`;
}

export type Faq = { q: string; a: ReactNode };

/** Plain answers to what people ask before booking. */
export function FaqList({ items, label = "QUESTIONS", title = "Before you book.", id = "faq" }: { items: Faq[]; label?: string; title?: string; id?: string }) {
  return (
    <section id={id} className="so-bw-sec so-faq-sec">
      <div>
        <p className="so-micro">{label}</p>
        <h2 className="so-serif so-bw-h">{title}</h2>
        <p className="so-bw-d" style={{ maxWidth: "34ch" }}>
          Something else on your mind? Ask it in the form, or email{" "}
          <span className="so-faq-mail">hello@sundayoffice.agency</span>.
        </p>
      </div>
      <div className="so-faq">
        {items.slice(0, 4).map((f) => (
          <FaqItem key={f.q} f={f} />
        ))}
        {items.length > 4 && (
          <details className="so-faq-more">
            <summary className="so-micro">
              {items.length - 4} MORE {items.length - 4 === 1 ? "QUESTION" : "QUESTIONS"} <span aria-hidden>+</span>
            </summary>
            {items.slice(4).map((f) => (
              <FaqItem key={f.q} f={f} />
            ))}
          </details>
        )}
      </div>
    </section>
  );
}

function FaqItem({ f }: { f: Faq }) {
  return (
    <details className="so-faq-item">
      <summary>
        <span>{f.q}</span>
        <span className="so-faq-icon" aria-hidden />
      </summary>
      <div className="so-faq-a">{f.a}</div>
    </details>
  );
}

export type FitOption = { label: string; pick: string; price: string; why: string; pkg?: string };

/** "Which one fits?" Tap the line that sounds like you, get one clear suggestion. */
export function FitPicker({
  need,
  question,
  options,
  label = "NOT SURE WHICH ONE?",
  id = "fit",
}: {
  need: string;
  question: string;
  options: FitOption[];
  label?: string;
  id?: string;
}) {
  const [on, setOn] = useState<number | null>(null);
  const o = on === null ? null : options[on];
  return (
    <section id={id} className="so-bw-sec so-fit">
      <div className="so-fit-q">
        <p className="so-micro">{label}</p>
        <h2 className="so-serif so-bw-h">{question}</h2>
        <div className="so-fit-opts" role="radiogroup" aria-label={question}>
          {options.map((x, n) => (
            <button
              key={x.label}
              type="button"
              role="radio"
              aria-checked={on === n}
              className={"so-fit-opt" + (on === n ? " is-on" : "")}
              onClick={() => setOn(n)}
            >
              <span className="so-fit-dot" aria-hidden />
              {x.label}
            </button>
          ))}
        </div>
      </div>
      <div className={"so-fit-a" + (o ? " is-on" : "")} aria-live="polite">
        {o ? (
          <div key={on} className="so-chapter-fade so-fit-card">
            <p className="so-micro">MY SUGGESTION</p>
            <p className="so-fit-pick">{o.pick}</p>
            <p className="so-fit-price">{o.price}</p>
            <p className="so-fit-why">{o.why}</p>
            <a className="so-fit-go" href={bookHref(need, o.pkg ?? o.pick)}>
              Start with this <span aria-hidden>→</span>
            </a>
          </div>
        ) : (
          <div className="so-fit-empty">
            <p className="so-micro">YOUR SUGGESTION SHOWS UP HERE</p>
            <p>Pick the line that sounds most like you. It's only a starting point, and we can change it once we talk.</p>
          </div>
        )}
      </div>
    </section>
  );
}

/** A row of cards you can swipe or step through with arrows. Everything is
 *  on the page at once, nothing hidden behind a tap. */
export function CardRail({ label, title, cards, id }: { label: string; title?: string; cards: { t: string; d: string }[]; id?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [at, setAt] = useState(0);
  const move = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".so-rail-card");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = () => {
      const card = el.querySelector<HTMLElement>(".so-rail-card");
      const w = card ? card.offsetWidth + 16 : 1;
      setAt(Math.round(el.scrollLeft / w));
    };
    el.addEventListener("scroll", on, { passive: true });
    return () => el.removeEventListener("scroll", on);
  }, []);
  return (
    <section id={id} className="so-bw-sec so-rail-sec">
      <div className="so-rail-head">
        <div>
          <p className="so-micro">{label}</p>
          {title && <h2 className="so-serif so-bw-h">{title}</h2>}
        </div>
        <div className="so-rail-btns">
          <span className="so-micro">
            {String(Math.min(at + 1, cards.length)).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
          </span>
          <button type="button" onClick={() => move(-1)} aria-label="Previous">←</button>
          <button type="button" onClick={() => move(1)} aria-label="Next">→</button>
        </div>
      </div>
      <div ref={ref} className="so-rail" tabIndex={0} aria-label={label}>
        {cards.map((c, n) => (
          <article key={c.t} className="so-rail-card">
            <span className="so-micro">{String(n + 1).padStart(2, "0")}</span>
            <p className="so-rail-t">{c.t}</p>
            <p className="so-rail-d">{c.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/** A small bar that follows you down the page once you're past the top,
 *  so booking is always one tap away. Hides at the closing box. */
export function BookBar({ service, price, need }: { service: string; price?: string; need: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => {
      const end = document.querySelector(".so-bw-cta, .so-hs-close");
      const endTop = end ? end.getBoundingClientRect().top : Infinity;
      setShow(window.scrollY > 640 && endTop > window.innerHeight * 0.9);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  return (
    <div className={"so-bookbar" + (show ? " is-on" : "")} aria-hidden={!show}>
      <span className="so-bookbar-t">
        <b>{service}</b>
        {price && <span>{price}</span>}
      </span>
      <a href={bookHref(need)} tabIndex={show ? 0 : -1}>
        Start a project <span aria-hidden>→</span>
      </a>
    </div>
  );
}
