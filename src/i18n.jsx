import { createContext, useContext, useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import tr from "./content/tr.json";
import en from "./content/en.json";
import fr from "./content/fr.json";
import ar from "./content/ar.json";
import ru from "./content/ru.json";
import { DEFAULT_LANG, LANGS, ROUTES, SITE_URL, pageSeo, routePath } from "./seo.js";

export const CONTENT = { tr, en, fr, ar, ru };
export { LANGS, DEFAULT_LANG, SITE_URL, ROUTES, routePath };

const I18nContext = createContext(null);

export function detectLang() {
  try {
    const stored = localStorage.getItem("knz-lang");
    if (LANGS.includes(stored)) return stored;
  } catch (e) {}
  const nav = (navigator.language || DEFAULT_LANG).slice(0, 2).toLowerCase();
  return LANGS.includes(nav) ? nav : DEFAULT_LANG;
}

export function I18nProvider({ children }) {
  const { lang: rawLang } = useParams();
  const lang = LANGS.includes(rawLang) ? rawLang : DEFAULT_LANG;
  const t = CONTENT[lang];
  const location = useLocation();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    try { localStorage.setItem("knz-lang", lang); } catch (e) {}
  }, [lang, t.dir]);

  const value = useMemo(() => {
    // Aynı sayfanın başka dildeki adresi. Uzmanlık alanı id'leri dile göre değiştiği için indeksle eşlenir.
    // Dil seçici bunu gerçek bağlantı (<a href>) olarak kullanır; arama motorları diller arasında buradan geçer.
    const langHref = (to) => {
      const parts = location.pathname.split("/").filter(Boolean); // [lang, route?, param?]
      const route = parts[1] || "home";
      let param = parts[2] || null;
      if (route === "practice" && param) {
        const i = t.practice.items.findIndex((x) => x.id === param);
        param = i >= 0 ? CONTENT[to].practice.items[i].id : null;
      }
      return routePath(to, route, param) + location.hash;
    };
    const href = (route, param) => routePath(lang, route, param);
    const fmtDate = (iso) => {
      const [y, m, d] = iso.split("-").map(Number);
      const dt = new Date(Date.UTC(y, (m || 1) - 1, d || 1));
      const loc = { tr: "tr-TR", en: "en-GB", fr: "fr-FR", ar: "ar-EG", ru: "ru-RU" }[lang];
      const opts = d ? { year: "numeric", month: "long", day: "numeric" } : { year: "numeric", month: "long" };
      try { return new Intl.DateTimeFormat(loc, { ...opts, timeZone: "UTC" }).format(dt); } catch (e) { return iso; }
    };
    return { lang, t, dir: t.dir, langHref, href, fmtDate };
  }, [lang, t, location.pathname, location.hash]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);

const setMeta = (attr, key, content) => {
  let m = document.querySelector(`meta[${attr}="${key}"]`);
  if (!m) { m = document.createElement("meta"); m.setAttribute(attr, key); document.head.append(m); }
  m.setAttribute("content", content);
};

/**
 * Sayfa başlığı, açıklama, canonical ve hreflang etiketleri.
 * Değerler src/seo.js içindeki pageSeo'dan gelir; build sırasında scripts/head.mjs aynı değerleri
 * her adresin HTML dosyasına da yazar. Burası sayfa içi gezinmede etiketleri günceller.
 */
export function Seo({ route = "home", param = null }) {
  const { lang } = useI18n();
  useEffect(() => {
    const seo = pageSeo(CONTENT, lang, route, param) || pageSeo(CONTENT, lang, "home");
    document.title = seo.title;
    setMeta("name", "description", seo.description);
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:url", seo.canonical);
    setMeta("property", "og:type", seo.type);
    setMeta("property", "og:image", seo.image);
    setMeta("property", "og:locale", seo.locale);
    let c = document.querySelector('link[rel="canonical"]');
    if (!c) { c = document.createElement("link"); c.rel = "canonical"; document.head.append(c); }
    c.href = seo.canonical;
    document.querySelectorAll("link[data-hreflang]").forEach((n) => n.remove());
    for (const a of seo.alternates) {
      const l = document.createElement("link");
      l.rel = "alternate"; l.hreflang = a.hreflang; l.href = a.href; l.dataset.hreflang = "1";
      document.head.append(l);
    }
    document.querySelectorAll("script[data-jsonld]").forEach((n) => n.remove());
    for (const data of seo.jsonLd) {
      const sc = document.createElement("script"); sc.type = "application/ld+json"; sc.dataset.jsonld = "1"; sc.textContent = JSON.stringify(data); document.head.append(sc);
    }
  }, [lang, route, param]);
  return null;
}
