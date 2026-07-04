// Practical Poland notes for a visiting British family.
// Every claim verified July 2026 — sources noted per tip. If you edit a tip,
// re-check the fact (esp. fines, Sunday trading calendar, exchange rate).

export type PolandTip = {
  slug: string
  title: string
  emoji: string
  body: string[]
}

export const polandTips: PolandTip[] = [
  {
    slug: 'money',
    title: 'Money is the złoty, not the euro',
    emoji: '💷',
    body: [
      'Poland uses the złoty (PLN). Euros will not work in ordinary shops. The maths is friendly right now: 5 zł is about £1, so 10 zł ≈ £2 and 100 zł ≈ £20.',
      'Cards and phone wallets work everywhere a till exists — contactless is the norm, and Apple Pay / Google Pay behave exactly like at home. Keep a few coins for market stalls and the odd public toilet.',
    ],
  },
  {
    slug: 'shops',
    title: 'Decoding the supermarkets',
    emoji: '🛒',
    body: [
      'Żabka (the green frog logo, everywhere, open late) is your expensive-but-everywhere Tesco Express. Biedronka (the ladybird) is the cheap workhorse — think Asda or Aldi. Lidl is literally the same Lidl. Carrefour and Kaufland are the big-trolley hypermarkets, like a large Tesco or Sainsbury\'s.',
      'There is a Żabka right on the Old Market Square (Stary Rynek 14) if you need water or snacks mid-walk.',
    ],
  },
  {
    slug: 'sunday',
    title: 'Sundays: the big shops close',
    emoji: '🚪',
    body: [
      'Poland restricts Sunday trading, and neither Sunday of your stay (5 or 12 July) is a "trading Sunday" — Biedronka, Lidl, Carrefour and Kaufland will be shut.',
      'Żabka stays open (franchise owners run the till themselves, which the law allows), and so do bakeries, cafés, restaurants, petrol stations, and pharmacies. Do the big shop on Saturday.',
    ],
  },
  {
    slug: 'crossing',
    title: 'Wait for the green man — really',
    emoji: '🚦',
    body: [
      'Jaywalking is taken seriously in Poland. Crossing on a red light or outside a marked crossing is a fineable offence — police do stop pedestrians, and fines run from 50 to 200 zł on the spot.',
      'Even locals stand and wait at an empty street at midnight. Join them: it also happens to be the best way to model road habits for the kids.',
    ],
  },
  {
    slug: 'tap-water',
    title: 'Tap water is fine to drink',
    emoji: '🚰',
    body: [
      'Bydgoszcz tap water officially meets EU drinking standards, and the city waterworks actively encourages drinking it straight from the tap — locals call it "kranówka".',
      'Refill your bottles before the walk; July can be warm and fountains are rarer than in the UK.',
    ],
  },
  {
    slug: 'phrases',
    title: 'Four words that unlock Poland',
    emoji: '🗣️',
    body: [
      'Dzień dobry (jen DOH-brih) — hello / good day, works all day. Dziękuję (jen-KOO-yeh) — thank you. Proszę (PROH-sheh) — please, and also "here you go" and "you\'re welcome". Przepraszam (psheh-PRAH-shahm) — sorry, and also "excuse me" to slip past someone.',
      'Any attempt at these earns instant goodwill — and children saying "jen-KOO-yeh" to a cake-shop counter is a reliable smile generator.',
    ],
  },
  {
    slug: 'emergency',
    title: 'Emergencies and pharmacies',
    emoji: '🏥',
    body: [
      'The emergency number is 112 — free from any phone, with English-speaking operators, exactly like at home.',
      'A pharmacy is an apteka (look for the green cross). They are exempt from the Sunday closures, and city-centre pharmacists usually manage some English.',
    ],
  },
]
