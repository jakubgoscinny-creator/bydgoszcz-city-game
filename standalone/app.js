const routeStops = [
  {
    id: "old-market",
    shortName: "Old Square",
    name: "Old Market Square & Cathedral",
    district: "Old Town start",
    signature: "Wizards and meridian",
    strapline:
      "Start where medieval Bydgoszcz still feels theatrical: brick Gothic walls, pale facades, and a square that hides both history and a little stage magic.",
    walkFromPrevious: "Start here",
    stayFor: "18-22 min",
    mapQuery: "Stary Rynek and Bydgoszcz Cathedral, Bydgoszcz, Poland",
    imageUrl: "https://visitbydgoszcz.pl/images/doswiadcz/co_zobaczyc/katedra3.jpg",
    imageAlt: "Bird's-eye view of Bydgoszcz Cathedral beside the Old Market Square.",
    lookFor: [
      "the white town hall frontage",
      "the red-brick cathedral walls",
      "the 18th meridian line in the paving",
      "the window where Master Twardowski appears"
    ],
    kidFacts: [
      "This square has its own city wizard: Master Twardowski pops out of a window at 13:13 and 21:13 like a tiny surprise show.",
      "The line in the pavement lets children stand on an invisible stripe that runs around the whole planet."
    ],
    adultFacts: [
      "The square was laid out in 1346 under Casimir the Great, so this really is the civic heart of medieval Bydgoszcz.",
      "The cathedral beside it is the oldest surviving church in the city and one of the clearest old-town skyline markers."
    ],
    mission: "Find the meridian line first, then agree on the best future spot to watch the Twardowski window.",
    bonus:
      "If the timing works, this is the cleanest place to catch the city's small public spectacle before the route drifts toward the river.",
    memoryPrompt: "What made the very first impression feel most like Bydgoszcz here?",
    sourceLabel: "Bydgoszcz cathedral and Old Town notes",
    sourceUrl: "https://visitbydgoszcz.pl/en/explore/what-to-see/1393-bydgoszcz-cathedral",
    geoPosition: { lat: 53.121963, lon: 18.0002735 },
    mapPosition: { x: 14, y: 71 },
    highlightPause: {
      name: "Bromberg Coffee",
      kind: "Host coffee pick",
      summary:
        "Keep this as the flexible adult coffee checkpoint near the old centre once the family has found its walking rhythm.",
      mapQuery: "Bromberg Coffee, Bydgoszcz, Poland",
      sourceLabel: "Route host pick"
    }
  },
  {
    id: "mill-island",
    shortName: "Island",
    name: "Mill Island Meadows",
    district: "River green core",
    signature: "Brda, bridges, and lawns",
    strapline:
      "The city suddenly exhales into water, chestnut trees, and bridge-hopping paths: a soft green middle where children can reset before the industrial story begins.",
    walkFromPrevious: "6 min walk",
    stayFor: "16-20 min",
    mapQuery: "Mill Island, Bydgoszcz, Poland",
    imageUrl: "https://visitbydgoszcz.pl/images/doswiadcz/co_zobaczyc/wyspa.jpg",
    imageAlt: "Green riverbank view on Mill Island in Bydgoszcz.",
    lookFor: [
      "water on both sides of the path",
      "low footbridges linking the island edges",
      "old brick buildings mirrored in the canal",
      "the family-friendly lawns and playground"
    ],
    kidFacts: [
      "Mill Island feels like a secret park hidden in the middle of town, with bridges that almost turn the route into a hop-and-skip game.",
      "The central part of the island even has a playground, so little walkers get a real reset instead of only another monument."
    ],
    adultFacts: [
      "The tourism route describes Mill Island as a green oasis in the city centre, lined with chestnuts, lindens, and willows planted in the 19th century.",
      "Before it became a leisure icon, this area was an industrial workhorse with mills, granaries, and even the royal mint tied to the city's river economy."
    ],
    mission: "Count how many bridges you can spot before you leave the island behind.",
    bonus:
      "If the children need a quick energy reset, this is the easiest place to let the pace soften without breaking the route.",
    memoryPrompt: "Which bit of water, bridge, or grass made this stop feel most relaxing?",
    sourceLabel: "Mill Island source page",
    sourceUrl: "https://visitbydgoszcz.pl/en/explore/what-to-see/1413-mill-island-in-bydgoszcz",
    geoPosition: { lat: 53.1227908, lon: 17.9959977 },
    mapPosition: { x: 23, y: 63 },
    highlightPause: {
      name: "Mill Island lawns",
      kind: "Soft reset",
      summary:
        "Use the grassy edges as a no-booking family breather before heading into the red-brick mill complex.",
      mapQuery: "Mill Island, Bydgoszcz, Poland",
      sourceLabel: "Mill Island source",
      sourceUrl: "https://visitbydgoszcz.pl/en/explore/what-to-see/1413-mill-island-in-bydgoszcz"
    }
  },
  {
    id: "rother-inside",
    shortName: "Rother",
    name: "Rother's Mills Inside",
    district: "Industrial heritage",
    signature: "Brick mills reborn",
    strapline:
      "Step from riverside calm into the giant red-brick mill that used to work hard for the city and now works hard for ideas, exhibitions, and family curiosity.",
    walkFromPrevious: "4 min walk",
    stayFor: "18-22 min",
    mapQuery: "Mlyny Rothera, Bydgoszcz, Poland",
    imageUrl: "https://visitbydgoszcz.pl/images/odkryj/co_zobaczyc/mlyny-rothera-bydgoszcz-lm.jpg",
    imageAlt: "Rother's Mills rising above the river in Bydgoszcz.",
    lookFor: [
      "the bold red-brick facades",
      "the scale of the mill buildings from inside and out",
      "exhibition or workshop spaces in the adapted interiors",
      "the waterside steps and big industrial windows"
    ],
    kidFacts: [
      "From the outside it looks like a huge brick castle, but inside it has traded flour for stories, experiments, and family exploration.",
      "This stop is fun because children can compare what still feels old and what now feels brand-new."
    ],
    adultFacts: [
      "Rother's Mills date back to the 19th century and are one of the clearest symbols of Bydgoszcz turning industrial heritage into a contemporary civic landmark.",
      "The current complex mixes exhibitions, workshops, events, food, and river views, which makes it both a cultural stop and a practical family pause."
    ],
    mission: "Find one detail that proves this building used to be a hardworking mill before it became a visitor stop.",
    bonus:
      "This is the best point on the route to let adults browse a little while children still feel like they are inside something dramatic and oversized.",
    memoryPrompt: "What old-versus-new contrast stood out most inside the mills?",
    sourceLabel: "Rother's Mills source page",
    sourceUrl: "https://visitbydgoszcz.pl/en/explore/what-to-see/4192-rother-s-mills",
    geoPosition: { lat: 53.122867, lon: 17.9949192 },
    mapPosition: { x: 30, y: 57 },
    nextMapQuery: "Taras Mlyny Rothera, Bydgoszcz, Poland",
    nextLabel: "Climb to the terrace viewpoint",
    highlightPause: {
      name: "Rother cafe and interiors",
      kind: "Culture pause",
      summary:
        "If the family wants one built-in sit-down without leaving the route, this is the easiest friction-free moment.",
      mapQuery: "Mlyny Rothera, Bydgoszcz, Poland",
      sourceLabel: "Rother's Mills source",
      sourceUrl: "https://visitbydgoszcz.pl/en/explore/what-to-see/4192-rother-s-mills"
    }
  },
  {
    id: "rother-terrace",
    shortName: "Terrace",
    name: "Rother Terrace",
    district: "Panorama deck",
    signature: "Blue ribbon view",
    strapline:
      "This is the breath-in stop: a terrace view where the Brda, the old town, and the red-brick story all line up in one family-photo frame.",
    walkFromPrevious: "Lift or stairs",
    stayFor: "10-14 min",
    mapQuery: "Taras Mlyny Rothera, Bydgoszcz, Poland",
    imageUrl: "https://visitbydgoszcz.pl/images/odkryj/co_zobaczyc/mlyny-rothera-bydgoszcz-lm.jpg",
    imageAlt: "Rother's Mills complex beside the river in Bydgoszcz.",
    lookFor: [
      "the curve of the river through the centre",
      "old roofs and bridges stitched together",
      "the route you have already walked from the Old Square",
      "room for a family skyline photo"
    ],
    kidFacts: [
      "From up here the river looks like a giant blue ribbon wrapped around the city centre.",
      "This is a great stop for a spotting game: bridges, boats, towers, and brick buildings all show up in one sweep."
    ],
    adultFacts: [
      "The terrace makes the adaptive reuse story visible at a glance: water infrastructure, old town texture, and new civic life all overlap from one deck.",
      "It is also one of the cleanest places on the route to understand why Bydgoszcz works so well as a river city rather than a square-only city."
    ],
    mission: "Trace the rest of the quest with your finger from the terrace before you head back down.",
    bonus: "If only one panoramic photo happens all day, this is the safest bet.",
    memoryPrompt: "What detail from above made the city layout finally click for you?",
    sourceLabel: "Rother's Mills source page",
    sourceUrl: "https://visitbydgoszcz.pl/en/explore/what-to-see/4192-rother-s-mills",
    geoPosition: { lat: 53.12302, lon: 17.99518 },
    mapPosition: { x: 34, y: 52 },
    highlightPause: {
      name: "Terrace linger",
      kind: "View reward",
      summary:
        "A short linger here keeps the route feeling generous rather than rushed, especially before the busier bridge section.",
      mapQuery: "Taras Mlyny Rothera, Bydgoszcz, Poland",
      sourceLabel: "Rother's Mills source",
      sourceUrl: "https://visitbydgoszcz.pl/en/explore/what-to-see/4192-rother-s-mills"
    }
  },
  {
    id: "mostowa",
    shortName: "Mostowa",
    name: "Mostowa, Granaries & Balancing Man",
    district: "Bridge postcard zone",
    signature: "Granaries and acrobatics",
    strapline:
      "Mostowa is where Bydgoszcz turns into a postcard: old granaries by the river, a balancing figure over the water, and the feeling that the city likes drama.",
    walkFromPrevious: "10 min walk",
    stayFor: "14-18 min",
    mapQuery: "Mostowa Bridge and Przechodzacy przez rzeke, Bydgoszcz, Poland",
    imageUrl: "https://visitbydgoszcz.pl/images/doswiadcz/co_zobaczyc/przechodzacy.jpg",
    imageAlt: "The Man Crossing the River sculpture suspended above the Brda in Bydgoszcz.",
    lookFor: [
      "the balancing man above the river",
      "the granaries near Mostowa Street",
      "the little amphitheatre by the waterside",
      "the classic river-and-bridge family photo angle"
    ],
    kidFacts: [
      "The balancing figure looks like a circus acrobat frozen in midair above the water.",
      "This is the checkpoint where children can try a one-leg balance test and decide if they are anywhere near as steady as the sculpture."
    ],
    adultFacts: [
      "The characteristic granary next to Mostowa is sometimes nicknamed the 'Dutch' granary because of its gabled roof style, and the small amphitheatre nearby makes the whole edge feel like a public stage.",
      "The Man Crossing the River was unveiled on 1 May 2004, and even the swallow carried by the figure links back to Andrzej Szwalbe from the Philharmonic story."
    ],
    mission: "Count the river details in one frame: bridge, granary, balancing man, and water reflection.",
    bonus:
      "This is the most reliable 'we really were in Bydgoszcz' photo checkpoint of the whole route.",
    memoryPrompt: "Was this the point where the city finally felt dramatic enough for a postcard?",
    sourceLabel: "Man Crossing the River source page",
    sourceUrl: "https://visitbydgoszcz.pl/en/explore/what-to-see/2558-man-crossing-the-river",
    geoPosition: { lat: 53.1225128, lon: 18.0008557 },
    mapPosition: { x: 45, y: 48 },
    highlightPause: {
      name: "Sowa Cafe at 5 Mostowa",
      kind: "Optional sweet detour",
      summary:
        "The official specialties page points to Sowa Cafe on Mostowa as a place for house coffee and old Bydgoszcz photo reprints.",
      mapQuery: "Sowa Cafe Mostowa 5, Bydgoszcz, Poland",
      sourceLabel: "Bydgoszcz specialties source",
      sourceUrl: "https://visitbydgoszcz.pl/en/discover/2387-bydgoszcz-specialties"
    }
  },
  {
    id: "gdanska",
    shortName: "Gdanska",
    name: "Gdanska Street & Cafe Primo",
    district: "Grand city axis",
    signature: "Art Nouveau and ice cream",
    strapline:
      "Now the route becomes urban and elegant: a long civic street, decorative facades, and the ice-cream reward point that locals have been recommending for years.",
    walkFromPrevious: "12 min walk",
    stayFor: "18-22 min",
    mapQuery: "Cafe Primo, Gdanska 18, Bydgoszcz, Poland",
    imageUrl: "https://visitbydgoszcz.pl/images/odkryj/trasy_zwiedzania/jedynak-bydgoszcz.jpg",
    imageAlt: "Historic architecture along Gdanska Street in Bydgoszcz.",
    lookFor: [
      "ornamental facades and balconies",
      "the long straight city axis of Gdanska Street",
      "the narrow access toward Kazimierz Wielki Park",
      "Cafe Primo as the ice-cream checkpoint"
    ],
    kidFacts: [
      "This stretch feels like a parade route for buildings, with lots of windows, balconies, and details to count.",
      "Cafe Primo is the fun reward point because the official city guide says locals have recommended it for years, especially for a special Bydgoszcz flavor."
    ],
    adultFacts: [
      "The interwar exhibition route treats Gdanska Street as the city's main thoroughfare for trade, services, entertainment, and public celebrations.",
      "It is also one of the best places on this walk to notice how Bydgoszcz layers civic life with Art Nouveau and early-20th-century architecture."
    ],
    mission: "Choose the best balcony or facade detail on Gdanska Street, then celebrate it with ice cream.",
    bonus:
      "If energy dips before the parks, this is the smartest official treat stop to keep everyone cheerful.",
    memoryPrompt: "Which building detail or ice-cream moment deserves a place in the final keepsake?",
    sourceLabel: "From Old Market Square to Wolnosci Square exhibition route",
    sourceUrl: "https://visitbydgoszcz.pl/en/what-s-on/current-exhibitions/2447-fromto",
    geoPosition: { lat: 53.126222, lon: 18.0042482 },
    mapPosition: { x: 60, y: 40 },
    highlightPause: {
      name: "Cafe Primo",
      kind: "Route ice-cream favorite",
      summary:
        "The official tourism portal says Bydgoszcz residents have recommended this Gdanska Street ice-cream shop for many years.",
      mapQuery: "Cafe Primo, Gdanska 18, Bydgoszcz, Poland",
      sourceLabel: "Bydgoszcz specialties source",
      sourceUrl: "https://visitbydgoszcz.pl/en/discover/2387-bydgoszcz-specialties"
    }
  },
  {
    id: "freedom-park",
    shortName: "Freedom",
    name: "Freedom Square & Kazimierz Wielki Park",
    district: "Garden interlude",
    signature: "Oldest park, big fountain",
    strapline:
      "The city softens again here: open square, old trees, pond atmosphere, and the park story that reaches back to convent gardens and forward to summer shade.",
    walkFromPrevious: "6 min walk",
    stayFor: "16-20 min",
    mapQuery: "Plac Wolnosci and Park Kazimierza Wielkiego, Bydgoszcz, Poland",
    imageUrl: "https://visitbydgoszcz.pl/images/odkryj/Ciekawostki/potop2.jpg",
    imageAlt: "The Deluge Fountain in Kazimierz Wielki Park in Bydgoszcz.",
    lookFor: [
      "the Deluge Fountain figures",
      "ponds and old trees around the park",
      "a playground for younger walkers",
      "the square opening into the park edge"
    ],
    kidFacts: [
      "This is the checkpoint where the park story gets huge, because the Deluge Fountain looks full of people, water, animals, and action all at once.",
      "It is also a useful little-leg stop because there is shade and a playground nearby."
    ],
    adultFacts: [
      "The tourism route says this is the oldest park in the city, growing out of the former Poor Clares garden before it was redesigned as a public park.",
      "The Deluge Fountain was unveiled in July 1909, and the park is still valued for rare tree species, ponds, and that sense of a formal urban garden."
    ],
    mission: "Pick one fountain figure and invent a one-line story about what happened one second before the giant splash scene.",
    bonus:
      "This park section keeps the route family-friendly because it adds breathing room before the music-quarter finale.",
    memoryPrompt: "What park detail made this stop feel most calm or story-filled?",
    sourceLabel: "Green Bydgoszcz itinerary",
    sourceUrl: "https://visitbydgoszcz.pl/en/explore/visitor-itineraries/2907-green",
    geoPosition: { lat: 53.1271358, lon: 18.0056659 },
    mapPosition: { x: 68, y: 32 },
    highlightPause: {
      name: "Park shade break",
      kind: "Cool-down moment",
      summary:
        "If the family needs five slower minutes before the theatre quarter, use the trees and benches here instead of pushing through.",
      mapQuery: "Park Kazimierza Wielkiego, Bydgoszcz, Poland",
      sourceLabel: "Green Bydgoszcz source",
      sourceUrl: "https://visitbydgoszcz.pl/en/explore/visitor-itineraries/2907-green"
    }
  },
  {
    id: "theatre-archer",
    shortName: "Theatre",
    name: "Polish Theatre & Archer Lady",
    district: "Culture threshold",
    signature: "One symbolic city pose",
    strapline:
      "Here the quest steps fully into Bydgoszcz's culture quarter, where theatre energy, park edges, and the Archer Lady turn the stop into a city symbol moment.",
    walkFromPrevious: "5 min walk",
    stayFor: "12-15 min",
    mapQuery: "Polish Theatre and Archer Lady, Bydgoszcz, Poland",
    imageUrl: "https://visitbydgoszcz.pl/images/doswiadcz/co_zobaczyc/luczniczka.jpg",
    imageAlt: "The Archer Lady statue in Bydgoszcz near the theatre quarter.",
    lookFor: [
      "the Archer Lady sculpture",
      "the theatre frontage nearby",
      "the park square between culture buildings",
      "the transition from busy street to quieter quarter"
    ],
    kidFacts: [
      "The Archer Lady makes this whole stop feel like a fairy-tale hero checkpoint right beside a real theatre.",
      "Children can copy the pose and decide whether they would aim at a dragon, an apple, or an ice-cream thief."
    ],
    adultFacts: [
      "The Archer Lady is one of Bydgoszcz's best-known symbols; the sculpture was designed by Ferdinand Lepcke and belongs to the city's identity story.",
      "Official route material places the statue on the park square across from the Polish Theatre, exactly where the culture quarter starts to feel coherent."
    ],
    mission: "Take the family version of the Archer Lady pose and decide who has the steadiest aim.",
    bonus: "This is one of the clearest symbolic photo moments after the river and granaries.",
    memoryPrompt: "Did the Archer Lady feel more heroic, playful, or dramatic to your family?",
    sourceLabel: "Archer Lady official search results",
    sourceUrl: "https://visitbydgoszcz.pl/en/wyszukiwarka?searchword=Archer%20Lady",
    geoPosition: { lat: 53.1308744, lon: 18.0121007 },
    mapPosition: { x: 75, y: 25 }
  },
  {
    id: "jan-park",
    shortName: "Jan Park",
    name: "Jan Kochanowski Park of Composers",
    district: "Music under trees",
    signature: "Composer statues and playground",
    strapline:
      "This is the park stop where the family can wander, listen, and look for statues: an elegant green room made specifically for the musical identity of the district.",
    walkFromPrevious: "4 min walk",
    stayFor: "14-18 min",
    mapQuery: "Jan Kochanowski Park, Bydgoszcz, Poland",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/23/Park_Jana_Kochanowskiego_w_Bydgoszczy_4_2023.jpg",
    imageAlt: "Jan Kochanowski Park in Bydgoszcz with tree-lined paths and composer surroundings.",
    lookFor: [
      "meandering paths through the park",
      "composer and virtuoso statues",
      "playground space for younger walkers",
      "the musical playground where children can make a little noise",
      "the feeling of music institutions all around the green"
    ],
    kidFacts: [
      "This park turns into a treasure hunt when children start searching for famous composers hidden among the paths.",
      "There is also a musical playground pause here, so younger walkers get a hands-on stop instead of only statues and grown-up stories."
    ],
    adultFacts: [
      "Jan Kochanowski Park was established in 1901 and is still one of the city's favorite recreation spots thanks to its landscape design and calm central location.",
      "On Andrzej Szwalbe's initiative, the area around the park and Philharmonic was gradually enriched with statues of composers and virtuosos, turning the quarter into a real music district."
    ],
    mission: "Find one composer statue and give the family a ten-second made-up tune in their honor.",
    bonus:
      "This is the best late-route place to let the quest feel gentle rather than checklist-like.",
    memoryPrompt: "Which part of this park felt most peaceful, playful, or musical?",
    sourceLabel: "Green Bydgoszcz itinerary",
    sourceUrl: "https://visitbydgoszcz.pl/en/explore/visitor-itineraries/2907-green",
    geoPosition: { lat: 53.1297597, lon: 18.0114344 },
    mapPosition: { x: 82, y: 18 },
    highlightPause: {
      name: "Muzyczny Plac Zabaw",
      kind: "Children's reset pause",
      summary:
        "Inside Jan Kochanowski Park there is a named musical playground, so this stop can become a real child-energy bridge with swings and sound-making play pieces.",
      mapQuery: "53.1303538,18.0115320",
      sourceLabel: "OpenStreetMap named playground listing",
      sourceUrl: "https://www.openstreetmap.org/way/375202206"
    }
  },
  {
    id: "philharmonic",
    shortName: "Hall",
    name: "Pomeranian Philharmonic Finale",
    district: "Music district finale",
    signature: "Quiet cultural finish",
    strapline:
      "End where the route becomes its calmest and most composed: in front of the Philharmonic, with the whole music quarter around you and enough space for a proper finale.",
    walkFromPrevious: "3 min walk",
    stayFor: "14-18 min",
    mapQuery: "Pomeranian Philharmonic, Bydgoszcz, Poland",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/62/Bydgoszcz%2C_Filharmonia_Pomorska%2C_1954-1958c.JPG",
    imageAlt: "The Pomeranian Philharmonic building in Bydgoszcz.",
    lookFor: [
      "the Neo-Classical Philharmonic building",
      "the nearby Academy of Music presence",
      "the composer-filled green surroundings",
      "a good final family-photo edge in the district"
    ],
    kidFacts: [
      "This last stop feels like the city has turned into a giant music room, even outdoors.",
      "It is a great finale challenge to invent a victory tune before the quest ends."
    ],
    adultFacts: [
      "Official tourism material describes the Music District as one of the city's most interesting urban-planning solutions, with the Philharmonic as one of its anchors.",
      "Search results on the city's tourism portal note that the Pomeranian Philharmonic, established on 1 January 1953, is a particular point of pride for Bydgoszcz."
    ],
    mission: "Give the route a final round of applause and create a ten-second family ending theme.",
    bonus:
      "This is the cleanest finale because it feels complete even if the family stops here for a rest rather than continuing elsewhere.",
    memoryPrompt: "What should the final postcard sentence say about the whole Bydgoszcz walk?",
    sourceLabel: "Pomeranian Philharmonic official search results",
    sourceUrl: "https://visitbydgoszcz.pl/en/wyszukiwarka?searchword=Pomeranian%20Philharmonic",
    geoPosition: { lat: 53.1289723, lon: 18.0108252 },
    mapPosition: { x: 88, y: 12 }
  }
];

const pauseSpots = [
  {
    name: "Cafe Primo",
    kind: "Ice-cream reward",
    summary:
      "The official Bydgoszcz specialties page says residents have recommended Cafe Primo on Gdanska Street for years, including a Bydgoszcz flavor.",
    whyItWorks:
      "Best timed on the way toward the theatre quarter when younger walkers need a cheerful reset.",
    mapQuery: "Cafe Primo, Gdanska 18, Bydgoszcz, Poland",
    sourceLabel: "Bydgoszcz specialties source",
    sourceUrl: "https://visitbydgoszcz.pl/en/discover/2387-bydgoszcz-specialties"
  },
  {
    name: "Bromberg Coffee",
    kind: "Host coffee pick",
    summary:
      "Keep this as the grown-up coffee stop you can flex into the route once the family has settled into the old-centre rhythm.",
    whyItWorks:
      "Useful if you want one more personal, less touristy-feeling pause in the day.",
    mapQuery: "Bromberg Coffee, Bydgoszcz, Poland",
    sourceLabel: "Route host pick"
  },
  {
    name: "Rother's Mills and terrace",
    kind: "View plus culture pause",
    summary:
      "The mills give you the easiest route-native pause: interiors to explore, river edges to rest by, and a terrace that rewards the climb.",
    whyItWorks:
      "Best when the family wants a proper midpoint break without leaving the quest.",
    mapQuery: "Mlyny Rothera, Bydgoszcz, Poland",
    sourceLabel: "Rother's Mills source",
    sourceUrl: "https://visitbydgoszcz.pl/en/explore/what-to-see/4192-rother-s-mills"
  },
  {
    name: "Muzyczny Plac Zabaw",
    kind: "Playground with sound",
    summary:
      "Jan Kochanowski Park includes a named musical playground, giving younger walkers a cheerful hands-on bridge before the Philharmonic finale.",
    whyItWorks:
      "This is the best late-route child reset because it keeps the music-district theme but turns it into play rather than more looking only.",
    mapQuery: "53.1303538,18.0115320",
    sourceLabel: "OpenStreetMap named playground listing",
    sourceUrl: "https://www.openstreetmap.org/way/375202206"
  },
  {
    name: "Sowa Cafe on Mostowa",
    kind: "Sweet optional detour",
    summary:
      "The official specialties page points to the Mostowa branch for house coffee and historic photographs of old Bydgoszcz on display.",
    whyItWorks:
      "A neat bridge-area pause if the family wants a quieter sit-down before Gdanska Street.",
    mapQuery: "Sowa Cafe Mostowa 5, Bydgoszcz, Poland",
    sourceLabel: "Bydgoszcz specialties source",
    sourceUrl: "https://visitbydgoszcz.pl/en/discover/2387-bydgoszcz-specialties"
  }
];

const deepDiveNotes = {
  "old-market": {
    intro: "If someone wants the longer version, these fold-outs add extra Bydgoszcz context without sending the family away from the route.",
    kids: [
      "Master Twardowski is part of a famous Polish legend about a magician and trickster, which is why his little window appearance feels playful instead of solemn.",
      "The meridian line works well as a body game: one child can guard the east side, another the west side, and the whole group can pretend they are balancing the world."
    ],
    adults: [
      "This one stop compresses medieval planning, civic ceremony, market trade, and religion into one compact frame, which is why Bydgoszcz becomes legible so fast here.",
      "The contrast between pale facades and the Gothic cathedral also sets up a pattern that repeats across the walk: soft civic fronts against strong red-brick anchors."
    ]
  },
  "mill-island": {
    intro: "Mill Island looks gentle at first, but it is one of the best places to understand how water shaped the city.",
    kids: [
      "Children can imagine the island as a giant stepping-stone game, because the bridges make the park feel like it was designed for hopping and crossing.",
      "It also works like a reset level in a video game: the city turns green and quiet so little walkers can recharge before the next dramatic buildings."
    ],
    adults: [
      "Mill Island is not just a pretty park; it is where leisure, ecology, and the old industrial economy overlap most clearly in the city centre.",
      "That mix is part of Bydgoszcz's identity: the river is never only decorative, because it also explains how the city once worked and traded."
    ]
  },
  "rother-inside": {
    intro: "This is the point where the route shifts from postcard beauty into the city's working memory.",
    kids: [
      "The fun comparison game here is simple: point at one detail that feels like an old factory and one detail that feels like a new science-and-story space.",
      "Because the building is oversized, children often read it like a castle first and a mill second, which makes the discovery feel more adventurous."
    ],
    adults: [
      "Rother's Mills tell a very current urban story: heritage is not frozen behind ropes here, it has been repurposed into something social, cultural, and useful again.",
      "That reuse matters because it lets the city show industrial confidence without turning the route heavy or museum-like for families."
    ]
  },
  "rother-terrace": {
    intro: "The terrace is where the route becomes spatial instead of only narrative.",
    kids: [
      "From above, the quest turns into a real spotting puzzle: bridges, roofs, river bends, and tiny paths all become easier to count.",
      "It is also a great place to let the youngest walkers point at where they think the adventure goes next before anyone checks the map."
    ],
    adults: [
      "Viewpoints matter on family walks because they give meaning to earlier stops; suddenly the island, mills, and old town stop feeling separate.",
      "This deck explains why Bydgoszcz feels coherent as a river city: the water is the thread that stitches the landmarks together."
    ]
  },
  "mostowa": {
    intro: "Mostowa is the route's most theatrical postcard scene, and that is exactly why it tends to become a memory anchor.",
    kids: [
      "The balancing man invites instant imitation, so this stop almost creates its own mini challenge without needing extra equipment.",
      "Children can also turn it into a detective game: who is braver, the statue above the river or the person trying to copy the pose on the bridge?"
    ],
    adults: [
      "The sculpture, granaries, and bridge geometry create an unusually strong civic stage set, which is why so many visitors remember this stretch first.",
      "It is one of the best examples on the route of Bydgoszcz using art in public space to amplify what the riverfront already does well."
    ]
  },
  "gdanska": {
    intro: "Gdanska Street adds a different kind of beauty: less river drama, more urban confidence.",
    kids: [
      "This stretch is great for a count-the-details game because windows, balconies, and ornaments keep changing from building to building.",
      "Cafe Primo also gives the route an emotional trick: a food reward makes the architecture feel friendlier for younger walkers."
    ],
    adults: [
      "Gdanska is where Bydgoszcz feels most metropolitan, because trade, style, and everyday public life line up along one long ceremonial street.",
      "That makes it a useful contrast to the river stops: here the city performs through facades and rhythm rather than water and bridges."
    ]
  },
  "freedom-park": {
    intro: "This square-and-park section gives the walk breathing room while quietly deepening the city's green story.",
    kids: [
      "The Deluge Fountain is almost a picture book in stone and water, so children can invent a full action scene from one frozen splash.",
      "Because there is shade and play nearby, this is also a stop where the quest can feel generous instead of demanding."
    ],
    adults: [
      "Kazimierz Wielki Park shows how Bydgoszcz turned older garden land into formal public leisure space without losing a sense of age and dignity.",
      "That balance matters in family pacing: this is where cultural walking becomes sustainable instead of relentless."
    ]
  },
  "theatre-archer": {
    intro: "This is the symbolic threshold between street life and the music-and-theatre quarter.",
    kids: [
      "The Archer Lady works almost like a storybook guardian for the district, which is why children usually understand her pose before they know her name.",
      "Copying the stance turns a city symbol into a physical challenge, and that makes the stop memorable in a very family-friendly way."
    ],
    adults: [
      "Some landmarks matter less because they are old and more because they are emblematic; the Archer Lady belongs in that second category for Bydgoszcz.",
      "Placed beside the theatre and park edge, she helps the quarter read as a composed cultural scene rather than a scattered set of buildings."
    ]
  },
  "jan-park": {
    intro: "Jan Kochanowski Park is where the route settles into a softer, almost musical tempo.",
    kids: [
      "Looking for composer statues gives the park a treasure-hunt feeling, especially if the family invents a tiny tune for each one.",
      "This is also one of the easiest places to let four-year-olds wander a little without the route losing shape."
    ],
    adults: [
      "The park is important not only as greenery but as part of the music district's identity system: culture here spills outdoors into the paths and sculptures.",
      "That makes the area feel curated in a subtle way, as if the city has built an open-air foyer around its institutions."
    ]
  },
  "philharmonic": {
    intro: "The finale works because it is calm, not because it shouts the loudest.",
    kids: [
      "By the end of the route, children can treat the Philharmonic stop like the final level where everyone invents a victory soundtrack together.",
      "It is a satisfying finish because the city suddenly feels ordered, polished, and ready for applause."
    ],
    adults: [
      "The Philharmonic completes the district's planning story: Bydgoszcz ends the walk with culture, greenery, and civic calm instead of pure spectacle.",
      "That kind of ending is powerful because it lets the family leave with a sense of finish rather than fatigue."
    ]
  }
};

const ratingLabels = ["Quick peek", "Nice", "Good", "Loved it", "Top stop"];
const storageKey = "amy-bydgoszcz-family-quest-v2";
const atlasBounds = {
  minLon: 17.9938,
  maxLon: 18.0134,
  minLat: 53.1212,
  maxLat: 53.1317
};
const atlasMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${atlasBounds.minLon}%2C${atlasBounds.minLat}%2C${atlasBounds.maxLon}%2C${atlasBounds.maxLat}&layer=mapnik`;
const atlasMapLink = "https://www.openstreetmap.org/?mlat=53.1268&mlon=18.0048#map=15/53.1268/18.0048";

const state = loadStoredState();
let noteSaveTimer = null;
let menuOpen = false;

function clampIndex(index) {
  const normalized = Number(index);
  if (Number.isNaN(normalized)) {
    return 0;
  }

  return Math.min(routeStops.length - 1, Math.max(0, normalized));
}

function loadStoredState() {
  let parsed = {};

  try {
    parsed = JSON.parse(window.localStorage.getItem(storageKey) || "{}") || {};
  } catch (error) {
    console.warn("Could not read saved trail state.", error);
  }

  return {
    activeStop: clampIndex(parsed.activeStop),
    memories: parsed.memories && typeof parsed.memories === "object" ? parsed.memories : {}
  };
}

function persistState() {
  try {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({
        activeStop: state.activeStop,
        memories: state.memories
      })
    );

    return true;
  } catch (error) {
    console.warn("Could not persist trail state.", error);
    return false;
  }
}

function mapEmbedUrl(query) {
  return `https://maps.google.com/maps?hl=en&q=${encodeURIComponent(query)}&z=16&output=embed`;
}

function mapSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function directionsUrl(origin, destination) {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=walking`;
}

function atlasPointFor(stop) {
  const position = stop.geoPosition;

  if (!position) {
    return stop.mapPosition;
  }

  const x = ((position.lon - atlasBounds.minLon) / (atlasBounds.maxLon - atlasBounds.minLon)) * 100;
  const y = ((atlasBounds.maxLat - position.lat) / (atlasBounds.maxLat - atlasBounds.minLat)) * 100;

  return {
    x: Math.max(4, Math.min(96, x)),
    y: Math.max(4, Math.min(96, y))
  };
}

function escapeHtml(value) {
  return String(value)
    .replace(/\u00c2\u00b7/g, "|")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function hasMemory(memory) {
  return Boolean(
    memory &&
      ((typeof memory.note === "string" && memory.note.trim()) ||
        (typeof memory.photoDataUrl === "string" && memory.photoDataUrl) ||
        (typeof memory.rating === "number" && memory.rating > 0))
  );
}

function getStopMemory(stopId) {
  return state.memories[stopId] || {};
}

function upsertMemory(stopId, updates) {
  const current = getStopMemory(stopId);
  const next = {
    rating: Object.prototype.hasOwnProperty.call(updates, "rating") ? updates.rating : current.rating,
    note: Object.prototype.hasOwnProperty.call(updates, "note") ? updates.note : current.note,
    photoDataUrl: Object.prototype.hasOwnProperty.call(updates, "photoDataUrl") ? updates.photoDataUrl : current.photoDataUrl,
    photoName: Object.prototype.hasOwnProperty.call(updates, "photoName") ? updates.photoName : current.photoName
  };

  const normalized = {};

  if (typeof next.rating === "number" && next.rating > 0) {
    normalized.rating = next.rating;
  }

  if (typeof next.note === "string" && next.note.trim()) {
    normalized.note = next.note.trim();
  }

  if (typeof next.photoDataUrl === "string" && next.photoDataUrl) {
    normalized.photoDataUrl = next.photoDataUrl;
    normalized.photoName = next.photoName || "checkpoint-memory.jpg";
  }

  if (Object.keys(normalized).length) {
    normalized.updatedAt = new Date().toISOString();
    state.memories[stopId] = normalized;
  } else {
    delete state.memories[stopId];
  }

  return persistState();
}

function getSavedEntries() {
  return routeStops
    .map((stop, index) => ({
      stop,
      index,
      memory: getStopMemory(stop.id)
    }))
    .filter((entry) => hasMemory(entry.memory));
}

function getFavoriteEntry(entries) {
  const rated = entries.filter((entry) => typeof entry.memory.rating === "number" && entry.memory.rating > 0);

  if (!rated.length) {
    return null;
  }

  return rated.sort((left, right) => {
    if (right.memory.rating !== left.memory.rating) {
      return right.memory.rating - left.memory.rating;
    }

    return left.index - right.index;
  })[0];
}

function countPhotos(entries) {
  return entries.filter((entry) => entry.memory.photoDataUrl).length;
}

function countNotes(entries) {
  return entries.filter((entry) => entry.memory.note).length;
}

function getMemoryBitLabels(memory) {
  const bits = [];

  if (typeof memory.rating === "number" && memory.rating > 0) {
    bits.push(`${memory.rating}/5 rated`);
  }

  if (memory.note) {
    bits.push("note saved");
  }

  if (memory.photoDataUrl) {
    bits.push("photo saved");
  }

  return bits;
}

function memoryPillMarkup(label) {
  return `<span class="memory-mini-pill">${escapeHtml(label)}</span>`;
}

function buildBannerMetricMarkup(label, value, note) {
  return `
    <article class="banner-metric">
      <strong>${value}</strong>
      <span>${label}</span>
      <small>${note}</small>
    </article>
  `;
}

function buildMenuMetricMarkup(label, value, note) {
  return `
    <article class="menu-metric">
      <strong>${escapeHtml(value)}</strong>
      <span>${escapeHtml(label)}</span>
      <small>${escapeHtml(note)}</small>
    </article>
  `;
}

function buildCityMapMarkup() {
  const atlasPoints = routeStops.map((stop) => atlasPointFor(stop));
  const routePoints = atlasPoints.map((point) => `${point.x},${point.y}`).join(" ");
  const oldTownPoint = atlasPoints[0];
  const musicPoint = atlasPoints[atlasPoints.length - 1];
  const riverPoint = atlasPoints[2];

  const pinMarkup = routeStops
    .map((stop, index) => {
      const activeClass = index === state.activeStop ? " map-pin is-active" : " map-pin";
      const memoryClass = hasMemory(getStopMemory(stop.id)) ? " has-memory" : "";
      const point = atlasPoints[index];

      return `
        <button
          class="${activeClass}${memoryClass}"
          type="button"
          data-map-index="${index}"
          style="left: ${point.x}%; top: ${point.y}%;"
        >
          <strong>${String(index + 1).padStart(2, "0")}</strong>
          <small>${escapeHtml(stop.shortName)}</small>
        </button>
      `;
    })
    .join("");

  return `
    <div class="atlas-canvas">
      <iframe
        class="atlas-real-map"
        title="Route map of central Bydgoszcz"
        src="${atlasMapUrl}"
        loading="lazy"
        tabindex="-1"
        aria-hidden="true"
      ></iframe>
      <div class="atlas-map-wash"></div>
      <svg class="city-map-svg" viewBox="0 0 100 100" aria-hidden="true">
        <polyline class="city-route-path" points="${routePoints}"></polyline>
      </svg>
      <div class="atlas-label atlas-label-inline" style="left: ${Math.max(6, oldTownPoint.x - 5)}%; top: ${Math.min(92, oldTownPoint.y + 7)}%;">Old Town</div>
      <div class="atlas-label atlas-label-inline" style="left: ${Math.max(10, riverPoint.x - 8)}%; top: ${Math.min(92, riverPoint.y + 10)}%;">Brda bend</div>
      <div class="atlas-label atlas-label-inline" style="left: ${Math.max(10, musicPoint.x - 14)}%; top: ${Math.max(6, musicPoint.y - 9)}%;">Music District</div>
      ${pinMarkup}
      <div class="atlas-map-footer">
        <a class="atlas-map-link" href="${atlasMapLink}" target="_blank" rel="noreferrer">Open full Bydgoszcz route map</a>
        <span>Map data © OpenStreetMap contributors</span>
      </div>
    </div>
  `;
}

function menuRouteButtonMarkup(stop, index) {
  const memory = getStopMemory(stop.id);
  const activeClass = index === state.activeStop ? "menu-route-button is-active" : "menu-route-button";
  const memoryBits = getMemoryBitLabels(memory);

  return `
    <button class="${activeClass}" type="button" data-menu-stop-index="${index}">
      <span class="menu-route-index">Stop ${String(index + 1).padStart(2, "0")}</span>
      <strong>${escapeHtml(stop.name)}</strong>
      <span>${escapeHtml(stop.signature)}</span>
      <small>${escapeHtml(memoryBits.length ? memoryBits.join(" | ") : stop.walkFromPrevious)}</small>
    </button>
  `;
}

function railButtonMarkup(stop, index) {
  const memory = getStopMemory(stop.id);
  const activeClass = index === state.activeStop ? "rail-stop is-active" : "rail-stop";
  const memoryText = hasMemory(memory)
    ? `${memory.rating ? `${memory.rating}/5` : "saved"} checkpoint`
    : "open checkpoint";

  return `
    <button class="${activeClass}" type="button" data-stop-index="${index}">
      <span class="rail-stop-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="rail-stop-copy">
        <strong>${escapeHtml(stop.name)}</strong>
        <span>${escapeHtml(stop.walkFromPrevious)}</span>
        <small class="${hasMemory(memory) ? "rail-memory" : "rail-memory rail-memory-muted"}">${escapeHtml(memoryText)}</small>
      </span>
    </button>
  `;
}

function overviewButtonMarkup(stop, index) {
  const memory = getStopMemory(stop.id);
  const activeClass = index === state.activeStop ? "overview-card is-active" : "overview-card";
  const memoryBits = getMemoryBitLabels(memory).map((bit) => bit.replace(" saved", ""));

  return `
    <button class="${activeClass}" type="button" data-overview-index="${index}">
      <span class="overview-index">${String(index + 1).padStart(2, "0")}</span>
      <strong>${escapeHtml(stop.name)}</strong>
      <span>${escapeHtml(stop.walkFromPrevious)}</span>
      <small class="${memoryBits.length ? "overview-memory" : "overview-memory overview-memory-muted"}">
        ${escapeHtml(memoryBits.length ? memoryBits.join(" · ") : "no stamp yet")}
      </small>
    </button>
  `;
}

function pauseCardMarkup(spot) {
  const sourceMarkup = spot.sourceUrl
    ? `<a class="source-link" href="${spot.sourceUrl}" target="_blank" rel="noreferrer">${escapeHtml(spot.sourceLabel)}</a>`
    : `<span class="source-link source-link-muted">${escapeHtml(spot.sourceLabel)}</span>`;

  return `
    <article class="pause-card">
      <div class="pause-card-top">
        <span class="pause-kind">${escapeHtml(spot.kind)}</span>
        <h3>${escapeHtml(spot.name)}</h3>
      </div>
      <p>${escapeHtml(spot.summary)}</p>
      <p class="pause-why">${escapeHtml(spot.whyItWorks)}</p>
      <div class="pause-actions">
        <a class="secondary-link" href="${mapSearchUrl(spot.mapQuery)}" target="_blank" rel="noreferrer">Open in Google Maps</a>
        ${sourceMarkup}
      </div>
    </article>
  `;
}

function treatCardMarkup(spot) {
  const sourceMarkup = spot.sourceUrl
    ? `<a class="source-link" href="${spot.sourceUrl}" target="_blank" rel="noreferrer">${escapeHtml(spot.sourceLabel)}</a>`
    : `<span class="source-link source-link-muted">${escapeHtml(spot.sourceLabel)}</span>`;

  return `
    <article class="treat-card">
      <div class="treat-card-top">
        <span class="pause-kind">${escapeHtml(spot.kind)}</span>
        <h3>${escapeHtml(spot.name)}</h3>
      </div>
      <p>${escapeHtml(spot.summary)}</p>
      <div class="pause-actions">
        <a class="secondary-link" href="${mapSearchUrl(spot.mapQuery)}" target="_blank" rel="noreferrer">Open this pause</a>
        ${sourceMarkup}
      </div>
    </article>
  `;
}

function ratingButtonMarkup(value, currentRating) {
  const activeClass = currentRating === value ? "rating-button is-active" : "rating-button";

  return `
    <button class="${activeClass}" type="button" data-rating="${value}" aria-pressed="${currentRating === value}">
      <strong>${value}</strong>
      <span>${ratingLabels[value - 1]}</span>
    </button>
  `;
}

function factListMarkup(items) {
  return `
    <ul class="fact-list">
      ${items.map((fact) => `<li>${escapeHtml(fact)}</li>`).join("")}
    </ul>
  `;
}

function deepDivePanelMarkup(tone, title, paragraphs) {
  return `
    <details class="deep-dive-panel ${tone}">
      <summary>
        <span>${escapeHtml(title)}</span>
        <small>Open the richer version without leaving the app.</small>
      </summary>
      <div class="deep-dive-body">
        ${paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </div>
    </details>
  `;
}

function buildDeepDiveMarkup(stop) {
  const content = deepDiveNotes[stop.id];

  if (!content) {
    return "";
  }

  const panels = [];

  if (Array.isArray(content.kids) && content.kids.length) {
    panels.push(deepDivePanelMarkup("is-kids", "Little explorer extra", content.kids));
  }

  if (Array.isArray(content.adults) && content.adults.length) {
    panels.push(deepDivePanelMarkup("is-grownups", "City nerd extra", content.adults));
  }

  if (!panels.length) {
    return "";
  }

  return `
    <section class="deep-dive-card">
      <div class="deep-dive-heading">
        <p class="fact-label">Open the bigger story</p>
        <p>${escapeHtml(content.intro)}</p>
      </div>
      <div class="deep-dive-grid">
        ${panels.join("")}
      </div>
    </section>
  `;
}

function memoryPhotoMarkup(stop, memory) {
  if (!memory.photoDataUrl) {
    return `
      <div class="photo-preview-empty">
        No photo saved for this checkpoint yet. Add one if you want the final keepsake to feel more personal.
      </div>
    `;
  }

  return `
    <figure class="photo-preview-card">
      <img src="${memory.photoDataUrl}" alt="Memory from ${escapeHtml(stop.name)}" loading="lazy" />
      <figcaption>${escapeHtml(memory.photoName || "Saved checkpoint photo")}</figcaption>
    </figure>
  `;
}

function memoryEntryMarkup(entry) {
  const ratingText = entry.memory.rating ? `${entry.memory.rating}/5` : "Unrated";
  const noteMarkup = entry.memory.note
    ? `<p>${escapeHtml(entry.memory.note)}</p>`
    : `<p class="memory-entry-muted">No written note for this checkpoint yet.</p>`;
  const photoMarkup = entry.memory.photoDataUrl
    ? `<img class="memory-entry-photo" src="${entry.memory.photoDataUrl}" alt="Memory from ${escapeHtml(entry.stop.name)}" loading="lazy" />`
    : "";

  return `
    <article class="memory-entry">
      <div class="memory-entry-top">
        <span class="memory-entry-index">Stop ${String(entry.index + 1).padStart(2, "0")}</span>
        <span class="memory-rating-pill">${escapeHtml(ratingText)}</span>
      </div>
      <h3>${escapeHtml(entry.stop.name)}</h3>
      ${noteMarkup}
      ${photoMarkup}
      <button class="secondary-link as-button compact-button" type="button" data-memory-index="${entry.index}">
        Jump back to this stop
      </button>
    </article>
  `;
}

function renderChromeAndMenu() {
  const currentStop = routeStops[state.activeStop];
  const entries = getSavedEntries();
  const favorite = getFavoriteEntry(entries);
  const menuButton = document.getElementById("menu-button");
  const menuOverlay = document.getElementById("menu-overlay");
  const menuDrawer = document.getElementById("menu-drawer");

  document.getElementById("chrome-progress").textContent = `Stop ${state.activeStop + 1} of ${routeStops.length}`;
  document.getElementById("chrome-stop-name").textContent = currentStop.name;

  menuButton.setAttribute("aria-expanded", String(menuOpen));
  menuOverlay.hidden = !menuOpen;
  menuDrawer.setAttribute("aria-hidden", String(!menuOpen));
  menuDrawer.classList.toggle("is-open", menuOpen);
  document.body.classList.toggle("menu-open", menuOpen);

  document.getElementById("menu-metrics").innerHTML = [
    buildMenuMetricMarkup("active stop", `#${String(state.activeStop + 1).padStart(2, "0")}`, currentStop.shortName),
    buildMenuMetricMarkup("saved memories", `${entries.length}`, "ratings, notes, or photos"),
    buildMenuMetricMarkup(
      "favorite so far",
      favorite ? favorite.stop.shortName : "TBD",
      favorite ? `${favorite.memory.rating}/5 stamp leader` : "rate one stop to crown it"
    )
  ].join("");

  document.getElementById("menu-route").innerHTML = routeStops.map(menuRouteButtonMarkup).join("");
}

function renderCheckpointPassport(stop, memory) {
  const memoryBits = getMemoryBitLabels(memory);
  const hasDetailedMemory = Boolean(memory.note || memory.photoDataUrl);
  const drawer = document.getElementById("memory-drawer");
  const isSameStop = drawer.getAttribute("data-stop-id") === stop.id;

  document.getElementById("memory-prompt").textContent = stop.memoryPrompt;
  document.getElementById("rating-row").innerHTML = [1, 2, 3, 4, 5]
    .map((value) => ratingButtonMarkup(value, memory.rating || 0))
    .join("");
  document.getElementById("memory-mini-row").innerHTML = memoryBits.length
    ? memoryBits.map(memoryPillMarkup).join("")
    : '<span class="memory-mini-empty">Nothing tucked away yet. A quick rating is enough to start.</span>';
  document.getElementById("memory-drawer-title").textContent = hasDetailedMemory
    ? "Edit saved note or photo"
    : "Optional: add a note or photo";
  document.getElementById("memory-drawer-copy").textContent = hasDetailedMemory
    ? "You already saved something here. Adjust it any time."
    : "Keep one tiny detail for the end-of-walk keepsake.";
  document.getElementById("memory-note").value = memory.note || "";
  document.getElementById("memory-photo").value = "";
  document.getElementById("photo-preview").innerHTML = memoryPhotoMarkup(stop, memory);
  drawer.setAttribute("data-stop-id", stop.id);

  if (!isSameStop) {
    drawer.open = hasDetailedMemory;
  } else if (hasDetailedMemory) {
    drawer.open = true;
  }

  if (hasMemory(memory)) {
    setMemoryStatus("Saved in this browser", "ok");
  } else {
    setMemoryStatus("Nothing saved for this stop yet", "neutral");
  }
}

function renderCityMap() {
  document.getElementById("city-map").innerHTML = buildCityMapMarkup();
}

function renderBannerMetrics() {
  const entries = getSavedEntries();
  const favorite = getFavoriteEntry(entries);
  const metrics = [
    buildBannerMetricMarkup("checkpoints", `${routeStops.length}`, "full family quest"),
    buildBannerMetricMarkup("memories saved", `${entries.length}`, "notes, ratings, or photos"),
    buildBannerMetricMarkup("photos tucked away", `${countPhotos(entries)}`, "ready for a future keepsake"),
    buildBannerMetricMarkup(
      "favorite so far",
      favorite ? favorite.stop.shortName : "TBD",
      favorite ? `${favorite.memory.rating}/5 stamp leader` : "rate a stop to crown one"
    )
  ];

  document.getElementById("banner-metrics").innerHTML = metrics.join("");
}

function renderProgressAndNavigation() {
  const progressCount = state.activeStop + 1;
  const progressPercent = Math.round((progressCount / routeStops.length) * 100);

  document.getElementById("progress-value").textContent = `${progressCount} / ${routeStops.length}`;
  document.getElementById("progress-ring").setAttribute("aria-label", `Opened ${progressCount} of ${routeStops.length} checkpoints`);
  document.getElementById("progress-ring-track").style.setProperty("--ring-angle", `${progressPercent * 3.6}deg`);
  document.getElementById("rail-list").innerHTML = routeStops.map(railButtonMarkup).join("");
  document.getElementById("overview-grid").innerHTML = routeStops.map(overviewButtonMarkup).join("");
}

function renderStage() {
  const currentStop = routeStops[state.activeStop];
  const nextStop = routeStops[state.activeStop + 1];
  const currentMemory = getStopMemory(currentStop.id);
  const nextMapQuery = currentStop.nextMapQuery || (nextStop ? nextStop.mapQuery : currentStop.mapQuery);
  const nextLinkLabel = currentStop.nextLabel || (nextStop ? "Take us to the next stop" : "Open the finale in Google Maps");
  const factMarkup = [];

  document.getElementById("stop-kicker").textContent = `Stop ${state.activeStop + 1}`;
  document.getElementById("stop-name").textContent = currentStop.name;
  document.getElementById("walk-pill").textContent = currentStop.walkFromPrevious;
  document.getElementById("stay-pill").textContent = currentStop.stayFor;
  document.getElementById("district-chip").textContent = currentStop.district;
  document.getElementById("signature-chip").textContent = currentStop.signature;
  document.getElementById("stop-strapline").textContent = currentStop.strapline;
  document.getElementById("fact-intro-card").innerHTML = `
    <p class="fact-label">Shared story mode</p>
    <p>Kid clues and adult context now show together, so the family can read one stop without extra taps.</p>
  `;
  document.getElementById("look-for-list").innerHTML = currentStop.lookFor
    .map(
      (item) => `
        <li>
          <span class="look-bullet"></span>
          <span>${escapeHtml(item)}</span>
        </li>
      `
    )
    .join("");

  factMarkup.push(`
    <article class="fact-card fact-section-card is-kids">
      <p class="fact-label">For Younger Explorers</p>
      ${factListMarkup(currentStop.kidFacts)}
    </article>
  `);

  factMarkup.push(`
    <article class="fact-card fact-section-card is-grownups">
      <p class="fact-label">For Curious Grown-Ups</p>
      ${factListMarkup(currentStop.adultFacts)}
    </article>
  `);

  factMarkup.push(`
    <article class="fact-card mission-card">
      <p class="fact-label">Mini mission</p>
      <p>${escapeHtml(currentStop.mission)}</p>
      <span class="bonus-note">${escapeHtml(currentStop.bonus)}</span>
    </article>
  `);

  document.getElementById("fact-grid").innerHTML = factMarkup.join("");
  document.getElementById("deep-dive-slot").innerHTML = buildDeepDiveMarkup(currentStop);
  document.getElementById("treat-slot").innerHTML = currentStop.highlightPause ? treatCardMarkup(currentStop.highlightPause) : "";

  const openMapLink = document.getElementById("open-map-link");
  const directionsLink = document.getElementById("directions-link");
  openMapLink.href = mapSearchUrl(currentStop.mapQuery);
  directionsLink.href = nextStop ? directionsUrl(currentStop.mapQuery, nextMapQuery) : mapSearchUrl(currentStop.mapQuery);
  directionsLink.textContent = nextLinkLabel;

  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  prevButton.disabled = state.activeStop === 0;
  nextButton.disabled = state.activeStop === routeStops.length - 1;

  const sourceLink = document.getElementById("source-link");
  sourceLink.href = currentStop.sourceUrl;
  sourceLink.textContent = `Source: ${currentStop.sourceLabel}`;

  const stopImage = document.getElementById("stop-image");
  stopImage.src = currentStop.imageUrl;
  stopImage.alt = currentStop.imageAlt;
  document.getElementById("stop-image-caption").textContent = currentStop.imageAlt;

  const mapFrame = document.getElementById("map-frame");
  mapFrame.src = mapEmbedUrl(currentStop.mapQuery);
  mapFrame.title = `Map for ${currentStop.name}`;
  document.getElementById("map-next-label").textContent = nextStop ? `Next: ${nextStop.name}` : "Final checkpoint reached";
  renderCheckpointPassport(currentStop, currentMemory);
}

function renderPauseSpots() {
  document.getElementById("pause-grid").innerHTML = pauseSpots.map(pauseCardMarkup).join("");
}

function renderMemorySummary() {
  const entries = getSavedEntries();
  const favorite = getFavoriteEntry(entries);
  const noteCount = countNotes(entries);
  const photoCount = countPhotos(entries);
  const keepsakeCard = document.getElementById("keepsake-card");
  const memoryList = document.getElementById("memory-list");

  if (!entries.length) {
    keepsakeCard.innerHTML = `
      <p class="fact-label">Keepsake draft</p>
      <h3>Start stamping the route</h3>
      <p>
        Add even one rating, note, or photo and this panel will begin to turn the walk into an
        exportable family memory pack.
      </p>
      <div class="keepsake-stat-row">
        <span>0 saved checkpoints</span>
        <span>0 photos</span>
        <span>0 notes</span>
      </div>
    `;
    memoryList.innerHTML = `
      <article class="memory-empty">
        <strong>No memories saved yet.</strong>
        <p>
          The easiest first move is to rate a checkpoint or write one short line about the best
          bridge, fountain, statue, or ice-cream moment.
        </p>
      </article>
    `;
    return;
  }

  const headline = favorite
    ? `${favorite.stop.name} is leading the family vote`
    : "Your trail story is already taking shape";
  const summaryParts = [
    `${entries.length} checkpoints now have saved memories`,
    `${photoCount} photo${photoCount === 1 ? "" : "s"} tucked away`,
    `${noteCount} written note${noteCount === 1 ? "" : "s"}`
  ];
  const noteStrip = entries
    .filter((entry) => entry.memory.note)
    .slice(0, 2)
    .map((entry) => `<li>${escapeHtml(entry.memory.note)}</li>`)
    .join("");

  keepsakeCard.innerHTML = `
    <p class="fact-label">Keepsake draft</p>
    <h3>${escapeHtml(headline)}</h3>
    <p>
      ${escapeHtml(summaryParts.join(", "))}. ${
        favorite
          ? `${escapeHtml(favorite.stop.name)} currently holds the strongest score at ${favorite.memory.rating}/5.`
          : "Add a rating if you want the route to crown a favorite stop."
      }
    </p>
    <div class="keepsake-stat-row">
      <span>${entries.length} saved checkpoints</span>
      <span>${photoCount} photos</span>
      <span>${noteCount} notes</span>
    </div>
    ${
      noteStrip
        ? `<div class="keepsake-notes"><p class="fact-label">Fresh note snippets</p><ul>${noteStrip}</ul></div>`
        : ""
    }
  `;

  memoryList.innerHTML = entries.map(memoryEntryMarkup).join("");
}

function renderAll() {
  renderChromeAndMenu();
  renderCityMap();
  renderBannerMetrics();
  renderProgressAndNavigation();
  renderStage();
  renderPauseSpots();
  renderMemorySummary();
}

function setMemoryStatus(message, tone) {
  const statusNode = document.getElementById("memory-status");

  if (!statusNode) {
    return;
  }

  statusNode.textContent = message;
  statusNode.className = `memory-status ${tone === "warning" ? "is-warning" : tone === "error" ? "is-error" : tone === "ok" ? "is-ok" : ""}`.trim();
}

function setMenuOpen(nextOpen) {
  menuOpen = Boolean(nextOpen);
  renderChromeAndMenu();
}

function scrollToActiveStop() {
  window.setTimeout(() => {
    const stopStage = document.querySelector(".stop-stage");
    const chrome = document.querySelector(".app-chrome");

    if (!stopStage) {
      return;
    }

    const chromeHeight = chrome ? chrome.getBoundingClientRect().height : 0;
    const top = window.scrollY + stopStage.getBoundingClientRect().top - chromeHeight - 14;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth"
    });
  }, 60);
}

function setActiveStop(nextIndex, options = {}) {
  state.activeStop = clampIndex(nextIndex);
  menuOpen = options.closeMenu === false ? menuOpen : false;
  persistState();
  renderAll();

  if (options.scrollToStop) {
    scrollToActiveStop();
  }
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
}

function buildPostcardText() {
  const entries = getSavedEntries();
  const favorite = getFavoriteEntry(entries);

  if (!entries.length) {
    return [
      "Amy's Bydgoszcz Family Quest",
      "",
      "No memories were saved yet.",
      "Rate a stop or add a short note first, then download the postcard again."
    ].join("\n");
  }

  const lines = [
    "Amy's Bydgoszcz Family Quest",
    `Exported: ${new Date().toLocaleString("en-GB")}`,
    "",
    `Saved checkpoints: ${entries.length}`,
    `Favorite so far: ${favorite ? `${favorite.stop.name} (${favorite.memory.rating}/5)` : "No rated stop yet"}`,
    "",
    "Checkpoint notes:"
  ];

  entries.forEach((entry) => {
    const noteText = entry.memory.note ? entry.memory.note : "No written note.";
    const ratingText = entry.memory.rating ? `${entry.memory.rating}/5` : "unrated";
    const photoText = entry.memory.photoDataUrl ? "photo saved" : "no photo";
    lines.push(`- ${entry.stop.name}: ${ratingText}, ${photoText}. ${noteText}`);
  });

  return lines.join("\n");
}

function downloadMemoryPack() {
  const entries = getSavedEntries();

  if (!entries.length) {
    setMemoryStatus("Add at least one rating, note, or photo before downloading.", "warning");
    return;
  }

  const payload = {
    trailTitle: "Amy's Bydgoszcz Family Quest",
    exportedAt: new Date().toISOString(),
    checkpoints: entries.map((entry) => ({
      stopNumber: entry.index + 1,
      stopName: entry.stop.name,
      rating: entry.memory.rating || null,
      note: entry.memory.note || "",
      photoName: entry.memory.photoName || "",
      photoDataUrl: entry.memory.photoDataUrl || ""
    }))
  };

  downloadFile("bydgoszcz-family-quest-memory-pack.json", JSON.stringify(payload, null, 2), "application/json");
  setMemoryStatus("Memory pack downloaded.", "ok");
}

function downloadPostcard() {
  downloadFile("bydgoszcz-family-quest-postcard.txt", buildPostcardText(), "text/plain;charset=utf-8");
  setMemoryStatus("Postcard note downloaded.", "ok");
}

function clearCurrentCheckpoint() {
  const currentStop = routeStops[state.activeStop];
  delete state.memories[currentStop.id];
  persistState();
  renderAll();
  setMemoryStatus("Checkpoint memory cleared.", "warning");
}

function resetMemories() {
  if (!window.confirm("Clear every saved rating, note, and photo from this browser?")) {
    return;
  }

  state.memories = {};
  persistState();
  renderAll();
  setMemoryStatus("All saved trail memories were cleared.", "warning");
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Could not read file."));
    reader.readAsDataURL(file);
  });
}

function loadImage(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Could not load image."));
    image.src = dataUrl;
  });
}

async function compressImageFile(file) {
  const dataUrl = await readFileAsDataUrl(file);
  const image = await loadImage(dataUrl);
  const originalWidth = image.naturalWidth || image.width;
  const originalHeight = image.naturalHeight || image.height;
  const longestSide = Math.max(originalWidth, originalHeight);
  const scale = longestSide > 900 ? 900 / longestSide : 1;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = Math.max(1, Math.round(originalWidth * scale));
  canvas.height = Math.max(1, Math.round(originalHeight * scale));

  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  return canvas.toDataURL("image/jpeg", 0.82);
}

document.addEventListener("click", (event) => {
  const menuButton = event.target.closest("#menu-button");

  if (menuButton) {
    setMenuOpen(!menuOpen);
    return;
  }

  const menuCloseButton = event.target.closest("#menu-close-button");

  if (menuCloseButton) {
    setMenuOpen(false);
    return;
  }

  const menuOverlay = event.target.closest("#menu-overlay");

  if (menuOverlay) {
    setMenuOpen(false);
    return;
  }

  const menuShortcut = event.target.closest("[data-menu-section]");

  if (menuShortcut) {
    setMenuOpen(false);
    return;
  }

  const menuRouteButton = event.target.closest("[data-menu-stop-index]");

  if (menuRouteButton) {
    setActiveStop(Number(menuRouteButton.getAttribute("data-menu-stop-index")), { scrollToStop: true });
    return;
  }

  const railButton = event.target.closest("[data-stop-index]");

  if (railButton) {
    setActiveStop(Number(railButton.getAttribute("data-stop-index")));
    return;
  }

  const overviewButton = event.target.closest("[data-overview-index]");

  if (overviewButton) {
    setActiveStop(Number(overviewButton.getAttribute("data-overview-index")), { scrollToStop: true, closeMenu: false });
    return;
  }

  const mapButton = event.target.closest("[data-map-index]");

  if (mapButton) {
    setActiveStop(Number(mapButton.getAttribute("data-map-index")));
    return;
  }

  const memoryJumpButton = event.target.closest("[data-memory-index]");

  if (memoryJumpButton) {
    setActiveStop(Number(memoryJumpButton.getAttribute("data-memory-index")), { scrollToStop: true, closeMenu: false });
    return;
  }

  const ratingButton = event.target.closest("[data-rating]");

  if (ratingButton) {
    const currentStop = routeStops[state.activeStop];
    const currentMemory = getStopMemory(currentStop.id);
    const selectedRating = Number(ratingButton.getAttribute("data-rating"));
    const nextRating = currentMemory.rating === selectedRating ? 0 : selectedRating;

    upsertMemory(currentStop.id, { rating: nextRating });
    renderAll();
    setMemoryStatus(nextRating ? `Checkpoint stamped ${nextRating}/5.` : "Rating removed for this checkpoint.", nextRating ? "ok" : "warning");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuOpen) {
    setMenuOpen(false);
  }
});

document.getElementById("prev-button").addEventListener("click", () => {
  if (state.activeStop > 0) {
    setActiveStop(state.activeStop - 1);
  }
});

document.getElementById("next-button").addEventListener("click", () => {
  if (state.activeStop < routeStops.length - 1) {
    setActiveStop(state.activeStop + 1);
  }
});

document.getElementById("clear-memory-button").addEventListener("click", clearCurrentCheckpoint);
document.getElementById("reset-memories-button").addEventListener("click", resetMemories);
document.getElementById("download-memory-button").addEventListener("click", downloadMemoryPack);
document.getElementById("download-postcard-button").addEventListener("click", downloadPostcard);

document.getElementById("memory-note").addEventListener("input", (event) => {
  const currentStop = routeStops[state.activeStop];
  const noteValue = event.target.value;

  window.clearTimeout(noteSaveTimer);
  setMemoryStatus("Saving note...", "neutral");

  noteSaveTimer = window.setTimeout(() => {
    upsertMemory(currentStop.id, { note: noteValue });
    renderChromeAndMenu();
    renderCityMap();
    renderBannerMetrics();
    renderProgressAndNavigation();
    renderCheckpointPassport(currentStop, getStopMemory(currentStop.id));
    renderMemorySummary();
    setMemoryStatus(noteValue.trim() ? "Note saved in this browser." : "Checkpoint note cleared.", noteValue.trim() ? "ok" : "warning");
  }, 220);
});

document.getElementById("memory-photo").addEventListener("change", async (event) => {
  const currentStop = routeStops[state.activeStop];
  const selectedFile = event.target.files && event.target.files[0];

  if (!selectedFile) {
    return;
  }

  setMemoryStatus("Compressing photo...", "neutral");

  try {
    const compressedDataUrl = await compressImageFile(selectedFile);
    upsertMemory(currentStop.id, {
      photoDataUrl: compressedDataUrl,
      photoName: selectedFile.name
    });
    renderAll();
    setMemoryStatus("Photo saved in this browser.", "ok");
  } catch (error) {
    console.warn("Could not process uploaded photo.", error);
    setMemoryStatus("Could not process that photo.", "error");
  }
});

window.addEventListener("beforeunload", persistState);

renderAll();
