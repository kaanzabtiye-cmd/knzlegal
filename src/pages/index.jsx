import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { CONTENT, LANGS, SITE_URL, Seo, useI18n } from "../i18n.jsx";
import { posts } from "../content/posts.js";
import { Arrow, ContactSection, ComposedNotice, CopyButton, Photo, PostBody, PostCard, PracticeCard, SectionHead } from "../components/Shared.jsx";
import { OFFICE_EMAIL, PHONES, SOCIAL } from "../components/Layout.jsx";
import { IMAGES } from "../content/images.js";
import { Constellation, Counter, EASE, Globe, Item, Marquee, Parallax, ReadingBar, Rise, Stagger, Words, motion } from "../components/Motion.jsx";

const KAAN_ID = "kaan-zabtiyeogullari";

/* ---------------- Ana sayfa ---------------- */
export function Home() {
  const { t, dir, href } = useI18n();
  const [featured, ...rest] = posts;
  const kaan = t.people.kaan;
  return (
    <>
      <Seo route="home" />
      <section className="hero">
        <picture className="hero-bg">
          <source media="(max-width: 700px)" srcSet={IMAGES.heroMobile} />
          <img src={IMAGES.hero} alt="" fetchpriority="high" />
        </picture>
        <div className="hero-shade" />
        <Constellation className="hero-net" />
        <div className="wrap hero-content">
          <motion.p className="eyebrow hero-eyebrow" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .2 }}>{t.home.heroEyebrow}</motion.p>
          <Words text={t.home.h2} delay={.35} />
          <motion.p className="hero-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: 1 }}>{t.home.heroSub}</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: 1.15 }}>
            <Link className="btn btn-gold" to={href("practice")}>{t.home.cta}</Link>
            <Link className="btn btn-ghost" to={href("contact")}>{t.nav.contact} <Arrow dir={dir} /></Link>
          </motion.div>
        </div>
        <a className="scroll-cue" href="#intro" aria-label={t.home.scroll}><span>{t.home.scroll}</span><i /></a>
      </section>

      <section className="stats" aria-label="KNZ Legal">
        <Stagger className="wrap stats-row" step={.12}>
          {t.home.stats.map(([n, label]) => <Item className="stat" key={label}><Counter value={n} /><span>{label}</span></Item>)}
        </Stagger>
        <Marquee items={t.home.ticker} />
      </section>

      <section className="section intro" id="intro">
        <div className="wrap intro-grid">
          <Rise className="intro-media"><Parallax from={-30} to={30} scale={1.08}><Photo src={IMAGES.about} index={0} alt="" /></Parallax><div className="intro-frame" /></Rise>
          <Rise className="intro-text" delay={.15}>
            <p className="eyebrow">{t.home.whoEyebrow}</p>
            <h2>{t.home.whoTitle}</h2>
            <p className="lead">{t.home.p}</p>
            <Link className="textlink" to={href("about")}>{t.home.whoCta} <Arrow dir={dir} /></Link>
          </Rise>
        </div>
      </section>

      <section className="section approach">
        <div className="wrap">
          <SectionHead eyebrow={t.home.approachEyebrow} title={t.home.approachTitle} />
          <Stagger className="steps" step={.18}>
            {t.home.approach.map(([title, text], i) => (
              <Item className="step" key={title}>
                <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                <motion.i className="step-line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: .3 + i * .2, ease: EASE }} />
                <h3>{title}</h3>
                <p>{text}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section practice-band">
        <div className="wrap">
          <SectionHead eyebrow={t.nav.practice} title={t.home.practiceTitle} action={<Link className="textlink" to={href("practice")}>{t.home.practiceAll} <Arrow dir={dir} /></Link>} />
          <Stagger className="pgrid" step={.07}>{t.practice.items.map((item, i) => <Item key={item.id} className="pcell"><PracticeCard item={item} index={i} /></Item>)}</Stagger>
        </div>
      </section>

      <section className="presence">
        <div className="wrap presence-grid">
          <Rise className="presence-text">
            <p className="eyebrow">{t.home.presenceEyebrow}</p>
            <h2>{t.home.presenceTitle}</h2>
            <p className="lead">{t.home.presenceText}</p>
            <Link className="btn btn-outline-light" to={href("contact")}>{t.nav.contact} <Arrow dir={dir} /></Link>
          </Rise>
          <Stagger className="presence-globe" step={.1}><Globe cities={t.home.cities} dir={dir} /></Stagger>
        </div>
      </section>

      <section className="section insights">
        <div className="wrap">
          <SectionHead eyebrow={t.home.insightsEyebrow} title={t.home.blogTitle} action={<Link className="textlink" to={href("blog")}>{t.home.allPosts} <Arrow dir={dir} /></Link>} />
          <div className="insights-grid">
            <PostCard post={featured} index={0} featured />
            <div className="insights-side">{rest.slice(0, 3).map((p, i) => <PostCard key={p.slug} post={p} index={i + 1} />)}</div>
          </div>
        </div>
      </section>

      <section className="people-band">
        <div className="wrap people-teaser">
          <Rise className="people-photo"><Parallax from={-40} to={40} scale={1.1}><Photo src={IMAGES.people[KAAN_ID].tall} index={2} alt={kaan.name} /></Parallax></Rise>
          <Rise className="people-text" delay={.15}>
            <p className="eyebrow">{t.home.peopleTitle}</p>
            <h2>{kaan.name}</h2>
            <p className="role">{kaan.role} · {kaan.office}</p>
            <p className="lead">{kaan.tagline}</p>
            <Link className="btn btn-outline-light" to={href("people", KAAN_ID)}>{t.home.peopleCta} <Arrow dir={dir} /></Link>
          </Rise>
        </div>
      </section>

      <section className="quote-band"><Rise className="wrap"><span className="qmark" aria-hidden="true">“</span><blockquote>{t.home.quote}</blockquote><cite>{t.home.quoteBy}</cite></Rise></section>
      <ContactSection />
    </>
  );
}

/* ---------------- Hakkımızda ---------------- */
export function About() {
  const { t, dir, href } = useI18n();
  return (
    <>
      <PageHero eyebrow={t.nav.about} title={t.about.title} sub={t.about.mission[0]} />
      <section className="section">
        <Seo route="about" title={t.about.title} description={t.about.mission[0]} />
        <div className="wrap">
          <div className="about-hero">
            <div className="about-media reveal"><Photo className="about-photo" src={IMAGES.about} index={0} alt="" /></div>
            <div className="about-block reveal" style={{ "--d": "120ms" }}><p className="eyebrow">{t.about.missionTitle}</p><h2>{t.about.missionTitle}</h2>{t.about.mission.slice(1).map((p, i) => <p key={i} className={i === 0 ? "lead" : undefined}>{p}</p>)}</div>
          </div>
          <div className="about vision reveal">
            <div><p className="eyebrow">{t.about.visionTitle}</p><h2>{t.about.visionTitle}</h2></div>
            <div><p className="lead">{t.about.vision}</p><Link className="textlink" to={href("people")}>{t.home.peopleCta} <Arrow dir={dir} /></Link></div>
          </div>
        </div>
      </section>
    </>
  );
}

function PageHero({ eyebrow, title, sub, dark = true }) {
  return (
    <section className={"page-hero" + (dark ? " dark" : "")}>
      <div className="wrap">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {sub && <p className="lead">{sub}</p>}
      </div>
    </section>
  );
}

/* ---------------- Ekip ---------------- */
export function People() {
  const { t, dir, href } = useI18n();
  const k = t.people.kaan;
  return (
    <>
      <Seo route="people" title={t.people.title} description={t.people.intro} />
      <PageHero eyebrow={t.nav.people} title={t.people.title} sub={t.people.intro} />
      <section className="section">
        <div className="wrap">
          <div className="people-grid">
            <Link className="person-card reveal" to={href("people", KAAN_ID)}>
              <Photo className="person-photo" src={IMAGES.people[KAAN_ID].tall} index={2} alt={k.name} />
              <div className="person-body">
                <h3>{k.name}</h3>
                <p>{k.role}</p>
                <span className="muted">{k.office}</span>
                <span className="more">{t.people.overview} <Arrow dir={dir} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function Person() {
  const { t, lang, dir, href, fmtDate } = useI18n();
  const { id } = useParams();
  if (id !== KAAN_ID) return <Navigate to={href("people")} replace />;
  const k = t.people.kaan;
  const p = t.people;
  const mine = posts; // bürodaki tüm yazılar Kaan Zabtiyeoğulları'na aittir
  const alternates = Object.fromEntries(LANGS.map((l) => [l, `/${l}/people/${KAAN_ID}`]));
  const [tab, setTab] = useState("overview");
  const sections = [
    ["overview", p.overview], ["focus", p.focus], ["experience", p.experience], ["education", p.education], ["insights", p.insights],
  ];
  const jump = (key) => { setTab(key); document.getElementById("sec-" + key)?.scrollIntoView({ behavior: "smooth", block: "start" }); };
  return (
    <>
      <Seo route="people" param={KAAN_ID} alternates={alternates} title={k.name} description={k.tagline} jsonLd={{ "@context": "https://schema.org", "@type": "Person", name: "Kaan Zabtiyeoğulları", jobTitle: k.role, worksFor: { "@type": "LegalService", name: "KNZ Legal" }, image: SITE_URL + IMAGES.people[KAAN_ID].square, email: OFFICE_EMAIL, url: SITE_URL + `/${lang}/people/${KAAN_ID}`, knowsLanguage: ["tr", "en", "fr", "ru"], sameAs: [SOCIAL.linkedin] }} />
      <section className="person-hero">
        <div className="wrap person-hero-grid">
          <div className="person-hero-photo reveal"><Photo src={IMAGES.people[KAAN_ID].tall} index={2} alt={k.name} eager /></div>
          <div className="person-hero-text reveal" style={{ "--d": "120ms" }}>
            <Link className="crumb" to={href("people")}>{t.nav.people}</Link>
            <h1>{k.name}</h1>
            <p className="role">{k.role}</p>
            <p className="office">{k.office}</p>
            <p className="lead">{k.tagline}</p>
            <div className="person-contact">
              <a href={"mailto:" + OFFICE_EMAIL}>{OFFICE_EMAIL}</a>
              {PHONES.map((ph) => <a key={ph.tel} href={"tel:" + ph.tel}>{ph.label}</a>)}
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
      <nav className="person-tabs" aria-label={p.overview}>
        <div className="wrap">{sections.map(([key, label]) => <button key={key} type="button" aria-current={tab === key ? "true" : "false"} onClick={() => jump(key)}>{label}</button>)}</div>
      </nav>
      <section className="section person-body-sec">
        <div className="wrap person-layout">
          <div className="person-main">
            <div id="sec-overview" className="person-sec reveal">
              <h2>{p.overview}</h2>
              {k.bio.map((para, i) => <p key={i} className={i === 0 ? "lead" : undefined}>{para}</p>)}
            </div>
            <div id="sec-focus" className="person-sec reveal">
              <h2>{p.focus}</h2>
              <ul className="focus-list">{k.focusItems.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div id="sec-experience" className="person-sec reveal">
              <h2>{p.experience}</h2>
              <ol className="timeline">{k.experienceItems.map((x) => { const [org, ...role] = x.split(", "); return <li key={x}><b>{org}</b><span>{role.join(", ")}</span></li>; })}</ol>
            </div>
            <div id="sec-education" className="person-sec reveal">
              <h2>{p.education}</h2>
              <ol className="timeline">{k.educationItems.map((x) => { const [org, ...role] = x.split(", "); return <li key={x}><b>{org}</b><span>{role.join(", ")}</span></li>; })}</ol>
            </div>
            <div id="sec-insights" className="person-sec reveal">
              <h2>{p.insights}</h2>
              <ul className="insight-list">
                {mine.map((x) => { const m = t.blog.posts[x.slug]; return m ? <li key={x.slug}><Link to={href("blog", x.slug)}><time dateTime={x.date}>{fmtDate(x.date)}</time><span>{m.title}</span><Arrow dir={dir} /></Link></li> : null; })}
              </ul>
              <Link className="textlink" to={href("blog")}>{p.readAll} <Arrow dir={dir} /></Link>
            </div>
          </div>
          <aside className="person-side">
            <div className="side-card reveal">
              <h4>{p.languages}</h4>
              <ul>{k.languageItems.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="side-card reveal">
              <h4>{p.memberships}</h4>
              <ul>{k.membershipItems.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="side-card reveal">
              <h4>{p.contact}</h4>
              <ul className="plain">
                <li><a href={"mailto:" + OFFICE_EMAIL}>{OFFICE_EMAIL}</a></li>
                {PHONES.map((ph) => <li key={ph.tel}><a href={"tel:" + ph.tel}>{ph.label}</a></li>)}
                <li><a href={SOCIAL.linkedin} target="_blank" rel="noopener">LinkedIn</a></li>
              </ul>
              <button className="btn btn-outline btn-sm" type="button" onClick={() => window.print()}>{p.download}</button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

/* ---------------- Uzmanlık alanları ---------------- */
export function Practice() {
  const { t, dir, href } = useI18n();
  const { id } = useParams();
  const [open, setOpen] = useState(() => new Set([id || t.practice.items[0].id]));
  useEffect(() => { if (id) { setOpen(new Set([id])); setTimeout(() => document.getElementById("area-" + id)?.scrollIntoView({ block: "start", behavior: "smooth" }), 60); } }, [id]);
  const idx = id ? t.practice.items.findIndex((x) => x.id === id) : -1;
  const alternates = idx >= 0 ? Object.fromEntries(LANGS.map((l) => [l, `/${l}/practice/${CONTENT[l].practice.items[idx].id}`])) : undefined;
  const toggle = (aid) => setOpen((s) => { const n = new Set(s); n.has(aid) ? n.delete(aid) : n.add(aid); return n; });
  return (
    <>
      <Seo route="practice" param={id} alternates={alternates} title={idx >= 0 ? t.practice.items[idx].title : t.practice.title} />
      <PageHero eyebrow={t.nav.practice} title={t.practice.title} sub={t.home.heroSub} />
      <section className="section">
        <div className="wrap">
          <div className="acc">
            {t.practice.items.map((item, i) => {
              const isOpen = open.has(item.id);
              return (
                <div className={"acc-item reveal" + (isOpen ? " open" : "")} id={"area-" + item.id} key={item.id}>
                  <button className="acc-head" type="button" aria-expanded={isOpen} onClick={() => toggle(item.id)}>
                    <span className="num">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <svg className="plus" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M9 2v14M2 9h14" stroke="currentColor" strokeWidth="1.6" fill="none" /></svg>
                  </button>
                  <div className="acc-body">
                    <div className="acc-inner">
                      <Photo className="acc-photo" src={IMAGES.practice[i]} index={i} alt="" />
                      <div>
                        <ul>{item.points.map(([k, v]) => <li key={k}><strong>{k}</strong><span>{v}</span></li>)}</ul>
                        <div className="acc-actions"><Link className="btn btn-gold btn-sm" to={href("contact") + "?subject=" + encodeURIComponent(item.title)}>{t.practice.askCta} <Arrow dir={dir} /></Link></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------- Blog ---------------- */
export function Blog() {
  const { t } = useI18n();
  const [filter, setFilter] = useState("all");
  const cats = { all: t.blog.allPosts, ...t.blog.categories };
  const list = posts.filter((p) => filter === "all" || p.category === filter);
  return (
    <>
      <Seo route="blog" title={t.blog.title} />
      <PageHero eyebrow={t.home.insightsEyebrow} title={t.blog.title} />
      <section className="section blog-band">
        <div className="wrap">
          <div className="filters reveal">{Object.entries(cats).map(([k, label]) => <button key={k} type="button" aria-pressed={k === filter} onClick={() => setFilter(k)}>{label}</button>)}</div>
          <div className="bgrid" key={filter}>{list.map((p, i) => <PostCard key={p.slug} post={p} index={i} />)}</div>
          {t.blog.downloads?.length > 0 && (
            <div className="downloads reveal">
              <h3>{t.blog.downloadsTitle}</h3>
              {t.blog.downloads.map((d) => <a key={d.href} href={d.href} target="_blank" rel="noopener">↓ {d.label}</a>)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export function Post() {
  const { t, lang, dir, href, fmtDate } = useI18n();
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <Navigate to={href("blog")} replace />;
  const meta = t.blog.posts[slug];
  const url = typeof window !== "undefined" ? window.location.href : "";
  const langNote = t.blog.langNotes?.[post.lang];
  const more = posts.filter((p) => p.slug !== slug).slice(0, 3);
  return (
    <>
      <Seo route="blog" param={slug} title={meta.title} description={meta.summary} jsonLd={{ "@context": "https://schema.org", "@type": "Article", headline: meta.title, description: meta.summary, datePublished: post.date, inLanguage: post.lang, image: SITE_URL + IMAGES.post(slug), author: { "@type": "Person", name: post.author || "KNZ Legal" }, publisher: { "@type": "Organization", name: "KNZ Legal", logo: { "@type": "ImageObject", url: SITE_URL + "/logo.png" } } }} />
      <ReadingBar />
      <article className="article">
        <header className="article-hero">
          <Photo className="article-cover" src={IMAGES.post(slug)} index={1} alt="" eager />
          <div className="wrap article-head">
            <Link className="crumb light" to={href("blog")}>{t.blog.back}</Link>
            <span className="tag">{t.blog.categories[post.category] || post.category}</span>
            <h1>{meta.title}</h1>
            <div className="article-meta">
              {post.author && <Link to={href("people", KAAN_ID)} className="author">{post.author}</Link>}
              <time dateTime={post.date}>{fmtDate(post.date)}</time>
            </div>
          </div>
        </header>
        <div className="wrap article-wrap">
          <div className="article-body" lang={post.lang} dir={post.lang === "ar" ? "rtl" : "ltr"}>
            <p className="article-summary">{meta.summary}</p>
            {lang !== post.lang && langNote && <div className="note">{langNote}</div>}
            {post.source && <p className="source">Kaynak: {post.source}</p>}
            <PostBody body={post.body} />
          </div>
          <aside className="article-side">
            <div className="side-card">
              <h4>{t.people.title}</h4>
              <Link className="mini-person" to={href("people", KAAN_ID)}>
                <img src={IMAGES.people[KAAN_ID].square} alt="" width="56" height="56" loading="lazy" />
                <span><b>{t.people.kaan.name}</b><small>{t.people.kaan.role}</small></span>
              </Link>
            </div>
            <div className="side-card">
              <h4>{t.blog.share}</h4>
              <CopyButton text={url} label={t.blog.share} className="btn btn-outline btn-sm" />
            </div>
          </aside>
        </div>
        <div className="wrap article-foot">
          <SectionHead eyebrow={t.home.insightsEyebrow} title={t.home.latest} action={<Link className="textlink" to={href("blog")}>{t.home.allPosts} <Arrow dir={dir} /></Link>} />
          <div className="bgrid">{more.map((p, i) => <PostCard key={p.slug} post={p} index={i} />)}</div>
        </div>
      </article>
    </>
  );
}

/* ---------------- Haberler ---------------- */
export function News() {
  const { t, dir, href, fmtDate } = useI18n();
  return (
    <>
      <Seo route="news" title={t.news.title} />
      <PageHero eyebrow={t.nav.news} title={t.news.title} />
      <section className="section">
        <div className="wrap">
          <div className="news">
            {t.news.items.map((n, i) => (
              <div className="nrow reveal" key={i}>
                <time dateTime={n.date}>{fmtDate(n.date)}</time>
                <div><h3>{n.title}</h3><p>{n.text}</p>{n.post && <Link className="textlink" to={href("blog", n.post)}>{t.blog.readMore} <Arrow dir={dir} /></Link>}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------- Kariyer ---------------- */
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
    <>
      <Seo route="career" title={t.career.subtitle} />
      <PageHero eyebrow={t.nav.career} title={t.career.title} sub={t.career.subtitle} />
      <section className="section">
        <div className="wrap">
          <div className="career reveal">
            <p className="lead">{t.career.text}</p>
            <form className="form" noValidate onSubmit={submit}>
              <div className="field"><label htmlFor="cName">{t.career.name}</label><input id="cName" type="text" autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
              <div className="field"><label htmlFor="cPhone">{t.career.phone}</label><input id="cPhone" type="tel" autoComplete="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
              <div className="field"><label htmlFor="cEmail">{t.career.email}</label><input id="cEmail" type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
              <div className="field"><label htmlFor="cCv">{t.career.cv}</label><input id="cCv" type="file" accept=".pdf,.doc,.docx" /></div>
              <div className="form-actions"><button className="btn btn-gold" type="submit">{t.career.cta}</button></div>
              {result?.error && <div className="notice"><p>{result.error}</p></div>}
              {result?.text && <ComposedNotice text={result.text} subject={t.career.subtitle} success={t.career.success} />}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export function Contact() {
  const { t } = useI18n();
  const subject = new URLSearchParams(window.location.search).get("subject") || "";
  return (<><Seo route="contact" title={t.contact.title} /><PageHero eyebrow={t.nav.contact} title={t.contact.title} sub={t.contact.visitTitle} /><ContactSection presetSubject={subject} compact /></>);
}
