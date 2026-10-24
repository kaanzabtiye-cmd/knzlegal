import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { CONTENT, LANGS, SITE_URL, Seo, useI18n } from "../i18n.jsx";
import { posts } from "../content/posts.js";
import { Arrow, ContactSection, ComposedNotice, CopyButton, Photo, PostBody, PostCard, PracticeCard, SectionHead } from "../components/Shared.jsx";
import { OFFICE_EMAIL, PHONES, SOCIAL } from "../components/Layout.jsx";
import { IMAGES } from "../content/images.js";
import { Constellation, Counter, Drift, EASE, Globe, HorizontalRail, Item, Marquee, Parallax, PinnedShowcase, ReadingBar, Rise, ScrollHero, Stagger, WordFill, Words, motion, useDesktop } from "../components/Motion.jsx";

const KAAN_ID = "kaan-zabtiyeogullari";

/* ---------------- Ana sayfa ---------------- */
export function Home() {
  const { t, dir, href } = useI18n();
  const [featured, ...rest] = posts;
  const kaan = t.people.kaan;
  const desktop = useDesktop();
  const heroMedia = (
    <>
      <picture className="hero-bg">
        <source media="(max-width: 700px)" srcSet={IMAGES.heroMobile} />
        <img src={IMAGES.hero} alt="" fetchpriority="high" />
      </picture>
      <div className="hero-shade" />
      <Constellation className="hero-net" />
    </>
  );
  const heroText = (
    <>
      <motion.p className="eyebrow hero-eyebrow" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .2 }}>{t.home.heroEyebrow}</motion.p>
      <Words text={t.home.h2} delay={.35} />
      <motion.p className="hero-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: 1 }}>{t.home.heroSub}</motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: 1.15 }}>
        <Link className="btn btn-gold" to={href("practice")}>{t.home.cta}</Link>
        <Link className="btn btn-ghost" to={href("contact")}>{t.nav.contact} <Arrow dir={dir} /></Link>
      </motion.div>
    </>
  );
  const heroCaption = (
    <>
      <p className="eyebrow">{t.home.whoEyebrow}</p>
      <h2>{t.home.whoTitle}</h2>
      <Link className="textlink" to={href("about")}>{t.home.whoCta} <Arrow dir={dir} /></Link>
    </>
  );
  const practiceGrid = (
    <section className="section practice-band">
      <div className="wrap">
        <SectionHead eyebrow={t.nav.practice} title={t.home.practiceTitle} action={<Link className="textlink" to={href("practice")}>{t.home.practiceAll} <Arrow dir={dir} /></Link>} />
        <Stagger className="pgrid" step={.07}>{t.practice.items.map((item, i) => <Item key={item.id} className="pcell"><PracticeCard item={item} index={i} /></Item>)}</Stagger>
      </div>
    </section>
  );
  const insightsHead = <SectionHead eyebrow={t.home.insightsEyebrow} title={t.home.blogTitle} action={<Link className="textlink" to={href("blog")}>{t.home.allPosts} <Arrow dir={dir} /></Link>} />;
  return (
    <>
      <Seo route="home" />
      <ScrollHero media={heroMedia} text={heroText} caption={heroCaption} enabled={desktop} />
      {!desktop && <section className="section intro-static"><div className="wrap">{heroCaption}</div></section>}

      <section className="stats" aria-label="KNZ Legal">
        <Stagger className="wrap stats-row" step={.12}>
          {t.home.stats.map(([n, label]) => <Item className="stat" key={label}><Counter value={n} /><span>{label}</span></Item>)}
        </Stagger>
        <Marquee items={t.home.ticker} />
      </section>

      <WordFill text={t.home.p} eyebrow={t.brand.tag} enabled={desktop} />

      <section className="section approach">
        <Drift />
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

      <PinnedShowcase items={t.practice.items} images={IMAGES.practice} eyebrow={t.nav.practice} title={t.home.practiceTitle} moreLabel={t.practice.showMore} href={(id) => href("practice", id)} dir={dir} enabled={desktop}>
        {practiceGrid}
      </PinnedShowcase>

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

      <HorizontalRail enabled={desktop} head={insightsHead}>
        {posts.map((p, i) => <div className="rail-card" key={p.slug}><PostCard post={p} index={i} featured={desktop && i === 0} /></div>)}
      </HorizontalRail>

      <section className="people-band">
        <div className="wrap people-teaser">
          <Rise className="people-photo"><Parallax from={-40} to={40} scale={1.1}><Photo src={IMAGES.people[KAAN_ID].tall} index={2} alt={kaan.name} /></Parallax></Rise>
          <Rise className="people-text" delay={.15}>
            <p className="eyebrow">{t.home.peopleTitle}</p>
            <h2>{kaan.name}</h2>
            <p className="role">{kaan.role} · {kaan.office}</p>
            <p className="lead">{kaan.tagline}</p>
            <Link className="btn btn-outline-light" to={href("about") + "#kaan"}>{t.home.peopleCta} <Arrow dir={dir} /></Link>
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
  const a = t.about;
  useEffect(() => { if (window.location.hash === "#kaan") setTimeout(() => document.getElementById("kaan")?.scrollIntoView({ behavior: "smooth", block: "start" }), 500); }, []);
  return (
    <>
      <Seo route="about" title={a.title} description={a.heroSub} />
      <PageHero eyebrow={t.nav.about} title={a.title} sub={a.heroSub} />
      <section className="section">
        <div className="wrap">
          <div className="about-hero">
            <div className="about-media reveal"><Parallax from={-24} to={24} scale={1.08}><Photo className="about-photo" src={IMAGES.about} index={0} alt="" /></Parallax></div>
            <div className="about-block reveal" style={{ "--d": "120ms" }}>
              <p className="eyebrow">{a.storyEyebrow}</p>
              <h2>{a.storyTitle}</h2>
              {a.story.map((x, i) => <p key={i} className={i === 0 ? "lead" : undefined}>{x}</p>)}
            </div>
          </div>
        </div>
      </section>
      <section className="section mv-band">
        <div className="wrap mv-grid">
          <div className="mv reveal"><p className="eyebrow">{a.missionTitle}</p><h2>{a.missionTitle}</h2>{a.mission.map((x, i) => <p key={i}>{x}</p>)}</div>
          <div className="mv reveal" style={{ "--d": "120ms" }}><p className="eyebrow">{a.visionTitle}</p><h2>{a.visionTitle}</h2><p className="lead">{a.vision}</p></div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow={a.valuesEyebrow} title={a.valuesTitle} />
          <div className="values">
            {a.values.map(([h, x], i) => <div className="value reveal" key={h} style={{ "--d": `${i * 90}ms` }}><span className="num">{String(i + 1).padStart(2, "0")}</span><h3>{h}</h3><p>{x}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section timeline-band">
        <div className="wrap">
          <SectionHead eyebrow={a.timelineEyebrow} title={a.timelineTitle} light />
          <ol className="tl">
            {a.timeline.map(([y, x], i) => <li className="reveal" key={y} style={{ "--d": `${i * 120}ms` }}><b>{y}</b><p>{x}</p></li>)}
          </ol>
        </div>
      </section>
      <Profile />
      <section className="section">
        <div className="wrap cta-row reveal">
          <div><h2>{a.ctaTitle}</h2><p className="lead">{a.ctaText}</p></div>
          <div className="cta-actions"><Link className="btn btn-gold" to={href("contact")}>{t.nav.contact} <Arrow dir={dir} /></Link><Link className="btn btn-outline" to={href("practice")}>{t.nav.practice}</Link></div>
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

/* ---------------- Avukat profili (Hakkımızda altında) ---------------- */
function Profile() {
  const { t, dir, href, fmtDate } = useI18n();
  const k = t.people.kaan; const p = t.people; const a = t.about;
  return (
    <section className="section profile" id="kaan">
      <div className="wrap">
        <SectionHead eyebrow={a.profileEyebrow} title={a.profileTitle} />
        <div className="profile-grid">
          <div className="profile-photo reveal"><Parallax from={-20} to={20} scale={1.06}><Photo src={IMAGES.people[KAAN_ID].tall} index={2} alt={k.name} /></Parallax>
            <div className="profile-contact">
              <a href={"mailto:" + OFFICE_EMAIL}>{OFFICE_EMAIL}</a>
              {PHONES.map((ph) => <a key={ph.tel} href={"tel:" + ph.tel}>{ph.label}</a>)}
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
          <div className="profile-main">
            <div className="reveal">
              <p className="role">{k.role} · {k.office}</p>
              <p className="lead">{k.tagline}</p>
              {k.bio.map((para, i) => <p key={i}>{para}</p>)}
            </div>
            <div className="profile-cols">
              <div className="reveal"><h3>{p.focus}</h3><ul className="focus-list one">{k.focusItems.map((x) => <li key={x}>{x}</li>)}</ul></div>
              <div className="reveal" style={{ "--d": "100ms" }}><h3>{p.experience}</h3><ol className="timeline">{k.experienceItems.map((x) => { const [org, ...role] = x.split(", "); return <li key={x}><b>{org}</b><span>{role.join(", ")}</span></li>; })}</ol></div>
              <div className="reveal"><h3>{p.education}</h3><ol className="timeline">{k.educationItems.map((x) => { const [org, ...role] = x.split(", "); return <li key={x}><b>{org}</b><span>{role.join(", ")}</span></li>; })}</ol></div>
              <div className="reveal" style={{ "--d": "100ms" }}>
                <h3>{p.languages}</h3><ul className="chips big">{k.languageItems.map((x) => <li key={x}>{x}</li>)}</ul>
                <h3 style={{ marginTop: 24 }}>{p.memberships}</h3><ul className="chips big">{k.membershipItems.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            </div>
            <div className="reveal">
              <h3>{p.insights}</h3>
              <ul className="insight-list">
                {posts.map((x) => { const m = t.blog.posts[x.slug]; return m ? <li key={x.slug}><Link to={href("blog", x.slug)}><time dateTime={x.date}>{fmtDate(x.date)}</time><span>{m.title}</span><Arrow dir={dir} /></Link></li> : null; })}
              </ul>
              <Link className="textlink" to={href("blog")}>{p.readAll} <Arrow dir={dir} /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Uzmanlık alanları ---------------- */
export function Practice() {
  const { t, dir, href } = useI18n();
  const { id } = useParams();
  const items = t.practice.items;
  const idx = id ? items.findIndex((x) => x.id === id) : -1;
  const alternates = idx >= 0 ? Object.fromEntries(LANGS.map((l) => [l, `/${l}/practice/${CONTENT[l].practice.items[idx].id}`])) : undefined;
  if (idx >= 0) return <PracticeDetail item={items[idx]} index={idx} alternates={alternates} />;
  return (
    <>
      <Seo route="practice" title={t.practice.title} description={t.practice.heroPractice} />
      <PageHero eyebrow={t.nav.practice} title={t.practice.title} sub={t.practice.heroPractice} />
      <section className="section">
        <div className="wrap">
          <div className="plist">
            {items.map((item, i) => (
              <Link className="prow reveal" to={href("practice", item.id)} key={item.id} style={{ "--d": `${(i % 3) * 80}ms` }}>
                <Photo className="prow-img" src={IMAGES.practice[i]} index={i} alt="" />
                <div className="prow-body">
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h2>{item.title}</h2>
                  <p>{item.intro}</p>
                  <ul className="chips">{item.points.slice(0, 4).map(([k]) => <li key={k}>{k}</li>)}</ul>
                  <span className="more">{t.practice.showMore} <Arrow dir={dir} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactSection compact />
    </>
  );
}

function PracticeDetail({ item, index, alternates }) {
  const { t, dir, href } = useI18n();
  const items = t.practice.items;
  const related = posts.filter((p) => (item.related || []).includes(p.category)).slice(0, 3);
  const [open, setOpen] = useState(0);
  return (
    <>
      <Seo route="practice" param={item.id} alternates={alternates} title={item.title} description={item.intro} />
      <section className="detail-hero">
        <Photo className="detail-cover" src={IMAGES.practice[index]} index={index} alt="" eager />
        <div className="wrap detail-head">
          <Link className="crumb" to={href("practice")}>{t.nav.practice}</Link>
          <span className="num">{String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
          <h1>{item.title}</h1>
          <p className="lead">{item.intro}</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap detail-grid">
          <div className="detail-main">
            <div className="reveal">
              <p className="eyebrow">{t.practice.services}</p>
              <div className="svc">
                {item.points.map(([k, v], i) => <div className="svc-item" key={k} style={{ "--d": `${i * 60}ms` }}><span className="num">{String(i + 1).padStart(2, "0")}</span><div><h3>{k}</h3><p>{v}</p></div></div>)}
              </div>
            </div>
            {item.faq?.length > 0 && (
              <div className="reveal faq">
                <p className="eyebrow">{t.practice.faq}</p>
                {item.faq.map(([q, a], i) => (
                  <div className={"faq-item" + (open === i ? " open" : "")} key={q}>
                    <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}><span>{q}</span><svg className="plus" width="16" height="16" viewBox="0 0 16 16"><path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.6" fill="none" /></svg></button>
                    <div className="faq-body"><div><p>{a}</p></div></div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <aside className="detail-side">
            <div className="side-card reveal">
              <h4>{t.practice.forWhom}</h4>
              <p>{item.who}</p>
              <Link className="btn btn-gold btn-sm" to={href("contact") + "?subject=" + encodeURIComponent(item.title)}>{t.practice.askCta} <Arrow dir={dir} /></Link>
            </div>
            <div className="side-card reveal">
              <h4>{t.practice.allAreas}</h4>
              <ul className="plain side-nav">
                {items.map((x, i) => <li key={x.id}><Link to={href("practice", x.id)} aria-current={i === index ? "page" : undefined}><span className="num">{String(i + 1).padStart(2, "0")}</span>{x.title}</Link></li>)}
              </ul>
            </div>
            <div className="side-card reveal">
              <h4>{t.about.profileEyebrow}</h4>
              <Link className="mini-person" to={href("about") + "#kaan"}><img src={IMAGES.people[KAAN_ID].square} alt="" width="56" height="56" loading="lazy" /><span><b>{t.people.kaan.name}</b><small>{t.people.kaan.role}</small></span></Link>
            </div>
          </aside>
        </div>
      </section>
      {related.length > 0 && (
        <section className="section insights-band">
          <div className="wrap">
            <SectionHead eyebrow={t.home.insightsEyebrow} title={t.practice.related} action={<Link className="textlink" to={href("blog")}>{t.home.allPosts} <Arrow dir={dir} /></Link>} />
            <div className="bgrid">{related.map((p, i) => <PostCard key={p.slug} post={p} index={i} />)}</div>
          </div>
        </section>
      )}
      <ContactSection presetSubject={item.title} compact />
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
              {post.author && <Link to={href("about") + "#kaan"} className="author">{post.author}</Link>}
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
              <h4>{t.about.profileEyebrow}</h4>
              <Link className="mini-person" to={href("about") + "#kaan"}>
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
function PressItem({ n }) {
  const { t, dir, fmtDate } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <article className="press reveal">
      <div className="press-media">
        <img src={n.image} alt="" loading="lazy" className="press-cover" />
        <img src={n.page} alt="" loading="lazy" className="press-page" />
      </div>
      <div className="press-body">
        <span className="tag">{t.news.pressLabel}</span>
        <time dateTime={n.date}>{fmtDate(n.date)}</time>
        <h3>{n.title}</h3>
        <p>{n.text}</p>
        <p className="source">{n.source}</p>
        <button className="btn btn-outline btn-sm" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? n.close : n.toggle} <svg className="plus" width="14" height="14" viewBox="0 0 16 16" style={{ transform: open ? "rotate(45deg)" : "none", transition: "transform .4s" }}><path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.6" fill="none" /></svg></button>
        <div className={"press-full" + (open ? " open" : "")}>
          <div>
            {n.qa.map(([q, a]) => <div className="qa" key={q}><h4>{q}</h4><p>{a}</p></div>)}
            <p className="note">{n.note}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function News() {
  const { t, dir, href, fmtDate } = useI18n();
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = t.news.items.filter((n) => n.date > today);
  const past = t.news.items.filter((n) => n.date <= today);
  const Row = ({ n, i }) => n.kind === "press" ? <PressItem n={n} /> : (
    <div className="nrow reveal" style={{ "--d": `${(i % 4) * 70}ms` }}>
      <time dateTime={n.date}>{fmtDate(n.date)}</time>
      <div><h3>{n.title}</h3><p>{n.text}</p>{n.post && <Link className="textlink" to={href("blog", n.post)}>{t.blog.readMore} <Arrow dir={dir} /></Link>}</div>
    </div>
  );
  return (
    <>
      <Seo route="news" title={t.news.title} description={t.news.sub} />
      <PageHero eyebrow={t.nav.news} title={t.news.title} sub={t.news.sub} />
      <section className="section">
        <div className="wrap news-grid">
          <div className="news">
            {upcoming.length > 0 && <><p className="eyebrow">{t.news.upcoming}</p>{upcoming.map((n, i) => <Row n={n} i={i} key={n.date + n.title} />)}<p className="eyebrow" style={{ marginTop: 40 }}>{t.news.past}</p></>}
            {past.map((n, i) => <Row n={n} i={i} key={n.date + n.title} />)}
          </div>
          <aside className="detail-side">
            <div className="side-card reveal">
              <h4>{t.home.latest}</h4>
              <ul className="plain side-nav">{posts.slice(0, 4).map((p) => <li key={p.slug}><Link to={href("blog", p.slug)}>{t.blog.posts[p.slug]?.title}</Link></li>)}</ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

/* ---------------- Kariyer ---------------- */
export function Career() {
  const { t, dir } = useI18n();
  const c = t.career;
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [result, setResult] = useState(null);
  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) { setResult({ error: t.contact.missing }); return; }
    setResult({ text: `${c.name}: ${form.name.trim()}\n${c.phone}: ${form.phone.trim()}\n${c.email}: ${form.email.trim()}` });
  };
  return (
    <>
      <Seo route="career" title={c.subtitle} description={c.heroSub} />
      <PageHero eyebrow={t.nav.career} title={c.title} sub={c.heroSub} />
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow={t.nav.career} title={c.offerTitle} />
          <div className="values">{c.offer.map(([h, x], i) => <div className="value reveal" key={h} style={{ "--d": `${i * 90}ms` }}><span className="num">{String(i + 1).padStart(2, "0")}</span><h3>{h}</h3><p>{x}</p></div>)}</div>
        </div>
      </section>
      <section className="section mv-band">
        <div className="wrap mv-grid">
          <div className="mv reveal"><p className="eyebrow">{c.lookingTitle}</p><h2>{c.lookingTitle}</h2><ul className="check">{c.looking.map((x) => <li key={x}>{x}</li>)}</ul></div>
          <div className="mv reveal" style={{ "--d": "120ms" }}><p className="eyebrow">{c.processTitle}</p><h2>{c.processTitle}</h2><ol className="proc">{c.process.map(([h, x], i) => <li key={h}><b>{String(i + 1).padStart(2, "0")}</b><div><strong>{h}</strong><p>{x}</p></div></li>)}</ol></div>
        </div>
      </section>
      <section className="section">
        <div className="wrap career-grid">
          <div>
            <p className="eyebrow">{c.openTitle}</p>
            <div className="jobs">{c.open.map(([h, meta, x]) => <div className="job reveal" key={h}><h3>{h}</h3><span className="muted">{meta}</span><p>{x}</p></div>)}</div>
          </div>
          <div className="career reveal" id="apply">
            <h2>{c.subtitle}</h2>
            <p className="lead">{c.text}</p>
            <form className="form" noValidate onSubmit={submit}>
              <div className="field"><label htmlFor="cName">{c.name}</label><input id="cName" type="text" autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
              <div className="field"><label htmlFor="cPhone">{c.phone}</label><input id="cPhone" type="tel" autoComplete="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
              <div className="field"><label htmlFor="cEmail">{c.email}</label><input id="cEmail" type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
              <div className="field"><label htmlFor="cCv">{c.cv}</label><input id="cCv" type="file" accept=".pdf,.doc,.docx" /></div>
              <div className="form-actions"><button className="btn btn-gold" type="submit">{c.cta} <Arrow dir={dir} /></button></div>
              {result?.error && <div className="notice"><p>{result.error}</p></div>}
              {result?.text && <ComposedNotice text={result.text} subject={c.subtitle} success={c.success} />}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const subject = new URLSearchParams(window.location.search).get("subject") || "";
  const [open, setOpen] = useState(-1);
  return (
    <>
      <Seo route="contact" title={c.title} description={c.heroSub} />
      <PageHero eyebrow={t.nav.contact} title={c.title} sub={c.heroSub} />
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="steps compact-steps">
            {c.quick.map(([h, x], i) => <div className="step reveal" key={h} style={{ "--d": `${i * 100}ms` }}><span className="step-num">{String(i + 1).padStart(2, "0")}</span><i className="step-line" style={{ transform: "none" }} /><h3>{h}</h3><p>{x}</p></div>)}
          </div>
        </div>
      </section>
      <ContactSection presetSubject={subject} compact />
      <section className="section">
        <div className="wrap faq-wrap">
          <SectionHead eyebrow={t.practice.faq} title={c.faqTitle} />
          <div className="faq reveal">
            {c.faq.map(([q, a], i) => (
              <div className={"faq-item" + (open === i ? " open" : "")} key={q}>
                <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}><span>{q}</span><svg className="plus" width="16" height="16" viewBox="0 0 16 16"><path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.6" fill="none" /></svg></button>
                <div className="faq-body"><div><p>{a}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
