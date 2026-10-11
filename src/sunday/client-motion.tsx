"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { FramePlate, SunMark, type MotifName } from "./brand";
import { sendInquiry } from "../lib/api/inquiry.functions";
import {
  directory,
  finderSteps,
  needOptions,
  panelTags,
  recommend,
  type ProjectTag,
  type Work,
} from "./content";

/* ============================================================
   Sunday Office — isolated client leaves. SSR-safe: window access
   only inside effects / handlers. Transforms only, reduced-motion aware.
   ============================================================ */

/** Motivated parallax drift (transform only, never opacity-to-zero). */
export function Parallax({
  children,
  range = [-16, 16],
  className,
  style,
}: {
  children: ReactNode;
  range?: [number, number];
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], range);
  const motionY = reduce ? 0 : y;

  return (
    <motion.div ref={ref} style={{ ...style, y: motionY }} className={className}>
      {children}
    </motion.div>
  );
}

/** THE DARK FRAME — a draggable / swipeable horizontal viewer. */
export function DarkGallery({ items: all }: { items: Work[] }) {
  const niches = Array.from(new Set(all.map((w) => w.niche).filter(Boolean))) as string[];
  const [niche, setNiche] = useState<string | null>(null);
  const NOW = "__now";
  const hasNow = all.some((w) => w.status === "In progress");
  const items = niche === NOW ? all.filter((w) => w.status === "In progress") : niche ? all.filter((w) => w.niche === niche) : all;
  const trackRef = useRef<HTMLDivElement>(null);
  const [grabbing, setGrabbing] = useState(false);
  const [detail, setDetail] = useState<number | null>(null);
  const drag = useRef({ startX: 0, startLeft: 0, moved: false });

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      if (!drag.current.moved || e.pointerType !== "mouse" || !(e.buttons & 1)) return;
      const dx = e.clientX - drag.current.startX;
      if (Math.abs(dx) < 6) return;
      setGrabbing(true);
      el.scrollLeft = drag.current.startLeft - dx;
    };
    const onEnd = () => {
      drag.current.moved = false;
      setGrabbing(false);
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onEnd);
    el.addEventListener("pointercancel", onEnd);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onEnd);
      el.removeEventListener("pointercancel", onEnd);
    };
  }, []);

  useEffect(() => {
    if (detail === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDetail(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [detail]);

  useEffect(() => {
    // While the page is scrolling, hold hover effects so cards don't flicker under the cursor.
    let t = 0;
    const on = () => {
      document.documentElement.classList.add("is-scrolling");
      window.clearTimeout(t);
      t = window.setTimeout(() => document.documentElement.classList.remove("is-scrolling"), 160);
    };
    window.addEventListener("scroll", on, { passive: true });
    return () => {
      window.removeEventListener("scroll", on);
      window.clearTimeout(t);
    };
  }, []);

  const w = detail !== null ? items[detail] : undefined;

  const [ends, setEnds] = useState({ start: true, end: false });
  const syncEnds = () => {
    const el = trackRef.current;
    if (!el) return;
    setEnds({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  };
  useEffect(() => {
    syncEnds();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", syncEnds, { passive: true });
    window.addEventListener("resize", syncEnds);
    return () => {
      el.removeEventListener("scroll", syncEnds);
      window.removeEventListener("resize", syncEnds);
    };
  }, [niche]);
  const nudge = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".so-workcard");
    const step = card ? card.offsetWidth + 32 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const pick = (n: string | null) => {
    setNiche(n);
    setDetail(null);
    if (trackRef.current) trackRef.current.scrollLeft = 0;
  };

  return (
    <>
    <div className="so-shell so-gallery-bar">
      {niches.length > 1 && (
        <div className="so-niche-row" role="group" aria-label="Filter work">
          <button type="button" className={"so-niche" + (niche === null ? " is-on" : "")} aria-pressed={niche === null} onClick={() => pick(null)}>
            All
          </button>
          {niches.map((n) => (
            <button key={n} type="button" className={"so-niche" + (niche === n ? " is-on" : "")} aria-pressed={niche === n} onClick={() => pick(n)}>
              {n}
            </button>
          ))}
          {hasNow && (
            <button type="button" className={"so-niche so-niche-now" + (niche === NOW ? " is-on" : "")} aria-pressed={niche === NOW} onClick={() => pick(NOW)}>
              <span className="so-niche-dot" aria-hidden /> On the desk now
            </button>
          )}
        </div>
      )}
      <div className="so-gallery-nav">
        <button type="button" className="so-gallery-btn" aria-label="Previous" disabled={ends.start} onClick={() => nudge(-1)}>
          ←
        </button>
        <button type="button" className="so-gallery-btn" aria-label="Next" disabled={ends.end} onClick={() => nudge(1)}>
          →
        </button>
      </div>
    </div>
    <div
      ref={trackRef}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") { e.preventDefault(); nudge(1); }
        if (e.key === "ArrowLeft") { e.preventDefault(); nudge(-1); }
      }}
      className={"so-gallery-scroll" + (grabbing ? " grabbing" : "")}
      onPointerDown={(e) => {
        const el = trackRef.current;
        if (!el || e.pointerType !== "mouse" || e.button !== 0) return;
        drag.current = { startX: e.clientX, startLeft: el.scrollLeft, moved: true };
      }}
      onPointerLeave={() => {
        drag.current.moved = false;
        setGrabbing(false);
      }}
      role="region"
      aria-label="Featured work. Drag to scroll"
    >
      <div className="so-gallery-track">
        {items.map((w, i) => {
          const inner = (
            <>
              <div style={{ position: "relative" }}>
                {w.image ? (
                  <span className="so-workcard-media">
                    <img
                      src={w.image}
                      alt={w.client}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </span>
                ) : w.color && (w.logo || w.logotext) ? (
                  <span
                    className="so-workcard-tile"
                    style={{ backgroundColor: w.color }}
                  >
                    {w.logo ? (
                      <img
                        src={w.logo}
                        alt={`${w.client} logo`}
                        loading="lazy"
                        className="so-workcard-tile-logo"
                      />
                    ) : (
                      <span className="so-workcard-tile-word" style={{ color: w.logotext?.color }}>
                        <span className="so-tile-main">{w.logotext?.main}</span>
                        {w.logotext?.sub && (
                          <span className="so-tile-sub">{w.logotext.sub}</span>
                        )}
                      </span>
                    )}
                  </span>
                ) : (
                  <FramePlate motif={w.motif} ratio="tall" caption={w.file} />
                )}
                {w.status && <span className={"so-status so-status-on-card" + (w.status === "Launched" ? " is-live" : "") + (/progress/i.test(w.status) ? " is-rec" : "")}>{w.status}</span>}
                <span className="so-workcard-hover" aria-hidden>
                  <span>View project</span>
                  <span className="caret" aria-hidden>
                    →
                  </span>
                </span>
              </div>
            <div className="so-workcard-cap">
              <span className="so-micro">{w.niche ? w.niche.toUpperCase() : w.file}</span>
              <span className="t">{w.type ?? w.service}</span>
              <span className="c" style={{ fontWeight: 700, letterSpacing: "0.06em", marginTop: 2 }}>
                {w.client}
              </span>
              <span className="c">
                {w.location} · {w.year}
              </span>
              <span className="arr-row">
                <span
                  className="so-arrow"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") e.preventDefault();
                  }}
                >
                  View project <span className="arr">→</span>
                </span>
              </span>
            </div>
            </>
          );
          return w.url ? (
            <a
              key={w.file}
              className="so-workcard so-workcard-btn"
              href={w.url}
              target={w.url.startsWith("/") ? undefined : "_blank"}
              rel={w.url.startsWith("/") ? undefined : "noreferrer"}
              onClick={(e) => {
                e.preventDefault();
                setDetail(i);
              }}
              aria-label={`Open details for ${w.client}`}
            >
              {inner}
            </a>
          ) : (
            <article
              key={w.file}
              className="so-workcard so-workcard-btn"
              onClick={() => setDetail(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setDetail(i);
                }
              }}
            >
              {inner}
            </article>
          );
        })}
      </div>
    </div>
    {w && (
      <div
        className="so-cw-overlay"
        onClick={(e) => {
          if (e.target === e.currentTarget) setDetail(null);
        }}
      >
        <div className="so-cw-card" role="dialog" aria-modal="true" aria-label={w.client}>
          <button className="so-cw-close" aria-label="Close" onClick={() => setDetail(null)}>
            ✕
          </button>
          {w.image ? (
            <div className="so-cw-media">
              <img src={w.image} alt={w.client} />
            </div>
          ) : w.color && (w.logo || w.logotext) ? (
            <div className="so-cw-tile" style={{ backgroundColor: w.color }}>
              {w.logo ? (
                <img className="so-cw-tile-logo" src={w.logo} alt={`${w.client} logo`} />
              ) : (
                <span className="so-workcard-tile-word" style={{ color: w.logotext?.color }}>
                  <span className="so-tile-main">{w.logotext?.main}</span>
                  {w.logotext?.sub && <span className="so-tile-sub">{w.logotext.sub}</span>}
                </span>
              )}
            </div>
          ) : (
            <div className="so-cw-tile" style={{ backgroundColor: "#141518" }}>
              <FramePlate motif={w.motif} ratio="wide" caption={w.file} />
            </div>
          )}
          <div className="so-cw-body">
            <p className="so-micro">{w.file}</p>
            <h3 className="so-cw-title">{w.client}</h3>
            <p className="so-cw-meta">
              {w.service} · {w.location} · {w.year}
            </p>
            <p className="so-cw-note">Each project opens with its own story.</p>
            {w.url ? (
              <a
                className="so-cw-open"
                href={w.url}
                target={w.url.startsWith("/") ? undefined : "_blank"}
                rel="noreferrer"
              >
                VIEW PROJECT →
              </a>
            ) : (
              <p className="so-cw-note">Story coming soon.</p>
            )}
          </div>
        </div>
      </div>
    )}
    </>
  );
}


/* ---- Shared Project-Finder state — carries into Office Hours. ---- */
let sharedAnswers: Record<string, string> = {};
const listeners = new Set<() => void>();
export function getFinderAnswers() {
  return { ...sharedAnswers };
}
export function setFinderAnswers(a: Record<string, string>) {
  sharedAnswers = { ...a };
  listeners.forEach((l) => l());
}
export function subscribeFinder(l: () => void) {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}

/** Interactive project finder — answer three questions, get a starting point. */
export function ProjectFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [started, setStarted] = useState(false);
  // Mobile: the question panel collapses to a single open/close row.
  const [finderOpen, setFinderOpen] = useState(true);
  const [qMobile, setQMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 860px)");
    const update = () => {
      const on = mq.matches;
      setQMobile(on);
      if (on) setFinderOpen(false);
    };
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const allAnswered = Object.keys(answers).length === finderSteps.length;
  const rec = allAnswered ? recommend(answers) : null;

  const choose = (option: string) => {
    const s = finderSteps[step];
    if (!s) return;
    const next = { ...answers, [s.id]: option };
    setAnswers(next);
    setFinderAnswers(next);
    setStep((v) => Math.min(v + 1, finderSteps.length - 1));
    setStarted(true);
  };

  const active = finderSteps[step];

  return (
    <div className="so-finder">
      {!allAnswered && (
        <div className="so-finder-step" key={active.id}>
          {qMobile ? (
            <button
              type="button"
              className="so-finder-qrow"
              onClick={() => setFinderOpen((v) => !v)}
            >
              <span className="q">{active.q}</span>
              <span className="so-finder-qmark">
                {finderOpen ? "CLOSE ↑" : "OPEN ↓"}
              </span>
            </button>
          ) : (
            <p className="q">{active.q}</p>
          )}
          {(!qMobile || finderOpen) && (
          <div className="so-finder-options">
            {active.options.map((opt) => (
              <button
                key={opt}
                className={
                  "so-fopt" + (answers[active.id] === opt ? " is-sel" : "")
                }
                onClick={() => choose(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          )}
          <p className="so-micro mt-4">
            Step {step + 1} of {finderSteps.length} ·{" "}
            {answers["working-with"] ? "answered " + Object.keys(answers).length : "no selections yet"}
          </p>
        </div>
      )}

      {allAnswered && rec && (
        <div className="so-finder-answer" data-screenshot-safe>
          <p className="so-micro">OUR READ</p>
          <h3 className="so-serif" style={{ fontSize: "clamp(24px,3.4vw,40px)", marginTop: 10 }}>
            {rec.headline}
          </h3>
          <p style={{ maxWidth: "52ch", marginTop: 16 }}>{rec.copy}</p>
          <div className="so-wiz-answer-actions">
            <a
              href="#inquiry"
              className="so-btn"
              onClick={(e) => {
                const el = document.getElementById("inquiry");
                if (!el) return;
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {rec.cta} →
            </a>
            <button
              className="so-btn so-btn-ghost"
              onClick={() => {
                setAnswers({});
                setStep(0);
                setStarted(false);
              }}
            >
              Restart
            </button>
          </div>
        </div>
      )}

      {!started && !allAnswered && (
        <p className="eyebrow-cap">
          Answer three quick questions and we'll point you somewhere useful.
        </p>
      )}
    </div>
  );
}

/** THE ARCHIVE — six filters for browsing the work. Services live in
   the four rooms; these pills open a room of the archive. */
export const ARCHIVE_PILLS: ProjectTag[] = [
  "PHOTOGRAPHY",
  "CREATIVE DIRECTION",
  "MOVING IMAGE",
  "WEBSITES",
  "BRANDING + IDENTITY",
  "CONTENT + SOCIAL",
];

const PILL_HREF: Record<string, string> = {
  PHOTOGRAPHY: "/archive?room=photography",
  "CREATIVE DIRECTION": "/archive?room=creative-direction",
  "MOVING IMAGE": "/archive?room=moving-image",
  WEBSITES: "/archive?room=websites",
  "BRANDING + IDENTITY": "/archive?room=branding",
  "CONTENT + SOCIAL": "/archive?room=content-social",
};

export function ArchiveFilter() {
  return (
    <div className="so-archive-filters">
      {ARCHIVE_PILLS.map((c) => (
        <a key={c} className="so-filter" href={PILL_HREF[c]}>
          {c}
        </a>
      ))}
    </div>
  );
}

/** Tactile "like" button — darkens on click and stays selected. */
export function LikeTag({
  children,
  active = false,
  onChange,
  className,
}: {
  children: ReactNode;
  active?: boolean;
  onChange?: (v: boolean) => void;
  className?: string;
}) {
  const [on, setOn] = useState(active);
  return (
    <button
      className={"so-filter" + (on ? " is-active" : "") + (className ? " " + className : "")}
      aria-pressed={on}
      onClick={() => {
        const next = !on;
        setOn(next);
        onChange?.(next);
      }}
    >
      {children}
    </button>
  );
}

/** THE DIRECTORY — an openable index. Click a category to open it; the
   header darkens when it is open; click again to close. Nothing else. */
/* Where each Directory category (and its items) opens to. */
const directoryLinks: Record<string, { href: string; label: string; items?: Record<string, string> }> = {
  "Creative Direction": { href: "/creative-direction-content", label: "Open Creative Direction" },
  Photography: {
    href: "/photography",
    label: "Open Photography",
    items: {
      Commercial: "/photography/brands",
      Editorial: "/photography/creative",
      Portrait: "/photography/people",
      Fashion: "/photography/creative",
      "Food + Hospitality": "/photography/brands",
      Product: "/photography/brands",
      Headshots: "/headshots",
      "Model Digitals": "/headshots",
    },
  },
  Digital: {
    href: "/websites",
    label: "Open Websites + Digital",
    items: { Websites: "/websites", "Landing Pages": "/websites" },
  },
  "Campaigns + Content": {
    href: "/creative-direction-content",
    label: "Open Campaigns + Content",
    items: {
      "Social Content": "/creative-direction-content",
      "Video / Reels": "/moving-image",
      Music: "/moving-image",
      Commercials: "/moving-image",
    },
  },
  Identity: {
    href: "/logo-identity",
    label: "Open Identity",
    items: { "Select Brand Direction": "/branding", "Select Logo Work": "/logo-identity" },
  },
  "Who We Work With": { href: "#finder", label: "Find what you need" },
};

export function DirectoryAccordion() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  return (
    <div className="so-directory-index">
      {directory.map((col, i) => {
        const isOpen = !!open[i];
        return (
          <div key={col.head} className="so-dir-row">
            <button
              type="button"
              className={"so-dir-head" + (isOpen ? " is-open" : "")}
              aria-expanded={isOpen}
              onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
            >
              <span className="so-dir-head-name">{col.head}</span>
              <span className="so-dir-head-side">
                <span className="so-micro so-dir-head-meta">
                  {String(col.items.length).padStart(2, "0")} · {isOpen ? "CLOSE" : "OPEN"}
                </span>
                <span className="so-dir-caret" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </span>
            </button>
            {isOpen && (
              <div className="so-dir-body">
                {col.items.map((it) => {
                  const href = directoryLinks[col.head]?.items?.[it];
                  return href ? (
                    <a key={it} href={href} className="so-dir-item so-dir-item-link">
                      <span>{it}</span>
                      <span className="arr" aria-hidden>→</span>
                    </a>
                  ) : (
                    <div key={it} className="so-dir-item">
                      {it}
                    </div>
                  );
                })}
                {directoryLinks[col.head] && (
                  <a href={directoryLinks[col.head].href} className="so-dir-room">
                    {directoryLinks[col.head].label} <span className="arr" aria-hidden>→</span>
                  </a>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/** PROJECT INQUIRY — elegant fill-in form (confirmation state, no backend yet). */
const inquiryFields: Array<{
  id: string;
  label: string;
  type: "input" | "textarea" | "select";
  col?: "half" | "full";
  placeholder?: string;
  options?: string[];
}> = [
  { id: "name", label: "Name", type: "input", placeholder: "Your name", col: "half" },
  { id: "email", label: "Email", type: "input", placeholder: "you@studio.com", col: "half" },
  { id: "need", label: "What do you need?", type: "select", col: "half" },
  { id: "website", label: "Website / Instagram", type: "input", placeholder: "link (optional)", col: "half" },
  { id: "about", label: "Tell me about it.", type: "textarea", col: "full" },
];

export function InquiryForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [sentEmail, setSentEmail] = useState(false);
  const [sendReason, setSendReason] = useState("");
  const [mailBody, setMailBody] = useState("");
  const errRef = useRef<HTMLDivElement>(null);
  // Mobile quick-form wizard — one field at a time, "Next" flow.
  const [mobile, setMobile] = useState(false);
  const [wizStep, setWizStep] = useState(0);
  const [fullForm, setFullForm] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 860px)");
    const update = () => {
      const on = mq.matches;
      setMobile(on);
      // Phones show the whole form too (no one-at-a-time steps).
    };
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const wizard = mobile && !fullForm;
  const [review, setReview] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const goNext = () => setWizStep((s) => Math.min(inquiryFields.length - 1, s + 1));
  const goBack = () => setWizStep((s) => Math.max(0, s - 1));
  // Pre-fill from the Project Finder — selections carry through.
  const finder = getFinderAnswers();
  // Links from the service pages carry ?need=…&pkg=… so the form arrives filled in.
  const urlQ = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const urlNeed = urlQ?.get("need") ?? "";
  const urlPkg = (urlQ?.get("pkg") ?? "").replace(/\.html$/, "");
  const needPrefill = (urlNeed && needOptions.includes(urlNeed) ? urlNeed : "") || (finder["need"] ?? "");
  // Arriving from the quiz or a "Book" button: land on the form once the page has settled.
  useEffect(() => {
    if (!(urlNeed || urlPkg) || window.location.hash !== "#inquiry") return;
    const go = () => document.getElementById("inquiry")?.scrollIntoView({ block: "start" });
    const ids = [60, 400, 1900].map((ms) => window.setTimeout(go, ms));
    const stop = () => ids.forEach((id) => window.clearTimeout(id));
    window.addEventListener("pointerdown", stop, { once: true });
    window.addEventListener("keydown", stop, { once: true });
    return () => {
      stop();
      window.removeEventListener("pointerdown", stop);
      window.removeEventListener("keydown", stop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const workingWith = finder["working-with"] ?? "";
  // "Not sure" gets a gentle prompt in the message area.
  const aboutPlaceholder =
    needPrefill.includes("Not sure")
      ? "What you're working on. Even a rough idea helps."
      : "What you're making, what's not working, what you wish it looked like.";

  const inquiryNeedList = needOptions;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    // Whatever they picked on a service page always reaches the email, even if they cleared the box.
    if (urlPkg && !(data.about ?? "").includes(urlPkg)) data.about = `Picked on the site: ${urlPkg}\n\n${data.about ?? ""}`.trim();
    setSending(true);
    setSendError(null);
    setSendReason("");
    setMailBody(
      [
        data.name && `Name: ${data.name}`,
        data.business && `Business: ${data.business}`,
        data.website && `Website / Instagram: ${data.website}`,
        data.need && `What I need: ${data.need}`,
        data.budget && `Budget: ${data.budget}`,
        data.timeline && `Timeline: ${data.timeline}`,
        data.about && `\n${data.about}`,
      ]
        .filter(Boolean)
        .join("\n"),
    );
    const fail = (msg: string) => {
      setSendError(msg);
      setTimeout(() => {
        const el = errRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top < 80 || r.bottom > window.innerHeight - 20) window.scrollTo({ top: window.scrollY + r.top - window.innerHeight / 2 + r.height / 2, behavior: "smooth" });
      }, 60);
    };
    try {
      const result = await sendInquiry({
        data: {
          name: data.name ?? "",
          email: data.email,
          business: data.business,
          website: data.website,
          based: data.based ?? "",
          timeline: data.timeline,
          budget: data.budget,
          need: data.need,
          about: data.about,
          else: data.else ?? "",
        },
      });
      if (result.ok) {
        setSentEmail(!!data.email && !!(result as { confirmed?: boolean }).confirmed);
        setSent(true);
        return;
      }
      const r = result as { notConfigured?: boolean; error?: string };
      setSendReason(r.notConfigured ? "The form isn't connected to email yet." : r.error ?? "");
      fail("Your message didn't go through. Nothing you wrote is lost. Try again, or email it to me instead.");
    } catch {
      fail("Your message didn't go through. Check your connection and try again, or email it to me instead.");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="so-finder-answer" data-screenshot-safe>
        <p className="so-micro so-micro-red">sent</p>
        <h3 className="so-serif" style={{ fontSize: "clamp(22px,3vw,34px)", marginTop: 10 }}>
          Thank you. Your message has been sent.
        </h3>
        <p style={{ maxWidth: "48ch", marginTop: 14 }}>
          I'll get back to you within 2 to 3 business days.
          {sentEmail ? " A copy of your message is on its way to your inbox (check spam if you don't see it)." : ""} If
          it's urgent, email hello@sundayoffice.agency.
        </p>
        <button className="so-btn so-btn-ghost mt-6" onClick={() => setSent(false)}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className="so-form"
      onSubmit={handleSubmit}
    >
      {needPrefill && (
        <p className="so-micro so-micro-red" style={{ gridColumn: "1 / -1" }}>
          YOU PICKED: {needPrefill}{urlPkg ? " · " + urlPkg : ""}
          {workingWith ? " · " + workingWith : ""}
        </p>
      )}
      {wizard && !review && (
        <div className="so-wiz-meta">
          <button
            type="button"
            className="so-link-jump"
            onClick={goBack}
            style={{ visibility: wizStep === 0 ? "hidden" : "visible" }}
          >
            ← Back
          </button>
          <span className="so-wiz-progress">
            STEP {wizStep + 1} OF {inquiryFields.length}
          </span>
        </div>
      )}
      {inquiryFields.map((f, i) => (
        <div
          key={f.id}
          className={
            "so-field" +
            (f.col === "full" ? " full" : "") +
            (wizard && i === wizStep ? " so-wiz-active" : "")
          }
          style={wizard && i !== wizStep ? { display: "none" } : undefined}
        >
          <label htmlFor={"inq-" + f.id}>{f.label}</label>
          {f.type === "textarea" ? (
            <textarea
              id={"inq-" + f.id}
              name={f.id}
              defaultValue={f.id === "about" && urlPkg ? `I'm interested in: ${urlPkg}.\n\n` : f.id === "about" && needPrefill.includes("Not sure") ? "" : undefined}
              placeholder={f.id === "about" ? aboutPlaceholder : f.placeholder}
            />
          ) : f.type === "select" && f.id === "need" ? (
            <select id={"inq-" + f.id} name={f.id} defaultValue={needPrefill || ""}>
              <option value="" disabled>
                Choose one
              </option>
              {needOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          ) : f.type === "select" ? (
            <select id={"inq-" + f.id} name={f.id} defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              {(f.options ?? inquiryNeedList).map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={"inq-" + f.id}
              name={f.id}
              type="text"
              placeholder={f.placeholder}
              onKeyDown={(e) => {
                if (wizard && !review && e.key === "Enter") {
                  e.preventDefault();
                  if (wizStep === inquiryFields.length - 1) setReview(true);
                  else goNext();
                }
              }}
            />
          )}
          {wizard && i === wizStep && (
            <button
              type="button"
              className="so-wiz-arrow"
              aria-label={wizStep === inquiryFields.length - 1 ? "Review your answers" : "Next"}
              onClick={() => (wizStep === inquiryFields.length - 1 ? setReview(true) : goNext())}
            >
              <span className="so-wiz-chev" aria-hidden="true" />
            </button>
          )}
        </div>
      ))}
      {wizard && review && (() => {
        const vals: Record<string, string> = {};
        if (formRef.current) {
          const fd = new FormData(formRef.current);
          for (const fld of inquiryFields) vals[fld.id] = String(fd.get(fld.id) ?? "");
        }
        const filled = inquiryFields.filter((fld) => vals[fld.id]?.trim());
        return (
          <div className="so-wiz-review" data-screenshot-safe>
            <p className="so-micro">CHECK YOUR ANSWERS BEFORE YOU SEND</p>
            {filled.length === 0 ? (
              <p className="so-micro">Nothing filled in yet. A quick hello is fine.</p>
            ) : (
              <div className="so-wiz-review-rows">
                {filled.map((fld) => (
                  <div className="so-wiz-review-row" key={fld.id}>
                    <span className="so-micro">{fld.label}</span>
                    <span>{vals[fld.id]}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="so-wiz-review-actions">
              <button
                type="button"
                className="so-btn so-btn-ghost"
                onClick={() => setReview(false)}
              >
                ← Edit answers
              </button>
              <button type="submit" className="so-btn" disabled={sending}>
                {sending ? "Sending…" : "Send"} <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        );
      })()}
      <div className="so-form-submit">
        {sendError && (
          <div className="so-form-error" role="alert" ref={errRef}>
            <p className="so-form-error-t">Not sent yet</p>
            <p>{sendError}</p>
            {sendReason && <p className="so-form-error-why">Reason: {sendReason}</p>}
            <a
              className="so-btn so-btn-ghost"
              href={`mailto:hello@sundayoffice.agency?subject=${encodeURIComponent("New inquiry")}&body=${encodeURIComponent(mailBody)}`}
            >
              Email it instead →
            </a>
          </div>
        )}
        {!wizard && (
          <button type="submit" className="so-btn" disabled={sending}>
            {sending ? "Sending…" : "Send"} <span aria-hidden>→</span>
          </button>
        )}
        {mobile ? (
          <button
            type="button"
            className="so-wiz-full"
            onClick={() => {
              setFullForm((v) => !v);
              setReview(false);
            }}
          >
            {wizard ? "See the full form ↓" : "Back to the quick form ↑"}
          </button>
        ) : null}
        <p className="so-micro mt-4">
          Or email <a className="so-link-jump" href="mailto:hello@sundayoffice.agency">hello@sundayoffice.agency</a>
        </p>
      </div>
    </form>
  );
}

/* ---- Calm entry: a hello before the office opens. ---- */
export function SiteIntro() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1750);
    return () => clearTimeout(t);
  }, []);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="so-intro"
          aria-hidden
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -46 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="so-intro-inner"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }}
          >
            <motion.div
              className="so-intro-sun"
              variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <SunMark size={40} color="#dfd6c0" className="so-emboss-mark" />
            </motion.div>
            <motion.div
              className="so-intro-title"
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Sunday Office
            </motion.div>
            <motion.div
              className="so-intro-rule"
              variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div
              className="so-intro-tag"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              transition={{ duration: 0.5 }}
            >
              Good ideas deserve somewhere to go.
            </motion.div>
            <motion.div
              className="so-intro-micro"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Creative Direction · Photography · Digital
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---- Hero orb: a giant faint sun disc that slowly turns and
   drifts toward the cursor — the "Sunday office" presence. ---- */
export function HeroOrb() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 55, damping: 14 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 55, damping: 14 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, mx, my]);

  return (
    <motion.div
      className="so-orb"
      aria-hidden
      style={
        reduce
          ? undefined
          : ({ rotateX: rx, rotateY: ry, transformPerspective: 1100 } as never)
      }
    >
      <SunMark size={760} color="var(--color-jade)" className="orb-svg" />
    </motion.div>
  );
}

/* ---- Hero frames: tilt gently toward the cursor. ---- */
export function HeroFrames() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 16 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 120, damping: 16 });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="so-hero-frames"
      onPointerMove={reduce ? undefined : onMove}
      onPointerLeave={reduce ? undefined : onLeave}
      style={
        reduce
          ? undefined
          : ({ rotateX: rx, rotateY: ry, transformPerspective: 900, transformStyle: "preserve-3d" } as never)
      }
    >
      <FramePlate motif="porcelain" ratio="tall" caption="PORTRAIT · TO BE PLACED" />
      <FramePlate motif="stem" ratio="tall" caption="ENVIRONMENT · TO BE PLACED" />
      <FramePlate motif="monogram" ratio="tall" caption="STILL LIFE · TO BE PLACED" />
    </motion.div>
  );
}

/* ---- Calm service marquee (one per page). ---- */
const MARQUEE_ITEMS = [
  "Campaigns",
  "Content",
  "Video",
  "Moving Image",
  "Social",
  "Brand Direction",
  "Photography",
  "Websites",
];

/* Rare accent inks on the embossed stationery — only two gold, one oxblood. */
const MARQUEE_GOLD = new Set(["Photography", "Websites"]);
const MARQUEE_VERM = new Set(["Brand Direction"]);

export function ServiceMarquee() {
  const row = (
    <>
      {MARQUEE_ITEMS.map((it) => (
        <span key={it}>
          <span className={MARQUEE_GOLD.has(it) ? "ink-gold" : MARQUEE_VERM.has(it) ? "ink-verm" : ""}>
            {it}
          </span>
          <span className="dot" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </>
  );
  return (
    <div className="so-marquee" aria-hidden>
      <div className="so-marquee-track">
        <div className="so-marquee-group">{row}</div>
        <div className="so-marquee-group">{row}</div>
      </div>
    </div>
  );
}

/* ---- Gentle scroll reveal (transform + opacity, reduced-motion safe). ---- */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---- Header scroll-state — subtle shadow + reduced padding once scrolled. ---- */
export function NavState() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const v = window.scrollY > 24;
      setScrolled((prev) => (prev === v ? prev : v));
      // Over the full-screen cover photo, the bar goes clear.
      const cover = document.querySelector(".so-cover");
      const nav = document.querySelector(".so-nav");
      if (nav) nav.classList.toggle("is-on-cover", !!cover && window.scrollY < window.innerHeight - 80);
      // Once the big cover button slides up under the bar, its twin joins Menu up top.
      const btn = document.querySelector(".so-cover-btn");
      const navH = nav ? nav.getBoundingClientRect().height : 80;
      if (nav) nav.classList.toggle("cta-in", !btn || btn.getBoundingClientRect().bottom < navH);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const nav = document.querySelector(".so-nav");
    if (nav) nav.classList.toggle("is-scrolled", scrolled);
  }, [scrolled]);
  return null;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.4 });
  return <motion.div className="so-progress" style={{ scaleX }} aria-hidden />;
}

/* ---- Photography portfolio: calm masonry grid + lightbox. ---- */
type PortfolioItem = {
  id: string;
  cat: "Editorial" | "Product" | "Portrait";
  title: string;
  note: string;
  motif: MotifName;
  ratio: "tall" | "wide" | "square";
};

const PORTFOLIO: PortfolioItem[] = [
  { id: "pf1", cat: "Editorial", title: "Salt Water", note: "Editorial series, Puget Sound", motif: "stem", ratio: "tall" },
  { id: "pf2", cat: "Product", title: "Ceramics, quiet", note: "Product study", motif: "porcelain", ratio: "square" },
  { id: "pf3", cat: "Portrait", title: "Noon", note: "Portrait, natural light", motif: "sun", ratio: "tall" },
  { id: "pf4", cat: "Editorial", title: "Harbor Lines", note: "Editorial, print and web", motif: "monogram", ratio: "wide" },
  { id: "pf5", cat: "Product", title: "Table, South Sound", note: "Hospitality product", motif: "ring", ratio: "square" },
  { id: "pf6", cat: "Portrait", title: "Sunday Light", note: "Portrait series", motif: "sunburst", ratio: "tall" },
  { id: "pf7", cat: "Editorial", title: "Grain & Glass", note: "Editorial, moving image side", motif: "porcelain", ratio: "wide" },
  { id: "pf8", cat: "Product", title: "Atelier apparel", note: "Product, brand direction", motif: "stem", ratio: "square" },
  { id: "pf9", cat: "Portrait", title: "Family, Tacoma", note: "Candid portrait", motif: "ring", ratio: "tall" },
];

const PCATS: Array<PortfolioItem["cat"]> = ["Editorial", "Product", "Portrait"];

export function Portfolio() {
  const [cat, setCat] = useState<PortfolioItem["cat"]>("Editorial");
  const [idx, setIdx] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const shown = PORTFOLIO.filter((p) => p.cat === cat);
  const count = shown.length;

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((v) => (v === null ? v : (v + 1) % count));
      if (e.key === "ArrowLeft") setIdx((v) => (v === null ? v : (v - 1 + count) % count));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, count]);

  const active = idx === null ? null : shown[idx];

  return (
    <div>
      <div className="portfolio-filters">
        {PCATS.map((c) => (
          <button
            key={c}
            className={"so-filter" + (cat === c ? " is-active" : "")}
            aria-pressed={cat === c}
            onClick={() => {
              setCat(c);
              setIdx(null);
            }}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="portfolio-grid">
        {shown.map((p, i) => (
          <motion.div
            key={p.id}
            className="portfolio-card"
            role="button"
            tabIndex={0}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setIdx(i)}
            onKeyDown={(e: ReactKeyboardEvent<HTMLElement>) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIdx(i);
              }
            }}
          >
            <FramePlate motif={p.motif} ratio={p.ratio} caption={p.cat.toUpperCase()} />
            <div className="portfolio-cap">
              <span className="t">{p.title}</span>
              <div className="row">
                <span className="m">{p.note}</span>
                <span className="m">{p.cat}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {active && (
        <div
          className="lb-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIdx(null);
          }}
        >
          <div className="lb-card">
            <div className="lb-media">
              <FramePlate
                motif={active.motif}
                ratio="wide"
                caption={active.cat.toUpperCase()}
                style={{ minHeight: 320 }}
              />
            </div>
            <div className="lb-body">
              <div>
                <div className="t">{active.title}</div>
                <div className="m">
                  {active.note} · {active.cat}
                </div>
              </div>
              <div className="lb-nav">
                <span className="lb-count">
                  {String((idx ?? 0) + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                </span>
                <button
                  className="lb-btn"
                  aria-label="Previous"
                  onClick={() => setIdx((v) => (v === null ? v : (v - 1 + count) % count))}
                >
                  ←
                </button>
                <button
                  className="lb-btn"
                  aria-label="Next"
                  onClick={() => setIdx((v) => (v === null ? v : (v + 1) % count))}
                >
                  →
                </button>
                <button className="lb-btn" aria-label="Close" onClick={() => setIdx(null)}>
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
/* ---- Photography gallery — pulled from the office's Instagram. ---- */
const PHOTOS = [
  { src: "/assets/photography/avery-01.jpg", cap: "Avery Tien · campaign", ratio: "tall" },
  { src: "/assets/photography/beach-01.jpg", cap: "Night series", ratio: "wide" },
  { src: "/assets/photography/avery-02.jpg", cap: "Avery Tien · campaign", ratio: "tall" },
  { src: "/assets/photography/beach-04.jpg", cap: "Night series", ratio: "square" },
  { src: "/assets/photography/beach-03.jpg", cap: "Night series", ratio: "wide" },
  { src: "/assets/photography/beach-02.jpg", cap: "Night series", ratio: "square" },
  { src: "/assets/photography/night-01.jpg", cap: "Shoreline, blue hour", ratio: "wide" },
];

export function PhotographyGallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      <div className="so-photo-grid">
        {PHOTOS.map((ph, i) => (
          <button
            key={ph.src}
            className="so-photo-cell"
            type="button"
            onClick={() => setOpen(i)}
            aria-label={ph.cap}
          >
            <img src={ph.src} alt={ph.cap} loading="lazy" className={"so-photo-ratio-" + ph.ratio} />
            <span className="so-photo-cap">{ph.cap}</span>
          </button>
        ))}
      </div>
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
    </div>
  );
}
