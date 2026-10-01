/**
 * French per-food FAQ. Full translation of `FOOD_FAQ_EN_BY_ID`; every figure
 * is kept identical.
 */
import type { FaqItem } from '../faq';

export const FOOD_FAQ_FR_BY_ID: Record<string, FaqItem[]> = {
  'chicken-breast': [
    {
      q: 'Mariner le poulet change-t-il le rendement à la cuisson ?',
      a: 'Une marinade à l’huile et à l’acide ne le déplace guère — un point ou deux au maximum. Une saumure au sel ou une marinade lourde sel-sucre, c’est différent : la viande prend l’eau au préalable, donc elle part plus lourde et peut perdre un peu plus que les 28 % habituels quand cette eau ajoutée s’évapore. Pesez le blanc avant qu’il n’aille dans la marinade pour le chiffre le plus propre.',
    },
    {
      q: 'Pourquoi mon blanc de poulet a-t-il perdu plus de 28 % ?',
      a: 'Généralement une surcuisson. Au-delà de 74 °C à cœur, chaque minute supplémentaire chasse plus d’eau et peut pousser la perte à 35 % ou plus. Les escalopes fines et les aiguillettes perdent aussi une part plus importante qu’un blanc entier épais, car elles ont plus de surface. Griller sur flamme directe coûte quelques points par rapport au four.',
    },
    {
      q: 'Le rendement est-il différent pour les aiguillettes de poulet ou le blanc en dés ?',
      a: 'Légèrement plus bas. Les aiguillettes et les dés exposent plus de surface à la chaleur par gramme, donc ils sèchent un peu plus vite qu’un blanc entier — comptez environ 68–70 % au lieu de 72 % à la poêle. Les macros par gramme sont les mêmes que le blanc ; seule la perte d’eau diffère.',
    },
    {
      q: 'Comment enregistrer le blanc de poulet si j’ai cuit un gros batch et portionné ensuite ?',
      a: 'Pesez tout le batch cru et notez-le. Après cuisson, pesez tout le batch cuit, puis chaque portion. L’équivalent cru de chaque portion est (poids cuit de la portion ÷ poids cuit total) × poids cru total. Ou pesez une portion cuite et divisez par 0,72 pour un batch au four.',
    },
    {
      q: 'Le rendement de 72 % inclut-il les jus laissés dans la poêle ?',
      a: 'Non. Le rendement est le poids de la viande cuite égouttée en proportion du poids cru. Les jus et le gras fondu laissés dans la poêle font partie des ~28 % qui ont quitté la viande. Si vous faites une sauce avec ces jus et la mangez, la perte de protéines est négligeable mais vous récupérez un peu de gras.',
    },
  ],

  'chicken-thigh': [
    {
      q: 'Pourquoi la cuisse de poulet perd-elle plus de poids que le blanc ?',
      a: 'La cuisse est de la viande brune avec plus de gras intramusculaire (environ 4,6 g pour 100 g cru contre 2,6 g pour le blanc) et plus de tissu conjonctif. À la cuisson, l’eau est chassée comme d’habitude et le gras supplémentaire fond et s’écoule aussi, donc la perte totale est plus élevée — un rendement au four de 69 % contre 72 % pour le blanc.',
    },
    {
      q: 'Le rendement de la cuisse avec os et peau est-il le même que celui de la cuisse désossée et sans peau ?',
      a: 'Non. Le chiffre de 69 % concerne uniquement la viande désossée et sans peau. Une cuisse avec os et peau est à 25–35 % os et peau en poids, et la peau est presque uniquement du gras. Pesez la viande que vous mangez réellement après l’avoir détachée de l’os, puis convertissez cela.',
    },
    {
      q: 'Pourquoi le rendement de la panée frite (80 %) est-il plus élevé qu’au four ?',
      a: 'Parce que la panure et l’huile absorbée ajoutent un poids qui n’a jamais été du poulet. La viande maigre de la cuisse à l’intérieur a quand même perdu de l’eau — le chiffre paraît élevé uniquement à cause de l’enrobage. N’utilisez pas les 80 % pour recalculer les macros du poulet nature ; cette portion a bien plus de lipides et de glucides.',
    },
    {
      q: 'Quel rendement par mode de cuisson utiliser pour un curry ou un ragoût de cuisse ?',
      a: 'Le chiffre du braisé, 73 %. Les cuisses mijotées dans une sauce sont entourées de liquide, donc elles retiennent plus de poids que tout mode à chaleur sèche. Une cuisse de 150 g crue ressort à environ 110 g dans le curry.',
    },
    {
      q: 'Les cuisses désossées du commerce sont-elles parées de leur gras ?',
      a: 'En partie. La plupart des cuisses désossées et sans peau du commerce portent encore des poches de gras visibles que beaucoup parent avant ou après cuisson. Si vous parez du gras significatif, enregistrez un équivalent cru légèrement inférieur au poids complet de la cuisse, puisque vous ne mangez pas tout.',
    },
  ],

  'ground-beef-80-20': [
    {
      q: 'Dois-je enregistrer le bœuf haché au poids cru ou au poids cuit égoutté ?',
      a: 'Le poids cru est le choix constant et correspond à l’étiquette USDA. Le poids cuit égoutté n’est pas fiable car il dépend de la quantité de gras versée. Si vous voulez enregistrer cuit, utilisez une entrée de base de données de bœuf haché cuit, pas une entrée en cru — le haché est bien plus dense en calories par gramme.',
    },
    {
      q: 'Si j’égoutte le gras, est-ce que je mange quand même toutes les calories des macros crus ?',
      a: 'Non. Avec le 80/20, une part significative de ces 20 % de gras fond et est versée, donc votre apport réel est un peu en dessous de la conversion depuis le poids cru. L’écart, c’est le gras dans la poêle. Le 93/7 plus maigre perd très peu de gras, donc sa conversion depuis le cru est proche de l’exactitude.',
    },
    {
      q: 'Pourquoi le 80/20 rétrécit-il plus que le 93/7 ?',
      a: 'Le gras. Le 80/20 a 20 g de gras pour 100 g cru et une grande partie fond et s’écoule ; le 93/7 n’en a que 7 g, donc il y a bien moins à perdre. C’est pourquoi le 80/20 rend environ 73 % poêlé et le 93/7 retient environ 77 %.',
    },
    {
      q: 'Combien de bœuf cuit donne une livre de bœuf haché cru ?',
      a: 'Environ 331 g (11,7 oz) de haché égoutté pour le 80/20 poêlé, ou environ 350 g pour le 93/7. Griller sous la résistance perd un peu plus. C’est de quoi nourrir quatre personnes en tacos ou en sauce à la viande.',
    },
    {
      q: 'Faire dorer le bœuf pour une sauce (sans égoutter) change-t-il la façon de l’enregistrer ?',
      a: 'Si vous gardez tout le gras et les jus dans la poêle et les mangez dans la sauce, alors les macros crus sont exacts — rien n’a été jeté. C’est l’égouttage qui fait que la conversion depuis le cru surestime votre gras.',
    },
  ],

  'ground-beef-93-7': [
    {
      q: 'La conversion des macros depuis le poids cru est-elle exacte pour le 93/7, ou le gras s’écoule-t-il comme avec le 80/20 ?',
      a: 'Elle est exacte. Le 93/7 n’a qu’environ 7 g de gras pour 100 g cru et très peu fond, donc le haché en conserve presque tout. Convertir votre portion cuite vers le poids cru donne une lecture fiable des calories et du gras — contrairement au 80/20, où beaucoup de gras finit dans la poêle.',
    },
    {
      q: 'Pourquoi le bœuf haché maigre ressort-il sec ?',
      a: 'Il y a peu de gras pour garder le haché moelleux, donc à feu vif il passe de juteux à sec rapidement, et le rendement glisse de 77 % vers les 70 bas. Faites-le dorer doucement et retirez-le du feu tant qu’il reste un peu de rose pour rester près de 77 %.',
    },
    {
      q: 'Puis-je utiliser les macros du 80/20 pour le 93/7 si c’est tout ce qu’a mon application ?',
      a: 'Non — l’écart est important. Le 80/20 fait 254 kcal et 20 g de gras pour 100 g cru ; le 93/7 fait 152 kcal et 7,2 g de gras. Utiliser la mauvaise entrée fausse votre apport en gras de près du triple. Choisissez l’entrée qui correspond au paquet.',
    },
    {
      q: 'Combien de viande cuite donne une livre de 93/7 ?',
      a: 'Environ 350 g (12,3 oz) poêlé — nettement plus que les ~331 g obtenus avec le 80/20, car le bœuf maigre perd moins de gras. C’est à peu près quatre portions généreuses de tacos ou de chili.',
    },
  ],

  'ribeye-steak': [
    {
      q: 'La cuisson change-t-elle le rendement de l’entrecôte ?',
      a: 'Oui, plus que pour la plupart des morceaux. Bleu, elle retient quelques points au-dessus de la moyenne de 84 % car elle n’a presque rien cédé d’humidité ; bien cuit, elle descend sous 80 % à mesure que la chaleur prolongée chasse plus d’eau et fait fondre plus de gras. Le chiffre de 84 % est un résultat à point.',
    },
    {
      q: 'Pourquoi l’entrecôte garde-t-elle plus de poids qu’un steak maigre comme le rumsteck ?',
      a: 'Le persillage. L’entrecôte fait environ 23 g de gras pour 100 g cru, réparti dans le muscle, et le gras déplace l’eau — il y a donc moins d’eau à perdre. Le gras fondu arrose aussi la surface et ralentit l’évaporation. Un morceau maigre a plus d’eau et moins d’auto-arrosage, donc il perd plus.',
    },
    {
      q: 'Si je pare la couche de gras après cuisson, comment l’enregistrer ?',
      a: 'Enregistrez un équivalent cru inférieur au steak entier. Le plus simple : pesez la viande cuite parée que vous mangez réellement, divisez par environ 0,84, et enregistrez cela. Vous laissez du gras que les macros du steak entier compteraient.',
    },
    {
      q: 'Le rendement de l’entrecôte avec os (côte de bœuf / tomahawk) est-il le même ?',
      a: 'La viande se comporte pareil, mais 10–20 % du poids cru d’un steak avec os est de l’os que vous ne mangez pas. Pesez la viande détachée de l’os après cuisson et convertissez cela, ou soustrayez d’abord l’estimation de l’os du poids cru.',
    },
  ],

  'pork-chop': [
    {
      q: 'Pourquoi le pulled pork rétrécit-il tellement plus qu’une côte de porc ?',
      a: 'Une côte cuit en quelques minutes et perd environ 22 %. L’épaule de porc est cuite des heures, ce qui fait fondre l’essentiel de son gras et continue d’évaporer l’eau tout du long — elle perd environ 35 % (un rendement de 65 %). Utilisez la page de l’épaule de porc pour les carnitas ou le pulled pork.',
    },
    {
      q: 'Pourquoi griller ma côte a-t-il donné un rendement plus élevé que la poêle ?',
      a: 'La chaleur directe forte saisit vite la surface et forme une croûte qui piège l’humidité avant que l’intérieur ne surcuise. L’USDA place la côte grillée à 83 % contre 78 % à la poêle. Braisée, malgré le liquide, elle est à 76 % car le temps de cuisson plus long joue contre elle.',
    },
    {
      q: 'Dois-je cuire les côtes de porc à 63 °C ou 71 °C, et est-ce important pour le suivi ?',
      a: 'La recommandation moderne est 63 °C (145 °F) plus un repos de 3 minutes, où la côte est légèrement rosée et proche du rendement de 78 %. La pousser à l’ancien standard « sans rose » de 71 °C (160 °F) chasse plus d’eau et peut faire tomber le rendement dans les 70 bas — et dessèche la côte.',
    },
    {
      q: 'Comment gérer une côte de porc avec os ?',
      a: 'L’os représente 15–25 % du poids d’une côte avec os et vous ne le mangez pas. Pesez la viande détachée de l’os après cuisson et divisez par 0,78, ou estimez l’os et soustrayez-le du poids cru avant de convertir.',
    },
    {
      q: 'Le rendement de la côte de porc s’applique-t-il au filet mignon de porc ?',
      a: 'Approximativement. Le filet mignon est tout aussi maigre et à cuisson rapide et atterrit dans la même plage de 70 hauts au rôtissage, même s’il sèche vite en cas de surcuisson. Pour un enregistrement approximatif, utiliser les 78 % de la côte est assez proche.',
    },
  ],

  'pork-shoulder': [
    {
      q: 'Combien de pulled pork donnera une épaule de 2 kg crue ?',
      a: 'Environ 1,3 kg de viande cuite et effilochée — un rendement de 65 %. L’épaule avec os perd l’os en plus, donc comptez encore 8–12 % de moins. Prévoyez environ 150 g de pulled pork cuit par sandwich.',
    },
    {
      q: 'Pourquoi l’épaule de porc perd-elle tellement plus que d’autres morceaux ?',
      a: 'Elle est grasse et pleine de tissu conjonctif, et on la cuit à basse température pendant des heures précisément pour faire fondre ce collagène. Sur cette longue cuisson, presque tout le gras fond et l’eau continue de s’évaporer — bien plus qu’une côte à cuisson rapide n’en perd.',
    },
    {
      q: 'Dois-je enregistrer le pulled pork avant ou après avoir ajouté la sauce barbecue ?',
      a: 'Avant. Pesez la viande effilochée nature et convertissez-la en poids cru, puis enregistrez la sauce à part — la sauce barbecue est surtout du sucre et ajoute de vraies calories qui ne sont pas dans le porc.',
    },
    {
      q: 'Mon apport en gras est-il vraiment aussi élevé que le dit la conversion depuis le poids cru ?',
      a: 'Probablement un peu plus bas. Beaucoup de gras s’écoule dans le bac de récupération sur une longue cuisson. Si vous dégraissez ou jetez les jus au lieu de les réincorporer, baissez un peu le chiffre du gras — la différence, c’est le gras que vous avez versé.',
    },
    {
      q: 'Le rendement de 65 % couvre-t-il le fumage aussi bien que le four et la mijoteuse ?',
      a: 'Oui. L’épaule fumée, rôtie au four et mijotée atterrissent toutes près de 65 % car le point d’arrivée est le même — on cuit jusqu’à ce que ça s’effiloche, autour de 90–96 °C à cœur, pas jusqu’à un temps fixe.',
    },
  ],

  'turkey-breast': [
    {
      q: 'Pourquoi le rendement du blanc de dinde (79 %) est-il plus élevé que celui du blanc de poulet (72 %) ?',
      a: 'Surtout la taille. Un blanc de dinde entier est une pièce de viande bien plus grosse, donc proportionnellement moins de sa masse est exposée à la chaleur desséchante et l’intérieur est protégé par la masse environnante. Coupez le blanc de dinde en fines escalopes et le rendement descend vers le territoire du blanc de poulet.',
    },
    {
      q: 'Puis-je utiliser le rendement de la dinde entière rôtie pour un blanc nature ?',
      a: 'Non. Les chiffres de la dinde entière et de la dinde farcie (souvent cités autour de 70–74 %) moyennent la viande brune, la peau et les pertes de la cavité. Un blanc sans peau seul retient environ 79 %.',
    },
    {
      q: 'Comment enregistrer un blanc de dinde de supermarché « auto-arrosant » ou saumuré ?',
      a: 'Ils portent une solution injectée qui représente 8–15 % du poids — eau, sel et parfois gras. Elle s’évapore en partie, donc le rendement est imprévisible. Si le paquet a une étiquette nutritionnelle, enregistrez à partir d’elle ; sinon pesez cru et attendez-vous à perdre un peu plus de 21 %.',
    },
    {
      q: 'La dinde rôtie de charcuterie est-elle la même chose que le blanc rôti maison ?',
      a: 'Non. La dinde de charcuterie est saumurée et souvent additionnée d’eau et d’amidon, avec sa propre étiquette nutritionnelle en poids cuit. Utilisez cette étiquette à peu près au poids des tranches — ne la convertissez pas comme s’il s’agissait de blanc cru.',
    },
  ],

  'salmon': [
    {
      q: 'Pourquoi le saumon ne perd-il qu’environ 15 % quand le poulet perd 28 % ?',
      a: 'Le saumon est un poisson gras — environ 13 g de gras pour 100 g cru — bâti en feuillets de muscle courts et délicats avec presque pas de tissu conjonctif. Il se raffermit doucement au lieu de se contracter fort, et le gras le garde moelleux au lieu de s’écouler. L’essentiel du poids reste donc dans le filet : un rendement de 85 %.',
    },
    {
      q: 'Le rendement du saumon d’élevage est-il différent du sauvage ?',
      a: 'Légèrement. Le saumon d’élevage est plus gras, donc il retient un peu plus de poids que le saumon rouge ou coho sauvage maigre cuit de la même façon. La différence est faible — quelques points de pourcentage — et le chiffre de 85 % fonctionne pour les deux.',
    },
    {
      q: 'Comment enregistrer un filet avec peau ?',
      a: 'La peau représente 5–8 % du poids et reste sur la balance même après avoir fondu son gras. Pesez sans peau si possible. Si vous cuisez avec peau et retirez la peau avant de manger, pesez la chair cuite seule et divisez par 0,85.',
    },
    {
      q: 'Le rendement du saumon s’applique-t-il au saumon en conserve ou fumé ?',
      a: 'Non. Le saumon en conserve est déjà cuit et emballé, parfois avec sel ou huile ajoutés ; le saumon fumé est salé/mariné, pas cuit. Les deux ont leur propre étiquette et doivent être enregistrés directement à partir du poids consommé.',
    },
    {
      q: 'Et cette substance blanche qui sort du saumon ?',
      a: 'C’est de l’albumine, une protéine hydrosoluble chassée à mesure que la chair cuit. La quantité est infime par rapport à la protéine totale du filet et ne change pas vos macros de façon notable — c’est juste peu appétissant. Il y en a plus quand le poisson est cuit vite ou surcuit.',
    },
  ],

  'shrimp': [
    {
      q: 'Pourquoi la crevette a-t-elle l’air de rétrécir de plus de 25 % ?',
      a: 'Parce qu’elle s’enroule et se crispe. Le muscle se contracte fort et vite — c’est l’enroulement de droite-crue à « C » serré — concentrant la même masse dans une forme plus petite et plus dense. Elle ne perd pas vraiment un quart de son volume ; la balance montre la vraie perte de 25 %.',
    },
    {
      q: 'Comment tenir compte des crevettes vendues « traitées » au phosphate de sodium ?',
      a: 'La crevette traitée est saumurée pour retenir l’eau, donc elle pèse plus cru et peut perdre plus de 25 % à la cuisson car elle rejette cette eau ajoutée. Si la liste d’ingrédients mentionne du sel ou du tripolyphosphate de sodium, attendez-vous à un poids cuit plus faible qu’un sachet « sec » de même taille.',
    },
    {
      q: 'Le poids de la crevette non décortiquée est-il le même que décortiquée ?',
      a: 'Non. La carapace, la queue et la tête représentent 30–45 % du poids d’une crevette non décortiquée. Pesez la crevette décortiquée, ou si vous cuisez non décortiqué, décortiquez après cuisson et ne convertissez que le poids cuit décortiqué.',
    },
    {
      q: 'Comment enregistrer des crevettes surgelées précuites ?',
      a: 'Elles ont déjà perdu leur eau de cuisson, donc ne les convertissez pas comme du cru. Enregistrez-les depuis une entrée de crevette cuite, à peu près au poids du sachet (égoutté de tout glaçage ou glace).',
    },
    {
      q: 'Que signifie « 16/20 » ou « 31/40 » sur un sachet de crevettes ?',
      a: 'C’est le calibre — nombre de crevettes par livre. « 16/20 » signifie 16 à 20 crevettes par 454 g, donc chaque crevette crue fait environ 23–28 g. Les nombres plus bas sont des crevettes plus grosses. Cela aide à estimer les portions sans peser chaque pièce.',
    },
  ],

  'white-rice': [
    {
      q: 'Pourquoi mon riz est-il plus lourd ou plus collant que 3× le poids sec ?',
      a: 'Vous avez ajouté plus d’eau, cuit plus longtemps, ou utilisé une variété plus collante. Le riz cuit mou, ou le riz rond et à sushi, absorbent plus et peuvent dépasser 320–330 %. Un pilaf ferme aux grains détachés se situe plus bas, vers 260–280 %. Le chiffre de 308 % est un résultat bouilli moyen.',
    },
    {
      q: 'Le type de riz change-t-il le rendement ?',
      a: 'Oui. Le riz blanc bouilli ordinaire est à environ 308 %. Le riz étuvé (« converted ») atteint environ 358 % et le riz instantané environ 350 %, car leur amidon est pré-gélatinisé et retient plus d’eau. Le riz complet est à environ 335 % et a sa propre page. Le basmati et le jasmin sont proches du blanc ordinaire.',
    },
    {
      q: 'Si je rince le riz avant de le cuire, cela affecte-t-il le suivi ?',
      a: 'Rincer retire l’amidon de surface et une très petite quantité du grain, ce qui abaisse légèrement le poids cuit final et rend les grains moins collants. L’effet sur les macros est négligeable — continuez d’enregistrer à partir du poids sec mesuré avant rinçage.',
    },
    {
      q: 'Combien de riz sec pour une tasse de riz cuit ?',
      a: 'Environ 50–55 g de riz blanc sec font à peu près 160–170 g (une tasse) cuits. Une tasse de riz sec, environ 185 g, fait près de 570 g cuits — trois à quatre portions d’accompagnement.',
    },
    {
      q: 'Puis-je peser le riz cuit au lieu de sec ?',
      a: 'Oui, tant que votre entrée de base de données est pour du riz cuit. Le danger est d’enregistrer un poids cuit sur une entrée en sec « pour 100 g », ce qui triple à peu près vos calories. Ce calculateur convertit dans les deux sens pour que vous pesiez quand cela vous arrange.',
    },
  ],

  'brown-rice': [
    {
      q: 'Pourquoi le riz complet gonfle-t-il plus que le riz blanc ?',
      a: 'Les couches de son et de germe sont fibreuses et résistantes à l’eau, donc le riz complet demande plus d’eau et une cuisson plus longue — et finit par en absorber davantage. Son rendement est d’environ 335 % contre 308 % pour le blanc.',
    },
    {
      q: 'Puis-je enregistrer le riz complet comme du riz blanc pour gagner du temps ?',
      a: 'Pas avec exactitude. Le riz complet a un rendement différent (335 % contre 308 %) et des macros différents — plus de gras et de fibres venant du germe et du son. L’enregistrer comme blanc sous-estime gras et fibres et se trompe sur la portion.',
    },
    {
      q: 'Le basmati complet ou le riz complet rond correspondent-ils à ce chiffre ?',
      a: 'Assez pour le suivi. Tous les riz complets à grain entier atterrissent dans la plage 320–345 %. Utilisez le chiffre de 335 % sauf si votre paquet donne des données spécifiques en poids cuit.',
    },
    {
      q: 'Combien de riz complet sec par personne ?',
      a: 'Environ 48–60 g sec pour une portion d’accompagnement cuite de 160–200 g. C’est un peu moins de riz sec que le blanc pour la même portion cuite, car le complet gonfle plus.',
    },
  ],

  'pasta': [
    {
      q: 'Pourquoi mes pâtes cuites ne font-elles pas exactement 2,25× le poids sec ?',
      a: 'La cuisson. Égouttées al dente ferme, les pâtes sèches sont plutôt à 200 %. Cuites molles, ou laissées reposer en sauce, elles continuent d’absorber et dépassent 240 %. Le chiffre de 225 % est un résultat normal, un peu au-delà de l’al dente.',
    },
    {
      q: 'La forme des pâtes change-t-elle le rendement ?',
      a: 'Un peu. Les formes fines et petites absorbent plus vite et plus uniformément ; les gros rigatoni et les grandes conchiglie se situent un peu plus bas. Les pâtes longues comme les spaghettis sont plus hautes — vers 290 % — et ont leur propre entrée. Cette page est une moyenne générique de pâtes sèches.',
    },
    {
      q: 'Les pâtes fraîches sont-elles pareilles aux sèches ?',
      a: 'Non. Les pâtes fraîches aux œufs contiennent déjà beaucoup d’humidité, donc elles gagnent bien moins à la cuisson — environ 140–170 % — et ont des macros différents. N’utilisez pas le rendement des pâtes sèches pour les fraîches.',
    },
    {
      q: 'Un plat de pâtes au restaurant est énorme — combien de sec cela représente-t-il ?',
      a: 'Une assiette de 300–400 g de pâtes cuites représente environ 130–180 g sec, deux à trois fois la « portion » de 57 g de la boîte. Bon à savoir quand vous enregistrez un repas à l’extérieur.',
    },
    {
      q: 'Dois-je peser les pâtes avant ou après avoir ajouté la sauce ?',
      a: 'Pesez-les égouttées, avant la sauce. Une fois qu’elles reposent en sauce, elles absorbent à la fois de la sauce et plus d’eau, et vous ne pouvez plus séparer le poids des pâtes de celui de la sauce. Enregistrez la sauce comme son propre élément.',
    },
  ],

  'quinoa': [
    {
      q: 'Le rendement du quinoa est-il le même que celui du riz ?',
      a: 'Proche en poids — le quinoa est à environ 314 % et le riz blanc à environ 308 % — mais les macros sont très différents. Le quinoa a près du double de protéines et bien plus de lipides par gramme sec, donc les entrées ne sont pas interchangeables.',
    },
    {
      q: 'Rincer le quinoa change-t-il le poids cuit ?',
      a: 'À peine. Rincer retire la couche amère de saponine et une trace de la graine. Cela affecte la saveur, pas le rendement ni les macros de façon notable — continuez d’enregistrer à partir du poids sec.',
    },
    {
      q: 'Pourquoi mon quinoa est-il plus léger et plus aérien que prévu ?',
      a: 'Cuit avec moins d’eau, ou égoutté et séché à la vapeur, le quinoa se situe vers le bas de sa plage. Cuit avec plus d’eau jusqu’à très mou, il retient plus. Le chiffre de 314 % suppose la méthode d’absorption standard 1 pour 1,75.',
    },
    {
      q: 'Combien de quinoa sec pour un bol de céréales ?',
      a: 'Environ 60–70 g sec par personne quand le quinoa est la base du bol, cuisant à environ 190–220 g. En accompagnement d’une protéine, 50 g sec suffisent.',
    },
  ],

  'lentils': [
    {
      q: 'Pourquoi mes lentilles sont-elles plus fermes et plus légères que ce que dit le calculateur ?',
      a: 'Vous les avez cuites brièvement. L’USDA place un mijotage de 20 minutes à 261 % contre 289 % pour des lentilles bouillies ou cuites au four jusqu’à bien tendres — un vrai écart de 28 g pour 100 g sec. Utilisez le chiffre le plus bas si vous aimez vos lentilles avec du mordant.',
    },
    {
      q: 'Les lentilles corail, vertes et du Puy ont-elles le même rendement ?',
      a: 'Grossièrement, avec un écart. Les lentilles corail et jaunes cassées s’effondrent et absorbent beaucoup, atterrissant en haut. Les lentilles vertes fermes et du Puy cuites juste tendres restent entières et absorbent moins. Le chiffre de 289 % est une moyenne pour des lentilles bien cuites.',
    },
    {
      q: 'Comment enregistrer des lentilles en conserve ?',
      a: 'Une boîte de 400 g s’égoutte à environ 240 g, équivalent à environ 85 g sec. Divisez le poids égoutté par environ 2,85 pour l’équivalent sec, ou enregistrez directement à partir de l’étiquette en poids cuit de la boîte si elle en a une.',
    },
    {
      q: 'Les lentilles ont-elles besoin de trempage, et le trempage change-t-il le rendement ?',
      a: 'Elles n’ont pas besoin de trempage — elles sont petites et à peau fine. Le trempage raccourcit un peu le temps de cuisson et peut faire monter légèrement le poids hydraté final, mais l’effet sur les macros est négligeable. Enregistrez à partir du poids sec dans tous les cas.',
    },
  ],

  'black-beans': [
    {
      q: 'Pourquoi mes haricots cuits maison rendent-ils moins de 2,5× ?',
      a: 'Les haricots vieux et l’eau dure riche en minéraux résistent tous deux à l’hydratation. Des haricots de plus d’un an, ou cuits sans trempage, gonflent moins et peuvent atterrir vers 220–235 %. Un long trempage, des haricots frais et une eau douce poussent vers 250 % ou au-delà.',
    },
    {
      q: 'Combien de haricots noirs secs équivalent à une boîte ?',
      a: 'Une boîte de 400 g s’égoutte à environ 240–260 g de haricots, soit à peu près 100 g sec. Un sachet de 454 g (1 lb) de haricots secs représente donc environ quatre boîtes et demie de haricots une fois cuits, bien moins cher.',
    },
    {
      q: 'Dois-je enregistrer les haricots en conserve avec ou sans le liquide ?',
      a: 'Égouttez et rincez d’abord, puis pesez. Le liquide de conserve (aquafaba) ajoute du poids et du sodium et est généralement jeté. Si une recette utilise le liquide, comptez-le séparément.',
    },
    {
      q: 'Les haricots noirs, pinto et rouges partagent-ils un rendement ?',
      a: 'Ils sont proches mais pas identiques. Les haricots noirs sont à environ 250 %, les haricots rouges à environ 238 %, les pinto semblables aux noirs. Les lentilles sont plus hautes à 289 %. Utilisez l’entrée spécifique quand vous le pouvez.',
    },
  ],

  'broccoli': [
    {
      q: 'Le brocoli bouilli ne perd-il vraiment aucun poids ?',
      a: 'Essentiellement aucun. L’eau perdue à mesure que les tissus se ramollissent est compensée par l’eau bouillante que les bouquets absorbent, pour un rendement net de 100 %. Le brocoli cru et bouilli pèsent pareil, donc vous pouvez enregistrer l’un ou l’autre.',
    },
    {
      q: 'Et le brocoli rôti ?',
      a: 'Le rôtissage est une autre histoire — la chaleur sèche du four chasse de l’eau réelle et une portion rôtie peut peser 30–50 % de moins que le cru. Ce jeu de données ne note pas le brocoli rôti, donc pesez-le après rôtissage et enregistrez sur une entrée de rôti, plus toute huile.',
    },
    {
      q: 'Le brocoli surgelé est-il différent du frais ?',
      a: 'Non. Le brocoli surgelé est blanchi avant congélation mais se comporte pareil sur la balance quand vous le cuisez — le rendement bouilli reste d’environ 100 %.',
    },
    {
      q: 'La tige compte-t-elle pareil que les bouquets ?',
      a: 'Nutritionnellement, la tige est semblable aux bouquets une fois épluchée, et elle cuit avec le même rendement proche de 100 %. Elle est juste plus dense, donc elle met une minute ou deux de plus à s’attendrir.',
    },
  ],

  'spinach': [
    {
      q: 'Pourquoi mes épinards ont-ils l’air d’avoir perdu 80 % quand le rendement est de 77 % ?',
      a: 'Vous voyez du volume, pas du poids. Les feuilles d’épinards crues sont surtout de l’air et de la structure rigide. La chaleur effondre cette structure instantanément, donc le tas rétrécit de façon spectaculaire — mais l’eau à l’intérieur des cellules, qui est ce qui pèse quelque chose, reste pour l’essentiel. La perte de poids n’est que d’environ 23 %.',
    },
    {
      q: 'La vapeur retient-elle vraiment tellement plus que l’ébullition ?',
      a: 'Oui. Les épinards à la vapeur sont à environ 93 % contre 77 % bouillis — un écart de 16 points, plus large que pour presque tout autre légume. La cocotte-minute va dans l’autre sens, jusqu’à environ 68 %. La façon dont vous cuisez les épinards change le chiffre plus que pour la plupart des aliments.',
    },
    {
      q: 'Comment enregistrer les épinards après en avoir pressé l’eau ?',
      a: 'Presser retire de l’eau que le chiffre de rendement suppose encore présente. Pesez ce qui reste après pressage et traitez-le comme un équivalent cru plus faible — des épinards cuits pressés fort peuvent être plus près de 50–60 % du poids cru.',
    },
    {
      q: 'Les épinards surgelés équivalent-ils à une certaine quantité de frais ?',
      a: 'Grossièrement. Un bloc de 250 g d’épinards hachés surgelés est déjà blanchi et égoutté et équivaut à environ 700–800 g de feuilles crues. Enregistrez-le depuis une entrée d’épinards cuits.',
    },
    {
      q: 'Une recette dit « 10 tasses d’épinards crus » — combien cela fait-il cuit ?',
      a: 'Environ 280–300 g de feuilles crues, qui cuisent jusqu’à environ 215–230 g bouillies — un peu plus d’une tasse. Le nombre de tasses paraît énorme parce que l’épinard cru est presque uniquement de l’air.',
    },
  ],

  'potato': [
    {
      q: 'Pourquoi les frites perdent-elles tellement plus de poids qu’une pomme de terre bouillie ?',
      a: 'La friture chasse une grande fraction de l’eau de la pomme de terre à haute température et n’en remplace qu’une partie par de l’huile. Une pomme de terre bouillie garde environ 94 % de son poids ; les frites descendent à environ 55 % — et portent ensuite de l’huile absorbée que les macros de la pomme de terre crue n’incluent pas.',
    },
    {
      q: 'Comment enregistrer les pommes de terre rôties ?',
      a: 'Utilisez le rendement au four à peau huilée, environ 81 %, pour la pomme de terre elle-même, puis ajoutez l’huile de rôtissage à part — généralement 5–10 g de gras par portion. Enregistrer la pomme de terre rôtie comme pomme de terre bouillie nature rate à la fois la perte d’eau et l’huile.',
    },
    {
      q: 'La purée utilise-t-elle le même rendement ?',
      a: 'La partie pomme de terre ne perd qu’un peu à l’ébullition (environ 94 %), mais la purée contient aussi lait, beurre ou crème. Pesez la pomme de terre avant d’écraser et enregistrez les produits laitiers et le gras à part, sinon vous sous-compterez les calories.',
    },
    {
      q: 'Une pomme de terre au four en papillote est-elle différente d’une cuite directement sur la grille ?',
      a: 'Oui. Le papier alu piège la vapeur, donc une pomme de terre au four en papillote garde environ 95 % de son poids. Cuite directement avec une peau huilée, plus d’eau s’échappe et elle descend à environ 81 %.',
    },
    {
      q: 'Combien de pomme de terre crue me faut-il pour une purée pour quatre ?',
      a: 'Environ 800 g–1 kg de pomme de terre crue — 200–250 g par personne — avant d’ajouter lait et beurre. Elle ne perd qu’un peu de poids à l’ébullition, donc le poids cru est proche du poids de pomme de terre cuite que vous commencez à écraser.',
    },
  ],

  'sweet-potato': [
    {
      q: 'Pourquoi la patate douce au four perd-elle du poids mais la patate douce bouillie en gagne ?',
      a: 'La chaleur sèche du four évapore l’eau et concentre la chair — un rendement au four de 78 %. L’ébullition fait l’inverse : la chair absorbe un peu d’eau de cuisson et finit légèrement plus lourde qu’au départ, un rendement de 101 %. Même patate, sens opposé, selon la méthode.',
    },
    {
      q: 'Puis-je utiliser les rendements de la pomme de terre ordinaire pour la patate douce ?',
      a: 'Non. La patate douce au four perd environ 22 %, tandis qu’une pomme de terre ordinaire au four en papillote ne perd qu’environ 5 %. La patate douce est plus humide et plus sucrée et se comporte différemment à la chaleur.',
    },
    {
      q: 'Pourquoi la patate douce au four a-t-elle un goût tellement plus sucré que bouillie ?',
      a: 'Le four retire de l’eau et concentre les sucres, et la chaleur sèche leur permet de caraméliser. Le sucre total est le même que la patate crue — il est juste concentré dans moins de grammes, ce qui explique aussi que le rendement au four ne soit que de 78 %.',
    },
    {
      q: 'Comment enregistrer des frites de patate douce ?',
      a: 'Pesez-les cuites et enregistrez sur une entrée de frites de patate douce, ou estimez la patate crue et ajoutez l’huile de friture à part. Comme les frites ordinaires, elles perdent beaucoup d’eau et captent de l’huile que les macros de la patate nature ratent.',
    },
  ],
};
