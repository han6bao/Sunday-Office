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

export const Route = createFileRoute("/campaigns/public-house")({
  head: () => seoHead("/campaigns/public-house"),
  component: PublicHousePage,
});

const A = "/assets/campaigns/soul-social";
const IG = "https://www.instagram.com/publichouseseattle/";

/* Their room after dark: a near-black bar, warm cream light, and the amber glow under the back-bar bottles. */
const THEME = {
  paper: "#0d0d0c",
  paper2: "#171614",
  ink: "#f2ede5",
  ink2: "rgba(242, 237, 229, 0.74)",
  mute: "#8e877d",
  rule: "rgba(242, 237, 229, 0.14)",
  accent: "#c9a46a",
  deep: "#1c1b19",
  deepInk: "#f2ede5",
  deepMute: "#a59d91",
};

/* Venue photography for Public House, made for their social media. Vertical 9:16. */
const PHOTOS = [
  { src: `${A}/ss-01.jpg`, alt: "The lit arch over the back bar at Public House" },
  { src: `${A}/ss-02.jpg`, alt: "Public House, on screen" },
  { src: `${A}/ss-03.jpg`, alt: "The Public House sign" },
  { src: `${A}/ss-04.jpg`, alt: "Behind the bar at Public House" },
  { src: `${A}/ss-05.jpg`, alt: "The bottles on the back bar at Public House" },
];

function PublicHousePage() {
  return (
    <BuildNotes theme={THEME}>
      <BnBar left="Public House" right="Photography" />

      <BnHero
        note="Notes by Hana · Sunday Office"
        title={
          <>
            A bar that glows. <em>Shot the way it looks.</em>
          </>
        }
        lede="I photographed Public House, a bar and event space in Pioneer Square, for their social media. One question guided the shoot: would the photos feel like standing in the room at night?"
      />

      <BnFacts
        items={[
          { k: "For", v: "Public House, a bar and event space in Pioneer Square, Seattle" },
          { k: "What I did", v: "Vertical venue photos for their social media" },
          { k: "Where", v: "210 Occidental Ave S, Pioneer Square, Seattle" },
          { k: "Find them", v: "@publichouseseattle", h: IG },
        ]}
      />

      <BnTour
        url="@publichouseseattle"
        href={IG}
        items={[
          { t: "The arch", d: "One lit arch with shelves up to the ceiling.", img: PHOTOS[0].src },
          { t: "Behind the bar", d: "The back bar, lit from under the bottles.", img: PHOTOS[3].src },
          { t: "The bottles", d: "Amber light under the shelves, neon over the glass.", img: PHOTOS[4].src },
          { t: "The sign", d: "Their name, in their own light.", img: PHOTOS[2].src },
          { t: "On screen", d: "Public House, as it shows up on a phone.", img: PHOTOS[1].src },
        ]}
        note="Photos by Hana."
      />

      <BnSec
        no="00"
        label="Where they started"
        title={
          <>
            A room with character. <em>A feed that needed it.</em>
          </>
        }
      >
        <p>
          <strong>Public House</strong> is a bar and event space in an old Pioneer Square building. The room has dark wood, foil ductwork
          across the ceiling and a view straight into a white-tiled kitchen.
        </p>
        <p>
          They needed photos for their social media. I shot the space itself: the lit back bar, the neon, the bottles and the tile.
        </p>
      </BnSec>

      <BnStrip
        label={
          <>
            <b>The photos</b> · Photos by Hana · Vertical 9:16
          </>
        }
        photos={PHOTOS}
        cols={5}
        ratio="9 / 16"
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
            { t: "The back bar leads", d: "The lit arch is the first thing you notice in the room, so it comes first in the photos too." },
            { t: "Keep the dark", d: "The rest of the room stays dark in person. The photos should keep it that way." },
            { t: "Shoot it as it is", d: "Warm amber and neon, the way it looks when you walk in." },
            { t: "Vertical only", d: "Everything is made for stories and posts, so nothing needs cropping later." },
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
              Start with <em>the back bar.</em>
            </>
          }
          call="One lit arch with shelves up to the ceiling. The light sits under the bottles, so the whole wall glows."
          why="It is the center of the room and the part people remember. Building the set around it gives their feed one clear picture of the place."
        >
          <BnShot src={PHOTOS[0].src} alt={PHOTOS[0].alt} cap="The arch" />
        </BnDec>

        <BnDec
          no="02"
          label="Light"
          title={
            <>
              Keep the room <em>as it feels.</em>
            </>
          }
          call="Warm amber under the shelves and neon over the glass, with the rest of the room kept dark. I shot it the way it looks in person."
          why="A bar at night is about the light. Brightening the whole room would make it look like a different place from the one people walk into."
        >
          <BnShot src={PHOTOS[4].src} alt={PHOTOS[4].alt} cap="The bottles" />
        </BnDec>

        <BnDec
          no="03"
          label="Details"
          title={
            <>
              The room <em>around the bar.</em>
            </>
          }
          call="Dark wood, foil ductwork across the ceiling, the sign and the view into the white-tiled kitchen."
          why="These details show the old Pioneer Square building the bar lives in. They give the feed more to post than one view of the bar."
        >
          <BnShot src={PHOTOS[2].src} alt={PHOTOS[2].alt} cap="The sign" />
        </BnDec>

        <BnDec
          no="04"
          label="Format"
          title={
            <>
              Vertical, <em>from the start.</em>
            </>
          }
          call="Every photo is 9:16, so it drops straight into stories and posts without cropping."
          why="The photos were made for their social media. Shooting vertical meant every frame was ready to post as it was."
        >
          <BnShot src={PHOTOS[1].src} alt={PHOTOS[1].alt} cap="Public House, on screen" />
        </BnDec>

        <BnDec
          no="05"
          label="Edit"
          title={
            <>
              The grain is <em>on purpose.</em>
            </>
          }
          call="I added grain to every photo in the edit. It's a taste choice, and it's meant to be there."
          why="A clean, sharp photo of a dark bar can feel flat, like a phone snapshot. Grain gives the photos a film feel that matches the room at night: warm, a little moody, and lived in."
        >
          <BnShot src={PHOTOS[4].src} alt={PHOTOS[4].alt} cap="Grain added in the edit, on purpose" />
        </BnDec>
      </BnDecisions>

      <BnNote
        media={<img src={`${A}/ss-04-bw.jpg`} alt="Behind the bar at Public House, Pioneer Square Seattle, black and white" loading="lazy" />}
        label="A note on credit"
        title={
          <>
            Their bar. <em>My photos of it.</em>
          </>
        }
      >
        The room, the bar and the name belong to Public House. The photos are mine, made for their social media.
      </BnNote>

      <BnClose
        note="The short version"
        title={
          <>
            A glowing back bar, <em>ready for their feed.</em>
          </>
        }
        cta={{ t: "Start a project", h: "/?need=Photography#inquiry" }}
      >
        I shot Public House the way it looks at night, in a vertical format made for stories and posts.
      </BnClose>

      <BnCredit
        left="An independent creative agency in Seattle. I start with the brand, then bring it to life through websites, photography and creative direction."
        right={
          <>
            Photos by Hana.
            <br />
            Public House · 210 Occidental Ave S, Seattle ·{" "}
            <a href={IG} target="_blank" rel="noreferrer">
              @publichouseseattle
            </a>{" "}
            <a href="/">Back to Sunday Office →</a>
          </>
        }
      />
    </BuildNotes>
  );
}
