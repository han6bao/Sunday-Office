import { useEffect, useRef } from "react";

/** A silent, looping background video that starts on its own on every
 *  browser (iOS needs the muted property set before play()). */
export function LoopVideo({
  name,
  label,
  eager = false,
}: {
  name: string;
  label?: string;
  eager?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    const p = v.play();
    if (p) p.catch(() => {});
  }, []);
  return (
    <video
      ref={ref}
      poster={`/assets/work/${name}-poster.jpg`}
      autoPlay
      muted
      loop
      playsInline
      preload={eager ? "auto" : "metadata"}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <source src={`/assets/work/${name}.mp4`} type="video/mp4" />
      <source src={`/assets/work/${name}.webm`} type="video/webm" />
    </video>
  );
}

/** Like LoopVideo, but only plays while it's on screen, so a grid of
 *  clips never runs all at once. `base` is the path without extension. */
export function InViewVideo({ base, poster, label }: { base: string; poster?: string; label?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) v.play().catch(() => {});
          else v.pause();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video ref={ref} poster={poster} muted loop playsInline preload="metadata" aria-label={label}>
      <source src={`${base}.mp4`} type="video/mp4" />
      <source src={`${base}.webm`} type="video/webm" />
    </video>
  );
}
