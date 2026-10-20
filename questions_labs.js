// TryExam - topoloji + görev tabanlı simülasyon soruları (IOS benzeri konsol)
// Her soru: topology (çizim + bağlantılar), devices (konsol sekmeleri), init (başlangıç yapılandırması),
// tasks (görev metni + cihaz durumu üzerinden denetim). Tüm görevler tamamlanmalıdır.
// Özgün senaryolar: Cisco sınav içeriği kullanılmamıştır.

// Yardımcılar: durumdan arayüz/cihaz almak için
const LAB_IF = (lab, dev, name) => {
  const d = lab.devices[dev];
  return d ? d.ifaces[IOSLab.canonIf(name)] : undefined;
};
const LAB_DEV = (lab, dev) => lab.devices[dev];
const LAB_SAME = (a, b) => JSON.stringify(a) === JSON.stringify(b);

QUESTIONS.push(
  // ---------- 2.0 Switching: VLAN ve trunk ----------
  {
    type: "lab", domain: 2,
    q: "Şəkildəki topologiyada SW1 üzərində VLAN və port sazlamalarını tamamlayın. SW2 tərəfi bu tapşırığın əhatəsində deyil.",
    topology: {
      devices: [
        { name: "PC-A", type: "pc", x: 110, y: 70 },
        { name: "PC-B", type: "pc", x: 110, y: 230 },
        { name: "SW1", type: "switch", x: 320, y: 150 },
        { name: "SW2", type: "switch", x: 540, y: 150 }
      ],
      links: [
        { a: "PC-A", ai: "", b: "SW1", bi: "Gi0/1", label: "VLAN 10" },
        { a: "PC-B", ai: "", b: "SW1", bi: "Gi0/2", label: "VLAN 20" },
        { a: "SW1", ai: "Gi0/24", b: "SW2", bi: "Gi0/24", label: "Trunk" }
      ]
    },
    devices: ["SW1"],
    init: {},
    tasks: [
      { text: "SW1-də VLAN 10-u 'SALES', VLAN 20-ni 'ENG' adı ilə yaradın.",
        check: (lab) => LAB_DEV(lab, "SW1").vlans[10] && LAB_DEV(lab, "SW1").vlans[10].name.toUpperCase() === "SALES" &&
          LAB_DEV(lab, "SW1").vlans[20] && LAB_DEV(lab, "SW1").vlans[20].name.toUpperCase() === "ENG" },
      { text: "Gi0/1 portunu access edib VLAN 10-a təyin edin.",
        check: (lab) => { const f = LAB_IF(lab, "SW1", "Gi0/1"); return !!f && f.mode === "access" && f.access === 10; } },
      { text: "Gi0/2 portunu access edib VLAN 20-yə təyin edin.",
        check: (lab) => { const f = LAB_IF(lab, "SW1", "Gi0/2"); return !!f && f.mode === "access" && f.access === 20; } },
      { text: "Gi0/24 portunu trunk edin və yalnız VLAN 10,20 trafikinə icazə verin.",
        check: (lab) => { const f = LAB_IF(lab, "SW1", "Gi0/24"); return !!f && f.mode === "trunk" && LAB_SAME(f.allowed, [10, 20]); } }
    ],
    explain: "VLAN 'vlan <id>' ilə yaradılır, 'name' ilə adlandırılır. Access port üçün 'switchport mode access' və 'switchport access vlan', trunk üçün 'switchport mode trunk' və 'switchport trunk allowed vlan' istifadə olunur."
  },

  // ---------- 2.0 Switching: STP ----------
  {
    type: "lab", domain: 2,
    q: "VLAN 10 üçün SW1 primary root bridge, SW2 secondary root bridge olacaq. SW1-in PC-A-ya qoşulan portunda sürətli keçid və BPDU qoruması sazlanacaq.",
    topology: {
      devices: [
        { name: "PC-A", type: "pc", x: 110, y: 100 },
        { name: "SW1", type: "switch", x: 320, y: 100 },
        { name: "SW2", type: "switch", x: 320, y: 220 }
      ],
      links: [
        { a: "PC-A", ai: "", b: "SW1", bi: "Gi0/1", label: "Access" },
        { a: "SW1", ai: "Gi0/24", b: "SW2", bi: "Gi0/24", label: "Trunk" }
      ]
    },
    devices: ["SW1", "SW2"],
    init: {},
    tasks: [
      { text: "SW1-də VLAN 10 üçün root primary sazlayın.",
        check: (lab) => LAB_DEV(lab, "SW1").stp[10] === 24576 },
      { text: "SW2-də VLAN 10 üçün root secondary sazlayın.",
        check: (lab) => LAB_DEV(lab, "SW2").stp[10] === 28672 },
      { text: "SW1 Gi0/1 portunda PortFast və BPDU Guard aktivləşdirin.",
        check: (lab) => { const f = LAB_IF(lab, "SW1", "Gi0/1"); return !!f && f.portfast && f.bpduguard; } }
    ],
    explain: "Bu simulyatorda 'spanning-tree vlan 10 root primary' priority-ni 24576, secondary isə 28672 edir. Access portlarda 'spanning-tree portfast' və 'spanning-tree bpduguard enable' birlikdə istifadə olunur."
  },

  // ---------- 1.0 Network Infrastructure: SVI ve Katman 3 anahtar ----------
  {
    type: "lab", domain: 1,
    q: "SW1 multilayer switch-dir və VLAN 10 ilə VLAN 20 arasında routing edəcək. Hər iki VLAN üçün SVI sazlayın və yoxlayın.",
    topology: {
      devices: [
        { name: "PC-A", type: "pc", x: 110, y: 70 },
        { name: "PC-B", type: "pc", x: 110, y: 230 },
        { name: "SW1", type: "switch", x: 320, y: 150 }
      ],
      links: [
        { a: "PC-A", ai: "", b: "SW1", bi: "Gi0/1", label: "VLAN 10 (SALES)" },
        { a: "PC-B", ai: "", b: "SW1", bi: "Gi0/2", label: "VLAN 20 (ENG)" }
      ]
    },
    devices: ["SW1"],
    init: {
      "SW1": [
        "vlan 10", "name SALES", "exit",
        "vlan 20", "name ENG", "exit",
        "interface GigabitEthernet0/1", "switchport mode access", "switchport access vlan 10", "exit"
      ]
    },
    tasks: [
      { text: "SW1-də IP routing aktivləşdirin.",
        check: (lab) => LAB_DEV(lab, "SW1").routing === true },
      { text: "VLAN 10 SVI-yə 192.168.10.1/24 ünvanını verin və interfeysi aktivləşdirin.",
        check: (lab) => { const f = LAB_IF(lab, "SW1", "Vlan10"); return !!f && f.ip === "192.168.10.1" && f.mask === "255.255.255.0" && !f.shut; } },
      { text: "VLAN 20 SVI-yə 192.168.20.1/24 ünvanını verin və interfeysi aktivləşdirin.",
        check: (lab) => { const f = LAB_IF(lab, "SW1", "Vlan20"); return !!f && f.ip === "192.168.20.1" && f.mask === "255.255.255.0" && !f.shut; } },
      { text: "SW1-dən 192.168.20.1 ünvanına ping göndərin və uğurlu olduğunu yoxlayın.",
        check: (lab) => lab.pings.some((p) => p.dev === "SW1" && p.ip === "192.168.20.1" && p.ok) }
    ],
    explain: "Layer 3 switch-də 'ip routing' aktivləşdirilir; hər VLAN üçün 'interface vlan <id>' ilə SVI yaradılıb IP verilir. Real cihazda SVI up olması üçün VLAN və ona aid port aktiv olmalıdır."
  },

  // ---------- 3.0 IP Routing: statik yollar ----------
  {
    type: "lab", domain: 3,
    q: "R1, R2-yə 10.0.12.0/30 şəbəkəsi ilə qoşulub. R1-də 192.168.2.0/24 üçün statik route və ehtiyat default route sazlayın.",
    topology: {
      devices: [
        { name: "PC1", type: "pc", x: 110, y: 150 },
        { name: "R1", type: "router", x: 320, y: 150 },
        { name: "R2", type: "router", x: 540, y: 150 },
        { name: "PC2", type: "pc", x: 540, y: 260 }
      ],
      links: [
        { a: "PC1", ai: "", b: "R1", bi: "Gi0/1", label: "192.168.1.0/24" },
        { a: "R1", ai: "Gi0/0", b: "R2", bi: "Gi0/0", label: "10.0.12.0/30" },
        { a: "R2", ai: "Gi0/1", b: "PC2", bi: "", label: "192.168.2.0/24" }
      ]
    },
    devices: ["R1"],
    init: {},
    tasks: [
      { text: "R1 Gi0/0 interfeysinə 10.0.12.1/30 verin və aktivləşdirin.",
        check: (lab) => { const f = LAB_IF(lab, "R1", "Gi0/0"); return !!f && f.ip === "10.0.12.1" && f.mask === "255.255.255.252" && !f.shut; } },
      { text: "R1 Gi0/1 interfeysinə 192.168.1.1/24 verin və aktivləşdirin.",
        check: (lab) => { const f = LAB_IF(lab, "R1", "Gi0/1"); return !!f && f.ip === "192.168.1.1" && f.mask === "255.255.255.0" && !f.shut; } },
      { text: "R1-də 192.168.2.0/24 üçün next-hop 10.0.12.2 olan statik route əlavə edin.",
        check: (lab) => LAB_DEV(lab, "R1").routes.some((r) => r.net === "192.168.2.0" && r.mask === "255.255.255.0" && r.nh === "10.0.12.2" && r.ad === 1) },
      { text: "R1-də floating default route əlavə edin: 0.0.0.0/0, next-hop 10.0.12.2, AD 200.",
        check: (lab) => LAB_DEV(lab, "R1").routes.some((r) => r.net === "0.0.0.0" && r.mask === "0.0.0.0" && r.nh === "10.0.12.2" && r.ad === 200) },
      { text: "R1-dən 10.0.12.2 ünvanına ping göndərin və uğurlu olduğunu yoxlayın.",
        check: (lab) => lab.pings.some((p) => p.dev === "R1" && p.ip === "10.0.12.2" && p.ok) }
    ],
    explain: "Statik route 'ip route <network> <mask> <next-hop>' ilə əlavə olunur. Ehtiyat route üçün AD dinamik route-dan yüksək (məsələn, 200) qoyulur. Bu sadələşdirilmiş lab-da ping bağlı subnet əsasında yoxlanır."
  },

  // ---------- 3.0 IP Routing: OSPF ----------
  {
    type: "lab", domain: 3,
    q: "R1-də OSPFv2 sazlayın. İki bağlı şəbəkəni area 0-a daxil edin və router ID təyin edin.",
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
        "interface GigabitEthernet0/1", "ip address 192.168.1.1 255.255.255.0", "no shutdown", "exit"
      ]
    },
    tasks: [
      { text: "R1-də OSPF process 1 yaradın.",
        check: (lab) => !!LAB_DEV(lab, "R1").ospf && LAB_DEV(lab, "R1").ospf.pid === 1 },
      { text: "10.0.12.0/30 şəbəkəsini area 0-a daxil edin.",
        check: (lab) => !!LAB_DEV(lab, "R1").ospf && LAB_DEV(lab, "R1").ospf.nets.some((n) => n.net === "10.0.12.0" && n.wild === "0.0.0.3" && n.area === "0") },
      { text: "192.168.1.0/24 şəbəkəsini area 0-a daxil edin.",
        check: (lab) => !!LAB_DEV(lab, "R1").ospf && LAB_DEV(lab, "R1").ospf.nets.some((n) => n.net === "192.168.1.0" && n.wild === "0.0.0.255" && n.area === "0") },
      { text: "OSPF router ID dəyərini 1.1.1.1 təyin edin.",
        check: (lab) => !!LAB_DEV(lab, "R1").ospf && LAB_DEV(lab, "R1").ospf.rid === "1.1.1.1" }
    ],
    explain: "OSPF 'router ospf <pid>' ilə başlanır. 'network <network> <wildcard> area <id>' uyğun interfeysləri area-ya daxil edir. /30 üçün wildcard 0.0.0.3, /24 üçün 0.0.0.255-dir."
  },

  // ---------- 4.0 Network Services: ACL ve NAT ----------
  {
    type: "lab", domain: 4,
    q: "R1-də daxili şəbəkə (192.168.1.0/24) və WAN arasında NAT interfeys rollarını və trafik filtrləməsini sazlayın.",
    topology: {
      devices: [
        { name: "PC1", type: "pc", x: 110, y: 150 },
        { name: "R1", type: "router", x: 320, y: 150 },
        { name: "ISP", type: "router", x: 540, y: 150 }
      ],
      links: [
        { a: "PC1", ai: "", b: "R1", bi: "Gi0/1", label: "Daxili şəbəkə (inside)" },
        { a: "R1", ai: "Gi0/0", b: "ISP", bi: "", label: "WAN (outside)" }
      ]
    },
    devices: ["R1"],
    init: {
      "R1": [
        "interface GigabitEthernet0/0", "ip address 10.0.12.1 255.255.255.252", "no shutdown", "exit",
        "interface GigabitEthernet0/1", "ip address 192.168.1.1 255.255.255.0", "no shutdown", "exit"
      ]
    },
    tasks: [
      { text: "Gi0/1 interfeysini NAT inside, Gi0/0 interfeysini NAT outside kimi təyin edin.",
        check: (lab) => { const a = LAB_IF(lab, "R1", "Gi0/1"), b = LAB_IF(lab, "R1", "Gi0/0"); return !!a && !!b && a.nat === "inside" && b.nat === "outside"; } },
      { text: "192.168.1.0/24 şəbəkəsinə icazə verən standart ACL 10 yaradın.",
        check: (lab) => { const acl = LAB_DEV(lab, "R1").acl["10"]; return !!acl && acl.some((e) => e.action === "permit" && e.net === "192.168.1.0" && e.wild === "0.0.0.255"); } },
      { text: "ACL 10-u Gi0/1 interfeysinə inbound (in) istiqamətdə tətbiq edin.",
        check: (lab) => { const f = LAB_IF(lab, "R1", "Gi0/1"); return !!f && f.aclIn === "10"; } }
    ],
    explain: "NAT rolları 'ip nat inside' və 'ip nat outside' ilə təyin edilir. ACL 'access-list <id> permit <network> <wildcard>' ilə yaradılır və 'ip access-group <id> in' ilə tətbiq olunur. Bu lab ünvan çevirmə qaydasını deyil, interfeys rolları və ACL-i yoxlayır."
  },

  // ---------- 5.0 Network Operations: yönetim ----------
  {
    type: "lab", domain: 5,
    q: "R1 üçün əsas idarəetmə sazlamalarını tamamlayın: hostname, syslog server və interfeys description.",
    topology: {
      devices: [
        { name: "R1", type: "router", x: 320, y: 150 },
        { name: "R2", type: "router", x: 540, y: 150 },
        { name: "SYSLOG", type: "pc", x: 320, y: 40 }
      ],
      links: [
        { a: "R1", ai: "Gi0/0", b: "R2", bi: "Gi0/0", label: "WAN" }
      ]
    },
    devices: ["R1"],
    init: {},
    tasks: [
      { text: "Hostname-i 'EDGE-R1' edin.",
        check: (lab) => LAB_DEV(lab, "R1").hostname === "EDGE-R1" },
      { text: "Syslog server ünvanını 10.0.0.50 təyin edin.",
        check: (lab) => LAB_DEV(lab, "R1").logHosts.indexOf("10.0.0.50") !== -1 },
      { text: "Gi0/0 interfeysinin description dəyərini 'WAN to R2' edin.",
        check: (lab) => { const f = LAB_IF(lab, "R1", "Gi0/0"); return !!f && f.desc === "WAN to R2"; } }
    ],
    explain: "Cihazın adı 'hostname' ilə dəyişir və prompt-da görünür. Syslog üçün 'logging host <ip>', interfeys izahı üçün 'description <text>' istifadə olunur."
  }
);
