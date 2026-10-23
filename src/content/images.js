// Görseller public/images/ altında. Kaynak fotoğraflar: Beyza Horozaloğlu (siyah-beyaz mimari seri), sıcak tonlama site için yapıldı.
// Uzmanlık alanı görselleri sıraya göre (tüm dillerde sıra aynı): 1 şirketler, 2 banka-finans, 3 uluslararası ticaret,
// 4 gayrimenkul, 5 tahkim, 6 icra-iflas, 7 sürekli danışmanlık.
export const IMAGES = {
  hero: "/images/hero.jpg",
  heroMobile: "/images/hero-mobile.jpg",
  about: "/images/about.jpg",
  practice: [1, 2, 3, 4, 5, 6, 7].map((i) => `/images/practice-${i}.jpg`),
  post: (slug) => `/images/post-${slug}.jpg`,
  people: { "kaan-zabtiyeogullari": { square: "/images/kaan.jpg", tall: "/images/kaan-tall.jpg" } },
};
// Fotoğraf yüklenemezse kullanılan degradeler (indeks bazlı)
export const FALLBACKS = [
  "linear-gradient(135deg,#17191E 0%,#2E3139 60%,#6B5433 100%)",
  "linear-gradient(135deg,#1B1E25 0%,#30333B 55%,#8A6A3E 100%)",
  "linear-gradient(135deg,#15171C 0%,#262930 50%,#B08A4E 100%)",
  "linear-gradient(135deg,#2A2D34 0%,#17191E 60%,#4A3F2E 100%)",
  "linear-gradient(135deg,#17191E 0%,#3A3D45 55%,#D4B27C 100%)",
  "linear-gradient(135deg,#121418 0%,#2E3139 50%,#5C4A2E 100%)",
  "linear-gradient(135deg,#17191E 0%,#1F2229 45%,#B08A4E 100%)",
];
