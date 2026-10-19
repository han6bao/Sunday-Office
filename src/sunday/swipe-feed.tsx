import { useEffect, useRef, useState } from "react";

/* A feed of photos and clips you swipe sideways, like an Instagram post.
   Clips play on their own, muted, while on screen. If a clip's file isn't
   there yet, its poster shows as a still instead. Ends on an Instagram card. */
export type FeedFrame = { src: string; alt: string; set: string; cap?: string; video?: string; sound?: boolean; w?: number; h?: number };

const IG = "https://www.instagram.com/sundayoffice.ag/";

function Clip({ f }: { f: FeedFrame }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [broken, setBroken] = useState(false);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.6 });
    io.observe(v);
    return () => io.disconnect();
  }, [broken]);
  if (broken) return <img src={f.src} alt={f.alt} loading="lazy" />;
  return (
    <>
      <video ref={ref} poster={f.src} muted={muted} loop playsInline preload="metadata" aria-label={f.alt}>
        {/* MP4 for Safari and most phones, WebM as a second option. If neither loads, show the still. */}
        <source src={f.video} type="video/mp4" />
        <source src={f.video!.replace(/\.mp4$/, ".webm")} type="video/webm" onError={() => setBroken(true)} />
      </video>
      {f.sound && <button type="button" className="scr-sound" onClick={() => setMuted((m) => !m)}>{muted ? "Sound on" : "Sound off"}</button>}
    </>
  );
}

export function SwipeFeed({ frames, sets }: { frames: FeedFrame[]; sets: Record<string, string> }) {
  const [only, setOnly] = useState("all");
  const row = useRef<HTMLDivElement>(null);
  const list = only === "all" ? frames : frames.filter((f) => f.set === only);
  const nudge = (d: number) => row.current?.scrollBy({ left: d * row.current.clientWidth * 0.7, behavior: "smooth" });
  const keys = Object.keys(sets);
  // Switching sets starts the row from the first frame again.
  useEffect(() => { row.current?.scrollTo({ left: 0, behavior: "instant" as ScrollBehavior }); }, [only]);
  return (
    <>
      <div className="scr-tabs" role="tablist" aria-label="Filter the feed">
        {keys.length > 1 &&
          ["all", ...keys].map((k) => (
            <button key={k} type="button" role="tab" aria-selected={only === k} className={"scr-tab" + (only === k ? " is-on" : "")} onClick={() => setOnly(k)}>
              {k === "all" ? "Everything" : sets[k]}
            </button>
          ))}
        <span className="scr-arrows">
          <button type="button" aria-label="Scroll back" onClick={() => nudge(-1)}>←</button>
          <button type="button" aria-label="Scroll forward" onClick={() => nudge(1)}>→</button>
        </span>
      </div>
      <div className="scr-feed" ref={row}>
        {list.map((f) => (
          <figure key={f.src + (f.video ?? "")} className="scr-post" style={{ aspectRatio: `${f.w ?? 4} / ${f.h ?? 5}` }}>
            {f.video ? <Clip f={f} /> : <img src={f.src} alt={f.alt} loading="lazy" />}
            <figcaption>{f.cap ?? sets[f.set]}</figcaption>
          </figure>
        ))}
        {list.length === 0 && (
          <div className="scr-post scr-post-soon"><span className="so-micro">More frames coming soon</span></div>
        )}
        <a className="scr-post scr-post-ig" href={IG} target="_blank" rel="noreferrer">
          <span className="so-micro">KEEP SCROLLING</span>
          <span className="so-serif">More on Instagram</span>
          <span className="scr-ig-h">@sundayoffice.ag ↗</span>
        </a>
      </div>
    </>
  );
}
