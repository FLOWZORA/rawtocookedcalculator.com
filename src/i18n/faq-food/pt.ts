/**
 * Portuguese per-food FAQ. Full translation of `FOOD_FAQ_EN_BY_ID`; every
 * figure is kept identical.
 */
import type { FaqItem } from '../faq';

export const FOOD_FAQ_PT_BY_ID: Record<string, FaqItem[]> = {
  'chicken-breast': [
    {
      q: 'Marinar o frango muda o rendimento cozido?',
      a: 'Uma marinada de óleo e ácido quase não muda — um ponto ou dois no máximo. Uma salmoura ou uma marinada pesada de sal e açúcar é diferente: a carne absorve água antes, então parte mais pesada e pode perder um pouco mais que os 28% habituais enquanto essa água adicionada evapora. Pese o peito antes de ele ir para a marinada para o número mais limpo.',
    },
    {
      q: 'Por que meu peito de frango perdeu mais de 28%?',
      a: 'Normalmente cozimento excessivo. Acima de 74 °C no interior, cada minuto extra expulsa mais água e pode levar a perda a 35% ou mais. Filés finos e sassami pequenos também perdem uma fração maior que um peito inteiro e grosso porque têm mais superfície. Grelhar sobre chama direta custa alguns pontos em relação a assar.',
    },
    {
      q: 'O rendimento é diferente para os filezinhos de frango ou peito em cubos?',
      a: 'Um pouco menor. Filezinhos e cubos expõem mais superfície ao calor por grama, então secam um pouco mais rápido que um peito inteiro — espere cerca de 68–70% em vez de 72% na frigideira. Os macros por grama são os mesmos do peito; só a perda de água difere.',
    },
    {
      q: 'Como registro o peito de frango se cozinhei um lote grande e porcionei depois?',
      a: 'Pese o lote inteiro cru e anote. Depois de cozinhar, pese o lote cozido inteiro e depois cada porção. O equivalente em cru de cada porção é (peso cozido da porção ÷ peso cozido total) × peso cru total. Ou pese uma porção cozida e divida por 0,72 para um lote assado.',
    },
    {
      q: 'O rendimento de 72% inclui os sucos que ficam na panela?',
      a: 'Não. O rendimento é o peso da carne cozida e escorrida como fração do peso cru. Os sucos e a gordura derretida que ficam na panela são parte dos ~28% que deixaram a carne. Se você faz um molho com esses sucos e o come, a perda de proteína é desprezível mas você recupera um pouco de gordura.',
    },
  ],

  'chicken-thigh': [
    {
      q: 'Por que a coxa de frango perde mais peso que o peito?',
      a: 'A coxa é carne escura com mais gordura intramuscular (cerca de 4,6 g por 100 g cru contra 2,6 g do peito) e mais tecido conjuntivo. Ao cozinhar, a água é expulsa como de costume e a gordura extra também derrete e escorre, então a perda total é maior — um rendimento assado de 69% contra 72% do peito.',
    },
    {
      q: 'O rendimento da coxa com osso e pele é o mesmo da desossada e sem pele?',
      a: 'Não. O número de 69% é só para a carne desossada e sem pele. Uma coxa com osso e pele é 25–35% osso e pele em peso, e a pele é quase toda gordura. Pese a carne que você realmente come depois de tirá-la do osso e converta isso.',
    },
    {
      q: 'Por que o rendimento do empanado frito (80%) é maior que o assado?',
      a: 'Porque o empanado e o óleo absorvido acrescentam peso que nunca foi frango. A carne magra da coxa por dentro ainda perdeu água — o número parece alto só por causa da cobertura. Não use os 80% para calcular de volta os macros do frango puro; essa porção tem muito mais gordura e carboidratos.',
    },
    {
      q: 'Qual rendimento por método devo usar para um curry ou ensopado de coxa?',
      a: 'O número do refogado, 73%. Coxas cozidas em molho estão cercadas de líquido, então retêm mais peso que qualquer método de calor seco. Uma coxa de 150 g crua sai a cerca de 110 g no curry.',
    },
    {
      q: 'As coxas desossadas da loja vêm sem gordura?',
      a: 'Em parte. A maioria das coxas desossadas e sem pele do varejo ainda carrega bolsas de gordura visíveis que muita gente apara antes ou depois de cozinhar. Se você apara gordura significativa, registre um equivalente em cru um pouco menor que o peso completo da coxa, já que você não come tudo.',
    },
  ],

  'ground-beef-80-20': [
    {
      q: 'Devo registrar a carne moída pelo peso cru ou pelo peso cozido escorrido?',
      a: 'O peso cru é a opção consistente e corresponde ao rótulo do USDA. O peso cozido escorrido não é confiável porque depende de quanta gordura você escorreu. Se quiser registrar cozido, use uma entrada de banco de dados de carne moída cozida, não uma em cru — a carne esfarelada é muito mais densa em calorias por grama.',
    },
    {
      q: 'Se eu escorrer a gordura, ainda estou comendo todas as calorias dos macros crus?',
      a: 'Não. Com a 80/20, uma fração significativa desses 20% de gordura derrete e é escorrida, então sua ingestão real fica um pouco abaixo da conversão a partir do peso cru. A diferença é a gordura na panela. A 93/7 mais magra perde muito pouca gordura, então sua conversão a partir do cru é quase exata.',
    },
    {
      q: 'Por que a 80/20 encolhe mais que a 93/7?',
      a: 'A gordura. A 80/20 tem 20 g de gordura por 100 g cru e boa parte derrete e escorre; a 93/7 tem só 7 g, então há bem menos a perder. É por isso que a 80/20 rende cerca de 73% dourada na frigideira e a 93/7 retém cerca de 77%.',
    },
    {
      q: 'Quanta carne cozida faz uma libra de carne moída crua?',
      a: 'Cerca de 331 g (11,7 oz) de carne esfarelada escorrida para a 80/20 dourada na frigideira, ou cerca de 350 g para a 93/7. Na grelha sob a resistência perde-se um pouco mais. Isso é suficiente para alimentar quatro pessoas em tacos ou num molho de carne.',
    },
    {
      q: 'Dourar a carne para um molho (sem escorrer) muda como eu a registro?',
      a: 'Se você mantém toda a gordura e os sucos na panela e os come no molho, então os macros crus são exatos — nada foi descartado. Escorrer é o que faz a conversão a partir do cru superestimar a sua gordura.',
    },
  ],

  'ground-beef-93-7': [
    {
      q: 'A conversão de macros a partir do peso cru é exata para a 93/7, ou a gordura escorre como na 80/20?',
      a: 'É exata. A 93/7 tem só cerca de 7 g de gordura por 100 g cru e muito pouco derrete, então a carne esfarelada mantém quase tudo. Converter sua porção cozida de volta para o peso cru dá uma leitura confiável de calorias e gordura — ao contrário da 80/20, em que muita gordura termina na panela.',
    },
    {
      q: 'Por que a carne moída magra sai seca?',
      a: 'Há pouca gordura para manter a carne úmida, então em fogo alto ela vai de suculenta a seca rápido, e o rendimento escorrega de 77% para a casa dos 70 baixos. Doure com suavidade e tire do fogo enquanto resta um pouco de rosa para ficar perto de 77%.',
    },
    {
      q: 'Posso usar os macros da 80/20 para a 93/7 se for tudo o que meu app tem?',
      a: 'Não — a diferença é grande. A 80/20 são 254 kcal e 20 g de gordura por 100 g cru; a 93/7 são 152 kcal e 7,2 g de gordura. Usar a entrada errada falseia a sua ingestão de gordura em quase o triplo. Escolha a entrada que corresponde à embalagem.',
    },
    {
      q: 'Quanta carne cozida faz uma libra de 93/7?',
      a: 'Cerca de 350 g (12,3 oz) dourada na frigideira — bem mais que os ~331 g que você obtém da 80/20, porque a carne magra perde menos gordura. São cerca de quatro porções generosas de tacos ou chili.',
    },
  ],

  'ribeye-steak': [
    {
      q: 'O ponto muda o rendimento do bife de costela?',
      a: 'Sim, mais que na maioria dos cortes. Malpassado retém alguns pontos acima da média de 84% porque quase não cedeu umidade; bem-passado cai abaixo de 80% enquanto o calor prolongado expulsa mais água e derrete mais gordura. O número de 84% é um resultado ao ponto.',
    },
    {
      q: 'Por que o bife de costela mantém mais peso que um bife magro como a alcatra?',
      a: 'O marmoreio. O bife de costela tem cerca de 23 g de gordura por 100 g cru, distribuída pelo músculo, e a gordura desloca a água — então há menos água a perder. A gordura derretida também rega a superfície e retarda a evaporação. Um corte magro tem mais água e menos autorrega, então perde mais.',
    },
    {
      q: 'Se eu aparo a capa de gordura depois de cozinhar, como devo registrar?',
      a: 'Registre um equivalente em cru menor que o bife inteiro. O jeito mais simples: pese a carne cozida aparada que você realmente come, divida por cerca de 0,84 e registre isso. Você está deixando gordura que os macros do bife inteiro contariam.',
    },
    {
      q: 'O rendimento do bife de costela com osso (rib steak / tomahawk) é o mesmo?',
      a: 'A carne se comporta igual, mas 10–20% do peso cru de um bife com osso é osso que você não come. Pese a carne separada do osso depois de cozinhar e converta isso, ou subtraia a estimativa do osso do peso cru primeiro.',
    },
  ],

  'pork-chop': [
    {
      q: 'Por que o pulled pork encolhe muito mais que uma costeleta de porco?',
      a: 'Uma costeleta cozinha em minutos e perde cerca de 22%. A paleta de porco é cozida por horas, o que derrete quase toda a gordura e continua evaporando água o tempo todo — perde cerca de 35% (um rendimento de 65%). Use a página da paleta de porco para carnitas ou pulled pork.',
    },
    {
      q: 'Por que grelhar minha costeleta deu um rendimento maior que a frigideira?',
      a: 'O calor direto e forte sela a superfície rápido, formando uma crosta que prende a umidade antes de o interior passar do ponto. O USDA coloca a costeleta grelhada em 83% contra 78% na frigideira. Refogada, apesar do líquido, fica em 76% porque o tempo de cozimento mais longo joga contra.',
    },
    {
      q: 'Devo cozinhar as costeletas de porco a 63 °C ou 71 °C, e isso importa para a contagem?',
      a: 'A orientação moderna é 63 °C (145 °F) mais um descanso de 3 minutos, quando a costeleta está levemente rosada e perto do rendimento de 78%. Levá-la ao antigo padrão de 71 °C (160 °F) "sem rosa" expulsa mais água e pode derrubar o rendimento para a casa dos 70 baixos — e resseca a costeleta.',
    },
    {
      q: 'Como lidar com uma costeleta de porco com osso?',
      a: 'O osso é 15–25% do peso de uma costeleta com osso e você não o come. Pese a carne separada do osso depois de cozinhar e divida por 0,78, ou estime o osso e subtraia-o do peso cru antes de converter.',
    },
    {
      q: 'O rendimento da costeleta de porco se aplica ao filé mignon de porco?',
      a: 'Mais ou menos. O filé mignon é igualmente magro e de cozimento rápido e chega à mesma faixa de 70 altos ao assar, embora resseque rápido se passar do ponto. Para um registro aproximado, usar o número de 78% da costeleta é próximo o suficiente.',
    },
  ],

  'pork-shoulder': [
    {
      q: 'Quanto pulled pork uma paleta de 2 kg crua vai fazer?',
      a: 'Cerca de 1,3 kg de carne cozida e desfiada — um rendimento de 65%. A paleta com osso perde o osso além disso, então conte outros 8–12% a menos. Planeje cerca de 150 g de pulled pork cozido por sanduíche.',
    },
    {
      q: 'Por que a paleta de porco perde muito mais que outros cortes?',
      a: 'É gorda e cheia de tecido conjuntivo, e é cozida em fogo baixo por horas justamente para derreter esse colágeno. Ao longo desse cozimento longo quase toda a gordura derrete e a água continua evaporando — muito mais do que uma costeleta de cozimento rápido perde.',
    },
    {
      q: 'Devo registrar o pulled pork antes ou depois de adicionar o molho barbecue?',
      a: 'Antes. Pese a carne desfiada pura e converta-a para o peso cru, depois registre o molho à parte — o molho barbecue é sobretudo açúcar e acrescenta calorias reais que não estão no porco.',
    },
    {
      q: 'Minha ingestão de gordura é realmente tão alta quanto a conversão a partir do peso cru diz?',
      a: 'Provavelmente um pouco menor. Muita gordura derrete para a bandeja de gotejamento ao longo de um cozimento longo. Se você desengordura ou descarta os sucos em vez de misturá-los de volta, reduza um pouco o número da gordura — a diferença é a gordura que você escorreu.',
    },
    {
      q: 'O rendimento de 65% cobre a defumação além do forno e da panela lenta?',
      a: 'Sim. A paleta defumada, assada no forno e na panela lenta chegam todas perto de 65% porque o ponto final é o mesmo — você cozinha até desfiar, por volta de 90–96 °C no interior, não até um tempo fixo.',
    },
  ],

  'turkey-breast': [
    {
      q: 'Por que o rendimento do peito de peru (79%) é maior que o do peito de frango (72%)?',
      a: 'Sobretudo o tamanho. Um peito de peru inteiro é uma peça de carne muito maior, então proporcionalmente menos dele fica exposto ao calor que resseca e o interior é protegido pela massa ao redor. Corte o peito de peru em bifes finos e o rendimento cai para o território do peito de frango.',
    },
    {
      q: 'Posso usar o rendimento do peru inteiro assado para um peito puro?',
      a: 'Não. Números do peru inteiro e do peru recheado (muitas vezes citados em torno de 70–74%) fazem média com carne escura, pele e perdas da cavidade. Um peito sem pele sozinho retém cerca de 79%.',
    },
    {
      q: 'Como registro peito de peru de supermercado "auto-regante" ou em salmoura?',
      a: 'Eles carregam uma solução injetada que é 8–15% do peso — água, sal e às vezes gordura. Ela evapora em parte, então o rendimento é imprevisível. Se a embalagem tem tabela nutricional, registre a partir dela; se não, pese cru e espere perder um pouco mais que 21%.',
    },
    {
      q: 'O peru assado de frios é a mesma coisa que peito assado em casa?',
      a: 'Não. O peru de frios é curado em salmoura e muitas vezes tem água e amido adicionados, com a própria tabela nutricional em peso cozido. Use essa tabela mais ou menos com o peso das fatias — não a converta como se fosse peito cru.',
    },
  ],

  'salmon': [
    {
      q: 'Por que o salmão só perde cerca de 15% quando o frango perde 28%?',
      a: 'O salmão é um peixe gordo — cerca de 13 g de gordura por 100 g cru — formado por lascas de músculo curtas e delicadas com quase nenhum tecido conjuntivo. Firma com suavidade em vez de se contrair com força, e a gordura o mantém úmido em vez de escorrer. Então a maior parte do peso fica no filé: um rendimento de 85%.',
    },
    {
      q: 'O rendimento do salmão de cativeiro é diferente do selvagem?',
      a: 'Um pouco. O salmão de cativeiro é mais gordo, então retém um pouco mais de peso que o sockeye ou coho selvagem magro cozido do mesmo jeito. A diferença é pequena — alguns pontos percentuais — e o número de 85% funciona para os dois.',
    },
    {
      q: 'Como registro um filé com pele?',
      a: 'A pele é 5–8% do peso e fica na balança mesmo depois de derreter a gordura. Pese sem pele se puder. Se você cozinha com pele e a remove antes de comer, pese a carne cozida sozinha e divida por 0,85.',
    },
    {
      q: 'O rendimento do salmão se aplica ao salmão em lata ou defumado?',
      a: 'Não. O salmão em lata já está cozido e embalado, às vezes com sal ou óleo adicionados; o defumado é curado, não cozido. Ambos têm a própria tabela e devem ser registrados direto do peso que você come.',
    },
    {
      q: 'E aquela substância branca que sai do salmão?',
      a: 'É albumina, uma proteína solúvel em água expulsa enquanto a carne cozinha. A quantidade é minúscula em relação à proteína total do filé e não muda os seus macros de forma relevante — só tem aparência pouco apetitosa. Aparece mais quando o peixe é cozido rápido ou passa do ponto.',
    },
  ],

  'shrimp': [
    {
      q: 'Por que o camarão parece encolher mais de 25%?',
      a: 'Porque ele se enrola e se contrai. O músculo se contrai com força e rápido — é a curvatura de reto-cru a "C" apertado — concentrando a mesma massa numa forma menor e mais densa. Ele não perde de verdade um quarto do volume; a balança mostra a perda real de 25%.',
    },
    {
      q: 'Como considero o camarão vendido "tratado" com fosfato de sódio?',
      a: 'O camarão tratado é curado em salmoura para reter água, então pesa mais cru e pode perder mais de 25% ao cozinhar porque solta essa água adicionada. Se a lista de ingredientes menciona sal ou tripolifosfato de sódio, espere um peso cozido menor que o de um pacote "seco" do mesmo tamanho.',
    },
    {
      q: 'O peso do camarão com casca é o mesmo do descascado?',
      a: 'Não. A casca, a cauda e a cabeça são 30–45% do peso de um camarão com casca. Pese o camarão descascado, ou se você cozinha com casca, descasque depois de cozinhar e converta só o peso cozido descascado.',
    },
    {
      q: 'Como devo registrar camarão congelado pré-cozido?',
      a: 'Ele já perdeu a água de cozimento, então não o converta como cru. Registre-o por uma entrada de camarão cozido, mais ou menos com o peso do saco (escorrido de qualquer glaceado ou gelo).',
    },
    {
      q: 'O que significa "16/20" ou "31/40" num saco de camarão?',
      a: 'É a contagem de camarões por libra — "16/20" significa 16 a 20 camarões por 454 g, então cada camarão cru é cerca de 23–28 g. Números mais baixos são camarões maiores. Ajuda a estimar porções sem pesar cada peça.',
    },
  ],

  'white-rice': [
    {
      q: 'Por que meu arroz está mais pesado ou mais pegajoso que 3× o peso seco?',
      a: 'Você adicionou mais água, cozinhou mais tempo ou usou uma variedade mais pegajosa. Arroz cozido mole, ou arroz de grão curto e de sushi, absorvem mais e podem passar de 320–330%. Um pilaf firme e soltinho fica mais baixo, perto de 260–280%. O número de 308% é um resultado cozido de meio-termo.',
    },
    {
      q: 'O tipo de arroz muda o rendimento?',
      a: 'Sim. O arroz branco cozido comum fica em cerca de 308%. O arroz parboilizado ("converted") chega a cerca de 358% e o instantâneo a cerca de 350%, porque o amido deles é pré-gelatinizado e retém mais água. O arroz integral fica em cerca de 335% e tem a própria página. Basmati e jasmim ficam perto do branco comum.',
    },
    {
      q: 'Se eu lavo o arroz antes de cozinhar, isso afeta a contagem?',
      a: 'Lavar remove o amido de superfície e uma quantidade muito pequena do grão, o que baixa levemente o peso cozido final e deixa os grãos menos pegajosos. O efeito nos macros é desprezível — continue registrando a partir do peso seco que você mediu antes de lavar.',
    },
    {
      q: 'Quanto arroz seco é uma xícara de arroz cozido?',
      a: 'Cerca de 50–55 g de arroz branco seco fazem mais ou menos 160–170 g (uma xícara) cozidos. Uma xícara de arroz seco, cerca de 185 g, faz perto de 570 g cozidos — três a quatro porções de acompanhamento.',
    },
    {
      q: 'Posso pesar o arroz cozido em vez de seco?',
      a: 'Sim, desde que a sua entrada de banco de dados seja de arroz cozido. O perigo é registrar um peso cozido contra uma entrada em seco "por 100 g", o que quase triplica as suas calorias. Esta calculadora converte nos dois sentidos para você pesar quando for conveniente.',
    },
  ],

  'brown-rice': [
    {
      q: 'Por que o arroz integral expande mais que o arroz branco?',
      a: 'As camadas de farelo e germe são fibrosas e resistentes à água, então o arroz integral precisa de mais água e um cozimento mais longo — e acaba absorvendo mais dela. Seu rendimento é de cerca de 335% contra 308% do branco.',
    },
    {
      q: 'Posso registrar o arroz integral como arroz branco para ganhar tempo?',
      a: 'Não com precisão. O arroz integral tem um rendimento diferente (335% vs. 308%) e macros diferentes — mais gordura e fibra do germe e do farelo. Registrá-lo como branco subestima gordura e fibra e erra a porção.',
    },
    {
      q: 'O basmati integral ou o arroz integral de grão curto correspondem a este número?',
      a: 'Perto o suficiente para a contagem. Todos os arrozes integrais de grão inteiro chegam à faixa de 320–345%. Use o número de 335%, a menos que a sua embalagem dê dados específicos em peso cozido.',
    },
    {
      q: 'Quanto arroz integral seco por pessoa?',
      a: 'Cerca de 48–60 g seco para uma porção de acompanhamento cozida de 160–200 g. É um pouco menos de arroz seco que o branco para a mesma porção cozida, porque o integral expande mais.',
    },
  ],

  'pasta': [
    {
      q: 'Por que minha massa cozida não é exatamente 2,25× o peso seco?',
      a: 'O ponto. Escorrida al dente firme, a massa seca fica mais perto de 200%. Cozida mole, ou deixada no molho, ela continua absorvendo e passa de 240%. O número de 225% é um resultado normal, um pouco além do al dente.',
    },
    {
      q: 'O formato da massa muda o rendimento?',
      a: 'Um pouco. Formatos finos e pequenos absorvem mais rápido e de forma mais uniforme; rigatoni grosso e conchas grandes ficam um pouco mais baixos. Massa longa como espaguete fica mais alta — perto de 290% — e tem a própria entrada. Esta página é uma média de massa seca genérica.',
    },
    {
      q: 'A massa fresca é a mesma que a seca?',
      a: 'Não. A massa fresca ao ovo já contém muita umidade, então ganha bem menos ao cozinhar — cerca de 140–170% — e tem macros diferentes. Não use o rendimento da massa seca para a fresca.',
    },
    {
      q: 'Um prato de massa de restaurante é enorme — quanto de seco é isso?',
      a: 'Um prato de 300–400 g de massa cozida são cerca de 130–180 g seco, duas a três vezes a "porção" de 57 g da caixa. Vale saber quando você registra uma refeição fora.',
    },
    {
      q: 'Devo pesar a massa antes ou depois de adicionar o molho?',
      a: 'Pese-a escorrida, antes do molho. Depois que ela fica no molho, absorve tanto molho quanto mais água, e você não consegue mais separar o peso da massa do peso do molho. Registre o molho como um item próprio.',
    },
  ],

  'quinoa': [
    {
      q: 'O rendimento da quinoa é o mesmo do arroz?',
      a: 'Próximo em peso — a quinoa fica em cerca de 314% e o arroz branco em cerca de 308% — mas os macros são muito diferentes. A quinoa tem quase o dobro de proteína e muito mais gordura por grama seco, então as entradas não são intercambiáveis.',
    },
    {
      q: 'Lavar a quinoa muda o peso cozido?',
      a: 'Quase nada. Lavar remove a camada amarga de saponina e um traço da semente. Afeta o sabor, não o rendimento nem os macros de nenhuma forma que valha a pena acompanhar — continue registrando a partir do peso seco.',
    },
    {
      q: 'Por que minha quinoa está mais soltinha e leve do que o esperado?',
      a: 'Cozida com menos água, ou escorrida e seca no vapor, a quinoa fica na parte baixa da faixa. Cozida com mais água até bem mole, retém mais. O número de 314% assume o método de absorção padrão de 1 para 1,75.',
    },
    {
      q: 'Quanta quinoa seca para uma tigela de grãos?',
      a: 'Cerca de 60–70 g seco por pessoa quando a quinoa é a base da tigela, cozinhando até cerca de 190–220 g. Como acompanhamento junto de uma proteína, 50 g seco bastam.',
    },
  ],

  'lentils': [
    {
      q: 'Por que minhas lentilhas estão mais firmes e leves do que a calculadora diz?',
      a: 'Você as cozinhou brevemente. O USDA coloca um cozimento de 20 minutos em 261% contra 289% para lentilhas cozidas ou assadas até bem macias — uma diferença real de 28 g por 100 g seco. Use o número mais baixo se você prefere suas lentilhas com mordida.',
    },
    {
      q: 'Lentilhas vermelhas, verdes e de Puy têm o mesmo rendimento?',
      a: 'Mais ou menos, com uma faixa. Lentilhas vermelhas e amarelas partidas se desfazem e absorvem muito, chegando ao extremo alto. Lentilhas verdes firmes e de Puy cozidas só até macias ficam inteiras e absorvem menos. O número de 289% é uma média para lentilhas bem cozidas.',
    },
    {
      q: 'Como registro lentilhas em lata?',
      a: 'Uma lata de 400 g escorre para cerca de 240 g, equivalente a cerca de 85 g seco. Divida o peso escorrido por cerca de 2,85 para o equivalente seco, ou registre direto do rótulo em peso cozido da lata, se houver.',
    },
    {
      q: 'Lentilhas precisam de remolho, e o remolho muda o rendimento?',
      a: 'Não precisam de remolho — são pequenas e de casca fina. O remolho encurta um pouco o tempo de cozimento e pode elevar levemente o peso hidratado final, mas o efeito nos macros é desprezível. Registre a partir do peso seco de qualquer forma.',
    },
  ],

  'black-beans': [
    {
      q: 'Por que meu feijão cozido em casa rende menos de 2,5×?',
      a: 'Feijões velhos e água dura, rica em minerais, resistem à hidratação. Feijões com mais de um ano, ou cozidos sem remolho, incham menos e podem chegar perto de 220–235%. Um remolho longo, feijões frescos e água mole empurram para 250% ou além.',
    },
    {
      q: 'Quanto feijão-preto seco equivale a uma lata?',
      a: 'Uma lata de 400 g escorre para cerca de 240–260 g de feijão, o que são mais ou menos 100 g seco. Então um saco de 454 g (1 lb) de feijão seco equivale a cerca de quatro latas e meia de feijão depois de cozido, bem mais barato.',
    },
    {
      q: 'Devo registrar o feijão em lata com ou sem o líquido?',
      a: 'Escorra e enxágue primeiro, depois pese. O líquido da conserva (aquafaba) acrescenta peso e sódio e normalmente é descartado. Se uma receita usa o líquido, considere-o à parte.',
    },
    {
      q: 'Feijão-preto, carioca e vermelho compartilham um rendimento?',
      a: 'São próximos mas não idênticos. O feijão-preto fica em cerca de 250%, o feijão-vermelho em cerca de 238%, o carioca parecido com o preto. As lentilhas ficam mais altas, em 289%. Use a entrada específica onde puder.',
    },
  ],

  'broccoli': [
    {
      q: 'O brócolis cozido realmente não perde nenhum peso?',
      a: 'Praticamente nenhum. A água perdida enquanto o tecido amolece é compensada pela água fervendo que os buquês absorvem, para um rendimento líquido de 100%. O brócolis cru e o cozido pesam o mesmo, então você pode registrar qualquer um.',
    },
    {
      q: 'E o brócolis assado?',
      a: 'Assar é outra história — o calor seco do forno expulsa água de verdade e uma porção assada pode pesar 30–50% menos que crua. Este conjunto de dados não pontua o brócolis assado, então pese-o depois de assar e registre contra uma entrada de assado, mais qualquer óleo.',
    },
    {
      q: 'O brócolis congelado é diferente do fresco?',
      a: 'Não. O brócolis congelado é branqueado antes de congelar mas se comporta igual na balança quando você o cozinha — o rendimento cozido continua sendo cerca de 100%.',
    },
    {
      q: 'O talo conta igual aos buquês?',
      a: 'Nutricionalmente o talo é parecido com os buquês depois de descascado, e cozinha com o mesmo rendimento perto de 100%. Só é mais denso, então leva um minuto ou dois a mais para amolecer.',
    },
  ],

  'spinach': [
    {
      q: 'Por que meu espinafre parece ter perdido 80% quando o rendimento é 77%?',
      a: 'Você está vendo volume, não peso. As folhas de espinafre cruas são sobretudo ar e estrutura rígida. O calor colapsa essa estrutura instantaneamente, então a pilha encolhe de forma dramática — mas a água dentro das células, que é o que pesa alguma coisa, fica em grande parte. A perda de peso é só de cerca de 23%.',
    },
    {
      q: 'O vapor realmente retém tanto mais que a fervura?',
      a: 'Sim. O espinafre no vapor fica em cerca de 93% contra 77% cozido — uma diferença de 16 pontos, mais ampla que a de quase qualquer outro vegetal. A panela de pressão vai no sentido contrário, para cerca de 68%. Como você cozinha o espinafre muda o número mais do que na maioria dos alimentos.',
    },
    {
      q: 'Como registro o espinafre depois de espremer a água?',
      a: 'Espremer remove água que o número de rendimento assume ainda presente. Pese o que resta depois de espremer e trate como um equivalente em cru menor — espinafre cozido bem espremido pode ficar perto de 50–60% do peso cru.',
    },
    {
      q: 'O espinafre congelado equivale a uma certa quantidade de fresco?',
      a: 'Mais ou menos. Um bloco de 250 g de espinafre picado congelado já está branqueado e escorrido e equivale a cerca de 700–800 g de folhas cruas. Registre-o por uma entrada de espinafre cozido.',
    },
    {
      q: 'Uma receita diz "10 xícaras de espinafre cru" — quanto é isso cozido?',
      a: 'Cerca de 280–300 g de folhas cruas, que cozinham até cerca de 215–230 g cozidos — um pouco mais que uma xícara. A contagem de xícaras soa enorme porque o espinafre cru é quase só ar.',
    },
  ],

  'potato': [
    {
      q: 'Por que as batatas fritas perdem muito mais peso que uma batata cozida?',
      a: 'Fritar evapora uma grande fração da água da batata em fogo alto e substitui só parte dela por óleo. Uma batata cozida mantém cerca de 94% do peso; as fritas caem para cerca de 55% — e depois carregam óleo absorvido que os macros da batata crua não incluem.',
    },
    {
      q: 'Como devo registrar batatas assadas?',
      a: 'Use o rendimento assado com casca untada, cerca de 81%, para a batata em si, depois some o óleo de assar à parte — normalmente 5–10 g de gordura por porção. Registrar batata assada como batata cozida pura ignora tanto a perda de água quanto o óleo.',
    },
    {
      q: 'O purê de batata usa o mesmo rendimento?',
      a: 'A parte da batata perde só um pouco ao cozinhar (cerca de 94%), mas o purê também contém leite, manteiga ou creme. Pese a batata antes de amassar e registre os laticínios e a gordura à parte, ou você subestimará as calorias.',
    },
    {
      q: 'Uma batata assada em papel-alumínio é diferente de uma assada direto na grade?',
      a: 'Sim. O papel-alumínio prende o vapor, então uma batata assada em papel-alumínio mantém cerca de 95% do peso. Assada direto com a casca untada, mais água escapa e ela cai para cerca de 81%.',
    },
    {
      q: 'Quanta batata crua preciso para purê de batata para quatro?',
      a: 'Cerca de 800 g–1 kg de batata crua — 200–250 g por pessoa — antes de adicionar leite e manteiga. Ela perde só um pouco de peso ao cozinhar, então o peso cru fica próximo do peso da batata cozida com que você começa a amassar.',
    },
  ],

  'sweet-potato': [
    {
      q: 'Por que a batata-doce assada perde peso mas a batata-doce cozida ganha?',
      a: 'O calor seco do forno evapora água e concentra a polpa — um rendimento assado de 78%. Cozinhar faz o oposto: a polpa absorve um pouco de água de cozimento e termina levemente mais pesada do que começou, um rendimento de 101%. Mesma batata, sentido oposto, conforme o método.',
    },
    {
      q: 'Posso usar os rendimentos da batata comum para a batata-doce?',
      a: 'Não. A batata-doce assada perde cerca de 22%, enquanto uma batata comum assada em papel-alumínio perde só cerca de 5%. A batata-doce é mais úmida e mais doce e se comporta de forma diferente sob calor.',
    },
    {
      q: 'Por que a batata-doce assada tem gosto muito mais doce que a cozida?',
      a: 'Assar remove água e concentra os açúcares, e o calor seco permite que caramelizem. O açúcar total é o mesmo da batata crua — só está concentrado em menos gramas, que é também por que o rendimento assado é só 78%.',
    },
    {
      q: 'Como registro batata-doce frita?',
      a: 'Pese-a cozida e registre contra uma entrada de batata-doce frita, ou estime a batata crua e some o óleo de fritura à parte. Como as fritas comuns, elas perdem muita água e absorvem óleo que os macros da batata pura ignoram.',
    },
  ],
};
