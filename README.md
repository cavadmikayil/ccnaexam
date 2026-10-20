# TryExam AZ — CCNA hazırlıq simulyatoru


## İstifadə

`index.html` faylını brauzerdə açın. Quraşdırma, build və server tələb olunmur.
İmtahan, sual bankası, lab və PDF yaratma internet olmadan da işləyir.
İmtahanı yaddaşda saxlamaq üçün GitHub Pages və ya adi HTTP server üzərindən açmaq daha uyğundur;
brauzerlər `file://` ünvanlarında localStorage imkanlarını məhdudlaşdıra bilər.

## GitHub Pages-də yerləşdirmə

1. ZIP-i açın. `index.html` və digər faylları birlikdə GitHub repository-nin əsas qovluğuna yükləyin.
2. Repository-də **Settings → Pages** bölməsini açın.
3. **Deploy from a branch**, `main` branch və `/(root)` seçib saxlayın.
4. GitHub-un göstərdiyi Pages ünvanını açın.

Seçdiyiniz nəşr qovluğunda `index.html` birbaşa mövcud olmalıdır.
`.nojekyll` daxil edilib. Bütün skript yolları nisbi olduğundan layihə başqa repository adları altında da işləyir.
LinkedIn sənəd keçidində sayt ünvanı açılmış səhifənin qovluğundan avtomatik götürülür.
Sayt bu paket hazırlanarkən heç bir hesaba yerləşdirilməyib.

## Funksiyalar

- 181 sual: 119 tək seçim, 30 çoxlu seçim, 8 uyğunlaşdırma (matching), 24 lab.
- 100 suallıq, 120 dəqiqəlik imtahan; mövzu çəkiləri 25/25/20/20/10.
- 10 suallıq, vaxt məhdudiyyətsiz məşq.
- Sual və variantların qarışdırılması; cavab açarlarının uyğun yenidən hesablanması.
- Sual naviqasiyası və işarələmə; vaxtı bitməmiş imtahana eyni brauzerdə davam.
- Matching üçün sürüklə-burax və ya ardıcıl kliklə təyinetmə; dolu xanaya kliklə uyğunluğu silmə.
- Topologiya, cihaz konsolu, IOS komandaları və 87 yoxlanılan lab tapşırığı.
- Vaxt bitdikdə avtomatik tamamlama, mövzular üzrə hesabat, cavab və izahların təhlili.
- İmtahanda ən azı 80% nəticədə sertifikat önbaxışı, A4 PDF endirmə və LinkedIn əlavəetmə keçidi.
- Sertifikat şəkil əsasında PDF-ə yazılır; Azərbaycan hərfləri saxlanılır, mətn seçilə bilən deyil.

## Tərcümə və düzəlişlər

Bütün suallar, cavab variantları, uyğunlaşdırma izahları, lab tapşırıqları, topologiya mətnləri,
interfeys və sertifikat Azərbaycan dilinə çevrilib. IP ünvanları, protokol adları,
Cisco IOS komandaları və IP, VLAN, OSPF, DHCP, ACL, trunk kimi texniki terminlər saxlanılıb.
İlkin konfiqurasiya, yoxlama funksiyaları və cavab açarları qorunub.

Üç router-li statik routing lab-ında transit R2 üçün çatışmayan iki route tapşırığı və yoxlaması əlavə edilib.
Geniş topologiyalarda sağdakı cihazın kəsilməməsi üçün SVG sahəsi cihaz mövqelərinə uyğunlaşdırılıb.
Bir neçə texniki izah dəqiqləşdirilib: sənədləşdirmə IP aralıqları, eyni prefix üçün AD müqayisəsi,
LACP aktiv/ehtiyat link sayı, standart ACL yerləşdirilməsi və /30 mask ssenarisi.
Sertifikat PDF-i xarici CDN tələb etmir; `pdf.js` yerli fayldır.
Azərbaycan versiyası üçün ayrıca localStorage açarları istifadə edilir.

## Məhdudiyyətlər

Bu, müstəqil hazırlıq vasitəsidir; rəsmi Cisco imtahanı və ya rəsmi CCNA sertifikatı deyil.
Mənbənin versiya etiketi saxlanılıb; sual bankasının cari rəsmi imtahan proqramı ilə tam uyğunluğu ayrıca təsdiqlənməyib.
IOS lab sadələşdirilmiş simulyatordur: bütün IOS komandalarını və real paket ötürülməsini modelləşdirmir.
OSPF tapşırıqları konfiqurasiya vəziyyətini yoxlayır; real adjacency və route yayılmasını hesablamır.
Ping bağlı subnet və statik route məlumatı əsasında sadələşdirilmiş əlçatanlıq yoxlamasıdır.
NAT lab-ları interfeys rollarını və ACL-i yoxlayır; real NAT çevirmə mühərriki yoxdur.
localStorage silinərsə və ya başqa brauzer/cihaz/ünvan istifadə olunarsa əvvəlki irəliləyiş görünməz.
GitHub Pages server üzərindən sertifikat yoxlaması aparmır. LinkedIn səhifəsinin açılması internet tələb edir.

Fayllar UTF-8 kodlaşdırmasındadır. Yoxlama xülasəsi: `YOXLAMA.md`.
