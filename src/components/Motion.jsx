import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

const EASE = [0.2, 0.7, 0.2, 1];

/** Başlığı kelime kelime yükselterek getirir. */
export function Words({ text, as: Tag = "h1", className, delay = 0, stagger = 0.06 }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const MTag = motion[Tag] || motion.h1;
  return (
    <MTag className={className} initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: delay } } }} aria-label={text}>
      {words.map((w, i) => (
        <span className="word" key={i} aria-hidden="true">
          <motion.span style={{ display: "inline-block" }} variants={{ hidden: { y: "110%", opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: .9, ease: EASE } } }}>{w}</motion.span>
        </span>
      ))}
    </MTag>
  );
}

/** Görünür olunca yukarıdan belirir; children için stagger. */
export function Rise({ children, delay = 0, y = 26, className, as: Tag = "div", once = true, ...rest }) {
  const MTag = motion[Tag] || motion.div;
  return (
    <MTag className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once, margin: "0px 0px -8% 0px" }} transition={{ duration: .9, ease: EASE, delay }} {...rest}>
      {children}
    </MTag>
  );
}

export function Stagger({ children, className, step = 0.08, as: Tag = "div" }) {
  const MTag = motion[Tag] || motion.div;
  return (
    <MTag className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: "0px 0px -8% 0px" }} variants={{ show: { transition: { staggerChildren: step } } }}>
      {children}
    </MTag>
  );
}
export const item = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: .85, ease: EASE } } };
export function Item({ children, className, as: Tag = "div", ...rest }) {
  const MTag = motion[Tag] || motion.div;
  return <MTag className={className} variants={item} {...rest}>{children}</MTag>;
}

/** Kaydırmayla hafif paralaks. */
export function Parallax({ children, className, from = -40, to = 40, scale = 1 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [from, to]);
  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div style={{ y, scale, height: "100%" }}>{children}</motion.div>
    </div>
  );
}

/** Sayı animasyonu: "5", "7", "2" gibi değerler sayarak gelir; "ICC · LCIA" gibi metinler olduğu gibi kalır. */
export function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const num = /^\d+$/.test(value) ? parseInt(value, 10) : null;
  const [n, setN] = useState(num === null || reduce ? value : 0);
  useEffect(() => {
    if (num === null || reduce || !inView) return;
    let raf; const start = performance.now(); const dur = 1400;
    const tick = (t) => { const p = Math.min(1, (t - start) / dur); const e = 1 - Math.pow(1 - p, 3); setN(Math.round(e * num)); if (p < 1) raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, num, reduce]);
  return <b ref={ref}>{num === null ? value : n}</b>;
}

/** Kesintisiz akan şerit. */
export function Marquee({ items, speed = 38 }) {
  const list = [...items, ...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" style={{ "--dur": `${speed}s` }}>
        {list.map((x, i) => <span key={i} className="marquee-item"><i /> {x}</span>)}
      </div>
    </div>
  );
}

/** Fare ile hafif eğilen kart (yalnızca ince işaretçi). */
export function Tilt({ children, className, max = 6, ...rest }) {
  const ref = useRef(null);
  const rx = useMotionValue(0), ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 160, damping: 18 }), sry = useSpring(ry, { stiffness: 160, damping: 18 });
  const reduce = useReducedMotion();
  const fine = typeof window !== "undefined" && window.matchMedia?.("(pointer: fine)").matches;
  const onMove = (e) => {
    if (!fine || reduce) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
    ry.set(px * max * 2); rx.set(-py * max * 2);
  };
  const reset = () => { rx.set(0); ry.set(0); };
  return (
    <motion.div ref={ref} className={className} style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }} onMouseMove={onMove} onMouseLeave={reset} {...rest}>
      {children}
    </motion.div>
  );
}

/** İşaretçiyi izleyen yumuşak altın ışık (masaüstü). */
export function GlowCursor() {
  const x = useMotionValue(-400), y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 80, damping: 20 }), sy = useSpring(y, { stiffness: 80, damping: 20 });
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!window.matchMedia?.("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setOn(true);
    const mv = (e) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("pointermove", mv, { passive: true });
    return () => window.removeEventListener("pointermove", mv);
  }, [x, y]);
  if (!on) return null;
  return <motion.div className="glow" style={{ x: sx, y: sy }} aria-hidden="true" />;
}

/** Hero üzerinde süzülen altın düğüm ağı (canvas). */
export function Constellation({ className, density = 70, color = "212,178,124" }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = c.getContext("2d");
    let w, h, raf, pts = [], dpr = Math.min(2, window.devicePixelRatio || 1);
    const resize = () => {
      const r = c.getBoundingClientRect(); w = r.width; h = r.height;
      c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(density * (w / 1440)) + 20;
      pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18, r: Math.random() * 1.4 + .4 }));
    };
    const ro = new ResizeObserver(resize); ro.observe(c); resize();
    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) loop(); }); io.observe(c);
    const loop = () => {
      if (!visible) return;
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1; }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j]; const dx = a.x - b.x, dy = a.y - b.y; const d = dx * dx + dy * dy;
          if (d < 130 * 130) { ctx.strokeStyle = `rgba(${color},${(1 - Math.sqrt(d) / 130) * .22})`; ctx.lineWidth = .7; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        ctx.fillStyle = `rgba(${color},.7)`; ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
  }, [density, color]);
  return <canvas ref={ref} className={className} aria-hidden="true" />;
}

/** Dönen enlem-boylam ızgarası ve şehir düğümleri: "nerede çalışıyoruz". */
export function Globe({ cities, dir = "ltr" }) {
  // Nokta konumları (yüzde): Ankara, Londra, Batı Afrika, Körfez, Doğu Afrika
  const pos = [[58, 40], [34, 26], [40, 62], [70, 52], [62, 72]];
  const reduce = useReducedMotion();
  return (
    <div className="globe">
      <svg viewBox="0 0 600 600" className="globe-svg" aria-hidden="true">
        <defs>
          <radialGradient id="gfill" cx="40%" cy="35%" r="70%"><stop offset="0" stopColor="rgba(212,178,124,.16)" /><stop offset="1" stopColor="rgba(212,178,124,0)" /></radialGradient>
          <clipPath id="gclip"><circle cx="300" cy="300" r="270" /></clipPath>
        </defs>
        <circle cx="300" cy="300" r="270" fill="url(#gfill)" stroke="rgba(212,178,124,.55)" strokeWidth="1" />
        <g clipPath="url(#gclip)" stroke="rgba(212,178,124,.28)" fill="none" strokeWidth="1">
          {[-200, -120, -60, 0, 60, 120, 200].map((y) => <ellipse key={"la" + y} cx="300" cy={300 + y} rx={Math.sqrt(270 * 270 - y * y)} ry={Math.sqrt(270 * 270 - y * y) * .22} />)}
          <motion.g animate={reduce ? undefined : { x: [0, 540] }} transition={{ duration: 38, ease: "linear", repeat: Infinity }}>
            {Array.from({ length: 20 }, (_, i) => -540 + i * 54).map((x) => <ellipse key={"lo" + x} cx={300 + x} cy="300" rx={Math.max(2, 270 * Math.abs(Math.cos(((x + 270) / 540) * Math.PI)))} ry="270" />)}
          </motion.g>
        </g>
        {pos.map(([x, y], i) => {
          const px = (x / 100) * 600, py = (y / 100) * 600;
          return (
            <g key={i}>
              {i > 0 && (() => { const x0 = (pos[0][0] / 100) * 600, y0 = (pos[0][1] / 100) * 600; const mx = (x0 + px) / 2, my = (y0 + py) / 2; const dx = px - x0, dy = py - y0; const cx = mx - dy * .28, cy = my + dx * .28; return <motion.path d={`M${x0} ${y0} Q ${cx} ${cy} ${px} ${py}`} fill="none" stroke="rgba(212,178,124,.75)" strokeWidth="1.2" strokeDasharray="4 6" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, delay: .3 + i * .25, ease: EASE }} />; })()}
              <motion.circle cx={px} cy={py} r="5" fill="#D4B27C" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: .2 + i * .25, type: "spring", stiffness: 200 }} />
              {!reduce && <circle cx={px} cy={py} r="5" fill="none" stroke="#D4B27C" className="pulse" style={{ animationDelay: `${i * .6}s` }} />}
            </g>
          );
        })}
      </svg>
      <ul className="globe-list">
        {cities.map(([name, role], i) => <Item as="li" key={name}><b>{name}</b><span>{role}</span></Item>)}
      </ul>
    </div>
  );
}

/** Makale okuma ilerleme çizgisi. */
export function ReadingBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return <motion.div className="readbar" style={{ scaleX }} aria-hidden="true" />;
}

export { motion, EASE };

/* ===================== Kaydırmaya bağlı sahneler (Apple tarzı) ===================== */

export function useDesktop(min = 900) {
  const [d, setD] = useState(() => typeof window !== "undefined" && window.innerWidth >= min && !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${min}px)`); const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const f = () => setD(mq.matches && !rm.matches); mq.addEventListener("change", f); rm.addEventListener("change", f); f();
    return () => { mq.removeEventListener("change", f); rm.removeEventListener("change", f); };
  }, [min]);
  return d;
}

/** Hero: kaydırdıkça görsel küçülüp çerçeveye oturur, başlık silinir, yerine ikinci cümle gelir. */
export function ScrollHero({ media, text, caption, enabled = true }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, .78]);
  const radius = useTransform(scrollYProgress, [0, 1], [0, 28]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const textO = useTransform(scrollYProgress, [0, .32], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, .32], [0, -60]);
  const capO = useTransform(scrollYProgress, [.45, .8], [0, 1]);
  const capY = useTransform(scrollYProgress, [.45, .8], [30, 0]);
  const shade = useTransform(scrollYProgress, [0, 1], [0, .35]);
  if (!enabled) return <section className="hero">{media}<div className="wrap hero-content">{text}</div></section>;
  return (
    <section className="shero" ref={ref}>
      <div className="shero-sticky">
        <motion.div className="shero-media" style={{ scale, borderRadius: radius, y }}>
          {media}
          <motion.div className="shero-dim" style={{ opacity: shade }} />
        </motion.div>
        <motion.div className="wrap hero-content shero-text" style={{ opacity: textO, y: textY }}>{text}</motion.div>
        <motion.div className="wrap shero-caption" style={{ opacity: capO, y: capY }}>{caption}</motion.div>
      </div>
    </section>
  );
}

/** Metin kaydırdıkça kelime kelime dolar (manifesto). */
export function WordFill({ text, eyebrow, enabled = true, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.5"] });
  const words = text.split(" ");
  if (!enabled) return <section className={"wordfill static " + className}><div className="wrap"><p className="eyebrow">{eyebrow}</p><p className="wordfill-text">{text}</p></div></section>;
  return (
    <section className={"wordfill " + className} ref={ref}>
      <div className="wordfill-sticky">
        <div className="wrap">
          <p className="eyebrow">{eyebrow}</p>
          <p className="wordfill-text">
            {words.map((w, i) => <Word key={i} w={w} i={i} n={words.length} p={scrollYProgress} />)}
          </p>
        </div>
      </div>
    </section>
  );
}
function Word({ w, i, n, p }) {
  const start = i / n, end = Math.min(1, start + 1.6 / n);
  const opacity = useTransform(p, [start, end], [.14, 1]);
  return <motion.span style={{ opacity }}>{w} </motion.span>;
}

/** Sabitlenen uzmanlık sahnesi: solda değişen metin, sağda çapraz geçişli görseller. */
export function PinnedShowcase({ items, images, eyebrow, title, moreLabel, href, dir, enabled = true, children }) {
  const ref = useRef(null);
  const n = items.length;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  useEffect(() => scrollYProgress.on("change", (v) => setActive(Math.min(n - 1, Math.max(0, Math.floor(v * n))))), [scrollYProgress, n]);
  if (!enabled) return children;
  const it = items[active];
  return (
    <section className="pinned" ref={ref} style={{ height: `${n * 70 + 30}vh` }}>
      <div className="pinned-sticky">
        <div className="wrap pinned-grid">
          <div className="pinned-text">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="pinned-title">{title}</h2>
            <div className="pinned-index">{items.map((_, i) => <button key={i} type="button" aria-current={i === active} aria-label={items[i].title} onClick={() => { const r = ref.current.getBoundingClientRect(); window.scrollTo({ top: window.scrollY + r.top + (i + .5) / n * (r.height - window.innerHeight), behavior: "smooth" }); }} />)}</div>
            <div className="pinned-item" key={active}>
              <motion.span className="num" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>{String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</motion.span>
              <motion.h3 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease: EASE }}>{it.title}</motion.h3>
              <motion.ul initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: .06, delayChildren: .1 } } }}>
                {it.points.slice(0, 4).map(([k]) => <motion.li key={k} variants={{ hidden: { opacity: 0, x: dir === "rtl" ? 16 : -16 }, show: { opacity: 1, x: 0 } }}>{k}</motion.li>)}
              </motion.ul>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}><Link to={href(it.id)} className="textlink">{moreLabel}</Link></motion.div>
            </div>
          </div>
          <div className="pinned-media">
            {images.map((src, i) => (
              <motion.div key={src} className="pinned-img" animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.06, zIndex: i === active ? 2 : 1 }} transition={{ duration: .9, ease: EASE }}>
                <img src={src} alt="" loading={i < 2 ? "eager" : "lazy"} />
              </motion.div>
            ))}
            <div className="pinned-glass"><span>{String(active + 1).padStart(2, "0")}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Dikey kaydırmayla yatay akan şerit (makale kartları). */
export function HorizontalRail({ children, enabled = true, head }) {
  const ref = useRef(null); const track = useRef(null);
  const [dist, setDist] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  useEffect(() => {
    const m = () => { if (track.current) setDist(Math.max(0, track.current.scrollWidth - window.innerWidth + 80)); };
    m(); window.addEventListener("resize", m); return () => window.removeEventListener("resize", m);
  }, [children]);
  const rtl = typeof document !== "undefined" && document.documentElement.dir === "rtl";
  const xr = useTransform(scrollYProgress, [0, 1], [0, dist]);
  if (!enabled) return <section className="section insights"><div className="wrap">{head}<div className="bgrid">{children}</div></div></section>;
  return (
    <section className="rail" ref={ref} style={{ height: `calc(100vh + ${dist}px)` }}>
      <div className="rail-sticky">
        <div className="wrap">{head}</div>
        <motion.div className="rail-track" ref={track} style={{ x: rtl ? xr : x }}>{children}</motion.div>
      </div>
    </section>
  );
}

/** Arka planda yavaşça kayan altın halkalar ve çizgiler. */
export function Drift({ className = "" }) {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <div className={"drift " + className} aria-hidden="true">
      <motion.span className="ring r1" animate={{ y: [0, -40, 0], x: [0, 20, 0], rotate: [0, 8, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
      <motion.span className="ring r2" animate={{ y: [0, 30, 0], x: [0, -30, 0] }} transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }} />
      <motion.span className="line l1" animate={{ x: ["-10%", "10%", "-10%"] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }} />
    </div>
  );
}
