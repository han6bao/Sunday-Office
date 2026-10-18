import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { NeedPage } from "../sunday/need-pages";

export const Route = createFileRoute("/photo-and-video-content")({
  head: () => seoHead("/photo-and-video-content"),
  component: () => <NeedPage slug="photo-and-video-content" />,
});
