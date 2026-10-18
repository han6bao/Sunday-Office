import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { WaResources } from "../sunday/need-pages";

export const Route = createFileRoute("/washington-business-resources")({
  head: () => seoHead("/washington-business-resources"),
  component: WaResources,
});
