import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { InViewVideo } from "../../sunday/loop-video";
import {
  BnBar,
  BnClose,
  BnCompare,
  BnCredit,
  BnDec,
  BnDecisions,
  BnFacts,
  BnHero,
  BnNote,
  BnPull,
  BnRules,
  BnSec,
  BnShot,
  BnThenNow,
  BuildNotes,
} from "../../sunday/build-notes";

export const Route = createFileRoute("/campaigns/essential-brows-studio")({
  head: () => seoHead("/campaigns/essential-brows-studio"),
  component: EssentialBrowsCase,
});

const A = "/assets/campaigns/essential-brows-studio";
const SITE = "https://www.essentialbrows.studio/";

/* Her world: black and white, soft neutrals, a warm taupe for the accents. */
const THEME = {
  paper: "#f2eee8",
  paper2: "#e9e3da",
  ink: "#151413",
  ink2: "rgba(21, 20, 19, 0.74)",
  mute: "#77706a",
  rule: "rgba(21, 20, 19, 0.14)",
  accent: "#8a7462",
  deep: "#121110",
  deepInk: "#f2eee8",
  deepMute: "#9b938a",
};

const clip = (name: string, n: number, label: string) => (
  <InViewVideo base={`${A}/videos/${name}`} poster={`${A}/f${n}.jpg`} label={label} />
);

function EssentialBrowsCase() {
  return (
    <BuildNotes theme={THEME}>
      <BnBar left="Essential Brows Studio" right="Website + brand kit · 2026" />

      <BnHero
        note="Notes by Hana · Sunday Office"
        title={
          <>
            From a booking link to <em>a studio of her own.</em>
          </>
        }
        lede="These are my notes on Aliya's website: what she had before, what I noticed, and why I made each call. One question guided all of it. Does the site feel as calm and precise as her brows?"
      />

      <BnFacts
        items={[
          { k: "For", v: "Aliya, owner of Essential Brows in Milton, WA" },
          { k: "What I did", v: "Website design and build, brand kit, copy, domain and booking setup" },
          { k: "Live", v: "essentialbrows.studio", h: SITE },
          { k: "Year", v: "2026" },
        ]}
      />

      <div style={{ marginTop: 28 }}>
        <BnThenNow
          thenUrl="her booking link"
          thenLabel={
            <>
              <b>Then</b> · Where people found her
            </>
          }
          thenBody="A booking page. People could pick a time, but they couldn't see her work or learn which brow was right for them."
          thenMeta={["Bookings only", "Questions answered one message at a time"]}
          thenCap="The booking worked. Everything around it was missing."
          nowUrl="essentialbrows.studio"
          nowImg={`${A}/site-desktop.jpg`}
          nowAlt="The Essential Brows homepage: Wake up with your brows already done."
          nowCap="Now · One site that shows the work, answers the questions and books"
          nowHref={SITE}
        />
      </div>

      <BnSec
        no="00"
        label="Where she started"
        title={
          <>
            The craft was there. <em>The home wasn't.</em>
          </>
        }
      >
        <p>
          Aliya does permanent brows in Milton. Her clients drive in from Tacoma, Puyallup, Federal Way and nearby
          towns, so most of them decide whether to book before they ever meet her.
        </p>
        <p>
          A booking link can hold appointments. It can't explain the difference between nano and ombre, show her results, or tell
          someone whether they're a good candidate. So Aliya answered those questions herself, over and over, in her messages.
        </p>
        <BnPull by="My read on where she was">She didn't need more clients asking questions. She needed a place that answered them.</BnPull>
        <p>
          So I built her a site that does the explaining, with <strong>"Book Your Brows" one tap away on every page.</strong>
        </p>
      </BnSec>

      <BnSec
        no="Brief"
        label="Rules I set myself"
        title={
          <>
            Four rules <em>before designing anything.</em>
          </>
        }
      >
        <BnRules
          items={[
            { t: "Her feed leads", d: "The site should look like her Instagram: black and white, soft neutrals, close crops on the brow." },
            { t: "Answer before they ask", d: "Every question she gets in her messages should have an answer on the site." },
            { t: "Booking is one tap", d: "Whatever page someone is on, the next step is right there." },
            { t: "Phone first", d: "Her clients find her on their phones, so that's where the design starts." },
          ]}
        />
      </BnSec>

      <BnSec
        no="Side by side"
        label="What changed"
        title={
          <>
            Then <em>and now.</em>
          </>
        }
      >
        <BnCompare
          rows={[
            { a: "Home", then: "A booking link", now: "A custom website on her own domain" },
            { a: "Questions", then: "Answered one message at a time", now: "A brow guide, a candidate quiz and an FAQ" },
            { a: "Prices", then: "Inside the booking app", now: "A full menu with touch-up timing, every button linked to booking" },
            { a: "Brand", then: "Her logo, and not much around it", now: "Her logo inside a brand kit: palette, type, buttons and voice" },
            { a: "Training", then: "Not shown anywhere", now: "Its own section for one-on-one and small-group training" },
          ]}
        />
      </BnSec>

      <BnDecisions
        title={
          <>
            What I decided, <em>and why.</em>
          </>
        }
      >
        <BnDec
          no="01"
          label="Look"
          title={
            <>
              Built from <em>her feed.</em>
            </>
          }
          call="Black and white with soft neutrals, close crops on the brow and plenty of space. Nothing loud."
          why={
            <>
              Her Instagram already had a clear style, and her clients already knew it.{" "}
              <strong>Moving from her feed to her site should feel like walking into the same studio.</strong>
            </>
          }
        >
          <BnShot src={`${A}/brand-kit.jpg`} alt="Essential Brows brand kit: logo, palette, typography and brand feel" cap="The brand kit · one page she can hand to anyone" />
        </BnDec>

        <BnDec
          no="02"
          label="Structure"
          title={
            <>
              Which brow <em>is yours?</em>
            </>
          }
          call="Three techniques, each matched to how you live, plus a short quiz that tells people if they're a good candidate before they book."
          why="These were the questions Aliya answered most. Putting them on the site means clients arrive already knowing what they want."
        >
          <div className="bn-two">
            <BnShot src="" alt="" video={clip("02-which-brow", 2, "Which brow is yours?")} cap="Which brow is yours?" />
            <BnShot src="" alt="" video={clip("04-quiz", 4, "Am I a good candidate?")} cap="The candidate quiz" />
          </div>
        </BnDec>

        <BnDec
          no="03"
          label="Voice"
          title={
            <>
              Words that sound <em>like her.</em>
            </>
          }
          call={
            <>
              Honest, calm and clear. A few lines from the site: <strong>"Wake up with your brows already done."</strong> "Answer honestly."
              "Don't take our word for it. See the brows."
            </>
          }
          why="Someone choosing who works on their face wants to feel at ease. Short, plain lines do that better than big promises."
        >
          <BnShot src="" alt="" video={clip("01-wake-up", 1, "Wake up with your brows already done")} cap="The first thing people see" />
        </BnDec>

        <BnDec
          no="04"
          label="Booking"
          title={
            <>
              Every button <em>goes somewhere.</em>
            </>
          }
          call="The full menu with prices and touch-up timing, and every button linked straight to her booking system."
          why="People who know the price and the timing are ready to book. The site gets them there in one tap."
        >
          <div className="bn-two">
            <BnShot src="" alt="" video={clip("06-services", 6, "Priced and timed")} cap="Prices and touch-ups" />
            <BnShot src="" alt="" video={clip("05-faq", 5, "Questions, answered")} cap="The FAQ" />
          </div>
        </BnDec>

        <BnDec
          no="05"
          label="Phones"
          title={
            <>
              Designed for <em>the phone in her hand.</em>
            </>
          }
          call="Every page was designed at phone size first: the brow guide, the quiz, the gallery and the booking buttons."
          why="Her clients find her through Instagram and links from friends, so the first impression almost always happens on a phone."
        >
          <BnShot src={`${A}/site-phones.jpg`} alt="The Essential Brows site on phones" cap="The site on a phone" />
        </BnDec>

        <BnDec
          no="06"
          label="Setup"
          title={
            <>
              Everything <em>plugged in.</em>
            </>
          }
          call="I set up her domain and an email for inquiries, and linked every button to her booking system. I walked her through each step with plain instructions."
          why="A site isn't done until it works on its own. She left with everything connected and knew how it all fit together."
        />
      </BnDecisions>

      <BnNote
        media={<img src={`${A}/featured-cover.png`} alt="The Essential Brows logo" loading="lazy" />}
        label="A note on credit"
        title={
          <>
            Her logo. <em>My system around it.</em>
          </>
        }
      >
        The Essential Brows logo is Aliya's own mark, and the photos are hers. I didn't make either. What I built is everything around them:
        the palette, the type, the buttons, the voice and the website.
      </BnNote>

      <BnSec
        no="In her words"
        label="After launch"
        title={
          <>
            What Aliya <em>said.</em>
          </>
        }
      >
        <p className="bn-quote">
          "10/10. Quick communication, fast turnaround, no complaints. All the information added was accurate. The website is clean and
          straightforward. Will absolutely be using more of Hana's services in the future!"
        </p>
        <p className="bn-note">Aliya, owner of Essential Brows</p>
      </BnSec>

      <BnClose
        note="The short version"
        title={
          <>
            She had the craft. <em>Now she has the home.</em>
          </>
        }
        cta={{ t: "Start a project", h: "/?need=Website#inquiry" }}
      >
        Aliya sends one link now. It shows the work, answers the questions and books the appointment.
      </BnClose>

      <BnCredit
        left="An independent creative agency in Seattle. I start with the brand, then bring it to life through websites, photography and creative direction."
        right={
          <>
            Website, build, brand kit and copy by Sunday Office.
            <br />
            Logo and photography by Essential Brows. <a href="/">Back to Sunday Office →</a>
          </>
        }
      />
    </BuildNotes>
  );
}
