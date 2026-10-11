import { useState, type ReactNode } from "react";
import { bookHref } from "./service-kit";

/* Helper blocks for service pages: placeholder photo/video slots, a client quote slot,
   a timeline, before/after, an estimate builder, a prep checklist, a plain-English guide. */

export function Slot({ kind = "photo", label, note, ratio = "4 / 5", className = "" }: { kind?: "photo" | "video"; label: string; note?: string; ratio?: string; className?: string }) {
  return (
    <figure className={"hk-slot is-" + kind + " " + className} style={{ aspectRatio: ratio }}>
      <span className="hk-slot-ic" aria-hidden="true">{kind === "video" ? "▶" : "◎"}</span>
      <span className="hk-slot-k">{kind === "video" ? "Video" : "Photo"} coming soon</span>
      <span className="hk-slot-l">{label}</span>
      {note && <span className="hk-slot-n">{note}</span>}
    </figure>
  );
}

export function QuoteSlot({ who, ask }: { who: string; ask: string }) {
  return (
    <section className="so-bw-sec hk-quote">
      <p className="so-micro">IN THEIR WORDS</p>
      <blockquote className="hk-quote-q">
        <span className="hk-quote-mark" aria-hidden="true">“</span>
        <span className="hk-quote-ph">A few words from {who} will go here.</span>
      </blockquote>
      <p className="hk-quote-who">{who}</p>
      <p className="hk-quote-ask">{ask}</p>
    </section>
  );
}

export function BeforeAfter({ before, after, label, title, note }: { before: string; after: string; label: string; title: string; note: ReactNode }) {
  const [v, setV] = useState(55);
  return (
    <section className="so-bw-sec hk-ba">
      <div className="hk-ba-head">
        <p className="so-micro">{label}</p>
        <h2 className="so-serif so-bw-h">{title}</h2>
        <p className="hk-p">{note}</p>
      </div>
      <div className="hk-ba-frame">
        <img src={after} alt="After" />
        <div className="hk-ba-before" style={{ clipPath: `inset(0 ${100 - v}% 0 0)` }}>
          <img src={before} alt="Before" />
        </div>
        <span className="hk-ba-line" style={{ left: v + "%" }} aria-hidden="true"><i>⟷</i></span>
        <span className="hk-ba-tag is-b">Before</span>
        <span className="hk-ba-tag is-a">After</span>
        <input className="hk-ba-range" type="range" min={0} max={100} value={v} onChange={(e) => setV(Number(e.target.value))} aria-label="Drag to compare before and after" />
      </div>
    </section>
  );
}

export function Timeline({ label, title, steps, note }: { label: string; title: string; steps: { when: string; t: string; d: string }[]; note?: string }) {
  return (
    <section className="so-bw-sec hk-tl">
      <p className="so-micro">{label}</p>
      <h2 className="so-serif so-bw-h">{title}</h2>
      <ol className="hk-tl-list">
        {steps.map((s, i) => (
          <li key={s.t}>
            <span className="hk-tl-dot" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <span className="hk-tl-when">{s.when}</span>
            <span className="hk-tl-t">{s.t}</span>
            <span className="hk-tl-d">{s.d}</span>
          </li>
        ))}
      </ol>
      {note && <p className="hk-p hk-tl-note">{note}</p>}
    </section>
  );
}

type Opt = { id: string; t: string; d: string; p: number; plus?: boolean };
export function Estimate({ label, title, base, extras, packages, need }: { label: string; title: string; base: Opt[]; extras: Opt[]; packages: { when: string[]; name: string; price: string; save: string }[]; need: string }) {
  const [b, setB] = useState(base[1]?.id ?? base[0].id);
  const [x, setX] = useState<string[]>([]);
  const bo = base.find((o) => o.id === b)!;
  const total = bo.p + extras.filter((e) => x.includes(e.id)).reduce((a, e) => a + e.p, 0);
  const plus = bo.plus || extras.some((e) => x.includes(e.id) && e.plus);
  const key = [b, ...x].sort().join("+");
  const pk = packages.find((p) => [...p.when].sort().join("+") === key);
  const money = (o: Opt, add = false) => `${add ? "+" : ""}${o.plus ? "from " : ""}$${o.p.toLocaleString()}`;
  const chosen = extras.filter((e) => x.includes(e.id));
  const items = [`${bo.t} (${money(bo)})`, ...chosen.map((e) => `${e.t} (${money(e, true)})`)].join(" + ");
  const pickText = pk ? `${pk.name} (${pk.price}): ${items}` : `${items}. Starting number: ${plus ? "from " : ""}$${total.toLocaleString()}`;
  const toggle = (id: string) => setX((s) => (s.includes(id) ? s.filter((y) => y !== id) : [...s, id]));
  return (
    <section className="so-bw-sec hk-est" id="estimate">
      <div className="hk-est-head">
        <p className="so-micro">{label}</p>
        <h2 className="so-serif so-bw-h">{title}</h2>
        <p className="hk-p">Tap what you need. This is a starting number, not a quote, so nothing here locks you in.</p>
      </div>
      <div className="hk-est-grid">
        <div>
          <p className="hk-est-h">1. The site</p>
          {base.map((o) => (
            <button key={o.id} type="button" className={"hk-est-opt" + (b === o.id ? " is-on" : "")} onClick={() => setB(o.id)} aria-pressed={b === o.id}>
              <span className="hk-est-t">{o.t}</span>
              <span className="hk-est-d">{o.d}</span>
              <span className="hk-est-p">{o.plus ? "from " : ""}${o.p.toLocaleString()}</span>
            </button>
          ))}
          <p className="hk-est-h">2. Add anything?</p>
          {extras.map((o) => (
            <button key={o.id} type="button" className={"hk-est-opt is-x" + (x.includes(o.id) ? " is-on" : "")} onClick={() => toggle(o.id)} aria-pressed={x.includes(o.id)}>
              <span className="hk-est-t">{x.includes(o.id) ? "✓ " : "+ "}{o.t}</span>
              <span className="hk-est-d">{o.d}</span>
              <span className="hk-est-p">+${o.p.toLocaleString()}</span>
            </button>
          ))}
        </div>
        <div className="hk-est-sum">
          <p className="so-micro">YOUR STARTING NUMBER</p>
          <p className="hk-est-total">{plus ? "from " : ""}${total.toLocaleString()}</p>
          <ul>
            <li>{bo.t}</li>
            {extras.filter((e) => x.includes(e.id)).map((e) => <li key={e.id}>{e.t}</li>)}
          </ul>
          {pk && (
            <p className="hk-est-pk">
              That's <b>{pk.name}</b>. Booked together it's <b>{pk.price}</b>, so you save {pk.save}.
            </p>
          )}
          <a className="hk-est-go" href={bookHref(need, pickText)}>Send me this →</a>
          <p className="hk-est-fine">You'll get the real number after a quick talk, before anything starts.</p>
        </div>
      </div>
    </section>
  );
}

export function Checklist({ label, title, items, note }: { label: string; title: string; items: { t: string; d: string }[]; note?: string }) {
  const [done, setDone] = useState<number[]>([]);
  const flip = (i: number) => setDone((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));
  return (
    <section className="so-bw-sec hk-check">
      <div className="hk-check-head">
        <p className="so-micro">{label}</p>
        <h2 className="so-serif so-bw-h">{title}</h2>
        {note && <p className="hk-p">{note}</p>}
        <p className="hk-check-count">{done.length} of {items.length} ready</p>
      </div>
      <ul className="hk-check-list">
        {items.map((it, i) => (
          <li key={it.t}>
            <button type="button" className={done.includes(i) ? "is-on" : ""} onClick={() => flip(i)} aria-pressed={done.includes(i)}>
              <span className="hk-check-box" aria-hidden="true">{done.includes(i) ? "✓" : ""}</span>
              <span className="hk-check-t">{it.t}</span>
              <span className="hk-check-d">{it.d}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function GoodGuide({ label, title, intro, items }: { label: string; title: string; intro: string; items: { t: string; d: string; slot: string }[] }) {
  const [on, setOn] = useState(0);
  const it = items[on];
  return (
    <section className="so-bw-sec hk-guide">
      <p className="so-micro">{label}</p>
      <h2 className="so-serif so-bw-h">{title}</h2>
      <p className="hk-p">{intro}</p>
      <div className="hk-guide-grid">
        <ol className="hk-guide-list">
          {items.map((x, i) => (
            <li key={x.t}>
              <button type="button" className={i === on ? "is-on" : ""} onClick={() => setOn(i)} onMouseEnter={() => setOn(i)}>
                <span className="hk-guide-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="hk-guide-t">{x.t}</span>
              </button>
            </li>
          ))}
        </ol>
        <div className="hk-guide-show">
          <Slot label={it.slot} ratio="16 / 10" />
          <p className="hk-guide-st">{it.t}</p>
          <p className="hk-p">{it.d}</p>
        </div>
      </div>
    </section>
  );
}

export function Glossary({ label, title, words }: { label: string; title: string; words: { w: string; d: string }[] }) {
  return (
    <section className="so-bw-sec hk-gloss">
      <p className="so-micro">{label}</p>
      <h2 className="so-serif so-bw-h">{title}</h2>
      <dl className="hk-gloss-grid">
        {words.map((x) => (
          <div key={x.w}>
            <dt>{x.w}</dt>
            <dd>{x.d}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function Watch({ label, title, videos }: { label: string; title: string; videos: { t: string; d: string }[] }) {
  return (
    <section className="so-bw-sec hk-watch">
      <p className="so-micro">{label}</p>
      <h2 className="so-serif so-bw-h">{title}</h2>
      <div className="hk-watch-grid">
        {videos.map((v) => (
          <div key={v.t}>
            <Slot kind="video" label={v.t} ratio="9 / 16" />
            <p className="hk-watch-d">{v.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- One config per service page ---------- */
type EstOpt = { id: string; t: string; d: string; p: number; plus?: boolean };
export type HelpCfg = {
  need: string;
  reel?: string;
  get?: { t: string; d: string }[];
  work?: { t: string; w: string; img: string; h: string }[];
  noun: string;
  videos: { t: string; d: string }[];
  forWho: { t: string; d: string }[];
  gallery: { label: string; kind?: "photo" | "video" }[];
  quoteWho: string;
  madeImg: string;
  madeTitle: string;
  madeP: string;
  bts: string[];
  timeline: { when: string; t: string; d: string }[];
  estTitle: string;
  base: EstOpt[];
  extras: EstOpt[];
  packages?: { when: string[]; name: string; price: string; save: string }[];
  prep: { t: string; d: string }[];
  guideTitle: string;
  guide: { t: string; d: string; slot: string }[];
  words: { w: string; d: string }[];
};

export function HelpTop({ c }: { c: HelpCfg }) {
  return (
    <>
      <section className="so-bw-sec hk-reel">
        <Slot kind="video" label={c.reel ?? `A 30 second reel of ${c.noun.toLowerCase()} work`} note="Plays on its own, no sound needed" ratio="21 / 9" />
        <div className="hk-reel-cta">
          <a className="so-for-go" href={bookHref(c.need)}>Start a project →</a>
          <a className="hk-reel-alt" href="#estimate">See what it would cost ↓</a>
        </div>
      </section>
      <Watch label="WATCH FIRST" title="Three short videos before you decide." videos={c.videos} />
      <section id="for" className="so-bw-sec so-for">
        <p className="so-micro">WHO THIS IS FOR</p>
        <h2 className="so-serif so-bw-h">Sound like you?</h2>
        <ol className="so-for-list">
          {c.forWho.map((x, i) => (
            <li key={x.t}>
              <span className="so-for-no">{String(i + 1).padStart(2, "0")}</span>
              <span className="so-for-t">{x.t}</span>
              <span className="so-for-d">{x.d}</span>
            </li>
          ))}
        </ol>
        <a className="so-for-go" href={bookHref(c.need)}>Start a project →</a>
      </section>
      {c.get && (
        <section className="so-bw-sec hk-get">
          <p className="so-micro">WHAT YOU GET</p>
          <h2 className="so-serif so-bw-h">Exactly what you walk away with.</h2>
          <ul className="hk-get-list">
            {c.get.map((g) => (
              <li key={g.t}>
                <span className="hk-get-ck" aria-hidden="true">✓</span>
                <span className="hk-get-t">{g.t}</span>
                <span className="hk-get-d">{g.d}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
      {c.work && (
        <section className="so-bw-sec hk-work">
          <p className="so-micro">RECENT {c.noun.toUpperCase()} WORK</p>
          <div className="hk-work-grid">
            {c.work.map((w) => {
              const ext = w.h.startsWith("http");
              return (
                <a key={w.t} href={w.h} className="hk-work-card" {...(ext ? { target: "_blank", rel: "noreferrer" } : {})}>
                  <img src={w.img} alt={w.t} loading="lazy" />
                  <span className="so-micro">{w.w}</span>
                  <span className="hk-work-t">{w.t} {ext ? "↗" : "→"}</span>
                </a>
              );
            })}
          </div>
        </section>
      )}
      <section className="so-bw-sec hk-gal">
        <p className="so-micro">MORE {c.noun.toUpperCase()} WORK</p>
        <h2 className="so-serif so-bw-h">See it before you book it.</h2>
        <div className="hk-gal-grid">
          {c.gallery.map((g, i) => (
            <Slot key={g.label} kind={g.kind} label={g.label} ratio={i === 0 ? "4 / 5" : i === 3 ? "16 / 10" : "1 / 1"} className={"hk-gal-" + i} />
          ))}
        </div>
      </section>
      <QuoteSlot who={c.quoteWho} ask="Client words coming soon. Until then, the work on this page is real, so you can see it for yourself." />
      <section className="so-bw-sec so-madeby">
        <img src={c.madeImg} alt="Hana at work" loading="lazy" />
        <div>
          <p className="so-micro">WHO YOU WORK WITH</p>
          <h2 className="so-serif so-bw-h">{c.madeTitle}</h2>
          <p className="so-madeby-p">{c.madeP}</p>
          <a className="so-for-go" href={bookHref(c.need)}>Start a project →</a>
        </div>
        <div className="so-madeby-strip">
          {c.bts.map((b) => (
            <Slot key={b} label={b} ratio="4 / 3" />
          ))}
        </div>
      </section>
    </>
  );
}

export function HelpBottom({ c }: { c: HelpCfg }) {
  return (
    <>
      <Timeline label="WHAT HAPPENS WHEN" title="From hello to done, step by step." steps={c.timeline} note="Your exact timeline comes with your price, before anything starts. The more you have ready (see the checklist below), the faster it goes." />
      <Estimate label="BUILD YOUR ESTIMATE" title={c.estTitle} need={c.need} base={c.base} extras={c.extras} packages={c.packages ?? []} />
      <Checklist label="BEFORE WE START" title="What to have ready." note="None of this is required to book. It just makes everything faster. Tap each one as you get it together." items={c.prep} />
      <GoodGuide label="FREE GUIDE" title={c.guideTitle} intro={`Whether you hire me or not, here's what makes it work. Tap through the ${c.guide.length}.`} items={c.guide} />
      <Glossary label="THE WORDS, IN PLAIN ENGLISH" title="No jargon needed." words={c.words} />
    </>
  );
}
