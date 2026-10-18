import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { NeedPage } from "../sunday/need-pages";

export const Route = createFileRoute("/stand-out")({
  head: () => seoHead("/stand-out"),
  component: () => <NeedPage slug="stand-out" />,
});
