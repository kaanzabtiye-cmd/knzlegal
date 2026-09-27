import { createContext, useContext, useEffect, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import tr from "./content/tr.json";
import en from "./content/en.json";
import fr from "./content/fr.json";
import ar from "./content/ar.json";
import ru from "./content/ru.json";

export const CONTENT = { tr, en, fr, ar, ru };
export const LANGS = ["tr", "en", "fr", "ar", "ru"];
export const DEFAULT_LANG = "tr";
export const SITE_URL = "https://knzlegal.com";

// Dil bağımsız sayfa yolları: /tr/hakkimizda yerine tek biçim /tr/about kullanılır (sitemap ve hreflang sadeliği için).
export const ROUTES = ["home", "about", "practice", "blog", "news", "career", "contact"];
export const routePath = (lang, route, param) =>
  `/${lang}` + (route === "home" ? "" : `/${route}`) + (param ? `/${param}` : "");

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
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    try { localStorage.setItem("knz-lang", lang); } catch (e) {}
  }, [lang, t.dir]);

  const value = useMemo(() => {
    // Aynı sayfayı başka dilde aç. Uzmanlık alanı id'leri dile göre değiştiği için indeksle eşlenir.
    const switchLang = (to) => {
      const parts = location.pathname.split("/").filter(Boolean); // [lang, route?, param?]
      const route = parts[1] || "home";
      let param = parts[2] || null;
      if (route === "practice" && param) {
        const i = t.practice.items.findIndex((x) => x.id === param);
        param = i >= 0 ? CONTENT[to].practice.items[i].id : null;
      }
      navigate(routePath(to, route, param) + location.hash);
    };
    const href = (route, param) => routePath(lang, route, param);
    const fmtDate = (iso) => {
      const [y, m, d] = iso.split("-").map(Number);
      const dt = new Date(Date.UTC(y, (m || 1) - 1, d || 1));
      const loc = { tr: "tr-TR", en: "en-GB", fr: "fr-FR", ar: "ar-EG", ru: "ru-RU" }[lang];
      const opts = d ? { year: "numeric", month: "long", day: "numeric" } : { year: "numeric", month: "long" };
      try { return new Intl.DateTimeFormat(loc, { ...opts, timeZone: "UTC" }).format(dt); } catch (e) { return iso; }
    };
    return { lang, t, dir: t.dir, switchLang, href, fmtDate };
  }, [lang, t, navigate, location.pathname, location.hash]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);

/** Sayfa başlığı, açıklama ve hreflang etiketleri. */
export function Seo({ title, description, route = "home", param = null, alternates }) {
  const { lang, t } = useI18n();
  useEffect(() => {
    document.title = title ? `${title} | KNZ Legal` : `KNZ Legal | ${t.brand.tag}`;
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.append(m); }
    m.content = description || t.home.p.slice(0, 160);
    document.querySelectorAll('link[data-hreflang]').forEach((n) => n.remove());
    const add = (hreflang, href) => {
      const l = document.createElement("link");
      l.rel = "alternate"; l.hreflang = hreflang; l.href = SITE_URL + href; l.dataset.hreflang = "1";
      document.head.append(l);
    };
    LANGS.forEach((l) => add(l, alternates ? alternates[l] : routePath(l, route, param)));
    add("x-default", alternates ? alternates[DEFAULT_LANG] : routePath(DEFAULT_LANG, route, param));
    let c = document.querySelector('link[rel="canonical"]');
    if (!c) { c = document.createElement("link"); c.rel = "canonical"; document.head.append(c); }
    c.href = SITE_URL + (alternates ? alternates[lang] : routePath(lang, route, param));
  }, [lang, title, description, route, param, alternates, t]);
  return null;
}
