// Build sonrası çalışır: dist/index.html'i şablon alıp sitedeki her adres için
// (dist/en/index.html, dist/en/about/index.html ...) kendi <head> etiketleriyle bir HTML dosyası yazar.
// Böylece başlık, açıklama, canonical ve hreflang JavaScript çalışmadan, ilk HTML yanıtında gelir.
// Değerler src/seo.js'ten okunur; tarayıcıdaki <Seo> bileşeni de aynı kaynağı kullanır.
import fs from "node:fs";
import path from "node:path";
import { DEFAULT_LANG, LANGS, allPages } from "../src/seo.js";

const DIST = "dist";
const content = Object.fromEntries(LANGS.map((l) => [l, JSON.parse(fs.readFileSync(`src/content/${l}.json`, "utf8"))]));
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const BLOCK = /<!-- seo:start[\s\S]*?seo:end -->/;
const HTML_TAG = /<html[^>]*>/;
const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
if (!BLOCK.test(template) || !HTML_TAG.test(template)) {
  throw new Error("head.mjs: index.html içinde seo:start / seo:end işaretleri bulunamadı.");
}

const head = (seo) => [
  `<title>${esc(seo.title)}</title>`,
  `<meta name="description" content="${esc(seo.description)}" />`,
  `<link rel="canonical" href="${esc(seo.canonical)}" />`,
  ...seo.alternates.map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${esc(a.href)}" data-hreflang="1" />`),
  `<meta property="og:site_name" content="KNZ Legal" />`,
  `<meta property="og:title" content="${esc(seo.title)}" />`,
  `<meta property="og:description" content="${esc(seo.description)}" />`,
  `<meta property="og:url" content="${esc(seo.canonical)}" />`,
  `<meta property="og:type" content="${seo.type}" />`,
  `<meta property="og:image" content="${esc(seo.image)}" />`,
  `<meta property="og:locale" content="${seo.locale}" />`,
  `<meta name="twitter:card" content="summary_large_image" />`,
].join("\n    ");

// Fonksiyon biçiminde replace: metindeki "$" işaretleri özel anlam taşımasın.
const page = (seo) => template
  .replace(HTML_TAG, () => `<html lang="${seo.lang}" dir="${seo.dir}">`)
  .replace(BLOCK, () => head(seo));

const sets = allPages(content);
let count = 0;
for (const set of sets) for (const l of LANGS) {
  const seo = set[l];
  if (!seo) throw new Error(`head.mjs: ${l} dilinde eksik sayfa verisi.`);
  const file = path.join(DIST, seo.path, "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(seo));
  count++;
}
// Kök adres (/) tarayıcı diline göre yönlenir; varsayılan dilin ana sayfa etiketlerini taşır.
fs.writeFileSync(path.join(DIST, "index.html"), page(sets[0][DEFAULT_LANG]));
console.log("head:", count, "sayfa için statik <head> yazıldı");
