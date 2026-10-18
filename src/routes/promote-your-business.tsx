import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { NeedPage } from "../sunday/need-pages";

export const Route = createFileRoute("/promote-your-business")({
  head: () => seoHead("/promote-your-business"),
  component: () => <NeedPage slug="promote-your-business" />,
});
