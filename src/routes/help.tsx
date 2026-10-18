import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { HelpHub } from "../sunday/need-pages";

export const Route = createFileRoute("/help")({
  head: () => seoHead("/help"),
  component: HelpHub,
});
