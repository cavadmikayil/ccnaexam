// TryExam - ek zor sorular (2. paket): cihaz çıktılı senaryolar, dikkat gerektiren çoklu seçimler,
// 3-4 cihazlı uzun topolojiler ve sorun giderme simülasyonları.
// Konular Cisco'nun herkese açık konu başlıklarına göre özgün olarak yazılmıştır.

QUESTIONS.push(
  // =====================================================================
  // CİHAZ ÇIKTILI SENARYOLAR (tek doğru cevap)
  // =====================================================================
  {
    domain: 3,
    q: "R1 routing cədvəlində iki qeyd var:\n\nO    10.1.0.0/16 [110/20] via 192.168.1.2\nR    10.1.4.0/24 [120/1] via 192.168.2.2\n\n10.1.4.10-a gedən paket hansı route-u istifadə edir?",
    options: [
      "OSPF route-u; AD 110, RIP 120-dən aşağıdır",
      "RIP route-u; prefix daha uzundur və daha dəqiqdir",
      "Cost eyni olduğuna görə load balancing edilir",
      "Route-lar üst-üstə düşdüyü üçün paket atılır"
    ],
    answer: 1,
    explain: "Longest prefix match əvvəl gəlir. Ünvan həm /16, həm /24-ə uyğundur; /24 daha dəqiq olduğundan RIP route-u seçilir. AD yalnız eyni prefix üçün müxtəlif mənbələri müqayisə edir."
  },
  {
    domain: 2,
    q: "İki switch arasındakı trunk üçün CDP xəbərdarlığı var:\n\n%CDP-4-NATIVE_VLAN_MISMATCH: Native VLAN mismatch discovered on Gi0/24 (1), with SW2 Gi0/24 (99).\n\nƏn ehtimal olunan nəticə nədir?",
    options: [
      "Untagged trafik iki ucdakı fərqli VLAN-a aid sayılır və səhv yerə gedə və ya VLAN-lar arasında sızma yarada bilər",
      "Port avtomatik err-disable olur, bütün trafik dayanır",
      "Trunk avtomatik access olur",
      "Hər iki switch-də VLAN 99 avtomatik yaranır və problem həll olunur"
    ],
    answer: 0,
    explain: "Port açıq qala bilər, lakin untagged frame-lər iki tərəfdə fərqli VLAN-a düşür. Bu həm əlaqə, həm təhlükəsizlik problemi yaradır. İki ucdakı native VLAN eyni edilməlidir."
  },
  {
    domain: 3,
    q: "Router-də 'show ip interface brief' sətri belədir:\n\nGigabitEthernet0/1   192.168.5.1   YES manual administratively down down\n\n192.168.5.0/24 cihazı router-ə çata bilmir. Səbəb nədir?",
    options: [
      "Gi0/1-də shutdown tətbiq edilib",
      "Gi0/1-də ACL in tətbiq edilib",
      "Router-də ip routing verilməyib",
      "Gi0/1 trunk portdur və VLAN teqləri yoxdur"
    ],
    answer: 0,
    explain: "'administratively down' interfeysdə shutdown tətbiq edildiyini göstərir. İnterfeysdən trafik keçmir. ACL və trunk sazlamaları bu statusu yaratmır."
  },
  {
    domain: 4,
    q: "Ofisdə client-lər 169.254.x.x alır. DHCP server başqa subnet-dədir və router üzərindən əlçatandır. Problemi birbaşa həll edən sazlama hansıdır?",
    options: [
      "Router-in client LAN interfeysində DHCP relay (ip helper-address) sazlamaq",
      "Client-lərə statik IP vermək",
      "DHCP server-də ip dhcp snooping trust silmək",
      "Client portunda port security söndürmək"
    ],
    answer: 0,
    explain: "APIPA ünvanı DHCP cavabı alınmadığını göstərir. Broadcast DHCP sorğularını server-ə ötürmək üçün client LAN interfeysində 'ip helper-address' sazlanmalıdır."
  },
  {
    domain: 1,
    q: "172.16.45.200/20 ünvanının subnet network ünvanı hansıdır?",
    options: [
      "172.16.32.0",
      "172.16.40.0",
      "172.16.45.0",
      "172.16.0.0"
    ],
    answer: 0,
    explain: "/20-də üçüncü oktetin blok ölçüsü 16-dır: 0–15, 16–31, 32–47. 45, 32–47 blokundadır. Network 172.16.32.0, broadcast 172.16.47.255-dir."
  },
  {
    domain: 2,
    q: "Access portda 'switchport port-security maximum 1' və 'switchport port-security violation restrict' sazlanıb. Limiti aşan yeni MAC göründükdə nə olur?",
    options: [
      "Port err-disabled olur və yalnız əl ilə shutdown/no shutdown ilə açılır",
      "Port açıq qalır, icazəsiz frame-lər atılır, sayğac artır və xəbərdarlıq yaranır",
      "Port bağlanır, syslog yaranmır",
      "Port avtomatik trunk olur"
    ],
    answer: 1,
    explain: "Restrict rejimində port açıq qalır; icazəsiz frame-lər atılır, sayğac artır və syslog xəbərdarlığı yaranır. Err-disable shutdown rejimində olur."
  },
  {
    domain: 2,
    q: "Switch-də 'show ip interface brief' Vlan10 üçün up/down göstərir. İnterfeys administrativ olaraq bağlı deyil. Ən ehtimal olunan səbəb nədir?",
    options: [
      "VLAN 10 mövcud deyil və ya VLAN 10-da aktiv port yoxdur",
      "Vlan10-da shutdown tətbiq edilib",
      "Switch-də ip routing yoxdur",
      "Vlan10 MTU dəyəri çox böyükdür"
    ],
    answer: 0,
    explain: "İnterfeys açıqdır, lakin line protocol down-dır. Real switch-də SVI üçün VLAN mövcud və aktiv, həmin VLAN-a aid ən azı bir port up olmalıdır."
  },
  {
    domain: 5,
    q: "Administrator uzaqdan idarəetmə girişini təhlükəsiz etmək istəyir. Ən yaxşı üsul hansıdır?",
    options: [
      "transport input telnet ilə login və enable secret istifadə etmək",
      "SSH version 2 aktivləşdirib local user yaratmaq, VTY-də login local və transport input ssh istifadə etmək",
      "Yalnız enable password yaradıb HTTP idarəetməsini açmaq",
      "SNMPv2c public community string ilə idarə etmək"
    ],
    answer: 1,
    explain: "Telnet şifrələmir. SSH trafiki şifrələyir; local user autentifikasiyası VTY-də 'login local' ilə edilir. 'transport input ssh' yalnız SSH girişinə icazə verir."
  },

  // =====================================================================
  // DİKKAT GEREKTİREN ÇOKLU SEÇİMLER (tam olarak 2 doğru seçenek)
  // =====================================================================
  {
    type: "multi", domain: 2,
    q: "Trunk port haqqında DÜZGÜN olan İKİ ifadəni seçin.",
    options: [
      "Müasir Cisco switch-lərdə standart tagging protokolu 802.1Q-dur",
      "Standart sazlamada native VLAN untagged frame-ləri daşıyır",
      "Trunk yalnız bir VLAN daşıya bilər",
      "ISL standart və üstün tutulan encapsulation-dır"
    ],
    answer: [0, 1],
    explain: "Müasir Catalyst switch-lər 802.1Q istifadə edir. Trunk bir neçə VLAN daşıyır; standart sazlamada native VLAN untagged frame-lərə aiddir."
  },
  {
    type: "multi", domain: 3,
    q: "Routing cədvəli və statik route haqqında DÜZGÜN olan İKİ ifadəni seçin.",
    options: [
      "Floating static route əsas route itdikdə işləmək üçün daha yüksək AD ilə təyin edilir",
      "0.0.0.0/0 daha dəqiq uyğun route olmadıqda istifadə olunur",
      "Statik route standart AD 110-dur",
      "Default route həmişə ən yüksək AD-yə malikdir"
    ],
    answer: [0, 1],
    explain: "Floating static əsas, aşağı AD-li route itdikdə istifadə olunur. Statik route standart AD 1-dir; 110 OSPF-ə aiddir. Default route daha dəqiq uyğun route olmadıqda seçilir."
  },
  {
    type: "multi", domain: 4,
    q: "Standart ACL haqqında DÜZGÜN olan İKİ ifadəni seçin.",
    options: [
      "Yalnız source IP əsasında filtrləyir",
      "Mümkün qədər destination-a yaxın tətbiq edilməsi tövsiyə olunur",
      "Port nömrəsinə görə filtrləyir",
      "100–199 nömrələrini istifadə edir"
    ],
    answer: [0, 1],
    explain: "Standart ACL yalnız source IP-ni yoxlayır və digər trafiki səhvən bloklamamaq üçün destination-a yaxın tətbiq olunur. Port filtrləməsi və 100–199 nömrələri extended ACL-ə aiddir."
  },
  {
    type: "multi", domain: 5,
    q: "SNMPv3 haqqında DÜZGÜN olan İKİ ifadəni seçin.",
    options: [
      "authPriv həm autentifikasiya, həm şifrələmə təmin edir",
      "İstifadəçi əsaslı autentifikasiya və şifrələməni dəstəkləyir",
      "Yalnız community string ilə authorization edir",
      "SNMPv2c-dən daha az təhlükəsizdir"
    ],
    answer: [0, 1],
    explain: "SNMPv3 istifadəçi əsaslı authentication və privacy dəstəkləyir. AuthPriv hər ikisini aktiv edir. SNMPv1/v2c community string istifadəsi təhlükəsizlik baxımından zəifdir."
  },
  {
    type: "multi", domain: 1,
    q: "Ethernet-də collision və domain anlayışları haqqında DÜZGÜN olan İKİ ifadəni seçin.",
    options: [
      "Full-duplex bağlantıda collision baş vermir",
      "Switch-in hər portu ayrıca collision domain-dir",
      "Hub-ın hər portu ayrıca collision domain-dir",
      "VLAN bölgüsü olmadan switch broadcast domain-ləri ayırır"
    ],
    answer: [0, 1],
    explain: "Full-duplex-də CSMA/CD və collision olmur. Switch hər portu ayrıca collision domain kimi ayırır, hub bütün portları bir domain-də saxlayır. Broadcast domain VLAN və router ilə ayrılır."
  },
  {
    type: "multi", domain: 3,
    q: "OSPF-də DR seçimi haqqında DÜZGÜN olan İKİ ifadəni seçin.",
    options: [
      "Yeni seçimdə ən yüksək uyğun priority olan interfeys DR seçilir",
      "Uyğun namizədlər olduqda eyni multiaccess şəbəkədə bir DR və bir BDR olur",
      "Router ID həmişə ən aşağı IP əsasında seçilir",
      "Hello və dead qonşularda fərqli ola bilər"
    ],
    answer: [0, 1],
    explain: "Seçimdə əvvəl priority, bərabərlikdə router ID müqayisə edilir. Uyğun namizədləri olan multiaccess segmentdə bir DR və bir BDR seçilir. Hello/dead uyğun olmalıdır; router ID unikal olmalıdır."
  },

  // =====================================================================
  // UZUN TOPOLOJİLER (3-4 cihaz)
  // =====================================================================
  {
    type: "lab", domain: 3,
    q: "Üç router arasında iki LAN üçün statik routing sazlayın. R1 və R3 uzaq LAN-a statik route ilə çatmalıdır. R2 transit router-dir; hər iki uzaq LAN üçün route-ları da sazlayın.",
    topology: {
      devices: [
        { name: "PC-1", type: "pc", x: 60, y: 150 },
        { name: "R1", type: "router", x: 200, y: 150 },
        { name: "R2", type: "router", x: 380, y: 150 },
        { name: "R3", type: "router", x: 560, y: 150 },
        { name: "PC-2", type: "pc", x: 700, y: 150 }
      ],
      links: [
        { a: "PC-1", ai: "", b: "R1", bi: "Gi0/1", label: "192.168.1.0/24" },
        { a: "R1", ai: "Gi0/0", b: "R2", bi: "Gi0/0", label: "10.0.12.0/30" },
        { a: "R2", ai: "Gi0/1", b: "R3", bi: "Gi0/0", label: "10.0.23.0/30" },
        { a: "R3", ai: "Gi0/1", b: "PC-2", bi: "", label: "192.168.3.0/24" }
      ]
    },
    devices: ["R1", "R2", "R3"],
    init: {},
    tasks: [
      { text: "R1 Gi0/0 (10.0.12.1/30) və Gi0/1 (192.168.1.1/24) interfeyslərini sazlayıb aktivləşdirin.",
        check: (lab) => { const a = LAB_IF(lab, "R1", "Gi0/0"), b = LAB_IF(lab, "R1", "Gi0/1");
          return !!a && !!b && a.ip === "10.0.12.1" && a.mask === "255.255.255.252" && !a.shut &&
            b.ip === "192.168.1.1" && b.mask === "255.255.255.0" && !b.shut; } },
      { text: "R2 Gi0/0 (10.0.12.2/30) və Gi0/1 (10.0.23.1/30) interfeyslərini sazlayıb aktivləşdirin.",
        check: (lab) => { const a = LAB_IF(lab, "R2", "Gi0/0"), b = LAB_IF(lab, "R2", "Gi0/1");
          return !!a && !!b && a.ip === "10.0.12.2" && a.mask === "255.255.255.252" && !a.shut &&
            b.ip === "10.0.23.1" && b.mask === "255.255.255.252" && !b.shut; } },
      { text: "R3 Gi0/0 (10.0.23.2/30) və Gi0/1 (192.168.3.1/24) interfeyslərini sazlayıb aktivləşdirin.",
        check: (lab) => { const a = LAB_IF(lab, "R3", "Gi0/0"), b = LAB_IF(lab, "R3", "Gi0/1");
          return !!a && !!b && a.ip === "10.0.23.2" && a.mask === "255.255.255.252" && !a.shut &&
            b.ip === "192.168.3.1" && b.mask === "255.255.255.0" && !b.shut; } },
      { text: "R1-də 192.168.3.0/24 üçün next-hop 10.0.12.2 olan statik route əlavə edin.",
        check: (lab) => LAB_DEV(lab, "R1").routes.some((r) => r.net === "192.168.3.0" && r.mask === "255.255.255.0" && r.nh === "10.0.12.2") },
      { text: "R3-də 192.168.1.0/24 üçün next-hop 10.0.23.1 olan statik route əlavə edin.",
        check: (lab) => LAB_DEV(lab, "R3").routes.some((r) => r.net === "192.168.1.0" && r.mask === "255.255.255.0" && r.nh === "10.0.23.1") }
    ],
    explain: "Hər interfeysdə düzgün IP və mask olmalıdır. R1/R3 uzaq LAN üçün, transit R2 isə hər iki LAN üçün route tələb edir; yalnız connected route-lar kifayət etmir."
  },
  {
    type: "lab", domain: 2,
    q: "Dörd switch-dən ibarət ring topologiyada VLAN 10 başdan-başa daşınacaq. Bütün linklər trunk olmalı və yalnız VLAN 10 icazəli olmalıdır. SW1 primary, SW4 secondary root bridge olacaq.",
    topology: {
      devices: [
        { name: "SW1", type: "switch", x: 250, y: 90 },
        { name: "SW2", type: "switch", x: 450, y: 90 },
        { name: "SW3", type: "switch", x: 250, y: 230 },
        { name: "SW4", type: "switch", x: 450, y: 230 }
      ],
      links: [
        { a: "SW1", ai: "Gi0/1", b: "SW2", bi: "Gi0/1", label: "Trunk" },
        { a: "SW2", ai: "Gi0/2", b: "SW4", bi: "Gi0/1", label: "Trunk" },
        { a: "SW4", ai: "Gi0/2", b: "SW3", bi: "Gi0/2", label: "Trunk" },
        { a: "SW3", ai: "Gi0/1", b: "SW1", bi: "Gi0/2", label: "Trunk" }
      ]
    },
    devices: ["SW1", "SW2", "SW3", "SW4"],
    init: {},
    tasks: [
      { text: "Dörd switch-də VLAN 10 (SALES) yaradın.",
        check: (lab) => ["SW1", "SW2", "SW3", "SW4"].every((n) => LAB_DEV(lab, n).vlans[10] && LAB_DEV(lab, n).vlans[10].name.toUpperCase() === "SALES") },
      { text: "Hər switch-in Gi0/1 və Gi0/2 portlarını trunk edin; yalnız VLAN 10 icazəli olsun.",
        check: (lab) => ["SW1", "SW2", "SW3", "SW4"].every((n) => ["Gi0/1", "Gi0/2"].every((p) => {
          const f = LAB_IF(lab, n, p);
          return !!f && f.mode === "trunk" && LAB_SAME(f.allowed, [10]);
        })) },
      { text: "SW1-də VLAN 10 üçün root primary sazlayın.",
        check: (lab) => LAB_DEV(lab, "SW1").stp[10] === 24576 },
      { text: "SW4-də VLAN 10 üçün root secondary sazlayın.",
        check: (lab) => LAB_DEV(lab, "SW4").stp[10] === 28672 }
    ],
    explain: "Ring topologiyada STP ehtiyat yolu bloklayır. Bu simulyatorda root primary priority 24576, root secondary 28672 edir. Trunk allowed siyahıları linkin iki ucunda eyni olmalıdır."
  },
  {
    type: "lab", domain: 5,
    q: "Şəbəkədə bir router və iki switch var. İdarəetmə üçün hostname, syslog və description sazlamalarını tamamlayın.",
    topology: {
      devices: [
        { name: "R1", type: "router", x: 130, y: 150 },
        { name: "SW1", type: "switch", x: 330, y: 150 },
        { name: "SW2", type: "switch", x: 530, y: 150 },
        { name: "SYSLOG", type: "pc", x: 330, y: 270 }
      ],
      links: [
        { a: "R1", ai: "Gi0/0", b: "SW1", bi: "Gi0/24", label: "Uplink" },
        { a: "SW1", ai: "Gi0/24", b: "SW2", bi: "Gi0/24", label: "Trunk" },
        { a: "SW1", ai: "Gi0/1", b: "SYSLOG", bi: "", label: "10.0.0.50" }
      ]
    },
    devices: ["R1", "SW1", "SW2"],
    init: {},
    tasks: [
      { text: "SW1 hostname dəyərini 'SW-CORE' edin.",
        check: (lab) => LAB_DEV(lab, "SW1").hostname === "SW-CORE" },
      { text: "R1, SW1 və SW2-də syslog server 10.0.0.50 təyin edin.",
        check: (lab) => ["R1", "SW1", "SW2"].every((n) => LAB_DEV(lab, n).logHosts.indexOf("10.0.0.50") !== -1) },
      { text: "SW2 Gi0/24 description dəyərini 'Uplink-SW1' edin.",
        check: (lab) => { const f = LAB_IF(lab, "SW2", "Gi0/24"); return !!f && f.desc === "Uplink-SW1"; } },
      { text: "R1 Gi0/0-a 10.0.0.1/24 verin və aktivləşdirin.",
        check: (lab) => { const f = LAB_IF(lab, "R1", "Gi0/0"); return !!f && f.ip === "10.0.0.1" && f.mask === "255.255.255.0" && !f.shut; } }
    ],
    explain: "İdarəetmə sazlamaları hər cihazda ayrıca edilir. Syslog hədəfi, description və hostname running-config daxilində saxlanır."
  },
  {
    type: "lab", domain: 3,
    q: "Üç router-də OSPF sazlayın. R1 yalnız Area 0, R3 yalnız Area 1-də işləyəcək. R2 ABR-dir və hər iki area-da şəbəkələri elan edəcək.",
    topology: {
      devices: [
        { name: "R1", type: "router", x: 150, y: 150 },
        { name: "R2", type: "router", x: 350, y: 150 },
        { name: "R3", type: "router", x: 550, y: 150 },
        { name: "PC-3", type: "pc", x: 680, y: 150 }
      ],
      links: [
        { a: "R1", ai: "Gi0/0", b: "R2", bi: "Gi0/0", label: "10.0.12.0/30 (Area 0)" },
        { a: "R2", ai: "Gi0/1", b: "R3", bi: "Gi0/0", label: "10.0.23.0/30 (Area 1)" },
        { a: "R3", ai: "Gi0/1", b: "PC-3", bi: "", label: "192.168.3.0/24 (Area 1)" }
      ]
    },
    devices: ["R1", "R2", "R3"],
    init: {},
    tasks: [
      { text: "R1, R2, R3-də OSPF process 1 başladın; router ID-lər müvafiq olaraq 1.1.1.1, 2.2.2.2, 3.3.3.3 olsun.",
        check: (lab) => LAB_DEV(lab, "R1").ospf && LAB_DEV(lab, "R1").ospf.pid === 1 && LAB_DEV(lab, "R1").ospf.rid === "1.1.1.1" &&
          LAB_DEV(lab, "R2").ospf && LAB_DEV(lab, "R2").ospf.pid === 1 && LAB_DEV(lab, "R2").ospf.rid === "2.2.2.2" &&
          LAB_DEV(lab, "R3").ospf && LAB_DEV(lab, "R3").ospf.pid === 1 && LAB_DEV(lab, "R3").ospf.rid === "3.3.3.3" },
      { text: "R1-də 10.0.12.0/30-u Area 0-a əlavə edin.",
        check: (lab) => LAB_DEV(lab, "R1").ospf && LAB_DEV(lab, "R1").ospf.nets.some((n) => n.net === "10.0.12.0" && n.wild === "0.0.0.3" && n.area === "0") },
      { text: "R2-də 10.0.12.0/30-u Area 0-a, 10.0.23.0/30-u Area 1-ə əlavə edin.",
        check: (lab) => { const o = LAB_DEV(lab, "R2").ospf; return !!o &&
          o.nets.some((n) => n.net === "10.0.12.0" && n.wild === "0.0.0.3" && n.area === "0") &&
          o.nets.some((n) => n.net === "10.0.23.0" && n.wild === "0.0.0.3" && n.area === "1"); } },
      { text: "R3-də 10.0.23.0/30 və 192.168.3.0/24-ü Area 1-ə əlavə edin.",
        check: (lab) => { const o = LAB_DEV(lab, "R3").ospf; return !!o &&
          o.nets.some((n) => n.net === "10.0.23.0" && n.wild === "0.0.0.3" && n.area === "1") &&
          o.nets.some((n) => n.net === "192.168.3.0" && n.wild === "0.0.0.255" && n.area === "1"); } }
    ],
    explain: "Multi-area OSPF dizaynında interfeyslər aid olduqları area-ya daxil edilir. ABR iki area-da iştirak edir. Router ID və process ID hər cihazda ayrıca təyin olunur."
  },

  // =====================================================================
  // SORUN GİDERME (mevcut yapılandırmadaki hataları düzeltme)
  // =====================================================================
  {
    type: "lab", domain: 2,
    q: "SW1–SW2 trunk bağlantısında native VLAN uyğunsuzluğu və artıq VLAN var. Qarşı tərəfin native VLAN dəyəri 99-dur. PC-A VLAN 10-da olmalıdır. Xətaları düzəldin.",
    topology: {
      devices: [
        { name: "PC-A", type: "pc", x: 80, y: 150 },
        { name: "SW1", type: "switch", x: 250, y: 150 },
        { name: "SW2", type: "switch", x: 430, y: 150 }
      ],
      links: [
        { a: "PC-A", ai: "", b: "SW2", bi: "Gi0/1", label: "VLAN 10" },
        { a: "SW1", ai: "Gi0/24", b: "SW2", bi: "Gi0/24", label: "Trunk" }
      ]
    },
    devices: ["SW2"],
    init: {
      "SW2": [
        "vlan 10", "vlan 20", "exit",
        "interface GigabitEthernet0/24", "switchport mode trunk", "switchport trunk allowed vlan 10,20,30", "exit",
        "interface GigabitEthernet0/1", "switchport mode access", "switchport access vlan 20", "exit"
      ]
    },
    tasks: [
      { text: "SW2 Gi0/24 native VLAN dəyərini 99 edin.",
        check: (lab) => { const f = LAB_IF(lab, "SW2", "Gi0/24"); return !!f && f.native === 99; } },
      { text: "SW2 Gi0/24 allowed siyahısını yalnız VLAN 10,20 edin.",
        check: (lab) => { const f = LAB_IF(lab, "SW2", "Gi0/24"); return !!f && LAB_SAME(f.allowed, [10, 20]); } },
      { text: "SW2 Gi0/1-i VLAN 10 üçün access port edin.",
        check: (lab) => { const f = LAB_IF(lab, "SW2", "Gi0/1"); return !!f && f.mode === "access" && f.access === 10; } }
    ],
    explain: "Native VLAN linkin iki ucunda eyni olmalıdır, əks halda untagged trafik yanlış VLAN-a düşür. Allowed siyahısı yalnız lazım olan VLAN-ları əhatə etməli, access port düzgün VLAN-a aid olmalıdır."
  },
  {
    type: "lab", domain: 3,
    q: "R2–R3 bağlantısı işləmir. R2 Gi0/1-də mask yanlışdır və interfeys bağlıdır. Xətaları düzəldin.",
    topology: {
      devices: [
        { name: "R2", type: "router", x: 250, y: 150 },
        { name: "R3", type: "router", x: 450, y: 150 }
      ],
      links: [
        { a: "R2", ai: "Gi0/1", b: "R3", bi: "Gi0/0", label: "10.0.23.0/30" }
      ]
    },
    devices: ["R2"],
    init: {
      "R2": [
        "interface GigabitEthernet0/1", "ip address 10.0.23.1 255.255.255.0", "shutdown", "exit"
      ]
    },
    tasks: [
      { text: "R2 Gi0/1 mask dəyərini 255.255.255.252 (/30) edin.",
        check: (lab) => { const f = LAB_IF(lab, "R2", "Gi0/1"); return !!f && f.ip === "10.0.23.1" && f.mask === "255.255.255.252"; } },
      { text: "R2 Gi0/1-i aktivləşdirin.",
        check: (lab) => { const f = LAB_IF(lab, "R2", "Gi0/1"); return !!f && !f.shut; } },
      { text: "R2 Gi0/1 description dəyərini 'To-R3' edin.",
        check: (lab) => { const f = LAB_IF(lab, "R2", "Gi0/1"); return !!f && f.desc === "To-R3"; } }
    ],
    explain: "Bu link üçün nəzərdə tutulan mask /30-dur: 10.0.23.1 və 10.0.23.2 eyni subnet-də olur. Sazlama planına uyğun /30 təyin edilməli və interfeys 'no shutdown' ilə açılmalıdır."
  },
  {
    type: "lab", domain: 1,
    q: "SW1 switching və VLAN-lar arasında routing edəcək. VLAN 20 SVI sazlaması natamamdır, routing sönülüdür. PC-B-nin Gi0/2 portu da yanlış VLAN-dadır. Xətaları düzəldin.",
    topology: {
      devices: [
        { name: "PC-A", type: "pc", x: 80, y: 100 },
        { name: "PC-B", type: "pc", x: 80, y: 220 },
        { name: "SW1", type: "switch", x: 300, y: 160 }
      ],
      links: [
        { a: "PC-A", ai: "", b: "SW1", bi: "Gi0/1", label: "VLAN 10" },
        { a: "PC-B", ai: "", b: "SW1", bi: "Gi0/2", label: "VLAN 20" }
      ]
    },
    devices: ["SW1"],
    init: {
      "SW1": [
        "vlan 10", "vlan 20", "exit",
        "interface GigabitEthernet0/1", "switchport mode access", "switchport access vlan 10", "exit",
        "interface GigabitEthernet0/2", "switchport mode access", "switchport access vlan 10", "exit",
        "interface Vlan20", "ip address 192.168.20.254 255.255.255.0", "shutdown", "exit"
      ]
    },
    tasks: [
      { text: "SW1-də ip routing aktivləşdirin.",
        check: (lab) => LAB_DEV(lab, "SW1").routing === true },
      { text: "Vlan20 SVI-yə 192.168.20.1/24 verin və aktivləşdirin.",
        check: (lab) => { const f = LAB_IF(lab, "SW1", "Vlan20"); return !!f && f.ip === "192.168.20.1" && f.mask === "255.255.255.0" && !f.shut; } },
      { text: "Gi0/2-ni VLAN 20 üçün access port edin.",
        check: (lab) => { const f = LAB_IF(lab, "SW1", "Gi0/2"); return !!f && f.mode === "access" && f.access === 20; } }
    ],
    explain: "Inter-VLAN routing üçün SVI-lərə IP verilməli, onlar aktiv olmalı və 'ip routing' açılmalıdır. Access portlar bağlı cihazın VLAN-ına təyin edilməlidir."
  },
  {
    type: "lab", domain: 3,
    q: "R1 OSPF konfiqurasiyasında 10.0.12.0 üçün yanlış wildcard yazılıb. İnterfeys uyğun gəlmir. Xətanı düzəldin.",
    topology: {
      devices: [
        { name: "R1", type: "router", x: 200, y: 150 },
        { name: "R2", type: "router", x: 420, y: 150 }
      ],
      links: [
        { a: "R1", ai: "Gi0/0", b: "R2", bi: "Gi0/0", label: "10.0.12.0/30" }
      ]
    },
    devices: ["R1"],
    init: {
      "R1": [
        "router ospf 1", "network 10.0.12.0 0.0.0.0 area 0", "exit"
      ]
    },
    tasks: [
      { text: "R1-də yanlış network 10.0.12.0 0.0.0.0 area 0 qeydini silin.",
        check: (lab) => !LAB_DEV(lab, "R1").ospf.nets.some((n) => n.net === "10.0.12.0" && n.wild === "0.0.0.0") },
      { text: "10.0.12.0 şəbəkəsini wildcard 0.0.0.3 ilə Area 0-a əlavə edin.",
        check: (lab) => LAB_DEV(lab, "R1").ospf.nets.some((n) => n.net === "10.0.12.0" && n.wild === "0.0.0.3" && n.area === "0") }
    ],
    explain: "/30 üçün wildcard 0.0.0.3 olmalıdır. 0.0.0.0 yalnız konkret IP ilə uyğunlaşır; bu qeyddə interfeys ünvanı uyğun gəlmir. Yanlış ifadəni silib düzgününü əlavə edin."
  }
);

// Transit router uzaq LAN-lar üçün geri dönüş route-larına da malik olmalıdır.
QUESTIONS[173].tasks.push(
  { text: 'R2-də 192.168.1.0/24 üçün next-hop 10.0.12.1 olan statik route əlavə edin.',
    check: lab => LAB_DEV(lab, 'R2').routes.some(r => r.net === '192.168.1.0' && r.mask === '255.255.255.0' && r.nh === '10.0.12.1') },
  { text: 'R2-də 192.168.3.0/24 üçün next-hop 10.0.23.2 olan statik route əlavə edin.',
    check: lab => LAB_DEV(lab, 'R2').routes.some(r => r.net === '192.168.3.0' && r.mask === '255.255.255.0' && r.nh === '10.0.23.2') }
);
