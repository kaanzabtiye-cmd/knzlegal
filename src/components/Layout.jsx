import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useOutlet } from "react-router-dom";
import { LANGS, ROUTES, useI18n } from "../i18n.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { GlowCursor } from "./Motion.jsx";

export const OFFICE_EMAIL = "k.zabtiyeogullari@knzlegal.com";
export const PHONES = [
  { label: "+90 537 995 26 76", tel: "+905379952676" },
  { label: "+44 7768 107053", tel: "+447768107053" },
];
export const SOCIAL = {
  instagram: "https://www.instagram.com/knz_consulting",
  linkedin: "https://www.linkedin.com/company/knz-legal/",
};
const LANG_NAMES = { tr: "Türkçe", en: "English", fr: "Français", ar: "العربية", ru: "Русский" };

export async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; }
  catch (e) {
    const ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.append(ta); ta.select();
    try { document.execCommand("copy"); } catch (err) {}
    ta.remove(); return true;
  }
}

export function Logo({ light = false, size = 56, className = "" }) {
  return <img className={className} src={light ? "/logo-light.png" : "/logo.png"} alt="KNZ Legal" width={size} height={size} />;
}

function Header() {
  const { lang, t, href, switchLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onHero = location.pathname.split("/").filter(Boolean).length <= 1; // ana sayfa: şeffaf başlık
  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.classList.toggle("nav-open", open); return () => document.body.classList.remove("nav-open"); }, [open]);
  const dark = onHero && !scrolled && !open;
  return (
    <header className={"header" + (dark ? " on-dark" : "") + (scrolled ? " scrolled" : "") + (open ? " open" : "")}>
      <div className="wrap header-row">
        <Link className="brand" to={href("home")} aria-label="KNZ Legal">
          <Logo light={dark} size={56} />
        </Link>
        <nav className="nav" id="nav" aria-label="Main">
          {ROUTES.filter((r) => r !== "home").map((r) => (
            <NavLink key={r} to={href(r)} className={({ isActive }) => (isActive ? "active" : undefined)}>
              {t.nav[r]}
            </NavLink>
          ))}
        </nav>
        <div className="header-tools">
          <div className="lang" role="group" aria-label="Language">
            {LANGS.map((l) => (
              <button key={l} type="button" lang={l} title={LANG_NAMES[l]} aria-current={l === lang ? "true" : "false"} onClick={() => switchLang(l)}>{l.toUpperCase()}</button>
            ))}
          </div>
          <Link className="btn btn-gold btn-sm header-cta" to={href("contact")}>{t.home.cta}</Link>
          <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      <div className={"mobile-nav" + (open ? " show" : "")} id="mobile-nav">
        <div className="wrap">
          {ROUTES.map((r) => (
            <NavLink key={r} to={href(r)} end={r === "home"} className={({ isActive }) => (isActive ? "active" : undefined)}>{t.nav[r]}</NavLink>
          ))}
          <div className="mobile-langs">
            {LANGS.map((l) => <button key={l} type="button" lang={l} aria-current={l === lang ? "true" : "false"} onClick={() => switchLang(l)}>{LANG_NAMES[l]}</button>)}
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const { t, href } = useI18n();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo light size={72} />
            <strong>{t.footer.firm}</strong>
            <p>{t.footer.address}</p>
          </div>
          <div className="footer-col">
            <h4>{t.nav.practice}</h4>
            {t.practice.items.map((it) => <Link key={it.id} to={href("practice", it.id)}>{it.title}</Link>)}
          </div>
          <div className="footer-col">
            <h4>KNZ Legal</h4>
            {ROUTES.filter((r) => r !== "home" && r !== "practice").map((r) => <Link key={r} to={href(r)}>{t.nav[r]}</Link>)}
          </div>
          <div className="footer-col">
            <h4>{t.contact.title}</h4>
            <a href={"mailto:" + OFFICE_EMAIL}>{OFFICE_EMAIL}</a>
            {PHONES.map((p) => <a key={p.tel} href={"tel:" + p.tel}>{p.label}</a>)}
            <div className="social">
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1zM7.1 20.4H3.6V9h3.5v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z" /></svg></a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9z" /></svg></a>
            </div>
          </div>
        </div>
        <p className="disclaimer">{t.footer.disclaimer}</p>
        <div className="footer-bottom"><span>{t.footer.copyright}</span><span className="footer-tag">{t.brand.tag}</span></div>
      </div>
    </footer>
  );
}

function CookieBar() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);
  useEffect(() => { try { setShow(!localStorage.getItem("knz-cookie")); } catch (e) { setShow(true); } }, []);
  const choose = (v) => { try { localStorage.setItem("knz-cookie", v); } catch (e) {} setShow(false); };
  if (!show) return null;
  return (
    <div className="cookie" role="dialog" aria-live="polite">
      <h4>{t.footer.cookieTitle}</h4>
      <p>{t.footer.cookieText}</p>
      <div className="cookie-actions">
        <button className="btn btn-ink btn-sm" type="button" onClick={() => choose("accept")}>{t.footer.accept}</button>
        <button className="btn btn-outline btn-sm" type="button" onClick={() => choose("decline")}>{t.footer.decline}</button>
      </div>
    </div>
  );
}

/** Kaydırmada görünür olunca .reveal → .in (CSS geçişleri) */
function useReveal(dep) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal:not(.in)"));
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    els.forEach((e) => io.observe(e));
    const safety = setTimeout(() => els.forEach((e) => e.classList.add("in")), 2500);
    return () => { io.disconnect(); clearTimeout(safety); };
  }, [dep]);
}

export default function Layout() {
  const location = useLocation();
  const outlet = useOutlet();
  const { t } = useI18n();
  useEffect(() => { if (!location.hash) window.scrollTo({ top: 0 }); }, [location.pathname]);
  useReveal(location.pathname + location.search);
  return (
    <>
      <a className="skip" href="#main">{t?.nav?.home || "Main"}</a>
      <GlowCursor />
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main className="page" id="main" key={location.pathname} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .45, ease: [0.2, 0.7, 0.2, 1] }}>
          {outlet}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <CookieBar />
    </>
  );
}
