import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { NeedPage } from "../sunday/need-pages";

export const Route = createFileRoute("/for-beauty-and-wellness")({
  head: () => seoHead("/for-beauty-and-wellness"),
  component: () => <NeedPage slug="for-beauty-and-wellness" />,
});
