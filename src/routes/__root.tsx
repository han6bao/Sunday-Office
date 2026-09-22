import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportHiggsfieldError } from "../lib/higgsfield-error-reporting";
// Page metadata (browser <title>/favicon + social og: tags) committed into the
// repo by the marketplace meta API and read at BUILD time — no runtime fetch.
import appMetaJson from "../app-meta.json";

declare const __HF_DESIGN_INSPECTOR__: boolean;

const DEFAULT_TITLE = "Sunday Office";
const DEFAULT_DESCRIPTION =
  "An independent creative agency. Photography-led creative work — good ideas deserve somewhere to go.";

type AppMeta = {
  og_title?: string | null;
  og_description?: string | null;
  og_image_url?: string | null;
  favicon_url?: string | null;
  og_video_url?: string | null;
};

const appMeta = appMetaJson as AppMeta;

const APP_HOST_ZONES = ["higgsfield.app", "higgsfield-dev.app"];

function toOwnAssetUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  if (value.startsWith("/")) return value;
  try {
    const u = new URL(value);
    const isAppHost = APP_HOST_ZONES.some(
      (zone) => u.hostname === zone || u.hostname.endsWith(`.${zone}`),
    );
    if (isAppHost) return u.pathname + u.search;
    return value;
  } catch {
    return value;
  }
}

function buildHead(meta: AppMeta) {
  const title = meta.og_title ?? DEFAULT_TITLE;
  const description = meta.og_description ?? DEFAULT_DESCRIPTION;
  const ogImage = toOwnAssetUrl(meta.og_image_url);
  const favicon = toOwnAssetUrl(meta.favicon_url);
  const ogVideo = toOwnAssetUrl(meta.og_video_url);

  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: ogImage ? "summary_large_image" : "summary" },
      ...(ogImage
        ? [
            { property: "og:image", content: ogImage },
            { name: "twitter:image", content: ogImage },
          ]
        : []),
      ...(ogVideo ? [{ property: "og:video", content: ogVideo }] : []),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      ...(favicon ? [{ rel: "icon", type: "image/svg+xml", href: favicon }] : []),
    ],
  };
}

function NotFoundComponent() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 160, paddingBottom: 60 }}>
        <p className="so-micro">FILE NO. 404</p>
        <h1 style={{ fontSize: "clamp(40px,8vw,90px)" }} className="so-serif mt-3">
          Nothing here.
        </h1>
        <p className="eyebrow-cap mt-4">
          The page you are looking for has moved or never existed.
        </p>
        <a className="so-btn so-btn-ghost mt-6" href="/">
          Back to the office
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportHiggsfieldError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 160, paddingBottom: 60 }}>
        <p className="so-micro so-micro-red">FILE NO. ERR</p>
        <h1 style={{ fontSize: "clamp(40px,8vw,90px)" }} className="so-serif mt-3">
          This page didn't load.
        </h1>
        <div className="mt-4" style={{ display: "flex", gap: 14 }}>
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="so-btn"
          >
            Try again
          </button>
          <a className="so-btn so-btn-ghost" href="/">
            Back home
          </a>
        </div>
      </div>
    </div>
  );
}

/** Mobile-only fixed INQUIRE bar — hides once the visitor reaches office hours. */
function InquireBar() {
  const [atOffice, setAtOffice] = useState(false);
  useEffect(() => {
    const el = document.getElementById("office-hours");
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) setAtOffice(e.isIntersecting);
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <a
      href="/#office-hours"
      aria-label="Inquire about a project"
      className="so-inquire-bar"
      style={{ opacity: atOffice ? 0 : 1, pointerEvents: atOffice ? "none" : "auto" }}
    >
      INQUIRE →
    </a>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => buildHead(appMeta),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      <head>
        <HeadContent />
      </head>
      <body className="bg-cream text-navy font-sans">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (!__HF_DESIGN_INSPECTOR__) {
      return;
    }
    void import("../module/design-inspector/runtime")
      .then(({ installHiggsfieldDesignInspector }) => {
        installHiggsfieldDesignInspector();
      })
      .catch((error) => {
        reportHiggsfieldError(
          error instanceof Error ? error : new Error("Failed to load design inspector"),
          {
            boundary: "higgsfield_design_inspector_import",
          },
        );
      });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <InquireBar />
    </QueryClientProvider>
  );
}