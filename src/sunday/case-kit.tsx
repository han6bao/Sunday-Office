import type { ReactNode } from "react";

/** The top-of-page strip on every case study: who, what I did, what happened. */
export function CaseFacts({ items }: { items: { k: string; v: ReactNode; h?: string }[] }) {
  return (
    <dl className="so-eb-facts">
      {items.map((f) => (
        <div key={f.k}>
          <dt className="so-micro">{f.k}</dt>
          <dd>
            {f.h ? (
              <a className="so-bw-inline" href={f.h} target={f.h.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
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

/** A short story told in plain rows you can scroll and read. No tapping. */
export function CaseRead({ label, items }: { label: string; items: { t: string; d: ReactNode }[] }) {
  return (
    <section className="so-case-read">
      <p className="so-micro">{label}</p>
      <div className="so-case-read-list">
        {items.map((x) => (
          <div key={x.t} className="so-case-read-row">
            <p className="so-case-read-t">{x.t}</p>
            <div className="so-case-read-d">{x.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
