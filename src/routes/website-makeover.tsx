import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { NeedPage } from "../sunday/need-pages";

export const Route = createFileRoute("/website-makeover")({
  head: () => seoHead("/website-makeover"),
  component: () => <NeedPage slug="website-makeover" />,
});
