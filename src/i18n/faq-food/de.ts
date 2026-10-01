/**
 * German per-food FAQ. Full translation of `FOOD_FAQ_EN_BY_ID`; every figure
 * is kept identical.
 */
import type { FaqItem } from '../faq';

export const FOOD_FAQ_DE_BY_ID: Record<string, FaqItem[]> = {
  'chicken-breast': [
    {
      q: 'Ändert Marinieren die Gar-Ausbeute des Hähnchens?',
      a: 'Eine Marinade aus Öl und Säure verschiebt sie kaum – ein bis zwei Punkte höchstens. Eine Salzlake oder eine kräftige Salz-Zucker-Marinade ist anders: Das Fleisch nimmt vorab Wasser auf, startet also schwerer und kann etwas mehr als die üblichen 28 % verlieren, während dieses zugesetzte Wasser verdunstet. Wiege die Brust, bevor sie in die Marinade kommt, für die sauberste Zahl.',
    },
    {
      q: 'Warum hat meine Hähnchenbrust mehr als 28 % verloren?',
      a: 'Meist Übergaren. Über 74 °C Kerntemperatur treibt jede zusätzliche Minute mehr Wasser aus und kann den Verlust auf 35 % oder mehr bringen. Dünne Schnitzel und kleine Filets verlieren zudem einen größeren Anteil als eine dicke ganze Brust, weil sie mehr Oberfläche haben. Grillen über direkter Flamme kostet gegenüber Backen ein paar Punkte.',
    },
    {
      q: 'Ist die Ausbeute für Hähnchen-Innenfilets oder gewürfelte Brust anders?',
      a: 'Etwas niedriger. Innenfilets und Würfel setzen pro Gramm mehr Oberfläche der Hitze aus, sie trocknen also etwas schneller als eine ganze Brust – rechne mit rund 68–70 % statt 72 % beim Braten in der Pfanne. Die Makros pro Gramm sind wie bei der Brust; nur der Wasserverlust unterscheidet sich.',
    },
    {
      q: 'Wie erfasse ich Hähnchenbrust, wenn ich eine große Charge gegart und später portioniert habe?',
      a: 'Wiege die ganze Charge roh und notiere es. Nach dem Garen wiege die ganze gegarte Charge, dann jede Portion. Das Roh-Äquivalent jeder Portion ist (Gargewicht der Portion ÷ Gesamt-Gargewicht) × Gesamt-Rohgewicht. Oder wiege eine Portion gegart und teile durch 0,72 für eine gebackene Charge.',
    },
    {
      q: 'Schließt die Ausbeute von 72 % den in der Pfanne verbliebenen Saft ein?',
      a: 'Nein. Die Ausbeute ist das Gewicht des abgetropften gegarten Fleisches als Anteil am Rohgewicht. Der Saft und das ausgeschmolzene Fett in der Pfanne sind Teil der ~28 %, die das Fleisch verlassen haben. Machst du aus dem Saft eine Sauce und isst sie, ist der Eiweißverlust vernachlässigbar, aber du fügst etwas Fett zurück.',
    },
  ],

  'chicken-thigh': [
    {
      q: 'Warum verliert Hähnchenschenkel mehr Gewicht als Hähnchenbrust?',
      a: 'Der Schenkel ist dunkles Fleisch mit mehr intramuskulärem Fett (etwa 4,6 g pro 100 g roh gegenüber 2,6 g bei der Brust) und mehr Bindegewebe. Beim Garen wird Wasser wie üblich herausgedrückt und das zusätzliche Fett schmilzt aus und tropft ab, der Gesamtverlust ist also höher – eine Backausbeute von 69 % gegenüber 72 % bei der Brust.',
    },
    {
      q: 'Ist die Ausbeute von Schenkel mit Knochen und Haut dieselbe wie ohne Knochen und Haut?',
      a: 'Nein. Der Wert von 69 % gilt nur für entbeintes, hautloses Fleisch. Ein Schenkel mit Knochen und Haut ist zu 25–35 % Knochen und Haut nach Gewicht, und die Haut ist fast reines Fett. Wiege das Fleisch, das du tatsächlich isst, nachdem du es vom Knochen gelöst hast, und rechne das um.',
    },
    {
      q: 'Warum ist die Ausbeute von paniert-frittiert (80 %) höher als gebacken?',
      a: 'Weil Panade und aufgesogenes Öl Gewicht hinzufügen, das nie Hähnchen war. Das magere Schenkelfleisch darin hat trotzdem Wasser verloren – die Zahl sieht nur wegen der Panade hoch aus. Nutze die 80 % nicht, um Makros von purem Hähnchen zurückzurechnen; diese Portion hat weit mehr Fett und Kohlenhydrate.',
    },
    {
      q: 'Welche Methoden-Ausbeute nutze ich für ein Schenkel-Curry oder einen Eintopf?',
      a: 'Den Wert fürs Schmoren, 73 %. In einer Sauce geköchelte Schenkel sind von Flüssigkeit umgeben, sie halten also mehr Gewicht als jede Trockenhitze-Methode. Ein roher Schenkel von 150 g kommt im Curry auf etwa 110 g.',
    },
    {
      q: 'Sind entbeinte Schenkel aus dem Laden von Fett befreit?',
      a: 'Teilweise. Die meisten entbeinten, hautlosen Schenkel aus dem Handel tragen noch sichtbare Fettpölsterchen, die viele vor oder nach dem Garen wegschneiden. Schneidest du erhebliches Fett weg, erfasse ein etwas niedrigeres Roh-Äquivalent als das volle Schenkelgewicht, da du nicht alles isst.',
    },
  ],

  'ground-beef-80-20': [
    {
      q: 'Soll ich Hackfleisch nach dem Rohgewicht oder dem abgetropften Gargewicht erfassen?',
      a: 'Das Rohgewicht ist die konstante Wahl und passt zum USDA-Etikett. Das abgetropfte Gargewicht ist unzuverlässig, weil es davon abhängt, wie viel Fett du abgegossen hast. Willst du gegart erfassen, nutze einen Datenbankeintrag für gegartes Hackfleisch, nicht einen für rohes – Krümelfleisch ist pro Gramm weit kaloriendichter.',
    },
    {
      q: 'Wenn ich das Fett abgieße, esse ich trotzdem alle Kalorien der Rohmakros?',
      a: 'Nein. Bei 80/20 schmilzt ein erheblicher Teil dieser 20 % Fett aus und wird abgegossen, deine tatsächliche Aufnahme liegt also etwas unter der Umrechnung aus dem Rohgewicht. Der Unterschied ist das Fett in der Pfanne. Magereres 93/7 verliert sehr wenig Fett, seine Roh-Umrechnung ist also nahe an der Genauigkeit.',
    },
    {
      q: 'Warum schrumpft 80/20 mehr als 93/7?',
      a: 'Das Fett. 80/20 hat 20 g Fett pro 100 g roh und viel davon schmilzt und tropft ab; 93/7 hat nur 7 g, es ist also weit weniger zu verlieren da. Deshalb ergibt 80/20 etwa 73 % in der Pfanne gebräunt und 93/7 hält etwa 77 %.',
    },
    {
      q: 'Wie viel gegartes Rind ergibt ein Pfund rohes Hackfleisch?',
      a: 'Etwa 331 g (11,7 oz) abgetropftes Krümelfleisch bei 80/20 in der Pfanne gebräunt, oder etwa 350 g bei 93/7. Unter dem Grill geht etwas mehr verloren. Das reicht, um vier Personen in Tacos oder einer Fleischsauce zu sättigen.',
    },
    {
      q: 'Ändert das Anbraten von Rind für eine Sauce (ohne Abgießen) die Art, wie ich es erfasse?',
      a: 'Wenn du alles Fett und den Saft in der Pfanne behältst und in der Sauce isst, dann sind die Rohmakros genau – nichts wurde weggeworfen. Das Abgießen ist es, was die Roh-Umrechnung dein Fett überschätzen lässt.',
    },
  ],

  'ground-beef-93-7': [
    {
      q: 'Ist die Makro-Umrechnung aus dem Rohgewicht bei 93/7 genau, oder tropft Fett ab wie bei 80/20?',
      a: 'Sie ist genau. 93/7 hat nur etwa 7 g Fett pro 100 g roh und sehr wenig davon schmilzt aus, das Krümelfleisch behält also fast alles. Das Zurückrechnen deiner gegarten Portion auf das Rohgewicht ergibt eine verlässliche Kalorien- und Fettanzeige – anders als bei 80/20, wo viel Fett in der Pfanne landet.',
    },
    {
      q: 'Warum kommt mageres Hackfleisch trocken heraus?',
      a: 'Es ist wenig Fett da, das die Krümel feucht hält, bei starker Hitze geht es also schnell von saftig zu kreidig, und die Ausbeute rutscht von 77 % Richtung untere 70er. Bräune es sanft und nimm es vom Herd, solange es noch etwas rosa ist, um nahe 77 % zu bleiben.',
    },
    {
      q: 'Kann ich 80/20-Makros für 93/7 nutzen, wenn meine App nur das hat?',
      a: 'Nein – der Unterschied ist groß. 80/20 sind 254 kcal und 20 g Fett pro 100 g roh; 93/7 sind 152 kcal und 7,2 g Fett. Den falschen Eintrag zu nutzen verfälscht deine Fettaufnahme um fast das Dreifache. Wähle den Eintrag, der zur Packung passt.',
    },
    {
      q: 'Wie viel gegartes Fleisch ergibt ein Pfund 93/7?',
      a: 'Etwa 350 g (12,3 oz) in der Pfanne gebräunt – deutlich mehr als die ~331 g, die du aus 80/20 bekommst, weil mageres Rind weniger Fett verliert. Das sind etwa vier großzügige Taco- oder Chili-Portionen.',
    },
  ],

  'ribeye-steak': [
    {
      q: 'Ändert der Garpunkt die Ribeye-Ausbeute?',
      a: 'Ja, mehr als bei den meisten Teilstücken. Rare hält ein paar Punkte über dem Durchschnitt von 84 %, weil es kaum Feuchtigkeit abgegeben hat; well-done fällt unter 80 %, während die verlängerte Hitze mehr Wasser austreibt und mehr Fett ausschmilzt. Der Wert von 84 % ist ein medium-Ergebnis.',
    },
    {
      q: 'Warum behält Ribeye mehr Gewicht als ein mageres Steak wie Roastbeef?',
      a: 'Die Marmorierung. Ribeye hat etwa 23 g Fett pro 100 g roh, durch den Muskel gezogen, und Fett verdrängt Wasser – es ist also weniger Wasser zu verlieren da. Das geschmolzene Fett begießt auch die Oberfläche und verlangsamt die Verdunstung. Ein mageres Stück hat mehr Wasser und weniger Selbstbegießen, es verliert also mehr.',
    },
    {
      q: 'Wenn ich den Fettdeckel nach dem Garen abschneide, wie erfasse ich es?',
      a: 'Erfasse ein kleineres Roh-Äquivalent als das ganze Steak. Am einfachsten: Wiege das abgeschnittene gegarte Fleisch, das du tatsächlich isst, teile durch etwa 0,84 und erfasse das. Du lässt Fett zurück, das die Makros des ganzen Steaks sonst zählen würden.',
    },
    {
      q: 'Ist die Ausbeute von Ribeye mit Knochen (Rib Steak / Tomahawk) dieselbe?',
      a: 'Das Fleisch verhält sich gleich, aber 10–20 % des Rohgewichts eines Steaks mit Knochen sind Knochen, den du nicht isst. Wiege das Fleisch nach dem Garen vom Knochen gelöst und rechne das um, oder ziehe die Knochenschätzung zuerst vom Rohgewicht ab.',
    },
  ],

  'pork-chop': [
    {
      q: 'Warum schrumpft Pulled Pork so viel mehr als ein Schweinekotelett?',
      a: 'Ein Kotelett gart in Minuten und verliert etwa 22 %. Schweineschulter wird stunden­lang gegart, was den Großteil ihres Fetts ausschmilzt und die ganze Zeit weiter Wasser verdunstet – sie verliert etwa 35 % (eine Ausbeute von 65 %). Nutze die Seite der Schweineschulter für Carnitas oder Pulled Pork.',
    },
    {
      q: 'Warum ergab das Grillen meines Koteletts eine höhere Ausbeute als das Braten in der Pfanne?',
      a: 'Harte direkte Hitze bratet die Oberfläche schnell an und bildet eine Kruste, die Feuchtigkeit einschließt, bevor das Innere übergart. Das USDA setzt das gegrillte Kotelett auf 83 % gegenüber 78 % in der Pfanne. Geschmort kommt es trotz der Flüssigkeit auf 76 %, weil die längere Garzeit dagegen arbeitet.',
    },
    {
      q: 'Soll ich Schweinekoteletts auf 63 °C oder 71 °C garen, und ist das fürs Tracking wichtig?',
      a: 'Moderne Empfehlung ist 63 °C (145 °F) plus 3 Minuten Ruhezeit, wo das Kotelett zart rosa und nahe der Ausbeute von 78 % ist. Es auf den alten Standard „kein Rosa“ von 71 °C (160 °F) zu bringen treibt mehr Wasser aus und kann die Ausbeute in die unteren 70er drücken – und trocknet das Kotelett aus.',
    },
    {
      q: 'Wie gehe ich mit einem Schweinekotelett mit Knochen um?',
      a: 'Der Knochen ist 15–25 % des Gewichts eines Koteletts mit Knochen und du isst ihn nicht. Wiege das Fleisch nach dem Garen vom Knochen gelöst und teile durch 0,78, oder schätze den Knochen und ziehe ihn vor dem Umrechnen vom Rohgewicht ab.',
    },
    {
      q: 'Gilt die Kotelett-Ausbeute auch für Schweinefilet?',
      a: 'Ungefähr. Das Filet ist ähnlich mager und schnell garend und landet beim Braten im selben Bereich der oberen 70er, auch wenn es bei Übergaren schnell trocken wird. Für ein grobes Log ist die 78 %-Zahl des Koteletts nah genug.',
    },
  ],

  'pork-shoulder': [
    {
      q: 'Wie viel Pulled Pork ergibt eine rohe Schulter von 2 kg?',
      a: 'Etwa 1,3 kg gegartes, zerzupftes Fleisch – eine Ausbeute von 65 %. Schulter mit Knochen verliert den Knochen obendrauf, rechne also mit weiteren 8–12 % weniger. Plane etwa 150 g gegartes Pulled Pork pro Sandwich.',
    },
    {
      q: 'Warum verliert Schweineschulter so viel mehr als andere Teilstücke?',
      a: 'Sie ist fett und voller Bindegewebe und wird stundenlang bei niedriger Temperatur gegart, gerade um dieses Kollagen zu schmelzen. Über diese lange Garzeit schmilzt fast alles Fett aus und Wasser verdunstet weiter – weit mehr, als ein schnell gegartes Kotelett je verliert.',
    },
    {
      q: 'Soll ich Pulled Pork vor oder nach dem Hinzufügen von BBQ-Sauce erfassen?',
      a: 'Davor. Wiege das pure zerzupfte Fleisch und rechne es auf das Rohgewicht um, dann erfasse die Sauce separat – BBQ-Sauce ist überwiegend Zucker und fügt echte Kalorien hinzu, die nicht im Schwein sind.',
    },
    {
      q: 'Ist meine Fettaufnahme wirklich so hoch, wie die Umrechnung aus dem Rohgewicht sagt?',
      a: 'Wahrscheinlich etwas niedriger. Über eine lange Garzeit schmilzt viel Fett in die Auffangschale aus. Wenn du den Bratensaft abschöpfst oder verwirfst, statt ihn zurückzumischen, senke die Fettzahl etwas – der Unterschied ist das Fett, das du abgegossen hast.',
    },
    {
      q: 'Deckt die Ausbeute von 65 % das Räuchern ebenso wie Ofen und Slow Cooker ab?',
      a: 'Ja. Geräucherte, im Ofen gebratene und im Slow Cooker gegarte Schulter landen alle nahe 65 %, weil der Endpunkt derselbe ist – man gart, bis es zerfällt, um die 90–96 °C Kerntemperatur, nicht auf eine feste Zeit.',
    },
  ],

  'turkey-breast': [
    {
      q: 'Warum ist die Ausbeute von Putenbrust (79 %) höher als die von Hähnchenbrust (72 %)?',
      a: 'Meist die Größe. Eine ganze Putenbrust ist ein viel größeres Fleischstück, proportional weniger davon ist also trocknender Hitze ausgesetzt und das Innere wird von der umgebenden Masse gepuffert. Schneide Putenbrust in dünne Schnitzel und die Ausbeute fällt Richtung Hähnchenbrust-Bereich.',
    },
    {
      q: 'Kann ich die Ausbeute der ganzen gebratenen Pute für eine reine Brust nutzen?',
      a: 'Nein. Werte für die ganze Pute und die gefüllte Pute (oft mit rund 70–74 % angegeben) mitteln dunkles Fleisch, Haut und Verluste aus der Bauchhöhle ein. Eine hautlose Brust für sich hält etwa 79 %.',
    },
    {
      q: 'Wie erfasse ich „selbstbegießende“ oder gepökelte Putenbrust aus dem Supermarkt?',
      a: 'Sie trägt eine injizierte Lösung, die 8–15 % des Gewichts ausmacht – Wasser, Salz und manchmal Fett. Sie verdunstet teilweise, die Ausbeute ist also unvorhersehbar. Hat die Packung ein Nährwertetikett, erfasse daraus; sonst wiege roh und rechne damit, etwas mehr als 21 % zu verlieren.',
    },
    {
      q: 'Ist Puten-Aufschnitt aus der Feinkosttheke dasselbe wie zu Hause gebratene Brust?',
      a: 'Nein. Puten-Aufschnitt ist gepökelt und oft mit zugesetztem Wasser und Stärke, mit eigenem Nährwertetikett für Gargewicht. Nutze dieses Etikett etwa mit dem Gewicht der Scheiben – rechne es nicht um, als wäre es rohe Brust.',
    },
  ],

  'salmon': [
    {
      q: 'Warum verliert Lachs nur etwa 15 %, wenn Hähnchen 28 % verliert?',
      a: 'Lachs ist ein fettreicher Fisch – etwa 13 g Fett pro 100 g roh – aus kurzen, zarten Muskelflocken mit fast keinem Bindegewebe aufgebaut. Er wird sanft fest, statt sich hart zusammenzuziehen, und das Fett hält ihn feucht, statt abzufließen. Der Großteil des Gewichts bleibt also im Filet: eine Ausbeute von 85 %.',
    },
    {
      q: 'Ist die Ausbeute von Zuchtlachs anders als von Wildlachs?',
      a: 'Leicht. Zuchtlachs ist fetter, er hält also etwas mehr Gewicht als magerer wilder Rotlachs oder Silberlachs, gleich gegart. Der Unterschied ist klein – ein paar Prozentpunkte – und der Wert von 85 % funktioniert für beide.',
    },
    {
      q: 'Wie erfasse ich ein Filet mit Haut?',
      a: 'Die Haut ist 5–8 % des Gewichts und bleibt auf der Waage, auch nachdem sie ihr Fett ausgeschmolzen hat. Wiege nach Möglichkeit ohne Haut. Garst du mit Haut und entfernst die Haut vor dem Essen, wiege das gegarte Fleisch allein und teile durch 0,85.',
    },
    {
      q: 'Gilt die Lachs-Ausbeute für Dosen- oder Räucherlachs?',
      a: 'Nein. Dosenlachs ist bereits gegart und abgepackt, manchmal mit zugesetztem Salz oder Öl; Räucherlachs ist gebeizt, nicht gegart. Beide haben ihr eigenes Etikett und sollten direkt aus dem gegessenen Gewicht erfasst werden.',
    },
    {
      q: 'Was ist mit dem weißen Zeug, das aus dem Lachs austritt?',
      a: 'Das ist Albumin, ein wasserlösliches Protein, das herausgedrückt wird, während das Fleisch gart. Die Menge ist winzig im Verhältnis zum Gesamteiweiß des Filets und ändert deine Makros nicht nennenswert – es sieht nur unappetitlich aus. Mehr davon erscheint, wenn der Fisch schnell gegart oder übergart wird.',
    },
  ],

  'shrimp': [
    {
      q: 'Warum sieht es so aus, als würden Garnelen mehr als 25 % schrumpfen?',
      a: 'Weil sie sich einrollen und zusammenkrampfen. Der Muskel zieht sich hart und schnell zusammen – das ist das Einrollen von gerade-roh zu engem „C“ – und konzentriert dieselbe Masse in eine kleinere, dichtere Form. Sie verliert nicht wirklich ein Viertel ihres Volumens; die Waage zeigt den echten Verlust von 25 %.',
    },
    {
      q: 'Wie berücksichtige ich Garnelen, die mit Natriumphosphat „behandelt“ verkauft werden?',
      a: 'Behandelte Garnele ist gepökelt, um Wasser zu binden, sie wiegt roh mehr und kann beim Garen mehr als 25 % verlieren, weil sie dieses zugesetzte Wasser abgibt. Nennt die Zutatenliste Salz oder Natriumtripolyphosphat, rechne mit einem niedrigeren Gargewicht als bei einer „trockenen“ Packung derselben Größe.',
    },
    {
      q: 'Ist das Gewicht von Garnelen mit Schale dasselbe wie geschält?',
      a: 'Nein. Schale, Schwanz und Kopf sind 30–45 % des Gewichts einer Garnele mit Schale. Wiege geschälte Garnele, oder wenn du mit Schale garst, schäle nach dem Garen und rechne nur das gegarte geschälte Gewicht um.',
    },
    {
      q: 'Wie soll ich vorgegarte Tiefkühlgarnelen erfassen?',
      a: 'Sie haben ihr Kochwasser bereits verloren, rechne sie also nicht als roh um. Erfasse sie über einen Eintrag für gegarte Garnele, etwa mit dem Gewicht im Beutel (von Glasur oder Eis abgetropft).',
    },
    {
      q: 'Was bedeutet „16/20“ oder „31/40“ auf einem Garnelenbeutel?',
      a: 'Das ist die Stückzahl pro Pfund – „16/20“ heißt 16 bis 20 Garnelen pro 454 g, jede rohe Garnele ist also etwa 23–28 g. Niedrigere Zahlen sind größere Garnelen. Es hilft, Portionen zu schätzen, ohne jedes Stück zu wiegen.',
    },
  ],

  'white-rice': [
    {
      q: 'Warum ist mein Reis schwerer oder klebriger als das Dreifache des Trockengewichts?',
      a: 'Du hast mehr Wasser hinzugefügt, länger gekocht oder eine klebrigere Sorte verwendet. Weich gekochter Reis, oder Rund- und Sushi-Reis, absorbieren mehr und können über 320–330 % steigen. Ein fester Pilaw mit getrennten Körnern liegt niedriger, näher bei 260–280 %. Der Wert von 308 % ist ein mittleres gekochtes Ergebnis.',
    },
    {
      q: 'Ändert die Reissorte die Ausbeute?',
      a: 'Ja. Normal gekochter weißer Reis liegt bei etwa 308 %. Parboiled-Reis („converted“) erreicht etwa 358 % und Instant-Reis etwa 350 %, weil ihre Stärke vorverkleistert ist und mehr Wasser hält. Brauner Reis liegt bei etwa 335 % und hat seine eigene Seite. Basmati und Jasmin liegen nahe am normalen weißen.',
    },
    {
      q: 'Wenn ich Reis vor dem Kochen wasche, beeinflusst das das Tracking?',
      a: 'Waschen entfernt Oberflächenstärke und eine sehr kleine Menge des Korns, was das endgültige Gargewicht leicht senkt und die Körner weniger klebrig macht. Der Effekt auf die Makros ist vernachlässigbar – erfasse weiterhin aus dem Trockengewicht, das du vor dem Waschen abgemessen hast.',
    },
    {
      q: 'Wie viel trockener Reis ist eine Tasse gekochter Reis?',
      a: 'Etwa 50–55 g trockener weißer Reis ergeben rund 160–170 g (eine Tasse) gegart. Eine Tasse trockener Reis, etwa 185 g, ergibt nahe 570 g gegart – drei bis vier Beilagenportionen.',
    },
    {
      q: 'Kann ich Reis gegart statt trocken wiegen?',
      a: 'Ja, solange dein Datenbankeintrag für gegarten Reis ist. Die Gefahr ist, ein Gargewicht gegen einen Trocken-Eintrag „pro 100 g“ zu erfassen, was deine Kalorien etwa verdreifacht. Dieser Rechner rechnet in beide Richtungen, du kannst also wiegen, wann es dir passt.',
    },
  ],

  'brown-rice': [
    {
      q: 'Warum quillt brauner Reis stärker auf als weißer Reis?',
      a: 'Die Kleie- und Keimschichten sind faserig und wasserabweisend, brauner Reis braucht also mehr Wasser und eine längere Garzeit – und nimmt am Ende mehr davon auf. Seine Ausbeute liegt bei etwa 335 % gegenüber 308 % bei weißem.',
    },
    {
      q: 'Kann ich braunen Reis als weißen Reis erfassen, um Zeit zu sparen?',
      a: 'Nicht genau. Brauner Reis hat eine andere Ausbeute (335 % vs. 308 %) und andere Makros – mehr Fett und Ballaststoffe aus Keim und Kleie. Ihn als weißen zu erfassen unterschätzt Fett und Ballaststoffe und schätzt die Portion falsch ein.',
    },
    {
      q: 'Passen brauner Basmati oder brauner Rundkornreis zu diesem Wert?',
      a: 'Nah genug fürs Tracking. Alle Vollkorn-Braunreissorten landen im Bereich 320–345 %. Nutze den Wert von 335 %, sofern deine Packung keine spezifischen Gargewichtsdaten angibt.',
    },
    {
      q: 'Wie viel trockener brauner Reis pro Person?',
      a: 'Etwa 48–60 g trocken für eine gegarte Beilagenportion von 160–200 g. Das ist etwas weniger trockener Reis als weißer für dieselbe gegarte Portion, weil brauner stärker aufquillt.',
    },
  ],

  'pasta': [
    {
      q: 'Warum sind meine gekochten Nudeln nicht genau das 2,25-Fache des Trockengewichts?',
      a: 'Der Garpunkt. Bei festem al dente abgegossen liegen trockene Nudeln näher bei 200 %. Weich gekocht oder in Sauce stehen gelassen nehmen sie weiter auf und steigen über 240 %. Der Wert von 225 % ist ein normales Ergebnis, kurz über al dente.',
    },
    {
      q: 'Ändert die Nudelform die Ausbeute?',
      a: 'Etwas. Dünne und kleine Formen absorbieren schneller und gleichmäßiger; dicke Rigatoni und große Muscheln liegen etwas niedriger. Lange Nudeln wie Spaghetti liegen höher – näher bei 290 % – und haben einen eigenen Eintrag. Diese Seite ist ein allgemeiner Trockennudel-Durchschnitt.',
    },
    {
      q: 'Sind frische Nudeln dasselbe wie trockene?',
      a: 'Nein. Frische Eiernudeln enthalten bereits viel Feuchtigkeit, sie gewinnen beim Garen also weit weniger – etwa 140–170 % – und haben andere Makros. Nutze die Trockennudel-Ausbeute nicht für frische.',
    },
    {
      q: 'Ein Nudelgericht im Restaurant ist riesig – wie viel trocken ist das?',
      a: 'Ein Teller mit 300–400 g gekochten Nudeln sind etwa 130–180 g trocken, zwei- bis dreimal die 57-g-„Portion“ der Packung. Gut zu wissen, wenn du ein Essen auswärts erfasst.',
    },
    {
      q: 'Soll ich Nudeln vor oder nach dem Hinzufügen der Sauce wiegen?',
      a: 'Wiege sie abgetropft, vor der Sauce. Sobald sie in Sauce stehen, absorbieren sie sowohl Sauce als auch mehr Wasser, und du kannst das Nudelgewicht nicht mehr vom Saucengewicht trennen. Erfasse die Sauce als eigenen Posten.',
    },
  ],

  'quinoa': [
    {
      q: 'Ist die Ausbeute von Quinoa dieselbe wie die von Reis?',
      a: 'Nah nach Gewicht – Quinoa liegt bei etwa 314 % und weißer Reis bei etwa 308 % – aber die Makros sind sehr verschieden. Quinoa hat fast das doppelte Eiweiß und viel mehr Fett pro Gramm trocken, die Einträge sind also nicht austauschbar.',
    },
    {
      q: 'Ändert das Abspülen von Quinoa das Gargewicht?',
      a: 'Kaum. Abspülen entfernt die bittere Saponinschicht und eine Spur des Samens. Es beeinflusst den Geschmack, nicht die Ausbeute oder die Makros in einer Weise, die es zu tracken lohnt – erfasse weiterhin aus dem Trockengewicht.',
    },
    {
      q: 'Warum ist mein Quinoa lockerer und leichter als erwartet?',
      a: 'Mit weniger Wasser gekocht, oder abgegossen und trocken gedämpft, liegt Quinoa am unteren Ende seines Bereichs. Mit mehr Wasser sehr weich gekocht hält es mehr. Der Wert von 314 % geht von der Standard-Quellmethode 1 zu 1,75 aus.',
    },
    {
      q: 'Wie viel trockenes Quinoa für eine Getreide-Bowl?',
      a: 'Etwa 60–70 g trocken pro Person, wenn Quinoa die Basis der Bowl ist, was auf rund 190–220 g gart. Als Beilage neben einem Protein reichen 50 g trocken.',
    },
  ],

  'lentils': [
    {
      q: 'Warum sind meine Linsen fester und leichter, als der Rechner sagt?',
      a: 'Du hast sie kurz gekocht. Das USDA setzt ein 20-Minuten-Köcheln auf 261 % gegenüber 289 % für vollständig weich gekochte oder gebackene Linsen – ein echter Unterschied von 28 g pro 100 g trocken. Nutze den niedrigeren Wert, wenn du deine Linsen mit Biss magst.',
    },
    {
      q: 'Haben rote, grüne und Puy-Linsen dieselbe Ausbeute?',
      a: 'Grob, mit einer Spanne. Rote und gelbe Schällinsen zerfallen und absorbieren viel, sie landen am oberen Ende. Feste grüne und Puy-Linsen, gerade weich gekocht, bleiben ganz und absorbieren weniger. Der Wert von 289 % ist ein Durchschnitt für vollständig gegarte.',
    },
    {
      q: 'Wie erfasse ich Dosenlinsen?',
      a: 'Eine 400-g-Dose tropft auf etwa 240 g ab, entsprechend rund 85 g trocken. Teile das Abtropfgewicht durch etwa 2,85 für das Trocken-Äquivalent, oder erfasse direkt aus dem Gargewichts-Etikett der Dose, falls vorhanden.',
    },
    {
      q: 'Müssen Linsen eingeweicht werden, und ändert Einweichen die Ausbeute?',
      a: 'Sie müssen nicht eingeweicht werden – sie sind klein und dünnhäutig. Einweichen verkürzt die Garzeit etwas und kann das endgültige hydratisierte Gewicht leicht erhöhen, aber der Effekt auf die Makros ist vernachlässigbar. Erfasse in beiden Fällen aus dem Trockengewicht.',
    },
  ],

  'black-beans': [
    {
      q: 'Warum ergeben meine zu Hause gekochten Bohnen weniger als das 2,5-Fache?',
      a: 'Alte Bohnen und hartes, mineralreiches Wasser widerstehen beide der Hydratation. Bohnen, die älter als ein Jahr sind, oder ohne Einweichen gekocht, quellen weniger und können näher bei 220–235 % landen. Langes Einweichen, frische Bohnen und weiches Wasser treiben Richtung 250 % oder darüber.',
    },
    {
      q: 'Wie viel trockene schwarze Bohnen entsprechen einer Dose?',
      a: 'Eine 400-g-Dose tropft auf etwa 240–260 g Bohnen ab, das sind rund 100 g trocken. Ein 454-g-Beutel (1 lb) trockener Bohnen entspricht also etwa viereinhalb Dosen Bohnen nach dem Garen, weit günstiger.',
    },
    {
      q: 'Soll ich Dosenbohnen mit oder ohne Flüssigkeit erfassen?',
      a: 'Zuerst abtropfen und abspülen, dann wiegen. Die Dosenflüssigkeit (Aquafaba) fügt Gewicht und Natrium hinzu und wird meist verworfen. Nutzt ein Rezept die Flüssigkeit, berücksichtige sie separat.',
    },
    {
      q: 'Teilen schwarze Bohnen, Pinto- und Kidneybohnen eine Ausbeute?',
      a: 'Sie sind nah, aber nicht identisch. Schwarze Bohnen liegen bei etwa 250 %, Kidneybohnen bei etwa 238 %, Pintobohnen ähnlich wie schwarze. Linsen liegen höher bei 289 %. Nutze den spezifischen Eintrag, wo du kannst.',
    },
  ],

  'broccoli': [
    {
      q: 'Verliert gekochter Brokkoli wirklich kein Gewicht?',
      a: 'Im Wesentlichen keines. Das Wasser, das verloren geht, während das Gewebe weich wird, wird durch kochendes Wasser ausgeglichen, das die Röschen absorbieren, für eine Netto-Ausbeute von 100 %. Roher und gekochter Brokkoli wiegen gleich, du kannst also beides erfassen.',
    },
    {
      q: 'Was ist mit geröstetem Brokkoli?',
      a: 'Rösten ist eine andere Geschichte – die trockene Ofenhitze treibt echtes Wasser aus und eine geröstete Portion kann 30–50 % weniger wiegen als roh. Dieser Datensatz bewertet gerösteten Brokkoli nicht, wiege ihn also nach dem Rösten und erfasse gegen einen Rösten-Eintrag, plus jedes Öl.',
    },
    {
      q: 'Ist Tiefkühlbrokkoli anders als frischer?',
      a: 'Nein. Tiefkühlbrokkoli wird vor dem Einfrieren blanchiert, verhält sich aber beim Garen auf der Waage gleich – die Koch-Ausbeute bleibt bei etwa 100 %.',
    },
    {
      q: 'Zählt der Stiel gleich wie die Röschen?',
      a: 'Ernährungsphysiologisch ist der Stiel geschält den Röschen ähnlich, und er gart mit derselben Ausbeute nahe 100 %. Er ist nur dichter, braucht also ein bis zwei Minuten länger, um weich zu werden.',
    },
  ],

  'spinach': [
    {
      q: 'Warum sieht mein Spinat aus, als hätte er 80 % verloren, wenn die Ausbeute 77 % beträgt?',
      a: 'Du siehst Volumen, nicht Gewicht. Rohe Spinatblätter sind meist Luft und steife Struktur. Hitze lässt diese Struktur augenblicklich zusammenfallen, der Haufen schrumpft also dramatisch – aber das Wasser in den Zellen, das ist, was etwas wiegt, bleibt größtenteils. Der Gewichtsverlust beträgt nur etwa 23 %.',
    },
    {
      q: 'Hält Dämpfen wirklich so viel mehr als Kochen?',
      a: 'Ja. Gedämpfter Spinat liegt bei etwa 93 % gegenüber 77 % gekocht – ein Unterschied von 16 Punkten, größer als bei fast jedem anderen Gemüse. Der Schnellkochtopf geht andersherum, auf etwa 68 %. Wie du Spinat garst, ändert die Zahl mehr als bei den meisten Lebensmitteln.',
    },
    {
      q: 'Wie erfasse ich Spinat, nachdem ich das Wasser ausgedrückt habe?',
      a: 'Ausdrücken entfernt Wasser, das der Ausbeutewert noch als vorhanden annimmt. Wiege, was nach dem Ausdrücken übrig ist, und behandle es als niedrigeres Roh-Äquivalent – hart ausgedrückter gekochter Spinat kann näher bei 50–60 % des Rohgewichts liegen.',
    },
    {
      q: 'Entspricht Tiefkühlspinat einer bestimmten Menge frischem?',
      a: 'Grob. Ein 250-g-Block tiefgekühlter gehackter Spinat ist bereits blanchiert und abgetropft und entspricht etwa 700–800 g roher Blätter. Erfasse ihn über einen Eintrag für gekochten Spinat.',
    },
    {
      q: 'Ein Rezept sagt „10 Tassen roher Spinat“ – wie viel ist das gegart?',
      a: 'Etwa 280–300 g rohe Blätter, die auf rund 215–230 g gekocht heruntergaren – etwas mehr als eine Tasse. Die Tassenzahl klingt riesig, weil roher Spinat fast nur Luft ist.',
    },
  ],

  'potato': [
    {
      q: 'Warum verlieren Pommes so viel mehr Gewicht als eine gekochte Kartoffel?',
      a: 'Frittieren kocht bei hoher Hitze einen großen Teil des Wassers der Kartoffel weg und ersetzt nur einen Teil davon durch Öl. Eine gekochte Kartoffel behält etwa 94 % ihres Gewichts; Pommes fallen auf etwa 55 % – und tragen dann aufgesogenes Öl, das die Rohkartoffel-Makros nicht enthalten.',
    },
    {
      q: 'Wie soll ich Bratkartoffeln erfassen?',
      a: 'Nutze die Backausbeute mit geölter Schale, etwa 81 %, für die Kartoffel selbst, dann addiere das Bratöl separat – meist 5–10 g Fett pro Portion. Bratkartoffeln als pure gekochte Kartoffel zu erfassen verpasst sowohl den Wasserverlust als auch das Öl.',
    },
    {
      q: 'Nutzt Kartoffelpüree dieselbe Ausbeute?',
      a: 'Der Kartoffelanteil verliert beim Kochen nur wenig (etwa 94 %), aber Püree enthält auch Milch, Butter oder Sahne. Wiege die Kartoffel vor dem Stampfen und erfasse die Milchprodukte und das Fett separat, sonst untertreibst du die Kalorien.',
    },
    {
      q: 'Ist eine in Folie gebackene Kartoffel anders als eine direkt auf dem Rost gebackene?',
      a: 'Ja. Folie schließt Dampf ein, eine in Folie gebackene Kartoffel behält also etwa 95 % ihres Gewichts. Direkt mit geölter Schale gebacken entweicht mehr Wasser und sie fällt auf etwa 81 %.',
    },
    {
      q: 'Wie viel rohe Kartoffel brauche ich für Kartoffelpüree für vier?',
      a: 'Etwa 800 g–1 kg rohe Kartoffel – 200–250 g pro Person – vor dem Hinzufügen von Milch und Butter. Sie verliert beim Kochen nur wenig Gewicht, das Rohgewicht ist also nahe am Gewicht der gekochten Kartoffel, mit dem du zu stampfen beginnst.',
    },
  ],

  'sweet-potato': [
    {
      q: 'Warum verliert gebackene Süßkartoffel Gewicht, gekochte Süßkartoffel aber gewinnt es?',
      a: 'Die trockene Ofenhitze verdunstet Wasser und konzentriert das Fleisch – eine Backausbeute von 78 %. Kochen macht das Gegenteil: Das Fleisch nimmt etwas Kochwasser auf und endet leicht schwerer als beim Start, eine Ausbeute von 101 %. Dieselbe Kartoffel, entgegengesetzte Richtung, je nach Methode.',
    },
    {
      q: 'Kann ich die Ausbeuten der normalen Kartoffel für Süßkartoffel nutzen?',
      a: 'Nein. Gebackene Süßkartoffel verliert etwa 22 %, während eine normale Kartoffel in Folie gebacken nur etwa 5 % verliert. Süßkartoffel ist feuchter und zuckerreicher und verhält sich unter Hitze anders.',
    },
    {
      q: 'Warum schmeckt gebackene Süßkartoffel so viel süßer als gekochte?',
      a: 'Backen entfernt Wasser und konzentriert die Zucker, und die trockene Hitze lässt sie karamellisieren. Der Gesamtzucker ist derselbe wie bei der rohen Kartoffel – er steckt nur in weniger Gramm, was auch der Grund ist, warum die Backausbeute nur 78 % beträgt.',
    },
    {
      q: 'Wie erfasse ich Süßkartoffel-Pommes?',
      a: 'Wiege sie gegart und erfasse gegen einen Eintrag für Süßkartoffel-Pommes, oder schätze die rohe Kartoffel und addiere das Frittieröl separat. Wie normale Pommes verlieren sie viel Wasser und nehmen Öl auf, das die Makros der puren Kartoffel verpassen.',
    },
  ],
};
