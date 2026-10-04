import { createFileRoute } from '@tanstack/react-router'
import { SEO, SITE } from '../sunday/seo'

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split('T')[0]
        const urls = Object.keys(SEO).map((p) => {
          const pri = p === '/' ? '1.0' : p.startsWith('/campaigns/') ? '0.6' : '0.8'
          return [
            '  <url>',
            `    <loc>${SITE}${p === '/' ? '/' : p}</loc>`,
            `    <lastmod>${today}</lastmod>`,
            '    <changefreq>monthly</changefreq>',
            `    <priority>${pri}</priority>`,
            '  </url>',
          ].join('\n')
        })
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...urls,
          '</urlset>',
        ].join('\n')
        return new Response(xml, {
          headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
          },
        })
      },
    },
  },
})
