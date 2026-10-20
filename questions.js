// TryExam - CCNA 200-301 v2.0 soru bankası
// Her soru: domain (1-5), soru metni, seçenekler, doğru cevabın indeksi, açıklama.
// Özgün sorular: Cisco sınav içeriği kullanılmamıştır.

const DOMAINS = [
  { id: 1, name: "Şəbəkə infrastrukturu və bağlantılar", weight: 25 },
  { id: 2, name: "Switching və şəbəkəyə giriş", weight: 25 },
  { id: 3, name: "IP routing", weight: 20 },
  { id: 4, name: "Şəbəkə xidmətləri və təhlükəsizlik", weight: 20 },
  { id: 5, name: "Süni intellekt, şəbəkə əməliyyatları və idarəetmə", weight: 10 }
];

const QUESTIONS = [
  // ---------- Domain 1 ----------
  {
    domain: 1,
    q: "İnterfeysdə sürət və ya duplex uyğunsuzluğunun tipik əlaməti hansıdır?",
    options: [
      "Yalnız DNS sorğularında gecikmə",
      "Late collision və xəta sayğaclarının artması",
      "DHCP lease müddətinin bitməsi",
      "VLAN teqlərinin itməsi"
    ],
    answer: 1,
    explain: "Half-duplex və full-duplex uclar uyğun gəlmədikdə late collision və CRC/xəta sayğacları artır."
  },
  {
    domain: 1,
    q: "Type 1 hypervisor necə işləyir?",
    options: [
      "Əsas əməliyyat sistemi üzərində tətbiq kimi işləyir",
      "Birbaşa avadanlıq üzərində işləyir",
      "Yalnız container üçün istifadə olunur",
      "Switch proqram təminatıdır"
    ],
    answer: 1,
    explain: "Type 1 (bare-metal) hypervisor birbaşa avadanlıq üzərində işləyir. Type 2 isə əməliyyat sistemi üzərində işləyir."
  },
  {
    domain: 1,
    q: "Container ilə virtual maşın arasındakı əsas fərq nədir?",
    options: [
      "Hər container öz nüvəsini işlədir",
      "Container əsas sistemin nüvəsini paylaşır",
      "Container yalnız Windows üzərində işləyir",
      "Container şəbəkə interfeysinə malik deyil"
    ],
    answer: 1,
    explain: "Container əməliyyat sisteminin nüvəsini paylaşır; hər virtual maşın isə öz qonaq əməliyyat sistemini işlədir."
  },
  {
    domain: 1,
    q: "Aşağıdakılardan hansı private IPv4 ünvan aralığına daxildir?",
    options: ["8.8.8.8", "172.20.5.10", "198.51.100.7", "203.0.113.25"],
    answer: 1,
    explain: "172.16.0.0/12 private aralığıdır. 8.8.8.8 public ünvandır; 198.51.100.0/24 və 203.0.113.0/24 isə sənədləşdirmə üçün ayrılıb."
  },
  {
    domain: 1,
    q: "192.168.10.130/26 ünvanının network ünvanı hansıdır?",
    options: ["192.168.10.128", "192.168.10.129", "192.168.10.160", "192.168.10.0"],
    answer: 0,
    explain: "/26 üçün blok ölçüsü 64-dür. 130, 128–191 aralığında olduğuna görə network ünvanı 192.168.10.128-dir."
  },
  {
    domain: 1,
    q: "MAC ünvanı 00:1A:2B:3C:4D:5E olan interfeysin modified EUI-64 interface ID dəyəri hansıdır?",
    options: [
      "001A:2B3C:4D5E:0000",
      "021A:2BFF:FE3C:4D5E",
      "021A:2B3C:4D5E:FFFE",
      "FE80:001A:2BFF:3C4D"
    ],
    answer: 1,
    explain: "İlk oktetin U/L biti çevrilir (00 → 02), ortaya FF:FE əlavə edilir."
  },
  {
    domain: 1,
    q: "2.4 GHz diapazonunda üst-üstə düşməyən (non-overlapping) üç kanal hansıdır?",
    options: ["1, 2, 3", "1, 6, 11", "3, 6, 9", "4, 8, 12"],
    answer: 1,
    explain: "2.4 GHz diapazonunda 1, 6 və 11 kanalları üst-üstə düşmür."
  },
  {
    domain: 1,
    q: "2.4 GHz diapazonunda simsiz şəbəkənin məhsuldarlığını azaldan ən geniş yayılmış xarici mənbə hansıdır?",
    options: [
      "Ethernet kabelinin uzunluğu",
      "Mikrodalğalı soba",
      "Switch MAC cədvəli",
      "DHCP server"
    ],
    answer: 1,
    explain: "Mikrodalğalı sobalar 2.4 GHz diapazonunda radio maneəsi yaradır."
  },
  {
    domain: 1,
    q: "IOS router üzərində DHCP sorğularını başqa subnet-dəki DHCP server-ə ötürmək üçün hansı komanda istifadə olunur?",
    options: ["ip dhcp relay", "ip helper-address", "dhcp forward", "ip dhcp server-relay"],
    answer: 1,
    explain: "İnterfeysdə 'ip helper-address <server-ip>' DHCP broadcast sorğularını unicast kimi ötürür."
  },
  {
    domain: 1,
    q: "Client-də 169.254.x.x ünvanının görünməsi nəyi göstərir?",
    options: [
      "Statik IP təyin edildiyini",
      "DHCP server-ə çıxış olmadığını və APIPA ünvanı alındığını",
      "NAT aktiv olduğunu",
      "IPv6 söndürüldüyünü"
    ],
    answer: 1,
    explain: "169.254.0.0/16 APIPA aralığıdır; client DHCP cavabı almadıqda ünvanı özü yaradır."
  },

  // ---------- Domain 2 ----------
  {
    domain: 2,
    q: "Switch portunu 802.1Q trunk kimi sazlamaq üçün hansı komanda istifadə olunur?",
    options: [
      "switchport mode access",
      "switchport mode trunk",
      "switchport trunk native",
      "channel-group 1 mode on"
    ],
    answer: 1,
    explain: "'switchport mode trunk' portu trunk rejiminə keçirir və bir neçə VLAN trafikini teqlərlə daşıyır."
  },
  {
    domain: 2,
    q: "SVI (interface vlan 10) nə zaman 'up/up' vəziyyətinə keçir?",
    options: [
      "Yalnız VLAN 10 üzərində IP ünvanı təyin edildikdə",
      "VLAN 10 aktiv və bu VLAN-da ən azı bir port up olduqda",
      "Həmişə; VLAN-ın mövcud olması kifayətdir",
      "Yalnız trunk port vasitəsilə"
    ],
    answer: 1,
    explain: "SVI üçün VLAN aktiv olmalı və həmin VLAN-a aid ən azı bir fiziki port up vəziyyətində olmalıdır."
  },
  {
    domain: 2,
    q: "LACP ilə EtherChannel yaratmaq üçün hansı rejim cütü uyğundur (ən azı bir tərəf active olmalıdır)?",
    options: [
      "on - on",
      "active - passive",
      "desirable - auto (PAgP)",
      "passive - passive"
    ],
    answer: 1,
    explain: "LACP-də active ilə passive uyğunlaşır; passive–passive cütü kanal yaratmır."
  },
  {
    domain: 2,
    q: "Access portda PortFast ilə birlikdə BPDU Guard funksiyasını hansı komanda aktivləşdirir?",
    options: [
      "spanning-tree guard root",
      "spanning-tree bpduguard enable",
      "spanning-tree loopguard default",
      "spanning-tree portfast trunk"
    ],
    answer: 1,
    explain: "PortFast portunda BPDU alındıqda BPDU Guard portu err-disable vəziyyətinə keçirir."
  },
  {
    domain: 2,
    q: "Rapid PVST+ daxilində root bridge-ə ən yaxşı yolu təmin edən port hansı rolu alır?",
    options: ["Designated port", "Root port", "Alternate port", "Backup port"],
    answer: 1,
    explain: "Hər non-root switch üzərində root bridge-ə ən aşağı cost ilə çıxışı təmin edən port root port olur."
  },
  {
    domain: 2,
    q: "Root Guard nə üçün istifadə olunur?",
    options: [
      "Port security pozuntularının qarşısını almaq",
      "Portdan superior BPDU gəldikdə root bridge-in dəyişməsinin qarşısını almaq",
      "Kanal yaradılmasını məcbur etmək",
      "Trunk üzərindən VLAN trafikini filtrləmək"
    ],
    answer: 1,
    explain: "Root Guard nəzərdə tutulmayan bridge-in root seçilməsinin qarşısını alır; port root-inconsistent vəziyyətinə keçir."
  },
  {
    domain: 2,
    q: "Port security pozuntusu zamanı standart davranış hansıdır?",
    options: ["Protect", "Restrict", "Shutdown", "Warn"],
    answer: 2,
    explain: "Standart violation rejimi shutdown-dır; pozuntu olan port err-disable vəziyyətinə keçir."
  },
  {
    domain: 2,
    q: "Qonşu cihazların topologiyasını yoxlamaq üçün istehsalçıdan asılı olmayan hansı protokol istifadə olunur?",
    options: ["CDP", "LLDP", "STP", "VTP"],
    answer: 1,
    explain: "LLDP IEEE 802.1AB standartıdır və müxtəlif istehsalçıların cihazlarında işləyir. CDP isə Cisco-ya məxsusdur."
  },

  {
    domain: 2,
    q: "Layer 3 port-channel (EtherChannel) üçün IP ünvanı hansı interfeysdə təyin olunur?",
    options: [
      "Hər fiziki üzv interfeysdə ayrıca",
      "Məntiqi Port-channel interfeysində",
      "Yalnız VLAN 1 üzərində",
      "Kanal yaradılmadan əvvəl switch-in global konfiqurasiyasında"
    ],
    answer: 1,
    explain: "Layer 3 EtherChannel üçün 'no switchport' tətbiq edilən məntiqi port-channel interfeysinə IP verilir; fiziki üzvlərə verilmir."
  },

  // ---------- Domain 3 ----------
  {
    domain: 3,
    q: "Router-də 10.1.1.0/24 şəbəkəsinə route əlavə edən komanda hansıdır?",
    options: [
      "ip route 10.1.1.0 255.255.255.0 192.168.1.1",
      "ip route 10.1.1.0 0.0.0.255 192.168.1.1",
      "route add 10.1.1.0 /24 192.168.1.1",
      "ip network 10.1.1.0 255.255.255.0 192.168.1.1"
    ],
    answer: 0,
    explain: "Standart IOS statik route sintaksisi: ip route <network> <subnet-mask> <next-hop>. Wildcard mask ACL-də istifadə olunur."
  },
  {
    domain: 3,
    q: "Eyni destination prefix üçün müxtəlif mənbələrdən route öyrənildikdə router əvvəlcə hansı meyara baxır?",
    options: [
      "Ən yüksək metric",
      "Ən aşağı administrative distance (AD)",
      "Ən kiçik IP ünvanı",
      "Ən son öyrənilən route"
    ],
    answer: 1,
    explain: "Eyni prefix üçün əvvəl AD müqayisə edilir; eyni routing protokolu daxilində daha aşağı metric seçilir."
  },
  {
    domain: 3,
    q: "Standart administrative distance dəyərlərinə görə hansının AD dəyəri ən aşağıdır?",
    options: ["OSPF (110)", "RIP (120)", "Statik route (1)", "Connected route (0)"],
    answer: 3,
    explain: "Connected route üçün AD 0, statik route üçün AD 1-dir. Connected ən etibarlı mənbədir."
  },
  {
    domain: 3,
    q: "Ehtiyat (floating) statik default route yaratmaq üçün AD necə təyin edilməlidir?",
    options: [
      "AD dinamik protokolların dəyərindən aşağı qoyulur",
      "AD dinamik protokolların dəyərindən yüksək qoyulur",
      "AD 0 saxlanılır",
      "Metric 0 qoyulur, AD dəyişdirilmir"
    ],
    answer: 1,
    explain: "Məsələn, 'ip route 0.0.0.0 0.0.0.0 <ip> 200' yüksək AD ilə əsas dinamik route olmadıqda istifadə olunur."
  },
  {
    domain: 3,
    q: "Broadcast OSPF segmentində DR (Designated Router) seçimi hansı meyara əsaslanır?",
    options: [
      "Ən aşağı router ID",
      "Ən yüksək OSPF priority, bərabərlikdə ən yüksək router ID",
      "Ən aşağı sürət",
      "İlk işə düşən router"
    ],
    answer: 1,
    explain: "Priority 0 olan router DR seçilə bilməz. Priority eyni olduqda ən yüksək router ID qalib gəlir."
  },
  {
    domain: 3,
    q: "Point-to-point OSPF bağlantısında DR seçimi aparılırmı?",
    options: [
      "Bəli, həmişə",
      "Xeyr, point-to-point şəbəkədə DR/BDR seçilmir",
      "Yalnız OSPFv3-də",
      "Yalnız priority sıfırdan böyük olduqda"
    ],
    answer: 1,
    explain: "Point-to-point şəbəkədə iki qonşu cihaz birbaşa adjacency qurur; DR/BDR tələb olunmur."
  },
  {
    domain: 3,
    q: "Standart sazlamalarla broadcast şəbəkədə OSPF interfeysinin hello və dead interval-ları nə qədərdir?",
    options: [
      "Hello 5 san, dead 20 san",
      "Hello 10 san, dead 40 san",
      "Hello 30 san, dead 120 san",
      "Hello 1 san, dead 4 san"
    ],
    answer: 1,
    explain: "Broadcast və point-to-point şəbəkələrdə standart hello 10 saniyə, dead 40 saniyədir."
  },
  {
    domain: 3,
    q: "HSRP-də standart priority dəyəri nədir və active router necə seçilir?",
    options: [
      "50; ən aşağı priority active olur",
      "100; ən yüksək priority active olur",
      "255; ən aşağı IP ünvanı active olur",
      "0; ən yüksək IP ünvanı active olur"
    ],
    answer: 1,
    explain: "HSRP standart priority dəyəri 100-dür; ən yüksək priority olan router active seçilir."
  },

  // ---------- Domain 4 ----------
  {
    domain: 4,
    q: "Çoxlu daxili ünvanı bir public IP vasitəsilə çıxışa yönəltmək üçün hansı konfiqurasiya istifadə olunur?",
    options: [
      "Static NAT",
      "Dynamic NAT (pool)",
      "PAT (NAT overload)",
      "Policy routing"
    ],
    answer: 2,
    explain: "PAT (overload) port nömrələrindən istifadə edərək çoxlu daxili ünvanı bir public ünvana uyğunlaşdırır."
  },
  {
    domain: 4,
    q: "Standart IPv4 ACL nə əsasında filtrləmə aparır?",
    options: [
      "Yalnız source IP ünvanı",
      "Source və destination IP ilə port nömrəsi",
      "Yalnız protokol növü",
      "MAC ünvanları"
    ],
    answer: 0,
    explain: "Standart ACL yalnız source IP ünvanını yoxlayır. Extended ACL destination və port nömrəsini də yoxlaya bilir."
  },
  {
    domain: 4,
    q: "Nömrəli extended IPv4 ACL üçün aşağıdakı aralıqlardan hansı uyğundur?",
    options: ["1-99", "100-199", "200-299", "1300-1999"],
    answer: 1,
    explain: "Standart nömrəli ACL aralıqları 1–99 və 1300–1999, extended ACL aralıqları isə 100–199 və 2000–2699-dur."
  },
  {
    domain: 4,
    q: "Domain adını IPv6 ünvanına çevirmək üçün hansı DNS qeydi istifadə olunur?",
    options: ["A", "AAAA", "MX", "PTR"],
    answer: 1,
    explain: "AAAA IPv6 ünvanını, A IPv4 ünvanını saxlayır. MX poçt server-ini, PTR əks istiqamətdə ad həllini göstərir."
  },
  {
    domain: 4,
    q: "DHCP snooping-də hansı port 'trusted' kimi işarələnməlidir?",
    options: [
      "Son istifadəçinin client portları",
      "DHCP server istiqamətindəki uplink portlar",
      "Printer portları",
      "İstifadə olunmayan portlar"
    ],
    answer: 1,
    explain: "DHCP server-ə gedən port trusted olmalıdır; digər portlardan gələn saxta DHCP server cavabları atılır."
  },
  {
    domain: 4,
    q: "Storm control nəyi məhdudlaşdırmaq üçün istifadə olunur?",
    options: [
      "Port üzrə MAC ünvanlarının sayını",
      "Broadcast, multicast və ya unicast trafikinin faizini",
      "VLAN sayını",
      "Kanal enini"
    ],
    answer: 1,
    explain: "Storm control müəyyən trafik növləri həddi aşdıqda həmin trafiki məhdudlaşdırır."
  },
  {
    domain: 4,
    q: "TACACS+ ilə RADIUS arasındakı əsas fərq hansıdır?",
    options: [
      "TACACS+ yalnız simsiz şəbəkələrdə işləyir",
      "TACACS+ bütün gövdəni, RADIUS isə yalnız parolu şifrələyir",
      "RADIUS yalnız router-lərdə işləyir",
      "TACACS+ UDP, RADIUS TCP istifadə edir"
    ],
    answer: 1,
    explain: "TACACS+ TCP 49 istifadə edir və paketin bütün gövdəsini şifrələyir; RADIUS UDP istifadə edir və ənənəvi olaraq yalnız parolu gizlədir."
  },
  {
    domain: 4,
    q: "IPsec tunnel rejimində orijinal IP paketinə nə olur?",
    options: [
      "Yalnız payload şifrələnir, header açıq qalır",
      "Bütün orijinal IP paketi şifrələnir və yeni IP header əlavə olunur",
      "Paket şifrələnmir, yalnız doğrulanır",
      "Header silinir"
    ],
    answer: 1,
    explain: "Şifrələmə istifadə edildikdə tunnel rejimi bütün orijinal paketi əhatə edir və site-to-site VPN-də tətbiq olunur. Transport rejimində yalnız payload şifrələnir."
  },

  // ---------- Domain 5 ----------
  {
    domain: 5,
    q: "Syslog-da ən yüksək əhəmiyyət səviyyəsi hansıdır?",
    options: ["0 - Emergency", "7 - Debugging", "1 - Alert", "5 - Notice"],
    answer: 0,
    explain: "Syslog səviyyələri 0 (Emergency) ilə 7 (Debugging) arasındadır; kiçik nömrə daha yüksək əhəmiyyət deməkdir."
  },
  {
    domain: 5,
    q: "SNMP-də idarə olunan cihazın idarəetmə stansiyasına öz təşəbbüsü ilə bildiriş göndərməsini hansı əməliyyat təmin edir?",
    options: ["GET", "GET-NEXT", "SET", "TRAP"],
    answer: 3,
    explain: "TRAP (və ya INFORM) agent tərəfindən başladılır və hadisəni manager-ə bildirir."
  },
  {
    domain: 5,
    q: "Infrastructure as Code yanaşmasında 'declarative' model nə deməkdir?",
    options: [
      "Hər addımın ardıcıllıqla yazılması",
      "İstənilən son vəziyyətin göstərilməsi və sistemin buna çatmaq üçün addımları müəyyən etməsi",
      "Yalnız əl ilə konfiqurasiya",
      "Cihazların yalnız veb interfeyslə idarə edilməsi"
    ],
    answer: 1,
    explain: "Declarative alətlər (məsələn, Terraform) istənilən vəziyyəti təsvir edir; imperative alətlər addım-addım komandaları göstərir."
  },
  {
    domain: 5,
    q: "Ansible idarə olunan cihazlara qoşulmaq üçün adətən hansı üsuldan istifadə edir?",
    options: [
      "Hər cihazda quraşdırılmış agent proqramı",
      "Agentless iş prinsipi; adətən SSH və ya API vasitəsilə",
      "Yalnız SNMP trap",
      "Yalnız USB bağlantısı"
    ],
    answer: 1,
    explain: "Ansible əksər hallarda hədəf cihazda agent tələb etmir; SSH və ya uyğun API vasitəsilə işləyir."
  },
  {
    domain: 5,
    q: "Şəbəkə əməliyyatı üçün generativ süni intellektə prompt hazırlanarkən məlumat məxfi sayılırsa ən düzgün yanaşma hansıdır?",
    options: [
      "Bütün məlumatı olduğu kimi göndərmək",
      "Məxfi məlumatı göndərməzdən əvvəl anonimləşdirmək və ya çıxarmaq",
      "Prompt-a real parolları əlavə etmək",
      "Məxfiliyi yalnız çıxış formatında qeyd etmək"
    ],
    answer: 1,
    explain: "İcazəsiz məlumat sızmasının qarşısını almaq üçün məxfi məlumat göndərilməzdən əvvəl çıxarılmalı, anonimləşdirilməli və ya maskalanmalıdır."
  },
  {
    domain: 5,
    q: "Şəbəkə cihazının syslog mesajında 'facility' sahəsi nəyi göstərir?",
    options: [
      "Mesajı yaradan alt sistemin və ya kateqoriyanın mənbəyini",
      "Mesajın əhəmiyyət səviyyəsini",
      "Cihazın IP ünvanını",
      "Mesajın vaxt damğasını"
    ],
    answer: 0,
    explain: "Facility (məsələn, local0–local7, daemon, kern) mesajın mənbə kateqoriyasını, severity isə əhəmiyyət səviyyəsini göstərir."
  }
];
