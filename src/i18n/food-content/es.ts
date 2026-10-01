/**
 * Spanish long-form food-page content. Full translation of the English source
 * in `../food-content.ts`; every gram and percentage figure is kept identical.
 */
import type { FoodLongContent } from '../food-content';

export const ES: Record<string, FoodLongContent> = {
  // ── Carne, aves y mariscos ───────────────────────────────────────────────

  'chicken-breast': {
    introHeading: 'Por qué la pechuga de pollo encoge alrededor del 28% al cocinarse',
    intro: [
      'La pechuga de pollo sin piel y sin hueso es agua en aproximadamente un 74% de su peso y músculo casi puro: unos 22,5 g de proteína y apenas 2,6 g de grasa por cada 100 g en crudo. Hay muy poca grasa y casi nada de tejido conectivo que retenga la humedad, así que cuando las fibras musculares reciben calor se comportan como una esponja que se escurre: las proteínas se desnaturalizan hacia los 60–65 °C, los haces de fibras se contraen a lo largo y a lo ancho, y el agua que retenían sale a la sartén. Esa pérdida de agua es prácticamente todo el 28% que baja la pechuga hasta un rendimiento USDA del 72%.',
      'Como la pérdida es casi toda agua y apenas grasa, la proteína con la que empezaste se queda en la carne. Una pechuga de 200 g en crudo sigue conteniendo unos 45 g de proteína después de cocinarse: solo que ahora están concentrados en unos 144 g en lugar de 200 g, por eso la pechuga cocida da alrededor de 31 g de proteína por 100 g mientras que en crudo da 22,5 g. La misma proteína, menos agua, carne más densa.',
      'La pechuga de pollo castiga la sobrecocción más que los cortes grasos. Sin grasa ni colágeno que amortigüen, cada minuto de más por encima de 74 °C internos expulsa más agua y empuja el rendimiento hacia mediados de los 60. Los filetes finos aplanados y los solomillos pequeños pierden una proporción mayor que una pechuga entera y gruesa porque tienen más superficie de evaporación respecto a su masa.',
      'Es el alimento que la mayoría de las apps de conteo equivocan en la misma dirección: pesan la pechuga cocida, buscan una tabla nutricional en peso crudo y, sin darse cuenta, subestiman su proteína en una cuarta parte. La solución es siempre registrar el equivalente en peso crudo, que es lo que devuelve esta calculadora conviertas en el sentido que conviertas.',
    ],
    methodHeading: 'Al horno, a la parrilla o escalfada: un ejemplo resuelto',
    method: [
      'El calor seco y fuerte evapora más humedad superficial que el calor húmedo y suave, así que el método de cocción mueve el rendimiento unos siete puntos. Datos USDA para pechuga sin piel: al horno o asada 72%, a la sartén 72%, a la parrilla 70%, hervida o escalfada 77%.',
      'Parte de una pechuga de 200 g en crudo. Al horno a 200 °C sale a 200 × 0,72 ≈ 144 g cocida. A la parrilla sobre llama directa, la misma pechuga queda en 200 × 0,70 = 140 g: el dorado extra y el calor radiante te cuestan unos gramos más. Escalfada en agua apenas hirviendo retiene 200 × 0,77 = 154 g, porque la carne está rodeada de agua en vez de aire seco y casi nada se evapora.',
      'Las tres porciones llevan los mismos macros, porque todas venían de 200 g en crudo: unas 240 kcal, 45 g de proteína y 5,2 g de grasa. Si solo tienes el peso cocido, divide entre el rendimiento de tu método: una porción de 150 g a la parrilla es 150 ÷ 0,70 ≈ 214 g en crudo; al horno, esos mismos 150 g son 150 ÷ 0,72 ≈ 208 g en crudo. Usa el selector de método de cocción de la calculadora para elegir el divisor correcto automáticamente.',
    ],
    buyingHeading: 'Cuánta pechuga de pollo cruda comprar',
    buying: [
      'Calcula hacia atrás desde la porción cocida que quieres en el plato. Para 150 g cocidos, compra unos 150 ÷ 0,72 ≈ 210 g en crudo por persona si vas a hornear o asar; más cerca de 215 g si vas a hacerla a la parrilla. Para una porción cocida de 170 g (6 oz), cuenta con unos 235–240 g en crudo por persona.',
      'Las pechugas envasadas suelen pesar 200–280 g cada una, así que una pechuga media alimenta a un adulto con hambre y sobra un poco, y una bandeja de 1 kg con tres o cuatro pechugas rinde unos 700–720 g cocidos, alrededor de cuatro porciones de 175 g. Si preparas cinco raciones de 150 g cocidos, parte de unos 1,05 kg en crudo.',
    ],
    mistakesHeading: 'Errores habituales al registrar pechuga de pollo',
    mistakes: [
      'Pesar después de cocinar y registrarlo contra una tabla en crudo «por 100 g». Una pechuga cocida de 150 g equivale a unos 208 g en crudo; registrar 150 g te resta unos 13 g de proteína y 70 kcal.',
      'Usar el rendimiento de escalfado/hervido (77%) para una pechuga que en realidad hiciste a la parrilla (70%). Eso es un error del 10% en el peso crudo que calculas hacia atrás.',
      'Registrar como pollo natural una pechuga «marinada» o en salmuera comprada ya sazonada. La solución añadida puede ser un 10–15% del peso del envase y es sobre todo agua y sal, no proteína.',
    ],
  },

  'chicken-thigh': {
    introHeading: 'Por qué el muslo de pollo pierde más que la pechuga',
    intro: [
      'El muslo deshuesado y sin piel es carne oscura: los músculos que el pollo usa para estar de pie y caminar. Trabajan más que la pechuga, así que llevan más mioglobina, más grasa intramuscular (unos 4,6 g por 100 g en crudo frente a 2,6 g de la pechuga) y bastante más tejido conectivo. Esa estructura es la razón de que el muslo se cocine hasta un rendimiento al horno del 69% —una pérdida de en torno al 31%— mientras que la pechuga retiene el 72%.',
      'Dos cosas salen de la carne a la vez. El agua se expulsa al contraerse las fibras, igual que en cualquier músculo, y la grasa se derrite: el calor más alto del asado o el gratinado funde la grasa intramuscular y esta escurre con los jugos. Un corte más graso, con más grasa que fundir, pierde más peso total, aunque el colágeno que contiene esté a la vez transformándose en gelatina y reteniendo algo de humedad.',
      'Ese colágeno también hace que el muslo perdone más al comerlo que la pechuga con el mismo rendimiento. Pasa de cocción una pechuga y queda seca y fibrosa; pasa de cocción un muslo y el tejido conectivo se ha deshecho lo suficiente como para que siga resultando jugoso. La balanza sigue mostrando la pérdida de peso aunque tu boca no la note.',
      'Para el conteo, el muslo importa porque la horquilla entre métodos es enorme —más amplia que casi cualquier otro corte de esta web—, así que un único número de rendimiento para «pollo» no basta aquí.',
    ],
    methodHeading: 'La mayor diferencia entre métodos de cualquier corte de pollo',
    method: [
      'El USDA documenta el muslo deshuesado desde el 59% frito en aceite abundante hasta el 80% rebozado y frito, con estofado al 73%, al horno tipo fritura al 66%, a la sartén al 66%, gratinado al 61% y a la barbacoa al 64%. La cifra de referencia del 69% es el valor al horno o asado.',
      'Toma un muslo de 150 g en crudo. Estofado en salsa retiene 150 × 0,73 ≈ 110 g. Gratinado cerca de la resistencia baja a 150 × 0,61 ≈ 92 g: 18 g de diferencia respecto a la versión estofada de la misma pieza de carne. Al horno tipo fritura queda en 150 × 0,66 = 99 g.',
      'Cada una de esas porciones sigue registrándose como 150 g en crudo: unas 192 kcal, 30,6 g de proteína y 6,9 g de grasa. La cifra del rebozado frito (80%) es la rara: parece un rendimiento alto solo porque el rebozado y el aceite absorbido añaden peso que nunca fue pollo, así que no la uses para calcular hacia atrás los macros del muslo magro.',
    ],
    buyingHeading: 'Cuánto muslo de pollo crudo comprar',
    buying: [
      'Los muslos deshuesados y sin piel pesan de media 90–130 g cada uno en crudo. Para una porción cocida de 120 g, compra unos 120 ÷ 0,69 ≈ 175 g en crudo por persona al asar u hornear: más o menos dos muslos pequeños o uno y medio grandes.',
      'Un paquete de 1 kg de muslos deshuesados se asa hasta unos 690 g cocidos, o cuatro porciones de 170 g. Si estofas para un curry o un guiso, el rendimiento sube al 73% y ese mismo kilo te da unos 730 g de carne cocida.',
    ],
    mistakesHeading: 'Errores habituales al registrar muslo de pollo',
    mistakes: [
      'Reutilizar el rendimiento de la pechuga de pollo (72%) para los muslos. El muslo va más bajo en casi todos los métodos; al horno es 69%, y gratinado se acerca al 61%.',
      'Registrar muslos con hueso y piel por el peso crudo del envase como si fuera carne comestible. Piel y hueso son un 25–35% de un muslo con hueso, y la piel es casi toda grasa.',
      'Tratar el muslo rebozado y frito (80% de «rendimiento») como pollo magro. El peso extra es rebozado y aceite, no proteína: esa porción tiene mucha más grasa e hidratos de lo que sugieren los macros del muslo crudo.',
    ],
  },

  'ground-beef-80-20': {
    introHeading: 'Por qué la carne molida 80/20 pierde alrededor de una cuarta parte de su peso',
    intro: [
      'La carne molida 80/20 estándar tiene un 20% de grasa en peso crudo: unos 20 g de grasa y 254 kcal por 100 g. Al cocinarse, salen de la sartén dos cosas distintas. El músculo magro se contrae y expulsa agua, y buena parte de ese 20% de grasa se funde y se libera en forma líquida. Juntas llevan la carne desmenuzada hasta un rendimiento del 73% salteada, una pérdida del 27%, casi toda visible en la grasa que escurres o retiras con papel.',
      'Como gran parte de la pérdida es grasa fundida y no agua, la 80/20 cocida es notablemente más magra por gramo de lo que dan a entender los macros en crudo: parte de la grasa está ahora en la sartén, no en tu plato. Es el alimento común donde registrar el equivalente en peso crudo sobrestima ligeramente la grasa que de verdad comiste. Aun así es mucho más exacto que registrar el peso cocido y escurrido contra una tabla en crudo, que subestima todo.',
      'El grosor del molido y el contenido de grasa mandan sobre el rendimiento. Los molidos más magros (ver 93/7) pierden menos porque hay menos grasa que fundir. Un molido grueso cocinado con suavidad pierde menos que un molido fino a fuego fuerte, que rompe más células y libera más líquido.',
      'Para un número estable, pesa la carne cruda antes de que entre en la sartén. Intentar pesar la carne desmenuzada y escurrida introduce una segunda variable —cuánta grasa escurriste— además del propio rendimiento.',
    ],
    methodHeading: 'Salteada frente a gratinada, paso a paso',
    method: [
      'El USDA da la 80/20 desmenuzada al 73% salteada (dorada en sartén) y al 69% gratinada (bajo la resistencia, donde escurre más grasa). La 93/7 más magra da 77% y 73% para esos dos métodos.',
      'Dora un paquete entero de 454 g (1 lb) en la sartén y obtienes unos 454 × 0,73 ≈ 331 g de carne cocida y escurrida. Gratina esa misma libra y baja a 454 × 0,69 ≈ 313 g, con más grasa perdida en la bandeja.',
      'En base cruda, esos 454 g partían de unas 1.153 kcal, 78 g de proteína y 91 g de grasa. La carne desmenuzada conserva toda la proteína pero solo parte de esa grasa, según cuánta escurras, que es justo por lo que el peso crudo es lo constante que hay que registrar.',
    ],
    buyingHeading: 'Cuánta carne molida cruda comprar',
    buying: [
      'Para hamburguesas, una hamburguesa cruda de 150 g (1/3 lb) se cocina hasta unos 110 g; una de 113 g (1/4 lb), hasta unos 82 g. Compra 150–170 g en crudo por hamburguesa si la gente espera una pieza contundente.',
      'Para una salsa, un chili o un relleno de tacos donde la carne es un ingrediente más, 100–125 g en crudo por persona es generoso. Un paquete de 454 g (1 lb) se dora hasta unos 330 g cocidos y da de sobra para cuatro personas en un boloñesa o cuatro o cinco en tacos.',
    ],
    mistakesHeading: 'Errores habituales al registrar carne molida',
    mistakes: [
      'Registrar el peso cocido y escurrido contra una entrada en crudo «por 100 g». La carne desmenuzada es mucho más densa en calorías por gramo que la cruda, así que esto dispara el conteo de calorías y grasa.',
      'Suponer que todos los molidos se comportan igual. La 80/20 rinde ~73% salteada; la 93/7 retiene ~77% porque hay menos grasa que fundir.',
      'Olvidar que escurrir retira grasa que los macros en crudo siguen contando. Si tiras la grasa, tu ingesta real de grasa está algo por debajo de lo que muestra la conversión desde crudo: la diferencia es la grasa de la sartén.',
    ],
  },

  'ground-beef-93-7': {
    introHeading: 'Por qué la carne molida 93/7 mantiene mejor su peso que la 80/20',
    intro: [
      'La carne molida magra 93/7 solo tiene un 7% de grasa en peso crudo: unos 7,2 g de grasa y 152 kcal por 100 g, frente a los 20 g y 254 kcal de la 80/20. El músculo magro sigue contrayéndose y soltando agua al cocinarse, pero hay mucha menos grasa disponible para fundir y salir de la sartén. Esa pérdida de grasa que no ocurre es toda la razón de que la 93/7 se cocine hasta un rendimiento del 77% salteada mientras la 80/20 baja al 73%.',
      'Menos grasa fundida significa también que la conversión de macros desde peso crudo es más honesta para la 93/7 que para los molidos grasos. Muy poca grasa acaba en la sartén, así que la carne desmenuzada conserva casi toda la grasa que figura en crudo: registrar el equivalente en peso crudo es aquí la opción constante y además exacta.',
      'La contrapartida que notan quienes cocinan es la sequedad. Con poca grasa que mantenga húmeda la carne, la 93/7 pasa de jugosa a seca rápido a fuego fuerte, y el rendimiento resbala hacia los 70 bajos si la fuerzas. Dorarla con suavidad y retirarla del fuego mientras queda algo de rosa te deja cerca del 77%.',
      'Para chili, tacos, salsa de carne y táperes de preparación semanal donde se busca la proteína sin la grasa, la 93/7 es la opción por defecto, y su rendimiento más alto hace que un paquete cunda más en el plato que el mismo peso de 80/20.',
    ],
    methodHeading: 'Salteada frente a gratinada, paso a paso',
    method: [
      'Datos USDA para la 93/7 desmenuzada: 77% salteada en sartén, 73% gratinada bajo la resistencia.',
      'Un paquete de 454 g (1 lb) dorado en la sartén da unos 454 × 0,77 ≈ 350 g cocidos y escurridos, bastante más que los ~331 g que obtendrías con la 80/20. Gratinado, el mismo paquete baja a 454 × 0,73 ≈ 331 g.',
      'Esos 454 g en crudo son unas 690 kcal, 95 g de proteína y 33 g de grasa. Como casi nada de esa grasa se funde y escapa, la carne desmenuzada conserva casi toda, así que convertir tu porción cocida de vuelta a peso crudo da una lectura de macros exacta.',
    ],
    buyingHeading: 'Cuánta carne molida magra cruda comprar',
    buying: [
      'Para un táper con foco en proteína, 150 g en crudo por ración se cocinan hasta unos 115 g y aportan alrededor de 31 g de proteína. Cinco raciones necesitan unos 750 g en crudo.',
      'Un paquete de 454 g (1 lb) rinde unos 350 g cocidos: suficiente para cuatro raciones generosas de tacos o chili a unos 115 g cocidos cada una, o tres boles más grandes.',
    ],
    mistakesHeading: 'Errores habituales al registrar carne molida magra',
    mistakes: [
      'Usar el rendimiento de la 80/20 (73%) para la 93/7. La carne magra retiene más peso —en torno al 77% salteada—, así que subestimarías el peso crudo y te quedarías corto de proteína.',
      'Registrar la carne desmenuzada contra una tabla en crudo. Incluso la carne magra se concentra al perder agua, así que la cocida es más densa en calorías por gramo que la cruda.',
      'Intercambiar libremente los macros de la 93/7 y la 80/20. La diferencia de grasa y calorías es casi el triple por gramo de grasa: elige la entrada que coincida con el paquete.',
    ],
  },

  'ribeye-steak': {
    introHeading: 'Por qué el bistec de costilla conserva el 84% de su peso, lo más alto de cualquier carne aquí',
    intro: [
      'El bistec de costilla (ribeye) es un filete muy infiltrado: unos 23 g de grasa por 100 g en crudo, repartida por el músculo como veteado intramuscular más que en una capa aparte. Al cocinarse, ese veteado se funde pero buena parte queda atrapada entre las fibras musculares en vez de escurrir, y la grasa que sí se licúa mantiene la superficie lubricada, de modo que se evapora menos agua. El resultado es un rendimiento USDA del 84%: solo un 16% de pérdida, la más suave de cualquier carne o pescado de esta web.',
      'El músculo sigue perdiendo agua al firmarse, y el filete suelta jugo al reposar, pero un corte graso simplemente tiene menos agua por gramo de partida —la grasa desplaza al agua—, así que hay menos que perder. Un corte magro como el redondo, cocinado igual, bajaría bastante más.',
      'El punto de cocción es la verdadera palanca en un filete. El USDA señala que el rendimiento del bistec de costilla varía de forma apreciable de poco hecho a muy hecho: un filete poco hecho apenas ha cedido humedad, mientras que uno muy hecho ha estado a temperatura el tiempo suficiente para empujar la pérdida por encima del 20%. La cifra del 84% es una media de punto medio.',
      'Como la grasa se queda en buena parte en la carne, la conversión de macros desde peso crudo es exacta para el bistec de costilla: lo que registras se parece mucho a lo que comes, veteado incluido.',
    ],
    methodHeading: 'Un ejemplo resuelto, de poco hecho a muy hecho',
    method: [
      'La web usa un único rendimiento del 84% para el bistec de costilla (Tabla de Rendimientos de Cocción del USDA), que representa un resultado típico al punto. Trata «poco hecho» como unos puntos más y «muy hecho» como varios puntos menos.',
      'Un bistec de costilla de 340 g (12 oz) en crudo cocinado al punto sale a unos 340 × 0,84 ≈ 286 g en el plato. Poco hecho podría retener más cerca de 300 g; llevado a muy hecho, espera unos 265–270 g, ya que el calor prolongado expulsa más agua y funde más grasa.',
      'Todos esos venían de 340 g en crudo: unas 989 kcal, 66 g de proteína y 79 g de grasa. Pesa el filete en crudo si puedes: intentar deducirlo del peso cocido implica adivinar tu propio punto de cocción, que mueve el rendimiento diez puntos.',
    ],
    buyingHeading: 'Cuánto bistec de costilla crudo comprar',
    buying: [
      'Las porciones de asador son de 225–450 g (8–16 oz) en crudo. Un filete crudo de 8 oz se come como unos 190 g cocidos; uno de 12 oz, como unos 286 g cocidos. Para una cena normal con guarniciones, 8–10 oz en crudo por persona sobran; para una comida centrada en el filete, 12 oz.',
      'El bistec de costilla con hueso lleva un 10–20% de peso de hueso no comestible: compra proporcionalmente más, o pesa la carne separada del hueso después de cocinar y convierte eso.',
    ],
    mistakesHeading: 'Errores habituales al registrar bistec de costilla',
    mistakes: [
      'Recortar la grasa visible después de cocinar pero registrar el peso crudo entero. Si cortas y dejas la capa de grasa, registra un equivalente en crudo menor que el filete completo.',
      'Usar el rendimiento de un filete magro. El solomillo o el redondo pierden más que el bistec de costilla; con un 84%, el bistec de costilla está cerca del tope del rango.',
      'Ignorar el punto de cocción. Un bistec de costilla muy hecho puede pesar 15–20 g menos por cada 340 g que uno poco hecho cocinado a partir del mismo filete crudo.',
    ],
  },

  'pork-chop': {
    introHeading: 'Por qué una chuleta de cerdo pierde alrededor del 22%, y la paleta pierde mucho más',
    intro: [
      'Una chuleta de cerdo deshuesada es un corte magro y de cocción rápida: unos 21,5 g de proteína y 5,6 g de grasa por 100 g en crudo, sacada del lomo. Se comporta muy parecido a la pechuga de pollo: las fibras musculares se contraen, el agua se expulsa y una chuleta de cocción rápida se asienta en un rendimiento del 78% a la sartén, una pérdida del 22%.',
      'Lo complicado de la chuleta de cerdo es lo estrecho de su margen seguro. Las recomendaciones modernas cocinan el cerdo a 63 °C más un reposo, donde aún está ligeramente rosado y jugoso. Llévalo al viejo estándar de 71 °C «sin rosa» y evaporas mucha más agua: el rendimiento puede caer a los 70 bajos y la chuleta se vuelve seca y pálida.',
      'El método importa más para la chuleta de cerdo que para casi ningún corte porque las opciones difieren de verdad: estofarla la rodea de líquido y retiene el 76%, mientras que gratinarla o hacerla a la parrilla sobre calor directo con la superficie sellando fuerte puede acabar más alto, en el 83%, ya que el exterior fija rápido y sella la humedad antes de que el interior se pase.',
      'La paleta de cerdo es otra historia: un corte graso y rico en colágeno cocinado a fuego lento durante horas, y por eso pierde alrededor del 35% (un rendimiento del 65%). Mucho tiempo a temperatura funde casi toda la grasa y expulsa mucha más agua de la que una chuleta de cinco minutos podría llegar a perder.',
    ],
    methodHeading: 'A la sartén, estofada o a la parrilla',
    method: [
      'Cifras USDA por método para una chuleta deshuesada genérica (promediando aguja, lomo y costilla): a la sartén 78%, estofada 76%, gratinada o a la parrilla 83%.',
      'Una chuleta de 170 g (6 oz) en crudo a la sartén sale a unos 170 × 0,78 ≈ 133 g. Estofada en salsa retiene 170 × 0,76 ≈ 129 g. A la parrilla fuerte sobre calor directo puede acabar en 170 × 0,83 ≈ 141 g, porque la costra sellada retiene la humedad.',
      'Cada porción se registra como 170 g en crudo: unas 243 kcal, 37 g de proteína y 9,5 g de grasa. Si solo la pesaste cocida, una chuleta de 130 g a la sartén es 130 ÷ 0,78 ≈ 167 g en crudo.',
    ],
    buyingHeading: 'Cuánta chuleta de cerdo cruda comprar',
    buying: [
      'Las chuletas deshuesadas pesan 140–225 g cada una en crudo. Para una porción cocida de 150 g, compra unos 150 ÷ 0,78 ≈ 192 g en crudo por persona: una chuleta media.',
      'Las chuletas con hueso llevan un 15–25% de hueso. Una chuleta con hueso de 250 g tiene unos 190–210 g de carne, que se cocinan hasta unos 150–165 g. Compra las de hueso por unidades (una por persona) en vez de por peso.',
    ],
    mistakesHeading: 'Errores habituales al registrar chuleta de cerdo',
    mistakes: [
      'Aplicar el rendimiento de la chuleta (78%) al pulled pork o a las carnitas. La paleta de cerdo cocinada durante horas rinde alrededor del 65%: una pieza de 500 g en crudo se queda en unos 325 g cocidos, no 390 g.',
      'Registrar el peso de la chuleta con hueso como carne comestible. Resta un 15–25% por el hueso antes de convertir.',
      'Pasarse de cocción hasta «sin rosa» y luego preguntarse por qué el peso cocido es bajo. Una chuleta llevada a 71 °C o más puede rendir más cerca del 72% que del 78%.',
    ],
  },

  'pork-shoulder': {
    introHeading: 'Por qué la paleta de cerdo pierde alrededor del 35%, la mayor bajada de cualquier carne aquí',
    intro: [
      'La paleta de cerdo (Boston butt / brazuelo) es lo opuesto a una chuleta magra: unos 14 g de grasa por 100 g en crudo, más gruesas vetas de tejido conectivo rico en colágeno y una capa de grasa. Se cocina a propósito despacio —horas a 90–120 °C, o un estofado largo— para dar tiempo a que ese colágeno se funda en gelatina. El precio de esa transformación a fuego lento es un rendimiento USDA del 65%, una pérdida de peso del 35%.',
      'Durante esas horas se va casi todo. La grasa intramuscular y la de la capa escurren en su mayor parte a la bandeja o a la bandeja de goteo del ahumador. El agua, que un corte de cocción rápida nunca tiene tiempo de perder, sigue evaporándose durante toda la cocción. Incluso el colágeno, una vez gelatinizado, libera parte del agua a la que estaba ligado. Lo que queda es carne concentrada y desmenuzable.',
      'El rendimiento es notablemente constante para el pulled pork justamente porque el punto final lo es: se cocina hasta que se deshace, hacia 90–96 °C internos, no hasta un tiempo fijo. Lo ahúmes, lo aseses al horno o lo hagas en olla lenta, acabas cerca del 65%.',
      'Para el conteo, es el corte donde usar un rendimiento genérico de «cerdo» hace más daño: el de una chuleta sobrestimaría en un tercio tu pulled pork cocido.',
    ],
    methodHeading: 'Un ejemplo resuelto: de la pieza cruda al pulled pork',
    method: [
      'La web usa un único rendimiento del 65% para la paleta de cerdo (Tabla de Rendimientos de Cocción del USDA), que cubre estofado, asado y ahumado a fuego lento, que quedan muy cerca entre sí.',
      'Una paleta deshuesada de 2 kg (4,4 lb) en crudo se reduce hasta unos 2000 × 0,65 = 1.300 g de carne cocida. Una pieza de 1 kg da unos 650 g. La paleta con hueso pierde además el peso del hueso: cuenta otro 8–12%.',
      'Esos 2 kg en crudo son unas 4.020 kcal, 348 g de proteína y 284 g de grasa antes de cocinar. Buena parte de la grasa escurre a la bandeja, así que los 1.300 g de carne desmenuzada son más magros por gramo de lo que sugieren los macros en crudo, pero la conversión desde peso crudo sigue siendo la forma constante de registrarlo, y puedes ajustar la grasa a la baja si desgrasaste los jugos.',
    ],
    buyingHeading: 'Cuánta paleta de cerdo cruda comprar',
    buying: [
      'Cuenta con unos 150 g de pulled pork cocido por persona en bocadillos, lo que supone unos 150 ÷ 0,65 ≈ 230 g en crudo de paleta deshuesada por cabeza. Para mucha gente, la regla de catering de «1/3 lb cocido por persona, así que 1/2 lb en crudo» cae en el mismo sitio.',
      'Una paleta deshuesada entera suele pesar 2–3,5 kg. Un asado de 3 kg rinde unos 1,95 kg cocidos: suficiente para una docena de bocadillos generosos. Con hueso, compra alrededor de un 15% más para cubrir el hueso.',
    ],
    mistakesHeading: 'Errores habituales al registrar paleta de cerdo',
    mistakes: [
      'Usar un rendimiento de chuleta o de «cerdo promedio». Con un 65%, la paleta pierde mucho más que el 78% de una chuleta; un rendimiento de chuleta sobrestima tu pulled pork cocido en torno a un tercio.',
      'Registrar el peso cocido y con salsa. La salsa barbacoa añade azúcar y calorías que no están en el cerdo: pesa la carne antes de salsearla, o registra la salsa aparte.',
      'Ignorar la grasa fundida. Si desgrasas o escurres los jugos, tu ingesta real de grasa está por debajo de la conversión desde peso crudo; la diferencia es la grasa que quedó en la bandeja.',
    ],
  },

  'turkey-breast': {
    introHeading: 'Por qué la pechuga de pavo pierde alrededor del 21% al asarse',
    intro: [
      'La pechuga de pavo sin piel es el corte de ave más magro de esta web: unos 24,6 g de proteína y apenas 1 g de grasa por 100 g en crudo, incluso más magra que la pechuga de pollo. Es casi músculo y agua puros, así que al asarse la historia es casi toda pérdida de agua: las proteínas se desnaturalizan, las fibras se contraen, la humedad se expulsa y la pechuga se asienta en un rendimiento USDA del 79%, una pérdida del 21%.',
      'Pierde algo menos que la pechuga de pollo (72%) sobre todo porque una pechuga de pavo es una pieza de carne mucho más grande. Una pechuga entera de 2–3 kg tiene una relación superficie/masa baja, así que proporcionalmente menos parte queda expuesta al calor secante, y el interior está protegido por la masa que lo rodea. Córtala en filetes y el rendimiento baja hacia el terreno de la pechuga de pollo.',
      'El error clásico con el pavo es cocinarlo al viejo estándar de ave «muy hecha» de 74 °C o más por precaución. Retirada a 71 °C y reposada, la pechuga retiene cerca del 79%; llevada a 80 °C queda seca como el serrín y el rendimiento cae varios puntos.',
      'La cifra del 79% es específica de la pechuga. Los rendimientos del pavo entero y del pavo relleno son más bajos y no comparables: promedian carne oscura, piel y pérdidas de la cavidad.',
    ],
    methodHeading: 'Un ejemplo resuelto: pechuga de pavo asada',
    method: [
      'La web usa un único rendimiento del 79% para la pechuga de pavo (Manual de Agricultura n.º 102 del USDA), para asado. Escalfarla o cocerla al vapor retendría algo más; cortarla en filetes finos y sellarla a la sartén retendría algo menos.',
      'Una porción de 250 g de pechuga en crudo se asa hasta unos 250 × 0,79 ≈ 198 g cocidos. Un asado entero de pechuga deshuesada de 2,5 kg rinde aproximadamente 1,98 kg de carne cocida en lonchas.',
      'Esos 250 g en crudo son unas 285 kcal, 61,5 g de proteína y 2,5 g de grasa. Si trinchaste primero y pesaste después, una ración cocida de 150 g es 150 ÷ 0,79 ≈ 190 g en crudo. La «pechuga de pavo asada» de charcutería no es comparable: está en salmuera y a menudo con agua añadida, así que regístrala desde su propia etiqueta en peso cocido.',
    ],
    buyingHeading: 'Cuánta pechuga de pavo cruda comprar',
    buying: [
      'Para una porción cocida de 150 g, compra unos 150 ÷ 0,79 ≈ 190 g en crudo de pechuga deshuesada por persona. Para sobras estilo Acción de Gracias, dobla esa cantidad.',
      'Una pechuga de pavo con hueso es un 30–40% hueso y piel. Para 6 personas que quieran 150 g cocidos cada una (900 g cocidos, ~1,14 kg de equivalente en pechuga deshuesada cruda), compra una pechuga con hueso de unos 2,7–3 kg, o un asado deshuesado de 1,2 kg.',
    ],
    mistakesHeading: 'Errores habituales al registrar pechuga de pavo',
    mistakes: [
      'Usar datos de rendimiento de pavo entero asado (a menudo citados en torno al 70–74%) para una pechuga sola. La pechuga por sí sola retiene alrededor del 79%.',
      'Registrar como pavo natural la pechuga de supermercado en salmuera, prebasteada o «autobasteante». La solución inyectada es un 8–15% del peso y es agua, sal y a veces grasa.',
      'Tratar las lonchas de pavo de charcutería como pechuga asada en casa. La fiambre lleva agua y sodio añadidos y tiene su propia etiqueta nutricional (en peso cocido): usa esa.',
    ],
  },

  'salmon': {
    introHeading: 'Por qué el salmón solo pierde alrededor del 15% al cocinarse',
    intro: [
      'El filete de salmón es un pescado graso: unos 13,4 g de grasa por 100 g en crudo, casi toda aceite insaturado repartido por la carne y concentrado en las líneas de grasa entre las lascas de músculo. Ese aceite es la razón de que el salmón dé un rendimiento USDA del 85%, el más alto de cualquier proteína de esta web: el músculo del pescado está formado por lascas cortas y delicadas con muy poco tejido conectivo, así que se firma con suavidad y la grasa lo mantiene jugoso en lugar de escurrir.',
      'Cuando el salmón se cocina, las proteínas del músculo coagulan y expulsan algo de agua y esa sustancia blanca que ves en la superficie: es albúmina, una proteína hidrosoluble. Pero los haces de fibras son cortos y la grasa está por todas partes, así que la carne nunca se contrae y se escurre como una pechuga de pollo. La mayor parte del peso se queda donde estaba.',
      'Pasarse de cocción igualmente cuesta. Por encima de 55–60 °C internos las lascas se aprietan, se expulsan más albúmina y aceite, y un filete muy hecho puede bajar hacia el 78–80%. El salmón de piscifactoría, más graso que el salvaje, tiende a retener algo más de peso que el sockeye salvaje.',
      'Como sale tan poco del filete y la grasa se queda en él, convertir tu porción cocida de vuelta a peso crudo da una lectura de macros exacta, incluida la grasa omega-3, que es la razón principal por la que se cuenta el salmón.',
    ],
    methodHeading: 'Un ejemplo resuelto: salmón al horno, a la parrilla o escalfado',
    method: [
      'La web usa un único rendimiento del 85% para el salmón (Manual de Agricultura n.º 102 del USDA). Escalfar retiene un punto o dos más; la parrilla fuerte o el horno muy hecho, unos puntos menos.',
      'Un filete de 170 g (6 oz) en crudo al horno a 190 °C sale a unos 170 × 0,85 ≈ 144 g. Escalfado con suavidad podría retener unos 148 g; a la parrilla hasta que quede firme y se deshaga en lascas, unos 138 g.',
      'Ese filete de 170 g en crudo son unas 354 kcal, 34 g de proteína y 22,8 g de grasa. Si solo pesaste la porción cocida, un trozo de 130 g es 130 ÷ 0,85 ≈ 153 g en crudo. Filetes con piel: la piel es un 5–8% del peso y funde su grasa pero se queda en la balanza, así que pesa sin piel si puedes, o réstala.',
    ],
    buyingHeading: 'Cuánto salmón crudo comprar',
    buying: [
      'Para una porción cocida de 150 g, compra unos 150 ÷ 0,85 ≈ 175 g en crudo por persona. Las porciones estándar de filete son de 140–200 g en crudo, así que una por persona lo cubre.',
      'Un lomo entero de salmón pesa 900 g–1,4 kg y rinde alrededor del 85% de eso cocido: un lomo de 1,2 kg da unos 1 kg cocido, o unas seis o siete raciones de 150 g. Presupuesta de más si el lomo lleva piel y vas a descartarla.',
    ],
    mistakesHeading: 'Errores habituales al registrar salmón',
    mistakes: [
      'Aplicar al salmón un rendimiento de carne como el 72%. El pescado retiene mucho más peso —el salmón, alrededor del 85%—, así que un rendimiento de carne infla el peso crudo que calculas hacia atrás y sobrestima calorías y grasa.',
      'Registrar salmón en lata o ahumado como filete crudo fresco. El salmón en lata está cocido y envasado (a menudo con sal o aceite añadidos); el ahumado está curado. Ambos tienen su propia etiqueta.',
      'Pesar un filete con piel y registrarlo como sin piel. La piel añade peso pero no se cuenta en una entrada sin piel.',
    ],
  },

  'shrimp': {
    introHeading: 'Por qué los camarones pierden alrededor del 25%, y por qué parece más',
    intro: [
      'El camarón es proteína magra casi pura: unos 24 g por 100 g en crudo con apenas 0,3 g de grasa, y un músculo denso y muy compacto en un cuerpo pequeño. Al cocinarse, las proteínas del músculo se contraen rápido y con fuerza —esa es la curvatura repentina de un camarón recto en crudo a una «C» apretada— y expulsan agua. El rendimiento USDA es del 75%, una pérdida del 25%, casi toda humedad superficial e interna.',
      'El encogimiento visual parece mayor que la pérdida de peso porque la curvatura y el apriete concentran la misma masa en una forma más pequeña y densa. Un camarón no pierde de verdad una cuarta parte de su volumen; se aprieta. La balanza dice la verdad mejor que tus ojos aquí.',
      'Pasarse de cocción es brutal con el camarón porque no hay grasa y las piezas son pequeñas: unos segundos de más y pasan de «C» a una «O» apretada, gomosos, con el rendimiento cayendo aún más al expulsarse más agua. Los camarones grandes y jumbo retienen proporcionalmente más peso que los pequeños de ensalada, que tienen más superficie por gramo.',
      'Un matiz: mucho camarón se vende tratado con tripolifosfato de sodio o una salmuera para que retenga agua. Ese camarón pesa más en crudo que el «seco» y puede perder más del 25% al cocinarse, porque suelta agua añadida además de la suya.',
    ],
    methodHeading: 'Un ejemplo resuelto: camarones hervidos, salteados o a la parrilla',
    method: [
      'La web usa un único rendimiento del 75% para el camarón (Manual de Agricultura n.º 102 del USDA), que cubre hervido, al vapor, salteado y a la parrilla, que quedan cerca entre sí para un alimento de cocción tan rápida.',
      'Parte de 200 g de camarón pelado en crudo. Hervido o salteado sale a unos 200 × 0,75 = 150 g cocidos. A la parrilla a fuego fuerte, espera un gramo o dos menos al secarse la superficie.',
      'Esos 200 g en crudo son unas 198 kcal y 48 g de proteína: el camarón es el alimento alto en proteína más magro de esta web. Si pesaste cocido, una porción de 120 g es 120 ÷ 0,75 = 160 g en crudo. Camarones con cáscara: la cáscara y la cabeza son un 30–45% del peso, así que pesa pelado, o convierte solo el peso cocido pelado.',
    ],
    buyingHeading: 'Cuántos camarones crudos comprar',
    buying: [
      'El camarón se vende por número de piezas por libra (p. ej. «16/20» = 16–20 camarones por libra, unos 23–28 g cada uno en crudo). Para una porción principal cocida de 120 g, compra unos 160 g en crudo pelado por persona; para camarón como parte de una pasta o un salteado, 100–120 g en crudo cada uno.',
      'Una bolsa de 454 g (1 lb) de camarón pelado en crudo se cocina hasta unos 340 g: dos o tres porciones principales, o cuatro o cinco como ingrediente. Si la bolsa es con cáscara, espera que solo el 55–70% del peso de la bolsa sea comestible antes de cocinar.',
    ],
    mistakesHeading: 'Errores habituales al registrar camarones',
    mistakes: [
      'Pesar camarones con cáscara y registrarlos como pelados. La cáscara y la cabeza son de un tercio a casi la mitad del peso crudo.',
      'Ignorar el agua añadida por fosfatos o salmuera. El camarón tratado puede perder más del 25% estándar porque suelta agua retenida: su peso cocido queda bajo respecto a un paquete «seco».',
      'Registrar camarón congelado precocido contra una entrada en crudo. El camarón precocido ya ha perdido su agua: regístralo desde una entrada de camarón cocido, más o menos con el peso de la bolsa.',
    ],
  },

  // ── Cereales, pasta y legumbres ──────────────────────────────────────────

  'white-rice': {
    introHeading: 'Por qué el arroz blanco crudo casi triplica su peso al cocerse',
    intro: [
      'El arroz blanco seco es un 80% almidón y solo un 10–12% agua: se ha pulido y secado precisamente para que aguante en la despensa. Cocerlo es rehidratar: los gránulos de almidón dentro de cada grano absorben agua, se hinchan y gelatinizan, y el grano casi triplica su peso. El rendimiento USDA del arroz blanco hervido es del 308%, así que 100 g en seco se convierten en unos 308 g cocidos.',
      'No se pierde nada: es lo contrario de la carne. El grano seco gana toda la diferencia de peso del agua de cocción que absorbe. Eso significa que las calorías y los macros de tu bol de arroz cocido vienen todos del peso seco: unas 365 kcal, 7,1 g de proteína y 80 g de hidratos por 100 g en seco, ahora repartidos en el triple de gramos.',
      'Cuánta agua absorbe depende del arroz y del método. Un pilaf firme y suelto queda más bajo; el arroz cocido con agua de más hasta quedar blando, o lavado y hervido en agua abundante, queda más alto. El arroz vaporizado («converted») y el instantáneo absorben aún más —en torno al 350–358%— porque su almidón está pregelatinizado.',
      'Es el alimento en el que más a menudo la gente pesa cocido y registra bien por casualidad, porque muchas entradas de bases de datos de arroz son en peso cocido. El peligro es mezclarlas: registrar 200 g de arroz cocido contra una entrada en seco «por 100 g» casi triplica tu conteo de calorías.',
    ],
    methodHeading: 'Hervido frente a vaporizado frente a instantáneo',
    method: [
      'Cifras USDA para el arroz blanco: hervido 308%, vaporizado/converted 358%, instantáneo o precocido 350%.',
      'Cuece 75 g de arroz seco —una ración individual muy habitual— por el método de absorción y obtienes unos 75 × 3,08 ≈ 231 g cocidos. Esos mismos 75 g de arroz vaporizado rinden unos 75 × 3,58 ≈ 269 g, y el arroz instantáneo unos 263 g, porque su almidón precocido retiene más agua.',
      'Cada uno de esos boles lleva los macros de 75 g en seco: unas 274 kcal, 5,3 g de proteína y 60 g de hidratos. En sentido contrario, 250 g de arroz blanco hervido son 250 ÷ 3,08 ≈ 81 g en seco. Usa el selector de método de la calculadora si cueces arroz vaporizado o instantáneo.',
    ],
    buyingHeading: 'Cuánto arroz seco cocer',
    buying: [
      'Una guarnición cocida estándar es de 150–200 g. Con un rendimiento del 308%, eso son unos 50–65 g en seco por persona. Una «taza» de arroz seco (unos 185 g) se cuece hasta unos 570 g: tres o cuatro guarniciones.',
      'Para preparación semanal: cinco raciones de 180 g cocidos necesitan unos 900 g cocidos, o unos 290 g en seco. El arroz aguanta 4–5 días cocido y refrigerado, y recalentarlo desde frío no cambia el peso que registraste.',
    ],
    mistakesHeading: 'Errores habituales al registrar arroz',
    mistakes: [
      'Registrar el peso del arroz cocido contra una entrada en seco «por 100 g». 200 g cocidos son solo unos 65 g en seco: la entrada en seco triplicaría tus calorías.',
      'Usar el rendimiento del hervido normal para el arroz vaporizado o instantáneo. Esos absorben más agua (350–358%), así que el mismo peso seco da más gramos cocidos.',
      'Suponer que el arroz integral se comporta igual. El arroz integral rinde alrededor del 335% y tiene sus propios macros: el salvado cambia ambas cosas.',
    ],
  },

  'brown-rice': {
    introHeading: 'Por qué el arroz integral se expande incluso más que el blanco',
    intro: [
      'El arroz integral es el grano entero con el salvado y el germen todavía puestos. Esas capas exteriores son fibrosas y resistentes al agua, así que el arroz integral tarda más en cocerse y necesita más agua, y acaba absorbiendo más. El rendimiento USDA es del 335%, más alto que el 308% del arroz blanco: 100 g en seco se convierten en unos 335 g cocidos.',
      'Como con el arroz blanco, la ganancia de peso es agua absorbida pura y no se pierde nada. El grano seco lleva unas 370 kcal, 7,9 g de proteína, 77 g de hidratos y 2,9 g de grasa por 100 g —el germen aporta la grasa y parte de la proteína— y todo eso acaba en el bol cocido, solo que diluido en más gramos.',
      'La capa de salvado también es la razón de que el arroz integral quede más al dente y los granos más sueltos: limita físicamente cuánto puede hincharse y gelatinizar el almidón, así que rara vez se llega a la textura pegajosa de exceso de absorción que sube los rendimientos del arroz blanco. La contrapartida es una cocción de 40–50 minutos en vez de 15.',
      'Para el conteo, la clave es que el arroz integral y el blanco no son entradas intercambiables: distinto rendimiento, distintos macros. Registrar un bol de arroz integral como blanco subestima la fibra y la grasa y calcula mal la porción.',
    ],
    methodHeading: 'Un ejemplo resuelto: arroz integral, de seco a cocido',
    method: [
      'La web usa un único rendimiento del 335% para el arroz integral (Manual de Agricultura n.º 102 del USDA), para hervido o el método de absorción.',
      'Cuece 75 g de arroz integral seco y obtienes unos 75 × 3,35 ≈ 251 g cocidos. Cuece una «taza» (unos 190 g en seco) y obtienes unos 637 g cocidos: alrededor de cuatro porciones de 160 g.',
      'Esos 75 g en seco son unas 278 kcal, 5,9 g de proteína, 58 g de hidratos y 2,2 g de grasa, y esos números no cambian al convertirse en 251 g cocidos. Hacia atrás, 250 g de arroz integral cocido son 250 ÷ 3,35 ≈ 75 g en seco.',
    ],
    buyingHeading: 'Cuánto arroz integral seco cocer',
    buying: [
      'Una guarnición cocida de 160–200 g equivale a unos 48–60 g en seco por persona con un rendimiento del 335%: algo menos de arroz seco que el blanco para la misma porción cocida, porque el integral se expande más.',
      'Para cinco raciones de preparación semanal de 180 g cocidos (900 g en total), cuece unos 270 g en seco. El arroz integral se recalienta y congela bien, y el peso cocido que registraste se mantiene tras el almacenamiento.',
    ],
    mistakesHeading: 'Errores habituales al registrar arroz integral',
    mistakes: [
      'Registrarlo como arroz blanco. Distinto rendimiento (335% frente a 308%) y distintos macros: te perderías la grasa y subestimarías la fibra.',
      'Registrar el peso cocido contra una entrada en seco. 200 g de arroz integral cocido son solo unos 60 g en seco.',
      'Suponer que el «arroz salvaje» o el «basmati integral» encajan exactamente con esta entrada. Se cuecen y absorben de forma distinta: usa la entrada específica más cercana que puedas.',
    ],
  },

  'pasta': {
    introHeading: 'Por qué la pasta seca algo más que duplica su peso al cocerse',
    intro: [
      'La pasta seca es sémola de trigo duro y agua, extrusionada y secada dura. Es más densa y con menos almidón superficial que el arroz, y se hierve en agua abundante en vez de absorber una cantidad medida, así que capta proporcionalmente menos: el rendimiento aquí es del 225%, es decir, 100 g en seco se convierten en unos 225 g cocidos a un punto normal, algo más que al dente.',
      'La ganancia de peso es agua de cocción absorbida y —como en todos los cereales— no se pierde nada, así que los macros siguen atados al peso seco: unas 371 kcal, 13 g de proteína y 75 g de hidratos por 100 g en seco, ahora en 225 g de pasta cocida. La pasta cocida da por tanto unas 160 kcal por 100 g frente a 371 en seco.',
      'El punto de cocción lo es todo para el rendimiento de la pasta. Escurrida al dente firme, la pasta queda más cerca del 200%; cocida blanda, o mantenida en salsa y dejada reposar, sigue absorbiendo y supera el 240%. La pasta fresca al huevo es otra cosa: parte con más humedad y gana menos.',
      'El formato también cuenta. La pasta larga y fina y los formatos pequeños absorben más rápido y de forma más uniforme; los rigatoni gruesos o las conchas grandes quedan más bajos. Esta entrada es una media de pasta seca genérica; la pasta larga como los espaguetis va más alta.',
    ],
    methodHeading: 'Un ejemplo resuelto: al dente frente a bien cocida',
    method: [
      'La web usa un único rendimiento del 225% para pasta seca genérica (USDA FoodData Central, crudo frente a cocido). Trata el al dente firme como un 200% aproximado y la pasta blanda o mantenida en salsa como 240% o más.',
      'Una ración seca de 57 g (2 oz) —la ración estándar de la caja— se cuece hasta unos 57 × 2,25 ≈ 128 g. Una ración seca de 85 g (un plato principal más realista) rinde unos 191 g cocidos. Cuece esos mismos 85 g blandos y pueden llegar a 205–215 g.',
      'Los macros siguen el peso seco en cualquier caso: 85 g en seco son unas 315 kcal, 11 g de proteína y 64 g de hidratos. Hacia atrás, 250 g de pasta cocida son 250 ÷ 2,25 ≈ 111 g en seco, que conviene comprobar, porque una «ración» de restaurante de pasta cocida suele ser de 300–400 g, es decir, 130–180 g en seco.',
    ],
    buyingHeading: 'Cuánta pasta seca cocer',
    buying: [
      'La caja dice 57 g (2 oz) en seco por persona; eso es una guarnición ligera. Un plato principal satisfactorio es de 85–100 g en seco, que se cuecen hasta unos 190–225 g. Una caja de 500 g alimenta a unas cinco personas como principal u ocho como guarnición.',
      'Para preparación semanal, cuece la pasta un punto firme: sigue absorbiendo salsa y humedad en la nevera, y partir del al dente deja la ración recalentada más cerca del peso que registraste.',
    ],
    mistakesHeading: 'Errores habituales al registrar pasta',
    mistakes: [
      'Registrar la pasta cocida contra una entrada en seco «por 100 g». 250 g cocidos son solo unos 110 g en seco: la entrada en seco más que duplicaría tus calorías.',
      'Usar un único rendimiento para todos los puntos de cocción. El al dente (~200%) y la pasta blanda (~240%) difieren lo suficiente como para importar en una porción grande.',
      'Pesar la pasta después de que haya reposado en salsa. Ha absorbido peso de salsa y más agua: pesa la pasta escurrida y registra la salsa aparte.',
    ],
  },

  'quinoa': {
    introHeading: 'Por qué la quinoa se expande a unas 3 veces su peso en seco',
    intro: [
      'La quinoa es una semilla de pseudocereal pequeña —botánicamente no es un grano de gramínea, aunque se cocina como tal—. Cada semilla es densa en almidón pero también lleva más proteína (14,1 g por 100 g en seco) y grasa (6,1 g) que el arroz, junto con un anillo exterior de germen que se despliega en esa pequeña «cola» blanca que ves en la quinoa cocida. Absorbe agua con facilidad y da un rendimiento del 314%: 100 g en seco se convierten en unos 314 g cocidos.',
      'Como todos los cereales y legumbres de aquí, la quinoa gana peso en vez de perderlo, y la ganancia es toda agua de cocción absorbida. Los macros pertenecen a la semilla seca y simplemente se reparten más finos una vez cocida: la quinoa cocida ronda las 117 kcal por 100 g frente a 368 en seco.',
      'La quinoa se suele cocer por absorción en una proporción fija (en torno a 1 parte de semilla por 1,75–2 de agua), así que su rendimiento es bastante estable comparado con los cereales de hervir y escurrir. Tostar la semilla seca primero o enjuagar su capa amarga de saponina cambia más el sabor que el rendimiento.',
      'Para quien cuenta macros, el atractivo de la quinoa es el perfil de proteína más fibra, así que acertar con la porción importa. Sus macros en seco se parecen a los del arroz por calorías pero son muy distintos por proteína y grasa: no intercambies las entradas.',
    ],
    methodHeading: 'Un ejemplo resuelto: quinoa, de seco a cocido',
    method: [
      'La web usa un único rendimiento del 314% para la quinoa (USDA FoodData Central, calculado a partir de las proporciones de nutrientes crudo frente a cocido), para el método de absorción estándar.',
      'Cuece 90 g de quinoa seca —una ración individual generosa— y obtienes unos 90 × 3,14 ≈ 283 g cocidos. Una «taza» de quinoa seca (unos 170 g) rinde unos 534 g cocidos, o tres o cuatro porciones.',
      'Esos 90 g en seco son unas 331 kcal, 12,7 g de proteína, 58 g de hidratos y 5,5 g de grasa, y nada de eso cambia al convertirse en 283 g cocidos. Hacia atrás, 250 g de quinoa cocida son 250 ÷ 3,14 ≈ 80 g en seco.',
    ],
    buyingHeading: 'Cuánta quinoa seca cocer',
    buying: [
      'Una porción cocida de 180–220 g equivale a unos 57–70 g en seco por persona. Para una ensalada en la que la quinoa es la base, tira al extremo alto; como guarnición junto a una proteína, 50–60 g en seco bastan.',
      'Para cinco boles de preparación semanal de 200 g cocidos (1 kg en total), cuece unos 320 g de quinoa seca. Aguanta la textura en la nevera mejor que el arroz y no necesita recalentarse para boles fríos de cereal.',
    ],
    mistakesHeading: 'Errores habituales al registrar quinoa',
    mistakes: [
      'Registrar la quinoa cocida contra una entrada en seco. 250 g cocidos son solo unos 80 g en seco: un error de calorías de aproximadamente el triple.',
      'Intercambiar las entradas de quinoa y arroz porque «los dos son cereales». La quinoa tiene casi el doble de proteína y mucha más grasa por gramo en seco.',
      'Pesar la quinoa en una ensalada aliñada y registrarla como natural. El aliño y cualquier aceite añadido van aparte: pesa la quinoa cocida natural antes de incorporarla.',
    ],
  },

  'lentils': {
    introHeading: 'Por qué las lentejas secas casi triplican su peso al cocerse',
    intro: [
      'Las lentejas secas son un 11–12% agua, 60 g de hidratos y unos notables 25,8 g de proteína por 100 g: el alimento entero más proteico de esta lista después de la soja. Se cuecen absorbiendo agua en su matriz de almidón y proteína y hinchándose, sin remojo estrictamente necesario porque son pequeñas y de piel fina. El rendimiento USDA de las lentejas hervidas o cocidas al horno hasta blandas es del 289%: 100 g en seco se convierten en unos 289 g cocidos.',
      'No se pierde nada; la diferencia de peso es todo líquido de cocción absorbido. Así que la proteína y los hidratos de tu bol de dal o de sopa de lentejas vienen enteros del peso seco: unas 353 kcal, 25,8 g de proteína y 60 g de hidratos por 100 g en seco, diluidos en casi el triple de gramos cocidos.',
      'El tipo de lenteja y el punto de cocción cambian el resultado. Las lentejas rojas y amarillas partidas se deshacen en puré y absorben mucho; las verdes firmes o las de Puy cocidas poco quedan enteras y absorben menos. El USDA señala que las lentejas cocidas solo 20 minutos quedan en el 261%, frente al 289% cuando se hierven o se hornean hasta bien blandas: una diferencia real si te gustan con mordida.',
      'Las lentejas de bote ya están cocidas y quedan cerca de ese peso plenamente hidratado; escurridas, un bote de 400 g son unos 240 g, equivalentes a unos 85 g en seco.',
    ],
    methodHeading: 'Bien cocidas frente a hervor de 20 minutos',
    method: [
      'Cifras USDA para lentejas: hervidas u horneadas hasta bien blandas 289%, hervidas 20 minutos 261%.',
      'Cuece 100 g de lentejas secas bien blandas para un dal y obtienes unos 289 g. Hierve esos mismos 100 g solo 20 minutos para una lenteja firme de ensalada y obtienes unos 261 g: 28 g menos desde el mismo punto de partida, porque están menos hidratadas.',
      'Ambas llevan los macros de 100 g en seco: unas 353 kcal, 25,8 g de proteína y 60 g de hidratos. Hacia atrás, 200 g de lentejas blandas cocidas son 200 ÷ 2,89 ≈ 69 g en seco. Para un bote escurrido, divide el peso escurrido entre unos 2,85.',
    ],
    buyingHeading: 'Cuántas lentejas secas cocer',
    buying: [
      'Una porción cocida contundente en un guiso o un dal es de 200–250 g, que son unos 70–85 g en seco por persona. Como guarnición, 50 g en seco bastan.',
      'Una «taza» de lentejas secas (unos 190 g) se cuece hasta unos 550 g: tres o cuatro raciones. Para cinco raciones de preparación semanal de 220 g cocidos (1,1 kg), cuece unos 380 g en seco.',
    ],
    mistakesHeading: 'Errores habituales al registrar lentejas',
    mistakes: [
      'Registrar lentejas cocidas o de bote contra una entrada en seco «por 100 g». 200 g cocidos son solo unos 70 g en seco.',
      'Usar el rendimiento de bien blandas (289%) para lentejas firmes hervidas poco (261%) o al revés. Ajusta al punto de cocción que hiciste de verdad.',
      'Tratar un bote escurrido como su peso completo de etiqueta en equivalente seco. Un bote de 400 g escurre a ~240 g, unos 85 g en seco.',
    ],
  },

  'black-beans': {
    introHeading: 'Por qué los frijoles negros secos se hinchan a unas 2,5 veces al cocerse',
    intro: [
      'Los frijoles negros secos son semillas duras y de baja humedad —un 12% agua, 62 g de hidratos y 21,6 g de proteína por 100 g— con una piel gruesa y cerosa hecha para mantener el agua fuera hasta que el frijol germina. Cocerlos es un remojo en dos fases: toman agua durante el remojo y luego absorben más y gelatinizan su almidón durante el hervor. El rendimiento derivado del USDA es del 250%, así que 100 g en seco se convierten en unos 250 g cocidos, un múltiplo menor que el de las lentejas porque esa piel dura limita el hinchado.',
      'La ganancia de peso es toda agua absorbida; no sale nada salvo algo de color y parte de los oligosacáridos que causan gases. Los macros se quedan con el peso seco: unas 341 kcal, 21,6 g de proteína y 62 g de hidratos por 100 g en seco, ahora repartidos por 2,5 veces los gramos cocidos, así que los frijoles negros cocidos rondan las 130–135 kcal por 100 g.',
      'El remojo, la edad del frijol y el agua dura mueven el número. Los frijoles viejos y el agua dura, rica en minerales, resisten la hidratación y rinden algo menos; un remojo largo y una pizca de bicarbonato empujan la absorción al alza. Los frijoles «de cocción rápida» sin remojo tienden a quedar más bajos y a cocerse de forma desigual.',
      'Los frijoles negros de bote están plenamente cocidos y cerca de este peso hidratado: un bote de 400 g escurre a unos 240–260 g, equivalentes a unos 100 g en seco.',
    ],
    methodHeading: 'Un ejemplo resuelto: frijoles secos y frijoles de bote',
    method: [
      'La web usa un único rendimiento del 250% para los frijoles negros (USDA FoodData Central, calculado a partir de las proporciones de nutrientes crudo frente a cocido).',
      'Cuece 100 g de frijoles negros secos (remojados y luego hervidos hasta tiernos) y obtienes unos 250 g de frijoles cocidos y escurridos. Una «taza» de frijoles secos (unos 190 g) rinde unos 475 g cocidos, cerca de 3 tazas.',
      'Esos 100 g en seco son unas 341 kcal, 21,6 g de proteína y 62 g de hidratos. Hacia atrás, 250 g de frijoles cocidos en casa son 250 ÷ 2,5 = 100 g en seco; un bote de 400 g escurrido a 250 g son también unos 100 g de equivalente seco. Si la etiqueta de tu bote da macros en peso cocido, eso es lo más sencillo de registrar directamente.',
    ],
    buyingHeading: 'Cuántos frijoles negros secos cocer',
    buying: [
      'Una porción cocida como guarnición o en un bol es de 130–160 g, unos 55–65 g en seco por persona. Un bote de 400 g (≈240 g escurridos) da para dos o tres personas.',
      'Una bolsa de 454 g (1 lb) de frijoles secos se cuece hasta unos 1,1 kg: alrededor de siete u ocho raciones, o el equivalente a cuatro botes y medio, a una fracción del coste. Para cinco raciones de preparación semanal de 150 g cocidos, cuece unos 300 g en seco.',
    ],
    mistakesHeading: 'Errores habituales al registrar frijoles negros',
    mistakes: [
      'Registrar frijoles cocidos o de bote contra una entrada en seco «por 100 g». 250 g cocidos son 100 g en seco: la entrada en seco multiplicaría tus calorías por unas 2,5.',
      'Registrar frijoles de bote sin escurrir. El líquido (aquafaba) añade peso y algo de sodio; escurre y, a ser posible, enjuaga antes de pesar.',
      'Suponer que todos los frijoles comparten un rendimiento. Los frijoles negros rondan el 250%; las lentejas están en el 289% y los frijoles rojos en torno al 238%: cerca, pero no idéntico.',
    ],
  },

  // ── Verduras ─────────────────────────────────────────────────────────────

  'broccoli': {
    introHeading: 'Por qué el brócoli hervido sale pesando casi exactamente lo mismo',
    intro: [
      'El brócoli es un 89% agua, retenida en paredes celulares bastante rígidas y con mucha superficie: todos esos ramilletes y el tronco. Al hervirlo pasan dos cosas opuestas que se cancelan más o menos: se pierde algo de agua celular al ablandarse las paredes y colapsar el tejido, pero los ramilletes también atrapan y absorben agua hirviendo en sus recovecos y superficies de corte. El rendimiento neto USDA del brócoli hervido es del 100%: sin cambio de peso medible.',
      'Eso hace al brócoli casi único en esta web: el peso crudo y el cocido son intercambiables para el conteo, así que una porción de 100 g en crudo sigue siendo ~100 g cocida y lleva las mismas 34 kcal, 2,8 g de proteína y 6,6 g de hidratos. Los nutrientes que sí cambian —la vitamina C que se filtra al agua de cocción, por ejemplo— no afectan a los macros ni al peso.',
      'El método inclina algo la balanza. Al vapor, sin baño del que absorber, queda un poco por debajo, en el 95%. La olla a presión fuerza agua hacia el tejido y sube algo por encima, al 104%. Asado, que este conjunto de datos no puntúa, expulsaría agua de verdad y quedaría mucho más bajo.',
      'La conclusión práctica: si hierves o cueces al vapor tu brócoli, puedes pesarlo cuando te venga bien y el número se mantiene.',
    ],
    methodHeading: 'Hervido frente a al vapor frente a olla a presión',
    method: [
      'Cifras USDA por método para el brócoli: hervido 100%, al vapor 95%, olla a presión 104%.',
      'Toma 150 g de ramilletes de brócoli en crudo. Hervidos, salen a unos 150 g cocidos. Al vapor, más cerca de 150 × 0,95 ≈ 143 g, porque no hay agua de baño que captar. En olla a presión, unos 150 × 1,04 = 156 g al llenarse el tejido de agua a la fuerza.',
      'Los tres llevan los macros de 150 g en crudo: unas 51 kcal, 4,2 g de proteína y 9,9 g de hidratos. Como la horquilla es tan pequeña, registrar el peso del brócoli en crudo para una porción hervida o al vapor es exacto salvo error de redondeo: la calculadora importa aquí sobre todo para el brócoli asado, que no está en este conjunto de datos y pierde mucho más.',
    ],
    buyingHeading: 'Cuánto brócoli crudo comprar',
    buying: [
      'Una porción de verdura cocida es de unos 80–120 g. Como el rendimiento es ~100%, ese es prácticamente el mismo peso crudo: compra 100–120 g de ramilletes por persona.',
      'Una cabeza entera de brócoli pesa 300–500 g, de los que la corona es en torno al 60–70% y el tronco el resto (comestible si se pela). Una cabeza grande da para tres o cuatro personas como guarnición. El brócoli congelado está preescaldado y se comporta igual en la balanza.',
    ],
    mistakesHeading: 'Errores habituales al registrar brócoli',
    mistakes: [
      'Suponer que el brócoli hervido encoge como otras verduras de hoja y registrar la porción de menos. No lo hace: el rendimiento es de en torno al 100%.',
      'Aplicar el rendimiento de hervido/vapor al brócoli asado. Asar expulsa agua sustancial; una porción asada puede pesar un 30–50% menos que en crudo, y este conjunto de datos no lo cubre.',
      'Pesar el brócoli con mantequilla, aceite o salsa de queso añadidos. Registra la verdura cocida natural y la grasa aparte.',
    ],
  },

  'spinach': {
    introHeading: 'Por qué las espinacas apenas pierden peso aunque la sartén parezca vacía',
    intro: [
      'Las espinacas son el alimento peor calibrado de esta web. Una sartén grande de hojas crudas se reduce a unos pocos bocados, así que parece que tienen que haber perdido casi todo su peso. No es así: el rendimiento USDA de las espinacas hervidas es del 77%, una pérdida de solo en torno al 23%. 100 g de hojas crudas siguen siendo unos 77 g cocidas.',
      'La razón es que el volumen y el peso son dos cosas distintas. Las hojas de espinaca crudas son sobre todo aire y estructura rígida: láminas finas de tejido que mantienen su forma, con mucho espacio entre ellas. El calor destruye esa estructura casi al instante: las paredes celulares se ablandan, las hojas colapsan unas contra otras y todo el aire se expulsa. El volumen se desploma. Pero el agua dentro de las células sigue ahí en su mayor parte, y el agua es lo que pesa.',
      'Así que las hojas pierden su volumen mucho antes que su masa. Algo de agua celular sí se cuece —ese es el 23%—, pero el encogimiento dramático que ves es aire y geometría, no peso.',
      'El método importa más para las espinacas que para casi cualquier otra verdura. Al vapor se quedan en el 93%; hervidas bajan al 77%; en olla a presión bajan al 68% al forzar el calor la salida de más agua celular.',
    ],
    methodHeading: 'Al vapor frente a hervidas frente a olla a presión',
    method: [
      'Cifras USDA por método para las espinacas: al vapor 93%, hervidas 77%, olla a presión 68%.',
      'Parte de 200 g de espinacas crudas —una bolsa grande, quizá 4–5 litros de hojas sueltas—. Al vapor, salen a unos 200 × 0,93 = 186 g. Hervidas y escurridas, unos 200 × 0,77 = 154 g. En olla a presión, unos 200 × 0,68 = 136 g. Todo cabe en un bol pequeño sea cual sea el método.',
      'Cada porción lleva los macros de 200 g en crudo: unas 46 kcal, 5,8 g de proteína y 7,2 g de hidratos. Hacia atrás, 100 g de espinacas hervidas cocidas vinieron de 100 ÷ 0,77 ≈ 130 g en crudo, así que un «puñadito» de espinacas cocidas puede representar una ración de hoja genuinamente grande.',
    ],
    buyingHeading: 'Cuántas espinacas crudas comprar',
    buying: [
      'Las espinacas crudas para cocinar se reducen tanto que las porciones parecen minúsculas: cuenta con 150–200 g en crudo por persona para una guarnición cocida, que rinde solo unos 115–155 g cocidos pero representa una ración nutricional grande.',
      'Una bolsa «familiar» de 200 g da para una persona generosamente como guarnición cocida o dos con moderación. Para un plato con mucha espinaca como un saag o un relleno, compra 250–300 g en crudo por persona. La espinaca congelada picada ya está escaldada y escurrida: un bloque de 250 g equivale más o menos a 700–800 g de hojas crudas.',
    ],
    mistakesHeading: 'Errores habituales al registrar espinacas',
    mistakes: [
      'Suponer una pérdida de peso de ~70% porque la sartén parece vacía. La pérdida real es de en torno al 23%; el número de magia es volumen, no peso.',
      'Usar el rendimiento del hervido (77%) para las espinacas al vapor (93%): eso es un error de 16 puntos, mayor que para la mayoría de los alimentos.',
      'Registrar espinacas cocidas escurridas y prensadas y luego no contar el agua que exprimiste. Si las escurriste con fuerza, pesa lo que queda y trátalo como un equivalente en crudo menor.',
    ],
  },

  'potato': {
    introHeading: 'Por qué una papa hervida apenas encoge pero las papas fritas pierden casi la mitad',
    intro: [
      'Una papa cruda es un 79% agua encerrada en una estructura de almidón densa y uniforme con una piel fina. Hervida o al vapor, esa estructura retiene el agua notablemente bien —la piel y el almidón que gelatiniza actúan de barrera—, así que una papa hervida conserva alrededor del 94% de su peso y una al vapor en torno al 99%. Solo se pierde algo de agua superficial.',
      'Los macros son modestos y dominados por los hidratos: unas 77 kcal, 2 g de proteína y 17,5 g de hidratos por 100 g en crudo. Como hervir pierde tan poco, el peso crudo y el cocido están lo bastante cerca como para registrar una porción de papa hervida de cualquiera de las dos formas sin mucho error.',
      'Lo que cambia todo es el calor seco y graso. Hornear una papa con la piel aceitada baja el rendimiento al 81%; freír en abundante aceite para papas fritas lo hunde a un 55%, y las hash browns a un 60%. Freír hace dos cosas a la vez: evapora una gran fracción del agua y sustituye parte de ella por aceite absorbido, así que una papa frita es a la vez más ligera que la cruda y mucho más densa en calorías, un doble golpe que los macros de la papa cruda ignoran por completo.',
      'Así que el método de cocción no es un detalle de redondeo para la papa; es la diferencia entre un rendimiento del 94% y uno del 55%, y entre «solo una papa» y «una papa más mucho aceite».',
    ],
    methodHeading: 'Hervida frente a al horno frente a frita',
    method: [
      'Cifras USDA por método para la papa: al vapor 99%, al horno en papel de aluminio 95%, hervida 94%, al horno con la piel aceitada 81%, hash brown 60%, frita 55%.',
      'Toma una papa de 200 g en crudo. Hervida, unos 200 × 0,94 = 188 g. Al horno con la piel aceitada, unos 200 × 0,81 = 162 g. Convertida en papas fritas, unos 200 × 0,55 = 110 g, más el aceite que haya absorbido, que la cifra de rendimiento no incluye.',
      'Los macros en crudo de esa papa de 200 g son unas 154 kcal, 4 g de proteína y 35 g de hidratos. Se mantienen para las versiones hervida y al horno. Para las fritas, la aportación de la papa es correcta pero debes sumar el aceite de fritura aparte —normalmente 5–10 g de grasa por 100 g de papas fritas terminadas— o el registro subestimará mucho las calorías.',
    ],
    buyingHeading: 'Cuánta papa cruda comprar',
    buying: [
      'Una guarnición es de 150–250 g en crudo. Para puré, compra unos 200–250 g en crudo por persona (pierde algo al hervir, y luego añades leche y mantequilla aparte). Para una papa asada, una de 200–300 g por persona.',
      'Una bolsa de 2 kg de papas son unas ocho a diez papas medianas: guarniciones de cena para una familia varias noches. Para papas fritas, recuerda que pierdes casi la mitad del peso: 1 kg de papa cruda da solo unos 550 g de papas fritas.',
    ],
    mistakesHeading: 'Errores habituales al registrar papa',
    mistakes: [
      'Usar el rendimiento del hervido (94%) para papas asadas al aceite o fritas. La papa asada al aceite ronda el 81% y las fritas el 55%, y ambas llevan aceite añadido encima.',
      'Registrar las papas fritas como «papa» sin grasa añadida. El aceite es a menudo un tercio o más de las calorías de una ración de fritas.',
      'Pesar el puré y registrarlo como papa natural. El puré incluye leche, mantequilla o nata: pesa la papa antes de triturar, o registra los añadidos aparte.',
    ],
  },

  'sweet-potato': {
    introHeading: 'Por qué el camote al horno pierde peso pero el camote hervido lo gana',
    intro: [
      'El camote es más húmedo y azucarado que una papa normal: un 77% agua, 20 g de hidratos por 100 g en crudo, buena parte como azúcares, más fibra soluble. Esa composición hace que se comporte distinto según si el calor lo está secando o el agua lo está empapando.',
      'Al horno, un camote pierde alrededor del 22% de su peso, un rendimiento del 78%. El calor seco del horno evapora agua superficial y cercana a la superficie, los azúcares se concentran y caramelizan (ese exterior pegajoso y dulce) y la carne se vuelve más densa. Por eso un camote al horno sabe mucho más dulce que uno hervido: el mismo azúcar, menos agua.',
      'Hervido, va al revés y de hecho gana peso —un rendimiento del 101%— porque la carne absorbe algo del agua de cocción, algo más de lo que pierde. Al vapor queda justo por debajo, en el 98%. Así que el mismo camote crudo puede salir más pesado o más ligero de lo que empezó según el método.',
      'Para el conteo, eso significa que la elección de método invierte el signo de la corrección: hornea y registras menos que el peso crudo; hierve y registras un poco más.',
    ],
    methodHeading: 'Al horno frente a hervido frente a al vapor',
    method: [
      'Cifras USDA por método para el camote: hervido 101%, al vapor 98%, al horno 78%.',
      'Toma un camote de 150 g en crudo. Al horno, sale a unos 150 × 0,78 ≈ 117 g: bastante más pequeño y denso. Hervido, unos 150 × 1,01 ≈ 152 g. Al vapor, unos 150 × 0,98 = 147 g.',
      'Todos llevan los macros de 150 g en crudo: unas 129 kcal, 2,4 g de proteína y 30 g de hidratos. Así que un camote al horno de 117 g y uno hervido de 152 g a partir de camotes crudos idénticos tienen las mismas calorías: el del horno solo se nota más concentrado. Hacia atrás: una porción al horno de 120 g es 120 ÷ 0,78 ≈ 154 g en crudo.',
    ],
    buyingHeading: 'Cuánto camote crudo comprar',
    buying: [
      'Una guarnición es de 150–200 g en crudo. Para camote al horno, compra uno de 200–250 g por persona, sabiendo que se horneará hasta unos 155–195 g. Para puré o dados hervidos, 150–200 g en crudo cada uno bastan, ya que el peso apenas baja.',
      'Los camotes varían muchísimo de tamaño —un «mediano» va de 130 g a 250 g—, así que pesa en vez de contar. Un lote de 1 kg al horno rinde unos 780 g de carne cocida (algo menos una vez descartas la piel).',
    ],
    mistakesHeading: 'Errores habituales al registrar camote',
    mistakes: [
      'Suponer que se comporta como una papa normal. El camote al horno pierde alrededor del 22% (rendimiento del 78%); la papa normal al horno en papel de aluminio pierde solo en torno al 5%.',
      'Usar el rendimiento del horno para el camote hervido. Hervido, gana algo de peso (101%), así que convertir con el 78% subestimaría mucho tu porción.',
      'Registrar papas fritas de camote o camote confitado como natural. Las fritas llevan aceite absorbido; las versiones confitadas añaden mantequilla y azúcar: regístralos aparte.',
    ],
  },
};
