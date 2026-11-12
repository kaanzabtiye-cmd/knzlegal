// Sayfa bazlı SEO verisinin tek kaynağı. React'e ve tarayıcıya bağımlı değildir:
// hem tarayıcıdaki <Seo> bileşeni (src/i18n.jsx) hem de build betikleri
// (scripts/sitemap.mjs, scripts/head.mjs) aynı fonksiyonları kullanır.
import { posts } from "./content/posts.js";
import { IMAGES } from "./content/images.js";

// knzlegal.com adresi www'ye yönlenir; canonical, hreflang ve sitemap doğrudan son adresi göstermelidir.
export const SITE_URL = "https://www.knzlegal.com";
export const LANGS = ["tr", "en", "fr", "ar", "ru"];
export const DEFAULT_LANG = "tr";

// Dil bağımsız sayfa yolları: /tr/hakkimizda yerine tek biçim /tr/about kullanılır (sitemap ve hreflang sadeliği için).
export const ROUTES = ["home", "about", "practice", "blog", "news", "career", "contact"];
export const routePath = (lang, route, param) =>
  `/${lang}` + (route === "home" ? "" : `/${route}`) + (param ? `/${param}` : "");

const OG_LOCALE = { tr: "tr_TR", en: "en_GB", fr: "fr_FR", ar: "ar_AR", ru: "ru_RU" };

/**
 * Açıklamayı arama sonucunda görünen uzunluğa indirir: tam cümleler sığdığı kadar alınır;
 * ilk cümle biraz uzunsa bütün bırakılır, çok uzunsa kelime sınırında kesilir.
 */
export function clip(text, max = 160, soft = 200) {
  const s = String(text || "").replace(/\s+/g, " ").trim();
  if (s.length <= max) return s;
  // Cümle sonu: noktalama + boşluk, ardından küçük harf ya da rakam gelmiyorsa ("No. 7596" bölünmez).
  const sentences = s.split(/(?<=[.!?؟])\s+(?![\p{Ll}\p{Nd}])/u);
  let out = "";
  for (const part of sentences) {
    const next = out ? `${out} ${part}` : part;
    if (next.length > max) break;
    out = next;
  }
  if (out) return out;
  if (sentences[0].length <= soft) return sentences[0];
  const cut = s.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:–—-]+$/, "") + "…";
}

/**
 * Bir sayfanın başlık, açıklama, canonical ve hreflang verisi.
 * content: { tr, en, fr, ar, ru } JSON içerikleri. Sayfa yoksa null döner.
 */
export function pageSeo(content, lang, route = "home", param = null) {
  const t = content[lang];
  if (!t || !ROUTES.includes(route)) return null;
  const home = clip(t.home.p);
  let title = null;
  let description = home;
  let paths = Object.fromEntries(LANGS.map((l) => [l, routePath(l, route, param)]));
  let image = "/og.jpg";
  let type = "website";
  let jsonLd = null;

  if (route === "about") { title = t.about.title; description = t.about.heroSub; }
  else if (route === "practice" && !param) { title = t.practice.title; description = t.practice.heroPractice; }
  else if (route === "practice") {
    // Uzmanlık alanı id'leri dile göre değişir; diller arasında sırayla eşlenir.
    const i = t.practice.items.findIndex((x) => x.id === param);
    if (i < 0) return null;
    title = t.practice.items[i].title;
    description = t.practice.items[i].intro;
    paths = Object.fromEntries(LANGS.map((l) => [l, routePath(l, "practice", content[l].practice.items[i].id)]));
  }
  else if (route === "blog" && !param) { title = t.blog.title; description = t.blog.description; }
  else if (route === "blog") {
    const post = posts.find((p) => p.slug === param);
    const meta = t.blog.posts[param];
    if (!post || !meta) return null;
    title = meta.title;
    description = meta.summary;
    image = IMAGES.post(param);
    type = "article";
    jsonLd = {
      "@context": "https://schema.org", "@type": "Article", headline: meta.title, description: meta.summary,
      datePublished: post.date, inLanguage: post.lang, image: SITE_URL + image,
      author: { "@type": "Person", name: post.author || "KNZ Legal" },
      publisher: { "@type": "Organization", name: "KNZ Legal", logo: { "@type": "ImageObject", url: SITE_URL + "/logo.png" } },
    };
  }
  else if (route === "news") { title = t.news.title; description = t.news.sub; }
  else if (route === "career") { title = t.career.subtitle; description = t.career.heroSub; }
  else if (route === "contact") { title = t.contact.title; description = t.contact.heroSub; }
  else if (param) return null;

  const alternates = LANGS.map((l) => ({ hreflang: l, href: SITE_URL + paths[l] }));
  alternates.push({ hreflang: "x-default", href: SITE_URL + paths[DEFAULT_LANG] });

  return {
    lang,
    dir: t.dir || "ltr",
    path: paths[lang],
    title: title ? `${title} | KNZ Legal` : `KNZ Legal | ${t.brand.tag}`,
    description: clip(description || home),
    canonical: SITE_URL + paths[lang],
    alternates,
    image: SITE_URL + image,
    type,
    locale: OG_LOCALE[lang],
    jsonLd,
  };
}

/** Sitedeki bütün sayfalar: her eleman aynı sayfanın beş dildeki SEO verisidir ({ tr: {...}, en: {...}, ... }). */
export function allPages(content) {
  const sets = [];
  const add = (route, paramOf = () => null) =>
    sets.push(Object.fromEntries(LANGS.map((l) => [l, pageSeo(content, l, route, paramOf(l))])));
  ROUTES.forEach((route) => add(route));
  content[DEFAULT_LANG].practice.items.forEach((_, i) => add("practice", (l) => content[l].practice.items[i].id));
  posts.forEach((p) => add("blog", () => p.slug));
  return sets;
}
