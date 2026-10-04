import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import {
  BnBar,
  BnClose,
  BnCompare,
  BnCredit,
  BnDec,
  BnDecisions,
  BnFacts,
  BnHero,
  BnNext,
  BnNote,
  BnPull,
  BnRules,
  BnSec,
  BnShot,
  BnSwatches,
  BnThenNow,
  BuildNotes,
} from "../../sunday/build-notes";

export const Route = createFileRoute("/campaigns/jazmins-events")({
  head: () => seoHead("/campaigns/jazmins-events"),
  component: JazminsCase,
});

const A = "/assets/campaigns/jazmins-events";
const SITE = "https://jazmins-events.vercel.app/";

/* Her world: ivory paper, forest green, a little gold. */
const THEME = {
  paper: "#f6f1e4",
  paper2: "#ece6d6",
  ink: "#1f2e25",
  ink2: "rgba(31, 46, 37, 0.76)",
  mute: "#76806f",
  rule: "rgba(47, 70, 57, 0.18)",
  accent: "#9a7f45",
  deep: "#2f4639",
  deepInk: "#f6f1e4",
  deepMute: "#c9b17a",
};

function JazminsCase() {
  return (
    <BuildNotes theme={THEME}>
      <BnBar left="Jazmin's Events & Coordinating" right="Brand + website · 2026" />

      <BnHero
        note="Notes by Hana · Sunday Office"
        title={
          <>
            A new business, <em>built from the first page.</em>
          </>
        }
        lede="These are my notes on Jazmin's brand and website. She was starting a wedding planning business with nothing built yet. Every call came back to one question: would a couple trust her with their day?"
        extra={<span className="bn-status">Branding done · website in progress</span>}
      />

      <BnFacts
        items={[
          { k: "For", v: "Jazmin, founder and planner of Jazmin's Events & Coordinating" },
          { k: "What I did", v: "Brand identity, monogram and seals, brand guide and board, Instagram templates, website" },
          { k: "See it", v: "The site so far", h: SITE },
          { k: "Year", v: "2026" },
        ]}
      />

      <div style={{ marginTop: 28 }}>
        <BnThenNow
          thenUrl="nothing yet"
          thenLabel={
            <>
              <b>Then</b> · A name and an idea
            </>
          }
          thenBody="A new wedding planning business. No logo, no website and no feed yet."
          thenMeta={["Starting from scratch", "First clients still to come"]}
          thenCap="Everything had to be made, and it had to feel ready on day one."
          nowUrl="Jazmin's Events · the brand in use"
          nowImg={`${A}/kit-in-action.jpg`}
          nowAlt="The identity on business cards, stationery, a social post and a story"
          nowCap="Now · Cards, stationery, feed and stories in one look"
        />
      </div>

      <BnSec
        no="00"
        label="Where she started"
        title={
          <>
            She knew the feeling. <em>She needed the look.</em>
          </>
        }
      >
        <BnPull by="Jazmin, from her about page">"I know what it feels like to be on the other side of the aisle."</BnPull>
        <p>
          Planning a wedding showed Jazmin how many details sit behind one day. She started her business because she loves bringing those
          details together, so the couple can actually enjoy what they planned.
        </p>
        <p>
          Couples hiring a planner are trusting someone with one of the biggest days of their lives. A new business has no reviews yet, so{" "}
          <strong>the brand has to do the reassuring.</strong>
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
            { t: "Calm first", d: "Couples arrive carrying venues, vendors, families and timelines. The brand should lower their shoulders." },
            { t: "Then romantic", d: "Arches, botanicals, creams and greens, and a script touch, so it looks like the wedding they're picturing." },
            { t: "Show first", d: "We hadn't worked together before, so I built a clickable mockup before asking her for anything." },
            { t: "Hers to run", d: "Everything she uses day to day had to be editable in Canva, so she never waits on me to post." },
          ]}
        />
      </BnSec>

      <BnSec
        no="Side by side"
        label="What she has now"
        title={
          <>
            Then <em>and now.</em>
          </>
        }
      >
        <BnCompare
          rows={[
            { a: "Identity", then: "A business name", now: "Logo, JE monogram, wax seals, palette, type and voice" },
            { a: "Guide", then: "Nothing written down", now: "A brand guide and brand board, editable in Canva" },
            { a: "Instagram", then: "No feed yet", now: "10 post templates she fills in herself" },
            { a: "Website", then: "None", now: "Services, her process, an FAQ and an inquiry form" },
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
          label="Color"
          title={
            <>
              Green for calm, <em>gold for the day.</em>
            </>
          }
          call="Sage and forest green, warm ivory and linen, with a touch of gold used the way you'd use foil on an invitation."
          why={
            <>
              Green reads as calm and steady, and new beginnings. During a stressful season it tells couples they're in good hands.{" "}
              <strong>Ivory keeps it warm, and the gold makes it feel special without getting loud.</strong>
            </>
          }
        >
          <BnSwatches
            items={[
              { n: "Sage", hex: "#8D9F88" },
              { n: "Ivory", hex: "#F6F1E4" },
              { n: "Forest", hex: "#2F4639", dark: true },
              { n: "Gold", hex: "#C9B17A" },
              { n: "Linen", hex: "#E4DED2" },
            ]}
          />
        </BnDec>

        <BnDec
          no="02"
          label="Type"
          title={
            <>
              Romantic, <em>but easy to read.</em>
            </>
          }
          call="Timeless Romantic for headlines, Cormorant Garamond for everything you read, and Bakendy script only for small flourishes."
          why="Script feels like a wedding, but too much of it gets hard to read. Keeping it to accents lets the brand feel romantic while the words stay clear."
        >
          <BnShot src={`${A}/kit-guide.jpg`} alt="Jazmin's Events brand guide: logos, palette, typography and texture" cap="The brand guide · edition 01" />
        </BnDec>

        <BnDec
          no="03"
          label="The marks"
          title={
            <>
              A monogram <em>and a seal.</em>
            </>
          }
          call="A JE monogram in forest, ivory and gold, and wax seals in green and gold for envelopes, packaging and the finishing touches."
          why="Wedding clients notice the small things. A seal on an envelope says she pays attention before she's planned anything."
        >
          <BnShot src={`${A}/kit-board.jpg`} alt="Brand board: stationery, wax seals, stamps and the palette" cap="The brand board · stationery, seals and stamps" />
        </BnDec>

        <BnDec
          no="04"
          label="Instagram"
          title={
            <>
              Ten posts, <em>ready to fill.</em>
            </>
          }
          call="Templates for her welcome post, services, how it works, FAQ, kind words, now booking and the website launch. She drops in photos and edits the words in Canva."
          why="A new business needs to post before it has a library of photos. Templates keep her feed on-brand from the first post, and she doesn't need me to do it."
        >
          <BnShot src={`${A}/kit-instagram.jpg`} alt="Ten Instagram post templates in sage, ivory and forest" cap="10 Canva templates" />
        </BnDec>

        <BnDec
          no="05"
          label="Website"
          title={
            <>
              A site that walks couples <em>through her process.</em>
            </>
          }
          call={
            <>
              Three services: wedding coordination, partial planning, and full planning and coordination. Then her five steps, from "Tell us
              everything" to "Go enjoy your day", an FAQ and an inquiry form. <a href={SITE} target="_blank" rel="noreferrer">See the site so far ↗</a>
            </>
          }
          why="Couples want to know what working with her looks like before they reach out. Laying out the steps answers that, and makes the inquiry feel like the natural next step."
        />
      </BnDecisions>

      <BnNote
        media={<img src={`${A}/je-monogram-ivory.svg`} alt="The JE monogram" loading="lazy" />}
        label="A note on the brand"
        title={
          <>
            Made from scratch, <em>made to last.</em>
          </>
        }
      >
        The logo, monogram, seals, palette, guide and templates are all new for Jazmin. Everything is set up in Canva so she can keep using it
        long after launch.
      </BnNote>

      <BnSec
        no="Next"
        label="Where it stands"
        title={
          <>
            Good brands <em>keep growing.</em>
          </>
        }
      >
        <BnNext
          items={[
            { s: "done", t: "Brand identity", d: "Logo, monogram, palette, type and voice." },
            { s: "done", t: "Brand kit", d: "Guide, board, 10 Instagram templates and seals, all editable in Canva." },
            { s: "now", t: "Website", d: "Built, and we're finishing it together." },
            { s: "next", t: "Launch", d: "Her portrait, real photos from her events and words from her first couples go in as she books." },
          ]}
        />
      </BnSec>

      <BnClose
        note="Her tagline"
        title={
          <>
            You live the moment. <em>We'll handle the rest.</em>
          </>
        }
        cta={{ t: "Start a project", h: "/?need=Branding#inquiry" }}
      >
        Starting something new? I can build the brand and the website together, so everything matches from day one.
      </BnClose>

      <BnCredit
        left="An independent creative agency in Seattle. I start with the brand, then bring it to life through websites, photography and creative direction."
        right={
          <>
            Brand identity, brand kit and website by Sunday Office.
            <br />
            <a href="/">Back to Sunday Office →</a>
          </>
        }
      />
    </BuildNotes>
  );
}
