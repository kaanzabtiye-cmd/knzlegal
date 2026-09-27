import { useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n.jsx";
import { OFFICE_EMAIL, PHONES, copyText } from "./Layout.jsx";

export function PracticeCard({ item }) {
  const { t, dir, href } = useI18n();
  const first = item.points.slice(0, 2).map((p) => p[0]).join(" · ");
  return (
    <Link className="pcard" to={href("practice", item.id)}>
      <h3>{item.title}</h3>
      <p>{first}</p>
      <span className="more">{t.practice.showMore}{dir === "rtl" ? " ←" : " →"}</span>
    </Link>
  );
}

export function PostCard({ post }) {
  const { t, href, fmtDate } = useI18n();
  const meta = t.blog.posts[post.slug];
  return (
    <Link className="bcard" to={href("blog", post.slug)}>
      <div className="bcard-img"><span>{t.blog.categories[post.category] || post.category}</span></div>
      <div className="bcard-body">
        <time dateTime={post.date}>{fmtDate(post.date)}</time>
        <h3>{meta.title}</h3>
        <p>{meta.summary}</p>
        <span className="more">{t.home.continue}</span>
      </div>
    </Link>
  );
}

/** Gövde metni: "## " başlık, "- " madde, "> " alıntı, diğer satırlar paragraf. */
export function PostBody({ body }) {
  const blocks = [];
  let ul = null;
  body.split("\n").forEach((raw, i) => {
    const line = raw.replace(/\r$/, "");
    if (!line.trim()) { ul = null; return; }
    if (line.startsWith("## ")) { ul = null; blocks.push(<h3 key={i}>{line.slice(3)}</h3>); }
    else if (line.startsWith("- ")) {
      if (!ul) { ul = []; blocks.push(<ul key={i}>{ul}</ul>); }
      ul.push(<li key={i}>{line.slice(2)}</li>);
    }
    else if (line.startsWith("> ")) { ul = null; blocks.push(<blockquote key={i}>{line.slice(2)}</blockquote>); }
    else { ul = null; blocks.push(<p key={i}>{line}</p>); }
  });
  return <>{blocks}</>;
}

export function CopyButton({ text, label, className = "copybtn" }) {
  const { t } = useI18n();
  const [done, setDone] = useState(false);
  return (
    <button className={className} type="button" onClick={async () => { await copyText(text); setDone(true); setTimeout(() => setDone(false), 1600); }}>
      {done ? t.contact.copied : (label || t.contact.copy)}
    </button>
  );
}

/** Form gönderimi: statik barındırmada sunucu olmadığı için mesaj hazırlanır, kopyalanır veya posta uygulaması açılır.
 *  Gerçek gönderim için README'deki "Form" bölümüne bakın (Formspree / Netlify Forms / kendi API'niz). */
export function ComposedNotice({ text, subject, success }) {
  const { t } = useI18n();
  return (
    <div className="notice">
      <p>{success}</p>
      <pre>{text}</pre>
      <div className="notice-actions">
        <CopyButton text={text} className="btn btn-outline" />
        <a className="btn btn-outline" href={`mailto:${OFFICE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`}>{t.contact.openMail}</a>
      </div>
    </div>
  );
}

export function ContactSection({ presetSubject }) {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", msg: presetSubject ? presetSubject + ": " : "" });
  const [result, setResult] = useState(null);
  const today = (new Date().getDay() + 6) % 7;
  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.msg.trim()) { setResult({ error: t.contact.missing }); return; }
    setResult({ text: `${t.contact.name}: ${form.name.trim()}\n${t.contact.email}: ${form.email.trim()}\n\n${form.msg.trim()}` });
  };
  return (
    <section className="section contact-band" id="contact">
      <div className="wrap">
        <h2 className="section-title">{t.contact.title}</h2>
        <div className="contact-grid">
          <div className="contact-col">
            <h3>{t.contact.formTitle}</h3>
            <form className="form" noValidate onSubmit={submit}>
              <div className="field"><label htmlFor="mName">{t.contact.name}</label><input id="mName" name="name" type="text" autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
              <div className="field"><label htmlFor="mEmail">{t.contact.email}</label><input id="mEmail" name="email" type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
              <div className="field"><label htmlFor="mMsg">{t.contact.message}</label><textarea id="mMsg" name="message" value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} /></div>
              <div className="form-actions"><button className="btn btn-ink" type="submit">{t.contact.send}</button></div>
              {result?.error && <div className="notice"><p>{result.error}</p></div>}
              {result?.text && <ComposedNotice text={result.text} subject="KNZ Legal" success={t.contact.success} />}
            </form>
          </div>
          <div className="contact-col">
            <h3>{t.contact.visitTitle}</h3>
            <div className="cinfo">
              <strong>{t.contact.firm}</strong>
              <p>{t.contact.address}</p>
              <div className="copyrow"><a className="val" href={"mailto:" + OFFICE_EMAIL}>{OFFICE_EMAIL}</a><CopyButton text={OFFICE_EMAIL} /></div>
              {PHONES.map((p) => <div key={p.tel} className="copyrow"><a className="val" href={"tel:" + p.tel}>{p.label}</a><CopyButton text={p.tel} /></div>)}
            </div>
            <div>
              <h3>{t.contact.hoursTitle}</h3>
              <table className="hours"><tbody>
                {t.contact.days.map((d, i) => <tr key={d} className={i === today ? "today" : undefined}><td>{d}</td><td>{t.contact.hours[i]}</td></tr>)}
              </tbody></table>
            </div>
            <a className="btn btn-outline" href="https://www.google.com/maps/search/?api=1&query=Ho%C5%9Fdere+Caddesi+166%2F1+%C3%87ankaya+Ankara" target="_blank" rel="noopener">{t.contact.directions}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
