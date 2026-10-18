import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { NeedPage } from "../sunday/need-pages";

export const Route = createFileRoute("/get-more-customers")({
  head: () => seoHead("/get-more-customers"),
  component: () => <NeedPage slug="get-more-customers" />,
});
