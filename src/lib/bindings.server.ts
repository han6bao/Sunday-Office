// Server-only access to this app's Cloudflare bindings. Each is present ONLY if
// opted into via app.manifest.json (D1 `DB`, R2 `STORAGE`, KV `KV`, and the
// container `CONTAINER`) — so the accessors are optional; guard before use.
// `cloudflare:workers` is the Workers-runtime module that exposes the Worker
// env (bindings) — usable inside any server-side code (server functions,
// server routes). It is NOT bundled; the runtime provides it.
// Import the binding types directly — NOT via the global tsconfig `types` list,
// which would clobber the DOM globals the client/SSR React code relies on.
import type {
  D1Database,
  DurableObjectNamespace,
  KVNamespace,
  R2Bucket,
} from "@cloudflare/workers-types";

type AppEnv = {
  DB?: D1Database;
  STORAGE?: R2Bucket;
  KV?: KVNamespace;
  // The container's Durable Object — present only when "container" is set in
  // the manifest. Reach an instance with env.CONTAINER.getByName(id), then
  // .fetch(). See skills/containers.md.
  CONTAINER?: DurableObjectNamespace;
  HF_ENV?: string;
  APP_SLUG?: string;
  // Office Hours email (set via website_secrets). RESEND_API_KEY gates the
  // whole feature; INQUIRY_TO / INQUIRY_FROM tune delivery.
  RESEND_API_KEY?: string;
  INQUIRY_TO?: string;
  INQUIRY_FROM?: string;
};

export function bindings(): AppEnv {
  // Vercel variant: no Cloudflare Workers runtime, so read the server's
  // environment variables (set in Vercel → Project → Settings → Environment Variables).
  const env = (typeof process !== "undefined" ? process.env : {}) as Record<string, string | undefined>;
  return {
    HF_ENV: env.HF_ENV,
    APP_SLUG: env.APP_SLUG,
    RESEND_API_KEY: env.RESEND_API_KEY,
    INQUIRY_TO: env.INQUIRY_TO,
    INQUIRY_FROM: env.INQUIRY_FROM,
  } as AppEnv;
}
