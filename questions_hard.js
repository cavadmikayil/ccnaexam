// TryExam - zor sorular: çok adımlı senaryolar, çoklu doğru seçenekli çeldiriciler,
// uzun topolojiler ve sorun giderme (troubleshooting) simülasyonları.
// Tümü özgün olarak yazılmıştır.

QUESTIONS.push(
  // =====================================================================
  // ÇOK ADIMLI SENARYOLAR (tek doğru cevap)
  // =====================================================================
  {
    domain: 3,
    q: "Aşağıdakı çıxışlara görə R1 ilə R2 arasında OSPF adjacency niyə tam qurulmur?\n\nR1# show ip ospf interface Gi0/0 → Hello 10, Dead 40, Area 0, MTU 1500\nR2# show ip ospf interface Gi0/0 → Hello 10, Dead 40, Area 0, MTU 1400\n\nQonşuluq ExStart vəziyyətində ilişib qalır.",
    options: [
      "Hello timer fərqlidir",
      "Area ID uyğun deyil",
      "MTU dəyərləri fərqlidir",
      "Dead timer fərqlidir"
    ],
    answer: 2,
    explain: "Hello, dead və area dəyərləri uyğundur. ExStart/Exchange mərhələlərində MTU uyğunsuzluğu adjacency qurulmasına mane olur. MTU dəyərləri eyniləşdirilməlidir."
  },
  {
    domain: 2,
    q: "SW2-də 'show spanning-tree vlan 10' çıxışının hissəsi belədir:\n\nGi0/1   Root   FWD   4\nGi0/2   Altn   BLK   19\n\nGi0/2 niyə BLK vəziyyətindədir?",
    options: [
      "Gi0/2 ilə root-a ümumi path cost Gi0/1-dən yüksəkdir; buna görə alternate kimi bloklanıb",
      "Gi0/2-də BPDU Guard işə düşüb",
      "Gi0/2-də VLAN 10 icazəli deyil",
      "Gi0/2-də port security pozuntusu baş verib"
    ],
    answer: 0,
    explain: "Hər non-root switch root bridge-ə ən aşağı ümumi path cost olan root port seçir. Digər ehtiyat yol Alternate rolunda Discarding vəziyyətində qalır və loop-un qarşısını alır."
  },
  {
    domain: 1,
    q: "PC-A üçün 192.168.10.100/26 və default gateway 192.168.10.1 təyin edilib. PC-A gateway-ə çata bilmir. Səbəb nədir?",
    options: [
      "Gateway broadcast ünvanıdır",
      "PC-A (192.168.10.64/26) və gateway (192.168.10.0/26) fərqli subnet-lərdədir",
      "Mask /24 olmalı idi; /26 həmişə yanlışdır",
      "DHCP aktiv olmadığı üçün gateway həll olunmur"
    ],
    answer: 1,
    explain: "/26 blokları 0–63, 64–127, 128–191, 192–255-dir. .100 ünvanı 64–127, .1 isə 0–63 blokundadır. Fərqli subnet-də olduqları üçün gateway-ə birbaşa çıxış yoxdur."
  },
  {
    domain: 4,
    q: "Tələb: 192.168.10.0/24 şəbəkəsi 10.0.0.0/24 şəbəkəsinə daxil olmasın, digər trafikə icazə verilsin. Yalnız standart ACL istifadə olunacaq. 10.0.0.0/24 R2 Gi0/0-a bağlıdır. ACL harada tətbiq edilməlidir?",
    options: [
      "R1 Gi0/1-də out",
      "R2 Gi0/0-da out",
      "R2 Gi0/0-da in",
      "R1 Gi0/0-da in"
    ],
    answer: 1,
    explain: "Standart ACL yalnız source ünvanını yoxlayır. Buna görə destination-a yaxın, R2 Gi0/0 interfeysində out istiqamətində tətbiq olunur. Source-a yaxın tətbiq digər destination-lara trafiki də bloklaya bilər."
  },
  {
    domain: 2,
    q: "SW1–SW2 Gi0/24 trunk bağlantısında VLAN 20 işləmir, VLAN 10 işləyir.\n\nSW1# show interfaces trunk → Gi0/24 Allowed VLANs: 10\nSW2# show interfaces trunk → Gi0/24 Allowed VLANs: 10,20\n\nProblemin mənbəyi nədir?",
    options: [
      "SW2-də VLAN 20 silinib",
      "SW1 trunk allowed siyahısında VLAN 20 yoxdur",
      "Native VLAN fərqli olduğu üçün VLAN 20 atılır",
      "Port security pozuntusu VLAN 20-ni bağlayıb"
    ],
    answer: 1,
    explain: "Trunk yalnız allowed siyahısındakı VLAN-ları daşıyır. SW1-də VLAN 20 icazəli deyilsə, hər iki tərəfdə yaradılmış olsa belə trafik keçmir."
  },
  {
    domain: 3,
    q: "PC1 (192.168.1.10) PC2-yə (192.168.2.10) ping göndərə bilmir. R1-də 192.168.2.0/24 üçün next-hop 10.0.12.2 olan route var. R2-də 192.168.1.0/24 üçün route yoxdur. R1-dən 192.168.2.10-a ping uğurludur. Səbəb nədir?",
    options: [
      "R1-də default route çatışmır",
      "R2-də geri dönüş route-u (192.168.1.0/24) yoxdur; cavab PC1-ə qayıtmır",
      "PC2 default gateway yanlışdır",
      "NAT mütləqdir"
    ],
    answer: 1,
    explain: "İrəli istiqamətdə route var, geri istiqamətdə yoxdur. R1 ping üçün öz çıxış interfeysinin ünvanını istifadə edə bilər. PC1-ə cavab üçün R2-də 192.168.1.0/24 route-u tələb olunur."
  },
  {
    domain: 4,
    q: "Gi0/5-də port security maksimum 1 MAC və violation shutdown ilə aktivdir. Logda '%PORT_SECURITY-2-PSECURE_VIOLATION' görünür, port err-disabled olub. Düzgün bərpa ardıcıllığı hansıdır?",
    options: [
      "Portu trunk edib yenidən başlatmaq",
      "İcazəsiz cihazı çıxarıb interfeysdə shutdown və no shutdown etmək",
      "Maksimum MAC sayını 10 etmək; port avtomatik açılır",
      "PortFast aktivləşdirmək; port özü açılır"
    ],
    answer: 1,
    explain: "Pozuntu yaradan cihaz çıxarılmadan port açılsa, yenidən bağlana bilər. Əvvəl icazəsiz cihaz çıxarılır, sonra shutdown/no shutdown edilir."
  },
  {
    domain: 1,
    q: "Client 169.254.20.5 ünvanı alıb. DHCP server ünvanı 192.168.10.5-dir. Ən ehtimal olunan səbəb nədir?",
    options: [
      "Client statik IP istifadə edir və bu ünvan DHCP-dən gəlmir",
      "DHCP sorğusu server-ə çatmayıb; client VLAN-da relay yoxdur və ya yol bloklanıb",
      "NAT cədvəlində konflikt var",
      "Subnet mask çox böyük olduğu üçün ünvan verilmir"
    ],
    answer: 1,
    explain: "169.254.0.0/16 APIPA aralığıdır; client DHCP cavabı almadıqda ünvanı özü yaradır. Server başqa subnet-dədirsə DHCP relay tələb olunur."
  },

  // =====================================================================
  // ÇOKLU DOĞRU SEÇENEKLİ, ÇELDİRİCİLİ SORULAR
  // =====================================================================
  {
    type: "multi", domain: 2,
    q: "STP haqqında DÜZGÜN olan İKİ ifadəni seçin.",
    options: [
      "Root port switch-in root bridge-ə ən aşağı path cost olan yolunu təmsil edir",
      "Discarding port MAC ünvanlarını öyrənir",
      "Designated port segmentdə Forwarding vəziyyətinə keçir",
      "Alternate port Forwarding vəziyyətində işləyir"
    ],
    answer: [0, 2],
    explain: "Discarding vəziyyətində MAC öyrənilmir. Alternate port ehtiyat olaraq Discarding vəziyyətində qalır."
  },
  {
    type: "multi", domain: 3,
    q: "Statik route və routing cədvəli haqqında DÜZGÜN olan İKİ ifadəni seçin.",
    options: [
      "show ip route statik route-u [1/0] kimi göstərir; metric 0-dır",
      "Eyni prefix üçün əvvəl AD müqayisə olunur; aşağı AD seçilir",
      "OSPF (AD 110) həmişə statik route-dan (AD 1) aşağı AD-yə malikdir",
      "Eyni prefix üçün yüksək AD daha üstündür"
    ],
    answer: [0, 1],
    explain: "Statik route standart AD 1 ilə təyin edilir və metric 0 göstərilir. Aşağı AD daha etibarlıdır. OSPF AD 110 statik route AD dəyərindən yüksəkdir."
  },
  {
    type: "multi", domain: 3,
    q: "Routing cədvəlində route seçimi haqqında DÜZGÜN olan İKİ ifadəni seçin.",
    options: [
      "Longest prefix match AD və metric-dən əvvəl gəlir",
      "Eyni prefix və eyni routing protokolu daxilində aşağı metric seçilir",
      "Yüksək AD daha etibarlıdır",
      "Metric AD-dən əvvəl müqayisə edilir"
    ],
    answer: [0, 1],
    explain: "Paket ötürülərkən longest prefix match seçilir. Eyni prefix üçün aşağı AD üstündür; eyni protokol daxilində aşağı metric seçilir."
  },
  {
    type: "multi", domain: 1,
    q: "Kabel və interfeys problemləri haqqında DÜZGÜN olan İKİ ifadəni seçin.",
    options: [
      "CRC artımı adətən kabel və ya konnektor kimi fiziki problemləri göstərir",
      "Full-duplex bağlantıda late collision sayğacı normalda artır",
      "Half-duplex tərəfdə late collision digər tərəfin full-duplex işlədiyini göstərə bilər",
      "Sürət uyğunsuzluğu yalnız VLAN konfiqurasiya xətasıdır"
    ],
    answer: [0, 2],
    explain: "Full-duplex bağlantıda collision olmur. Half-duplex tərəfdə late collision digər tərəfin full-duplex işlədiyini göstərə bilər. Sürət uyğunsuzluğu VLAN problemi deyil."
  },
  {
    type: "multi", domain: 4,
    q: "Port security rejimləri və sticky learning haqqında DÜZGÜN olan İKİ ifadəni seçin.",
    options: [
      "Sticky learning öyrənilən MAC ünvanlarını running-config-ə əlavə edir",
      "Protect pozuntu zamanı log yaradır və portu bağlayır",
      "Restrict pozuntu sayğacını artırır və log yaradır; port açıq qalır",
      "Shutdown yalnız VLAN 1-də işləyir"
    ],
    answer: [0, 2],
    explain: "Protect icazəsiz frame-ləri səssiz atır, log yaratmır və portu bağlamır. Restrict sayğacı artırır və log yaradır, port açıq qalır. Shutdown portu err-disabled edir."
  },
  {
    type: "multi", domain: 2,
    q: "EtherChannel (port-channel) haqqında DÜZGÜN olan İKİ ifadəni seçin.",
    options: [
      "PAgP və LACP uyğun deyil; iki tərəfdə eyni protokol istifadə olunmalıdır",
      "LACP və PAgP eyni port-channel daxilində qarışdırıla bilər",
      "Üzv portların sürət və duplex sazlamaları eyni olmalıdır",
      "Layer 3 port-channel-da IP fiziki üzv portlara verilir"
    ],
    answer: [0, 2],
    explain: "LACP və PAgP müxtəlif protokollardır və bir-biri ilə razılaşmır. Üzv portların sürət və duplex dəyərləri eyni olmalıdır. Layer 3 IP ünvanı məntiqi port-channel interfeysinə verilir."
  },

  // =====================================================================
  // UZUN TOPOLOJİ SİMÜLASYONLARI (birden fazla cihaz)
  // =====================================================================
  {
    type: "lab", domain: 2,
    q: "Üç switch olan şəbəkədə VLAN 10 və VLAN 20 başdan-başa daşınacaq. SW2 VLAN 10 üçün primary root bridge olacaq. Bütün switch-lərdə VLAN və trunk sazlamalarını tamamlayın.",
    topology: {
      devices: [
        { name: "PC-A", type: "pc", x: 80, y: 150 },
        { name: "SW1", type: "switch", x: 230, y: 150 },
        { name: "SW2", type: "switch", x: 390, y: 150 },
        { name: "SW3", type: "switch", x: 550, y: 150 },
        { name: "PC-B", type: "pc", x: 550, y: 250 }
      ],
      links: [
        { a: "PC-A", ai: "", b: "SW1", bi: "Gi0/1", label: "VLAN 10" },
        { a: "SW1", ai: "Gi0/24", b: "SW2", bi: "Gi0/24", label: "Trunk" },
        { a: "SW2", ai: "Gi0/23", b: "SW3", bi: "Gi0/23", label: "Trunk" },
        { a: "SW3", ai: "Gi0/1", b: "PC-B", bi: "", label: "VLAN 20" }
      ]
    },
    devices: ["SW1", "SW2", "SW3"],
    init: {},
    tasks: [
      { text: "SW1, SW2 və SW3-də VLAN 10 (SALES) və VLAN 20 (ENG) yaradın.",
        check: (lab) => ["SW1", "SW2", "SW3"].every((n) => {
          const v = LAB_DEV(lab, n).vlans;
          return v[10] && v[10].name.toUpperCase() === "SALES" && v[20] && v[20].name.toUpperCase() === "ENG";
        }) },
      { text: "SW1 Gi0/1-i VLAN 10, SW3 Gi0/1-i VLAN 20 üçün access port edin.",
        check: (lab) => {
          const a = LAB_IF(lab, "SW1", "Gi0/1"), b = LAB_IF(lab, "SW3", "Gi0/1");
          return !!a && !!b && a.mode === "access" && a.access === 10 && b.mode === "access" && b.access === 20;
        } },
      { text: "SW1–SW2 Gi0/24 və SW2–SW3 Gi0/23 bağlantılarının hər iki ucunu trunk edin; yalnız VLAN 10,20 icazəli olsun.",
        check: (lab) => {
          const ids = [["SW1", "Gi0/24"], ["SW2", "Gi0/24"], ["SW2", "Gi0/23"], ["SW3", "Gi0/23"]];
          return ids.every((p) => {
            const f = LAB_IF(lab, p[0], p[1]);
            return !!f && f.mode === "trunk" && LAB_SAME(f.allowed, [10, 20]);
          });
        } },
      { text: "SW2-də VLAN 10 üçün root primary sazlayın.",
        check: (lab) => LAB_DEV(lab, "SW2").stp[10] === 24576 }
    ],
    explain: "Hər switch-də VLAN yaradılmalı, switch-lərarası portlar trunk olmalıdır. Allowed VLAN siyahıları eyni olmalıdır. Root bridge ən aşağı bridge ID ilə seçilir; priority bunun əsas hissəsidir."
  },
  {
    type: "lab", domain: 1,
    q: "SW2 access layer-dədir, SW1 isə VLAN-lar arasında routing edən multilayer switch-dir. VLAN, trunk və SVI sazlamalarını tamamlayın.",
    topology: {
      devices: [
        { name: "SW1", type: "switch", x: 250, y: 150 },
        { name: "SW2", type: "switch", x: 430, y: 150 },
        { name: "PC-A", type: "pc", x: 590, y: 70 },
        { name: "PC-B", type: "pc", x: 590, y: 230 }
      ],
      links: [
        { a: "SW1", ai: "Gi0/24", b: "SW2", bi: "Gi0/24", label: "Trunk" },
        { a: "SW2", ai: "Gi0/1", b: "PC-A", bi: "", label: "VLAN 10" },
        { a: "SW2", ai: "Gi0/2", b: "PC-B", bi: "", label: "VLAN 20" }
      ]
    },
    devices: ["SW1", "SW2"],
    init: {},
    tasks: [
      { text: "SW1 və SW2-də VLAN 10 və VLAN 20 yaradın.",
        check: (lab) => ["SW1", "SW2"].every((n) => LAB_DEV(lab, n).vlans[10] && LAB_DEV(lab, n).vlans[20]) },
      { text: "SW2 Gi0/1-i VLAN 10, Gi0/2-ni VLAN 20 üçün access port edin.",
        check: (lab) => {
          const a = LAB_IF(lab, "SW2", "Gi0/1"), b = LAB_IF(lab, "SW2", "Gi0/2");
          return !!a && !!b && a.mode === "access" && a.access === 10 && b.mode === "access" && b.access === 20;
        } },
      { text: "Hər iki tərəfdə Gi0/24-ü trunk edin; yalnız VLAN 10,20 icazəli olsun.",
        check: (lab) => ["SW1", "SW2"].every((n) => {
          const f = LAB_IF(lab, n, "Gi0/24");
          return !!f && f.mode === "trunk" && LAB_SAME(f.allowed, [10, 20]);
        }) },
      { text: "SW1-də IP routing aktivləşdirin; VLAN 10 (192.168.10.1/24) və VLAN 20 (192.168.20.1/24) SVI-lərini sazlayıb aktivləşdirin.",
        check: (lab) => {
          const d = LAB_DEV(lab, "SW1");
          const a = LAB_IF(lab, "SW1", "Vlan10"), b = LAB_IF(lab, "SW1", "Vlan20");
          return d.routing === true && !!a && !!b && a.ip === "192.168.10.1" && a.mask === "255.255.255.0" &&
            b.ip === "192.168.20.1" && b.mask === "255.255.255.0";
        } },
      { text: "SW1-dən 192.168.20.1-ə ping göndərin və uğurlu olduğunu yoxlayın.",
        check: (lab) => lab.pings.some((p) => p.dev === "SW1" && p.ip === "192.168.20.1" && p.ok) }
    ],
    explain: "Layer 3 switch üçün 'ip routing' və SVI-lər tələb olunur. Access portlar uyğun VLAN-a təyin edilir, switch-lərarası trunk-da VLAN 10,20 icazəli olur."
  },
  {
    type: "lab", domain: 3,
    q: "Dörd cihazlı şəbəkədə R1 və R2, 10.0.12.0/30 üzərindən OSPF ilə əlaqələnəcək. Hər iki router-in LAN interfeyslərini OSPF-ə daxil edin və tələb olunan router ID-ni təyin edin.",
    topology: {
      devices: [
        { name: "PC1", type: "pc", x: 80, y: 150 },
        { name: "R1", type: "router", x: 250, y: 150 },
        { name: "R2", type: "router", x: 430, y: 150 },
        { name: "PC2", type: "pc", x: 590, y: 150 }
      ],
      links: [
        { a: "PC1", ai: "", b: "R1", bi: "Gi0/1", label: "192.168.1.0/24" },
        { a: "R1", ai: "Gi0/0", b: "R2", bi: "Gi0/0", label: "10.0.12.0/30" },
        { a: "R2", ai: "Gi0/1", b: "PC2", bi: "", label: "192.168.2.0/24" }
      ]
    },
    devices: ["R1", "R2"],
    init: {},
    tasks: [
      { text: "R1 Gi0/0 (10.0.12.1/30) və Gi0/1 (192.168.1.1/24) interfeyslərinə IP verib aktivləşdirin.",
        check: (lab) => {
          const a = LAB_IF(lab, "R1", "Gi0/0"), b = LAB_IF(lab, "R1", "Gi0/1");
          return !!a && !!b && a.ip === "10.0.12.1" && a.mask === "255.255.255.252" && !a.shut &&
            b.ip === "192.168.1.1" && b.mask === "255.255.255.0" && !b.shut;
        } },
      { text: "R2 Gi0/0 (10.0.12.2/30) və Gi0/1 (192.168.2.1/24) interfeyslərinə IP verib aktivləşdirin.",
        check: (lab) => {
          const a = LAB_IF(lab, "R2", "Gi0/0"), b = LAB_IF(lab, "R2", "Gi0/1");
          return !!a && !!b && a.ip === "10.0.12.2" && a.mask === "255.255.255.252" && !a.shut &&
            b.ip === "192.168.2.1" && b.mask === "255.255.255.0" && !b.shut;
        } },
      { text: "R1 OSPF process 1 daxilində 10.0.12.0/30 və 192.168.1.0/24 şəbəkələrini area 0-a daxil edin.",
        check: (lab) => {
          const o = LAB_DEV(lab, "R1").ospf;
          return !!o && o.pid === 1 && o.nets.some((n) => n.net === "10.0.12.0" && n.wild === "0.0.0.3" && n.area === "0") &&
            o.nets.some((n) => n.net === "192.168.1.0" && n.wild === "0.0.0.255" && n.area === "0");
        } },
      { text: "R2 OSPF process 1 daxilində 10.0.12.0/30 və 192.168.2.0/24 şəbəkələrini area 0-a daxil edin; router ID 2.2.2.2 olsun.",
        check: (lab) => {
          const o = LAB_DEV(lab, "R2").ospf;
          return !!o && o.pid === 1 && o.rid === "2.2.2.2" &&
            o.nets.some((n) => n.net === "10.0.12.0" && n.wild === "0.0.0.3" && n.area === "0") &&
            o.nets.some((n) => n.net === "192.168.2.0" && n.wild === "0.0.0.255" && n.area === "0");
        } },
      { text: "R1-dən 10.0.12.2-yə ping göndərin və uğurlu olduğunu yoxlayın.",
        check: (lab) => lab.pings.some((p) => p.dev === "R1" && p.ip === "10.0.12.2" && p.ok) }
    ],
    explain: "OSPF qonşuluğu üçün linkin iki ucu eyni subnet və area-da olmalıdır. Şəbəkələr 'network' ilə area 0-a daxil edilir. Router ID router-in unikal kimliyidir."
  },

  // =====================================================================
  // SORUN GİDERME (TROUBLESHOOTING) SİMÜLASYONLARI
  // Başlangıç yapılandırmasında hatalar vardır; görevler bu hataları düzeltmeyi ister.
  // =====================================================================
  {
    type: "lab", domain: 2,
    q: "SW1-də iki xəta var: PC-A-nın Gi0/1 portu yanlış VLAN 100-dədir və SW1–SW2 trunk yalnız VLAN 10-a icazə verir. Xətaları düzəldin, çatışmayan VLAN-ı yaradın.",
    topology: {
      devices: [
        { name: "PC-A", type: "pc", x: 110, y: 100 },
        { name: "SW1", type: "switch", x: 320, y: 150 },
        { name: "SW2", type: "switch", x: 540, y: 150 }
      ],
      links: [
        { a: "PC-A", ai: "", b: "SW1", bi: "Gi0/1", label: "VLAN 10" },
        { a: "SW1", ai: "Gi0/24", b: "SW2", bi: "Gi0/24", label: "Trunk" }
      ]
    },
    devices: ["SW1"],
    init: {
      "SW1": [
        "vlan 10", "name SALES", "exit",
        "interface GigabitEthernet0/1", "switchport mode access", "switchport access vlan 100", "exit",
        "interface GigabitEthernet0/24", "switchport mode trunk", "switchport trunk allowed vlan 10", "exit"
      ]
    },
    tasks: [
      { text: "VLAN 20 yaradın və adını 'ENG' qoyun.",
        check: (lab) => LAB_DEV(lab, "SW1").vlans[20] && LAB_DEV(lab, "SW1").vlans[20].name.toUpperCase() === "ENG" },
      { text: "Gi0/1-i düzəldin: PC-A VLAN 10-da olmalıdır.",
        check: (lab) => { const f = LAB_IF(lab, "SW1", "Gi0/1"); return !!f && f.mode === "access" && f.access === 10; } },
      { text: "Gi0/24 trunk allowed siyahısını yalnız VLAN 10,20 edin.",
        check: (lab) => { const f = LAB_IF(lab, "SW1", "Gi0/24"); return !!f && f.mode === "trunk" && LAB_SAME(f.allowed, [10, 20]); } }
    ],
    explain: "Access port yanlış VLAN-da idi. Trunk siyahısında VLAN 20 olmadığından bu VLAN-ın trafiki keçmirdi. VLAN həm yaradılmalı, həm trunk-da icazəli olmalıdır."
  },
  {
    type: "lab", domain: 3,
    q: "R1-də 192.168.2.0/24 statik route-u yanlış next-hop 10.0.21.2 ilə sazlanıb, Gi0/0 bağlıdır. Xətaları düzəldin.",
    topology: {
      devices: [
        { name: "PC1", type: "pc", x: 110, y: 150 },
        { name: "R1", type: "router", x: 320, y: 150 },
        { name: "R2", type: "router", x: 540, y: 150 }
      ],
      links: [
        { a: "PC1", ai: "", b: "R1", bi: "Gi0/1", label: "192.168.1.0/24" },
        { a: "R1", ai: "Gi0/0", b: "R2", bi: "Gi0/0", label: "10.0.12.0/30" }
      ]
    },
    devices: ["R1"],
    init: {
      "R1": [
        "interface GigabitEthernet0/0", "ip address 10.0.12.1 255.255.255.252", "exit",
        "ip route 192.168.2.0 255.255.255.0 10.0.21.2"
      ]
    },
    tasks: [
      { text: "R1 Gi0/0 interfeysini aktivləşdirin (administratively down vəziyyətindən çıxarın).",
        check: (lab) => { const f = LAB_IF(lab, "R1", "Gi0/0"); return !!f && !f.shut; } },
      { text: "Next-hop 10.0.21.2 olan yanlış statik route-u silin.",
        check: (lab) => !LAB_DEV(lab, "R1").routes.some((r) => r.nh === "10.0.21.2") },
      { text: "192.168.2.0/24 üçün next-hop 10.0.12.2 olan düzgün statik route əlavə edin.",
        check: (lab) => LAB_DEV(lab, "R1").routes.some((r) => r.net === "192.168.2.0" && r.mask === "255.255.255.0" && r.nh === "10.0.12.2") },
      { text: "R1-dən 10.0.12.2-yə ping göndərin və uğurlu olduğunu yoxlayın.",
        check: (lab) => lab.pings.some((p) => p.dev === "R1" && p.ip === "10.0.12.2" && p.ok) }
    ],
    explain: "Router interfeysi 'no shutdown' ilə açılır. Bu ssenaridə next-hop birbaşa bağlı qonşunun ünvanıdır. Yanlış route silinib düzgün route əlavə edilməlidir."
  },
  {
    type: "lab", domain: 3,
    q: "R1-də 10.0.12.0/30 yanlış OSPF area 1-ə daxil edilib. Xətanı düzəldin və router ID təyin edin.",
    topology: {
      devices: [
        { name: "R1", type: "router", x: 320, y: 150 },
        { name: "R2", type: "router", x: 540, y: 150 },
        { name: "PC1", type: "pc", x: 110, y: 150 }
      ],
      links: [
        { a: "R1", ai: "Gi0/0", b: "R2", bi: "Gi0/0", label: "10.0.12.0/30" },
        { a: "PC1", ai: "", b: "R1", bi: "Gi0/1", label: "192.168.1.0/24" }
      ]
    },
    devices: ["R1"],
    init: {
      "R1": [
        "interface GigabitEthernet0/0", "ip address 10.0.12.1 255.255.255.252", "no shutdown", "exit",
        "interface GigabitEthernet0/1", "ip address 192.168.1.1 255.255.255.0", "no shutdown", "exit",
        "router ospf 1", "network 10.0.12.0 0.0.0.3 area 1", "network 192.168.1.0 0.0.0.255 area 0", "exit"
      ]
    },
    tasks: [
      { text: "10.0.12.0/30 üçün yanlış area 1 qeydini silin.",
        check: (lab) => !LAB_DEV(lab, "R1").ospf.nets.some((n) => n.net === "10.0.12.0" && n.area === "1") },
      { text: "10.0.12.0/30 şəbəkəsini area 0-a daxil edin.",
        check: (lab) => LAB_DEV(lab, "R1").ospf.nets.some((n) => n.net === "10.0.12.0" && n.wild === "0.0.0.3" && n.area === "0") },
      { text: "OSPF router ID-ni 1.1.1.1 edin.",
        check: (lab) => LAB_DEV(lab, "R1").ospf.rid === "1.1.1.1" }
    ],
    explain: "OSPF linkində qonşu interfeyslər eyni area-da olmalıdır. Yanlış qeyd 'no network' ilə silinir və düzgün area ilə əlavə olunur."
  },
  {
    type: "lab", domain: 4,
    q: "R1-də NAT və ACL sazlamaları yanlışdır: inside/outside rolları tərs verilib, ACL 10 out istiqamətində tətbiq edilib. Xətaları düzəldin.",
    topology: {
      devices: [
        { name: "PC1", type: "pc", x: 110, y: 150 },
        { name: "R1", type: "router", x: 320, y: 150 },
        { name: "ISP", type: "router", x: 540, y: 150 }
      ],
      links: [
        { a: "PC1", ai: "", b: "R1", bi: "Gi0/1", label: "Daxili şəbəkə" },
        { a: "R1", ai: "Gi0/0", b: "ISP", bi: "", label: "WAN" }
      ]
    },
    devices: ["R1"],
    init: {
      "R1": [
        "interface GigabitEthernet0/0", "ip address 10.0.12.1 255.255.255.252", "no shutdown", "ip nat inside", "exit",
        "interface GigabitEthernet0/1", "ip address 192.168.1.1 255.255.255.0", "no shutdown", "ip nat outside", "ip access-group 10 out", "exit",
        "access-list 10 permit 192.168.1.0 0.0.0.255"
      ]
    },
    tasks: [
      { text: "Gi0/1-i NAT inside, Gi0/0-ı NAT outside olaraq düzəldin.",
        check: (lab) => { const a = LAB_IF(lab, "R1", "Gi0/1"), b = LAB_IF(lab, "R1", "Gi0/0"); return !!a && !!b && a.nat === "inside" && b.nat === "outside"; } },
      { text: "Gi0/1-də ACL 10-un yanlış out tətbiqini silin.",
        check: (lab) => { const f = LAB_IF(lab, "R1", "Gi0/1"); return !!f && f.aclOut === null; } },
      { text: "Gi0/1-də ACL 10-u inbound (in) tətbiq edin.",
        check: (lab) => { const f = LAB_IF(lab, "R1", "Gi0/1"); return !!f && f.aclIn === "10"; } }
    ],
    explain: "NAT inside yerli şəbəkəyə, outside isə İnternetə baxan interfeysdir. Bu ssenaridə ACL trafik daxil olarkən in istiqamətində tətbiq edilməlidir."
  },
  {
    type: "lab", domain: 2,
    q: "Hazırda SW2 VLAN 10 üçün primary root bridge-dir. Tələb: SW1 primary, SW2 secondary root bridge olmalıdır. Düzəliş edin.",
    topology: {
      devices: [
        { name: "SW1", type: "switch", x: 320, y: 100 },
        { name: "SW2", type: "switch", x: 320, y: 220 }
      ],
      links: [
        { a: "SW1", ai: "Gi0/24", b: "SW2", bi: "Gi0/24", label: "Trunk" }
      ]
    },
    devices: ["SW1", "SW2"],
    init: {
      "SW2": ["spanning-tree vlan 10 root primary"]
    },
    tasks: [
      { text: "SW1-də VLAN 10 üçün root primary sazlayın.",
        check: (lab) => LAB_DEV(lab, "SW1").stp[10] === 24576 },
      { text: "SW2-də VLAN 10 üçün root secondary sazlayın.",
        check: (lab) => LAB_DEV(lab, "SW2").stp[10] === 28672 }
    ],
    explain: "Root seçimi ən aşağı bridge ID əsasında aparılır. Bu lab-da SW1 priority 24576, SW2 priority 28672 olmalıdır."
  },
  {
    type: "lab", domain: 5,
    q: "R1 syslog konfiqurasiyasında yanlış server 10.0.0.5 var. Yanlış qeydi silib düzgün server 10.0.0.50 əlavə edin.",
    topology: {
      devices: [
        { name: "R1", type: "router", x: 320, y: 150 },
        { name: "SYSLOG", type: "pc", x: 320, y: 40 }
      ],
      links: []
    },
    devices: ["R1"],
    init: {
      "R1": ["logging host 10.0.0.5"]
    },
    tasks: [
      { text: "Yanlış syslog server 10.0.0.5 qeydini silin.",
        check: (lab) => LAB_DEV(lab, "R1").logHosts.indexOf("10.0.0.5") === -1 },
      { text: "Syslog server 10.0.0.50 əlavə edin.",
        check: (lab) => LAB_DEV(lab, "R1").logHosts.indexOf("10.0.0.50") !== -1 }
    ],
    explain: "Yanlış syslog hədəfi 'no logging host <ip>' ilə silinir, düzgün hədəf 'logging host <ip>' ilə əlavə olunur."
  }
);
