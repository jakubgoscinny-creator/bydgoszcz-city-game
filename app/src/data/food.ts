// Real, verified places (checked July 2026 against official sites, local
// press, and review portals). Keep addresses in sync with sources — see the
// source URLs on each entry.

export type FoodPlace = {
  slug: string
  name: string
  address: string
  kind: string
  summary: string
  familyNote: string
  hoursNote?: string
  adultsOnly?: boolean
  nearStopId?: string
  mapQuery: string
  sourceUrl: string
}

export const foodPlaces: FoodPlace[] = [
  {
    slug: 'mlynek-bistro',
    name: 'MŁYNEK Bistro',
    address: 'ul. Świętej Trójcy 8',
    kind: 'Casual bistro lunch',
    summary:
      'A small neighbourhood bistro near the mills — ciabattas piled with pulled pork, bowls, udon with hoisin, and picnic baskets you can carry to the riverside. Their motto translates as "more ham than bread".',
    familyNote:
      "Relaxed counter-style ordering, quick food, and the picnic-basket option means the kids can eat on the grass by the water. The natural lunch pairing for the Rother's Mills stretch.",
    hoursNote: 'Wed–Sun 10:00–19:00, or until they sell out. Closed Mon–Tue.',
    nearStopId: 'rother-inside',
    mapQuery: 'MŁYNEK Bistro, Świętej Trójcy 8, Bydgoszcz, Poland',
    sourceUrl: 'https://mlynek-bistro.vercel.app/',
  },
  {
    slug: 'cukiernia-katarynka',
    name: 'Cukiernia Katarynka',
    address: 'ul. Batorego 4',
    kind: 'Old-town patisserie',
    summary:
      'A proper Bydgoszcz cake shop just off the Old Market Square: everything made in-house — cakes, ice cream, waffles, cream-filled rurki, croissants.',
    familyNote:
      'Strong kid magnetism — this is the "we found the cake shop" moment a minute from the very first stop of the walk.',
    hoursNote: 'Mon–Fri 8:00–17:00, Sat–Sun 10:00–17:00.',
    nearStopId: 'old-market',
    mapQuery: 'Cukiernia Katarynka, Batorego 4, Bydgoszcz, Poland',
    sourceUrl: 'https://katarynkabydgoszcz.pl/',
  },
  {
    slug: 'pierogarnia-stary-mlyn',
    name: 'Pierogarnia Stary Młyn',
    address: 'ul. Poznańska 4/2',
    kind: 'Traditional pierogi',
    summary:
      'Handmade pierogi the proper Polish way — boiled, baked, veggie, and sweet dessert varieties — served in a rustic old-mill room with timber beams and windows looking over the Brda toward Mill Island.',
    familyNote:
      'The most Polish meal of the trip, one riverside street from the island. Sweet pierogi with cream are a dependable kid win.',
    hoursNote: 'Opens daily at 11:03 (yes, really); closes around 20:56 Sun–Thu, later Fri–Sat.',
    nearStopId: 'mill-island',
    mapQuery: 'Pierogarnia Stary Młyn, Poznańska 4/2, Bydgoszcz, Poland',
    sourceUrl: 'https://www.pierogarnie.com/en/restauracje/old-mill-bydgoszcz/',
  },
  {
    slug: 'wedel-pijalnia',
    name: 'E. Wedel Pijalnia Czekolady',
    address: 'ul. Mostowa 3',
    kind: 'Chocolate lounge',
    summary:
      "The chocolate-drinking lounge of E. Wedel, Poland's heritage chocolate maker — thick hot (or cold) drinking chocolate, hand-made pralines, cakes, and pancakes, on the pedestrian street by the bridge.",
    familyNote:
      'Pure kid magnetism and a genuine Polish institution — the natural sweet stop on the Mostowa stretch of the walk.',
    hoursNote: 'Open daily 10:00–21:00.',
    nearStopId: 'mostowa',
    mapQuery: 'E. Wedel Pijalnia Czekolady, Mostowa 3, Bydgoszcz, Poland',
    sourceUrl: 'https://wedelpijalnie.pl/',
  },
  {
    slug: 'bromberg-kaffee',
    name: 'Bromberg Kaffee',
    address: 'ul. Gdańska 16',
    kind: 'Specialty coffee',
    summary:
      'A specialty roastery-café in a heritage tenement on Gdańska Street — they roast their own beans, and the brick-and-vintage room comes with house-made pastries and loose-leaf teas.',
    familyNote:
      'The grown-up coffee moment of the day, right on the Gdańska Street leg. Kids get a pastry; adults get the best cup on the route.',
    nearStopId: 'gdanska',
    mapQuery: 'Bromberg Kaffee, Gdańska 16, Bydgoszcz, Poland',
    sourceUrl: 'https://bromberg.eu/',
  },
  {
    slug: 'pasibus',
    name: 'Pasibus',
    address: 'Stary Rynek 15',
    kind: 'Burgers on the square',
    summary:
      'A much-loved Polish burger chain that started as a Wrocław food truck — proper beef burgers, signature sauces, and loaded fries, right on the Old Market Square.',
    familyNote:
      'Casual, buzzy, and unmissable for burger-minded kids. Opens at noon, so it works for lunch but not an early bite.',
    hoursNote: 'Mon–Thu & Sun 12:00–23:00, Fri–Sat 12:00–01:00.',
    nearStopId: 'old-market',
    mapQuery: 'Pasibus, Stary Rynek 15, Bydgoszcz, Poland',
    sourceUrl: 'https://pasibus.pl/lokalizacje/bydgoszcz/bydgoszcz/',
  },
  {
    slug: 'luizjana',
    name: 'Restauracja Luizjana',
    address: 'ul. Długa 27',
    kind: 'New Orleans sit-down',
    summary:
      'A Creole and Cajun restaurant inspired by the American South — duck gumbo, jambalaya-style plates, burgers, and desserts, served in a colonial-style room with blues and jazz on the speakers.',
    familyNote:
      'A proper sit-down dinner rather than a quick snack, but genuinely family-ready: there is a dedicated kids\' menu, and the "taste of New Orleans" theme is a fun story in itself.',
    hoursNote: 'Mon–Thu 12:00–22:00, Fri–Sat 12:00–23:00, Sun 12:00–21:00.',
    nearStopId: 'old-market',
    mapQuery: 'Restauracja Luizjana, Długa 27, Bydgoszcz, Poland',
    sourceUrl: 'https://restauracjaluizjana.pl/',
  },
  {
    slug: 'vansa-ghar',
    name: 'Vansa Ghar',
    address: 'ul. Dworcowa 96',
    kind: 'Indian & Nepalese',
    summary:
      'Indian and Nepalese cooking from chefs with seventeen years at the stove — butter chicken, malai tikka, paneer, samosas, and rasgulla for afterwards, in a warm, cosy room.',
    familyNote:
      'Great for a family dinner if anyone is craving a curry — mild dishes are easy to order, and the staff are used to families.',
    hoursNote: 'Open daily 12:00–20:00.',
    mapQuery: 'Vansa Ghar, Dworcowa 96, Bydgoszcz, Poland',
    sourceUrl: 'https://vansaghar.pl/',
  },
  {
    slug: 'sultan-saray',
    name: 'Sułtan Saray',
    address: 'ul. Jagiellońska 84',
    kind: 'Turkish kebab & grill',
    summary:
      'A casual Turkish grill serving döner in a bun, dürüm in house-baked lavash straight from the oven, grilled lamb, soups, and baklava — hearty portions at friendly prices.',
    familyNote:
      'Quick, counter-style, and generous — a solid low-effort refuel if the family is out near Jagiellońska, with wraps and baklava as easy kid wins.',
    hoursNote: 'Roughly 11:00/12:00 until 21:30/22:00 daily — worth a same-day check.',
    mapQuery: 'Sułtan Saray, Jagiellońska 84, Bydgoszcz, Poland',
    sourceUrl: 'https://sultan-saray.menu.pl/',
  },
  {
    slug: 'ogien',
    name: 'OGIEŃ Craft Beer & Pizza',
    address: 'ul. Teofila Magdzińskiego 7',
    kind: 'Wood-fired pizza',
    summary:
      'Pizza from a wood-fired oven with Italian ingredients, plus craft beer for the adults. There is also an OGIEŃ food truck up at Gdańska 124 if you are exploring north.',
    familyNote:
      'Pizza is the universal family peace treaty — and the wood-fired oven gives the kids something to watch while they wait.',
    nearStopId: 'old-market',
    mapQuery: 'OGIEŃ Craft Beer & Pizza, Teofila Magdzińskiego 7, Bydgoszcz, Poland',
    sourceUrl: 'https://www.ogienbydgoszcz.pl/',
  },
  {
    slug: 'over-the-under',
    name: 'Over The Under PUB',
    address: 'ul. Dworcowa 51',
    kind: 'Live-music pub',
    summary:
      'An independent concert pub with weekly live gigs, jam sessions, open-stage nights, and stand-up — a partner of the UNESCO "Bydgoszcz City of Music" story.',
    familyNote:
      'The most music-filled room in town most nights of the week — worth checking the gig calendar for what\'s on while you\'re here.',
    mapQuery: 'Over The Under PUB, Dworcowa 51, Bydgoszcz, Poland',
    sourceUrl: 'https://overtheunder.pl/pub/',
  },
  {
    slug: 'younger-bar',
    name: 'Younger Bar',
    address: 'ul. Zaułek 12',
    kind: 'Sports bar — adults',
    summary:
      "Bydgoszcz's first sports bar, steps from the Old Market — eight screens of live football and boxing, karaoke Fridays, with smash burgers from the Young Burger kitchen next door.",
    familyNote:
      'Opens at 17:00 on weekdays and leans adult in the evening — treat it as a grown-ups\' option, though the Young Burger counter next door feeds anyone.',
    adultsOnly: true,
    mapQuery: 'Younger Bar, Zaułek 12, Bydgoszcz, Poland',
    sourceUrl: 'https://www.menumiasta.pl/restauracje/younger-bar-x-sports-bar',
  },
]
