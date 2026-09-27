import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { LANGS, ROUTES, useI18n } from "../i18n.jsx";

export const OFFICE_EMAIL = "k.zabtiyeogullari@knzlegal.com";
export const PHONES = [
  { label: "+90 537 995 26 76", tel: "+905379952676" },
  { label: "+44 7768 107053", tel: "+447768107053" },
];
export const SOCIAL = {
  instagram: "https://www.instagram.com/knz_consulting",
  linkedin: "https://www.linkedin.com/company/knz-legal/",
};

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

function Header() {
  const { lang, t, href, switchLang } = useI18n();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); }, [location.pathname]);
  return (
    <header className="header">
      <div className="wrap">
        <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="nav" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <svg width="26" height="18" viewBox="0 0 26 18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M0 1h26M0 9h26M0 17h26" /></svg>
        </button>
        <Link className="brand" to={href("home")} aria-label="KNZ Legal"><img src="/logo.png" alt="KNZ Legal" width="68" height="68" /></Link>
        <div className="lang" role="group" aria-label="Language">
          {LANGS.map((l) => (
            <button key={l} type="button" lang={l} aria-current={l === lang ? "true" : "false"} onClick={() => switchLang(l)}>{l.toUpperCase()}</button>
          ))}
        </div>
        <nav className={"nav" + (open ? " open" : "")} id="nav">
          {ROUTES.map((r) => (
            <NavLink key={r} to={href(r)} end={r === "home"} className={({ isActive }) => (isActive ? "active" : undefined)}>
              {t.nav[r]}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="footer">
      <div className="wrap">
        <strong>{t.footer.firm}</strong>
        <p>{t.footer.address}</p>
        <div className="phones">{PHONES.map((p) => <a key={p.tel} href={"tel:" + p.tel}>{p.label}</a>)}</div>
        <div className="social">
          <a href={SOCIAL.instagram} target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9z" /></svg></a>
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1zM7.1 20.4H3.6V9h3.5v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z" /></svg></a>
        </div>
        <p className="disclaimer">{t.footer.disclaimer}</p>
        <div className="footer-bottom"><span>{t.footer.copyright}</span></div>
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
    <div className="cookie">
      <h4>{t.footer.cookieTitle}</h4>
      <p>{t.footer.cookieText}</p>
      <div className="cookie-actions">
        <button className="btn btn-ink" type="button" onClick={() => choose("accept")}>{t.footer.accept}</button>
        <button className="btn btn-outline" type="button" onClick={() => choose("decline")}>{t.footer.decline}</button>
      </div>
    </div>
  );
}

export default function Layout() {
  const location = useLocation();
  useEffect(() => { if (!location.hash) window.scrollTo({ top: 0 }); }, [location.pathname]);
  return (
    <>
      <Header />
      <main className="page"><Outlet /></main>
      <Footer />
      <CookieBar />
    </>
  );
}
