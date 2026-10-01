/**
 * German long-form food-page content. Full translation of the English source
 * in `../food-content.ts`; every gram and percentage figure is kept identical.
 */
import type { FoodLongContent } from '../food-content';

export const DE: Record<string, FoodLongContent> = {
  // ── Fleisch, Geflügel & Meeresfrüchte ────────────────────────────────────

  'chicken-breast': {
    introHeading: 'Warum Hähnchenbrust beim Garen etwa 28 % schrumpft',
    intro: [
      'Hähnchenbrust ohne Haut und Knochen besteht zu rund 74 % ihres Gewichts aus Wasser und ist fast reiner Magermuskel – etwa 22,5 g Eiweiß und nur 2,6 g Fett pro 100 g roh. Es gibt sehr wenig Fett und kaum Bindegewebe, das die Feuchtigkeit halten könnte, deshalb verhalten sich die Muskelfasern bei Hitze wie ein ausgewrungener Schwamm: Die Proteine denaturieren bei etwa 60–65 °C, die Faserbündel ziehen sich längs und quer zusammen, und das gehaltene Wasser wird in die Pfanne gepresst. Dieser Wasserverlust ist praktisch der gesamte Verlust von 28 %, mit dem die Brust auf eine USDA-Ausbeute von 72 % kommt.',
      'Da der Verlust fast nur Wasser und kaum Fett ist, bleibt das Ausgangs-Eiweiß im Fleisch. Eine rohe Brust von 200 g enthält nach dem Garen immer noch etwa 45 g Eiweiß – es steckt nur jetzt in rund 144 g statt 200 g, weshalb gegarte Hähnchenbrust bei etwa 31 g Eiweiß pro 100 g liegt und rohe bei 22,5 g. Gleiches Eiweiß, weniger Wasser, dichteres Fleisch.',
      'Hähnchenbrust bestraft Übergaren härter als fettere Teilstücke. Ohne Fett oder Kollagen als Puffer treibt jede zusätzliche Minute über 74 °C Kerntemperatur mehr Wasser aus und drückt die Ausbeute Richtung Mitte der 60er. Dünn geklopfte Schnitzel und kleine Filets verlieren einen größeren Anteil als eine dicke ganze Brust, weil sie im Verhältnis zur Masse mehr Verdunstungsfläche haben.',
      'Es ist das Lebensmittel, bei dem die meisten Tracking-Apps in dieselbe Richtung danebenliegen: Sie wiegen die gegarte Brust, schlagen einen Nährwert für Rohgewicht nach und untertreiben so still das Eiweiß um ein Viertel. Die Lösung ist immer, das Rohgewichts-Äquivalent zu erfassen – genau das gibt dieser Rechner in beide Umrechnungsrichtungen zurück.',
    ],
    methodHeading: 'Gebacken, gegrillt oder pochiert: ein durchgerechnetes Beispiel',
    method: [
      'Trockene, starke Hitze verdunstet mehr Oberflächenfeuchtigkeit als sanfte feuchte Hitze, deshalb verschiebt die Garmethode die Ausbeute um etwa sieben Punkte. USDA-Werte für Brust ohne Haut: gebacken oder gebraten 72 %, in der Pfanne 72 %, gegrillt 70 %, gekocht oder pochiert 77 %.',
      'Starte mit einer rohen Brust von 200 g. Bei 200 °C gebacken kommt sie auf 200 × 0,72 ≈ 144 g gegart. Über direkter Flamme gegrillt landet dieselbe Brust bei 200 × 0,70 = 140 g – die zusätzliche Röstung und die Strahlungshitze kosten ein paar Gramm mehr. In kaum siedendem Wasser pochiert hält sie 200 × 0,77 = 154 g, weil das Fleisch von Wasser statt trockener Luft umgeben ist und fast nichts verdunstet.',
      'Alle drei Portionen tragen dieselben Makros, weil sie alle aus 200 g roh stammen: etwa 240 kcal, 45 g Eiweiß, 5,2 g Fett. Wenn du nur das Gargewicht hast, teile durch die Ausbeute deiner Methode – eine gegrillte Portion von 150 g sind 150 ÷ 0,70 ≈ 214 g roh; gebacken sind dieselben 150 g 150 ÷ 0,72 ≈ 208 g roh. Nutze den Garmethoden-Schalter des Rechners, um automatisch den richtigen Divisor zu wählen.',
    ],
    buyingHeading: 'Wie viel rohe Hähnchenbrust kaufen',
    buying: [
      'Rechne von der gegarten Portion zurück, die du auf dem Teller haben willst. Für 150 g gegart kaufe etwa 150 ÷ 0,72 ≈ 210 g roh pro Person, wenn du bäckst oder brätst; eher 215 g beim Grillen. Für eine gegarte Portion von 170 g (6 oz) rechne mit etwa 235–240 g roh pro Person.',
      'Abgepackte Brüste wiegen meist 200–280 g pro Stück, eine durchschnittliche Brust sättigt also einen hungrigen Erwachsenen mit etwas Rest, und eine 1-kg-Schale mit drei bis vier Brüsten ergibt rund 700–720 g gegart – etwa vier Portionen à 175 g. Für fünf gegarte Portionen à 150 g beim Meal Prep starte mit etwa 1,05 kg roh.',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von Hähnchenbrust',
    mistakes: [
      'Nach dem Garen wiegen und dann gegen einen Roh-Nährwert „pro 100 g“ erfassen. Eine gegarte Brust von 150 g entspricht etwa 208 g roh; 150 g zu erfassen kostet dich rund 13 g Eiweiß und 70 kcal.',
      'Die Ausbeute vom Pochieren/Kochen (77 %) für eine Brust nutzen, die du eigentlich gegrillt hast (70 %). Das sind 10 % Fehler beim zurückgerechneten Rohgewicht.',
      'Vormarinierte oder gepökelte „gewürzte“ Brust aus dem Laden als reines Hähnchen erfassen. Die zugesetzte Lösung kann 10–15 % des Packungsgewichts ausmachen und ist überwiegend Wasser und Salz, kein Eiweiß.',
    ],
  },

  'chicken-thigh': {
    introHeading: 'Warum Hähnchenschenkel mehr verliert als die Brust',
    intro: [
      'Der entbeinte, hautlose Schenkel ist dunkles Fleisch: die Muskeln, die das Huhn zum Stehen und Laufen nutzt. Sie arbeiten härter als die Brust, tragen also mehr Myoglobin, mehr intramuskuläres Fett (etwa 4,6 g pro 100 g roh gegenüber 2,6 g bei der Brust) und deutlich mehr Bindegewebe. Diese Struktur ist der Grund, warum der Schenkel auf eine Backausbeute von 69 % gart – ein Verlust von rund 31 % –, während die Brust 72 % hält.',
      'Zwei Dinge verlassen das Fleisch gleichzeitig. Wasser wird herausgepresst, während sich die Fasern zusammenziehen, wie bei jedem Muskel, und das Fett schmilzt aus: Die höhere Hitze von Braten oder Grillen schmilzt das intramuskuläre Fett, das mit dem Saft abfließt. Ein fetteres Stück mit mehr auszuschmelzendem Fett verliert mehr Gesamtgewicht, auch wenn das enthaltene Kollagen gleichzeitig zu Gelatine wird und etwas Feuchtigkeit zurückhält.',
      'Dieses Kollagen ist auch der Grund, warum der Schenkel beim Essen bei gleicher Ausbeute nachsichtiger ist als die Brust. Übergarte Brust ist trocken und faserig; ein übergarter Schenkel hat genug abgebautes Bindegewebe, dass er trotzdem saftig wirkt. Die Waage zeigt den Gewichtsverlust trotzdem, auch wenn dein Mund ihn nicht spürt.',
      'Fürs Tracking ist der Schenkel wichtig, weil die Spanne zwischen den Methoden riesig ist – größer als bei fast jedem anderen Teilstück auf dieser Seite –, eine einzige „Hähnchen“-Ausbeute reicht hier also nicht.',
    ],
    methodHeading: 'Die größte Methodenspanne aller Hähnchenteile',
    method: [
      'Das USDA dokumentiert den entbeinten Schenkel von 59 % frittiert bis 80 % paniert und frittiert, mit geschmort 73 %, ofen-frittiert 66 %, in der Pfanne 66 %, gegrillt 61 % und Barbecue-gegrillt 64 %. Der Richtwert von 69 % ist der Wert für gebacken/gebraten.',
      'Nimm einen rohen Schenkel von 150 g. In einer Sauce geschmort hält er 150 × 0,73 ≈ 110 g. Nah an der Oberhitze gegrillt fällt er auf 150 × 0,61 ≈ 92 g – 18 g Unterschied zur geschmorten Version desselben Stücks. Ofen-frittiert landet er bei 150 × 0,66 = 99 g.',
      'Jede dieser Portionen wird trotzdem als 150 g roh erfasst: etwa 192 kcal, 30,6 g Eiweiß, 6,9 g Fett. Der Wert für paniert-frittiert (80 %) ist der Ausreißer: Er sieht nur hoch aus, weil Panade und aufgesogenes Öl Gewicht hinzufügen, das nie Hähnchen war – nutze ihn also nicht, um die Makros von magerem Schenkel zurückzurechnen.',
    ],
    buyingHeading: 'Wie viel roher Hähnchenschenkel kaufen',
    buying: [
      'Entbeinte, hautlose Schenkel wiegen im Schnitt 90–130 g pro Stück roh. Für eine gegarte Portion von 120 g kaufe etwa 120 ÷ 0,69 ≈ 175 g roh pro Person beim Braten oder Backen – etwa zwei kleinere Schenkel oder anderthalb große.',
      'Eine 1-kg-Packung entbeinter Schenkel brät auf etwa 690 g gegart herunter, oder vier Portionen à 170 g. Beim Schmoren für ein Curry oder einen Eintopf steigt die Ausbeute auf 73 % und dasselbe Kilo ergibt etwa 730 g gegartes Fleisch.',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von Hähnchenschenkel',
    mistakes: [
      'Die Ausbeute der Hähnchenbrust (72 %) für Schenkel wiederverwenden. Der Schenkel liegt bei fast jeder Methode niedriger; gebacken sind es 69 %, gegrillt eher 61 %.',
      'Schenkel mit Knochen und Haut nach dem Rohgewicht der Packung als essbares Fleisch erfassen. Haut und Knochen sind 25–35 % eines Schenkels mit Knochen, und die Haut ist fast nur Fett.',
      'Panierten, frittierten Schenkel (80 % „Ausbeute“) als mageres Hähnchen behandeln. Das Extragewicht ist Teig und Öl, kein Eiweiß – diese Portion hat weit mehr Fett und Kohlenhydrate, als die Makros des rohen Schenkels nahelegen.',
    ],
  },

  'ground-beef-80-20': {
    introHeading: 'Warum Hackfleisch 80/20 etwa ein Viertel seines Gewichts verliert',
    intro: [
      'Standard-Hackfleisch 80/20 hat 20 % Fett im Rohgewicht – etwa 20 g Fett und 254 kcal pro 100 g. Beim Garen verlassen zwei getrennte Dinge die Pfanne. Der Magermuskel zieht sich zusammen und drückt Wasser heraus, und ein großer Teil dieser 20 % Fett schmilzt und läuft als Flüssigkeit aus. Zusammen bringen sie das krümelige Hack auf eine Pfannen-Ausbeute von 73 %, einen Verlust von 27 %, größtenteils sichtbar als das Fett, das du abgießt oder abtupfst.',
      'Da so viel des Verlusts ausgeschmolzenes Fett und nicht Wasser ist, ist gegartes 80/20 pro Gramm deutlich magerer, als die Rohmakros vermuten lassen – ein Teil des Fetts ist jetzt in der Pfanne, nicht auf dem Teller. Es ist das eine gängige Lebensmittel, bei dem das Erfassen des Rohgewichts-Äquivalents das tatsächlich gegessene Fett leicht überschätzt. Es ist trotzdem weit genauer, als das abgetropfte Gargewicht gegen einen Roh-Nährwert zu erfassen, was alles unterschätzt.',
      'Mahlgrad und Fettgehalt steuern die Ausbeute. Magerere Sorten (siehe 93/7) verlieren weniger, weil weniger Fett zum Ausschmelzen da ist. Grob gewolftes Fleisch, sanft gegart, verliert weniger als fein gewolftes bei starker Hitze, das mehr Zellen aufreißt und mehr Flüssigkeit freigibt.',
      'Für eine stabile Zahl wiege das rohe Rind, bevor es in die Pfanne kommt. Das gegarte Krümelfleisch nach dem Abtropfen zu wiegen, führt eine zweite Variable ein – wie viel Fett du abgegossen hast – zusätzlich zur Ausbeute selbst.',
    ],
    methodHeading: 'In der Pfanne gebräunt vs. unter dem Grill, durchgerechnet',
    method: [
      'Das USDA führt 80/20-Krümel mit 73 % in der Pfanne gebräunt und 69 % unter dem Grill (wo mehr Fett abtropft). Magereres 93/7 kommt bei denselben zwei Methoden auf 77 % und 73 %.',
      'Bräune eine ganze 454-g-Packung (1 lb) in der Pfanne und du bekommst etwa 454 × 0,73 ≈ 331 g gegartes, abgetropftes Krümelfleisch. Grille dasselbe Pfund und es kommt auf 454 × 0,69 ≈ 313 g herunter, mit mehr Fett, das aufs Blech verloren geht.',
      'Auf Rohbasis starteten diese 454 g mit etwa 1.153 kcal, 78 g Eiweiß und 91 g Fett. Das Krümelfleisch trägt das gesamte Eiweiß, aber nur einen Teil dieses Fetts, je nachdem, wie viel du abgegossen hast – genau deshalb ist das Rohgewicht das Konstante, das man erfassen sollte.',
    ],
    buyingHeading: 'Wie viel rohes Hackfleisch kaufen',
    buying: [
      'Für Burger gart ein rohes Patty von 150 g (1/3 lb) auf etwa 110 g; eines von 113 g (1/4 lb) auf etwa 82 g. Kaufe 150–170 g roh pro Burger, wenn ein sättigendes Patty erwartet wird.',
      'Für eine Sauce, ein Chili oder eine Taco-Füllung, in der das Rind nur eine Komponente ist, sind 100–125 g roh pro Person großzügig. Eine 454-g-Packung (1 lb) bräunt auf rund 330 g gegart herunter und sättigt bequem vier Personen in einer Bolognese oder vier bis fünf in Tacos.',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von Hackfleisch',
    mistakes: [
      'Das abgetropfte Gargewicht gegen einen Roh-Eintrag „pro 100 g“ erfassen. Krümelfleisch ist pro Gramm weit kaloriendichter als rohes Rind, das treibt Kalorien und Fett stark nach oben.',
      'Annehmen, alle Sorten verhalten sich gleich. 80/20 ergibt ~73 % in der Pfanne gebräunt; 93/7 hält ~77 %, weil weniger Fett zum Ausschmelzen da ist.',
      'Vergessen, dass das Abgießen Fett entfernt, das die Rohmakros trotzdem zählen. Gießt du das Fett weg, liegt deine echte Fettaufnahme etwas unter der Umrechnung aus dem Rohgewicht – der Unterschied ist das Fett in der Pfanne.',
    ],
  },

  'ground-beef-93-7': {
    introHeading: 'Warum Hackfleisch 93/7 sein Gewicht besser hält als 80/20',
    intro: [
      'Mageres Hackfleisch 93/7 hat nur 7 % Fett im Rohgewicht – etwa 7,2 g Fett und 152 kcal pro 100 g, gegenüber 20 g und 254 kcal bei 80/20. Der Magermuskel zieht sich beim Garen weiterhin zusammen und gibt Wasser ab, aber es ist weit weniger Fett vorhanden, das schmelzen und die Pfanne verlassen könnte. Dieser fehlende Fettverlust ist der ganze Grund, warum 93/7 auf eine Pfannen-Ausbeute von 77 % gart, während 80/20 auf 73 % fällt.',
      'Weniger ausgeschmolzenes Fett bedeutet auch, dass die Makro-Umrechnung aus dem Rohgewicht bei 93/7 ehrlicher ist als bei fetten Sorten. Sehr wenig Fett landet in der Pfanne, das Krümelfleisch trägt also fast den vollen Roh-Fettwert – das Rohgewichts-Äquivalent zu erfassen ist hier die konstante und zugleich genaue Wahl.',
      'Der Kompromiss, den Kochende spüren, ist Trockenheit. Mit wenig Fett, das die Krümel feucht hält, geht 93/7 bei starker Hitze schnell von saftig zu kreidig, und die Ausbeute rutscht Richtung untere 70er, wenn du es forcierst. Sanft bräunen und vom Herd nehmen, solange es noch etwas rosa ist, hält dich nahe an 77 %.',
      'Für Chili, Tacos, Fleischsauce und Meal-Prep-Bowls, in denen man das Eiweiß ohne das Fett will, ist 93/7 die Standardwahl – und seine höhere Ausbeute lässt eine Packung auf dem Teller weiter reichen als dasselbe Gewicht 80/20.',
    ],
    methodHeading: 'In der Pfanne gebräunt vs. unter dem Grill, durchgerechnet',
    method: [
      'USDA-Werte für 93/7-Krümel: 77 % in der Pfanne gebräunt, 73 % unter dem Grill.',
      'Eine 454-g-Packung (1 lb) in der Pfanne gebräunt ergibt etwa 454 × 0,77 ≈ 350 g gegart und abgetropft – deutlich mehr als die ~331 g, die du aus 80/20 bekommst. Gegrillt kommt dieselbe Packung auf 454 × 0,73 ≈ 331 g herunter.',
      'Diese 454 g roh sind etwa 690 kcal, 95 g Eiweiß und 33 g Fett. Da fast nichts von diesem Fett ausschmilzt und entweicht, behält das Krümelfleisch nahezu alles, deshalb ergibt das Zurückrechnen deiner gegarten Portion auf das Rohgewicht eine genaue Makro-Anzeige.',
    ],
    buyingHeading: 'Wie viel mageres rohes Hackfleisch kaufen',
    buying: [
      'Für eine proteinbetonte Meal-Prep-Bowl garen 150 g roh pro Portion auf etwa 115 g und liefern rund 31 g Eiweiß. Fünf Portionen brauchen etwa 750 g roh.',
      'Eine 454-g-Packung (1 lb) ergibt rund 350 g gegart – genug für vier großzügige Taco- oder Chili-Portionen à etwa 115 g gegart, oder drei größere Bowls.',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von magerem Hackfleisch',
    mistakes: [
      'Die Ausbeute von 80/20 (73 %) für 93/7 nutzen. Mageres Rind hält mehr Gewicht – etwa 77 % in der Pfanne gebräunt –, du würdest also das Rohgewicht unterschätzen und dich beim Eiweiß kurz halten.',
      'Krümelfleisch gegen einen Roh-Nährwert erfassen. Auch mageres Rind konzentriert sich, während es Wasser verliert, gegart ist es also pro Gramm kaloriendichter als roh.',
      '93/7- und 80/20-Makros frei tauschen. Der Fett- und Kaloriengehalt unterscheidet sich pro Gramm Fett um fast das Dreifache – wähle den Eintrag, der zur Packung passt.',
    ],
  },

  'ribeye-steak': {
    introHeading: 'Warum Ribeye 84 % seines Gewichts behält – der höchste Wert aller Fleischsorten hier',
    intro: [
      'Ribeye ist ein stark marmoriertes Steak: etwa 23 g Fett pro 100 g roh, als intramuskuläre Marmorierung durch den Muskel gezogen statt in einer separaten Schicht. Beim Garen schmilzt diese Marmorierung, doch ein großer Teil bleibt zwischen den Muskelfasern gefangen, statt abzufließen, und das Fett, das flüssig wird, hält die Oberfläche begossen, sodass weniger Wasser verdunstet. Das Ergebnis ist eine USDA-Ausbeute von 84 % – nur 16 % Verlust, der sanfteste aller Fleisch- oder Fischsorten auf dieser Seite.',
      'Der Muskel verliert weiterhin Wasser, während er fester wird, und das Steak gibt beim Ruhen Saft ab, aber ein fettes Stück hat pro Gramm einfach weniger Wasser von Anfang an – Fett verdrängt Wasser –, es ist also weniger zu verlieren da. Ein mageres Stück wie die Oberschale, gleich gegart, würde deutlich mehr verlieren.',
      'Der Garpunkt ist der eigentliche Hebel bei einem Steak. Das USDA merkt an, dass die Ribeye-Ausbeute von rare bis well-done spürbar schwankt: Ein rares Steak hat kaum Feuchtigkeit abgegeben, ein well-done wurde lange genug auf Temperatur gehalten, um den Verlust über 20 % zu treiben. Der Wert von 84 % ist ein mittlerer Durchschnitt.',
      'Da das Fett größtenteils im Fleisch bleibt, ist die Makro-Umrechnung aus dem Rohgewicht für Ribeye genau – was du erfasst, kommt dem, was du isst, sehr nahe, Marmorierung inklusive.',
    ],
    methodHeading: 'Ein durchgerechnetes Beispiel, von rare bis well-done',
    method: [
      'Die Seite nutzt eine einzige Ausbeute von 84 % für Ribeye (USDA Table of Cooking Yields), die ein typisches medium-Ergebnis darstellt. Behandle rare als ein paar Punkte höher und well-done als mehrere Punkte niedriger.',
      'Ein rohes Ribeye von 340 g (12 oz), medium gegart, kommt auf etwa 340 × 0,84 ≈ 286 g auf dem Teller. Rare gegart hält es eher 300 g; bis well-done gebracht rechne mit etwa 265–270 g, da die verlängerte Hitze mehr Wasser austreibt und mehr Fett ausschmilzt.',
      'Alle davon stammten aus 340 g roh: etwa 989 kcal, 66 g Eiweiß und 79 g Fett. Wiege das Steak roh, wenn du kannst – es aus dem Gargewicht zurückzurechnen heißt, deinen eigenen Garpunkt zu raten, was die Ausbeute um zehn Punkte schwanken lässt.',
    ],
    buyingHeading: 'Wie viel rohes Ribeye kaufen',
    buying: [
      'Steakhouse-Portionen sind 225–450 g (8–16 oz) roh. Ein rohes Steak von 8 oz isst sich wie etwa 190 g gegart; eines von 12 oz wie etwa 286 g gegart. Für ein normales Abendessen mit Beilagen reichen 8–10 oz roh pro Person locker; für ein steakbetontes Essen 12 oz.',
      'Ribeye mit Knochen (Rib Steak / Tomahawk) trägt 10–20 % Knochengewicht, das nicht essbar ist – kaufe entsprechend mehr, oder wiege das Fleisch nach dem Garen vom Knochen gelöst und rechne das um.',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von Ribeye',
    mistakes: [
      'Sichtbares Fett nach dem Garen abschneiden, aber das ganze Rohgewicht erfassen. Wenn du den Fettdeckel abschneidest und liegen lässt, erfasse ein kleineres Roh-Äquivalent als das ganze Steak.',
      'Die Ausbeute eines mageren Steaks nutzen. Roastbeef oder Oberschale verlieren mehr als Ribeye; mit 84 % liegt Ribeye nahe am oberen Ende der Spanne.',
      'Den Garpunkt ignorieren. Ein well-done Ribeye kann pro 340 g 15–20 g weniger wiegen als ein rares, das aus demselben rohen Steak gegart wurde.',
    ],
  },

  'pork-chop': {
    introHeading: 'Warum ein Schweinekotelett etwa 22 % verliert – und Schweineschulter weit mehr',
    intro: [
      'Ein entbeintes Schweinekotelett ist ein mageres, schnell garendes Teilstück: etwa 21,5 g Eiweiß und 5,6 g Fett pro 100 g roh, aus dem Rücken geschnitten. Es verhält sich sehr ähnlich wie Hähnchenbrust – die Muskelfasern ziehen sich zusammen, Wasser wird herausgedrückt, und ein schnell gegartes Kotelett pendelt sich bei einer Pfannen-Ausbeute von 78 % ein, einem Verlust von 22 %.',
      'Was das Schweinekotelett heikel macht, ist sein enges sicheres Fenster. Moderne Empfehlungen garen Schwein auf 63 °C plus Ruhezeit, wo es noch zart rosa und saftig ist. Bring es auf den alten Standard von 71 °C „kein Rosa“ und du verdunstest viel mehr Wasser – die Ausbeute kann in die unteren 70er fallen und das Kotelett wird trocken und blass.',
      'Die Methode zählt beim Schweinekotelett mehr als bei den meisten Teilstücken, weil sich die Optionen wirklich unterscheiden: Schmoren umgibt es mit Flüssigkeit, sodass es 76 % hält, während Grillen über direkter Hitze mit hart anbratender Oberfläche tatsächlich höher enden kann, bei 83 %, weil das Äußere schnell fest wird und die Feuchtigkeit einschließt, bevor das Innere übergart.',
      'Schweineschulter ist ein anderes Tier – ein fettes, kollagenreiches Teilstück, das stundenlang bei niedriger Temperatur gegart wird, weshalb es rund 35 % verliert (eine Ausbeute von 65 %). Lange Zeit auf Temperatur schmilzt den Großteil des Fetts aus und treibt weit mehr Wasser aus, als ein Fünf-Minuten-Kotelett je könnte.',
    ],
    methodHeading: 'In der Pfanne gebraten vs. geschmort vs. gegrillt',
    method: [
      'USDA-Methodenwerte für ein generisches entbeintes Kotelett (gemittelt über Nacken, Rücken und Rippe): in der Pfanne 78 %, geschmort 76 %, unter dem Grill oder gegrillt 83 %.',
      'Ein rohes Kotelett von 170 g (6 oz), in der Pfanne gebraten, kommt auf etwa 170 × 0,78 ≈ 133 g. In einer Sauce geschmort hält es 170 × 0,76 ≈ 129 g. Hart über direkter Hitze gegrillt kann es bei 170 × 0,83 ≈ 141 g enden, weil die angebratene Kruste die Feuchtigkeit einschließt.',
      'Jede Portion wird als 170 g roh erfasst: etwa 243 kcal, 37 g Eiweiß, 9,5 g Fett. Wenn du es nur gegart gewogen hast, ist ein in der Pfanne gebratenes Kotelett von 130 g 130 ÷ 0,78 ≈ 167 g roh.',
    ],
    buyingHeading: 'Wie viel rohes Schweinekotelett kaufen',
    buying: [
      'Entbeinte Koteletts wiegen 140–225 g pro Stück roh. Für eine gegarte Portion von 150 g kaufe etwa 150 ÷ 0,78 ≈ 192 g roh pro Person – ein durchschnittliches Kotelett.',
      'Koteletts mit Knochen tragen 15–25 % Knochen. Ein Kotelett mit Knochen von 250 g hat etwa 190–210 g Fleisch, das auf rund 150–165 g gart. Kaufe Koteletts mit Knochen nach Stückzahl (eines pro Person) statt nach Gewicht.',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von Schweinekotelett',
    mistakes: [
      'Die Kotelett-Ausbeute (78 %) auf Pulled Pork oder Carnitas anwenden. Stundenlang gegarte Schweineschulter ergibt rund 65 % – ein rohes Stück von 500 g wird zu etwa 325 g gegart, nicht 390 g.',
      'Das Gewicht des Koteletts mit Knochen als essbares Fleisch erfassen. Ziehe vor dem Umrechnen 15–25 % für den Knochen ab.',
      'Auf „kein Rosa“ übergaren und sich dann wundern, warum das Gargewicht niedrig ist. Ein auf 71 °C oder mehr gebrachtes Kotelett kann eher 72 % als 78 % ergeben.',
    ],
  },

  'pork-shoulder': {
    introHeading: 'Warum Schweineschulter rund 35 % verliert – der größte Rückgang aller Fleischsorten hier',
    intro: [
      'Schweineschulter (Boston Butt / Vorderschinken) ist das Gegenteil eines mageren Koteletts: etwa 14 g Fett pro 100 g roh, dazu dicke Stränge kollagenreichen Bindegewebes und ein Fettdeckel. Sie wird bewusst langsam gegart – Stunden bei 90–120 °C, oder ein langes Schmoren –, damit dieses Kollagen Zeit hat, zu Gelatine zu schmelzen. Der Preis dieser Niedrig-und-langsam-Verwandlung ist eine USDA-Ausbeute von 65 %, ein Gewichtsverlust von 35 %.',
      'Über diese Stunden verschwindet fast alles. Das intramuskuläre und das Deckelfett schmelzen größtenteils in die Pfanne oder die Auffangschale des Smokers aus. Wasser, das ein schnell gegartes Stück nie Zeit hat zu verlieren, verdunstet über die gesamte Garzeit weiter. Selbst das Kollagen gibt, einmal geliert, einen Teil des gebundenen Wassers frei. Was übrig bleibt, ist konzentriertes, zerzupfbares Fleisch.',
      'Die Ausbeute ist für Pulled Pork bemerkenswert konstant, gerade weil der Endpunkt konstant ist – man gart, bis es zerfällt, um die 90–96 °C Kerntemperatur, nicht auf eine feste Zeit. Ob du sie räucherst, im Ofen brätst oder im Slow Cooker garst, du landest nahe 65 %.',
      'Fürs Tracking ist es das Teilstück, bei dem eine generische „Schwein“-Ausbeute den meisten Schaden anrichtet: die eines Koteletts würde dein gegartes Pulled Pork um ein Drittel überschätzen.',
    ],
    methodHeading: 'Ein durchgerechnetes Beispiel: vom rohen Braten zum Pulled Pork',
    method: [
      'Die Seite nutzt eine einzige Ausbeute von 65 % für Schweineschulter (USDA Table of Cooking Yields), die Niedrig-und-langsam-Schmoren, -Braten und -Räuchern abdeckt, die alle nah beieinanderliegen.',
      'Eine entbeinte Schulter von 2 kg (4,4 lb) roh reduziert sich auf etwa 2000 × 0,65 = 1.300 g gegartes Fleisch. Ein Stück von 1 kg ergibt etwa 650 g. Schulter mit Knochen verliert das Knochengewicht obendrauf – rechne mit weiteren 8–12 %.',
      'Diese 2 kg roh sind vor dem Garen etwa 4.020 kcal, 348 g Eiweiß und 284 g Fett. Ein guter Teil des Fetts schmilzt in die Schale aus, die 1.300 g zerzupftes Fleisch sind also pro Gramm magerer, als die Rohmakros vermuten lassen – aber die Umrechnung aus dem Rohgewicht bleibt die konstante Art, es zu erfassen, und du kannst das Fett etwas senken, wenn du den Bratensaft abgeschöpft hast.',
    ],
    buyingHeading: 'Wie viel rohe Schweineschulter kaufen',
    buying: [
      'Rechne mit etwa 150 g gegartem Pulled Pork pro Person in Sandwiches, das sind rund 150 ÷ 0,65 ≈ 230 g roh entbeinte Schulter pro Kopf. Für eine große Runde landet die Catering-Regel „1/3 lb gegart pro Person, also 1/2 lb roh“ an derselben Stelle.',
      'Eine ganze entbeinte Schulter wiegt meist 2–3,5 kg. Ein Braten von 3 kg ergibt etwa 1,95 kg gegart – genug für ein Dutzend großzügige Sandwiches. Mit Knochen kaufe etwa 15 % mehr, um den Knochen abzudecken.',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von Schweineschulter',
    mistakes: [
      'Eine Kotelett- oder „Durchschnittsschwein“-Ausbeute nutzen. Mit 65 % verliert die Schulter weit mehr als die 78 % eines Koteletts; eine Kotelett-Ausbeute überschätzt dein gegartes Pulled Pork um etwa ein Drittel.',
      'Das gegarte, gesoßte Gewicht erfassen. BBQ-Sauce fügt Zucker und Kalorien hinzu, die nicht im Schwein sind – wiege das Fleisch vor dem Soßen, oder erfasse die Sauce separat.',
      'Ausgeschmolzenes Fett ignorieren. Wenn du den Bratensaft abschöpfst oder abgießt, liegt deine tatsächliche Fettaufnahme unter der Umrechnung aus dem Rohgewicht; der Unterschied ist das Fett, das in der Pfanne blieb.',
    ],
  },

  'turkey-breast': {
    introHeading: 'Warum Putenbrust beim Braten rund 21 % verliert',
    intro: [
      'Putenbrust ohne Haut ist das magerste große Geflügelteilstück auf dieser Seite – etwa 24,6 g Eiweiß und nur 1 g Fett pro 100 g roh, sogar magerer als Hähnchenbrust. Sie ist nahezu reiner Muskel und Wasser, beim Braten ist die Geschichte also fast nur Wasserverlust: Die Proteine denaturieren, die Fasern ziehen sich zusammen, Feuchtigkeit wird herausgedrückt, und die Brust pendelt sich bei einer USDA-Ausbeute von 79 % ein, einem Verlust von 21 %.',
      'Sie verliert etwas weniger als Hähnchenbrust (72 %) vor allem, weil eine Putenbrust ein viel größeres Fleischstück ist. Eine ganze Brust von 2–3 kg hat ein niedriges Verhältnis von Oberfläche zu Masse, proportional weniger davon ist also trocknender Hitze ausgesetzt, und das Innere wird von der umgebenden Masse gepuffert. Schneide sie in Schnitzel und die Ausbeute fällt Richtung Hähnchenbrust-Bereich.',
      'Der klassische Fehler bei Pute ist, sie aus Vorsicht auf den alten Geflügel-Standard von 74 °C oder mehr zu garen. Bei 71 °C herausgenommen und geruht hält die Brust nahe 79 %; auf 80 °C gebracht wird sie sägemehltrocken und die Ausbeute fällt mehrere Punkte.',
      'Der Wert von 79 % gilt speziell für die Brust. Ausbeuten für die ganze Pute und die gefüllte Pute liegen niedriger und sind nicht vergleichbar – sie mitteln dunkles Fleisch, Haut und Verluste aus der Bauchhöhle ein.',
    ],
    methodHeading: 'Ein durchgerechnetes Beispiel: gebratene Putenbrust',
    method: [
      'Die Seite nutzt eine einzige Ausbeute von 79 % für Putenbrust (USDA Agriculture Handbook No. 102), fürs Braten. Pochieren oder Dämpfen würde etwas mehr halten; in dünne Schnitzel schneiden und in der Pfanne anbraten würde etwas weniger halten.',
      'Eine rohe Portion Brust von 250 g brät auf etwa 250 × 0,79 ≈ 198 g gegart. Ein ganzer entbeinter Brustbraten von 2,5 kg ergibt rund 1,98 kg gegartes, aufgeschnittenes Fleisch.',
      'Diese 250 g roh sind etwa 285 kcal, 61,5 g Eiweiß und 2,5 g Fett. Wenn du zuerst tranchiert und danach gewogen hast, ist eine gegarte Portion von 150 g 150 ÷ 0,79 ≈ 190 g roh. „Gebratene Putenbrust“ aus der Feinkosttheke ist nicht vergleichbar – sie ist gepökelt und oft mit zugesetztem Wasser, erfasse sie also über ihr eigenes Etikett für Gargewicht.',
    ],
    buyingHeading: 'Wie viel rohe Putenbrust kaufen',
    buying: [
      'Für eine gegarte Portion von 150 g kaufe etwa 150 ÷ 0,79 ≈ 190 g roh entbeinte Brust pro Person. Für Thanksgiving-artige Reste verdopple das.',
      'Eine Putenbrust mit Knochen ist zu 30–40 % Knochen und Haut. Für 6 Personen mit je 150 g gegart (900 g gegart, ~1,14 kg Roh-Äquivalent entbeinte Brust) kaufe eine Brust mit Knochen von etwa 2,7–3 kg, oder einen entbeinten Braten von 1,2 kg.',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von Putenbrust',
    mistakes: [
      'Ausbeutedaten der ganzen gebratenen Pute (oft mit rund 70–74 % angegeben) für eine reine Brust nutzen. Die Brust allein hält etwa 79 %.',
      'Gepökelte, vorgebasste oder „selbstbegießende“ Supermarktbrust als reine Pute erfassen. Die injizierte Lösung ist 8–15 % des Gewichts und besteht aus Wasser, Salz und manchmal Fett.',
      'Puten-Aufschnitt aus der Feinkosttheke wie zu Hause gebratene Brust behandeln. Aufschnitt trägt zugesetztes Wasser und Natrium und hat sein eigenes (Gargewichts-)Etikett – nutze das.',
    ],
  },

  'salmon': {
    introHeading: 'Warum Lachs beim Garen nur rund 15 % verliert',
    intro: [
      'Lachsfilet ist ein fettreicher Fisch – etwa 13,4 g Fett pro 100 g roh, meist ungesättigtes Öl, durch das Fleisch verteilt und in den Fettlinien zwischen den Muskelflocken konzentriert. Dieses Öl ist der Grund, warum Lachs eine USDA-Ausbeute von 85 % erreicht, die höchste aller Proteine auf dieser Seite: Fischmuskel ist aus kurzen, zarten Flocken mit sehr wenig Bindegewebe aufgebaut, er wird also sanft fest und das Fett hält ihn feucht, statt abzufließen.',
      'Wenn Lachs gart, koagulieren die Muskelproteine und drücken etwas Wasser und das weiße Zeug an der Oberfläche heraus – das ist Albumin, ein wasserlösliches Protein. Aber die Faserbündel sind kurz und das Fett ist überall, das Fleisch zieht sich also nie zusammen und wringt sich nicht aus wie eine Hähnchenbrust. Der Großteil des Gewichts bleibt an Ort und Stelle.',
      'Übergaren kostet trotzdem. Über 55–60 °C Kerntemperatur ziehen sich die Flocken zusammen, mehr Albumin und Öl werden herausgedrückt, und ein well-done Filet kann Richtung 78–80 % fallen. Zuchtlachs, fetter als Wildlachs, hält tendenziell etwas mehr Gewicht als wilder Rotlachs.',
      'Da so wenig das Filet verlässt und das Fett darin bleibt, ergibt das Zurückrechnen deiner gegarten Portion auf das Rohgewicht eine genaue Makro-Anzeige – einschließlich des Omega-3-Fetts, das der Hauptgrund ist, warum man Lachs überhaupt trackt.',
    ],
    methodHeading: 'Ein durchgerechnetes Beispiel: gebackener, gegrillter oder pochierter Lachs',
    method: [
      'Die Seite nutzt eine einzige Ausbeute von 85 % für Lachs (USDA Agriculture Handbook No. 102). Pochieren hält ein bis zwei Punkte mehr; hartes Grillen oder well-done backen ein paar Punkte weniger.',
      'Ein rohes Filet von 170 g (6 oz), bei 190 °C gebacken, kommt auf etwa 170 × 0,85 ≈ 144 g. Sanft pochiert hält es vielleicht ~148 g; fest und flockig gegrillt ~138 g.',
      'Dieses rohe Filet von 170 g ist etwa 354 kcal, 34 g Eiweiß und 22,8 g Fett. Wenn du nur die gegarte Portion gewogen hast, ist ein Stück von 130 g 130 ÷ 0,85 ≈ 153 g roh. Filets mit Haut: Die Haut ist 5–8 % des Gewichts und schmilzt ihr Fett aus, bleibt aber auf der Waage – wiege also nach Möglichkeit ohne Haut, oder ziehe sie ab.',
    ],
    buyingHeading: 'Wie viel roher Lachs kaufen',
    buying: [
      'Für eine gegarte Portion von 150 g kaufe etwa 150 ÷ 0,85 ≈ 175 g roh pro Person. Standard-Filetportionen sind 140–200 g roh, eine pro Person deckt es also ab.',
      'Eine ganze Lachsseite wiegt 900 g–1,4 kg und ergibt etwa 85 % davon gegart – eine Seite von 1,2 kg ergibt rund 1 kg gegart, oder etwa sechs bis sieben Portionen à 150 g. Plane mehr ein, wenn die Seite mit Haut ist und du die Haut verwirfst.',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von Lachs',
    mistakes: [
      'Eine Fleisch-Ausbeute wie 72 % auf Lachs anwenden. Fisch hält weit mehr Gewicht – Lachs etwa 85 % –, eine Fleisch-Ausbeute bläht also dein zurückgerechnetes Rohgewicht auf und überschätzt Kalorien und Fett.',
      'Dosen- oder Räucherlachs als frisches rohes Filet erfassen. Dosenlachs ist gegart und abgepackt (oft mit zugesetztem Salz oder Öl); Räucherlachs ist gebeizt. Beide haben ihr eigenes Etikett.',
      'Ein Filet mit Haut wiegen und als ohne Haut erfassen. Die Haut fügt Gewicht hinzu, wird aber in einem Eintrag ohne Haut nicht gezählt.',
    ],
  },

  'shrimp': {
    introHeading: 'Warum Garnelen rund 25 % verlieren – und warum es nach mehr aussieht',
    intro: [
      'Garnele ist nahezu reines Magereiweiß: etwa 24 g pro 100 g roh mit nur 0,3 g Fett, und ein dichter, eng gepackter Muskel in einer kleinen Verpackung. Beim Garen ziehen sich die Muskelproteine schnell und hart zusammen – das ist das plötzliche Einrollen von der geraden rohen Garnele zum engen „C“ – und drücken Wasser heraus. Die USDA-Ausbeute ist 75 %, ein Verlust von 25 %, fast nur Oberflächen- und innere Feuchtigkeit.',
      'Das sichtbare Schrumpfen wirkt größer als der Gewichtsverlust, weil das Einrollen und Zusammenziehen dieselbe Masse in eine kleinere, dichtere Form konzentrieren. Eine Garnele verliert nicht wirklich ein Viertel ihres Volumens; sie krampft sich zusammen. Die Waage sagt hier die Wahrheit besser als deine Augen.',
      'Übergaren ist bei Garnelen brutal, weil es kein Fett gibt und die Stücke klein sind – ein paar Sekunden zu viel und sie gehen von „C“ zu engem „O“, gummiartig, während die Ausbeute weiter fällt, weil mehr Wasser herausgedrückt wird. Große und Jumbo-Garnelen halten proportional mehr Gewicht als kleine Salatgarnelen, die pro Gramm mehr Oberfläche haben.',
      'Ein Haken: Viele Garnelen werden mit Natriumtripolyphosphat oder einer Salzlake behandelt verkauft, um Wasser zu binden. Diese Garnele wiegt roh mehr als „trockene“ Garnele und kann beim Garen mehr als 25 % verlieren, weil sie zugesetztes Wasser zusätzlich zu ihrem eigenen abgibt.',
    ],
    methodHeading: 'Ein durchgerechnetes Beispiel: gekochte, sautierte oder gegrillte Garnelen',
    method: [
      'Die Seite nutzt eine einzige Ausbeute von 75 % für Garnelen (USDA Agriculture Handbook No. 102), die Kochen, Dämpfen, Sautieren und Grillen abdeckt, die für ein so schnell garendes Lebensmittel nah beieinanderliegen.',
      'Starte mit 200 g rohen, geschälten Garnelen. Gekocht oder sautiert kommen sie auf etwa 200 × 0,75 = 150 g gegart. Über starker Hitze gegrillt rechne mit ein bis zwei Gramm weniger, während die Oberfläche trocknet.',
      'Diese 200 g roh sind etwa 198 kcal und 48 g Eiweiß – Garnele ist das magerste proteinreiche Lebensmittel auf dieser Seite. Wenn du gegart gewogen hast, ist eine Portion von 120 g 120 ÷ 0,75 = 160 g roh. Garnelen mit Schale: Schale und Kopf sind 30–45 % des Gewichts, wiege also geschält, oder rechne nur das gegarte geschälte Gewicht um.',
    ],
    buyingHeading: 'Wie viel rohe Garnelen kaufen',
    buying: [
      'Garnelen werden nach Stückzahl pro Pfund verkauft (z. B. „16/20“ = 16–20 Garnelen pro Pfund, etwa 23–28 g pro Stück roh). Für eine gegarte Hauptportion von 120 g kaufe etwa 160 g roh geschält pro Person; für Garnele als Teil einer Pasta oder eines Pfannengerichts 100–120 g roh pro Person.',
      'Ein 454-g-Beutel (1 lb) roher geschälter Garnelen gart auf etwa 340 g – zwei bis drei Hauptportionen, oder vier bis fünf als Komponente. Ist der Beutel mit Schale, rechne mit nur 55–70 % des Beutelgewichts als essbar vor dem Garen.',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von Garnelen',
    mistakes: [
      'Garnelen mit Schale wiegen und als geschält erfassen. Schalen und Köpfe sind ein Drittel bis fast die Hälfte des Rohgewichts.',
      'Zugesetztes Phosphat-/Lakewasser ignorieren. Behandelte Garnele kann mehr als die üblichen 25 % verlieren, weil sie gebundenes Wasser abgibt – ihr Gargewicht fällt gegenüber einer „trockenen“ Packung niedrig aus.',
      'Vorgegarte Tiefkühlgarnelen gegen einen Roh-Eintrag erfassen. Vorgegarte Garnele hat ihr Wasser bereits verloren; erfasse sie über einen Eintrag für gegarte Garnele, etwa mit dem Gewicht im Beutel.',
    ],
  },

  // ── Getreide, Nudeln & Hülsenfrüchte ─────────────────────────────────────

  'white-rice': {
    introHeading: 'Warum trockener weißer Reis beim Garen etwa auf das Dreifache seines Gewichts kommt',
    intro: [
      'Trockener weißer Reis besteht zu etwa 80 % aus Stärke und nur zu 10–12 % aus Wasser – er wurde geschält und getrocknet, gerade um lagerfähig zu sein. Garen ist Rehydrieren: Die Stärkekörner in jedem Korn nehmen Wasser auf, quellen und verkleistern, und das Korn verdreifacht sein Gewicht ungefähr. Die USDA-Ausbeute für gekochten weißen Reis ist 308 %, aus 100 g trocken werden also etwa 308 g gegart.',
      'Nichts geht verloren – das ist das Gegenteil von Fleisch. Das trockene Korn gewinnt die gesamte Gewichtsdifferenz aus dem Kochwasser, das es aufsaugt. Das heißt, die Kalorien und Makros in deiner Schüssel gekochten Reis stammen alle aus dem Trockengewicht: etwa 365 kcal, 7,1 g Eiweiß und 80 g Kohlenhydrate pro 100 g trocken, jetzt über dreimal so viele Gramm verteilt.',
      'Wie viel Wasser er aufnimmt, hängt von Reis und Methode ab. Ein fester Pilaw mit getrennten Körnern liegt niedriger; Reis, der mit mehr Wasser weich gekocht oder gewaschen und in reichlich Wasser gekocht wird, liegt höher. Parboiled-Reis („converted“) und Instant-Reis nehmen sogar noch mehr auf – rund 350–358 % –, weil ihre Stärke vorverkleistert ist.',
      'Es ist das Lebensmittel, bei dem Menschen am häufigsten gegart wiegen und aus Versehen richtig erfassen, weil so viele Reis-Datenbankeinträge Gargewichte sind. Die Gefahr ist, sie zu verwechseln: 200 g gekochten Reis gegen einen Trocken-Eintrag „pro 100 g“ zu erfassen verdreifacht ungefähr deine Kalorienzahl.',
    ],
    methodHeading: 'Gekocht vs. parboiled vs. Instant',
    method: [
      'USDA-Werte für weißen Reis: gekocht 308 %, parboiled/converted 358 %, Instant oder vorgegart 350 %.',
      'Koche 75 g trockenen Reis – eine sehr gängige Einzelportion – nach der Quellmethode und du bekommst etwa 75 × 3,08 ≈ 231 g gegart. Dieselben 75 g parboiled Reis ergeben etwa 75 × 3,58 ≈ 269 g, und Instant-Reis etwa 263 g, weil ihre vorgegarte Stärke mehr Wasser hält.',
      'Jede dieser Schüsseln trägt die Makros von 75 g trocken: etwa 274 kcal, 5,3 g Eiweiß, 60 g Kohlenhydrate. Andersherum sind 250 g gekochter weißer Reis 250 ÷ 3,08 ≈ 81 g trocken. Nutze den Methodenschalter des Rechners, wenn du parboiled oder Instant-Reis kochst.',
    ],
    buyingHeading: 'Wie viel trockenen Reis kochen',
    buying: [
      'Eine gegarte Beilagenportion ist standardmäßig 150–200 g. Bei einer Ausbeute von 308 % sind das etwa 50–65 g trocken pro Person. Eine „Tasse“ trockener Reis (etwa 185 g) gart auf rund 570 g – drei bis vier Beilagenportionen.',
      'Fürs Meal Prep: Fünf Portionen à 180 g gegart brauchen etwa 900 g gegart, oder rund 290 g trocken. Reis hält gekocht und gekühlt 4–5 Tage, und das Aufwärmen aus dem Kühlschrank ändert das erfasste Gewicht nicht.',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von Reis',
    mistakes: [
      'Das Gewicht des gekochten Reises gegen einen Trocken-Eintrag „pro 100 g“ erfassen. 200 g gegart sind nur etwa 65 g trocken – der Trocken-Eintrag würde deine Kalorien verdreifachen.',
      'Die Ausbeute des normalen Kochens für parboiled oder Instant-Reis nutzen. Die nehmen mehr Wasser auf (350–358 %), dasselbe Trockengewicht ergibt also mehr Gramm gegart.',
      'Annehmen, dass brauner Reis sich identisch verhält. Brauner Reis ergibt etwa 335 % und hat eigene Makros – die Kleie ändert beides.',
    ],
  },

  'brown-rice': {
    introHeading: 'Warum brauner Reis noch stärker aufquillt als weißer',
    intro: [
      'Brauner Reis ist das volle Korn mit Kleie und Keim noch dran. Diese äußeren Schichten sind faserig und wasserabweisend, brauner Reis braucht also länger zum Garen und mehr Wasser – und nimmt am Ende mehr davon auf. Die USDA-Ausbeute ist 335 %, höher als die 308 % von weißem Reis: Aus 100 g trocken werden etwa 335 g gegart.',
      'Wie bei weißem Reis ist die Gewichtszunahme reines aufgenommenes Wasser und nichts geht verloren. Das trockene Korn trägt etwa 370 kcal, 7,9 g Eiweiß, 77 g Kohlenhydrate und 2,9 g Fett pro 100 g – der Keim fügt das Fett und einen Teil des Eiweißes hinzu – und all das landet in der gegarten Schüssel, nur über mehr Gramm verdünnt.',
      'Die Kleieschicht ist auch der Grund, warum brauner Reis bissfester bleibt und die Körner getrennter: Sie begrenzt physisch, wie stark die Stärke quellen und verkleistern kann, sodass man selten die klebrige, überabsorbierte Textur bekommt, die die Ausbeute von weißem Reis nach oben treibt. Der Kompromiss ist eine Garzeit von 40–50 Minuten statt 15.',
      'Fürs Tracking ist der Kernpunkt, dass brauner und weißer Reis keine austauschbaren Einträge sind – andere Ausbeute, andere Makros. Eine Schüssel braunen Reis als weißen zu erfassen unterschätzt Ballaststoffe und Fett und schätzt die Portion falsch ein.',
    ],
    methodHeading: 'Ein durchgerechnetes Beispiel: brauner Reis, von trocken zu gegart',
    method: [
      'Die Seite nutzt eine einzige Ausbeute von 335 % für braunen Reis (USDA Agriculture Handbook No. 102), fürs Kochen oder die Quellmethode.',
      'Koche 75 g trockenen braunen Reis und du bekommst etwa 75 × 3,35 ≈ 251 g gegart. Koche eine „Tasse“ (etwa 190 g trocken) und du bekommst rund 637 g gegart – etwa vier Portionen à 160 g.',
      'Diese 75 g trocken sind etwa 278 kcal, 5,9 g Eiweiß, 58 g Kohlenhydrate und 2,2 g Fett, und diese Zahlen ändern sich nicht, wenn daraus 251 g gegart werden. Rückwärts sind 250 g gekochter brauner Reis 250 ÷ 3,35 ≈ 75 g trocken.',
    ],
    buyingHeading: 'Wie viel trockenen braunen Reis kochen',
    buying: [
      'Eine gegarte Beilagenportion von 160–200 g entspricht etwa 48–60 g trocken pro Person bei einer Ausbeute von 335 % – etwas weniger trockener Reis als weißer für dieselbe gegarte Portion, weil brauner stärker aufquillt.',
      'Für fünf Meal-Prep-Portionen à 180 g gegart (900 g gesamt) koche etwa 270 g trocken. Brauner Reis lässt sich gut aufwärmen und einfrieren, und das erfasste Gargewicht bleibt bei der Lagerung erhalten.',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von braunem Reis',
    mistakes: [
      'Ihn als weißen Reis erfassen. Andere Ausbeute (335 % vs. 308 %) und andere Makros – du würdest das Fett verpassen und die Ballaststoffe unterschätzen.',
      'Das Gargewicht gegen einen Trocken-Eintrag erfassen. 200 g gekochter brauner Reis sind nur etwa 60 g trocken.',
      'Annehmen, dass „Wildreis“ oder „brauner Basmati“ exakt zu diesem Eintrag passen. Sie garen und absorbieren anders – nutze den nächstliegenden spezifischen Eintrag, den du finden kannst.',
    ],
  },

  'pasta': {
    introHeading: 'Warum trockene Nudeln beim Garen etwas mehr als das Doppelte werden',
    intro: [
      'Trockene Nudeln sind Hartweizengrieß und Wasser, extrudiert und hart getrocknet. Sie sind dichter und ärmer an Oberflächenstärke als Reis und werden in reichlich Wasser gekocht, statt eine abgemessene Menge aufzunehmen, sie nehmen also proportional weniger auf: Die Ausbeute hier ist 225 %, aus 100 g trocken werden also etwa 225 g gegart bei einem normalen Garpunkt, kurz über al dente.',
      'Die Gewichtszunahme ist aufgenommenes Kochwasser und – wie bei allen Getreidesorten – nichts geht verloren, die Makros bleiben also ans Trockengewicht gebunden: etwa 371 kcal, 13 g Eiweiß und 75 g Kohlenhydrate pro 100 g trocken, jetzt in 225 g gegarten Nudeln getragen. Gegarte Nudeln liegen daher bei etwa 160 kcal pro 100 g gegenüber 371 trocken.',
      'Der Garpunkt ist bei der Nudel-Ausbeute alles. Bei festem al dente abgegossen liegt die Nudel näher bei 200 %; weich gegart oder in Sauce gehalten und stehen gelassen nimmt sie weiter auf und steigt über 240 %. Frische Eiernudeln sind wieder anders – sie starten mit mehr Feuchtigkeit und gewinnen weniger.',
      'Auch die Form zählt. Lange dünne Nudeln und kleine Formen absorbieren schneller und gleichmäßiger; dicke Rigatoni oder große Muscheln liegen niedriger. Dieser Eintrag ist ein allgemeiner Trockennudel-Durchschnitt; lange Nudeln wie Spaghetti liegen höher.',
    ],
    methodHeading: 'Ein durchgerechnetes Beispiel: al dente vs. weich gegart',
    method: [
      'Die Seite nutzt eine einzige Ausbeute von 225 % für generische trockene Nudeln (USDA FoodData Central, roh vs. gegart). Behandle festes al dente als etwa 200 % und weiche oder in Sauce gehaltene Nudeln als 240 % oder mehr.',
      'Eine trockene Portion von 57 g (2 oz) – die Standardportion der Packung – gart auf etwa 57 × 2,25 ≈ 128 g. Eine trockene Portion von 85 g (ein realistischeres Hauptgericht) ergibt etwa 191 g gegart. Koche dieselben 85 g weich und sie können 205–215 g erreichen.',
      'Die Makros folgen unabhängig davon dem Trockengewicht: 85 g trocken sind etwa 315 kcal, 11 g Eiweiß, 64 g Kohlenhydrate. Rückwärts sind 250 g gegarte Nudeln 250 ÷ 2,25 ≈ 111 g trocken – prüfenswert, denn eine Restaurant-„Portion“ gegarter Nudeln sind oft 300–400 g, also 130–180 g trocken.',
    ],
    buyingHeading: 'Wie viel trockene Nudeln kochen',
    buying: [
      'Die Packung nennt 57 g (2 oz) trocken pro Person; das ist eine leichte Beilage. Ein sättigendes Hauptgericht sind 85–100 g trocken, die auf rund 190–225 g garen. Eine 500-g-Packung sättigt etwa fünf Personen als Hauptgericht oder acht als Beilage.',
      'Fürs Meal Prep koche die Nudeln eine Spur fester – sie nehmen im Kühlschrank weiter Sauce und Feuchtigkeit auf, und ein Start bei al dente hält die aufgewärmte Portion näher am erfassten Gewicht.',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von Nudeln',
    mistakes: [
      'Gegarte Nudeln gegen einen Trocken-Eintrag „pro 100 g“ erfassen. 250 g gegart sind nur etwa 110 g trocken – der Trocken-Eintrag würde deine Kalorien mehr als verdoppeln.',
      'Eine Ausbeute für jeden Garpunkt nutzen. Al dente (~200 %) und weich (~240 %) unterscheiden sich genug, um bei einer großen Portion ins Gewicht zu fallen.',
      'Nudeln wiegen, nachdem sie in Sauce gestanden haben. Sie haben Saucengewicht und mehr Wasser aufgenommen; wiege abgetropfte Nudeln und erfasse die Sauce separat.',
    ],
  },

  'quinoa': {
    introHeading: 'Warum Quinoa auf etwa das Dreifache seines Trockengewichts aufquillt',
    intro: [
      'Quinoa ist ein kleines Pseudogetreide-Samenkorn – botanisch kein Gras-Korn, obwohl es wie eines gart. Jeder Samen ist dicht an Stärke, trägt aber auch mehr Eiweiß (14,1 g pro 100 g trocken) und Fett (6,1 g) als Reis, dazu einen äußeren Keimring, der sich zu dem kleinen weißen „Schwänzchen“ abwickelt, das man in gegartem Quinoa sieht. Er nimmt Wasser bereitwillig auf und erreicht eine Ausbeute von 314 %: Aus 100 g trocken werden etwa 314 g gegart.',
      'Wie alle Getreidesorten und Hülsenfrüchte hier gewinnt Quinoa Gewicht, statt es zu verlieren, und der Gewinn ist vollständig aufgenommenes Kochwasser. Die Makros gehören zum trockenen Samen und werden nach dem Garen einfach dünner verteilt – gegartes Quinoa liegt bei etwa 117 kcal pro 100 g gegenüber 368 trocken.',
      'Quinoa wird meist per Quellmethode in einem festen Verhältnis gegart (etwa 1 Teil Samen zu 1,75–2 Teilen Wasser), seine Ausbeute ist also im Vergleich zu Getreide, das man kocht und abgießt, recht stabil. Den trockenen Samen zuerst rösten oder seine bittere Saponinschicht abspülen ändert eher den Geschmack als die Ausbeute.',
      'Für alle, die tracken, ist der Reiz von Quinoa das Profil aus Eiweiß plus Ballaststoffen, die Portion richtig zu treffen zählt also. Seine Trockenmakros sind bei den Kalorien nahe an Reis, aber bei Eiweiß und Fett ganz anders – tausche die Einträge nicht.',
    ],
    methodHeading: 'Ein durchgerechnetes Beispiel: Quinoa, von trocken zu gegart',
    method: [
      'Die Seite nutzt eine einzige Ausbeute von 314 % für Quinoa (USDA FoodData Central, berechnet aus den Nährstoffverhältnissen roh vs. gegart), für die Standard-Quellmethode.',
      'Koche 90 g trockenes Quinoa – eine großzügige Einzelportion – und du bekommst etwa 90 × 3,14 ≈ 283 g gegart. Eine „Tasse“ trockenes Quinoa (etwa 170 g) ergibt rund 534 g gegart, oder drei bis vier Portionen.',
      'Diese 90 g trocken sind etwa 331 kcal, 12,7 g Eiweiß, 58 g Kohlenhydrate und 5,5 g Fett, und nichts davon ändert sich, wenn daraus 283 g gegart werden. Rückwärts sind 250 g gegartes Quinoa 250 ÷ 3,14 ≈ 80 g trocken.',
    ],
    buyingHeading: 'Wie viel trockenes Quinoa kochen',
    buying: [
      'Eine gegarte Portion von 180–220 g entspricht etwa 57–70 g trocken pro Person. Für einen Salat, in dem Quinoa die Basis ist, tendiere zum oberen Ende; als Beilage neben einem Protein reichen 50–60 g trocken.',
      'Für fünf Meal-Prep-Bowls à 200 g gegart (1 kg gesamt) koche etwa 320 g trockenes Quinoa. Es hält seine Textur im Kühlschrank besser als Reis und muss für kalte Getreide-Bowls nicht aufgewärmt werden.',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von Quinoa',
    mistakes: [
      'Gegartes Quinoa gegen einen Trocken-Eintrag erfassen. 250 g gegart sind nur etwa 80 g trocken – ein Kalorienfehler von etwa dem Dreifachen.',
      'Quinoa- und Reis-Einträge tauschen, weil „beides Getreide ist“. Quinoa hat fast das doppelte Eiweiß und viel mehr Fett pro Gramm trocken.',
      'Quinoa in einem angemachten Salat wiegen und als pur erfassen. Das Dressing und jedes zugesetzte Öl gehören separat – wiege das pure gegarte Quinoa, bevor es hineinkommt.',
    ],
  },

  'lentils': {
    introHeading: 'Warum trockene Linsen beim Garen fast auf das Dreifache kommen',
    intro: [
      'Trockene Linsen bestehen zu etwa 11–12 % aus Wasser, 60 g Kohlenhydrate und bemerkenswerten 25,8 g Eiweiß pro 100 g – das proteinreichste Vollwertlebensmittel dieser Liste nach Soja. Sie garen, indem sie Wasser in ihre Stärke-Eiweiß-Matrix aufnehmen und quellen, ohne dass Einweichen zwingend nötig ist, weil sie klein und dünnhäutig sind. Die USDA-Ausbeute für vollständig weich gekochte oder gebackene Linsen ist 289 %: Aus 100 g trocken werden etwa 289 g gegart.',
      'Nichts geht verloren; die Gewichtsdifferenz ist vollständig aufgenommene Kochflüssigkeit. Das Eiweiß und die Kohlenhydrate in deiner Schüssel Dal oder Linsensuppe stammen also vollständig aus dem Trockengewicht – etwa 353 kcal, 25,8 g Eiweiß und 60 g Kohlenhydrate pro 100 g trocken, über fast dreimal so viele gegarte Gramm verdünnt.',
      'Linsensorte und Garpunkt lassen das Ergebnis schwanken. Rote und gelbe Schällinsen zerfallen zu Püree und absorbieren viel; feste grüne oder Puy-Linsen, kurz gegart, bleiben ganz und absorbieren weniger. Das USDA merkt an, dass nur 20 Minuten geköchelte Linsen bei 261 % landen, gegenüber 289 %, wenn sie vollständig weich gekocht oder gebacken werden – ein echter Unterschied, wenn du sie mit Biss magst.',
      'Dosenlinsen sind bereits gegart und nahe diesem voll hydratisierten Gewicht; abgetropft ergibt eine 400-g-Dose etwa 240 g, entsprechend rund 85 g trocken.',
    ],
    methodHeading: 'Vollständig gegart vs. 20 Minuten geköchelt',
    method: [
      'USDA-Werte für Linsen: vollständig weich gekocht oder gebacken 289 %, 20 Minuten geköchelt 261 %.',
      'Koche 100 g trockene Linsen vollständig weich für ein Dal und du bekommst etwa 289 g. Köchle dieselben 100 g nur 20 Minuten für eine feste Salatlinse und du bekommst etwa 261 g – 28 g weniger vom selben Ausgangspunkt, weil sie weniger hydratisiert sind.',
      'Beide tragen die Makros von 100 g trocken: etwa 353 kcal, 25,8 g Eiweiß, 60 g Kohlenhydrate. Rückwärts sind 200 g gekochte weiche Linsen 200 ÷ 2,89 ≈ 69 g trocken. Für eine abgetropfte Dose teile das Abtropfgewicht durch etwa 2,85.',
    ],
    buyingHeading: 'Wie viel trockene Linsen kochen',
    buying: [
      'Eine herzhafte gegarte Portion in einem Eintopf oder Dal ist 200–250 g, das sind etwa 70–85 g trocken pro Person. Als Beilage reichen 50 g trocken.',
      'Eine „Tasse“ trockener Linsen (etwa 190 g) gart auf rund 550 g – drei bis vier Portionen. Für fünf Meal-Prep-Portionen à 220 g gegart (1,1 kg) koche etwa 380 g trocken.',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von Linsen',
    mistakes: [
      'Gekochte oder Dosenlinsen gegen einen Trocken-Eintrag „pro 100 g“ erfassen. 200 g gegart sind nur etwa 70 g trocken.',
      'Die Ausbeute für vollständig weich (289 %) für feste, kurz geköchelte Linsen (261 %) nutzen oder umgekehrt. Passe an den Garpunkt an, den du tatsächlich gemacht hast.',
      'Eine abgetropfte Dose als ihr volles Etikettengewicht im Trocken-Äquivalent behandeln. Eine 400-g-Dose tropft auf ~240 g ab, etwa 85 g trocken.',
    ],
  },

  'black-beans': {
    introHeading: 'Warum trockene schwarze Bohnen beim Garen auf etwa das 2,5-Fache quellen',
    intro: [
      'Trockene schwarze Bohnen sind harte, feuchtigkeitsarme Samen – etwa 12 % Wasser, 62 g Kohlenhydrate und 21,6 g Eiweiß pro 100 g – mit einer dicken, wachsigen Samenschale, die Wasser fernhalten soll, bis die Bohne keimt. Sie zu garen ist ein zweistufiges Einweichen: Sie nehmen beim Einweichen Wasser auf, dann mehr und verkleistern ihre Stärke beim Kochen. Die aus dem USDA abgeleitete Ausbeute ist 250 %, aus 100 g trocken werden also etwa 250 g gegart – ein kleineres Vielfaches als bei Linsen, weil diese harte Schale das Quellen begrenzt.',
      'Die Gewichtszunahme ist vollständig aufgenommenes Wasser; nichts entweicht außer etwas Farbe und einem Teil der Oligosaccharide, die Blähungen verursachen. Die Makros bleiben beim Trockengewicht: etwa 341 kcal, 21,6 g Eiweiß und 62 g Kohlenhydrate pro 100 g trocken, jetzt über das 2,5-Fache der gegarten Gramm verteilt, gegarte schwarze Bohnen liegen also bei etwa 130–135 kcal pro 100 g.',
      'Einweichen, Bohnenalter und hartes Wasser verschieben die Zahl. Alte Bohnen und hartes, mineralreiches Wasser widerstehen der Hydratation und ergeben etwas weniger; langes Einweichen und eine Prise Natron treiben die Absorption höher. Nicht eingeweichte „Schnellkoch“-Bohnen liegen tendenziell niedriger und garen ungleichmäßig.',
      'Schwarze Bohnen aus der Dose sind vollständig gegart und nahe diesem hydratisierten Gewicht – eine 400-g-Dose tropft auf etwa 240–260 g ab, entsprechend rund 100 g trocken.',
    ],
    methodHeading: 'Ein durchgerechnetes Beispiel: trockene Bohnen und Dosenbohnen',
    method: [
      'Die Seite nutzt eine einzige Ausbeute von 250 % für schwarze Bohnen (USDA FoodData Central, berechnet aus den Nährstoffverhältnissen roh vs. gegart).',
      'Koche 100 g trockene schwarze Bohnen (eingeweicht, dann weich gekocht) und du bekommst etwa 250 g gegarte, abgetropfte Bohnen. Eine „Tasse“ trockener Bohnen (etwa 190 g) ergibt rund 475 g gegart – nahe 3 Tassen.',
      'Diese 100 g trocken sind etwa 341 kcal, 21,6 g Eiweiß, 62 g Kohlenhydrate. Rückwärts sind 250 g zu Hause gekochte Bohnen 250 ÷ 2,5 = 100 g trocken; eine auf 250 g abgetropfte 400-g-Dose sind ebenfalls etwa 100 g Trocken-Äquivalent. Gibt das Etikett deiner Dose Gargewichts-Makros an, ist das das Einfachste, direkt zu erfassen.',
    ],
    buyingHeading: 'Wie viel trockene schwarze Bohnen kochen',
    buying: [
      'Eine gegarte Portion als Beilage oder in einer Bowl ist 130–160 g, etwa 55–65 g trocken pro Person. Eine 400-g-Dose (≈240 g abgetropft) reicht für zwei bis drei Personen.',
      'Ein 454-g-Beutel (1 lb) trockener Bohnen gart auf rund 1,1 kg – etwa sieben bis acht Portionen, oder das Äquivalent von viereinhalb Dosen, zu einem Bruchteil der Kosten. Für fünf Meal-Prep-Portionen à 150 g gegart koche etwa 300 g trocken.',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von schwarzen Bohnen',
    mistakes: [
      'Gekochte oder Dosenbohnen gegen einen Trocken-Eintrag „pro 100 g“ erfassen. 250 g gegart sind 100 g trocken – der Trocken-Eintrag würde deine Kalorien etwa um das 2,5-Fache erhöhen.',
      'Dosenbohnen ohne Abtropfen erfassen. Die Aquafaba-Flüssigkeit fügt Gewicht und etwas Natrium hinzu; abtropfen und idealerweise abspülen, bevor du wiegst.',
      'Annehmen, dass alle Bohnen eine Ausbeute teilen. Schwarze Bohnen liegen bei etwa 250 %; Linsen bei 289 % und Kidneybohnen bei etwa 238 % – nah, aber nicht identisch.',
    ],
  },

  // ── Gemüse ───────────────────────────────────────────────────────────────

  'broccoli': {
    introHeading: 'Warum gekochter Brokkoli am Ende fast genau gleich viel wiegt',
    intro: [
      'Brokkoli besteht zu etwa 89 % aus Wasser, gehalten in ziemlich steifen Zellwänden mit viel Oberfläche – all diese Röschen und der Stiel. Beim Kochen passieren zwei gegensätzliche Dinge und heben sich in etwa auf: Etwas Zellwasser geht verloren, während die Wände weich werden und das Gewebe zusammenfällt, aber die Röschen fangen und absorbieren auch kochendes Wasser in ihren Spalten und Schnittflächen. Die Netto-USDA-Ausbeute für gekochten Brokkoli ist 100 % – keine messbare Gewichtsänderung.',
      'Das macht Brokkoli auf dieser Seite fast einzigartig: Roh- und Gargewicht sind fürs Tracking austauschbar, eine rohe Portion von 100 g bleibt also ~100 g gegart und trägt dieselben 34 kcal, 2,8 g Eiweiß und 6,6 g Kohlenhydrate. Die Nährstoffe, die sich ändern – etwa Vitamin C, das ins Kochwasser übergeht –, betreffen weder die Makros noch das Gewicht.',
      'Die Methode neigt die Waage leicht. Dämpfen, ohne Bad zum Absorbieren, kommt mit 95 % etwas darunter. Der Schnellkochtopf drückt Wasser ins Gewebe und geht mit 104 % leicht darüber. Rösten, was dieser Datensatz nicht bewertet, würde echtes Wasser austreiben und weit niedriger landen.',
      'Die praktische Erkenntnis: Wenn du deinen Brokkoli kochst oder dämpfst, kannst du ihn wiegen, wann es dir passt, und die Zahl hält.',
    ],
    methodHeading: 'Gekocht vs. gedämpft vs. Schnellkochtopf',
    method: [
      'USDA-Methodenwerte für Brokkoli: gekocht 100 %, gedämpft 95 %, Schnellkochtopf 104 %.',
      'Nimm 150 g rohe Brokkoli-Röschen. Gekocht kommen sie auf etwa 150 g gegart. Gedämpft eher 150 × 0,95 ≈ 143 g, weil es kein Badewasser zum Aufnehmen gibt. Im Schnellkochtopf etwa 150 × 1,04 = 156 g, während das Gewebe zwangsweise mit Wasser gefüllt wird.',
      'Alle drei tragen die Makros von 150 g roh: etwa 51 kcal, 4,2 g Eiweiß, 9,9 g Kohlenhydrate. Da die Spanne so klein ist, ist das Erfassen des rohen Brokkoli-Gewichts für eine gekochte oder gedämpfte Portion bis auf einen Rundungsfehler genau – der Rechner zählt hier vor allem für gerösteten Brokkoli, der nicht in diesem Datensatz ist und weit mehr verliert.',
    ],
    buyingHeading: 'Wie viel roher Brokkoli kaufen',
    buying: [
      'Eine gegarte Gemüseportion ist etwa 80–120 g. Da die Ausbeute ~100 % beträgt, ist das praktisch dasselbe Rohgewicht: Kaufe 100–120 g Röschen pro Person.',
      'Ein ganzer Brokkolikopf wiegt 300–500 g, davon ist die Krone etwa 60–70 % und der Stiel der Rest (essbar, wenn geschält). Ein großer Kopf reicht für drei bis vier Personen als Beilage. Tiefkühlbrokkoli ist vorblanchiert und verhält sich auf der Waage gleich.',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von Brokkoli',
    mistakes: [
      'Annehmen, dass gekochter Brokkoli wie anderes Blattgemüse schrumpft, und die Portion zu niedrig erfassen. Tut er nicht – die Ausbeute beträgt etwa 100 %.',
      'Die Ausbeute vom Kochen/Dämpfen auf gerösteten Brokkoli anwenden. Rösten treibt erhebliches Wasser aus; eine geröstete Portion kann 30–50 % weniger wiegen als roh, und dieser Datensatz deckt das nicht ab.',
      'Brokkoli mit zugesetzter Butter, Öl oder Käsesauce wiegen. Erfasse das pure gegarte Gemüse und das Fett separat.',
    ],
  },

  'spinach': {
    introHeading: 'Warum Spinat kaum Gewicht verliert, obwohl die Pfanne leer aussieht',
    intro: [
      'Spinat ist das am meisten falsch eingeschätzte Lebensmittel auf dieser Seite. Eine große Pfanne roher Blätter fällt auf ein paar Gabelvoll zusammen, es sieht also aus, als hätte er fast sein ganzes Gewicht verloren. Hat er nicht: Die USDA-Ausbeute für gekochten Spinat ist 77 %, ein Verlust von nur etwa 23 %. 100 g rohe Blätter sind immer noch etwa 77 g gegart.',
      'Der Grund ist, dass Volumen und Gewicht zwei verschiedene Dinge sind. Rohe Spinatblätter sind meist Luft und steife Struktur – dünne Gewebeblätter, die ihre Form halten, mit viel Raum dazwischen. Hitze zerstört diese Struktur fast augenblicklich: Die Zellwände werden schlaff, die Blätter fallen gegeneinander, und alle Luft wird herausgedrückt. Das Volumen bricht ein. Aber das Wasser in den Zellen ist noch größtenteils da, und Wasser ist das, was etwas wiegt.',
      'Die Blätter verlieren ihr Volumen also lange vor ihrer Masse. Etwas Zellwasser kocht durchaus heraus – das sind die 23 % – aber das dramatische Schrumpfen, das du siehst, ist Luft und Geometrie, nicht Gewicht.',
      'Die Methode zählt bei Spinat mehr als bei fast jedem anderen Gemüse. Dämpfen hält ihn bei 93 %; Kochen senkt ihn auf 77 %; der Schnellkochtopf drückt ihn auf 68 %, während die erzwungene Hitze mehr Zellwasser austreibt.',
    ],
    methodHeading: 'Gedämpft vs. gekocht vs. Schnellkochtopf',
    method: [
      'USDA-Methodenwerte für Spinat: gedämpft 93 %, gekocht 77 %, Schnellkochtopf 68 %.',
      'Starte mit 200 g rohem Spinat – eine große Tüte, vielleicht 4–5 Liter loser Blätter. Gedämpft kommt er auf etwa 200 × 0,93 = 186 g. Gekocht und ausgedrückt etwa 200 × 0,77 = 154 g. Im Schnellkochtopf etwa 200 × 0,68 = 136 g. Alles passt unabhängig von der Methode in eine kleine Schüssel.',
      'Jede Portion trägt die Makros von 200 g roh: etwa 46 kcal, 5,8 g Eiweiß, 7,2 g Kohlenhydrate. Rückwärts kamen 100 g gekochter Spinat aus 100 ÷ 0,77 ≈ 130 g roh – eine „kleine Handvoll“ gekochter Spinat kann also eine wirklich große Portion Blätter darstellen.',
    ],
    buyingHeading: 'Wie viel roher Spinat kaufen',
    buying: [
      'Roher Spinat zum Kochen fällt so stark zusammen, dass die Portionen winzig aussehen – rechne mit 150–200 g roh pro Person für eine gegarte Beilage, die nur etwa 115–155 g gegart ergibt, aber eine große Nährstoffportion darstellt.',
      'Eine 200-g-„Familientüte“ reicht großzügig für eine Person als gegarte Beilage oder bescheiden für zwei. Für ein spinatlastiges Gericht wie Saag oder eine Füllung kaufe 250–300 g roh pro Person. Tiefgekühlter gehackter Spinat ist bereits blanchiert und abgetropft – ein 250-g-Block entspricht etwa 700–800 g roher Blätter.',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von Spinat',
    mistakes: [
      'Einen Gewichtsverlust von ~70 % annehmen, weil die Pfanne leer aussieht. Der echte Verlust beträgt etwa 23 %; der Verschwindetrick ist Volumen, nicht Gewicht.',
      'Die Ausbeute vom Kochen (77 %) für gedämpften Spinat (93 %) nutzen – das ist ein Fehler von 16 Punkten, größer als bei den meisten Lebensmitteln.',
      'Ausgedrückten, abgetropften gekochten Spinat erfassen und dann das ausgepresste Wasser nicht berücksichtigen. Hast du ihn hart ausgedrückt, wiege, was übrig ist, und behandle es als niedrigeres Roh-Äquivalent.',
    ],
  },

  'potato': {
    introHeading: 'Warum eine gekochte Kartoffel kaum schrumpft, Pommes aber fast die Hälfte verlieren',
    intro: [
      'Eine rohe Kartoffel besteht zu etwa 79 % aus Wasser, eingeschlossen in einer dichten, gleichmäßigen Stärkestruktur mit einer dünnen Schale. Gekocht oder gedämpft hält diese Struktur das Wasser bemerkenswert gut – die Schale und die verkleisternde Stärke wirken beide als Barriere –, eine gekochte Kartoffel behält also etwa 94 % ihres Gewichts und eine gedämpfte etwa 99 %. Nur etwas Oberflächenwasser geht verloren.',
      'Die Makros sind bescheiden und kohlenhydratdominiert: etwa 77 kcal, 2 g Eiweiß und 17,5 g Kohlenhydrate pro 100 g roh. Da Kochen so wenig verliert, sind Roh- und Gargewicht nah genug beieinander, um eine gekochte Kartoffelportion ohne großen Fehler in beide Richtungen zu erfassen.',
      'Was alles ändert, ist trockene, fettige Hitze. Eine Kartoffel mit geölter Schale im Ofen zu backen drückt die Ausbeute auf 81 %; frittieren für Pommes bricht sie auf etwa 55 % zusammen, und Rösti auf etwa 60 %. Frittieren macht zwei Dinge auf einmal – es kocht einen großen Teil des Wassers weg und ersetzt einen Teil davon durch aufgesogenes Öl, eine Pomme ist also zugleich leichter als die rohe Kartoffel und weit kaloriendichter, ein doppelter Treffer, den die Rohkartoffel-Makros völlig verpassen.',
      'Die Garmethode ist bei der Kartoffel also kein Rundungsdetail; sie ist der Unterschied zwischen 94 % und 55 % Ausbeute, und zwischen „nur eine Kartoffel“ und „eine Kartoffel plus eine Menge Öl“.',
    ],
    methodHeading: 'Gekocht vs. gebacken vs. frittiert',
    method: [
      'USDA-Methodenwerte für Kartoffeln: gedämpft 99 %, in Folie gebacken 95 %, gekocht 94 %, mit geölter Schale gebacken 81 %, Rösti 60 %, frittiert 55 %.',
      'Nimm eine rohe Kartoffel von 200 g. Gekocht etwa 200 × 0,94 = 188 g. Mit geölter Schale gebacken etwa 200 × 0,81 = 162 g. Zu Pommes verarbeitet etwa 200 × 0,55 = 110 g – plus das aufgesogene Öl, das der Ausbeutewert nicht enthält.',
      'Die Rohmakros dieser 200-g-Kartoffel sind etwa 154 kcal, 4 g Eiweiß, 35 g Kohlenhydrate. Sie gelten für die gekochte und gebackene Version. Für Pommes ist der Kartoffelbeitrag richtig, aber du musst das Frittieröl separat addieren – typisch 5–10 g Fett pro 100 g fertige Pommes – sonst untertreibt das Log die Kalorien stark.',
    ],
    buyingHeading: 'Wie viel rohe Kartoffeln kaufen',
    buying: [
      'Eine Beilagenportion ist 150–250 g roh. Für Püree kaufe etwa 200–250 g roh pro Person (sie verliert beim Kochen etwas, dann fügst du Milch und Butter separat hinzu). Für eine Ofenkartoffel eine von 200–300 g pro Person.',
      'Ein 2-kg-Beutel Kartoffeln sind etwa acht bis zehn mittlere Kartoffeln – Abendessen-Beilagen für eine Familie über mehrere Abende. Für Pommes bedenke, dass du fast die Hälfte des Gewichts verlierst: 1 kg rohe Kartoffel ergibt nur etwa 550 g Pommes.',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von Kartoffeln',
    mistakes: [
      'Die Ausbeute vom Kochen (94 %) für Ofen- oder Bratkartoffeln oder Pommes nutzen. Ölgeröstete Kartoffel liegt bei etwa 81 % und Pommes bei etwa 55 % – und beide haben obendrauf zugesetztes Öl.',
      'Pommes als „Kartoffel“ ohne zugesetztes Fett erfassen. Das Öl ist oft ein Drittel oder mehr der Kalorien einer Portion Pommes.',
      'Püree wiegen und als pure Kartoffel erfassen. Püree enthält Milch, Butter oder Sahne – wiege die Kartoffel vor dem Stampfen, oder erfasse die Zutaten separat.',
    ],
  },

  'sweet-potato': {
    introHeading: 'Warum gebackene Süßkartoffel Gewicht verliert, gekochte Süßkartoffel aber Gewicht gewinnt',
    intro: [
      'Süßkartoffel ist feuchter und zuckerreicher als eine normale Kartoffel – etwa 77 % Wasser, 20 g Kohlenhydrate pro 100 g roh, ein guter Teil davon als Zucker, dazu mehr lösliche Ballaststoffe. Diese Zusammensetzung lässt sie sich unterschiedlich verhalten, je nachdem, ob Hitze sie austrocknet oder Wasser in sie einzieht.',
      'Gebacken verliert eine Süßkartoffel etwa 22 % ihres Gewichts – eine Ausbeute von 78 %. Die trockene Ofenhitze verdunstet Wasser an und nahe der Oberfläche, die Zucker konzentrieren sich und karamellisieren (dieses klebrige, süße Äußere), und das Fleisch wird dichter. Deshalb schmeckt eine gebackene Süßkartoffel so viel süßer als eine gekochte: gleicher Zucker, weniger Wasser.',
      'Gekocht geht es andersherum und sie gewinnt tatsächlich Gewicht – eine Ausbeute von 101 % – weil das Fleisch einen Teil des Kochwassers aufnimmt, etwas mehr, als es verliert. Gedämpft liegt sie knapp darunter bei 98 %. Dieselbe rohe Süßkartoffel kann also je nach Methode schwerer oder leichter herauskommen, als sie gestartet ist.',
      'Fürs Tracking heißt das: Die Methodenwahl kehrt das Vorzeichen der Korrektur um – backe und du erfasst weniger als das Rohgewicht, koche und du erfasst etwas mehr.',
    ],
    methodHeading: 'Gebacken vs. gekocht vs. gedämpft',
    method: [
      'USDA-Methodenwerte für Süßkartoffel: gekocht 101 %, gedämpft 98 %, gebacken 78 %.',
      'Nimm eine rohe Süßkartoffel von 150 g. Gebacken kommt sie auf etwa 150 × 0,78 ≈ 117 g – deutlich kleiner und dichter. Gekocht etwa 150 × 1,01 ≈ 152 g. Gedämpft etwa 150 × 0,98 = 147 g.',
      'Alle tragen die Makros von 150 g roh: etwa 129 kcal, 2,4 g Eiweiß und 30 g Kohlenhydrate. Eine gebackene Süßkartoffel von 117 g und eine gekochte von 152 g aus identischen rohen Kartoffeln haben also dieselben Kalorien – die gebackene fühlt sich nur konzentrierter an. Rückwärts: eine gebackene Portion von 120 g ist 120 ÷ 0,78 ≈ 154 g roh.',
    ],
    buyingHeading: 'Wie viel rohe Süßkartoffel kaufen',
    buying: [
      'Eine Beilagenportion ist 150–200 g roh. Für gebackene Süßkartoffel kaufe eine von 200–250 g pro Person, im Wissen, dass sie auf rund 155–195 g herunterbäckt. Für Püree oder gekochte Würfel reichen 150–200 g roh pro Stück, da das Gewicht kaum sinkt.',
      'Süßkartoffeln variieren enorm in der Größe – eine „mittlere“ reicht von 130 g bis 250 g – wiege also, statt zu zählen. Eine 1-kg-Charge gebacken ergibt etwa 780 g gegartes Fruchtfleisch (etwas weniger, sobald du die Schale verwirfst).',
    ],
    mistakesHeading: 'Häufige Fehler beim Erfassen von Süßkartoffel',
    mistakes: [
      'Annehmen, sie verhalte sich wie eine normale Kartoffel. Gebackene Süßkartoffel verliert etwa 22 % (Ausbeute 78 %); eine normale Kartoffel in Folie gebacken verliert nur etwa 5 %.',
      'Die Backausbeute für gekochte Süßkartoffel nutzen. Gekocht gewinnt sie etwas Gewicht (101 %), eine Umrechnung mit 78 % würde deine Portion also stark unterschätzen.',
      'Süßkartoffel-Pommes oder kandierte Süßkartoffel als pur erfassen. Pommes tragen aufgesogenes Öl; kandierte Versionen fügen Butter und Zucker hinzu – erfasse diese separat.',
    ],
  },
};
