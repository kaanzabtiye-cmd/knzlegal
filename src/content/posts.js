// Blog yazıları. Gövde metinleri Türkçe (mevcut sitedeki gibi); başlık ve özetler
// her dilin JSON dosyasındaki blog.posts[slug] altında çevrilir.
// Gövde biçimi: satır başı "## " = ara başlık, "- " = madde, "> " = alıntı, diğer satırlar = paragraf.
export const posts = [
  {
    slug: "kayyim-atanan-tasarruf-finansman-sirketinde-musterinin-durumu",
    date: "2026-11-18",
    category: "bankacilik",
    lang: "tr",
    author: "Kaan Zabtiyeoğulları",
    body: `## 1. Giriş

İstanbul Cumhuriyet Başsavcılığı'nın 17 Kasım 2026 tarihli açıklamasına göre, sermaye piyasalarına ilişkin fon soruşturması kapsamında dört şirkete Tasarruf Mevduatı Sigorta Fonu (TMSF) kayyım olarak atanmıştır. Bu şirketlerden biri, "İyi Finans" markasıyla faaliyet gösteren Adil Tasarruf Finansman A.Ş.'dir. Aynı gruptaki Adil Katılım Bankası hakkında ayrıca Bankacılık Kanunu m.71 uyarınca Fona devir kararı alınmış; tasarruf finansman şirketi bakımından ise kamuya açıklanmış bir Bankacılık Düzenleme ve Denetleme Kurulu (Kurul) kararı bulunmamaktadır.

Bu yazı, kayyım atanan bir tasarruf finansman şirketinde müşterinin hukuki durumunu incelemektedir. Yazının temel savı şudur: kayyım atanması şirketi kimin yönettiğini değiştirir, müşteriyle yapılmış sözleşmeleri değiştirmez. Müşterinin birikimi mevduat değildir ve sigorta kapsamında bulunmaz; koruması 6361 sayılı Kanun'un tasarruf fon havuzuna ilişkin ayrılık kuralına dayanır. Müşterinin önündeki seçenekler ve bunların maliyeti, sözleşmenin hangi aşamada olduğuna göre değişir.

> Bu yazı genel bilgilendirme amaçlıdır; hukuki danışmanlık niteliği taşımaz. Değerlendirme 17 ve 18 Kasım 2026 tarihli haberlere ve yürürlükteki mevzuata dayanmaktadır. Soruşturmaya ilişkin hususlar iddia niteliğindedir; şirketin tasarruf fon havuzunun durumuna ilişkin kamuya açıklanmış bir tespit bulunmamaktadır.

## 2. Olgular

Adil Tasarruf Finansman A.Ş., Kurulun 17 Nisan 2025 tarihli ve 11201 sayılı kararıyla kuruluş izni, 7 Temmuz 2025 tarihli ve 11238 sayılı kararıyla faaliyet izni almıştır. Şirket "İyi Finans" markasını Şubat 2026'da kamuoyuna tanıtmıştır. Açıklanan çalışma modeline göre müşteri, birikim tutarının ve toplam vadenin yüzde kırkına ulaştığında finansmana hak kazanmaktadır; çekilişli planlarda teslimat daha erken gerçekleşebilmektedir. Faaliyet süresi dikkate alındığında sözleşmelerin büyük bölümünün hâlen tasarruf döneminde olduğu varsayılabilir. Müşteri ve sözleşme sayısı ile tasarruf fon havuzunun büyüklüğü erişilebilen kaynaklarda yer almamaktadır.

17 Kasım 2026 tarihli kayyım kararı 5271 sayılı Ceza Muhakemesi Kanunu m.133/1'e dayanmaktadır. Açıklamaya göre şirketlerin yönetim organlarının yetkileri ile ortaklık paylarını veya menkul kıymetleri idare yetkileri TMSF'ye verilmiştir. Soruşturmaya konu iddialar grup düzeyindedir: gerçek bir ticari faaliyete dayanmayan kredilerle ve menkul kıymet ihraçlarıyla sağlanan kaynakların grup içinde aktarıldığı ve suç gelirinin aklandığı ileri sürülmektedir. Açıklamada tasarruf finansman şirketinin müşteri birikimlerine ilişkin özel bir tespite yer verilmemiştir.

İki husus ayrıca kaydedilmelidir. Birincisi, kayyım kararı şirketin faaliyet iznini etkilememektedir; izin 6361 sayılı Kanun uyarınca ancak Kurul kararıyla kaldırılabilir. İkincisi, banka hakkında alınan m.71 kararı tasarruf finansman şirketini kapsamaz; iki şirket ayrı tüzel kişilerdir ve ayrı kanunlara tabidir.

## 3. Birikimin Hukuki Konumu

Tasarruf finansman sözleşmesi, belirli bir tasarruf tutarına ve dönemine bağlı olarak konut, çatılı iş yeri veya taşıt edinimi için müşteriye finansman kullanma hakkı veren, şirkete ise birikimi yönetme, geri ödeme ve finansman kullandırma yükümlülüğü yükleyen bir sözleşmedir (6361 sayılı Kanun m.39/A/1). Müşterinin birikimi bakımından üç tespit yapılabilir:

- Mevduat değildir. Müşterilerin sözleşmelerde taahhüt ettiği tasarruf tutarları mevduat sayılmaz (m.9). Bu nedenle birikim TMSF sigortası kapsamında değildir. TMSF'nin kayyım olarak atanması bu sonucu değiştirmez; kayyımlık bir yönetim görevidir, bir ödeme güvencesi değildir.
- Ayrılık kuralıyla korunur. Tasarruf fon havuzu hesapları şirketin diğer hesaplarından ayrı tutulur. Havuzdaki varlıklar amaçları dışında kullanılamaz, rehnedilemez, teminat gösterilemez, takasa konu edilemez, müşteri alacakları dışında haczedilemez ve iflas masasına dâhil edilemez (m.39/B/2). Kural, şirketin diğer alacaklılarının müşteri birikimlerine ulaşmasını engellemeyi amaçlar.
- Korumanın değeri havuzun fiilî durumuna bağlıdır. Ayrılık kuralı havuzda bulunan varlığı korur; havuzun eksiksiz ve mevzuata uygun araçlarda tutulduğunu kendiliğinden güvence altına almaz. Kurulun 30 Temmuz 2026 tarihli ve 11537 sayılı kararı uyarınca 1 Ekim 2026'dan itibaren havuz yalnızca katılım bankalarındaki Türk lirası hesaplarda, altına endeksli olmayan Türk lirası kira sertifikalarında ve düşük riskli katılım fonlarında değerlendirilebilmektedir.

Son nokta somut olayda özel bir soruyu gündeme getirmektedir. Havuzun hangi kurumlarda tutulduğu kamuya açık değildir. Bir bölümünün aynı gruptaki katılım bankasında tutulması hâlinde havuzun güvenliği o bankanın durumuna bağlı olur. Finansal kuruluşlara ait hesaplar katılım fonu sigortasının kapsamı dışında olduğundan, tasarruf finansman şirketinin banka nezdindeki hesabı sigortadan yararlanamaz. Bu ihtimalin gerçekleşip gerçekleşmediği kayyımın ve Kurumun tespitleriyle açıklığa kavuşacaktır.

## 4. Kayyım Atanmasının Sözleşmelere Etkisi

Kayyım, şirketin yönetim organının yerine geçer; şirketin tüzel kişiliği, faaliyet izni ve taraf olduğu sözleşmeler varlığını sürdürür. Bunun müşteri bakımından sonuçları şunlardır:

- Sözleşme aynı koşullarla devam eder. Tasarruf planı, tahsisat tarihi ve organizasyon ücreti değişmez. Kayyımın sözleşme koşullarını tek taraflı değiştirme yetkisi yoktur.
- Müşterinin ödeme borcu sürer. Kayyım atanması taksitlerin ödenmemesi için hukuki bir gerekçe oluşturmaz. Şirket sözleşmeyi ancak müşterinin yükümlülüklerini yerine getirmemesi hâlinde feshedebilir (m.39/A/4); ödemeyi kesen müşteri bu imkânı şirkete kendisi vermiş olur.
- Şirketin yükümlülükleri sürer. Tahsisat tarihi gelen müşteriye finansmanın sağlanması ve fesheden müşteriye birikimin iadesi şirketin borcu olmaya devam eder. Bu yükümlülüklerin fiilen yerine getirilip getirilemeyeceği şirketin likiditesine bağlıdır.
- Ödemenin yapılacağı hesap. Ödemeler yalnızca şirketin sözleşmede ve resmî kanallarında bildirilen hesaplarına yapılmalı, ödeme belgeleri saklanmalıdır. Hesap değişikliği bildirimleri kayyımdan yazılı olarak teyit edilmelidir.

Kayyımın yeni sözleşme kabulüne veya tahsisat ödemelerine ilişkin bir kararı kamuoyuna açıklanmamıştır.

## 5. Müşterinin Seçenekleri

Müşterinin hakları sözleşmenin bulunduğu aşamaya göre değişir:

- İlk on dört gün: cayma. Müşteri, sözleşmenin imzalanmasından itibaren on dört gün içinde gerekçe göstermeksizin ve cezai şart ödemeksizin cayabilir. Şirket, organizasyon ücreti dâhil aldığı tutarın tamamını on dört gün içinde iade eder (m.39/A/3).
- Tasarruf dönemi: fesih. Müşteri tasarruf döneminin sonuna kadar sözleşmeyi feshedebilir. Bu hâlde organizasyon ücreti dışında kalan birikim iade edilir (m.39/A/4). İade süresi Yönetmelik'in yürürlükteki hâlinde en geç altmış gündür (m.17/8); bu süre daha önce altı ay olarak düzenlenmişti. Fesih bildiriminin yazılı yapılması ve şirkete ulaştığı tarihin belgelenmesi gerekir; süre bu tarihten işler.
- Tahsisat aşaması: finansmanın talebi. Tasarruf koşullarını tamamlayan müşteri finansmanın sağlanmasını isteyebilir. Kurum, mali bünyesinde sorun tespit edilen şirket bakımından tahsisat tarihlerini erteleyebilir (m.15/4). Kurum kararına dayanan erteleme şirketin temerrüdü sayılmaz; ancak şirket böyle bir kararın varlığını göstermek zorundadır.
- Finansman kullanılmış sözleşmeler. Finansmanı almış olan müşterinin geri ödeme borcu ve verdiği teminatlar aynı koşullarla sürer.

Cayma ve fesih hâlinde iadenin engellenmesi Kanun'da ayrıca yaptırıma bağlanmıştır: m.39/A'nın üçüncü ve dördüncü fıkralarına aykırı davrananlar altı aydan iki yıla kadar hapis ve adli para cezasıyla cezalandırılır (m.49/A).

Tasarruf dönemindeki müşteri bakımından karar bir maliyet karşılaştırmasıdır. Fesih, organizasyon ücretinin kaybı karşılığında birikimin iadesini talep etme hakkı verir; iadenin süresinde yapılıp yapılamayacağı şirketin likiditesine bağlıdır. Sözleşmeye devam eden müşteri ise organizasyon ücretini korur, buna karşılık aşağıda ele alınan tasfiye ihtimalinde finansman kullanma hakkını yitirme riskini üstlenir. Her iki hâlde de sözleşmenin, ödeme planının ve dekontların eksiksiz saklanması gerekir.

## 6. Faaliyet İzninin Kaldırılması ve Tasfiye İhtimali

Kayyımlık ceza muhakemesine ilişkin bir tedbirdir. Şirketin düzenleyici statüsü bakımından belirleyici olan ise Kurulun 6361 sayılı Kanun'dan doğan yetkileridir. Kanun kademeli bir yapı öngörmektedir:

- Tedbir. Kurum, şirketin mali bünyesinde sorun tespit etmesi hâlinde belirli bir süre ve plan dâhilinde tedbir alınmasını isteyebilir ve tahsisat tarihlerini erteleyebilir (m.15/4).
- Faaliyet izninin kaldırılması. Likiditenin sürdürülememesi, likiditenin güvenilir biçimde hesaplanamaması veya istenen tedbirlerin sonuç vermemesi gibi hâllerde Kurul, en az beş üyesinin aynı yöndeki oyuyla faaliyet iznini kaldırmaya ve şirketin tasfiyesine karar verebilir (m.50/A/1). Karar Resmî Gazete'de yayımlanır.
- Tasfiye. Tasfiye, TMSF tarafından atanan en az üç kişilik bir tasfiye komisyonu eliyle yürütülür. 5411 sayılı Bankacılık Kanunu'nun takas yasağına ve sorumluluğa ilişkin bazı hükümleri kıyasen uygulanır. Varlıkların yükümlülükleri karşılamaması hâlinde komisyon, Fon Kurulu kararıyla şirketin iflasını isteyebilir (m.50/A/2 ila 4).

Müşteri bakımından en önemli sonuç şudur: tasfiyesine karar verilen şirkette müşterilerin sözleşmelerden doğan finansman kullanma hakları uygulanmaz (m.50/A/1). Müşteri artık konut veya taşıt finansmanını değil, birikiminin iadesini talep edebilir. İade tasarruf fon havuzundan karşılanır; havuzun yetersiz kalması hâlinde müşteri tasfiyedeki şirketin alacaklısı konumundadır. Kanun, tasfiye hâlinde tasarruf sahiplerine ödenmek üzere tahsil edilen organizasyon ücretlerinin binde beşinin ayrılmasını da öngörmektedir (m.15/5); ancak yeni kurulmuş bir şirkette bu kaynağın sınırlı kalacağı açıktır.

Bankalar bakımından öngörülen rejimle iki fark dikkat çekicidir. Tasarruf finansman şirketinde mevduat sigortasına karşılık gelen bir kamu güvencesi yoktur. Ayrıca Bankacılık Kanunu m.107'deki gibi süreli ve çok seçenekli bir çözümleme usulü düzenlenmemiştir. Bununla birlikte kontrol değişikliği doğuran pay devirleri ile birleşme ve sözleşme devri Kurul iznine tabi olarak mümkündür (m.11, m.12). Tasfiyeye gidilmeden sözleşmelerin başka bir tasarruf finansman şirketine devri, müşteriler bakımından finansman kullanma hakkını koruyan tek yoldur. Somut olayda Kurulun bu şirkete ilişkin bir kararı kamuya açıklanmamıştır. Şirketi hâlen kayyım sıfatıyla yöneten kurum ile olası bir tasfiyede komisyonu atayacak kurum aynıdır; bununla birlikte iki görevin hukuki dayanağı ve amacı farklıdır.

## 7. İzlenmesi Gereken Hususlar

- Kayyımın müşterilere yönelik duyuruları: tahsisat ödemeleri, iade talepleri ve yeni sözleşme kabulüne ilişkin kararlar.
- Kurulun şirkete ilişkin kararları: tedbir, tahsisat ertelemesi veya faaliyet izninin kaldırılması.
- Tasarruf fon havuzunun durumu: havuzun eksiksiz olup olmadığı ve hangi kurumlarda tutulduğu.
- Fesih taleplerinde iadenin altmış günlük süre içinde yapılıp yapılmadığı.
- Sözleşmelerin başka bir tasarruf finansman şirketine devrine ilişkin bir girişim bulunup bulunmadığı.
- Adil Katılım Bankası bakımından Fonun seçeceği çözümleme yöntemi; havuzun bir bölümü bu bankada tutuluyorsa bu yöntem müşterileri dolaylı olarak etkiler.

## 8. Sonuç

Adil Tasarruf Finansman A.Ş.'ye kayyım atanması müşteri sözleşmelerini sona erdirmemiş ve değiştirmemiştir. Şirketin faaliyet izni yürürlüktedir, müşterinin ödeme borcu ve şirketin tahsisat ve iade yükümlülükleri sürmektedir. Müşterinin birikimi mevduat değildir ve sigorta kapsamında bulunmaz; hukuki koruması tasarruf fon havuzunun şirket malvarlığından ayrılığına dayanır ve bu korumanın fiilî değeri havuzun durumuna bağlıdır.

Tasarruf dönemindeki müşteri sözleşmeyi feshederek organizasyon ücreti dışındaki birikiminin iadesini isteyebilir veya sözleşmeye devam edebilir. İki seçeneğin de maliyeti vardır ve tercih, Kurulun 6361 sayılı Kanun m.50/A uyarınca faaliyet iznini kaldırıp kaldırmayacağına ilişkin belirsizlik altında yapılmaktadır. Tasfiye hâlinde finansman kullanma hakkı uygulanmaz ve müşterinin talebi birikiminin iadesiyle sınırlı kalır. Bu nedenle izleyen dönemde kayyımın ve Kurulun açıklamaları kadar, sözleşmelerin devrine yönelik bir çözüm aranıp aranmadığı da belirleyici olacaktır.

## Kaynakça

- 6361 sayılı Finansal Kiralama, Faktoring, Finansman ve Tasarruf Finansman Şirketleri Kanunu m.9, m.11, m.12, m.15, m.39/A, m.39/B, m.49/A, m.50/A; 7292 ve 7333 sayılı Kanunlar.
- Tasarruf Finansman Şirketlerinin Kuruluş ve Faaliyet Esasları Hakkında Yönetmelik m.17.
- Bankacılık Düzenleme ve Denetleme Kurulu, 17.04.2025 tarihli ve 11201 sayılı Karar; 07.07.2025 tarihli ve 11238 sayılı Karar; 30.07.2026 tarihli ve 11537 sayılı Karar.
- 5271 sayılı Ceza Muhakemesi Kanunu m.133; İstanbul Cumhuriyet Başsavcılığı'nın 17.11.2026 tarihli açıklaması (Bursada Bugün haberi üzerinden).
- Fortune Türkiye, "Adil Tasarruf Finansman, İyi Finans'ı Tanıttı" (10.02.2026).
- Hukukçular Evi, tasarruf finansman müşterilerine ilişkin 2026 tarihli değerlendirmeler.
- KNZ Legal, "Adil Katılım Bankası'nın TMSF'ye Devri: 5411 Sayılı Kanun m.71 Çerçevesinde Bir Değerlendirme" (18.11.2026).`,
  },
  {
    slug: "residence-without-the-passport-turkiye-investor-permit",
    date: "2026-11-18",
    category: "yatirim",
    lang: "en",
    hideIn: ["tr"],
    versions: { tr: "yabanci-yatirimcilara-ikamet-izni-11994-sayili-karar" },
    author: "Kaan Zabtiyeoğulları",
    body: `For most of the past decade, the conversation about investing one's way into Türkiye has been a conversation about passports. A buyer of real estate worth USD 400,000, or a depositor of USD 500,000, could apply for citizenship, and the residence permit issued along the way was treated as paperwork. On 18 November 2026 the Official Gazette carried a measure that reverses the emphasis. Presidential Decision No. 11994 creates an investor residence permit that is cheaper, runs longer than the ordinary short-term permit, and is expressly not a step towards citizenship.

## What the Decision Says

The text is short: six articles and a schedule. A foreign national who does not work in Türkiye and who invests at least USD 150,000, or the equivalent in another foreign currency, may be granted a three-year residence permit. At USD 200,000 the term rises to five years. The permit extends to the investor's foreign spouse and to the minor or dependent children of either.

Four asset classes qualify, and each has its own gatekeeper:

- Deposits with a bank operating in Türkiye, verified by the Banking Regulation and Supervision Agency (BDDK).
- Government debt instruments, verified by the Ministry of Treasury and Finance.
- Units in real estate investment funds or venture capital investment funds, verified by the Capital Markets Board (SPK).
- Contributions to the private pension system, under plans designated by the Insurance and Private Pension Regulation and Supervision Agency (SEDDK).

The investment must be held for half the life of the permit: eighteen months for the three-year permit, thirty months for the five-year one. Directly owned real estate is absent from the list.

## The Statutory Hook

The Decision rests on Article 31 of Law No. 6458 on Foreigners and International Protection. Limb (j) of the first paragraph has long provided for a short-term residence permit for foreigners who do not work in Türkiye but make an investment whose scope and amount the President determines. Ordinary short-term permits are issued for up to two years at a time; permits under limb (j) may run for up to five. The Decision uses that headroom in full.

Refusal, cancellation and non-renewal are left to the general rule in Article 33: a permit falls away when the conditions on which it was granted cease to be met. An investor who liquidates before the holding period ends should expect exactly that.

## Residence, Not Citizenship

The more interesting provision is a negative one. Article 12 of the Turkish Citizenship Law No. 5901 allows holders of a limb (j) residence permit to be granted citizenship by exceptional procedure. That is the legal mechanism behind citizenship by investment, and the implementing regulation attaches thresholds to it: USD 500,000 held for three years in deposits, government debt, fund units or pension contributions, or USD 400,000 in real estate. Because the new permit is also issued under limb (j), an investor might have argued that USD 150,000 now opens the same door.

The Decision closes it in terms. Permits granted under it are not to be assessed within the scope of Article 12. The result is a two-tier structure under a single statutory limb: a high-threshold tier that can lead to a passport, and a low-threshold tier that leads to a residence card and nothing more. The citizenship thresholds themselves are untouched.

What the Decision does not address is the slower road. Whether time spent in Türkiye on this permit counts towards long-term residence under Article 42 of Law No. 6458, or towards ordinary naturalisation under Article 11 of Law No. 5901, is not stated. Those questions turn on the residence requirements in the respective rules and deserve a separate answer before anyone plans around them.

## Why Financial Assets

The omission of property is the Decision's clearest policy signal. A foreign owner of real estate can already obtain a short-term permit under limb (b) of the same article, subject to a value set by the Ministry and for no more than two years at a time. The new route offers a longer term for a different kind of asset: one that sits in the banking system, the Treasury's borrowing programme or the capital markets. Property enters only indirectly, through real estate investment fund units. Foreign savings are being steered away from apartments and towards balance sheets.

## What Is Still Unwritten

The Decision is a framework. It delegates the procedures and principles of implementation to the Ministry of Interior, and until that text appears several points that matter to an investor remain open:

- Currency. The thresholds are set in US dollars or equivalent foreign currency. Whether the funds may stay in foreign currency or must be converted into lira, and at which rate and on which date the threshold is tested, is not settled. If the conversion requirement used in the citizenship programme is carried over, the exchange-rate risk falls on the investor.
- Application. Where to apply, with which documents, and in what form each regulator will certify the investment.
- After the halfway point. Whether the permit survives a disposal made once the holding period has run, and whether renewal requires a fresh investment.

An investment made before the procedures are published may or may not be recognised. That uncertainty is a reason for patience, not haste.

## Before Committing Funds

Five further points belong on any investor's checklist:

- Bank risk. Deposit insurance in Türkiye is capped at TRY 1.2 million per depositor per bank for 2026. A qualifying deposit is several times that figure, so the choice of bank matters, as does the question of whether the sum may be split between banks.
- Fund risk. Real estate and venture capital fund units are sold to qualified investors and are not liquid. Exit rights depend on each fund's own rules, and the standing of the founder and the portfolio manager deserves scrutiny.
- Work. The permit carries no right to work. Employment requires a separate work permit under the International Labour Force Law No. 6735.
- Tax. A residence permit does not of itself create tax residence, but continuous presence of more than six months in a calendar year generally does (Income Tax Law No. 193, Article 4). Withholding on returns and the relevant double tax treaty should be checked.
- Source of funds. Banks and intermediaries will ask where the money comes from. Having the documents ready shortens the process.

## The Offer in One Sentence

Türkiye is offering up to five years of lawful residence to those who will lend to its banks, its Treasury or its funds for half that time, and it has taken care to say that the offer ends there. For an investor who wants a base rather than a passport, that may be exactly the right product. The fine print, however, has yet to be written, and it is the fine print that will decide.

> This article is for general information and is not legal or investment advice. It is based on reports of the Decision published on 18 November 2026. The text in the Official Gazette and the forthcoming Ministry of Interior procedures are the binding sources.`,
  },
  {
    slug: "yabanci-yatirimcilara-ikamet-izni-11994-sayili-karar",
    date: "2026-11-18",
    category: "yatirim",
    lang: "tr",
    hideIn: ["en", "fr", "ar", "ru"],
    versions: { en: "residence-without-the-passport-turkiye-investor-permit" },
    author: "Kaan Zabtiyeoğulları",
    body: `## 1. Giriş

17 Kasım 2026 tarihli ve 11994 sayılı Cumhurbaşkanı Kararı ile yürürlüğe konulan "Yabancı Yatırımcılara Düzenlenecek İkamet İzinlerine Dair Karar", 18 Kasım 2026 tarihli ve 33434 sayılı Resmî Gazete'de yayımlanarak aynı gün yürürlüğe girmiştir. Karar, Türkiye'de çalışmayan ancak belirli finansal varlıklara yatırım yapan yabancılara, yatırım tutarına göre üç veya beş yıl süreli ikamet izni verilmesini öngörmektedir. En az 150.000 ABD doları veya karşılığı döviz tutarındaki yatırım üç yıllık, en az 200.000 ABD doları veya karşılığı döviz tutarındaki yatırım beş yıllık izne esas alınmaktadır.

Bu yazı, Karar'ın hukuki dayanağını, içeriğini ve mevcut ikamet ve vatandaşlık rejimleri karşısındaki yerini incelemektedir. Yazının temel savı şudur: Karar, 6458 sayılı Kanun'un yatırımcı ikametine ilişkin hükmünü vatandaşlık rejiminden ayrı, finansal varlığa dayalı bir ikamet yolu olarak işletmektedir. Eşikler yatırım yoluyla vatandaşlık için aranan tutarların belirgin biçimde altındadır; buna karşılık Karar bu izinleri istisnai vatandaşlık yolunun dışında tutmaktadır. Uygulama bakımından belirleyici olacak ayrıntılar ise İçişleri Bakanlığı'nın belirleyeceği usul ve esaslara bırakılmıştır.

> Bu yazı genel bilgilendirme amaçlıdır; hukuki danışmanlık veya yatırım tavsiyesi niteliği taşımaz. Değerlendirme, Karar'ı aktaran 18 Kasım 2026 tarihli kaynaklara dayanmaktadır; uygulamada bağlayıcı olan Resmî Gazete'de yayımlanan metin ile İçişleri Bakanlığı'nın belirleyeceği usul ve esaslardır.

## 2. Hukuki Dayanak

Karar'ın dayanağı 6458 sayılı Yabancılar ve Uluslararası Koruma Kanunu'nun 31 inci maddesidir. Madde kısa dönem ikamet izni verilebilecek yabancıları saymaktadır. Birinci fıkranın (j) bendi, Türkiye'de çalışmayan ancak Cumhurbaşkanınca belirlenecek kapsam ve tutarda yatırım yapacak yabancılar ile bunların yabancı eşini, kendisinin ve eşinin ergin olmayan veya bağımlı yabancı çocuğunu kapsar. Kapsamı ve tutarı belirleme yetkisi kanunla doğrudan Cumhurbaşkanına verilmiştir; Karar bu yetkinin kullanılmasıdır.

Süre bakımından (j) bendi diğer kısa dönem ikamet türlerinden ayrılır. Kısa dönem ikamet izinleri kural olarak her defasında en fazla ikişer yıllık sürelerle verilirken (m.31/2), (j) bendi kapsamındaki izinler en fazla beşer yıllık sürelerle düzenlenebilir (m.31/5). Karar'daki üç ve beş yıllık süreler bu üst sınırın içindedir.

İznin reddi, iptali ve uzatılmaması bakımından Karar'da özel bir hüküm bulunduğu erişilebilen kaynaklardan anlaşılmamaktadır. Bu hâlde genel kural uygulanır: iznin verilme şartlarının ortadan kalkması veya iznin veriliş amacı dışında kullanılması hâlinde izin iptal edilir, süresi bitmişse uzatılmaz (m.33).

## 3. Karar'ın İçeriği

Karar altı maddeden ve ekli bir listeden oluşmaktadır. İçeriği dört başlıkta özetlenebilir:

- Kapsam. Türkiye'de çalışmayan ve ekli listedeki tutarlarda yatırım yapan yabancılar ile bunların yabancı eşi, kendisinin ve eşinin ergin olmayan veya bağımlı yabancı çocukları.
- Tutar ve süre. En az 150.000 ABD doları veya karşılığı döviz tutarındaki yatırım için üç yıl, en az 200.000 ABD doları veya karşılığı döviz tutarındaki yatırım için beş yıl süreli ikamet izni. Tutar döviz cinsinden belirlenmiştir; Türk lirası cinsinden bir eşik öngörülmemiştir.
- Yatırım araçları. Türkiye'de faaliyet gösteren bankalarda mevduat; Devlet borçlanma araçları; gayrimenkul yatırım fonu veya girişim sermayesi yatırım fonu katılma payları; bireysel emeklilik sistemine katkı payı. Doğrudan taşınmaz edinimi listede yer almamaktadır.
- Elde tutma süresi. Yatırımın ikamet izni süresinin yarısı kadar tutulması gerekir: üç yıllık izinde bir buçuk yıl, beş yıllık izinde iki buçuk yıl.

Karar ayrıca iki hüküm içermektedir. İlki, uygulamaya ilişkin usul ve esasların İçişleri Bakanlığınca belirleneceğidir. İkincisi, bu Karar uyarınca verilen ikamet izinlerinin 5901 sayılı Türk Vatandaşlığı Kanunu'nun 12 nci maddesi kapsamında değerlendirilmeyeceğidir. Karar'ı İçişleri Bakanı yürütür.

## 4. Tespit Makamları ve Başvuru

Karar her yatırım aracı için şartların sağlandığını tespit edecek kurumu ayrı ayrı belirlemiştir:

- Banka mevduatı: Bankacılık Düzenleme ve Denetleme Kurumu.
- Devlet borçlanma araçları: Hazine ve Maliye Bakanlığı.
- Gayrimenkul yatırım fonu ve girişim sermayesi yatırım fonu katılma payları: Sermaye Piyasası Kurulu.
- Bireysel emeklilik sistemi: Sigortacılık ve Özel Emeklilik Düzenleme ve Denetleme Kurumu. Yatırımcının bu Kurumun belirlediği emeklilik planlarına dâhil olması gerekir.

Bu yapı, yatırım yoluyla vatandaşlık uygulamasındaki uygunluk belgesi modelinin benzeridir: yatırımı ilgili düzenleyici kurum belgeler, ikamet iznini göç idaresi birimleri düzenler. Başvurunun nereye ve hangi belgelerle yapılacağı, tutarın hangi kur ve tarih esas alınarak hesaplanacağı ve elde tutma yükümlülüğünün nasıl izleneceği Karar'da düzenlenmemiştir. Bu hususlar İçişleri Bakanlığı'nın belirleyeceği usul ve esaslarla netleşecektir. Usul ve esaslar yayımlanıncaya kadar yapılacak yatırımların izne esas alınıp alınmayacağı belirsizdir; yatırım kararının bu belirsizlik gözetilerek verilmesi gerekir.

## 5. Vatandaşlık ve Taşınmaz Yoluyla İkamet Rejimleri Karşısındaki Yeri

Karar, mevcut ikamet ve vatandaşlık rejimleriyle birlikte değerlendirilmelidir:

- Yatırım yoluyla istisnai vatandaşlık. 5901 sayılı Kanun m.12/1-(b), 6458 sayılı Kanun m.31/1-(j) uyarınca ikamet izni alan yabancıların Cumhurbaşkanı kararıyla Türk vatandaşlığını kazanabilmesine imkân tanır. Türk Vatandaşlığı Kanununun Uygulanmasına İlişkin Yönetmelik m.20 bu yol için yatırım türlerini ve tutarlarını belirlemiştir: mevduat, Devlet borçlanma araçları, fon katılma payları ve bireysel emeklilik katkısı bakımından en az 500.000 ABD doları ve üç yıl elde tutma, taşınmaz bakımından en az 400.000 ABD doları ve üç yıl satmama şartı aranmaktadır. Yeni Karar aynı finansal araçları belirgin biçimde düşük eşiklerle ve daha kısa elde tutma süreleriyle ikamet iznine bağlamaktadır.
- Bağlantının kesilmesi. Yeni Karar da (j) bendine dayandığından, özel bir hüküm bulunmasaydı bu izinlerin m.12/1-(b) kapsamında vatandaşlığa esas alınıp alınamayacağı tartışılabilirdi. Karar bu tartışmayı açık bir hükümle kapatmıştır: bu izinler m.12 kapsamında değerlendirilmez. Böylece (j) bendi altında iki ayrı kategori oluşmuştur: vatandaşlığa esas olan yüksek eşikli yatırımlar ve yalnızca ikamet sağlayan düşük eşikli yatırımlar.
- Genel yolla vatandaşlık ve uzun dönem ikamet. Karar yalnızca m.12 ile bağlantıyı düzenlemektedir. Bu izinle geçirilen sürelerin genel yolla vatandaşlık (5901 sayılı Kanun m.11) veya uzun dönem ikamet izni (6458 sayılı Kanun m.42) bakımından nasıl değerlendirileceği Karar'da yer almamaktadır. Bu husus ilgili mevzuattaki ikamet koşulları çerçevesinde ayrıca incelenmelidir.
- Taşınmaz yoluyla ikamet. Türkiye'de taşınmazı bulunan yabancılar m.31/1-(b) uyarınca kısa dönem ikamet izni alabilir; taşınmazın niteliği ve değeri Bakanlıkça belirlenir ve izin en fazla ikişer yıllık sürelerle verilir. Yeni Karar taşınmazı kapsamamakta, buna karşılık finansal varlık sahibine daha uzun süreli izin tanımaktadır. Taşınmaz yatırımı ancak gayrimenkul yatırım fonu katılma payı aracılığıyla dolaylı olarak kapsama girmektedir.

Bu karşılaştırma düzenlemenin yönünü göstermektedir: yabancı tasarrufun doğrudan taşınmaz ediniminden bankacılık sistemine, kamu borçlanmasına ve sermaye piyasası araçlarına yönlendirilmesi amaçlanmaktadır.

## 6. Uygulamada Dikkat Edilecek Hususlar

- Kur ve para birimi. Eşik döviz cinsindendir. Yatırımın döviz olarak mı tutulacağı, Türk lirasına çevrilmesinin gerekip gerekmediği ve kur hareketleri nedeniyle değerin eşiğin altına düşmesinin sonuçları usul ve esaslarla belirlenecektir. Vatandaşlık rejiminde uygulanan, dövizin önce bozdurulmasına ilişkin kural burada da benimsenirse kur riski yatırımcının üzerinde kalır.
- Banka riski. Mevduat tercih edildiğinde tutar, 2026 yılı için 1.200.000 TL olan mevduat sigortası limitinin belirgin biçimde üzerindedir ve limit her banka için ayrı uygulanır. Banka seçimi ve tutarın birden fazla bankaya bölünüp bölünemeyeceği bu nedenle önem taşır.
- Fon riski. Gayrimenkul yatırım fonu ve girişim sermayesi yatırım fonu katılma payları nitelikli yatırımcıya satılan ve likiditesi sınırlı araçlardır. Fondan çıkış imkânı fonun içtüzüğüne ve ihraç belgesine bağlıdır. Kurucunun ve portföy yöneticisinin durumu ayrıca değerlendirilmelidir.
- Elde tutma ve iznin akıbeti. Yatırımın yarı süre dolmadan çözülmesi iznin verilme şartını ortadan kaldırır (6458 sayılı Kanun m.33). Yarı sürenin dolmasından sonra yatırımın çözülmesi hâlinde iznin kalan süresinin etkilenip etkilenmeyeceği ve uzatma için yeni yatırım aranıp aranmayacağı Karar'dan anlaşılmamaktadır.
- Çalışma. İzin çalışma hakkı vermez; Karar zaten Türkiye'de çalışmayan yabancıları kapsamaktadır. Çalışmak isteyen yabancının 6735 sayılı Uluslararası İşgücü Kanunu uyarınca çalışma izni alması gerekir.
- Vergi. İkamet izni tek başına vergi mukimliği doğurmaz. Ancak bir takvim yılında Türkiye'de devamlı olarak altı aydan fazla oturan kişi kural olarak tam mükellef sayılır (193 sayılı Gelir Vergisi Kanunu m.4). Yatırımın getirisi üzerindeki stopaj ve çifte vergilendirmeyi önleme anlaşmaları ayrıca dikkate alınmalıdır.
- Fonların kaynağı. Bankalar ve aracı kuruluşlar, müşterinin tanınması yükümlülüğü kapsamında yatırılan tutarın kaynağını sorgulayacaktır. Kaynağa ilişkin belgelerin önceden hazırlanması süreci kısaltır.

## 7. İzlenmesi Gereken Hususlar

- İçişleri Bakanlığı'nın belirleyeceği usul ve esaslar: başvuru mercii, istenecek belgeler, kur ve tarih ölçütü.
- Dört tespit makamının kendi alanlarında yayımlayacağı duyuru ve düzenlemeler; özellikle uygun emeklilik planları ve uygunluk belgesinin şekli.
- Yatırımın döviz olarak tutulup tutulamayacağı ve blokaj veya şerh uygulanması.
- Uzatma koşulları ve yarı sürenin dolmasından sonra yatırımın çözülmesinin izne etkisi.
- Bu izinle geçirilen sürelerin uzun dönem ikamet ve genel yolla vatandaşlık başvurularında nasıl değerlendirileceği.
- Taşınmaz yoluyla ikamet ve yatırım yoluyla vatandaşlık eşiklerinde bir değişiklik yapılıp yapılmayacağı.

## 8. Sonuç

11994 sayılı Karar, Türkiye'de çalışmayan yabancılara finansal varlık yatırımı karşılığında üç veya beş yıl süreli ikamet izni verilmesini öngörmektedir. Eşikler 150.000 ve 200.000 ABD dolarıdır; kabul edilen araçlar banka mevduatı, Devlet borçlanma araçları, gayrimenkul ve girişim sermayesi yatırım fonu katılma payları ile bireysel emeklilik katkısıdır. Yatırımın izin süresinin yarısı kadar tutulması gerekir. Doğrudan taşınmaz edinimi kapsam dışındadır.

Karar'ın hukuki bakımdan ayırt edici yönü, 6458 sayılı Kanun m.31/1-(j) altında vatandaşlığa esas olmayan bir yatırımcı ikameti kategorisi oluşturmasıdır. Bu izinler 5901 sayılı Kanun m.12 kapsamında değerlendirilmeyecektir; yatırım yoluyla vatandaşlık için aranan eşikler değişmemiştir. Başvuru usulü, kur ölçütü ve uzatma koşulları İçişleri Bakanlığı'nın belirleyeceği usul ve esaslara bağlıdır. Bu metin yayımlanıncaya kadar Karar bir çerçeve niteliğindedir ve yatırım kararlarının bu belirsizlik gözetilerek alınması yerinde olur.

## Kaynakça

- Yabancı Yatırımcılara Düzenlenecek İkamet İzinlerine Dair Karar, 17.11.2026 tarihli ve 11994 sayılı Cumhurbaşkanı Kararı, Resmî Gazete 18.11.2026, Sayı: 33434 (haber kaynakları üzerinden).
- 6458 sayılı Yabancılar ve Uluslararası Koruma Kanunu m.31, m.33, m.42.
- 5901 sayılı Türk Vatandaşlığı Kanunu m.11, m.12; Türk Vatandaşlığı Kanununun Uygulanmasına İlişkin Yönetmelik m.20.
- 6735 sayılı Uluslararası İşgücü Kanunu; 193 sayılı Gelir Vergisi Kanunu m.4.
- Hukukçular Evi, 18.11.2026 tarihli değerlendirme (Karar'ın maddelerine ilişkin özet).
- Habertürk, Memurlar.Net ve Yeni Bakış, 18.11.2026 tarihli haberler.
- KNZ Legal, "Adil Katılım Bankası'nın TMSF'ye Devri: 5411 Sayılı Kanun m.71 Çerçevesinde Bir Değerlendirme" (18.11.2026).`,
  },
  {
    slug: "golden-global-yatirim-bankasi-faaliyet-izninin-kaldirilmasi",
    date: "2026-11-18",
    category: "bankacilik",
    lang: "tr",
    author: "Kaan Zabtiyeoğulları",
    body: `## 1. Giriş

Bankacılık Düzenleme ve Denetleme Kurulu (Kurul), 4 Kasım 2026 tarihli ve 11593 sayılı kararıyla Golden Global Yatırım Bankası A.Ş.'nin faaliyet iznini kaldırmıştır. Karar, 6 Kasım 2026 tarihli ve 33422 sayılı Resmî Gazete'de yayımlanmıştır. Dayanak olarak 5411 sayılı Bankacılık Kanunu'nun 71 inci maddesinin birinci fıkrasının (c) bendi gösterilmiştir. Karar metni gerekçe içermemektedir.

Karar kamuoyunda ağırlıklı olarak bankanın Eylül 2026'da Amerika Birleşik Devletleri'nin yaptırım listesine alınmasıyla birlikte ele alınmıştır. Bu yazı yaptırım kararının isabetini değil, faaliyet izninin kaldırılmasının Türk hukukundaki sonuçlarını incelemektedir. Yazının temel savı şudur: bir yatırım bankasının faaliyet izninin kaldırılması, mevduat veya katılım bankasına ilişkin rejimden üç noktada ayrılır. Fona devir seçeneği bulunmaz, mevduat sigortası devreye girmez ve tasfiye genel hükümlere göre yürür. Bu nedenle bankanın karşı tarafları bakımından belirleyici olan, hukuki ilişkinin türüdür. En kırılgan konumda bulunanlar, bankanın teminat mektubuna güvenen muhatap ile bu mektubu yenilemek zorunda kalabilecek lehtardır.

> Bu yazı genel bilgilendirme amaçlıdır; hukuki danışmanlık niteliği taşımaz. Değerlendirme, Resmî Gazete'de yayımlanan karar metnine ve Eylül ile Kasım 2026 tarihli haberlere dayanmaktadır. Yaptırım kararına konu hususlar iddia niteliğindedir; banka bu iddiaları reddetmiştir.

## 2. Olgular

Golden Global Yatırım Bankası A.Ş., 16 Mayıs 2019 tarihli ve 8369 sayılı Kurul kararıyla kuruluş izni, 30 Ocak 2020 tarihli ve 8839 sayılı kararla faaliyet izni almış ve 1 Haziran 2020'de faaliyete başlamıştır. Banka, faizsiz finans esaslarına göre çalışan tek şubeli bir yatırım bankasıdır. Basına yansıyan verilere göre 2025 yılı sonunda aktif büyüklüğü yaklaşık 25 milyar TL'dir. Faaliyet izninin kaldırılmasına giden süreç üç aşamada gerçekleşmiştir:

- 4 Eylül 2026. Amerika Birleşik Devletleri Hazine Bakanlığı'na bağlı Yabancı Varlıklar Kontrol Ofisi (OFAC), bankayı ve aynı gruptaki portföy yönetim ve varlık kiralama şirketlerini İran bağlantılı işlemler gerekçesiyle yaptırım listesine almıştır. Banka iddiaları reddetmiş, yaptırım listesindeki kişi ve kuruluşlarla müşteri ilişkisinin bulunmadığını bildirmiş ve karara karşı hukuki yollara başvuracağını açıklamıştır.
- 16 Eylül 2026. Kurul, 11569 sayılı kararıyla üç ortağa ait ve sermayenin yüzde 99,98'ini temsil eden payların temettü dışındaki ortaklık haklarının Tasarruf Mevduatı Sigorta Fonu (TMSF veya Fon) tarafından kullanılmasına karar vermiştir. Dayanak 5411 sayılı Kanun m.18/5'tir. Karar payların mülkiyetini devretmemiş, bankanın faaliyet iznine de dokunmamıştır. Basına yansıyan bilgiye göre Fon Kurulu ertesi gün bankanın yönetim kuruluna atama yapmıştır.
- 4 Kasım 2026. Kurul, 11593 sayılı kararıyla faaliyet iznini m.71/1(c) uyarınca kaldırmıştır. İki karar arasında 49 gün bulunmaktadır.

Resmî Gazete'de yayımlanan karar metninde yaptırım kararına atıf yoktur. Eldeki verilerle yaptırım ile (c) bendindeki tespit arasında nedensellik bağı kurulamaz. Bununla birlikte yaptırım listesine alınan bir bankanın muhabir banka ilişkilerini ve yabancı para ödeme kanallarını büyük ölçüde yitirdiği, bunun da yükümlülüklerin vadesinde yerine getirilmesini güçleştirdiği bilinen bir olgudur. Tasfiyenin nasıl yürütüleceğine ilişkin olarak Kurul veya Fon tarafından yapılmış ayrıntılı bir açıklamaya erişilebilen kaynaklarda rastlanmamıştır.

## 3. Hukuki Dayanak: m.18/5'ten m.71/1(c)'ye

İki karar farklı hükümlere dayanmakta ve farklı muhataplara yönelmektedir.

Eylül kararının dayanağı olan m.18/5 ortaklara ilişkindir. Hükme göre kurucularda aranan nitelikleri yitiren ortaklar temettü dışındaki ortaklık haklarından yararlanamaz; bu haklar Kurumun bildirimi üzerine Fon tarafından kullanılır. Hüküm bankanın mali durumuna ilişkin bir tespit içermez ve yönetimi doğrudan Fona devretmez. Ancak sermayenin tamamına yakınını temsil eden payların oy hakkını kullanan Fon, genel kurul aracılığıyla yönetim kurulunu belirleme imkânına kavuşur.

Basında Eylül kararı çoğunlukla bankanın TMSF'ye devri olarak nitelendirilmiştir. Bu nitelendirme hukuken isabetli değildir. m.18/5 kararı payların mülkiyetini Fona geçirmediği gibi, m.71 anlamında yönetim ve denetimin devri sonucunu da doğurmaz; yalnızca belirli ortakların temettü dışındaki haklarının kullanımını Fona bırakır. Fonun yönetim üzerindeki etkisi, bu hakların genel kurulda kullanılmasının dolaylı sonucudur.

Kasım kararının dayanağı olan m.71/1(c) ise bankanın kendisine ilişkindir: yükümlülüklerin vadesinde yerine getirilemediğinin tespiti. Madde beş hâl sayar ve Kurula iki yol tanır: faaliyet izninin kaldırılması veya temettü hariç ortaklık hakları ile yönetim ve denetimin Fona devri. İkinci yol kanun metninde kredi kuruluşları, yani mevduat ve katılım bankaları için öngörülmüştür. Kalkınma ve yatırım bankaları bakımından m.71 kapsamında Kurulun elindeki araç faaliyet izninin kaldırılmasıdır.

Bu ayrım, 17 Kasım 2026 tarihli ve 11601 sayılı Adil Katılım Bankası kararıyla karşılaştırıldığında belirginleşir. Katılım bankasında Kurul Fona devir yolunu seçmiş, banka faaliyetine devam etmiş ve m.107'deki çözümleme süreci başlamıştır. Yatırım bankasında ise ara aşama işlevini m.18/5 görmüş, m.71 doğrudan bankacılık faaliyetinin sona ermesi sonucunu doğurmuştur. Ortaklara ilişkin tedbirin banka hakkındaki karardan önce gelmesi Asya Katılım Bankası örneğinde de görülmüştür: Şubat 2015'te bir kısım ortağın temettü dışındaki haklarının Fon tarafından kullanılmasına karar verilmiş, Mayıs 2015'te m.71 kararı alınmıştır.

Kurul kararı Resmî Gazete'de yayımlanmakla ilgililere tebliğ edilmiş sayılır (m.71). Karara karşı idari yargıda iptal davası açılabilir (m.105). Altmış günlük genel dava açma süresi yayım tarihinden hesaplandığında 5 Ocak 2027'de dolar.

## 4. Faaliyet İzninin Kaldırılmasının Sonuçları

Faaliyet izni kaldırılan banka tüzel kişiliğini korur; ancak bankacılık işlemi yapamaz. Yeni kredi kullandıramaz, yeni teminat mektubu düzenleyemez; mevcut ilişkilerini ancak tasfiye amacıyla sürdürebilir. Yatırım bankası bakımından üç husus öne çıkar:

- Mevduat sigortası. Kalkınma ve yatırım bankaları mevduat ve katılım fonu kabul edemez (m.4, m.60, m.77). Bu bankaların müstakrizlerinden, ortaklarından veya para ve sermaye piyasalarından sağladığı fonlar Kanun uygulamasında mevduat sayılmaz (m.60/4). Dolayısıyla banka nezdindeki bakiyeler TMSF sigortası kapsamında değildir; hak sahipleri tasfiyede alacaklı sıfatıyla yer alır.
- Tasfiye rejimi. m.71 uyarınca faaliyet izni kaldırılan kredi kuruluşları 5411 sayılı Kanun hükümlerine, kalkınma ve yatırım bankaları ise genel hükümlere göre tasfiye edilir. Genel hükümlerden kasıt, 6102 sayılı Türk Ticaret Kanunu'nun anonim şirketin tasfiyesine ilişkin hükümleri (m.533 ve devamı) ile borca batıklık hâlinde 2004 sayılı İcra ve İflas Kanunu'nun iflas hükümleridir.
- m.106 ile ilişki. m.106, faaliyet izni kaldırılan banka bakımından yönetim ve denetimin Fona geçmesini, kararın Resmî Gazete'de yayımından itibaren icra ve iflas takiplerinin durmasını ve iflasın yalnızca Fon tarafından istenebilmesini öngörmektedir. Madde lafzen banka türleri arasında ayrım yapmaz. Buna karşın sigortalı mevduatın ödenmesi ve Fonun mevduat sahipleri yerine iflas istemesi gibi hükümleri mevduat toplayan bankaya göre kurulmuştur. m.71'deki genel hükümlere gönderme ile m.106 arasındaki ilişki bu nedenle yoruma açıktır. Alacaklının ihtiyatlı davranması, yani takip yasağının uygulanabileceğini hesaba katması yerinde olur.

Somut olayda bu belirsizliğin pratik etkisi sınırlı kalabilir. 11569 sayılı kararın yürürlükte olduğu varsayımıyla Fon, sermayenin yüzde 99,98'ine ilişkin oy haklarını kullanmaktadır. Genel hükümlere göre yürüyecek bir tasfiyede tasfiye memurlarını belirleyecek genel kurul çoğunluğu da fiilen Fonun elindedir.

Alacaklılar bakımından izlenecek yol tasfiyenin usulüne bağlıdır. Genel hükümlere göre tasfiyede alacaklar, tasfiye memurlarının ilanla yapacağı çağrı üzerine bildirilir (TTK m.541). İflas hâlinde alacak kaydı için süre iflasın ilanından itibaren bir aydır (İİK m.219); teminatsız alacaklar sıra cetvelinde adi alacak olarak yer alır (İİK m.206).

## 5. Teminat Mektupları

Teminat mektubu, bankanın lehtarın edimini muhataba karşı garanti ettiği bağımsız bir taahhüttür; hukuki niteliği garanti sözleşmesidir (TBK m.128). İlişkinin üç tarafı vardır ve faaliyet izninin kaldırılması her birini farklı etkiler. Bankanın gayrinakdi kredi hacmi erişilebilen kaynaklarda yer almadığından aşağıdaki değerlendirme genel niteliktedir.

- Mektubun geçerliliği. Faaliyet izninin kaldırılması, daha önce düzenlenmiş mektupları kendiliğinden hükümsüz kılmaz. Garanti borcu, tasfiye hâlindeki tüzel kişinin borcu olarak devam eder. Ancak banka yeni mektup düzenleyemez; süre uzatımı ve tutar artırımı gibi yeni taahhüt doğuran işlemleri de yapamaz.
- Muhatap. Riskin gerçekleşmesi hâlinde muhatap mektubun tazminini isteyebilir. Ne var ki talep artık faaliyetteki bir bankanın ilk talepte yapacağı ödemeye değil, tasfiye veya iflas içinde ileri sürülecek bir alacağa dönüşmüştür; mektubun teminat işlevi fiilen zayıflamıştır. Muhatabın izleyeceği yol, asıl sözleşmedeki teminat hükmüne dayanarak lehtardan başka bir bankanın mektubunu veya eşdeğer bir teminatı istemektir. Kamu ihale sözleşmelerinde bu talep, teminat olarak kabul edilecek değerlerin mevzuatta sınırlı biçimde sayılmış olmasının doğal sonucudur (4734 sayılı Kanun m.34).
- Lehtar. Asıl sözleşme çoğu durumda teminatın sözleşme süresince geçerli ve yeterli tutulmasını öngörür. Bu hâlde bankanın durumu lehtarın kusuruna dayanmasa da yenileme yükü lehtarın üzerindedir; süresinde yenilenmeyen teminat, sözleşmedeki hükme göre temerrüt veya fesih sebebi oluşturabilir. Lehtar yeni mektup için başka bir bankada limit ve karşı teminat bulmak zorundadır. Limitleri dolu olan yükleniciler bakımından asıl maliyet budur.
- Eski mektubun iadesi ve karşı teminatlar. Lehtar yeni teminatı verdiğinde eski mektubun muhataptan geri alınarak bankaya iadesini sağlamalıdır. Risk, mektubun iadesi veya muhatabın yazılı ibrasıyla sona erer; komisyon yükümlülüğü ve lehtarın bankaya verdiği karşı teminatlar (nakit blokaj, rehin, ipotek, kefalet) o tarihe kadar devam eder. İade üzerine karşı teminatların çözülmesi, tasfiyeyi yürüten organdan yazılı olarak talep edilmelidir.
- Rücu. Mektup bedelinin ödenmesi hâlinde lehtara rücu edilir. Lehtarın genel kredi sözleşmesinden doğan bu borcu, bankanın faaliyet izninin kaldırılmış olmasından etkilenmez.
- Kontrgaranti. Mektup başka bir bankanın kontrgarantisine dayanılarak düzenlenmişse veya banka başka bir bankanın mektubu için kontrgaranti vermişse zincirdeki her ilişki ayrı değerlendirilir. İkinci durumda mektubu düzenleyen banka, kontrgarantinin değer yitirmesi nedeniyle lehtardan ek teminat isteyebilir.

Yaptırım boyutu bu tabloya ek bir kısıt getirmektedir. Yaptırım listesindeki bir bankayla işlem yapmak istemeyen muhataplar ve muhabir bankalar bakımından mektupların kabul edilebilirliği sorunu, faaliyet izninin kaldırılmasından önce, Eylül 2026'da başlamıştır.

## 6. Kredi Borçluları ve Diğer Karşı Taraflar

- Kredi borçları. Bankadan kullanılan finansman vade, getiri ve teminat koşullarıyla devam eder. Faaliyet izninin kaldırılması borçluya ödememe hakkı vermez; alacaklıya da sözleşmede öngörülmeyen bir muacceliyet imkânı tanımaz. Ödemenin yapılacağı hesabın tasfiyeyi yürüten organdan yazılı olarak teyit edilmesi ve ödeme belgelerinin saklanması gerekir.
- Kullanılmamış limitler. Tahsis edilmiş ancak kullandırılmamış limitlerden yeni kullandırım yapılamaz. Finansman planını bu limitlere dayandıran borçlunun başka kaynak bulması gerekir.
- Takas. Borçlunun bankadan olan kendi alacağını borcuyla takas etmesi genel hükümlere tabidir (TBK m.139 ve devamı; iflas hâlinde İİK m.200 ve 201). Buna karşılık m.109/4, faaliyet izninin kaldırıldığı tarihten sonra bankanın alacaklılarından temlik yoluyla alacak edinilerek borcun takas veya mahsup edilmesini yasaklamakta, bu sonucu doğuran işlemleri banka bakımından geçersiz saymaktadır.
- Yatırım hizmetleri. Bankanın yatırım hizmeti sunduğu müşteriler bakımından müşteri varlıklarının ayrılığına ilişkin sermaye piyasası mevzuatı ve Yatırımcı Tazmin Merkezi hükümleri (6362 sayılı Sermaye Piyasası Kanunu m.82 ila 84) ayrıca değerlendirilmelidir. Gruba bağlı portföy yönetim şirketinin fonları ise ayrı bir sürece tabidir: basına yansıyan bilgilere göre Sermaye Piyasası Kurulu Eylül 2026'da altı fonun kurucu talebiyle tasfiyesine izin vermiştir.
- Çalışanlar. Basına yansıyan verilere göre bankanın çalışan sayısı Eylül 2026 itibarıyla 94'tür. İflas hâlinde işçi alacaklarının kanunda belirtilen bölümü imtiyazlı alacak olarak ilk sırada yer alır (İİK m.206).

## 7. İzlenmesi Gereken Hususlar

- Tasfiyenin usulü: genel hükümlere göre tasfiye mi, iflas mı; tasfiyeyi yürütecek organ ve yapılacak ilanlar.
- Kurulun ve Fonun m.106'nın uygulanmasına ilişkin tutumu; takip yasağının fiilen uygulanıp uygulanmadığı.
- Alacak bildirimine ilişkin süreler ve ilan tarihleri.
- Bankanın düzenlediği teminat mektupları bakımından muhatap idarelerin ve diğer bankaların uygulaması.
- 11569 ve 11593 sayılı kararlara karşı idari yargıya başvurulup başvurulmadığı; yaptırım kararına karşı açıklanan hukuki girişimin akıbeti.

## 8. Sonuç

11593 sayılı karar, bir yatırım bankasının faaliyet izninin m.71/1(c) uyarınca, yani yükümlülüklerin vadesinde yerine getirilememesi tespitiyle kaldırılmasıdır. Karardan önce, m.18/5 uyarınca sermayenin tamamına yakınına ilişkin temettü dışındaki ortaklık hakları Fon tarafından kullanılmaya başlanmıştır. Kredi kuruluşlarından farklı olarak yatırım bankasında Fona devir yolu ve m.107'deki çözümleme süreci söz konusu değildir; mevduat sigortası bulunmaz ve tasfiye genel hükümlere göre yürür. m.106'nın bu tasfiyeye hangi ölçüde uygulanacağı açıklığa kavuşmamıştır.

Bankanın karşı tarafları bakımından sonuç ilişkinin türüne göre değişir. Kredi borçlusunun borcu aynı koşullarla devam eder. Alacaklı, alacağını tasfiye veya iflas usulü içinde takip etmek zorundadır. Teminat mektupları hukuken geçerliliğini korumakla birlikte teminat işlevini büyük ölçüde yitirmiştir: muhatap yeni teminat isteyecek, yenileme yükü ise asıl sözleşme uyarınca lehtarın üzerinde kalacaktır. Teminat mektubu ilişkisinde banka riskinin sözleşme aşamasında düzenlenmesi, yani kabul edilebilir banka ölçütlerinin ve yenileme sürelerinin açıkça belirlenmesi, bu kararla birlikte önemi daha görünür hâle gelen bir husustur.

## Kaynakça

- Bankacılık Düzenleme ve Denetleme Kurulu, 04.11.2026 tarihli ve 11593 sayılı Karar, Resmî Gazete 06.11.2026, Sayı: 33422.
- Bankacılık Düzenleme ve Denetleme Kurulu, 16.09.2026 tarihli ve 11569 sayılı Karar (haber kaynakları üzerinden).
- 5411 sayılı Bankacılık Kanunu m.3, m.4, m.18, m.60, m.71, m.77, m.105, m.106, m.109.
- 6102 sayılı Türk Ticaret Kanunu m.533 ve devamı; 2004 sayılı İcra ve İflas Kanunu m.200, m.201, m.206, m.219.
- 6098 sayılı Türk Borçlar Kanunu m.128, m.139; 4734 sayılı Kamu İhale Kanunu m.34; 6362 sayılı Sermaye Piyasası Kanunu m.82 ila 84.
- Banka Dünyası, 06.11.2026 tarihli haber (kronoloji, yaptırım kararı ve bankanın açıklaması, 2025 verileri).
- Banka Vitrini, 17.09.2026 tarihli haber (11569 sayılı karar ve yönetim kurulu atamaları).
- Endeks24, 06.11.2026 tarihli haber (kuruluş ve faaliyet izni kararları).
- Hukukçular Evi, 06.11.2026 tarihli değerlendirme.
- Asya Katılım Bankası A.Ş.'ye ilişkin 2015 tarihli Kurul kararları (Milliyet Uzmanpara, 18.07.2016 tarihli haber üzerinden).
- KNZ Legal, "Adil Katılım Bankası'nın TMSF'ye Devri: 5411 Sayılı Kanun m.71 Çerçevesinde Bir Değerlendirme" (18.11.2026).`,
  },
  {
    slug: "adil-katilim-bankasinin-tmsfye-devri-5411-m71",
    date: "2026-11-18",
    category: "bankacilik",
    lang: "tr",
    author: "Kaan Zabtiyeoğulları",
    body: `## 1. Giriş

Bankacılık Düzenleme ve Denetleme Kurulu (Kurul), 17 Kasım 2026 tarihli ve 11601 sayılı kararıyla Adil Katılım Bankası A.Ş.'nin temettü hariç ortaklık hakları ile yönetim ve denetiminin Tasarruf Mevduatı Sigorta Fonu'na (TMSF veya Fon) devredilmesine karar vermiştir. Karar, 18 Kasım 2026 tarihli ve 33434 sayılı Resmî Gazete'de yayımlanmıştır. Dayanak olarak 5411 sayılı Bankacılık Kanunu'nun 71 inci maddesinin birinci fıkrasının (a), (c) ve (d) bentleri gösterilmiştir. Karar metni birkaç satırdan ibarettir ve gerekçe içermemektedir.

Banka genç bir kuruluştur. Basına yansıyan bilgilere göre kuruluş izni 23 Mayıs 2024 tarihli ve 10914 sayılı, faaliyet izni ise 11 Eylül 2025 tarihli ve 11267 sayılı Kurul kararıyla verilmiştir. Devir kararı, faaliyet izninden yaklaşık on dört ay sonra alınmıştır. Aynı gün İstanbul Cumhuriyet Başsavcılığı, sermaye piyasalarına ilişkin fon soruşturması kapsamında banka ile üç şirkete TMSF'nin kayyım olarak atandığını duyurmuştur.

Bu yazı, kararın hukuki dayanağını, kapsamını ve katılım fonu sahipleri ile bankanın diğer muhatapları bakımından sonuçlarını incelemektedir. Yazının temel savı şudur: karar kamuoyunda ceza soruşturmasının uzantısı olarak yorumlanmakla birlikte, hukuken ondan bağımsız ve bankanın mali durumuna ilişkin tespitlere dayanan bir idari işlemdir. Kurulun hangi bentleri seçtiği ve hangilerini seçmediği, izleyen sürecin hangi hükümlere göre yürüyeceğini belirlemektedir. Katılım fonu sahipleri bakımından belirleyici husus ise bankanın faaliyet izninin kaldırılmamış olmasıdır.

> Bu yazı genel bilgilendirme amaçlıdır; hukuki danışmanlık veya yatırım tavsiyesi niteliği taşımaz. Değerlendirme, Resmî Gazete'de yayımlanan karar metnine ve 17 ile 18 Kasım 2026 tarihli haberlere dayanmaktadır. Soruşturmaya ilişkin hususlar iddia niteliğindedir; bu konuda kesinleşmiş bir yargı kararı bulunmamaktadır.

## 2. Hukuki Dayanak: m.71/1 ve Seçilen Bentler

5411 sayılı Kanun, mali durumu bozulan bankaya kademeli biçimde müdahale edilmesini öngörmektedir. Kurul önce düzeltici, iyileştirici ve kısıtlayıcı önlemlerin alınmasını ister (m.68 ila 70). Bu önlemlerin sonuç vermemesi veya durumun önlemle giderilemeyecek ölçüde ağırlaşması hâlinde m.71 uygulanır. Madde beş hâl saymaktadır:

- (a) bendi. m.70 kapsamındaki önlemlerin Kurulun verdiği sürede ve her hâlde en geç on iki ay içinde alınmaması yahut mali bünyenin güçlendirilememesi.
- (b) bendi. Faaliyetin sürmesinin mevduat ve katılım fonu sahiplerinin hakları ile mali sistemin güven ve istikrarı bakımından tehlike oluşturması.
- (c) bendi. Bankanın yükümlülüklerini vadesinde yerine getiremediğinin tespit edilmesi.
- (d) bendi. Yükümlülüklerin toplam değerinin varlıkların toplam değerini aşması.
- (e) bendi. Hâkim ortakların veya yöneticilerin banka kaynaklarını kendi lehlerine kullanarak bankayı zarara uğratması.

Bu hâllerden birinin veya birkaçının varlığında Kurul, en az beş üyesinin aynı yöndeki oyuyla iki yoldan birini seçer: bankanın faaliyet iznini kaldırmak veya temettü hariç ortaklık hakları ile yönetim ve denetimini Fona devretmek. Somut kararda (a), (c) ve (d) bentleri birlikte gösterilmiştir. Bu seçimden üç sonuç çıkarılabilir.

Birincisi, karar bankanın mali durumuna ilişkin tespitlere dayanmaktadır. (c) bendi ödeme güçlüğünü, (d) bendi ise borca batıklığa karşılık gelen bir bilanço açığını ifade eder. Kurul bu iki tespiti birlikte yapmıştır.

İkincisi, (a) bendi m.70 önlemleriyle bağlantılıdır. Bu bende dayanılması, Kurulun devirden önce bankadan önlem istediğine veya önlemlerin sonuç vermeyeceği kanaatine ulaştığına işaret eder. Böyle bir süreç kamuoyuna açıklanmamıştır. Önlem istenmişse bunun, bankanın faaliyete geçmesini izleyen on dört ay içinde gerçekleşmiş olması gerekir.

Üçüncüsü, (e) bendine dayanılmamıştır. Savcılık açıklamasında banka kaynaklarının grup şirketlerine kredi olarak kullandırıldığı iddiası yer almaktadır. Buna karşın Kurul, hâkim ortak veya yöneticilerin kaynak kullanımına ilişkin bendi kararına esas almamıştır. Bunun pratik önemi m.108'de görülür: anılan hüküm, kaynakların iadesine ve zararın tazminine ilişkin özel usulü (e) bendi uyarınca işlem yapılan bankalar için öngörmektedir. Kararın bu bende dayanmaması, ilgililerin sorumluluğunun doğmadığı anlamına gelmez. Yönetici ve denetçilerin şahsi sorumluluğuna ilişkin m.110 ile genel hükümler saklıdır; Kurulun ileride ek bir tespitte bulunması da mümkündür. Ancak bugünkü karar bir kaynak istismarı tespitine değil, mali durum tespitine dayanmaktadır.

Kararın iki örnekle karşılaştırılması açıklayıcıdır. Kurul, 4 Kasım 2026 tarihli ve 11593 sayılı kararıyla Golden Global Yatırım Bankası A.Ş.'nin faaliyet iznini yalnızca (c) bendine dayanarak kaldırmıştır. Asya Katılım Bankası A.Ş. ise 29 Mayıs 2015 tarihli ve 6318 sayılı kararla (b) bendi uyarınca Fona devredilmiştir. Adil Katılım Bankası kararı, maddenin üç bendine birlikte dayanması ve faaliyet izninin kaldırılması yerine devir yolunu seçmesi bakımından ilkinden; tehlike bendine değil mali tespit bentlerine dayanması bakımından ikincisinden ayrılmaktadır.

## 3. Devrin Kapsamı

Karar üç unsuru Fona geçirmektedir: temettü hariç ortaklık hakları, yönetim ve denetim.

- Ortaklık hakları. Genel kurula katılma, oy kullanma, yönetim kurulu üyelerini seçme ve görevden alma ile bilgi alma gibi yönetime ilişkin pay sahipliği hakları Fon tarafından kullanılır.
- Temettü. Kâr payı hakkı devrin dışında bırakılmıştır. Ancak (d) bendi uyarınca yükümlülüklerinin varlıklarını aştığı tespit edilen bir bankada bu hakkın fiilî bir karşılığı bulunmamaktadır.
- Yönetim ve denetim. Yönetim ve denetim organlarının yetkileri Fona geçer; banka, Fonun belirleyeceği yöneticiler tarafından idare edilir.

Devir, payların mülkiyetini kendiliğinden Fona geçirmez. Bu aşamada pay sahipleri malik sıfatını korumakta, ancak paydan doğan yönetim haklarını kullanamamaktadır. Mülkiyet bakımından belirleyici olan, m.71'de yer alan "zararın mevcut ortakların sermayesinden indirilmesi" kaydıdır. Bankanın zararının sermayeyi hangi ölçüde tükettiği, ortakların elinde bir değer kalıp kalmayacağını belirler. m.107 uyarınca Fon, zarar sermayeden indirildikten sonra payları devralabilir; sermayeden bir bakiye kalması hâlinde ortaklara bu bakiye esas alınarak ödeme yapılması mümkündür.

Kurul kararları Resmî Gazete'de yayımlanır ve yayım ilgililere tebliğ hükmündedir (m.71). Karara karşı idari yargı yolu açıktır (m.105). Asya Katılım Bankası örneğinde devir işleminin iptali istemiyle açılan dava reddedilmiş, ret kararı Danıştay tarafından onanmıştır. Bir pay sahibinin bireysel başvurusunda Anayasa Mahkemesi de mülkiyet hakkının ihlal edilmediği sonucuna varmıştır.

## 4. Kayyımlık ile Fona Devir Arasındaki Fark

17 Kasım 2026 tarihinde banka hakkında iki ayrı işlem yapılmıştır. İstanbul Cumhuriyet Başsavcılığı'nın açıklamasına göre Adil Katılım Bankası A.Ş., Adil Varlık Yönetim A.Ş., Adil Tasarruf Finansman A.Ş. ve Dünya Varlık Yönetim A.Ş.'ye, 5271 sayılı Ceza Muhakemesi Kanunu m.133/1 uyarınca TMSF kayyım olarak atanmıştır. Aynı tarihte Kurul, yalnızca banka bakımından m.71 kararını almıştır. TMSF böylece bankada iki ayrı sıfatla yer almaktadır. İki rejim şu noktalarda ayrılır:

- Nitelik. Kayyımlık bir ceza muhakemesi tedbiridir ve yargı kararına dayanır. Fona devir, Kurulun bankacılık mevzuatı uyarınca tesis ettiği bir idari işlemdir.
- Koşul. Kayyımlık, suçun bir şirketin faaliyeti çerçevesinde işlenmekte olduğuna ilişkin kuvvetli şüpheye bağlıdır. Fona devir, m.71'de sayılan hâllerden birinin tespitine bağlıdır; suç şüphesi aranmaz.
- Amaç. Kayyımlık maddi gerçeğin ortaya çıkarılmasına hizmet eder. Fona devir, katılım fonu sahiplerinin haklarını ve mali sistemin istikrarını korumayı amaçlar.
- Süre ve sonuç. Kayyımlık geçicidir, soruşturma ve kovuşturmanın seyrine bağlıdır ve şirketin çözümlenmesine ilişkin bir takvim içermez. Fona devir ise m.107'deki süreli çözümleme sürecini başlatır.
- Denetim yolu. Kayyım kararına karşı ceza muhakemesindeki itiraz yolu, Kurul kararına karşı idari yargı yolu işler.

Bu ayrımın pratik sonucu şudur: soruşturmanın akıbeti ne olursa olsun m.71 kararı kendi koşullarına göre varlığını sürdürür. İddiaların doğrulanmaması bankayı kendiliğinden ortaklarına iade etmez; devrin ortadan kalkması idari yargı kararına veya çözümleme sürecinin sonucuna bağlıdır.

Diğer üç şirket m.71 rejiminin dışındadır. Bu şirketlerde TMSF yalnızca kayyım sıfatıyla bulunmakta, alacaklıların konumu genel hükümlere ve ilgili şirket türüne özgü mevzuata göre belirlenmektedir. Dünya Varlık Yönetim A.Ş.'nin 11 Kasım 2026 tarihli kupon temerrüdü bakımından daha önce işaret edilen muhatap sorunu ise kayyım atanmasıyla yanıtlanmıştır: borçlanma aracı sahiplerinin muhatabı artık kayyım sıfatıyla TMSF'dir.

## 5. Katılım Fonu Sahipleri ve Diğer Muhataplar Bakımından Sonuçlar

Karar bankanın faaliyet iznini kaldırmamıştır. Banka tüzel kişiliğini ve bankacılık yetkisini korumakta, yalnızca yönetimi el değiştirmektedir. Bu tespitin sonuçları şunlardır:

- Sigorta ödemesi. TMSF'nin sigorta kapsamındaki tutarı ödeme yükümlülüğü, faaliyet izninin kaldırılması hâlinde doğar. Devir kararı tek başına sigorta ödemesi başlatmaz; hesaplar banka nezdinde varlığını sürdürür.
- Sigorta limiti. 2026 yılı için limit, her bir kişi ve her bir kredi kuruluşu bakımından 1.200.000 TL'dir. Aynı bankadaki hesaplar toplanır; katılma hesapları birim hesap değeri, özel cari hesaplar bakiye üzerinden dikkate alınır.
- Kapsam dışı hesaplar. Resmî kuruluşlara, kredi kuruluşlarına ve finansal kuruluşlara ait hesaplar sigortalı değildir. Bankanın hâkim ortaklarına, nitelikli pay sahiplerine, yönetim kurulu üyelerine ve üst düzey yöneticilerine, ayrıca bunların yakınlarına ait hesaplar da kapsam dışındadır. Suç gelirinden kaynaklanan hesaplar için de aynı sonuç geçerlidir. Soruşturmadaki iddialar dikkate alındığında bu istisnalar somut olayda önem kazanabilir.
- Limiti aşan tutarlar. Limitin üzerindeki katılım fonu, bankanın faaliyeti sürdükçe olağan bir banka alacağıdır. Faaliyet izninin kaldırılması ve iflas hâlinde sigortasız kısım iflas masasında imtiyazlı alacak olarak yer alır (m.63).
- Kredi borçluları. Bankaya olan borçlar vade ve koşullarıyla devam eder. m.109/4 uyarınca, bankadan olan bir alacağı devir tarihinden sonra temlik alan borçlu bu alacağı bankaya olan borcuyla takas veya mahsup edemez.
- Teminat mektupları. Bankanın düzenlediği teminat mektupları hukuken geçerliliğini korur. Bununla birlikte muhataplar, Fona devredilmiş bir bankanın mektubunu yeterli görmeyerek değiştirilmesini isteyebilir. Lehtarın bu talep karşısındaki konumu asıl sözleşmedeki teminat hükümlerine bağlıdır.

Bankanın topladığı katılım fonunun, kullandırdığı kredilerin ve düzenlediği teminat mektuplarının büyüklüğü erişilebilen kaynaklarda yer almamaktadır. Kurul veya Fon tarafından hesaplara erişime ilişkin bir açıklama yapıldığı da tespit edilememiştir.

## 6. Devir Sonrası Süreç

m.107, Fona devredilen bankanın çözümlenmesini düzenlemektedir. Fon yetkilerini maliyet etkinliği ile mali sistemin güven ve istikrarının korunması ilkeleri çerçevesinde kullanır. Başlıca seçenekler şunlardır:

- Bankanın mali bünyesinin güçlendirilmesi ve mali destek sağlanması.
- Zararın sermayeden indirilmesinin ardından payların devralınması ve üçüncü kişilere satılması.
- Varlık ve yükümlülüklerin başka bir bankaya devredilmesi veya bankanın başka bir bankayla birleştirilmesi.
- Faaliyetlerin geçici olarak durdurulması.
- Sonuç alınamaması hâlinde Kuruldan faaliyet izninin kaldırılmasının istenmesi.

Bu işlemlerin en geç dokuz ay içinde tamamlanması gerekir; Fon Kurulu süreyi üç ayı geçmemek üzere uzatabilir. Devir tarihinden hesaplandığında dokuz aylık süre Ağustos 2027'de, uzatma hâlinde Kasım 2027'de dolar. Süre içinde çözümleme tamamlanamazsa Kurul, Fonun talebi üzerine faaliyet iznini kaldırır ve m.106'daki rejim uygulanır: sigortalı katılım fonları Fon tarafından ödenir, bankaya karşı icra ve iflas takipleri durur ve Fon bankanın iflasını ister.

Asya Katılım Bankası örneği bu takvimin nasıl işleyebileceğini göstermektedir. Banka 29 Mayıs 2015'te Fona devredilmiş, dokuz aylık süre üç ay uzatılmış, Mayıs 2016'da ilan edilen pay satış ihalesine 15 Temmuz 2016'da teklif gelmemiş, bunun üzerine bankanın faaliyetleri m.107/2 uyarınca geçici olarak durdurulmuş ve ardından faaliyet izni kaldırılmıştır.

İki banka arasında ölçek ve geçmiş bakımından belirgin fark vardır. Asya Katılım Bankası devir tarihinde yaklaşık yirmi yıllık bir bankaydı; Adil Katılım Bankası ise faaliyetinin ikinci yılındadır. Küçük ölçek, varlık ve yükümlülüklerin başka bir katılım bankasına devrini teknik olarak kolaylaştırır. Kuruluş sermayesinin kaynağına ilişkin iddialar ise alıcı bulunmasını güçleştirebilecek bir unsurdur.

## 7. İzlenmesi Gereken Hususlar

- Kurulun veya Fonun kararın gerekçesine ilişkin açıklama yapıp yapmayacağı; özellikle (a) bendine esas alınan önlem süreci.
- Fonun belirleyeceği yönetim ve bankanın faaliyetlerine ilişkin ilk duyurular; hesaplara erişimde kısıtlama getirilip getirilmediği.
- Zararın tespiti ve sermayeden indirilmesine ilişkin işlemler; payların Fona geçip geçmediği.
- Fon Kurulunun m.107 kapsamında seçeceği çözümleme yöntemi ve dokuz aylık sürenin işleyişi.
- Ortakların karara karşı idari yargıya başvurup başvurmadığı.
- Soruşturmanın seyri ve diğer üç şirketteki kayyımlık uygulaması; Dünya Varlık Yönetim A.Ş. borçlanma araçlarına ilişkin ödeme veya yapılandırma açıklamaları.

## 8. Sonuç

11601 sayılı karar bir bankanın kapatılması değil, yönetiminin ve temettü dışındaki ortaklık haklarının Fona geçmesidir. Banka faaliyet iznini korumaktadır. Bu nedenle katılım fonu sigortası bu aşamada devreye girmemiştir; hesaplar ve kredi ilişkileri hukuken aynı koşullarla sürmektedir. Kararın dayandığı (a), (c) ve (d) bentleri, Kurulun bankada ödeme güçlüğü ve bilanço açığı tespit ettiğini göstermektedir. Kaynak istismarına ilişkin (e) bendine dayanılmamış olması, idari işlemin ceza soruşturmasındaki iddialardan ayrı bir zeminde kurulduğunu ortaya koymaktadır.

Aynı gün duyurulan kayyım kararı ile Fona devir kararı farklı amaçlara hizmet eden iki ayrı rejimdir; banka bakımından belirleyici olan ikincisidir. İzleyen dönemin temel sorusu, Fonun m.107'deki süre içinde bankayı satış, devir veya birleşme yoluyla çözümleyip çözümleyemeyeceğidir. Bu mümkün olmazsa faaliyet izninin kaldırılması ve sigorta ödemesi gündeme gelecektir. Katılım fonu sahipleri bakımından bu süreçte esas alınması gereken veri, 1.200.000 TL'lik sigorta limiti ve limitin her banka için ayrı uygulanmasıdır.

## Kaynakça

- Bankacılık Düzenleme ve Denetleme Kurulu, 17.11.2026 tarihli ve 11601 sayılı Karar, Resmî Gazete 18.11.2026, Sayı: 33434.
- 5411 sayılı Bankacılık Kanunu m.63, m.68 ila 71, m.105 ila 110.
- 5271 sayılı Ceza Muhakemesi Kanunu m.133.
- İstanbul Cumhuriyet Başsavcılığı'nın 17.11.2026 tarihli açıklaması (Bursada Bugün ve Haberler.com haberleri üzerinden).
- Para Ajansı, 18.11.2026 tarihli haber (kuruluş ve faaliyet izni kararları).
- Bankacılık Düzenleme ve Denetleme Kurulu, 04.11.2026 tarihli ve 11593 sayılı Karar (Golden Global Yatırım Bankası A.Ş.), Resmî Gazete 06.11.2026, Sayı: 33422.
- Bankacılık Düzenleme ve Denetleme Kurulu, 29.05.2015 tarihli ve 6318 sayılı Karar (Asya Katılım Bankası A.Ş.); TMSF'nin 2016 tarihli açıklamaları (Milliyet Uzmanpara, 18.07.2016 tarihli haber üzerinden).
- Anayasa Mahkemesi'nin Asya Katılım Bankası pay sahibi başvurusuna ilişkin kararı (CNN Türk, 10.09.2019 tarihli haber üzerinden).
- TMSF, Mevduat Sigortacılığı Hakkında Sıkça Sorulan Sorular; 2026 yılı sigorta limitine ilişkin Fon Kurulu kararı (Bloomberg HT, 13.12.2025 tarihli haber üzerinden).
- KNZ Legal, "Dünya Varlık Yönetim Temerrüdü: Borçlanma Aracı Sahiplerinin Hukuki Durumu" (12.11.2026).
- KNZ Legal, "Fon Krizi ve 7596 Sayılı Kanun: Önce Fiyat Çöktü, Sonra Likidite" (11.11.2026).`,
  },
  {
    slug: "dunya-varlik-yonetim-temerrudu-tahvil-sahibi-kiminle-konusacak",
    date: "2026-11-12",
    category: "sermaye-piyasasi",
    lang: "tr",
    author: "Kaan Zabtiyeoğulları",
    body: `## 1. Giriş

Dünya Varlık Yönetim A.Ş., 11 Kasım 2026 tarihinde vadesi gelen iki kupon ödemesini gerçekleştiremediğini Kamuyu Aydınlatma Platformu'na (KAP) bildirmiştir. Basına yansıyan verilere göre 100 milyon TL nominal değerli tahvilin (ISIN: TRSDVYS22815) 10.905.800 TL tutarındaki üçüncü kuponu ile 300 milyon TL nominal değerli finansman bonosunun 31.595.400 TL tutarındaki üçüncü kuponu ödenmemiştir; ödenmeyen toplam tutar 42.501.200 TL'dir. Şirket açıklamasında ödemenin "mevcut finansal koşullar nedeniyle" vadesinde yapılamadığı belirtilmiştir. Derecelendirme kuruluşu Turkrating aynı gün şirketin notunu temerrüt seviyesi olan TR D'ye indirmiştir.

Bu yazı, söz konusu temerrüdün borçlanma aracı sahipleri bakımından doğurduğu hukuki sonuçları incelemektedir. Yazının temel savı şudur: somut olayda alacaklı bakımından öncelikli sorun ödemenin zamanı değil, borçlu şirkette karar alabilecek organın belirsizliğidir. Zira derecelendirme notu, temerrütten bir gün önce, şirketin yeni yönetim kurulunun belirlenememesi gerekçesiyle askıya alınmıştır. Yazıda ayrıca kamuoyunda dile getirilen "SPK izninin iptal edildiği" yönündeki bilginin doğruluğu da değerlendirilmektedir.

> Bu yazı genel bilgilendirme amaçlıdır; hukuki danışmanlık veya yatırım tavsiyesi niteliği taşımaz. Veriler 11 ve 12 Kasım 2026 tarihli KAP açıklamalarını aktaran haberlere dayanmaktadır; ihraç belgeleri incelenmemiştir.

## 2. Olgular

Temerrüde konu iki borçlanma aracının kupon geçmişi şöyledir:

- Tahvil. 100 milyon TL nominal değerlidir ve 11 Şubat 2026 tarihinde ihraç edilmiştir. Birinci kupon 13 Mayıs 2026'da 11.532.200 TL, ikinci kupon 12 Ağustos 2026'da 11.712.800 TL olarak ödenmiştir. 11 Kasım 2026 vadeli 10.905.800 TL tutarındaki üçüncü kupon ödenmemiştir.
- Finansman bonosu. 300 milyon TL nominal değerlidir. İlk iki kupon 33.474.900 TL ve 34.016.400 TL olarak ödenmiştir. 11 Kasım 2026 vadeli 31.595.400 TL tutarındaki üçüncü kupon ödenmemiştir.

Kuponların nominal değere oranı çeyreklik yüzde 10,5 ile 11,7 arasındadır. Bu oranlar, söz konusu araçların yüksek getirili özel sektör borçlanma araçları olduğunu ve getirinin ihraççının kredi riskini fiyatladığını göstermektedir. Ödenmeyen kalemler kupon niteliğindedir; anapara vadeleri erişilebilen kaynaklardan teyit edilememiştir.

## 3. Yönetim Boşluğu ve Muhatap Sorunu

Şirketin sermayesi 750 milyon TL olup KAP'ta yer alan bilgiye göre tamamı Online Finansal Danışmanlık A.Ş.'ye aittir. Rekabet Kurumu duyurusuna göre payların tamamı Şubat 2026'da bu şirket aracılığıyla Ali Emre Ballı tarafından devralınmıştır; tahvil ihracı da aynı ay gerçekleşmiştir. Aynı zamanda yönetim kurulu başkanlığı ve genel müdürlük görevlerini yürüten Ballı, Ekim 2026'da vefat etmiştir.

Turkrating 10 Kasım 2026'da şirketin notunu askıya almıştır. Gerekçe olarak, hâkim ortağın vefatının ardından yeni yönetim kurulunun henüz belirlenememiş olması ve bu durumun karar alma süreçlerini olumsuz etkileyebileceği gösterilmiştir. Kupon ödemeleri ertesi gün yapılamamıştır.

Eldeki verilerle bu iki olgu arasında nedensellik bağı kurulamaz; şirketin beyan ettiği gerekçe finansal koşullardır. Bununla birlikte alacaklı bakımından iki olgunun birlikte değerlendirilmesi gerekir. Pay sahipliği, yönetim kurulu başkanlığı ve genel müdürlük sıfatlarının tek kişide toplandığı bir yapıda bu kişinin vefatı üç ayrı boşluk doğurur: paylar külli halefiyet yoluyla mirasçılara geçer (TMK m.599), ana ortaklıkta genel kurulun toplanarak yönetimi belirlemesi gerekir ve bağlı şirkette yönetim kurulunun yeniden oluşturulması gerekir. Varlık yönetim şirketleri Bankacılık Düzenleme ve Denetleme Kurumu'nun (BDDK) iznine ve denetimine tabi finansal kuruluşlar olduğundan (5411 sayılı Bankacılık Kanunu m.143 ve ilgili Yönetmelik), ortaklık yapısındaki ve yönetimdeki değişiklikler ayrıca Kurum mevzuatındaki koşullara bağlıdır. Bu süreç tamamlanıncaya kadar ödeme planı önerecek ve alacaklılarla müzakere yürütecek organın kim olduğu belirsiz kalmaktadır.

## 4. Borçlanma Aracı Sahiplerinin Hukuki Durumu

Kupon ödeme tarihi ihraç belgesinde belirli olduğundan borçlu, ayrıca ihtara gerek kalmaksızın temerrüde düşer (TBK m.117/2). Temerrüdün sonuçları dört başlık altında incelenebilir:

- Temerrüt faizi ve muacceliyet. Ödenmeyen kupon tutarına temerrüt faizi işler. Anaparanın vadesinden önce talep edilip edilemeyeceği ise kanundan değil ihraç belgesinden doğar. Belgede kupon temerrüdünü muacceliyet sebebi sayan bir hüküm bulunmuyorsa tek bir kuponun ödenmemesi anaparayı kendiliğinden muaccel kılmaz. Aynı ihraççının diğer borçlanma araçlarına sirayet eden çapraz temerrüt sonucu da ancak belgede öngörülmüşse doğar.
- Teminat. Bu nitelikteki ihraçlar çoğunlukla teminatsızdır; bu hâlde yatırımcı adi alacaklı konumundadır. Varlık yönetim şirketlerinin malvarlığı ağırlıklı olarak bankalardan devralınan tahsili gecikmiş alacak portföylerinden oluşur. Bu portföylerin değeri tahsilat performansına bağlıdır ve portföyler şirkete finansman sağlayanlar lehine rehinli olabilir. Somut durum ihraç belgesinden ve finansal tablolardan anlaşılır.
- Borçlanma aracı sahipleri kurulu. Sermaye Piyasası Kanunu'na 2020 yılında eklenen m.31/A ile II-31/A.1 sayılı Tebliğ, aynı tertipteki yatırımcıların kurul hâlinde toplanarak vade, faiz ve anapara koşullarındaki değişiklikleri nitelikli çoğunlukla karara bağlamasına imkân tanımaktadır. Usulüne uygun alınan karar, toplantıya katılmayan veya olumsuz oy kullanan yatırımcıları da bağlar. Madde ayrıca temerrüt sonrası yapılandırma sürecinde takip ve tedbirlere ilişkin özel hükümler içermektedir. Dolayısıyla bireysel hareket eden yatırımcının takibi, çoğunluğun yapılandırma kararıyla karşılaşabilir. Kurulu toplantıya çağırmaya yetkili olanlar ve nisaplar Tebliğ'de ve ihraç belgesinde düzenlenmiştir.
- Takip ve iflas. Alacaklı genel haciz yoluyla takip başlatabilir; borçlunun sermaye şirketi olması nedeniyle iflas yolu da açıktır. Hangi yolun elverişli olduğu şirketin malvarlığına ve diğer alacaklıların, özellikle rehinli alacaklıların konumuna göre belirlenir.

Yatırımcı Tazmin Merkezi bu durumu kapsamamaktadır. Merkez, yatırım kuruluşlarının nakit ödeme ve sermaye piyasası aracı teslim yükümlülüklerini yerine getirememesi hâlinde devreye girer (SPKn m.82 ila 84). İhraççının kredi riski yatırımcının üzerindedir.

## 5. Yatırım Fonu Katılma Payı Sahipleri Bakımından Durum

Söz konusu borçlanma araçlarını doğrudan değil, yatırım fonları aracılığıyla taşıyan yatırımcılar da bulunmaktadır. Basına yansıyan bilgilere göre İş Portföy, Özel Sektör Borçlanma Araçları (TL) Fonu portföyündeki Dünya Varlık Yönetim ihraçları için yüzde 100 oranında karşılık ayırmıştır. Osmanlı Portföy de aynı yönde karar almış; söz konusu ihraçların ağırlığı Özel Sektör Borçlanma Araçları Fonu'nda toplam değerin yüzde 4,9'u, Üçüncü Serbest Fon'da yüzde 1,5'i olarak açıklanmıştır.

Karşılık ayrılması, ilgili varlığın fon fiyatına esas değerinin düşürülmesi anlamına gelir; kayıp o günkü pay fiyatına yansır. İleride tahsilat gerçekleşirse bu tutar tahsilat tarihindeki pay sahiplerine yansır. Bu nedenle karşılık kararından sonra fondan ayrılan yatırımcı olası tahsilattan yararlanamaz; sonradan fona giren yatırımcı ise yararlanır. Eylül 2026 fon tasfiyelerinde gözlenen değerleme sorununun aksine, burada fon fiyatı portföydeki varlığın değerine aynı gün uyarlanmıştır.

## 6. Halka Arz Onayına İlişkin Tartışma

Kamuoyunda şirketin "SPK izninin iptal edildiği" yönünde bir bilgi dolaşmaktadır. Bu bilgi doğru değildir; karıştırılan husus şirketin halka arz sürecidir. Dünya Varlık Yönetim, paylarının halka arzı için Aralık 2023'te Sermaye Piyasası Kurulu'na (SPK) başvurmuştur. Başvuru 16 Ocak 2025 tarihli bültende onaylanmış ve 22 ila 24 Ocak 2025 tarihleri için talep toplama planlanmıştır. Şirket, olumsuz piyasa koşullarını gerekçe göstererek halka arzı kendi kararıyla ertelemiştir. SPK'nın onayı geri aldığına ilişkin bir karar bulunmamaktadır. Bununla birlikte onaylı izahname süresiz değildir: Sermaye Piyasası Kanunu m.9 uyarınca izahname on iki ay süreyle geçerlidir; anılan izahnameye dayanılarak bugün halka arz yapılması mümkün değildir.

Temerrüt bakımından bu tespitin anlamı şudur: şirket halka açık değildir ve payları borsada işlem görmemektedir. KAP'ta bildirim yükümlülüğü, borçlanma aracı ihraç etmiş olmasından kaynaklanmaktadır. Faaliyet izni bakımından yetkili otorite de SPK değil BDDK'dır; erişilebilen kaynaklarda BDDK'nın şirkete ilişkin açıkladığı bir karara rastlanmamıştır.

## 7. İzlenmesi Gereken Hususlar

- Şirketin KAP'ta yapacağı yeni açıklamalar: yönetim kurulunun oluşturulup oluşturulmadığı, ödeme takvimi veya yapılandırma teklifi.
- İhraç belgeleri: temerrüt hâlleri, muacceliyet, çapraz temerrüt, varsa teminat ve borçlanma aracı sahipleri kuruluna ilişkin hükümler.
- Şirketin diğer yükümlülükleri: tedavülde başka ihraç bulunup bulunmadığı ve banka borçlarının durumu.
- BDDK'nın tutumu: yönetim boşluğunun sürmesi hâlinde Kurum'un mevzuattan doğan yetkilerini kullanıp kullanmayacağı.

## 8. Sonuç

Dünya Varlık Yönetim temerrüdü, kupon borcunun vadesinde ödenmemesiyle ihtarsız gerçekleşmiş bir borçlu temerrüdüdür. Anaparanın muaccel hâle gelip gelmediği ve çapraz temerrüdün doğup doğmadığı ihraç belgelerinin hükümlerine bağlıdır. Yatırımcılar bakımından bireysel takip yolu açık olmakla birlikte, Sermaye Piyasası Kanunu m.31/A'da düzenlenen borçlanma aracı sahipleri kurulu, toplu bir yapılandırma kararının tüm tertip yatırımcılarını bağlamasına imkân tanımaktadır. Yatırımcı Tazmin Merkezi ihraççı temerrüdünü kapsamamaktadır.

Somut olayın ayırt edici yönü, temerrüdün bir yönetim boşluğuyla aynı zamana denk gelmesidir. Borçlu şirkette yetkili organ oluşmadıkça ne yapılandırma müzakeresinin ne de tahsilat sürecinin sağlıklı yürümesi beklenebilir. Şirketin SPK izninin iptal edildiği yönündeki bilgi ise gerçeği yansıtmamaktadır: 2025 yılında onaylanan halka arz şirketin kendi kararıyla ertelenmiş ve izahnamenin geçerlilik süresi dolmuştur.

## Kaynakça

- Dünya Varlık Yönetim A.Ş., 11.11.2026 tarihli KAP açıklamaları (haber kaynakları üzerinden).
- Turkrating, 10.11.2026 ve 11.11.2026 tarihli derecelendirme açıklamaları (haber kaynakları üzerinden).
- Diken, CNBC-e, Bloomberg HT ve Ekovitrin, 11.11.2026 tarihli haberler.
- SPK Bülteni, 16.01.2025 (halka arz onayı); şirketin Ocak 2025 tarihli erteleme açıklaması.
- 6362 sayılı Sermaye Piyasası Kanunu m.9, m.31/A, m.82 ila 84.
- Borçlanma Araçları Tebliği (VII-128.8); Borçlanma Aracı Sahipleri Kurulu Tebliği (II-31/A.1).
- 5411 sayılı Bankacılık Kanunu m.143; Varlık Yönetim Şirketlerinin Kuruluş ve Faaliyet Esasları ile Devralma İşlemleri Hakkında Yönetmelik.
- 6098 sayılı Türk Borçlar Kanunu m.117; 4721 sayılı Türk Medeni Kanunu m.599.
- KNZ Legal, "Fon Krizi ve 7596 Sayılı Kanun: Önce Fiyat Çöktü, Sonra Likidite" (11.11.2026).`,
  },
  {
    slug: "msci-sabanci-ve-astor-standart-endeks-karari",
    date: "2026-11-12",
    category: "sermaye-piyasasi",
    lang: "tr",
    author: "Kaan Zabtiyeoğulları",
    body: `## 1. Giriş

Küresel endeks sağlayıcısı MSCI, Kasım 2026 endeks gözden geçirmesinin sonuçlarını 11 Kasım 2026 gecesi açıklamıştır. Buna göre Sabancı Holding (SAHOL) ve Astor Enerji (ASTOR), MSCI Türkiye Standart Endeksi'nden çıkarılarak Küçük Ölçekli Şirketler Endeksi'ne alınmıştır. Standart endekse yeni pay eklenmemiş, küçük ölçekli endeksten 18 pay çıkarılmıştır. Değişiklikler 30 Kasım 2026 seans kapanışından itibaren geçerli olacaktır.

Karar kamuoyunda ağırlıklı olarak iki şirkete ilişkin bir gelişme olarak ele alınmıştır. Bu yazı ise kararın yönüne odaklanmaktadır. Yazının temel savı şudur: MSCI'ın 15 Ekim 2026'da ilan ettiği dondurma, Türkiye endekslerinde asimetrik bir rejim yaratmıştır. Çıkarma ve alt segmente geçiş işlemleri uygulanmakta, ekleme ve üst segmente geçiş işlemleri ise uygulanmamaktadır. Kasım sonuçları bu rejimin ilk uygulamasıdır. Rejim sürdüğü müddetçe Türkiye standart endeksi yalnızca daralabilir; rejimin sona ermesi de ihraççıların değil düzenleyici otoritelerin atacağı adımlara bağlıdır.

> Bu yazı genel bilgilendirme amaçlıdır; hukuki danışmanlık veya yatırım tavsiyesi niteliği taşımaz ve herhangi bir pay için alım satım önerisi içermez.

## 2. Açıklanan Değişiklikler

- Standart endeks. SAHOL ve ASTOR endeksten çıkarılmıştır; endekse yeni pay eklenmemiştir.
- Küçük ölçekli şirketler endeksi. Anılan iki şirket endekse eklenmiş, 18 şirket çıkarılmıştır. Basında yer alan listeye göre çıkarılan şirketler şunlardır: Ahlatcı Doğal Gaz, Altınkılıç, Batıçim, Batısöke, Eczacıbaşı İlaç, Gen İlaç, Hektaş, Işıklar Enerji, LDR Turizm, Lydia Holding, Margün Enerji, Odine Solutions, Pasifik Eurasia, Peker GYO, Ral Yatırım Holding, Selçuk Ecza, Tera Yatırım Teknoloji Holding ve Türk Traktör.
- Yürürlük. Değişiklikler 30 Kasım 2026 seans kapanışından itibaren geçerlidir.

MSCI şirket bazında gerekçe açıklamamıştır. Bununla birlikte iki hususa işaret etmek gerekir. İlk olarak Astor, standart endekse Ağustos 2026 gözden geçirmesinde, 1 Eylül 2026'dan geçerli olmak üzere dâhil edilmiştir; dolayısıyla endeksten üç ay sonra çıkarılmaktadır. İkinci olarak, çıkarılan 18 şirketten Odine, Işıklar Enerji, Altınkılıç, Pasifik Eurasia ve Selçuk Ecza, SPK'nın Eylül 2026'dan itibaren Sermaye Piyasası Kanunu m.107/1 kapsamında suç duyurusunda bulunduğunu açıkladığı paylar arasındadır; Peker GYO ve Tera Yatırım Teknoloji Holding ise tasfiye sürecindeki fonların büyük pozisyonları arasında yer almıştır. Suç duyurusu mahkûmiyet anlamına gelmemektedir ve MSCI bu ilişkiyi gerekçe olarak göstermemiştir; burada yalnızca örtüşmeye dikkat çekilmektedir.

## 3. Standart Endeksten Çıkarılmanın Anlamı

MSCI'ın Türkiye evreni iki bileşenden oluşur: büyük ve orta ölçekli şirketleri kapsayan standart endeks ile küçük ölçekli şirketler endeksi. MSCI Gelişmekte Olan Piyasalar Endeksi ülkelerin standart endeks bileşenlerinden oluşturulur ve küresel pasif fonların önemli bölümü bu endeksi izler. Küçük ölçekli şirketler endeksini izleyen fon büyüklüğü belirgin biçimde daha düşüktür.

Bu nedenle alt segmente geçen şirket MSCI evreninde kalmakla birlikte en geniş yatırımcı kitlesinin zorunlu portföyünün dışına çıkar. Endeksi birebir izleyen fonlar bakımından bu bir tercih değildir; bu fonlar pozisyonlarını yürürlük tarihindeki kapanışa yakın biçimde azaltır. Fiyat etkisinin önceden belirlenmesi mümkün değildir; duyuru ile yürürlük arasındaki yaklaşık üç haftalık süre piyasaya bu etkiyi önceden fiyatlama imkânı vermektedir.

Boyut segmentleri arasındaki geçişler, MSCI yönteminde serbest dolaşıma göre düzeltilmiş piyasa değeri eşiklerine ve tampon bölgelere göre belirlenir. Dolayısıyla alt segmente geçiş şirkete ilişkin bir değer yargısı değil, bir ölçüm sonucudur. Ölçüme konu iki büyüklük piyasa değeri ve fiili dolaşımdır.

## 4. 15 Ekim 2026 Tarihli Dondurma Kararı ve Asimetrik İşleyişi

MSCI, 15 Ekim 2026'da Türk payları bakımından derhâl geçerli ve süresi belirsiz bir dondurma ilan etmiştir. Duyuruya göre dondurulan işlemler şunlardır:

- Yabancı dâhil etme faktörü (FIF) artışları.
- Pay sayısı (NOS) artışları.
- MSCI Türkiye Yatırım Yapılabilir Piyasa Endeksi'ne yeni eklemeler.
- Üst boyut segmentine geçişler.

Duyuruda çıkarmalar ve alt segmente geçişler dondurulan işlemler arasında sayılmamıştır; Kasım sonuçları da bu işlemlerin uygulanmaya devam ettiğini göstermiştir.

Kararın gerekçesi, 2026 yılı piyasa sınıflandırma değerlendirmesinde kurumsal yatırımcıların dile getirdiği kaygıdır: bazı küçük ölçekli şirketlerle yakın bağlantılı fonlar aracılığıyla eşgüdümlü işlem yapıldığı şüphesi ve bunun fiili dolaşım tahminlerinin güvenilirliğini zedelemesi. MSCI üç alanda ilerleme beklemektedir: gerçek faydalanıcının ayrıntılı ve zamanında kamuya açıklanması, eşgüdümlü işlemlere karşı etkin gözetim ve yaptırım, fiili dolaşımı yapısal olarak bozulmuş payların ele alınmasına ilişkin şeffaf ve kurala dayalı bir çerçeve. Haziran 2027'ye kadar yeterli ilerleme sağlanmaması hâlinde MSCI, Türkiye'nin gelişmekte olan piyasa statüsünden sınır piyasa veya tekil piyasa statüsüne alınması için istişare süreci başlatmayı değerlendireceğini açıklamıştır. S&P Dow Jones Indices de 5 Kasım 2026'da Türk paylarına ilişkin bazı endeks değişikliklerini dondurmuştur.

Bu yapının sonucu şudur: düzeltilmiş piyasa değeri eşiğin altına inen şirket standart endeksten çıkarılırken, eşiğin üzerine çıkan şirket dondurma kaldırılmadıkça endekse alınamamaktadır. Böylece bileşen sayısı azalmakta ve Türkiye'nin gelişmekte olan piyasalar endeksindeki ağırlığı düşmektedir.

## 5. Kararın Hukuki Niteliği

Endeks sağlayıcısı kamu otoritesi değildir. Kararı idari işlem niteliği taşımadığından iptal davası, idari itiraz veya savunma hakkı gibi kurumların burada uygulanma imkânı bulunmamaktadır. MSCI ile sözleşme ilişkisi içinde olanlar, endeksi lisans sözleşmesiyle kullanan fon yöneticileridir; ihraççı bu ilişkinin tarafı değildir.

Sağlayıcıyı bağlayan, kendi yayımladığı yöntem ile tabi olduğu gösterge düzenlemeleridir. Avrupa Birliği'nde 2016/1011 sayılı Gösterge Tüzüğü, uluslararası düzeyde ise IOSCO ilkeleri, sağlayıcının yönteme uygun, tutarlı ve önceden duyurulmuş biçimde hareket etmesini öngörmektedir. İhraççının başvurabileceği araç bu nedenle dava değil, veridir: ortaklık yapısının ve fiili dolaşımın bağımsız olarak doğrulanabilir hâle getirilmesi.

## 6. MSCI Taleplerinin Türk Sermaye Piyasası Hukukundaki Karşılığı

- Gerçek faydalanıcının açıklanması. Özel Durumlar Tebliği (II-15.1) m.12, bir kişinin veya birlikte hareket eden kişilerin payının yüzde 5, 10, 15, 20, 25, 33, 50, 67 ve 95 eşiklerine ulaşması, bunları aşması veya bunların altına düşmesi hâlinde bildirim yükümlülüğü öngörmektedir. Sorun eşiklerden değil, birlikte hareket olgusunun ve fonun ardındaki nihai yatırımcının tespitinden kaynaklanmaktadır. Bir fonun şirket sermayesinin yüzde 30'unu elinde tuttuğu ve fon yatırımcısının hâkim ortakla bağlantılı olduğu bir durumda, kayden halka açık görünen pay fiilen dolaşımda değildir.
- Eşgüdümlü işlemlerin önlenmesi. Bu talebin karşılığı Sermaye Piyasası Kanunu m.107 (piyasa dolandırıcılığı) ve m.104 (piyasa bozucu eylemler) hükümleridir. SPK'nın Eylül 2026'dan itibaren açıkladığı suç duyuruları bu kapsamdadır. MSCI'ın beklentisi münferit dosyalar değil, yaptırım uygulamasının inandırıcı ve sürekli olmasıdır.
- Fiili dolaşımın güvenilirliği. Bu talebin karşılığı Merkezi Kayıt Kuruluşu'nun hesapladığı fiili dolaşımdaki pay oranıdır. MSCI duyurusuna göre Türk otoriteleri, nihai sahibi hâlihazırda dolaşım dışı sayılan kişilerin fon aracılığıyla elinde tuttuğu payları fiili dolaşımdan çıkaran bir çerçeve getirmiştir. MSCI bu adımı başlangıç niteliğinde görmekte ve sonuçlarının değerlendirilmesi için ek süreye ihtiyaç bulunduğunu belirtmektedir.

Hazine ve Maliye Bakanı Mehmet Şimşek'in MSCI taleplerini "son derece makul" olarak nitelendirdiği basına yansımıştır. Hukuki açıdan bakıldığında talepler yeni bir yasal düzenleme gerektirmemekte; mevcut kuralların eksiksiz ve dışarıdan gözlemlenebilir biçimde uygulanmasını gerektirmektedir.

## 7. İhraççılar ve Sözleşme Uygulaması Bakımından Sonuçlar

- Halka açık ortaklıklar. Endeks üyeliği artan ölçüde bir veri kalitesi sorunudur. Ortaklık yapısının, ilişkili fon pozisyonlarının ve fiili dolaşım hesabının üçüncü kişilerce doğrulanabilecek biçimde açıklanabilmesi gerekmektedir.
- Sermaye artırımı veya ikincil halka arz planlayan ortaklıklar. Dondurma sürdüğü müddetçe pay sayısındaki artış MSCI endeks ağırlığına yansımamaktadır. Bu nedenle yeni paylar için endeks fonlarından kendiliğinden talep gelmesi beklenmemeli; ihraç takvimi ve fiyatlaması bu veriye göre değerlendirilmelidir.
- Sözleşmeler. Endeks üyeliğine atıf yapan hükümlerin gözden geçirilmesi yerinde olacaktır: fon içtüzük ve izahnamelerindeki yatırım evreni tanımları, yapılandırılmış ürünlerin dayanak varlık tanımları, kredi ve pay rehni sözleşmelerindeki kabul edilebilir teminat tanımları. Bir payın MSCI standart endeks bileşeni olması koşuluna bağlanmış bir yatırım sınırı veya teminat şartı, 30 Kasım 2026'da kendiliğinden ihlale dönüşebilir.

## 8. Sonuç

Kasım 2026 kararıyla Sabancı Holding ve Astor Enerji MSCI evreninden çıkmamış, standart endeksten küçük ölçekli şirketler endeksine geçmiştir. Kararın asıl önemi, 15 Ekim 2026 tarihli dondurmanın asimetrik işleyişini ortaya koymasındadır: endeksten çıkış mümkün, endekse giriş ise dondurma süresince kapalıdır.

Karar, özel hukuk kişisi olan bir endeks sağlayıcısının kendi yöntemini uygulamasından ibarettir; bu nedenle ihraççılar bakımından hukuki bir başvuru yolu bulunmamaktadır. Rejimin sona ermesi, gerçek faydalanıcı şeffaflığı, eşgüdümlü işlemlere karşı yaptırım ve fiili dolaşım hesabı alanlarında mevcut sermaye piyasası mevzuatının tutarlı biçimde uygulanmasına bağlıdır. Haziran 2027'ye kadar yeterli ilerleme sağlanmaması hâlinde Türkiye'nin piyasa sınıflandırmasının istişareye açılması gündeme gelebilecektir.

## Kaynakça

- MSCI, "MSCI Implements a Freeze on the MSCI Turkey Indexes", 15.10.2026 (ir.msci.com).
- MSCI Kasım 2026 Endeks Gözden Geçirmesi sonuçları, 11.11.2026 (Anadolu Ajansı, Investing.com, Diken ve Borsatek haberleri üzerinden).
- MSCI Ağustos 2026 Endeks Gözden Geçirmesi (Bloomberg HT ve Paratic haberleri üzerinden).
- Bloomberg ve Reuters, 15 ve 16.10.2026 tarihli haberler.
- S&P Dow Jones Indices'in 05.11.2026 tarihli kararına ilişkin haberler (Forbes Türkiye).
- MSCI Global Investable Market Indexes Methodology.
- SPK, Özel Durumlar Tebliği (II-15.1) m.12; 6362 sayılı Sermaye Piyasası Kanunu m.104 ve m.107.
- (AB) 2016/1011 sayılı Gösterge Tüzüğü; IOSCO, Principles for Financial Benchmarks (2013).
- KNZ Legal, "Fon Krizi ve 7596 Sayılı Kanun: Önce Fiyat Çöktü, Sonra Likidite" (11.11.2026).`,
  },
  {
    slug: "tcmb-kredi-buyume-sinirlari-2026-49",
    date: "2026-11-12",
    category: "bankacilik",
    lang: "tr",
    author: "Kaan Zabtiyeoğulları",
    body: `## 1. Giriş

Türkiye Cumhuriyet Merkez Bankası (TCMB), 11 Kasım 2026 tarihli ve 2026-49 sayılı "Makroihtiyati Çerçeveye İlişkin Basın Duyurusu" ile iki değişiklik açıklamıştır. İlk olarak, Türk lirası kredilerde bankalara uygulanan sekiz haftalık büyüme sınırları dört kredi türünde yarımşar puan yükseltilmiştir. İkinci olarak, bankaların ve finansman şirketlerinin bir yıldan uzun vadeli mevduat dışı yükümlülükleri için tesis ettikleri zorunlu karşılıklara Türk lirası cinsinden faiz veya telafi ödemesi yapılmasına karar verilmiştir.

Karar kamuoyunda ağırlıklı olarak krediye erişimin kolaylaştığı biçiminde yorumlanmıştır. Bu yazı, düzenlemenin hukuki niteliğini ve kredi ilişkisine etkisini incelemektedir. Yazının temel savı şudur: düzenleme kredi müşterisine herhangi bir talep hakkı tanımamakta ve kredi faizlerini doğrudan değiştirmemektedir. Değişen, banka bilançosu düzeyinde uygulanan bir büyüme sınırıdır. Düzenlemenin tekil kredi talebine etkisi, ilgili bankanın hesaplama döneminde sınıra ne ölçüde yaklaştığına bağlıdır. Uzun vadede daha önemli sonuç doğurması beklenen husus ise daha az tartışılan ikinci değişikliktir.

> Bu yazı genel bilgilendirme amaçlıdır; hukuki danışmanlık niteliği taşımaz. Oranlar TCMB duyurusunu aktaran 11 ve 12 Kasım 2026 tarihli haberlere dayanmaktadır; uygulamada bağlayıcı olan Tebliğ ve Uygulama Talimatı metnidir.

## 2. Değişikliğin Kapsamı

- Tüketicilere kullandırılan ihtiyaç kredileri: yüzde 3'ten yüzde 3,5'e.
- Tüketicilere kullandırılan taşıt kredileri: yüzde 3'ten yüzde 3,5'e.
- KOBİ'lere kullandırılan Türk lirası krediler: yüzde 5'ten yüzde 5,5'e.
- KOBİ dışı işletmelere kullandırılan Türk lirası krediler: yüzde 2'den yüzde 2,5'e.

Oranların tamamı sekiz haftalık dönemler için geçerlidir. Duyuruda düzenlemenin amacı, makrofinansal istikrarın ve parasal aktarım mekanizmasının desteklenmesi olarak ifade edilmiştir.

## 3. Büyüme Sınırının İşleyişi

Büyüme sınırı hukuken bir yasak değil, bir maliyet unsurudur. Düzenlemenin dayanağı 1211 sayılı Türkiye Cumhuriyet Merkez Bankası Kanunu'nun zorunlu karşılıklara ilişkin m.40 hükmü ile Zorunlu Karşılıklar Hakkında Tebliğ'dir (Sayı: 2013/15). 2024 yılından itibaren duyurulan çerçevede, ilgili kredi türünde sınırı aşan banka, aşım tutarı kadar Türk lirasını TCMB nezdinde zorunlu karşılık olarak bloke tutmaktadır. Banka sınırı aşabilir; ancak aşan tutarın karşılığını getirisi bulunmayan bir hesapta tutmak zorunda kalır. Güncel oran, süre ve istisnalar Tebliğ'de ve Uygulama Talimatı'nda düzenlenmiştir. İkincil kaynaklarda ihracat, yatırım ve esnaf kredileri gibi bazı kullandırımların sınır dışında tutulduğu belirtilmektedir.

Bu yapının iki sonucu bulunmaktadır. Birincisi, sınır banka ve kredi türü bazında uygulanır; müşteri bazında uygulanmaz. İkincisi, sınırın fiilen bağlayıcı olduğu an dönem sonudur. Sekiz haftalık dönemin sonuna yaklaşırken sınıra ulaşmış olan banka yeni kullandırımı izleyen döneme erteleyebilir veya fiyatı yükseltebilir. Aynı kredi talebinin kısa aralıklarla farklı sonuçlanması çoğu durumda bu mekanizmayla açıklanabilir.

## 4. Sınırların Yıllık Karşılığı

Sekiz haftalık sınırın yıllık karşılığı, bir yılda altı buçuk dönem bulunduğu ve büyümenin bileşik işlediği varsayımıyla hesaplanabilir:

- İhtiyaç ve taşıt kredileri. Yüzde 3 oranı yıllık yaklaşık yüzde 21,2'ye, yüzde 3,5 oranı yaklaşık yüzde 25,1'e karşılık gelmektedir.
- KOBİ kredileri. Yüzde 5 oranı yıllık yaklaşık yüzde 37,3'e, yüzde 5,5 oranı yaklaşık yüzde 41,6'ya karşılık gelmektedir.
- KOBİ dışı ticari krediler. Yüzde 2 oranı yıllık yaklaşık yüzde 13,7'ye, yüzde 2,5 oranı yaklaşık yüzde 17,4'e karşılık gelmektedir.

Bu oranlar duyurudaki sınırlardan hareketle bu yazı için hesaplanmıştır ve bir üst sınırı göstermektedir: bankanın her dönemde sınırın tamamını kullanması hâlinde ulaşacağı nominal büyüme. Oranlar enflasyondan arındırılmamıştır. Yarım puanlık artış yıllık bazda yaklaşık dört puana karşılık gelmektedir. Bununla birlikte kredi türleri arasındaki sıralama değişmemiştir: en dar alan KOBİ dışı ticari kredilerde, en geniş alan KOBİ kredilerindedir.

## 5. Düzenlemenin Hukuki Niteliği

Basın duyurusu bir bilgilendirme aracıdır; norm niteliği taşımaz. Bankaları bağlayan metin Tebliğ değişikliği ve Uygulama Talimatı'dır. Yürürlük tarihi, hesaplama dönemi ve geçiş hükümleri bu metinlerden anlaşılır. Uygulamada bankalar duyuruyla birlikte pozisyon almakta ise de bir uyuşmazlıkta dayanılacak metin duyuru değildir.

Söz konusu sınırlar BDDK'nın bireysel kredilere ilişkin düzenlemelerinden de ayrıdır. Kredi vadeleri, kredi kartı limit ve taksit kuralları ile kredi değer oranları BDDK düzenlemelerinin konusudur ve bu kararla değişmemiştir.

## 6. Kredi İlişkisi Bakımından Sonuçlar

- Sınırın yükseltilmesi müşteriye kredi talep hakkı vermez. Bankanın sözleşme yapma zorunluluğu bulunmamaktadır; kredi kararı bankanın kendi risk değerlendirmesine bağlıdır.
- Genel kredi sözleşmesinin imzalanmış ve limit tahsis edilmiş olması da çoğu durumda kullandırım güvencesi anlamına gelmez. Standart sözleşmeler, limitin bankayı kullandırıma zorlamadığını ve bankanın limiti azaltabileceğini veya kullandırımı durdurabileceğini öngörmektedir. Büyüme sınırının bağlayıcı olduğu dönemlerde bu hükümler fiilen uygulanmaktadır. Yatırım veya ihale takvimini banka limitine bağlayan şirketlerin, sözleşmede bağlayıcı bir kullandırım taahhüdü bulunup bulunmadığını incelemesi gerekir; böyle bir taahhüt yoksa takvim riski şirketin üzerindedir.
- Sınırlar nakdi Türk lirası kredi bakiyesi üzerinden uygulanır. Teminat mektubu gibi gayrinakdi krediler bu hesabın doğrudan konusu değildir. Mektubun tazmin edilerek nakde dönüşmesi hâlinde risk bankanın nakdi kredi tarafına geçer; bunun büyüme hesabına ne şekilde dâhil edileceği Talimat'taki tanımlara bağlıdır.
- Reddedilen bir talepte uygulamada izlenebilecek yol, ret gerekçesinin bankadan öğrenilmesi ve engelin dönem sonu sınırından kaynaklanması hâlinde talebin yeni dönemde yinelenmesidir.

## 7. Uzun Vadeli Yükümlülüklere İlişkin Zorunlu Karşılık Düzenlemesi

Bankalar ve finansman şirketleri yalnızca mevduat için değil, mevduat dışı yükümlülükleri için de zorunlu karşılık tesis etmektedir. İhraç edilen tahvil ve bonolar ile yurt dışından sağlanan sendikasyon ve seküritizasyon kredileri bu kapsamdadır. Yeni düzenlemeyle, bu yükümlülüklerden vadesi bir yılı aşanlar için tesis edilen karşılıklara Türk lirası cinsinden faiz veya telafi ödenecektir; yükümlülüğün yabancı para cinsinden olması hâlinde de ödeme Türk lirası olarak yapılacaktır. Oran ve koşullar erişilebilen kaynaklarda yer almamaktadır.

Zorunlu karşılık, bankanın sağladığı kaynağın bir bölümünü düşük getirili veya getirisiz biçimde bağladığından o kaynağın fiilî maliyetini artırır. Uzun vadeli kaynağa ilişkin karşılığa getiri ödenmesi, bu kaynağın maliyetini kısa vadeli kaynağa kıyasla düşürmektedir. Düzenleme bu yönüyle bilançonun pasif tarafında vadenin uzatılmasını teşvik etmektedir.

Finansman hukuku bakımından beklenebilecek sonuç, bankaların ve finansman şirketlerinin bir yıldan uzun vadeli ihraçlara daha fazla yönelmesi ve sendikasyon yenilemelerinde vadenin bir yılın üzerine taşınmasına yönelik çabaların artmasıdır. Düzenleme, altyapı ve proje finansmanında uzun vadeli kaynak teminini güçleştiren unsurlardan birine yöneliktir; ancak sorunu tek başına çözecek nitelikte değildir.

## 8. Sonuç

2026-49 sayılı duyuruyla açıklanan değişiklik, kredi müşterisine doğrudan hak tanıyan veya kredi faizlerini belirleyen bir düzenleme değildir. Değişen, bankaların ihtiyaç, taşıt ve ticari Türk lirası kredilerinde sekiz haftalık dönemde ulaşabileceği büyüme sınırıdır. Sınırın aşılması krediyi geçersiz kılmamakta ve müşteriyi etkilememektedir; yaptırım, aşım tutarı kadar zorunlu karşılığın bloke edilmesi suretiyle bankanın maliyetine yansımaktadır. Konut kredileri ve kredi kartları duyuruda sayılan dört kredi türü arasında yer almamaktadır.

Düzenlemenin kredi sözleşmeleri bakımından hatırlattığı temel husus, tahsis edilmiş limitin kural olarak kullandırım taahhüdü niteliği taşımamasıdır. Bir yıldan uzun vadeli mevduat dışı yükümlülüklere ilişkin zorunlu karşılıklara getiri ödenmesi ise bankaların fonlama vadesini uzatmaya yönelik yapısal bir teşvik olarak değerlendirilebilir. Hesaplama dönemi ve yürürlük bakımından Tebliğ değişikliği ile Uygulama Talimatı esas alınmalıdır.

## Kaynakça

- TCMB, Makroihtiyati Çerçeveye İlişkin Basın Duyurusu, Sayı: 2026-49, 11.11.2026 (Anadolu Ajansı kaynaklı haberler üzerinden).
- 1211 sayılı Türkiye Cumhuriyet Merkez Bankası Kanunu m.40.
- Zorunlu Karşılıklar Hakkında Tebliğ (Sayı: 2013/15) ve Uygulama Talimatı.
- Borsa Gündem, Karar ve Türkiye gazetesi, 11 ve 12.11.2026 tarihli haberler.
- Prozon Sirküler No. 2031, 12.11.2026.`,
  },
  {
    slug: "fon-krizi-ve-7596-sayili-kanun",
    date: "2026-11-11",
    category: "yatirim",
    lang: "tr",
    author: "Kaan Zabtiyeoğulları",
    body: `Eylül 2026'da yedi portföy yönetim şirketinin 131 fonu SPK kararlarıyla tasfiyeye alındı; 455.758 yatırımcı bu süreçten etkilendi. 27 Ekim 2026 tarihli Resmî Gazete'de yayımlanan 7596 sayılı Kanun bu fonlar için özel bir tasfiye rejimi getirdi ve 17 Eylül 2026'dan itibaren geçerli sayıldı. İletişim Başkanlığı'nın 3 Kasım 2026 tarihli, Fon Koordinasyon Kurulu'nun dokuzuncu toplantısına ilişkin açıklamasına göre 30 Ekim 2026 itibarıyla 100 fonda 247.839 yatırımcıya toplam 97,3 milyar TL ödeme yapıldı; bunun 29,3 milyar TL'si Atlas, Pusula ve Tera fonlarının olağanüstü tasfiyesinde, 68 milyar TL'si A1 Capital, Bulls, Pardus ve Hedef fonlarının olağan tasfiyesinde ödendi.

Kriz hakkındaki yazıların çoğu yatırımcının ne yapması gerektiğini anlatıyor. Bu yazı bir adım geriden başlıyor: fonlar neye dayanıyordu, SPK neyi inceliyor ve Kanun'un en çok tartışılan tercihleri neden bu şekilde yazıldı?

Bu yazının savı şudur: bu, likidite krizinden önce bir değerleme krizidir. Fon fiyatları, SPK'nın bugün piyasa dolandırıcılığı şüphesiyle incelediği paylara ve bu payları teminat alan ters repolara dayanıyordu. Net yatırım tutarı, ödeme sırası ve ödeme yasağı gibi Kanun tercihleri bu olgunun sonucu.

> Bu yazı genel bilgilendirme amaçlıdır; hukuki danışmanlık veya ödeme, öncelik ya da hız vaadi içermez. Rakamların yanında kaynak ve tarih belirtildi.

## Fiyat neye dayanıyordu: TP2 ve TLY

Bir fonun pay fiyatı, portföyündeki varlıkların toplam değerinden borçların düşülmesiyle bulunan net varlık değerinin pay sayısına bölünmesiyle çıkar. Portföydeki varlıkların değerlemesi tartışmalıysa fiyat da tartışmalıdır. Krizin hukuki sonuçlarını anlamak için iki fonun portföyüne bakmak yeterli.

TP2, Tera Portföy Para Piyasası (TL) Fonu. Para piyasası fonu, yatırımcının gözünde güvenli liman. 31 Ağustos 2026 tarihli KAP portföy raporunun ikincil dökümüne göre portföyün yaklaşık yüzde 62,6'sı ters repodaydı. Ters repo, fonun nakit verip karşı taraftan teminat aldığı işlem; güvenli sayılması teminatın kalitesine bağlı. Bu teminatın yaklaşık yüzde 34,6'lık kısmı devlet kâğıdı değil, pay ve fon katılma payıydı: yaklaşık yüzde 24,9 DSTKF payı ve yaklaşık yüzde 9,7 TPKGY kodlu bir kalem. Kamuoyuna yansıyan analizlere göre, Eylül başındaki KAP bildirimlerinde ters repo karşı tarafı Tera grubundan Tera Yatırım Menkul Değerler'di. Portföyde ayrıca Tera Yatırım Bankası ihraçları vardı (teminat ve doğrudan tutulanlar birlikte yaklaşık yüzde 10,9). TPKGY kalemi ikincil kaynaklarda Tera Portföy'ün kurucusu olduğu bir gayrimenkul yatırım fonunun payı olarak geçiyor. Bu bölüm KAP'taki birincil rapora değil, o raporu aktaran ikincil kaynaklara dayanıyor.

Yani fonun fiyatı, teminatının büyük ölçüde pay ve fon katılma payından oluştuğu ve karşı tarafının aynı grupta göründüğü ters repolara dayanıyordu.

TLY, Tera Portföy Birinci Serbest Fon. Serbest fon yoğunlaşabilir; sorun yoğunlaşmanın derecesi. Ağustos ayı portföy raporunu aktaran haberlere göre en büyük üç pozisyon DSTKF (yüzde 21,05), OZATD (yüzde 19,43) ve TEHOL'dü (yüzde 10,63). Veri siteleri biraz farklı rakamlar veriyor; bu yüzden ilk iki pozisyonun toplamını yaklaşık yüzde 40 ile 45 arası diye ifade etmek daha doğru. Kaynaklar arasındaki farklar nedeniyle tek rakam yerine aralık verilmiştir. Daha da dikkat çekeni, 23 Ağustos verilerine göre fonun bazı şirketlerin sermayesindeki payı: TEHOL'de yaklaşık yüzde 40, PEKGY'de yaklaşık yüzde 30. Bir fon, borsadaki bir şirketin sermayesinin üçte biri ile dörtte biri arasında bir paya sahipse, o payların piyasa fiyatı fonun net varlık değeriyle birlikte hareket eder ve çıkış başlandığında satış fiyatı düşer.

Bu iki fonun ortak noktası şu: fiyat, birçok yerde aynı grubun ve aynı birkaç payın değerine bağlıydı. Kanun'un tasfiye mantığını anlamak için bu fotoğrafın akılda kalması gerekiyor.

## SPK'nın izi: on altı pay

SPK, Eylül ve Kasım arasındaki bültenlerinde (2026/59, 65, 66, 69, 70, 73, 77 ve 79) toplam on altı payla ilgili olarak Sermaye Piyasası Kanunu m.107/1 (işlem bazlı piyasa dolandırıcılığı) kapsamında suç duyurusunda bulunduğunu açıkladı. Suç duyurusu, ceza davası açılması ya da mahkûmiyet demek değil; suçsuzluk karinesi geçerli. Yine de tablo, fon portföyleriyle çakışıyor. Aşağıda her pay için kod, ihraççı, bülten numarası ve payın Ağustos 2026 TLY portföyünde görünüp görünmediği yer alıyor.

- KTLEV, Katılımevim. Bülten 2026/59. TLY'de yok.
- GUNDG, Gündoğdu Gıda. Bülten 2026/59. TLY'de yok.
- DSTKF, Destek Finans Faktoring. Bülten 2026/59. TLY'de var.
- OZATD, Özata Denizcilik. Bülten 2026/65. TLY'de var.
- TRHOL, Tera Finansal Yatırımlar Holding. Bülten 2026/66. TLY'de var.
- ODINE, Odine Solutions Teknoloji. Bülten 2026/69. TLY'de yok.
- VSNMD, Vişne Madencilik. Bülten 2026/70. TLY'de yok.
- IEYHO, Işıklar Enerji. Bülten 2026/70. TLY'de yok.
- ALKLC, Altınkılıç. Bülten 2026/73. TLY'de var.
- ANELE, Anel Elektrik. Bülten 2026/73. TLY'de var.
- PASEU, Pasifik Eurasia Lojistik. Bülten 2026/77. TLY'de yok.
- SELEC, Selçuk Ecza Deposu. Bülten 2026/77. TLY'de var.
- MANAS, Manas Enerji. Bülten 2026/77. TLY'de var.
- TMPOL, Temapol Polimer. Bülten 2026/79. TLY'de var.
- ISVEA, İsvea Seramik ve Banyo Ürünleri. Bülten 2026/79. TLY'de yok.
- TERA, Tera Yatırım Menkul Değerler. Bülten 2026/79. TLY'de var.

TLY sütunu, 31 Ağustos 2026 portföy raporunu aktaran ikincil döküme (fon.org.tr) göre dolduruldu. TERA kodu, Tera grubunun aracı kurumu Tera Yatırım Menkul Değerler'in kendi borsa kodudur. TEHOL ve PEKGY bu listede yer almaz.

On altı payın dokuzu Ağustos sonunda TLY portföyünde görünüyor; bu dokuz payın toplam ağırlığı yaklaşık yüzde 59 (ikincil dökümlere göre; kaynaklar arasında küçük farklar var). Bültenlerde yedi payda Tera Portföy'ün kendi işlemleri de anılıyor. DSTKF ise hem TLY'nin en büyük pozisyonu hem TP2'nin ters repo teminatıydı.

Bu yazının sınırı: SPK'nın incelediği eylemin doğruluğuna dair bir hüküm verilmemektedir. Hukuki açıdan önemli olan, Kanun'un m.3/6'daki ödeme yasağı: SPKn m.104, 106 ve 107'deki fiilleri fonların kullanımıyla işleyen ve SPK'nın tespit edip MKK aracılığıyla tasfiye kuruluşlarına bildirdiği kişi ve kurumlara tasfiye ve geri kazanım hesabından ödeme yapılmıyor. Bu husus, Kanun'un tartışmalı maddeleri ele alınırken açılmaktadır.

## Tasfiye matematiği

Kamuoyunda "1 milyon TL'ye kadar ara ödeme" diye dolaşan ifade eksik. 27 Ekim tarihli SPK kararı (76/1903) m.6, bir yatırımcıya yapılacak ara ödemeyi üç büyüklüğün en düşüğü olarak belirliyor: yatırımcının net yatırım tutarı (ara ödemede MKK'nın endeksleme uygulamadan hesapladığı tutar), payın değeri ve 1 milyon TL tavanı. Yani 1 milyon TL bir hak değil, üst sınır.

Pay değerinin hangi tarihe göre hesaplanacağı fon türüne göre değişiyor. Para piyasası fonlarında 16 Eylül 2026 gün sonu değeri esas alınıyor. Diğer fonlarda ise ödeme hesabından önceki günün değeri. Para piyasası fonunda fiyat krizden önceki seviyede dondurulmuş gibi düşünülebilir; serbest ve değişken fonlarda portföy değeri ne kadar düşmüşse ödeme tavanı o kadar düşüyor.

Fonlar arasındaki sıra konusunda SPK'nın 27 Ekim basın duyurusuna göre ara ödemelere önce unvanında "para piyasası" ifadesi bulunan fonlardan başlanıyor. Fon içinde nakit yetmezse Kanun m.4/3 SPK'ya ödeme sırası belirleme yetkisi veriyor ve sıraya en küçük net yatırım tutarından başlanıyor; aynı fıkra, tüm pay sahipleri için asgari bir ara ödeme tutarı belirlenmesine de izin veriyor. Ara ödemelerde pay iadesi yapılmıyor; paylar yalnızca nihai ödemede iade ediliyor. Kanun m.4/4 ve SPK'nın 76/1903 sayılı kararı ayrıca genel hisse iade hesabını düzenliyor.

Sayısal örnek. Rakamlar varsayımsaldır; üçlü sınırı göstermek için. İki yatırımcının da net yatırım tutarı 800.000 TL olsun. Para piyasası fonundaki yatırımcının payları için esas alınan değer, 16 Eylül gün sonu itibarıyla 900.000 TL; tavan 1.000.000 TL. Üç büyüklüğün en düşüğü 800.000 TL olduğundan ara ödeme üst sınırı 800.000 TL. Serbest fondaki yatırımcının payları için esas alınan değer, ödeme hesabından önceki gün itibarıyla 300.000 TL; ara ödeme üst sınırı 300.000 TL.

Aynı parayı yatıran iki kişiden serbest fondaki, portföy bugün ne kadar ediyorsa onunla sınırlı kalıyor. Fon içi sıra ve nakit durumu bu tutarı daha da aşağı çekebilir. Önemli bir not: bunlar üst sınır; fiilen yapılan ödeme nakit ve sıra durumuna bağlı.

## Net yatırım tutarı neden seçildi

7596 sayılı Kanun m.4, yatırımcının hakkını hesaptaki görünen bakiyeyle değil, fona fiilen yatırdığı paradan çıkardığı para düşülerek bulunan net yatırım tutarıyla ölçüyor. Girişler TÜFE ve ÜFE ortalamasıyla endeksleniyor ve çıkışlar ilk giren ilk çıkar kuralıyla mahsup ediliyor. 1 milyon TL'lik ara ödeme de bu tutarla sınırlı kalıyor.

Yaklaşımın finansal mantığı şu: fon fiyatları şişmişse, pay sayısı üzerinden dağıtım yapmak erken girenin kağıt üzerindeki getirisini gerçek varlığa çevirir; geç girenin gerçek parası ise onun ödemesine gider. Net yatırım yaklaşımı bunu önler: herkes en fazla kendi yatırdığı paranın (endeksli) karşılığını alır, getiri ise ayrı bir hesaba tabi olur. m.4/4'teki gönüllü iade bu ayrımın ikinci ayağı.

Eleştiri iki yönlü. Bir taraf, erken girip kazanmış ya da çıkmaya çalışırken çıkamamış yatırımcının getirisinin fiilen silindiğini, bunun da mülkiyet hakkı açısından sorulması gerektiğini söylüyor. Öbür taraf, getiriye dayalı dağıtımın şişmiş fiyatları hukuken teşvik edeceğini ve geç girenin kaybını büyüteceğini savunuyor. Coşkun Genç, Kanun'un amacını savunuyor; ancak yatırımcı için itiraz yolunun öngörülmemesini eksiklik olarak görüyor. Maddelerin tartışmalı yönleri bir sonraki bölümde ele alınmaktadır.

Karşılaştırmalı not. Nakit giriş ve çıkışına dayalı dağıtım, Madoff tasfiyesinde kayyumun uyguladığı ve ABD İkinci Daire İstinaf Mahkemesi'nin 2011'de onadığı (In re Bernard L. Madoff Investment Securities LLC, 654 F.3d 229) net yatırım yöntemine benziyor. Bu aynı değil: oradaki dosya hayalî hesap ekstrelerine dayanıyordu, buradaki fonların gerçek varlıkları var ve Kanun girişleri enflasyona endeksliyor.

## Kanun'un tartışmalı maddeleri

Kanun'un dört tercihi hukuk çevrelerinde en çok tartışılan konular. Burada her biri için tartışmanın ekseni verilmektedir; ayrıntılı eleştiriler için kaynakçada Ersan Şen ve Coşkun Genç'in yazıları var. Aşağıdaki savunma ve eleştiri özetleri bu yazarlara değil, bu yazı için yapılan derlemeye aittir.

- m.3/5: satış emri verenler. 17 Eylül'e kadar verilen emirlerle TEFAS'ta bloke olan payların tasfiye kurallarına tabi sayılması, yani satış emrine öncelik tanınmaması. Savunanlar, takas kesinliğinin tamamlanmadığı bir işlemde herkesin aynı havuzda kalmasının eşitlik sağladığını söylüyor. Eleştirenler, emrini vermiş yatırımcının bu tercihle fiilen satışının geçersiz sayıldığını savunuyor.
- m.3/6: ödeme yasağı. SPKn m.104, 106 ve 107 kapsamındaki fiilleri fonlarla ya da fonların kullanımıyla işleyen ve SPK'nın tespit edip MKK aracılığıyla bildirdiği kişilere ödeme yapılmaması. Savunma: suç gelirinin yatırımcıya aktarılmasını önlemek. Eleştiri: suçsuzluk karinesi ve ölçülülük; suç şüphesi bildirilen işlemle ilgisi olmayan yatırımcının hakkını etkileme riski.
- m.4/4: gönüllü iade. Net yatırım tutarını aşan getirinin yatırımcı tarafından gönüllü olarak iadesi. Savunma: tasfiye maliyetini ve haksız kazanç ihtimalini azaltır. Eleştiri: "gönüllü" sözcüğü ile fiilen beklenen davranış arasındaki fark.
- m.4/3: ödeme sırası. Küçük tutarlı yatırımcılardan başlayan ödeme düzeni küçük yatırımcıyı önce nakde kavuşturuyor. Ancak büyük tutarlı yatırımcının beklemesi, kendi hesabına göre getiri kaybı doğurabilir.

## Sorumluluk haritası ve içtihat temizliği

Kanun'un sorumluluk düzeni. m.5, fondan hukuka aykırı biçimde çıkarılan varlıklar bakımından önce portföy yönetim şirketini, sonra SPK'nın belirleyeceği kişileri sorumlu tutuyor; alacak 6183 sayılı Kanun'a göre TMSF eliyle tahsil ediliyor ve görevden ayrılmak sorumluluğu sona erdirmiyor. m.6 ise CMK m.128 kapsamındaki el koymaları, TMSF'nin kayyum olarak yönetimini ve rehnedilemeyen, haczedilemeyen bir geri kazanım hesabını düzenliyor; geri kazanım hesabındaki tutarlar önce tasfiye kuruluşuna, tasfiye tamamlanmışsa Yatırımcı Tazmin Merkezi aracılığıyla pay sahiplerine ödenecek. m.5/4'e göre bu tahsil işlemlerinden doğan davalarda İstanbul idare mahkemeleri yetkili.

Hangi mahkeme? Yatırımcının portföy yönetim şirketine karşı açacağı tazminat davasında görevli mahkeme tartışmalı oldu. 2016 ve 2017 tarihli bazı daire kararları tüketici mahkemesi yönündeydi. Yargıtay Hukuk Genel Kurulu ise 16.05.2018 tarihli (E.2017/22, K.2018/1102) kararda oybirliğiyle, 07.02.2019 tarihli (E.2017/2348, K.2019/82) kararda oyçokluyla asliye ticaret mahkemesinin görevli olduğu sonucuna vardı. Bu çizgi bugün de belirleyici. Bazı yazarlar 2019/82 sayılı kararı tüketici lehine aktarıyor; resmî metinde sonuç tersine.

"Saklayıcı emsali" denen kararlar. Sosyal medyada ve bazı yazılarda, fon saklayıcısının sorumluluğu için emsal diye 11. Hukuk Dairesi'nin 2021/4503, 2022/2316 ve 2024/115 sayılı kararları ile İstanbul Bölge Adliye Mahkemesi 43. Hukuk Dairesi'nin 2026/469 sayılı kararı gösteriliyor. On altı karar resmî sistemlerden (Yargıtay, UYAP Emsal, Danıştay) tek tek incelenmiştir: bunların hiçbiri saklayıcıya ilişkin emsal değil. Örneğin 2021/4503 bireysel portföy yönetimine, 2026/469 ise tevdi mahalli tayinine ilişkin.

Bu yüzden sorumluluk tartışması şu üç ayrı soruya ayrılmalı: portföy yönetim şirketinin sorumluluğu (Kanun m.5 ve genel hukuk), saklayıcının sorumluluğu (emsal diye gösterilen kararlar bu konuyla ilgili değil) ve görevli mahkeme.

## Kanun'un dışında kalanlar

Kanun'un kapsamı m.1'de sınırlı tutuldu; her fon ve her yatırımcı bu rejime girmiyor. Dört grubu ayırmak gerekiyor:

- 26 Ekim kararları (SPK 2026/74 ve 2026/75). Bu tarihte tasfiyeye alınan kalan fonların (144 kalemlik liste) 7596 kapsamı dışında kaldığı yönündeki bilgi ikincil kaynaklara dayanıyor; yatırımcı kendi fonunu bülten ve tasfiye kuruluşunun duyurusundan teyit etmeli.
- GYF ve GSYF'ler. Gayrimenkul ve girişim sermayesi yatırım fonlarının hukuki rejimi ayrı; bunlar 26 Ekim kararlarında geçiyor ve 7596'nın kapsamına girip girmedikleri ayrıca teyit edilmelidir.
- Kanun öncesi tasfiyesi biten fonlar. Bu fonların yatırımcıları Kanun'un getirdiği özel ödeme düzenine tabi değil.
- Hedef Portföy ve Tera Yatırım. Hedef için 15 Ekim tarihli karar (70/1821) ayrı bir süreç başlattı; Tera Yatırım Menkul Değerler hakkında SPK'nın 2026/77 sayılı bülteninde yetki iptali kararı var. Araç kurum müşterilerinin tazmin rejimi (Yatırımcı Tazmin Merkezi) bu fon rejiminden ayrı.

Bir yatırımcının hangi grupta olduğunu bilmeden ne kadar ve ne zaman ödeme alacağına dair bir beklenti kurmak yanıltıcı olur.

## Süreler ve yol özeti

Bu yazının ana konusu yol haritası değil; yine de bütününü görmek için özet:

- Tasfiye kuruluşu üzerinden ödeme süreci. Tera fonlarında görevli kuruluş İş Bankası, diğer altı portföy yönetim şirketinin fonlarında Ziraat Bankası. Yatırımcı önce bu kuruluşun duyurularını ve SPK kararı (76/1903) hükümlerini izliyor.
- Kanun'daki ara ödeme ve geri kazanım hesabı. Net yatırım tutarı ve üçlü sınır (Tasfiye matematiği ve Net yatırım tutarı bölümleri). SPK, tasfiye süresini 20 Eylül tarihli 59/1710 sayılı kararla 3 aydan 6 aya çıkardı (usul ve esasların A/8. maddesindeki tasfiye süresi).
- Tazminat davası. Görevli mahkeme asliye ticaret hukuk mahkemesi (HGK çizgisi); kimin aleyhine açılacağı m.5 ve genel hukuk bağlamında dosyaya göre belirlenir.
- Cezai ve idari yollar. SPK'ya başvuru ve suç duyurusu yolu; suç duyurusu yapılan payların listesi "SPK'nın izi" bölümünde.

Bir dosyada hangi yöntemin uygun olduğu yatırımcının fonuna, işlem tarihlerine ve kaldığı yere göre değişir. Zamanaşımı ve hak düşürücü süreler her dosya için ayrıca incelenmelidir; bu yazıdan süre hesabı yapılmamalıdır.

## Sık sorulan sorular

7596 sayılı Kanun hangi fonları kapsıyor, hangilerini kapsamıyor? 17 Eylül SPK kararlarıyla tasfiyesine karar verilen ve Kanun yayımlandığında bitmemiş fonları (m.1); SPK'ya göre uygulamada Tera, Pusula ve Atlas fonları. Kapsam dışı gruplar "Kanun'un dışında kalanlar" bölümünde sıralanmıştır.

Ara ödeme tutarı nasıl hesaplanıyor, neden herkes aynı tutarı almaz? Net yatırım tutarı, pay değeri ve 1 milyon TL'nin en düşüğü esas alınıyor; ilk iki değer yatırımcıdan yatırımcıya ve fondan fona değişiyor.

Net yatırım tutarı nedir, hesaptaki bakiyeden neden farklı? Yatırılan paradan çıkarılan para düşülür, girişler TÜFE/ÜFE ortalamasıyla endekslenir, çıkışlar ilk giren ilk çıkar mantığıyla mahsup edilir. Getiri bu tutara dahil değildir.

Satış emri verip parasını alamayan yatırımcının durumu nedir? m.3/5'e göre bloke payları tasfiye kurallarına tabi sayılır; satış emrine öncelik tanınmaz.

Fon zararından kimler, hangi sırayla sorumlu? m.5, önce portföy yönetim şirketini sonra SPK'nın belirleyeceği kişileri sorumlu tutar. Saklayıcı sorumluluğu ayrı bir soru; emsal diye gösterilen kararlar bu konuyla ilgili değil.

Tazminat davasında hangi mahkeme görevli? Yargıtay Hukuk Genel Kurulu çizgisine göre asliye ticaret mahkemesi.

## Kaynakça

- Resmî Gazete, 27.10.2026, 7596 sayılı Kanun (Kabul tarihi 22.10.2026).
- SPK bültenleri, 2026 yılı: 2026/57, 59, 60, 61, 64, 65, 66, 69, 70, 73 ila 79 (spk.gov.tr/spk-bultenleri/2026-yili-spk-bultenleri).
- SPK kararı 76/1903 (27.10.2026), 2026/76 sayılı bülten.
- SPK basın duyurusu (27.10.2026), Kanun'un kapsamı ve ödeme sırası.
- İletişim Başkanlığı, 30.10.2026 itibarıyla ödeme verileri (100 fon, 247.839 yatırımcı, 97,3 milyar TL).
- Yargıtay HGK, E.2017/22 K.2018/1102 (16.05.2018) ve E.2017/2348 K.2019/82 (07.02.2019).
- fon.org.tr, TLY ve TP2 sayfaları: 31 Ağustos 2026 KAP portföy raporlarının ikincil dökümleri.
- Rota Borsa, Borsa Gündem ve Kulis Borsa: TLY Ağustos portföy dağılımı haberleri.
- YatirimX, TLY ve TMV sermaye payı analizi.
- Sarıoğlu Sefer, TP2 Fonu.
- Hoca ile Borsa, Tera Grubu'nun borsadaki şirketleri.
- Ersan Şen ve Coşkun Genç'in 7596 sayılı Kanun değerlendirmeleri.
- In re Bernard L. Madoff Investment Securities LLC, 654 F.3d 229 (2d Cir. 2011).`,
  },
  {
    slug: "the-new-zero-basic-income",
    date: "2026-10-20",
    category: "political-economy",
    lang: "en",
    author: "Kaan Zabtiyeoğulları",
    body: `There is a peculiar rhetorical structure common to the essays collected in Bir Temel Hak Olarak Vatandaşlık Gelirine Doğru. Each contribution — Erik Olin Wright's class-analytic case for basic income, Ahmet İnsel's defence of a citizenship income as a political right, and the comparative empirical work of Bea Cantillon, Ive Marx and Karel Van den Bosch — proceeds as though the central economic question raised by an unconditional cash transfer had already been settled. The authors debate the design of basic income (lump sum or monthly flow), its justification (class power, citizenship, poverty relief), and its correlates (employment, social spending, wage dispersion). What none of them examines is whether the instrument would survive contact with the very markets it is meant to operate in. It is, to borrow an image I kept returning to as I read, a discussion of the future pastimes of a patient whose illness has not yet been treated: elaborate, sincere, and premature.

This reflection develops that objection in four steps. First, I set out what I call the problem of the new zero: the tendency of a universal cash transfer to be absorbed by price adjustment, so that the nominal floor it establishes becomes, in real terms, merely a higher-denominated baseline of the same deprivation. Second, I argue that this problem is independent of how the transfer is financed, and therefore cannot be answered by the familiar assurance that no new money will be printed. Third, I contend that the institutional apparatus required to neutralise the problem — control over prices, rents and the supply of essentials — already amounts to an exit from the market economy, which renders the market-friendly presentation of basic income incoherent. Finally, I qualify the critique with a distinction between elastic and inelastic goods, and ask what an honest version of the proposal would look like once its planned-economy prerequisites are acknowledged rather than assumed away.

## The argument the book makes

Wright's essay rests on a diagnosis shared, as he notes, by Marxist and Weberian class analysis alike: workers severed from the means of production and subsistence must sell their labour to live, and are therefore compelled to accept terms they would refuse if genuine alternatives existed (Buğra & Keyder 2007, pp. 51–52). Basic income is offered as a corrective to precisely this compulsion. A guaranteed income floor restores what might be called optionality: the credible capacity to decline a bad job. On this foundation Wright compares two instruments — the stakeholder grant and the unconditional basic income — and argues that the latter does more to rebalance class power (pp. 54–55). His comparison includes a piece of financial arithmetic: an $80,000 grant invested at six per cent converges, over roughly two decades, on a monthly income of about $1,000, so that the two instruments differ chiefly in the sequencing of security rather than its quantity (p. 55). İnsel, for his part, reconstructs the work ethic from Weber through Gouldner in order to show that the objections to an unconditional income — parasitism, work disincentives, fiscal burden (p. 42) — are artefacts of a utilitarian ideology rather than conclusions of economic analysis, and he invokes, through Gorz, Marx's 1857 manuscripts to argue that distribution should track socially produced wealth rather than individually expended labour (p. 47).

These are serious arguments, and the empirical essay by Cantillon, Marx and Van den Bosch adds a welcome discipline to them, demonstrating with Luxembourg Income Study data that the relationships policymakers take for granted — between employment and poverty, or between low pay and destitution — are weak or absent across countries (pp. 67, 81). Yet all three essays share a silence, and it is the silence rather than any particular claim that this reflection addresses.

## The new zero

Suppose the policy succeeds on its own terms: every adult receives an unconditional monthly payment. Sellers of goods and, above all, of housing now face a population whose ability to pay has risen by a known, uniform, publicly announced amount. In a competitive market economy nothing prevents — and ordinary price theory predicts — an upward adjustment of prices and rents to absorb the new purchasing power. The transfer does not then abolish the worker's compulsion; it re-denominates it. The income floor becomes what I call the new zero: a baseline that is nominally higher but really unchanged, beneath which the old desperation resumes. The optionality on which Wright's entire case depends — the credible 'no' to the employer — is exactly what evaporates when the cost of subsistence rises to meet the subsidy.

Nowhere in the collection is this mechanism confronted. Wright's convergence arithmetic on p. 55 assumes a stable purchasing power of money across twenty years of compounding; it is nominal mathematics performed inside a model in which the policy already works. His discussion of reservation wages and unionisation (p. 59) comes closest to market mechanics, but it treats only the labour market — wages rising through improved bargaining — and never asks whether the goods market claws those gains back. Even the simulation exercise of Cantillon and her colleagues, which raises social transfers to 22 per cent of GDP and recomputes poverty rates (pp. 77–79), is a static accounting reallocation: prices are held fixed by assumption, which is to say the question is not answered but suspended. To debate the relative merits of a lump sum and a monthly flow before establishing that either retains its real value is, I submit, to discuss the furniture of a house that has not been shown to stand.

## Not a question of the printing press

A common reply concedes the danger of monetary expansion but insists that a properly financed basic income — funded by taxation, redistributing existing money rather than creating new money — escapes it. The reply mistakes the source of the pressure. Inflation of the kind at issue here is not a consequence of the printing press but of the concentration of demand. When purchasing power is transferred from savers at the top of the distribution to spenders at the bottom, aggregate demand for necessities — food, housing, transport, basic services — rises against a supply that adjusts slowly if at all. Sellers respond to ability to pay, not to the fiscal provenance of the money offered them. A deficit-neutral, fully taxed, perfectly redistributive basic income therefore faces the same price adjustment as a monetised one. The problem is structural to the instrument, not incidental to its financing — which is why it cannot be legislated away and must instead be designed against.

## Burning the house to kill the fly

What would designing against it require? At a minimum: rent regulation or a public housing stock large enough to discipline the private one; administered or subsidised prices for essential goods; and standing coordination of supply in the sectors where the transfer's demand shock lands. But notice what this list is. It is the institutional core of a planned or at least heavily administered economy. The moment these controls are in place, the original problem — the worker's coerced dependence on the labour market for subsistence — has already been solved by other means, and the cash transfer has become redundant scaffolding. One has burnt down the house to kill the fly: the fly is dead, but one no longer lives in the house whose problems one set out to solve. The basic income literature, as represented in this collection, wants the rhetorical comfort of the market — individual purchasing power, consumer sovereignty, no queues and no commissars — while its own success conditions quietly presuppose the market's supersession. Wright himself concedes that the Soviet experience discredited comprehensive planning and frames basic income as a socialist element injected into a market economy (p. 53); what he does not concede is that the injection only takes if the patient is already on the operating table of a controlled one.

A subsidiary incoherence appears in Wright's enthusiasm for grant-funded self-employment. He reports that a majority of American workers wish to run their own businesses and predicts that capital grants would raise the number who try (p. 56), before conceding that most such ventures fail within a year and that even the successful remain subordinated to capital through credit, franchising and supply contracts (p. 57). The concession is larger than he allows. An economy in which a substantial fraction of the population simultaneously becomes an independent proprietor is not a liberated economy but a saturated one — duplicated micro-ventures competing away one another's margins — and it is in any case not generalisable: coordinated large-scale production still requires employees. Mass entrepreneurship is a composition fallacy, and it sits alongside the inflation problem as a second structural question the essay never engages.

## A necessary qualification: elastic and inelastic goods

The critique should not be overstated, and precision here matters. A universal transfer will not melt the value of money uniformly, because goods differ in the elasticity of their supply. Rents may well double: housing is the paradigm of an inelastic good, its stock fixed in the short run and its location fixed forever. But a kilogram of meat will not cost a thousand dollars, because meat production, like much of manufacturing and many services, can expand to meet demand. For elastic goods, then, a basic income can genuinely extend real access: the person who could not previously afford adequate food or basic health care may now obtain them. The concession, however, cuts in an unexpected direction. Where the transfer works — where prices do not simply rise — its achievement is functionally identical to what a welfare state or a planned economy accomplishes by direct provision of those same goods and services. The celebrated market mechanism adds nothing distinctive; it is an indirect and leakier route to the outcome that public provision reaches directly, while remaining fully exposed to price capture in precisely the sectors — housing above all — where deprivation bites hardest.

What cash does preserve is choice: the recipient may allocate the margin to health care, to education, or indeed to gambling, as direct provision does not permit. The genuine question for the basic income literature — the one this collection never poses — is therefore a trade-off: whether the welfare gain from that flexibility outweighs the disruptive price dynamics the instrument unleashes, and whether a boundary can be drawn that confines cash to elastic goods while essentials are provided or regulated. Answering it would require exactly the general-equilibrium analysis the book declines to attempt.

## The honest endpoint

There is, finally, a way of stating the conclusion that is constructive rather than merely sceptical. The historical failure of comprehensive planning, which Wright rightly treats as decisive against the classical socialist programme (p. 53), was to a significant degree an informational failure: the coordination problem exceeded the computational capacity of any twentieth-century bureaucracy. That constraint is not eternal. Modern distributed computing, real-time logistics data and machine learning have transformed the feasibility frontier of economic coordination — a point associated with David Graeber's speculations on what the Soviet project might have been with contemporary information technology. If the success conditions of basic income already point beyond the market for essentials, then the intellectually honest programme is not a cash transfer dressed in market clothing but an openly hybrid architecture: computationally coordinated direct provision of inelastic essentials — housing, food security, health care — combined with a genuinely market sphere, and cash discretion, for elastic and discretionary goods. Whether such an architecture is desirable is a further question; but it is at least coherent, which the proposal defended in this collection, in its present form, is not.

A closing observation on evidence. The empirical backbone of the collection dates from the mid-1990s — OECD employment data of 1996–1998 and Luxembourg Income Study waves of the same vintage (pp. 67, 77–79) — and subsequent reprintings have carried this material forward unrevised. The intervening decades have supplied precisely the natural experiments the argument lacks: the 2008 crisis and its austerity aftermath, the Finnish basic income pilot, large unconditional transfer programmes in the Global South, and the pandemic-era stimulus payments whose price effects remain under active study. A literature that continues to reason from a pre-crisis snapshot, while the world runs the very experiments it declined to model, has forfeited some of its claim on our assent. The idea of an income owed to citizens as such remains, as İnsel insists, a political idea before it is an economic one (p. 49). But politics conducted in ignorance of prices is not emancipation; it is arithmetic deferred. Until the basic income literature meets the market it proposes to tame, its floor will remain what this reflection has called it: a new zero.

Reference: Buğra, A. and Keyder, Ç. (eds.) (2007) Bir Temel Hak Olarak Vatandaşlık Gelirine Doğru. İstanbul: İletişim Yayınları. Essays cited: İnsel, A., 'İktisat Aklına Sokulan Siyasal Çomak: Vatandaşlık Geliri', pp. 37–50; Wright, E. O., 'Temel Gelir, Paydaş Geliri Transferleri ve Sınıf Analizi', pp. 51–62; Cantillon, B., Marx, I. and Van den Bosch, K., 'Eşitlikçilik Bilmecesi', pp. 63–84.`,
  },
  {
    slug: "when-sukuk-beats-the-bond",
    date: "2026-10-05",
    category: "islamic-finance",
    lang: "en",
    author: "Kaan Zabtiyeoğulları",
    body: `## The Wrong Question

Consider a finance ministry in Ankara, Cairo or Tashkent that must fund a toll road. Two instruments sit on the table: a conventional eurobond and a sukuk. Most commentary treats the choice as one of investor optics, the same debt in different dress. The market’s own vocabulary encourages the error. Sukuk are routinely called ‘Islamic bonds’, priced against bond curves and placed by the same syndicate desks. Global issuance reached a record US$264.8 billion in 2025 and is expected to rise to between US$270 billion and US$280 billion in 2026. These are the figures of an instrument that conventional capital markets have thoroughly domesticated. The resemblance is misleading in precisely the cases that matter most.

A sukuk is not a promise to repay money. It is a certificate of undivided ownership in an asset, a usufruct or a venture. That difference is inert for a well-rated sovereign refinancing its general budget. It becomes decisive when the asset is a power plant that does not yet exist, an airport whose revenues will be shared with a concessionaire, or a borrower who may one day need to restructure. The question worth asking is therefore not whether sukuk are compliant, nor whether they are cheaper. It is for which projects the ownership structure is an advantage, and for which it is a liability.

That is a question of fit, not of doctrine. Nothing in what follows challenges the authority of the Accounting and Auditing Organization for Islamic Financial Institutions (AAOIFI), or the critique of the sukuk market advanced by Mufti Muhammad Taqi Usmani. Where this piece describes the market’s compromises, it describes them; it does not defend them. Its concern throughout is the fit between structure and project, not the doctrinal validity of the standards that govern the structure.

## What a Sukuk Legally Is

The doctrinal core is easily stated. Shari’ah does not permit a debt to be sold for anything other than its face value, so a tradable Islamic security cannot be a pure receivable; it must represent a share in something real. The issuer therefore transfers an asset, or the right to its use, to a special purpose vehicle (SPV). The SPV issues certificates to investors and passes the asset’s income on to them as periodic distributions. AAOIFI’s Shari’ah Standard No 17 recognises fourteen such structures. Two dominate infrastructure finance.

The first is ijara. The SPV acquires an existing asset from the sponsor and leases it back. The rental stream funds the periodic distributions, and a purchase undertaking at maturity returns the asset to the sponsor. The second is the istisna–ijara hybrid, in which the SPV commissions the asset’s construction under an istisna contract and, on completion, leases it under a forward ijara. A single certificate then spans both the construction and the operating phase. Two consequences follow, and the remainder of this piece turns on them. First, the SPV, the asset transfer and the lease are genuine contracts with genuine effects under their governing law, not a religious gloss on a bond. A lawyer reads them, and a court enforces them, as such. Second, because the certificate is tied to a specific asset, the instrument’s strengths and weaknesses are the strengths and weaknesses of that asset, to the extent that the investor’s claim on the asset is real. Section IV shows how often, in practice, it is not.

## Where Sukuk Wins

The ownership requirement, so often treated as a constraint, is in the infrastructure context a natural fit. A toll road, a hospital campus or a container terminal is exactly what Standard No 17 asks for: a tangible, revenue-generating asset with a long economic life, whose income can be passed on to certificate-holders as rent. The World Bank’s own reading is that the asset-backed, ring-fenced and project-specific character of Islamic structures, together with their emphasis on risk-sharing, makes them a natural match for infrastructure public–private partnerships (PPPs). Conventional project bonds strain to achieve through covenants what an ijara achieves by construction: an investor whose claim is tied to a specific asset and its cash flows. The second advantage is the investor base. Islamic banks, takaful operators and Shari’ah-compliant funds, many of them in the Gulf, cannot by mandate hold conventional paper. A sukuk therefore opens a pool of capital that a eurobond cannot reach. For a sovereign or sponsor whose conventional curve is thin, this is not a cosmetic benefit. Egypt, which debuted in the sukuk market only in 2023, issued US$2.5 billion of sukuk in 2025, and S&P expects further new issuers to follow in 2026 to diversify their investor bases. The same logic drives Gulf issuers themselves. Fitch attributes the sustained momentum of 2026 to funding-diversification strategies among GCC states and to refinancing needs.

The third advantage is institutional. The Islamic Development Bank (IsDB) Group provides a form of anchoring with no exact conventional counterpart. The IsDB co-finances; its insurer, the Islamic Corporation for the Insurance of Investment and Export Credit (ICIEC), covers political and credit risk; and both lend Shari’ah credibility that lowers the structuring burden on a first-time issuer. The published PPP case studies, from Doraleh in Djibouti to Queen Alia in Jordan and Konya in Türkiye, share this feature: a multilateral Islamic anchor around which private and conventional capital could be arranged.

A final advantage is less often stated. Because the structure must identify and transfer an asset, it disciplines the sponsor. A project vague enough to be funded on the general credit of the issuer will struggle to be funded by sukuk. That friction is a cost for the issuer. For the investor, and for the public, it is a feature: it pushes towards properly delineated projects with identifiable revenues.

## Where Sukuk Loses

The same feature that makes sukuk suitable for a hospital already built makes them awkward for one not yet begun. A greenfield project has no asset to lease, so the structure must reach for istisna: the certificate-holders commission the construction and take, in some measure, its risk. The forward ijara that follows depends on the asset arriving on time and to specification. Conventional project bonds carry construction risk too, but they do so through familiar covenants and completion guarantees. The istisna–ijara hybrid layers a second set of contractual and Shari’ah questions on top, and each layer adds a fee, a scholar’s opinion and a point of potential dispute. There is also the cost of carry: a sukuk raises its whole proceeds at closing and begins paying distributions on them at once, while a greenfield project draws funds down over years.

The deeper weakness is that much of the market rests on a compromise. Describing that compromise, as this section does, is not defending it.

In 2008, prompted by Usmani’s critique, the AAOIFI Shari’ah Board found that many sukuk in issue had drifted from the standard. Purchase undertakings at face value in musharakah and mudarabah structures guaranteed the return of principal, and thereby turned equity-like instruments into debt-like ones. The market’s response was not to abandon the compromise but to formalise it. Most sukuk today are asset-based rather than asset-backed: investors hold a beneficial interest in the asset, not legal title, and in insolvency their recourse is to the obligor rather than to the asset. That distinction is the analytical hinge of this piece, and it is the same distinction on which AAOIFI’s proposed revision of Shari’ah Standard No 62 turns. The argument here works with that standard, not around it.

Its consequence deserves to be stated plainly. The ‘ownership’ that distinguishes sukuk from bonds is, in the ordinary case, a matter of form. The holder of an asset-based sukuk receives a fixed periodic distribution, is repaid at par through the obligor’s purchase undertaking, and on default looks to the obligor’s credit rather than to the asset. The asset shapes the documentation; it does not shape the economics. Everything that follows, from the Dana Gas litigation to the Standard 62 debate and the Turkish practice examined in section V, is a test of how much weight that form can bear.

Dana Gas showed what happens when the form is tested. In 2017 the Sharjah-based issuer sought to avoid redemption of US$700 million of mudarabah sukuk by arguing before the English High Court that its own instrument was not Shari’ah-compliant and was therefore unenforceable under UAE law. Leggatt J, assuming for the purpose of the preliminary issue that the UAE-law documents were invalid, held that the English-law purchase undertaking was valid and enforceable regardless. The market exhaled. But the lesson was uncomfortable. The sukuk survived because it had been drafted as a bond, with an English-law backstop insulating investors from the Islamic contract at its centre.

That lesson is now being reopened. AAOIFI’s proposed revision of Standard 62 would require genuine legal transfer of the underlying asset, moving the market from asset-based to asset-backed structures. The objections to it concern plumbing, not principle. Many sovereign assets cannot lawfully be transferred; rating agencies rate obligor risk rather than asset risk; and a rule applied unevenly across jurisdictions could fragment liquidity. Whichever way the standard settles, the point for an infrastructure sponsor is the same. Restructuring a sukuk is harder, slower and more expensive than restructuring a bond, and the difficulty grows with the sincerity of the structure.

## Türkiye: The Case Study

Türkiye is instructive because it has both a mature legal framework and a persistent gap between that framework and infrastructure practice. The Capital Markets Law of 2012 and the Capital Markets Board’s Communiqué on Lease Certificates gave sukuk a domestic name, kira sertifikası, and a domestic issuance route. The Treasury issued its first lease certificate in 2012. Participation banks, as Islamic banks are known in Türkiye, issued TRY 588.9 billion of sukuk between 2013 and 2025 and now hold 8.4 per cent of banking-sector assets. That share falls short of the 15 per cent that the sector’s own strategy set as its 2025 target. Yet almost all of this is what the World Bank calls the indirect route: sovereign and bank sukuk backed by generic state or balance-sheet assets, with proceeds flowing to the general budget or to ordinary lending. Project-specific sukuk, in which the toll road or hospital itself is the underlying asset, remain rare. The reasons are those set out in section IV. Türkiye’s infrastructure pipeline is overwhelmingly greenfield, built on build–operate–transfer and availability-payment PPPs. A greenfield project carries the cost-of-carry problem that makes any capital-market instrument, sukuk or bond, less attractive than bank debt drawn down as construction proceeds.

The most prominent exception confirms the pattern.

The Konya Karatay Integrated Health Campus, an 838-bed city hospital developed by YDA Group under the Ministry of Health’s PPP programme, reached financial close in late 2015 on €265 million of 18-year debt against a total investment of €350 million. The IsDB provided €67.5 million alongside the European Bank for Reconstruction and Development (EBRD), the Black Sea Trade and Development Bank, UniCredit Bank Austria and Siemens Bank, with Ziraat Bank acting as account bank and security agent. It was the IsDB’s first direct participation in a Turkish project financing and its first health PPP anywhere, and the first Turkish PPP to combine Shari’ah-compliant and conventional tranches under common terms. What deserves attention is the form the Islamic money took. It was not a sukuk. It was a multilateral loan tranche, structured as an Islamic facility and documented to sit pari passu with the conventional lenders under a common terms agreement. Islamic finance entered Turkish infrastructure through a development bank, not through the capital market, because the IsDB could absorb structuring complexity and construction risk that a certificate-holder could not. That choice reflects structural fit with the project, not any shortcoming in the standard. It is also the pattern this piece has been describing. Where the asset is not yet built, sukuk yields to Islamic project finance, and Islamic project finance depends on an anchor investor that is there for reasons other than yield.

## A Rule for Practitioners

The comparison yields a simple rule, and it is not the one the market’s vocabulary suggests. Sukuk are not the Islamic version of a bond. They are a different allocation of risk that happens to be priced against bond curves, and that allocation suits some projects and not others. It suits brownfield or near-operational infrastructure: an airport terminal already earning fees, a hospital already receiving availability payments, a portfolio of toll roads with a revenue history. Here the asset exists, the lease is real, the Gulf and participation-bank investor base is within reach, and the ownership structure adds discipline rather than friction. A sovereign with such assets and a thin conventional curve should treat sukuk as a first instrument, not a diversification exercise.

It suits far less well the greenfield project financed from a standing start. The asset does not yet exist. The istisna layer imports construction risk into a certificate designed to hold a lease. The cost of carry penalises early drawdown. And if the project falters, the sukuk’s very sincerity, the degree to which the asset transfer is real, becomes the obstacle to restructuring it. For such projects the honest answer is bank-led Islamic project finance with a multilateral anchor, with Konya as the template, followed by a sukuk refinancing once the asset is built and earning. Between these lies the market’s actual centre of gravity: asset-based sovereign and bank sukuk that fund general budgets and balance sheets, and whose relationship to any specific piece of infrastructure is indirect. That is a legitimate use, but it should be named as such. Much writing on ‘sukuk for infrastructure’ describes this indirect route while implying the direct one. The Standard 62 debate will settle where the line sits between ownership in form and ownership in substance. Whatever AAOIFI decides, the practitioner’s question remains the same, and it is asked alongside the doctrinal one, not instead of it. What is the asset? Does it exist? Who bears the risk that it does not perform? What happens on the day the sponsor cannot pay? A sukuk answers those questions differently from a bond. Choosing between them means deciding which answers the project can live with.`,
  },
  {
    slug: "sixty-five-billion-barrels-venezuela-deal",
    date: "2026-08-30",
    category: "sovereign-debt",
    lang: "en",
    author: "Kaan Zabtiyeoğulları",
    body: `On 28 August, President Trump announced what he called "the largest oil deal in world history," majority US control, through a partnership with private sector operators, of more than 86 billion barrels of Venezuela's proven reserves. The market responded with something close to indifference. Brent drifted lower, Venezuela debt barely stirred beyond its existing rally. When an ostensibly historic transaction is met with a shrug, the interesting question is not what was signed, it is what the market already knows, and what it still doubts.

## The Deal

The terms, as announced, are these. A new private company, formed with an as yet unnamed operator, takes hold of 17 fields with a stated proven potential of 65 billion barrels. The United States secures more than half the value of the vehicle, split between equity and a guaranteed at-cost off-take right, with the crude earmarked for the Strategic Reserve. Secretary of State Marco Rubio and Defense Secretary Pete Hegseth negotiated alongside interim President Delcy Rodriguez, whose government has confirmed the agreement and projects roughly 100 billion dollars of inward investment. Trump claims the arrangement more than doubles America's petroleum reserves at no cost to taxpayers.

Three of those claims deserve a sentence each. "Doubling reserves" conflates an off-take right with ownership of geology. "No cost to taxpayers" is true only until the first investment. And control of barrels still stuck underground is a legal question, not a physical one, a point returned to below. For present purposes, what matters is how capital responded.

## On Markets: Tight Market Shrugs

The muted price response is more striking than it first appears, because this is not a market awash in supply. The war with Iran has disrupted a substantial share of seaborne crude for six months, commercial stockpiles have been drawn down hard, and US retail gasoline remains above 4 dollars a gallon. Brent entered the week near 89 dollars and WTI near 83 dollars, a war premium, not a glut, and yet both benchmarks were on track to lose between four and five and a half per cent over the week even as reports of an imminent agreement circulated.

That a headline of this size could not even interrupt a tight market's drift tells you what traders decided: Venezuelan barrels are a story about the medium term, and the medium term is already crowded. OPEC+ has been unwinding voluntary cuts approaching four million barrels per day; new production continues to flow from Guyana, Brazil, Argentina and the United States, and the International Energy Agency's pre-war balances had supply exceeding demand by something like two million barrels per day. When the situation in the Strait of Hormuz normalises, those barrels will return faster than the ones from Venezuela do.

Nor do reserves translate into flow. Venezuela currently produces approximately 1.2 million barrels per day, around a third of its historical peak, from infrastructure degraded by a decade of underinvestment and sanctions. Sixty-five billion barrels underground is a geological fact; converting it into exportable output is a matter of years and capital.

## The Actual Repricing Happened in the Debt Market

If the crude market shrugged, the debt market has been doing the serious work for months. Venezuela's benchmark notes, in default since 2017, more than doubled between August 2025 and January 2026, reaching roughly 43 cents on the dollar in the days after Maduro's removal. In May, the interim government launched a formal restructuring of 150 to 170 billion dollars of sovereign and PDVSA liabilities, appointed Centerview Partners as financial adviser, and pushed the bonds to their highest levels in over a decade. The deal strengthens the restructuring thesis in one specific way: oil revenue under a sanctioned-then-reopened framework gives the sovereign something it has lacked for a decade, the capacity to pay.

However, it doesn't necessarily mean there is an obligation to pay in this order. That is where the announcement is weak; a decade of treaties and litigation will draw the map.

## The Enforceability Question

Every distressed sovereign analysis ultimately turns on three questions: who is the obligor, what is the collateral, where does the claim rank. The deal answers none of them.

Who is the counterparty? The reserves belong to the Republic under the Venezuelan constitution; the operating rights have historically sat with PDVSA and its joint ventures (JVs). A new private vehicle taking "hold" of 17 fields must derive its title from somewhere. If the guarantor is the Republic, the vehicle is exposed to the sovereign's 150 billion dollars of defaulted and disputed claims. If it is PDVSA, it inherits a company whose own bonds are in default and whose most valuable foreign asset has just been sold from under it by a Delaware court. Either way, the vehicle is carved out of an estate that other creditors already claim, and it is carved out in the middle of a restructuring whose debt sustainability analysis has not yet been presented.

What does an at-cost off-take right actually secure? An off-take is a contractual entitlement to product, not a security interest in the field. Its value therefore depends entirely on the vehicle producing, and on no prior claimant attaching the crude, the proceeds, or the export infrastructure.

Where does it rank? Nothing announced suggests the off-take has been granted priority over existing bondholder or award creditors, and it is hard to see how it could be without their consent or a comprehensive restructuring. The deal creates a new, senior-looking claim that is, in law, pari passu at best with a decade of litigants, and subordinate to any of them who reach the assets first.

## The ICSID Perspective: Legacy Awards Against a New Vehicle

The creditors most likely to reach the assets first are not bondholders but the holders of investment treaty awards, and their position deserves precise statement. Venezuela denounced the ICSID Convention on 24 January 2012, with effect from 25 July 2012.

Denunciation, however, operates prospectively. Article 72 preserves rights and obligations arising from consent given before the notice was received, and the tribunals that have considered the point, divided though they are on claims filed in the six-month window, as the Favianca award shows, agree that proceedings already on foot were untouched. The consequence is that Venezuela remains bound by a portfolio of ICSID awards it can no longer avoid, and whose enforcement regime is uniquely favourable to creditors: under Article 65, each Contracting State must treat a pecuniary ICSID award as a final judgment of its own courts, without the public policy or non-arbitrability defences available under the New York Convention.

The largest of those awards is ConocoPhillips v Venezuela: approximately 8.7 billion dollars for the 2007 expropriation of the Hamaca, Petrozuata and Corocoro projects, rendered in March 2019, upheld against annulment in January 2025, and now exceeding 11 billion dollars with interest. It has already been recognised by the US District Court for the District of Columbia under Article 54. Behind it stand Crystallex, Gold Reserve, Rusoro, OI European and others.

What makes these awards dangerous to the new vehicle is not their size but the doctrine developed to collect them. In Crystallex, the District of Delaware held, and the Third Circuit affirmed in 2019, that PDVSA is the alter ego of the Republic, so that the Republic's debts could be satisfied from PDVSA's US assets. That holding produced the court-supervised auction of PDV Holding, Citgo's parent, culminating in November 2025 in the approval of Amber Energy's $5.9 billion bid, now on appeal. Some $20 billion of attached claims compete for roughly $8 billion of proceeds on a first-come, first-served priority, which means most of the queue will walk away unpaid and go looking for the next asset.

Three implications follow for the August deal.

First, the new company's corporate separateness is precisely the feature the alter-ego doctrine exists to disregard. A vehicle majority-owned by the US government and a private operator is not obviously PDVSA's alter ego, but its title to the fields, its off-take proceeds and any US-situs receivables will be tested against a body of Delaware and DC precedent that has spent eight years piercing Venezuelan state structures. The more the vehicle looks like a rebadged PDVSA joint venture, the more exposed it is.

Second, the asymmetry of protection runs the wrong way. The legacy claimants hold ICSID awards enforceable as domestic judgments. The new investors will hold no such thing: there is no US-Venezuela bilateral investment treaty, and Venezuela is no longer an ICSID Contracting State, so any future dispute goes to contractual arbitration under the Additional Facility, ICC or UNCITRAL rules, enforced under the New York Convention and subject to its defences and to sovereign immunity litigation of the kind that took ConocoPhillips three years in Washington. An arrangement that describes itself as "control" has, on the announced facts, weaker legal armour than the creditors already circling the estate.

Third, there is a specific and unaddressed overlap risk. ConocoPhillips' award concerns Orinoco Belt heavy-oil projects; the 17 fields in the new deal are, by every description, Orinoco Belt heavy-oil projects. If any of the 17 coincides with an asset whose expropriation has already been adjudicated, the award creditor's claim to that asset's economics ceases to be theoretical.

None of this makes the arrangement worthless. It makes it contingent. The bond market's repricing reflects a bet that the Centerview-led restructuring will eventually reconcile these claims, awards, bonds, oil-for-loan facilities, and that the United States, having put its own off-take at stake, now has an interest in seeing that happen. That is a rational bet. It is not yet an enforceable one.

## A Template, Not a Contagion

The contagion channel, for once, looks quiet. Analysts see limited read-across to the broader Latin American complex, with any halo effect confined to sovereigns aligned with Washington. The more consequential spillover is conceptual. Markets now possess a live template for how a defaulted, sanctioned state gets repriced, not through an IMF programme with conditionality and creditor committees, but through a transactional, resource-backed arrangement negotiated bilaterally. Every distressed-sovereign desk will file this precedent, and the next candidate country will be priced with it in mind.

## What the Quiet Tape Teaches

Markets do not pay for headlines; they pay for cash-flow visibility and legal enforceability. Sixty-five billion barrels moved no benchmark because reserves are not revenue, and an announcement is not an enforceable claim. For anyone pricing risk in post-transition or sanctions-adjacent markets, development financiers included, the implication is uncomfortable but clarifying: political access is necessary, never sufficient. The bond mathematics, and the creditor waterfall, still govern. Whether this year's repricing survives the first dispute over the deal's terms is the question the market has, quite sensibly, declined to answer in advance.`,
  },
  {
    slug: "regulasyon-mu-inovasyon-mu-tcmb-papara-ve-ininal-kararlari",
    date: "2025-11-09",
    category: "fintech",
    lang: "tr",
    body: `## Giriş
2025 yılı, Türkiye'de finansal teknolojiler (fintech) alanında faaliyet gösteren elektronik para kuruluşları açısından bir dönüm noktası olmuştur. Türkiye Cumhuriyet Merkez Bankası ("TCMB"), art arda aldığı iki kritik kararla, Papara Elektronik Para A.Ş. ve İninal Ödeme ve Elektronik Para Hizmetleri A.Ş.'nin faaliyet izinlerini iptal etmiştir (Resmî Gazete, 31.10.2025 ve 08.11.2025). Bu gelişme, 6493 sayılı Ödeme ve Menkul Kıymet Mutabakat Sistemleri, Ödeme Hizmetleri ve Elektronik Para Kuruluşları Hakkında Kanun ("6493 sayılı Kanun") çerçevesinde Türkiye'nin elektronik para piyasasında şimdiye kadar görülmemiş ölçüde bir regülasyon sıkılaşmasına işaret etmektedir (6493 s. K. m. 16, 18, 19).
Finansal inovasyonun en dinamik alanlarından biri olan elektronik para sektörü, 2013 yılında yürürlüğe giren 6493 sayılı Kanun ile hukuki bir statü kazanmış, 2020'de yapılan düzenlemelerle birlikte bu alandaki gözetim yetkisi BDDK'dan TCMB'ye devredilmiştir (Cumhurbaşkanlığı Kararnamesi, 2020/85). Ancak son dönemde yaşanan bu iki lisans iptali, Merkez Bankası'nın yalnızca para politikası değil, aynı zamanda finansal istikrar ve tüketici güvenliği hedefleri doğrultusunda daha aktif bir denetim organı haline geldiğini göstermektedir.
Bu kararlar, hem elektronik para kuruluşlarının hukuki yükümlülüklerinin sınırlarını yeniden gündeme taşımış hem de fintech sektöründe faaliyet gösteren girişimlerin regülasyon uyumuna (compliance) dair farkındalığını artırmıştır. Bu bağlamda temel soru şudur: TCMB, hangi hukuki gerekçelere dayanarak bu kuruluşların faaliyet izinlerini iptal etmiştir ve bu kararlar, Türkiye'nin fintech ekosisteminde nasıl bir dönüşüm yaratacaktır?
Aşağıdaki analiz, bu soruya yanıt arayarak İninal ve Papara vakaları üzerinden Türk elektronik para hukukunun mevcut durumunu ve geleceğini incelemektedir.
## II. Hukuki Dayanak ve Mevzuat Çerçevesi
Türkiye'de elektronik para ve ödeme hizmetleri alanındaki faaliyetler, 6493 sayılı Kanun ile düzenlenmiştir (RG, 27.06.2013, Sayı: 28690). Bu Kanun, bir kuruluşun ödeme hizmeti sunabilmesi veya elektronik para ihraç edebilmesi için öncelikle TCMB'den faaliyet izni almasını zorunlu kılar (6493 s. K. m. 15/1).
Kanun'un 16. maddesi, faaliyet izninin hangi durumlarda iptal edilebileceğini ayrıntılı biçimde belirlemiştir. Özellikle m. 16/1-(ç) bendine göre, elektronik para kuruluşunun "yükümlülüklerini süresinde yerine getirmemesi veya mali bünyesinin zayıflaması" durumunda Merkez Bankası, faaliyet iznini iptal etme yetkisine sahiptir. Aynı maddenin (e) bendi ise, "işletme sisteminin güvenilirliğini veya hizmet sürekliliğini zedeleyecek nitelikte ciddi ihlallerin" iptal sebebi olabileceğini öngörmektedir. Dolayısıyla, TCMB'nin hem İninal hem de Papara için aldığı iptal kararlarının, Kanun'un bu iki bendine dayandırılması hukuken dikkat çekicidir.
Buna ek olarak, Kanun'un 18. ve 19. maddeleri denetim ve yaptırım mekanizmalarını düzenler. Madde 18, TCMB'nin ödeme ve elektronik para kuruluşlarının "her türlü işlem ve hesaplarını denetleme yetkisini" içerir; madde 19 ise bu denetim sonucunda tespit edilen ihlallere karşı alınacak önlemleri (faaliyetin geçici durdurulması, uyarı, lisans iptali) belirler. Bu hükümler, Merkez Bankası'nın yalnızca izin veren değil, aynı zamanda aktif gözetim ve yaptırım uygulayan bir düzenleyici otorite olduğunu göstermektedir.
2020 yılında yayımlanan 85 sayılı Cumhurbaşkanlığı Kararnamesi ile ödeme ve elektronik para kuruluşlarına ilişkin gözetim yetkisi BDDK'dan alınarak TCMB'ye devredilmiştir. Bu değişiklik, Türkiye'nin fintech piyasasında "tek elden denetim" modeline geçişini sağlamış; dolayısıyla TCMB, hem lisans veren hem lisansı geri alabilen otorite konumuna gelmiştir.
Her iki karar da, Merkez Bankası'nın "risk tabanlı denetim" yaklaşımının somut bir tezahürüdür; yani yalnızca finansal performans değil, aynı zamanda uyum süreçleri, işlem güvenliği ve kara para aklama riskleri de göz önüne alınmıştır (6493 s. K. m. 23/1; MASAK Tebliği No. 19).
## III. Olayların Kronolojisi ve Kısa Vaka Analizi
## A. İninal Vakası
Türkiye'nin elektronik para piyasasında öncü kuruluşlarından biri olan İninal, 20 Haziran 2013 tarihinde TCMB'den aldığı lisansla faaliyet göstermeye başlamıştı. Şirket, özellikle ön ödemeli kart çözümleriyle geniş bir kullanıcı kitlesine ulaşmış, perakende ödeme ekosisteminde önemli bir pay edinmişti.
Ancak 8 Kasım 2025 tarihli Resmî Gazete'de yayımlanan TCMB kararıyla, İninal'in faaliyet izni iptal edilmiştir (Resmî Gazete, 08.11.2025, Sayı: 33071). Karar metninde, iptalin hukuki dayanağı olarak 6493 sayılı Kanun'un 16. maddesinin (ç) ve (e) bentleri ile 19. maddesi gösterilmiştir.
TCMB'nin iptal kararı sonrası, şirketin kullanıcı bakiyeleriyle ilgili olarak koruma hesaplarındaki fonların güvence altında olduğu açıklanmıştır (6493 s. K. m. 20/1). Bu hüküm, kullanıcıların elektronik para kuruluşuna devrettikleri tutarların, kuruluşun kendi malvarlığından ayrı olarak saklanmasını zorunlu kılarak, bu tür idari işlemlerde tüketici mağduriyetini önlemeyi amaçlamaktadır.
## B. Papara Vakası
Papara Elektronik Para A.Ş., 21 Nisan 2016 tarihinde aldığı TCMB lisansı ile faaliyet göstermeye başlamış ve kısa sürede Türkiye'nin en bilinen dijital cüzdan platformlarından biri haline gelmiştir. Ancak 2025 yılının ilk yarısından itibaren şirket hakkında kara para aklama ve yasa dışı bahis gelirlerinin finansmanı iddialarıyla çeşitli soruşturmalar yürütülmüş, bu süreçte TMSF kayyum olarak atanmıştır (Euronews Türkiye, 27.05.2025).
Bu süreci takiben, 31 Ekim 2025 tarihli Resmî Gazete'de yayımlanan TCMB kararı ile Papara'nın da faaliyet izni iptal edilmiştir (Resmî Gazete, 31.10.2025, Sayı: 33063). Papara yönetimi, kullanıcı fonlarının koruma hesaplarında mevzuata uygun biçimde tutulduğunu ve iade sürecinin başlatıldığını duyurmuştur.
Papara vakasının önemi, yalnızca idari bir lisans iptaliyle sınırlı değildir. Bu karar, fintech sektöründe kara para aklama (AML) ve yasa dışı bahis riskleri nedeniyle alınan ilk yüksek profilli iptal kararı olarak değerlendirilmiştir.
## C. Ortak Hukuki Değerlendirme
Her iki olay, 6493 sayılı Kanun'un 16. ve 19. maddelerine dayandırılmış olup, TCMB'nin fintech alanında risk esaslı denetim politikasını kararlılıkla uyguladığını göstermektedir. Papara vakasında finansal suçlara ilişkin risklerin öne çıkması, İninal vakasında ise sistem güvenliği ve yükümlülük ihlallerinin tespit edilmesi, TCMB'nin aynı yasal dayanakları farklı içeriklerle kullanabildiğini göstermektedir.
Sonuç olarak, İninal ve Papara vakaları, Türkiye'de elektronik para hukukunun artık yalnızca inovasyon odaklı değil, denetim ve uyum merkezli bir döneme girdiğini ortaya koymuştur.
## IV. Hukuki ve Ekonomik Etkilerin Analizi
## A. Kullanıcı Hakları ve Fon Güvenliği
Elektronik para kuruluşlarının faaliyet izinlerinin iptali, ilk etapta kullanıcı fonlarının güvenliği açısından endişe yaratmaktadır. Ancak 6493 sayılı Kanun'un 20. maddesi, elektronik para kuruluşlarının müşteri varlıklarını koruma hesaplarında, kendi malvarlıklarından ayrı tutmasını zorunlu kılar. Bu hesaplar, kuruluşun iflası veya faaliyet izninin iptali hâlinde dahi alacaklıların haczine veya tasfiyeye konu edilemez (6493 s. K. m. 20/3). Ayrıca 23. madde, faaliyetlerin durdurulması veya iptali hâlinde kullanıcı fonlarının "en kısa sürede iade edilmesini" zorunlu kılar.
Dolayısıyla, hukuken bu tür bir iptal, kullanıcı açısından malvarlığı kaybı riski değil, yalnızca erişim gecikmesi riski doğurur. Bu yönüyle Türk hukuk sistemi, Avrupa Birliği'nin Elektronik Para Direktifi (2009/110/EC) ile paralel bir koruma mekanizması benimsemiştir.
## B. Fintech Ekosistemine Etkiler
Papara ve İninal gibi iki büyük oyuncunun lisans iptali, Türkiye'nin elektronik para sektöründe regülasyon kaynaklı bir şok etkisi yaratmıştır. Bu iki kuruluş, 2024 sonu itibarıyla toplam pazarın yaklaşık %70'ine yakın bir kullanıcı tabanına sahipti (Deloitte Fintech Raporu, 2024). Bu nedenle, iptaller kısa vadede kullanıcı güveninde azalma ve dijital ödeme sistemlerinde geçici bir belirsizlik doğurmuştur.
Öte yandan, bu gelişmelerin yatırımcı güveni üzerinde kısa vadeli olumsuz etkiler doğurması kaçınılmazdır. Özellikle yabancı yatırımcılar açısından, fintech piyasasında öngörülebilirlik ("regulatory predictability") kavramı büyük önem taşımaktadır. Ancak uzun vadede, düzenleyici disiplinin artması, sektörün kurumsal güvenilirliğini ve uluslararası itibarını güçlendirecektir.
## C. Hukuki Yönetişim ve Regülasyon Yaklaşımı
TCMB'nin Papara ve İninal kararları, Türkiye'de fintech hukukunun artık "reaktif denetim"den "proaktif yönetişim" modeline geçtiğini göstermektedir. Bu tür kararlar, fintech şirketleri açısından "idari yaptırımın en ağır şekli" olarak kabul edilmektedir; zira faaliyet izni iptali, hem ticari faaliyeti durdurur hem de marka itibarını kalıcı biçimde zedeler (Danıştay 13. Daire E. 2019/2173, K. 2021/1456).
Hukuki açıdan, bu kararların yargısal denetime tabi olduğu da unutulmamalıdır. 2577 sayılı İdari Yargılama Usulü Kanunu'nun 27. maddesi, idari işlemlere karşı iptal davası açılabileceğini ve gerekli hâllerde yürütmenin durdurulması talep edilebileceğini düzenler.
## D. Ekonomik Dengeler ve Piyasa Etkileri
Ekonomik açıdan bakıldığında, bu kararların kısa vadede ödeme sistemleri piyasasında rekabet azalmasına yol açması beklenmektedir. Ancak uzun vadede, TCMB'nin uyguladığı sıkı denetim politikaları, piyasaya giriş bariyerlerini yükselterek daha sürdürülebilir bir finansal ekosistem oluşturacaktır. Böylelikle Türkiye'nin fintech piyasası orta vadede "yüksek giriş maliyetli ama düşük sistemik riskli" bir modele evrilecektir.
## V. Elektronik Para Kuruluşları İçin Hukuki Dersler
Papara ve İninal vakaları, 6493 sayılı Kanun'un yalnızca teorik bir çerçeve değil, fiilen uygulanan bir denetim ve yaptırım sistemi olduğunu ortaya koymuştur. Bu nedenle elektronik para kuruluşlarının, faaliyet izinlerini koruyabilmek için çok katmanlı bir uyum (compliance) sistemi benimsemeleri hukuken zorunludur.
- Uyum yönetimi: düzenli uyum raporları, AML/KYC prosedürleri ve risk değerlendirme belgeleri; 5549 sayılı Kanun kapsamındaki "müşterini tanı" yükümlülüğü ve MASAK Tebliği No. 19 uyarınca şüpheli işlem bildirimleri.
- İç kontrol ve denetim: yıllık iç denetim raporu, bağımsız dış denetim, denetim bulgularına ilişkin aksiyon planları ve kayıtların en az 10 yıl saklanması (6493 s. K. m. 23/3).
- Veri güvenliği: KVKK'ya uygun açık rıza metinleri, veri işleme envanteri, siber güvenlik olay yönetim planı ve veri ihlali bildirimi yükümlülükleri (KVKK m. 12/5).
- Avukatlar için: lisans koruma stratejisi, iç denetim planı, MASAK ve KVKK yükümlülüklerinin entegrasyonu ve idari dava yolları (İYUK m. 27–28) konusunda yönlendirme.
Sonuç olarak, Papara ve İninal kararları, elektronik para sektöründe faaliyet gösteren tüm şirketler için uyumun artık rekabet avantajı değil, varlık şartı hâline geldiğini ortaya koymuştur.
## VI. Değerlendirme ve Reform Önerileri
- Denetim sürecinde şeffaflık ve kademeli yaptırım ilkesi: 6493 sayılı Kanun'un 19. maddesine "kademeli yaptırım" mekanizmasının açıkça eklenmesi; önce uyarı, ardından geçici askıya alma veya faaliyet sınırlandırması. Benzer bir model PSD2 (EU) 2015/2366 kapsamında uygulanmaktadır.
- Regülasyon–inovasyon dengesi: Birleşik Krallık'taki FCA "regulatory sandbox" modeline benzer şekilde TCMB bünyesinde bir Fintech Rehberlik Ofisi ve ön görüşme (pre-approval consultation) mekanizması.
- Denetim kurumları arasında eşgüdüm: TCMB, MASAK ve KVKK arasında ortak bir protokol ile "Fintech Denetim Koordinasyon Kurulu" kurulması; mükerrer yaptırım yasağı (ne bis in idem) açısından hukuki belirlilik.
- Yatırımcı koruması: lisansı iptal edilen kuruluşun fon yönetimi ve iade süreci hakkında TCMB'nin kamuoyuna düzenli bilgilendirme yapması.
- Akademik ve mesleki eğitim: Türkiye Barolar Birliği ve TCMB işbirliğiyle "Fintech Hukuku Sertifika Programı" gibi mesleki eğitimler.
## VII. Sonuç
2025 yılında Papara ve İninal hakkında alınan faaliyet izni iptali kararları, Türk fintech hukukunun tarihinde önemli bir dönüm noktasını temsil etmektedir. Bu kararlar, 6493 sayılı Kanun'un 16. ve 19. maddelerinin uygulama gücünü ilk kez bu denli somut biçimde göstermiştir.
Türkiye, finansal teknolojiler alanında "hızlı büyüme – gevşek denetim" modelinden çıkmış; bunun yerine "inovasyon – güvenlik dengesi"ne dayalı, kurumsallaşmış bir düzenleyici rejime geçiş yapmıştır. Bununla birlikte, hukuki öngörülebilirlik ve ölçülülük ilkeleri bakımından sistemin bazı revizyonlara ihtiyaç duyduğu da açıktır.
Sonuç olarak, Papara ve İninal kararları bir "yasaklama" değil, bir "uyarı" niteliği taşımaktadır. Gelecekteki hedef, hukukla inovasyonu dengeleyen, rekabeti teşvik eden, ama kamu güvenliğini koruyan bir fintech ekosistemi kurmaktır; bu da ancak şeffaf, ölçülü ve öngörülebilir bir regülasyon kültürüyle mümkündür.
## Kaynakça
- 6493 sayılı Kanun, RG 27.06.2013, Sayı: 28690; Resmî Gazete 31.10.2025 (Sayı: 33063) ve 08.11.2025 (Sayı: 33071).
- Directive (EU) 2015/2366 (PSD2); Directive 2009/110/EC; Directive 2014/49/EU.
- Danıştay 13. Daire, E. 2018/2345, K. 2020/1212; E. 2019/2173, K. 2021/1456; E. 2020/1398, K. 2022/903.
- Deloitte Türkiye, Fintech Türkiye 2024 Raporu; Fintech İstanbul, Türkiye Fintech Ekosistemi 2025; IMF Fintech Note (2022); OECD Fintech Regulation and Supervision Framework (2023); World Bank Fintech Policy Paper (2023).
- FATF Recommendations (2021); FCA Regulatory Sandbox Report (2023); BaFin Akademie (2022).
- MASAK Genel Tebliği No. 19; 5549 sayılı Kanun; 6698 sayılı KVKK; 2577 sayılı İYUK.
- Aksoy, B. (2023), Bankacılık Hukuku Dergisi 37; Erdem, E. (2024), İstanbul Hukuk Mecmuası 79(2); Kızılot, Ş. (2020), Finansal Teknolojiler ve Hukuki Düzenleme; Yılmaz, S. (2023), Türkiye'de Elektronik Para Kuruluşlarının Hukuki Statüsü.`
  },
  {
    slug: "paparayi-idare-hukuku-yedi",
    date: "2025-11-02",
    category: "fintech",
    lang: "tr",
    source: "www.webrazzi.com",
    body: `## I. Giriş
31 Ekim 2025'te Resmî Gazete'de yayımlanan kararla Türkiye Cumhuriyet Merkez Bankası (TCMB), Papara Elektronik Para A.Ş.'nin faaliyet iznini iptal etti. Bu karar, sadece bir fintech şirketinin lisansının kaldırılması değil; idare hukukunun temel tartışmalarından birini yeniden alevlendirdi: İdare, bir kuruluşun faaliyet iznini iptal etmeden önce mutlaka denetim yapmak zorunda mı, yoksa bu yalnızca takdir yetkisinin bir parçası mı?
Bu soru Papara'yla sınırlı değil. Elektronik para ve ödeme hizmetleri sektörü, devletin gözetimiyle özel girişimin dinamizmi arasındaki hassas çizgide ilerliyor. Piyasayı korumak ve kara para akışını önlemek elbette kamusal bir görev; ancak denetim süreci işletilmeden verilen bir iptal kararı, piyasadaki öngörülebilirliği zedeleyebileceği gibi, idari yaptırımlarda orantılılık ilkesine de gölge düşürebilir.
Peki TCMB'nin yetkileri ne kadar geniş? 6493 sayılı Kanun ve Danıştay içtihatları bu konuda ne söylüyor? Avrupa Birliği'nde, benzer durumlarda düzenleyici kurumlar nasıl hareket ediyor? Bu soruların yanıtlarını birlikte arayalım ve Papara kararı üzerinden, "denetim mi, iptal mi önce gelir?" tartışmasına biraz yakından bakalım.
## II. Hukuki Çerçeve: 6493 Sayılı Kanun ve Denetim Zorunluluğu
Elektronik para ve ödeme hizmetleri alanındaki kuruluşlar, Türkiye'de 6493 sayılı Kanun ile düzenlenmiştir. Kanun, finansal sistemin güvenliğini sağlamak ve kullanıcıların haklarını korumak amacıyla TCMB'ye hem lisans verme hem de denetim ve yaptırım uygulama yetkisi tanır. Ancak bu yetki, sınırsız bir idari takdir olarak yorumlanamaz.
> "Merkez Bankası, bu Kanun kapsamındaki kuruluşların faaliyetlerini denetler. Denetim sonucunda faaliyetlerin Kanuna aykırı olduğunun tespiti hâlinde, bu aykırılığın giderilmesi için kuruluşlara uygun bir süre verilir. Aykırılığın bu süre içinde giderilmemesi hâlinde faaliyet izni iptal edilir." (6493 sayılı Kanun, m. 19/1)
Bu hüküm, idari sürecin kademeli işlemesini öngörür: denetim, süre verme ve sonrasında iptal. Dolayısıyla Merkez Bankası, doğrudan iptal kararı verdiğinde idari işlem "usulden sakat" hâle gelebilir. Nitekim, idare hukukunda usule uyulmaması, işlemin hukuka uygunluk karinesini ortadan kaldırır (Gözler, İdare Hukuku, 2020, s. 415).
Benzer biçimde, "Ödeme Hizmetleri ve Elektronik Para Kuruluşları Hakkında Yönetmelik" de aynı anlayışı sürdürür. Yönetmeliğin 51. maddesi, TCMB'nin kuruluşları yerinde veya uzaktan denetleyebileceğini, tespit edilen eksikliklerin giderilmesi için süre vereceğini, ancak bu sürede düzeltme yapılmazsa yaptırım uygulanabileceğini belirtir.
Bu yaklaşım, iptalin bir "ilk adım" değil, ultima ratio – yani "son çare" – olduğunu gösterir. Bir kuruluşun lisansının aniden kaldırılması, yüz binlerce kullanıcının fonlarını etkileyebilir ve piyasadaki güven duygusunu zedeleyebilir (Kaya, "Elektronik Para Kuruluşlarının Hukuki Niteliği", Banka ve Finans Hukuku Dergisi, 2022, s. 64).
Danıştay'ın yerleşik içtihadına göre, idare önce tespit, sonra yaptırım sıralamasını izlemeden işlem tesis ettiğinde, karar orantılılık ve ölçülülük ilkelerine aykırı sayılır (Danıştay 13. D., E. 2016/4387, K. 2018/1212). Kısacası, "önce denetim, sonra yaptırım" ilkesi yalnızca teknik bir prosedür değil; idarenin gücünü ölçülü ve öngörülebilir biçimde kullanmasını zorunlu kılan anayasal bir yükümlülük olarak karşımıza çıkar.
## III. İdare Hukuku İlkeleri Çerçevesinde Denetim Zorunluluğu
Faaliyet izninin iptali gibi ağır sonuçlar doğuran işlemler, yalnızca özel bir kanun maddesine değil, aynı zamanda idare hukukunun genel ilkelerine dayanır. Çünkü idarenin tüm işlemleri, Anayasa'nın "hukuk devleti" ilkesine bağlıdır (Anayasa m. 2). Bu ilke, idarenin kararlarını keyfî biçimde değil, ölçülü, kademeli ve öngörülebilir biçimde almasını gerektirir. Bir kamu otoritesi, elindeki en sert aracı kullanmadan önce, daha hafif müdahale yollarını denemek zorundadır. Bu anlayış, hukuk literatüründe orantılılık ilkesi olarak adlandırılır.
> "İdare, amacı kamu yararı olsa dahi, daha hafif önlemlerle aynı sonucu sağlayabilecekse ağır yaptırımlara başvuramaz." (Danıştay 13. D., E. 2016/4387, K. 2018/1212)
> "İdari işlemin tesisinden önce ilgilisine savunma hakkı tanınmaması, işlemin usul yönünden hukuka aykırılığı sonucunu doğurur." (Danıştay 10. D., E. 2019/2641, K. 2021/2175)
Bu iki karar birlikte okunduğunda ortaya çıkan sonuç nettir: İdare, denetim yapmadan iptal kararı verirse hem orantılılık hem de savunma hakkı ilkelerini ihlal eder. Kademelilik ilkesi de bu çerçevenin tamamlayıcı unsurudur: "İdari yaptırımların kademeli olması, hukuk devletinin öngörülebilirlik yönünün bir gereğidir." (Giritli/Bilgen/Akgüner, İdare Hukuku, 2021, s. 290)
Sonuçta, orantılılık, savunma hakkı ve kademelilik ilkeleri birlikte düşünüldüğünde, denetim yapılmadan verilen iptal kararları yalnızca bireysel işlem hatası değil; hukuk devleti anlayışına zarar veren sistematik bir risk oluşturur.
## IV. Mukayeseli Perspektif: AB Ödeme Hizmetleri Direktifi (PSD2)
Avrupa Birliği'nde elektronik para ve ödeme hizmetleri sektörü, Payment Services Directive 2 (PSD2) – 2015/2366/EU ile çerçevelenmiştir. PSD2, yalnızca rekabeti artırmayı değil, aynı zamanda düzenleyici denetimin orantılı ve öngörülebilir şekilde uygulanmasını hedefler. AB düzenleyicileri, "supervision before sanction" (yaptırımdan önce denetim) anlayışını açıkça benimser. PSD2'nin 23. maddesi, denetim sürecinde tespit edilen ihlallerin "öncelikle düzeltici tedbirlerle giderilmesi gerektiğini" belirtir.
Örneğin Almanya'da BaFin, bir elektronik para kuruluşunun AML süreçlerinde eksiklik bulduğunda doğrudan iptal etmez; önce "improvement order" (iyileştirme emri) verir, daha sonra uygunsuzluk devam ederse lisansı askıya alır (BaFin Annual Report, 2022, s. 91). Fransa'da da ACPR, doğrudan iptal yerine idari gözetim planı uygular.
Türk hukukundaki 6493 sayılı Kanun'un lafzı aslında bu yaklaşımla uyumludur; fakat uygulamada "denetim sürecinin aktif işletilmemesi", sistemin AB standardındaki koruyucu rolünü zayıflatmaktadır.
## V. Papara Kararına Uygulama ve Değerlendirme
Kamuoyuna yansıyan bilgiler ışığında TCMB'nin Papara hakkında önceden bir denetim süreci işletip işletmediği belirsizdir. Eğer gerçekten doğrudan iptal yoluna gidilmişse, bu durum 6493 sayılı Kanun'un 19. maddesiyle öngörülen "önce denetim, sonra iptal" sırasına açıkça aykırıdır.
Elbette Merkez Bankası'nın amacı, piyasayı korumak ve kara para akışını engellemektir; ancak bu hedef, usul güvencelerini ortadan kaldırmaz. Papara gibi yüz binlerce kullanıcıya hizmet veren bir kuruluşun lisansının ani iptali, piyasa öngörülebilirliğini zedeleyebileceği gibi, finansal ekosistemdeki güven zincirini de sarsar. AB örneklerinde olduğu gibi, önce düzeltici denetim, sonra yaptırım modeli uygulansaydı, hem kamu yararı hem hukuki öngörülebilirlik dengelenebilirdi.
## VI. Sonuç
Papara kararı, Türkiye'de finansal teknolojilerin hızla büyüdüğü bir dönemde, idarenin denetim ve yaptırım dengesini yeniden düşünmek için önemli bir uyarı niteliği taşıyor. 6493 sayılı Kanun'un açık lafzı, Danıştay içtihatlarının yönü ve Avrupa Birliği'nin PSD2 yaklaşımı birlikte değerlendirildiğinde, tablo net: Denetim yapılmadan verilen bir iptal kararı, hem kanuna hem hukuk devleti ilkesine aykırıdır.
İdarenin görevi yalnızca piyasayı korumak değil, aynı zamanda öngörülebilir ve ölçülü bir hukuk düzeni yaratmaktır. Bu nedenle, TCMB'nin ve benzeri otoritelerin gelecekte "önce denetim, sonra yaptırım" ilkesini kurumsal bir refleks hâline getirmesi, hem piyasa istikrarı hem de hukuk devleti açısından en doğru yol olacaktır.
## Kaynakça
- ACPR, Enforcement Policy Framework, Paris, 2021.
- Avrupa Komisyonu, Guidelines on the Security of Internet Payments under PSD2, Brussels, 2018; Directive (EU) 2015/2366 (PSD2).
- BaFin, Annual Report 2022, Bonn, 2023.
- Danıştay 10. Daire, E. 2019/2641, K. 2021/2175; Danıştay 13. Daire, E. 2016/4387, K. 2018/1212.
- Giritli, İ. / Bilgen, P. / Akgüner, T., İdare Hukuku, 11. Baskı, Der Yayınları, 2021.
- Gözler, K., İdare Hukuku, Cilt I, Ekin Yayınevi, 2020.
- Kaya, C., "Elektronik Para Kuruluşlarının Hukuki Niteliği", Banka ve Finans Hukuku Dergisi, 8(2), 2022, s. 61–75.
- Ödeme Hizmetleri ve Elektronik Para Kuruluşları Hakkında Yönetmelik, RG 1 Aralık 2021, Sayı: 31676.
- TCMB Kararı, RG 31 Ekim 2025, Sayı: 33063; 6493 sayılı Kanun, RG 27 Haziran 2013, Sayı: 28690.`
  },
  {
    slug: "papara-karari-fintech-regulasyonunun-yeni-esigi",
    date: "2025-11-01",
    category: "fintech",
    lang: "tr",
    source: "www.aa.com.tr",
    body: `## 1. Kararın Arka Planı
Türkiye Cumhuriyet Merkez Bankası (TCMB), 31 Ekim 2025 tarihli ve 33063 sayılı Resmî Gazete'de yayımlanan tebliğ ile Papara Elektronik Para A.Ş.'nin elektronik para ihraç etme ve ödeme hizmeti faaliyet izinlerini iptal etti.
Karar, 6493 sayılı Ödeme ve Menkul Kıymet Mutabakat Sistemleri, Ödeme Hizmetleri ve Elektronik Para Kuruluşları Hakkında Kanun'un 15, 16, 18 ve 19. maddeleri uyarınca alınmıştır. Bu maddeler, elektronik para kuruluşlarının:
- asgarî sermaye yeterliliğini,
- uyum programlarını,
- risk yönetimi ve iç denetim sistemlerini,
- ve faaliyet izinlerinin iptal şartlarını düzenlemektedir.
TCMB'nin gerekçesi henüz kamuya detaylı biçimde açıklanmamış olmakla birlikte, kararın kanun hükümlerine aykırılıklar ve sistematik uyumsuzluk tespitleri üzerine verildiği belirtilmiştir.
## 2. Elektronik Para Kuruluşlarının Hukukî Statüsü
Papara, 2016 yılında TCMB'den elektronik para kuruluşu lisansı almış ve 6493 sayılı Kanun çerçevesinde faaliyet göstermekteydi. Bu Kanun, ödeme ve elektronik para kuruluşlarının finansal sistemin bütünlüğünü koruması amacıyla oldukça katı düzenlemeler içerir:
> Madde 18 – (1) Kuruluşun Kanun veya ilgili düzenlemelerde öngörülen yükümlülüklere aykırı davrandığının tespit edilmesi hâlinde Merkez Bankası, faaliyet iznini iptal edebilir.
Bu hüküm, idarenin geniş takdir yetkisini tanır; dolayısıyla iptal kararı izin alma sürecinde olduğu kadar idari denetim sürecinde de güçlü bir yaptırım aracıdır.
## 3. Kararın Fintek Ekosistemi Üzerindeki Olası Etkileri
Papara, Türkiye'de 20 milyondan fazla kullanıcıya sahip bir elektronik para platformuydu. İznin iptali, fintech piyasasında lisanslı ödeme kuruluşları arasındaki rekabet dengesini ve kullanıcı güvenini doğrudan etkileyebilir.
Kısa vadede beklenen etkiler şunlar olabilir: kullanıcıların bakiyelerinin TCMB gözetiminde başka bir kuruluşa devri veya iadesi, ödeme hizmetleri altyapısında geçici yavaşlama, yurt dışı yatırımcıların regülasyon riskini yeniden değerlendirmesi, diğer fintech firmalarının uyum süreçlerini sıkılaştırması.
Uzun vadede ise bu karar, Türkiye'de elektronik para ve ödeme hizmetleri sektörünün denetim yoğunluğunu artıran bir emsal teşkil edecektir.
## 4. Hukukî Değerlendirme
## a) İdari Takdirin Sınırları
TCMB'nin yetkisi 6493 sayılı Kanun'un 18. maddesine dayanır. Ancak idarenin iptal yetkisi, orantılılık ilkesi ve ölçülülük denetimine tabidir. Eğer ihlaller giderilebilir nitelikte ise, doğrudan izin iptali yerine faaliyet geçici durdurması veya düzeltme süresi verilmesi beklenirdi. Dolayısıyla bu kararın idari yargı denetimine konu olması muhtemeldir.
## b) Finansal İstikrar ve Kamu Yararı Dengesi
TCMB, elektronik para kuruluşlarının kara para aklama, yasa dışı bahis ve müşteri varlıklarının kötüye kullanılması gibi risklere açık olduğunu defalarca vurgulamıştır. Bu bağlamda karar, finansal istikrar ve kamu güvenliği açısından gerekçelendirilebilir. Ancak yatırımcı güveninin korunması için gerekçenin şeffaf biçimde açıklanması büyük önem taşır.
## 5. Sektörel Reform Gerekliliği
Bu olay, 6493 sayılı Kanun'un güncellenmesi gereğini yeniden gündeme getirdi. Mevzuat hâlen Avrupa Birliği'nin PSD2 (Payment Services Directive 2) standardının gerisindedir. Yeni dönemde şu alanlarda reform ihtiyacı belirgindir: dijital kimlik ve açık bankacılık entegrasyonu, tüzel kişi müşteri koruması, yedekleme ve operasyonel risk yönetimi, sektörel lisanslama rejiminin saydamlaştırılması.
## 6. Sonuç: Fintech Güveni, Hukukla İnşa Edilir
Papara kararı, fintech sektörüne güçlü bir mesaj veriyor: Türkiye'de elektronik para ve ödeme hizmetleri alanı, artık "startup enerjisiyle değil, hukukî disiplinle" yönetilecek. Bu kararın ardında bir yaptırım değil, dijital finansın kurumsallaşma ihtiyacı vardır.
Yatırımcılar, kullanıcılar ve girişimler için bu süreç yalnızca bir kriz değil, daha güvenli ve sürdürülebilir bir fintech ekosistemi inşa etme fırsatıdır.
## Kaynakça
- 6493 Sayılı Kanun, RG 27.06.2013/28690.
- Türkiye Cumhuriyet Merkez Bankası, Resmî Gazete, 31.10.2025, Sayı: 33063; TCMB Basın Açıklamaları (2025).
- OECD (2024), Digital Finance and Regulation: Global Perspectives.
- Avrupa Komisyonu, PSD2 Directive (EU 2015/2366).`
  },
  {
    slug: "yatirim-anlasmalari-devlet-egemenligini-sinirliyor-mu",
    date: "2025-10-31",
    category: "yatirim",
    lang: "tr",
    body: `## 1. Giriş
Uluslararası yatırım hukuku (International Investment Law – IIL), küresel ekonomik düzenin görünürde en teknik ama en tartışmalı alanlarından biridir. Bu hukuk rejimi, yabancı yatırımcıların yatırımlarını korumayı amaçlayan ikili yatırım anlaşmaları (Bilateral Investment Treaties – BITs) ve tahkim mekanizmaları aracılığıyla devlet–yatırımcı ilişkisini düzenler.
Ancak son otuz yılda, bu koruma rejiminin devlet egemenliği üzerinde önemli sınırlamalar doğurduğu yönünde güçlü bir akademik ve politik tartışma ortaya çıkmıştır. Bu yazı, yatırım anlaşmalarının egemenlik üzerindeki etkisini normatif bir bakış açısıyla ele almakta; devletlerin kamu yararına düzenleme yapma yetkisi ile yatırımcı koruma standartları arasındaki dengeyi sorgulamaktadır.
## 2. Yatırım Hukukunun Egemenlik Karşısındaki Teorik Çerçevesi
Yatırım hukuku, klasik anlamda uluslararası kamu hukukunun bir uzantısı değil, yatırımcı haklarını bireysel düzeyde koruyan özel hukuk benzeri bir yapı olarak gelişmiştir (Sornarajah, The International Law on Foreign Investment, 2021, s. 27). Bu nedenle devletlerin "egemen düzenleme yetkisi" (regulatory sovereignty) ile yatırımcının "meşru beklentileri" (legitimate expectations) arasında sürekli bir gerilim mevcuttur.
Van Harten, bu durumu "yargısal egemenlik transferi" (judicial transfer of sovereignty) olarak nitelendirir; zira yatırım tahkiminde devletin düzenleyici eylemleri artık kendi yargı organları yerine uluslararası tahkim heyetlerince denetlenmektedir (Van Harten, Investment Treaty Arbitration and Public Law, 2007, s. 45–49).
## 3. Devletin Düzenleme Yetkisi ile Yatırımcı Koruması Arasındaki Çatışma
BIT'ler tipik olarak, yatırımcıya "adil ve hakkaniyete uygun muamele" (Fair and Equitable Treatment – FET), "dolaylı kamulaştırmaya karşı koruma" ve "ulusal muamele" güvenceleri sağlar. Bununla birlikte, bu standartların sınırları belirsizdir.
Örneğin, Tecmed v. Mexico (ICSID Case No. ARB(AF)/00/2, 2003) kararında FET, yatırımcının "meşru beklentilerinin" korunması olarak yorumlanmış; bu da devletin kamu politikasını değiştirme serbestisini fiilen sınırlamıştır. Benzer biçimde, CMS v. Argentina (2005) davasında, ekonomik kriz döneminde alınan önlemlerin BIT yükümlülüklerini ihlal ettiği sonucuna varılmış; Arjantin'in "zorunluluk hâli" (necessity defence) savunması reddedilmiştir.
Bu kararlar, devletlerin ekonomik, çevresel ve sosyal kriz anlarında dahi kamu yararına düzenleme yapma alanının tahkim tarafından daraltıldığını göstermektedir (Tienhaara, The Expropriation of Environmental Governance, 2009, s. 102–107).
## 4. Egemenliğin "Yargısal Uluslararasılaşması"
Yatırım tahkimi, uluslararası hukukun klasik devlet-merkezli yapısından sapmıştır. Bu sistem, yatırımcılara doğrudan dava açma yetkisi vererek (ICSID Convention, Art. 25), devlet–yatırımcı asimetrisi yaratmıştır. Schill, bu dönüşümü "anayasal karakterde küresel bir yatırım yönetimi" olarak tanımlar (Schill, The Multilateralization of International Investment Law, 2009, s. 49–53).
Ancak bu anayasal yapı, demokratik hesap verebilirliğin dışında işlediği için eleştirilmektedir. Zira devletin egemenliğinin asli unsurlarından biri olan yargılama yetkisi, uluslararası özel hakem heyetlerine devredilmiş durumdadır (Sornarajah, 2021, s. 312).
## 5. Kamusal Politika Alanlarının Sınırlanması: "Regulatory Chill" Etkisi
Tienhaara'nın geliştirdiği "regulatory chill" teorisi, devletlerin yatırımcılar tarafından dava edilme korkusuyla kamu politikası üretmekten kaçınabileceğini ileri sürer (Tienhaara, 2009, s. 112). Bu durum, özellikle çevre, sağlık ve enerji sektörlerinde belirgindir.
Örneğin Philip Morris v. Uruguay (ICSID Case No. ARB/10/7, 2016) davasında Uruguay, kamu sağlığı politikası kapsamında tütün ürünlerine yönelik katı etiketleme kuralları getirmiş, ancak yatırımcı bu önlemlerin BIT ihlali olduğunu iddia etmiştir. Her ne kadar Uruguay bu davayı kazanmış olsa da, süreç devlet için maliyetli olmuş ve diğer devletler açısından politik caydırıcılık (chilling effect) yaratmıştır.
## 6. Devlet Egemenliğini Yeniden Tanımlamak: Kamu Hukuku Perspektifi
Son yıllarda literatürde devlet egemenliğini yatırım koruması ile "kamu hukuku ilkeleri" arasında uzlaştırma yönünde bir eğilim vardır. Schill ve Djanic (2018), yatırım hukukunun artık "özel hukuk benzeri" olmaktan çıkarak küresel idare hukuku mantığıyla yeniden yapılandırılması gerektiğini savunur. Bu yaklaşıma göre egemenlik, mutlak bir kavram değil; yatırım rejimiyle "karşılıklı sınırlanmış" bir yetkidir. Yani devletin düzenleme hakkı, yatırımcının meşru beklentileriyle dengelenmelidir (Schill & Djanic, Journal of World Investment & Trade, 2018, s. 112–118).
## 7. Sonuç: Egemenlikten Paylaşıma
Yatırım anlaşmaları, klasik anlamda egemenliği tamamen ortadan kaldırmaz; ancak onu "uluslararası düzeyde paylaşılan bir yetki" hâline getirir. Devletin hukuk yaratma ve uygulama fonksiyonları, artık yalnızca ulusal parlamentoların değil, uluslararası tahkim heyetlerinin ve yatırımcıların etkileşiminde şekillenmektedir. Bu dönüşüm, Westphalia tipi egemenlik anlayışının ötesine geçerek, küresel ekonomik yönetişimin yeni bir boyutuna işaret eder.
Bu nedenle gelecekteki reform tartışmaları — özellikle UNCITRAL Working Group III çerçevesinde — devletin düzenleme hakkını açık biçimde tanımlayan hükümlerle (örn. "Right to Regulate" maddeleri) desteklenmedikçe, egemenliğin uluslararası yatırım hukukunda fiilen zayıflaması kaçınılmaz görünmektedir.
## Kaynakça
- Dolzer, R. & Schreuer, C. (2012). Principles of International Investment Law. Oxford University Press.
- Sornarajah, M. (2021). The International Law on Foreign Investment. 6th ed., Cambridge University Press.
- Schill, S. (2009). The Multilateralization of International Investment Law. Cambridge University Press.
- Schill, S. & Djanic, D. (2018). "International Investment Law and Public Law," Journal of World Investment & Trade, 19(1), 108–128.
- Tienhaara, K. (2009). The Expropriation of Environmental Governance. Cambridge University Press.
- Van Harten, G. (2007). Investment Treaty Arbitration and Public Law. Oxford University Press.
- Tecmed v. Mexico, ICSID Case No. ARB(AF)/00/2 (2003); CMS Gas Transmission Company v. Argentina, ICSID Case No. ARB/01/8 (2005); Philip Morris Brands Sàrl v. Uruguay, ICSID Case No. ARB/10/7 (2016).
- ICSID Convention, 1965 (Art. 25).`
  }
];

/* Aynı konunun iki dilde ayrı yazılmış sürümleri listelerde tekrar etmesin:
   hideIn içindeki site dillerinde yazı listelenmez, doğrudan bağlantısı çalışmaya devam eder.
   versions: { dil: slug } aynı konunun o dilde yazılmış sürümünü gösterir; arama motorlarına hreflang ile bildirilir (src/seo.js). */
export const postsFor = (lang) => posts.filter((p) => !(p.hideIn || []).includes(lang));
