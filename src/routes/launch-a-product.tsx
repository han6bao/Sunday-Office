import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { NeedPage } from "../sunday/need-pages";

export const Route = createFileRoute("/launch-a-product")({
  head: () => seoHead("/launch-a-product"),
  component: () => <NeedPage slug="launch-a-product" />,
});
