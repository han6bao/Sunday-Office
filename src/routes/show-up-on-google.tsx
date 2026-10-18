import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { NeedPage } from "../sunday/need-pages";

export const Route = createFileRoute("/show-up-on-google")({
  head: () => seoHead("/show-up-on-google"),
  component: () => <NeedPage slug="show-up-on-google" />,
});
