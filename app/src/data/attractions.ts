// "Notable attractions" — things worth knowing about beyond the walking
// route itself. Every entry verified July 2026 against live sources (see
// links/sourceUrl); events are specific to the family's visit, July 9-12, 2026.
// NOTE: Myślęcinek's miniature railway burned down in 2011 — never mention it.

import operaNovaPhoto from '../assets/attractions/opera-nova.webp'
import myslecinekPhoto from '../assets/attractions/myslecinek.webp'
import zooPhoto from '../assets/attractions/bydgoszcz-zoo.webp'
import soapMuseumPhoto from '../assets/attractions/soap-museum.webp'
import rzekaMuzykiPhoto from '../assets/events/rzeka-muzyki.webp'
import speedwayPhoto from '../assets/events/speedway-polonia.webp'
import triathlonPhoto from '../assets/events/triathlon-bydgoszcz.webp'
import mlynyLatoPhoto from '../assets/events/mlyny-lato.webp'

export type AttractionLink = {
  label: string
  url: string
}

export type Attraction = {
  slug: string
  name: string
  kind: string
  summary: string[]
  practicalNote?: string
  gettingThere?: string
  links?: AttractionLink[]
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
  slug: string
  dates: string
  name: string
  venue: string
  note: string
  details?: string[]
  links?: AttractionLink[]
  photo?: {
    src: string
    alt: string
    credit?: string
    creditUrl?: string
  }
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
      'One 28-seat boat this season, and cruises sell out in pre-sale — book online before the trip, or in person at the Bydgoszcz Information Centre (ul. Batorego 2). No on-board sales.',
    gettingThere:
      'Departs Rybi Rynek at the Old Town end of the trail — about 15–20 minutes from Garbary along the riverside promenade.',
    links: [
      { label: 'Book tickets online', url: 'https://visitbydgoszcz.pl/pl/rejsy' },
    ],
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
    gettingThere:
      'It is on the trail — the footbridge from Mill Island lands right beside it at the Mill Island stop.',
    links: [{ label: 'Website & season programme', url: 'https://www.opera.bydgoszcz.pl/en' }],
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
      'Daily 9:00–19:00 in July, last entry 18:30. Tickets 38/28 zł, family (2+2) 105 zł, under-3s 2 zł — buy at the gate.',
    gettingThere:
      'Same trip as Myślęcinek: the ZaT replacement bus from Rondo Jagiellonów (~13 min, several per hour) — the tram loop is closed for rebuilding this year.',
    links: [{ label: 'Park & zoo website', url: 'https://www.myslecinek.pl/' }],
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
    gettingThere:
      'ZaT replacement bus from Rondo Jagiellonów along Gdańska (~13 min, 4–5 per hour) — the tram loop is being rebuilt all year. Expect extra transport changes on 11–12 July during the triathlon.',
    links: [{ label: 'Park website', url: 'https://www.myslecinek.pl/' }],
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
      'Daily 10:00–18:00, sessions on the hour, max 35 people and they sell out — book days ahead. Tickets 39/35 zł.',
    gettingThere:
      'Długa 13–17, two minutes from the Old Market Square — easy to bolt onto the first stop of the trail.',
    links: [
      { label: 'Book tickets online (Polish sessions)', url: 'https://bilety.muzeummydla.pl' },
      { label: 'Email to arrange English', url: 'mailto:warsztaty@muzeummydla.pl' },
    ],
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
    practicalNote: 'Free entry. Tue–Fri 10:00–18:00, Sat–Sun 12:00–16:00, closed Mondays.',
    gettingThere: 'A short walk west from the Garbary apartment, along the old canal (ul. Staroszkolna 10).',
    links: [{ label: 'Museum website', url: 'https://muzeumkanalu.pl/' }],
    mapQuery: 'Muzeum Kanału Bydgoskiego, Staroszkolna 10, Bydgoszcz, Poland',
    sourceUrl: 'https://muzeumkanalu.pl/',
  },
  {
    slug: 'exploseum',
    name: 'Exploseum',
    kind: 'For the grown-ups (and older kids)',
    summary: [
      'A striking museum inside a hidden WWII explosives factory in the forest — raw concrete halls, underground tunnels, and heavyweight history along a ~2 km walking route. Better for adults and older children than the youngest walkers.',
    ],
    practicalNote:
      'Tue–Sun 10:00–18:00 (last entry an hour before), closed Mondays. Permanent exhibitions are free on Thursdays — which includes Thursday 9 July. Guided tours need prior booking: +48 52 585 97 41.',
    gettingThere:
      'Out in the southern forest district — with kids, a taxi or ride-hail is the practical way there and back.',
    links: [{ label: 'Museum website', url: 'https://muzeum.bydgoszcz.pl/' }],
    mapQuery: 'Exploseum, Alfreda Nobla, Bydgoszcz, Poland',
    sourceUrl: 'https://muzeum.bydgoszcz.pl/',
  },
]

export const visitEvents: CityEvent[] = [
  {
    slug: 'open-air-cinema',
    dates: 'Thu 9 July, 19:00',
    name: 'Open-air cinema at Młyny Rothera',
    venue: "Rother's Mills terrace — free",
    note: 'The mills\' free "Młyny na Lato" summer programme screens the Polish comedy classic "Seksmisja" on the terrace.',
    details: [
      'Polish-language 1984 comedy, no subtitles expected — one for the grown-ups and the atmosphere rather than the kids. The mills\' summer board also lists free Friday-evening events, including a children\'s concert slot on Friday 10 July (18:00) — worth double-checking the programme on the day.',
    ],
    links: [{ label: 'Mills summer programme', url: 'https://mlynyrothera.pl/' }],
    photo: {
      src: mlynyLatoPhoto,
      alt: 'A summer event on the wooden terrace of Młyny Rothera.',
      credit: 'Photo: Paŭliuk Šapiećka, Wikimedia Commons, CC BY-SA 4.0',
      creditUrl:
        'https://commons.wikimedia.org/wiki/File:Urodziny_Rejewskiego_-_piknik_mi%C4%99dzypokoleniowy_2.jpg',
    },
  },
  {
    slug: 'triathlon',
    dates: 'Sat–Sun 11–12 July',
    name: 'Enea Bydgoszcz Triathlon',
    venue: 'City centre — free to watch',
    note: 'Poland\'s largest triathlon takes over the centre: swimmers riding the Brda\'s current, bikes on closed streets, and 25,000 spectators.',
    details: [
      'Over 5,000 athletes race distances from Super Sprint up to half-Ironman — and there are dedicated children\'s races, plus a finish-line tradition of athletes crossing with their kids. Watching is free from anywhere along the route; the riverbanks near Mill Island are prime.',
      'Plan around it: expect road closures and re-routed buses in the centre all weekend.',
    ],
    links: [{ label: 'Race programme & course maps', url: 'https://triathlonbydgoszcz.pl/' }],
    photo: {
      src: triathlonPhoto,
      alt: 'A triathlete raising an arm on the finish straight of the Enea Bydgoszcz Triathlon.',
      credit: 'Photo: Pit1233, Wikimedia Commons, CC0',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Bydgoszcz_Triathlon9_7-2017.jpg',
    },
  },
  {
    slug: 'frymark',
    dates: 'Sun 12 July, 9:30–13:00',
    name: 'Frymark market',
    venue: 'ul. Gdańska 47a — free entry',
    note: 'The weekly eco and regional food market — local cheese, bread, preserves, and crafts in the courtyard behind the Rywal building.',
    details: [
      'Especially handy this Sunday: it\'s a non-trading Sunday, so the big supermarkets are shut — this is where the good picnic supplies are.',
    ],
    links: [{ label: 'Market page', url: 'https://www.facebook.com/frymarkbydgoski' }],
    photo: undefined,
  },
  {
    slug: 'speedway',
    dates: 'Sun 12 July, 16:30',
    name: 'Speedway: Polonia Bydgoszcz vs Ostrów',
    venue: 'Polonia stadium — ticketed',
    note: 'Motorbikes with no brakes sliding around an oval track — speedway (żużel) is a Bydgoszcz institution and an easy thrill for sports-minded kids.',
    details: [
      'A real league fixture (Metalkas 2. Ekstraliga, round 11). One honest warning: it is VERY loud — bring ear protection for the youngest, locals do.',
    ],
    links: [{ label: 'Buy tickets', url: 'https://bilety.polonia.bydgoszcz.pl' }],
    photo: {
      src: speedwayPhoto,
      alt: 'Four speedway riders broadsiding through a corner at the Polonia stadium.',
      credit: 'Photo: Stanisław J. Radziński, Wikimedia Commons, CC BY-SA 2.5',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Stadion_Polonii_Bydgoszcz_(bieg).jpg',
    },
  },
  {
    slug: 'rzeka-muzyki',
    dates: 'Sun 12 July, 19:00',
    name: 'Rzeka Muzyki — free riverside concert',
    venue: 'Opera Nova amphitheatre, Mill Island — free',
    note: 'The summer concert series on the water: the Krystyna Stańko Quintet plays Jobim bossa nova ("W słońcu Bossa Novy") from the amphitheatre steps.',
    details: [
      'No tickets, no reservations — bring a blanket for the grass. If the steps fill up, the Kiepury footbridge and the opposite riverbank are the locals\' overflow spots. Concerts run every Sunday at 19:00 through the summer, so this is the city at its most charming.',
    ],
    links: [{ label: 'Series lineup', url: 'https://www.visitbydgoszcz.pl/' }],
    photo: {
      src: rzekaMuzykiPhoto,
      alt: 'A Rzeka Muzyki concert filling the Opera Nova amphitheatre steps beside the Brda.',
      credit: 'Photo: Pit1233, Wikimedia Commons, CC0',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Bdg_rzekamuzyki_2_8-2015.jpg',
    },
  },
]
