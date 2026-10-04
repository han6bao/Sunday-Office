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

export const Route = createFileRoute("/campaigns/selaras-haus")({
  head: () => seoHead("/campaigns/selaras-haus"),
  component: SelarasHausPage,
});

const A = "/assets/campaigns/angie-tiara-beauty";
const IG = "https://www.instagram.com/selarashaus/";
const BOOK = "https://atiarabeauty.glossgenius.com/about";

/* Her studio: soft cream walls, warm wood and the gold of the water arch and mirror frame. */
const THEME = {
  paper: "#f6f0e6",
  paper2: "#ede5d7",
  ink: "#1d1a16",
  ink2: "rgba(29, 26, 22, 0.74)",
  mute: "#7d7468",
  rule: "rgba(29, 26, 22, 0.14)",
  accent: "#9c7d43",
  deep: "#2b2620",
  deepInk: "#f6f0e6",
  deepMute: "#c8b48a",
};

const PHOTOS = [
  { src: `${A}/at-01.jpg`, alt: "The lounge at Selaras Haus, Tacoma" },
  { src: `${A}/at-13.jpg`, alt: "Inside Selaras Haus, a beauty boutique in Tacoma, interior photography" },
  { src: `${A}/at-02.jpg`, alt: "The treatment room at Selaras Haus" },
  { src: `${A}/at-03.jpg`, alt: "The treatment table at Selaras Haus" },
  { src: `${A}/at-04.jpg`, alt: "The makeup station with a gold-framed mirror at Selaras Haus" },
  { src: `${A}/at-05.jpg`, alt: "Hydrangeas in the corner at Selaras Haus" },
];

function SelarasHausPage() {
  return (
    <BuildNotes theme={THEME}>
      <BnBar left="Selaras Haus" right="Photography" />

      <BnHero
        note="Notes by Hana · Sunday Office"
        title={
          <>
            A new studio, <em>soft from the doorway.</em>
          </>
        }
        lede="I photographed the brand-new space for Selaras Haus, Angie Tiara's skin, scalp and makeup boutique in Tacoma. One question guided the shoot: would the photos feel natural, soft and warm, the way Angie wants people to feel when they walk in?"
      />

      <BnFacts
        items={[
          { k: "For", v: "Selaras Haus, Angie Tiara's skin, scalp and makeup boutique in Tacoma" },
          { k: "What I did", v: "Interior photos of her new space for her social media and branding" },
          { k: "Where", v: "1001 Pacific Ave, downtown Tacoma" },
          { k: "Book with Angie", v: "atiarabeauty.glossgenius.com", h: BOOK },
        ]}
      />

      <BnTour
        url="@selarashaus"
        href={IG}
        items={[
          { t: "The lounge", d: "The first room people see.", img: PHOTOS[0].src },
          { t: "The chairs", d: "Where clients settle in.", img: PHOTOS[1].src },
          { t: "The treatment room", d: "Where the facials and head spa happen.", img: PHOTOS[2].src },
          { t: "The station", d: "The gold-framed mirror where she does makeup.", img: PHOTOS[4].src },
          { t: "The corner", d: "Hydrangeas, and a little softness.", img: PHOTOS[5].src },
        ]}
        note="Photos by Hana."
      />

      <BnSec
        no="00"
        label="Where she started"
        title={
          <>
            A brand-new space, <em>ready to be seen.</em>
          </>
        }
      >
        <p>
          <strong>Selaras Haus</strong> is a skin, scalp and makeup boutique by <strong>Angie Tiara</strong>, a makeup artist and licensed
          esthetician. She does makeup, facials and head spa treatments: scalp analysis, double wash, steam, exfoliation and a warm herbal
          rinse.
        </p>
        <p>
          Her studio at 1001 Pacific Ave in downtown Tacoma was brand new. She needed interior photos for her social media and branding, so
          clients could see what the space feels like before they book.
        </p>
      </BnSec>

      <BnStrip
        label={
          <>
            <b>The photos</b> · Photos by Hana
          </>
        }
        photos={PHOTOS}
        cols={3}
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
            { t: "Her feel leads", d: "Angie wants the space to feel natural, soft and warm. Every frame had to hold that." },
            { t: "Show every room", d: "The lounge, the treatment room, the station and the small corners all get their turn." },
            { t: "Let the details speak", d: "The gold water arch, the gold-framed mirror and the hydrangeas tell people who she is." },
            { t: "Made for booking", d: "A client should be able to picture themselves in the room before they ever arrive." },
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
          label="Mood"
          title={
            <>
              Soft and warm, <em>like walking in.</em>
            </>
          }
          call="I shot the space with Angie's words in mind: natural, soft and warm from the moment people walk in."
          why="The photos are often the first visit someone makes to her studio. They should carry the same feeling the room does."
        >
          <BnShot src={PHOTOS[0].src} alt={PHOTOS[0].alt} cap="The lounge" />
        </BnDec>

        <BnDec
          no="02"
          label="Coverage"
          title={
            <>
              Room <em>by room.</em>
            </>
          }
          call="I photographed the lounge, the chairs, the treatment room and the table, so the set walks through the space in order."
          why="Head spa and facials are personal. Seeing the room where they happen helps a new client feel comfortable booking."
        >
          <div className="bn-two">
            <BnShot src={PHOTOS[2].src} alt={PHOTOS[2].alt} cap="The treatment room" />
            <BnShot src={PHOTOS[3].src} alt={PHOTOS[3].alt} cap="The table" />
          </div>
        </BnDec>

        <BnDec
          no="03"
          label="Details"
          title={
            <>
              The gold <em>and the flowers.</em>
            </>
          }
          call="I gave their own frames to the gold water arch over the sink, the gold-framed mirror at the station and the hydrangeas in the corner."
          why="Small details like these are what make a space feel like hers. They also give her more to post across her social media."
        >
          <div className="bn-two">
            <BnShot src={PHOTOS[4].src} alt={PHOTOS[4].alt} cap="The station" />
            <BnShot src={PHOTOS[5].src} alt={PHOTOS[5].alt} cap="The corner" />
          </div>
        </BnDec>

        <BnDec
          no="04"
          label="Use"
          title={
            <>
              One set, <em>many places.</em>
            </>
          }
          call="A set of interiors Angie can use across her social media and branding for Selaras Haus."
          why="The photos show clients what the space feels like before they book, wherever they come across her."
        >
          <BnShot src={PHOTOS[1].src} alt={PHOTOS[1].alt} cap="The chairs" />
        </BnDec>
      </BnDecisions>

      <BnNote
        media={<img src={PHOTOS[1].src} alt={PHOTOS[1].alt} loading="lazy" />}
        label="A note on credit"
        title={
          <>
            Her space. <em>My photos of it.</em>
          </>
        }
      >
        Selaras Haus, the studio and everything in it are Angie Tiara's. The photos are mine, made for her social media and branding.
      </BnNote>

      <BnClose
        note="The short version"
        title={
          <>
            Her new studio, <em>as warm in photos as in person.</em>
          </>
        }
        cta={{ t: "Start a project", h: "/?need=Photography#inquiry" }}
      >
        I photographed every room of Selaras Haus so clients can feel the space before they book.
      </BnClose>

      <BnCredit
        left="An independent creative agency in Seattle. I start with the brand, then bring it to life through websites, photography and creative direction."
        right={
          <>
            Photos by Hana.
            <br />
            Selaras Haus by Angie Tiara · 1001 Pacific Ave, Tacoma ·{" "}
            <a href={IG} target="_blank" rel="noreferrer">
              @selarashaus
            </a>{" "}
            ·{" "}
            <a href={BOOK} target="_blank" rel="noreferrer">
              Book with Angie
            </a>{" "}
            <a href="/">Back to Sunday Office →</a>
          </>
        }
      />
    </BuildNotes>
  );
}
