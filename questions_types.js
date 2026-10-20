// TryExam - çoklu seçim, eşleştirme (sürükle-bırak) ve yapılandırma soruları
// Tür alanı:
//   (yok) / "single" : tek doğru cevaplı çoktan seçmeli  -> answer: indeks
//   "multi"          : birden fazla doğru seçenek        -> answer: indeks dizisi (tümü doğru olmalı)
//   "match"          : eşleştirme                        -> answer[i] = right dizisindeki doğru indeks
//   "config"         : komut/yapılandırma yazma          -> answerSets: kabul edilen satır kümeleri
// Özgün sorular: Cisco sınav içeriği kullanılmamıştır.

QUESTIONS.push(
  // ---------- ÇOKLU SEÇİM (multi) ----------
  {
    type: "multi", domain: 1,
    q: "Aşağıdakı ifadələrdən DÜZGÜN olan İKİSİNİ seçin.",
    options: [
      "Type 1 hypervisor birbaşa avadanlıq üzərində işləyir",
      "Type 2 hypervisor birbaşa avadanlıq üzərində işləyir",
      "Hər container öz nüvəsini işlədir",
      "Type 2 hypervisor əsas əməliyyat sistemi üzərində işləyir"
    ],
    answer: [0, 3],
    explain: "Type 1 birbaşa avadanlıq, Type 2 əsas əməliyyat sistemi üzərində işləyir. Container nüvəni paylaşır."
  },
  {
    type: "multi", domain: 1,
    q: "IPv6 unicast formatında olan İKİ ünvanı seçin.",
    options: ["2001:db8::1", "ff02::1", "fe80::1", "239.1.1.1"],
    answer: [0, 2],
    explain: "2001:db8::1 sənədləşdirmə üçün ayrılmış global unicast formatlı ünvandır; fe80::1 link-local unicast, ff02::1 multicast, 239.1.1.1 isə IPv4 ünvanıdır."
  },
  {
    type: "multi", domain: 1,
    q: "İnterfeysdə xəta və collision sayğaclarını artıra bilən İKİ səbəbi seçin.",
    options: ["Duplex uyğunsuzluğu", "Nasaz və ya zədələnmiş kabel", "Düzgün sazlanmış VLAN", "Düzgün sazlanmış MTU"],
    answer: [0, 1],
    explain: "Duplex uyğunsuzluğu və zədələnmiş kabel fiziki səviyyə xətaları yaradır. Düzgün VLAN və MTU sazlamaları xəta sayğaclarını artırmır."
  },
  {
    type: "multi", domain: 1,
    q: "2.4 GHz simsiz şəbəkədə radio maneəsini azaltmaq üçün İKİ əməliyyatı seçin.",
    options: [
      "Qonşu AP-lərdə 1, 6 və 11 kanallarından istifadə etmək",
      "Bütün AP-lərdə eyni kanaldan istifadə etmək",
      "2, 3 və 4 kanallarından istifadə etmək",
      "AP-ləri mikrodalğalı soba kimi maneə mənbələrindən uzaq yerləşdirmək"
    ],
    answer: [0, 3],
    explain: "Non-overlapping 1, 6, 11 kanallarının istifadəsi və maneə mənbələrindən uzaq yerləşdirmə radio maneəsini azaldır. Eyni və üst-üstə düşən kanallar məhsuldarlığı azalda bilər."
  },
  {
    type: "multi", domain: 2,
    q: "LACP ilə EtherChannel yaradılması üçün tələb olunan İKİ şərti seçin.",
    options: [
      "LACP rejimləri uyğun olmalıdır (active ilə active və ya passive)",
      "Üzv portların sürət və duplex dəyərləri eyni olmalıdır",
      "Üzv portlar müxtəlif VLAN-larda olmalıdır",
      "Üzv portlar mütləq müxtəlif switch-lərdə olmalıdır"
    ],
    answer: [0, 1],
    explain: "Rejimlər uyğun, üzv portların sürət/duplex və VLAN sazlamaları eyni olmalıdır. Bu ssenari adi, tək switch üzərində EtherChannel üçündür."
  },
  {
    type: "multi", domain: 2,
    q: "Son cihazlara qoşulan access portlarda PortFast üçün DÜZGÜN olan ÜÇ ifadəni seçin.",
    options: [
      "Bu ssenaridə yalnız son cihazlara gedən access portlarda istifadə edilməlidir",
      "Port birbaşa forwarding vəziyyətinə keçir (listening və learning keçilir)",
      "Loop-ların qarşısını tam alır",
      "BPDU Guard ilə birlikdə istifadəsi tövsiyə olunur",
      "Standart olaraq bütün trunk portlarda aktivdir"
    ],
    answer: [0, 1, 3],
    explain: "PortFast adətən son cihazlara qoşulan access portlarda istifadə edilir və listening/learning mərhələlərini keçir. Loop-un qarşısını almır; BPDU Guard ilə istifadəsi tövsiyə edilir. Xüsusi edge trunk ssenarilərində ayrıca sazlama mümkündür."
  },
  {
    type: "multi", domain: 2,
    q: "Rapid PVST+ daxilində keçərli port rollarını seçin (ÜÇ variant).",
    options: ["Root", "Designated", "Alternate", "Active"],
    answer: [0, 1, 2],
    explain: "RSTP rolları Root, Designated, Alternate və Backup-dır. 'Active' HSRP terminidir."
  },
  {
    type: "multi", domain: 2,
    q: "İcazəsiz DHCP server-lərdən qorunmaq üçün İKİ əməliyyatı seçin.",
    options: [
      "DHCP snooping aktivləşdirmək",
      "Yalnız port security aktivləşdirmək",
      "Yalnız həqiqi DHCP server-ə gedən uplink portu trusted işarələmək",
      "Bütün portlarda PortFast aktivləşdirmək"
    ],
    answer: [0, 2],
    explain: "DHCP snooping saxta DHCP cavablarını bloklayır və server cavablarına yalnız trusted portlardan icazə verir."
  },
  {
    type: "multi", domain: 3,
    q: "Statik route haqqında DÜZGÜN olan ÜÇ ifadəni seçin.",
    options: [
      "Standart administrative distance 1-dir",
      "Standart AD dəyəri OSPF-dən aşağıdır",
      "Metric dəyəri həmişə RIP-dən aşağıdır",
      "Floating static üçün AD dinamik protokollardan yüksək təyin edilir"
    ],
    answer: [0, 1, 3],
    explain: "Statik route üçün standart AD 1, OSPF üçün 110-dur. Floating static ehtiyat route olaraq yüksək AD ilə təyin edilir. AD və metric fərqli anlayışlardır; protokolların metric dəyərləri birbaşa müqayisə olunmur."
  },
  {
    type: "multi", domain: 3,
    q: "Eyni broadcast segmentində iki OSPF qonşusunun Full adjacency qurması üçün tələb olunan İKİ şərti seçin.",
    options: [
      "Hello və dead timer dəyərləri eyni olmalıdır",
      "Area ID eyni olmalıdır",
      "Router ID eyni olmalıdır",
      "Network mask fərqli ola bilər"
    ],
    answer: [0, 1],
    explain: "Hello/dead timer və area ID uyğun olmalıdır. Router ID unikal, broadcast şəbəkədə mask-lar eyni olmalıdır."
  },
  {
    type: "multi", domain: 3,
    q: "HSRP haqqında DÜZGÜN olan İKİ ifadəni seçin.",
    options: [
      "Virtual IP client-lərə ortaq default gateway ünvanı verir",
      "İlkin seçimdə ən yüksək priority olan router active seçilir",
      "Standby router real trafiki ötürür",
      "Standart priority 0-dır"
    ],
    answer: [0, 1],
    explain: "HSRP virtual IP təmin edir; ilkin seçimdə ən yüksək priority olan router active olur. Standby, active sıradan çıxana qədər trafik ötürmür. Standart priority 100-dür."
  },
  {
    type: "multi", domain: 4,
    q: "TACACS+ istifadəsinin üstünlüyü olan İKİ xüsusiyyəti seçin.",
    options: [
      "Komanda üzrə authorization təmin edir",
      "Paketin bütün gövdəsini şifrələyir",
      "UDP əsasında işləyir",
      "Yalnız şəbəkəyə giriş üçün istifadə olunur"
    ],
    answer: [0, 1],
    explain: "TACACS+ komanda üzrə authorization edir və TCP vasitəsilə bütün gövdəni şifrələyir. RADIUS UDP istifadə edir; TACACS+ idarəetmə girişi üçün uyğundur."
  },
  {
    type: "multi", domain: 4,
    q: "DHCP snooping-in təmin etdiyi İKİ xüsusiyyəti seçin.",
    options: [
      "Saxta DHCP server cavablarını bloklayır",
      "DHCP binding cədvəli yaradır",
      "Yalnız IPv6-da işləyir",
      "Hər portu standart olaraq trusted edir"
    ],
    answer: [0, 1],
    explain: "DHCP snooping untrusted portlardan gələn server cavablarını atır və IP–MAC binding cədvəli yaradır. Standart olaraq bütün portlar untrusted-dır."
  },
  {
    type: "multi", domain: 4,
    q: "Port security ilə edilə bilən ÜÇ sazlamanı seçin.",
    options: [
      "Port üzrə icazə verilən MAC ünvanlarının sayını məhdudlaşdırmaq",
      "Sticky MAC learning",
      "Violation rejimini protect, restrict və ya shutdown seçmək",
      "Trunk portlarda standart olaraq aktiv olmaq",
      "Yalnız statik IP ünvanları ilə işləmək"
    ],
    answer: [0, 1, 2],
    explain: "Port security maksimum MAC sayı, sticky learning və violation rejimi sazlamalarını əhatə edir. Trunk portlarda standart olaraq aktiv deyil və IP-dən asılı deyil."
  },
  {
    type: "multi", domain: 4,
    q: "IPv4 NAT növlərindən ÜÇÜNÜ seçin.",
    options: ["Static NAT", "Dynamic NAT", "PAT (overload)", "Yalnız ARP broadcast"],
    answer: [0, 1, 2],
    explain: "Static NAT, Dynamic NAT və PAT (overload) IPv4 NAT növləridir. ARP broadcast NAT növü deyil."
  },
  {
    type: "multi", domain: 5,
    q: "Infrastructure as Code (IaC) istifadəsinin İKİ üstünlüyünü seçin.",
    options: [
      "Təkrarlana bilən tətbiqlər təmin edir",
      "Versiya nəzarəti ilə dəyişiklik izləməsini asanlaşdırır",
      "Hər dəyişikliyin əl ilə edilməsini tələb edir",
      "Sənədləşdirmə ehtiyacını tam aradan qaldırır"
    ],
    answer: [0, 1],
    explain: "IaC təkrarlana bilən tətbiq və versiya nəzarəti təmin edir. Əl ilə konfiqurasiya tələb etmir və sənədləşdirmə ehtiyacını tam aradan qaldırmır."
  },
  {
    type: "multi", domain: 5,
    q: "SNMP haqqında DÜZGÜN olan İKİ ifadəni seçin.",
    options: [
      "TRAP ilə idarə olunan cihaz hadisəni öz təşəbbüsü ilə bildirə bilər",
      "GET ilə manager obyektin dəyərini oxuyur",
      "SNMPv1 şifrələmə təmin edir",
      "SNMP yalnız TCP üzərindən işləyir"
    ],
    answer: [0, 1],
    explain: "TRAP agentin başladığı bildiriş, GET isə manager-in dəyər sorğusudur. SNMPv1 şifrələmə təmin etmir; ənənəvi SNMP UDP istifadə edir."
  },
  {
    type: "multi", domain: 5,
    q: "Generativ süni intellektlə şəbəkə əməliyyatları üçün prompt hazırlayarkən təhlükəsiz olan İKİ üsulu seçin.",
    options: [
      "Məxfi məlumatı göndərməzdən əvvəl anonimləşdirmək",
      "Yaradılan çıxışı mütəxəssisə yoxlatmaq",
      "Real parolları prompt-a əlavə etmək",
      "Gizli açarları hər prompt-a daxil etmək"
    ],
    answer: [0, 1],
    explain: "Məxfi məlumat maskalanmalı, AI çıxışı mütəxəssis tərəfindən yoxlanmalıdır. Parol və gizli açar paylaşılmamalıdır."
  },

  // ---------- EŞLEŞTİRME (match, sürükle-bırak) ----------
  {
    type: "match", domain: 1,
    q: "Hypervisor və virtuallaşdırma anlayışlarını düzgün izahlarla uyğunlaşdırın.",
    left: ["Type 1 hypervisor", "Type 2 hypervisor", "Container", "Virtual maşın"],
    right: [
      "Əsas sistemin nüvəsini paylaşır",
      "Birbaşa avadanlıq üzərində işləyir",
      "Əməliyyat sistemi üzərində işləyir",
      "Hər biri öz qonaq əməliyyat sisteminə malikdir"
    ],
    answer: [1, 2, 0, 3],
    explain: "Type 1 birbaşa avadanlıqda, Type 2 əməliyyat sistemində işləyir. Container nüvəni paylaşır; virtual maşın öz qonaq OS-ni işlədir."
  },
  {
    type: "match", domain: 1,
    q: "IPv6 ünvan növlərini prefix-lərlə uyğunlaşdırın.",
    left: ["FE80::/10", "FC00::/7", "FF00::/8", "2000::/3"],
    right: ["Multicast", "Link-local", "Unique local (ULA)", "Global unicast"],
    answer: [1, 2, 0, 3],
    explain: "FE80::/10 link-local, FC00::/7 ULA, FF00::/8 multicast, 2000::/3 isə global unicast sahəsidir."
  },
  {
    type: "match", domain: 2,
    q: "Rapid PVST+ port vəziyyətlərini izahlarla uyğunlaşdırın.",
    left: ["Discarding", "Learning", "Forwarding"],
    right: [
      "Trafik ötürür və MAC öyrənir",
      "Yalnız BPDU emal edir, MAC öyrənmir və trafik ötürmür",
      "MAC öyrənir, lakin trafik ötürmür"
    ],
    answer: [1, 2, 0],
    explain: "Discarding yalnız BPDU emal edir; Learning MAC öyrənir, lakin trafik ötürmür; Forwarding həm trafik ötürür, həm MAC öyrənir."
  },
  {
    type: "match", domain: 2,
    q: "LACP və PAgP rejimlərini davranışları ilə uyğunlaşdırın.",
    left: ["LACP active", "LACP passive", "PAgP desirable", "PAgP auto"],
    right: [
      "PAgP ilə kanalı başlatır",
      "LACP ilə kanalı başlatır",
      "PAgP ilə yalnız cavab verir",
      "LACP ilə yalnız cavab verir"
    ],
    answer: [1, 3, 0, 2],
    explain: "LACP active kanalı başlatır, passive yalnız cavab verir. PAgP desirable kanalı başlatır, auto yalnız cavab verir."
  },
  {
    type: "match", domain: 3,
    q: "Routing protokollarını standart administrative distance dəyərləri ilə uyğunlaşdırın.",
    left: ["Connected route", "Statik route", "EIGRP (internal)", "OSPF"],
    right: ["90", "0", "110", "1"],
    answer: [1, 3, 0, 2],
    explain: "Connected 0, statik 1, internal EIGRP 90, OSPF isə 110-dur."
  },
  {
    type: "match", domain: 4,
    q: "DNS qeyd növlərini funksiyaları ilə uyğunlaşdırın.",
    left: ["A", "AAAA", "MX", "PTR"],
    right: ["Poçt server-ini göstərir", "IP ünvanından domain adını tapır", "IPv6 ünvanını göstərir", "IPv4 ünvanını göstərir"],
    answer: [3, 2, 0, 1],
    explain: "A IPv4, AAAA IPv6 ünvanını göstərir; MX poçt server-ini, PTR reverse lookup-u təmin edir."
  },
  {
    type: "match", domain: 4,
    q: "Layer 2 təhlükəsizlik funksiyalarını təyinatları ilə uyğunlaşdırın.",
    left: ["DHCP snooping", "Dynamic ARP Inspection", "Port security", "Storm control"],
    right: [
      "Port üzrə icazə verilən MAC sayını məhdudlaşdırır",
      "Saxta ARP cavablarını bloklayır",
      "İcazəsiz DHCP server-ləri bloklayır",
      "Broadcast/multicast trafik selini məhdudlaşdırır"
    ],
    answer: [2, 1, 0, 3],
    explain: "DHCP snooping icazəsiz DHCP server-ləri, DAI saxta ARP cavablarını bloklayır. Port security MAC limitini, storm control trafik axınının həddini nəzarətdə saxlayır."
  },
  {
    type: "match", domain: 5,
    q: "Şəbəkə idarəetmə və monitorinq anlayışlarını funksiyaları ilə uyğunlaşdırın.",
    left: ["SNMP TRAP", "SNMP GET", "Syslog səviyyə 0", "Ansible"],
    right: [
      "Fövqəladə hal (Emergency) səviyyəsi",
      "Agentless konfiqurasiya idarəetməsi",
      "İdarə olunan cihazdan təşəbbüslü bildiriş",
      "Manager-in dəyər sorğusu"
    ],
    answer: [2, 3, 0, 1],
    explain: "TRAP cihazdan gələn təşəbbüslü bildiriş, GET manager sorğusudur. Syslog 0 Emergency-dir; Ansible adətən agentless işləyir."
  },
);
