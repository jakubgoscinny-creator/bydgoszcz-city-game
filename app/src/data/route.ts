import oldMarketPhoto from '../assets/stops/old-market.webp'
import oldMarketLivelyPhoto from '../assets/stops/old-market-lively.webp'
import millIslandPhoto from '../assets/stops/mill-island.webp'
import millIslandLivelyPhoto from '../assets/stops/mill-island-lively.webp'
import brdaWaterPhoto from '../assets/stops/brda-water.webp'
import rotherInsidePhoto from '../assets/stops/rother-inside.webp'
import rotherTerracePhoto from '../assets/stops/rother-terrace.webp'
import mostowaPhoto from '../assets/stops/mostowa.webp'
import gdanskaPhoto from '../assets/stops/gdanska.webp'
import freedomParkPhoto from '../assets/stops/freedom-park.webp'
import theatreArcherPhoto from '../assets/stops/theatre-archer.webp'
import janParkPhoto from '../assets/stops/jan-park.webp'
import philharmonicPhoto from '../assets/stops/philharmonic.webp'

export type PausePick = {
  name: string
  kind: string
  summary: string
  mapQuery: string
  sourceLabel: string
  sourceUrl?: string
}

export type DeepDive = {
  /** One enticing hook line shown on the stop card itself. */
  teaser: string
  intro: string
  kids: string[]
  adults: string[]
}

export type SecondPhoto = {
  url: string
  alt: string
  credit: string
  creditUrl: string
}

export type RouteStop = {
  id: string
  shortName: string
  name: string
  district: string
  signature: string
  strapline: string
  walkFromPrevious: string
  stayFor: string
  mapQuery: string
  imageUrl: string
  imageAlt: string
  /** Optional livelier photo shown lower on the card, balancing formal shots. */
  secondPhoto?: SecondPhoto
  lookFor: string[]
  kidFacts: string[]
  adultFacts: string[]
  mission: string
  bonus: string
  memoryPrompt: string
  sourceLabel: string
  sourceUrl: string
  geoPosition: { lat: number; lon: number }
  nextMapQuery?: string
  nextLabel?: string
  highlightPause?: PausePick
  deepDive: DeepDive
}

export const routeStops: RouteStop[] = [
  {
    id: 'old-market',
    shortName: 'Old Square',
    name: 'Old Market Square & Cathedral',
    district: 'Old Town start',
    signature: 'Wizards and meridian',
    strapline:
      'Start where medieval Bydgoszcz still feels theatrical: brick Gothic walls, pale facades, and a square that hides both history and a little stage magic.',
    walkFromPrevious: 'Start here',
    stayFor: '18-22 min',
    mapQuery: 'Stary Rynek and Bydgoszcz Cathedral, Bydgoszcz, Poland',
    imageUrl: oldMarketPhoto,
    imageAlt: "Bird's-eye view of Bydgoszcz Cathedral beside the Old Market Square.",
    lookFor: [
      'the white town hall frontage',
      'the red-brick cathedral walls',
      'the 18th meridian line in the paving',
      'the window where Master Twardowski appears',
    ],
    kidFacts: [
      'This square has its own city wizard: Master Twardowski pops out of a window at 13:13 and 21:13 like a tiny surprise show.',
      'The line in the pavement lets children stand on an invisible stripe that runs around the whole planet.',
    ],
    adultFacts: [
      'The square was laid out in 1346 under Casimir the Great, so this really is the civic heart of medieval Bydgoszcz.',
      'The cathedral beside it is the oldest surviving church in the city and one of the clearest old-town skyline markers.',
    ],
    mission:
      'Find the meridian line first, then agree on the best future spot to watch the Twardowski window.',
    bonus:
      "If the timing works, this is the cleanest place to catch the city's small public spectacle before the route drifts toward the river.",
    memoryPrompt: 'What made the very first impression feel most like Bydgoszcz here?',
    sourceLabel: 'Bydgoszcz cathedral and Old Town notes',
    sourceUrl: 'https://visitbydgoszcz.pl/en/explore/what-to-see/1393-bydgoszcz-cathedral',
    secondPhoto: {
      url: oldMarketLivelyPhoto,
      alt: 'An open-air concert crowd filling the Old Market Square on a summer evening.',
      credit: 'Photo: Pit1233, Wikimedia Commons, public domain',
      creditUrl:
        'https://commons.wikimedia.org/wiki/File:Bydgoszcz_Stary_Rynek_pierzeja_p%C5%82n_ludzie.jpg',
    },
    geoPosition: { lat: 53.121963, lon: 18.0002735 },
    highlightPause: {
      name: 'Cukiernia Katarynka',
      kind: 'Old Market bakery stop',
      summary:
        'A proper Bydgoszcz patisserie a minute from the square — cakes, pastries, and easy wins for small explorers before the walk starts.',
      mapQuery: 'Cukiernia Katarynka, Batorego 4, Bydgoszcz, Poland',
      sourceLabel: 'Katarynka official site',
      sourceUrl: 'https://katarynkabydgoszcz.pl/',
    },
    deepDive: {
      teaser:
        'A trickster from Polish legend and an invisible line around the planet — this square opens with both.',
      intro:
        'If someone wants the longer version, these fold-outs add extra Bydgoszcz context without sending the family away from the route.',
      kids: [
        'Master Twardowski is part of a famous Polish legend about a magician and trickster, which is why his little window appearance feels playful instead of solemn.',
        'The meridian line works well as a body game: one child can guard the east side, another the west side, and the whole group can pretend they are balancing the world.',
      ],
      adults: [
        'This one stop compresses medieval planning, civic ceremony, market trade, and religion into one compact frame, which is why Bydgoszcz becomes legible so fast here.',
        'The contrast between pale facades and the Gothic cathedral also sets up a pattern that repeats across the walk: soft civic fronts against strong red-brick anchors.',
      ],
    },
  },
  {
    id: 'mill-island',
    shortName: 'Island',
    name: 'Mill Island Meadows',
    district: 'River green core',
    signature: 'Brda, bridges, and lawns',
    strapline:
      'The city suddenly exhales into water, chestnut trees, and bridge-hopping paths: a soft green middle where children can reset before the industrial story begins.',
    walkFromPrevious: '6 min walk',
    stayFor: '16-20 min',
    mapQuery: 'Mill Island, Bydgoszcz, Poland',
    imageUrl: millIslandPhoto,
    imageAlt: 'Green riverbank view on Mill Island in Bydgoszcz.',
    lookFor: [
      'water on both sides of the path',
      'low footbridges linking the island edges',
      'old brick buildings mirrored in the canal',
      'the family-friendly lawns and playground',
    ],
    kidFacts: [
      'Mill Island feels like a secret park hidden in the middle of town, with bridges that almost turn the route into a hop-and-skip game.',
      'The central part of the island even has a playground, so little walkers get a real reset instead of only another monument.',
    ],
    adultFacts: [
      'The tourism route describes Mill Island as a green oasis in the city centre, lined with chestnuts, lindens, and willows planted in the 19th century.',
      "Before it became a leisure icon, this area was an industrial workhorse with mills, granaries, and even the royal mint tied to the city's river economy.",
    ],
    mission: 'Count how many bridges you can spot before you leave the island behind.',
    bonus:
      'If the children need a quick energy reset, this is the easiest place to let the pace soften without breaking the route.',
    memoryPrompt: 'Which bit of water, bridge, or grass made this stop feel most relaxing?',
    sourceLabel: 'Mill Island source page',
    sourceUrl: 'https://visitbydgoszcz.pl/en/explore/what-to-see/1413-mill-island-in-bydgoszcz',
    secondPhoto: {
      url: millIslandLivelyPhoto,
      alt: 'The urban beach on Mill Island — volleyball net, sunbathers, and Opera Nova behind.',
      credit: 'Photo: Pit1233, Wikimedia Commons, CC0',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Bdg_WMplaza_2_07-2013.jpg',
    },
    geoPosition: { lat: 53.1227908, lon: 17.9959977 },
    highlightPause: {
      name: 'Mill Island lawns',
      kind: 'Soft reset',
      summary:
        'Use the grassy edges as a no-booking family breather before heading into the red-brick mill complex.',
      mapQuery: 'Mill Island, Bydgoszcz, Poland',
      sourceLabel: 'Mill Island source',
      sourceUrl: 'https://visitbydgoszcz.pl/en/explore/what-to-see/1413-mill-island-in-bydgoszcz',
    },
    deepDive: {
      teaser:
        "This gentle park was once the city's engine room — mills, granaries, and coins minted for the king.",
      intro:
        'Mill Island looks gentle at first, but it is one of the best places to understand how water shaped the city.',
      kids: [
        'Children can imagine the island as a giant stepping-stone game, because the bridges make the park feel like it was designed for hopping and crossing.',
        'It also works like a reset level in a video game: the city turns green and quiet so little walkers can recharge before the next dramatic buildings.',
      ],
      adults: [
        'Mill Island is not just a pretty park; it is where leisure, ecology, and the old industrial economy overlap most clearly in the city centre.',
        "That mix is part of Bydgoszcz's identity: the river is never only decorative, because it also explains how the city once worked and traded.",
      ],
    },
  },
  {
    id: 'rother-inside',
    shortName: 'Rother',
    name: "Rother's Mills Inside",
    district: 'Industrial heritage',
    signature: 'Brick mills reborn',
    strapline:
      'Step from riverside calm into the giant red-brick mill that used to work hard for the city and now works hard for ideas, exhibitions, and family curiosity.',
    walkFromPrevious: '4 min walk',
    stayFor: '18-22 min',
    mapQuery: 'Mlyny Rothera, Bydgoszcz, Poland',
    imageUrl: rotherInsidePhoto,
    imageAlt: "Rother's Mills rising above the river in Bydgoszcz.",
    lookFor: [
      'the bold red-brick facades',
      'the scale of the mill buildings from inside and out',
      'exhibition or workshop spaces in the adapted interiors',
      'the waterside steps and big industrial windows',
    ],
    kidFacts: [
      'From the outside it looks like a huge brick castle, but inside it has traded flour for stories, experiments, and family exploration.',
      'This stop is fun because children can compare what still feels old and what now feels brand-new.',
    ],
    adultFacts: [
      "Rother's Mills date back to the 19th century and are one of the clearest symbols of Bydgoszcz turning industrial heritage into a contemporary civic landmark.",
      'The current complex mixes exhibitions, workshops, events, food, and river views, which makes it both a cultural stop and a practical family pause.',
    ],
    mission:
      'Find one detail that proves this building used to be a hardworking mill before it became a visitor stop.',
    bonus:
      'This is the best point on the route to let adults browse a little while children still feel like they are inside something dramatic and oversized.',
    memoryPrompt: 'What old-versus-new contrast stood out most inside the mills?',
    sourceLabel: "Rother's Mills source page",
    sourceUrl: 'https://visitbydgoszcz.pl/en/explore/what-to-see/4192-rother-s-mills',
    geoPosition: { lat: 53.122867, lon: 17.9949192 },
    nextMapQuery: 'Taras Mlyny Rothera, Bydgoszcz, Poland',
    nextLabel: 'Climb to the terrace viewpoint',
    highlightPause: {
      name: 'MŁYNEK Bistro',
      kind: 'Lunch pick by the mills',
      summary:
        'A casual bistro a short hop from the mills — ciabattas, bowls, udon, and pulled pork, relaxed enough for a mid-route family lunch.',
      mapQuery: 'MŁYNEK Bistro, Świętej Trójcy 8, Bydgoszcz, Poland',
      sourceLabel: 'MŁYNEK Bistro site',
      sourceUrl: 'https://mlynek-bistro.vercel.app/',
    },
    deepDive: {
      teaser:
        'How a hardworking flour mill traded grain for ideas — and why nothing here is behind ropes.',
      intro: "This is the point where the route shifts from postcard beauty into the city's working memory.",
      kids: [
        'The fun comparison game here is simple: point at one detail that feels like an old factory and one detail that feels like a new science-and-story space.',
        'Because the building is oversized, children often read it like a castle first and a mill second, which makes the discovery feel more adventurous.',
      ],
      adults: [
        "Rother's Mills tell a very current urban story: heritage is not frozen behind ropes here, it has been repurposed into something social, cultural, and useful again.",
        'That reuse matters because it lets the city show industrial confidence without turning the route heavy or museum-like for families.',
      ],
    },
  },
  {
    id: 'rother-terrace',
    shortName: 'Terrace',
    name: 'Rother Terrace',
    district: 'Panorama deck',
    signature: 'Blue ribbon view',
    strapline:
      'This is the breath-in stop: a terrace view where the Brda, the old town, and the red-brick story all line up in one family-photo frame.',
    walkFromPrevious: 'Lift or stairs',
    stayFor: '10-14 min',
    mapQuery: 'Taras Mlyny Rothera, Bydgoszcz, Poland',
    imageUrl: rotherTerracePhoto,
    imageAlt: "Rother's Mills complex seen from the terrace side in Bydgoszcz.",
    lookFor: [
      'the curve of the river through the centre',
      'old roofs and bridges stitched together',
      'the route you have already walked from the Old Square',
      'room for a family skyline photo',
    ],
    kidFacts: [
      'From up here the river looks like a giant blue ribbon wrapped around the city centre.',
      'This is a great stop for a spotting game: bridges, boats, towers, and brick buildings all show up in one sweep.',
    ],
    adultFacts: [
      'The terrace makes the adaptive reuse story visible at a glance: water infrastructure, old town texture, and new civic life all overlap from one deck.',
      'It is also one of the cleanest places on the route to understand why Bydgoszcz works so well as a river city rather than a square-only city.',
    ],
    mission: 'Trace the rest of the quest with your finger from the terrace before you head back down.',
    bonus: 'If only one panoramic photo happens all day, this is the safest bet.',
    memoryPrompt: 'What detail from above made the city layout finally click for you?',
    sourceLabel: "Rother's Mills source page",
    sourceUrl: 'https://visitbydgoszcz.pl/en/explore/what-to-see/4192-rother-s-mills',
    geoPosition: { lat: 53.12302, lon: 17.99518 },
    highlightPause: {
      name: 'Terrace linger',
      kind: 'View reward',
      summary:
        'A short linger here keeps the route feeling generous rather than rushed, especially before the busier bridge section.',
      mapQuery: 'Taras Mlyny Rothera, Bydgoszcz, Poland',
      sourceLabel: "Rother's Mills source",
      sourceUrl: 'https://visitbydgoszcz.pl/en/explore/what-to-see/4192-rother-s-mills',
    },
    deepDive: {
      teaser: 'One deck up, and the whole city plan suddenly clicks into place.',
      intro: 'The terrace is where the route becomes spatial instead of only narrative.',
      kids: [
        'From above, the quest turns into a real spotting puzzle: bridges, roofs, river bends, and tiny paths all become easier to count.',
        'It is also a great place to let the youngest walkers point at where they think the adventure goes next before anyone checks the map.',
      ],
      adults: [
        'Viewpoints matter on family walks because they give meaning to earlier stops; suddenly the island, mills, and old town stop feeling separate.',
        'This deck explains why Bydgoszcz feels coherent as a river city: the water is the thread that stitches the landmarks together.',
      ],
    },
  },
  {
    id: 'mostowa',
    shortName: 'Mostowa',
    name: 'Mostowa, Granaries & Balancing Man',
    district: 'Bridge postcard zone',
    signature: 'Granaries and acrobatics',
    strapline:
      'Mostowa is where Bydgoszcz turns into a postcard: old granaries by the river, a balancing figure over the water, and the feeling that the city likes drama.',
    walkFromPrevious: '10 min walk',
    stayFor: '14-18 min',
    mapQuery: 'Mostowa Bridge and Przechodzacy przez rzeke, Bydgoszcz, Poland',
    imageUrl: mostowaPhoto,
    imageAlt: 'The Man Crossing the River sculpture suspended above the Brda in Bydgoszcz.',
    lookFor: [
      'the balancing man above the river',
      'the granaries near Mostowa Street',
      'the little amphitheatre by the waterside',
      'the classic river-and-bridge family photo angle',
    ],
    kidFacts: [
      'The balancing figure looks like a circus acrobat frozen in midair above the water.',
      'This is the checkpoint where children can try a one-leg balance test and decide if they are anywhere near as steady as the sculpture.',
    ],
    adultFacts: [
      "The characteristic granary next to Mostowa is sometimes nicknamed the 'Dutch' granary because of its gabled roof style, and the small amphitheatre nearby makes the whole edge feel like a public stage.",
      'The Man Crossing the River was unveiled on 1 May 2004, and even the swallow carried by the figure links back to Andrzej Szwalbe from the Philharmonic story.',
    ],
    mission:
      'Count the river details in one frame: bridge, granary, balancing man, and water reflection.',
    bonus: "This is the most reliable 'we really were in Bydgoszcz' photo checkpoint of the whole route.",
    memoryPrompt: 'Was this the point where the city finally felt dramatic enough for a postcard?',
    sourceLabel: 'Man Crossing the River source page',
    sourceUrl: 'https://visitbydgoszcz.pl/en/explore/what-to-see/2558-man-crossing-the-river',
    secondPhoto: {
      url: brdaWaterPhoto,
      alt: 'The water tram gliding along the Brda past strolling crowds in the city centre.',
      credit: 'Photo: Pit1233, Wikimedia Commons, CC0',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Bydg_Festiwal_Wodny_2012l.jpg',
    },
    geoPosition: { lat: 53.1225128, lon: 18.0008557 },
    highlightPause: {
      name: 'Sowa Cafe at 5 Mostowa',
      kind: 'Optional sweet detour',
      summary:
        'The official specialties page points to Sowa Cafe on Mostowa as a place for house coffee and old Bydgoszcz photo reprints.',
      mapQuery: 'Sowa Cafe Mostowa 5, Bydgoszcz, Poland',
      sourceLabel: 'Bydgoszcz specialties source',
      sourceUrl: 'https://visitbydgoszcz.pl/en/discover/2387-bydgoszcz-specialties',
    },
    deepDive: {
      teaser:
        'Why this exact bend of the river became the picture everyone takes home from Bydgoszcz.',
      intro:
        "Mostowa is the route's most theatrical postcard scene, and that is exactly why it tends to become a memory anchor.",
      kids: [
        'The balancing man invites instant imitation, so this stop almost creates its own mini challenge without needing extra equipment.',
        'Children can also turn it into a detective game: who is braver, the statue above the river or the person trying to copy the pose on the bridge?',
      ],
      adults: [
        'The sculpture, granaries, and bridge geometry create an unusually strong civic stage set, which is why so many visitors remember this stretch first.',
        'It is one of the best examples on the route of Bydgoszcz using art in public space to amplify what the riverfront already does well.',
      ],
    },
  },
  {
    id: 'gdanska',
    shortName: 'Gdanska',
    name: 'Gdanska Street & Cafe Primo',
    district: 'Grand city axis',
    signature: 'Art Nouveau and ice cream',
    strapline:
      'Now the route becomes urban and elegant: a long civic street, decorative facades, and the ice-cream reward point that locals have been recommending for years.',
    walkFromPrevious: '12 min walk',
    stayFor: '18-22 min',
    mapQuery: 'Cafe Primo, Gdanska 18, Bydgoszcz, Poland',
    imageUrl: gdanskaPhoto,
    imageAlt: 'Historic architecture along Gdanska Street in Bydgoszcz.',
    lookFor: [
      'ornamental facades and balconies',
      'the long straight city axis of Gdanska Street',
      'the narrow access toward Kazimierz Wielki Park',
      'Cafe Primo as the ice-cream checkpoint',
    ],
    kidFacts: [
      'This stretch feels like a parade route for buildings, with lots of windows, balconies, and details to count.',
      'Cafe Primo is the fun reward point because the official city guide says locals have recommended it for years, especially for a special Bydgoszcz flavor.',
    ],
    adultFacts: [
      "The interwar exhibition route treats Gdanska Street as the city's main thoroughfare for trade, services, entertainment, and public celebrations.",
      'It is also one of the best places on this walk to notice how Bydgoszcz layers civic life with Art Nouveau and early-20th-century architecture.',
    ],
    mission: 'Choose the best balcony or facade detail on Gdanska Street, then celebrate it with ice cream.',
    bonus:
      'If energy dips before the parks, this is the smartest official treat stop to keep everyone cheerful.',
    memoryPrompt: 'Which building detail or ice-cream moment deserves a place in the final keepsake?',
    sourceLabel: 'From Old Market Square to Wolnosci Square exhibition route',
    sourceUrl: 'https://visitbydgoszcz.pl/en/what-s-on/current-exhibitions/2447-fromto',
    geoPosition: { lat: 53.126222, lon: 18.0042482 },
    highlightPause: {
      name: 'Cafe Primo',
      kind: 'Route ice-cream favorite',
      summary:
        'The official tourism portal says Bydgoszcz residents have recommended this Gdanska Street ice-cream shop for many years.',
      mapQuery: 'Cafe Primo, Gdanska 18, Bydgoszcz, Poland',
      sourceLabel: 'Bydgoszcz specialties source',
      sourceUrl: 'https://visitbydgoszcz.pl/en/discover/2387-bydgoszcz-specialties',
    },
    deepDive: {
      teaser: 'The street where Bydgoszcz stops being a river town and starts showing off.',
      intro: 'Gdanska Street adds a different kind of beauty: less river drama, more urban confidence.',
      kids: [
        'This stretch is great for a count-the-details game because windows, balconies, and ornaments keep changing from building to building.',
        'Cafe Primo also gives the route an emotional trick: a food reward makes the architecture feel friendlier for younger walkers.',
      ],
      adults: [
        'Gdanska is where Bydgoszcz feels most metropolitan, because trade, style, and everyday public life line up along one long ceremonial street.',
        'That makes it a useful contrast to the river stops: here the city performs through facades and rhythm rather than water and bridges.',
      ],
    },
  },
  {
    id: 'freedom-park',
    shortName: 'Freedom',
    name: 'Freedom Square & Kazimierz Wielki Park',
    district: 'Garden interlude',
    signature: 'Oldest park, big fountain',
    strapline:
      'The city softens again here: open square, old trees, pond atmosphere, and the park story that reaches back to convent gardens and forward to summer shade.',
    walkFromPrevious: '6 min walk',
    stayFor: '16-20 min',
    mapQuery: 'Plac Wolnosci and Park Kazimierza Wielkiego, Bydgoszcz, Poland',
    imageUrl: freedomParkPhoto,
    imageAlt: 'The Deluge Fountain in Kazimierz Wielki Park in Bydgoszcz.',
    lookFor: [
      'the Deluge Fountain figures',
      'ponds and old trees around the park',
      'a playground for younger walkers',
      'the square opening into the park edge',
    ],
    kidFacts: [
      'This is the checkpoint where the park story gets huge, because the Deluge Fountain looks full of people, water, animals, and action all at once.',
      'It is also a useful little-leg stop because there is shade and a playground nearby.',
    ],
    adultFacts: [
      'The tourism route says this is the oldest park in the city, growing out of the former Poor Clares garden before it was redesigned as a public park.',
      'The Deluge Fountain was unveiled in July 1909, and the park is still valued for rare tree species, ponds, and that sense of a formal urban garden.',
    ],
    mission:
      'Pick one fountain figure and invent a one-line story about what happened one second before the giant splash scene.',
    bonus:
      'This park section keeps the route family-friendly because it adds breathing room before the music-quarter finale.',
    memoryPrompt: 'What park detail made this stop feel most calm or story-filled?',
    sourceLabel: 'Green Bydgoszcz itinerary',
    sourceUrl: 'https://visitbydgoszcz.pl/en/explore/visitor-itineraries/2907-green',
    geoPosition: { lat: 53.1271358, lon: 18.0056659 },
    highlightPause: {
      name: 'Park shade break',
      kind: 'Cool-down moment',
      summary:
        'If the family needs five slower minutes before the theatre quarter, use the trees and benches here instead of pushing through.',
      mapQuery: 'Park Kazimierza Wielkiego, Bydgoszcz, Poland',
      sourceLabel: 'Green Bydgoszcz source',
      sourceUrl: 'https://visitbydgoszcz.pl/en/explore/visitor-itineraries/2907-green',
    },
    deepDive: {
      teaser:
        "A convent garden that grew into the city's oldest park — with a flood frozen in bronze at its heart.",
      intro:
        "This square-and-park section gives the walk breathing room while quietly deepening the city's green story.",
      kids: [
        'The Deluge Fountain is almost a picture book in stone and water, so children can invent a full action scene from one frozen splash.',
        'Because there is shade and play nearby, this is also a stop where the quest can feel generous instead of demanding.',
      ],
      adults: [
        'Kazimierz Wielki Park shows how Bydgoszcz turned older garden land into formal public leisure space without losing a sense of age and dignity.',
        'That balance matters in family pacing: this is where cultural walking becomes sustainable instead of relentless.',
      ],
    },
  },
  {
    id: 'theatre-archer',
    shortName: 'Theatre',
    name: 'Polish Theatre & Archer Lady',
    district: 'Culture threshold',
    signature: 'One symbolic city pose',
    strapline:
      "Here the quest steps fully into Bydgoszcz's culture quarter, where theatre energy, park edges, and the Archer Lady turn the stop into a city symbol moment.",
    walkFromPrevious: '5 min walk',
    stayFor: '12-15 min',
    mapQuery: 'Polish Theatre and Archer Lady, Bydgoszcz, Poland',
    imageUrl: theatreArcherPhoto,
    imageAlt: 'The Archer Lady statue in Bydgoszcz near the theatre quarter.',
    lookFor: [
      'the Archer Lady sculpture',
      'the theatre frontage nearby',
      'the park square between culture buildings',
      'the transition from busy street to quieter quarter',
    ],
    kidFacts: [
      'The Archer Lady makes this whole stop feel like a fairy-tale hero checkpoint right beside a real theatre.',
      'Children can copy the pose and decide whether they would aim at a dragon, an apple, or an ice-cream thief.',
    ],
    adultFacts: [
      "The Archer Lady is one of Bydgoszcz's best-known symbols; the sculpture was designed by Ferdinand Lepcke and belongs to the city's identity story.",
      'Official route material places the statue on the park square across from the Polish Theatre, exactly where the culture quarter starts to feel coherent.',
    ],
    mission: 'Take the family version of the Archer Lady pose and decide who has the steadiest aim.',
    bonus: 'This is one of the clearest symbolic photo moments after the river and granaries.',
    memoryPrompt: 'Did the Archer Lady feel more heroic, playful, or dramatic to your family?',
    sourceLabel: 'Archer Lady official search results',
    sourceUrl: 'https://visitbydgoszcz.pl/en/wyszukiwarka?searchword=Archer%20Lady',
    geoPosition: { lat: 53.1308744, lon: 18.0121007 },
    deepDive: {
      teaser: "How a lady with a bow became the whole city's calling card.",
      intro: 'This is the symbolic threshold between street life and the music-and-theatre quarter.',
      kids: [
        'The Archer Lady works almost like a storybook guardian for the district, which is why children usually understand her pose before they know her name.',
        'Copying the stance turns a city symbol into a physical challenge, and that makes the stop memorable in a very family-friendly way.',
      ],
      adults: [
        'Some landmarks matter less because they are old and more because they are emblematic; the Archer Lady belongs in that second category for Bydgoszcz.',
        'Placed beside the theatre and park edge, she helps the quarter read as a composed cultural scene rather than a scattered set of buildings.',
      ],
    },
  },
  {
    id: 'jan-park',
    shortName: 'Jan Park',
    name: 'Jan Kochanowski Park of Composers',
    district: 'Music under trees',
    signature: 'Composer statues and playground',
    strapline:
      'This is the park stop where the family can wander, listen, and look for statues: an elegant green room made specifically for the musical identity of the district.',
    walkFromPrevious: '4 min walk',
    stayFor: '14-18 min',
    mapQuery: 'Jan Kochanowski Park, Bydgoszcz, Poland',
    imageUrl: janParkPhoto,
    imageAlt: 'Jan Kochanowski Park in Bydgoszcz with tree-lined paths and composer surroundings.',
    lookFor: [
      'meandering paths through the park',
      'composer and virtuoso statues',
      'playground space for younger walkers',
      'the musical playground where children can make a little noise',
      'the feeling of music institutions all around the green',
    ],
    kidFacts: [
      'This park turns into a treasure hunt when children start searching for famous composers hidden among the paths.',
      'There is also a musical playground pause here, so younger walkers get a hands-on stop instead of only statues and grown-up stories.',
    ],
    adultFacts: [
      "Jan Kochanowski Park was established in 1901 and is still one of the city's favorite recreation spots thanks to its landscape design and calm central location.",
      "On Andrzej Szwalbe's initiative, the area around the park and Philharmonic was gradually enriched with statues of composers and virtuosos, turning the quarter into a real music district.",
    ],
    mission: 'Find one composer statue and give the family a ten-second made-up tune in their honor.',
    bonus: 'This is the best late-route place to let the quest feel gentle rather than checklist-like.',
    memoryPrompt: 'Which part of this park felt most peaceful, playful, or musical?',
    sourceLabel: 'Green Bydgoszcz itinerary',
    sourceUrl: 'https://visitbydgoszcz.pl/en/explore/visitor-itineraries/2907-green',
    geoPosition: { lat: 53.1297597, lon: 18.0114344 },
    highlightPause: {
      name: 'Muzyczny Plac Zabaw',
      kind: "Children's reset pause",
      summary:
        'Inside Jan Kochanowski Park there is a named musical playground, so this stop can become a real child-energy bridge with swings and sound-making play pieces.',
      mapQuery: '53.1303538,18.0115320',
      sourceLabel: 'OpenStreetMap named playground listing',
      sourceUrl: 'https://www.openstreetmap.org/way/375202206',
    },
    deepDive: {
      teaser: "A park that was composed rather than planted — one man's plan to fill a district with music.",
      intro: 'Jan Kochanowski Park is where the route settles into a softer, almost musical tempo.',
      kids: [
        'Looking for composer statues gives the park a treasure-hunt feeling, especially if the family invents a tiny tune for each one.',
        'This is also one of the easiest places to let four-year-olds wander a little without the route losing shape.',
      ],
      adults: [
        "The park is important not only as greenery but as part of the music district's identity system: culture here spills outdoors into the paths and sculptures.",
        'That makes the area feel curated in a subtle way, as if the city has built an open-air foyer around its institutions.',
      ],
    },
  },
  {
    id: 'philharmonic',
    shortName: 'Hall',
    name: 'Pomeranian Philharmonic Finale',
    district: 'Music district finale',
    signature: 'Quiet cultural finish',
    strapline:
      'End where the route becomes its calmest and most composed: in front of the Philharmonic, with the whole music quarter around you and enough space for a proper finale.',
    walkFromPrevious: '3 min walk',
    stayFor: '14-18 min',
    mapQuery: 'Pomeranian Philharmonic, Bydgoszcz, Poland',
    imageUrl: philharmonicPhoto,
    imageAlt: 'The Pomeranian Philharmonic building in Bydgoszcz.',
    lookFor: [
      'the Neo-Classical Philharmonic building',
      'the nearby Academy of Music presence',
      'the composer-filled green surroundings',
      'a good final family-photo edge in the district',
    ],
    kidFacts: [
      'This last stop feels like the city has turned into a giant music room, even outdoors.',
      'It is a great finale challenge to invent a victory tune before the quest ends.',
    ],
    adultFacts: [
      "Official tourism material describes the Music District as one of the city's most interesting urban-planning solutions, with the Philharmonic as one of its anchors.",
      "Search results on the city's tourism portal note that the Pomeranian Philharmonic, established on 1 January 1953, is a particular point of pride for Bydgoszcz.",
    ],
    mission: 'Give the route a final round of applause and create a ten-second family ending theme.',
    bonus:
      'This is the cleanest finale because it feels complete even if the family stops here for a rest rather than continuing elsewhere.',
    memoryPrompt: 'What should the final postcard sentence say about the whole Bydgoszcz walk?',
    sourceLabel: 'Pomeranian Philharmonic official search results',
    sourceUrl: 'https://visitbydgoszcz.pl/en/wyszukiwarka?searchword=Pomeranian%20Philharmonic',
    geoPosition: { lat: 53.1289723, lon: 18.0108252 },
    deepDive: {
      teaser: 'Why the trail ends quietly on purpose — and what that says about this city.',
      intro: 'The finale works because it is calm, not because it shouts the loudest.',
      kids: [
        'By the end of the route, children can treat the Philharmonic stop like the final level where everyone invents a victory soundtrack together.',
        'It is a satisfying finish because the city suddenly feels ordered, polished, and ready for applause.',
      ],
      adults: [
        "The Philharmonic completes the district's planning story: Bydgoszcz ends the walk with culture, greenery, and civic calm instead of pure spectacle.",
        'That kind of ending is powerful because it lets the family leave with a sense of finish rather than fatigue.',
      ],
    },
  },
]

export const mapSearchUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

export const directionsUrl = (origin: string, destination: string) =>
  `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=walking`

export const mapEmbedUrl = (query: string) =>
  `https://maps.google.com/maps?hl=en&q=${encodeURIComponent(query)}&z=16&output=embed`
