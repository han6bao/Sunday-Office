import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { NeedPage } from "../sunday/need-pages";

export const Route = createFileRoute("/creative-branding")({
  head: () => seoHead("/creative-branding"),
  component: () => <NeedPage slug="creative-branding" />,
});
