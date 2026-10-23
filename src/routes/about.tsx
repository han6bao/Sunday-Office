import { createFileRoute, redirect } from "@tanstack/react-router";

/* The About page is retired. Old links land on Meet Hana on the homepage. */
export const Route = createFileRoute("/about")({
  loader: () => {
    throw redirect({ to: "/", hash: "about-hana" });
  },
});
