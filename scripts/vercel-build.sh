#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

# Vercel Build Output API v3 — site served by a Node lambda running the SSR bundle.
rm -rf .vercel/output dist server-handler 2>/dev/null || true

echo ">> build : tsc + vite (client + SSR server bundle)"
bun run build

echo ">> assemble .vercel/output"
mkdir -p .vercel/output/static .vercel/output/functions/index.func

# static assets (public/ + hashed client assets)
cp -r dist/client/. .vercel/output/static/

# SSR handler bundle -> full dist/server tree (entry + hashed chunks)
cp -r dist/server/. .vercel/output/functions/index.func/

# launcher: adapt Vercel req/res -> fetch handler
cat > .vercel/output/functions/index.func/index.js <<'LAUNCHER'
import serverEntry from './server.js'
const app = serverEntry?.default ?? serverEntry
export default async function vercelHandler(req, res) {
  try {
    const host = req.headers.host || 'sunday-office.vercel.app'
    const url = new URL(req.url || '/', `https://${host}`)
    const headers = new Headers()
    for (const k of Object.keys(req.headers)) {
      const v = req.headers[k]
      if (v !== undefined) headers.set(k, Array.isArray(v) ? v.join(',') : String(v))
    }
    const body = ['GET', 'HEAD'].includes(req.method)
      ? undefined
      : await new Promise((resolve, reject) => {
          const chunks = []
          req.on('data', (c) => chunks.push(c))
          req.on('end', () => resolve(Buffer.concat(chunks)))
          req.on('error', reject)
        })
    const request = new Request(url, { method: req.method, headers, body })
    const response = await app.fetch(request, {}, {})
    res.statusCode = response.status
    for (const [k, v] of response.headers) res.setHeader(k, v)
    res.end(Buffer.from(await response.arrayBuffer()))
  } catch (err) {
    res.statusCode = 500
    res.setHeader('content-type', 'text/plain; charset=utf-8')
    res.end('Internal error: ' + (err?.message || 'unknown'))
  }
}
LAUNCHER

cat > .vercel/output/functions/index.func/package.json <<'EOF'
{ "type": "module" }
EOF

# required by Build Output API v3 — describes the Node lambda
cat > .vercel/output/functions/index.func/.vc-config.json <<'EOF'
{
  "runtime": "nodejs22.x",
  "handler": "index.js",
  "launcherType": "Nodejs"
}
EOF

# routing: everything to the lambda
cat > .vercel/output/config.json <<'EOF'
{
  "version": 3,
  "routes": [{ "src": "/.*", "dest": "/index" }]
}
EOF

echo ">> done: .vercel/output ready"