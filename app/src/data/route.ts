export type RouteStop = {
  id: string
  name: string
  strapline: string
  walkFromPrevious: string
  stayFor: string
  mapQuery: string
  imageUrl: string
  imageAlt: string
  lookFor: string
  kidFact: string
  adultFact: string
  mission: string
  bonus: string
  sourceLabel: string
  sourceUrl: string
}

export type PauseSpot = {
  name: string
  kind: string
  summary: string
  whyItWorks: string
  mapQuery: string
  sourceLabel: string
  sourceUrl: string
}

export const routeStops: RouteStop[] = [
  {
    id: 'old-town',
    name: 'Old Market Square & Cathedral',
    strapline: 'A medieval square, a Gothic church, and a tiny dose of wizard drama.',
    walkFromPrevious: 'Start here',
    stayFor: '20-25 min',
    mapQuery: 'Old Market Square and Bydgoszcz Cathedral, Bydgoszcz, Poland',
    imageUrl: 'https://visitbydgoszcz.pl/images/doswiadcz/co_zobaczyc/katedra3.jpg',
    imageAlt: "Bird's-eye view of Bydgoszcz Cathedral near the Old Town.",
    lookFor:
      'The white town hall, red-brick cathedral walls, the meridian line in the square, and the window where Master Twardowski appears.',
    kidFact:
      'At 13:13 and 21:13, Master Twardowski pops out of a window in the square like a city wizard on cue.',
    adultFact:
      'The square was laid out in 1346 by Casimir the Great, and the 18th meridian east is marked right through it.',
    mission:
      'Can you find the line in the pavement and the house where the wizard appears before you walk on?',
    bonus:
      'If you peek closely around the cathedral, there is even a tiny crowned eagle hidden in the downspout story.',
    sourceLabel: 'Bydgoszcz tourism: Cathedral and Old Town notes',
    sourceUrl: 'https://visitbydgoszcz.pl/en/explore/what-to-see/1393-bydgoszcz-cathedral',
  },
  {
    id: 'mill-island',
    name: 'Mill Island',
    strapline: 'Bydgoszcz turns into a river park full of bridges, lawns, and old brick warehouses.',
    walkFromPrevious: '5 min walk',
    stayFor: '20 min',
    mapQuery: 'Mill Island, Bydgoszcz, Poland',
    imageUrl: 'https://visitbydgoszcz.pl/images/doswiadcz/co_zobaczyc/wyspa.jpg',
    imageAlt: 'View of Mill Island in Bydgoszcz.',
    lookFor:
      'Water on both sides, low footbridges, old trees, grassy picnic spots, and the red brick buildings reflected in the canal.',
    kidFact:
      'This island feels like a secret green playground in the middle of the city, with bridges hopping from bank to bank.',
    adultFact:
      'Mill Island used to be an industrial powerhouse with mills, granaries, and even the royal mint making coins for the Polish king.',
    mission:
      'Count how many different bridges you can spot before you reach the next stop.',
    bonus:
      'It is one of the most photogenic places in Bydgoszcz because the water mirrors the old industrial skyline.',
    sourceLabel: 'Bydgoszcz tourism: Mill Island',
    sourceUrl: 'https://visitbydgoszcz.pl/en/explore/what-to-see/1413-mill-island-in-bydgoszcz',
  },
  {
    id: 'rother',
    name: "Rother's Mills",
    strapline: 'A giant red-brick mill complex that traded flour for culture, science, and terrace views.',
    walkFromPrevious: '4 min walk',
    stayFor: '15-20 min',
    mapQuery: "Młyny Rothera, Bydgoszcz, Poland",
    imageUrl: 'https://visitbydgoszcz.pl/images/odkryj/co_zobaczyc/mlyny-rothera-bydgoszcz-lm.jpg',
    imageAlt: "Rother's Mills in Bydgoszcz.",
    lookFor:
      'The bold red-brick buildings, the waterside steps, and the broad terrace vantage point over the Old Town.',
    kidFact:
      'It looks a bit like a huge brick castle that used to work very hard before becoming a place for ideas and stories.',
    adultFact:
      'This 19th-century industrial complex now hosts exhibitions, workshops, events, and a panoramic deck in the heart of the island.',
    mission:
      'Find the best viewpoint and decide which building would make the best hideout in a treasure hunt.',
    bonus:
      'This is the easiest built-in pause point on the route because the tourism site notes a cafe and bistro in the complex.',
    sourceLabel: "Bydgoszcz tourism: Rother's Mills",
    sourceUrl: 'https://visitbydgoszcz.pl/en/explore/what-to-see/4192-rother-s-mills',
  },
  {
    id: 'man-crossing',
    name: 'Man Crossing the River',
    strapline: 'The city suddenly becomes a balancing act above the Brda.',
    walkFromPrevious: '9 min walk',
    stayFor: '15 min',
    mapQuery: 'Przechodzący przez rzekę, Bydgoszcz, Poland',
    imageUrl: 'https://visitbydgoszcz.pl/images/doswiadcz/co_zobaczyc/przechodzacy.jpg',
    imageAlt: 'The Man Crossing the River sculpture in Bydgoszcz.',
    lookFor:
      'A figure balanced on a wire above the river, the granaries behind him, and one of the classic postcard views of Bydgoszcz.',
    kidFact:
      'He looks like a circus acrobat frozen in the middle of the sky, and yes, he really is hanging above the water.',
    adultFact:
      'Jerzy Kędziora unveiled the sculpture on 1 May 2004 to mark Poland joining the European Union, and the swallow nods to Andrzej Szwalbe from the Philharmonic story.',
    mission:
      'Stand on one leg for five seconds and see whether your balance is anywhere near as good as his.',
    bonus:
      'This is the perfect family-photo stop because the river, bridge, and granaries all stack into one frame.',
    sourceLabel: 'Bydgoszcz tourism: Man Crossing the River',
    sourceUrl: 'https://visitbydgoszcz.pl/en/explore/what-to-see/2558-man-crossing-the-river',
  },
  {
    id: 'deluge',
    name: 'Deluge Fountain',
    strapline: 'A dramatic fountain where the park tells a giant story in bronze and stone.',
    walkFromPrevious: '14 min walk',
    stayFor: '15-20 min',
    mapQuery: 'Deluge Fountain, Bydgoszcz, Poland',
    imageUrl: 'https://visitbydgoszcz.pl/images/odkryj/Ciekawostki/potop2.jpg',
    imageAlt: 'The Deluge Fountain in Bydgoszcz.',
    lookFor:
      'Big figures rising above the fountain basin, the mosaic around the water, and the shady paths of Kazimierz Wielki Park.',
    kidFact:
      'See if you can spot the bear, the snake, and the people trying to escape the giant splash story.',
    adultFact:
      'Ferdinand Lepcke created the fountain in 1904; it was lost during wartime and later rebuilt thanks to local community effort.',
    mission:
      'Pick one figure from the fountain and invent a one-sentence backstory for them.',
    bonus:
      'This stop slows the route down in a good way because the park is a gentle reset before the music quarter finale.',
    sourceLabel: 'Bydgoszcz tourism: Deluge Fountain',
    sourceUrl: 'https://visitbydgoszcz.pl/en/explore/what-to-see/2970-deluge-fountain-in-bydgoszcz',
  },
  {
    id: 'music-district',
    name: 'Music District & Archer Lady',
    strapline: 'A quiet cultural quarter where parks, villas, theatre, and the Philharmonic all share one stage.',
    walkFromPrevious: '8 min walk',
    stayFor: '20 min',
    mapQuery: 'Dzielnica Muzyczna, Bydgoszcz, Poland',
    imageUrl: 'https://visitbydgoszcz.pl/images/doswiadcz/co_zobaczyc/dzielnica_muzyczna.jpg',
    imageAlt: 'The Music District in Bydgoszcz.',
    lookFor:
      'Jan Kochanowski Park, composer statues, the Philharmonic, the Academy of Music, and the Archer Lady sculpture nearby.',
    kidFact:
      'This park is full of music clues, and the Archer Lady makes the ending feel like a fairy-tale hero scene.',
    adultFact:
      'Bydgoszcz shaped a whole district around culture here, with the Philharmonic, Polish Theatre, Music Academy, and elegant villas forming a calm urban masterpiece.',
    mission:
      'Find one composer statue and celebrate the end of the walk with a ten-second made-up victory tune.',
    bonus:
      'If the family still has energy, this is the best place to linger because the park paths feel calm even after the city center.',
    sourceLabel: 'Bydgoszcz tourism: The Music District',
    sourceUrl: 'https://visitbydgoszcz.pl/en/explore/what-to-see/2556-district',
  },
]

export const pauseSpots: PauseSpot[] = [
  {
    name: "Rother's Mills cafe & bistro",
    kind: 'Easy on-route reset',
    summary:
      'The tourism page notes a cafe and restaurant offer inside the mills complex, so this is the easiest low-friction break without leaving the route.',
    whyItWorks:
      'Best when younger walkers need a quick sit-down before the river photo section.',
    mapQuery: "Młyny Rothera, Bydgoszcz, Poland",
    sourceLabel: "Rother's Mills source",
    sourceUrl: 'https://visitbydgoszcz.pl/en/explore/what-to-see/4192-rother-s-mills',
  },
  {
    name: 'Audun Coffee',
    kind: 'Signature coffee stop',
    summary:
      'Official tourism notes call out Audun Sørbotten’s coffee as a Bydgoszcz must-try for coffee lovers.',
    whyItWorks:
      'Great shortlist option if you want one memorable coffee moment rather than a generic cafe.',
    mapQuery: 'Audun Coffee, Bydgoszcz, Poland',
    sourceLabel: 'Taste some masterful coffee',
    sourceUrl: 'https://visitbydgoszcz.pl/en/wyszukiwarka?searchword=coffee',
  },
  {
    name: 'ZaPaŁKA',
    kind: 'Family-friendly sweets',
    summary:
      'Tourism listings describe ZaPaŁKA as a cosy place with coffee plus vegan and gluten-free cakes and sweets.',
    whyItWorks:
      'A flexible backup for mixed family tastes or a low-stress cake break.',
    mapQuery: 'ZaPaŁKA Bydgoszcz, Poland',
    sourceLabel: 'Coffee search listing',
    sourceUrl: 'https://visitbydgoszcz.pl/en/wyszukiwarka?searchword=coffee',
  },
  {
    name: 'Długa Street / Jatki / Old Market cluster',
    kind: 'Curate-your-own lunch zone',
    summary:
      'The official one-day itinerary points to Old Market Square, Jatki Street, and Długa Street as the easiest concentration of food options.',
    whyItWorks:
      'Best if you want to choose the exact lunch place later once you see the final route and July timing.',
    mapQuery: 'Dluga Street, Bydgoszcz, Poland',
    sourceLabel: 'One day in Bydgoszcz',
    sourceUrl: 'https://visitbydgoszcz.pl/en/explore/what-to-do/4215-one-day-in-bydgoszcz',
  },
]
