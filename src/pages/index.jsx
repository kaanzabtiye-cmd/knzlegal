import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { CONTENT, LANGS, Seo, useI18n } from "../i18n.jsx";
import { posts } from "../content/posts.js";
import { ContactSection, ComposedNotice, CopyButton, Photo, PostBody, PostCard, PracticeCard } from "../components/Shared.jsx";
import { IMAGES } from "../content/images.js";

const HERO_PHOTO = IMAGES.hero;

export function Home() {
  const { t, href } = useI18n();
  const [hasPhoto, setHasPhoto] = useState(false);
  useEffect(() => { const img = new Image(); img.onload = () => setHasPhoto(true); img.src = HERO_PHOTO; }, []);
  return (
    <>
      <Seo route="home" />
      <section className="hero">
        <div className={"hero-bg" + (hasPhoto ? " has-photo" : "")} style={hasPhoto ? { backgroundImage: `url(${HERO_PHOTO})` } : undefined} />
        <div className="wrap">
          <div className="hero-content">
            <p className="eyebrow">{t.home.heroEyebrow}</p>
            <h1>{t.home.h2}</h1>
            <p>{t.home.heroSub}</p>
            <div className="hero-actions">
              <Link className="btn btn-gold" to={href("practice")}>{t.home.cta}</Link>
              <Link className="btn btn-ghost" to={href("contact")}>{t.nav.contact}</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="stats" aria-label="KNZ Legal">
        <div className="wrap">{t.home.stats.map(([n, label]) => <div className="stat reveal" key={label}><b>{n}</b><span>{label}</span></div>)}</div>
      </section>
      <section className="section intro reveal"><div className="wrap"><p className="eyebrow" style={{ marginBottom: 16 }}>{t.brand.tag}</p><p>{t.home.p}</p></div></section>
      <section className="section practice-band">
        <div className="wrap">
          <h2 className="section-title">{t.home.practiceTitle}</h2>
          <div className="pgrid">{t.practice.items.map((item, i) => <PracticeCard key={item.id} item={item} index={i} />)}</div>
          <div className="center"><Link className="btn btn-ink" to={href("practice")}>{t.home.practiceAll}</Link></div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="section-title">{t.home.blogTitle}</h2>
          <div className="bgrid">{posts.slice(0, 4).map((p, i) => <PostCard key={p.slug} post={p} index={i} />)}</div>
          <div className="center"><Link className="btn btn-outline" to={href("blog")}>{t.home.allPosts}</Link></div>
        </div>
      </section>
      <section className="quote-band"><div className="wrap reveal"><blockquote>{t.home.quote}</blockquote><cite>{t.home.quoteBy}</cite></div></section>
      <ContactSection />
    </>
  );
}

export function About() {
  const { t } = useI18n();
  return (
    <section className="section">
      <Seo route="about" title={t.about.title} description={t.about.mission[0]} />
      <div className="wrap">
        <h2 className="section-title">{t.about.title}</h2>
        <div className="about-hero reveal">
          <Photo className="about-photo" src={IMAGES.about} index={0} alt="" />
          <div className="about-block" style={{ textAlign: "start" }}><h2>{t.about.missionTitle}</h2>{t.about.mission.slice(0, 2).map((p, i) => <p key={i}>{p}</p>)}</div>
        </div>
        <div className="about">
          <div className="about-block">{t.about.mission.slice(2).map((p, i) => <p key={i}>{p}</p>)}</div>
          <div className="about-block"><h2>{t.about.visionTitle}</h2><p>{t.about.vision}</p></div>
        </div>
      </div>
    </section>
  );
}

export function Practice() {
  const { t, lang, href } = useI18n();
  const { id } = useParams();
  const [open, setOpen] = useState(() => new Set([id || t.practice.items[0].id]));
  useEffect(() => { if (id) { setOpen(new Set([id])); setTimeout(() => document.getElementById("area-" + id)?.scrollIntoView({ block: "start" }), 30); } }, [id]);
  const idx = id ? t.practice.items.findIndex((x) => x.id === id) : -1;
  const alternates = idx >= 0 ? Object.fromEntries(LANGS.map((l) => [l, `/${l}/practice/${CONTENT[l].practice.items[idx].id}`])) : undefined;
  const toggle = (aid) => setOpen((s) => { const n = new Set(s); n.has(aid) ? n.delete(aid) : n.add(aid); return n; });
  return (
    <section className="section">
      <Seo route="practice" param={id} alternates={alternates} title={idx >= 0 ? t.practice.items[idx].title : t.practice.title} />
      <div className="wrap">
        <h2 className="section-title">{t.practice.title}</h2>
        <div className="acc">
          {t.practice.items.map((item, i) => {
            const isOpen = open.has(item.id);
            return (
              <div className={"acc-item" + (isOpen ? " open" : "")} id={"area-" + item.id} key={item.id}>
                <button className="acc-head" type="button" aria-expanded={isOpen} onClick={() => toggle(item.id)}>
                  <h3>{item.title}</h3>
                  <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.6" fill="none" /></svg>
                </button>
                <div className="acc-body">
                  <Photo className="acc-photo" src={IMAGES.practice[i]} index={i} alt="" />
                  <ul>{item.points.map(([k, v]) => <li key={k}><strong>{k}: </strong>{v}</li>)}</ul>
                  <div className="acc-actions"><Link className="btn btn-ink" to={href("contact") + "?subject=" + encodeURIComponent(item.title)}>{t.practice.askCta}</Link></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Blog() {
  const { t } = useI18n();
  const [filter, setFilter] = useState("all");
  const cats = { all: t.blog.allPosts, ...t.blog.categories };
  return (
    <section className="section blog-band">
      <Seo route="blog" title={t.blog.title} />
      <div className="wrap">
        <h2 className="section-title">{t.blog.title}</h2>
        <div className="filters">{Object.entries(cats).map(([k, label]) => <button key={k} type="button" aria-pressed={k === filter} onClick={() => setFilter(k)}>{label}</button>)}</div>
        <div className="bgrid">{posts.filter((p) => filter === "all" || p.category === filter).map((p, i) => <PostCard key={p.slug} post={p} index={i} />)}</div>
        <div className="downloads">
          <h3>{t.blog.downloadsTitle}</h3>
          {t.blog.downloads.map((d) => <a key={d.href} href={d.href} target="_blank" rel="noopener">↓ {d.label}</a>)}
        </div>
      </div>
    </section>
  );
}

export function Post() {
  const { t, lang, href, fmtDate } = useI18n();
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <Navigate to={href("blog")} replace />;
  const meta = t.blog.posts[slug];
  const url = typeof window !== "undefined" ? window.location.href : "";
  return (
    <section className="section">
      <Seo route="blog" param={slug} title={meta.title} description={meta.summary} />
      <div className="wrap">
        <article className="article">
          <div className="article-head">
            <Link className="linkish" to={href("blog")}>← {t.blog.back}</Link>
            <h1>{meta.title}</h1>
            <div className="article-meta"><time dateTime={post.date}>{fmtDate(post.date)}</time><span>{t.blog.categories[post.category] || post.category}</span></div>
            <p className="article-summary">{meta.summary}</p>
          </div>
          {lang !== post.lang && t.blog.langNote && <div className="note">{t.blog.langNote}</div>}
          <div className="article-body" lang={post.lang}>
            {post.source && <p className="source">Kaynak: {post.source}</p>}
            <PostBody body={post.body} />
          </div>
          <div className="article-foot">
            <Link className="linkish" to={href("blog")}>{t.blog.back}</Link>
            <CopyButton text={url} label={t.blog.share} className="btn btn-outline" />
          </div>
        </article>
      </div>
    </section>
  );
}

export function News() {
  const { t, href, fmtDate } = useI18n();
  return (
    <section className="section">
      <Seo route="news" title={t.news.title} />
      <div className="wrap">
        <h2 className="section-title">{t.news.title}</h2>
        <div className="news">
          {t.news.items.map((n, i) => (
            <div className="nrow" key={i}>
              <time dateTime={n.date}>{fmtDate(n.date)}</time>
              <div><h3>{n.title}</h3><p>{n.text}</p>{n.post && <Link className="linkish" to={href("blog", n.post)}>{t.blog.readMore}</Link>}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Career() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [result, setResult] = useState(null);
  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) { setResult({ error: t.contact.missing }); return; }
    setResult({ text: `${t.career.name}: ${form.name.trim()}\n${t.career.phone}: ${form.phone.trim()}\n${t.career.email}: ${form.email.trim()}` });
  };
  return (
    <section className="section">
      <Seo route="career" title={t.career.subtitle} />
      <div className="wrap">
        <div className="career">
          <h2>{t.career.title}</h2>
          <h3>{t.career.subtitle}</h3>
          <p>{t.career.text}</p>
          <form className="form" noValidate onSubmit={submit}>
            <div className="field"><label htmlFor="cName">{t.career.name}</label><input id="cName" type="text" autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
            <div className="field"><label htmlFor="cPhone">{t.career.phone}</label><input id="cPhone" type="tel" autoComplete="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
            <div className="field"><label htmlFor="cEmail">{t.career.email}</label><input id="cEmail" type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
            <div className="field"><label htmlFor="cCv">{t.career.cv}</label><input id="cCv" type="file" accept=".pdf,.doc,.docx" /></div>
            <div className="form-actions"><button className="btn btn-ink" type="submit">{t.career.cta}</button></div>
            {result?.error && <div className="notice"><p>{result.error}</p></div>}
            {result?.text && <ComposedNotice text={result.text} subject={t.career.subtitle} success={t.career.success} />}
          </form>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useI18n();
  const subject = new URLSearchParams(window.location.search).get("subject") || "";
  return (<><Seo route="contact" title={t.contact.title} /><ContactSection presetSubject={subject} /></>);
}
