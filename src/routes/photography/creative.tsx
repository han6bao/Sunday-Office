import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { PhotoRoom, type RoomPhoto } from "../../sunday/photo-room";

export const Route = createFileRoute("/photography/creative")({
  head: () => seoHead("/photography/creative"),
  component: Page,
});

const PHOTOS: RoomPhoto[] = [
  { src: "/assets/campaigns/exhibition/exh2.jpg", h: "/campaigns/exhibition", cap: "Exhibition" },
  { src: "/assets/campaigns/highway-chitos/forever-cover.jpg", h: "/campaigns/highway", cap: "Highway, album cover" },
  { src: "/assets/campaigns/still-different/sd-05.jpg", h: "/campaigns/still-different", cap: "Still Different" },
  { src: "/assets/campaigns/highway-chitos/hc01.jpg", h: "/campaigns/chitos", cap: "Count Boss" },
  { src: "/assets/campaigns/kenshi-killz/kk-05.jpg", h: "/campaigns/kenshi-killz", cap: "Kenshi Killz" },
];

function Page() {
  return (
    <PhotoRoom
      label="CREATIVE"
      title="Creative."
      intro="Editorial, fashion and ideas that need a bit more direction. Styled shoots, album covers and campaigns with a strong point of view."
      photos={PHOTOS}
    />
  );
}
