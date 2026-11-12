// Build sonrası çalışır: dist/index.html'i şablon alıp sitedeki her adres için
// (dist/en/index.html, dist/en/about/index.html ...) hazır bir HTML dosyası yazar.
//   1. <head>: o sayfanın başlığı, açıklaması, canonical, hreflang etiketleri ve yapısal verisi (kaynak: src/seo.js)
//   2. <body>: sayfanın içeriği, React ile build sırasında HTML'e çevrilmiş olarak (kaynak: src/entry-server.jsx)
// Böylece arama motorları ve JavaScript çalıştırmayan botlar metni ve bağlantıları ilk yanıtta görür.
// Tarayıcıda JavaScript yüklenince uygulama aynı içeriği kendi çizer; site eskisi gibi çalışır.
// İçerik <div data-prerendered> içine yazılır: giriş animasyonları uygulama devralana kadar bekler (src/styles.css).
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { DEFAULT_LANG, LANGS, allPages } from "../src/seo.js";

const DIST = "dist";
const SSR_ENTRY = path.resolve(".ssr/entry-server.js");
const content = Object.fromEntries(LANGS.map((l) => [l, JSON.parse(fs.readFileSync(`src/content/${l}.json`, "utf8"))]));
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const BLOCK = /<!-- seo:start[\s\S]*?seo:end -->/;
const HTML_TAG = /<html[^>]*>/;
const APP = "<!--app-->";
const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
if (!BLOCK.test(template) || !HTML_TAG.test(template) || !template.includes(APP)) {
  throw new Error("prerender: index.html içinde seo:start / seo:end ya da <!--app--> işareti bulunamadı.");
}
const { render } = await import(pathToFileURL(SSR_ENTRY).href);

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
  // Yapısal veri (schema.org). "<" kaçırılır ki metin içindeki bir etiket betiği kapatamasın.
  ...seo.jsonLd.map((d) => `<script type="application/ld+json" data-jsonld="1">${JSON.stringify(d).replace(/</g, "\\u003c")}</script>`),
].join("\n    ");

// Fonksiyon biçiminde replace: metindeki "$" işaretleri özel anlam taşımasın.
const page = (seo, body = "") => template
  .replace(HTML_TAG, () => `<html lang="${seo.lang}" dir="${seo.dir}">`)
  .replace(BLOCK, () => head(seo))
  .replace(APP, () => (body ? `<div data-prerendered>${body}</div>` : ""));

const sets = allPages(content);
let count = 0, bytes = 0;
for (const set of sets) for (const l of LANGS) {
  const seo = set[l];
  if (!seo) throw new Error(`prerender: ${l} dilinde eksik sayfa verisi.`);
  const body = render(seo.path);
  if (!body.includes("<h1")) throw new Error(`prerender: ${seo.path} için içerik üretilemedi (h1 yok).`);
  const file = path.join(DIST, seo.path, "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(seo, body));
  count++; bytes += body.length;
}
// Kök adres (/) tarayıcı diline göre yönlenir ve bilinmeyen adreslerin de yedeğidir: gövdesi boş kalır.
fs.writeFileSync(path.join(DIST, "index.html"), page(sets[0][DEFAULT_LANG]));
// 404.html: olmayan adreslerde Vercel bu dosyayı HTTP 404 ile döndürür. Gövde boştur; uygulama adresin diline
// (ya da tarayıcı diline) göre 404 sayfasını çizer. Dizine alınmaz, canonical ve hreflang taşımaz.
const notFoundHead = [
  "<title>Sayfa bulunamadı | KNZ Legal</title>",
  '<meta name="robots" content="noindex" />',
].join("\n    ");
const fallback = LANGS.map((l) => `<a href="/${l}">${content[l].name || l.toUpperCase()}</a>`).join(" · ");
fs.writeFileSync(path.join(DIST, "404.html"), template
  .replace(HTML_TAG, () => `<html lang="${DEFAULT_LANG}" dir="ltr">`)
  .replace(BLOCK, () => notFoundHead)
  .replace(APP, () => `<noscript><p style="font:16px/1.6 system-ui,sans-serif;max-width:40rem;margin:20vh auto;padding:0 24px">404 · KNZ Legal<br />${fallback}</p></noscript>`));
fs.rmSync(".ssr", { recursive: true, force: true });
console.log(`prerender: ${count} sayfa yazıldı (ortalama ${Math.round(bytes / count / 1024)} kB içerik)`);
