import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { PhotoRoom, type RoomPhoto } from "../../sunday/photo-room";

export const Route = createFileRoute("/photography/brands")({
  head: () => seoHead("/photography/brands"),
  component: Page,
});

const PHOTOS: RoomPhoto[] = [
  { src: "/assets/campaigns/bar-bistro/bb-01.jpg", h: "/campaigns/bar-bistro", cap: "Bar Bistro" },
  { src: "/assets/campaigns/chutneys/ch-01.jpg", h: "/campaigns/chutneys", cap: "Chutneys" },
  { src: "/assets/campaigns/angie-tiara-beauty/at-01.jpg", h: "/campaigns/selaras-haus", cap: "Selaras Haus" },
  { src: "/assets/campaigns/soul-social/ss-01.jpg", h: "/campaigns/public-house", cap: "Public House" },
  { src: "/assets/campaigns/still-different/sd-04.jpg", h: "/campaigns/still-different", cap: "Still Different" },
];

function Page() {
  return (
    <PhotoRoom
      label="BRANDS"
      title="Brands."
      intro="Photos for businesses: food, rooms, products and the details that make people want to walk in. Made for websites, menus and social media."
      photos={PHOTOS}
    />
  );
}
