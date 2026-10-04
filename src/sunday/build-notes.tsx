import type { CSSProperties, ReactNode } from "react";
import { SiteBar } from "./site-bar";

/* Build notes: a designer's notebook for each case study.
   Sunday Office type and structure, dressed in the client's own colors. */

export type BnTheme = {
  paper: string; // page ground
  paper2: string; // panel ground
  ink: string; // text
  ink2: string; // soft text
  mute: string; // notes
  rule: string; // hairlines
  accent: string; // italic words, numbers
  deep: string; // dark panels
  deepInk: string; // text on dark panels
  deepMute: string; // captions on dark panels
};

export function BuildNotes({ theme, children }: { theme: BnTheme; children: ReactNode }) {
  const vars = {
    "--bn-paper": theme.paper,
    "--bn-paper-2": theme.paper2,
    "--bn-ink": theme.ink,
    "--bn-ink-2": theme.ink2,
    "--bn-mute": theme.mute,
    "--bn-rule": theme.rule,
    "--bn-accent": theme.accent,
    "--bn-deep": theme.deep,
    "--bn-deep-ink": theme.deepInk,
    "--bn-deep-mute": theme.deepMute,
  } as CSSProperties;
  return (
    <div className="bn" style={vars}>
      <SiteBar />
      <div className="bn-wrap">{children}</div>
    </div>
  );
}

export function BnBar({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <header className="bn-bar">
      <a href="/" className="bn-note bn-back">
        ← Back to Sunday Office
      </a>
      <p className="bn-note">
        <b>Build notes</b> · {left}
      </p>
      <p className="bn-note">{right}</p>
    </header>
  );
}

export function BnHero({ note, title, lede, extra }: { note: ReactNode; title: ReactNode; lede: ReactNode; extra?: ReactNode }) {
  return (
    <section className="bn-hero">
      <p className="bn-note">{note}</p>
      <h1>{title}</h1>
      <p className="bn-lede">{lede}</p>
      {extra}
    </section>
  );
}

export function BnFacts({ items }: { items: { k: string; v: ReactNode; h?: string }[] }) {
  return (
    <dl className="bn-facts">
      {items.map((f) => (
        <div key={f.k}>
          <dt className="bn-note">{f.k}</dt>
          <dd>
            {f.h ? (
              <a href={f.h} target="_blank" rel="noreferrer">
                {f.v} ↗
              </a>
            ) : (
              f.v
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Then on the left (words), now on the right (a picture on the dark ground). */
export function BnThenNow({
  thenUrl,
  thenLabel,
  thenBody,
  thenMeta,
  thenCap,
  nowUrl,
  nowImg,
  nowAlt,
  nowCap,
  nowHref,
}: {
  thenUrl: string;
  thenLabel: ReactNode;
  thenBody: ReactNode;
  thenMeta: string[];
  thenCap: ReactNode;
  nowUrl: string;
  nowImg: string;
  nowAlt: string;
  nowCap: ReactNode;
  nowHref?: string;
}) {
  const img = <img src={nowImg} alt={nowAlt} />;
  return (
    <div className="bn-tn">
      <div className="bn-panel">
        <div className="bn-chrome" aria-hidden>
          <i />
          <i />
          <i />
          <span>{thenUrl}</span>
        </div>
        <div className="bn-then">
          <p className="bn-note">{thenLabel}</p>
          <blockquote>{thenBody}</blockquote>
          <div className="bn-then-meta">
            {thenMeta.map((m) => (
              <p key={m} className="bn-note">
                {m}
              </p>
            ))}
          </div>
        </div>
        <p className="bn-cap">{thenCap}</p>
      </div>
      <figure className="bn-panel bn-panel-now">
        <div className="bn-chrome" aria-hidden>
          <i />
          <i />
          <i />
          <span>{nowUrl}</span>
        </div>
        {nowHref ? (
          <a href={nowHref} target="_blank" rel="noreferrer" className="bn-now-img">
            {img}
          </a>
        ) : (
          <div className="bn-now-img">{img}</div>
        )}
        <figcaption>{nowCap}</figcaption>
      </figure>
    </div>
  );
}

export function BnSec({ no, label, title, children, id }: { no: string; label: string; title: ReactNode; children: ReactNode; id?: string }) {
  return (
    <section className="bn-sec" id={id}>
      <div>
        <p className="bn-note">
          <b>{no}</b> · {label}
        </p>
        <h2>{title}</h2>
      </div>
      <div className="bn-body">{children}</div>
    </section>
  );
}

export function BnPull({ children, by }: { children: ReactNode; by: string }) {
  return (
    <p className="bn-pull">
      {children}
      <small>{by}</small>
    </p>
  );
}

export function BnRules({ items }: { items: { t: string; d: string }[] }) {
  return (
    <div className="bn-rules">
      {items.map((x) => (
        <div key={x.t}>
          <h3>{x.t}</h3>
          <p>{x.d}</p>
        </div>
      ))}
    </div>
  );
}

export function BnCompare({ rows }: { rows: { a: string; then: string; now: string }[] }) {
  return (
    <table className="bn-cmp">
      <thead>
        <tr>
          <th scope="col">Area</th>
          <th scope="col">Then</th>
          <th scope="col">Now</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.a}>
            <th scope="row">{r.a}</th>
            <td>{r.then}</td>
            <td className="now">{r.now}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function BnDecisions({ title, children }: { title: ReactNode; children: ReactNode }) {
  return (
    <section className="bn-decisions">
      <header>
        <p className="bn-note">
          <b>The calls</b> · Decision by decision
        </p>
        <h2>{title}</h2>
      </header>
      {children}
    </section>
  );
}

export function BnDec({ no, label, title, call, why, children }: { no: string; label: string; title: ReactNode; call: ReactNode; why: ReactNode; children?: ReactNode }) {
  return (
    <article className="bn-dec">
      <div>
        <p className="bn-note">
          <b>{no}</b> · {label}
        </p>
        <h3>{title}</h3>
      </div>
      <div className="bn-txt">
        <dl className="bn-kv">
          <dt>The call</dt>
          <dd>{call}</dd>
          <dt>Why</dt>
          <dd>{why}</dd>
        </dl>
        {children}
      </div>
    </article>
  );
}

export function BnShot({ src, alt, cap, video }: { src: string; alt: string; cap?: ReactNode; video?: ReactNode }) {
  return (
    <figure className="bn-shot">
      {video ?? <img src={src} alt={alt} loading="lazy" />}
      {cap && <figcaption>{cap}</figcaption>}
    </figure>
  );
}

export function BnSwatches({ items }: { items: { n: string; hex: string; dark?: boolean }[] }) {
  return (
    <div className="bn-sw" aria-label="Palette">
      {items.map((c) => (
        <div key={c.hex} style={{ background: c.hex, color: c.dark ? "#f6f1e4" : "#1c1c1a" }}>
          {c.n}
          <br />
          {c.hex.toUpperCase()}
        </div>
      ))}
    </div>
  );
}

export function BnStats({ items }: { items: { b: string; s: string }[] }) {
  return (
    <div className="bn-stats">
      {items.map((x) => (
        <div key={x.s}>
          <b>{x.b}</b>
          <span>{x.s}</span>
        </div>
      ))}
    </div>
  );
}

export function BnNote({ media, label, title, children }: { media: ReactNode; label: string; title: ReactNode; children: ReactNode }) {
  return (
    <aside className="bn-logo-note">
      <div className="bn-logo-media">{media}</div>
      <div>
        <p className="bn-note">{label}</p>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </aside>
  );
}

export function BnNext({ items }: { items: { s: "done" | "now" | "next"; t: string; d: ReactNode }[] }) {
  return (
    <ul className="bn-next">
      {items.map((x) => (
        <li key={x.t} className={"is-" + x.s}>
          <span className="bn-next-mark" aria-hidden>
            {x.s === "done" ? "✓" : x.s === "now" ? "◐" : "○"}
          </span>
          <span>
            <strong>{x.t}.</strong> {x.d}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function BnClose({ note, title, children, cta }: { note: string; title: ReactNode; children: ReactNode; cta?: { t: string; h: string } }) {
  return (
    <section className="bn-close">
      <p className="bn-note">{note}</p>
      <h2>{title}</h2>
      <p>{children}</p>
      {cta && (
        <a className="bn-btn" href={cta.h}>
          {cta.t} →
        </a>
      )}
    </section>
  );
}

export function BnCredit({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <footer className="bn-credit">
      <p>
        <b>Sunday Office</b>
        {left}
      </p>
      <p>{right}</p>
    </footer>
  );
}
