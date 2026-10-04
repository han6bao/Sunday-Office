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
  BnStats,
  BnStrip,
  BnTour,
  BuildNotes,
} from "../../sunday/build-notes";

export const Route = createFileRoute("/campaigns/green-grillz")({
  head: () => seoHead("/campaigns/green-grillz"),
  component: GreenGrillzPage,
});

const A = "/assets/campaigns/green-grillz";
const MARCUS = "https://www.instagram.com/maarcusadam/";
const NINE = "https://www.instagram.com/ninevicious/";

const PHOTOS = [
  { src: `${A}/gg01.jpg`, alt: "Nine Vicious wearing the green grillz" },
  { src: `${A}/gg02.jpg`, alt: "The green set · 02" },
  { src: `${A}/gg03.jpg`, alt: "The green set · 03" },
  { src: `${A}/gg04.jpg`, alt: "The green set · 04" },
];

/* A black ground like the photos, with the green of the grillz as the accent. */
const THEME = {
  paper: "#0d0d0c",
  paper2: "#171614",
  ink: "#f2ede5",
  ink2: "rgba(242, 237, 229, 0.74)",
  mute: "#8e877d",
  rule: "rgba(242, 237, 229, 0.14)",
  accent: "#7cc47f",
  deep: "#1c1b19",
  deepInk: "#f2ede5",
  deepMute: "#a59d91",
};

function GreenGrillzPage() {
  return (
    <BuildNotes theme={THEME}>
      <BnBar left="Nine Vicious × Custom Grillz" right="Photography + promotion" />

      <BnHero
        note="Notes by Hana · Sunday Office"
        title={
          <>
            Nine Vicious × Custom Grillz, <em>in the green set.</em>
          </>
        }
        lede="I photographed Nine Vicious in jeweler Marcus Adam's custom grillz, then helped promote them. One question guided the work: how do you show a piece of jewelry to more of the right people?"
      />

      <BnFacts
        items={[
          { k: "For", v: "Marcus Adam, custom jeweler" },
          { k: "What I did", v: "Photographed Nine Vicious in his grillz, then marketing and promotion" },
          { k: "Result", v: "6K likes on his most-liked post; 35K views on the promo post" },
          { k: "Where", v: "@maarcusadam", h: MARCUS },
        ]}
      />

      <BnTour
        url="@maarcusadam"
        href={MARCUS}
        items={[
          { t: "The green set", d: "Nine Vicious wearing the grillz.", img: PHOTOS[0].src },
          { t: "The green set · 02", d: "From the same shoot.", img: PHOTOS[1].src },
          { t: "The green set · 03", d: "From the same shoot.", img: PHOTOS[2].src },
          { t: "The green set · 04", d: "From the same shoot.", img: PHOTOS[3].src },
        ]}
        note="Photos by Hana Hong."
      />

      <BnSec
        no="00"
        label="Where they started"
        title={
          <>
            A jeweler, an artist <em>and one set of grillz.</em>
          </>
        }
      >
        <p>
          Marcus Adam (@maarcusadam) is a private jeweler who makes custom grillz for artists. He wanted his work in front of more of the
          right people.
        </p>
        <p>
          Nine Vicious is a rapper from Georgia who was signed to Young Thug's YSL Records. Pitchfork has compared his early work to Young
          Thug and Ken Carson.
        </p>
        <p>
          My job was to photograph Nine in the green set and build the promotion around those photos.
        </p>
      </BnSec>

      <BnStrip
        label={
          <>
            <b>The photos</b> · Photos by Hana Hong
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
            Four rules <em>before the shoot.</em>
          </>
        }
      >
        <BnRules
          items={[
            { t: "The grillz are the subject", d: "Every frame has to show the piece clearly, even when the person wearing it is well known." },
            { t: "The right person wears it", d: "A good photo of the right person wearing the piece shows it better than a product shot." },
            { t: "Shoot for the promotion", d: "The photos had to work as posts, since the promotion would be built around them." },
            { t: "Credit the maker", d: "Marcus made the grillz. The work should lead people back to him." },
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
          label="Subject"
          title={
            <>
              The piece, <em>on the artist.</em>
            </>
          }
          call="I photographed Nine Vicious wearing the grillz instead of shooting them on their own."
          why="Marcus makes grillz for artists. Seeing them on an artist shows people what they look like worn, and who they are made for."
        >
          <BnShot src={PHOTOS[0].src} alt={PHOTOS[0].alt} cap="Nine Vicious in the green set" />
        </BnDec>

        <BnDec
          no="02"
          label="Focus"
          title={
            <>
              One set, <em>the green one.</em>
            </>
          }
          call="The whole shoot centered on a single set of grillz."
          why="Keeping to one piece gave the posts one clear thing to look at and talk about."
        >
          <BnShot src={PHOTOS[1].src} alt={PHOTOS[1].alt} cap="The green set · 02" />
        </BnDec>

        <BnDec
          no="03"
          label="Promotion"
          title={
            <>
              Built around <em>the photos.</em>
            </>
          }
          call="After the shoot I handled the marketing and promotion, using these photos as the center of it."
          why="For a custom jeweler, visibility is how new clients find him. The photos were the strongest thing we had to show."
        >
          <BnShot src={PHOTOS[2].src} alt={PHOTOS[2].alt} cap="The green set · 03" />
        </BnDec>
      </BnDecisions>

      <BnSec
        no="Results"
        label="What happened"
        title={
          <>
            His most-liked post, <em>and then some.</em>
          </>
        }
      >
        <p>His post became the most-liked on his page.</p>
        <BnStats
          items={[
            { b: "6K", s: "likes on his post" },
            { b: "389", s: "reposts on his post" },
            { b: "355", s: "saves on his post" },
          ]}
        />
        <p>The promo post made the discovery page.</p>
        <BnStats
          items={[
            { b: "35K", s: "views on the promo post" },
            { b: "4,116", s: "reposts on the promo post" },
            { b: "635", s: "shares on the promo post" },
          ]}
        />
        <p>
          Then fans started using the photo as their profile picture on X and other platforms, which I didn't expect. For a custom
          jeweler, that kind of visibility helps new clients find him.
        </p>
      </BnSec>

      <BnNote
        media={<img src={PHOTOS[3].src} alt={PHOTOS[3].alt} loading="lazy" />}
        label="A note on credit"
        title={
          <>
            His grillz. <em>My photos.</em>
          </>
        }
      >
        The grillz are Marcus Adam's work, and Nine Vicious is the artist wearing them. The photos are mine, and so is the promotion built
        around them.
      </BnNote>

      <BnClose
        note="The short version"
        title={
          <>
            Have something people should see? <em>Let's get it in front of them.</em>
          </>
        }
        cta={{ t: "Start a project", h: "/?need=Photography#inquiry" }}
      >
        This works without a celebrity too. An artist, a founder or a small business can get the same result when the photos match what
        they're building.
      </BnClose>

      <BnCredit
        left="An independent creative agency in Seattle. I start with the brand, then bring it to life through websites, photography and creative direction."
        right={
          <>
            Photos by Hana Hong.
            <br />
            Grillz by Marcus Adam,{" "}
            <a href={MARCUS} target="_blank" rel="noreferrer">
              @maarcusadam ↗
            </a>
            . Worn by Nine Vicious,{" "}
            <a href={NINE} target="_blank" rel="noreferrer">
              @ninevicious ↗
            </a>
            . <a href="/">Back to Sunday Office →</a>
          </>
        }
      />
    </BuildNotes>
  );
}
