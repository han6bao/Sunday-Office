import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { PhotoRoom, type RoomPhoto } from "../../sunday/photo-room";

export const Route = createFileRoute("/photography/people")({
  head: () => seoHead("/photography/people"),
  component: Page,
});

const PHOTOS: RoomPhoto[] = [
  { src: "/assets/photography/avery-01.jpg", h: "/campaigns/avery-tien", cap: "Avery Tien" },
  { src: "/assets/campaigns/kenshi-killz/kk-01.jpg", h: "/campaigns/kenshi-killz", cap: "Kenshi Killz" },
  { src: "/assets/campaigns/paradice/pz01.jpg", h: "/campaigns/paradice", cap: "Itz Pz." },
  { src: "/assets/headshots/standard-01.jpg", h: "/headshots", cap: "Headshots" },
  { src: "/assets/campaigns/avery-tien/at01.jpg", h: "/campaigns/avery-tien", cap: "Avery Tien" },
  { src: "/assets/campaigns/kenshi-killz/kk-03.jpg", h: "/campaigns/kenshi-killz", cap: "Kenshi Killz" },
  { src: "/assets/headshots/creative-01.jpg", h: "/headshots", cap: "Creative headshots" },
  { src: "/assets/campaigns/paradice/pz05.jpg", h: "/campaigns/paradice", cap: "Itz Pz." },
  { src: "/assets/photography/avery-02.jpg", h: "/campaigns/avery-tien", cap: "Avery Tien" },
];

function Page() {
  return (
    <PhotoRoom
      label="PEOPLE"
      title="People."
      intro="Portraits of artists, founders and people building something. Headshots, personal branding and photos that actually look like the person in them."
      photos={PHOTOS}
    />
  );
}
