/**
 * Italian per-food FAQ. Full translation of `FOOD_FAQ_EN_BY_ID`; every figure
 * is kept identical.
 */
import type { FaqItem } from '../faq';

export const FOOD_FAQ_IT_BY_ID: Record<string, FaqItem[]> = {
  'chicken-breast': [
    {
      q: 'Marinare il pollo cambia la resa in cottura?',
      a: 'Una marinata a base di olio e acido non la sposta quasi — un punto o due al massimo. Una salamoia o una marinata pesante di sale e zucchero è diversa: la carne assorbe acqua prima, quindi parte più pesante e può perdere un po’ più del solito 28% mentre quell’acqua aggiunta evapora. Pesa il petto prima che vada nella marinata per il numero più pulito.',
    },
    {
      q: 'Perché il mio petto di pollo ha perso più del 28%?',
      a: 'Di solito cottura eccessiva. Oltre i 74 °C al cuore ogni minuto in più espelle più acqua e può portare la perdita al 35% o più. Anche le fettine sottili e gli straccetti piccoli perdono una quota maggiore di un petto intero e spesso perché hanno più superficie. Grigliare su fiamma diretta costa qualche punto rispetto al forno.',
    },
    {
      q: 'La resa è diversa per gli straccetti di pollo o il petto a cubetti?',
      a: 'Leggermente più bassa. Straccetti e cubetti espongono più superficie al calore per grammo, quindi asciugano un po’ più in fretta di un petto intero — aspettati circa il 68–70% invece del 72% in padella. I macro per grammo sono uguali a quelli del petto; cambia solo la perdita d’acqua.',
    },
    {
      q: 'Come registro il petto di pollo se ho cotto un grande lotto e porzionato dopo?',
      a: 'Pesa l’intero lotto crudo e annotalo. Dopo la cottura, pesa l’intero lotto cotto, poi ogni porzione. L’equivalente in crudo di ogni porzione è (peso cotto della porzione ÷ peso cotto totale) × peso crudo totale. Oppure pesa una porzione cotta e dividi per 0,72 per un lotto al forno.',
    },
    {
      q: 'La resa del 72% include i succhi rimasti in padella?',
      a: 'No. La resa è il peso della carne cotta e scolata come quota del peso crudo. I succhi e il grasso sciolto rimasti in padella fanno parte del ~28% che ha lasciato la carne. Se fai una salsa con quei succhi e la mangi, la perdita di proteine è trascurabile ma recuperi un po’ di grasso.',
    },
  ],

  'chicken-thigh': [
    {
      q: 'Perché la coscia di pollo perde più peso del petto?',
      a: 'La coscia è carne scura con più grasso intramuscolare (circa 4,6 g per 100 g crudo contro 2,6 g del petto) e più tessuto connettivo. In cottura l’acqua viene espulsa come al solito e anche il grasso extra si scioglie e cola via, quindi la perdita totale è più alta — una resa al forno del 69% contro il 72% del petto.',
    },
    {
      q: 'La resa della coscia con osso e pelle è uguale a quella disossata e senza pelle?',
      a: 'No. Il valore del 69% vale solo per la carne disossata e senza pelle. Una coscia con osso e pelle è per il 25–35% osso e pelle in peso, e la pelle è quasi solo grasso. Pesa la carne che mangi davvero dopo averla staccata dall’osso, poi converti quello.',
    },
    {
      q: 'Perché la resa dell’impanata fritta (80%) è più alta di quella al forno?',
      a: 'Perché la panatura e l’olio assorbito aggiungono peso che non è mai stato pollo. La carne magra della coscia all’interno ha comunque perso acqua — il numero sembra alto solo per il rivestimento. Non usare l’80% per ricalcolare i macro del pollo semplice; quella porzione ha molti più grassi e carboidrati.',
    },
    {
      q: 'Quale resa per metodo devo usare per un curry o uno stufato di coscia?',
      a: 'Il valore della brasata, 73%. Le cosce cotte in un sugo sono circondate di liquido, quindi trattengono più peso di qualsiasi metodo a calore secco. Una coscia da 150 g cruda esce a circa 110 g nel curry.',
    },
    {
      q: 'Le cosce disossate del supermercato sono già private del grasso?',
      a: 'In parte. La maggior parte delle cosce disossate e senza pelle del commercio porta ancora sacche di grasso visibili che molti rifilano prima o dopo la cottura. Se rifili grasso significativo, registra un equivalente in crudo un po’ più basso dell’intero peso della coscia, dato che non mangi tutto.',
    },
  ],

  'ground-beef-80-20': [
    {
      q: 'Devo registrare il macinato di manzo in base al peso crudo o al peso cotto scolato?',
      a: 'Il peso crudo è la scelta costante e corrisponde all’etichetta USDA. Il peso cotto scolato è inaffidabile perché dipende da quanto grasso hai scolato. Se vuoi registrare cotto, usa una voce di database di macinato cotto, non una in crudo — il macinato è molto più denso di calorie per grammo.',
    },
    {
      q: 'Se scolo il grasso, sto comunque mangiando tutte le calorie dei macro crudi?',
      a: 'No. Con l’80/20, una quota significativa di quel 20% di grasso si scioglie e viene scolata, quindi la tua assunzione reale è un po’ sotto la conversione dal peso crudo. La differenza è il grasso in padella. Il 93/7 più magro perde pochissimo grasso, quindi la sua conversione dal crudo è quasi esatta.',
    },
    {
      q: 'Perché l’80/20 si restringe più del 93/7?',
      a: 'Il grasso. L’80/20 ha 20 g di grasso per 100 g crudo e gran parte si scioglie e cola via; il 93/7 ne ha solo 7, quindi c’è molto meno da perdere. Ecco perché l’80/20 rende circa il 73% rosolato in padella e il 93/7 trattiene circa il 77%.',
    },
    {
      q: 'Quanta carne cotta fa una libbra di macinato di manzo crudo?',
      a: 'Circa 331 g (11,7 oz) di macinato scolato per l’80/20 rosolato in padella, o circa 350 g per il 93/7. Sotto il grill si perde un po’ di più. È abbastanza per sfamare quattro persone in taco o in un sugo di carne.',
    },
    {
      q: 'Rosolare il manzo per un sugo (senza scolare) cambia come lo registro?',
      a: 'Se tieni tutto il grasso e i succhi in padella e li mangi nel sugo, allora i macro crudi sono esatti — nulla è stato buttato. È lo scolo che fa sì che la conversione dal crudo sovrastimi il tuo grasso.',
    },
  ],

  'ground-beef-93-7': [
    {
      q: 'La conversione dei macro dal peso crudo è esatta per il 93/7, o il grasso cola via come con l’80/20?',
      a: 'È esatta. Il 93/7 ha solo circa 7 g di grasso per 100 g crudo e pochissimo si scioglie, quindi il macinato ne mantiene quasi tutto. Convertire la tua porzione cotta di nuovo in peso crudo dà una lettura affidabile di calorie e grassi — a differenza dell’80/20, dove molto grasso finisce in padella.',
    },
    {
      q: 'Perché il macinato di manzo magro viene asciutto?',
      a: 'C’è poco grasso a tenere umido il macinato, quindi a fuoco vivo passa da succoso a asciutto in fretta, e la resa scivola dal 77% verso i 70 bassi. Rosolalo con delicatezza e toglilo dal fuoco quando resta un po’ di rosa per restare vicino al 77%.',
    },
    {
      q: 'Posso usare i macro dell’80/20 per il 93/7 se è tutto ciò che ha la mia app?',
      a: 'No — la differenza è grande. L’80/20 è 254 kcal e 20 g di grasso per 100 g crudo; il 93/7 è 152 kcal e 7,2 g di grasso. Usare la voce sbagliata falsa la tua assunzione di grassi di quasi il triplo. Scegli la voce che corrisponde alla confezione.',
    },
    {
      q: 'Quanta carne cotta fa una libbra di 93/7?',
      a: 'Circa 350 g (12,3 oz) rosolata in padella — nettamente più dei ~331 g che ottieni dall’80/20, perché il manzo magro perde meno grasso. Sono circa quattro porzioni generose di taco o chili.',
    },
  ],

  'ribeye-steak': [
    {
      q: 'Il grado di cottura cambia la resa della costata?',
      a: 'Sì, più che per la maggior parte dei tagli. Al sangue trattiene qualche punto sopra la media dell’84% perché ha ceduto pochissima umidità; ben cotta scende sotto l’80% mentre il calore prolungato espelle più acqua e scioglie più grasso. Il valore dell’84% è un risultato a media cottura.',
    },
    {
      q: 'Perché la costata mantiene più peso di una bistecca magra come il controfiletto?',
      a: 'La marezzatura. La costata ha circa 23 g di grasso per 100 g crudo, distribuito nel muscolo, e il grasso spiazza l’acqua — quindi c’è meno acqua da perdere. Il grasso sciolto unge anche la superficie e rallenta l’evaporazione. Un taglio magro ha più acqua e meno auto-ungitura, quindi perde di più.',
    },
    {
      q: 'Se rifilo lo strato di grasso dopo la cottura, come devo registrarla?',
      a: 'Registra un equivalente in crudo più basso dell’intera bistecca. Il modo più semplice: pesa la carne cotta rifilata che mangi davvero, dividi per circa 0,84 e registra quello. Stai lasciando grasso che i macro dell’intera bistecca conterebbero.',
    },
    {
      q: 'La resa della costata con osso (rib steak / tomahawk) è la stessa?',
      a: 'La carne si comporta uguale, ma il 10–20% del peso crudo di una bistecca con osso è osso che non mangi. Pesa la carne staccata dall’osso dopo la cottura e converti quello, o sottrai prima la stima dell’osso dal peso crudo.',
    },
  ],

  'pork-chop': [
    {
      q: 'Perché il pulled pork si restringe molto più di una braciola di maiale?',
      a: 'Una braciola cuoce in minuti e perde circa il 22%. La spalla di maiale è cotta per ore, il che scioglie gran parte del suo grasso e continua a evaporare acqua per tutto il tempo — perde circa il 35% (una resa del 65%). Usa la pagina della spalla di maiale per carnitas o pulled pork.',
    },
    {
      q: 'Perché grigliare la mia braciola ha dato una resa più alta della padella?',
      a: 'Il calore diretto e forte scotta la superficie in fretta, formando una crosta che intrappola l’umidità prima che l’interno cuocia troppo. L’USDA colloca la braciola alla griglia all’83% contro il 78% in padella. Brasata, nonostante il liquido, si ferma al 76% perché il tempo di cottura più lungo gioca contro.',
    },
    {
      q: 'Devo cuocere le braciole di maiale a 63 °C o 71 °C, e conta per il conteggio?',
      a: 'L’indicazione moderna è 63 °C (145 °F) più un riposo di 3 minuti, quando la braciola è appena rosata e vicina alla resa del 78%. Portarla al vecchio standard di 71 °C (160 °F) «senza rosa» espelle più acqua e può far scendere la resa nei 70 bassi — e asciuga la braciola.',
    },
    {
      q: 'Come gestisco una braciola di maiale con osso?',
      a: 'L’osso è il 15–25% del peso di una braciola con osso e non lo mangi. Pesa la carne staccata dall’osso dopo la cottura e dividi per 0,78, oppure stima l’osso e sottrailo dal peso crudo prima di convertire.',
    },
    {
      q: 'La resa della braciola di maiale si applica al filetto di maiale?',
      a: 'Grosso modo. Il filetto è altrettanto magro e a cottura rapida e si assesta nello stesso intervallo dei 70 alti arrostito, anche se si asciuga in fretta se cotto troppo. Per un log approssimativo, usare il valore del 78% della braciola è abbastanza vicino.',
    },
  ],

  'pork-shoulder': [
    {
      q: 'Quanto pulled pork farà una spalla da 2 kg cruda?',
      a: 'Circa 1,3 kg di carne cotta e sfilacciata — una resa del 65%. La spalla con osso perde l’osso in più, quindi conta un altro 8–12% in meno. Prevedi circa 150 g di pulled pork cotto per panino.',
    },
    {
      q: 'Perché la spalla di maiale perde molto più di altri tagli?',
      a: 'È grassa e piena di tessuto connettivo, ed è cotta a bassa temperatura per ore proprio per sciogliere quel collagene. Durante quella lunga cottura quasi tutto il grasso si scioglie e l’acqua continua a evaporare — molto più di quanto perda mai una braciola a cottura rapida.',
    },
    {
      q: 'Devo registrare il pulled pork prima o dopo aver aggiunto la salsa barbecue?',
      a: 'Prima. Pesa la carne sfilacciata semplice e convertila in peso crudo, poi registra la salsa a parte — la salsa barbecue è soprattutto zucchero e aggiunge calorie reali che non sono nel maiale.',
    },
    {
      q: 'La mia assunzione di grassi è davvero alta come dice la conversione dal peso crudo?',
      a: 'Probabilmente un po’ più bassa. Molto grasso cola nella vaschetta di raccolta durante una lunga cottura. Se sgrassi o scarti i sughi invece di rimescolarli, abbassa un po’ il valore del grasso — la differenza è il grasso che hai scolato.',
    },
    {
      q: 'La resa del 65% copre l’affumicatura oltre al forno e alla slow cooker?',
      a: 'Sì. La spalla affumicata, arrostita in forno e cotta nella slow cooker si assestano tutte vicino al 65% perché il punto finale è lo stesso — si cuoce finché si sfilaccia, intorno ai 90–96 °C al cuore, non fino a un tempo fisso.',
    },
  ],

  'turkey-breast': [
    {
      q: 'Perché la resa del petto di tacchino (79%) è più alta di quella del petto di pollo (72%)?',
      a: 'Soprattutto la dimensione. Un petto di tacchino intero è un pezzo di carne molto più grande, quindi proporzionalmente meno è esposto al calore che asciuga e l’interno è protetto dalla massa circostante. Taglia il petto di tacchino in fettine sottili e la resa scende verso il territorio del petto di pollo.',
    },
    {
      q: 'Posso usare la resa del tacchino intero arrosto per un petto semplice?',
      a: 'No. I valori del tacchino intero e del tacchino ripieno (spesso citati intorno al 70–74%) mediano carne scura, pelle e perdite della cavità. Un petto senza pelle da solo trattiene circa il 79%.',
    },
    {
      q: 'Come registro il petto di tacchino da supermercato «auto-irrorante» o in salamoia?',
      a: 'Portano una soluzione iniettata che è l’8–15% del peso — acqua, sale e a volte grasso. Evapora in parte, quindi la resa è imprevedibile. Se la confezione ha un’etichetta nutrizionale, registra da quella; altrimenti pesa crudo e aspettati di perdere un po’ più del 21%.',
    },
    {
      q: 'Il tacchino arrosto da salumeria è la stessa cosa del petto arrostito in casa?',
      a: 'No. Il tacchino da salumeria è in salamoia e spesso con acqua e amido aggiunti, con la sua etichetta nutrizionale in peso cotto. Usa quell’etichetta all’incirca al peso delle fette — non convertirlo come se fosse petto crudo.',
    },
  ],

  'salmon': [
    {
      q: 'Perché il salmone perde solo circa il 15% quando il pollo perde il 28%?',
      a: 'Il salmone è un pesce grasso — circa 13 g di grasso per 100 g crudo — costruito in scaglie di muscolo corte e delicate con quasi nessun tessuto connettivo. Si rassoda con delicatezza invece di contrarsi con forza, e il grasso lo mantiene umido invece di colare via. Quindi gran parte del peso resta nel filetto: una resa dell’85%.',
    },
    {
      q: 'La resa del salmone d’allevamento è diversa da quella del selvatico?',
      a: 'Leggermente. Il salmone d’allevamento è più grasso, quindi trattiene un po’ più di peso del magro sockeye o coho selvatico cotto allo stesso modo. La differenza è piccola — un paio di punti percentuali — e il valore dell’85% funziona per entrambi.',
    },
    {
      q: 'Come registro un filetto con pelle?',
      a: 'La pelle è il 5–8% del peso e resta sulla bilancia anche dopo aver sciolto il suo grasso. Pesa senza pelle se puoi. Se cuoci con pelle e la rimuovi prima di mangiare, pesa la carne cotta da sola e dividi per 0,85.',
    },
    {
      q: 'La resa del salmone si applica al salmone in scatola o affumicato?',
      a: 'No. Il salmone in scatola è già cotto e confezionato, a volte con sale o olio aggiunti; quello affumicato è curato, non cotto. Entrambi hanno la loro etichetta e vanno registrati direttamente dal peso che mangi.',
    },
    {
      q: 'E quella sostanza bianca che esce dal salmone?',
      a: 'È albumina, una proteina idrosolubile espulsa mentre la carne cuoce. La quantità è minuscola rispetto alla proteina totale del filetto e non cambia i tuoi macro in modo rilevante — ha solo un aspetto poco invitante. Ne compare di più quando il pesce è cotto in fretta o troppo.',
    },
  ],

  'shrimp': [
    {
      q: 'Perché sembra che i gamberi si restringano più del 25%?',
      a: 'Perché si arricciano e si contraggono. Il muscolo si contrae con forza e in fretta — è l’arricciamento da dritto-crudo a «C» stretta — concentrando la stessa massa in una forma più piccola e densa. Non perde davvero un quarto del volume; la bilancia mostra la perdita reale del 25%.',
    },
    {
      q: 'Come considero i gamberi venduti «trattati» con fosfato di sodio?',
      a: 'Il gambero trattato è in salamoia per trattenere acqua, quindi pesa di più da crudo e può perdere più del 25% in cottura perché rilascia quell’acqua aggiunta. Se la lista ingredienti menziona sale o tripolifosfato di sodio, aspettati un peso cotto più basso di una confezione «asciutta» della stessa dimensione.',
    },
    {
      q: 'Il peso dei gamberi con guscio è uguale a quello sgusciati?',
      a: 'No. Guscio, coda e testa sono il 30–45% del peso di un gambero con guscio. Pesa i gamberi sgusciati, o se cuoci con guscio, sguscia dopo la cottura e converti solo il peso cotto sgusciato.',
    },
    {
      q: 'Come devo registrare i gamberi surgelati precotti?',
      a: 'Hanno già perso la loro acqua di cottura, quindi non convertirli come crudi. Registrali da una voce di gambero cotto, all’incirca al peso del sacchetto (scolato da eventuale glassatura o ghiaccio).',
    },
    {
      q: 'Cosa significa «16/20» o «31/40» su un sacchetto di gamberi?',
      a: 'È il numero di gamberi per libbra — «16/20» significa da 16 a 20 gamberi per 454 g, quindi ogni gambero crudo è circa 23–28 g. Numeri più bassi sono gamberi più grandi. Aiuta a stimare le porzioni senza pesare ogni pezzo.',
    },
  ],

  'white-rice': [
    {
      q: 'Perché il mio riso è più pesante o più colloso di 3× il peso secco?',
      a: 'Hai aggiunto più acqua, cotto più a lungo, o usato una varietà più collosa. Il riso cotto morbido, o quello a chicco corto e da sushi, assorbono di più e possono superare il 320–330%. Un pilaf sodo a chicchi separati sta più in basso, vicino al 260–280%. Il valore del 308% è un risultato bollito di via di mezzo.',
    },
    {
      q: 'Il tipo di riso cambia la resa?',
      a: 'Sì. Il riso bianco bollito normale è circa il 308%. Il riso parboiled («converted») arriva a circa il 358% e quello istantaneo a circa il 350%, perché il loro amido è pregelatinizzato e trattiene più acqua. Il riso integrale è circa il 335% e ha la sua pagina. Basmati e jasmine stanno vicini al bianco normale.',
    },
    {
      q: 'Se sciacquo il riso prima di cuocerlo, questo influisce sul conteggio?',
      a: 'Sciacquare rimuove l’amido superficiale e una quantità molto piccola del chicco, il che abbassa leggermente il peso cotto finale e rende i chicchi meno collosi. L’effetto sui macro è trascurabile — continua a registrare dal peso secco misurato prima di sciacquare.',
    },
    {
      q: 'Quanto riso secco è una tazza di riso cotto?',
      a: 'Circa 50–55 g di riso bianco secco fanno più o meno 160–170 g (una tazza) cotti. Una tazza di riso secco, circa 185 g, fa quasi 570 g cotti — tre-quattro porzioni di contorno.',
    },
    {
      q: 'Posso pesare il riso cotto invece che secco?',
      a: 'Sì, purché la tua voce di database sia per riso cotto. Il pericolo è registrare un peso cotto su una voce in secco «per 100 g», che quasi triplica le tue calorie. Questo calcolatore converte in entrambi i versi, così puoi pesare quando ti è comodo.',
    },
  ],

  'brown-rice': [
    {
      q: 'Perché il riso integrale si espande più del riso bianco?',
      a: 'Gli strati di crusca e germe sono fibrosi e resistenti all’acqua, quindi il riso integrale richiede più acqua e una cottura più lunga — e finisce per assorbirne di più. La sua resa è circa il 335% contro il 308% del bianco.',
    },
    {
      q: 'Posso registrare il riso integrale come riso bianco per risparmiare tempo?',
      a: 'Non con precisione. Il riso integrale ha una resa diversa (335% vs. 308%) e macro diversi — più grassi e fibra da germe e crusca. Registrarlo come bianco sottostima grassi e fibra e sbaglia la porzione.',
    },
    {
      q: 'Il basmati integrale o il riso integrale a chicco corto corrispondono a questo valore?',
      a: 'Abbastanza per il conteggio. Tutti i risi integrali a chicco intero si assestano nell’intervallo 320–345%. Usa il valore del 335% a meno che la tua confezione non dia dati specifici in peso cotto.',
    },
    {
      q: 'Quanto riso integrale secco a persona?',
      a: 'Circa 48–60 g secco per una porzione di contorno cotta da 160–200 g. È un po’ meno riso secco del bianco per la stessa porzione cotta, perché l’integrale si espande di più.',
    },
  ],

  'pasta': [
    {
      q: 'Perché la mia pasta cotta non è esattamente 2,25× il peso secco?',
      a: 'Il grado di cottura. Scolata al dente sodo, la pasta secca sta più vicina al 200%. Cotta morbida, o lasciata nel sugo, continua ad assorbire e supera il 240%. Il valore del 225% è un risultato normale, appena oltre l’al dente.',
    },
    {
      q: 'Il formato della pasta cambia la resa?',
      a: 'Un po’. I formati sottili e piccoli assorbono più in fretta e in modo più uniforme; i rigatoni spessi e le conchiglie grandi stanno un po’ più in basso. La pasta lunga come gli spaghetti è più alta — vicina al 290% — e ha la sua voce. Questa pagina è una media generica di pasta secca.',
    },
    {
      q: 'La pasta fresca è uguale a quella secca?',
      a: 'No. La pasta fresca all’uovo contiene già molta umidità, quindi in cottura ne guadagna molta meno — circa il 140–170% — e ha macro diversi. Non usare la resa della pasta secca per quella fresca.',
    },
    {
      q: 'Un piatto di pasta al ristorante è enorme — quanto è di secca?',
      a: 'Un piatto da 300–400 g di pasta cotta è circa 130–180 g secca, due-tre volte la «porzione» da 57 g della scatola. Utile sapere quando registri un pasto fuori.',
    },
    {
      q: 'Devo pesare la pasta prima o dopo aver aggiunto il sugo?',
      a: 'Pesala scolata, prima del sugo. Una volta che resta nel sugo assorbe sia sugo sia più acqua, e non puoi più separare il peso della pasta da quello del sugo. Registra il sugo come voce a sé.',
    },
  ],

  'quinoa': [
    {
      q: 'La resa della quinoa è uguale a quella del riso?',
      a: 'Vicina per peso — la quinoa è circa il 314% e il riso bianco circa il 308% — ma i macro sono molto diversi. La quinoa ha quasi il doppio delle proteine e molto più grasso per grammo secco, quindi le voci non sono intercambiabili.',
    },
    {
      q: 'Sciacquare la quinoa cambia il peso cotto?',
      a: 'Quasi nulla. Sciacquare rimuove il rivestimento amaro di saponina e una traccia del seme. Influisce sul sapore, non sulla resa né sui macro in alcun modo che valga la pena tracciare — continua a registrare dal peso secco.',
    },
    {
      q: 'Perché la mia quinoa è più sgranata e leggera del previsto?',
      a: 'Cotta con meno acqua, o scolata e asciugata al vapore, la quinoa sta verso il basso del suo intervallo. Cotta con più acqua fino a molto morbida, trattiene di più. Il valore del 314% assume il metodo dell’assorbimento standard 1 a 1,75.',
    },
    {
      q: 'Quanta quinoa secca per una ciotola di cereali?',
      a: 'Circa 60–70 g secca a persona quando la quinoa è la base della ciotola, cuocendo fino a circa 190–220 g. Come contorno accanto a una proteina, 50 g secca bastano.',
    },
  ],

  'lentils': [
    {
      q: 'Perché le mie lenticchie sono più sode e leggere di quanto dice il calcolatore?',
      a: 'Le hai cotte brevemente. L’USDA colloca una sobbollitura di 20 minuti al 261% contro il 289% per lenticchie bollite o cotte al forno fino a ben morbide — una differenza reale di 28 g per 100 g secco. Usa il valore più basso se le vuoi al dente.',
    },
    {
      q: 'Le lenticchie rosse, verdi e di Puy hanno la stessa resa?',
      a: 'Grosso modo, con una forbice. Le lenticchie rosse e gialle decorticate collassano e assorbono molto, assestandosi all’estremo alto. Le lenticchie verdi sode e di Puy cotte appena morbide restano intere e assorbono meno. Il valore del 289% è una media per lenticchie ben cotte.',
    },
    {
      q: 'Come registro le lenticchie in scatola?',
      a: 'Una lattina da 400 g si scola a circa 240 g, equivalenti a circa 85 g secco. Dividi il peso scolato per circa 2,85 per l’equivalente secco, o registra direttamente dall’etichetta in peso cotto della lattina, se c’è.',
    },
    {
      q: 'Le lenticchie hanno bisogno di ammollo, e l’ammollo cambia la resa?',
      a: 'Non hanno bisogno di ammollo — sono piccole e a buccia sottile. L’ammollo accorcia un po’ il tempo di cottura e può alzare leggermente il peso idratato finale, ma l’effetto sui macro è trascurabile. Registra dal peso secco in ogni caso.',
    },
  ],

  'black-beans': [
    {
      q: 'Perché i miei fagioli cotti in casa rendono meno di 2,5×?',
      a: 'Fagioli vecchi e acqua dura ricca di minerali resistono entrambi all’idratazione. Fagioli di più di un anno, o cotti senza ammollo, si gonfiano meno e possono assestarsi vicino al 220–235%. Un ammollo lungo, fagioli freschi e acqua dolce spingono verso il 250% o oltre.',
    },
    {
      q: 'Quanti fagioli neri secchi equivalgono a una lattina?',
      a: 'Una lattina da 400 g si scola a circa 240–260 g di fagioli, che sono più o meno 100 g secco. Quindi un sacchetto da 454 g (1 lb) di fagioli secchi equivale a circa quattro lattine e mezza di fagioli una volta cotti, molto più economico.',
    },
    {
      q: 'Devo registrare i fagioli in scatola con o senza il liquido?',
      a: 'Scola e sciacqua prima, poi pesa. Il liquido di conservazione (aquafaba) aggiunge peso e sodio e di solito viene scartato. Se una ricetta usa il liquido, consideralo a parte.',
    },
    {
      q: 'Fagioli neri, borlotti e rossi condividono una resa?',
      a: 'Sono vicini ma non identici. I fagioli neri sono circa il 250%, i fagioli rossi circa il 238%, i borlotti simili ai neri. Le lenticchie sono più alte al 289%. Usa la voce specifica dove puoi.',
    },
  ],

  'broccoli': [
    {
      q: 'I broccoli bolliti davvero non perdono peso?',
      a: 'In sostanza nessuno. L’acqua persa mentre il tessuto si ammorbidisce è compensata dall’acqua bollente che le cimette assorbono, per una resa netta del 100%. I broccoli crudi e bolliti pesano uguale, quindi puoi registrare l’uno o l’altro.',
    },
    {
      q: 'E i broccoli arrosto?',
      a: 'Arrostire è un’altra storia — il calore secco del forno espelle acqua vera e una porzione arrosto può pesare il 30–50% in meno del crudo. Questo dataset non valuta i broccoli arrosto, quindi pesali dopo l’arrostitura e registrali su una voce di arrosto, più l’eventuale olio.',
    },
    {
      q: 'I broccoli surgelati sono diversi da quelli freschi?',
      a: 'No. I broccoli surgelati sono sbollentati prima del congelamento ma si comportano allo stesso modo sulla bilancia quando li cuoci — la resa bollita è comunque circa il 100%.',
    },
    {
      q: 'Il gambo conta come le cimette?',
      a: 'Dal punto di vista nutrizionale il gambo è simile alle cimette una volta pelato, e cuoce con la stessa resa vicina al 100%. È solo più denso, quindi impiega un minuto o due in più ad ammorbidirsi.',
    },
  ],

  'spinach': [
    {
      q: 'Perché i miei spinaci sembrano aver perso l’80% quando la resa è il 77%?',
      a: 'Stai vedendo il volume, non il peso. Le foglie di spinaci crude sono per lo più aria e struttura rigida. Il calore fa collassare quella struttura istantaneamente, quindi il mucchio si restringe in modo drammatico — ma l’acqua dentro le cellule, che è ciò che pesa qualcosa, resta in gran parte. La perdita di peso è solo circa il 23%.',
    },
    {
      q: 'Il vapore trattiene davvero tanto più della bollitura?',
      a: 'Sì. Gli spinaci al vapore sono circa il 93% contro il 77% bolliti — una differenza di 16 punti, più ampia di quella di quasi ogni altra verdura. La pentola a pressione va nel verso opposto, a circa il 68%. Come cuoci gli spinaci cambia il numero più che per la maggior parte degli alimenti.',
    },
    {
      q: 'Come registro gli spinaci dopo aver strizzato via l’acqua?',
      a: 'Strizzare rimuove acqua che il valore di resa presume ancora presente. Pesa ciò che resta dopo la strizzatura e trattalo come un equivalente in crudo più basso — spinaci cotti strizzati forte possono essere più vicini al 50–60% del peso crudo.',
    },
    {
      q: 'Gli spinaci surgelati equivalgono a una certa quantità di freschi?',
      a: 'Grosso modo. Un blocco da 250 g di spinaci tritati surgelati è già sbollentato e scolato ed equivale a circa 700–800 g di foglie crude. Registralo da una voce di spinaci cotti.',
    },
    {
      q: 'Una ricetta dice «10 tazze di spinaci crudi» — quanto è cotto?',
      a: 'Circa 280–300 g di foglie crude, che cuociono fino a circa 215–230 g bolliti — poco più di una tazza. Il numero di tazze suona enorme perché lo spinacio crudo è quasi solo aria.',
    },
  ],

  'potato': [
    {
      q: 'Perché le patatine fritte perdono molto più peso di una patata lessa?',
      a: 'Friggere fa evaporare a fuoco vivo una grande frazione dell’acqua della patata e ne sostituisce solo una parte con olio. Una patata lessa mantiene circa il 94% del peso; le patatine scendono a circa il 55% — e poi portano olio assorbito che i macro della patata cruda non includono.',
    },
    {
      q: 'Come devo registrare le patate arrosto?',
      a: 'Usa la resa al forno con buccia unta, circa l’81%, per la patata in sé, poi aggiungi l’olio di arrostitura a parte — di solito 5–10 g di grassi per porzione. Registrare la patata arrosto come patata lessa semplice ignora sia la perdita d’acqua sia l’olio.',
    },
    {
      q: 'Il purè di patate usa la stessa resa?',
      a: 'La parte della patata perde solo un po’ nella lessatura (circa il 94%), ma il purè contiene anche latte, burro o panna. Pesa la patata prima di schiacciarla e registra i latticini e il grasso a parte, o sottostimerai le calorie.',
    },
    {
      q: 'Una patata al forno in alluminio è diversa da una cotta direttamente sulla griglia?',
      a: 'Sì. L’alluminio intrappola il vapore, quindi una patata al forno in alluminio mantiene circa il 95% del peso. Cotta direttamente con la buccia unta, sfugge più acqua e scende a circa l’81%.',
    },
    {
      q: 'Quanta patata cruda mi serve per il purè per quattro?',
      a: 'Circa 800 g–1 kg di patata cruda — 200–250 g a persona — prima di aggiungere latte e burro. Perde solo un po’ di peso nella lessatura, quindi il peso crudo è vicino al peso della patata cotta con cui inizi a schiacciare.',
    },
  ],

  'sweet-potato': [
    {
      q: 'Perché la patata dolce al forno perde peso ma quella lessa lo guadagna?',
      a: 'Il calore secco del forno evapora acqua e concentra la polpa — una resa al forno del 78%. La lessatura fa l’opposto: la polpa assorbe un po’ d’acqua di cottura e finisce leggermente più pesante di come è partita, una resa del 101%. Stessa patata, verso opposto, a seconda del metodo.',
    },
    {
      q: 'Posso usare le rese della patata comune per la patata dolce?',
      a: 'No. La patata dolce al forno perde circa il 22%, mentre una patata comune al forno in alluminio perde solo circa il 5%. La patata dolce è più umida e più zuccherina e si comporta in modo diverso sotto il calore.',
    },
    {
      q: 'Perché la patata dolce al forno sa molto più dolce di quella lessa?',
      a: 'Il forno rimuove acqua e concentra gli zuccheri, e il calore secco permette loro di caramellare. Lo zucchero totale è lo stesso della patata cruda — è solo concentrato in meno grammi, che è anche il motivo per cui la resa al forno è solo il 78%.',
    },
    {
      q: 'Come registro le patatine di patata dolce?',
      a: 'Pesale cotte e registra su una voce di patatine di patata dolce, o stima la patata cruda e aggiungi l’olio di frittura a parte. Come le patatine comuni, perdono molta acqua e assorbono olio che i macro della patata semplice ignorano.',
    },
  ],
};
