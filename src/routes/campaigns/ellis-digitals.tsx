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

const MORE = [
  "More angles and expressions, so you can send fresh photos to different agencies",
  "A styled look next to your digitals shows range",
  "Extra frames for your comp card, Instagram and model profiles",
  "Far less than booking a second shoot later",
];

function Img({ n, onOpen, className = "", pos, zoom }: { n: string; onOpen: (s: string) => void; className?: string; pos?: string; zoom?: { s: number; o: string } }) {
  return (
    <button type="button" className={"ed-img " + className} onClick={() => onOpen(A + n)} aria-label="View larger">
      <img src={A + n} alt="Ellis, model digitals at LOFT Tacoma" loading="lazy" style={{ ...(pos ? { objectPosition: pos } : {}), ...(zoom ? { transform: `scale(${zoom.s})`, transformOrigin: zoom.o } : {}) }} />
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

        {/* Comp card: front + back, the way agencies see it */}
        <p className="so-micro so-micro-red">MODEL DIGITALS · LOFT TACOMA</p>
        <section className="cc" aria-label="Ellis comp card">
          <div className="cc-card cc-front">
            <Img n="e-5837.jpg" onOpen={setOpen} className="cc-front-img" pos="center 22%" />
            <div className="cc-name">
              <h1>Ellis</h1>
              <span>Model digitals · Tacoma</span>
            </div>
          </div>
          <div className="cc-card cc-back">
            <div className="cc-grid">
              <Img n="e-5840.jpg" onOpen={setOpen} pos="center 20%" />
              <Img n="e-5842.jpg" onOpen={setOpen} pos="center 25%" zoom={{ s: 1.45, o: "42% 34%" }} />
              <Img n="e-5841.jpg" onOpen={setOpen} pos="center 40%" />
              <Img n="e-5862.jpg" onOpen={setOpen} pos="center 45%" />
            </div>
            <dl className="cc-stats">
              <div><dt>Looks</dt><dd>2</dd></div>
              <div><dt>Photos</dt><dd>19</dd></div>
              <div><dt>Place</dt><dd>LOFT Tacoma</dd></div>
              <div><dt>Shot</dt><dd>Oct 2026</dd></div>
            </dl>
            <p className="cc-mark">Sunday Office</p>
          </div>
        </section>

        {/* Story */}
        <section className="ed-story">
          <p className="ed-pull">Ellis was the first person who ever booked me. Years later, we shot his digitals on a Sunday, right when I opened Sunday Office.</p>
          <p className="ed-p">He's a model. I've helped him walk the runway for Seattle Pride and we keep making creative work together. These are the photos he sends to agencies, scouts and casting: front, profile, full length and one styled look for range, laid out above the way a comp card would show them.</p>
        </section>

        {/* Look 01 */}
        <section className="ed-look cc-sheet">
          <div className="cc-sheet-head"><p className="ed-k"><span>01</span> The digitals</p><span className="cc-sheet-n">White tee · wide jeans</span></div>
          <div className="ed-grid ed-grid-2">
            <Img n="e-5839.jpg" onOpen={setOpen} />
            <Img n="e-5844.jpg" onOpen={setOpen} />
          </div>
          <p className="ed-p cc-note">Digitals are meant to show exactly who walks in the door, so the light stays natural and the edit stays honest.</p>
        </section>

        {/* Look 02 */}
        <section className="ed-look cc-sheet">
          <div className="cc-sheet-head"><p className="ed-k"><span>02</span> The styled look</p><span className="cc-sheet-n">Denim on denim</span></div>
          <Img n="e-5859.jpg" onOpen={setOpen} className="ed-full" />
          <div className="ed-grid ed-grid-3">
            <Img n="e-5853.jpg" onOpen={setOpen} />
            <Img n="e-5860.jpg" onOpen={setOpen} />
            <Img n="e-5863.jpg" onOpen={setOpen} />
          </div>
          <Img n="e-5858.jpg" onOpen={setOpen} className="ed-full" />
          <div className="ed-grid ed-grid-3">
            <Img n="e-5854.jpg" onOpen={setOpen} />
            <Img n="e-5861.jpg" onOpen={setOpen} />
            <Img n="e-5865.jpg" onOpen={setOpen} />
          </div>
          <div className="ed-grid ed-grid-2">
            <Img n="e-5855.jpg" onOpen={setOpen} />
            <Img n="e-5864.jpg" onOpen={setOpen} />
          </div>
        </section>

        {/* The extras */}
        <section className="ed-story ed-extra">
          <p className="so-micro">MORE THAN THE PACKAGE</p>
          <p className="ed-pull">His package came with 15 photos. He loved the set enough to add 4 more.</p>
          <div className="ed-extra-img"><Img n="e-5849.jpg" onOpen={setOpen} /></div>
          <p className="ed-p">Going through the gallery together, there were a few frames he didn't want to leave behind, so we added them. That's always an option: if you'd like more photos than your package includes, you can add them.</p>
        </section>

        {/* Behind it */}
        <section className="ed-behind">
          <Img n="e-5846.jpg" onOpen={setOpen} />
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
          <p className="ed-p">Getting ready? <a className="ed-link" href="/digitals-prep">Here's how to prepare</a>: what to bring, hair, what to avoid and a posing guide.</p>
          <p className="ed-p">I plan the shots, direct your posing and expression, keep the edit natural and help you pick the selects to send. Want a styled look too? We add it in the same session.</p>
          <div className="ed-more">
            <p className="ed-more-t">Want more photos than your package?</p>
            <p className="ed-p">You can add extra photos, before the shoot or when we go through your gallery. It's worth it:</p>
            <ul className="ed-check">
              {MORE.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
          <div className="ed-cta">
            <a className="ed-btn" href={bookHref("Headshots", "Model digitals")}>Book your digitals →</a>
            <a className="ed-link" href="/digitals">How digitals work</a>
            <a className="ed-link" href="/digitals-prep">How to prepare</a>
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
