import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { useState } from "react";
import { bookHref } from "../../sunday/service-kit";

export const Route = createFileRoute("/campaigns/ellis-digitals")({
  head: () => seoHead("/campaigns/ellis-digitals"),
  component: EllisPage,
});

const A = "/assets/campaigns/ellis-digitals/";

const AGENCIES = [
  "Your real face: clean skin, hair off the face, no heavy edit",
  "Front, three-quarter, profile and full length",
  "Simple fitted clothes, so your shape reads",
  "Natural light that shows your true skin tone",
  "Relaxed expression, eyes alive, no forced smile",
];

const DID = [
  { t: "Location", d: "Scouted and booked LOFT in Tacoma: white brick, clean floors, big windows." },
  { t: "Shot list", d: "Planned around exactly what agencies ask for, then a styled look for range." },
  { t: "Styling", d: "Built both looks with him and fixed hair and clothes between every setup." },
  { t: "Light + props", d: "Found the best window light and used the brick, the chaise and the mirror." },
  { t: "Posing", d: "Directed every angle: hands, posture, chin, eyes, expression." },
  { t: "Selects", d: "Went through every frame together over coffee in Tacoma and picked the strongest." },
];

function Img({ n, onOpen, className = "", pos }: { n: string; onOpen: (s: string) => void; className?: string; pos?: string }) {
  return (
    <button type="button" className={"ed-img " + className} onClick={() => onOpen(A + n)} aria-label="View larger">
      <img src={A + n} alt="Ellis, model digitals at LOFT Tacoma" loading="lazy" style={pos ? { objectPosition: pos } : undefined} />
    </button>
  );
}

function EllisPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="block ed" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        {/* Cover */}
        <section className="ed-cover">
          <div className="ed-cover-txt">
            <p className="so-micro so-micro-red">MODEL DIGITALS · LOFT TACOMA</p>
            <h1 className="ed-h">Ellis.</h1>
            <p className="ed-lead">My first client, shot again on a Sunday, the week Sunday Office opened.</p>
            <dl className="ed-facts">
              <div><dt>Date</dt><dd>October 11, 2026</dd></div>
              <div><dt>Location</dt><dd>LOFT, Tacoma</dd></div>
              <div><dt>Looks</dt><dd>Digitals + one styled</dd></div>
            </dl>
          </div>
          <Img n="ed-08.jpg" onOpen={setOpen} className="ed-cover-img" pos="center 30%" />
        </section>

        {/* Story */}
        <section className="ed-story">
          <p className="ed-pull">Ellis was the first person who ever booked me. Years later, we shot his digitals on a Sunday, the week I opened Sunday Office.</p>
          <p className="ed-p">He's a model. I've helped him walk the runway for Seattle Pride and we keep making creative work together. These are the photos he sends to agencies, scouts and casting.</p>
        </section>

        {/* Look 01 */}
        <section className="ed-look">
          <p className="ed-k"><span>01</span> The digitals</p>
          <div className="ed-grid ed-grid-2">
            <Img n="ed-07.jpg" onOpen={setOpen} />
            <Img n="ed-05.jpg" onOpen={setOpen} pos="center 20%" />
          </div>
          <div className="ed-grid ed-grid-wide">
            <Img n="ed-06.jpg" onOpen={setOpen} />
            <p className="ed-p ed-side">A white tee, wide jeans and nothing else. Digitals are meant to show exactly who walks in the door, so the light stays natural and the edit stays honest.</p>
          </div>
        </section>

        {/* Look 02 */}
        <section className="ed-look">
          <p className="ed-k"><span>02</span> The styled look</p>
          <Img n="ed-01.jpg" onOpen={setOpen} className="ed-full" pos="center 40%" />
          <div className="ed-grid ed-grid-2">
            <Img n="ed-02.jpg" onOpen={setOpen} />
            <Img n="ed-03.jpg" onOpen={setOpen} pos="center 60%" />
          </div>
        </section>

        {/* Behind it */}
        <section className="ed-behind">
          <Img n="ed-04.jpg" onOpen={setOpen} />
          <div>
            <p className="ed-k"><span>03</span> Behind the frame</p>
            <ol className="ed-did">
              {DID.map((d) => (
                <li key={d.t}><b>{d.t}</b><span>{d.d}</span></li>
              ))}
            </ol>
          </div>
        </section>

        {/* For models */}
        <section className="ed-models">
          <p className="so-micro">FOR MODELS</p>
          <h2 className="ed-h2">Need digitals?</h2>
          <p className="ed-p">Getting scouted, signing with an agency or applying for casting, digitals are the first thing they ask for. Here's what they're looking for, and what I make sure you have.</p>
          <ul className="ed-check">
            {AGENCIES.map((x) => <li key={x}>{x}</li>)}
          </ul>
          <p className="ed-p">I plan the shots, direct your posing and expression, keep the edit natural and help you pick the selects to send. Want a styled look too? We add it in the same session.</p>
          <div className="ed-cta">
            <a className="ed-btn" href={bookHref("Headshots", "Model digitals")}>Book your digitals →</a>
            <a className="ed-link" href="/headshots">See headshot sessions</a>
          </div>
        </section>

        {open && (
          <div className="lb-overlay so-photo-lb" onClick={(e) => { if (e.target === e.currentTarget) setOpen(null); }}>
            <div className="so-photo-lb-card">
              <img src={open} alt="Ellis, model digitals" />
              <div className="so-photo-lb-meta">
                <span />
                <button className="lb-btn" aria-label="Close" onClick={() => setOpen(null)}>✕</button>
              </div>
            </div>
          </div>
        )}

        <div style={{ marginTop: 72 }}>
          <a href="/" className="so-arrow">
            <span className="arr">←</span> Back to Sunday Office
          </a>
        </div>
      </div>
    </div>
  );
}
