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

export const Route = createFileRoute("/campaigns/chutneys")({
  head: () => seoHead("/campaigns/chutneys"),
  component: ChutneysPage,
});

const A = "/assets/campaigns/chutneys";
const SITE = "https://chutneysinbellevue.com/";

/* Their room after dark: a near-black ground, warm wood, and saffron for the accents. */
const THEME = {
  paper: "#0d0d0c",
  paper2: "#171614",
  ink: "#f2ede5",
  ink2: "rgba(242, 237, 229, 0.74)",
  mute: "#8e877d",
  rule: "rgba(242, 237, 229, 0.14)",
  accent: "#d9a05b",
  deep: "#1c1b19",
  deepInk: "#f2ede5",
  deepMute: "#a59d91",
};

const PHOTOS = [
  { src: `${A}/ch-01.jpg`, alt: "A pink cocktail in a coupe glass, set over a smoking dish at Chutneys" },
  { src: `${A}/ch-02.jpg`, alt: "A plated starter on slate with apple crisps and greens, on a wood table at Chutneys" },
  { src: `${A}/ch-03.jpg`, alt: "Glazed lollipop chicken with tall crisps, in a dark bowl at Chutneys" },
  { src: `${A}/ch-04.jpg`, alt: "A skillet with a fried egg, pickled vegetables and soft buns on a wood board at Chutneys" },
];

function ChutneysPage() {
  return (
    <BuildNotes theme={THEME}>
      <BnBar left="Chutneys" right="Commercial + photography" />

      <BnHero
        note="Notes by Hana · Sunday Office"
        title={
          <>
            A commercial and a table of plates, <em>shot in their own light.</em>
          </>
        }
        lede="These are my notes on the work I made for Chutneys in Bellevue: a commercial, plus promo photos for their social media and website. One question guided all of it. Would someone scrolling past want to come in and eat?"
      />

      <BnFacts
        items={[
          { k: "For", v: "Chutneys, a North Indian restaurant in downtown Bellevue" },
          { k: "What I did", v: "A commercial, plus promo photos for their social media and website, shot and edited by me" },
          { k: "Where", v: "City Square, 938 110th Ave NE #5, Bellevue" },
        ]}
      />

      <BnTour
        url="chutneysinbellevue.com"
        href={SITE}
        items={[
          { t: "The cocktail", d: "A pink coupe over a smoking dish.", img: PHOTOS[0].src },
          { t: "The starter", d: "Laid out on slate, on their wood tables.", img: PHOTOS[1].src },
          { t: "The chicken", d: "Glazed, with tall crisps, against the dark room.", img: PHOTOS[2].src },
          { t: "The skillet", d: "A fried egg, pickles and soft buns on a board.", img: PHOTOS[3].src },
        ]}
        note="Photos by Hana Hong."
      />

      <BnSec
        no="00"
        label="Where they started"
        title={
          <>
            A modern Mumbai menu <em>in downtown Bellevue.</em>
          </>
        }
      >
        <p>
          Chutneys is an upscale North Indian restaurant in downtown Bellevue, serving modern Mumbai flavors. The menu mixes comfort food
          and street-food favorites with Chinese-inspired dishes.
        </p>
        <p>
          They also cater, from small dinners to big celebrations, with live cooking and regional dishes. They needed a commercial and a
          set of promo photos for their social media and website.
        </p>
      </BnSec>

      <BnStrip
        label={
          <>
            <b>The photos</b> · Photos by Hana Hong
          </>
        }
        photos={PHOTOS}
        cols={2}
        ratio="4 / 3"
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
            { t: "The food leads", d: "Each plate gets its own frame, so people can see what they would order." },
            { t: "Use their room", d: "Their wood tables and dark dining room are part of the place, so they stay in the shot." },
            { t: "One look for both", d: "The commercial and the photos should feel like they came from the same evening." },
            { t: "Made for where it lives", d: "Everything has to work on their social media and on their website." },
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
          label="Format"
          title={
            <>
              Moving pictures <em>and stills.</em>
            </>
          }
          call="A commercial for Chutneys Bellevue, plus promo photos of the plates and the dining room. I shot and edited all of it."
          why="Their social media and website each need both kinds of content. Doing the film and the photos myself keeps the color and mood the same across all of it."
        >
          <BnShot
            src=""
            alt=""
            video={
              <video controls playsInline preload="metadata" poster={`${A}/commercial-poster.jpg`}>
                <source src={`${A}/commercial.mp4`} type="video/mp4" />
              </video>
            }
            cap="The commercial · made for Chutneys Bellevue"
          />
        </BnDec>

        <BnDec
          no="02"
          label="Light"
          title={
            <>
              Dark room, <em>warm wood.</em>
            </>
          }
          call="I kept the backgrounds dark and let the light fall on the food and the grain of their tables."
          why="A dark ground makes the colors on the plate stand out. The wood keeps it warm and tells you this is a sit-down dinner."
        >
          <BnShot src={PHOTOS[2].src} alt={PHOTOS[2].alt} cap="Glazed chicken against the dark room" />
        </BnDec>

        <BnDec
          no="03"
          label="Drinks"
          title={
            <>
              Let the smoke <em>do the work.</em>
            </>
          }
          call="The cocktail sits over a smoking dish, framed so the smoke fills the space around the glass."
          why="Movement in a still photo makes people stop. The smoke shows what it feels like to be served that drink at the table."
        >
          <BnShot src={PHOTOS[0].src} alt={PHOTOS[0].alt} cap="The cocktail and its smoke" />
        </BnDec>

        <BnDec
          no="04"
          label="Edit"
          title={
            <>
              One hand <em>on every frame.</em>
            </>
          }
          call="I did all the editing myself, for the commercial and the photos."
          why="When one person edits everything, the set holds together. A plate on their website looks like it belongs with the post on their feed."
        >
          <BnShot src={PHOTOS[3].src} alt={PHOTOS[3].alt} cap="The skillet, edited with the rest of the set" />
        </BnDec>
      </BnDecisions>

      <BnNote
        media={<img src={PHOTOS[1].src} alt={PHOTOS[1].alt} loading="lazy" />}
        label="A note on credit"
        title={
          <>
            Their food and their room. <em>My photos and film.</em>
          </>
        }
      >
        The dishes, the drinks and the dining room belong to Chutneys and their kitchen. The commercial and the photos are mine. I shot and
        edited them for their social media and website.
      </BnNote>

      <BnClose
        note="The short version"
        title={
          <>
            Good food deserves <em>to be seen properly.</em>
          </>
        }
        cta={{ t: "Start a project", h: "/?need=Photography#inquiry" }}
      >
        Chutneys now has a commercial and a set of photos that show their menu the way it looks on the table.
      </BnClose>

      <BnCredit
        left="An independent creative agency in Seattle. I start with the brand, then bring it to life through websites, photography and creative direction."
        right={
          <>
            Photos by Hana Hong. Commercial shot and edited by Hana Hong.
            <br />
            <a href={SITE} target="_blank" rel="noreferrer">
              chutneysinbellevue.com ↗
            </a>{" "}
            · City Square, 938 110th Ave NE #5, Bellevue · +1 425-467-0867
            <br />
            <a href="/">Back to Sunday Office →</a>
          </>
        }
      />
    </BuildNotes>
  );
}
