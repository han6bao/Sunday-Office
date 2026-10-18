import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { NeedPage } from "../sunday/need-pages";

export const Route = createFileRoute("/for-restaurants")({
  head: () => seoHead("/for-restaurants"),
  component: () => <NeedPage slug="for-restaurants" />,
});
