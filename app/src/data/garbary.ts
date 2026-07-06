// "Your Neighborhood: Garbary" — researched July 2026 against en/pl Wikipedia,
// bydgoszcz.pl, and local press. The tannery story is 19th-century (Buchholz,
// 1845), NOT medieval — do not "upgrade" it when editing.

import chimneyPhoto from '../assets/stops/garbary-chimney.webp'
import buchholzVillaPhoto from '../assets/garbary/buchholz-villa.webp'
import garbaryTenementPhoto from '../assets/garbary/garbary-tenement.webp'
import garbaryStreetPhoto from '../assets/garbary/garbary-street.webp'

export type GarbarySection = {
  id: string
  title: string
  body: string[]
  photo?: {
    src: string
    alt: string
    credit: string
    creditUrl: string
  }
}

export const garbaryPhoto = chimneyPhoto
export const garbaryPhotoAlt =
  'The preserved red-brick industrial chimney near the Garbary end of downtown Bydgoszcz.'
export const garbaryPhotoCredit =
  'Photo: Grzegorz W. Tężycki, Wikimedia Commons, CC BY-SA 4.0'
export const garbaryPhotoCreditUrl =
  'https://commons.wikimedia.org/wiki/File:Bydgoszcz-chimney-08040656.jpg'

export const garbarySections: GarbarySection[] = [
  {
    id: 'name',
    title: 'The street named after tanners',
    body: [
      'Your street\'s name is a little history lesson in itself: "Garbary" comes from garbarz, the Polish word for a tanner, and garbarnia, a tannery.',
      'In 1845 a 23-year-old named Ludwig Buchholz set up a leather works in town, and by 1862 he had moved it onto this very street beside the Brda river. It grew into a giant — by around 1900 it was one of the largest leather factories east of the Elbe, with some 170 workers turning 140,000 hides a year into leather. The factory worked right up until 1992, and when the street got its Polish name in 1920, the tannery is what it was named after.',
      'The tanner\'s grand neo-baroque villa still stands at the top of the street, now the heart of a university campus — so you are sleeping in a neighbourhood that quite literally smells a lot better than it did 150 years ago.',
    ],
    photo: {
      src: buchholzVillaPhoto,
      alt: "The Buchholz tannery owner's villa at Garbary 2, now the university campus.",
      credit: 'Photo: Wolskaola, Wikimedia Commons, CC BY-SA 3.0 pl',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Willa,_Bydgoszcz,_ul._Garbary_2_by_AW.jpg',
    },
  },
  {
    id: 'chimney',
    title: 'The chimney that moved house',
    body: [
      'Keep an eye out for the neighbourhood\'s quirkiest landmark: a lone 21-metre red-brick chimney standing beside a modern block of flats. It is about a hundred years old and belonged to the warehouses of "Lukullus", a sugar, chocolate and cocoa factory founded in 1920 — yes, this was once candy country.',
      'After the war, Bydgoszcz\'s sweet-makers merged into the famous Jutrzenka confectionery company, and in a lovely full-circle twist, it was Jutrzenka\'s modern-day successor that came back to build the apartments here. Rather than knock the old chimney down, they took it apart brick by brick, restored it, and rebuilt it about 30 metres away on a new foundation, complete with a plaque.',
      'A chimney that moved house — just like you.',
    ],
  },
  {
    id: 'island',
    title: 'Practically an island',
    body: [
      'Garbary sits in Okole, a district squeezed between the Brda river on one side and the old Bydgoszcz Canal on the other — so historically it was almost an island.',
      'The street itself is only about 350 metres long, but it is lined with listed 19th-century tenement houses in everything from Art Nouveau to early modernism. Look up at number 12 for a fairy-tale bay window topped with an onion dome.',
    ],
    photo: {
      src: garbaryTenementPhoto,
      alt: 'The 1904–05 tenement at Garbary 12 with its onion-dome corner turret.',
      credit: 'Photo: Pit1233, Wikimedia Commons, CC0',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Bdg_Garbary12_5_02-2014.jpg',
    },
  },
  {
    id: 'enigma',
    title: 'A codebreaker on your street',
    body: [
      'There is a special treat for a British family at number 27: a mural of Marian Rejewski, the Bydgoszcz-born mathematician who first cracked the Enigma cipher.',
      'His pre-war breakthrough was handed to Britain in 1939 and helped Bletchley Park win its secret war — so the Enigma story you know from home starts, in a real sense, a few doors down from where you are staying.',
    ],
    photo: {
      src: garbaryStreetPhoto,
      alt: 'Looking down ulica Garbary past the corner tenement at Królowej Jadwigi 1.',
      credit: 'Photo: Pit1233, Wikimedia Commons, CC0',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Bdg_ulGarbary_07-2013.jpg',
    },
  },
  {
    id: 'walk',
    title: 'From your doorstep',
    body: [
      'The Old Town and Mill Island are a short walk from Garbary — and the way to go is the riverside promenade: follow the Brda downstream along the water and it leads you straight to the island, the mills, and the square in roughly fifteen minutes. Prettier than the street route, and no roads to cross with small legs.',
      'But don\'t rush off without giving your own street a proper look first.',
    ],
  },
]
