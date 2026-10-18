import { useState } from "react";
import { SiteBar } from "./site-bar";
import { BookBar, FaqList, WorkCards, bookHref } from "./service-kit";
import { StructuredData } from "../components/StructuredData";
import { NEEDS, NEED_GROUPS, type Need } from "./needs-content";
import { GUIDES, type Guide } from "./guides-content";
import { WA_RESOURCES } from "./wa-resources";

const faqLd = (faq: { q: string; a: string }[]) =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  });

function Shell({ back = { t: "What do you need help with?", h: "/help" }, children }: { back?: { t: string; h: string }; children: React.ReactNode }) {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href={back.h} className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> {back.t}
        </a>
        {children}
      </div>
    </div>
  );
}

function Hero({ kicker, h1, lead }: { kicker: string; h1: string; lead: string }) {
  return (
    <>
      <p className="so-micro so-micro-red">{kicker}</p>
      <h1 className="so-serif" style={{ fontSize: "clamp(44px, 7.4vw, 100px)", marginTop: 14, maxWidth: "16ch" }}>{h1}</h1>
      <p className="so-bw-intro-lead" style={{ marginTop: 26, maxWidth: "52ch" }}>{lead}</p>
    </>
  );
}

function MoreNeeds({ current }: { current?: string }) {
  return (
    <section className="so-bw-sec nd-more">
      <p className="so-micro">I ALSO NEED TO…</p>
      <div className="nd-chips">
        {NEEDS.filter((n) => n.slug !== current).map((n) => (
          <a key={n.slug} href={"/" + n.slug} className="nd-chip">{n.short} <span aria-hidden="true">→</span></a>
        ))}
      </div>
    </section>
  );
}

/* One page per need: the problem, what actually helps, how I help, proof, questions. */
export function NeedPage({ slug }: { slug: string }) {
  const n = NEEDS.find((x) => x.slug === slug) as Need;
  return (
    <Shell>
      <StructuredData json={faqLd(n.faq)} />
      <Hero kicker={n.kicker} h1={n.h1} lead={n.lead} />

      <section className="so-bw-sec">
        <p className="so-micro">SOUND FAMILIAR?</p>
        <ul className="nd-signs">
          {n.signs.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </section>

      <section className="so-bw-sec">
        <p className="so-micro">WHAT ACTUALLY HELPS</p>
        <h2 className="so-serif so-bw-h">Do these, in this order.</h2>
        <ol className="nd-steps">
          {n.steps.map((s, i) => (
            <li key={s.t}>
              <span className="nd-no">{String(i + 1).padStart(2, "0")}</span>
              <div><p className="sp-t">{s.t}</p><p className="sp-d">{s.d}</p></div>
            </li>
          ))}
        </ol>
        <p className="nd-note">You can do a lot of this yourself. Want the full list? <a className="so-bw-inline" href={n.slug === "website-makeover" || n.slug === "stand-out" ? "/revamp-your-business" : "/just-started"}>See the free guide →</a></p>
      </section>

      <section className="so-bw-sec">
        <p className="so-micro">WHERE I CAN HELP</p>
        <h2 className="so-serif so-bw-h">Pick a piece, or let me do it all.</h2>
        <div className="nd-svcs">
          {n.services.map((s) => (
            <a key={s.t} href={s.h} className="nd-svc">
              <span className="sp-t">{s.t} <span aria-hidden="true">→</span></span>
              <span className="sp-d">{s.d}</span>
            </a>
          ))}
        </div>
      </section>

      <WorkCards label="WORK LIKE THIS" items={n.work} />

      <FaqList items={n.faq} label="QUESTIONS PEOPLE ASK" title="Quick answers." />

      <section className="so-hs-close">
        <div className="so-hs-close-cta">
          <p className="so-serif so-hs-close-t">Not sure where <em>to start?</em></p>
          <div className="so-hs-ctas">
            <a href={bookHref(n.need, n.h1.replace(/\.$/, ""))} className="so-hs-btn is-light">Tell me what you need →</a>
            <a href="/help" className="so-hs-more">See everything I help with</a>
          </div>
        </div>
      </section>

      <MoreNeeds current={n.slug} />
      <BookBar service={n.short.replace(/^./, (c) => c.toUpperCase())} need={n.need} />
    </Shell>
  );
}

/* The two free guides: a checklist people can work through on their own. */
export function GuidePage({ slug }: { slug: string }) {
  const g = GUIDES.find((x) => x.slug === slug) as Guide;
  const total = g.stages.reduce((a, s) => a + s.items.length, 0);
  const [done, setDone] = useState<string[]>([]);
  const flip = (k: string) => setDone((d) => (d.includes(k) ? d.filter((x) => x !== k) : [...d, k]));
  return (
    <Shell>
      <Hero kicker={g.kicker} h1={g.h1} lead={g.lead} />
      <div className="gd2-progress" aria-live="polite">
        <span className="gd2-bar"><i style={{ width: `${(done.length / total) * 100}%` }} /></span>
        <span className="so-micro">{done.length} of {total} done</span>
      </div>
      <nav className="so-bw-jump" aria-label="Stages" style={{ marginTop: 20 }}>
        {g.stages.map((s, i) => <a key={s.t} href={`#stage-${i + 1}`}>{String(i + 1).padStart(2, "0")} {s.t}</a>)}
      </nav>
      {g.stages.map((s, i) => (
        <section key={s.t} id={`stage-${i + 1}`} className="so-bw-sec">
          <p className="so-micro">STAGE {String(i + 1).padStart(2, "0")}</p>
          <h2 className="so-serif so-bw-h">{s.t}</h2>
          <p className="sp-d" style={{ marginTop: 6 }}>{s.sub}</p>
          <ol className="sp-steps gd2-list">
            {s.items.map((it) => {
              const k = s.t + it.t;
              const on = done.includes(k);
              return (
                <li key={k} className={on ? "is-done" : ""}>
                  <button type="button" className="sp-check" aria-pressed={on} aria-label={`Mark "${it.t}" done`} onClick={() => flip(k)}>{on ? "✓" : ""}</button>
                  <div>
                    <p className="sp-t">{it.t}</p>
                    <p className="sp-d">{it.d}</p>
                    {it.link && <a className="sp-tip gd2-link" href={it.link.h}>{it.link.t} →</a>}
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
      <section className="so-hs-close">
        <div className="so-hs-close-cta">
          <p className="so-serif so-hs-close-t">Want a <em>hand with it?</em></p>
          <p className="sp-d" style={{ color: "rgba(244,239,232,.8)", maxWidth: "46ch", margin: "10px 0 0" }}>{g.close}</p>
          <div className="so-hs-ctas">
            <a href={bookHref(g.need, g.h1.replace(/\.$/, ""))} className="so-hs-btn is-light">Ask me where to start →</a>
            <a href="/washington-business-resources" className="so-hs-more">Washington resources</a>
          </div>
        </div>
      </section>
      <MoreNeeds />
    </Shell>
  );
}

/* The hub: two doors, then every need. */
export function HelpHub() {
  return (
    <Shell back={{ t: "Back to Sunday Office", h: "/" }}>
      <Hero kicker="START HERE · A FREE DIRECTORY" h1="What do you need help with?" lead="Pick where you are, or pick what you need. Every page tells you what actually helps, what you can do yourself and where I come in. No commitment, no prices to decode." />
      <section className="so-bw-sec">
        <div className="hb-doors">
          {GUIDES.map((g, i) => (
            <a key={g.slug} href={"/" + g.slug} className="hb-door">
              <span className="fd-quiz-k">{i === 0 ? "New business" : "Already running"}</span>
              <span className="fd-quiz-t">{g.h1}</span>
              <span className="fd-quiz-d">{i === 0 ? "Everything you need, in order, from your license to your first post." : "What to fix first, before you spend anything."}</span>
              <span className="fd-quiz-b">Open the free guide <span aria-hidden="true">→</span></span>
            </a>
          ))}
        </div>
      </section>
      {NEED_GROUPS.map((gr) => (
        <section key={gr.k} className="so-bw-sec">
          <p className="so-micro">{gr.t.toUpperCase()}</p>
          <div className="hb-list">
            {NEEDS.filter((n) => n.group === gr.k).map((n) => (
              <a key={n.slug} href={"/" + n.slug} className="hb-row">
                <span className="hb-i">{n.group === "industry" ? "I" : "I need to"}</span>
                <span className="hb-t">{n.short.startsWith("I ") ? n.short.slice(2) : n.short}</span>
                <span className="hb-a" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </section>
      ))}
      <section className="so-bw-sec">
        <p className="so-micro">IN WASHINGTON?</p>
        <a href="/washington-business-resources" className="hb-row hb-wa">
          <span className="hb-t">Licenses, free advising, funding and where to go next</span>
          <span className="hb-a" aria-hidden="true">→</span>
        </a>
      </section>
    </Shell>
  );
}

export function WaResources() {
  return (
    <Shell>
      <Hero kicker="WASHINGTON SMALL BUSINESS RESOURCES" h1="Starting or growing a business in Washington." lead="The offices, free advisors and local groups worth knowing, in one place. Most of them are free. Rules change, so always check the official page for the latest." />
      {WA_RESOURCES.map((g) => (
        <section key={g.t} className="so-bw-sec">
          <p className="so-micro">{g.t.toUpperCase()}</p>
          <h2 className="so-serif so-bw-h">{g.h}</h2>
          <div className="wa-list">
            {g.items.map((it) => (
              <a key={it.t} href={it.h} target="_blank" rel="noreferrer" className="wa-row">
                <span className="sp-t">{it.t} <span aria-hidden="true">↗</span></span>
                <span className="sp-d">{it.d}</span>
              </a>
            ))}
          </div>
        </section>
      ))}
      <p className="nd-note" style={{ marginTop: 48 }}>This page is a starting point, not legal or tax advice. For your situation, talk to a free advisor at the SBDC or SCORE.</p>
      <section className="so-hs-close">
        <div className="so-hs-close-cta">
          <p className="so-serif so-hs-close-t">Paperwork done? <em>Now look the part.</em></p>
          <div className="so-hs-ctas">
            <a href="/just-started" className="so-hs-btn is-light">The new business guide →</a>
            <a href="/help" className="so-hs-more">What do you need help with?</a>
          </div>
        </div>
      </section>
    </Shell>
  );
}
