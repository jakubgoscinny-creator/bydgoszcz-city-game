// "Notable attractions" — things worth knowing about beyond the walking
// route itself. Every entry verified July 2026 against live sources (see
// sourceUrl); events are specific to the family's visit, July 9-12, 2026.
// NOTE: Myślęcinek's miniature railway burned down in 2011 — never mention it.

import operaNovaPhoto from '../assets/attractions/opera-nova.webp'
import myslecinekPhoto from '../assets/attractions/myslecinek.webp'
import zooPhoto from '../assets/attractions/bydgoszcz-zoo.webp'
import soapMuseumPhoto from '../assets/attractions/soap-museum.webp'

export type Attraction = {
  slug: string
  name: string
  kind: string
  summary: string[]
  practicalNote?: string
  mapQuery: string
  sourceUrl: string
  photo?: {
    src: string
    alt: string
    credit?: string
    creditUrl?: string
  }
}

export type CityEvent = {
  dates: string
  name: string
  venue: string
  note: string
  sourceUrl: string
}

export const attractions: Attraction[] = [
  {
    slug: 'water-tram',
    name: 'The water tram — Słonecznik',
    kind: 'On the water',
    summary: [
      'Bydgoszcz has a boat for a bus: Słonecznik ("Sunflower") is a solar-powered water tram — rooftop panels charge its electric motor, and it has been quietly humming along the Brda since 2008 at a stately 12 km/h.',
      'It sails daily in season from Rybi Rynek in the Old Town. The Staromiejska loop (about an hour, 35/30 zł) even passes through a river lock — the boat rides an elevator of water, which tends to be the best minute of any child\'s day.',
    ],
    practicalNote:
      'One 28-seat boat this season, and cruises sell out in pre-sale — book online ahead of the trip or at the Bydgoszcz Information Centre (ul. Batorego 2). No on-board sales.',
    mapQuery: 'Rybi Rynek, Bydgoszcz, Poland',
    sourceUrl: 'https://visitbydgoszcz.pl/pl/rejsy',
  },
  {
    slug: 'opera-nova',
    name: 'Opera Nova',
    kind: 'The landmark next door',
    summary: [
      'The shiny building of three giant interlocking rings across the water from Mill Island is the city\'s opera house — and one of the most patient buildings in Poland: construction started in 1973 and it opened in 2006, a 34-year build.',
      'In July the stage is on summer break (the season resumes in September, and interior tours are group-only by prior arrangement), so enjoy it the way locals do: from the footbridge and the island bank, where the rings meet the river. A brand-new fourth ring with a free public viewing terrace over the island is due to open during 2026 — worth a look in case it\'s ready.',
    ],
    mapQuery: 'Opera Nova, Marszałka Focha 5, Bydgoszcz, Poland',
    sourceUrl: 'https://www.opera.bydgoszcz.pl/en/about/the-opera-building-1.html',
    photo: {
      src: operaNovaPhoto,
      alt: 'Opera Nova\'s circular halls on the bend of the Brda at golden hour.',
      credit: 'Photo: Mariusz Guć, Wikimedia Commons, CC BY-SA 4.0',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Opera-nova.jpg',
    },
  },
  {
    slug: 'bydgoszcz-zoo',
    name: 'Bydgoszcz Zoo — Ogród Fauny Polskiej',
    kind: 'For the animal spotters',
    summary: [
      'A 14-hectare zoo devoted to Poland\'s own wildlife — bison, wolves, and lynx — plus one Siberian tiger who seems to have negotiated an exception.',
      'It sits inside Myślęcinek park (below), so it pairs naturally with a playground-and-picnic day.',
    ],
    practicalNote:
      'Daily 9:00–19:00 in July, last entry 18:30. Tickets 38/28 zł, family (2+2) 105 zł, under-3s 2 zł.',
    mapQuery: 'Ogród Fauny Polskiej, Gdańska 173-175, Bydgoszcz, Poland',
    sourceUrl: 'https://www.myslecinek.pl/',
    photo: {
      src: zooPhoto,
      alt: 'The entrance pavilion of the Bydgoszcz zoo in Myślęcinek.',
      credit: 'Photo: globalquiz.org, Wikimedia Commons, CC BY 3.0',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:%D0%97%D0%BE%D0%BE%D0%BF%D0%B0%D1%80%D0%BA-Bydgoszcz.jpg',
    },
  },
  {
    slug: 'myslecinek',
    name: 'Myślęcinek — the green lungs',
    kind: 'A day trip in itself',
    summary: [
      'Poland\'s largest city park — around 830 hectares of forest, meadows, and ponds a few kilometres north of the centre. This is not a stroll; it\'s a full family day.',
      'Beyond the zoo: a free 60-hectare botanical garden, free playgrounds, pony rides, a rope park with a route for ages 3+, and the brand-new "Zaczarowany Las" amusement park that opened in May 2026 (closed Mondays).',
    ],
    practicalNote:
      'Getting there in July 2026: the tram loop is being rebuilt, so take the ZaT replacement bus from Rondo Jagiellonów (~13 min, several per hour). Expect extra transport changes on 11–12 July during the triathlon.',
    mapQuery: 'Leśny Park Kultury i Wypoczynku Myślęcinek, Bydgoszcz, Poland',
    sourceUrl: 'https://www.myslecinek.pl/',
    photo: {
      src: myslecinekPhoto,
      alt: 'A pond and wooden footbridge in Myślęcinek park in summer.',
      credit: 'Photo: Pit1233, Wikimedia Commons, CC0',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Bdg_LKPiW_Myslecinek_pond1_6-2017.jpg',
    },
  },
  {
    slug: 'soap-museum',
    name: 'Museum of Soap and History of Dirt',
    kind: 'Book-ahead favourite',
    summary: [
      'A small, funny, hands-on museum about how humans got clean (and how long we didn\'t) — every visit is a guided 45–50 minute session that ends with making your own bar of soap to take home.',
      'English is available, with a catch: the online shop only sells the Polish session, but the museum has English-speaking guides and an English audio guide — email or call a few days ahead to arrange an English visit.',
    ],
    practicalNote:
      'Daily 10:00–18:00, sessions on the hour, max 35 people and they sell out — book days ahead. Tickets 39/35 zł. English: write to warsztaty@muzeummydla.pl or call +48 52 515 70 15 first.',
    mapQuery: 'Muzeum Mydła i Historii Brudu, Długa 13-17, Bydgoszcz, Poland',
    sourceUrl: 'https://muzeummydla.pl/',
    photo: {
      src: soapMuseumPhoto,
      alt: 'The Museum of Soap and History of Dirt storefront on Długa street.',
      credit: 'Photo: Pit1233, Wikimedia Commons, CC0',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Bdg_Dluga13_MuzeumMydla_1_6-2015.jpg',
    },
  },
  {
    slug: 'canal-museum',
    name: 'Bydgoszcz Canal Museum & kayaks',
    kind: 'On your doorstep',
    summary: [
      'Practically next door to Garbary: the little museum of the 18th-century Bydgoszcz Canal — the waterway that made your "almost an island" neighbourhood — with kayak rental on the old canal right beside it.',
      'Free to visit, and the shaded canal-side park with its historic locks is a lovely low-effort evening walk from the apartment.',
    ],
    practicalNote: 'Free entry; closed Mondays.',
    mapQuery: 'Muzeum Kanału Bydgoskiego, Bydgoszcz, Poland',
    sourceUrl: 'https://muzeumkanalu.pl/',
  },
  {
    slug: 'exploseum',
    name: 'Exploseum',
    kind: 'For the grown-ups (and older kids)',
    summary: [
      'A striking museum inside a hidden WWII explosives factory in the forest — raw concrete halls, underground tunnels, and heavyweight history. Better for adults and older children than the youngest walkers.',
    ],
    practicalNote:
      'Tue–Sun 10:00–18:00, closed Mondays. Permanent exhibitions are free on Thursdays — which includes Thursday 9 July.',
    mapQuery: 'Exploseum, Alfreda Nobla, Bydgoszcz, Poland',
    sourceUrl: 'https://muzeum.bydgoszcz.pl/',
  },
]

export const visitEvents: CityEvent[] = [
  {
    dates: 'Thu 9 July, 19:00',
    name: 'Open-air cinema at Młyny Rothera',
    venue: "Rother's Mills — free",
    note: 'The mills\' free summer programme screens the Polish comedy classic "Seksmisja" outdoors. Polish-language (no subtitles expected) — go for the atmosphere, or check the mills\' board for the rest of the week\'s free family programme.',
    sourceUrl: 'https://mlynyrothera.pl/',
  },
  {
    dates: 'Sat–Sun 11–12 July',
    name: 'Enea Bydgoszcz Triathlon',
    venue: 'City centre — free to watch',
    note: 'The centre turns into a race course for the weekend — swimmers in the Brda, bikes on closed streets, and kids\' races too. Great free spectacle; expect road closures and re-routed buses.',
    sourceUrl: 'https://triathlonbydgoszcz.pl/',
  },
  {
    dates: 'Sun 12 July, 9:30–13:00',
    name: 'Frymark market',
    venue: 'Old Town — free entry',
    note: 'A farmers-and-makers market — handy on a Sunday when the big shops are shut (cafés and restaurants stay open regardless).',
    sourceUrl: 'https://www.facebook.com/frymarkbydgoski',
  },
  {
    dates: 'Sun 12 July, 16:30',
    name: 'Speedway: Polonia Bydgoszcz vs Ostrów',
    venue: 'Polonia stadium — ticketed',
    note: 'Motorbikes with no brakes sliding around an oval track — speedway is a Bydgoszcz institution and an easy thrill for sports-minded kids.',
    sourceUrl: 'https://polonia.bydgoszcz.pl/',
  },
  {
    dates: 'Sun 12 July, 19:00',
    name: 'Rzeka Muzyki — free riverside concert',
    venue: 'Mill Island amphitheatre — free',
    note: 'The summer concert series on the water: the Krystyna Stańko Quintet plays bossa nova from the amphitheatre steps opposite Opera Nova. Bring a blanket; it\'s the city at its most charming.',
    sourceUrl: 'https://www.visitbydgoszcz.pl/',
  },
]
