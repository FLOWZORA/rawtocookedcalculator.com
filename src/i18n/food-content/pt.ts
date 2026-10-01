/**
 * Portuguese long-form food-page content. Full translation of the English
 * source in `../food-content.ts`; every gram and percentage figure is kept
 * identical.
 */
import type { FoodLongContent } from '../food-content';

export const PT: Record<string, FoodLongContent> = {
  // ── Carnes, aves e frutos do mar ─────────────────────────────────────────

  'chicken-breast': {
    introHeading: 'Por que o peito de frango encolhe cerca de 28% ao ser cozido',
    intro: [
      'O peito de frango sem pele e sem osso é cerca de 74% água em peso e músculo quase puro — cerca de 22,5 g de proteína e apenas 2,6 g de gordura por 100 g cru. Há muito pouca gordura e quase nenhum tecido conjuntivo para reter a umidade, então quando as fibras musculares encontram o calor elas se comportam como uma esponja sendo espremida: as proteínas se desnaturam por volta de 60–65 °C, os feixes de fibras se contraem no comprimento e na largura, e a água que retinham é expulsa para a panela. Essa perda de água é basicamente todos os 28% que o peito perde até chegar a um rendimento USDA de 72%.',
      'Como a perda é quase toda água e quase nenhuma gordura, a proteína com que você começou permanece na carne. Um peito de 200 g cru ainda contém cerca de 45 g de proteína depois de cozido — só que agora concentrados em cerca de 144 g em vez de 200 g, por isso o peito cozido dá cerca de 31 g de proteína por 100 g enquanto o cru dá 22,5 g. Mesma proteína, menos água, carne mais densa.',
      'O peito de frango pune o cozimento excessivo com mais rigor do que os cortes gordos. Sem gordura nem colágeno amortecendo, cada minuto extra acima de 74 °C no interior expulsa mais água e empurra o rendimento para a casa dos 60. Filés finos batidos e sassami pequenos perdem uma fração maior do que um peito inteiro e grosso porque têm mais superfície de evaporação em relação à massa.',
      'É o alimento que a maioria dos apps de contagem erra na mesma direção: pesam o peito cozido, procuram uma tabela nutricional em peso cru e, sem perceber, subestimam a proteína em um quarto. A solução é sempre registrar o equivalente em peso cru, que é o que esta calculadora devolve em qualquer sentido da conversão.',
    ],
    methodHeading: 'Assado, grelhado ou escalfado: um exemplo resolvido',
    method: [
      'O calor seco e forte evapora mais umidade da superfície do que o calor úmido e suave, então o método de cozimento move o rendimento em cerca de sete pontos. Dados USDA para peito sem pele: assado 72%, na frigideira 72%, grelhado 70%, cozido ou escalfado 77%.',
      'Comece com um peito de 200 g cru. Assado a 200 °C ele sai a 200 × 0,72 ≈ 144 g cozido. Grelhado sobre chama direta o mesmo peito fica em 200 × 0,70 = 140 g — a crosta extra e o calor radiante custam alguns gramas a mais. Escalfado em água mal fervendo ele retém 200 × 0,77 = 154 g, porque a carne está cercada de água em vez de ar seco e quase nada evapora.',
      'As três porções carregam os mesmos macros, porque todas vieram de 200 g cru: cerca de 240 kcal, 45 g de proteína e 5,2 g de gordura. Se você só tem o peso cozido, divida pelo rendimento do seu método — uma porção de 150 g grelhada é 150 ÷ 0,70 ≈ 214 g cru; assada, esses mesmos 150 g são 150 ÷ 0,72 ≈ 208 g cru. Use o seletor de método de cozimento da calculadora para escolher o divisor certo automaticamente.',
    ],
    buyingHeading: 'Quanto peito de frango cru comprar',
    buying: [
      'Calcule de trás para frente a partir da porção cozida que você quer no prato. Para 150 g cozidos, compre cerca de 150 ÷ 0,72 ≈ 210 g cru por pessoa se for assar; mais perto de 215 g se for grelhar. Para uma porção cozida de 170 g (6 oz), conte com cerca de 235–240 g cru por pessoa.',
      'Peitos embalados costumam pesar 200–280 g cada, então um peito médio alimenta um adulto com fome e sobra um pouco, e uma bandeja de 1 kg com três a quatro peitos rende cerca de 700–720 g cozidos — mais ou menos quatro porções de 175 g. Se você prepara cinco porções de 150 g cozidos, comece com cerca de 1,05 kg cru.',
    ],
    mistakesHeading: 'Erros comuns ao registrar peito de frango',
    mistakes: [
      'Pesar depois de cozinhar e registrar contra uma tabela em cru "por 100 g". Um peito cozido de 150 g equivale a cerca de 208 g cru; registrar 150 g tira cerca de 13 g de proteína e 70 kcal.',
      'Usar o rendimento de escalfado/cozido (77%) para um peito que na verdade você grelhou (70%). Isso é um erro de 10% no peso cru que você calcula de volta.',
      'Registrar como frango puro um peito "temperado", em salmoura ou marinado comprado pronto. A solução adicionada pode ser 10–15% do peso da embalagem e é sobretudo água e sal, não proteína.',
    ],
  },

  'chicken-thigh': {
    introHeading: 'Por que a coxa de frango perde mais que o peito',
    intro: [
      'A coxa desossada e sem pele é carne escura: os músculos que o frango usa para ficar de pé e andar. Trabalham mais que o peito, então carregam mais mioglobina, mais gordura intramuscular (cerca de 4,6 g por 100 g cru contra 2,6 g do peito) e bem mais tecido conjuntivo. Essa estrutura é a razão de a coxa cozinhar até um rendimento assado de 69% — uma perda de cerca de 31% — enquanto o peito retém 72%.',
      'Duas coisas deixam a carne ao mesmo tempo. A água é espremida enquanto as fibras se contraem, como em qualquer músculo, e a gordura derrete: o calor mais alto do forno ou da grelha derrete a gordura intramuscular, que escorre com os sucos. Um corte mais gordo, com mais gordura para derreter, perde mais peso total, mesmo que o colágeno que ele contém esteja ao mesmo tempo virando gelatina e retendo alguma umidade.',
      'Esse colágeno também é o motivo de a coxa perdoar mais ao comer do que o peito no mesmo rendimento. Passe do ponto um peito e ele fica seco e fibroso; passe do ponto uma coxa e o tecido conjuntivo se desfez o suficiente para que ela ainda pareça suculenta. A balança mostra a perda de peso mesmo quando sua boca não percebe.',
      'Para a contagem, a coxa importa porque a diferença entre métodos é enorme — mais ampla do que quase qualquer outro corte deste site — então um único número de rendimento para "frango" não basta aqui.',
    ],
    methodHeading: 'A maior diferença entre métodos de qualquer corte de frango',
    method: [
      'O USDA documenta a coxa desossada de 59% frita em imersão a 80% empanada e frita, com 73% refogada, 66% assada tipo frita, 66% na frigideira, 61% na grelha e 64% na grelha de churrasco. O número de referência de 69% é o valor assado.',
      'Pegue uma coxa de 150 g crua. Refogada em molho ela retém 150 × 0,73 ≈ 110 g. Grelhada perto da resistência cai para 150 × 0,61 ≈ 92 g — 18 g de diferença em relação à versão refogada da mesma peça. Assada tipo frita fica em 150 × 0,66 = 99 g.',
      'Cada uma dessas porções ainda é registrada como 150 g cru: cerca de 192 kcal, 30,6 g de proteína e 6,9 g de gordura. O número do empanado frito (80%) é o estranho: parece um rendimento alto só porque o empanado e o óleo absorvido acrescentam peso que nunca foi frango, então não o use para calcular de volta os macros da coxa magra.',
    ],
    buyingHeading: 'Quanta coxa de frango crua comprar',
    buying: [
      'Coxas desossadas e sem pele pesam em média 90–130 g cada crua. Para uma porção cozida de 120 g, compre cerca de 120 ÷ 0,69 ≈ 175 g cru por pessoa ao assar — mais ou menos duas coxas menores ou uma e meia grandes.',
      'Uma embalagem de 1 kg de coxas desossadas assa até cerca de 690 g cozidos, ou quatro porções de 170 g. Se você refoga para um curry ou ensopado, o rendimento sobe para 73% e esse mesmo quilo dá cerca de 730 g de carne cozida.',
    ],
    mistakesHeading: 'Erros comuns ao registrar coxa de frango',
    mistakes: [
      'Reutilizar o rendimento do peito de frango (72%) para as coxas. A coxa fica mais baixa em quase todos os métodos; assada é 69%, e grelhada fica perto de 61%.',
      'Registrar coxas com osso e pele pelo peso cru da embalagem como se fosse carne comestível. Pele e osso são 25–35% de uma coxa com osso, e a pele é quase toda gordura.',
      'Tratar a coxa empanada e frita (80% de "rendimento") como frango magro. O peso extra é empanado e óleo, não proteína — essa porção tem muito mais gordura e carboidratos do que os macros da coxa crua sugerem.',
    ],
  },

  'ground-beef-80-20': {
    introHeading: 'Por que a carne moída 80/20 perde cerca de um quarto do peso',
    intro: [
      'A carne moída 80/20 padrão tem 20% de gordura em peso cru — cerca de 20 g de gordura e 254 kcal por 100 g. Ao cozinhar, duas coisas distintas deixam a panela. O músculo magro se contrai e expulsa água, e boa parte desses 20% de gordura derrete e escorre como líquido. Juntas, levam a carne esfarelada a um rendimento de 73% na frigideira, uma perda de 27%, quase toda visível na gordura que você escorre ou seca com papel.',
      'Como grande parte da perda é gordura derretida e não água, a 80/20 cozida é bem mais magra por grama do que os macros crus sugerem — parte da gordura agora está na panela, não no seu prato. É o único alimento comum em que registrar o equivalente em peso cru superestima levemente a gordura que você realmente comeu. Ainda assim é muito mais preciso do que registrar o peso cozido escorrido contra uma tabela em cru, que subestima tudo.',
      'A finura da moagem e o teor de gordura mandam no rendimento. Moagens mais magras (veja 93/7) perdem menos porque há menos gordura para derreter. Uma moagem grossa cozida com suavidade perde menos do que uma moagem fina forçada em fogo alto, que rompe mais células e libera mais líquido.',
      'Para um número estável, pese a carne crua antes de ela ir para a panela. Tentar pesar a carne esfarelada escorrida introduz uma segunda variável — quanta gordura você escorreu — além do próprio rendimento.',
    ],
    methodHeading: 'Na frigideira vs. na grelha, passo a passo',
    method: [
      'O USDA lista a 80/20 esfarelada a 73% na frigideira (dourada) e a 69% na grelha (sob a resistência, onde mais gordura escorre). A 93/7 mais magra dá 77% e 73% para esses dois métodos.',
      'Doure uma embalagem inteira de 454 g (1 lb) na frigideira e você obtém cerca de 454 × 0,73 ≈ 331 g de carne cozida e escorrida. Grelhe a mesma libra e ela cai para 454 × 0,69 ≈ 313 g, com mais gordura perdida na assadeira.',
      'Em base crua, esses 454 g partiam de cerca de 1.153 kcal, 78 g de proteína e 91 g de gordura. A carne esfarelada mantém toda a proteína mas só parte dessa gordura, conforme quanto você escorre — que é exatamente por que o peso cru é a coisa consistente a registrar.',
    ],
    buyingHeading: 'Quanta carne moída crua comprar',
    buying: [
      'Para hambúrgueres, um hambúrguer cru de 150 g (1/3 lb) cozinha até cerca de 110 g; um de 113 g (1/4 lb) até cerca de 82 g. Compre 150–170 g cru por hambúrguer se as pessoas esperam uma peça substancial.',
      'Para um molho, chili ou recheio de tacos em que a carne é um dos componentes, 100–125 g cru por pessoa é generoso. Uma embalagem de 454 g (1 lb) doura até cerca de 330 g cozidos e alimenta tranquilamente quatro pessoas num bolonhesa ou quatro a cinco em tacos.',
    ],
    mistakesHeading: 'Erros comuns ao registrar carne moída',
    mistakes: [
      'Registrar o peso cozido escorrido contra uma entrada em cru "por 100 g". A carne esfarelada é muito mais densa em calorias por grama do que a crua, então isso dispara a contagem de calorias e gordura.',
      'Supor que todas as moagens se comportam igual. A 80/20 rende ~73% dourada na frigideira; a 93/7 retém ~77% porque há menos gordura para derreter.',
      'Esquecer que escorrer remove gordura que os macros crus ainda contam. Se você joga a gordura fora, sua ingestão real de gordura fica um pouco abaixo do que a conversão a partir do cru mostra — a diferença é a gordura na panela.',
    ],
  },

  'ground-beef-93-7': {
    introHeading: 'Por que a carne moída 93/7 mantém melhor o peso que a 80/20',
    intro: [
      'A carne moída magra 93/7 tem apenas 7% de gordura em peso cru — cerca de 7,2 g de gordura e 152 kcal por 100 g, contra 20 g e 254 kcal da 80/20. O músculo magro ainda se contrai e solta água ao cozinhar, mas há bem menos gordura disponível para derreter e sair da panela. Essa perda de gordura que não acontece é toda a razão de a 93/7 cozinhar até um rendimento de 77% na frigideira enquanto a 80/20 cai para 73%.',
      'Menos gordura derretida também significa que a conversão de macros a partir do peso cru é mais honesta para a 93/7 do que para as moagens gordas. Muito pouca gordura termina na panela, então a carne esfarelada mantém quase todo o valor de gordura do cru — registrar o equivalente em peso cru é aqui a opção consistente e também exata.',
      'O que quem cozinha sente é o ressecamento. Com pouca gordura para manter a carne úmida, a 93/7 vai de suculenta a seca rápido em fogo alto, e o rendimento escorrega para a casa dos 70 baixos se você forçar. Dourar com suavidade e tirar do fogo enquanto resta um pouco de rosa mantém você perto de 77%.',
      'Para chili, tacos, molho de carne e marmitas em que se quer a proteína sem a gordura, a 93/7 é a opção padrão — e seu rendimento maior faz uma embalagem render mais no prato do que o mesmo peso de 80/20.',
    ],
    methodHeading: 'Na frigideira vs. na grelha, passo a passo',
    method: [
      'Dados USDA para a 93/7 esfarelada: 77% dourada na frigideira, 73% na grelha sob a resistência.',
      'Uma embalagem de 454 g (1 lb) dourada na frigideira dá cerca de 454 × 0,77 ≈ 350 g cozidos e escorridos — bem mais que os ~331 g que você obteria da 80/20. Grelhada, a mesma embalagem cai para 454 × 0,73 ≈ 331 g.',
      'Esses 454 g crus são cerca de 690 kcal, 95 g de proteína e 33 g de gordura. Como quase nada dessa gordura derrete e escapa, a carne esfarelada mantém quase tudo, então converter sua porção cozida de volta para o peso cru dá uma leitura de macros exata.',
    ],
    buyingHeading: 'Quanta carne moída magra crua comprar',
    buying: [
      'Para uma marmita com foco em proteína, 150 g cru por porção cozinha até cerca de 115 g e entrega em torno de 31 g de proteína. Cinco porções precisam de cerca de 750 g cru.',
      'Uma embalagem de 454 g (1 lb) rende cerca de 350 g cozidos: suficiente para quatro porções generosas de tacos ou chili a cerca de 115 g cozidos cada, ou três tigelas maiores.',
    ],
    mistakesHeading: 'Erros comuns ao registrar carne moída magra',
    mistakes: [
      'Usar o rendimento da 80/20 (73%) para a 93/7. A carne magra retém mais peso — cerca de 77% dourada na frigideira — então você subestimaria o peso cru e ficaria com menos proteína.',
      'Registrar a carne esfarelada contra uma tabela em cru. Mesmo a carne magra se concentra ao perder água, então a cozida é mais densa em calorias por grama do que a crua.',
      'Trocar livremente os macros da 93/7 e da 80/20. A diferença de gordura e calorias é de quase o triplo por grama de gordura — escolha a entrada que corresponde à embalagem.',
    ],
  },

  'ribeye-steak': {
    introHeading: 'Por que o bife de costela mantém 84% do peso — o mais alto de qualquer carne aqui',
    intro: [
      'O bife de costela (ribeye) é um bife muito marmorizado: cerca de 23 g de gordura por 100 g cru, distribuída pelo músculo como marmoreio intramuscular em vez de uma capa separada. Ao cozinhar, esse marmoreio derrete mas grande parte fica presa entre as fibras musculares em vez de escorrer, e a gordura que se liquefaz mantém a superfície regada, de modo que menos água evapora. O resultado é um rendimento USDA de 84% — só 16% de perda, a mais suave de qualquer carne ou peixe deste site.',
      'O músculo ainda perde água enquanto firma, e o bife solta suco ao descansar, mas um corte gordo simplesmente tem menos água por grama para começar — a gordura desloca a água — então há menos a perder. Um corte magro como o coxão duro, cozido do mesmo jeito, perderia bem mais.',
      'O ponto é a verdadeira alavanca num bife. O USDA observa que o rendimento do bife de costela varia de forma sensível de malpassado a bem-passado: um bife malpassado quase não cedeu umidade, enquanto um bem-passado ficou tempo suficiente na temperatura para empurrar a perda acima de 20%. O número de 84% é uma média de ponto médio.',
      'Como a gordura fica em boa parte na carne, a conversão de macros a partir do peso cru é exata para o bife de costela — o que você registra é muito próximo do que você come, marmoreio incluído.',
    ],
    methodHeading: 'Um exemplo resolvido, de malpassado a bem-passado',
    method: [
      'O site usa um único rendimento de 84% para o bife de costela (Tabela de Rendimentos de Cozimento do USDA), representando um resultado típico ao ponto. Trate malpassado como alguns pontos a mais e bem-passado como vários pontos a menos.',
      'Um bife de costela de 340 g (12 oz) cru cozido ao ponto sai a cerca de 340 × 0,84 ≈ 286 g no prato. Cozido malpassado ele reteria mais perto de 300 g; levado a bem-passado, espere cerca de 265–270 g, já que o calor prolongado expulsa mais água e derrete mais gordura.',
      'Todos vieram de 340 g cru: cerca de 989 kcal, 66 g de proteína e 79 g de gordura. Pese o bife cru se puder — deduzi-lo do peso cozido significa adivinhar o próprio ponto, o que move o rendimento em dez pontos.',
    ],
    buyingHeading: 'Quanto bife de costela cru comprar',
    buying: [
      'Porções de churrascaria são de 225–450 g (8–16 oz) cru. Um bife cru de 8 oz come-se como cerca de 190 g cozidos; um de 12 oz como cerca de 286 g cozidos. Para um jantar normal com acompanhamentos, 8–10 oz cru por pessoa bastam; para uma refeição centrada no bife, 12 oz.',
      'O bife de costela com osso (rib steak / tomahawk) carrega 10–20% de peso de osso não comestível — compre proporcionalmente mais, ou pese a carne separada do osso depois de cozinhar e converta isso.',
    ],
    mistakesHeading: 'Erros comuns ao registrar bife de costela',
    mistakes: [
      'Aparar a gordura visível depois de cozinhar mas registrar o peso cru inteiro. Se você corta e deixa a capa de gordura, registre um equivalente em cru menor que o bife completo.',
      'Usar o rendimento de um bife magro. Alcatra ou coxão perdem mais que o bife de costela; com 84%, o bife de costela está perto do topo da faixa.',
      'Ignorar o ponto. Um bife de costela bem-passado pode pesar 15–20 g a menos por 340 g do que um malpassado cozido a partir do mesmo bife cru.',
    ],
  },

  'pork-chop': {
    introHeading: 'Por que uma costeleta de porco perde cerca de 22% — e a paleta de porco perde muito mais',
    intro: [
      'Uma costeleta de porco desossada é um corte magro e de cozimento rápido: cerca de 21,5 g de proteína e 5,6 g de gordura por 100 g cru, tirado do lombo. Comporta-se muito como o peito de frango — as fibras musculares se contraem, a água é expulsa, e uma costeleta de cozimento rápido se assenta num rendimento de 78% na frigideira, uma perda de 22%.',
      'O que torna a costeleta de porco complicada é o quão estreita é a sua janela segura. As orientações modernas cozinham o porco a 63 °C mais um descanso, quando ainda está levemente rosado e suculento. Leve-o ao antigo padrão de 71 °C "sem rosa" e você evapora muito mais água — o rendimento pode cair para a casa dos 70 baixos e a costeleta fica seca e pálida.',
      'O método importa mais para a costeleta de porco do que para a maioria dos cortes porque as opções realmente diferem: refogar a cerca de líquido e ela retém 76%, enquanto grelhar sobre calor direto com a superfície selando forte pode terminar mais alto, em 83%, já que o exterior fixa rápido e sela a umidade antes de o interior passar do ponto.',
      'A paleta de porco é outra história — um corte gordo e rico em colágeno cozido em fogo baixo por horas, por isso perde cerca de 35% (um rendimento de 65%). Muito tempo na temperatura derrete quase toda a gordura e expulsa muito mais água do que uma costeleta de cinco minutos jamais conseguiria.',
    ],
    methodHeading: 'Na frigideira vs. refogada vs. grelhada',
    method: [
      'Números USDA por método para uma costeleta desossada genérica (média de sobrepaleta, lombo e costela): na frigideira 78%, refogada 76%, grelhada 83%.',
      'Uma costeleta de 170 g (6 oz) crua na frigideira sai a cerca de 170 × 0,78 ≈ 133 g. Refogada em molho ela retém 170 × 0,76 ≈ 129 g. Grelhada forte sobre calor direto pode terminar em 170 × 0,83 ≈ 141 g, porque a crosta selada retém a umidade.',
      'Cada porção é registrada como 170 g cru: cerca de 243 kcal, 37 g de proteína e 9,5 g de gordura. Se você só a pesou cozida, uma costeleta de 130 g na frigideira é 130 ÷ 0,78 ≈ 167 g cru.',
    ],
    buyingHeading: 'Quanta costeleta de porco crua comprar',
    buying: [
      'Costeletas desossadas pesam 140–225 g cada crua. Para uma porção cozida de 150 g, compre cerca de 150 ÷ 0,78 ≈ 192 g cru por pessoa — uma costeleta média.',
      'Costeletas com osso carregam 15–25% de osso. Uma costeleta com osso de 250 g tem cerca de 190–210 g de carne, que cozinha até cerca de 150–165 g. Compre as com osso por unidade (uma por pessoa) em vez de por peso.',
    ],
    mistakesHeading: 'Erros comuns ao registrar costeleta de porco',
    mistakes: [
      'Aplicar o rendimento da costeleta (78%) ao pulled pork ou às carnitas. A paleta de porco cozida por horas rende cerca de 65% — uma peça de 500 g crua vira cerca de 325 g cozidos, não 390 g.',
      'Registrar o peso da costeleta com osso como carne comestível. Subtraia 15–25% pelo osso antes de converter.',
      'Passar do ponto até "sem rosa" e depois se perguntar por que o peso cozido está baixo. Uma costeleta levada a 71 °C ou mais pode render mais perto de 72% do que de 78%.',
    ],
  },

  'pork-shoulder': {
    introHeading: 'Por que a paleta de porco perde cerca de 35% — a maior queda de qualquer carne aqui',
    intro: [
      'A paleta de porco (Boston butt / pá) é o oposto de uma costeleta magra: cerca de 14 g de gordura por 100 g cru, além de faixas grossas de tecido conjuntivo rico em colágeno e uma capa de gordura. É cozida de propósito devagar — horas a 90–120 °C, ou um refogado longo — para dar tempo a esse colágeno de derreter em gelatina. O preço dessa transformação em fogo baixo é um rendimento USDA de 65%, uma perda de peso de 35%.',
      'Ao longo dessas horas quase tudo vai embora. A gordura intramuscular e a da capa escorrem em grande parte para a assadeira ou a bandeja de gotejamento do defumador. A água, que um corte de cozimento rápido nunca tem tempo de perder, continua evaporando durante todo o cozimento. Até o colágeno, uma vez gelatinizado, libera parte da água a que estava ligado. O que resta é carne concentrada e desfiável.',
      'O rendimento é notavelmente constante para o pulled pork justamente porque o ponto final é constante — você cozinha até desfiar, por volta de 90–96 °C no interior, não até um tempo fixo. Seja defumando, assando no forno ou na panela lenta, você chega perto de 65%.',
      'Para a contagem, é o corte em que usar um rendimento genérico de "porco" causa mais dano: o de uma costeleta superestimaria em um terço o seu pulled pork cozido.',
    ],
    methodHeading: 'Um exemplo resolvido: da peça crua ao pulled pork',
    method: [
      'O site usa um único rendimento de 65% para a paleta de porco (Tabela de Rendimentos de Cozimento do USDA), cobrindo refogado, assado e defumado em fogo baixo, que chegam bem próximos entre si.',
      'Uma paleta desossada de 2 kg (4,4 lb) crua reduz até cerca de 2000 × 0,65 = 1.300 g de carne cozida. Uma peça de 1 kg dá cerca de 650 g. A paleta com osso perde o peso do osso além disso — conte outros 8–12%.',
      'Esses 2 kg crus são cerca de 4.020 kcal, 348 g de proteína e 284 g de gordura antes de cozinhar. Boa parte da gordura escorre para a assadeira, então os 1.300 g de carne desfiada são mais magros por grama do que os macros crus sugerem — mas a conversão a partir do peso cru continua sendo a forma consistente de registrar, e você pode reduzir um pouco a gordura se desengordurou os sucos.',
    ],
    buyingHeading: 'Quanta paleta de porco crua comprar',
    buying: [
      'Conte com cerca de 150 g de pulled pork cozido por pessoa em sanduíches, o que dá cerca de 150 ÷ 0,65 ≈ 230 g cru de paleta desossada por cabeça. Para uma multidão, a regra de buffet de "1/3 lb cozido por pessoa, então 1/2 lb cru" cai no mesmo lugar.',
      'Uma paleta desossada inteira costuma pesar 2–3,5 kg. Um assado de 3 kg rende cerca de 1,95 kg cozidos — suficiente para uma dúzia de sanduíches generosos. Com osso, compre cerca de 15% a mais para cobrir o osso.',
    ],
    mistakesHeading: 'Erros comuns ao registrar paleta de porco',
    mistakes: [
      'Usar um rendimento de costeleta ou de "porco médio". Com 65%, a paleta perde bem mais que os 78% de uma costeleta; um rendimento de costeleta superestima o seu pulled pork cozido em cerca de um terço.',
      'Registrar o peso cozido, com molho. O molho barbecue acrescenta açúcar e calorias que não estão no porco — pese a carne antes de passar molho, ou registre o molho à parte.',
      'Ignorar a gordura derretida. Se você desengordura ou descarta os sucos, sua ingestão real de gordura fica abaixo da conversão a partir do peso cru; a diferença é a gordura que ficou na assadeira.',
    ],
  },

  'turkey-breast': {
    introHeading: 'Por que o peito de peru perde cerca de 21% ao ser assado',
    intro: [
      'O peito de peru sem pele é o corte de ave mais magro deste site — cerca de 24,6 g de proteína e apenas 1 g de gordura por 100 g cru, ainda mais magro que o peito de frango. É quase músculo e água puros, então ao assar a história é quase toda perda de água: as proteínas se desnaturam, as fibras se contraem, a umidade é expulsa, e o peito se assenta num rendimento USDA de 79%, uma perda de 21%.',
      'Perde um pouco menos que o peito de frango (72%) sobretudo porque um peito de peru é uma peça de carne muito maior. Um peito inteiro de 2–3 kg tem baixa relação superfície/massa, então proporcionalmente menos dele fica exposto ao calor que resseca, e o interior é protegido pela massa ao redor. Corte-o em bifes e o rendimento cai para o território do peito de frango.',
      'O erro clássico com o peru é cozinhá-lo pelo antigo padrão de ave "bem passada" de 74 °C ou mais por precaução. Retirado a 71 °C e descansado, o peito retém perto de 79%; levado a 80 °C fica seco feito serragem e o rendimento cai vários pontos.',
      'O número de 79% é especificamente para o peito. Os rendimentos do peru inteiro e do peru recheado são mais baixos e não comparáveis — fazem média com carne escura, pele e perdas da cavidade.',
    ],
    methodHeading: 'Um exemplo resolvido: peito de peru assado',
    method: [
      'O site usa um único rendimento de 79% para o peito de peru (Manual de Agricultura n.º 102 do USDA), para assar. Escalfar ou cozinhar no vapor reteria um pouco mais; fatiar em bifes finos e selar na frigideira reteria um pouco menos.',
      'Uma porção de 250 g de peito cru assa até cerca de 250 × 0,79 ≈ 198 g cozidos. Um assado inteiro de peito desossado de 2,5 kg rende aproximadamente 1,98 kg de carne cozida fatiada.',
      'Esses 250 g crus são cerca de 285 kcal, 61,5 g de proteína e 2,5 g de gordura. Se você fatiou primeiro e pesou depois, uma porção cozida de 150 g é 150 ÷ 0,79 ≈ 190 g cru. O "peito de peru assado" de frios não é comparável — é curado em salmoura e muitas vezes com água adicionada, então registre-o pela própria tabela em peso cozido.',
    ],
    buyingHeading: 'Quanto peito de peru cru comprar',
    buying: [
      'Para uma porção cozida de 150 g, compre cerca de 150 ÷ 0,79 ≈ 190 g cru de peito desossado por pessoa. Para sobras estilo Ação de Graças, dobre isso.',
      'Um peito de peru com osso é 30–40% osso e pele. Para 6 pessoas querendo 150 g cozidos cada (900 g cozidos, ~1,14 kg de equivalente em peito desossado cru), compre um peito com osso de cerca de 2,7–3 kg, ou um assado desossado de 1,2 kg.',
    ],
    mistakesHeading: 'Erros comuns ao registrar peito de peru',
    mistakes: [
      'Usar dados de rendimento do peru inteiro assado (muitas vezes citados em torno de 70–74%) para um peito puro. O peito sozinho retém cerca de 79%.',
      'Registrar como peru puro o peito de supermercado em salmoura, pré-untado ou "auto-regante". A solução injetada é 8–15% do peso e é água, sal e às vezes gordura.',
      'Tratar fatias de peru de frios como peito assado em casa. O frio carrega água e sódio adicionados e tem a própria tabela nutricional (em peso cozido) — use-a.',
    ],
  },

  'salmon': {
    introHeading: 'Por que o salmão só perde cerca de 15% ao ser cozido',
    intro: [
      'O filé de salmão é um peixe gordo — cerca de 13,4 g de gordura por 100 g cru, a maior parte óleo insaturado distribuído pela carne e concentrado nas linhas de gordura entre as lascas de músculo. Esse óleo é a razão de o salmão dar um rendimento USDA de 85%, o mais alto de qualquer proteína deste site: o músculo do peixe é formado por lascas curtas e delicadas com muito pouco tecido conjuntivo, então firma com suavidade e a gordura o mantém úmido em vez de escorrer.',
      'Quando o salmão cozinha, as proteínas do músculo coagulam e expulsam um pouco de água e aquela substância branca que você vê na superfície — é albumina, uma proteína solúvel em água. Mas os feixes de fibras são curtos e a gordura está em toda parte, então a carne nunca se contrai e se espreme como um peito de frango. A maior parte do peso fica onde estava.',
      'Passar do ponto ainda custa. Acima de 55–60 °C no interior as lascas se apertam, mais albumina e óleo são expulsos, e um filé bem passado pode cair para 78–80%. O salmão de cativeiro, mais gordo que o selvagem, tende a reter um pouco mais de peso que o sockeye selvagem.',
      'Como tão pouco deixa o filé e a gordura fica nele, converter sua porção cozida de volta para o peso cru dá uma leitura de macros exata — incluindo a gordura ômega-3, que é a principal razão pela qual se acompanha o salmão.',
    ],
    methodHeading: 'Um exemplo resolvido: salmão assado, grelhado ou escalfado',
    method: [
      'O site usa um único rendimento de 85% para o salmão (Manual de Agricultura n.º 102 do USDA). Escalfar retém um ponto ou dois a mais; grelhar forte ou assar bem passado, alguns pontos a menos.',
      'Um filé de 170 g (6 oz) cru assado a 190 °C sai a cerca de 170 × 0,85 ≈ 144 g. Escalfado com suavidade ele reteria ~148 g; grelhado até firme e lascando, ~138 g.',
      'Esse filé de 170 g cru é cerca de 354 kcal, 34 g de proteína e 22,8 g de gordura. Se você só pesou a porção cozida, um pedaço de 130 g é 130 ÷ 0,85 ≈ 153 g cru. Filés com pele: a pele é 5–8% do peso e derrete sua gordura mas fica na balança, então pese sem pele se puder, ou subtraia-a.',
    ],
    buyingHeading: 'Quanto salmão cru comprar',
    buying: [
      'Para uma porção cozida de 150 g, compre cerca de 150 ÷ 0,85 ≈ 175 g cru por pessoa. Porções padrão de filé são 140–200 g cru, então uma por pessoa cobre.',
      'Um lado inteiro de salmão é 900 g–1,4 kg e rende cerca de 85% disso cozido — um lado de 1,2 kg dá cerca de 1 kg cozido, ou umas seis a sete porções de 150 g. Reserve mais se o lado tem pele e você vai descartá-la.',
    ],
    mistakesHeading: 'Erros comuns ao registrar salmão',
    mistakes: [
      'Aplicar ao salmão um rendimento de carne como 72%. O peixe retém muito mais peso — o salmão cerca de 85% — então um rendimento de carne infla o peso cru que você calcula de volta e superestima calorias e gordura.',
      'Registrar salmão em lata ou defumado como filé cru fresco. O salmão em lata é cozido e embalado (muitas vezes com sal ou óleo adicionados); o defumado é curado. Ambos têm a própria tabela.',
      'Pesar um filé com pele e registrá-lo como sem pele. A pele acrescenta peso mas não é contada numa entrada sem pele.',
    ],
  },

  'shrimp': {
    introHeading: 'Por que o camarão perde cerca de 25% — e por que parece mais',
    intro: [
      'O camarão é proteína magra quase pura: cerca de 24 g por 100 g cru com apenas 0,3 g de gordura, e um músculo denso e bem compacto num corpo pequeno. Ao cozinhar, as proteínas do músculo se contraem rápido e com força — é a curvatura repentina de um camarão reto cru para um "C" apertado — e expulsam água. O rendimento USDA é 75%, uma perda de 25%, quase toda umidade de superfície e interna.',
      'O encolhimento visual parece maior que a perda de peso porque a curvatura e o aperto concentram a mesma massa numa forma menor e mais densa. Um camarão não perde de verdade um quarto do volume; ele se contrai. A balança diz a verdade melhor que os seus olhos aqui.',
      'Passar do ponto é brutal com o camarão porque não há gordura e as peças são pequenas — alguns segundos a mais e eles vão de "C" a um "O" apertado, borrachudos, com o rendimento caindo ainda mais à medida que mais água é expulsa. Camarões grandes e jumbo retêm proporcionalmente mais peso que os pequenos de salada, que têm mais superfície por grama.',
      'Uma nuance: muito camarão é vendido tratado com tripolifosfato de sódio ou uma salmoura para reter água. Esse camarão pesa mais cru que o camarão "seco" e pode perder mais de 25% ao cozinhar, porque solta água adicionada além da sua própria.',
    ],
    methodHeading: 'Um exemplo resolvido: camarão cozido, salteado ou grelhado',
    method: [
      'O site usa um único rendimento de 75% para o camarão (Manual de Agricultura n.º 102 do USDA), cobrindo cozinhar, no vapor, saltear e grelhar, que chegam próximos entre si para um alimento de cozimento tão rápido.',
      'Comece com 200 g de camarão descascado cru. Cozido ou salteado ele sai a cerca de 200 × 0,75 = 150 g cozido. Grelhado em fogo alto, espere um grama ou dois a menos à medida que a superfície seca.',
      'Esses 200 g crus são cerca de 198 kcal e 48 g de proteína — o camarão é o alimento rico em proteína mais magro deste site. Se você pesou cozido, uma porção de 120 g é 120 ÷ 0,75 = 160 g cru. Camarão com casca: a casca e a cabeça são 30–45% do peso, então pese descascado, ou converta só o peso cozido descascado.',
    ],
    buyingHeading: 'Quanto camarão cru comprar',
    buying: [
      'O camarão é vendido por contagem por libra (por ex. "16/20" = 16–20 camarões por libra, cerca de 23–28 g cada cru). Para uma porção principal cozida de 120 g, compre cerca de 160 g cru descascado por pessoa; para camarão como parte de uma massa ou refogado, 100–120 g cru cada.',
      'Um saco de 454 g (1 lb) de camarão descascado cru cozinha até cerca de 340 g — duas a três porções principais, ou quatro a cinco como componente. Se o saco é com casca, espere que só 55–70% do peso do saco seja comestível antes de cozinhar.',
    ],
    mistakesHeading: 'Erros comuns ao registrar camarão',
    mistakes: [
      'Pesar camarão com casca e registrá-lo como descascado. Cascas e cabeças são de um terço a quase metade do peso cru.',
      'Ignorar a água adicionada por fosfato/salmoura. O camarão tratado pode perder mais que os 25% padrão porque solta água retida — seu peso cozido fica baixo em relação a um pacote "seco".',
      'Registrar camarão congelado pré-cozido contra uma entrada em cru. O camarão pré-cozido já perdeu a água; registre-o por uma entrada de camarão cozido, mais ou menos com o peso do saco.',
    ],
  },

  // ── Grãos, massas e leguminosas ──────────────────────────────────────────

  'white-rice': {
    introHeading: 'Por que o arroz branco seco quase triplica de peso ao ser cozido',
    intro: [
      'O arroz branco seco é cerca de 80% amido e só 10–12% água — foi polido e seco justamente para durar na despensa. Cozinhar é reidratar: os grânulos de amido dentro de cada grão absorvem água, incham e gelatinizam, e o grão quase triplica de peso. O rendimento USDA para arroz branco cozido é 308%, então 100 g secos viram cerca de 308 g cozidos.',
      'Nada se perde — é o oposto da carne. O grão seco ganha toda a diferença de peso da água de cozimento que absorve. Isso significa que as calorias e os macros da sua tigela de arroz cozido vieram todos do peso seco: cerca de 365 kcal, 7,1 g de proteína e 80 g de carboidratos por 100 g seco, agora espalhados por três vezes mais gramas.',
      'Quanta água ele absorve depende do arroz e do método. Um pilaf firme e soltinho fica mais baixo; arroz cozido com água extra até ficar macio, ou lavado e cozido em água abundante, fica mais alto. O arroz parboilizado ("converted") e o instantâneo absorvem ainda mais — em torno de 350–358% — porque o amido deles é pré-gelatinizado.',
      'É o alimento em que as pessoas mais frequentemente pesam cozido e registram certo por acaso, porque muitas entradas de bancos de dados de arroz são em peso cozido. O perigo é misturá-las: registrar 200 g de arroz cozido contra uma entrada em seco "por 100 g" quase triplica a sua contagem de calorias.',
    ],
    methodHeading: 'Cozido vs. parboilizado vs. instantâneo',
    method: [
      'Números USDA para o arroz branco: cozido 308%, parboilizado/converted 358%, instantâneo ou pré-cozido 350%.',
      'Cozinhe 75 g de arroz seco — uma porção individual muito comum — pelo método de absorção e você obtém cerca de 75 × 3,08 ≈ 231 g cozidos. Os mesmos 75 g de arroz parboilizado rendem cerca de 75 × 3,58 ≈ 269 g, e o arroz instantâneo cerca de 263 g, porque o amido pré-cozido retém mais água.',
      'Cada uma dessas tigelas carrega os macros de 75 g seco: cerca de 274 kcal, 5,3 g de proteína, 60 g de carboidratos. No sentido contrário, 250 g de arroz branco cozido são 250 ÷ 3,08 ≈ 81 g seco. Use o seletor de método da calculadora se você cozinha arroz parboilizado ou instantâneo.',
    ],
    buyingHeading: 'Quanto arroz seco cozinhar',
    buying: [
      'Uma porção de acompanhamento cozida padrão é de 150–200 g. Com um rendimento de 308%, isso são cerca de 50–65 g seco por pessoa. Uma "xícara" de arroz seco (cerca de 185 g) cozinha até cerca de 570 g — três a quatro porções de acompanhamento.',
      'Para marmita: cinco porções de 180 g cozidos precisam de cerca de 900 g cozidos, ou cerca de 290 g seco. O arroz dura 4–5 dias cozido e refrigerado, e reaquecer da geladeira não muda o peso que você registrou.',
    ],
    mistakesHeading: 'Erros comuns ao registrar arroz',
    mistakes: [
      'Registrar o peso do arroz cozido contra uma entrada em seco "por 100 g". 200 g cozidos são só cerca de 65 g seco — a entrada em seco triplicaria as suas calorias.',
      'Usar o rendimento do cozido comum para arroz parboilizado ou instantâneo. Esses absorvem mais água (350–358%), então o mesmo peso seco faz mais gramas cozidos.',
      'Supor que o arroz integral se comporta igual. O arroz integral rende cerca de 335% e tem os próprios macros — o farelo muda as duas coisas.',
    ],
  },

  'brown-rice': {
    introHeading: 'Por que o arroz integral expande ainda mais que o branco',
    intro: [
      'O arroz integral é o grão inteiro com o farelo e o germe ainda presos. Essas camadas externas são fibrosas e resistentes à água, então o arroz integral demora mais para cozinhar e precisa de mais água — e acaba absorvendo mais dela. O rendimento USDA é 335%, mais alto que os 308% do arroz branco: 100 g secos viram cerca de 335 g cozidos.',
      'Como no arroz branco, o ganho de peso é água absorvida pura e nada se perde. O grão seco carrega cerca de 370 kcal, 7,9 g de proteína, 77 g de carboidratos e 2,9 g de gordura por 100 g — o germe acrescenta a gordura e parte da proteína — e tudo isso acaba na tigela cozida, só que diluído por mais gramas.',
      'A camada de farelo também é a razão de o arroz integral ficar mais firme e os grãos mais soltos: ela limita fisicamente quanto o amido pode inchar e gelatinizar, então raramente se chega à textura pegajosa de superabsorção que empurra os rendimentos do arroz branco para cima. O custo é um cozimento de 40–50 minutos em vez de 15.',
      'Para a contagem, o ponto-chave é que arroz integral e branco não são entradas intercambiáveis — rendimento diferente, macros diferentes. Registrar uma tigela de arroz integral como branco subestima fibra e gordura e erra a porção.',
    ],
    methodHeading: 'Um exemplo resolvido: arroz integral, de seco a cozido',
    method: [
      'O site usa um único rendimento de 335% para o arroz integral (Manual de Agricultura n.º 102 do USDA), para cozinhar ou o método de absorção.',
      'Cozinhe 75 g de arroz integral seco e você obtém cerca de 75 × 3,35 ≈ 251 g cozidos. Cozinhe uma "xícara" (cerca de 190 g seco) e você obtém cerca de 637 g cozidos — em torno de quatro porções de 160 g.',
      'Esses 75 g seco são cerca de 278 kcal, 5,9 g de proteína, 58 g de carboidratos e 2,2 g de gordura, e esses números não mudam quando viram 251 g cozidos. De volta, 250 g de arroz integral cozido são 250 ÷ 3,35 ≈ 75 g seco.',
    ],
    buyingHeading: 'Quanto arroz integral seco cozinhar',
    buying: [
      'Uma porção de acompanhamento cozida de 160–200 g equivale a cerca de 48–60 g seco por pessoa com um rendimento de 335% — um pouco menos de arroz seco que o branco para a mesma porção cozida, porque o integral expande mais.',
      'Para cinco porções de marmita de 180 g cozidos (900 g no total), cozinhe cerca de 270 g seco. O arroz integral reaquece e congela bem, e o peso cozido que você registrou se mantém após o armazenamento.',
    ],
    mistakesHeading: 'Erros comuns ao registrar arroz integral',
    mistakes: [
      'Registrá-lo como arroz branco. Rendimento diferente (335% vs. 308%) e macros diferentes — você perderia a gordura e subestimaria a fibra.',
      'Registrar o peso cozido contra uma entrada em seco. 200 g de arroz integral cozido são só cerca de 60 g seco.',
      'Supor que "arroz selvagem" ou "basmati integral" correspondem exatamente a esta entrada. Cozinham e absorvem de forma diferente — use a entrada específica mais próxima que puder.',
    ],
  },

  'pasta': {
    introHeading: 'Por que a massa seca um pouco mais que dobra ao ser cozida',
    intro: [
      'A massa seca é sêmola de trigo duro e água, extrudada e seca com firmeza. É mais densa e com menos amido de superfície que o arroz, e é cozida em água abundante em vez de absorver uma quantidade medida, então capta proporcionalmente menos: o rendimento aqui é 225%, ou seja, 100 g secos viram cerca de 225 g cozidos num ponto normal, um pouco além do al dente.',
      'O ganho de peso é água de cozimento absorvida e — como em todos os grãos — nada se perde, então os macros continuam ligados ao peso seco: cerca de 371 kcal, 13 g de proteína e 75 g de carboidratos por 100 g seco, agora carregados em 225 g de massa cozida. A massa cozida dá portanto cerca de 160 kcal por 100 g contra 371 seco.',
      'O ponto de cozimento é tudo para o rendimento da massa. Escorrida al dente firme, a massa fica mais perto de 200%; cozida mole, ou mantida no molho e deixada descansar, ela continua absorvendo e passa de 240%. A massa fresca ao ovo é outra coisa — parte com mais umidade e ganha menos.',
      'O formato também conta. Massa longa e fina e formatos pequenos absorvem mais rápido e de forma mais uniforme; rigatoni grosso ou conchas grandes ficam mais baixos. Esta entrada é uma média de massa seca genérica; massa longa como espaguete fica mais alta.',
    ],
    methodHeading: 'Um exemplo resolvido: al dente vs. bem cozida',
    method: [
      'O site usa um único rendimento de 225% para massa seca genérica (USDA FoodData Central, cru vs. cozido). Trate o al dente firme como cerca de 200% e a massa mole ou mantida no molho como 240% ou mais.',
      'Uma porção seca de 57 g (2 oz) — a porção padrão da caixa — cozinha até cerca de 57 × 2,25 ≈ 128 g. Uma porção seca de 85 g (um prato principal mais realista) rende cerca de 191 g cozidos. Cozinhe esses mesmos 85 g moles e podem chegar a 205–215 g.',
      'Os macros seguem o peso seco de qualquer forma: 85 g seco são cerca de 315 kcal, 11 g de proteína, 64 g de carboidratos. De volta, 250 g de massa cozida são 250 ÷ 2,25 ≈ 111 g seco — vale conferir, porque uma "porção" de restaurante de massa cozida costuma ser de 300–400 g, ou seja, 130–180 g seco.',
    ],
    buyingHeading: 'Quanta massa seca cozinhar',
    buying: [
      'A caixa diz 57 g (2 oz) seco por pessoa; isso é um acompanhamento leve. Um prato principal satisfatório é de 85–100 g seco, que cozinham até cerca de 190–225 g. Uma caixa de 500 g alimenta cerca de cinco pessoas como principal ou oito como acompanhamento.',
      'Para marmita, cozinhe a massa um ponto mais firme — ela continua absorvendo molho e umidade na geladeira, e partir do al dente mantém a porção reaquecida mais perto do peso que você registrou.',
    ],
    mistakesHeading: 'Erros comuns ao registrar massa',
    mistakes: [
      'Registrar a massa cozida contra uma entrada em seco "por 100 g". 250 g cozidos são só cerca de 110 g seco — a entrada em seco mais que dobraria as suas calorias.',
      'Usar um rendimento para todos os pontos. O al dente (~200%) e a mole (~240%) diferem o suficiente para importar numa porção grande.',
      'Pesar a massa depois de ela descansar no molho. Ela absorveu peso de molho e mais água; pese a massa escorrida e registre o molho à parte.',
    ],
  },

  'quinoa': {
    introHeading: 'Por que a quinoa expande para cerca de 3× o peso seco',
    intro: [
      'A quinoa é uma pequena semente de pseudocereal — botanicamente não é um grão de gramínea, embora cozinhe como um. Cada semente é densa em amido mas também carrega mais proteína (14,1 g por 100 g seco) e gordura (6,1 g) que o arroz, junto com um anel externo de germe que se desenrola naquele pequeno "rabinho" branco que você vê na quinoa cozida. Ela absorve água com facilidade e dá um rendimento de 314%: 100 g secos viram cerca de 314 g cozidos.',
      'Como todos os grãos e leguminosas daqui, a quinoa ganha peso em vez de perder, e o ganho é inteiramente água de cozimento absorvida. Os macros pertencem à semente seca e são simplesmente espalhados de forma mais fina depois de cozidos — a quinoa cozida fica em torno de 117 kcal por 100 g contra 368 seco.',
      'A quinoa costuma ser cozida por absorção numa proporção fixa (cerca de 1 parte de semente para 1,75–2 de água), então o rendimento dela é bastante estável em comparação com os grãos de ferver e escorrer. Torrar a semente seca primeiro ou lavar a camada amarga de saponina muda mais o sabor do que o rendimento.',
      'Para quem conta macros, o atrativo da quinoa é o perfil de proteína mais fibra, então acertar a porção importa. Os macros dela em seco são próximos dos do arroz em calorias mas bem diferentes em proteína e gordura — não troque as entradas.',
    ],
    methodHeading: 'Um exemplo resolvido: quinoa, de seca a cozida',
    method: [
      'O site usa um único rendimento de 314% para a quinoa (USDA FoodData Central, calculado a partir das proporções de nutrientes cru vs. cozido), para o método de absorção padrão.',
      'Cozinhe 90 g de quinoa seca — uma porção individual generosa — e você obtém cerca de 90 × 3,14 ≈ 283 g cozidos. Uma "xícara" de quinoa seca (cerca de 170 g) rende cerca de 534 g cozidos, ou três a quatro porções.',
      'Esses 90 g seco são cerca de 331 kcal, 12,7 g de proteína, 58 g de carboidratos e 5,5 g de gordura, e nada disso muda quando viram 283 g cozidos. De volta, 250 g de quinoa cozida são 250 ÷ 3,14 ≈ 80 g seco.',
    ],
    buyingHeading: 'Quanta quinoa seca cozinhar',
    buying: [
      'Uma porção cozida de 180–220 g equivale a cerca de 57–70 g seco por pessoa. Para uma salada em que a quinoa é a base, puxe para o extremo alto; como acompanhamento junto de uma proteína, 50–60 g seco bastam.',
      'Para cinco tigelas de marmita de 200 g cozidos (1 kg no total), cozinhe cerca de 320 g de quinoa seca. Ela segura a textura na geladeira melhor que o arroz e não precisa ser reaquecida para tigelas de grãos frias.',
    ],
    mistakesHeading: 'Erros comuns ao registrar quinoa',
    mistakes: [
      'Registrar a quinoa cozida contra uma entrada em seco. 250 g cozidos são só cerca de 80 g seco — um erro de calorias de cerca do triplo.',
      'Trocar as entradas de quinoa e arroz porque "os dois são grãos". A quinoa tem quase o dobro de proteína e muito mais gordura por grama seco.',
      'Pesar a quinoa numa salada temperada e registrá-la como pura. O tempero e qualquer óleo adicionado são à parte — pese a quinoa cozida pura antes de incorporá-la.',
    ],
  },

  'lentils': {
    introHeading: 'Por que a lentilha seca quase triplica de peso ao ser cozida',
    intro: [
      'A lentilha seca é cerca de 11–12% água, 60 g de carboidratos e notáveis 25,8 g de proteína por 100 g — o alimento integral mais proteico desta lista depois da soja. Cozinha absorvendo água na sua matriz de amido e proteína e inchando, sem remolho estritamente necessário porque são pequenas e de casca fina. O rendimento USDA para lentilhas cozidas ou assadas até bem macias é 289%: 100 g secos viram cerca de 289 g cozidos.',
      'Nada se perde; a diferença de peso é inteiramente líquido de cozimento absorvido. Então a proteína e os carboidratos da sua tigela de dal ou sopa de lentilha vieram inteiros do peso seco — cerca de 353 kcal, 25,8 g de proteína e 60 g de carboidratos por 100 g seco, diluídos por quase três vezes os gramas cozidos.',
      'O tipo de lentilha e o ponto de cozimento fazem o resultado variar. Lentilhas vermelhas e amarelas partidas se desfazem em purê e absorvem muito; lentilhas verdes firmes ou de Puy cozidas brevemente ficam inteiras e absorvem menos. O USDA observa que lentilhas cozidas só 20 minutos chegam a 261%, contra 289% quando cozidas ou assadas até bem macias — uma diferença real se você as prefere com mordida.',
      'Lentilhas em lata já estão cozidas e ficam perto desse peso plenamente hidratado; escorrida, uma lata de 400 g dá cerca de 240 g, equivalente a cerca de 85 g seco.',
    ],
    methodHeading: 'Bem cozidas vs. fervura de 20 minutos',
    method: [
      'Números USDA para lentilhas: cozidas ou assadas até bem macias 289%, cozidas 20 minutos 261%.',
      'Cozinhe 100 g de lentilhas secas até bem macias para um dal e você obtém cerca de 289 g. Cozinhe os mesmos 100 g só 20 minutos para uma lentilha firme de salada e você obtém cerca de 261 g — 28 g a menos do mesmo ponto de partida, porque estão menos hidratadas.',
      'As duas carregam os macros de 100 g seco: cerca de 353 kcal, 25,8 g de proteína, 60 g de carboidratos. De volta, 200 g de lentilhas macias cozidas são 200 ÷ 2,89 ≈ 69 g seco. Para uma lata escorrida, divida o peso escorrido por cerca de 2,85.',
    ],
    buyingHeading: 'Quantas lentilhas secas cozinhar',
    buying: [
      'Uma porção cozida robusta num ensopado ou dal é de 200–250 g, que são cerca de 70–85 g seco por pessoa. Como acompanhamento, 50 g seco bastam.',
      'Uma "xícara" de lentilhas secas (cerca de 190 g) cozinha até cerca de 550 g — três a quatro porções. Para cinco porções de marmita de 220 g cozidos (1,1 kg), cozinhe cerca de 380 g seco.',
    ],
    mistakesHeading: 'Erros comuns ao registrar lentilhas',
    mistakes: [
      'Registrar lentilhas cozidas ou em lata contra uma entrada em seco "por 100 g". 200 g cozidos são só cerca de 70 g seco.',
      'Usar o rendimento de bem macias (289%) para lentilhas firmes cozidas brevemente (261%) ou vice-versa. Ajuste ao ponto de cozimento que você realmente fez.',
      'Tratar uma lata escorrida como seu peso de rótulo completo em equivalente seco. Uma lata de 400 g escorre para ~240 g, cerca de 85 g seco.',
    ],
  },

  'black-beans': {
    introHeading: 'Por que o feijão-preto seco incha para cerca de 2,5× ao ser cozido',
    intro: [
      'O feijão-preto seco é uma semente dura e de baixa umidade — cerca de 12% água, 62 g de carboidratos e 21,6 g de proteína por 100 g — com uma casca grossa e cerosa feita para manter a água fora até o feijão germinar. Cozinhá-lo é um remolho em duas fases: absorve água durante o remolho, depois absorve mais e gelatiniza o amido durante o cozimento. O rendimento derivado do USDA é 250%, então 100 g secos viram cerca de 250 g cozidos — um múltiplo menor que o da lentilha porque essa casca dura limita o inchaço.',
      'O ganho de peso é inteiramente água absorvida; nada escapa a não ser um pouco de cor e parte dos oligossacarídeos que causam gases. Os macros ficam com o peso seco: cerca de 341 kcal, 21,6 g de proteína e 62 g de carboidratos por 100 g seco, agora espalhados por 2,5× os gramas cozidos, então o feijão-preto cozido fica em torno de 130–135 kcal por 100 g.',
      'O remolho, a idade do feijão e a água dura movem o número. Feijões velhos e água dura, rica em minerais, resistem à hidratação e rendem um pouco menos; um remolho longo e uma pitada de bicarbonato empurram a absorção para cima. Feijões "de cozimento rápido" sem remolho tendem a ficar mais baixos e cozinham de forma desigual.',
      'O feijão-preto em lata está plenamente cozido e perto desse peso hidratado — uma lata de 400 g escorre para cerca de 240–260 g, equivalente a cerca de 100 g seco.',
    ],
    methodHeading: 'Um exemplo resolvido: feijão seco e feijão em lata',
    method: [
      'O site usa um único rendimento de 250% para o feijão-preto (USDA FoodData Central, calculado a partir das proporções de nutrientes cru vs. cozido).',
      'Cozinhe 100 g de feijão-preto seco (de remolho, depois cozido até macio) e você obtém cerca de 250 g de feijão cozido e escorrido. Uma "xícara" de feijão seco (cerca de 190 g) rende cerca de 475 g cozidos — perto de 3 xícaras.',
      'Esses 100 g seco são cerca de 341 kcal, 21,6 g de proteína, 62 g de carboidratos. De volta, 250 g de feijão cozido em casa são 250 ÷ 2,5 = 100 g seco; uma lata de 400 g escorrida para 250 g também são cerca de 100 g de equivalente seco. Se o rótulo da sua lata dá macros em peso cozido, isso é o mais simples de registrar direto.',
    ],
    buyingHeading: 'Quanto feijão-preto seco cozinhar',
    buying: [
      'Uma porção cozida como acompanhamento ou numa tigela é de 130–160 g, cerca de 55–65 g seco por pessoa. Uma lata de 400 g (≈240 g escorridos) serve duas a três pessoas.',
      'Um saco de 454 g (1 lb) de feijão seco cozinha até cerca de 1,1 kg — cerca de sete a oito porções, ou o equivalente a quatro latas e meia, por uma fração do custo. Para cinco porções de marmita de 150 g cozidos, cozinhe cerca de 300 g seco.',
    ],
    mistakesHeading: 'Erros comuns ao registrar feijão-preto',
    mistakes: [
      'Registrar feijão cozido ou em lata contra uma entrada em seco "por 100 g". 250 g cozidos são 100 g seco — a entrada em seco multiplicaria as suas calorias por cerca de 2,5.',
      'Registrar feijão em lata sem escorrer. O líquido (aquafaba) acrescenta peso e algum sódio; escorra e, de preferência, enxágue antes de pesar.',
      'Supor que todos os feijões compartilham um rendimento. O feijão-preto fica em torno de 250%; a lentilha está em 289% e o feijão-vermelho em torno de 238% — perto, mas não idêntico.',
    ],
  },

  // ── Vegetais ─────────────────────────────────────────────────────────────

  'broccoli': {
    introHeading: 'Por que o brócolis cozido sai pesando quase exatamente o mesmo',
    intro: [
      'O brócolis é cerca de 89% água, retida em paredes celulares bastante rígidas e com muita superfície — todos aqueles buquês e o talo. Ao cozinhá-lo, duas coisas opostas acontecem e mais ou menos se cancelam: um pouco de água celular se perde enquanto as paredes amolecem e o tecido colapsa, mas os buquês também prendem e absorvem água fervendo nas fendas e nas superfícies de corte. O rendimento líquido USDA do brócolis cozido é 100% — nenhuma mudança de peso mensurável.',
      'Isso torna o brócolis quase único neste site: peso cru e cozido são intercambiáveis para a contagem, então uma porção de 100 g crua continua ~100 g cozida e carrega as mesmas 34 kcal, 2,8 g de proteína e 6,6 g de carboidratos. Os nutrientes que mudam — a vitamina C que passa para a água de cozimento, por exemplo — não afetam os macros nem o peso.',
      'O método pende um pouco a balança. No vapor, sem banho para absorver, fica um pouco abaixo, em 95%. Na panela de pressão a água é forçada para dentro do tecido e sobe um pouco acima, para 104%. Assado, o que este conjunto de dados não pontua, expulsaria água de verdade e ficaria muito mais baixo.',
      'A conclusão prática: se você cozinha ou faz no vapor o seu brócolis, pode pesá-lo quando for conveniente e o número se mantém.',
    ],
    methodHeading: 'Cozido vs. no vapor vs. panela de pressão',
    method: [
      'Números USDA por método para o brócolis: cozido 100%, no vapor 95%, panela de pressão 104%.',
      'Pegue 150 g de buquês de brócolis crus. Cozidos, saem a cerca de 150 g cozidos. No vapor, mais perto de 150 × 0,95 ≈ 143 g, porque não há água de banho para captar. Na panela de pressão, cerca de 150 × 1,04 = 156 g enquanto o tecido é forçado a se encher de água.',
      'Os três carregam os macros de 150 g cru: cerca de 51 kcal, 4,2 g de proteína e 9,9 g de carboidratos. Como a diferença é tão pequena, registrar o peso do brócolis cru para uma porção cozida ou no vapor é exato até um erro de arredondamento — a calculadora importa aqui sobretudo para o brócolis assado, que não está neste conjunto de dados e perde muito mais.',
    ],
    buyingHeading: 'Quanto brócolis cru comprar',
    buying: [
      'Uma porção de vegetal cozida é de cerca de 80–120 g. Como o rendimento é ~100%, esse é praticamente o mesmo peso cru: compre 100–120 g de buquês por pessoa.',
      'Uma cabeça inteira de brócolis é de 300–500 g, dos quais a coroa é cerca de 60–70% e o talo o resto (comestível se descascado). Uma cabeça grande serve três a quatro pessoas como acompanhamento. O brócolis congelado é pré-branqueado e se comporta igual na balança.',
    ],
    mistakesHeading: 'Erros comuns ao registrar brócolis',
    mistakes: [
      'Supor que o brócolis cozido encolhe como outras folhas e registrar a porção a menos. Não encolhe — o rendimento é de cerca de 100%.',
      'Aplicar o rendimento do cozido/vapor ao brócolis assado. Assar expulsa água substancial; uma porção assada pode pesar 30–50% menos que crua, e este conjunto de dados não cobre isso.',
      'Pesar o brócolis com manteiga, azeite ou molho de queijo adicionados. Registre o vegetal cozido puro e a gordura à parte.',
    ],
  },

  'spinach': {
    introHeading: 'Por que o espinafre quase não perde peso mesmo com a panela parecendo vazia',
    intro: [
      'O espinafre é o alimento mais mal avaliado deste site. Uma panela grande de folhas cruas murcha até umas poucas garfadas, então parece que perdeu quase todo o peso. Não perdeu: o rendimento USDA do espinafre cozido é 77%, uma perda de apenas cerca de 23%. 100 g de folhas cruas ainda são cerca de 77 g cozidas.',
      'A razão é que volume e peso são duas coisas diferentes. As folhas de espinafre cruas são sobretudo ar e estrutura rígida — lâminas finas de tecido que mantêm a forma, com muito espaço entre elas. O calor destrói essa estrutura quase instantaneamente: as paredes celulares ficam moles, as folhas colapsam umas contra as outras e todo o ar é expulso. O volume despenca. Mas a água dentro das células ainda está lá em grande parte, e a água é o que pesa alguma coisa.',
      'As folhas perdem o volume muito antes de perder a massa. Um pouco de água celular de fato cozinha para fora — são os 23% — mas o encolhimento dramático que você vê é ar e geometria, não peso.',
      'O método importa mais para o espinafre do que para quase qualquer outro vegetal. No vapor ele fica em 93%; cozido cai para 77%; na panela de pressão cai para 68% à medida que o calor forçado expulsa mais água celular.',
    ],
    methodHeading: 'No vapor vs. cozido vs. panela de pressão',
    method: [
      'Números USDA por método para o espinafre: no vapor 93%, cozido 77%, panela de pressão 68%.',
      'Comece com 200 g de espinafre cru — um saco grande, talvez 4–5 litros de folhas soltas. No vapor, sai a cerca de 200 × 0,93 = 186 g. Cozido e espremido, cerca de 200 × 0,77 = 154 g. Na panela de pressão, cerca de 200 × 0,68 = 136 g. Tudo cabe numa tigela pequena independentemente do método.',
      'Cada porção carrega os macros de 200 g cru: cerca de 46 kcal, 5,8 g de proteína e 7,2 g de carboidratos. De volta, 100 g de espinafre cozido vieram de 100 ÷ 0,77 ≈ 130 g cru — então um "punhadinho" de espinafre cozido pode representar uma porção de folhas genuinamente grande.',
    ],
    buyingHeading: 'Quanto espinafre cru comprar',
    buying: [
      'O espinafre cru para cozinhar murcha tanto que as porções parecem minúsculas — conte com 150–200 g cru por pessoa para um acompanhamento cozido, que rende só cerca de 115–155 g cozidos mas representa uma porção nutricional grande.',
      'Um saco "família" de 200 g serve generosamente uma pessoa como acompanhamento cozido ou modestamente duas. Para um prato com muito espinafre como um saag ou um recheio, compre 250–300 g cru por pessoa. O espinafre picado congelado já está branqueado e escorrido — um bloco de 250 g equivale a cerca de 700–800 g de folhas cruas.',
    ],
    mistakesHeading: 'Erros comuns ao registrar espinafre',
    mistakes: [
      'Supor uma perda de peso de ~70% porque a panela parece vazia. A perda real é de cerca de 23%; o truque de mágica é volume, não peso.',
      'Usar o rendimento do cozido (77%) para o espinafre no vapor (93%) — isso é um erro de 16 pontos, maior que o da maioria dos alimentos.',
      'Registrar espinafre cozido espremido e escorrido e depois não contar a água que você espremeu. Se você espremeu com força, pese o que resta e trate como um equivalente em cru menor.',
    ],
  },

  'potato': {
    introHeading: 'Por que uma batata cozida quase não encolhe mas a batata frita perde quase metade',
    intro: [
      'Uma batata crua é cerca de 79% água trancada numa estrutura de amido densa e uniforme com uma casca fina. Cozida ou no vapor, essa estrutura retém a água notavelmente bem — a casca e o amido que gelatiniza agem como barreira — então uma batata cozida mantém cerca de 94% do peso e uma no vapor cerca de 99%. Só um pouco de água de superfície se perde.',
      'Os macros são modestos e dominados por carboidratos: cerca de 77 kcal, 2 g de proteína e 17,5 g de carboidratos por 100 g cru. Como cozinhar perde tão pouco, peso cru e cozido ficam próximos o suficiente para registrar uma porção de batata cozida de qualquer forma sem muito erro.',
      'O que muda tudo é o calor seco e gorduroso. Assar uma batata com a casca untada baixa o rendimento para 81%; fritar em imersão para batatas fritas o derruba para cerca de 55%, e o hash brown para cerca de 60%. Fritar faz duas coisas ao mesmo tempo — evapora uma grande fração da água e substitui parte dela por óleo absorvido, então uma batata frita é ao mesmo tempo mais leve que a batata crua e muito mais densa em calorias, um golpe duplo que os macros da batata crua ignoram por completo.',
      'Então o método de cozimento não é um detalhe de arredondamento para a batata; é a diferença entre um rendimento de 94% e um de 55%, e entre "só uma batata" e "uma batata mais muito óleo".',
    ],
    methodHeading: 'Cozida vs. assada vs. frita',
    method: [
      'Números USDA por método para a batata: no vapor 99%, assada em papel-alumínio 95%, cozida 94%, assada com casca untada 81%, hash brown 60%, frita 55%.',
      'Pegue uma batata de 200 g crua. Cozida, cerca de 200 × 0,94 = 188 g. Assada com a casca untada, cerca de 200 × 0,81 = 162 g. Transformada em batatas fritas, cerca de 200 × 0,55 = 110 g — mais o óleo que ela absorveu, que o número de rendimento não inclui.',
      'Os macros crus dessa batata de 200 g são cerca de 154 kcal, 4 g de proteína, 35 g de carboidratos. Eles valem para as versões cozida e assada. Para as fritas, a contribuição da batata está certa mas você precisa somar o óleo de fritura à parte — normalmente 5–10 g de gordura por 100 g de batatas fritas prontas — ou o registro subestimará muito as calorias.',
    ],
    buyingHeading: 'Quanta batata crua comprar',
    buying: [
      'Uma porção de acompanhamento é de 150–250 g cru. Para purê, compre cerca de 200–250 g cru por pessoa (perde um pouco ao cozinhar, e depois você acrescenta leite e manteiga à parte). Para uma batata assada, uma de 200–300 g por pessoa.',
      'Um saco de 2 kg de batatas são cerca de oito a dez batatas médias — acompanhamentos de jantar para uma família por várias noites. Para batatas fritas, lembre que você perde quase metade do peso: 1 kg de batata crua faz só cerca de 550 g de batatas fritas.',
    ],
    mistakesHeading: 'Erros comuns ao registrar batata',
    mistakes: [
      'Usar o rendimento do cozido (94%) para batatas assadas com óleo ou batatas fritas. A batata assada com óleo fica em torno de 81% e as fritas em cerca de 55% — e as duas levam óleo adicionado por cima.',
      'Registrar batatas fritas como "batata" sem gordura adicionada. O óleo é muitas vezes um terço ou mais das calorias de uma porção de fritas.',
      'Pesar o purê e registrá-lo como batata pura. O purê inclui leite, manteiga ou creme — pese a batata antes de amassar, ou registre os acréscimos à parte.',
    ],
  },

  'sweet-potato': {
    introHeading: 'Por que a batata-doce assada perde peso mas a batata-doce cozida ganha',
    intro: [
      'A batata-doce é mais úmida e mais doce que uma batata comum — cerca de 77% água, 20 g de carboidratos por 100 g cru, boa parte como açúcares, além de mais fibra solúvel. Essa composição faz com que ela se comporte de forma diferente conforme o calor a esteja secando ou a água esteja encharcando.',
      'Assada, uma batata-doce perde cerca de 22% do peso — um rendimento de 78%. O calor seco do forno evapora água da superfície e perto dela, os açúcares se concentram e caramelizam (aquele exterior pegajoso e doce), e a polpa fica mais densa. Por isso uma batata-doce assada tem gosto muito mais doce que uma cozida: mesmo açúcar, menos água.',
      'Cozida, vai no sentido contrário e de fato ganha peso — um rendimento de 101% — porque a polpa absorve parte da água de cozimento, um pouco mais do que perde. No vapor fica logo abaixo, em 98%. Então a mesma batata-doce crua pode sair mais pesada ou mais leve do que começou dependendo do método.',
      'Para a contagem, isso significa que a escolha do método inverte o sinal da correção: asse e você registra menos que o peso cru, cozinhe e você registra um pouco mais.',
    ],
    methodHeading: 'Assada vs. cozida vs. no vapor',
    method: [
      'Números USDA por método para a batata-doce: cozida 101%, no vapor 98%, assada 78%.',
      'Pegue uma batata-doce de 150 g crua. Assada, sai a cerca de 150 × 0,78 ≈ 117 g — bem menor e mais densa. Cozida, cerca de 150 × 1,01 ≈ 152 g. No vapor, cerca de 150 × 0,98 = 147 g.',
      'Todas carregam os macros de 150 g cru: cerca de 129 kcal, 2,4 g de proteína e 30 g de carboidratos. Então uma batata-doce assada de 117 g e uma cozida de 152 g a partir de batatas cruas idênticas têm as mesmas calorias — a assada só parece mais concentrada. De volta: uma porção assada de 120 g é 120 ÷ 0,78 ≈ 154 g cru.',
    ],
    buyingHeading: 'Quanta batata-doce crua comprar',
    buying: [
      'Uma porção de acompanhamento é de 150–200 g cru. Para batata-doce assada, compre uma de 200–250 g por pessoa, sabendo que ela vai assar até cerca de 155–195 g. Para purê ou cubos cozidos, 150–200 g cru cada bastam, já que o peso quase não cai.',
      'As batatas-doces variam muitíssimo de tamanho — uma "média" vai de 130 g a 250 g — então pese em vez de contar. Um lote de 1 kg assado rende cerca de 780 g de polpa cozida (um pouco menos depois de descartar a casca).',
    ],
    mistakesHeading: 'Erros comuns ao registrar batata-doce',
    mistakes: [
      'Supor que ela se comporta como uma batata comum. A batata-doce assada perde cerca de 22% (rendimento de 78%); a batata comum assada em papel-alumínio perde só cerca de 5%.',
      'Usar o rendimento de assada para a batata-doce cozida. Cozida, ela ganha um pouco de peso (101%), então converter com 78% subestimaria muito a sua porção.',
      'Registrar batata-doce frita ou batata-doce caramelizada como pura. As fritas levam óleo absorvido; as versões caramelizadas acrescentam manteiga e açúcar — registre-as à parte.',
    ],
  },
};
