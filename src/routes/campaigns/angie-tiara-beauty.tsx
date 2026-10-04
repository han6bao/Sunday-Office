import { createFileRoute, redirect } from "@tanstack/react-router";

/* Angie's studio is now Selaras Haus. Old links land on the new page. */
export const Route = createFileRoute("/campaigns/angie-tiara-beauty")({
  loader: () => {
    throw redirect({ to: "/campaigns/selaras-haus" });
  },
});
