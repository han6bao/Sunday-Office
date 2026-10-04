import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import {
  BnBar,
  BnClose,
  BnCredit,
  BnDec,
  BnDecisions,
  BnFacts,
  BnHero,
  BnNote,
  BnRules,
  BnSec,
  BnShot,
  BnStrip,
  BnTour,
  BuildNotes,
} from "../../sunday/build-notes";

export const Route = createFileRoute("/campaigns/bar-bistro")({
  head: () => seoHead("/campaigns/bar-bistro"),
  component: BarBistroPage,
});

const A = "/assets/campaigns/bar-bistro";
const SITE = "http://barbistrotacoma.com/";
const TU = "https://www.instagram.com/tacoma_uncovered/";

/* Their bar at night: a near-black ground and candlelight amber for the accents. */
const THEME = {
  paper: "#0d0d0c",
  paper2: "#171614",
  ink: "#f2ede5",
  ink2: "rgba(242, 237, 229, 0.74)",
  mute: "#8e877d",
  rule: "rgba(242, 237, 229, 0.14)",
  accent: "#c98a4b",
  deep: "#1c1b19",
  deepInk: "#f2ede5",
  deepMute: "#a59d91",
};

const PHOTOS = [
  { src: `${A}/bb-01.jpg`, alt: "The candle round: three cocktails beside a lit candle at Bar Bistro" },
  { src: `${A}/bb-02.jpg`, alt: "Shrimp and risotto topped with crispy shallots at Bar Bistro" },
  { src: `${A}/bb-03.jpg`, alt: "Strawberry cake in front of the Bar Bistro menu" },
  { src: `${A}/bb-04.jpg`, alt: "The peach: a peach cocktail with a sugared rim at Bar Bistro" },
  { src: `${A}/bb-05.jpg`, alt: "The mojito: a tall mojito with mint and lime at Bar Bistro" },
  { src: `${A}/bb-06.jpg`, alt: "The trio: three cocktails with berries and citrus at Bar Bistro" },
  { src: `${A}/bb-07.jpg`, alt: "Sunlight service: cake, a cocktail and the menu on a sunny patio table at Bar Bistro" },
];

function BarBistroPage() {
  return (
    <BuildNotes theme={THEME}>
      <BnBar left="Bar Bistro" right="Photography" />

      <BnHero
        note="Notes by Hana · Sunday Office"
        title={
          <>
            Food and drinks for the feed, <em>kept dark and warm.</em>
          </>
        }
        lede="These are my notes on the food and drink photos I shoot for Bar Bistro's social media, and a table shoot with Tacoma Uncovered. One question guided all of it. Does each photo feel like a seat at their bar?"
      />

      <BnFacts
        items={[
          { k: "For", v: "Bar Bistro, a New American restaurant and bar in Tacoma" },
          { k: "What I did", v: "Food and drink photos for their social media, plus a table shoot with Tacoma Uncovered" },
          { k: "Where", v: "1718 99th St E, Tacoma, WA" },
        ]}
      />

      <BnTour
        url="barbistrotacoma.com"
        href={SITE}
        items={[
          { t: "The candle round", d: "Three cocktails and a candle.", img: PHOTOS[0].src },
          { t: "Shrimp and risotto", d: "From the kitchen, at the table.", img: PHOTOS[1].src },
          { t: "The mojito", d: "Mint, lime and warm light behind it.", img: PHOTOS[4].src },
          { t: "The trio", d: "Berries, citrus and three glasses.", img: PHOTOS[5].src },
          { t: "Sunlight service", d: "Cake and a cocktail out on the patio.", img: PHOTOS[6].src },
        ]}
        note="Photos by Hana."
      />

      <BnSec
        no="00"
        label="Where they started"
        title={
          <>
            Northwest flavors <em>in east Tacoma.</em>
          </>
        }
      >
        <p>
          Bar Bistro is a New American restaurant in east Tacoma at 1718 99th St E. The menu is built on Northwest flavors, with a full
          kitchen and bar.
        </p>
        <p>
          Every Sunday they run <strong>Sunday Supper</strong>, served family-style in limited portions until it runs out. They needed food
          and drink photos for their social media.
        </p>
      </BnSec>

      <BnStrip
        label={
          <>
            <b>The photos</b> · Photos by Hana
          </>
        }
        photos={PHOTOS}
        cols={4}
        ratio="4 / 5"
      />

      <BnSec
        no="Brief"
        label="Rules I set myself"
        title={
          <>
            Four rules <em>before the first frame.</em>
          </>
        }
      >
        <BnRules
          items={[
            { t: "Dark and warm", d: "The edit stays dark and warm, so the feed reads like an evening at their bar." },
            { t: "Kitchen and bar", d: "They run a full kitchen and a full bar, so both get their turn in the feed." },
            { t: "Made for the feed", d: "These photos live on their social media, so I frame them tall for a phone screen." },
            { t: "Their name in the frame", d: "When the menu is on the table, it stays in the shot so people know where they are." },
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
          label="Edit"
          title={
            <>
              Dark <em>and warm.</em>
            </>
          }
          call="I keep the edit dark and warm, with candles and low light behind the glasses."
          why="A bar is mostly an evening place. Keeping every post in the same mood makes their feed look like one place, photo after photo."
        >
          <BnShot src={PHOTOS[0].src} alt={PHOTOS[0].alt} cap="The candle round" />
        </BnDec>

        <BnDec
          no="02"
          label="Format"
          title={
            <>
              Tall frames <em>for a phone.</em>
            </>
          }
          call="I shoot the drinks and plates in tall frames, close enough to see the rim, the garnish and the ice."
          why="People see these on their phones in a feed. A tall, close frame fills the screen and shows the details that make someone want to order."
        >
          <div className="bn-two">
            <BnShot src={PHOTOS[3].src} alt={PHOTOS[3].alt} cap="The peach" />
            <BnShot src={PHOTOS[4].src} alt={PHOTOS[4].alt} cap="The mojito" />
          </div>
        </BnDec>

        <BnDec
          no="03"
          label="Collab"
          title={
            <>
              One table, <em>shot together.</em>
            </>
          }
          call={
            <>
              <strong>Tacoma Uncovered</strong>, a Tacoma food account, came in and we shot the whole table together.
            </>
          }
          why="A local food account brings the restaurant in front of people who already follow Tacoma food. Shooting the same table side by side keeps their posts and Bar Bistro's in step."
        >
          <BnShot src={PHOTOS[5].src} alt={PHOTOS[5].alt} cap="The trio" />
        </BnDec>

        <BnDec
          no="04"
          label="Light"
          title={
            <>
              A little <em>daylight too.</em>
            </>
          }
          call="One frame breaks from the night: cake, a cocktail and their menu on a sunny patio table."
          why="A feed that is all night can feel heavy. A sunny frame now and then shows another way to spend an afternoon there."
        >
          <BnShot src={PHOTOS[6].src} alt={PHOTOS[6].alt} cap="Sunlight service" />
        </BnDec>
      </BnDecisions>

      <BnNote
        media={<img src={PHOTOS[2].src} alt={PHOTOS[2].alt} loading="lazy" />}
        label="A note on credit"
        title={
          <>
            Their food, their bar, their name. <em>My photos.</em>
          </>
        }
      >
        The dishes, the drinks and the Bar Bistro name belong to the restaurant. The table shoot was a collaboration with Tacoma
        Uncovered. The photos on this page are mine.
      </BnNote>

      <BnClose
        note="The short version"
        title={
          <>
            A seat at the bar, <em>in every post.</em>
          </>
        }
        cta={{ t: "Start a project", h: "/?need=Photography#inquiry" }}
      >
        I shoot Bar Bistro's food and drinks in one dark, warm look, so their feed feels like their room.
      </BnClose>

      <BnCredit
        left="An independent creative agency in Seattle. I start with the brand, then bring it to life through websites, photography and creative direction."
        right={
          <>
            Photos by Hana. Table shoot with{" "}
            <a href={TU} target="_blank" rel="noreferrer">
              @tacoma_uncovered ↗
            </a>
            .
            <br />
            <a href={SITE} target="_blank" rel="noreferrer">
              barbistrotacoma.com ↗
            </a>{" "}
            · 1718 99th St E, Tacoma, WA · (253) 537-3655
            <br />
            <a href="/">Back to Sunday Office →</a>
          </>
        }
      />
    </BuildNotes>
  );
}
