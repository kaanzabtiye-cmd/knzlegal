// Blog yazıları. Gövde metinleri Türkçe (mevcut sitedeki gibi); başlık ve özetler
// her dilin JSON dosyasındaki blog.posts[slug] altında çevrilir.
// Gövde biçimi: satır başı "## " = ara başlık, "- " = madde, "> " = alıntı, diğer satırlar = paragraf.
export const posts = [
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
