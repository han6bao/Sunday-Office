import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { useState } from "react";
import { CaseBookingCta } from "../../sunday/services";
import { CaseFacts, CaseRead } from "../../sunday/case-kit";

export const Route = createFileRoute("/campaigns/ellis-digitals")({
  head: () => seoHead("/campaigns/ellis-digitals"),
  component: EllisPage,
});

const PHOTOS = [
  { src: "/assets/campaigns/ellis-digitals/ed-08.jpg", cap: "Digital, straight on, no styling" },
  { src: "/assets/campaigns/ellis-digitals/ed-07.jpg", cap: "Digital, three-quarter" },
  { src: "/assets/campaigns/ellis-digitals/ed-06.jpg", cap: "Full length against the brick" },
  { src: "/assets/campaigns/ellis-digitals/ed-04.jpg", cap: "The mirror, two angles in one frame" },
  { src: "/assets/campaigns/ellis-digitals/ed-01.jpg", cap: "Denim on denim, on the floor" },
  { src: "/assets/campaigns/ellis-digitals/ed-02.jpg", cap: "Denim on denim, against the brick" },
  { src: "/assets/campaigns/ellis-digitals/ed-03.jpg", cap: "On the velvet chaise" },
];

const STORY = [
  {
    t: "THE CIRCLE BACK",
    d: "Ellis was my very first client when I opened my photography business. Years later, we shot his digitals on a Sunday, October 11, 2026, right as Sunday Office opened. Same person, new name on the door.",
  },
  {
    t: "WHO HE IS",
    d: "Ellis is a model. I've helped him walk the runway for Seattle Pride, and we keep making creative shoots together. These digitals are what he sends to agencies, scouts and casting.",
  },
  {
    t: "TWO LOOKS",
    d: "Look one is clean digitals: a plain white tee and wide jeans, so his face, body and proportions do the talking. Look two is styled: denim on denim, built to show range and personality.",
  },
];

const DID = [
  { t: "THE PLAN", d: "Scouted and booked the location, LOFT in Tacoma, and planned the shot list around what agencies ask for in digitals." },
  { t: "STYLING", d: "Helped style both looks, from the denim layering to the details, and fixed hair and clothes between every setup." },
  { t: "LIGHT + PROPS", d: "Found the best natural light in the loft and chose the props: the brick wall, the velvet chaise and the full-length mirror." },
  { t: "POSING + EXPRESSION", d: "Directed every pose and kept an eye on the small things: hands, posture, chin, eyes. Digitals live or die on expression, so we kept going until it was right." },
  { t: "THE EDIT", d: "A natural edit, true to his skin and the room. Digitals need to look like the person who walks in the door." },
  { t: "THE CULL", d: "After the shoot we went to a coffee shop in Tacoma and went through every frame together to pick the strongest ones." },
];

function EllisPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">MODEL DIGITALS · LOFT TACOMA · OCTOBER 11, 2026</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 96px)", marginTop: 14 }}>
          Ellis.
        </h1>
        <p className="so-micro mt-3">MY FIRST CLIENT, SHOT ON A SUNDAY · TWO LOOKS · FULL GALLERY BELOW</p>
        <CaseFacts
          items={[
            { k: "FOR", v: "Ellis, model" },
            { k: "WHAT I DID", v: "Location, styling, lighting, props, posing, editing and the final selects" },
            { k: "WHERE", v: "LOFT, Tacoma, WA" },
          ]}
        />

        <figure style={{ margin: "48px 0 0" }}>
          <img src="/assets/campaigns/ellis-digitals/ed-05.jpg" alt="Ellis in a white crop tee leaning against a white wall" style={{ width: "100%", maxHeight: "86vh", objectFit: "cover", objectPosition: "center 20%", display: "block" }} />
        </figure>

        <CaseRead label="THE STORY" items={STORY} />
        <CaseRead label="WHAT I DID" items={DID} />

        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">FOR MODELS</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            Getting scouted or signing with an agency? Digitals are the first thing they ask for: simple, honest photos that show exactly how you look today. I plan the shot list agencies expect, guide your posing and expression, and help you pick the selects, so you send the strongest set you can. Want a styled look too? We can add one in the same session.
          </p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            I work with creatives, aspiring models and artists to build the vision with them, not just take the picture.
          </p>
        </div>

        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE FULL GALLERY · {PHOTOS.length} FRAMES · TWO LOOKS</p>
          <div className="so-photo-grid mt-6">
            {PHOTOS.map((ph, i) => (
              <button key={ph.src} className="so-photo-cell" type="button" onClick={() => setOpen(i)} aria-label={ph.cap}>
                <img src={ph.src} alt={ph.cap} loading="lazy" />
                <span className="so-photo-cap">
                  {String(i + 1).padStart(2, "0")}<span className="so-cap-label"> · {ph.cap}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {open !== null && (
          <div className="lb-overlay so-photo-lb" onClick={(e) => { if (e.target === e.currentTarget) setOpen(null); }}>
            <div className="so-photo-lb-card">
              <img src={PHOTOS[open].src} alt={PHOTOS[open].cap} />
              <div className="so-photo-lb-meta">
                <span className="so-micro">{PHOTOS[open].cap}</span>
                <button className="lb-btn" aria-label="Close" onClick={() => setOpen(null)}>✕</button>
              </div>
            </div>
          </div>
        )}

        <CaseBookingCta />

        <div style={{ marginTop: 56 }}>
          <a href="/" className="so-arrow">
            <span className="arr">←</span> Back to Sunday Office
          </a>
        </div>
      </div>
    </div>
  );
}
