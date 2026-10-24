import fs from "node:fs";
const SITE = "https://knzlegal.com";
const langs = ["tr", "en", "fr", "ar", "ru"];
const content = Object.fromEntries(langs.map(l => [l, JSON.parse(fs.readFileSync(`src/content/${l}.json`, "utf8"))]));
const { posts } = await import("../src/content/posts.js");
const urls = [];
const add = (paths) => { urls.push(paths); };
for (const r of ["", "/about", "/practice", "/blog", "/news", "/career", "/contact"]) add(Object.fromEntries(langs.map(l => [l, `/${l}${r}`])));
content.tr.practice.items.forEach((_, i) => add(Object.fromEntries(langs.map(l => [l, `/${l}/practice/${content[l].practice.items[i].id}`]))));
posts.forEach(p => add(Object.fromEntries(langs.map(l => [l, `/${l}/blog/${p.slug}`]))));
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
for (const set of urls) for (const l of langs) {
  xml += `  <url>\n    <loc>${SITE}${set[l]}</loc>\n`;
  for (const l2 of langs) xml += `    <xhtml:link rel="alternate" hreflang="${l2}" href="${SITE}${set[l2]}"/>\n`;
  xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${set.tr}"/>\n  </url>\n`;
}
xml += "</urlset>\n";
fs.writeFileSync("public/sitemap.xml", xml);
console.log("sitemap:", urls.length * langs.length, "urls");
