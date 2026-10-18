import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { GuidePage } from "../sunday/need-pages";

export const Route = createFileRoute("/just-started")({
  head: () => seoHead("/just-started"),
  component: () => <GuidePage slug="just-started" />,
});
