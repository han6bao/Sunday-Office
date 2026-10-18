import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { NeedPage } from "../sunday/need-pages";

export const Route = createFileRoute("/launch-your-business")({
  head: () => seoHead("/launch-your-business"),
  component: () => <NeedPage slug="launch-your-business" />,
});
