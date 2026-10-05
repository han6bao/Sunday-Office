import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { PhotoRoom, type RoomPhoto } from "../../sunday/photo-room";

export const Route = createFileRoute("/photography/events")({
  head: () => seoHead("/photography/events"),
  component: Page,
});

const PHOTOS: RoomPhoto[] = [
  { src: "/assets/campaigns/leon-thomas/lt-02.jpg", h: "/campaigns/leon-thomas", cap: "Leon Thomas at Vice" },
  { src: "/assets/campaigns/dj-prashant-hiyu/djp-01.jpg", h: "/campaigns/dj-prashant-hiyu", cap: "The Hiyu boat party" },
  { src: "/assets/campaigns/big-baby-gucci/bbg-03.jpg", h: "/campaigns/big-baby-gucci", cap: "Big Baby Gucci" },
  { src: "/assets/campaigns/dj-wzrd/dj-05.jpg", h: "/campaigns/dj-wzrd", cap: "DJ Wzrd" },
];

function Page() {
  return (
    <PhotoRoom
      label="EVENTS"
      title="Events."
      intro="Nightlife, live sets and the people in the room. Shot fast, in low light, so the night still feels like the night when it ends up on the feed."
      photos={PHOTOS}
    />
  );
}
