// Get all data from the database at once
const getData = () => {
  const items = [
    {
      name: "Suzie Q",
      developer: "Heissmann Acoustics",
      price: null,
      enclosure: "CB w Series Cap",
      range: "Full Range",
      f3: 49,
      specialty: "",
      height: 453,
      width: 280,
      depth: 265,
      url: "https://heissmann-acoustics.de/suzie/"
    },
    {
      name: "Little Yellow Cab",
      developer: "Don Highend",
      price: null,
      enclosure: "CB w Series Cap",
      range: "Full Range",
      f3: 40,
      specialty: "",
      height: 415,
      width: 240,
      depth: 280,
      url: "http://www.donhighend.de/?page_id=3212"
    },
    {
      name: "Disco-M",
      developer: "Heissmann Acoustics",
      price: null,
      enclosure: "CB w Series Cap",
      range: "Full Range",
      f3: 46,
      specialty: "",
      height: 440,
      width: 250,
      depth: 300,
      url: "https://heissmann-acoustics.de/disco-m/"
    },
    {
      name: "Cinetor-Evo",
      developer: "Heissmann Acoustics",
      price: null,
      enclosure: "Bass Reflex",
      range: "Full Range",
      f3: 55,
      specialty: "",
      height: 380,
      width: 200,
      depth: 280,
      url: "https://heissmann-acoustics.de/cinetor-evo/"
    },
    {
      name: "DXT-MON",
      developer: "Heissmann Acoustics",
      price: null,
      enclosure: "Bass Reflex",
      range: "Full Range",
      f3: 54,
      specialty: "Passive Membrane",
      height: 308,
      width: 204,
      depth: 244,
      url: "https://heissmann-acoustics.de/dxt-mon/"
    },
    {
      name: "DXT-MON-RLY",
      developer: "Heissmann Acoustics",
      price: null,
      enclosure: "Bass Reflex",
      range: "Full Range",
      f3: 56,
      specialty: "",
      height: 324,
      width: 200,
      depth: 254,
      url: "https://heissmann-acoustics.de/dxt-mon-rly/"
    },
    {
      name: "DXT-MON 182",
      developer: "Heissmann Acoustics",
      price: null,
      enclosure: "Closed Box",
      range: "Full Range",
      f3: 36,
      specialty: "Passive Membrane",
      height: 380,
      width: 224,
      depth: 338,
      url: "https://heissmann-acoustics.de/dxt-mon-182/"
    },
    {
      name: "Twiggy BR",
      developer: "herr_der_ringe",
      price: null,
      enclosure: "Bass Reflex",
      range: "Full Range",
      f3: null,
      specialty: "",
      height: 260,
      width: 129,
      depth: 214,
      url: "http://www.hifi-forum.de/index.php?action=browseT&forum_id=267&thread=1218"
    },
    {
      name: "Piccola P",
      developer: "AOS",
      price: 369.00,
      enclosure: "Closed Box",
      range: "Full Range",
      f3: 85,
      specialty: "Passive Membrane",
      height: 202,
      width: 132,
      depth: 150,
      url: "https://www.aos-lautsprecher.de/lautsprecherkits/studio/piccola-p/"
    },
    {
      name: "Microspk S",
      developer: "Quint Audio",
      price: 258.00,
      enclosure: "Closed Box",
      range: "Full Range",
      f3: 60,
      specialty: "",
      height: 300,
      width: 90,
      depth: 140,
      url: "https://quint-store.com/lautsprecher-bausaetze/kompaktlautsprecher/microspeaker-s"
    },
    {
      name: "Microspk µ",
      developer: "Quint Audio",
      price: 178.00,
      enclosure: "Closed Box",
      range: "Full Range",
      f3: 60,
      specialty: "",
      height: 150,
      width: 90,
      depth: 140,
      url: "https://quint-store.com/lautsprecher-bausaetze/kompaktlautsprecher/microspeaker"
    },
    {
      name: "The Bantams",
      developer: "tomzarbo",
      price: null,
      enclosure: "Closed Box",
      range: "Full Range",
      f3: 50,
      specialty: "Passive Membrane",
      height: 165,
      width: 114,
      depth: 127,
      url: "https://techtalk.parts-express.com/forum/speaker-project-gallery/1304991-the-bantams-micro-speaker-system"
    },
    {
      name: "Bantam Onyx",
      developer: "audio.novize",
      price: null,
      enclosure: "Closed Box",
      range: "Full Range",
      f3: 50,
      specialty: "Passive Membrane",
      height: 170,
      width: 115,
      depth: 146,
      url: "http://www.hifi-forum.de/viewthread-205-1154.html"
    },
    {
      name: "NeXT-Monitor",
      developer: "Alexander Wein",
      price: 880,
      enclosure: "Closed Box",
      range: "Full Range",
      f3: null,
      specialty: "Passive Membrane",
      height: 350,
      width: 198,
      depth: 299,
      url: "https://www.lautsprechershop.de/hifi/next_monitor.htm"
    },
    {
      name: "Illuminata 15",
      developer: "Bernd Timmermanns",
      price: null,
      enclosure: "CB w Series Cap",
      range: "Full Range",
      f3: 50,
      specialty: "",
      height: 300,
      width: 180,
      depth: 246,
      url: "https://www.lautsprechershop.de/hifi/illuminata15.htm"
    },
    {
      name: "55 plus, K+T 6/2019",
      developer: "Thomas Schmidt & Holger Barske",
      price: 522,
      enclosure: "Closed Box",
      range: "Full Range",
      f3: null,
      specialty: "",
      height: 90,
      width: 1200,
      depth: 170,
      url: "https://www.lautsprechershop.de/hifi/55_plus.htm"
    },
    {
      name: "Mini-Monitor Basic Mk2, Hobby Hifi 1/2014",
      developer: "Bernd Timmermanns",
      price: 226,
      enclosure: "Bass Reflex",
      range: "Full Range",
      f3: null,
      specialty: "",
      height: 400,
      width: 200,
      depth: 280,
      url: "https://www.lautsprechershop.de/hifi/minimonitor_basic_mk2.htm"
    },
    {
      name: "MiniSat Basic, Hobby Hifi 3/2014",
      developer: "Bernd Timmermanns",
      price: 226,
      enclosure: "Closed Box",
      range: "Full Range",
      f3: null,
      specialty: "",
      height: 282,
      width: 174,
      depth: 200,
      url: "https://www.lautsprechershop.de/hifi/zy2_minisat_basic.htm"
    },
    {
      name: "SAK 141",
      developer: "ASE",
      price: 268.00,
      enclosure: "Bass Reflex",
      range: "Full Range",
      f3: 55,
      specialty: "",
      height: 262,
      width: 160,
      depth: 215,
      url: "http://www.ase-scanspeak.de/b_startairkit.html"
    },
    {
      name: "SAK 151",
      developer: "ASE",
      price: 272.00,
      enclosure: "Bass Reflex",
      range: "Full Range",
      f3: 50,
      specialty: "",
      height: 325,
      width: 190,
      depth: 256,
      url: "http://www.ase-scanspeak.de/b_startairkit.html"
    },
    {
      name: "ScaMo 15AMT",
      developer: "Bernd Timmermanns",
      price: null,
      enclosure: "Bass Reflex",
      range: "Full Range",
      f3: null,
      specialty: "",
      height: 360,
      width: 180,
      depth: 270,
      url: "https://www.lautsprechershop.de/hifi/scamo15_amt.htm"
    },
    {
      name: "CT227 MK3",
      developer: "Quint Audio",
      price: null,
      enclosure: "Bass Reflex",
      range: "Full Range",
      f3: 50,
      specialty: "",
      height: 240,
      width: 124,
      depth: 202,
      url: "https://quint-store.com/ct227-mk3"
    },
    {
      name: "Fiancino",
      developer: "Don Highend",
      price: null,
      enclosure: "CB w Series Cap",
      range: "Full Range",
      f3: 60,
      specialty: "",
      height: 190,
      width: 190,
      depth: 190,
      url: "https://www.donhighend.de/?page_id=7349"
    },
    {
      name: "CT227 XT",
      developer: "Quint Audio",
      price: 250,
      enclosure: "Bass Reflex",
      range: "Full Range",
      f3: 60,
      specialty: "",
      height: 310,
      width: 124,
      depth: 202,
      url: "https://quint-store.com/lautsprecher-bausaetze/kompaktlautsprecher/ct227-xt"
    },
    {
      name: "CT 298",
      developer: "Thomas Schmidt ",
      price: 234.00,
      enclosure: "Bass Reflex",
      range: "Full Range",
      f3: null,
      specialty: "",
      height: 195,
      width: 120,
      depth: 140,
      url: "https://www.lautsprechershop.de/hifi/ct298.htm"
    },
    {
      name: "CC",
      developer: "Roul",
      price: null,
      enclosure: "CB w Series Cap",
      range: "Full Range",
      f3: 40,
      specialty: "",
      height: 350,
      width: 230,
      depth: 240,
      url: "https://www.roul-diy.de/cc/"
    },
    {
      name: "In Between",
      developer: "Don Highend & Gazza",
      price: null,
      enclosure: "TQWT",
      range: "Full Range",
      f3: 50,
      specialty: "",
      height: 282,
      width: 142,
      depth: 241,
      url: "https://www.der-akustische-untergrund.de/speakers/projects-for-beginners/in-between/"
    },
    {
      name: "Rayo",
      developer: "Der Akustische Untergrund",
      price: null,
      enclosure: "Bass Reflex",
      range: "Full Range",
      f3: 100,
      specialty: "",
      height: 300,
      width: 180,
      depth: 250,
      url: "https://www.der-akustische-untergrund.de/speakers/intermediate-projects/rayo/"
    },
    {
      name: "Wavecone MK2",
      developer: "Don Highend",
      price: null,
      enclosure: "Closed Box",
      range: "Full Range",
      f3: 47,
      specialty: "",
      height: 450,
      width: 290,
      depth: 390,
      url: "https://www.donhighend.de/?page_id=8664"
    },
    {
      name: "El Compacto",
      developer: "Wilke Borchers",
      price: 180,
      enclosure: "Bass Reflex",
      range: "Full Range",
      f3: 43,
      specialty: "",
      height: 380,
      width: 200,
      depth: 308,
      url: "https://www.der-akustische-untergrund.de/speakers/d-a-u-fb-group-members-projects/el-compacto/"
    }
  ];

  return items;
};

export { getData }; 