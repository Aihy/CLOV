const URLS = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/#pricing", priority: "0.9", changefreq: "weekly" },
  { url: "/faq", priority: "0.8", changefreq: "monthly" },
  { url: "/About", priority: "0.7", changefreq: "monthly" },
  { url: "/revisions", priority: "0.6", changefreq: "monthly" },
]

export async function GET(request: Request) {
  const { origin } = new URL(request.url)
  const lastmod = new Date().toISOString()

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${URLS.map(
  ({ url, priority, changefreq }) => `  <url>
    <loc>${origin}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
).join("\n")}
</urlset>`

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
