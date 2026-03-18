const routeStops = [
  {
    id: "old-market",
    shortName: "Rynek",
    name: "Stary Rynek i Katedra",
    district: "Start starego miasta",
    signature: "Czarodzieje i meridian",
    strapline:
      "Zacznij tam, gdzie Bydgoszcz wciąż czuje się teatralnie: gotycka cegła, jasne fasady i plac, który skrywa historię i odrobinę scenicznej magii.",
    walkFromPrevious: "Start tutaj",
    stayFor: "18-22 min",
    mapQuery: "Stary Rynek and Bydgoszcz Cathedral, Bydgoszcz, Poland",
    imageUrl: "https://visitbydgoszcz.pl/images/doswiadcz/co_zobaczyc/katedra3.jpg",
    imageAlt: "Widok z lotu ptaka na katedrę bydgoską przy Starym Rynku.",
    lookFor: [
      "biała fasada ratusza",
      "czerwone ceglane mury katedry",
      "linia 18. południka w bruku",
      "okno, w którym pojawia się Pan Twardowski"
    ],
    kidFacts: [
      "Ten plac ma swojego czarodzieja: Pan Twardowski wyskakuje z okienka o 13:13 i 21:13 jak mały pokaz niespodzianek.",
      "Linia w bruku pozwala dzieciom stanąć na niewidzialnym pasku, który biegnie dookoła całej planety."
    ],
    adultFacts: [
      "Plac wytyczono w 1346 roku za Kazimierza Wielkiego, więc to naprawdę jest serce średniowiecznej Bydgoszczy.",
      "Katedra obok to najstarszy zachowany kościół w mieście i jeden z najwyraźniejszych punktów sylwetki starego miasta."
    ],
    mission: "Znajdźcie najpierw linię południka, a potem ustalcie najlepsze miejsce do obserwowania okna Twardowskiego.",
    bonus:
      "Jeśli uda się trafić w odpowiedni czas, to najczystsze miejsce na mały publiczny spektakl, zanim trasa skręci ku rzece.",
    memoryPrompt: "Co zrobiło na Was największe pierwsze wrażenie Bydgoszczy?",
    sourceLabel: "Katedra i Stare Miasto w Bydgoszczy",
    sourceUrl: "https://visitbydgoszcz.pl/en/explore/what-to-see/1393-bydgoszcz-cathedral",
    geoPosition: { lat: 53.121963, lon: 18.0002735 },
    mapPosition: { x: 14, y: 71 },
    highlightPause: {
      name: "Bromberg Coffee",
      kind: "Kawa dla dorosłych",
      summary:
        "Zachowajcie tę kawiarnię jako elastyczny punkt kawowy w pobliżu starego centrum, kiedy rodzina złapie rytm spaceru.",
      mapQuery: "Bromberg Coffee, Bydgoszcz, Poland",
      sourceLabel: "Własny wybór trasy"
    }
  },
  {
    id: "mill-island",
    shortName: "Wyspa",
    name: "Łąki Wyspy Młyńskiej",
    district: "Zielone serce nad rzeką",
    signature: "Brda, mosty i trawniki",
    strapline:
      "Miasto nagle oddycha wodą, kasztanami i mostkami: zielone serce śródmieścia, w którym dzieci mogą złapać oddech przed przemysłową częścią trasy.",
    walkFromPrevious: "6 min spaceru",
    stayFor: "16-20 min",
    mapQuery: "Mill Island, Bydgoszcz, Poland",
    imageUrl: "https://visitbydgoszcz.pl/images/doswiadcz/co_zobaczyc/wyspa.jpg",
    imageAlt: "Zielony brzeg rzeki na Wyspie Młyńskiej w Bydgoszczy.",
    lookFor: [
      "woda po obu stronach ścieżki",
      "niskie kładki łączące brzegi wyspy",
      "stare ceglane budynki odbite w kanale",
      "rodzinne trawniki i plac zabaw"
    ],
    kidFacts: [
      "Wyspa Młyńska jest jak tajemniczy park ukryty w samym środku miasta, z mostkami, które zamieniają trasę w grę w podskakiwanie.",
      "Centralna część wyspy ma nawet plac zabaw, więc mali piechurzy dostaną prawdziwy odpoczynek zamiast kolejnego pomnika."
    ],
    adultFacts: [
      "Portal turystyczny opisuje Wyspę Młyńską jako zieloną oazę w centrum miasta, obsadzoną kasztanami, lipami i wierzbami posadzonymi w XIX wieku.",
      "Zanim stała się ikoną wypoczynku, ten teren był przemysłowym koniem roboczym z młynami, spichlerzami, a nawet mennicą królewską."
    ],
    mission: "Policzcie, ile mostów uda się zauważyć, zanim opuścicie wyspę.",
    bonus:
      "Jeśli dzieci potrzebują chwili wytchnienia, to najłatwiejsze miejsce na zwolnienie tempa bez przerywania trasy.",
    memoryPrompt: "Który fragment wody, mostu lub trawnika sprawił, że ten punkt był najbardziej relaksujący?",
    sourceLabel: "Wyspa Młyńska",
    sourceUrl: "https://visitbydgoszcz.pl/en/explore/what-to-see/1413-mill-island-in-bydgoszcz",
    geoPosition: { lat: 53.1227908, lon: 17.9959977 },
    mapPosition: { x: 23, y: 63 },
    highlightPause: {
      name: "Trawniki Wyspy Młyńskiej",
      kind: "Chwila oddechu",
      summary:
        "Trawiaste brzegi czekają bez rezerwacji — chwila odpoczynku zanim wejdziecie w ceglany kompleks młynów.",
      mapQuery: "Mill Island, Bydgoszcz, Poland",
      sourceLabel: "Wyspa Młyńska",
      sourceUrl: "https://visitbydgoszcz.pl/en/explore/what-to-see/1413-mill-island-in-bydgoszcz"
    }
  },
  {
    id: "rother-inside",
    shortName: "Młyny",
    name: "Młyny Rothera od środka",
    district: "Dziedzictwo przemysłowe",
    signature: "Ceglane młyny odrodzone",
    strapline:
      "Wejdźcie z nadrzecznego spokoju w wielki ceglany młyn, który kiedyś ciężko pracował dla miasta, a teraz pracuje dla pomysłów, wystaw i rodzinnej ciekawości.",
    walkFromPrevious: "4 min spaceru",
    stayFor: "18-22 min",
    mapQuery: "Mlyny Rothera, Bydgoszcz, Poland",
    imageUrl: "https://visitbydgoszcz.pl/images/odkryj/co_zobaczyc/mlyny-rothera-bydgoszcz-lm.jpg",
    imageAlt: "Młyny Rothera nad rzeką w Bydgoszczy.",
    lookFor: [
      "odważne ceglane fasady",
      "skala budynków młyńskich od wewnątrz i z zewnątrz",
      "przestrzenie wystawowe lub warsztatowe w zaadaptowanych wnętrzach",
      "nadwodne schody i wielkie przemysłowe okna"
    ],
    kidFacts: [
      "Z zewnątrz wygląda jak ogromny ceglany zamek, ale w środku zamienił mąkę na historie, eksperymenty i rodzinne odkrywanie.",
      "Ten punkt jest fajny, bo dzieci mogą porównać, co wciąż wygląda na stare, a co teraz jest zupełnie nowe."
    ],
    adultFacts: [
      "Młyny Rothera sięgają XIX wieku i są jednym z najwyraźniejszych symboli zamiany dziedzictwa przemysłowego na współczesny punkt na mapie miasta.",
      "Obecny kompleks łączy wystawy, warsztaty, wydarzenia, jedzenie i widoki na rzekę, co czyni go zarówno przystankiem kulturalnym, jak i praktyczną rodzinną przerwą."
    ],
    mission: "Znajdźcie jeden szczegół, który dowodzi, że ten budynek był kiedyś ciężko pracującym młynem.",
    bonus:
      "To najlepszy punkt na trasie, żeby dorośli mogli chwilę pooglądać, a dzieci wciąż czuły się jak wewnątrz czegoś dramatycznego i ogromnego.",
    memoryPrompt: "Jaki kontrast starego i nowego wyróżniał się najbardziej wewnątrz młynów?",
    sourceLabel: "Młyny Rothera",
    sourceUrl: "https://visitbydgoszcz.pl/en/explore/what-to-see/4192-rother-s-mills",
    geoPosition: { lat: 53.122867, lon: 17.9949192 },
    mapPosition: { x: 30, y: 57 },
    nextMapQuery: "Taras Mlyny Rothera, Bydgoszcz, Poland",
    nextLabel: "Wejdźcie na taras widokowy",
    highlightPause: {
      name: "Kawiarnia i wnętrza Rothera",
      kind: "Przerwa kulturalna",
      summary:
        "Jeśli szukacie wygodnego postoju bez zbaczania z trasy, tu jest najprościej.",
      mapQuery: "Mlyny Rothera, Bydgoszcz, Poland",
      sourceLabel: "Młyny Rothera",
      sourceUrl: "https://visitbydgoszcz.pl/en/explore/what-to-see/4192-rother-s-mills"
    }
  },
  {
    id: "rother-terrace",
    shortName: "Taras",
    name: "Taras Rothera",
    district: "Punkt widokowy",
    signature: "Widok na niebieską wstęgę",
    strapline:
      "To jest punkt wdechu: widok z tarasu, gdzie Brda, stare miasto i ceglana historia ustawiają się w jednej ramce do rodzinnego zdjęcia.",
    walkFromPrevious: "Windą lub schodami",
    stayFor: "10-14 min",
    mapQuery: "Taras Mlyny Rothera, Bydgoszcz, Poland",
    imageUrl: "https://visitbydgoszcz.pl/images/odkryj/co_zobaczyc/mlyny-rothera-bydgoszcz-lm.jpg",
    imageAlt: "Kompleks Młynów Rothera nad rzeką w Bydgoszczy.",
    lookFor: [
      "zakręt rzeki przez centrum",
      "stare dachy i mosty zszyty razem",
      "trasę, którą już przeszliście od Starego Rynku",
      "miejsce na rodzinne zdjęcie panoramiczne"
    ],
    kidFacts: [
      "Z góry rzeka wygląda jak olbrzymia niebieska wstęga owinięta wokół centrum miasta.",
      "To świetny punkt na grę w wyszukiwanie: mosty, łodzie, wieże i ceglane budynki widać jednym rzutem oka."
    ],
    adultFacts: [
      "Taras pozwala jednym spojrzeniem zrozumieć historię adaptacji: infrastruktura wodna, tkanka starego miasta i nowe życie obywatelskie nakładają się na siebie z jednego pomostu.",
      "To też jedno z najczystszych miejsc na trasie, by zrozumieć, dlaczego Bydgoszcz działa tak dobrze jako miasto rzeczne, a nie tylko miasto rynkowe."
    ],
    mission: "Prześledźcie palcem resztę wyprawy z tarasu, zanim zejdziecie na dół.",
    bonus: "Jeśli tylko jedno zdjęcie panoramiczne uda się zrobić tego dnia, to najlepszy wybór.",
    memoryPrompt: "Jaki szczegół z góry sprawił, że układ miasta nagle stał się zrozumiały?",
    sourceLabel: "Młyny Rothera",
    sourceUrl: "https://visitbydgoszcz.pl/en/explore/what-to-see/4192-rother-s-mills",
    geoPosition: { lat: 53.12302, lon: 17.99518 },
    mapPosition: { x: 34, y: 52 },
    highlightPause: {
      name: "Chwila na tarasie",
      kind: "Nagroda za widok",
      summary:
        "Krótki postój tutaj sprawia, że spacer jest przyjemny, nie gorączkowy — szczególnie przed ruchliwą sekcją mostową.",
      mapQuery: "Taras Mlyny Rothera, Bydgoszcz, Poland",
      sourceLabel: "Młyny Rothera",
      sourceUrl: "https://visitbydgoszcz.pl/en/explore/what-to-see/4192-rother-s-mills"
    }
  },
  {
    id: "mostowa",
    shortName: "Mostowa",
    name: "Mostowa, Spichlerze i Przechodzący",
    district: "Pocztówkowa strefa mostów",
    signature: "Spichlerze i akrobatyka",
    strapline:
      "Mostowa to miejsce, gdzie Bydgoszcz zamienia się w pocztówkę: stare spichlerze nad rzeką, balansująca postać nad wodą i poczucie, że miasto lubi dramatyzm.",
    walkFromPrevious: "10 min spaceru",
    stayFor: "14-18 min",
    mapQuery: "Mostowa Bridge and Przechodzacy przez rzeke, Bydgoszcz, Poland",
    imageUrl: "https://visitbydgoszcz.pl/images/doswiadcz/co_zobaczyc/przechodzacy.jpg",
    imageAlt: "Rzeźba Przechodzącego przez Rzekę zawieszona nad Brdą w Bydgoszczy.",
    lookFor: [
      "balansujący mężczyzna nad rzeką",
      "spichlerze przy ulicy Mostowej",
      "mały amfiteatr nad wodą",
      "klasyczny kąt do rodzinnego zdjęcia z rzeką i mostem"
    ],
    kidFacts: [
      "Balansująca postać wygląda jak cyrkowy akrobata zamrożony w powietrzu nad wodą.",
      "To jest punkt, w którym dzieci mogą spróbować testu równowagi na jednej nodze i zdecydować, czy są choć trochę tak stabilne jak rzeźba."
    ],
    adultFacts: [
      "Charakterystyczny spichlerzyk przy Mostowej bywa nazywany \u201eholenderskim\u201d ze względu na styl szczytowego dachu, a mały amfiteatr w pobliżu sprawia, że cała krawędź czuje się jak publiczna scena.",
      "Przechodzącego przez Rzekę odsłonięto 1 maja 2004, a nawet jaskółka niesiona przez postać nawiązuje do Andrzeja Szwalbe z historii Filharmonii."
    ],
    mission: "Policzcie elementy rzeki w jednym kadrze: most, spichlerzyk, balansujący mężczyzna i odbicie w wodzie.",
    bonus:
      "To najbardziej niezawodny punkt na \u201enaprawdę byliśmy w Bydgoszczy\u201d zdjęcie na całej trasie.",
    memoryPrompt: "Czy to był moment, gdy miasto w końcu poczuło się wystarczająco dramatycznie na pocztówkę?",
    sourceLabel: "Przechodzący przez Rzekę",
    sourceUrl: "https://visitbydgoszcz.pl/en/explore/what-to-see/2558-man-crossing-the-river",
    geoPosition: { lat: 53.1225128, lon: 18.0008557 },
    mapPosition: { x: 45, y: 48 },
    highlightPause: {
      name: "Kawiarnia Sowa przy Mostowej 5",
      kind: "Opcjonalny słodki zjazd",
      summary:
        "Oficjalna strona specjałów wskazuje Kawiarnię Sowa na Mostowej jako miejsce na firmową kawę i reprodukcje starych fotografii Bydgoszczy.",
      mapQuery: "Sowa Cafe Mostowa 5, Bydgoszcz, Poland",
      sourceLabel: "Bydgoskie specjały",
      sourceUrl: "https://visitbydgoszcz.pl/en/discover/2387-bydgoszcz-specialties"
    }
  },
  {
    id: "gdanska",
    shortName: "Gdańska",
    name: "Ulica Gdańska i Cafe Primo",
    district: "Wielka oś miasta",
    signature: "Secesja i lody",
    strapline:
      "Teraz trasa staje się miejska i elegancka: długa reprezentacyjna ulica, ozdobne fasady i punkt z lodami, który miejscowi polecają od lat.",
    walkFromPrevious: "12 min spaceru",
    stayFor: "18-22 min",
    mapQuery: "Cafe Primo, Gdanska 18, Bydgoszcz, Poland",
    imageUrl: "https://visitbydgoszcz.pl/images/odkryj/trasy_zwiedzania/jedynak-bydgoszcz.jpg",
    imageAlt: "Zabytkowa architektura wzdłuż ulicy Gdańskiej w Bydgoszczy.",
    lookFor: [
      "ozdobne fasady i balkony",
      "długa prosta oś miasta na Gdańskiej",
      "wąskie przejście w stronę Parku Kazimierza Wielkiego",
      "Cafe Primo jako lodowy punkt kontrolny"
    ],
    kidFacts: [
      "Ten odcinek przypomina paradę budynków, z mnóstwem okien, balkonów i detali do policzenia.",
      "Cafe Primo to dobry moment na nagrodę — oficjalny przewodnik po mieście mówi, że mieszkańcy polecają to miejsce od lat, szczególnie na specjalny bydgoski smak."
    ],
    adultFacts: [
      "Gdańska historycznie pełniła rolę głównej ulicy handlu, usług, rozrywki i publicznych uroczystości — to jest widoczne do dziś.",
      "To też jedno z najlepszych miejsc na tym spacerze, by zauważyć, jak Bydgoszcz łączy życie miejskie z secesją i architekturą początku XX wieku."
    ],
    mission: "Wybierzcie najlepszy detal balkonu lub fasady na Gdańskiej, a potem świętujcie lodami.",
    bonus:
      "Jeśli energia opada przed parkami, to najlepszy moment na smakołyk — żeby wszyscy byli w dobrym humorze.",
    memoryPrompt: "Który detal budynku albo lodowy moment zasługuje na miejsce w końcowej pamiątce?",
    sourceLabel: "Od Starego Rynku do placu Wolności",
    sourceUrl: "https://visitbydgoszcz.pl/en/what-s-on/current-exhibitions/2447-fromto",
    geoPosition: { lat: 53.126222, lon: 18.0042482 },
    mapPosition: { x: 60, y: 40 },
    highlightPause: {
      name: "Cafe Primo",
      kind: "Lodowy ulubieniec trasy",
      summary:
        "Oficjalny portal turystyczny mówi, że mieszkańcy Bydgoszczy polecają tę lodziarnię na Gdańskiej od wielu lat.",
      mapQuery: "Cafe Primo, Gdanska 18, Bydgoszcz, Poland",
      sourceLabel: "Bydgoskie specjały",
      sourceUrl: "https://visitbydgoszcz.pl/en/discover/2387-bydgoszcz-specialties"
    }
  },
  {
    id: "freedom-park",
    shortName: "Wolność",
    name: "Plac Wolności i Park Kazimierza Wielkiego",
    district: "Przerwa ogrodowa",
    signature: "Najstarszy park, wielka fontanna",
    strapline:
      "Miasto znów łagodnieje: otwarty plac, stare drzewa, atmosfera stawu i parkowa historia sięgająca klasztornych ogrodów i ciągnąca się ku letniemu cieniowi.",
    walkFromPrevious: "6 min spaceru",
    stayFor: "16-20 min",
    mapQuery: "Plac Wolnosci and Park Kazimierza Wielkiego, Bydgoszcz, Poland",
    imageUrl: "https://visitbydgoszcz.pl/images/odkryj/Ciekawostki/potop2.jpg",
    imageAlt: "Fontanna Potop w Parku Kazimierza Wielkiego w Bydgoszczy.",
    lookFor: [
      "postacie Fontanny Potop",
      "stawy i stare drzewa w parku",
      "plac zabaw dla młodszych piechurów",
      "plac otwierający się na krawędź parku"
    ],
    kidFacts: [
      "To jest punkt, w którym parkowa historia robi się ogromna, bo Fontanna Potop wygląda, jakby była pełna ludzi, wody, zwierząt i akcji naraz.",
      "To też przydatny punkt dla krótkich nóżek, bo jest tu cień i plac zabaw w pobliżu."
    ],
    adultFacts: [
      "Trasa turystyczna mówi, że to najstarszy park w mieście, wyrosły z dawnego ogrodu Klarysek, zanim został przeprojektowany na park publiczny.",
      "Fontannę Potop odsłonięto w lipcu 1909, a park wciąż ceniony jest za rzadkie gatunki drzew, stawy i atmosferę formalnego ogrodu miejskiego."
    ],
    mission: "Wybierzcie jedną postać fontanny i wymyślcie jednozdaniową historię o tym, co wydarzyło się sekundę przed wielkim pluskiem.",
    bonus:
      "Ta sekcja parkowa utrzymuje trasę przyjazną rodzinom, bo dodaje oddech przed finałem w kwartale muzycznym.",
    memoryPrompt: "Jaki parkowy detal sprawił, że ten punkt był najbardziej spokojny lub pełen historii?",
    sourceLabel: "Zielona Bydgoszcz",
    sourceUrl: "https://visitbydgoszcz.pl/en/explore/visitor-itineraries/2907-green",
    geoPosition: { lat: 53.1271358, lon: 18.0056659 },
    mapPosition: { x: 68, y: 32 },
    highlightPause: {
      name: "Przerwa w cieniu parku",
      kind: "Moment ochłody",
      summary:
        "Jeśli rodzina potrzebuje pięciu wolniejszych minut przed kwartałem teatralnym, wykorzystajcie drzewa i ławki zamiast pędzić dalej.",
      mapQuery: "Park Kazimierza Wielkiego, Bydgoszcz, Poland",
      sourceLabel: "Zielona Bydgoszcz",
      sourceUrl: "https://visitbydgoszcz.pl/en/explore/visitor-itineraries/2907-green"
    }
  },
  {
    id: "theatre-archer",
    shortName: "Teatr",
    name: "Teatr Polski i Łuczniczka",
    district: "Próg kultury",
    signature: "Jedna symboliczna poza miasta",
    strapline:
      "Tu wyprawa wchodzi w pełni w bydgoski kwartał kultury, gdzie energia teatralna, krawędzie parku i Łuczniczka zamieniają przystanek w moment symbolu miasta.",
    walkFromPrevious: "5 min spaceru",
    stayFor: "12-15 min",
    mapQuery: "Polish Theatre and Archer Lady, Bydgoszcz, Poland",
    imageUrl: "https://visitbydgoszcz.pl/images/doswiadcz/co_zobaczyc/luczniczka.jpg",
    imageAlt: "Rzeźba Łuczniczki w Bydgoszczy w pobliżu kwartału teatralnego.",
    lookFor: [
      "rzeźba Łuczniczki",
      "fasada teatru w pobliżu",
      "plac parkowy między budynkami kultury",
      "przejście z ruchliwej ulicy do cichszego kwartału"
    ],
    kidFacts: [
      "Łuczniczka sprawia, że cały przystanek przypomina bajkowy punkt kontrolny bohatera tuż obok prawdziwego teatru.",
      "Dzieci mogą skopiować pozę i zdecydować, czy celowałyby w smoka, jabłko czy złodzieja lodów."
    ],
    adultFacts: [
      "Łuczniczka to jeden z najbardziej rozpoznawalnych symboli Bydgoszczy; rzeźbę zaprojektował Ferdinand Lepcke i należy do tożsamości miasta.",
      "Oficjalne materiały trasowe umieszczają figurę na placu parkowym naprzeciwko Teatru Polskiego, dokładnie tam, gdzie kwartał kultury zaczyna tworzyć spójną całość."
    ],
    mission: "Zróbcie rodzinną wersję pozy Łuczniczki i zdecydujcie, kto ma najstabilniejszy cel.",
    bonus: "To jeden z najwyraźniejszych symbolicznych momentów na zdjęcie po rzece i spichlerzach.",
    memoryPrompt: "Czy Łuczniczka wydawała się Waszej rodzinie bardziej heroiczna, zabawna czy dramatyczna?",
    sourceLabel: "Łuczniczka",
    sourceUrl: "https://visitbydgoszcz.pl/en/wyszukiwarka?searchword=Archer%20Lady",
    geoPosition: { lat: 53.1308744, lon: 18.0121007 },
    mapPosition: { x: 75, y: 25 }
  },
  {
    id: "jan-park",
    shortName: "Park Jana",
    name: "Park Jana Kochanowskiego",
    district: "Muzyka pod drzewami",
    signature: "Pomniki kompozytorów i plac zabaw",
    strapline:
      "To jest parkowy przystanek, w którym rodzina może spacerować, słuchać i szukać pomników: elegancki zielony salon stworzony specjalnie dla muzycznej tożsamości dzielnicy.",
    walkFromPrevious: "4 min spaceru",
    stayFor: "14-18 min",
    mapQuery: "Jan Kochanowski Park, Bydgoszcz, Poland",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/23/Park_Jana_Kochanowskiego_w_Bydgoszczy_4_2023.jpg",
    imageAlt: "Park Jana Kochanowskiego w Bydgoszczy z alejami drzew i otoczeniem kompozytorów.",
    lookFor: [
      "kręte ścieżki przez park",
      "pomniki kompozytorów i wirtuozów",
      "przestrzeń zabaw dla młodszych piechurów",
      "muzyczny plac zabaw, na którym dzieci mogą trochę pohałasować",
      "poczucie instytucji muzycznych dookoła zieleni"
    ],
    kidFacts: [
      "Ten park zamienia się w poszukiwanie skarbów, gdy dzieci zaczynają szukać słynnych kompozytorów ukrytych wśród ścieżek.",
      "Jest tu też muzyczny plac zabaw, więc młodsi piechurzy dostają prawdziwy przystanek zamiast kolejnych pomników i dorosłych historii."
    ],
    adultFacts: [
      "Park Jana Kochanowskiego został założony w 1901 roku i wciąż jest jednym z ulubionych miejsc rekreacyjnych miasta dzięki swojemu projektowi krajobrazowemu i spokojnej centralnej lokalizacji.",
      "Z inicjatywy Andrzeja Szwalbe teren wokół parku i Filharmonii był stopniowo wzbogacany pomnikami kompozytorów i wirtuozów, zamieniając kwartał w prawdziwą dzielnicę muzyczną."
    ],
    mission: "Znajdźcie jeden pomnik kompozytora i podarujcie rodzinie dziesięciosekundową wymyśloną melodię na jego cześć.",
    bonus:
      "To najlepszy późny punkt na trasie, żeby spacer miał lekki finał — a nie poczucie odhaczania kolejnych miejsc.",
    memoryPrompt: "Która część tego parku była najbardziej spokojna, zabawna albo muzyczna?",
    sourceLabel: "Zielona Bydgoszcz",
    sourceUrl: "https://visitbydgoszcz.pl/en/explore/visitor-itineraries/2907-green",
    geoPosition: { lat: 53.1297597, lon: 18.0114344 },
    mapPosition: { x: 82, y: 18 },
    highlightPause: {
      name: "Muzyczny Plac Zabaw",
      kind: "Reset dla dzieci",
      summary:
        "W Parku Jana Kochanowskiego jest muzyczny plac zabaw z huśtawkami i elementami dźwiękowymi — prawdziwa odskocznią dla dzieci przed finałem przy Filharmonii.",
      mapQuery: "53.1303538,18.0115320",
      sourceLabel: "OpenStreetMap",
      sourceUrl: "https://www.openstreetmap.org/way/375202206"
    }
  },
  {
    id: "philharmonic",
    shortName: "Filharmonia",
    name: "Filharmonia Pomorska — finał",
    district: "Finał dzielnicy muzycznej",
    signature: "Cichy kulturalny finisz",
    strapline:
      "Zakończcie tam, gdzie trasa staje się najspokojniejsza: przed Filharmonią, z całym kwartałem muzycznym dookoła i wystarczającą przestrzenią na właściwy finał.",
    walkFromPrevious: "3 min spaceru",
    stayFor: "14-18 min",
    mapQuery: "Pomeranian Philharmonic, Bydgoszcz, Poland",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/62/Bydgoszcz%2C_Filharmonia_Pomorska%2C_1954-1958c.JPG",
    imageAlt: "Budynek Filharmonii Pomorskiej w Bydgoszczy.",
    lookFor: [
      "neoklasyczny budynek Filharmonii",
      "obecność Akademii Muzycznej w pobliżu",
      "zielone otoczenie pełne kompozytorów",
      "dobre miejsce na końcowe rodzinne zdjęcie w dzielnicy"
    ],
    kidFacts: [
      "Ten ostatni punkt przypomina, jakby miasto zamieniło się w gigantyczną salę muzyczną, nawet na zewnątrz.",
      "To świetny finałowy punkt, żeby wymyślić zwycięską melodię, zanim wyprawa się skończy."
    ],
    adultFacts: [
      "Oficjalne materiały turystyczne opisują Dzielnicę Muzyczną jako jedno z najciekawszych rozwiązań urbanistycznych miasta, z Filharmonią jako jednym z jej filarów.",
      "Filharmonia Pomorska, założona 1 stycznia 1953, jest szczególnym powodem do dumy Bydgoszczy."
    ],
    mission: "Dajcie trasie ostatnią rundę oklasków i stwórzcie dziesięciosekundowy rodzinny motyw zakończenia.",
    bonus:
      "To najczystszy finał, bo czuje się kompletny nawet jeśli rodzina zatrzyma się tutaj na odpoczynek zamiast iść dalej.",
    memoryPrompt: "Co powinno być ostatnim pocztówkowym zdaniem o całym spacerze po Bydgoszczy?",
    sourceLabel: "Filharmonia Pomorska",
    sourceUrl: "https://visitbydgoszcz.pl/en/wyszukiwarka?searchword=Pomeranian%20Philharmonic",
    geoPosition: { lat: 53.1289723, lon: 18.0108252 },
    mapPosition: { x: 88, y: 12 }
  }
];

const pauseSpots = [
  {
    name: "Cafe Primo",
    kind: "Nagroda lodowa",
    summary:
      "Oficjalna strona bydgoskich specjałów mówi, że mieszkańcy polecają Cafe Primo na Gdańskiej od lat, w tym specjalny bydgoski smak.",
    whyItWorks:
      "Najlepiej pasuje w drodze do kwartału teatralnego, gdy młodsi piechurzy potrzebują prawdziwej odskoczni.",
    mapQuery: "Cafe Primo, Gdanska 18, Bydgoszcz, Poland",
    sourceLabel: "Bydgoskie specjały",
    sourceUrl: "https://visitbydgoszcz.pl/en/discover/2387-bydgoszcz-specialties"
  },
  {
    name: "Bromberg Coffee",
    kind: "Kawa dla dorosłych",
    summary:
      "Zachowajcie to jako dorosły punkt kawowy — można go łatwo wpleść w plan, gdy rodzina złapie rytm starego centrum.",
    whyItWorks:
      "Przydatne, jeśli chcecie jedną bardziej osobistą, mniej turystyczną przerwę w ciągu dnia.",
    mapQuery: "Bromberg Coffee, Bydgoszcz, Poland",
    sourceLabel: "Własny wybór trasy"
  },
  {
    name: "Młyny Rothera i taras",
    kind: "Widok plus przerwa kulturalna",
    summary:
      "Młyny dają najłatwiejszą przerwę wpisaną w trasę: wnętrza do odkrywania, brzegi rzeki do odpoczynku i taras, który nagradza wspinaczkę.",
    whyItWorks:
      "Najlepiej, gdy rodzina chce prawdziwej przerwy w połowie trasy bez opuszczania wyprawy.",
    mapQuery: "Mlyny Rothera, Bydgoszcz, Poland",
    sourceLabel: "Młyny Rothera",
    sourceUrl: "https://visitbydgoszcz.pl/en/explore/what-to-see/4192-rother-s-mills"
  },
  {
    name: "Muzyczny Plac Zabaw",
    kind: "Plac zabaw z dźwiękiem",
    summary:
      "Park Jana Kochanowskiego ma muzyczny plac zabaw, co daje młodszym piechurkom radosną przerwę przed finałem przy Filharmonii.",
    whyItWorks:
      "To najlepszy późny przystanek dla dzieci, bo trzyma temat dzielnicy muzycznej, ale zamienia go w zabawę zamiast samego patrzenia.",
    mapQuery: "53.1303538,18.0115320",
    sourceLabel: "OpenStreetMap",
    sourceUrl: "https://www.openstreetmap.org/way/375202206"
  },
  {
    name: "Kawiarnia Sowa na Mostowej",
    kind: "Słodki opcjonalny zjazd",
    summary:
      "Oficjalna strona specjałów wskazuje oddział na Mostowej — firmowa kawa i wystawa historycznych fotografii starej Bydgoszczy.",
    whyItWorks:
      "Przytulna przerwa przy mostach, jeśli rodzina chce spokojniejszego postoju przed Gdańską.",
    mapQuery: "Sowa Cafe Mostowa 5, Bydgoszcz, Poland",
    sourceLabel: "Bydgoskie specjały",
    sourceUrl: "https://visitbydgoszcz.pl/en/discover/2387-bydgoszcz-specialties"
  }
];

const deepDiveNotes = {
  "old-market": {
    intro: "Kto chce głębiej — te rozwinięcia dodają kontekst Bydgoszczy, nie ruszając się z miejsca.",
    kids: [
      "Pan Twardowski to część słynnej polskiej legendy o magiku i psotarzu, dlatego jego okienne pojawienie się jest zabawne, a nie uroczyste.",
      "Linia południka świetnie nadaje się do zabawy ruchowej: jedno dziecko pilnuje strony wschodniej, drugie zachodniej, a cała grupa może udawać, że trzyma świat w równowadze."
    ],
    adults: [
      "Ten jeden punkt skupia planowanie średniowieczne, ceremonie obywatelskie, handel i religię w jednej kompaktowej ramce, dlatego Bydgoszcz staje się tu czytelna tak szybko.",
      "Kontrast jasnych fasad i gotyckiej katedry tworzy wzorzec powtarzający się na całej trasie: miękkie obywatelskie fronty kontra mocne ceglane kotwice."
    ]
  },
  "mill-island": {
    intro: "Wyspa Młyńska wygląda na początku łagodnie, ale to jedno z najlepszych miejsc, by zrozumieć, jak woda kształtowała miasto.",
    kids: [
      "Dzieci mogą wyobrazić sobie wyspę jako gigantyczną grę w kamienie do przekraczania, bo mostki zamieniają park w coś do skakania i przechodzenia.",
      "Działa jak etap wytchnienia w grze: miasto staje się zielone i ciche, żeby mali piechurzy nabrali sił przed następnymi dramatycznymi budynkami."
    ],
    adults: [
      "Wyspa Młyńska to nie tylko ładny park; to miejsce, gdzie wypoczynek, ekologia i stara gospodarka przemysłowa nakładają się najwyraźniej w centrum miasta.",
      "To połączenie jest częścią tożsamości Bydgoszczy: rzeka nigdy nie jest tu tylko dekoracyjna, bo tłumaczy też, jak miasto kiedyś działało i handlowało."
    ]
  },
  "rother-inside": {
    intro: "To jest punkt, w którym trasa przesuwa się z pocztówkowego piękna w pamięć roboczą miasta.",
    kids: [
      "Zabawa w porównywanie jest tu prosta: wskaż jeden szczegół, który przypomina starą fabrykę, i jeden, który przypomina nową przestrzeń nauki i historii.",
      "Ponieważ budynek jest ogromny, dzieci często czytają go najpierw jako zamek, a dopiero potem jako młyn, co czyni odkrywanie bardziej przygodowym."
    ],
    adults: [
      "Młyny Rothera opowiadają bardzo aktualną historię urbanistyczną: dziedzictwo tu nie jest zamrożone za linkami, lecz zostało przeprojektowane na coś społecznego, kulturalnego i użytecznego.",
      "To przetworzenie ma znaczenie, bo pozwala miastu pokazać przemysłową pewność siebie bez zamieniania trasy w ciężkie muzealnictwo dla rodzin."
    ]
  },
  "rother-terrace": {
    intro: "Taras to miejsce, gdzie trasa staje się przestrzenna zamiast tylko narracyjna.",
    kids: [
      "Z góry wyprawa zamienia się w prawdziwą zagadkę do wyszukiwania: mosty, dachy, zakręty rzeki i drobne ścieżki łatwiej policzyć.",
      "To też świetne miejsce, żeby najmłodsi piechurzy wskazali palcem, gdzie ich zdaniem przygoda pójdzie dalej, zanim ktokolwiek sprawdzi mapę."
    ],
    adults: [
      "Punkty widokowe mają znaczenie na rodzinnych spacerach, bo nadają sens wcześniejszym przystankom; nagle wyspa, młyny i stare miasto przestają wydawać się oddzielne.",
      "Ten pomost tłumaczy, dlaczego Bydgoszcz jest spójna jako miasto rzeczne: woda to nić, która zszywa zabytki razem."
    ]
  },
  "mostowa": {
    intro: "Mostowa to najbardziej teatralna scena pocztówkowa trasy i właśnie dlatego zwykle staje się kotwicą wspomnień.",
    kids: [
      "Balansujący mężczyzna zaprasza do natychmiastowego naśladowania, więc ten przystanek niemal sam tworzy mini wyzwanie bez dodatkowego sprzętu.",
      "Dzieci mogą też zamienić to w grę detektywistyczną: kto jest odważniejszy, rzeźba nad rzeką czy osoba próbująca skopiować pozę na moście?"
    ],
    adults: [
      "Rzeźba, spichlerze i geometria mostu tworzą niezwykle silną scenę obywatelską, dlatego tak wielu odwiedzających najpierw pamięta ten odcinek.",
      "To jeden z najlepszych przykładów na trasie tego, jak Bydgoszcz wykorzystuje sztukę w przestrzeni publicznej, by wzmocnić to, co nabrzeże już robi dobrze."
    ]
  },
  "gdanska": {
    intro: "Gdańska dodaje inny rodzaj piękna: mniej dramatyzmu rzecznego, więcej miejskiej pewności siebie.",
    kids: [
      "Ten odcinek jest świetny do gry w liczenie detali, bo okna, balkony i ozdoby zmieniają się od budynku do budynku.",
      "Cafe Primo daje też trasie emocjonalny trik: nagroda jedzeniowa sprawia, że architektura jest bardziej przyjazna dla młodszych piechurów."
    ],
    adults: [
      "Gdańska to ulica, gdzie Bydgoszcz czuje się najbardziej wielkomiejsko, bo handel, styl i codzienne życie publiczne ustawiają się wzdłuż jednej długiej ceremonialnej osi.",
      "To użyteczny kontrast do przystanków nad rzeką: tu miasto prezentuje się fasadami i rytmem zamiast wodą i mostami."
    ]
  },
  "freedom-park": {
    intro: "Ten odcinek z placem i parkiem daje spacerowi chwilę oddechu, cicho pogłębiając zieloną historię miasta.",
    kids: [
      "Fontanna Potop to niemal książeczka obrazkowa w kamieniu i wodzie, więc dzieci mogą wymyślić pełną scenę akcji z jednego zamrożonego plusku.",
      "Ponieważ jest tu cień i zabawa w pobliżu, to też przystanek, w którym wyprawa może być hojna zamiast wymagająca."
    ],
    adults: [
      "Park Kazimierza Wielkiego pokazuje, jak Bydgoszcz zamieniła starszą ziemię ogrodową w formalną publiczną przestrzeń wypoczynkową bez utraty poczucia wieku i godności.",
      "Ta równowaga jest ważna w rodzinnym tempie: to tutaj chodzenie staje się umiarkowane, nie wyczerpujące."
    ]
  },
  "theatre-archer": {
    intro: "To jest symboliczny próg między życiem ulicznym a kwartałem muzyczno-teatralnym.",
    kids: [
      "Łuczniczka działa niemal jak strażniczka dzielnicy z bajki, dlatego dzieci zwykle rozumieją jej pozę, zanim poznają jej imię.",
      "Kopiowanie pozy zamienia symbol miasta w fizyczne wyzwanie, co czyni przystanek zapamiętanym w bardzo rodzinny sposób."
    ],
    adults: [
      "Niektóre zabytki mają znaczenie nie dlatego, że są stare, ale dlatego, że są rozpoznawalne; Łuczniczka należy do tej drugiej kategorii w Bydgoszczy.",
      "Umieszczona obok teatru i krawędzi parku, pomaga kwartałowi wyglądać jak skomponowana scena kulturalna zamiast rozproszonego zbioru budynków."
    ]
  },
  "jan-park": {
    intro: "Park Jana Kochanowskiego to miejsce, gdzie trasa układa się w łagodniejsze, niemal muzyczne tempo.",
    kids: [
      "Szukanie pomników kompozytorów nadaje parkowi uczucie poszukiwania skarbów, szczególnie jeśli rodzina wymyśli drobną melodię dla każdego.",
      "To też jedno z najłatwiejszych miejsc, by pozwolić czterolatkom trochę powędrować bez utraty kształtu trasy."
    ],
    adults: [
      "Park jest ważny nie tylko jako zieleń, ale jako część systemu tożsamości dzielnicy muzycznej: kultura tu wylewa się na zewnątrz na ścieżki i rzeźby.",
      "To sprawia, że teren wydaje się starannie urządzony, jakby miasto zbudowało plenerowy przedsionek wokół swoich instytucji."
    ]
  },
  "philharmonic": {
    intro: "Finał działa, bo jest spokojny, a nie dlatego, że krzyczy najgłośniej.",
    kids: [
      "Pod koniec trasy dzieci mogą potraktować przystanek przy Filharmonii jak ostatni poziom, na którym wszyscy wspólnie wymyślają zwycięską ścieżkę dźwiękową.",
      "To satysfakcjonujący finisz, bo miasto nagle czuje się uporządkowane, wypolerowane i gotowe na oklaski."
    ],
    adults: [
      "Filharmonia zamyka historię urbanistyczną dzielnicy: Bydgoszcz kończy spacer kulturą, zielenią i obywatelskim spokojem, nie efektownym gestem.",
      "Taki finał jest mocny, bo pozwala rodzinie odejść z poczuciem spełnienia, nie zmęczenia."
    ]
  }
};

const ratingLabels = ["Zerknięcie", "Fajne", "Dobre", "Super", "Top punkt"];
const storageKey = "bydgoszcz-spacer-rodzinny-pl-v2";
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
  if (Number.isNaN(normalized)) return 0;
  return Math.min(routeStops.length - 1, Math.max(0, normalized));
}

function loadStoredState() {
  let parsed = {};
  try {
    parsed = JSON.parse(window.localStorage.getItem(storageKey) || "{}") || {};
  } catch (error) {
    console.warn("Nie udało się odczytać zapisanego stanu trasy.", error);
  }
  return {
    activeStop: clampIndex(parsed.activeStop),
    memories: parsed.memories && typeof parsed.memories === "object" ? parsed.memories : {}
  };
}

function persistState() {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify({ activeStop: state.activeStop, memories: state.memories }));
    return true;
  } catch (error) {
    console.warn("Nie udało się zapisać stanu trasy.", error);
    return false;
  }
}

function mapEmbedUrl(query) {
  return `https://maps.google.com/maps?hl=pl&q=${encodeURIComponent(query)}&z=16&output=embed`;
}

function mapSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function directionsUrl(origin, destination) {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=walking`;
}

function atlasPointFor(stop) {
  const position = stop.geoPosition;
  if (!position) return stop.mapPosition;
  const x = ((position.lon - atlasBounds.minLon) / (atlasBounds.maxLon - atlasBounds.minLon)) * 100;
  const y = ((atlasBounds.maxLat - position.lat) / (atlasBounds.maxLat - atlasBounds.minLat)) * 100;
  return { x: Math.max(4, Math.min(96, x)), y: Math.max(4, Math.min(96, y)) };
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
  if (typeof next.rating === "number" && next.rating > 0) normalized.rating = next.rating;
  if (typeof next.note === "string" && next.note.trim()) normalized.note = next.note.trim();
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
    .map((stop, index) => ({ stop, index, memory: getStopMemory(stop.id) }))
    .filter((entry) => hasMemory(entry.memory));
}

function getFavoriteEntry(entries) {
  const rated = entries.filter((entry) => typeof entry.memory.rating === "number" && entry.memory.rating > 0);
  if (!rated.length) return null;
  return rated.sort((left, right) => {
    if (right.memory.rating !== left.memory.rating) return right.memory.rating - left.memory.rating;
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
  if (typeof memory.rating === "number" && memory.rating > 0) bits.push(`${memory.rating}/5 ocenione`);
  if (memory.note) bits.push("notatka zapisana");
  if (memory.photoDataUrl) bits.push("zdjęcie zapisane");
  return bits;
}

function memoryPillMarkup(label) {
  return `<span class="memory-mini-pill">${escapeHtml(label)}</span>`;
}

function buildBannerMetricMarkup(label, value, note) {
  return `<article class="banner-metric"><strong>${value}</strong><span>${label}</span><small>${note}</small></article>`;
}

function buildMenuMetricMarkup(label, value, note) {
  return `<article class="menu-metric"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span><small>${escapeHtml(note)}</small></article>`;
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
      return `<button class="${activeClass}${memoryClass}" type="button" data-map-index="${index}" style="left: ${point.x}%; top: ${point.y}%;"><strong>${String(index + 1).padStart(2, "0")}</strong><small>${escapeHtml(stop.shortName)}</small></button>`;
    })
    .join("");

  return `
    <div class="atlas-canvas">
      <iframe class="atlas-real-map" title="Mapa trasy po centrum Bydgoszczy" src="${atlasMapUrl}" loading="lazy" tabindex="-1" aria-hidden="true"></iframe>
      <div class="atlas-map-wash"></div>
      <svg class="city-map-svg" viewBox="0 0 100 100" aria-hidden="true">
        <polyline class="city-route-path" points="${routePoints}"></polyline>
      </svg>
      <div class="atlas-label atlas-label-inline" style="left: ${Math.max(6, oldTownPoint.x - 5)}%; top: ${Math.min(92, oldTownPoint.y + 7)}%;">Stare Miasto</div>
      <div class="atlas-label atlas-label-inline" style="left: ${Math.max(10, riverPoint.x - 8)}%; top: ${Math.min(92, riverPoint.y + 10)}%;">Zakole Brdy</div>
      <div class="atlas-label atlas-label-inline" style="left: ${Math.max(10, musicPoint.x - 14)}%; top: ${Math.max(6, musicPoint.y - 9)}%;">Dzielnica Muzyczna</div>
      ${pinMarkup}
      <div class="atlas-map-footer">
        <a class="atlas-map-link" href="${atlasMapLink}" target="_blank" rel="noreferrer">Otwórz pełną mapę trasy</a>
        <span>Dane mapy © OpenStreetMap contributors</span>
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
      <span class="menu-route-index">Punkt ${String(index + 1).padStart(2, "0")}</span>
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
    ? `${memory.rating ? `${memory.rating}/5` : "zapisany"} stempel`
    : "pusty stempel";
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
  const memoryBits = getMemoryBitLabels(memory).map((bit) => bit.replace(" zapisana", "").replace(" zapisane", ""));
  return `
    <button class="${activeClass}" type="button" data-overview-index="${index}">
      <span class="overview-index">${String(index + 1).padStart(2, "0")}</span>
      <strong>${escapeHtml(stop.name)}</strong>
      <span>${escapeHtml(stop.walkFromPrevious)}</span>
      <small class="${memoryBits.length ? "overview-memory" : "overview-memory overview-memory-muted"}">
        ${escapeHtml(memoryBits.length ? memoryBits.join(" · ") : "brak stempla")}
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
        <a class="secondary-link" href="${mapSearchUrl(spot.mapQuery)}" target="_blank" rel="noreferrer">Otwórz w Google Maps</a>
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
        <a class="secondary-link" href="${mapSearchUrl(spot.mapQuery)}" target="_blank" rel="noreferrer">Otwórz tę przerwę</a>
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
  return `<ul class="fact-list">${items.map((fact) => `<li>${escapeHtml(fact)}</li>`).join("")}</ul>`;
}

function deepDivePanelMarkup(tone, title, paragraphs) {
  return `
    <details class="deep-dive-panel ${tone}">
      <summary>
        <span>${escapeHtml(title)}</span>
        <small>Rozwiń, żeby przeczytać więcej — bez wychodzenia z aplikacji.</small>
      </summary>
      <div class="deep-dive-body">
        ${paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </div>
    </details>
  `;
}

function buildDeepDiveMarkup(stop) {
  const content = deepDiveNotes[stop.id];
  if (!content) return "";
  const panels = [];
  if (Array.isArray(content.kids) && content.kids.length) {
    panels.push(deepDivePanelMarkup("is-kids", "Więcej dla małych odkrywców", content.kids));
  }
  if (Array.isArray(content.adults) && content.adults.length) {
    panels.push(deepDivePanelMarkup("is-grownups", "Więcej dla ciekawych dorosłych", content.adults));
  }
  if (!panels.length) return "";
  return `
    <section class="deep-dive-card">
      <div class="deep-dive-heading">
        <p class="fact-label">Otwórz dłuższą historię</p>
        <p>${escapeHtml(content.intro)}</p>
      </div>
      <div class="deep-dive-grid">${panels.join("")}</div>
    </section>
  `;
}

function memoryPhotoMarkup(stop, memory) {
  if (!memory.photoDataUrl) {
    return `<div class="photo-preview-empty">Brak zdjęcia. Dodaj jedno, jeśli chcesz, żeby pamiątka była bardziej osobista.</div>`;
  }
  return `
    <figure class="photo-preview-card">
      <img src="${memory.photoDataUrl}" alt="Wspomnienie z ${escapeHtml(stop.name)}" loading="lazy" />
      <figcaption>${escapeHtml(memory.photoName || "Zapisane zdjęcie punktu")}</figcaption>
    </figure>
  `;
}

function memoryEntryMarkup(entry) {
  const ratingText = entry.memory.rating ? `${entry.memory.rating}/5` : "Bez oceny";
  const noteMarkup = entry.memory.note
    ? `<p>${escapeHtml(entry.memory.note)}</p>`
    : `<p class="memory-entry-muted">Brak notatki dla tego punktu.</p>`;
  const photoMarkup = entry.memory.photoDataUrl
    ? `<img class="memory-entry-photo" src="${entry.memory.photoDataUrl}" alt="Wspomnienie z ${escapeHtml(entry.stop.name)}" loading="lazy" />`
    : "";
  return `
    <article class="memory-entry">
      <div class="memory-entry-top">
        <span class="memory-entry-index">Punkt ${String(entry.index + 1).padStart(2, "0")}</span>
        <span class="memory-rating-pill">${escapeHtml(ratingText)}</span>
      </div>
      <h3>${escapeHtml(entry.stop.name)}</h3>
      ${noteMarkup}
      ${photoMarkup}
      <button class="secondary-link as-button compact-button" type="button" data-memory-index="${entry.index}">Wróć do tego punktu</button>
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

  document.getElementById("chrome-progress").textContent = `Stop ${state.activeStop + 1} z ${routeStops.length}`;
  document.getElementById("chrome-stop-name").textContent = currentStop.name;

  menuButton.setAttribute("aria-expanded", String(menuOpen));
  menuOverlay.hidden = !menuOpen;
  menuDrawer.setAttribute("aria-hidden", String(!menuOpen));
  menuDrawer.classList.toggle("is-open", menuOpen);
  document.body.classList.toggle("menu-open", menuOpen);

  document.getElementById("menu-metrics").innerHTML = [
    buildMenuMetricMarkup("aktywny punkt", `#${String(state.activeStop + 1).padStart(2, "0")}`, currentStop.shortName),
    buildMenuMetricMarkup("zapisane wspomnienia", `${entries.length}`, "oceny, notatki lub zdjęcia"),
    buildMenuMetricMarkup(
      "ulubiony dotąd",
      favorite ? favorite.stop.shortName : "—",
      favorite ? `${favorite.memory.rating}/5 lider stempli` : "oceń punkt, żeby wyłonić lidera"
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
    : '<span class="memory-mini-empty">Jeszcze nic nie zapisano. Szybka ocena wystarczy na początek.</span>';
  document.getElementById("memory-drawer-title").textContent = hasDetailedMemory
    ? "Edytuj zapisaną notatkę lub zdjęcie"
    : "Opcjonalnie: dodaj notatkę lub zdjęcie";
  document.getElementById("memory-drawer-copy").textContent = hasDetailedMemory
    ? "Coś już zapisaliście. Zmień w dowolnym momencie."
    : "Zachowaj jeden mały szczegół na końcowy albumik wspomnień.";
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
    setMemoryStatus("Zapisano w tej przeglądarce", "ok");
  } else {
    setMemoryStatus("Jeszcze nic nie zapisano dla tego punktu", "neutral");
  }
}

function renderCityMap() {
  document.getElementById("city-map").innerHTML = buildCityMapMarkup();
}

function renderBannerMetrics() {
  const entries = getSavedEntries();
  const favorite = getFavoriteEntry(entries);
  const metrics = [
    buildBannerMetricMarkup("punkty kontrolne", `${routeStops.length}`, "pełna rodzinna wyprawa"),
    buildBannerMetricMarkup("zapisanych wspomnień", `${entries.length}`, "notatki, oceny lub zdjęcia"),
    buildBannerMetricMarkup("zdjęć schowanych", `${countPhotos(entries)}`, "gotowe na przyszłą pamiątkę"),
    buildBannerMetricMarkup(
      "ulubiony dotąd",
      favorite ? favorite.stop.shortName : "—",
      favorite ? `${favorite.memory.rating}/5 lider stempli` : "oceń punkt, żeby wyłonić lidera"
    )
  ];
  document.getElementById("banner-metrics").innerHTML = metrics.join("");
}

function renderProgressAndNavigation() {
  const progressCount = state.activeStop + 1;
  const progressPercent = Math.round((progressCount / routeStops.length) * 100);

  document.getElementById("progress-value").textContent = `${progressCount} / ${routeStops.length}`;
  document.getElementById("progress-ring").setAttribute("aria-label", `Odblokowano ${progressCount} z ${routeStops.length} punktów`);
  document.getElementById("progress-ring-track").style.setProperty("--ring-angle", `${progressPercent * 3.6}deg`);
  document.getElementById("rail-list").innerHTML = routeStops.map(railButtonMarkup).join("");
  document.getElementById("overview-grid").innerHTML = routeStops.map(overviewButtonMarkup).join("");
}

function renderStage() {
  const currentStop = routeStops[state.activeStop];
  const nextStop = routeStops[state.activeStop + 1];
  const currentMemory = getStopMemory(currentStop.id);
  const nextMapQuery = currentStop.nextMapQuery || (nextStop ? nextStop.mapQuery : currentStop.mapQuery);
  const nextLinkLabel = currentStop.nextLabel || (nextStop ? "Pokaż trasę do następnego punktu" : "Otwórz finał w Google Maps");
  const factMarkup = [];

  document.getElementById("stop-kicker").textContent = `Stop ${state.activeStop + 1}`;
  document.getElementById("stop-name").textContent = currentStop.name;
  document.getElementById("walk-pill").textContent = currentStop.walkFromPrevious;
  document.getElementById("stay-pill").textContent = currentStop.stayFor;
  document.getElementById("district-chip").textContent = currentStop.district;
  document.getElementById("signature-chip").textContent = currentStop.signature;
  document.getElementById("stop-strapline").textContent = currentStop.strapline;
  document.getElementById("fact-intro-card").innerHTML = `
    <p class="fact-label">Wspólny tryb historii</p>
    <p>Wskazówki dla dzieci i kontekst dla dorosłych pokazywane są teraz razem, żeby rodzina mogła przeczytać jeden punkt bez dodatkowych stuknięć.</p>
  `;
  document.getElementById("look-for-list").innerHTML = currentStop.lookFor
    .map((item) => `<li><span class="look-bullet"></span><span>${escapeHtml(item)}</span></li>`)
    .join("");

  factMarkup.push(`
    <article class="fact-card fact-section-card is-kids">
      <p class="fact-label">Dla młodych odkrywców</p>
      ${factListMarkup(currentStop.kidFacts)}
    </article>
  `);

  factMarkup.push(`
    <article class="fact-card fact-section-card is-grownups">
      <p class="fact-label">Dla ciekawych dorosłych</p>
      ${factListMarkup(currentStop.adultFacts)}
    </article>
  `);

  factMarkup.push(`
    <article class="fact-card mission-card">
      <p class="fact-label">Mini misja</p>
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
  sourceLink.textContent = `Źródło: ${currentStop.sourceLabel}`;

  const stopImage = document.getElementById("stop-image");
  stopImage.src = currentStop.imageUrl;
  stopImage.alt = currentStop.imageAlt;
  document.getElementById("stop-image-caption").textContent = currentStop.imageAlt;

  const mapFrame = document.getElementById("map-frame");
  mapFrame.src = mapEmbedUrl(currentStop.mapQuery);
  mapFrame.title = `Mapa dla ${currentStop.name}`;
  document.getElementById("map-next-label").textContent = nextStop ? `Następny: ${nextStop.name}` : "Ostatni punkt osiągnięty";
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
      <p class="fact-label">Szkic pamiątki</p>
      <h3>Zacznij stemplować trasę</h3>
      <p>Dodaj choćby jedną ocenę, notatkę lub zdjęcie, a ten panel zacznie zamieniać spacer w eksportowalny rodzinny pakiet wspomnień.</p>
      <div class="keepsake-stat-row">
        <span>0 zapisanych punktów</span>
        <span>0 zdjęć</span>
        <span>0 notatek</span>
      </div>
    `;
    memoryList.innerHTML = `
      <article class="memory-empty">
        <strong>Brak zapisanych wspomnień.</strong>
        <p>Najłatwiejszy pierwszy krok to ocenić punkt lub napisać jedno krótkie zdanie o najlepszym moście, fontannie, rzeźbie albo chwili przy lodach.</p>
      </article>
    `;
    return;
  }

  const headline = favorite
    ? `${favorite.stop.name} prowadzi w rodzinnym głosowaniu`
    : "Wasza historia trasy już nabiera kształtu";
  const summaryParts = [
    `${entries.length} punktów ma zapisane wspomnienia`,
    `${photoCount} ${photoCount === 1 ? "zdjęcie schowane" : "zdjęć schowanych"}`,
    `${noteCount} ${noteCount === 1 ? "notatka" : "notatek"}`
  ];
  const noteStrip = entries
    .filter((entry) => entry.memory.note)
    .slice(0, 2)
    .map((entry) => `<li>${escapeHtml(entry.memory.note)}</li>`)
    .join("");

  keepsakeCard.innerHTML = `
    <p class="fact-label">Szkic pamiątki</p>
    <h3>${escapeHtml(headline)}</h3>
    <p>
      ${escapeHtml(summaryParts.join(", "))}. ${
        favorite
          ? `${escapeHtml(favorite.stop.name)} ma najwyższy wynik: ${favorite.memory.rating}/5.`
          : "Dodaj ocenę, jeśli chcesz, żeby trasa wybrała ulubiony punkt."
      }
    </p>
    <div class="keepsake-stat-row">
      <span>${entries.length} zapisanych punktów</span>
      <span>${photoCount} zdjęć</span>
      <span>${noteCount} notatek</span>
    </div>
    ${noteStrip ? `<div class="keepsake-notes"><p class="fact-label">Świeże fragmenty notatek</p><ul>${noteStrip}</ul></div>` : ""}
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
  if (!statusNode) return;
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
    if (!stopStage) return;
    const chromeHeight = chrome ? chrome.getBoundingClientRect().height : 0;
    const top = window.scrollY + stopStage.getBoundingClientRect().top - chromeHeight - 14;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }, 60);
}

function setActiveStop(nextIndex, options = {}) {
  state.activeStop = clampIndex(nextIndex);
  menuOpen = options.closeMenu === false ? menuOpen : false;
  persistState();
  renderAll();
  if (options.scrollToStop) scrollToActiveStop();
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
    return ["Rodzinny spacer po Bydgoszczy", "", "Nie zapisano jeszcze żadnych wspomnień.", "Oceń punkt lub dodaj krótką notatkę, potem pobierz pocztówkę ponownie."].join("\n");
  }
  const lines = [
    "Rodzinny spacer po Bydgoszczy",
    `Wyeksportowano: ${new Date().toLocaleString("pl-PL")}`,
    "",
    `Zapisane punkty: ${entries.length}`,
    `Ulubiony dotąd: ${favorite ? `${favorite.stop.name} (${favorite.memory.rating}/5)` : "Brak ocenionego punktu"}`,
    "",
    "Notatki z punktów:"
  ];
  entries.forEach((entry) => {
    const noteText = entry.memory.note ? entry.memory.note : "Brak notatki.";
    const ratingText = entry.memory.rating ? `${entry.memory.rating}/5` : "bez oceny";
    const photoText = entry.memory.photoDataUrl ? "zdjęcie zapisane" : "brak zdjęcia";
    lines.push(`- ${entry.stop.name}: ${ratingText}, ${photoText}. ${noteText}`);
  });
  return lines.join("\n");
}

function downloadMemoryPack() {
  const entries = getSavedEntries();
  if (!entries.length) {
    setMemoryStatus("Dodaj przynajmniej jedną ocenę, notatkę lub zdjęcie przed pobraniem.", "warning");
    return;
  }
  const payload = {
    trailTitle: "Rodzinny spacer po Bydgoszczy",
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
  downloadFile("bydgoszcz-rodzinna-wyprawa-pamiatki.json", JSON.stringify(payload, null, 2), "application/json");
  setMemoryStatus("Pakiet pamiątek pobrany.", "ok");
}

function downloadPostcard() {
  downloadFile("bydgoszcz-rodzinna-wyprawa-pocztowka.txt", buildPostcardText(), "text/plain;charset=utf-8");
  setMemoryStatus("Notatka pocztówkowa pobrana.", "ok");
}

function clearCurrentCheckpoint() {
  const currentStop = routeStops[state.activeStop];
  delete state.memories[currentStop.id];
  persistState();
  renderAll();
  setMemoryStatus("Wspomnienie punktu wyczyszczone.", "warning");
}

function resetMemories() {
  if (!window.confirm("Wyczyścić wszystkie zapisane oceny, notatki i zdjęcia z tej przeglądarki?")) return;
  state.memories = {};
  persistState();
  renderAll();
  setMemoryStatus("Wszystkie zapisane wspomnienia trasy zostały wyczyszczone.", "warning");
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Nie udało się odczytać pliku."));
    reader.readAsDataURL(file);
  });
}

function loadImage(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Nie udało się załadować obrazu."));
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
  if (menuButton) { setMenuOpen(!menuOpen); return; }

  const menuCloseButton = event.target.closest("#menu-close-button");
  if (menuCloseButton) { setMenuOpen(false); return; }

  const menuOverlay = event.target.closest("#menu-overlay");
  if (menuOverlay) { setMenuOpen(false); return; }

  const menuShortcut = event.target.closest("[data-menu-section]");
  if (menuShortcut) { setMenuOpen(false); return; }

  const menuRouteButton = event.target.closest("[data-menu-stop-index]");
  if (menuRouteButton) { setActiveStop(Number(menuRouteButton.getAttribute("data-menu-stop-index")), { scrollToStop: true }); return; }

  const railButton = event.target.closest("[data-stop-index]");
  if (railButton) { setActiveStop(Number(railButton.getAttribute("data-stop-index"))); return; }

  const overviewButton = event.target.closest("[data-overview-index]");
  if (overviewButton) { setActiveStop(Number(overviewButton.getAttribute("data-overview-index")), { scrollToStop: true, closeMenu: false }); return; }

  const mapButton = event.target.closest("[data-map-index]");
  if (mapButton) { setActiveStop(Number(mapButton.getAttribute("data-map-index"))); return; }

  const memoryJumpButton = event.target.closest("[data-memory-index]");
  if (memoryJumpButton) { setActiveStop(Number(memoryJumpButton.getAttribute("data-memory-index")), { scrollToStop: true, closeMenu: false }); return; }

  const ratingButton = event.target.closest("[data-rating]");
  if (ratingButton) {
    const currentStop = routeStops[state.activeStop];
    const currentMemory = getStopMemory(currentStop.id);
    const selectedRating = Number(ratingButton.getAttribute("data-rating"));
    const nextRating = currentMemory.rating === selectedRating ? 0 : selectedRating;
    upsertMemory(currentStop.id, { rating: nextRating });
    renderAll();
    setMemoryStatus(nextRating ? `Punkt ostemplowany ${nextRating}/5.` : "Ocena usunięta dla tego punktu.", nextRating ? "ok" : "warning");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuOpen) setMenuOpen(false);
});

document.getElementById("prev-button").addEventListener("click", () => {
  if (state.activeStop > 0) setActiveStop(state.activeStop - 1);
});

document.getElementById("next-button").addEventListener("click", () => {
  if (state.activeStop < routeStops.length - 1) setActiveStop(state.activeStop + 1);
});

document.getElementById("clear-memory-button").addEventListener("click", clearCurrentCheckpoint);
document.getElementById("reset-memories-button").addEventListener("click", resetMemories);
document.getElementById("download-memory-button").addEventListener("click", downloadMemoryPack);
document.getElementById("download-postcard-button").addEventListener("click", downloadPostcard);

document.getElementById("memory-note").addEventListener("input", (event) => {
  const currentStop = routeStops[state.activeStop];
  const noteValue = event.target.value;
  window.clearTimeout(noteSaveTimer);
  setMemoryStatus("Zapisywanie notatki...", "neutral");
  noteSaveTimer = window.setTimeout(() => {
    upsertMemory(currentStop.id, { note: noteValue });
    renderChromeAndMenu();
    renderCityMap();
    renderBannerMetrics();
    renderProgressAndNavigation();
    renderCheckpointPassport(currentStop, getStopMemory(currentStop.id));
    renderMemorySummary();
    setMemoryStatus(noteValue.trim() ? "Notatka zapisana w przeglądarce." : "Notatka punktu wyczyszczona.", noteValue.trim() ? "ok" : "warning");
  }, 220);
});

document.getElementById("memory-photo").addEventListener("change", async (event) => {
  const currentStop = routeStops[state.activeStop];
  const selectedFile = event.target.files && event.target.files[0];
  if (!selectedFile) return;
  setMemoryStatus("Kompresowanie zdjęcia...", "neutral");
  try {
    const compressedDataUrl = await compressImageFile(selectedFile);
    upsertMemory(currentStop.id, { photoDataUrl: compressedDataUrl, photoName: selectedFile.name });
    renderAll();
    setMemoryStatus("Zdjęcie zapisane w przeglądarce.", "ok");
  } catch (error) {
    console.warn("Nie udało się przetworzyć przesłanego zdjęcia.", error);
    setMemoryStatus("Nie udało się przetworzyć tego zdjęcia.", "error");
  }
});

window.addEventListener("beforeunload", persistState);

renderAll();
