// IndexNow hazırlığı (Bing, Yandex ve protokolü destekleyen diğer arama motorları için).
// Build'in son adımıdır; arama motoruna kendisi istek atmaz, yalnızca iki dosya yazar:
//   dist/indexnow-manifest.json  her sayfanın içerik özeti (bir sonraki build bununla karşılaştırır)
//   dist/indexnow.json           bu yayında içeriği değişen ya da yeni eklenen adresler
// Bildirimi .github/workflows/indexnow.yml yapar: Vercel yayını canlıya aldıktan sonra
// canlı sitedeki indexnow.json'u okuyup api.indexnow.org'a gönderir. Böylece arama motoru
// sayfayı taramaya geldiğinde yeni sürüm gerçekten yayındadır.
// Bu betik build'i asla düşürmez: bir sorun olursa boş liste yazar ve uyarı verir.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { LANGS, SITE_URL, allPages } from "../src/seo.js";

const KEY = "83796056717c34921ee9dbd3b2fd7f5f"; // public/<KEY>.txt dosyasıyla aynı olmalı (IndexNow sahiplik anahtarı; gizli değildir)
const DIST = "dist";
const PREVIOUS = process.env.INDEXNOW_PREVIOUS || SITE_URL; // bir önceki yayının adresi (test için değiştirilebilir)
const isProduction = process.env.VERCEL_ENV === "production" || process.env.INDEXNOW_FORCE === "1";

const content = Object.fromEntries(LANGS.map((l) => [l, JSON.parse(fs.readFileSync(`src/content/${l}.json`, "utf8"))]));

// Sayfanın özeti: derlenen JS/CSS dosyalarının adları her build'de değiştiği için özetin dışında tutulur;
// yalnızca başlık, açıklama, yapısal veri ve sayfa içeriği değiştiğinde özet değişir.
const digest = (html) => crypto.createHash("sha1")
  .update(html.replace(/\/assets\/[^"']+/g, "/assets/x"))
  .digest("hex").slice(0, 16);

const manifest = {};
for (const set of allPages(content)) for (const l of LANGS) {
  const seo = set[l];
  manifest[seo.canonical] = digest(fs.readFileSync(path.join(DIST, seo.path, "index.html"), "utf8"));
}
fs.writeFileSync(path.join(DIST, "indexnow-manifest.json"), JSON.stringify(manifest));

let urlList = [];
let note = "önizleme ya da yerel build: bildirim listesi boş";
if (isProduction) {
  try {
    const res = await fetch(`${PREVIOUS}/indexnow-manifest.json`, { signal: AbortSignal.timeout(10000), headers: { "cache-control": "no-cache" } });
    if (res.status === 404) {
      urlList = Object.keys(manifest); // ilk kurulum: bütün sayfalar bildirilir
      note = "önceki özet yok (ilk kurulum): bütün sayfalar";
    } else if (res.ok) {
      const before = await res.json();
      urlList = Object.keys(manifest).filter((u) => before[u] !== manifest[u]);
      note = "önceki yayına göre değişen sayfalar";
    } else {
      note = `önceki özet okunamadı (HTTP ${res.status}): liste boş bırakıldı`;
    }
  } catch (e) {
    note = `önceki özet okunamadı (${e.name}): liste boş bırakıldı`;
  }
}

const host = new URL(SITE_URL).host;
fs.writeFileSync(path.join(DIST, "indexnow.json"), JSON.stringify({
  commit: process.env.VERCEL_GIT_COMMIT_SHA || null,
  host, key: KEY, keyLocation: `${SITE_URL}/${KEY}.txt`, urlList,
}));
console.log(`indexnow: ${urlList.length} adres (${note})`);
