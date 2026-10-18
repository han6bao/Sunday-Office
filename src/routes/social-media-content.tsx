import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { NeedPage } from "../sunday/need-pages";

export const Route = createFileRoute("/social-media-content")({
  head: () => seoHead("/social-media-content"),
  component: () => <NeedPage slug="social-media-content" />,
});
