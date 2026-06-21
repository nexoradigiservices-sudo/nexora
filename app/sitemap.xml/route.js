const pages = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/digital-marketing',
  '/blog',
  '/contact'
];

export async function GET() {
  const base = 'https://nexora.digital';
  const urls = pages.map((p) => `  <url><loc>${base}${p}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
