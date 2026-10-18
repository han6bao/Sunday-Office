import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { NeedPage } from "../sunday/need-pages";

export const Route = createFileRoute("/for-event-planners")({
  head: () => seoHead("/for-event-planners"),
  component: () => <NeedPage slug="for-event-planners" />,
});
