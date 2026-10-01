/**
 * French long-form food-page content. Full translation of the English source
 * in `../food-content.ts`; every gram and percentage figure is kept identical.
 */
import type { FoodLongContent } from '../food-content';

export const FR: Record<string, FoodLongContent> = {
  // ── Viandes, volailles et fruits de mer ──────────────────────────────────

  'chicken-breast': {
    introHeading: 'Pourquoi le blanc de poulet perd environ 28 % à la cuisson',
    intro: [
      'Le blanc de poulet sans peau et sans os est composé d’environ 74 % d’eau en poids et de muscle quasiment pur : environ 22,5 g de protéines et à peine 2,6 g de lipides pour 100 g cru. Il y a très peu de gras et presque pas de tissu conjonctif pour retenir l’humidité, si bien que lorsque les fibres musculaires rencontrent la chaleur, elles se comportent comme une éponge que l’on essore : les protéines se dénaturent vers 60–65 °C, les faisceaux de fibres se contractent en longueur et en largeur, et l’eau qu’ils retenaient est chassée dans la poêle. Cette perte d’eau représente à elle seule presque tout le 28 % que perd le blanc pour atteindre un rendement USDA de 72 %.',
      'Comme la perte est presque uniquement de l’eau et à peine du gras, la protéine de départ reste dans la viande. Un blanc de 200 g cru contient toujours environ 45 g de protéines après cuisson : elles sont simplement concentrées dans environ 144 g au lieu de 200 g, d’où les quelque 31 g de protéines pour 100 g de blanc cuit contre 22,5 g cru. Même protéine, moins d’eau, viande plus dense.',
      'Le blanc de poulet punit la surcuisson plus durement que les morceaux gras. Sans gras ni collagène pour amortir, chaque minute supplémentaire au-delà de 74 °C à cœur chasse davantage d’eau et fait descendre le rendement vers le milieu des 60. Les escalopes fines aplaties et les aiguillettes perdent une part plus importante qu’un blanc entier et épais, car elles offrent plus de surface d’évaporation par rapport à leur masse.',
      'C’est l’aliment que la plupart des applications de suivi se trompent dans le même sens : elles pèsent le blanc cuit, cherchent une table nutritionnelle en poids cru et sous-comptent discrètement la protéine d’un quart. La solution est toujours d’enregistrer l’équivalent en poids cru, ce que renvoie ce calculateur quel que soit le sens de la conversion.',
    ],
    methodHeading: 'Au four, au gril ou poché : un exemple chiffré',
    method: [
      'La chaleur sèche et forte évapore plus d’humidité de surface que la chaleur humide et douce, si bien que le mode de cuisson déplace le rendement d’environ sept points. Chiffres USDA pour le blanc sans peau : au four ou rôti 72 %, à la poêle 72 %, au gril 70 %, bouilli ou poché 77 %.',
      'Partez d’un blanc de 200 g cru. Au four à 200 °C, il ressort à 200 × 0,72 ≈ 144 g cuit. Au gril sur flamme directe, le même blanc tombe à 200 × 0,70 = 140 g : le grillé supplémentaire et la chaleur rayonnante vous coûtent quelques grammes de plus. Poché dans une eau à peine frémissante, il retient 200 × 0,77 = 154 g, car la viande est entourée d’eau et non d’air sec et presque rien ne s’évapore.',
      'Les trois portions ont les mêmes macros, car elles proviennent toutes de 200 g cru : environ 240 kcal, 45 g de protéines et 5,2 g de lipides. Si vous n’avez que le poids cuit, divisez par le rendement de votre mode de cuisson : une portion de 150 g au gril fait 150 ÷ 0,70 ≈ 214 g cru ; au four, ces mêmes 150 g font 150 ÷ 0,72 ≈ 208 g cru. Utilisez le sélecteur de mode de cuisson du calculateur pour choisir automatiquement le bon diviseur.',
    ],
    buyingHeading: 'Quelle quantité de blanc de poulet cru acheter',
    buying: [
      'Raisonnez à rebours à partir de la portion cuite que vous voulez dans l’assiette. Pour 150 g cuits, achetez environ 150 ÷ 0,72 ≈ 210 g cru par personne si vous cuisez au four ou rôtissez ; plutôt 215 g au gril. Pour une portion cuite de 170 g (6 oz), comptez environ 235–240 g cru par personne.',
      'Les blancs sous barquette pèsent généralement 200–280 g pièce, donc un blanc moyen nourrit un adulte affamé avec un léger surplus, et une barquette de 1 kg de trois à quatre blancs donne environ 700–720 g cuits, soit à peu près quatre portions de 175 g. Pour cinq portions de 150 g cuits en batch cooking, partez d’environ 1,05 kg cru.',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant le blanc de poulet',
    mistakes: [
      'Peser après cuisson, puis enregistrer sur une table en cru « pour 100 g ». Un blanc cuit de 150 g correspond à environ 208 g cru ; enregistrer 150 g vous retire environ 13 g de protéines et 70 kcal.',
      'Utiliser le rendement du poché/bouilli (77 %) pour un blanc en réalité passé au gril (70 %). C’est une erreur de 10 % sur le poids cru que vous recalculez.',
      'Enregistrer comme poulet nature un blanc « assaisonné », mariné ou saumuré acheté prêt. La solution ajoutée peut représenter 10–15 % du poids de la barquette et est surtout de l’eau et du sel, pas de la protéine.',
    ],
  },

  'chicken-thigh': {
    introHeading: 'Pourquoi la cuisse de poulet perd plus que le blanc',
    intro: [
      'La cuisse désossée et sans peau est de la viande brune : les muscles que le poulet utilise pour se tenir debout et marcher. Ils travaillent plus que le blanc, donc ils contiennent plus de myoglobine, plus de gras intramusculaire (environ 4,6 g pour 100 g cru contre 2,6 g pour le blanc) et nettement plus de tissu conjonctif. Cette structure explique que la cuisse cuise jusqu’à un rendement au four de 69 % — une perte d’environ 31 % — quand le blanc retient 72 %.',
      'Deux choses quittent la viande en même temps. L’eau est chassée à mesure que les fibres se contractent, comme dans tout muscle, et le gras fond : la chaleur plus élevée du rôtissage ou du gril fait fondre le gras intramusculaire, qui s’écoule avec les jus. Un morceau plus gras, avec plus de gras à faire fondre, perd plus de poids total, même si le collagène qu’il contient se transforme en même temps en gélatine et retient une partie de l’humidité.',
      'Ce collagène explique aussi pourquoi la cuisse pardonne davantage à la dégustation que le blanc au même rendement. Surcuisez un blanc, il est sec et filandreux ; surcuisez une cuisse, le tissu conjonctif s’est suffisamment décomposé pour qu’elle reste juteuse. La balance affiche toujours la perte de poids, même si votre bouche ne la sent pas.',
      'Pour le suivi, la cuisse compte parce que l’écart entre modes de cuisson est énorme — plus large que pour presque tout autre morceau de ce site — donc un seul chiffre de rendement « poulet » ne suffit pas ici.',
    ],
    methodHeading: 'Le plus grand écart entre modes de cuisson de tous les morceaux de poulet',
    method: [
      'L’USDA documente la cuisse désossée de 59 % en friture profonde à 80 % panée et frite, avec 73 % braisée, 66 % au four façon friture, 66 % à la poêle, 61 % au gril et 64 % au gril barbecue. Le chiffre de référence de 69 % est la valeur au four ou rôtie.',
      'Prenez une cuisse de 150 g crue. Braisée dans une sauce, elle retient 150 × 0,73 ≈ 110 g. Grillée près de la résistance, elle tombe à 150 × 0,61 ≈ 92 g — 18 g d’écart avec la version braisée du même morceau. Au four façon friture, elle donne 150 × 0,66 = 99 g.',
      'Chacune de ces portions s’enregistre toujours comme 150 g cru : environ 192 kcal, 30,6 g de protéines et 6,9 g de lipides. Le chiffre de la panée frite (80 %) est l’exception : il paraît élevé uniquement parce que la panure et l’huile absorbée ajoutent un poids qui n’a jamais été du poulet, donc ne l’utilisez pas pour recalculer les macros de la cuisse maigre.',
    ],
    buyingHeading: 'Quelle quantité de cuisse de poulet crue acheter',
    buying: [
      'Les cuisses désossées et sans peau pèsent en moyenne 90–130 g pièce cru. Pour une portion cuite de 120 g, achetez environ 120 ÷ 0,69 ≈ 175 g cru par personne au four ou rôties : à peu près deux petites cuisses ou une et demie grosses.',
      'Un paquet de 1 kg de cuisses désossées rôtit jusqu’à environ 690 g cuits, soit quatre portions de 170 g. Si vous braisez pour un curry ou un ragoût, le rendement monte à 73 % et ce même kilo donne environ 730 g de viande cuite.',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant la cuisse de poulet',
    mistakes: [
      'Réutiliser le rendement du blanc de poulet (72 %) pour les cuisses. La cuisse est plus basse à presque tous les modes de cuisson ; au four c’est 69 %, et au gril c’est plutôt 61 %.',
      'Enregistrer des cuisses avec os et peau au poids cru de la barquette comme s’il s’agissait de viande comestible. Peau et os représentent 25–35 % d’une cuisse avec os, et la peau est presque uniquement du gras.',
      'Traiter la cuisse panée et frite (80 % de « rendement ») comme du poulet maigre. Le poids supplémentaire est de la panure et de l’huile, pas de la protéine — cette portion contient bien plus de lipides et de glucides que ne le laissent penser les macros de la cuisse crue.',
    ],
  },

  'ground-beef-80-20': {
    introHeading: 'Pourquoi le bœuf haché 80/20 perd environ un quart de son poids',
    intro: [
      'Le bœuf haché 80/20 standard contient 20 % de gras en poids cru — environ 20 g de gras et 254 kcal pour 100 g. À la cuisson, deux choses distinctes quittent la poêle. Le muscle maigre se contracte et chasse l’eau, et une grande partie de ces 20 % de gras fond et s’écoule sous forme liquide. Ensemble, elles font descendre le haché émietté à un rendement de 73 % poêlé, une perte de 27 %, visible pour l’essentiel dans le gras que l’on verse ou éponge.',
      'Comme une grande part de la perte est du gras fondu et non de l’eau, le 80/20 cuit est nettement plus maigre par gramme que ne le suggèrent les macros crus : une partie du gras est désormais dans la poêle, pas dans l’assiette. C’est le seul aliment courant pour lequel enregistrer l’équivalent en poids cru surestime légèrement le gras réellement consommé. Cela reste bien plus juste que d’enregistrer le poids cuit égoutté sur une table en cru, qui sous-estime tout.',
      'La finesse du hachage et la teneur en gras pilotent le rendement. Les hachés plus maigres (voir 93/7) perdent moins parce qu’il y a moins de gras à faire fondre. Un hachage grossier cuit doucement perd moins qu’un hachage fin poussé à feu vif, qui éclate plus de cellules et libère plus de liquide.',
      'Pour un chiffre stable, pesez le bœuf cru avant qu’il n’aille dans la poêle. Peser le haché émietté après égouttage introduit une deuxième variable — la quantité de gras égoutté — en plus du rendement lui-même.',
    ],
    methodHeading: 'Poêlé contre grillé, étape par étape',
    method: [
      'L’USDA donne le 80/20 émietté à 73 % poêlé (doré à la poêle) et à 69 % grillé (sous la résistance, où plus de gras s’écoule). Le 93/7 plus maigre donne 77 % et 73 % pour ces deux modes.',
      'Faites dorer un paquet entier de 454 g (1 lb) à la poêle et vous obtenez environ 454 × 0,73 ≈ 331 g de haché cuit et égoutté. Grillez la même livre et elle descend à 454 × 0,69 ≈ 313 g, avec plus de gras perdu sur la lèchefrite.',
      'En base crue, ces 454 g partaient d’environ 1 153 kcal, 78 g de protéines et 91 g de lipides. Le haché conserve toute la protéine mais seulement une partie de ce gras, selon la quantité égouttée — c’est précisément pour cela que le poids cru est la donnée constante à enregistrer.',
    ],
    buyingHeading: 'Quelle quantité de bœuf haché cru acheter',
    buying: [
      'Pour des burgers, un steak haché cru de 150 g (1/3 lb) cuit à environ 110 g ; un de 113 g (1/4 lb) à environ 82 g. Achetez 150–170 g cru par burger si l’on attend une pièce généreuse.',
      'Pour une sauce, un chili ou une garniture de tacos où le bœuf n’est qu’un composant, 100–125 g cru par personne est généreux. Un paquet de 454 g (1 lb) dore jusqu’à environ 330 g cuits et nourrit sans problème quatre personnes en bolognaise ou quatre à cinq en tacos.',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant le bœuf haché',
    mistakes: [
      'Enregistrer le poids cuit égoutté sur une entrée en cru « pour 100 g ». Le haché est bien plus dense en calories par gramme que le bœuf cru, donc cela gonfle fortement le comptage des calories et du gras.',
      'Supposer que tous les hachés se comportent pareil. Le 80/20 rend ~73 % poêlé ; le 93/7 retient ~77 % parce qu’il y a moins de gras à faire fondre.',
      'Oublier que l’égouttage retire du gras que les macros crus comptent encore. Si vous jetez le gras, votre apport réel est un peu en dessous de la conversion depuis le cru — l’écart, c’est le gras resté dans la poêle.',
    ],
  },

  'ground-beef-93-7': {
    introHeading: 'Pourquoi le bœuf haché 93/7 conserve mieux son poids que le 80/20',
    intro: [
      'Le bœuf haché maigre 93/7 ne contient que 7 % de gras en poids cru — environ 7,2 g de gras et 152 kcal pour 100 g, contre 20 g et 254 kcal pour le 80/20. Le muscle maigre se contracte toujours et perd de l’eau à la cuisson, mais il y a bien moins de gras disponible pour fondre et sortir de la poêle. Cette perte de gras qui n’a pas lieu est toute la raison pour laquelle le 93/7 cuit jusqu’à un rendement de 77 % poêlé tandis que le 80/20 descend à 73 %.',
      'Moins de gras fondu signifie aussi que la conversion des macros depuis le poids cru est plus honnête pour le 93/7 que pour les hachés gras. Très peu de gras finit dans la poêle, donc le haché conserve presque toute la valeur de gras du cru — enregistrer l’équivalent en poids cru est ici le choix constant et aussi exact.',
      'Le compromis que ressentent ceux qui cuisinent, c’est la sécheresse. Avec peu de gras pour garder le haché moelleux, le 93/7 passe de juteux à sec rapidement à feu vif, et le rendement glisse vers les 70 bas si vous le poussez. Le faire dorer doucement et le retirer du feu tant qu’il reste un peu de rose vous maintient près de 77 %.',
      'Pour le chili, les tacos, la sauce à la viande et les gamelles où l’on veut la protéine sans le gras, le 93/7 est le choix par défaut — et son rendement plus élevé fait qu’un paquet va plus loin dans l’assiette que le même poids de 80/20.',
    ],
    methodHeading: 'Poêlé contre grillé, étape par étape',
    method: [
      'Chiffres USDA pour le 93/7 émietté : 77 % poêlé, 73 % grillé sous la résistance.',
      'Un paquet de 454 g (1 lb) doré à la poêle donne environ 454 × 0,77 ≈ 350 g cuits et égouttés — nettement plus que les ~331 g obtenus avec le 80/20. Grillé, le même paquet descend à 454 × 0,73 ≈ 331 g.',
      'Ces 454 g crus font environ 690 kcal, 95 g de protéines et 33 g de lipides. Comme presque rien de ce gras ne fond et ne s’échappe, le haché en conserve la quasi-totalité, donc convertir votre portion cuite vers le poids cru donne une lecture de macros exacte.',
    ],
    buyingHeading: 'Quelle quantité de bœuf haché maigre cru acheter',
    buying: [
      'Pour une gamelle axée protéines, 150 g cru par portion cuisent à environ 115 g et apportent autour de 31 g de protéines. Cinq portions demandent environ 750 g cru.',
      'Un paquet de 454 g (1 lb) donne environ 350 g cuits : de quoi faire quatre portions généreuses de tacos ou de chili à environ 115 g cuits chacune, ou trois bols plus grands.',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant le bœuf haché maigre',
    mistakes: [
      'Utiliser le rendement du 80/20 (73 %) pour le 93/7. Le bœuf maigre retient plus de poids — environ 77 % poêlé — donc vous sous-estimeriez le poids cru et vous priveriez de protéines.',
      'Enregistrer le haché sur une table en cru. Même le bœuf maigre se concentre en perdant son eau, donc le cuit est plus dense en calories par gramme que le cru.',
      'Échanger librement les macros du 93/7 et du 80/20. L’écart de gras et de calories est de près du triple par gramme de gras — choisissez l’entrée qui correspond au paquet.',
    ],
  },

  'ribeye-steak': {
    introHeading: 'Pourquoi l’entrecôte conserve 84 % de son poids — le plus élevé de toutes les viandes ici',
    intro: [
      'L’entrecôte (ribeye) est un steak très persillé : environ 23 g de gras pour 100 g cru, réparti dans le muscle sous forme de persillage plutôt que dans une couche à part. À la cuisson, ce persillage fond mais une grande partie reste piégée entre les fibres musculaires au lieu de s’écouler, et le gras qui se liquéfie arrose la surface, si bien que moins d’eau s’évapore. Résultat : un rendement USDA de 84 % — seulement 16 % de perte, la plus douce de toutes les viandes ou poissons de ce site.',
      'Le muscle perd toujours de l’eau en se raffermissant, et le steak rend du jus au repos, mais un morceau gras a simplement moins d’eau par gramme au départ — le gras déplace l’eau — donc il y a moins à perdre. Un morceau maigre comme le rond de gîte, cuit de la même façon, en perdrait nettement plus.',
      'La cuisson est le vrai levier pour un steak. L’USDA note que le rendement de l’entrecôte varie sensiblement du bleu au bien cuit : un steak bleu n’a presque rien cédé d’humidité, tandis qu’un bien cuit est resté assez longtemps en température pour pousser la perte au-delà de 20 %. Le chiffre de 84 % est une moyenne pour une cuisson à point.',
      'Comme le gras reste en grande partie dans la viande, la conversion des macros depuis le poids cru est exacte pour l’entrecôte : ce que vous enregistrez ressemble beaucoup à ce que vous mangez, persillage compris.',
    ],
    methodHeading: 'Un exemple chiffré, du bleu au bien cuit',
    method: [
      'Le site utilise un rendement unique de 84 % pour l’entrecôte (Table des rendements de cuisson de l’USDA), représentant un résultat à point typique. Comptez quelques points de plus pour bleu et plusieurs de moins pour bien cuit.',
      'Une entrecôte de 340 g (12 oz) crue cuite à point ressort à environ 340 × 0,84 ≈ 286 g dans l’assiette. Cuite bleue, elle retiendrait plutôt 300 g ; poussée au bien cuit, comptez environ 265–270 g, la chaleur prolongée chassant plus d’eau et faisant fondre plus de gras.',
      'Toutes venaient de 340 g crus : environ 989 kcal, 66 g de protéines et 79 g de lipides. Pesez le steak cru si possible : le déduire du poids cuit revient à deviner votre propre cuisson, ce qui fait bouger le rendement de dix points.',
    ],
    buyingHeading: 'Quelle quantité d’entrecôte crue acheter',
    buying: [
      'Les portions de steakhouse font 225–450 g (8–16 oz) cru. Un steak cru de 8 oz se mange comme environ 190 g cuits ; un de 12 oz comme environ 286 g cuits. Pour un dîner normal avec accompagnements, 8–10 oz cru par personne suffisent largement ; pour un repas centré sur le steak, 12 oz.',
      'L’entrecôte avec os (côte de bœuf / tomahawk) porte 10–20 % de poids d’os non comestible — achetez proportionnellement plus, ou pesez la viande détachée de l’os après cuisson et convertissez cela.',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant l’entrecôte',
    mistakes: [
      'Parer le gras visible après cuisson mais enregistrer le poids cru entier. Si vous coupez et laissez la couche de gras, enregistrez un équivalent cru plus faible que le steak entier.',
      'Utiliser le rendement d’un steak maigre. Le rumsteck ou le rond de gîte perdent plus que l’entrecôte ; à 84 %, l’entrecôte est proche du haut de la fourchette.',
      'Ignorer la cuisson. Une entrecôte bien cuite peut peser 15–20 g de moins par 340 g qu’une bleue cuite à partir du même steak cru.',
    ],
  },

  'pork-chop': {
    introHeading: 'Pourquoi une côte de porc perd environ 22 % — et l’épaule de porc bien plus',
    intro: [
      'Une côte de porc désossée est un morceau maigre à cuisson rapide : environ 21,5 g de protéines et 5,6 g de lipides pour 100 g cru, prélevé dans la longe. Elle se comporte beaucoup comme le blanc de poulet — les fibres musculaires se contractent, l’eau est chassée, et une côte à cuisson rapide se stabilise à un rendement de 78 % à la poêle, une perte de 22 %.',
      'Ce qui rend la côte de porc délicate, c’est l’étroitesse de sa fenêtre de sécurité. Les recommandations modernes cuisent le porc à 63 °C plus un repos, où il est encore légèrement rosé et juteux. Poussez-le à l’ancien standard « sans rose » de 71 °C et vous évaporez beaucoup plus d’eau — le rendement peut tomber dans les 70 bas et la côte devient sèche et pâle.',
      'Le mode de cuisson compte plus pour la côte de porc que pour la plupart des morceaux car les options diffèrent vraiment : braiser l’entoure de liquide et elle retient 76 %, tandis que griller au four ou au barbecue sur chaleur directe avec une surface qui saisit fort peut finir plus haut, à 83 %, l’extérieur se fixant vite et scellant l’humidité avant que l’intérieur ne surcuise.',
      'L’épaule de porc est une tout autre bête — un morceau gras et riche en collagène cuit à basse température pendant des heures, d’où sa perte d’environ 35 % (un rendement de 65 %). Un long séjour en température fait fondre l’essentiel du gras et chasse bien plus d’eau qu’une côte de cinq minutes ne pourra jamais le faire.',
    ],
    methodHeading: 'À la poêle, braisée ou au gril',
    method: [
      'Chiffres USDA par mode de cuisson pour une côte désossée générique (moyenne échine, longe et côte) : à la poêle 78 %, braisée 76 %, grillée au four ou au barbecue 83 %.',
      'Une côte de 170 g (6 oz) crue à la poêle ressort à environ 170 × 0,78 ≈ 133 g. Braisée dans une sauce, elle retient 170 × 0,76 ≈ 129 g. Grillée fort sur chaleur directe, elle peut finir à 170 × 0,83 ≈ 141 g, la croûte saisie retenant l’humidité.',
      'Chaque portion s’enregistre comme 170 g cru : environ 243 kcal, 37 g de protéines et 9,5 g de lipides. Si vous ne l’avez pesée que cuite, une côte de 130 g à la poêle fait 130 ÷ 0,78 ≈ 167 g cru.',
    ],
    buyingHeading: 'Quelle quantité de côte de porc crue acheter',
    buying: [
      'Les côtes désossées font 140–225 g pièce cru. Pour une portion cuite de 150 g, achetez environ 150 ÷ 0,78 ≈ 192 g cru par personne : une côte moyenne.',
      'Les côtes avec os portent 15–25 % d’os. Une côte avec os de 250 g contient environ 190–210 g de viande, qui cuit à environ 150–165 g. Achetez les côtes avec os à la pièce (une par personne) plutôt qu’au poids.',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant la côte de porc',
    mistakes: [
      'Appliquer le rendement de la côte (78 %) au pulled pork ou aux carnitas. L’épaule de porc cuite des heures rend environ 65 % — une pièce de 500 g crue devient environ 325 g cuits, pas 390 g.',
      'Enregistrer le poids de la côte avec os comme viande comestible. Retirez 15–25 % pour l’os avant de convertir.',
      'Surcuire jusqu’à « sans rose », puis se demander pourquoi le poids cuit est bas. Une côte poussée à 71 °C ou plus peut rendre plus près de 72 % que de 78 %.',
    ],
  },

  'pork-shoulder': {
    introHeading: 'Pourquoi l’épaule de porc perd environ 35 % — la plus forte baisse de toutes les viandes ici',
    intro: [
      'L’épaule de porc (Boston butt / palette) est l’inverse d’une côte maigre : environ 14 g de gras pour 100 g cru, plus d’épaisses veines de tissu conjonctif riche en collagène et une couche de gras. On la cuit délibérément lentement — des heures à 90–120 °C, ou un long braisage — pour laisser ce collagène fondre en gélatine. Le prix de cette transformation à basse température est un rendement USDA de 65 %, une perte de poids de 35 %.',
      'Presque tout s’en va au fil de ces heures. Le gras intramusculaire et celui de la couche s’écoulent en grande partie dans le plat ou le bac de récupération du fumoir. L’eau, qu’un morceau à cuisson rapide n’a jamais le temps de perdre, continue de s’évaporer pendant toute la cuisson. Même le collagène, une fois gélatinisé, libère une partie de l’eau qu’il retenait. Ce qui reste, c’est une viande concentrée qui s’effiloche.',
      'Le rendement est remarquablement constant pour le pulled pork précisément parce que le point d’arrivée l’est — on cuit jusqu’à ce que ça s’effiloche, autour de 90–96 °C à cœur, pas jusqu’à un temps fixe. Que vous le fumiez, le rôtissiez au four ou le fassiez à la mijoteuse, vous atterrissez près de 65 %.',
      'Pour le suivi, c’est le morceau où utiliser un rendement « porc » générique fait le plus de dégâts : celui d’une côte surestimerait d’un tiers votre pulled pork cuit.',
    ],
    methodHeading: 'Un exemple chiffré : de la pièce crue au pulled pork',
    method: [
      'Le site utilise un rendement unique de 65 % pour l’épaule de porc (Table des rendements de cuisson de l’USDA), couvrant braisage, rôtissage et fumage à basse température, qui atterrissent tous très proches.',
      'Une épaule désossée de 2 kg (4,4 lb) crue se réduit à environ 2000 × 0,65 = 1 300 g de viande cuite. Une pièce de 1 kg donne environ 650 g. L’épaule avec os perd le poids de l’os en plus — comptez encore 8–12 %.',
      'Ces 2 kg crus font environ 4 020 kcal, 348 g de protéines et 284 g de lipides avant cuisson. Une bonne partie du gras s’écoule dans le plat, donc les 1 300 g de viande effilochée sont plus maigres par gramme que ne le suggèrent les macros crus — mais la conversion depuis le poids cru reste la façon constante de l’enregistrer, et vous pouvez baisser un peu le gras si vous avez dégraissé les jus.',
    ],
    buyingHeading: 'Quelle quantité d’épaule de porc crue acheter',
    buying: [
      'Comptez environ 150 g de pulled pork cuit par personne en sandwich, soit environ 150 ÷ 0,65 ≈ 230 g cru d’épaule désossée par tête. Pour une foule, la règle du traiteur « 1/3 lb cuit par personne, donc 1/2 lb cru » tombe au même endroit.',
      'Une épaule désossée entière fait généralement 2–3,5 kg. Un rôti de 3 kg donne environ 1,95 kg cuits — de quoi faire une douzaine de sandwichs généreux. Avec os, achetez environ 15 % de plus pour couvrir l’os.',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant l’épaule de porc',
    mistakes: [
      'Utiliser un rendement de côte ou de « porc moyen ». À 65 %, l’épaule perd bien plus que les 78 % d’une côte ; un rendement de côte surestime votre pulled pork cuit d’environ un tiers.',
      'Enregistrer le poids cuit et sauce comprise. La sauce barbecue ajoute du sucre et des calories qui ne sont pas dans le porc — pesez la viande avant de la sauce, ou enregistrez la sauce à part.',
      'Ignorer le gras fondu. Si vous dégraissez ou jetez les jus, votre apport réel en gras est en dessous de la conversion depuis le poids cru ; la différence, c’est le gras laissé dans le plat.',
    ],
  },

  'turkey-breast': {
    introHeading: 'Pourquoi le blanc de dinde perd environ 21 % au rôtissage',
    intro: [
      'Le blanc de dinde sans peau est le morceau de volaille le plus maigre de ce site — environ 24,6 g de protéines et à peine 1 g de lipides pour 100 g cru, encore plus maigre que le blanc de poulet. C’est du muscle et de l’eau presque purs, donc au rôtissage l’histoire est presque uniquement une perte d’eau : les protéines se dénaturent, les fibres se contractent, l’humidité est chassée, et le blanc se stabilise à un rendement USDA de 79 %, une perte de 21 %.',
      'Il perd un peu moins que le blanc de poulet (72 %) surtout parce qu’un blanc de dinde est une pièce de viande bien plus grosse. Un blanc entier de 2–3 kg a un faible rapport surface/masse, donc proportionnellement moins de sa masse est exposée à la chaleur desséchante, et l’intérieur est protégé par la masse qui l’entoure. Coupez-le en escalopes et le rendement descend vers le territoire du blanc de poulet.',
      'L’erreur classique avec la dinde est de la cuire à l’ancien standard « bien cuit » de la volaille, 74 °C ou plus, par prudence. Retiré à 71 °C et reposé, le blanc retient près de 79 % ; poussé à 80 °C, il devient sec comme de la sciure et le rendement chute de plusieurs points.',
      'Le chiffre de 79 % concerne spécifiquement le blanc. Les rendements de la dinde entière et de la dinde farcie sont plus bas et non comparables — ils moyennent la viande brune, la peau et les pertes de la cavité.',
    ],
    methodHeading: 'Un exemple chiffré : blanc de dinde rôti',
    method: [
      'Le site utilise un rendement unique de 79 % pour le blanc de dinde (Manuel d’agriculture n° 102 de l’USDA), pour le rôtissage. Pocher ou cuire à la vapeur retiendrait un peu plus ; le trancher en fines escalopes et le saisir à la poêle retiendrait un peu moins.',
      'Une portion de 250 g de blanc cru rôtit jusqu’à environ 250 × 0,79 ≈ 198 g cuits. Un rôti entier de blanc désossé de 2,5 kg donne environ 1,98 kg de viande cuite tranchée.',
      'Ces 250 g crus font environ 285 kcal, 61,5 g de protéines et 2,5 g de lipides. Si vous avez tranché d’abord et pesé ensuite, une portion cuite de 150 g fait 150 ÷ 0,79 ≈ 190 g cru. Le « blanc de dinde rôti » de charcuterie n’est pas comparable — il est saumuré et souvent additionné d’eau, donc enregistrez-le depuis sa propre étiquette en poids cuit.',
    ],
    buyingHeading: 'Quelle quantité de blanc de dinde cru acheter',
    buying: [
      'Pour une portion cuite de 150 g, achetez environ 150 ÷ 0,79 ≈ 190 g cru de blanc désossé par personne. Pour des restes façon Thanksgiving, doublez.',
      'Un blanc de dinde avec os est à 30–40 % os et peau. Pour 6 personnes voulant 150 g cuits chacune (900 g cuits, ~1,14 kg d’équivalent en blanc désossé cru), achetez un blanc avec os d’environ 2,7–3 kg, ou un rôti désossé de 1,2 kg.',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant le blanc de dinde',
    mistakes: [
      'Utiliser les données de rendement de la dinde entière rôtie (souvent citées autour de 70–74 %) pour un blanc nature. Le blanc seul retient environ 79 %.',
      'Enregistrer comme dinde nature un blanc de supermarché saumuré, pré-badigeonné ou « auto-arrosant ». La solution injectée représente 8–15 % du poids et est de l’eau, du sel et parfois du gras.',
      'Traiter les tranches de dinde de charcuterie comme du blanc rôti maison. La charcuterie porte de l’eau et du sodium ajoutés et a sa propre étiquette nutritionnelle (en poids cuit) — utilisez-la.',
    ],
  },

  'salmon': {
    introHeading: 'Pourquoi le saumon ne perd qu’environ 15 % à la cuisson',
    intro: [
      'Le filet de saumon est un poisson gras — environ 13,4 g de lipides pour 100 g cru, surtout de l’huile insaturée répartie dans la chair et concentrée dans les lignes de gras entre les feuillets de muscle. Cette huile explique le rendement USDA de 85 % du saumon, le plus élevé de toutes les protéines de ce site : le muscle du poisson est bâti en feuillets courts et délicats avec très peu de tissu conjonctif, donc il se raffermit doucement et le gras le garde moelleux au lieu de s’écouler.',
      'Quand le saumon cuit, les protéines du muscle coagulent et chassent un peu d’eau et cette substance blanche que l’on voit en surface — c’est de l’albumine, une protéine hydrosoluble. Mais les faisceaux de fibres sont courts et le gras est partout, donc la chair ne se contracte jamais et ne s’essore pas comme un blanc de poulet. L’essentiel du poids reste en place.',
      'La surcuisson coûte quand même. Au-delà de 55–60 °C à cœur, les feuillets se resserrent, plus d’albumine et d’huile sont chassées, et un filet bien cuit peut descendre vers 78–80 %. Le saumon d’élevage, plus gras que le sauvage, tend à retenir un peu plus de poids que le saumon rouge sauvage.',
      'Comme si peu quitte le filet et que le gras y reste, convertir votre portion cuite vers le poids cru donne une lecture de macros exacte — y compris le gras oméga-3, principale raison pour laquelle on suit le saumon.',
    ],
    methodHeading: 'Un exemple chiffré : saumon au four, au gril ou poché',
    method: [
      'Le site utilise un rendement unique de 85 % pour le saumon (Manuel d’agriculture n° 102 de l’USDA). Pocher retient un point ou deux de plus ; griller fort ou cuire au four bien cuit, quelques points de moins.',
      'Un filet de 170 g (6 oz) cru au four à 190 °C ressort à environ 170 × 0,85 ≈ 144 g. Poché doucement, il retiendrait ~148 g ; grillé jusqu’à ferme et feuilleté, ~138 g.',
      'Ce filet de 170 g cru fait environ 354 kcal, 34 g de protéines et 22,8 g de lipides. Si vous n’avez pesé que la portion cuite, un morceau de 130 g fait 130 ÷ 0,85 ≈ 153 g cru. Filets avec peau : la peau représente 5–8 % du poids et fond son gras mais reste sur la balance, donc pesez sans peau si possible, ou soustrayez-la.',
    ],
    buyingHeading: 'Quelle quantité de saumon cru acheter',
    buying: [
      'Pour une portion cuite de 150 g, achetez environ 150 ÷ 0,85 ≈ 175 g cru par personne. Les portions de filet standard font 140–200 g cru, donc une par personne suffit.',
      'Un côté de saumon entier fait 900 g–1,4 kg et donne environ 85 % de cela cuit — un côté de 1,2 kg donne environ 1 kg cuit, soit six à sept portions de 150 g. Prévoyez plus si le côté est avec peau et que vous la jetez.',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant le saumon',
    mistakes: [
      'Appliquer un rendement de viande comme 72 % au saumon. Le poisson retient bien plus de poids — le saumon environ 85 % — donc un rendement de viande gonfle le poids cru recalculé et surestime calories et gras.',
      'Enregistrer du saumon en conserve ou fumé comme du filet cru frais. Le saumon en conserve est cuit et emballé (souvent avec sel ou huile ajoutés) ; le saumon fumé est salé/mariné. Les deux ont leur propre étiquette.',
      'Peser un filet avec peau et l’enregistrer comme sans peau. La peau ajoute du poids mais n’est pas comptée dans une entrée sans peau.',
    ],
  },

  'shrimp': {
    introHeading: 'Pourquoi les crevettes perdent environ 25 % — et pourquoi ça paraît plus',
    intro: [
      'La crevette est de la protéine maigre quasi pure : environ 24 g pour 100 g cru avec seulement 0,3 g de lipides, et un muscle dense et très serré dans un petit corps. À la cuisson, les protéines du muscle se contractent vite et fort — c’est l’enroulement soudain d’une crevette droite crue en « C » serré — et chassent l’eau. Le rendement USDA est de 75 %, une perte de 25 %, presque uniquement de l’humidité de surface et interne.',
      'Le rétrécissement visuel paraît plus important que la perte de poids parce que l’enroulement et le resserrement concentrent la même masse dans une forme plus petite et plus dense. Une crevette ne perd pas vraiment un quart de son volume ; elle se crispe. La balance dit la vérité mieux que vos yeux ici.',
      'La surcuisson est brutale avec la crevette car il n’y a pas de gras et les pièces sont petites — quelques secondes de trop et elles passent de « C » à un « O » serré, caoutchouteuses, le rendement chutant encore à mesure que plus d’eau est chassée. Les grosses crevettes et les crevettes jumbo retiennent proportionnellement plus de poids que les petites crevettes à salade, qui ont plus de surface par gramme.',
      'Une nuance : beaucoup de crevettes sont vendues traitées au tripolyphosphate de sodium ou à une saumure pour retenir l’eau. Cette crevette pèse plus cru que la crevette « sèche » et peut perdre plus de 25 % à la cuisson, car elle rejette de l’eau ajoutée en plus de la sienne.',
    ],
    methodHeading: 'Un exemple chiffré : crevettes bouillies, sautées ou grillées',
    method: [
      'Le site utilise un rendement unique de 75 % pour la crevette (Manuel d’agriculture n° 102 de l’USDA), couvrant l’ébullition, la vapeur, le sauté et le gril, qui atterrissent proches pour un aliment à cuisson si rapide.',
      'Partez de 200 g de crevettes décortiquées crues. Bouillies ou sautées, elles ressortent à environ 200 × 0,75 = 150 g cuites. Grillées à feu vif, comptez un gramme ou deux de moins à mesure que la surface sèche.',
      'Ces 200 g crus font environ 198 kcal et 48 g de protéines — la crevette est l’aliment riche en protéines le plus maigre de ce site. Si vous avez pesé cuit, une portion de 120 g fait 120 ÷ 0,75 = 160 g cru. Crevettes non décortiquées : la carapace et la tête représentent 30–45 % du poids, donc pesez décortiqué, ou convertissez seulement le poids cuit décortiqué.',
    ],
    buyingHeading: 'Quelle quantité de crevettes crues acheter',
    buying: [
      'La crevette se vend au calibre (nombre de pièces par livre — par ex. « 16/20 » = 16–20 crevettes par livre, environ 23–28 g pièce cru). Pour une portion principale cuite de 120 g, achetez environ 160 g cru décortiqué par personne ; pour la crevette en composant d’une pâte ou d’un sauté, 100–120 g cru chacun.',
      'Un sachet de 454 g (1 lb) de crevettes décortiquées crues cuit à environ 340 g — deux à trois portions principales, ou quatre à cinq en composant. Si le sachet est non décortiqué, comptez seulement 55–70 % du poids du sachet en comestible avant cuisson.',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant les crevettes',
    mistakes: [
      'Peser des crevettes non décortiquées et les enregistrer comme décortiquées. La carapace et la tête représentent d’un tiers à près de la moitié du poids cru.',
      'Ignorer l’eau ajoutée par phosphate ou saumure. La crevette traitée peut perdre plus des 25 % standard car elle rejette de l’eau retenue — son poids cuit est faible par rapport à un sachet « sec ».',
      'Enregistrer des crevettes surgelées précuites sur une entrée en cru. La crevette précuite a déjà perdu son eau ; enregistrez-la depuis une entrée de crevette cuite, à peu près au poids du sachet.',
    ],
  },

  // ── Céréales, pâtes et légumineuses ──────────────────────────────────────

  'white-rice': {
    introHeading: 'Pourquoi le riz blanc sec triple presque de poids à la cuisson',
    intro: [
      'Le riz blanc sec est composé d’environ 80 % d’amidon et de seulement 10–12 % d’eau — il a été poli et séché précisément pour se conserver au placard. Le cuire, c’est le réhydrater : les granules d’amidon à l’intérieur de chaque grain absorbent l’eau, gonflent et gélatinisent, et le grain triple à peu près de poids. Le rendement USDA du riz blanc bouilli est de 308 %, donc 100 g sec deviennent environ 308 g cuits.',
      'Rien n’est perdu — c’est l’inverse de la viande. Le grain sec gagne toute la différence de poids grâce à l’eau de cuisson qu’il absorbe. Cela signifie que les calories et les macros de votre bol de riz cuit viennent toutes du poids sec : environ 365 kcal, 7,1 g de protéines et 80 g de glucides pour 100 g sec, désormais répartis sur trois fois plus de grammes.',
      'La quantité d’eau absorbée dépend du riz et de la méthode. Un pilaf ferme aux grains détachés se situe plus bas ; un riz cuit avec plus d’eau jusqu’à tendre, ou rincé et bouilli dans beaucoup d’eau, se situe plus haut. Le riz étuvé (« converted ») et le riz instantané absorbent encore plus — autour de 350–358 % — car leur amidon est pré-gélatinisé.',
      'C’est l’aliment pour lequel on pèse le plus souvent cuit et où l’on enregistre correctement par accident, parce que beaucoup d’entrées de bases de données de riz sont en poids cuit. Le danger est de les mélanger : enregistrer 200 g de riz cuit sur une entrée en sec « pour 100 g » triple à peu près votre comptage de calories.',
    ],
    methodHeading: 'Bouilli contre étuvé contre instantané',
    method: [
      'Chiffres USDA pour le riz blanc : bouilli 308 %, étuvé/converted 358 %, instantané ou précuit 350 %.',
      'Cuisez 75 g de riz sec — une portion individuelle très courante — par la méthode d’absorption et vous obtenez environ 75 × 3,08 ≈ 231 g cuits. Les mêmes 75 g de riz étuvé donnent environ 75 × 3,58 ≈ 269 g, et le riz instantané environ 263 g, leur amidon précuit retenant plus d’eau.',
      'Chacun de ces bols porte les macros de 75 g sec : environ 274 kcal, 5,3 g de protéines et 60 g de glucides. Dans l’autre sens, 250 g de riz blanc bouilli font 250 ÷ 3,08 ≈ 81 g sec. Utilisez le sélecteur de méthode du calculateur si vous cuisez du riz étuvé ou instantané.',
    ],
    buyingHeading: 'Quelle quantité de riz sec cuire',
    buying: [
      'Une portion d’accompagnement cuite standard fait 150–200 g. À un rendement de 308 %, cela fait environ 50–65 g sec par personne. Une « tasse » de riz sec (environ 185 g) cuit à environ 570 g — trois à quatre portions d’accompagnement.',
      'Pour le batch cooking : cinq portions de 180 g cuits demandent environ 900 g cuits, soit environ 290 g sec. Le riz se garde 4–5 jours cuit et réfrigéré, et le réchauffer depuis froid ne change pas le poids que vous avez enregistré.',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant le riz',
    mistakes: [
      'Enregistrer le poids du riz cuit sur une entrée en sec « pour 100 g ». 200 g cuits ne font qu’environ 65 g sec — l’entrée en sec triplerait vos calories.',
      'Utiliser le rendement du bouilli ordinaire pour le riz étuvé ou instantané. Ceux-ci absorbent plus d’eau (350–358 %), donc le même poids sec fait plus de grammes cuits.',
      'Supposer que le riz complet se comporte à l’identique. Le riz complet rend environ 335 % et a ses propres macros — le son change les deux.',
    ],
  },

  'brown-rice': {
    introHeading: 'Pourquoi le riz complet gonfle encore plus que le blanc',
    intro: [
      'Le riz complet est le grain entier avec le son et le germe encore en place. Ces couches externes sont fibreuses et résistantes à l’eau, donc le riz complet cuit plus longtemps et demande plus d’eau — et finit par en absorber davantage. Le rendement USDA est de 335 %, plus élevé que les 308 % du riz blanc : 100 g sec deviennent environ 335 g cuits.',
      'Comme pour le riz blanc, le gain de poids est purement de l’eau absorbée et rien n’est perdu. Le grain sec porte environ 370 kcal, 7,9 g de protéines, 77 g de glucides et 2,9 g de lipides pour 100 g — le germe apporte le gras et une partie de la protéine — et tout cela se retrouve dans le bol cuit, simplement dilué sur plus de grammes.',
      'La couche de son explique aussi pourquoi le riz complet reste plus ferme et les grains plus détachés : elle limite physiquement le gonflement et la gélatinisation de l’amidon, si bien qu’on obtient rarement la texture collante de sur-absorption qui pousse les rendements du riz blanc vers le haut. Le compromis, c’est une cuisson de 40–50 minutes au lieu de 15.',
      'Pour le suivi, le point clé est que le riz complet et le riz blanc ne sont pas des entrées interchangeables — rendement différent, macros différents. Enregistrer un bol de riz complet comme du blanc sous-estime les fibres et le gras et se trompe sur la portion.',
    ],
    methodHeading: 'Un exemple chiffré : riz complet, du sec au cuit',
    method: [
      'Le site utilise un rendement unique de 335 % pour le riz complet (Manuel d’agriculture n° 102 de l’USDA), pour l’ébullition ou la méthode d’absorption.',
      'Cuisez 75 g de riz complet sec et vous obtenez environ 75 × 3,35 ≈ 251 g cuits. Cuisez une « tasse » (environ 190 g sec) et vous obtenez environ 637 g cuits — autour de quatre portions de 160 g.',
      'Ces 75 g sec font environ 278 kcal, 5,9 g de protéines, 58 g de glucides et 2,2 g de lipides, et ces chiffres ne changent pas quand ils deviennent 251 g cuits. À rebours, 250 g de riz complet cuit font 250 ÷ 3,35 ≈ 75 g sec.',
    ],
    buyingHeading: 'Quelle quantité de riz complet sec cuire',
    buying: [
      'Une portion d’accompagnement cuite de 160–200 g équivaut à environ 48–60 g sec par personne à un rendement de 335 % — un peu moins de riz sec que le blanc pour la même portion cuite, car le complet gonfle plus.',
      'Pour cinq portions de batch cooking de 180 g cuits (900 g au total), cuisez environ 270 g sec. Le riz complet se réchauffe et se congèle bien, et le poids cuit enregistré tient au stockage.',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant le riz complet',
    mistakes: [
      'L’enregistrer comme du riz blanc. Rendement différent (335 % contre 308 %) et macros différents — vous rateriez le gras et sous-estimeriez les fibres.',
      'Enregistrer le poids cuit sur une entrée en sec. 200 g de riz complet cuit ne font qu’environ 60 g sec.',
      'Supposer que le « riz sauvage » ou le « basmati complet » correspondent exactement à cette entrée. Ils cuisent et absorbent différemment — utilisez l’entrée spécifique la plus proche possible.',
    ],
  },

  'pasta': {
    introHeading: 'Pourquoi les pâtes sèches font un peu plus que doubler à la cuisson',
    intro: [
      'Les pâtes sèches sont de la semoule de blé dur et de l’eau, extrudées et séchées dur. Elles sont plus denses et plus pauvres en amidon de surface que le riz, et on les cuit dans beaucoup d’eau au lieu d’en absorber une quantité mesurée, si bien qu’elles en captent proportionnellement moins : le rendement ici est de 225 %, soit 100 g sec qui deviennent environ 225 g cuits à une cuisson normale, un peu au-delà de l’al dente.',
      'Le gain de poids est de l’eau de cuisson absorbée et — comme pour toutes les céréales — rien n’est perdu, donc les macros restent liés au poids sec : environ 371 kcal, 13 g de protéines et 75 g de glucides pour 100 g sec, désormais portés par 225 g de pâtes cuites. Les pâtes cuites font donc environ 160 kcal pour 100 g contre 371 sec.',
      'La cuisson est toute la partie pour le rendement des pâtes. Égouttées al dente ferme, les pâtes se situent plutôt à 200 % ; cuites molles, ou tenues en sauce et laissées reposer, elles continuent d’absorber et dépassent 240 %. Les pâtes fraîches aux œufs sont encore différentes — elles partent avec plus d’humidité et gagnent moins.',
      'La forme compte aussi. Les pâtes longues et fines et les petites formes absorbent plus vite et plus uniformément ; les gros rigatoni ou les grandes conchiglie se situent plus bas. Cette entrée est une moyenne générique de pâtes sèches ; les pâtes longues comme les spaghettis sont plus hautes.',
    ],
    methodHeading: 'Un exemple chiffré : al dente contre bien cuit',
    method: [
      'Le site utilise un rendement unique de 225 % pour les pâtes sèches génériques (USDA FoodData Central, cru contre cuit). Comptez l’al dente ferme à environ 200 % et les pâtes molles ou tenues en sauce à 240 % ou plus.',
      'Une portion sèche de 57 g (2 oz) — la portion standard de la boîte — cuit à environ 57 × 2,25 ≈ 128 g. Une portion sèche de 85 g (un plat principal plus réaliste) donne environ 191 g cuits. Cuisez ces mêmes 85 g mous et ils peuvent atteindre 205–215 g.',
      'Les macros suivent le poids sec quoi qu’il arrive : 85 g sec font environ 315 kcal, 11 g de protéines et 64 g de glucides. À rebours, 250 g de pâtes cuites font 250 ÷ 2,25 ≈ 111 g sec — à vérifier, car une « portion » de restaurant de pâtes cuites fait souvent 300–400 g, soit 130–180 g sec.',
    ],
    buyingHeading: 'Quelle quantité de pâtes sèches cuire',
    buying: [
      'La boîte indique 57 g (2 oz) sec par personne ; c’est un accompagnement léger. Un plat principal satisfaisant fait 85–100 g sec, cuisant à environ 190–225 g. Une boîte de 500 g nourrit environ cinq personnes en plat principal ou huit en accompagnement.',
      'Pour le batch cooking, cuisez les pâtes un cran ferme — elles continuent d’absorber sauce et humidité au frigo, et partir de l’al dente garde la portion réchauffée plus proche du poids enregistré.',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant les pâtes',
    mistakes: [
      'Enregistrer les pâtes cuites sur une entrée en sec « pour 100 g ». 250 g cuits ne font qu’environ 110 g sec — l’entrée en sec plus que doublerait vos calories.',
      'Utiliser un seul rendement pour toutes les cuissons. L’al dente (~200 %) et le mou (~240 %) diffèrent assez pour compter sur une grosse portion.',
      'Peser les pâtes après qu’elles ont reposé en sauce. Elles ont absorbé du poids de sauce et plus d’eau ; pesez les pâtes égouttées et enregistrez la sauce à part.',
    ],
  },

  'quinoa': {
    introHeading: 'Pourquoi le quinoa gonfle à environ 3× son poids sec',
    intro: [
      'Le quinoa est une petite graine de pseudo-céréale — botaniquement ce n’est pas un grain de graminée, même s’il se cuit comme tel. Chaque graine est dense en amidon mais porte aussi plus de protéines (14,1 g pour 100 g sec) et de lipides (6,1 g) que le riz, avec un anneau externe de germe qui se déroule en cette petite « queue » blanche visible dans le quinoa cuit. Il absorbe l’eau facilement et affiche un rendement de 314 % : 100 g sec deviennent environ 314 g cuits.',
      'Comme toutes les céréales et légumineuses ici, le quinoa gagne du poids au lieu d’en perdre, et le gain est entièrement de l’eau de cuisson absorbée. Les macros appartiennent à la graine sèche et sont simplement répartis plus finement une fois cuits — le quinoa cuit tourne autour de 117 kcal pour 100 g contre 368 sec.',
      'Le quinoa se cuit généralement par absorption dans un ratio fixe (environ 1 part de graine pour 1,75–2 d’eau), donc son rendement est assez stable comparé aux céréales qu’on bout et égoutte. Torréfier la graine sèche d’abord ou rincer sa couche amère de saponine change plus la saveur que le rendement.',
      'Pour ceux qui suivent leurs macros, l’intérêt du quinoa est le profil protéines + fibres, donc bien viser la portion compte. Ses macros secs sont proches de ceux du riz en calories mais très différents en protéines et lipides — n’échangez pas les entrées.',
    ],
    methodHeading: 'Un exemple chiffré : quinoa, du sec au cuit',
    method: [
      'Le site utilise un rendement unique de 314 % pour le quinoa (USDA FoodData Central, calculé à partir des ratios de nutriments cru contre cuit), pour la méthode d’absorption standard.',
      'Cuisez 90 g de quinoa sec — une portion individuelle généreuse — et vous obtenez environ 90 × 3,14 ≈ 283 g cuits. Une « tasse » de quinoa sec (environ 170 g) donne environ 534 g cuits, soit trois à quatre portions.',
      'Ces 90 g sec font environ 331 kcal, 12,7 g de protéines, 58 g de glucides et 5,5 g de lipides, et rien de cela ne change quand ils deviennent 283 g cuits. À rebours, 250 g de quinoa cuit font 250 ÷ 3,14 ≈ 80 g sec.',
    ],
    buyingHeading: 'Quelle quantité de quinoa sec cuire',
    buying: [
      'Une portion cuite de 180–220 g équivaut à environ 57–70 g sec par personne. Pour une salade où le quinoa est la base, visez le haut de la fourchette ; en accompagnement d’une protéine, 50–60 g sec suffisent.',
      'Pour cinq bols de batch cooking de 200 g cuits (1 kg au total), cuisez environ 320 g de quinoa sec. Il tient mieux sa texture au frigo que le riz et n’a pas besoin d’être réchauffé pour des bols de céréales froids.',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant le quinoa',
    mistakes: [
      'Enregistrer le quinoa cuit sur une entrée en sec. 250 g cuits ne font qu’environ 80 g sec — une erreur de calories d’environ le triple.',
      'Échanger les entrées quinoa et riz parce que « ce sont deux céréales ». Le quinoa a près du double de protéines et bien plus de lipides par gramme sec.',
      'Peser le quinoa dans une salade assaisonnée et l’enregistrer comme nature. L’assaisonnement et toute huile ajoutée sont à part — pesez le quinoa cuit nature avant de l’incorporer.',
    ],
  },

  'lentils': {
    introHeading: 'Pourquoi les lentilles sèches triplent presque de poids à la cuisson',
    intro: [
      'Les lentilles sèches sont composées d’environ 11–12 % d’eau, 60 g de glucides et de remarquables 25,8 g de protéines pour 100 g — l’aliment entier le plus riche en protéines de cette liste après le soja. Elles cuisent en absorbant l’eau dans leur matrice d’amidon et de protéine et en gonflant, sans trempage strictement nécessaire car elles sont petites et à peau fine. Le rendement USDA des lentilles bouillies ou cuites au four jusqu’à tendres est de 289 % : 100 g sec deviennent environ 289 g cuits.',
      'Rien n’est perdu ; la différence de poids est entièrement du liquide de cuisson absorbé. Donc la protéine et les glucides de votre bol de dal ou de soupe de lentilles viennent entièrement du poids sec — environ 353 kcal, 25,8 g de protéines et 60 g de glucides pour 100 g sec, dilués sur près de trois fois les grammes cuits.',
      'Le type de lentille et la cuisson font varier le résultat. Les lentilles corail et jaunes cassées s’effondrent en purée et absorbent beaucoup ; les lentilles vertes fermes ou du Puy cuites brièvement restent entières et absorbent moins. L’USDA note que les lentilles mijotées seulement 20 minutes atterrissent à 261 %, contre 289 % bouillies ou cuites au four jusqu’à bien tendres — un vrai écart si vous les aimez avec du mordant.',
      'Les lentilles en conserve sont déjà cuites et proches de ce poids pleinement hydraté ; égouttée, une boîte de 400 g fait environ 240 g, équivalent à environ 85 g sec.',
    ],
    methodHeading: 'Bien cuites contre 20 minutes de mijotage',
    method: [
      'Chiffres USDA pour les lentilles : bouillies ou cuites au four jusqu’à bien tendres 289 %, mijotées 20 minutes 261 %.',
      'Cuisez 100 g de lentilles sèches jusqu’à bien tendres pour un dal et vous obtenez environ 289 g. Mijotez les mêmes 100 g seulement 20 minutes pour une lentille ferme de salade et vous obtenez environ 261 g — 28 g de moins depuis le même point de départ, parce qu’elles sont moins hydratées.',
      'Les deux portent les macros de 100 g sec : environ 353 kcal, 25,8 g de protéines et 60 g de glucides. À rebours, 200 g de lentilles bien cuites font 200 ÷ 2,89 ≈ 69 g sec. Pour une boîte égouttée, divisez le poids égoutté par environ 2,85.',
    ],
    buyingHeading: 'Quelle quantité de lentilles sèches cuire',
    buying: [
      'Une portion cuite copieuse dans un ragoût ou un dal fait 200–250 g, soit environ 70–85 g sec par personne. En accompagnement, 50 g sec suffisent.',
      'Une « tasse » de lentilles sèches (environ 190 g) cuit à environ 550 g — trois à quatre portions. Pour cinq portions de batch cooking de 220 g cuits (1,1 kg), cuisez environ 380 g sec.',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant les lentilles',
    mistakes: [
      'Enregistrer des lentilles cuites ou en conserve sur une entrée en sec « pour 100 g ». 200 g cuits ne font qu’environ 70 g sec.',
      'Utiliser le rendement des bien tendres (289 %) pour des lentilles fermes brièvement mijotées (261 %) ou l’inverse. Ajustez à la cuisson que vous avez réellement faite.',
      'Traiter une boîte égouttée comme son poids d’étiquette complet en équivalent sec. Une boîte de 400 g s’égoutte à ~240 g, environ 85 g sec.',
    ],
  },

  'black-beans': {
    introHeading: 'Pourquoi les haricots noirs secs gonflent à environ 2,5× à la cuisson',
    intro: [
      'Les haricots noirs secs sont des graines dures et à faible humidité — environ 12 % d’eau, 62 g de glucides et 21,6 g de protéines pour 100 g — avec une peau épaisse et cireuse conçue pour tenir l’eau à l’écart jusqu’à la germination. Les cuire est un trempage en deux temps : ils prennent l’eau pendant le trempage, puis en absorbent plus et gélatinisent leur amidon pendant l’ébullition. Le rendement dérivé de l’USDA est de 250 %, donc 100 g sec deviennent environ 250 g cuits — un multiple plus faible que celui des lentilles car cette peau dure limite le gonflement.',
      'Le gain de poids est entièrement de l’eau absorbée ; rien ne s’échappe hormis un peu de couleur et une partie des oligosaccharides responsables des gaz. Les macros restent avec le poids sec : environ 341 kcal, 21,6 g de protéines et 62 g de glucides pour 100 g sec, désormais répartis sur 2,5× les grammes cuits, si bien que les haricots noirs cuits tournent autour de 130–135 kcal pour 100 g.',
      'Le trempage, l’âge du haricot et l’eau dure font bouger le chiffre. Les haricots vieux et l’eau dure riche en minéraux résistent à l’hydratation et rendent un peu moins ; un long trempage et une pincée de bicarbonate poussent l’absorption vers le haut. Les haricots « cuisson rapide » non trempés se situent plutôt plus bas et cuisent de façon inégale.',
      'Les haricots noirs en conserve sont pleinement cuits et proches de ce poids hydraté — une boîte de 400 g s’égoutte à environ 240–260 g, équivalent à environ 100 g sec.',
    ],
    methodHeading: 'Un exemple chiffré : haricots secs et haricots en conserve',
    method: [
      'Le site utilise un rendement unique de 250 % pour les haricots noirs (USDA FoodData Central, calculé à partir des ratios de nutriments cru contre cuit).',
      'Cuisez 100 g de haricots noirs secs (trempés puis bouillis jusqu’à tendres) et vous obtenez environ 250 g de haricots cuits et égouttés. Une « tasse » de haricots secs (environ 190 g) donne environ 475 g cuits — près de 3 tasses.',
      'Ces 100 g sec font environ 341 kcal, 21,6 g de protéines et 62 g de glucides. À rebours, 250 g de haricots cuits maison font 250 ÷ 2,5 = 100 g sec ; une boîte de 400 g égouttée à 250 g fait aussi environ 100 g d’équivalent sec. Si l’étiquette de votre boîte donne des macros en poids cuit, c’est le plus simple à enregistrer directement.',
    ],
    buyingHeading: 'Quelle quantité de haricots noirs secs cuire',
    buying: [
      'Une portion cuite en accompagnement ou dans un bol fait 130–160 g, environ 55–65 g sec par personne. Une boîte de 400 g (≈240 g égouttés) sert deux à trois personnes.',
      'Un sachet de 454 g (1 lb) de haricots secs cuit à environ 1,1 kg — environ sept à huit portions, ou l’équivalent de quatre boîtes et demie, à une fraction du coût. Pour cinq portions de batch cooking de 150 g cuits, cuisez environ 300 g sec.',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant les haricots noirs',
    mistakes: [
      'Enregistrer des haricots cuits ou en conserve sur une entrée en sec « pour 100 g ». 250 g cuits font 100 g sec — l’entrée en sec multiplierait vos calories par environ 2,5.',
      'Enregistrer des haricots en conserve sans les égoutter. Le liquide (aquafaba) ajoute du poids et un peu de sodium ; égouttez et, idéalement, rincez avant de peser.',
      'Supposer que tous les haricots partagent un rendement. Les haricots noirs tournent autour de 250 % ; les lentilles sont à 289 % et les haricots rouges autour de 238 % — proche, mais pas identique.',
    ],
  },

  // ── Légumes ──────────────────────────────────────────────────────────────

  'broccoli': {
    introHeading: 'Pourquoi le brocoli bouilli ressort en pesant presque exactement pareil',
    intro: [
      'Le brocoli est composé d’environ 89 % d’eau, retenue dans des parois cellulaires assez rigides et une grande surface — tous ces bouquets et la tige. Quand on le fait bouillir, deux choses opposées se produisent et se compensent à peu près : une partie de l’eau cellulaire est perdue à mesure que les parois se ramollissent et que les tissus s’affaissent, mais les bouquets piègent et absorbent aussi l’eau bouillante dans leurs anfractuosités et surfaces de coupe. Le rendement net USDA du brocoli bouilli est de 100 % — aucun changement de poids mesurable.',
      'Cela rend le brocoli presque unique sur ce site : poids cru et cuit sont interchangeables pour le suivi, donc une portion de 100 g crue reste ~100 g cuite et porte les mêmes 34 kcal, 2,8 g de protéines et 6,6 g de glucides. Les nutriments qui changent — la vitamine C qui passe dans l’eau de cuisson, par exemple — n’affectent ni les macros ni le poids.',
      'Le mode de cuisson fait un peu pencher la balance. La vapeur, sans bain à absorber, ressort un peu en dessous à 95 %. La cocotte-minute force l’eau dans les tissus et fait passer un peu au-dessus à 104 %. Rôti, ce que ce jeu de données ne note pas, chasserait de l’eau réelle et atterrirait bien plus bas.',
      'La conclusion pratique : si vous faites bouillir ou cuire à la vapeur votre brocoli, vous pouvez le peser quand cela vous arrange et le chiffre tient.',
    ],
    methodHeading: 'Bouilli contre vapeur contre cocotte-minute',
    method: [
      'Chiffres USDA par mode de cuisson pour le brocoli : bouilli 100 %, vapeur 95 %, cocotte-minute 104 %.',
      'Prenez 150 g de bouquets de brocoli crus. Bouillis, ils ressortent à environ 150 g cuits. À la vapeur, plutôt 150 × 0,95 ≈ 143 g, car il n’y a pas d’eau de bain à capter. À la cocotte-minute, environ 150 × 1,04 = 156 g, les tissus étant gorgés d’eau de force.',
      'Les trois portent les macros de 150 g cru : environ 51 kcal, 4,2 g de protéines et 9,9 g de glucides. Comme l’écart est si petit, enregistrer le poids du brocoli cru pour une portion bouillie ou à la vapeur est exact à l’arrondi près — le calculateur compte surtout ici pour le brocoli rôti, absent de ce jeu de données et bien plus perdant.',
    ],
    buyingHeading: 'Quelle quantité de brocoli cru acheter',
    buying: [
      'Une portion de légume cuite fait environ 80–120 g. Comme le rendement est ~100 %, c’est pratiquement le même poids cru : achetez 100–120 g de bouquets par personne.',
      'Une tête de brocoli entière fait 300–500 g, dont la couronne représente environ 60–70 % et la tige le reste (comestible si épluchée). Une grosse tête sert trois à quatre personnes en accompagnement. Le brocoli surgelé est pré-blanchi et se comporte pareil sur la balance.',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant le brocoli',
    mistakes: [
      'Supposer que le brocoli bouilli rétrécit comme d’autres légumes verts et sous-enregistrer la portion. Ce n’est pas le cas — le rendement est d’environ 100 %.',
      'Appliquer le rendement du bouilli/vapeur au brocoli rôti. Le rôtissage chasse une eau substantielle ; une portion rôtie peut peser 30–50 % de moins que le cru, et ce jeu de données ne le couvre pas.',
      'Peser le brocoli avec du beurre, de l’huile ou de la sauce au fromage ajoutés. Enregistrez le légume cuit nature et le gras à part.',
    ],
  },

  'spinach': {
    introHeading: 'Pourquoi les épinards perdent à peine du poids même si la poêle paraît vide',
    intro: [
      'Les épinards sont l’aliment le plus mal jugé de ce site. Une grande poêle de feuilles crues tombe à quelques bouchées, donc on dirait qu’ils ont perdu presque tout leur poids. Ce n’est pas le cas : le rendement USDA des épinards bouillis est de 77 %, une perte d’à peine environ 23 %. 100 g de feuilles crues font toujours environ 77 g cuites.',
      'La raison, c’est que le volume et le poids sont deux choses différentes. Les feuilles d’épinards crues sont surtout de l’air et de la structure rigide — de fines lames de tissu qui gardent leur forme, avec beaucoup d’espace entre elles. La chaleur détruit cette structure presque instantanément : les parois cellulaires s’affaissent, les feuilles s’effondrent les unes contre les autres et tout l’air est chassé. Le volume s’effondre. Mais l’eau à l’intérieur des cellules est encore là pour l’essentiel, et c’est l’eau qui pèse quelque chose.',
      'Les feuilles perdent donc leur volume bien avant leur masse. Un peu d’eau cellulaire cuit bien — c’est le 23 % — mais le rétrécissement spectaculaire que vous voyez est de l’air et de la géométrie, pas du poids.',
      'Le mode de cuisson compte plus pour les épinards que pour presque tout autre légume. La vapeur les maintient à 93 % ; l’ébullition les fait tomber à 77 % ; la cocotte-minute les fait descendre à 68 % à mesure que la chaleur forcée chasse plus d’eau cellulaire.',
    ],
    methodHeading: 'Vapeur contre bouillis contre cocotte-minute',
    method: [
      'Chiffres USDA par mode de cuisson pour les épinards : vapeur 93 %, bouillis 77 %, cocotte-minute 68 %.',
      'Partez de 200 g d’épinards crus — un grand sachet, peut-être 4–5 litres de feuilles en vrac. À la vapeur, ils ressortent à environ 200 × 0,93 = 186 g. Bouillis et pressés, environ 200 × 0,77 = 154 g. À la cocotte-minute, environ 200 × 0,68 = 136 g. Tout tient dans un petit bol quel que soit le mode.',
      'Chaque portion porte les macros de 200 g cru : environ 46 kcal, 5,8 g de protéines et 7,2 g de glucides. À rebours, 100 g d’épinards bouillis cuits venaient de 100 ÷ 0,77 ≈ 130 g cru — donc une « petite poignée » d’épinards cuits peut représenter une portion de feuilles vraiment grande.',
    ],
    buyingHeading: 'Quelle quantité d’épinards crus acheter',
    buying: [
      'Les épinards crus à cuire s’effondrent tellement que les portions paraissent minuscules — comptez 150–200 g cru par personne pour un accompagnement cuit, qui ne donne qu’environ 115–155 g cuits mais représente une belle portion nutritionnelle.',
      'Un sachet « familial » de 200 g sert généreusement une personne en accompagnement cuit ou deux modestement. Pour un plat riche en épinards comme un saag ou une farce, achetez 250–300 g cru par personne. Les épinards hachés surgelés sont déjà blanchis et égouttés — un bloc de 250 g équivaut à environ 700–800 g de feuilles crues.',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant les épinards',
    mistakes: [
      'Supposer une perte de poids de ~70 % parce que la poêle paraît vide. La perte réelle est d’environ 23 % ; le tour de magie est du volume, pas du poids.',
      'Utiliser le rendement du bouilli (77 %) pour les épinards à la vapeur (93 %) — c’est une erreur de 16 points, plus grande que pour la plupart des aliments.',
      'Enregistrer des épinards cuits pressés et égouttés puis ne pas tenir compte de l’eau que vous avez expulsée. Si vous avez pressé fort, pesez ce qui reste et traitez-le comme un équivalent cru plus faible.',
    ],
  },

  'potato': {
    introHeading: 'Pourquoi une pomme de terre bouillie rétrécit à peine mais les frites perdent près de la moitié',
    intro: [
      'Une pomme de terre crue est composée d’environ 79 % d’eau enfermée dans une structure d’amidon dense et uniforme avec une peau fine. Bouillie ou à la vapeur, cette structure retient l’eau remarquablement bien — la peau et l’amidon qui gélatinise font tous deux barrière — donc une pomme de terre bouillie garde environ 94 % de son poids et une à la vapeur environ 99 %. Seule un peu d’eau de surface est perdue.',
      'Les macros sont modestes et dominés par les glucides : environ 77 kcal, 2 g de protéines et 17,5 g de glucides pour 100 g cru. Comme l’ébullition perd si peu, poids cru et cuit sont assez proches pour enregistrer une portion de pomme de terre bouillie de l’une ou l’autre façon sans grande erreur.',
      'Ce qui change tout, c’est la chaleur sèche et grasse. Cuire une pomme de terre au four avec une peau huilée fait descendre le rendement à 81 % ; la friture pour des frites l’effondre à environ 55 %, et les pommes rissolées à environ 60 %. La friture fait deux choses à la fois — elle chasse une grande fraction de l’eau et en remplace une partie par de l’huile absorbée, donc une frite est à la fois plus légère que la pomme de terre crue et bien plus dense en calories, un double coup que les macros de la pomme de terre crue ignorent complètement.',
      'Le mode de cuisson n’est donc pas un détail d’arrondi pour la pomme de terre ; c’est la différence entre un rendement de 94 % et un de 55 %, et entre « juste une pomme de terre » et « une pomme de terre plus beaucoup d’huile ».',
    ],
    methodHeading: 'Bouillie contre au four contre frite',
    method: [
      'Chiffres USDA par mode de cuisson pour la pomme de terre : vapeur 99 %, au four en papillote 95 %, bouillie 94 %, au four avec peau huilée 81 %, rissolée 60 %, frite 55 %.',
      'Prenez une pomme de terre de 200 g crue. Bouillie, environ 200 × 0,94 = 188 g. Au four avec peau huilée, environ 200 × 0,81 = 162 g. Transformée en frites, environ 200 × 0,55 = 110 g — plus l’huile absorbée, que le chiffre de rendement n’inclut pas.',
      'Les macros crus de cette pomme de terre de 200 g font environ 154 kcal, 4 g de protéines et 35 g de glucides. Ils tiennent pour les versions bouillie et au four. Pour les frites, l’apport de la pomme de terre est correct mais vous devez ajouter l’huile de friture à part — généralement 5–10 g de lipides pour 100 g de frites finies — sinon l’enregistrement sous-estimera fortement les calories.',
    ],
    buyingHeading: 'Quelle quantité de pomme de terre crue acheter',
    buying: [
      'Une portion d’accompagnement fait 150–250 g cru. Pour une purée, achetez environ 200–250 g cru par personne (elle perd un peu à l’ébullition, puis vous ajoutez lait et beurre à part). Pour une pomme de terre au four, une de 200–300 g par personne.',
      'Un sac de 2 kg de pommes de terre représente environ huit à dix pommes de terre moyennes — des accompagnements de dîner pour une famille pendant plusieurs soirs. Pour des frites, souvenez-vous que vous perdez près de la moitié du poids : 1 kg de pomme de terre crue ne fait qu’environ 550 g de frites.',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant la pomme de terre',
    mistakes: [
      'Utiliser le rendement du bouilli (94 %) pour des pommes de terre rôties à l’huile ou des frites. La pomme de terre rôtie à l’huile est à environ 81 % et les frites à environ 55 % — et les deux portent de l’huile ajoutée en plus.',
      'Enregistrer les frites comme « pomme de terre » sans gras ajouté. L’huile représente souvent un tiers ou plus des calories d’une portion de frites.',
      'Peser la purée et l’enregistrer comme pomme de terre nature. La purée contient lait, beurre ou crème — pesez la pomme de terre avant d’écraser, ou enregistrez les ajouts à part.',
    ],
  },

  'sweet-potato': {
    introHeading: 'Pourquoi la patate douce au four perd du poids mais la patate douce bouillie en gagne',
    intro: [
      'La patate douce est plus humide et plus sucrée qu’une pomme de terre ordinaire — environ 77 % d’eau, 20 g de glucides pour 100 g cru, une bonne part sous forme de sucres, plus de fibres solubles. Cette composition la fait se comporter différemment selon que la chaleur la dessèche ou que l’eau s’y infiltre.',
      'Au four, une patate douce perd environ 22 % de son poids — un rendement de 78 %. La chaleur sèche du four évapore l’eau de surface et proche de la surface, les sucres se concentrent et caramélisent (cet extérieur collant et sucré), et la chair devient plus dense. C’est pourquoi une patate douce au four a un goût bien plus sucré qu’une bouillie : même sucre, moins d’eau.',
      'Bouillie, c’est l’inverse et elle gagne en fait du poids — un rendement de 101 % — car la chair absorbe une partie de l’eau de cuisson, un peu plus qu’elle n’en perd. À la vapeur, elle est juste en dessous à 98 %. La même patate douce crue peut donc ressortir plus lourde ou plus légère qu’au départ selon la méthode.',
      'Pour le suivi, cela signifie que le choix de la méthode inverse le signe de la correction : au four, vous enregistrez moins que le poids cru ; bouillie, vous enregistrez un peu plus.',
    ],
    methodHeading: 'Au four contre bouillie contre vapeur',
    method: [
      'Chiffres USDA par mode de cuisson pour la patate douce : bouillie 101 %, vapeur 98 %, au four 78 %.',
      'Prenez une patate douce de 150 g crue. Au four, elle ressort à environ 150 × 0,78 ≈ 117 g — nettement plus petite et plus dense. Bouillie, environ 150 × 1,01 ≈ 152 g. À la vapeur, environ 150 × 0,98 = 147 g.',
      'Toutes portent les macros de 150 g cru : environ 129 kcal, 2,4 g de protéines et 30 g de glucides. Une patate douce au four de 117 g et une bouillie de 152 g issues de patates crues identiques ont donc les mêmes calories — celle du four paraît juste plus concentrée. À rebours : une portion au four de 120 g fait 120 ÷ 0,78 ≈ 154 g cru.',
    ],
    buyingHeading: 'Quelle quantité de patate douce crue acheter',
    buying: [
      'Une portion d’accompagnement fait 150–200 g cru. Pour une patate douce au four, achetez-en une de 200–250 g par personne, sachant qu’elle cuira jusqu’à environ 155–195 g. Pour une purée ou des cubes bouillis, 150–200 g cru chacun suffisent, le poids baissant à peine.',
      'Les patates douces varient énormément de taille — une « moyenne » va de 130 g à 250 g — donc pesez plutôt que de compter. Un lot de 1 kg au four donne environ 780 g de chair cuite (un peu moins une fois la peau jetée).',
    ],
    mistakesHeading: 'Erreurs fréquentes en enregistrant la patate douce',
    mistakes: [
      'Supposer qu’elle se comporte comme une pomme de terre ordinaire. La patate douce au four perd environ 22 % (rendement de 78 %) ; la pomme de terre ordinaire au four en papillote ne perd qu’environ 5 %.',
      'Utiliser le rendement du four pour la patate douce bouillie. Bouillie, elle gagne un peu de poids (101 %), donc convertir avec 78 % sous-estimerait fortement votre portion.',
      'Enregistrer des frites de patate douce ou de la patate douce confite comme nature. Les frites portent de l’huile absorbée ; les versions confites ajoutent beurre et sucre — enregistrez-les à part.',
    ],
  },
};
