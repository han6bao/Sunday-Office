import { createFileRoute, redirect } from "@tanstack/react-router";

/* Any /archive/<slug> hit from the public side lands on the work hub
   instead of an error — the archive itself stays keyed behind /archive. */
export const Route = createFileRoute("/archive/$")({
  loader: () => {
    throw redirect({ to: "/photography" });
  },
});