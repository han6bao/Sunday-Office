import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { GuidePage } from "../sunday/need-pages";

export const Route = createFileRoute("/revamp-your-business")({
  head: () => seoHead("/revamp-your-business"),
  component: () => <GuidePage slug="revamp-your-business" />,
});
