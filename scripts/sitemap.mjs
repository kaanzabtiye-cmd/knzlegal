// public/sitemap.xml üretir. Adres listesi src/seo.js içindeki allPages'ten gelir (head.mjs ile aynı kaynak).
import fs from "node:fs";
import { LANGS, allPages } from "../src/seo.js";

const content = Object.fromEntries(LANGS.map((l) => [l, JSON.parse(fs.readFileSync(`src/content/${l}.json`, "utf8"))]));
const esc = (s) => s.replace(/&/g, "&amp;");
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
let count = 0;
for (const set of allPages(content)) for (const l of LANGS) {
  const seo = set[l];
  xml += `  <url>\n    <loc>${esc(seo.canonical)}</loc>\n`;
  if (seo.lastmod) xml += `    <lastmod>${seo.lastmod}</lastmod>\n`;
  for (const a of seo.alternates) xml += `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${esc(a.href)}"/>\n`;
  xml += "  </url>\n";
  count++;
}
xml += "</urlset>\n";
fs.writeFileSync("public/sitemap.xml", xml);
console.log("sitemap:", count, "urls");
