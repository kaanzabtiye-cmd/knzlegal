// Görseller: public/images/ altına koyun. Dosya yoksa lacivert/bronz degrade otomatik kullanılır.
// Uzmanlık alanı görselleri sıraya göre (tüm dillerde sıra aynı): 1 şirketler, 2 banka-finans, 3 uluslararası ticaret,
// 4 gayrimenkul, 5 tahkim, 6 icra-iflas, 7 sürekli danışmanlık.
export const IMAGES = {
  hero: "/images/hero.jpg",
  about: "/images/about.jpg",
  practice: [1, 2, 3, 4, 5, 6, 7].map((i) => `/images/practice-${i}.jpg`),
  posts: {
    "regulasyon-mu-inovasyon-mu-tcmb-papara-ve-ininal-kararlari": "/images/post-regulasyon-inovasyon.jpg",
    "paparayi-idare-hukuku-yedi": "/images/post-idare-hukuku.jpg",
    "papara-karari-fintech-regulasyonunun-yeni-esigi": "/images/post-papara-karari.jpg",
    "yatirim-anlasmalari-devlet-egemenligini-sinirliyor-mu": "/images/post-yatirim-anlasmalari.jpg",
  },
};
// Fotoğraf gelmeden önce kullanılan degradeler (indeks bazlı, birbirinden ayırt edilebilir)
export const FALLBACKS = [
  "linear-gradient(135deg,#0E1E3C 0%,#2B3548 60%,#4A3F2E 100%)",
  "linear-gradient(135deg,#16294F 0%,#1B2233 55%,#6B5433 100%)",
  "linear-gradient(135deg,#1B2233 0%,#0E1E3C 50%,#8A6A3E 100%)",
  "linear-gradient(135deg,#2B3548 0%,#0E1E3C 60%,#3E3324 100%)",
  "linear-gradient(135deg,#0E1E3C 0%,#3A4B69 55%,#B08A4E 100%)",
  "linear-gradient(135deg,#121B2E 0%,#2B3548 50%,#5C4A2E 100%)",
  "linear-gradient(135deg,#0E1E3C 0%,#16294F 45%,#D4B27C 100%)",
];
