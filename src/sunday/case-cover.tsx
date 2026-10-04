/* A big lead photo right under a case study's title, so every project
   opens with the work. */
export function CaseCover({ src, alt, pos = "center" }: { src: string; alt: string; pos?: string }) {
  return (
    <figure className="so-case-cover">
      <img src={src} alt={alt} style={{ objectPosition: pos }} />
    </figure>
  );
}
