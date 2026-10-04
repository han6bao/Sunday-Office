import { createFileRoute, redirect } from "@tanstack/react-router";

/* This project page was retired. Old links land on the homepage. */
export const Route = createFileRoute("/campaigns/soniqreign")({
  loader: () => {
    throw redirect({ to: "/" });
  },
});
