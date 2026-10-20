// TryExam - ek sorular (100 soruluk sınav için konu ağırlıklarına göre tamamlama)
// questions.js dosyasından sonra yüklenir ve QUESTIONS dizisine eklenir.
// Özgün sorular: Cisco sınav içeriği kullanılmamıştır.

QUESTIONS.push(
  // ---------- Domain 1 (ek) ----------
  {
    domain: 1,
    q: "Uzun məsafəli (bir neçə kilometrə qədər) fiber bağlantı üçün hansı fiber növü seçilir?",
    options: ["Multimode fiber", "Single-mode fiber", "Plastik optik fiber", "Koaksial kabel"],
    answer: 1,
    explain: "Single-mode fiber siqnalı daha az dispersiya ilə daşıyır və uzun məsafələrdə istifadə olunur. Multimode fiber qısa məsafələr üçün uyğundur."
  },
  {
    domain: 1,
    q: "Mis Ethernet (1000BASE-T) üçün tipik maksimum kabel uzunluğu nə qədərdir?",
    options: ["50 m", "100 m", "300 m", "2 km"],
    answer: 1,
    explain: "Mis Ethernet kabel segmentinin standart maksimum uzunluğu 100 metrdir."
  },
  {
    domain: 1,
    q: "İnterfeysdə CRC xətalarının artması ən çox nəyi göstərir?",
    options: [
      "DHCP lease müddətinin bitməsini",
      "Fiziki səviyyədə problemi (zədələnmiş kabel, maneə və ya pis konnektor)",
      "VLAN konfiqurasiyasının çatışmamasını",
      "Routing cədvəlində xətanı"
    ],
    answer: 1,
    explain: "CRC xətaları adətən zədələnmiş kabel, konnektor problemi və ya elektromaqnit maneəsi kimi fiziki səviyyə problemlərini göstərir."
  },
  {
    domain: 1,
    q: "İki kompüteri birbaşa birləşdirmək üçün (avtomatik MDI-X olmayan köhnə cihazlarda) hansı kabel istifadə olunur?",
    options: ["Straight-through kabel", "Crossover kabel", "Konsol kabeli", "Rollover kabel"],
    answer: 1,
    explain: "Eyni növ cihazları (məsələn, iki PC) birləşdirmək üçün crossover kabel istifadə olunur; müasir cihazlar bunu avtomatik aşkarlayır."
  },
  {
    domain: 1,
    q: "Aşağıdakı ünvanlardan hansı RFC 6598 ilə ayrılmış ortaq CGNAT ünvan sahəsinə daxildir?",
    options: ["10.10.10.10", "172.31.1.1", "100.64.0.1", "192.168.50.1"],
    answer: 2,
    explain: "100.64.0.0/10 CGNAT üçün ayrılıb; RFC 1918 private aralığı deyil, lakin İnternetdə birbaşa route edilmir."
  },
  {
    domain: 1,
    q: "10.0.5.200/27 ünvanının broadcast ünvanı hansıdır?",
    options: ["10.0.5.207", "10.0.5.223", "10.0.5.255", "10.0.5.199"],
    answer: 1,
    explain: "/27 üçün blok ölçüsü 32-dir. 200, 192–223 aralığında olduğuna görə broadcast ünvanı 10.0.5.223-dür."
  },
  {
    domain: 1,
    q: "/28 subnet daxilində neçə istifadə edilə bilən host ünvanı var?",
    options: ["16", "14", "30", "6"],
    answer: 1,
    explain: "/28 üçün 2^4 = 16 ünvan var. Network və broadcast ünvanları çıxıldıqda 14 host ünvanı qalır."
  },
  {
    domain: 1,
    q: "Link-local IPv6 ünvanları hansı prefix-ə malikdir?",
    options: ["2001::/16", "FC00::/7", "FE80::/10", "FF00::/8"],
    answer: 2,
    explain: "Link-local IPv6 ünvanları FE80::/10 aralığındadır və yalnız eyni link daxilində keçərlidir."
  },
  {
    domain: 1,
    q: "Korporativ simsiz şəbəkədə WPA2-Enterprise hansı autentifikasiya quruluşundan istifadə edir?",
    options: ["Yalnız ortaq parol (PSK)", "802.1X ilə RADIUS server", "WEP açarı", "MAC ünvanı filtrləməsi"],
    answer: 1,
    explain: "WPA2-Enterprise hər istifadəçi üzrə autentifikasiya üçün 802.1X və RADIUS istifadə edir."
  },
  {
    domain: 1,
    q: "5 GHz diapazonunun 2.4 GHz ilə müqayisədə tipik üstünlüyü və çatışmazlığı nədir?",
    options: [
      "Daha uzun əhatə məsafəsi, lakin daha az kanal",
      "Daha çox non-overlapping kanal, lakin adətən daha qısa əhatə məsafəsi",
      "Daha aşağı sürət və daha az kanal",
      "Mikrodalğalı maneədən tam qorunur və həmişə daha uzun əhatə məsafəsi verir"
    ],
    answer: 1,
    explain: "5 GHz-də üst-üstə düşməyən kanallar daha çoxdur, lakin yüksək tezlik səbəbindən əhatə məsafəsi adətən daha qısadır."
  },
  {
    domain: 1,
    q: "Windows client-də IP konfiqurasiyasını, DNS server-ləri və DHCP məlumatını ətraflı göstərən komanda hansıdır?",
    options: ["ipconfig /all", "ping -a", "netstat -r", "arp -d"],
    answer: 0,
    explain: "'ipconfig /all' ətraflı şəbəkə konfiqurasiyasını (DNS, DHCP, MAC ünvanı və s.) göstərir."
  },
  {
    domain: 1,
    q: "Linux client-də IP ünvanını göstərmək üçün adətən hansı komanda istifadə olunur?",
    options: ["ip addr", "ipconfig", "show ip interface", "route print"],
    answer: 0,
    explain: "Müasir Linux distributivlərində 'ip addr' (və ya 'ip a') interfeys ünvanlarını göstərir."
  },
  {
    domain: 1,
    q: "IOS DHCP server-də müəyyən ünvanların paylanmasının qarşısını hansı komanda alır?",
    options: [
      "ip dhcp reserved-address",
      "ip dhcp excluded-address",
      "ip dhcp blocked-address",
      "ip dhcp pool-exclude"
    ],
    answer: 1,
    explain: "'ip dhcp excluded-address' göstərilən ünvan aralığını DHCP pool-dan çıxarır."
  },
  {
    domain: 1,
    q: "DHCP client–server əlaqəsində mesajların düzgün ardıcıllığı hansıdır?",
    options: [
      "Discover, Offer, Request, Acknowledge",
      "Offer, Discover, Acknowledge, Request",
      "Request, Discover, Offer, Acknowledge",
      "Discover, Request, Offer, Acknowledge"
    ],
    answer: 0,
    explain: "DORA prosesi: client Discover göndərir, server Offer ilə cavab verir, client Request ilə qəbul edir, server Acknowledge ilə təsdiqləyir."
  },
  {
    domain: 1,
    q: "IPv4 ünvanının public və ya private olduğunu müəyyənləşdirmək üçün hansı məlumatdan istifadə olunur?",
    options: ["MAC ünvanı", "RFC 1918 private aralıqları", "VLAN nömrəsi", "Port nömrəsi"],
    answer: 1,
    explain: "10.0.0.0/8, 172.16.0.0/12 və 192.168.0.0/16 RFC 1918 private aralıqlarıdır."
  },

  // ---------- Domain 2 (ek) ----------
  {
    domain: 2,
    q: "Switch-də spanning-tree vəziyyətini (root bridge, port rolları) hansı komanda göstərir?",
    options: ["show spanning-tree", "show vlan brief", "show cdp traffic", "show mac address-table"],
    answer: 0,
    explain: "'show spanning-tree' root bridge ID-ni və hər portun rolunu/vəziyyətini göstərir."
  },
  {
    domain: 2,
    q: "Trunk bağlantısının iki ucunda native VLAN uyğun gəlməzsə ən ehtimal olunan nəticə nədir?",
    options: [
      "Heç bir trafik keçmir",
      "VLAN-lar arasında routing işləmir, native VLAN trafiki yanlış VLAN-a düşə bilər",
      "DHCP işləmir",
      "Portun sürəti avtomatik azalır"
    ],
    answer: 1,
    explain: "Native VLAN uyğunsuzluğu teqsiz trafikin yanlış VLAN-a düşməsinə və CDP xəbərdarlıqlarına səbəb olur."
  },
  {
    domain: 2,
    q: "Access portu VLAN 20-yə təyin etmək üçün hansı komanda ardıcıllığı istifadə olunur?",
    options: [
      "switchport mode trunk / switchport trunk allowed vlan 20",
      "switchport mode access / switchport access vlan 20",
      "vlan 20 / trunk native 20",
      "interface vlan 20 / no shutdown"
    ],
    answer: 1,
    explain: "Access port 'switchport mode access' ilə sazlanır, 'switchport access vlan' ilə VLAN-a təyin edilir."
  },
  {
    domain: 2,
    q: "IP telefonun səs trafikini məlumat trafikindən ayırmaq üçün hansı komanda istifadə olunur?",
    options: ["switchport voice vlan", "switchport trunk native", "spanning-tree portfast", "channel-protocol lacp"],
    answer: 0,
    explain: "'switchport voice vlan' səs trafikini ayrıca VLAN-a yönəldir və QoS tətbiqinə kömək edir."
  },
  {
    domain: 2,
    q: "Controller-based simsiz AP ilə WLC arasında hansı standart tunnel protokolu istifadə olunur?",
    options: ["CAPWAP", "OSPF", "STP", "LLDP"],
    answer: 0,
    explain: "CAPWAP (Control and Provisioning of Wireless Access Points) lightweight AP ilə WLC arasındakı əlaqə protokoludur."
  },
  {
    domain: 2,
    q: "LACP port-channel daxilində eyni anda maksimum neçə fiziki link aktiv ola bilər?",
    options: ["2", "4", "8", "16"],
    answer: 2,
    explain: "Bu Cisco EtherChannel modeli üçün maksimum 8 aktiv link və ümumilikdə 16 namizəd link dəstəklənir; qalanları standby ola bilər."
  },
  {
    domain: 2,
    q: "Multilayer switch-də VLAN-lar arasında routing funksiyasını hansı global komanda aktivləşdirir?",
    options: ["ip routing", "ip forward", "routing enable", "ip gateway"],
    answer: 0,
    explain: "'ip routing' global komandası multilayer switch-də SVI-lər arasında Layer 3 routing funksiyasını aktivləşdirir."
  },
  {
    domain: 2,
    q: "Trunk portda daşınacaq VLAN-ları məhdudlaşdırmaq üçün hansı komanda istifadə olunur?",
    options: [
      "switchport trunk allowed vlan",
      "switchport access vlan",
      "switchport voice vlan",
      "spanning-tree vlan"
    ],
    answer: 0,
    explain: "'switchport trunk allowed vlan' trunk üzərindən keçəcək VLAN siyahısını müəyyən edir."
  },
  {
    domain: 2,
    q: "Rapid PVST+ (RSTP) port vəziyyətləri hansılardır?",
    options: [
      "Blocking, Listening, Learning, Forwarding",
      "Discarding, Learning, Forwarding",
      "Active, Standby, Init",
      "Up, Down, Err-disable"
    ],
    answer: 1,
    explain: "Rapid PVST+ vəziyyətləri Discarding, Learning və Forwarding-dir; köhnə STP-dəki Blocking və Listening vəziyyətlərini Discarding əvəz edir."
  },
  {
    domain: 2,
    q: "Hər segmentdə hansı rola malik yalnız bir port olur və root istiqamətində trafiki ötürür?",
    options: ["Root port", "Designated port", "Alternate port", "Backup port"],
    answer: 1,
    explain: "Hər segmentdə root-a ən yaxşı yolu təmin edən designated port olur; segmentin trafiki bu portdan ötürülür."
  },
  {
    domain: 2,
    q: "Bütün portların sürət və duplex vəziyyətini bir cədvəldə göstərən komanda hansıdır?",
    options: ["show interfaces status", "show ip route", "show cdp", "show version"],
    answer: 0,
    explain: "'show interfaces status' port vəziyyətini, sürəti, duplex və VLAN məlumatını bir cədvəldə göstərir."
  },
  {
    domain: 2,
    q: "LLDP-ni global olaraq aktivləşdirən IOS komandası hansıdır?",
    options: ["lldp enable", "lldp run", "cdp run", "lldp start"],
    answer: 1,
    explain: "Global konfiqurasiyada 'lldp run' LLDP-ni aktivləşdirir; interfeys üzrə 'lldp transmit/receive' də sazlana bilər."
  },
  {
    domain: 2,
    q: "Loop guard funksiyasının əsas məqsədi nədir?",
    options: [
      "Birtərəfli link səbəbindən yarana bilən loop-ların qarşısını almaq",
      "Port təhlükəsizliyini təmin etmək",
      "DHCP client-ləri filtrləmək",
      "VLAN teqlərini şifrələmək"
    ],
    answer: 0,
    explain: "Loop guard BPDU almayan interfeysin səhvən forwarding vəziyyətinə keçməsinin qarşısını alır."
  },
  {
    domain: 2,
    q: "Traceroute çıxışı nəyi göstərir?",
    options: [
      "Destination-a gedən yoldakı hər hop-u və cavab vaxtlarını",
      "Port security pozuntularını",
      "Router-in RAM istifadəsini",
      "DHCP lease cədvəlini"
    ],
    answer: 0,
    explain: "Traceroute paketin destination-a gedərkən keçdiyi hər hop-u və cavab gecikməsini göstərir."
  },
  {
    domain: 2,
    q: "Simsiz şəbəkədə AP-nin kanal və güc sazlamalarını mərkəzdən idarə etmək üçün hansı arxitektura istifadə olunur?",
    options: ["Standalone AP", "Controller-based AP arxitekturası", "Yalnız mesh", "Yalnız bridge rejimi"],
    answer: 1,
    explain: "Controller-based arxitekturada WLC AP-lərin RF sazlamalarını və siyasətlərini mərkəzdən idarə edir."
  },
  {
    domain: 2,
    q: "İstifadə olunmayan switch portunu təhlükəsiz etmək üçün ən uyğun yanaşma hansıdır?",
    options: [
      "Portu VLAN 1-ə təyin edib açıq saxlamaq",
      "Portu shutdown edib istifadə olunmayan VLAN-a təyin etmək",
      "Portu trunk etmək",
      "PortFast aktivləşdirmək"
    ],
    answer: 1,
    explain: "İstifadə olunmayan portu shutdown etmək və istifadə olunmayan VLAN-a təyin etmək icazəsiz giriş riskini azaldır."
  },

  // ---------- Domain 3 (ek) ----------
  {
    domain: 3,
    q: "Routing cədvəlində destination üçün bir neçə uyğun route olduqda router hansı qayda ilə qərar verir?",
    options: [
      "Longest prefix match",
      "Ən yüksək metric",
      "Ən son əlavə olunan route",
      "Ən aşağı next-hop IP ünvanı"
    ],
    answer: 0,
    explain: "Əvvəl longest prefix match seçilir; AD və metric eyni prefix üçün alternativ route-ları fərqləndirir."
  },
  {
    domain: 3,
    q: "Default route hansı network və mask ilə göstərilir?",
    options: ["0.0.0.0 0.0.0.0", "255.255.255.255", "127.0.0.1", "10.0.0.0 255.0.0.0"],
    answer: 0,
    explain: "0.0.0.0/0 bütün ünvanları əhatə edir və daha dəqiq uyğun route olmadıqda istifadə olunur."
  },
  {
    domain: 3,
    q: "Yalnız bir destination IP ünvanına aid route hansı mask uzunluğuna malikdir?",
    options: ["/0", "/24", "/30", "/32"],
    answer: 3,
    explain: "Host route /32 mask-a malikdir və yalnız bir IPv4 ünvanını əhatə edir."
  },
  {
    domain: 3,
    q: "Standart reference bandwidth ilə OSPF-də 1 Gbps interfeysin cost dəyəri neçədir?",
    options: ["1", "10", "100", "1000"],
    answer: 0,
    explain: "Standart reference bandwidth 100 Mbps-dir. 100/1000 = 0.1 olsa da, minimum OSPF cost 1-dir."
  },
  {
    domain: 3,
    q: "OSPFv3 (IPv6) bütün OSPF router-ləri üçün hansı multicast ünvanını istifadə edir?",
    options: ["224.0.0.5", "FF02::5", "FF02::6", "224.0.0.18"],
    answer: 1,
    explain: "OSPFv3 bütün OSPF router-ləri üçün FF02::5, DR/BDR üçün FF02::6 istifadə edir. 224.0.0.5 OSPFv2 üçündür."
  },
  {
    domain: 3,
    q: "OSPF router ID-ni əl ilə təyin etmək üçün hansı komanda istifadə olunur?",
    options: ["router-id <ip>", "ospf id <ip>", "ospf router-id <ip>", "set router <ip>"],
    answer: 0,
    explain: "OSPF routing prosesində 'router-id <ip>' ID-ni əl ilə sabit təyin edir."
  },
  {
    domain: 3,
    q: "Broadcast OSPF segmentində DROTHER router-lər arasındakı qonşuluq hansı vəziyyətdə qalır?",
    options: ["Full", "2-Way", "Init", "Down"],
    answer: 1,
    explain: "DROTHER router-lər bir-biri ilə 2-Way vəziyyətində qalır; Full adjacency yalnız DR/BDR ilə qurulur."
  },
  {
    domain: 3,
    q: "Point-to-point OSPF şəbəkə növü ilə DR seçimi arasındakı əlaqə nədir?",
    options: [
      "Point-to-point şəbəkədə DR seçilir",
      "Point-to-point şəbəkədə DR/BDR seçilmir",
      "Point-to-point şəbəkədə yalnız priority 0 olduqda DR seçilir",
      "Point-to-point şəbəkədə IPv6 üçün DR seçilir"
    ],
    answer: 1,
    explain: "Point-to-point şəbəkədə DR/BDR seçilmir; qonşular birbaşa Full adjacency qurur."
  },
  {
    domain: 3,
    q: "HSRP version 1 virtual MAC ünvanı hansı prefix ilə başlayır?",
    options: ["0000.0C07.ACxx", "0050.56xx.xxxx", "0100.5E00.00xx", "0000.5E00.01xx"],
    answer: 0,
    explain: "HSRP v1 virtual MAC ünvanı 0000.0C07.ACxx formatındadır; xx qrup nömrəsidir."
  },
  {
    domain: 3,
    q: "VRRP master və backup router-lər arasında əlaqə üçün hansı multicast ünvanından istifadə edir?",
    options: ["224.0.0.18", "224.0.0.5", "FF02::5", "224.0.0.9"],
    answer: 0,
    explain: "VRRP vəziyyət mesajlarını 224.0.0.18 multicast ünvanına göndərir."
  },
  {
    domain: 3,
    q: "IPv6 statik default route əlavə etmək üçün hansı komanda istifadə olunur?",
    options: [
      "ip route 0.0.0.0 0.0.0.0 <next-hop>",
      "ipv6 route ::/0 <next-hop>",
      "ipv6 default-route <ip>",
      "route ipv6 ::/0 <ip>"
    ],
    answer: 1,
    explain: "IPv6 default route '::/0' ilə göstərilir: ipv6 route ::/0 <next-hop>."
  },
  {
    domain: 3,
    q: "EIGRP internal route-ları üçün standart administrative distance dəyəri nədir?",
    options: ["90", "110", "120", "170"],
    answer: 0,
    explain: "EIGRP internal route üçün AD 90, external route üçün AD 170-dir."
  },

  // ---------- Domain 4 (ek) ----------
  {
    domain: 4,
    q: "NAT zamanı İnternetdəki server daxili host-un hansı ünvanını görür?",
    options: ["Inside local", "Inside global", "Outside local", "Outside global"],
    answer: 1,
    explain: "Inside global daxili host-un xaricdən görünən, NAT-dan sonrakı ünvanıdır."
  },
  {
    domain: 4,
    q: "Daxili ünvanı sabit public ünvanla uyğunlaşdırmaq üçün hansı NAT komandası istifadə olunur?",
    options: [
      "ip nat inside source static <inside> <outside>",
      "ip nat pool <name> <ip>",
      "ip route nat <inside> <outside>",
      "nat static <inside> <outside>"
    ],
    answer: 0,
    explain: "Statik NAT 'ip nat inside source static <inside-ip> <outside-ip>' ilə sazlanır."
  },
  {
    domain: 4,
    q: "Standart ACL adətən harada yerləşdirilməlidir?",
    options: [
      "Mümkün qədər destination-a yaxın",
      "Mümkün qədər source-a yaxın",
      "Router-in ən mərkəzi interfeysində",
      "Həmişə yalnız xarici interfeysdə"
    ],
    answer: 0,
    explain: "Standart ACL yalnız source ünvanını yoxladığı üçün destination-a yaxın yerləşdirilir; beləliklə digər destination-lara gedən trafik səhvən bloklanmır."
  },
  {
    domain: 4,
    q: "Extended ACL adətən harada yerləşdirilməlidir?",
    options: [
      "Mümkün qədər source-a yaxın",
      "Mümkün qədər destination-a yaxın",
      "Yalnız NAT interfeysində",
      "Yalnız xarici interfeysdə"
    ],
    answer: 0,
    explain: "Extended ACL source və destination məlumatlarını yoxlaya bildiyi üçün source-a yaxın yerləşdirilir və lazımsız trafik erkən bloklanır."
  },
  {
    domain: 4,
    q: "Hər ACL-in sonunda implicit olaraq hansı qayda mövcuddur?",
    options: ["permit any", "deny any", "log all", "reset"],
    answer: 1,
    explain: "Hər ACL-in sonunda implicit 'deny any' var; heç bir qaydaya uyğun gəlməyən trafik bloklanır."
  },
  {
    domain: 4,
    q: "Adlandırılmış extended ACL yaratmaq üçün hansı komanda istifadə olunur?",
    options: [
      "ip access-list extended <name>",
      "access-list standard <name>",
      "ip acl name <name>",
      "ipv4 filter <name>"
    ],
    answer: 0,
    explain: "'ip access-list extended <name>' adlandırılmış extended ACL konfiqurasiyasını açır."
  },
  {
    domain: 4,
    q: "IP ünvanından domain adını tapmaq üçün hansı DNS qeydi istifadə olunur?",
    options: ["A", "CNAME", "PTR", "NS"],
    answer: 2,
    explain: "PTR reverse lookup üçün istifadə olunur və IP ünvanını ada çevirir."
  },
  {
    domain: 4,
    q: "Domain adını başqa domain adının alias-ı edən DNS qeydi hansıdır?",
    options: ["A", "CNAME", "MX", "PTR"],
    answer: 1,
    explain: "CNAME bir adı başqa adın alias-ı kimi təyin edir."
  },
  {
    domain: 4,
    q: "Domain üçün authoritative name server-ləri göstərən DNS qeydi hansıdır?",
    options: ["NS", "MX", "AAAA", "TXT"],
    answer: 0,
    explain: "NS qeydi domain-in hansı name server-lər tərəfindən idarə olunduğunu göstərir."
  },
  {
    domain: 4,
    q: "Dynamic ARP Inspection (DAI) saxta ARP paketlərini hansı məlumat bazasına əsasən filtrləyir?",
    options: [
      "CAM cədvəli",
      "DHCP snooping binding cədvəli",
      "STP bridge cədvəli",
      "VLAN verilənlər bazası"
    ],
    answer: 1,
    explain: "DAI DHCP snooping-in yaratdığı IP–MAC binding cədvəli ilə etibarsız ARP cavablarını bloklayır."
  },
  {
    domain: 4,
    q: "IPv6-da RA guard nə edir?",
    options: [
      "İcazəsiz Router Advertisement mesajlarını filtrləyir",
      "DHCPv6 server-i məhdudlaşdırır",
      "NAT-ı söndürür",
      "IPsec açarlarını idarə edir"
    ],
    answer: 0,
    explain: "RA guard access portlardan gələn saxta Router Advertisement mesajlarını bloklayaraq saxta default gateway hücumlarının qarşısını alır."
  },
  {
    domain: 4,
    q: "IPsec-də IKE Phase 1 nə yaradır?",
    options: [
      "Təhlükəsiz məlumat trafiki üçün IPsec SA-lar",
      "ISAKMP (IKE) SA; peer autentifikasiyası və təhlükəsiz kanal",
      "Yalnız NAT uyğunlaşdırmaları",
      "VLAN teqləri"
    ],
    answer: 1,
    explain: "IKE Phase 1 ISAKMP SA yaradır, peer-ləri doğrulayır və Phase 2 üçün təhlükəsiz kanal təmin edir."
  },
  {
    domain: 4,
    q: "SCP və SFTP hansı standart bağlantı üzərindən işləyir?",
    options: ["Telnet (23)", "SSH (22)", "FTP (21)", "HTTP (80)"],
    answer: 1,
    explain: "SCP və SFTP SSH bağlantısı üzərindən, standart olaraq TCP 22 portunda işləyir."
  },

  // ---------- Domain 5 (ek) ----------
  {
    domain: 5,
    q: "SNMP-nin hansı versiyası autentifikasiya və şifrələməni dəstəkləyir?",
    options: ["SNMPv1", "SNMPv2c", "SNMPv3", "Heç biri"],
    answer: 2,
    explain: "SNMPv3 authentication və privacy (şifrələmə) funksiyalarını dəstəkləyir; v1 və v2c açıq mətnli community string istifadə edir."
  },
  {
    domain: 5,
    q: "SNMP-də idarə olunan obyektləri iyerarxik təsvir edən quruluş hansıdır?",
    options: ["MIB", "ACL", "CAM", "LSA"],
    answer: 0,
    explain: "MIB (Management Information Base) SNMP obyektlərinin iyerarxik quruluşudur; hər obyekt OID ilə ünvanlanır."
  },
  {
    domain: 5,
    q: "Syslog mesajları standart olaraq hansı transport protokolu və portdan göndərilir?",
    options: ["TCP 514", "UDP 514", "UDP 162", "TCP 49"],
    answer: 1,
    explain: "Ənənəvi syslog UDP 514, SNMP trap UDP 162, TACACS+ isə TCP 49 istifadə edir."
  },
  {
    domain: 5,
    q: "Ansible playbook hansı məlumat formatında yazılır?",
    options: ["YAML", "XML", "Binary", "CSV"],
    answer: 0,
    explain: "Ansible playbook YAML formatında yazılır və task-ları təsvir edir."
  },
  {
    domain: 5,
    q: "Eyni konfiqurasiyanın təkrar tətbiqinin nəticəni dəyişməməsi hansı xüsusiyyətdir?",
    options: ["Idempotency (təkrar tətbiqdə nəticənin dəyişməməsi)", "Redundancy", "Latency", "Multiplexing"],
    answer: 0,
    explain: "Idempotent əməliyyat təkrar tətbiq edildikdə eyni nəticəni verir; bu, avtomatlaşdırmada mühüm xüsusiyyətdir."
  },
  {
    domain: 5,
    q: "İdarəetmə siyasətlərinin mərkəzi controller-dən paylandığı yanaşma hansıdır?",
    options: ["Device-based", "Controller-based", "Əl ilə idarəetmə", "Yalnız cloud-based"],
    answer: 1,
    explain: "Controller-based yanaşmada mərkəzi controller siyasətləri cihazlara paylayır və şəbəkəni bir nöqtədən idarə edir."
  }
);
