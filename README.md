# KNZ Legal – çok dilli web sitesi

knzlegal.com'un mevcut tasarımı ve içeriğiyle, beş dilde (TR / EN / FR / AR / RU) çalışan React + Vite sitesi.
Arapça sağdan sola (RTL) dizilir; her dilin kendi adresi vardır (`/tr/...`, `/en/...`, `/fr/...`, `/ar/...`, `/ru/...`);
Google için `hreflang` etiketleri ve `sitemap.xml` otomatik üretilir.

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
  i18n.jsx            dil bağlamı, adres üretimi, SEO/hreflang
  App.jsx             rotalar (/:lang/...)
  components/Layout   üst menü, dil seçici, footer, çerez çubuğu
  components/Shared   kartlar, makale gövdesi, iletişim bölümü
  pages/index.jsx     Ana sayfa, Hakkımızda, Uzmanlık, Blog, Makale, Haberler, Kariyer, İletişim
  styles.css          tasarım (siyah/beyaz, Montserrat + Roboto, Arapça için Tajawal)
scripts/sitemap.mjs   build'de sitemap.xml üretir
```

## Hukuki not

Footer'da TBB Reklam Yasağı Yönetmeliği'ne uygun bilgilendirme metni ve çerez tercihi (kabul/ret) bulunur.
KVKK aydınlatma metni ve çerez politikası sayfalarını eklemek isterseniz `pages/index.jsx`'e iki statik sayfa eklemeniz yeterli.

## Görseller (public/images/)

| Dosya | Nerede görünür | Önerilen boyut |
|---|---|---|
| `hero.jpg` | Ana sayfa arka planı | 1920×1080, koyu tonlu bir bina/şehir/ofis fotoğrafı |
| `about.jpg` | Hakkımızda | 1200×900 |
| `practice-1.jpg` … `practice-7.jpg` | Uzmanlık kartları (sıra: şirketler, banka-finans, ticaret, gayrimenkul, tahkim, icra-iflas, sürekli danışmanlık) | 1200×675 |
| `post-<slug>.jpg` | Makale kartları (adlar `src/content/images.js` içinde) | 1200×525 |

Dosya yoksa lacivert/bronz degrade otomatik kullanılır; site bozulmaz. Ücretsiz ve ticari kullanıma açık kaynaklar: unsplash.com, pexels.com.
