/**
 * Italian long-form food-page content. Full translation of the English source
 * in `../food-content.ts`; every gram and percentage figure is kept identical.
 */
import type { FoodLongContent } from '../food-content';

export const IT: Record<string, FoodLongContent> = {
  // ── Carne, pollame e frutti di mare ──────────────────────────────────────

  'chicken-breast': {
    introHeading: 'Perché il petto di pollo si restringe di circa il 28% in cottura',
    intro: [
      'Il petto di pollo senza pelle e senza osso è circa il 74% acqua in peso e muscolo quasi puro: circa 22,5 g di proteine e appena 2,6 g di grassi per 100 g crudo. C’è pochissimo grasso e quasi nessun tessuto connettivo a trattenere l’umidità, quindi quando le fibre muscolari incontrano il calore si comportano come una spugna strizzata: le proteine si denaturano intorno ai 60–65 °C, i fasci di fibre si contraggono in lunghezza e in larghezza, e l’acqua che trattenevano viene spinta nella padella. Quella perdita d’acqua è praticamente tutto il 28% che il petto perde arrivando a una resa USDA del 72%.',
      'Poiché la perdita è quasi solo acqua e quasi niente grasso, la proteina di partenza resta nella carne. Un petto da 200 g crudo contiene ancora circa 45 g di proteine dopo la cottura: solo che ora sono concentrate in circa 144 g anziché 200 g, ecco perché il petto cotto misura circa 31 g di proteine per 100 g mentre quello crudo ne misura 22,5 g. Stessa proteina, meno acqua, carne più densa.',
      'Il petto di pollo punisce la cottura eccessiva più duramente dei tagli grassi. Senza grasso né collagene a fare da cuscinetto, ogni minuto in più oltre i 74 °C al cuore espelle più acqua e spinge la resa verso la metà dei 60. Le fettine sottili battute e gli straccetti piccoli perdono una quota maggiore di un petto intero e spesso perché hanno più superficie di evaporazione rispetto alla massa.',
      'È l’alimento che la maggior parte delle app di conteggio sbaglia nella stessa direzione: pesano il petto cotto, cercano una tabella nutrizionale in peso crudo e, senza accorgersene, sottostimano le proteine di un quarto. La soluzione è sempre registrare l’equivalente in peso crudo, che è ciò che questo calcolatore restituisce in qualsiasi verso della conversione.',
    ],
    methodHeading: 'Al forno, alla griglia o in camicia: un esempio svolto',
    method: [
      'Il calore secco e forte evapora più umidità superficiale del calore umido e delicato, quindi il metodo di cottura sposta la resa di circa sette punti. Dati USDA per il petto senza pelle: al forno o arrosto 72%, in padella 72%, alla griglia 70%, bollito o in camicia 77%.',
      'Parti da un petto da 200 g crudo. Al forno a 200 °C esce a 200 × 0,72 ≈ 144 g cotto. Alla griglia su fiamma diretta lo stesso petto si ferma a 200 × 0,70 = 140 g: la doratura extra e il calore radiante ti costano qualche grammo in più. In camicia in acqua appena sobbollente trattiene 200 × 0,77 = 154 g, perché la carne è circondata d’acqua e non d’aria secca e quasi nulla evapora.',
      'Le tre porzioni portano gli stessi macro, perché provengono tutte da 200 g crudo: circa 240 kcal, 45 g di proteine e 5,2 g di grassi. Se hai solo il peso cotto, dividi per la resa del tuo metodo: una porzione da 150 g alla griglia è 150 ÷ 0,70 ≈ 214 g crudo; al forno, gli stessi 150 g sono 150 ÷ 0,72 ≈ 208 g crudo. Usa il selettore del metodo di cottura del calcolatore per scegliere automaticamente il divisore giusto.',
    ],
    buyingHeading: 'Quanto petto di pollo crudo comprare',
    buying: [
      'Ragiona a ritroso dalla porzione cotta che vuoi nel piatto. Per 150 g cotti, compra circa 150 ÷ 0,72 ≈ 210 g crudo a persona se cuoci al forno o arrosto; più vicino a 215 g se cuoci alla griglia. Per una porzione cotta da 170 g (6 oz), conta circa 235–240 g crudo a persona.',
      'I petti confezionati pesano di solito 200–280 g l’uno, quindi un petto medio sazia un adulto affamato con un po’ di avanzo, e una vaschetta da 1 kg con tre o quattro petti rende circa 700–720 g cotti: circa quattro porzioni da 175 g. Per cinque porzioni da 150 g cotti in meal prep, parti da circa 1,05 kg crudo.',
    ],
    mistakesHeading: 'Errori comuni nel registrare il petto di pollo',
    mistakes: [
      'Pesare dopo la cottura e registrarlo su una tabella in crudo «per 100 g». Un petto cotto da 150 g equivale a circa 208 g crudo; registrare 150 g ti toglie circa 13 g di proteine e 70 kcal.',
      'Usare la resa del bollito/in camicia (77%) per un petto che in realtà hai fatto alla griglia (70%). È un errore del 10% sul peso crudo che ricalcoli.',
      'Registrare come pollo semplice un petto «condito», in salamoia o marinato acquistato pronto. La soluzione aggiunta può essere il 10–15% del peso della confezione ed è soprattutto acqua e sale, non proteina.',
    ],
  },

  'chicken-thigh': {
    introHeading: 'Perché la coscia di pollo perde più del petto',
    intro: [
      'La coscia disossata e senza pelle è carne scura: i muscoli che il pollo usa per stare in piedi e camminare. Lavorano di più del petto, quindi contengono più mioglobina, più grasso intramuscolare (circa 4,6 g per 100 g crudo contro 2,6 g del petto) e nettamente più tessuto connettivo. Questa struttura è il motivo per cui la coscia cuoce fino a una resa al forno del 69% — una perdita di circa il 31% — mentre il petto trattiene il 72%.',
      'Due cose lasciano la carne allo stesso tempo. L’acqua viene spremuta mentre le fibre si contraggono, come in qualsiasi muscolo, e il grasso si scioglie: il calore più alto dell’arrosto o della griglia scioglie il grasso intramuscolare, che cola via con i succhi. Un taglio più grasso, con più grasso da sciogliere, perde più peso totale, anche se il collagene che contiene sta contemporaneamente diventando gelatina e trattenendo un po’ di umidità.',
      'Quel collagene è anche il motivo per cui la coscia perdona di più al palato del petto a parità di resa. Cuoci troppo un petto ed è secco e filaccioso; cuoci troppo una coscia e il tessuto connettivo si è disgregato abbastanza da farla comunque risultare succosa. La bilancia mostra comunque la perdita di peso anche quando la tua bocca non la sente.',
      'Per il conteggio, la coscia conta perché la forbice tra i metodi è enorme — più ampia di quasi ogni altro taglio di questo sito — quindi un unico numero di resa per il «pollo» non basta qui.',
    ],
    methodHeading: 'La forbice tra metodi più ampia di ogni taglio di pollo',
    method: [
      'L’USDA documenta la coscia disossata dal 59% fritta in immersione all’80% impanata e fritta, con brasata al 73%, al forno stile frittura al 66%, in padella al 66%, alla griglia al 61% e alla griglia barbecue al 64%. Il valore di riferimento del 69% è quello al forno o arrosto.',
      'Prendi una coscia da 150 g cruda. Brasata in un sugo trattiene 150 × 0,73 ≈ 110 g. Alla griglia vicino alla resistenza scende a 150 × 0,61 ≈ 92 g: 18 g di differenza rispetto alla versione brasata dello stesso pezzo. Al forno stile frittura si ferma a 150 × 0,66 = 99 g.',
      'Ognuna di queste porzioni si registra comunque come 150 g crudo: circa 192 kcal, 30,6 g di proteine e 6,9 g di grassi. Il numero dell’impanata fritta (80%) è l’eccezione: sembra alto solo perché la panatura e l’olio assorbito aggiungono peso che non è mai stato pollo, quindi non usarlo per ricalcolare i macro della coscia magra.',
    ],
    buyingHeading: 'Quanta coscia di pollo cruda comprare',
    buying: [
      'Le cosce disossate e senza pelle pesano in media 90–130 g l’una crude. Per una porzione cotta da 120 g, compra circa 120 ÷ 0,69 ≈ 175 g crudo a persona per arrostire o cuocere al forno: più o meno due cosce piccole o una e mezza grandi.',
      'Una confezione da 1 kg di cosce disossate arrostisce fino a circa 690 g cotti, o quattro porzioni da 170 g. Se brasi per un curry o uno stufato, la resa sale al 73% e lo stesso chilo ti dà circa 730 g di carne cotta.',
    ],
    mistakesHeading: 'Errori comuni nel registrare la coscia di pollo',
    mistakes: [
      'Riutilizzare la resa del petto di pollo (72%) per le cosce. La coscia è più bassa con quasi tutti i metodi; al forno è 69%, e alla griglia è più vicina al 61%.',
      'Registrare cosce con osso e pelle in base al peso crudo della confezione come se fosse carne commestibile. Pelle e osso sono il 25–35% di una coscia con osso, e la pelle è quasi solo grasso.',
      'Trattare la coscia impanata e fritta (80% di «resa») come pollo magro. Il peso in più è panatura e olio, non proteina: quella porzione ha molti più grassi e carboidrati di quanto suggeriscano i macro della coscia cruda.',
    ],
  },

  'ground-beef-80-20': {
    introHeading: 'Perché il macinato di manzo 80/20 perde circa un quarto del peso',
    intro: [
      'Il macinato di manzo 80/20 standard ha il 20% di grasso in peso crudo: circa 20 g di grasso e 254 kcal per 100 g. In cottura, due cose distinte lasciano la padella. Il muscolo magro si contrae ed espelle acqua, e gran parte di quel 20% di grasso si scioglie e cola via come liquido. Insieme portano il macinato sbriciolato a una resa del 73% in padella, una perdita del 27%, per lo più visibile nel grasso che scoli o tamponi.',
      'Poiché gran parte della perdita è grasso sciolto e non acqua, l’80/20 cotto è nettamente più magro per grammo di quanto suggeriscano i macro crudi: una parte del grasso ora è in padella, non nel tuo piatto. È l’unico alimento comune per cui registrare l’equivalente in peso crudo sovrastima leggermente il grasso davvero mangiato. È comunque molto più preciso che registrare il peso cotto scolato su una tabella in crudo, che sottostima tutto.',
      'Il grado di macinatura e il tenore di grasso comandano sulla resa. Le macinature più magre (vedi 93/7) perdono meno perché c’è meno grasso da sciogliere. Una macinatura grossa cotta con delicatezza perde meno di una macinatura fine spinta a fuoco vivo, che rompe più cellule e libera più liquido.',
      'Per un numero stabile, pesa il manzo crudo prima che vada in padella. Pesare il macinato sbriciolato dopo lo scolo introduce una seconda variabile — quanto grasso hai scolato — oltre alla resa stessa.',
    ],
    methodHeading: 'In padella vs. sotto il grill, passo per passo',
    method: [
      'L’USDA riporta l’80/20 sbriciolato al 73% in padella (rosolato) e al 69% sotto il grill (dove cola via più grasso). Il 93/7 più magro dà 77% e 73% per questi due metodi.',
      'Rosola una confezione intera da 454 g (1 lb) in padella e ottieni circa 454 × 0,73 ≈ 331 g di macinato cotto e scolato. Cuoci la stessa libbra sotto il grill e scende a 454 × 0,69 ≈ 313 g, con più grasso perso sulla leccarda.',
      'Su base cruda, quei 454 g partivano da circa 1.153 kcal, 78 g di proteine e 91 g di grassi. Il macinato porta tutte le proteine ma solo una parte di quel grasso, a seconda di quanto ne scoli: è proprio per questo che il peso crudo è la cosa costante da registrare.',
    ],
    buyingHeading: 'Quanto macinato di manzo crudo comprare',
    buying: [
      'Per gli hamburger, una polpetta cruda da 150 g (1/3 lb) cuoce a circa 110 g; una da 113 g (1/4 lb) a circa 82 g. Compra 150–170 g crudo per hamburger se ci si aspetta una polpetta sostanziosa.',
      'Per un sugo, un chili o un ripieno di taco in cui il manzo è un componente, 100–125 g crudo a persona è generoso. Una confezione da 454 g (1 lb) si rosola fino a circa 330 g cotti e sazia comodamente quattro persone in un ragù o quattro-cinque nei taco.',
    ],
    mistakesHeading: 'Errori comuni nel registrare il macinato di manzo',
    mistakes: [
      'Registrare il peso cotto scolato su una voce in crudo «per 100 g». Il macinato è molto più denso di calorie per grammo del manzo crudo, quindi questo gonfia parecchio il conteggio di calorie e grassi.',
      'Supporre che tutte le macinature si comportino uguale. L’80/20 rende ~73% rosolato in padella; il 93/7 trattiene ~77% perché c’è meno grasso da sciogliere.',
      'Dimenticare che lo scolo toglie grasso che i macro crudi contano ancora. Se butti il grasso, la tua assunzione reale di grassi è un po’ sotto la conversione dal crudo: la differenza è il grasso in padella.',
    ],
  },

  'ground-beef-93-7': {
    introHeading: 'Perché il macinato di manzo 93/7 tiene il peso meglio dell’80/20',
    intro: [
      'Il macinato di manzo magro 93/7 ha solo il 7% di grasso in peso crudo: circa 7,2 g di grasso e 152 kcal per 100 g, contro 20 g e 254 kcal dell’80/20. Il muscolo magro si contrae ancora e cede acqua in cottura, ma c’è molto meno grasso disponibile a sciogliersi e lasciare la padella. Quella perdita di grasso che non avviene è tutto il motivo per cui il 93/7 cuoce fino a una resa del 77% in padella mentre l’80/20 scende al 73%.',
      'Meno grasso sciolto significa anche che la conversione dei macro dal peso crudo è più onesta per il 93/7 che per le macinature grasse. Pochissimo grasso finisce in padella, quindi il macinato mantiene quasi tutto il valore di grasso del crudo: registrare l’equivalente in peso crudo è qui la scelta costante e anche esatta.',
      'Il compromesso che sente chi cucina è la secchezza. Con poco grasso a tenere umido il macinato, il 93/7 passa da succoso a asciutto in fretta a fuoco vivo, e la resa scivola dal 77% verso i 70 bassi se lo spingi. Rosolarlo con delicatezza e toglierlo dal fuoco quando resta un po’ di rosa ti tiene vicino al 77%.',
      'Per chili, taco, sugo di carne e ciotole di meal prep in cui si vuole la proteina senza il grasso, il 93/7 è la scelta predefinita, e la sua resa più alta fa rendere una confezione più a lungo nel piatto rispetto allo stesso peso di 80/20.',
    ],
    methodHeading: 'In padella vs. sotto il grill, passo per passo',
    method: [
      'Dati USDA per il 93/7 sbriciolato: 77% rosolato in padella, 73% sotto il grill.',
      'Una confezione da 454 g (1 lb) rosolata in padella dà circa 454 × 0,77 ≈ 350 g cotti e scolati: nettamente più dei ~331 g che otterresti dall’80/20. Sotto il grill, la stessa confezione scende a 454 × 0,73 ≈ 331 g.',
      'Quei 454 g crudi sono circa 690 kcal, 95 g di proteine e 33 g di grassi. Poiché quasi nulla di quel grasso si scioglie e sfugge, il macinato ne mantiene quasi tutto, quindi convertire la tua porzione cotta di nuovo in peso crudo dà una lettura dei macro esatta.',
    ],
    buyingHeading: 'Quanto macinato di manzo magro crudo comprare',
    buying: [
      'Per una ciotola di meal prep incentrata sulle proteine, 150 g crudo a porzione cuociono a circa 115 g e forniscono circa 31 g di proteine. Cinque porzioni richiedono circa 750 g crudo.',
      'Una confezione da 454 g (1 lb) rende circa 350 g cotti: abbastanza per quattro porzioni generose di taco o chili a circa 115 g cotti ciascuna, o tre ciotole più grandi.',
    ],
    mistakesHeading: 'Errori comuni nel registrare il macinato di manzo magro',
    mistakes: [
      'Usare la resa dell’80/20 (73%) per il 93/7. Il manzo magro trattiene più peso — circa il 77% rosolato in padella — quindi sottostimeresti il peso crudo e ti terreste corto di proteine.',
      'Registrare il macinato su una tabella in crudo. Anche il manzo magro si concentra perdendo acqua, quindi il cotto è più denso di calorie per grammo del crudo.',
      'Scambiare liberamente i macro del 93/7 e dell’80/20. La differenza di grassi e calorie è di quasi il triplo per grammo di grasso: scegli la voce che corrisponde alla confezione.',
    ],
  },

  'ribeye-steak': {
    introHeading: 'Perché la costata mantiene l’84% del peso — il valore più alto di ogni carne qui',
    intro: [
      'La costata (ribeye) è una bistecca molto marezzata: circa 23 g di grasso per 100 g crudo, distribuito nel muscolo come marezzatura intramuscolare anziché in uno strato a parte. In cottura quella marezzatura si scioglie ma gran parte resta intrappolata tra le fibre muscolari invece di colare via, e il grasso che si liquefa mantiene la superficie unta, così evapora meno acqua. Il risultato è una resa USDA dell’84% — solo il 16% di perdita, la più lieve di ogni carne o pesce di questo sito.',
      'Il muscolo perde comunque acqua mentre si rassoda, e la bistecca rilascia sugo durante il riposo, ma un taglio grasso ha semplicemente meno acqua per grammo di partenza — il grasso spiazza l’acqua — quindi c’è meno da perdere. Un taglio magro come il girello, cotto allo stesso modo, ne perderebbe nettamente di più.',
      'La cottura è la vera leva in una bistecca. L’USDA nota che la resa della costata varia sensibilmente dal al sangue al ben cotto: una bistecca al sangue ha ceduto pochissima umidità, mentre una ben cotta è stata in temperatura abbastanza a lungo da spingere la perdita oltre il 20%. Il valore dell’84% è una media di grado medio.',
      'Poiché il grasso resta in gran parte nella carne, la conversione dei macro dal peso crudo è esatta per la costata: ciò che registri è molto vicino a ciò che mangi, marezzatura inclusa.',
    ],
    methodHeading: 'Un esempio svolto, dal al sangue al ben cotto',
    method: [
      'Il sito usa un’unica resa dell’84% per la costata (Tabella delle rese di cottura USDA), che rappresenta un risultato tipico a media cottura. Considera «al sangue» come qualche punto in più e «ben cotto» come diversi punti in meno.',
      'Una costata da 340 g (12 oz) cruda cotta a media esce a circa 340 × 0,84 ≈ 286 g nel piatto. Cotta al sangue tratterrebbe più vicino a 300 g; portata a ben cotta, aspettati circa 265–270 g, dato che il calore prolungato espelle più acqua e scioglie più grasso.',
      'Tutte provenivano da 340 g crudo: circa 989 kcal, 66 g di proteine e 79 g di grassi. Pesa la bistecca cruda se puoi: ricavarla dal peso cotto significa indovinare il proprio grado di cottura, che fa oscillare la resa di dieci punti.',
    ],
    buyingHeading: 'Quanta costata cruda comprare',
    buying: [
      'Le porzioni da steakhouse sono 225–450 g (8–16 oz) crude. Una bistecca cruda da 8 oz si mangia come circa 190 g cotti; una da 12 oz come circa 286 g cotti. Per una cena normale con contorni, 8–10 oz crude a persona bastano ampiamente; per un pasto incentrato sulla bistecca, 12 oz.',
      'La costata con osso (rib steak / tomahawk) porta il 10–20% di peso d’osso non commestibile: compra proporzionalmente di più, o pesa la carne staccata dall’osso dopo la cottura e converti quello.',
    ],
    mistakesHeading: 'Errori comuni nel registrare la costata',
    mistakes: [
      'Rifilare il grasso visibile dopo la cottura ma registrare l’intero peso crudo. Se tagli e lasci lo strato di grasso, registra un equivalente in crudo più basso dell’intera bistecca.',
      'Usare la resa di una bistecca magra. Il controfiletto o il girello perdono più della costata; con l’84%, la costata è vicina al limite superiore dell’intervallo.',
      'Ignorare il grado di cottura. Una costata ben cotta può pesare 15–20 g in meno per 340 g di una al sangue cotta dalla stessa bistecca cruda.',
    ],
  },

  'pork-chop': {
    introHeading: 'Perché una braciola di maiale perde circa il 22% — e la spalla di maiale molto di più',
    intro: [
      'Una braciola di maiale disossata è un taglio magro a cottura rapida: circa 21,5 g di proteine e 5,6 g di grassi per 100 g crudo, ricavata dalla lombata. Si comporta molto come il petto di pollo: le fibre muscolari si contraggono, l’acqua viene espulsa, e una braciola a cottura rapida si assesta a una resa del 78% in padella, una perdita del 22%.',
      'Ciò che rende delicata la braciola di maiale è quanto è stretta la sua finestra sicura. Le indicazioni moderne cuociono il maiale a 63 °C più un riposo, quando è ancora appena rosato e succoso. Portalo al vecchio standard di 71 °C «senza rosa» ed evapori molta più acqua: la resa può scendere nei 70 bassi e la braciola diventa secca e pallida.',
      'Il metodo conta più per la braciola di maiale che per la maggior parte dei tagli perché le opzioni differiscono davvero: brasare la circonda di liquido e trattiene il 76%, mentre grigliare su calore diretto con la superficie che sigilla forte può finire più in alto, all’83%, dato che l’esterno si fissa in fretta e sigilla l’umidità prima che l’interno cuocia troppo.',
      'La spalla di maiale è un’altra bestia — un taglio grasso e ricco di collagene cotto a bassa temperatura per ore, ecco perché perde circa il 35% (una resa del 65%). Tanto tempo in temperatura scioglie gran parte del grasso ed espelle molta più acqua di quanto una braciola di cinque minuti possa mai fare.',
    ],
    methodHeading: 'In padella vs. brasata vs. alla griglia',
    method: [
      'Valori USDA per metodo per una braciola disossata generica (media di coppa, lombata e costa): in padella 78%, brasata 76%, alla griglia 83%.',
      'Una braciola da 170 g (6 oz) cruda in padella esce a circa 170 × 0,78 ≈ 133 g. Brasata in un sugo trattiene 170 × 0,76 ≈ 129 g. Grigliata forte su calore diretto può finire a 170 × 0,83 ≈ 141 g, perché la crosta sigillata trattiene l’umidità.',
      'Ogni porzione si registra come 170 g crudo: circa 243 kcal, 37 g di proteine e 9,5 g di grassi. Se l’hai pesata solo cotta, una braciola da 130 g in padella è 130 ÷ 0,78 ≈ 167 g crudo.',
    ],
    buyingHeading: 'Quanta braciola di maiale cruda comprare',
    buying: [
      'Le braciole disossate pesano 140–225 g l’una crude. Per una porzione cotta da 150 g, compra circa 150 ÷ 0,78 ≈ 192 g crudo a persona: una braciola media.',
      'Le braciole con osso portano il 15–25% di osso. Una braciola con osso da 250 g ha circa 190–210 g di carne, che cuoce fino a circa 150–165 g. Compra quelle con osso a numero (una a persona) anziché a peso.',
    ],
    mistakesHeading: 'Errori comuni nel registrare la braciola di maiale',
    mistakes: [
      'Applicare la resa della braciola (78%) al pulled pork o alle carnitas. La spalla di maiale cotta per ore rende circa il 65%: un pezzo da 500 g crudo diventa circa 325 g cotti, non 390 g.',
      'Registrare il peso della braciola con osso come carne commestibile. Sottrai il 15–25% per l’osso prima di convertire.',
      'Cuocere troppo fino a «senza rosa» e poi chiedersi perché il peso cotto è basso. Una braciola portata a 71 °C o più può rendere più vicino al 72% che al 78%.',
    ],
  },

  'pork-shoulder': {
    introHeading: 'Perché la spalla di maiale perde circa il 35% — il calo più grande di ogni carne qui',
    intro: [
      'La spalla di maiale (Boston butt / coppa di spalla) è l’opposto di una braciola magra: circa 14 g di grasso per 100 g crudo, più spesse venature di tessuto connettivo ricco di collagene e uno strato di grasso. Viene cotta di proposito lentamente — ore a 90–120 °C, o una lunga brasatura — per dare a quel collagene il tempo di sciogliersi in gelatina. Il prezzo di questa trasformazione a bassa temperatura è una resa USDA del 65%, una perdita di peso del 35%.',
      'In quelle ore se ne va quasi tutto. Il grasso intramuscolare e quello dello strato colano via in gran parte nella teglia o nella vaschetta di raccolta dell’affumicatore. L’acqua, che un taglio a cottura rapida non ha mai il tempo di perdere, continua a evaporare per tutta la cottura. Anche il collagene, una volta gelatinizzato, rilascia parte dell’acqua a cui era legato. Ciò che resta è carne concentrata e sfilacciabile.',
      'La resa è notevolmente costante per il pulled pork proprio perché il punto finale è costante — si cuoce finché si sfilaccia, intorno ai 90–96 °C al cuore, non fino a un tempo fisso. Che tu la affumichi, la arrostisca in forno o la faccia nella slow cooker, arrivi vicino al 65%.',
      'Per il conteggio, è il taglio in cui usare una resa generica per il «maiale» fa più danni: quella di una braciola sovrastimerebbe di un terzo il tuo pulled pork cotto.',
    ],
    methodHeading: 'Un esempio svolto: dall’arrosto crudo al pulled pork',
    method: [
      'Il sito usa un’unica resa del 65% per la spalla di maiale (Tabella delle rese di cottura USDA), che copre brasatura, arrosto e affumicatura a bassa temperatura, che si assestano molto vicini tra loro.',
      'Una spalla disossata da 2 kg (4,4 lb) cruda si riduce a circa 2000 × 0,65 = 1.300 g di carne cotta. Un pezzo da 1 kg dà circa 650 g. La spalla con osso perde il peso dell’osso in più: conta un altro 8–12%.',
      'Quei 2 kg crudi sono circa 4.020 kcal, 348 g di proteine e 284 g di grassi prima della cottura. Una buona parte del grasso cola nella teglia, quindi i 1.300 g di carne sfilacciata sono più magri per grammo di quanto suggeriscano i macro crudi, ma la conversione dal peso crudo resta il modo costante di registrarla, e puoi abbassare un po’ il grasso se hai sgrassato i sughi.',
    ],
    buyingHeading: 'Quanta spalla di maiale cruda comprare',
    buying: [
      'Conta circa 150 g di pulled pork cotto a persona nei panini, cioè circa 150 ÷ 0,65 ≈ 230 g crudo di spalla disossata a testa. Per una folla, la regola del catering «1/3 lb cotto a persona, quindi 1/2 lb crudo» cade nello stesso punto.',
      'Una spalla disossata intera pesa di solito 2–3,5 kg. Un arrosto da 3 kg rende circa 1,95 kg cotti: abbastanza per una dozzina di panini generosi. Con osso, compra circa il 15% in più per coprire l’osso.',
    ],
    mistakesHeading: 'Errori comuni nel registrare la spalla di maiale',
    mistakes: [
      'Usare una resa da braciola o da «maiale medio». Con il 65%, la spalla perde molto più del 78% di una braciola; una resa da braciola sovrastima il tuo pulled pork cotto di circa un terzo.',
      'Registrare il peso cotto, con salsa. La salsa barbecue aggiunge zucchero e calorie che non sono nel maiale: pesa la carne prima di condirla, o registra la salsa a parte.',
      'Ignorare il grasso sciolto. Se sgrassi o scarti i sughi, la tua assunzione reale di grassi è sotto la conversione dal peso crudo; la differenza è il grasso rimasto in teglia.',
    ],
  },

  'turkey-breast': {
    introHeading: 'Perché il petto di tacchino perde circa il 21% arrostito',
    intro: [
      'Il petto di tacchino senza pelle è il taglio di pollame più magro di questo sito: circa 24,6 g di proteine e appena 1 g di grassi per 100 g crudo, ancora più magro del petto di pollo. È quasi muscolo e acqua puri, quindi in arrosto la storia è quasi solo perdita d’acqua: le proteine si denaturano, le fibre si contraggono, l’umidità viene espulsa, e il petto si assesta a una resa USDA del 79%, una perdita del 21%.',
      'Perde un po’ meno del petto di pollo (72%) soprattutto perché un petto di tacchino è un pezzo di carne molto più grande. Un petto intero da 2–3 kg ha un basso rapporto superficie/massa, quindi proporzionalmente meno è esposto al calore che asciuga, e l’interno è protetto dalla massa che lo circonda. Taglialo in fettine e la resa scende verso il territorio del petto di pollo.',
      'L’errore classico con il tacchino è cuocerlo al vecchio standard di pollame «ben cotto» di 74 °C o più per precauzione. Tolto a 71 °C e riposato, il petto trattiene vicino al 79%; portato a 80 °C diventa secco come segatura e la resa cala di diversi punti.',
      'Il valore del 79% è specifico per il petto. Le rese del tacchino intero e del tacchino ripieno sono più basse e non confrontabili: mediano carne scura, pelle e perdite della cavità.',
    ],
    methodHeading: 'Un esempio svolto: petto di tacchino arrosto',
    method: [
      'Il sito usa un’unica resa del 79% per il petto di tacchino (Manuale di agricoltura n. 102 dell’USDA), per l’arrosto. Cuocere in camicia o al vapore tratterrebbe un po’ di più; affettarlo in fettine sottili e rosolarlo in padella tratterrebbe un po’ di meno.',
      'Una porzione da 250 g di petto crudo arrostisce fino a circa 250 × 0,79 ≈ 198 g cotti. Un arrosto intero di petto disossato da 2,5 kg rende circa 1,98 kg di carne cotta affettata.',
      'Quei 250 g crudi sono circa 285 kcal, 61,5 g di proteine e 2,5 g di grassi. Se hai affettato prima e pesato dopo, una porzione cotta da 150 g è 150 ÷ 0,79 ≈ 190 g crudo. Il «petto di tacchino arrosto» da salumeria non è confrontabile: è in salamoia e spesso con acqua aggiunta, quindi registralo dalla sua tabella in peso cotto.',
    ],
    buyingHeading: 'Quanto petto di tacchino crudo comprare',
    buying: [
      'Per una porzione cotta da 150 g, compra circa 150 ÷ 0,79 ≈ 190 g crudo di petto disossato a persona. Per avanzi in stile Ringraziamento, raddoppia.',
      'Un petto di tacchino con osso è per il 30–40% osso e pelle. Per 6 persone che vogliono 150 g cotti ciascuna (900 g cotti, ~1,14 kg di equivalente in petto disossato crudo), compra un petto con osso di circa 2,7–3 kg, o un arrosto disossato di 1,2 kg.',
    ],
    mistakesHeading: 'Errori comuni nel registrare il petto di tacchino',
    mistakes: [
      'Usare i dati di resa del tacchino intero arrosto (spesso citati intorno al 70–74%) per un petto semplice. Il petto da solo trattiene circa il 79%.',
      'Registrare come tacchino semplice il petto da supermercato in salamoia, pre-bardato o «auto-irrorante». La soluzione iniettata è l’8–15% del peso ed è acqua, sale e a volte grasso.',
      'Trattare le fette di tacchino da salumeria come petto arrostito in casa. Il salume porta acqua e sodio aggiunti e ha la sua tabella nutrizionale (in peso cotto): usala.',
    ],
  },

  'salmon': {
    introHeading: 'Perché il salmone perde solo circa il 15% in cottura',
    intro: [
      'Il filetto di salmone è un pesce grasso: circa 13,4 g di grassi per 100 g crudo, per lo più olio insaturo distribuito nella carne e concentrato nelle linee di grasso tra le scaglie di muscolo. Quell’olio è il motivo per cui il salmone segna una resa USDA dell’85%, la più alta di ogni proteina di questo sito: il muscolo del pesce è costruito in scaglie corte e delicate con pochissimo tessuto connettivo, quindi si rassoda con delicatezza e il grasso lo mantiene umido invece di colare via.',
      'Quando il salmone cuoce, le proteine del muscolo coagulano ed espellono un po’ d’acqua e quella sostanza bianca che vedi in superficie — è albumina, una proteina idrosolubile. Ma i fasci di fibre sono corti e il grasso è ovunque, quindi la carne non si contrae e non si strizza come un petto di pollo. Gran parte del peso resta al suo posto.',
      'La cottura eccessiva costa comunque. Oltre i 55–60 °C al cuore le scaglie si stringono, più albumina e olio vengono espulsi, e un filetto ben cotto può scendere verso il 78–80%. Il salmone d’allevamento, più grasso di quello selvatico, tende a trattenere un po’ più di peso del sockeye selvatico.',
      'Poiché così poco lascia il filetto e il grasso vi resta, convertire la tua porzione cotta di nuovo in peso crudo dà una lettura dei macro esatta — compreso il grasso omega-3, che è il motivo principale per cui si monitora il salmone.',
    ],
    methodHeading: 'Un esempio svolto: salmone al forno, alla griglia o in camicia',
    method: [
      'Il sito usa un’unica resa dell’85% per il salmone (Manuale di agricoltura n. 102 dell’USDA). Cuocere in camicia trattiene un punto o due in più; grigliare forte o cuocere ben cotto al forno, qualche punto in meno.',
      'Un filetto da 170 g (6 oz) crudo al forno a 190 °C esce a circa 170 × 0,85 ≈ 144 g. In camicia con delicatezza tratterrebbe ~148 g; grigliato fino a sodo e sfaldabile, ~138 g.',
      'Quel filetto da 170 g crudo è circa 354 kcal, 34 g di proteine e 22,8 g di grassi. Se hai pesato solo la porzione cotta, un pezzo da 130 g è 130 ÷ 0,85 ≈ 153 g crudo. Filetti con pelle: la pelle è il 5–8% del peso e scioglie il suo grasso ma resta sulla bilancia, quindi pesa senza pelle se puoi, o sottraila.',
    ],
    buyingHeading: 'Quanto salmone crudo comprare',
    buying: [
      'Per una porzione cotta da 150 g, compra circa 150 ÷ 0,85 ≈ 175 g crudo a persona. Le porzioni di filetto standard sono 140–200 g crude, quindi una a persona basta.',
      'Un baffa intera di salmone è 900 g–1,4 kg e rende circa l’85% di quello cotto: una baffa da 1,2 kg dà circa 1 kg cotto, o circa sei-sette porzioni da 150 g. Prevedi di più se la baffa è con pelle e la scarti.',
    ],
    mistakesHeading: 'Errori comuni nel registrare il salmone',
    mistakes: [
      'Applicare al salmone una resa da carne come il 72%. Il pesce trattiene molto più peso — il salmone circa l’85% — quindi una resa da carne gonfia il peso crudo ricalcolato e sovrastima calorie e grassi.',
      'Registrare salmone in scatola o affumicato come filetto crudo fresco. Il salmone in scatola è cotto e confezionato (spesso con sale o olio aggiunti); quello affumicato è curato. Entrambi hanno la loro tabella.',
      'Pesare un filetto con pelle e registrarlo come senza pelle. La pelle aggiunge peso ma non è conteggiata in una voce senza pelle.',
    ],
  },

  'shrimp': {
    introHeading: 'Perché i gamberi perdono circa il 25% — e perché sembra di più',
    intro: [
      'Il gambero è proteina magra quasi pura: circa 24 g per 100 g crudo con solo 0,3 g di grassi, e un muscolo denso e ben compatto in un corpo piccolo. In cottura, le proteine del muscolo si contraggono in fretta e con forza — è l’arricciamento improvviso da un gambero dritto crudo a una «C» stretta — ed espellono acqua. La resa USDA è del 75%, una perdita del 25%, quasi tutta umidità superficiale e interna.',
      'Il restringimento visivo sembra maggiore della perdita di peso perché l’arricciamento e la stretta concentrano la stessa massa in una forma più piccola e densa. Un gambero non perde davvero un quarto del suo volume; si contrae. La bilancia dice la verità meglio dei tuoi occhi qui.',
      'La cottura eccessiva è brutale con i gamberi perché non c’è grasso e i pezzi sono piccoli — qualche secondo di troppo e passano da «C» a una «O» stretta, gommosi, con la resa che scende ancora mentre viene espulsa più acqua. I gamberi grandi e jumbo trattengono proporzionalmente più peso dei piccoli gamberetti da insalata, che hanno più superficie per grammo.',
      'Una nota: molti gamberi sono venduti trattati con tripolifosfato di sodio o una salamoia per trattenere acqua. Quel gambero pesa di più da crudo del gambero «asciutto» e può perdere più del 25% in cottura, perché rilascia acqua aggiunta oltre alla propria.',
    ],
    methodHeading: 'Un esempio svolto: gamberi bolliti, saltati o grigliati',
    method: [
      'Il sito usa un’unica resa del 75% per il gambero (Manuale di agricoltura n. 102 dell’USDA), che copre bollitura, vapore, saltato e griglia, che si assestano vicini per un alimento a cottura così rapida.',
      'Parti da 200 g di gamberi sgusciati crudi. Bolliti o saltati escono a circa 200 × 0,75 = 150 g cotti. Grigliati a fuoco vivo, aspettati un grammo o due in meno mentre la superficie asciuga.',
      'Quei 200 g crudi sono circa 198 kcal e 48 g di proteine — il gambero è l’alimento ricco di proteine più magro di questo sito. Se hai pesato cotto, una porzione da 120 g è 120 ÷ 0,75 = 160 g crudo. Gamberi con guscio: guscio e testa sono il 30–45% del peso, quindi pesa sgusciato, o converti solo il peso cotto sgusciato.',
    ],
    buyingHeading: 'Quanti gamberi crudi comprare',
    buying: [
      'Il gambero si vende a numero per libbra (per es. «16/20» = 16–20 gamberi per libbra, circa 23–28 g l’uno crudi). Per una porzione principale cotta da 120 g, compra circa 160 g crudo sgusciato a persona; per il gambero come parte di una pasta o di un saltato, 100–120 g crudo ciascuno.',
      'Un sacchetto da 454 g (1 lb) di gamberi sgusciati crudi cuoce a circa 340 g — due-tre porzioni principali, o quattro-cinque come componente. Se il sacchetto è con guscio, aspettati che solo il 55–70% del peso del sacchetto sia commestibile prima della cottura.',
    ],
    mistakesHeading: 'Errori comuni nel registrare i gamberi',
    mistakes: [
      'Pesare gamberi con guscio e registrarli come sgusciati. Gusci e teste sono da un terzo a quasi la metà del peso crudo.',
      'Ignorare l’acqua aggiunta da fosfato/salamoia. Il gambero trattato può perdere più del 25% standard perché rilascia acqua trattenuta: il suo peso cotto risulta basso rispetto a una confezione «asciutta».',
      'Registrare gamberi surgelati precotti su una voce in crudo. Il gambero precotto ha già perso la sua acqua; registralo da una voce di gambero cotto, all’incirca al peso del sacchetto.',
    ],
  },

  // ── Cereali, pasta e legumi ──────────────────────────────────────────────

  'white-rice': {
    introHeading: 'Perché il riso bianco secco quasi triplica di peso in cottura',
    intro: [
      'Il riso bianco secco è circa l’80% amido e solo il 10–12% acqua — è stato raffinato e seccato proprio per conservarsi in dispensa. Cuocerlo è reidratarlo: i granuli di amido dentro ogni chicco assorbono acqua, si gonfiano e gelatinizzano, e il chicco quasi triplica di peso. La resa USDA per il riso bianco bollito è del 308%, quindi 100 g secchi diventano circa 308 g cotti.',
      'Nulla si perde — è l’opposto della carne. Il chicco secco guadagna tutta la differenza di peso dall’acqua di cottura che assorbe. Significa che le calorie e i macro della tua ciotola di riso cotto provengono tutti dal peso secco: circa 365 kcal, 7,1 g di proteine e 80 g di carboidrati per 100 g secco, ora distribuiti su tre volte i grammi.',
      'Quanta acqua assorbe dipende dal riso e dal metodo. Un pilaf sodo a chicchi separati sta più in basso; il riso cotto con acqua in più fino a morbido, o sciacquato e bollito in acqua abbondante, sta più in alto. Il riso parboiled («converted») e quello istantaneo assorbono ancora di più — intorno al 350–358% — perché il loro amido è pregelatinizzato.',
      'È l’alimento in cui più spesso si pesa cotto e si registra bene per caso, perché tante voci dei database di riso sono in peso cotto. Il pericolo è confonderle: registrare 200 g di riso cotto su una voce in secco «per 100 g» quasi triplica il tuo conteggio calorico.',
    ],
    methodHeading: 'Bollito vs. parboiled vs. istantaneo',
    method: [
      'Valori USDA per il riso bianco: bollito 308%, parboiled/converted 358%, istantaneo o precotto 350%.',
      'Cuoci 75 g di riso secco — una porzione singola molto comune — col metodo dell’assorbimento e ottieni circa 75 × 3,08 ≈ 231 g cotti. Gli stessi 75 g di riso parboiled rendono circa 75 × 3,58 ≈ 269 g, e il riso istantaneo circa 263 g, perché il loro amido precotto trattiene più acqua.',
      'Ognuna di queste ciotole porta i macro di 75 g secco: circa 274 kcal, 5,3 g di proteine, 60 g di carboidrati. Nell’altro verso, 250 g di riso bianco bollito sono 250 ÷ 3,08 ≈ 81 g secco. Usa il selettore del metodo del calcolatore se cuoci riso parboiled o istantaneo.',
    ],
    buyingHeading: 'Quanto riso secco cuocere',
    buying: [
      'Una porzione di contorno cotta standard è 150–200 g. A una resa del 308%, sono circa 50–65 g secco a persona. Una «tazza» di riso secco (circa 185 g) cuoce fino a circa 570 g — tre-quattro porzioni di contorno.',
      'Per il meal prep: cinque porzioni da 180 g cotti richiedono circa 900 g cotti, ovvero circa 290 g secco. Il riso si conserva 4–5 giorni cotto e refrigerato, e riscaldarlo da freddo non cambia il peso che hai registrato.',
    ],
    mistakesHeading: 'Errori comuni nel registrare il riso',
    mistakes: [
      'Registrare il peso del riso cotto su una voce in secco «per 100 g». 200 g cotti sono solo circa 65 g secco: la voce in secco triplicherebbe le tue calorie.',
      'Usare la resa del bollito normale per il riso parboiled o istantaneo. Questi assorbono più acqua (350–358%), quindi lo stesso peso secco fa più grammi cotti.',
      'Supporre che il riso integrale si comporti allo stesso modo. Il riso integrale rende circa il 335% e ha i suoi macro: la crusca cambia entrambe le cose.',
    ],
  },

  'brown-rice': {
    introHeading: 'Perché il riso integrale si espande ancora di più del bianco',
    intro: [
      'Il riso integrale è il chicco intero con crusca e germe ancora attaccati. Quegli strati esterni sono fibrosi e resistenti all’acqua, quindi il riso integrale impiega più tempo a cuocere e richiede più acqua — e finisce per assorbirne di più. La resa USDA è del 335%, più alta del 308% del riso bianco: 100 g secchi diventano circa 335 g cotti.',
      'Come per il riso bianco, l’aumento di peso è pura acqua assorbita e nulla si perde. Il chicco secco porta circa 370 kcal, 7,9 g di proteine, 77 g di carboidrati e 2,9 g di grassi per 100 g — il germe aggiunge il grasso e parte delle proteine — e tutto questo finisce nella ciotola cotta, solo diluito su più grammi.',
      'Lo strato di crusca è anche il motivo per cui il riso integrale resta più al dente e i chicchi più separati: limita fisicamente quanto l’amido può gonfiarsi e gelatinizzare, quindi raramente si ottiene la consistenza collosa da sovra-assorbimento che spinge in alto le rese del riso bianco. Il compromesso è una cottura di 40–50 minuti invece di 15.',
      'Per il conteggio, il punto chiave è che riso integrale e bianco non sono voci intercambiabili — resa diversa, macro diversi. Registrare una ciotola di riso integrale come bianco sottostima fibra e grassi e sbaglia la porzione.',
    ],
    methodHeading: 'Un esempio svolto: riso integrale, dal secco al cotto',
    method: [
      'Il sito usa un’unica resa del 335% per il riso integrale (Manuale di agricoltura n. 102 dell’USDA), per la bollitura o il metodo dell’assorbimento.',
      'Cuoci 75 g di riso integrale secco e ottieni circa 75 × 3,35 ≈ 251 g cotti. Cuoci una «tazza» (circa 190 g secco) e ottieni circa 637 g cotti — circa quattro porzioni da 160 g.',
      'Quei 75 g secco sono circa 278 kcal, 5,9 g di proteine, 58 g di carboidrati e 2,2 g di grassi, e questi numeri non cambiano quando diventano 251 g cotti. A ritroso, 250 g di riso integrale cotto sono 250 ÷ 3,35 ≈ 75 g secco.',
    ],
    buyingHeading: 'Quanto riso integrale secco cuocere',
    buying: [
      'Una porzione di contorno cotta da 160–200 g equivale a circa 48–60 g secco a persona a una resa del 335% — un po’ meno riso secco del bianco per la stessa porzione cotta, perché l’integrale si espande di più.',
      'Per cinque porzioni di meal prep da 180 g cotti (900 g totali), cuoci circa 270 g secco. Il riso integrale si riscalda e si congela bene, e il peso cotto registrato regge alla conservazione.',
    ],
    mistakesHeading: 'Errori comuni nel registrare il riso integrale',
    mistakes: [
      'Registrarlo come riso bianco. Resa diversa (335% contro 308%) e macro diversi — perderesti il grasso e sottostimeresti la fibra.',
      'Registrare il peso cotto su una voce in secco. 200 g di riso integrale cotto sono solo circa 60 g secco.',
      'Supporre che «riso selvaggio» o «basmati integrale» corrispondano esattamente a questa voce. Cuociono e assorbono in modo diverso: usa la voce specifica più vicina che trovi.',
    ],
  },

  'pasta': {
    introHeading: 'Perché la pasta secca poco più che raddoppia in cottura',
    intro: [
      'La pasta secca è semola di grano duro e acqua, estrusa e seccata dura. È più densa e più povera di amido superficiale del riso, e si cuoce in acqua abbondante invece di assorbirne una quantità misurata, quindi ne cattura proporzionalmente meno: la resa qui è del 225%, cioè 100 g secchi diventano circa 225 g cotti a una cottura normale, appena oltre l’al dente.',
      'L’aumento di peso è acqua di cottura assorbita e — come per tutti i cereali — nulla si perde, quindi i macro restano legati al peso secco: circa 371 kcal, 13 g di proteine e 75 g di carboidrati per 100 g secco, ora portati in 225 g di pasta cotta. La pasta cotta risulta quindi circa 160 kcal per 100 g contro 371 secca.',
      'La cottura è tutto per la resa della pasta. Scolata al dente sodo, la pasta sta più vicina al 200%; cotta morbida, o tenuta nel sugo e lasciata riposare, continua ad assorbire e supera il 240%. La pasta fresca all’uovo è ancora un’altra cosa — parte con più umidità e ne guadagna meno.',
      'Anche il formato conta. La pasta lunga e sottile e i formati piccoli assorbono più in fretta e in modo più uniforme; i rigatoni spessi o le conchiglie grandi stanno più in basso. Questa voce è una media generica di pasta secca; la pasta lunga come gli spaghetti è più alta.',
    ],
    methodHeading: 'Un esempio svolto: al dente vs. ben cotta',
    method: [
      'Il sito usa un’unica resa del 225% per la pasta secca generica (USDA FoodData Central, crudo vs. cotto). Considera l’al dente sodo come circa il 200% e la pasta morbida o tenuta nel sugo come 240% o più.',
      'Una porzione secca da 57 g (2 oz) — la porzione standard della scatola — cuoce fino a circa 57 × 2,25 ≈ 128 g. Una porzione secca da 85 g (un primo più realistico) rende circa 191 g cotti. Cuoci gli stessi 85 g morbidi e possono arrivare a 205–215 g.',
      'I macro seguono comunque il peso secco: 85 g secchi sono circa 315 kcal, 11 g di proteine, 64 g di carboidrati. A ritroso, 250 g di pasta cotta sono 250 ÷ 2,25 ≈ 111 g secca — da verificare, perché una «porzione» da ristorante di pasta cotta è spesso 300–400 g, cioè 130–180 g secca.',
    ],
    buyingHeading: 'Quanta pasta secca cuocere',
    buying: [
      'La scatola indica 57 g (2 oz) secca a persona; è un contorno leggero. Un primo soddisfacente è 85–100 g secca, che cuociono fino a circa 190–225 g. Una confezione da 500 g sazia circa cinque persone come primo o otto come contorno.',
      'Per il meal prep, cuoci la pasta un filo più soda — continua ad assorbire sugo e umidità in frigo, e partire dall’al dente tiene la porzione riscaldata più vicina al peso registrato.',
    ],
    mistakesHeading: 'Errori comuni nel registrare la pasta',
    mistakes: [
      'Registrare la pasta cotta su una voce in secco «per 100 g». 250 g cotti sono solo circa 110 g secca: la voce in secco più che raddoppierebbe le tue calorie.',
      'Usare una sola resa per ogni grado di cottura. L’al dente (~200%) e la morbida (~240%) differiscono abbastanza da contare su una porzione grande.',
      'Pesare la pasta dopo che è rimasta nel sugo. Ha assorbito peso di sugo e più acqua; pesa la pasta scolata e registra il sugo a parte.',
    ],
  },

  'quinoa': {
    introHeading: 'Perché la quinoa si espande a circa 3× il peso secco',
    intro: [
      'La quinoa è un piccolo seme di pseudocereale — botanicamente non è un chicco di graminacea, anche se si cuoce come tale. Ogni seme è denso di amido ma porta anche più proteine (14,1 g per 100 g secco) e grassi (6,1 g) del riso, oltre a un anello esterno di germe che si srotola in quella piccola «codina» bianca che vedi nella quinoa cotta. Assorbe acqua prontamente e segna una resa del 314%: 100 g secchi diventano circa 314 g cotti.',
      'Come tutti i cereali e legumi qui, la quinoa guadagna peso invece di perderlo, e il guadagno è interamente acqua di cottura assorbita. I macro appartengono al seme secco e sono semplicemente distribuiti più fini una volta cotti: la quinoa cotta si aggira sulle 117 kcal per 100 g contro 368 secca.',
      'La quinoa si cuoce di solito per assorbimento in un rapporto fisso (circa 1 parte di seme per 1,75–2 di acqua), quindi la sua resa è piuttosto stabile rispetto ai cereali da bollire e scolare. Tostare il seme secco prima o sciacquare il suo rivestimento amaro di saponina cambia più il sapore che la resa.',
      'Per chi conta i macro, l’interesse della quinoa è il profilo proteine più fibra, quindi azzeccare la porzione conta. I suoi macro da secca sono vicini a quelli del riso per calorie ma molto diversi per proteine e grassi: non scambiare le voci.',
    ],
    methodHeading: 'Un esempio svolto: quinoa, dal secco al cotto',
    method: [
      'Il sito usa un’unica resa del 314% per la quinoa (USDA FoodData Central, calcolata dai rapporti di nutrienti crudo vs. cotto), per il metodo dell’assorbimento standard.',
      'Cuoci 90 g di quinoa secca — una porzione singola generosa — e ottieni circa 90 × 3,14 ≈ 283 g cotti. Una «tazza» di quinoa secca (circa 170 g) rende circa 534 g cotti, o tre-quattro porzioni.',
      'Quei 90 g secchi sono circa 331 kcal, 12,7 g di proteine, 58 g di carboidrati e 5,5 g di grassi, e niente di questo cambia quando diventano 283 g cotti. A ritroso, 250 g di quinoa cotta sono 250 ÷ 3,14 ≈ 80 g secca.',
    ],
    buyingHeading: 'Quanta quinoa secca cuocere',
    buying: [
      'Una porzione cotta da 180–220 g equivale a circa 57–70 g secca a persona. Per un’insalata in cui la quinoa è la base, punta all’estremo alto; come contorno accanto a una proteina, 50–60 g secca bastano.',
      'Per cinque ciotole di meal prep da 200 g cotti (1 kg totale), cuoci circa 320 g di quinoa secca. Tiene la consistenza in frigo meglio del riso e non va riscaldata per le ciotole di cereali fredde.',
    ],
    mistakesHeading: 'Errori comuni nel registrare la quinoa',
    mistakes: [
      'Registrare la quinoa cotta su una voce in secco. 250 g cotti sono solo circa 80 g secca: un errore calorico di circa il triplo.',
      'Scambiare le voci quinoa e riso perché «sono entrambi cereali». La quinoa ha quasi il doppio delle proteine e molto più grasso per grammo secco.',
      'Pesare la quinoa in un’insalata condita e registrarla come semplice. Il condimento e ogni olio aggiunto sono a parte: pesa la quinoa cotta semplice prima di incorporarla.',
    ],
  },

  'lentils': {
    introHeading: 'Perché le lenticchie secche quasi triplicano di peso in cottura',
    intro: [
      'Le lenticchie secche sono circa l’11–12% acqua, 60 g di carboidrati e notevoli 25,8 g di proteine per 100 g — l’alimento integrale più proteico di questo elenco dopo la soia. Cuociono assorbendo acqua nella loro matrice di amido e proteina e gonfiandosi, senza ammollo strettamente necessario perché sono piccole e a buccia sottile. La resa USDA per lenticchie bollite o cotte al forno fino a ben morbide è del 289%: 100 g secchi diventano circa 289 g cotti.',
      'Nulla si perde; la differenza di peso è interamente liquido di cottura assorbito. Quindi le proteine e i carboidrati della tua ciotola di dal o zuppa di lenticchie provengono interamente dal peso secco — circa 353 kcal, 25,8 g di proteine e 60 g di carboidrati per 100 g secco, diluiti su quasi tre volte i grammi cotti.',
      'Il tipo di lenticchia e il grado di cottura fanno oscillare il risultato. Le lenticchie rosse e gialle decorticate collassano in purè e assorbono molto; le lenticchie verdi sode o di Puy cotte brevemente restano intere e assorbono meno. L’USDA nota che le lenticchie sobbollite solo 20 minuti si assestano al 261%, contro il 289% quando bollite o cotte al forno fino a ben morbide — una differenza reale se le vuoi al dente.',
      'Le lenticchie in scatola sono già cotte e vicine a quel peso pienamente idratato; scolata, una lattina da 400 g dà circa 240 g, equivalenti a circa 85 g secco.',
    ],
    methodHeading: 'Ben cotte vs. sobbollite 20 minuti',
    method: [
      'Valori USDA per le lenticchie: bollite o cotte al forno fino a ben morbide 289%, sobbollite 20 minuti 261%.',
      'Cuoci 100 g di lenticchie secche fino a ben morbide per un dal e ottieni circa 289 g. Sobbolli gli stessi 100 g solo 20 minuti per una lenticchia soda da insalata e ottieni circa 261 g — 28 g in meno dallo stesso punto di partenza, perché sono meno idratate.',
      'Entrambe portano i macro di 100 g secco: circa 353 kcal, 25,8 g di proteine, 60 g di carboidrati. A ritroso, 200 g di lenticchie morbide cotte sono 200 ÷ 2,89 ≈ 69 g secco. Per una lattina scolata, dividi il peso scolato per circa 2,85.',
    ],
    buyingHeading: 'Quante lenticchie secche cuocere',
    buying: [
      'Una porzione cotta sostanziosa in uno stufato o un dal è 200–250 g, cioè circa 70–85 g secco a persona. Come contorno, 50 g secco bastano.',
      'Una «tazza» di lenticchie secche (circa 190 g) cuoce fino a circa 550 g — tre-quattro porzioni. Per cinque porzioni di meal prep da 220 g cotti (1,1 kg), cuoci circa 380 g secco.',
    ],
    mistakesHeading: 'Errori comuni nel registrare le lenticchie',
    mistakes: [
      'Registrare lenticchie cotte o in scatola su una voce in secco «per 100 g». 200 g cotti sono solo circa 70 g secco.',
      'Usare la resa delle ben morbide (289%) per lenticchie sode sobbollite brevemente (261%) o viceversa. Adatta al grado di cottura che hai davvero fatto.',
      'Trattare una lattina scolata come il suo intero peso d’etichetta in equivalente secco. Una lattina da 400 g si scola a ~240 g, circa 85 g secco.',
    ],
  },

  'black-beans': {
    introHeading: 'Perché i fagioli neri secchi si gonfiano a circa 2,5× in cottura',
    intro: [
      'I fagioli neri secchi sono semi duri e a bassa umidità — circa il 12% acqua, 62 g di carboidrati e 21,6 g di proteine per 100 g — con una buccia spessa e cerosa fatta per tenere fuori l’acqua finché il fagiolo non germina. Cuocerli è un ammollo in due fasi: assorbono acqua durante l’ammollo, poi ne assorbono di più e gelatinizzano l’amido durante la bollitura. La resa derivata dall’USDA è del 250%, quindi 100 g secchi diventano circa 250 g cotti — un multiplo più basso di quello delle lenticchie perché quella buccia dura limita il rigonfiamento.',
      'L’aumento di peso è interamente acqua assorbita; nulla sfugge tranne un po’ di colore e parte degli oligosaccaridi che causano gas. I macro restano col peso secco: circa 341 kcal, 21,6 g di proteine e 62 g di carboidrati per 100 g secco, ora distribuiti su 2,5× i grammi cotti, quindi i fagioli neri cotti si aggirano sulle 130–135 kcal per 100 g.',
      'L’ammollo, l’età del fagiolo e l’acqua dura spostano il numero. Fagioli vecchi e acqua dura ricca di minerali resistono all’idratazione e rendono un po’ meno; un ammollo lungo e un pizzico di bicarbonato spingono l’assorbimento in alto. I fagioli «a cottura rapida» non ammollati tendono a stare più in basso e a cuocere in modo irregolare.',
      'I fagioli neri in scatola sono pienamente cotti e vicini a questo peso idratato — una lattina da 400 g si scola a circa 240–260 g, equivalenti a circa 100 g secco.',
    ],
    methodHeading: 'Un esempio svolto: fagioli secchi e fagioli in scatola',
    method: [
      'Il sito usa un’unica resa del 250% per i fagioli neri (USDA FoodData Central, calcolata dai rapporti di nutrienti crudo vs. cotto).',
      'Cuoci 100 g di fagioli neri secchi (ammollati, poi bolliti fino a teneri) e ottieni circa 250 g di fagioli cotti e scolati. Una «tazza» di fagioli secchi (circa 190 g) rende circa 475 g cotti — quasi 3 tazze.',
      'Quei 100 g secchi sono circa 341 kcal, 21,6 g di proteine, 62 g di carboidrati. A ritroso, 250 g di fagioli cotti in casa sono 250 ÷ 2,5 = 100 g secco; una lattina da 400 g scolata a 250 g sono anch’essi circa 100 g di equivalente secco. Se l’etichetta della tua lattina dà i macro in peso cotto, è la cosa più semplice da registrare direttamente.',
    ],
    buyingHeading: 'Quanti fagioli neri secchi cuocere',
    buying: [
      'Una porzione cotta come contorno o in una ciotola è 130–160 g, circa 55–65 g secco a persona. Una lattina da 400 g (≈240 g scolati) serve due-tre persone.',
      'Un sacchetto da 454 g (1 lb) di fagioli secchi cuoce fino a circa 1,1 kg — circa sette-otto porzioni, o l’equivalente di quattro lattine e mezza, a una frazione del costo. Per cinque porzioni di meal prep da 150 g cotti, cuoci circa 300 g secco.',
    ],
    mistakesHeading: 'Errori comuni nel registrare i fagioli neri',
    mistakes: [
      'Registrare fagioli cotti o in scatola su una voce in secco «per 100 g». 250 g cotti sono 100 g secco: la voce in secco moltiplicherebbe le tue calorie per circa 2,5.',
      'Registrare i fagioli in scatola senza scolarli. Il liquido (aquafaba) aggiunge peso e un po’ di sodio; scola e, idealmente, sciacqua prima di pesare.',
      'Supporre che tutti i fagioli condividano una resa. I fagioli neri si aggirano sul 250%; le lenticchie sono al 289% e i fagioli rossi intorno al 238% — vicini, ma non identici.',
    ],
  },

  // ── Verdure ──────────────────────────────────────────────────────────────

  'broccoli': {
    introHeading: 'Perché i broccoli bolliti escono pesando quasi esattamente lo stesso',
    intro: [
      'I broccoli sono circa l’89% acqua, trattenuta in pareti cellulari piuttosto rigide e con molta superficie — tutte quelle cimette e il gambo. Quando li bolli, due cose opposte accadono e più o meno si annullano: un po’ d’acqua cellulare si perde mentre le pareti si ammorbidiscono e il tessuto collassa, ma le cimette intrappolano e assorbono anche acqua bollente nelle fessure e nelle superfici di taglio. La resa netta USDA dei broccoli bolliti è del 100% — nessun cambiamento di peso misurabile.',
      'Questo rende i broccoli quasi unici in questo sito: peso crudo e cotto sono intercambiabili per il conteggio, quindi una porzione da 100 g cruda resta ~100 g cotta e porta le stesse 34 kcal, 2,8 g di proteine e 6,6 g di carboidrati. I nutrienti che cambiano — la vitamina C che passa nell’acqua di cottura, per esempio — non influenzano i macro né il peso.',
      'Il metodo inclina un po’ la bilancia. Al vapore, senza bagno da cui assorbire, si ferma un po’ sotto, al 95%. In pentola a pressione l’acqua è forzata nel tessuto e sale un po’ sopra, al 104%. Arrosto, che questo dataset non valuta, espellerebbe acqua vera e si assesterebbe molto più in basso.',
      'La conclusione pratica: se bolli o cuoci al vapore i tuoi broccoli, puoi pesarli quando ti è comodo e il numero regge.',
    ],
    methodHeading: 'Bolliti vs. al vapore vs. pentola a pressione',
    method: [
      'Valori USDA per metodo per i broccoli: bolliti 100%, al vapore 95%, pentola a pressione 104%.',
      'Prendi 150 g di cimette di broccoli crude. Bollite, escono a circa 150 g cotte. Al vapore, più vicino a 150 × 0,95 ≈ 143 g, perché non c’è acqua di bagno da captare. In pentola a pressione, circa 150 × 1,04 = 156 g mentre il tessuto viene riempito d’acqua a forza.',
      'Le tre portano i macro di 150 g crudo: circa 51 kcal, 4,2 g di proteine e 9,9 g di carboidrati. Poiché la forbice è così piccola, registrare il peso dei broccoli crudi per una porzione bollita o al vapore è esatto a meno di un errore di arrotondamento — il calcolatore conta qui soprattutto per i broccoli arrosto, che non sono in questo dataset e perdono molto di più.',
    ],
    buyingHeading: 'Quanti broccoli crudi comprare',
    buying: [
      'Una porzione di verdura cotta è circa 80–120 g. Poiché la resa è ~100%, è praticamente lo stesso peso crudo: compra 100–120 g di cimette a persona.',
      'Una testa intera di broccoli è 300–500 g, di cui la corona è circa il 60–70% e il gambo il resto (commestibile se pelato). Una testa grande serve tre-quattro persone come contorno. I broccoli surgelati sono pre-sbollentati e si comportano allo stesso modo sulla bilancia.',
    ],
    mistakesHeading: 'Errori comuni nel registrare i broccoli',
    mistakes: [
      'Supporre che i broccoli bolliti si restringano come altre verdure a foglia e registrare la porzione in difetto. Non lo fanno — la resa è circa il 100%.',
      'Applicare la resa del bollito/vapore ai broccoli arrosto. Arrostire espelle acqua sostanziale; una porzione arrosto può pesare il 30–50% in meno del crudo, e questo dataset non lo copre.',
      'Pesare i broccoli con burro, olio o salsa al formaggio aggiunti. Registra la verdura cotta semplice e il grasso a parte.',
    ],
  },

  'spinach': {
    introHeading: 'Perché gli spinaci perdono a malapena peso anche se la padella sembra vuota',
    intro: [
      'Gli spinaci sono l’alimento più mal giudicato di questo sito. Una grande padella di foglie crude appassisce fino a poche forchettate, quindi sembra che abbiano perso quasi tutto il peso. Non è così: la resa USDA degli spinaci bolliti è del 77%, una perdita di solo circa il 23%. 100 g di foglie crude sono ancora circa 77 g cotte.',
      'Il motivo è che volume e peso sono due cose diverse. Le foglie di spinaci crude sono per lo più aria e struttura rigida — sottili lamine di tessuto che mantengono la forma, con molto spazio tra loro. Il calore distrugge quella struttura quasi istantaneamente: le pareti cellulari si afflosciano, le foglie collassano l’una contro l’altra e tutta l’aria viene espulsa. Il volume crolla. Ma l’acqua dentro le cellule è ancora lì in gran parte, e l’acqua è ciò che pesa qualcosa.',
      'Le foglie perdono il volume molto prima della massa. Un po’ d’acqua cellulare cuoce davvero via — è il 23% — ma il restringimento drammatico che vedi è aria e geometria, non peso.',
      'Il metodo conta più per gli spinaci che per quasi ogni altra verdura. Al vapore li tiene al 93%; la bollitura li scende al 77%; la pentola a pressione li porta al 68% mentre il calore forzato espelle più acqua cellulare.',
    ],
    methodHeading: 'Al vapore vs. bolliti vs. pentola a pressione',
    method: [
      'Valori USDA per metodo per gli spinaci: al vapore 93%, bolliti 77%, pentola a pressione 68%.',
      'Parti da 200 g di spinaci crudi — un grande sacchetto, forse 4–5 litri di foglie sfuse. Al vapore, escono a circa 200 × 0,93 = 186 g. Bolliti e strizzati, circa 200 × 0,77 = 154 g. In pentola a pressione, circa 200 × 0,68 = 136 g. Tutto entra in una piccola ciotola qualunque sia il metodo.',
      'Ogni porzione porta i macro di 200 g crudo: circa 46 kcal, 5,8 g di proteine e 7,2 g di carboidrati. A ritroso, 100 g di spinaci bolliti cotti provenivano da 100 ÷ 0,77 ≈ 130 g crudo — quindi una «piccola manciata» di spinaci cotti può rappresentare una porzione di foglie davvero grande.',
    ],
    buyingHeading: 'Quanti spinaci crudi comprare',
    buying: [
      'Gli spinaci crudi da cuocere collassano così tanto che le porzioni sembrano minuscole — conta 150–200 g crudi a persona per un contorno cotto, che rende solo circa 115–155 g cotti ma rappresenta una grande porzione nutrizionale.',
      'Un sacchetto «famiglia» da 200 g serve generosamente una persona come contorno cotto o modestamente due. Per un piatto ricco di spinaci come un saag o un ripieno, compra 250–300 g crudi a persona. Gli spinaci tritati surgelati sono già sbollentati e scolati — un blocco da 250 g equivale a circa 700–800 g di foglie crude.',
    ],
    mistakesHeading: 'Errori comuni nel registrare gli spinaci',
    mistakes: [
      'Supporre una perdita di peso di ~70% perché la padella sembra vuota. La perdita reale è circa il 23%; il gioco di prestigio è volume, non peso.',
      'Usare la resa del bollito (77%) per gli spinaci al vapore (93%) — è un errore di 16 punti, più grande di quello della maggior parte degli alimenti.',
      'Registrare spinaci cotti strizzati e scolati e poi non considerare l’acqua che hai spremuto. Se li hai strizzati forte, pesa ciò che resta e trattalo come un equivalente in crudo più basso.',
    ],
  },

  'potato': {
    introHeading: 'Perché una patata lessa si restringe a malapena ma le patatine fritte perdono quasi metà',
    intro: [
      'Una patata cruda è circa il 79% acqua rinchiusa in una struttura di amido densa e uniforme con una buccia sottile. Lessata o al vapore, quella struttura trattiene l’acqua notevolmente bene — la buccia e l’amido che gelatinizza fanno entrambi da barriera — quindi una patata lessa mantiene circa il 94% del peso e una al vapore circa il 99%. Si perde solo un po’ d’acqua superficiale.',
      'I macro sono modesti e dominati dai carboidrati: circa 77 kcal, 2 g di proteine e 17,5 g di carboidrati per 100 g crudo. Poiché la lessatura perde così poco, peso crudo e cotto sono abbastanza vicini da registrare una porzione di patata lessa in entrambi i modi senza grande errore.',
      'Ciò che cambia tutto è il calore secco e grasso. Cuocere al forno una patata con la buccia unta scende la resa all’81%; friggere in immersione per le patatine la crolla a circa il 55%, e le patate rösti a circa il 60%. Friggere fa due cose insieme — fa evaporare una grande frazione dell’acqua e ne sostituisce una parte con olio assorbito, quindi una patatina fritta è al tempo stesso più leggera della patata cruda e molto più densa di calorie, un doppio colpo che i macro della patata cruda ignorano del tutto.',
      'Quindi il metodo di cottura non è un dettaglio di arrotondamento per la patata; è la differenza tra una resa del 94% e una del 55%, e tra «solo una patata» e «una patata più molto olio».',
    ],
    methodHeading: 'Lessa vs. al forno vs. fritta',
    method: [
      'Valori USDA per metodo per la patata: al vapore 99%, al forno in alluminio 95%, lessa 94%, al forno con buccia unta 81%, rösti 60%, fritta 55%.',
      'Prendi una patata da 200 g cruda. Lessa, circa 200 × 0,94 = 188 g. Al forno con la buccia unta, circa 200 × 0,81 = 162 g. Trasformata in patatine fritte, circa 200 × 0,55 = 110 g — più l’olio che ha assorbito, che il valore di resa non include.',
      'I macro crudi di quella patata da 200 g sono circa 154 kcal, 4 g di proteine, 35 g di carboidrati. Valgono per le versioni lessa e al forno. Per le patatine fritte, il contributo della patata è giusto ma devi aggiungere l’olio di frittura a parte — di solito 5–10 g di grassi per 100 g di patatine finite — o il log sottostimerà parecchio le calorie.',
    ],
    buyingHeading: 'Quanta patata cruda comprare',
    buying: [
      'Una porzione di contorno è 150–250 g cruda. Per il purè, compra circa 200–250 g cruda a persona (perde un po’ nella lessatura, poi aggiungi latte e burro a parte). Per una patata al forno, una da 200–300 g a persona.',
      'Un sacco da 2 kg di patate sono circa otto-dieci patate medie — contorni per la cena di una famiglia per diverse sere. Per le patatine fritte, ricorda che perdi quasi metà del peso: 1 kg di patata cruda fa solo circa 550 g di patatine.',
    ],
    mistakesHeading: 'Errori comuni nel registrare la patata',
    mistakes: [
      'Usare la resa della lessa (94%) per patate arrosto all’olio o patatine fritte. La patata arrosto all’olio si aggira sull’81% e le patatine sul 55% — e entrambe hanno olio aggiunto in più.',
      'Registrare le patatine fritte come «patata» senza grassi aggiunti. L’olio è spesso un terzo o più delle calorie di una porzione di patatine.',
      'Pesare il purè e registrarlo come patata semplice. Il purè include latte, burro o panna — pesa la patata prima di schiacciarla, o registra le aggiunte a parte.',
    ],
  },

  'sweet-potato': {
    introHeading: 'Perché la patata dolce al forno perde peso ma la patata dolce lessa lo guadagna',
    intro: [
      'La patata dolce è più umida e più zuccherina di una patata comune — circa il 77% acqua, 20 g di carboidrati per 100 g crudo, una buona parte come zuccheri, più fibra solubile. Questa composizione la fa comportare in modo diverso a seconda che il calore la stia asciugando o l’acqua la stia impregnando.',
      'Al forno, una patata dolce perde circa il 22% del peso — una resa del 78%. Il calore secco del forno evapora acqua in superficie e vicino, gli zuccheri si concentrano e caramellano (quell’esterno appiccicoso e dolce), e la polpa diventa più densa. Ecco perché una patata dolce al forno sa molto più dolce di una lessa: stesso zucchero, meno acqua.',
      'Lessa, va nel verso opposto e in effetti guadagna peso — una resa del 101% — perché la polpa assorbe una parte dell’acqua di cottura, un po’ più di quanta ne perde. Al vapore si ferma appena sotto, al 98%. Quindi la stessa patata dolce cruda può uscire più pesante o più leggera di come è partita a seconda del metodo.',
      'Per il conteggio, significa che la scelta del metodo inverte il segno della correzione: cuoci al forno e registri meno del peso crudo, lessa e registri un po’ di più.',
    ],
    methodHeading: 'Al forno vs. lessa vs. al vapore',
    method: [
      'Valori USDA per metodo per la patata dolce: lessa 101%, al vapore 98%, al forno 78%.',
      'Prendi una patata dolce da 150 g cruda. Al forno, esce a circa 150 × 0,78 ≈ 117 g — nettamente più piccola e densa. Lessa, circa 150 × 1,01 ≈ 152 g. Al vapore, circa 150 × 0,98 = 147 g.',
      'Tutte portano i macro di 150 g crudo: circa 129 kcal, 2,4 g di proteine e 30 g di carboidrati. Quindi una patata dolce al forno da 117 g e una lessa da 152 g da patate crude identiche hanno le stesse calorie — quella al forno sembra solo più concentrata. A ritroso: una porzione al forno da 120 g è 120 ÷ 0,78 ≈ 154 g crudo.',
    ],
    buyingHeading: 'Quanta patata dolce cruda comprare',
    buying: [
      'Una porzione di contorno è 150–200 g cruda. Per la patata dolce al forno, compra una da 200–250 g a persona, sapendo che cuocerà fino a circa 155–195 g. Per il purè o i cubetti lessi, 150–200 g cruda ciascuno bastano, dato che il peso cala a malapena.',
      'Le patate dolci variano moltissimo di dimensione — una «media» va da 130 g a 250 g — quindi pesa invece di contare. Un lotto da 1 kg al forno rende circa 780 g di polpa cotta (un po’ meno una volta scartata la buccia).',
    ],
    mistakesHeading: 'Errori comuni nel registrare la patata dolce',
    mistakes: [
      'Supporre che si comporti come una patata comune. La patata dolce al forno perde circa il 22% (resa del 78%); la patata comune al forno in alluminio perde solo circa il 5%.',
      'Usare la resa del forno per la patata dolce lessa. Lessa, guadagna un po’ di peso (101%), quindi convertire con il 78% sottostimerebbe parecchio la tua porzione.',
      'Registrare patatine di patata dolce o patata dolce candita come semplici. Le patatine portano olio assorbito; le versioni candite aggiungono burro e zucchero — registrale a parte.',
    ],
  },
};
