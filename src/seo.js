// Sayfa bazlı SEO verisinin tek kaynağı. React'e ve tarayıcıya bağımlı değildir:
// hem tarayıcıdaki <Seo> bileşeni (src/i18n.jsx) hem de build betikleri
// (scripts/sitemap.mjs, scripts/head.mjs) aynı fonksiyonları kullanır.
import { posts } from "./content/posts.js";
import { IMAGES } from "./content/images.js";
import { ADDRESS, OFFICE_EMAIL, PHONES, SOCIAL } from "./content/office.js";

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

const ORG_ID = SITE_URL + "/#organization";
const DAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

/** Büronun kendisi (schema.org LegalService). Her sayfada yer alır; değerler sitedeki içerikten okunur. */
function orgJsonLd(content, lang) {
  const t = content[lang];
  const base = content[DEFAULT_LANG];
  // Çalışma saatleri İletişim sayfasındaki listeden: yalnızca "09:00 – 18:00" biçimindeki günler alınır.
  const hours = (base.contact.hours || []).map((h, i) => {
    const m = /^(\d{2}:\d{2})\s*[–-]\s*(\d{2}:\d{2})$/.exec(h);
    return m && DAY_NAMES[i] ? { "@type": "OpeningHoursSpecification", dayOfWeek: DAY_NAMES[i], opens: m[1], closes: m[2] } : null;
  }).filter(Boolean);
  const founded = base.about.timeline?.[0]?.[0];
  return {
    "@context": "https://schema.org", "@type": "LegalService", "@id": ORG_ID,
    name: "KNZ Legal", url: SITE_URL + routePath(lang, "home"), logo: SITE_URL + "/logo.png", image: SITE_URL + "/og.jpg",
    description: clip(t.home.p, 300, 300),
    telephone: PHONES[0].tel, email: OFFICE_EMAIL,
    address: { "@type": "PostalAddress", ...ADDRESS },
    ...(/^\d{4}$/.test(founded || "") ? { foundingDate: founded } : {}),
    ...(hours.length ? { openingHoursSpecification: hours } : {}),
    areaServed: ["TR", "GB"], availableLanguage: LANGS,
    knowsAbout: t.practice.items.map((x) => x.title),
    founder: personJsonLd(t, lang),
    sameAs: Object.values(SOCIAL),
  };
}

/** Kurucu avukat (schema.org Person). Aynı @id büronun ve blog yazılarının yazar alanında yeniden kullanılır. */
const personJsonLd = (t, lang) => ({
  "@type": "Person", "@id": SITE_URL + routePath(lang, "about") + "#kaan",
  name: t.people.kaan.name, jobTitle: t.people.kaan.role, url: SITE_URL + routePath(lang, "about") + "#kaan",
  worksFor: { "@id": ORG_ID },
});

const breadcrumbs = (trail) => ({
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: trail.map(([name, href], i) => ({ "@type": "ListItem", position: i + 1, name, item: SITE_URL + href })),
});

// Sayfada görünen soru-cevapların aynısı ([soru, cevap] çiftleri).
const faqPage = (pairs) => ({
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: pairs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
});

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
  let lastmod = null;
  const extra = []; // sayfaya özgü yapısal veri
  const homeCrumb = [t.nav.home, routePath(lang, "home")];

  if (route === "about") { title = t.about.title; description = t.about.heroSub; extra.push(breadcrumbs([homeCrumb, [title, paths[lang]]])); }
  else if (route === "practice" && !param) { title = t.practice.title; description = t.practice.heroPractice; extra.push(breadcrumbs([homeCrumb, [title, paths[lang]]])); }
  else if (route === "practice") {
    // Uzmanlık alanı id'leri dile göre değişir; diller arasında sırayla eşlenir.
    const i = t.practice.items.findIndex((x) => x.id === param);
    if (i < 0) return null;
    title = t.practice.items[i].title;
    description = t.practice.items[i].intro;
    paths = Object.fromEntries(LANGS.map((l) => [l, routePath(l, "practice", content[l].practice.items[i].id)]));
    extra.push(breadcrumbs([homeCrumb, [t.practice.title, routePath(lang, "practice")], [title, paths[lang]]]));
    if (t.practice.items[i].faq?.length) extra.push(faqPage(t.practice.items[i].faq));
  }
  else if (route === "blog" && !param) { title = t.blog.title; description = t.blog.description; extra.push(breadcrumbs([homeCrumb, [title, paths[lang]]])); }
  else if (route === "blog") {
    const post = posts.find((p) => p.slug === param);
    const meta = t.blog.posts[param];
    if (!post || !meta) return null;
    title = meta.title;
    description = meta.summary;
    image = IMAGES.post(param);
    type = "article";
    lastmod = post.date;
    const byKaan = !post.author || post.author === t.people.kaan.name;
    extra.push({
      "@context": "https://schema.org", "@type": "Article", headline: meta.title, description: meta.summary,
      datePublished: post.date, dateModified: post.date, inLanguage: post.lang, image: SITE_URL + image,
      url: SITE_URL + paths[lang], mainEntityOfPage: SITE_URL + paths[lang],
      author: byKaan ? personJsonLd(t, lang) : { "@type": "Person", name: post.author },
      publisher: { "@id": ORG_ID },
      articleSection: post.category,
      wordCount: String(post.body).split(/\s+/).filter(Boolean).length,
      isPartOf: { "@type": "Blog", name: t.blog.title, url: SITE_URL + routePath(lang, "blog") },
    });
    extra.push(breadcrumbs([homeCrumb, [t.blog.title, routePath(lang, "blog")], [meta.title, paths[lang]]]));
  }
  else if (route === "news") { title = t.news.title; description = t.news.sub; extra.push(breadcrumbs([homeCrumb, [title, paths[lang]]])); }
  else if (route === "career") { title = t.career.subtitle; description = t.career.heroSub; extra.push(breadcrumbs([homeCrumb, [title, paths[lang]]])); }
  else if (route === "contact") {
    title = t.contact.title; description = t.contact.heroSub;
    extra.push(breadcrumbs([homeCrumb, [title, paths[lang]]]));
    if (t.contact.faq?.length) extra.push(faqPage(t.contact.faq));
  }
  else if (param) return null;
  else extra.push({ "@context": "https://schema.org", "@type": "WebSite", name: "KNZ Legal", url: SITE_URL + paths[lang], inLanguage: lang, publisher: { "@id": ORG_ID } });

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
    lastmod,
    jsonLd: [orgJsonLd(content, lang), ...extra],
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
