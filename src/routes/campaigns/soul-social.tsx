import { createFileRoute, redirect } from "@tanstack/react-router";

/* This shoot is now listed as Public House. Old links land on the new page. */
export const Route = createFileRoute("/campaigns/soul-social")({
  loader: () => {
    throw redirect({ to: "/campaigns/public-house" });
  },
});
