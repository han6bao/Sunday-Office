import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { SiteBar } from "../sunday/site-bar";
import { BackHome, ListBlock, ServiceCta, ServiceIntro, ServiceSteps, WorkCards } from "../sunday/service-kit";

export const Route = createFileRoute("/moving-image")({
  head: () => seoHead("/moving-image"),
  component: MovingImagePage,
});

const KINDS = [
  { t: "Artists + music", d: "Music video support, visualizers, behind the scenes and release content that keeps going between drops." },
  { t: "Brands + campaigns", d: "Commercials, brand films and campaign cuts for your site and your feed." },
  { t: "Events + culture", d: "Recaps, performances and the moments people want to relive." },
];

const INCLUDED = [
  { t: "The idea", d: "Not every project needs motion. When it does, it should have a reason to move." },
  { t: "Filming", d: "On location or in the studio, planned around the shots that matter." },
  { t: "Editing + color", d: "Cut, colored and finished so it feels like your brand." },
  { t: "Cuts for everywhere", d: "One shoot, many pieces: the main film, vertical cuts, teasers, loops and stills." },
  { t: "Sound on or off", d: "Captions and pacing that work whether people watch muted or with the sound up." },
];

const STEPS = [
  {
    t: "The idea",
    d: "What it should make people feel.",
    more: "We start with the feeling and where it will live. A 15-second reel and a homepage film are different jobs, so the idea comes first.",
  },
  {
    t: "Plan",
    d: "Shots, place, timing.",
    more: "A simple plan: the key shots, the location, the look, and how many cuts we'll need for each platform.",
  },
  {
    t: "Shoot",
    d: "Video and stills together.",
    more: "We film, and grab stills along the way, so one day of production covers more than one need.",
  },
  {
    t: "Edit",
    d: "Cut, color, sound.",
    more: "I edit, color and finish it, polished and commercial or rawer and stranger, whatever the project calls for.",
  },
  {
    t: "Cut for everywhere",
    d: "Ready to post.",
    more: "You get the main piece plus the versions you need: vertical, short teasers, loops and stills, so it keeps working long after it's posted.",
  },
];

function MovingImagePage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <ServiceIntro
          label="SERVICES · MOVING IMAGE · SEATTLE"
          title="Moving Image."
          lead="Commercials, music content, brand films and event recaps. Video for when the idea needs to move, made to keep working long after it's posted."
          aside={
            <>
              Often paired with <a className="so-bw-inline" href="/photography">Photography →</a> and{" "}
              <a className="so-bw-inline" href="/creative-direction-content">Creative Direction →</a>
            </>
          }
          jumps={[
            { t: "What you get", h: "#get" },
            { t: "How it works", h: "#how" },
            { t: "Work", h: "#work" },
          ]}
        />

        <figure className="so-mi-film">
          <video controls playsInline preload="metadata" poster="/assets/campaigns/chutneys/commercial-poster.jpg">
            <source src="/assets/campaigns/chutneys/commercial.mp4" type="video/mp4" />
          </video>
          <figcaption>
            <span className="so-micro">A COMMERCIAL I MADE FOR CHUTNEYS BELLEVUE · PRESS PLAY</span>
            <a className="so-micro" href="/campaigns/chutneys">SEE THE PROJECT →</a>
          </figcaption>
        </figure>

        <ListBlock label="WHAT IT'S FOR" title="Three kinds of moving image." rows={KINDS} />

        <ListBlock
          id="get"
          label="WHAT YOU GET"
          title="One shoot, more than one cut."
          note="Polished or raw, the style follows the project."
          rows={INCLUDED}
        />

        <ServiceSteps steps={STEPS} />

        <WorkCards
          label="VIDEO I'VE MADE"
          items={[
            { t: "Chutneys Bellevue", w: "Commercial + photos", d: "A commercial and promo photos for a North Indian restaurant.", img: "/assets/campaigns/chutneys/ch-01.jpg", h: "/campaigns/chutneys" },
            { t: "Jaydyn F.", w: "Release content", d: "Behind the scenes and short clips around his music.", img: "/assets/campaigns/jaydyn-f/jd-07.jpg", h: "/campaigns/jaydyn-f" },
          ]}
        />

        <ServiceCta current="moving" title="Have something that should move?" sub="ITS OWN PROJECT, OR PART OF A BIGGER CAMPAIGN." />

        <BackHome />
      </div>
    </div>
  );
}
