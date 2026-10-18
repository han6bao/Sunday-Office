import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { NeedPage } from "../sunday/need-pages";

export const Route = createFileRoute("/launch-a-website")({
  head: () => seoHead("/launch-a-website"),
  component: () => <NeedPage slug="launch-a-website" />,
});
