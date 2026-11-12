# KNZ Legal – çok dilli web sitesi

knzlegal.com'un mevcut tasarımı ve içeriğiyle, beş dilde (TR / EN / FR / AR / RU) çalışan React + Vite sitesi.
Arapça sağdan sola (RTL) dizilir; her dilin kendi adresi vardır (`/tr/...`, `/en/...`, `/fr/...`, `/ar/...`, `/ru/...`);
Google için `hreflang` etiketleri ve `sitemap.xml` otomatik üretilir.

## Hareket katmanı

`src/components/Motion.jsx`: framer-motion tabanlı bileşenler. `Words` (hero başlığı kelime kelime), `Rise`/`Stagger`/`Item` (kaydırınca belirme),
`Parallax`, `Counter` (sayaçlar), `Marquee` (akan şerit), `Tilt` (kartlarda fare eğimi), `GlowCursor` (masaüstünde altın ışık),
`Constellation` (hero üzerinde canvas düğüm ağı), `Globe` (nerede çalışıyoruz küresi), `ReadingBar` (makale okuma çizgisi).
Hepsi `prefers-reduced-motion` ayarına saygı duyar. Sayfa geçişleri `Layout.jsx` içinde `AnimatePresence` ile.

## Hızlı başlangıç

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/ klasörünü üretir (sitemap dahil)
```

Node.js 18+ gerekir.

## Yayına alma (ücretsiz)

**Vercel** (önerilen): vercel.com → "Add New Project" → bu klasörü (veya GitHub deposunu) seçin → Deploy.
`vercel.json` dosyası tüm adresleri uygulamaya yönlendirir. Ardından Settings → Domains → `knzlegal.com` ekleyin.
Vercel size bir DNS kaydı verir; GoDaddy → DNS → `A` kaydını (`@`) ve `CNAME www` kaydını Vercel'in verdiği değerlerle değiştirin.
Alan adı ve e-posta GoDaddy'de kalır; sadece web trafiği Vercel'e gider.

**Netlify**: netlify.com → "Add new site" → klasörü sürükleyin ya da depoyu bağlayın. `public/_redirects` yönlendirmeyi halleder.

## İçeriği düzenleme

Bütün metinler `src/content/` altında:

| Dosya | İçerik |
|---|---|
| `tr.json`, `en.json`, `fr.json`, `ar.json`, `ru.json` | Menü, ana sayfa, Hakkımızda, 7 uzmanlık alanı, haberler, kariyer, iletişim, footer, makale başlık+özetleri |
| `posts.js` | Makale gövdeleri (Türkçe). `## ` ara başlık, `- ` madde, `> ` alıntı, düz satır paragraf |

**Yeni makale eklemek:**
1. `posts.js` içine yeni bir nesne ekleyin (`slug`, `date`, `category`, `lang`, `body`). En üstteki nesne en yeni sayılır.
2. Beş JSON dosyasında `blog.posts` altına aynı `slug` ile `title` ve `summary` ekleyin (özet çeviri yeterli; gövde Türkçe kalabilir, diğer dillerde "Bu yazı Türkçe yayımlanmıştır" notu otomatik çıkar).
3. Yeni kategori için `blog.categories` altına ekleyin.

**Uzmanlık alanları:** her JSON'da `practice.items` sırası aynı olmalı (dil değiştirince aynı alan açık kalır). `id` adres çubuğunda görünür.

**Yeni dil eklemek:** `src/content/xx.json` oluşturun (tr.json'u kopyalayıp çevirin), `src/i18n.jsx` içindeki `LANGS` dizisine ekleyin; RTL bir dilse JSON'da `"dir": "rtl"` yazın.

## Görseller

- `public/logo.png` – mevcut logo (400 px). Daha yüksek çözünürlüklü aslını koyarsanız üzerine yazın.
- `public/hero.jpg` – ana sayfa arka plan fotoğrafı. Dosya yoksa gri desenli arka plan kullanılır; mevcut sitedeki bina fotoğrafını bu adla koyun.
- Makale kartlarında fotoğraf yerine kategori etiketi gösterilir; isterseniz `PostCard` bileşenine `post.image` alanı eklenebilir.

## Formlar

Site statik barındırıldığı için iletişim ve kariyer formları mesajı hazırlayıp **kopyalatır / posta uygulamasını açar**.
Gerçek gönderim isterseniz üç seçenek:
- **Formspree** (ücretsiz, 50 gönderim/ay): formspree.io'da form oluşturun, `src/components/Shared.jsx` içindeki `ContactSection` gönderiminde `fetch("https://formspree.io/f/XXXX", {method:"POST", body: FormData})` çağırın.
- **Netlify Forms**: Netlify'da barındırıyorsanız `<form netlify>` özniteliği yeterli.
- Kendi API'niz (Cloudflare Worker / Vercel Function) ile e-posta gönderimi.

## Yapı

```
src/
  i18n.jsx            dil bağlamı, <Seo> bileşeni (sayfa içi gezinmede etiketleri günceller)
  App.jsx             rotalar (/:lang/...)
  components/Layout   üst menü, dil seçici, footer, çerez çubuğu
  components/Shared   kartlar, makale gövdesi, iletişim bölümü
  pages/index.jsx     Ana sayfa, Hakkımızda, Uzmanlık, Blog, Makale, Haberler, Kariyer, İletişim
  styles.css          tasarım (fildişi/antrasit/bronz; Cormorant Garamond + Manrope, Arapça için Noto Naskh/Tajawal)
  seo.js              sayfa bazlı SEO verisinin tek kaynağı (başlık, açıklama, canonical, hreflang)
  entry-server.jsx    build sırasında sayfaları HTML'e çeviren sunucu girişi (tarayıcıya gitmez)
scripts/sitemap.mjs   build'de sitemap.xml üretir
scripts/prerender.mjs build sonrası her adres için hazır HTML yazar (kendi <head> etiketleri + sayfa içeriği)
```

## SEO ve hazır HTML (prerender)

Her sayfanın başlığı, açıklaması, canonical adresi ve hreflang etiketleri `src/seo.js` içindeki `pageSeo` fonksiyonundan gelir.
`npm run build` dört iş yapar: `sitemap.xml` üretir, siteyi derler, sunucu girişini (`src/entry-server.jsx`) derler,
ardından `scripts/prerender.mjs` her adres için (`dist/en/index.html`, `dist/en/about/index.html` ...) hazır bir HTML dosyası yazar.
Bu dosyada hem o sayfanın `<head>` etiketleri hem de içeriğin kendisi (başlıklar, metin, bağlantılar) bulunur; arama motorları
ve JavaScript çalıştırmayan botlar her şeyi ilk yanıtta görür. Tarayıcıda JavaScript yüklenince uygulama aynı içeriği kendi çizer.

Dikkat edilecekler:
- Yeni makale ya da uzmanlık alanı eklendiğinde ek bir şey yapmak gerekmez.
- Yeni bir sayfa türü eklerseniz `ROUTES` listesine ve `pageSeo` içine ekleyin. Site adresi `SITE_URL` (www'li biçim) tek yerde tanımlıdır.
- Bileşenler build sırasında Node'da da çalışır: `window`, `document`, `localStorage` yalnızca `useEffect` içinde ya da
  `typeof window !== "undefined"` kontrolüyle kullanılmalı. Aksi halde build hata verir.
- Hazır içerik `<div data-prerendered>` içindedir; giriş animasyonları uygulama devralana kadar bekler (`styles.css`), böylece iki kez oynamaz.

## IndexNow (Bing, Yandex)

Yeni bir yazı yayınlandığında ya da bir sayfa değiştiğinde arama motorlarına otomatik haber verilir:
1. Build sonunda `scripts/indexnow.mjs` her sayfanın içerik özetini çıkarır, canlıdaki bir önceki özetle karşılaştırır ve
   değişen adresleri `indexnow.json` dosyasına yazar.
2. Vercel yayını canlıya alınca `.github/workflows/indexnow.yml` bu listeyi `api.indexnow.org` adresine gönderir.
   Çalışmaları GitHub → Actions → IndexNow altında görebilirsiniz.

Sahiplik anahtarı `public/83796056717c34921ee9dbd3b2fd7f5f.txt` dosyasıdır (gizli değildir; silinirse bildirimler reddedilir).
Google IndexNow kullanmaz; Google için `sitemap.xml` ve Search Console yeterlidir.

## Hukuki not

Footer'da TBB Reklam Yasağı Yönetmeliği'ne uygun bilgilendirme metni ve çerez tercihi (kabul/ret) bulunur.
KVKK aydınlatma metni ve çerez politikası sayfalarını eklemek isterseniz `pages/index.jsx`'e iki statik sayfa eklemeniz yeterli.

## Ekip sayfası

`/:lang/people` ve `/:lang/people/kaan-zabtiyeogullari`. Metinler her JSON'da `people.kaan` altında (bio, focusItems, educationItems,
experienceItems, languageItems, membershipItems). Yeni kişi eklemek için `pages/index.jsx` içindeki `Person` bileşenini kişi id'sine göre genelleştirin.

## Görseller (public/images/)

| Dosya | Nerede görünür | Önerilen boyut |
|---|---|---|
| `hero.jpg` | Ana sayfa arka planı | 1920×1080, koyu tonlu bir bina/şehir/ofis fotoğrafı |
| `about.jpg` | Hakkımızda | 1200×900 |
| `practice-1.jpg` … `practice-7.jpg` | Uzmanlık kartları (sıra: şirketler, banka-finans, ticaret, gayrimenkul, tahkim, icra-iflas, sürekli danışmanlık) | 1200×675 |
| `post-<slug>.jpg` | Makale kapakları (`IMAGES.post(slug)`) | 1200×630 |
| `kaan.jpg`, `kaan-tall.jpg` | Ekip sayfası ve makale yan kutusu | 900×900, 900×1200 |

Mevcut görseller Beyza Horozaloğlu'nun siyah-beyaz mimari fotoğraflarından sıcak tonlamayla üretildi; üretim betiği depoda değil,
yeni makale için kapak gerekirse aynı fotoğraflardan farklı bir kadraj kesip `post-<slug>.jpg` adıyla koymak yeterli.
Dosya yoksa degrade otomatik kullanılır; site bozulmaz.
