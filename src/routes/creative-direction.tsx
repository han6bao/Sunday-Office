import { createFileRoute, redirect } from "@tanstack/react-router";

/* The older Creative Direction page was merged into Creative Direction +
   Social. Old links land there instead of on a duplicate page. */
export const Route = createFileRoute("/creative-direction")({
  loader: () => {
    throw redirect({ to: "/creative-direction-content" });
  },
});
