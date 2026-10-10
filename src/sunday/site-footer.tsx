import { useEffect, useRef, useState } from "react";

/* One footer for every page: a small interactive directory.
   Hover (or focus) a service and the photo window changes to show it. */

type Svc = { n: string; t: string; d: string; p: string; href: string; img: string[] };

const SVC: Svc[] = [
  { n: "01", t: "Branding + World Building", d: "The look, the voice and the feeling, built once", p: "from $350", href: "/branding", img: ["/assets/campaigns/jazmins-events/brand-guide.png", "/assets/work/build-a-world-2.jpg", "/assets/campaigns/jazmins-events/kit-guide.jpg"] },
  { n: "02", t: "Logos + Identity", d: "Marks that work everywhere, from signs to stories", p: "from $350", href: "/logo-identity", img: ["/assets/campaigns/essential-brows-studio/brand-kit.jpg", "/assets/work/hh-logo.png", "/assets/campaigns/jazmins-events/kit-instagram.jpg"] },
  { n: "03", t: "Websites + Digital", d: "A home for the brand that books while you sleep", p: "from $850", href: "/websites", img: ["/assets/campaigns/essential-brows-studio/site-desktop.jpg", "/assets/work/websites-photo.jpg", "/assets/campaigns/essential-brows-studio/site-phones.jpg"] },
  { n: "04", t: "Photography", d: "Portraits, products, spaces and events", p: "from $150", href: "/photography", img: ["/assets/photography/avery-02.jpg", "/assets/photography/avery-01.jpg", "/assets/campaigns/soul-social/ss-02.jpg"] },
  { n: "05", t: "Headshots", d: "For your site, LinkedIn and press", p: "from $150", href: "/headshots", img: ["/assets/headshots/standard-02.jpg", "/assets/headshots/standard-03.jpg", "/assets/headshots/creative-01.jpg"] },
  { n: "06", t: "Moving Image", d: "Reels, brand films and commercials", p: "from $350", href: "/moving-image", img: ["/assets/campaigns/chutneys/commercial-poster.jpg", "/assets/campaigns/jaydyn-f/jd-07.jpg", "/assets/campaigns/dj-wzrd/dj-03.jpg"] },
  { n: "07", t: "Creative Direction + Social", d: "Shoots, campaigns and monthly content", p: "from $450", href: "/creative-direction-content", img: ["/assets/campaigns/kenshi-killz/kk-05.jpg", "/assets/work/studio-directors.jpg", "/assets/campaigns/still-different/sd-02.jpg"] },
];

const isPreview = () => typeof window !== "undefined" && window.location.pathname.endsWith(".html");
const isHome = () => {
  if (typeof window === "undefined") return true;
  const p = window.location.pathname;
  return p === "/" || p === "" || p.endsWith("/index.html");
};
const page = (h: string) => (isPreview() ? h.slice(1).replace(/\//g, "-") + ".html" : h);
const home = (hash: string) => (isHome() ? hash : (isPreview() ? "index.html" : "/") + hash);

export function SiteFooter() {
  const [on, setOn] = useState(0);
  const [pics, setPics] = useState<string[]>(SVC.map((s) => s.img[0]));
  const ref = useRef<HTMLElement>(null);

  /* Never show a photo that is already on this page. */
  useEffect(() => {
    const used = new Set(
      Array.from(document.querySelectorAll("img"))
        .filter((im) => !ref.current?.contains(im))
        .map((im) => (im.getAttribute("src") || "").split("?")[0]),
    );
    setPics(SVC.map((s) => s.img.find((u) => !used.has(u)) ?? s.img[s.img.length - 1]));
  }, []);

  const s = SVC[on];
  return (
    <footer className="so-footer ft2 sf" id="office" ref={ref}>
      <div className="sf-top">
        <p className="ft2-line sf-line">We build worlds for people with something worth seeing.</p>

        <div className="sf-dir">
          <h5 className="sf-h">What we do</h5>
          <ol className="sf-list" onMouseLeave={() => undefined}>
            {SVC.map((x, i) => (
              <li key={x.n}>
                <a
                  href={page(x.href)}
                  className={"sf-row" + (i === on ? " is-on" : "")}
                  onMouseEnter={() => setOn(i)}
                  onFocus={() => setOn(i)}
                >
                  <span className="sf-n">{x.n}</span>
                  <span className="sf-t">{x.t}</span>
                  <span className="sf-p">{x.p}</span>
                  <img className="sf-thumb" src={pics[i]} alt="" loading="lazy" />
                </a>
              </li>
            ))}
          </ol>
        </div>

        <a className="sf-win" href={page(s.href)} aria-label={s.t}>
          <span className="sf-frame">
            {SVC.map((x, i) => (
              <img key={x.n} src={pics[i]} alt="" loading="lazy" className={i === on ? "is-on" : ""} />
            ))}
          </span>
          <span className="sf-cap">
            <span className="sf-cap-n">{s.n}</span>
            <span className="sf-cap-d">{s.d}</span>
            <span className="sf-cap-go">Open <span aria-hidden="true">→</span></span>
          </span>
        </a>

        <div className="sf-hello">
          <h5 className="sf-h">Say hello</h5>
          <a className="foot-link" href={home("#office-hours")}>Start a project →</a>
          <a className="foot-link" href={home("#quiz")}>Not sure where to start?</a>
          <a className="foot-link" href={home("#makeover")}>Need a makeover?</a>
          <a className="foot-link" href={home("#work")}>See the work</a>
          <a className="foot-link" href={page("/about")}>Meet Hana</a>
          <a className="foot-link" href={home("#links")}>Everything in one place</a>
          <span className="sf-gap" aria-hidden="true" />
          <a className="foot-link" href="mailto:hello@sundayoffice.agency">hello@sundayoffice.agency</a>
          <a className="foot-link" href="https://www.instagram.com/sundayoffice.ag">@sundayoffice.ag</a>
          <span className="foot-link">Seattle, WA</span>
        </div>
      </div>
      <div className="ft2-mark" aria-hidden="true"><span className="ft2-c">S</span>unday <span className="ft2-c">O</span>ffice</div>
    </footer>
  );
}
