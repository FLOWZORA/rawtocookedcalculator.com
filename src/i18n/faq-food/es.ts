/**
 * Spanish per-food FAQ. Full translation of `FOOD_FAQ_EN_BY_ID`; every figure
 * is kept identical.
 */
import type { FaqItem } from '../faq';

export const FOOD_FAQ_ES_BY_ID: Record<string, FaqItem[]> = {
  'chicken-breast': [
    {
      q: '¿Marinar el pollo cambia el rendimiento cocido?',
      a: 'Un marinado de aceite y ácido apenas lo mueve: un punto o dos como mucho. Una salmuera de sal o un marinado fuerte de sal y azúcar es otra cosa: la carne toma agua de antemano, así que parte más pesada y puede perder algo más del 28% habitual al evaporarse esa agua añadida. Pesa la pechuga antes de que entre en el marinado para el número más limpio.',
    },
    {
      q: '¿Por qué mi pechuga de pollo perdió más del 28%?',
      a: 'Normalmente por sobrecocción. Por encima de 74 °C internos, cada minuto de más expulsa más agua y puede llevar la pérdida al 35% o más. Los filetes finos y los solomillos pequeños también pierden una proporción mayor que una pechuga entera y gruesa porque tienen más superficie. Hacerla a la parrilla sobre llama directa cuesta unos puntos frente al horno.',
    },
    {
      q: '¿El rendimiento es distinto para los solomillos de pollo o la pechuga en dados?',
      a: 'Algo menor. Los solomillos y las piezas en dados exponen más superficie al calor por gramo, así que se secan un poco más rápido que una pechuga entera: espera en torno al 68–70% en vez del 72% al hacerlos a la sartén. Los macros por gramo son los mismos que los de la pechuga; solo cambia la pérdida de agua.',
    },
    {
      q: '¿Cómo registro la pechuga de pollo si cociné un lote grande y lo repartí después?',
      a: 'Pesa el lote entero en crudo y anótalo. Después de cocinar, pesa el lote cocido entero y luego cada porción. El equivalente en crudo de cada porción es (peso cocido de la porción ÷ peso cocido total) × peso crudo total. O pesa una porción cocida y divide entre 0,72 para un lote al horno.',
    },
    {
      q: '¿El rendimiento del 72% incluye los jugos que quedan en la sartén?',
      a: 'No. El rendimiento es el peso de la carne cocida y escurrida como proporción del peso crudo. Los jugos y la grasa fundida que quedan en la sartén son parte del ~28% que salió de la carne. Si haces una salsa con esos jugos y te la comes, la pérdida de proteína es insignificante pero recuperas algo de grasa.',
    },
  ],

  'chicken-thigh': [
    {
      q: '¿Por qué el muslo de pollo pierde más peso que la pechuga?',
      a: 'El muslo es carne oscura con más grasa intramuscular (unos 4,6 g por 100 g en crudo frente a 2,6 g de la pechuga) y más tejido conectivo. Al cocinarse, el agua se expulsa como siempre y además la grasa extra se funde y escurre, así que la pérdida total es mayor: un rendimiento al horno del 69% frente al 72% de la pechuga.',
    },
    {
      q: '¿El rendimiento del muslo con hueso y piel es el mismo que el del deshuesado y sin piel?',
      a: 'No. La cifra del 69% es solo para la carne deshuesada y sin piel. Un muslo con hueso y piel es un 25–35% hueso y piel en peso, y la piel es casi grasa pura. Pesa la carne que de verdad comes tras separarla del hueso y convierte eso.',
    },
    {
      q: '¿Por qué el rendimiento del rebozado frito (80%) es mayor que el del horno?',
      a: 'Porque el rebozado y el aceite absorbido añaden peso que nunca fue pollo. La carne magra del muslo de dentro igualmente perdió agua: el número parece alto solo por el recubrimiento. No uses la cifra del 80% para calcular hacia atrás los macros del pollo natural; esa porción tiene mucha más grasa e hidratos.',
    },
    {
      q: '¿Qué rendimiento por método debo usar para un curry o un guiso de muslo?',
      a: 'El de estofado, 73%. Los muslos cocinados a fuego lento en salsa están rodeados de líquido, así que retienen más peso que cualquier método de calor seco. Un muslo de 150 g en crudo queda en unos 110 g en el curry.',
    },
    {
      q: '¿Los muslos deshuesados de la tienda vienen sin grasa?',
      a: 'En parte. La mayoría de los muslos deshuesados y sin piel del comercio aún llevan bolsas de grasa visibles que mucha gente recorta antes o después de cocinar. Si recortas grasa significativa, registra un equivalente en crudo algo menor que el peso completo del muslo, ya que no te lo comes todo.',
    },
  ],

  'ground-beef-80-20': [
    {
      q: '¿Debo registrar la carne molida por el peso crudo o por el peso cocido escurrido?',
      a: 'El peso crudo es la opción constante y coincide con la etiqueta del USDA. El peso cocido escurrido es poco fiable porque depende de cuánta grasa hayas retirado. Si quieres registrar en cocido, usa una entrada de base de datos de carne molida cocida, no una en crudo: la carne desmenuzada es mucho más densa en calorías por gramo.',
    },
    {
      q: 'Si escurro la grasa, ¿sigo comiendo todas las calorías de los macros en crudo?',
      a: 'No. Con la 80/20, una parte importante de ese 20% de grasa se funde y se retira, así que tu ingesta real está algo por debajo de la conversión desde peso crudo. La diferencia es la grasa que quede en la sartén. La 93/7, más magra, pierde muy poca grasa, así que su conversión desde crudo es casi exacta.',
    },
    {
      q: '¿Por qué la 80/20 encoge más que la 93/7?',
      a: 'La grasa. La 80/20 tiene 20 g de grasa por 100 g en crudo y buena parte se derrite y escurre; la 93/7 solo tiene 7 g, así que hay mucho menos que perder. Por eso la 80/20 rinde alrededor del 73% dorada en sartén y la 93/7 retiene en torno al 77%.',
    },
    {
      q: '¿Cuánta carne cocida da una libra de carne molida cruda?',
      a: 'Unos 331 g (11,7 oz) de carne desmenuzada y escurrida para la 80/20 dorada en sartén, o unos 350 g para la 93/7. Gratinarla bajo la resistencia pierde un poco más. Es suficiente para cuatro personas en tacos o en una salsa de carne.',
    },
    {
      q: '¿Dorar la carne para una salsa (sin escurrir) cambia cómo la registro?',
      a: 'Si conservas toda la grasa y los jugos en la sartén y te los comes en la salsa, entonces los macros en crudo son exactos: no se tiró nada. Escurrir es lo que hace que la conversión desde crudo sobrestime tu grasa.',
    },
  ],

  'ground-beef-93-7': [
    {
      q: '¿La conversión de macros desde peso crudo es exacta para la 93/7, o la grasa escurre como con la 80/20?',
      a: 'Es exacta. La 93/7 solo tiene unos 7 g de grasa por 100 g en crudo y muy poca se funde y sale, así que la carne desmenuzada conserva casi toda. Convertir tu porción cocida de vuelta a peso crudo da una lectura fiable de calorías y grasa, a diferencia de la 80/20, donde mucha grasa acaba en la sartén.',
    },
    {
      q: '¿Por qué la carne molida magra sale seca?',
      a: 'Hay poca grasa que mantenga húmeda la carne, así que a fuego fuerte pasa de jugosa a seca rápido, y el rendimiento resbala del 77% hacia los 70 bajos. Dórala con suavidad y retírala del fuego mientras queda algo de rosa para mantenerte cerca del 77%.',
    },
    {
      q: '¿Puedo usar los macros de la 80/20 para la 93/7 si es lo único que tiene mi app?',
      a: 'No: la diferencia es grande. La 80/20 son 254 kcal y 20 g de grasa por 100 g en crudo; la 93/7 son 152 kcal y 7,2 g de grasa. Usar la entrada equivocada falsea tu ingesta de grasa casi por el triple. Elige la entrada que coincida con el paquete.',
    },
    {
      q: '¿Cuánta carne cocida da una libra de 93/7?',
      a: 'Unos 350 g (12,3 oz) dorada en sartén, bastante más que los ~331 g que da la 80/20, porque la carne magra pierde menos grasa. Son más o menos cuatro raciones generosas de tacos o chili.',
    },
  ],

  'ribeye-steak': [
    {
      q: '¿El punto de cocción cambia el rendimiento del bistec de costilla?',
      a: 'Sí, más que en la mayoría de los cortes. Poco hecho retiene unos puntos por encima de la media del 84% porque apenas ha cedido humedad; muy hecho baja por debajo del 80% al expulsar el calor prolongado más agua y fundir más grasa. La cifra del 84% es un resultado al punto.',
    },
    {
      q: '¿Por qué el bistec de costilla conserva más peso que un filete magro como el solomillo?',
      a: 'El veteado. El bistec de costilla tiene unos 23 g de grasa por 100 g en crudo, repartida por el músculo, y la grasa desplaza al agua, así que hay menos agua que perder. La grasa fundida también lubrica la superficie y frena la evaporación. Un corte magro tiene más agua y menos autolubricación, así que pierde más.',
    },
    {
      q: 'Si recorto la capa de grasa después de cocinar, ¿cómo lo registro?',
      a: 'Registra un equivalente en crudo menor que el filete entero. Lo más sencillo: pesa la carne cocida recortada que de verdad comes, divide entre unos 0,84 y registra eso. Estás dejando grasa que los macros del filete entero contarían.',
    },
    {
      q: '¿El rendimiento del bistec de costilla con hueso (rib steak / tomahawk) es el mismo?',
      a: 'La carne se comporta igual, pero un 10–20% del peso crudo de un filete con hueso es hueso que no comes. Pesa la carne separada del hueso después de cocinar y convierte eso, o resta antes la estimación del hueso al peso crudo.',
    },
  ],

  'pork-chop': [
    {
      q: '¿Por qué el pulled pork encoge mucho más que una chuleta de cerdo?',
      a: 'Una chuleta se cocina en minutos y pierde alrededor del 22%. La paleta de cerdo se cocina durante horas, lo que funde casi toda su grasa y sigue evaporando agua todo el rato: pierde alrededor del 35% (un rendimiento del 65%). Usa la página de la paleta de cerdo para carnitas o pulled pork.',
    },
    {
      q: '¿Por qué a la parrilla mi chuleta dio un rendimiento mayor que a la sartén?',
      a: 'El calor directo y fuerte sella la superficie rápido y forma una costra que atrapa la humedad antes de que el interior se pase. El USDA sitúa la chuleta gratinada o a la parrilla en el 83% frente al 78% a la sartén. Estofada, pese al líquido, queda en el 76% porque el tiempo de cocción más largo juega en contra.',
    },
    {
      q: '¿Debo cocinar las chuletas de cerdo a 63 °C o a 71 °C, y importa para el conteo?',
      a: 'La recomendación moderna es 63 °C (145 °F) más un reposo de 3 minutos, donde la chuleta está ligeramente rosada y cerca del rendimiento del 78%. Llevarla al viejo estándar de 71 °C (160 °F) «sin rosa» expulsa más agua y puede bajar el rendimiento a los 70 bajos, además de resecar la chuleta.',
    },
    {
      q: '¿Cómo manejo una chuleta de cerdo con hueso?',
      a: 'El hueso es un 15–25% del peso de una chuleta con hueso y no te lo comes. Pesa la carne separada del hueso después de cocinar y divide entre 0,78, o estima el hueso y réstalo del peso crudo antes de convertir.',
    },
    {
      q: '¿El rendimiento de la chuleta de cerdo sirve para el solomillo de cerdo?',
      a: 'Más o menos. El solomillo es igual de magro y de cocción rápida y cae en el mismo rango de 70 altos al asarse, aunque se reseca rápido si se pasa de cocción. Para un registro aproximado, usar la cifra del 78% de la chuleta se acerca bastante.',
    },
  ],

  'pork-shoulder': [
    {
      q: '¿Cuánto pulled pork dará una paleta de 2 kg en crudo?',
      a: 'Unos 1,3 kg de carne cocida y desmenuzada: un rendimiento del 65%. La paleta con hueso pierde el hueso además de eso, así que cuenta otro 8–12% menos. Calcula unos 150 g de pulled pork cocido por bocadillo.',
    },
    {
      q: '¿Por qué la paleta de cerdo pierde mucho más que otros cortes?',
      a: 'Es grasa y está llena de tejido conectivo, y se cocina a fuego lento durante horas precisamente para fundir ese colágeno. Durante esa cocción larga se funde casi toda la grasa y el agua sigue evaporándose, mucho más de lo que pierde una chuleta de cocción rápida.',
    },
    {
      q: '¿Debo registrar el pulled pork antes o después de añadir la salsa barbacoa?',
      a: 'Antes. Pesa la carne desmenuzada natural y conviértela a peso crudo, luego registra la salsa aparte: la salsa barbacoa es sobre todo azúcar y añade calorías reales que no están en el cerdo.',
    },
    {
      q: '¿Mi ingesta de grasa es de verdad tan alta como dice la conversión desde peso crudo?',
      a: 'Probablemente algo menor. Mucha grasa se funde a la bandeja de goteo durante una cocción larga. Si desgrasas o descartas los jugos en vez de reincorporarlos, ajusta la cifra de grasa a la baja: la diferencia es la grasa que retiraste.',
    },
    {
      q: '¿El rendimiento del 65% cubre el ahumado además del horno y la olla lenta?',
      a: 'Sí. La paleta ahumada, asada al horno y en olla lenta quedan todas cerca del 65% porque el punto final es el mismo: se cocina hasta que se deshace, hacia 90–96 °C internos, no hasta un tiempo fijo.',
    },
  ],

  'turkey-breast': [
    {
      q: '¿Por qué el rendimiento de la pechuga de pavo (79%) es mayor que el de la pechuga de pollo (72%)?',
      a: 'Sobre todo el tamaño. Una pechuga de pavo entera es una pieza de carne mucho más grande, así que proporcionalmente menos parte queda expuesta al calor secante y el interior está protegido por la masa que lo rodea. Corta la pechuga de pavo en filetes finos y el rendimiento baja hacia el terreno de la pechuga de pollo.',
    },
    {
      q: '¿Puedo usar el rendimiento del pavo entero asado para una pechuga sola?',
      a: 'No. Las cifras de pavo entero y pavo relleno (a menudo citadas en torno al 70–74%) promedian carne oscura, piel y pérdidas de la cavidad. Una pechuga sin piel por sí sola retiene alrededor del 79%.',
    },
    {
      q: '¿Cómo registro la pechuga de pavo de supermercado «autobasteante» o en salmuera?',
      a: 'Llevan una solución inyectada que es un 8–15% del peso: agua, sal y a veces grasa. Se evapora en parte, así que el rendimiento es impredecible. Si el paquete tiene etiqueta nutricional, regístralo desde ahí; si no, pesa en crudo y espera perder algo más del 21%.',
    },
    {
      q: '¿El pavo asado de charcutería es lo mismo que la pechuga asada en casa?',
      a: 'No. El pavo de charcutería está en salmuera y a menudo lleva agua y almidón añadidos, con su propia etiqueta nutricional en peso cocido. Usa esa etiqueta más o menos con el peso de las lonchas; no lo conviertas como si fuera pechuga cruda.',
    },
  ],

  'salmon': [
    {
      q: '¿Por qué el salmón solo pierde alrededor del 15% cuando el pollo pierde el 28%?',
      a: 'El salmón es un pescado graso —unos 13 g de grasa por 100 g en crudo— formado por lascas de músculo cortas y delicadas con casi nada de tejido conectivo. Se firma con suavidad en vez de contraerse con fuerza, y la grasa lo mantiene jugoso en lugar de escurrir. Así que la mayor parte del peso se queda en el filete: un rendimiento del 85%.',
    },
    {
      q: '¿El rendimiento del salmón de piscifactoría es distinto del salvaje?',
      a: 'Ligeramente. El salmón de piscifactoría es más graso, así que retiene algo más de peso que el sockeye o el coho salvajes magros cocinados igual. La diferencia es pequeña —un par de puntos porcentuales— y la cifra del 85% sirve para ambos.',
    },
    {
      q: '¿Cómo registro un filete con piel?',
      a: 'La piel es un 5–8% del peso y se queda en la balanza aunque funda su grasa. Pesa sin piel si puedes. Si cocinas con piel y la quitas antes de comer, pesa la carne cocida sola y divide entre 0,85.',
    },
    {
      q: '¿El rendimiento del salmón sirve para el salmón en lata o ahumado?',
      a: 'No. El salmón en lata ya está cocido y envasado, a veces con sal o aceite añadidos; el ahumado está curado, no cocido. Ambos tienen su propia etiqueta y deben registrarse directamente desde el peso que comes.',
    },
    {
      q: '¿Y esa sustancia blanca que sale del salmón?',
      a: 'Es albúmina, una proteína hidrosoluble que se expulsa al cocinarse la carne. La cantidad es mínima respecto a la proteína total del filete y no cambia tus macros de forma apreciable: solo tiene mal aspecto. Aparece más cuando el pescado se cocina rápido o se pasa de cocción.',
    },
  ],

  'shrimp': [
    {
      q: '¿Por qué parece que el camarón encoge más del 25%?',
      a: 'Porque se curva y se aprieta. El músculo se contrae con fuerza y rapidez —esa es la curvatura de recto en crudo a «C» apretada— y concentra la misma masa en una forma más pequeña y densa. En realidad no pierde una cuarta parte de su volumen; la balanza muestra la pérdida real del 25%.',
    },
    {
      q: '¿Cómo cuento el camarón vendido «tratado» con fosfato de sodio?',
      a: 'El camarón tratado está en salmuera para retener agua, así que pesa más en crudo y puede perder más del 25% al cocinarse porque suelta esa agua añadida. Si la lista de ingredientes menciona sal o tripolifosfato de sodio, espera un peso cocido menor que el de un paquete «seco» del mismo tamaño.',
    },
    {
      q: '¿El peso del camarón con cáscara es el mismo que el del pelado?',
      a: 'No. La cáscara, la cola y la cabeza son un 30–45% del peso de un camarón con cáscara. Pesa el camarón pelado o, si lo cocinas con cáscara, pélalo después de cocinar y convierte solo el peso cocido pelado.',
    },
    {
      q: '¿Cómo debo registrar el camarón congelado precocido?',
      a: 'Ya ha perdido su agua de cocción, así que no lo conviertas como crudo. Regístralo desde una entrada de camarón cocido más o menos con el peso de la bolsa (escurrido de cualquier glaseado o hielo).',
    },
    {
      q: '¿Qué significa «16/20» o «31/40» en una bolsa de camarones?',
      a: 'Es el número de camarones por libra: «16/20» significa de 16 a 20 camarones por 454 g, así que cada camarón crudo pesa unos 23–28 g. Los números más bajos son camarones más grandes. Ayuda a estimar porciones sin pesar cada pieza.',
    },
  ],

  'white-rice': [
    {
      q: '¿Por qué mi arroz pesa más o queda más pegajoso que 3× el peso seco?',
      a: 'Añadiste más agua, lo cociste más tiempo o usaste una variedad más pegajosa. El arroz cocido blando, o el de grano corto y el de sushi, absorben más y pueden superar el 320–330%. Un pilaf firme y suelto queda más bajo, cerca del 260–280%. La cifra del 308% es un resultado hervido de término medio.',
    },
    {
      q: '¿El tipo de arroz cambia el rendimiento?',
      a: 'Sí. El arroz blanco hervido normal ronda el 308%. El arroz vaporizado («converted») alcanza el 358% y el instantáneo el 350%, porque su almidón está pregelatinizado y retiene más agua. El arroz integral está en el 335% y tiene su propia página. El basmati y el jazmín quedan cerca del blanco normal.',
    },
    {
      q: 'Si lavo el arroz antes de cocinar, ¿afecta al conteo?',
      a: 'Lavar retira almidón superficial y una cantidad muy pequeña del grano, lo que baja ligeramente el peso cocido final y hace los granos menos pegajosos. El efecto en los macros es insignificante: sigue registrando desde el peso seco que mediste antes de lavar.',
    },
    {
      q: '¿Cuánto arroz seco es una taza de arroz cocido?',
      a: 'Unos 50–55 g de arroz blanco seco dan más o menos 160–170 g (una taza) cocidos. Una taza de arroz seco, unos 185 g, da cerca de 570 g cocidos: tres o cuatro guarniciones.',
    },
    {
      q: '¿Puedo pesar el arroz cocido en vez de seco?',
      a: 'Sí, siempre que tu entrada de la base de datos sea de arroz cocido. El peligro es registrar un peso cocido contra una entrada en seco «por 100 g», que casi triplica tus calorías. Esta calculadora convierte en ambos sentidos para que peses cuando te venga bien.',
    },
  ],

  'brown-rice': [
    {
      q: '¿Por qué el arroz integral se expande más que el blanco?',
      a: 'Las capas de salvado y germen son fibrosas y resistentes al agua, así que el arroz integral necesita más agua y una cocción más larga, y acaba absorbiendo más. Su rendimiento ronda el 335% frente al 308% del blanco.',
    },
    {
      q: '¿Puedo registrar el arroz integral como blanco para ahorrar tiempo?',
      a: 'No con exactitud. El arroz integral tiene un rendimiento distinto (335% frente a 308%) y distintos macros: más grasa y fibra del germen y el salvado. Registrarlo como blanco subestima la grasa y la fibra y calcula mal la porción.',
    },
    {
      q: '¿El basmati integral o el arroz integral de grano corto encajan con esta cifra?',
      a: 'Lo bastante para el conteo. Todos los arroces integrales de grano entero caen en el rango del 320–345%. Usa la cifra del 335% salvo que tu paquete dé datos específicos en peso cocido.',
    },
    {
      q: '¿Cuánto arroz integral seco por persona?',
      a: 'Unos 48–60 g en seco para una guarnición cocida de 160–200 g. Es algo menos de arroz seco que el blanco para la misma ración cocida, porque el integral se expande más.',
    },
  ],

  'pasta': [
    {
      q: '¿Por qué mi pasta cocida no es exactamente 2,25× el peso seco?',
      a: 'El punto de cocción. Escurrida al dente firme, la pasta seca está más cerca del 200%. Cocida blanda, o dejada reposar en salsa, sigue absorbiendo y supera el 240%. La cifra del 225% es un resultado normal, algo más que al dente.',
    },
    {
      q: '¿El formato de la pasta cambia el rendimiento?',
      a: 'Algo. Los formatos finos y pequeños absorben más rápido y de forma más uniforme; los rigatoni gruesos y las conchas grandes quedan un poco más bajos. La pasta larga como los espaguetis va más alta —cerca del 290%— y tiene su propia entrada. Esta página es una media de pasta seca genérica.',
    },
    {
      q: '¿La pasta fresca es lo mismo que la seca?',
      a: 'No. La pasta fresca al huevo ya contiene mucha humedad, así que gana mucho menos al cocinarse —en torno al 140–170%— y tiene macros distintos. No uses el rendimiento de la pasta seca para la fresca.',
    },
    {
      q: 'Un plato de pasta de restaurante es enorme: ¿cuánto es eso en seco?',
      a: 'Un plato de 300–400 g de pasta cocida son unos 130–180 g en seco, dos o tres veces la «ración» de 57 g de la caja. Conviene saberlo cuando registras una comida fuera.',
    },
    {
      q: '¿Debo pesar la pasta antes o después de añadir la salsa?',
      a: 'Pésala escurrida, antes de la salsa. Una vez que reposa en salsa absorbe tanto salsa como más agua, y ya no puedes separar el peso de la pasta del de la salsa. Registra la salsa como su propio elemento.',
    },
  ],

  'quinoa': [
    {
      q: '¿El rendimiento de la quinoa es el mismo que el del arroz?',
      a: 'Parecido por peso —la quinoa ronda el 314% y el arroz blanco el 308%— pero los macros son muy distintos. La quinoa tiene casi el doble de proteína y mucha más grasa por gramo en seco, así que las entradas no son intercambiables.',
    },
    {
      q: '¿Enjuagar la quinoa cambia el peso cocido?',
      a: 'Apenas. Enjuagar retira la capa amarga de saponina y un rastro de la semilla. Afecta al sabor, no al rendimiento ni a los macros de ninguna forma que merezca la pena contar: sigue registrando desde el peso seco.',
    },
    {
      q: '¿Por qué mi quinoa queda más suelta y ligera de lo esperado?',
      a: 'Cocinada con menos agua, o escurrida y secada al vapor, la quinoa queda hacia el extremo bajo de su rango. Cocinada con agua de más hasta quedar muy blanda, retiene más. La cifra del 314% supone el método de absorción estándar de 1 a 1,75.',
    },
    {
      q: '¿Cuánta quinoa seca para un bol de cereal?',
      a: 'Unos 60–70 g en seco por persona cuando la quinoa es la base del bol, que se cuecen hasta unos 190–220 g. Como guarnición junto a una proteína, 50 g en seco bastan.',
    },
  ],

  'lentils': [
    {
      q: '¿Por qué mis lentejas quedan más firmes y ligeras de lo que dice la calculadora?',
      a: 'Las cociste poco tiempo. El USDA sitúa un hervor de 20 minutos en el 261% frente al 289% de las lentejas hervidas u horneadas hasta bien blandas: una diferencia real de 28 g por 100 g en seco. Usa la cifra más baja si te gustan con mordida.',
    },
    {
      q: '¿Las lentejas rojas, verdes y de Puy tienen el mismo rendimiento?',
      a: 'Más o menos, con una horquilla. Las lentejas rojas y amarillas partidas se deshacen y absorben mucho, quedando en el extremo alto. Las verdes firmes y las de Puy cocidas justo hasta tiernas quedan enteras y absorben menos. La cifra del 289% es una media de bien cocidas.',
    },
    {
      q: '¿Cómo registro las lentejas de bote?',
      a: 'Un bote de 400 g escurre a unos 240 g, equivalentes a unos 85 g en seco. Divide el peso escurrido entre unos 2,85 para el equivalente seco, o regístralo directamente desde la etiqueta en peso cocido del bote si la tiene.',
    },
    {
      q: '¿Las lentejas necesitan remojo, y el remojo cambia el rendimiento?',
      a: 'No necesitan remojo: son pequeñas y de piel fina. El remojo acorta un poco el tiempo de cocción y puede subir ligeramente el peso hidratado final, pero el efecto en los macros es insignificante. Registra desde el peso seco en cualquier caso.',
    },
  ],

  'black-beans': [
    {
      q: '¿Por qué mis frijoles cocidos en casa rinden menos de 2,5×?',
      a: 'Los frijoles viejos y el agua dura, rica en minerales, resisten la hidratación. Los frijoles de más de un año, o cocidos sin remojo, se hinchan menos y pueden quedar cerca del 220–235%. Un remojo largo, frijoles frescos y agua blanda empujan hacia el 250% o por encima.',
    },
    {
      q: '¿Cuántos frijoles negros secos equivalen a un bote?',
      a: 'Un bote de 400 g escurre a unos 240–260 g de frijoles, que son más o menos 100 g en seco. Así que una bolsa de 454 g (1 lb) de frijoles secos equivale a unos cuatro botes y medio de frijoles una vez cocidos, mucho más barato.',
    },
    {
      q: '¿Debo registrar los frijoles de bote con o sin el líquido?',
      a: 'Escurre y enjuaga primero, luego pesa. El líquido de conserva (aquafaba) añade peso y sodio y normalmente se descarta. Si una receta usa el líquido, cuéntalo aparte.',
    },
    {
      q: '¿Los frijoles negros, pintos y rojos comparten un rendimiento?',
      a: 'Son parecidos pero no idénticos. Los frijoles negros rondan el 250%, los rojos el 238%, los pintos parecidos a los negros. Las lentejas están más altas, en el 289%. Usa la entrada específica cuando puedas.',
    },
  ],

  'broccoli': [
    {
      q: '¿De verdad el brócoli hervido no pierde nada de peso?',
      a: 'Prácticamente nada. El agua que se pierde al ablandarse el tejido se compensa con el agua hirviendo que absorben los ramilletes, para un rendimiento neto del 100%. El brócoli crudo y el hervido pesan lo mismo, así que puedes registrar cualquiera de los dos.',
    },
    {
      q: '¿Y el brócoli asado?',
      a: 'Asar es otra historia: el calor seco del horno expulsa agua de verdad y una porción asada puede pesar un 30–50% menos que en crudo. Este conjunto de datos no puntúa el brócoli asado, así que pésalo después de asar y regístralo contra una entrada de asado, más el aceite.',
    },
    {
      q: '¿El brócoli congelado es distinto del fresco?',
      a: 'No. El brócoli congelado se escalda antes de congelar pero se comporta igual en la balanza al cocinarlo: el rendimiento hervido sigue siendo de en torno al 100%.',
    },
    {
      q: '¿El tronco cuenta igual que los ramilletes?',
      a: 'Nutricionalmente el tronco es parecido a los ramilletes una vez pelado, y se cocina con el mismo rendimiento cercano al 100%. Solo es más denso, así que tarda un minuto o dos más en ablandarse.',
    },
  ],

  'spinach': [
    {
      q: '¿Por qué mis espinacas parecen haber perdido el 80% cuando el rendimiento es del 77%?',
      a: 'Estás viendo volumen, no peso. Las hojas de espinaca crudas son sobre todo aire y estructura rígida. El calor colapsa esa estructura al instante, así que el montón encoge de forma dramática, pero el agua dentro de las células, que es lo que pesa, se queda en su mayor parte. La pérdida de peso es solo de en torno al 23%.',
    },
    {
      q: '¿De verdad al vapor retiene tanto más que hervidas?',
      a: 'Sí. Las espinacas al vapor rondan el 93% frente al 77% hervidas: una diferencia de 16 puntos, mayor que en casi cualquier otra verdura. La olla a presión va al revés, hasta en torno al 68%. Cómo cocinas las espinacas cambia el número más que en la mayoría de los alimentos.',
    },
    {
      q: '¿Cómo registro las espinacas después de exprimirles el agua?',
      a: 'Exprimir retira agua que la cifra de rendimiento da por supuesta. Pesa lo que queda después de exprimir y trátalo como un equivalente en crudo menor: las espinacas cocidas muy exprimidas pueden estar más cerca del 50–60% del peso crudo.',
    },
    {
      q: '¿Las espinacas congeladas equivalen a cierta cantidad de frescas?',
      a: 'Más o menos. Un bloque de 250 g de espinacas congeladas picadas ya está escaldado y escurrido y equivale a unos 700–800 g de hojas crudas. Regístralo desde una entrada de espinacas cocidas.',
    },
    {
      q: 'Una receta dice «10 tazas de espinaca cruda»: ¿cuánto es eso cocido?',
      a: 'Unos 280–300 g de hojas crudas, que se reducen a unos 215–230 g hervidas, algo más de una taza. El número de tazas suena enorme porque la espinaca cruda es casi todo aire.',
    },
  ],

  'potato': [
    {
      q: '¿Por qué las papas fritas pierden mucho más peso que una papa hervida?',
      a: 'Freír evapora una gran fracción del agua de la papa a fuego fuerte y solo sustituye parte de ella por aceite. Una papa hervida conserva alrededor del 94% de su peso; las fritas bajan al 55%, y encima llevan aceite absorbido que los macros de la papa cruda no incluyen.',
    },
    {
      q: '¿Cómo registro las papas asadas al horno?',
      a: 'Usa el rendimiento al horno con piel aceitada, en torno al 81%, para la papa en sí, y luego añade el aceite de asado aparte, normalmente 5–10 g de grasa por porción. Registrar la papa asada como papa hervida natural ignora tanto la pérdida de agua como el aceite.',
    },
    {
      q: '¿El puré de papa usa el mismo rendimiento?',
      a: 'La parte de la papa pierde solo un poco al hervir (en torno al 94%), pero el puré también lleva leche, mantequilla o nata. Pesa la papa antes de triturar y registra los lácteos y la grasa aparte, o subestimarás las calorías.',
    },
    {
      q: '¿Una papa al horno en papel de aluminio es distinta de una al horno directa en la rejilla?',
      a: 'Sí. El aluminio atrapa el vapor, así que una papa al horno en aluminio conserva en torno al 95% de su peso. Al horno directa con la piel aceitada, escapa más agua y baja a en torno al 81%.',
    },
    {
      q: '¿Cuánta papa cruda necesito para puré para cuatro?',
      a: 'Unos 800 g–1 kg de papa cruda —200–250 g por persona— antes de añadir leche y mantequilla. Pierde solo un poco de peso al hervir, así que el peso crudo se acerca al peso de papa cocida con el que empiezas a triturar.',
    },
  ],

  'sweet-potato': [
    {
      q: '¿Por qué el camote al horno pierde peso pero el camote hervido lo gana?',
      a: 'El calor seco del horno evapora agua y concentra la carne: un rendimiento al horno del 78%. Hervir hace lo contrario: la carne absorbe algo de agua de cocción y acaba algo más pesada de lo que empezó, un rendimiento del 101%. El mismo camote, dirección opuesta, según el método.',
    },
    {
      q: '¿Puedo usar los rendimientos de la papa normal para el camote?',
      a: 'No. El camote al horno pierde alrededor del 22%, mientras que una papa normal al horno en aluminio pierde solo en torno al 5%. El camote es más húmedo y azucarado y se comporta distinto bajo el calor.',
    },
    {
      q: '¿Por qué el camote al horno sabe mucho más dulce que el hervido?',
      a: 'Hornear retira agua y concentra los azúcares, y el calor seco permite que caramelicen. El azúcar total es el mismo que el del camote crudo: solo está concentrado en menos gramos, que es también por lo que el rendimiento al horno es solo del 78%.',
    },
    {
      q: '¿Cómo registro las papas fritas de camote?',
      a: 'Pésalas cocidas y regístralas contra una entrada de papas fritas de camote, o estima el camote crudo y añade el aceite de fritura aparte. Como las fritas normales, pierden mucha agua y captan aceite que los macros del camote natural ignoran.',
    },
  ],
};
