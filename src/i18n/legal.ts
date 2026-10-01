import type { Locale } from './ui';

/**
 * Privacy Policy and Terms & Conditions, per locale.
 *
 * Every section paragraph is an HTML string rendered with `set:html`, so the
 * translations can carry the inline links, <code> and <strong> the English
 * originals had. Shared markup lives in the constants below so a translator
 * only ever edits prose.
 */

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalPage {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  lastUpdatedLabel: string;
  lastUpdated: string;
  sections: LegalSection[];
}

const LINK = 'class="text-[var(--color-link)] hover:underline"';
const CODE =
  'class="text-xs font-mono bg-[var(--color-surface)] border border-[var(--color-hairline)] px-1.5 py-0.5 rounded"';

const EMAIL = `<a href="mailto:hello@rawtocookedcalculator.com" ${LINK}>hello@rawtocookedcalculator.com</a>`;
const LOCAL_STORAGE = `<code ${CODE}>localStorage</code>`;
const GOOGLE_PRIVACY = `<a href="https://policies.google.com/privacy" ${LINK} rel="noopener noreferrer" target="_blank">policies.google.com/privacy</a>`;
const gaOptOut = (label: string) =>
  `<a href="https://tools.google.com/dlpage/gaoptout" ${LINK} rel="noopener noreferrer" target="_blank">${label}</a>`;
const strong = (text: string) => `<strong class="text-[var(--color-ink)]">${text}</strong>`;

/** Generic external link, opening in a new tab like the other legal-page links. */
const extLink = (href: string, label: string) =>
  `<a href="${href}" ${LINK} rel="noopener noreferrer" target="_blank">${label}</a>`;

// Ad-personalization controls referenced from the Privacy Policy's advertising section.
const ADS_SETTINGS = (label: string) => extLink('https://adssettings.google.com/', label);
const ADS_ABOUT = (label: string) => extLink('https://www.aboutads.info/choices/', label);
const ADS_EU = (label: string) => extLink('https://www.youronlinechoices.eu/', label);
const GOOGLE_PARTNER_SITES = extLink(
  'https://policies.google.com/technologies/partner-sites',
  'policies.google.com/technologies/partner-sites'
);

export const PRIVACY: Record<Locale, LegalPage> = {
  en: {
    metaTitle: 'Privacy Policy | Raw to Cooked Calculator',
    metaDescription:
      'Privacy policy for rawtocookedcalculator.com. How this site uses cookies, Google Analytics, and Google AdSense — and how to control ad personalization.',
    eyebrow: 'Legal',
    heading: 'Privacy Policy',
    lastUpdatedLabel: 'Last updated',
    lastUpdated: 'September 9, 2026',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Raw to Cooked Calculator is a static website with no user accounts and no sign-up forms. It does use Google Analytics to measure aggregate traffic and Google AdSense to display ads, and both rely on cookies. This page explains what data is involved and how you can control it.',
        ],
      },
      {
        heading: 'What we collect',
        paragraphs: [
          'We do not collect names, email addresses, or any personally identifying information through this site. There are no sign-up forms, login systems, or comment sections.',
          'When you use the calculator, all computations happen directly in your browser. No input values (food, weight, or results) are ever sent to a server.',
        ],
      },
      {
        heading: 'Browser storage',
        paragraphs: [
          `The site stores one preference — your light/dark mode choice — in your browser's ${LOCAL_STORAGE}. This data never leaves your device and is not transmitted to any server. You can clear it at any time by clearing your browser's site data.`,
        ],
      },
      {
        heading: 'Analytics',
        paragraphs: [
          'This site uses Google Analytics 4, a web analytics service provided by Google LLC. It sets cookies and collects non-personal, aggregated data — page views, approximate location (country or city level), device and browser type, and the referring URL — so we can see which pages are useful and how visitors arrive.',
          `Analytics data is not used to identify you, and we have not enabled Google Analytics advertising features or Google Signals. You can opt out of Google Analytics on every site by installing the ${gaOptOut('Google Analytics Opt-Out browser add-on')}.`,
        ],
      },
      {
        heading: 'Advertising',
        paragraphs: [
          'This site displays ads through Google AdSense, an advertising service provided by Google LLC.',
          'Google and its ad-technology partners use cookies and similar technologies to serve ads, to measure their performance, and — where permitted — to personalize the ads you see based on your prior visits to this site and other sites. The Google advertising cookie (including the DoubleClick cookie) enables Google and its partners to serve ads to you across the web.',
          `You can review or turn off ad personalization in ${ADS_SETTINGS('Google Ads Settings')}. You can also opt out of personalized advertising from participating vendors at ${ADS_ABOUT('aboutads.info/choices')} and, in Europe, ${ADS_EU('youronlinechoices.eu')}.`,
          `In the European Economic Area, the United Kingdom, and Switzerland, personalized ads are shown only with your consent. Google's list of ad-technology providers and how they use data is available at ${GOOGLE_PARTNER_SITES}.`,
        ],
      },
      {
        heading: 'Third-party services',
        paragraphs: [
          `Apart from Google Analytics and Google AdSense described above, the site loads fonts from Google Fonts; when your browser requests these fonts, Google may log the request. You can review Google's privacy practices at ${GOOGLE_PRIVACY}.`,
          'We do not embed third-party video players or social media widgets.',
        ],
      },
      {
        heading: 'Cookies',
        paragraphs: [
          'This site and its providers use cookies. Google Analytics sets cookies to measure aggregate traffic; Google AdSense and its partners set cookies to deliver ads, limit how often you see the same ad, and — with consent where required — personalize ads.',
          'You can block or delete cookies through your browser settings at any time. Blocking cookies does not remove ads, but the ads you see may be less relevant.',
        ],
      },
      {
        heading: 'External links',
        paragraphs: [
          'This site links to external sources including USDA FoodData Central and USDA publications. We are not responsible for the privacy practices or content of those sites. Their policies govern data collection on their platforms.',
        ],
      },
      {
        heading: 'Children’s privacy',
        paragraphs: [
          'This site is not directed at children under 13 and does not knowingly collect any information from children. Ads shown here are not personalized for anyone Google identifies as being under the applicable age.',
        ],
      },
      {
        heading: 'Changes to this policy',
        paragraphs: [
          'We may update this page from time to time. The "Last updated" date at the top of the page reflects the most recent revision. Continued use of the site after changes are posted constitutes acceptance of the updated policy.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [`For privacy-related questions, email us at ${EMAIL}.`],
      },
    ],
  },

  es: {
    metaTitle: 'Política de privacidad | Calculadora Crudo a Cocido',
    metaDescription:
      'Política de privacidad de rawtocookedcalculator.com. Cómo este sitio usa cookies, Google Analytics y Google AdSense, y cómo controlar la personalización de anuncios.',
    eyebrow: 'Legal',
    heading: 'Política de privacidad',
    lastUpdatedLabel: 'Última actualización',
    lastUpdated: '9 de septiembre de 2026',
    sections: [
      {
        heading: 'Resumen',
        paragraphs: [
          'La Calculadora Crudo a Cocido es un sitio web estático, sin cuentas de usuario ni formularios de registro. Sí usa Google Analytics para medir el tráfico agregado y Google AdSense para mostrar anuncios, y ambos dependen de cookies. Esta página explica qué datos intervienen y cómo puedes controlarlos.',
        ],
      },
      {
        heading: 'Qué recopilamos',
        paragraphs: [
          'No recopilamos nombres, direcciones de correo ni ninguna información que permita identificarte a través de este sitio. No hay formularios de registro, sistemas de acceso ni secciones de comentarios.',
          'Cuando usas la calculadora, todos los cálculos se realizan directamente en tu navegador. Ningún valor introducido (alimento, peso o resultados) se envía nunca a un servidor.',
        ],
      },
      {
        heading: 'Almacenamiento en el navegador',
        paragraphs: [
          `El sitio guarda una sola preferencia —tu elección de modo claro u oscuro— en el ${LOCAL_STORAGE} de tu navegador. Ese dato nunca sale de tu dispositivo ni se transmite a ningún servidor. Puedes borrarlo en cualquier momento eliminando los datos del sitio en tu navegador.`,
        ],
      },
      {
        heading: 'Analítica',
        paragraphs: [
          'Este sitio usa Google Analytics 4, un servicio de analítica web de Google LLC. Instala cookies y recoge datos agregados y no personales —páginas vistas, ubicación aproximada (nivel de país o ciudad), tipo de dispositivo y de navegador y URL de procedencia— para que podamos ver qué páginas resultan útiles y cómo llegan los visitantes.',
          `Los datos de analítica no se usan para identificarte y no hemos activado las funciones de publicidad de Google Analytics ni Google Signals. Puedes inhabilitar Google Analytics en todos los sitios instalando el ${gaOptOut('complemento de inhabilitación para navegadores de Google Analytics')}.`,
        ],
      },
      {
        heading: 'Publicidad',
        paragraphs: [
          'Este sitio muestra anuncios a través de Google AdSense, un servicio de publicidad de Google LLC.',
          'Google y sus socios de tecnología publicitaria usan cookies y tecnologías similares para publicar anuncios, medir su rendimiento y —cuando está permitido— personalizar los anuncios que ves según tus visitas previas a este sitio y a otros. La cookie publicitaria de Google (incluida la cookie DoubleClick) permite a Google y a sus socios mostrarte anuncios por toda la web.',
          `Puedes revisar o desactivar la personalización de anuncios en ${ADS_SETTINGS('Configuración de anuncios de Google')}. También puedes darte de baja de la publicidad personalizada de los proveedores participantes en ${ADS_ABOUT('aboutads.info/choices')} y, en Europa, en ${ADS_EU('youronlinechoices.eu')}.`,
          `En el Espacio Económico Europeo, el Reino Unido y Suiza, los anuncios personalizados solo se muestran con tu consentimiento. La lista de proveedores de tecnología publicitaria de Google y cómo usan los datos está disponible en ${GOOGLE_PARTNER_SITES}.`,
        ],
      },
      {
        heading: 'Servicios de terceros',
        paragraphs: [
          `Además de Google Analytics y Google AdSense descritos arriba, el sitio carga tipografías desde Google Fonts; cuando tu navegador solicita esas fuentes, Google puede registrar la petición. Puedes consultar las prácticas de privacidad de Google en ${GOOGLE_PRIVACY}.`,
          'No incrustamos reproductores de vídeo de terceros ni widgets de redes sociales.',
        ],
      },
      {
        heading: 'Cookies',
        paragraphs: [
          'Este sitio y sus proveedores usan cookies. Google Analytics instala cookies para medir el tráfico agregado; Google AdSense y sus socios instalan cookies para publicar anuncios, limitar cuántas veces ves el mismo anuncio y —con consentimiento cuando se requiere— personalizar los anuncios.',
          'Puedes bloquear o eliminar las cookies desde la configuración de tu navegador en cualquier momento. Bloquear las cookies no elimina los anuncios, pero los que veas pueden ser menos relevantes.',
        ],
      },
      {
        heading: 'Enlaces externos',
        paragraphs: [
          'Este sitio enlaza a fuentes externas, incluidas USDA FoodData Central y publicaciones del USDA. No somos responsables de las prácticas de privacidad ni del contenido de esos sitios. Sus propias políticas rigen la recopilación de datos en sus plataformas.',
        ],
      },
      {
        heading: 'Privacidad de los menores',
        paragraphs: [
          'Este sitio no está dirigido a menores de 13 años y no recopila conscientemente ninguna información de menores. Los anuncios que se muestran aquí no se personalizan para las personas que Google identifica como menores de la edad aplicable.',
        ],
      },
      {
        heading: 'Cambios en esta política',
        paragraphs: [
          'Podemos actualizar esta página de vez en cuando. La fecha de «última actualización» que aparece arriba refleja la revisión más reciente. Seguir usando el sitio después de publicarse los cambios implica aceptar la política actualizada.',
        ],
      },
      {
        heading: 'Contacto',
        paragraphs: [`Para cuestiones relacionadas con la privacidad, escríbenos a ${EMAIL}.`],
      },
    ],
  },

  fr: {
    metaTitle: 'Politique de confidentialité | Calculateur Cru-Cuit',
    metaDescription:
      'Politique de confidentialité de rawtocookedcalculator.com. Comment ce site utilise les cookies, Google Analytics et Google AdSense, et comment contrôler la personnalisation des publicités.',
    eyebrow: 'Mentions légales',
    heading: 'Politique de confidentialité',
    lastUpdatedLabel: 'Dernière mise à jour',
    lastUpdated: '9 septembre 2026',
    sections: [
      {
        heading: 'Aperçu',
        paragraphs: [
          'Le Calculateur Cru-Cuit est un site web statique, sans comptes utilisateur ni formulaires d’inscription. Il utilise toutefois Google Analytics pour mesurer le trafic agrégé et Google AdSense pour afficher des publicités, et les deux reposent sur des cookies. Cette page explique quelles données sont en jeu et comment vous pouvez les contrôler.',
        ],
      },
      {
        heading: 'Ce que nous collectons',
        paragraphs: [
          'Nous ne collectons ni noms, ni adresses e-mail, ni aucune information permettant de vous identifier via ce site. Il n’y a ni formulaire d’inscription, ni système de connexion, ni espace de commentaires.',
          'Lorsque vous utilisez le calculateur, tous les calculs se font directement dans votre navigateur. Aucune valeur saisie (aliment, poids ou résultats) n’est jamais envoyée à un serveur.',
        ],
      },
      {
        heading: 'Stockage dans le navigateur',
        paragraphs: [
          `Le site enregistre une seule préférence — votre choix de mode clair ou sombre — dans le ${LOCAL_STORAGE} de votre navigateur. Cette donnée ne quitte jamais votre appareil et n’est transmise à aucun serveur. Vous pouvez l’effacer à tout moment en supprimant les données du site dans votre navigateur.`,
        ],
      },
      {
        heading: 'Mesure d’audience',
        paragraphs: [
          'Ce site utilise Google Analytics 4, un service de mesure d’audience fourni par Google LLC. Il dépose des cookies et collecte des données agrégées et non personnelles — pages vues, localisation approximative (niveau pays ou ville), type d’appareil et de navigateur et URL de provenance — afin que nous puissions voir quelles pages sont utiles et comment les visiteurs arrivent.',
          `Les données de mesure d’audience ne servent pas à vous identifier et nous n’avons activé ni les fonctionnalités publicitaires de Google Analytics ni Google Signals. Vous pouvez désactiver Google Analytics sur tous les sites en installant le ${gaOptOut('module complémentaire de désactivation de Google Analytics')}.`,
        ],
      },
      {
        heading: 'Publicité',
        paragraphs: [
          'Ce site affiche des publicités via Google AdSense, un service publicitaire fourni par Google LLC.',
          'Google et ses partenaires de technologie publicitaire utilisent des cookies et des technologies similaires pour diffuser les publicités, en mesurer les performances et — lorsque cela est autorisé — personnaliser les publicités que vous voyez en fonction de vos visites antérieures sur ce site et sur d’autres. Le cookie publicitaire de Google (y compris le cookie DoubleClick) permet à Google et à ses partenaires de vous diffuser des publicités sur l’ensemble du Web.',
          `Vous pouvez consulter ou désactiver la personnalisation des publicités dans les ${ADS_SETTINGS('paramètres des annonces Google')}. Vous pouvez également refuser la publicité personnalisée des fournisseurs participants sur ${ADS_ABOUT('aboutads.info/choices')} et, en Europe, sur ${ADS_EU('youronlinechoices.eu')}.`,
          `Dans l’Espace économique européen, au Royaume-Uni et en Suisse, les publicités personnalisées ne sont diffusées qu’avec votre consentement. La liste des fournisseurs de technologie publicitaire de Google et la manière dont ils utilisent les données sont disponibles sur ${GOOGLE_PARTNER_SITES}.`,
        ],
      },
      {
        heading: 'Services tiers',
        paragraphs: [
          `Outre Google Analytics et Google AdSense décrits ci-dessus, le site charge des polices depuis Google Fonts ; lorsque votre navigateur demande ces polices, Google peut en enregistrer la requête. Vous pouvez consulter les pratiques de confidentialité de Google sur ${GOOGLE_PRIVACY}.`,
          'Nous n’intégrons ni lecteurs vidéo tiers, ni widgets de réseaux sociaux.',
        ],
      },
      {
        heading: 'Cookies',
        paragraphs: [
          'Ce site et ses prestataires utilisent des cookies. Google Analytics dépose des cookies pour mesurer le trafic agrégé ; Google AdSense et ses partenaires déposent des cookies pour diffuser les publicités, limiter le nombre de fois où vous voyez la même annonce et — avec votre consentement lorsqu’il est requis — personnaliser les publicités.',
          'Vous pouvez bloquer ou supprimer les cookies depuis les réglages de votre navigateur à tout moment. Bloquer les cookies ne supprime pas les publicités, mais celles que vous voyez peuvent être moins pertinentes.',
        ],
      },
      {
        heading: 'Liens externes',
        paragraphs: [
          'Ce site renvoie vers des sources externes, notamment USDA FoodData Central et les publications de l’USDA. Nous ne sommes responsables ni des pratiques de confidentialité ni du contenu de ces sites. Leurs propres politiques régissent la collecte de données sur leurs plateformes.',
        ],
      },
      {
        heading: 'Protection des mineurs',
        paragraphs: [
          'Ce site ne s’adresse pas aux enfants de moins de 13 ans et ne collecte sciemment aucune information les concernant. Les publicités affichées ici ne sont pas personnalisées pour les personnes que Google identifie comme n’ayant pas l’âge requis.',
        ],
      },
      {
        heading: 'Modifications de cette politique',
        paragraphs: [
          'Nous pouvons mettre cette page à jour de temps à autre. La date de « dernière mise à jour » figurant en haut de page correspond à la révision la plus récente. Poursuivre l’utilisation du site après publication des modifications vaut acceptation de la politique mise à jour.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [`Pour toute question relative à la confidentialité, écrivez-nous à ${EMAIL}.`],
      },
    ],
  },

  de: {
    metaTitle: 'Datenschutzerklärung | Roh-zu-Gegart-Rechner',
    metaDescription:
      'Datenschutzerklärung für rawtocookedcalculator.com. Wie diese Seite Cookies, Google Analytics und Google AdSense nutzt — und wie du die Anzeigenpersonalisierung steuerst.',
    eyebrow: 'Rechtliches',
    heading: 'Datenschutzerklärung',
    lastUpdatedLabel: 'Zuletzt aktualisiert',
    lastUpdated: '9. September 2026',
    sections: [
      {
        heading: 'Überblick',
        paragraphs: [
          'Der Roh-zu-Gegart-Rechner ist eine statische Website ohne Benutzerkonten und ohne Anmeldeformulare. Sie nutzt jedoch Google Analytics, um aggregierte Zugriffe zu messen, und Google AdSense, um Anzeigen auszuspielen; beide setzen Cookies ein. Diese Seite erklärt, welche Daten dabei anfallen und wie du sie steuern kannst.',
        ],
      },
      {
        heading: 'Was wir erheben',
        paragraphs: [
          'Wir erheben über diese Seite weder Namen noch E-Mail-Adressen noch sonstige personenbezogene Daten. Es gibt keine Anmeldeformulare, keine Logins und keine Kommentarbereiche.',
          'Bei der Nutzung des Rechners finden sämtliche Berechnungen direkt in deinem Browser statt. Keine Eingabe (Lebensmittel, Gewicht oder Ergebnis) wird jemals an einen Server gesendet.',
        ],
      },
      {
        heading: 'Browser-Speicher',
        paragraphs: [
          `Die Seite speichert eine einzige Einstellung — deine Wahl zwischen hellem und dunklem Modus — im ${LOCAL_STORAGE} deines Browsers. Diese Angabe verlässt dein Gerät nie und wird an keinen Server übertragen. Du kannst sie jederzeit löschen, indem du die Websitedaten in deinem Browser entfernst.`,
        ],
      },
      {
        heading: 'Analyse',
        paragraphs: [
          'Diese Seite nutzt Google Analytics 4, einen Webanalysedienst von Google LLC. Er setzt Cookies und erfasst nicht personenbezogene, aggregierte Daten — Seitenaufrufe, ungefährer Standort (Land- oder Stadtebene), Geräte- und Browsertyp sowie verweisende URL —, damit wir sehen, welche Seiten nützlich sind und wie Besucher hierher gelangen.',
          `Analysedaten werden nicht dazu verwendet, dich zu identifizieren, und wir haben weder die Werbefunktionen von Google Analytics noch Google Signals aktiviert. Du kannst Google Analytics auf allen Websites deaktivieren, indem du das ${gaOptOut('Google-Analytics-Deaktivierungs-Add-on für Browser')} installierst.`,
        ],
      },
      {
        heading: 'Werbung',
        paragraphs: [
          'Diese Seite zeigt Anzeigen über Google AdSense, einen Werbedienst von Google LLC.',
          'Google und seine Werbetechnologie-Partner verwenden Cookies und ähnliche Technologien, um Anzeigen auszuliefern, ihre Leistung zu messen und — soweit zulässig — die dir gezeigten Anzeigen auf Grundlage deiner früheren Besuche dieser und anderer Websites zu personalisieren. Das Werbe-Cookie von Google (einschließlich des DoubleClick-Cookies) ermöglicht es Google und seinen Partnern, dir im gesamten Web Anzeigen auszuliefern.',
          `In den ${ADS_SETTINGS('Google-Anzeigeneinstellungen')} kannst du die Anzeigenpersonalisierung einsehen oder abschalten. Der personalisierten Werbung teilnehmender Anbieter kannst du außerdem unter ${ADS_ABOUT('aboutads.info/choices')} und in Europa unter ${ADS_EU('youronlinechoices.eu')} widersprechen.`,
          `Im Europäischen Wirtschaftsraum, im Vereinigten Königreich und in der Schweiz werden personalisierte Anzeigen nur mit deiner Einwilligung ausgespielt. Die Liste der Werbetechnologie-Anbieter von Google und wie sie Daten verwenden, findest du unter ${GOOGLE_PARTNER_SITES}.`,
        ],
      },
      {
        heading: 'Dienste Dritter',
        paragraphs: [
          `Neben Google Analytics und Google AdSense (siehe oben) lädt die Seite Schriftarten von Google Fonts; wenn dein Browser diese Schriften anfordert, kann Google die Anfrage protokollieren. Googles Datenschutzpraktiken kannst du unter ${GOOGLE_PRIVACY} einsehen.`,
          'Wir binden keine Videoplayer Dritter und keine Social-Media-Widgets ein.',
        ],
      },
      {
        heading: 'Cookies',
        paragraphs: [
          'Diese Seite und ihre Anbieter verwenden Cookies. Google Analytics setzt Cookies, um aggregierte Zugriffe zu messen; Google AdSense und seine Partner setzen Cookies, um Anzeigen auszuliefern, zu begrenzen, wie oft du dieselbe Anzeige siehst, und — mit Einwilligung, sofern erforderlich — Anzeigen zu personalisieren.',
          'Du kannst Cookies jederzeit über die Einstellungen deines Browsers blockieren oder löschen. Das Blockieren von Cookies entfernt keine Anzeigen, aber die angezeigte Werbung ist dann möglicherweise weniger relevant.',
        ],
      },
      {
        heading: 'Externe Links',
        paragraphs: [
          'Diese Seite verlinkt auf externe Quellen, darunter USDA FoodData Central und Veröffentlichungen des USDA. Für die Datenschutzpraktiken und Inhalte dieser Seiten sind wir nicht verantwortlich. Auf deren Plattformen gelten deren eigene Richtlinien.',
        ],
      },
      {
        heading: 'Datenschutz für Kinder',
        paragraphs: [
          'Diese Seite richtet sich nicht an Kinder unter 13 Jahren und erhebt wissentlich keine Daten von Kindern. Anzeigen auf dieser Seite werden für Personen, die Google als unter dem geltenden Mindestalter einstuft, nicht personalisiert.',
        ],
      },
      {
        heading: 'Änderungen dieser Erklärung',
        paragraphs: [
          'Wir können diese Seite von Zeit zu Zeit aktualisieren. Das Datum „Zuletzt aktualisiert“ oben auf der Seite gibt die jüngste Fassung an. Wer die Seite nach Veröffentlichung von Änderungen weiter nutzt, akzeptiert damit die aktualisierte Erklärung.',
        ],
      },
      {
        heading: 'Kontakt',
        paragraphs: [`Bei Fragen zum Datenschutz schreib uns an ${EMAIL}.`],
      },
    ],
  },

  pt: {
    metaTitle: 'Política de privacidade | Calculadora de Cru para Cozido',
    metaDescription:
      'Política de privacidade do rawtocookedcalculator.com. Como este site usa cookies, Google Analytics e Google AdSense, e como controlar a personalização de anúncios.',
    eyebrow: 'Jurídico',
    heading: 'Política de privacidade',
    lastUpdatedLabel: 'Última atualização',
    lastUpdated: '9 de setembro de 2026',
    sections: [
      {
        heading: 'Visão geral',
        paragraphs: [
          'A Calculadora de Cru para Cozido é um site estático, sem contas de usuário e sem formulários de cadastro. Ele usa o Google Analytics para medir o tráfego agregado e o Google AdSense para exibir anúncios, e ambos dependem de cookies. Esta página explica quais dados estão envolvidos e como você pode controlá-los.',
        ],
      },
      {
        heading: 'O que coletamos',
        paragraphs: [
          'Não coletamos nomes, endereços de e-mail nem qualquer informação que identifique você por meio deste site. Não há formulários de cadastro, sistemas de login ou seções de comentários.',
          'Quando você usa a calculadora, todos os cálculos acontecem diretamente no seu navegador. Nenhum valor informado (alimento, peso ou resultados) é enviado a um servidor.',
        ],
      },
      {
        heading: 'Armazenamento no navegador',
        paragraphs: [
          `O site guarda uma única preferência — sua escolha de modo claro ou escuro — no ${LOCAL_STORAGE} do seu navegador. Esse dado nunca sai do seu dispositivo e não é transmitido a nenhum servidor. Você pode apagá-lo a qualquer momento limpando os dados do site no navegador.`,
        ],
      },
      {
        heading: 'Análise de tráfego',
        paragraphs: [
          'Este site usa o Google Analytics 4, um serviço de análise da web fornecido pela Google LLC. Ele define cookies e coleta dados agregados e não pessoais — visualizações de página, localização aproximada (nível de país ou cidade), tipo de dispositivo e de navegador e URL de origem — para que possamos ver quais páginas são úteis e como os visitantes chegam.',
          `Os dados de análise não são usados para identificar você, e não ativamos os recursos de publicidade do Google Analytics nem o Google Signals. Você pode desativar o Google Analytics em todos os sites instalando o ${gaOptOut('complemento do navegador para desativação do Google Analytics')}.`,
        ],
      },
      {
        heading: 'Publicidade',
        paragraphs: [
          'Este site exibe anúncios por meio do Google AdSense, um serviço de publicidade fornecido pela Google LLC.',
          'O Google e seus parceiros de tecnologia de anúncios usam cookies e tecnologias semelhantes para veicular anúncios, medir seu desempenho e — quando permitido — personalizar os anúncios que você vê com base nas suas visitas anteriores a este site e a outros. O cookie de publicidade do Google (incluindo o cookie DoubleClick) permite que o Google e seus parceiros veiculem anúncios para você em toda a web.',
          `Você pode revisar ou desativar a personalização de anúncios nas ${ADS_SETTINGS('Configurações de anúncios do Google')}. Você também pode recusar a publicidade personalizada de fornecedores participantes em ${ADS_ABOUT('aboutads.info/choices')} e, na Europa, em ${ADS_EU('youronlinechoices.eu')}.`,
          `No Espaço Econômico Europeu, no Reino Unido e na Suíça, os anúncios personalizados só são exibidos com o seu consentimento. A lista de fornecedores de tecnologia de anúncios do Google e como eles usam os dados está disponível em ${GOOGLE_PARTNER_SITES}.`,
        ],
      },
      {
        heading: 'Serviços de terceiros',
        paragraphs: [
          `Além do Google Analytics e do Google AdSense descritos acima, o site carrega fontes do Google Fonts; quando seu navegador solicita essas fontes, o Google pode registrar a requisição. Você pode consultar as práticas de privacidade do Google em ${GOOGLE_PRIVACY}.`,
          'Não incorporamos players de vídeo de terceiros nem widgets de redes sociais.',
        ],
      },
      {
        heading: 'Cookies',
        paragraphs: [
          'Este site e seus provedores usam cookies. O Google Analytics define cookies para medir o tráfego agregado; o Google AdSense e seus parceiros definem cookies para veicular anúncios, limitar quantas vezes você vê o mesmo anúncio e — com consentimento quando exigido — personalizar anúncios.',
          'Você pode bloquear ou excluir cookies pelas configurações do navegador a qualquer momento. Bloquear cookies não remove os anúncios, mas os que você vê podem ser menos relevantes.',
        ],
      },
      {
        heading: 'Links externos',
        paragraphs: [
          'Este site direciona a fontes externas, incluindo a USDA FoodData Central e publicações do USDA. Não somos responsáveis pelas práticas de privacidade nem pelo conteúdo desses sites. As políticas deles regem a coleta de dados em suas plataformas.',
        ],
      },
      {
        heading: 'Privacidade de crianças',
        paragraphs: [
          'Este site não é dirigido a crianças menores de 13 anos e não coleta intencionalmente nenhuma informação de crianças. Os anúncios exibidos aqui não são personalizados para pessoas que o Google identifica como abaixo da idade aplicável.',
        ],
      },
      {
        heading: 'Alterações nesta política',
        paragraphs: [
          'Podemos atualizar esta página periodicamente. A data de "última atualização" no topo da página reflete a revisão mais recente. Continuar usando o site depois que as alterações forem publicadas significa aceitar a política atualizada.',
        ],
      },
      {
        heading: 'Contato',
        paragraphs: [`Para questões de privacidade, escreva para ${EMAIL}.`],
      },
    ],
  },



  it: {
    metaTitle: 'Informativa sulla privacy | Calcolatore Crudo-Cotto',
    metaDescription:
      'Informativa sulla privacy di rawtocookedcalculator.com. Come questo sito usa i cookie, Google Analytics e Google AdSense, e come controllare la personalizzazione degli annunci.',
    eyebrow: 'Note legali',
    heading: 'Informativa sulla privacy',
    lastUpdatedLabel: 'Ultimo aggiornamento',
    lastUpdated: '9 settembre 2026',
    sections: [
      {
        heading: 'Panoramica',
        paragraphs: [
          'Il Calcolatore Crudo-Cotto è un sito web statico, senza account utente e senza moduli di iscrizione. Utilizza però Google Analytics per misurare il traffico aggregato e Google AdSense per mostrare annunci, ed entrambi si basano sui cookie. Questa pagina spiega quali dati sono coinvolti e come puoi controllarli.',
        ],
      },
      {
        heading: 'Cosa raccogliamo',
        paragraphs: [
          'Attraverso questo sito non raccogliamo nomi, indirizzi e-mail né alcuna informazione che possa identificarti. Non ci sono moduli di iscrizione, sistemi di accesso o sezioni di commenti.',
          'Quando usi il calcolatore, tutti i calcoli avvengono direttamente nel tuo browser. Nessun valore inserito (alimento, peso o risultati) viene mai inviato a un server.',
        ],
      },
      {
        heading: 'Archiviazione nel browser',
        paragraphs: [
          `Il sito memorizza una sola preferenza — la scelta tra modalità chiara e scura — nel ${LOCAL_STORAGE} del tuo browser. Questo dato non lascia mai il tuo dispositivo e non viene trasmesso ad alcun server. Puoi eliminarlo in qualsiasi momento cancellando i dati del sito dal browser.`,
        ],
      },
      {
        heading: 'Statistiche',
        paragraphs: [
          'Questo sito utilizza Google Analytics 4, un servizio di analisi web fornito da Google LLC. Imposta cookie e raccoglie dati aggregati e non personali — visualizzazioni di pagina, posizione approssimativa (livello paese o città), tipo di dispositivo e di browser e URL di provenienza — così possiamo vedere quali pagine sono utili e come arrivano i visitatori.',
          `I dati statistici non vengono usati per identificarti e non abbiamo attivato né le funzionalità pubblicitarie di Google Analytics né Google Signals. Puoi disattivare Google Analytics su tutti i siti installando il ${gaOptOut('componente aggiuntivo del browser per la disattivazione di Google Analytics')}.`,
        ],
      },
      {
        heading: 'Pubblicità',
        paragraphs: [
          'Questo sito mostra annunci tramite Google AdSense, un servizio pubblicitario fornito da Google LLC.',
          'Google e i suoi partner di tecnologia pubblicitaria utilizzano cookie e tecnologie simili per pubblicare annunci, misurarne il rendimento e — ove consentito — personalizzare gli annunci che vedi in base alle tue visite precedenti a questo sito e ad altri. Il cookie pubblicitario di Google (incluso il cookie DoubleClick) consente a Google e ai suoi partner di mostrarti annunci sul web.',
          `Puoi rivedere o disattivare la personalizzazione degli annunci nelle ${ADS_SETTINGS('Impostazioni annunci di Google')}. Puoi anche rinunciare alla pubblicità personalizzata dei fornitori aderenti su ${ADS_ABOUT('aboutads.info/choices')} e, in Europa, su ${ADS_EU('youronlinechoices.eu')}.`,
          `Nello Spazio economico europeo, nel Regno Unito e in Svizzera, gli annunci personalizzati vengono mostrati solo con il tuo consenso. L’elenco dei fornitori di tecnologia pubblicitaria di Google e il modo in cui usano i dati è disponibile su ${GOOGLE_PARTNER_SITES}.`,
        ],
      },
      {
        heading: 'Servizi di terze parti',
        paragraphs: [
          `Oltre a Google Analytics e Google AdSense descritti sopra, il sito carica i caratteri da Google Fonts; quando il tuo browser richiede questi caratteri, Google può registrare la richiesta. Puoi consultare le pratiche di Google in materia di privacy su ${GOOGLE_PRIVACY}.`,
          'Non integriamo lettori video di terze parti né widget di social media.',
        ],
      },
      {
        heading: 'Cookie',
        paragraphs: [
          'Questo sito e i suoi fornitori utilizzano cookie. Google Analytics imposta cookie per misurare il traffico aggregato; Google AdSense e i suoi partner impostano cookie per pubblicare annunci, limitare quante volte vedi lo stesso annuncio e — con il consenso ove richiesto — personalizzare gli annunci.',
          'Puoi bloccare o eliminare i cookie dalle impostazioni del browser in qualsiasi momento. Bloccare i cookie non elimina gli annunci, ma quelli che vedi potrebbero essere meno pertinenti.',
        ],
      },
      {
        heading: 'Link esterni',
        paragraphs: [
          'Questo sito rimanda a fonti esterne, tra cui USDA FoodData Central e le pubblicazioni dell’USDA. Non siamo responsabili delle pratiche sulla privacy né dei contenuti di quei siti. Sulle loro piattaforme valgono le rispettive informative.',
        ],
      },
      {
        heading: 'Privacy dei minori',
        paragraphs: [
          'Questo sito non è rivolto a minori di 13 anni e non raccoglie consapevolmente alcuna informazione che li riguardi. Gli annunci mostrati qui non vengono personalizzati per le persone che Google identifica come al di sotto dell’età applicabile.',
        ],
      },
      {
        heading: 'Modifiche a questa informativa',
        paragraphs: [
          'Possiamo aggiornare questa pagina di tanto in tanto. La data di "ultimo aggiornamento" in cima alla pagina indica la revisione più recente. Continuare a usare il sito dopo la pubblicazione delle modifiche equivale ad accettare l’informativa aggiornata.',
        ],
      },
      {
        heading: 'Contatti',
        paragraphs: [`Per domande sulla privacy, scrivici a ${EMAIL}.`],
      },
    ],
  },

};

export const TERMS: Record<Locale, LegalPage> = {
  en: {
    metaTitle: 'Terms and Conditions | Raw to Cooked Calculator',
    metaDescription:
      'Terms and conditions for rawtocookedcalculator.com. Cooking yield data is sourced from USDA and provided for informational purposes — not medical or dietary advice.',
    eyebrow: 'Legal',
    heading: 'Terms and Conditions',
    lastUpdatedLabel: 'Last updated',
    lastUpdated: 'August 31, 2026',
    sections: [
      {
        heading: 'Agreement to terms',
        paragraphs: [
          'By accessing or using rawtocookedcalculator.com, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the site. We reserve the right to update these terms at any time; continued use of the site after changes are posted constitutes acceptance.',
        ],
      },
      {
        heading: 'Use of the site',
        paragraphs: [
          'Raw to Cooked Calculator is a free tool for personal, non-commercial use. You may use the calculator and share its URL freely. You may not scrape, reproduce, or republish the site’s content in bulk without permission.',
          'The site must not be used for any unlawful purpose or in any way that could damage, disable, or impair its operation.',
        ],
      },
      {
        heading: 'Informational purposes only',
        paragraphs: [
          'All content on this site — including yield percentages, macro calculations, and educational material — is provided for general informational purposes only. It is not intended to replace professional nutritional assessment or dietary planning.',
          `${strong('Nothing on this site constitutes medical, dietary, or nutritional advice.')} If you have specific health conditions, dietary restrictions, or medical needs, consult a qualified healthcare professional or registered dietitian before making dietary changes based on information from this site.`,
        ],
      },
      {
        heading: 'Data accuracy and limitations',
        paragraphs: [
          'Yield percentages are sourced from USDA publications and represent research-based averages, not guarantees for any specific piece of food. Actual cooking results vary by cut, size, starting moisture content, and how precisely a cooking method is followed.',
          'Each food\'s yield figure is drawn from a named, published source — a USDA publication in nearly every case — and that source is shown on the food\'s page. No figure relies on an informal or undisclosed estimate.',
          'While we make reasonable efforts to ensure accuracy, we do not warrant that all data is complete, current, or error-free. USDA publishes updates to its databases periodically; there may be a lag before those updates are reflected here.',
        ],
      },
      {
        heading: 'No warranties',
        paragraphs: [
          'This site is provided "as is" and "as available" without any warranty of any kind, express or implied. We make no guarantee about the completeness, accuracy, reliability, suitability, or availability of the site, its content, or its calculations for any purpose.',
        ],
      },
      {
        heading: 'Limitation of liability',
        paragraphs: [
          'To the fullest extent permitted by law, Raw to Cooked Calculator and its operators shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of — or inability to use — this site or its calculations. Your use of the site is at your own risk.',
        ],
      },
      {
        heading: 'Intellectual property',
        paragraphs: [
          'The USDA data used on this site is in the public domain. Original site content — including editorial copy, page structure, and code — is the property of Raw to Cooked Calculator. Underlying nutritional data is sourced from USDA and is not claimed as proprietary.',
        ],
      },
      {
        heading: 'External links',
        paragraphs: [
          'This site may link to external websites such as USDA FoodData Central. We are not responsible for the content, accuracy, or privacy practices of any external site. Links do not constitute endorsement.',
        ],
      },
      {
        heading: 'Governing law',
        paragraphs: [
          'These terms are governed by and construed in accordance with applicable law. Any disputes arising from use of this site shall be subject to the exclusive jurisdiction of the competent courts in the applicable territory.',
        ],
      },
      {
        heading: 'Questions',
        paragraphs: [`If you have questions about these terms, email ${EMAIL}.`],
      },
    ],
  },

  es: {
    metaTitle: 'Términos y condiciones | Calculadora Crudo a Cocido',
    metaDescription:
      'Términos y condiciones de rawtocookedcalculator.com. Los datos de rendimiento proceden del USDA y se ofrecen con fines informativos: no son consejo médico ni dietético.',
    eyebrow: 'Legal',
    heading: 'Términos y condiciones',
    lastUpdatedLabel: 'Última actualización',
    lastUpdated: '31 de agosto de 2026',
    sections: [
      {
        heading: 'Aceptación de los términos',
        paragraphs: [
          'Al acceder a rawtocookedcalculator.com o utilizarlo, aceptas quedar vinculado por estos Términos y condiciones. Si no estás de acuerdo, por favor no uses el sitio. Nos reservamos el derecho de actualizar estos términos en cualquier momento; seguir usando el sitio después de publicarse los cambios implica su aceptación.',
        ],
      },
      {
        heading: 'Uso del sitio',
        paragraphs: [
          'La Calculadora Crudo a Cocido es una herramienta gratuita para uso personal y no comercial. Puedes usar la calculadora y compartir su URL libremente. No puedes extraer de forma automatizada, reproducir ni republicar el contenido del sitio de forma masiva sin permiso.',
          'El sitio no debe utilizarse con ningún fin ilícito ni de ninguna manera que pueda dañar, inutilizar o perjudicar su funcionamiento.',
        ],
      },
      {
        heading: 'Solo con fines informativos',
        paragraphs: [
          'Todo el contenido de este sitio —incluidos los porcentajes de rendimiento, los cálculos de macros y el material divulgativo— se ofrece únicamente con fines informativos generales. No pretende sustituir una valoración nutricional profesional ni una planificación dietética.',
          `${strong('Nada en este sitio constituye consejo médico, dietético ni nutricional.')} Si tienes condiciones de salud concretas, restricciones alimentarias o necesidades médicas, consulta a un profesional sanitario cualificado o a un dietista-nutricionista colegiado antes de hacer cambios en tu alimentación basándote en la información de este sitio.`,
        ],
      },
      {
        heading: 'Exactitud y limitaciones de los datos',
        paragraphs: [
          'Los porcentajes de rendimiento proceden de publicaciones del USDA y representan promedios basados en investigación, no garantías para ninguna pieza concreta de alimento. Los resultados reales varían según el corte, el tamaño, la humedad inicial y la precisión con que se siga el método de cocción.',
          'La cifra de rendimiento de cada alimento procede de una fuente publicada y citada —una publicación del USDA en casi todos los casos— que se indica en la página del alimento. Ninguna cifra se basa en una estimación informal o no divulgada.',
          'Aunque hacemos esfuerzos razonables por garantizar la exactitud, no garantizamos que todos los datos sean completos, actuales o estén libres de errores. El USDA actualiza sus bases de datos periódicamente y puede pasar un tiempo hasta que esas actualizaciones se reflejen aquí.',
        ],
      },
      {
        heading: 'Ausencia de garantías',
        paragraphs: [
          'Este sitio se proporciona «tal cual» y «según disponibilidad», sin garantía de ningún tipo, expresa o implícita. No ofrecemos ninguna garantía sobre la integridad, exactitud, fiabilidad, idoneidad o disponibilidad del sitio, su contenido o sus cálculos para ningún propósito.',
        ],
      },
      {
        heading: 'Limitación de responsabilidad',
        paragraphs: [
          'En la máxima medida permitida por la ley, la Calculadora Crudo a Cocido y sus operadores no serán responsables de daños directos, indirectos, incidentales, consecuentes o punitivos derivados del uso —o de la imposibilidad de uso— de este sitio o de sus cálculos. Usas el sitio bajo tu propia responsabilidad.',
        ],
      },
      {
        heading: 'Propiedad intelectual',
        paragraphs: [
          'Los datos del USDA utilizados en este sitio son de dominio público. El contenido original del sitio —incluidos los textos editoriales, la estructura de las páginas y el código— es propiedad de la Calculadora Crudo a Cocido. Los datos nutricionales subyacentes proceden del USDA y no se reclaman como propios.',
        ],
      },
      {
        heading: 'Enlaces externos',
        paragraphs: [
          'Este sitio puede enlazar a webs externas como USDA FoodData Central. No somos responsables del contenido, la exactitud ni las prácticas de privacidad de ningún sitio externo. Los enlaces no implican respaldo alguno.',
        ],
      },
      {
        heading: 'Legislación aplicable',
        paragraphs: [
          'Estos términos se rigen e interpretan conforme a la legislación aplicable. Cualquier controversia derivada del uso de este sitio quedará sometida a la jurisdicción exclusiva de los tribunales competentes del territorio aplicable.',
        ],
      },
      {
        heading: 'Dudas',
        paragraphs: [`Si tienes dudas sobre estos términos, escribe a ${EMAIL}.`],
      },
    ],
  },

  fr: {
    metaTitle: 'Conditions générales | Calculateur Cru-Cuit',
    metaDescription:
      'Conditions générales de rawtocookedcalculator.com. Les rendements proviennent de l’USDA et sont fournis à titre informatif — il ne s’agit pas d’un avis médical ou diététique.',
    eyebrow: 'Mentions légales',
    heading: 'Conditions générales',
    lastUpdatedLabel: 'Dernière mise à jour',
    lastUpdated: '31 août 2026',
    sections: [
      {
        heading: 'Acceptation des conditions',
        paragraphs: [
          'En accédant à rawtocookedcalculator.com ou en l’utilisant, vous acceptez d’être lié par les présentes conditions générales. Si vous ne les acceptez pas, veuillez ne pas utiliser le site. Nous nous réservons le droit de modifier ces conditions à tout moment ; poursuivre l’utilisation du site après publication des modifications vaut acceptation.',
        ],
      },
      {
        heading: 'Utilisation du site',
        paragraphs: [
          'Le Calculateur Cru-Cuit est un outil gratuit destiné à un usage personnel et non commercial. Vous pouvez utiliser le calculateur et partager son adresse librement. Vous ne pouvez pas extraire automatiquement, reproduire ou republier en masse le contenu du site sans autorisation.',
          'Le site ne doit être utilisé à aucune fin illicite, ni d’une manière susceptible d’endommager, de désactiver ou de perturber son fonctionnement.',
        ],
      },
      {
        heading: 'Vocation purement informative',
        paragraphs: [
          'L’ensemble du contenu de ce site — rendements, calculs de macros et contenus pédagogiques compris — est fourni à titre d’information générale uniquement. Il n’a pas vocation à remplacer une évaluation nutritionnelle professionnelle ou un plan diététique.',
          `${strong('Rien sur ce site ne constitue un avis médical, diététique ou nutritionnel.')} Si vous présentez des problèmes de santé particuliers, des restrictions alimentaires ou des besoins médicaux, consultez un professionnel de santé qualifié ou un diététicien-nutritionniste avant de modifier votre alimentation sur la base des informations de ce site.`,
        ],
      },
      {
        heading: 'Exactitude et limites des données',
        paragraphs: [
          'Les rendements proviennent de publications de l’USDA et constituent des moyennes issues de la recherche, non des garanties pour un morceau précis. Les résultats réels varient selon le morceau, la taille, la teneur en eau initiale et la rigueur avec laquelle le mode de cuisson est suivi.',
          'Le rendement de chaque aliment provient d’une source publiée et nommée — une publication de l’USDA dans la quasi-totalité des cas — indiquée sur la page de l’aliment. Aucun chiffre ne repose sur une estimation informelle ou non divulguée.',
          'Bien que nous fassions des efforts raisonnables pour garantir l’exactitude, nous ne garantissons pas que toutes les données soient complètes, à jour ou exemptes d’erreurs. L’USDA met ses bases de données à jour périodiquement ; un délai peut s’écouler avant que ces mises à jour ne soient répercutées ici.',
        ],
      },
      {
        heading: 'Absence de garantie',
        paragraphs: [
          'Ce site est fourni « en l’état » et « selon disponibilité », sans garantie d’aucune sorte, expresse ou implicite. Nous n’offrons aucune garantie quant à l’exhaustivité, l’exactitude, la fiabilité, l’adéquation ou la disponibilité du site, de son contenu ou de ses calculs, à quelque fin que ce soit.',
        ],
      },
      {
        heading: 'Limitation de responsabilité',
        paragraphs: [
          'Dans toute la mesure permise par la loi, le Calculateur Cru-Cuit et ses exploitants ne sauraient être tenus responsables de tout dommage direct, indirect, accessoire, consécutif ou punitif résultant de l’utilisation — ou de l’impossibilité d’utiliser — ce site ou ses calculs. Vous utilisez le site à vos propres risques.',
        ],
      },
      {
        heading: 'Propriété intellectuelle',
        paragraphs: [
          'Les données de l’USDA utilisées sur ce site relèvent du domaine public. Le contenu original du site — textes éditoriaux, structure des pages et code compris — est la propriété du Calculateur Cru-Cuit. Les données nutritionnelles sous-jacentes proviennent de l’USDA et ne font l’objet d’aucune revendication de propriété.',
        ],
      },
      {
        heading: 'Liens externes',
        paragraphs: [
          'Ce site peut renvoyer vers des sites externes tels que USDA FoodData Central. Nous ne sommes responsables ni du contenu, ni de l’exactitude, ni des pratiques de confidentialité de ces sites. Un lien ne vaut pas approbation.',
        ],
      },
      {
        heading: 'Droit applicable',
        paragraphs: [
          'Les présentes conditions sont régies et interprétées conformément au droit applicable. Tout litige né de l’utilisation de ce site relèvera de la compétence exclusive des tribunaux compétents du territoire applicable.',
        ],
      },
      {
        heading: 'Questions',
        paragraphs: [`Pour toute question sur ces conditions, écrivez à ${EMAIL}.`],
      },
    ],
  },

  de: {
    metaTitle: 'Allgemeine Geschäftsbedingungen | Roh-zu-Gegart-Rechner',
    metaDescription:
      'AGB für rawtocookedcalculator.com. Die Garausbeuten stammen vom USDA und dienen ausschließlich der Information — sie sind keine medizinische oder diätetische Beratung.',
    eyebrow: 'Rechtliches',
    heading: 'Allgemeine Geschäftsbedingungen',
    lastUpdatedLabel: 'Zuletzt aktualisiert',
    lastUpdated: '31. August 2026',
    sections: [
      {
        heading: 'Zustimmung zu den Bedingungen',
        paragraphs: [
          'Mit dem Zugriff auf rawtocookedcalculator.com oder dessen Nutzung erklärst du dich mit diesen Allgemeinen Geschäftsbedingungen einverstanden. Wenn du nicht einverstanden bist, nutze die Seite bitte nicht. Wir behalten uns vor, diese Bedingungen jederzeit zu aktualisieren; die weitere Nutzung der Seite nach Veröffentlichung von Änderungen gilt als Zustimmung.',
        ],
      },
      {
        heading: 'Nutzung der Seite',
        paragraphs: [
          'Der Roh-zu-Gegart-Rechner ist ein kostenloses Werkzeug für den persönlichen, nicht kommerziellen Gebrauch. Du darfst den Rechner nutzen und seine Adresse frei teilen. Ohne Erlaubnis darfst du die Inhalte der Seite nicht automatisiert auslesen, vervielfältigen oder in großem Umfang erneut veröffentlichen.',
          'Die Seite darf nicht für rechtswidrige Zwecke genutzt werden und nicht auf eine Weise, die ihren Betrieb beschädigen, stören oder beeinträchtigen könnte.',
        ],
      },
      {
        heading: 'Ausschließlich zu Informationszwecken',
        paragraphs: [
          'Sämtliche Inhalte dieser Seite — einschließlich Ausbeuten, Makroberechnungen und erläuternder Texte — dienen ausschließlich der allgemeinen Information. Sie sollen keine professionelle Ernährungsbewertung oder Diätplanung ersetzen.',
          `${strong('Nichts auf dieser Seite stellt eine medizinische, diätetische oder ernährungsbezogene Beratung dar.')} Wenn du bestimmte Erkrankungen, Ernährungseinschränkungen oder medizinische Bedürfnisse hast, wende dich an qualifiziertes medizinisches Fachpersonal oder eine Ernährungsfachkraft, bevor du deine Ernährung auf Basis der Informationen dieser Seite umstellst.`,
        ],
      },
      {
        heading: 'Datengenauigkeit und Grenzen',
        paragraphs: [
          'Die Ausbeuten stammen aus USDA-Veröffentlichungen und sind forschungsbasierte Durchschnittswerte, keine Zusicherungen für ein bestimmtes Stück Lebensmittel. Die tatsächlichen Ergebnisse hängen von Teilstück, Größe, Ausgangsfeuchte und davon ab, wie genau eine Garmethode eingehalten wird.',
          'Der Ausbeutewert jedes Lebensmittels stammt aus einer benannten, veröffentlichten Quelle — in nahezu allen Fällen einer USDA-Veröffentlichung —, die auf der Seite des Lebensmittels angegeben ist. Kein Wert beruht auf einer informellen oder nicht offengelegten Schätzung.',
          'Wir bemühen uns nach Kräften um Genauigkeit, gewährleisten aber nicht, dass alle Daten vollständig, aktuell oder fehlerfrei sind. Das USDA aktualisiert seine Datenbanken regelmäßig; es kann eine Weile dauern, bis solche Aktualisierungen hier berücksichtigt sind.',
        ],
      },
      {
        heading: 'Keine Gewährleistung',
        paragraphs: [
          'Diese Seite wird „wie besehen“ und „wie verfügbar“ bereitgestellt, ohne jegliche ausdrückliche oder stillschweigende Gewährleistung. Wir übernehmen keine Garantie für Vollständigkeit, Richtigkeit, Zuverlässigkeit, Eignung oder Verfügbarkeit der Seite, ihrer Inhalte oder ihrer Berechnungen für irgendeinen Zweck.',
        ],
      },
      {
        heading: 'Haftungsbeschränkung',
        paragraphs: [
          'Soweit gesetzlich zulässig, haften der Roh-zu-Gegart-Rechner und seine Betreiber nicht für unmittelbare, mittelbare, beiläufige, Folge- oder Strafschäden, die aus der Nutzung — oder der Unmöglichkeit der Nutzung — dieser Seite oder ihrer Berechnungen entstehen. Die Nutzung der Seite erfolgt auf eigenes Risiko.',
        ],
      },
      {
        heading: 'Geistiges Eigentum',
        paragraphs: [
          'Die auf dieser Seite verwendeten USDA-Daten sind gemeinfrei. Die eigenen Inhalte der Seite — einschließlich redaktioneller Texte, Seitenstruktur und Code — sind Eigentum des Roh-zu-Gegart-Rechners. Die zugrunde liegenden Nährwertdaten stammen vom USDA und werden nicht als eigenes Eigentum beansprucht.',
        ],
      },
      {
        heading: 'Externe Links',
        paragraphs: [
          'Diese Seite kann auf externe Websites wie USDA FoodData Central verlinken. Für Inhalt, Richtigkeit oder Datenschutzpraktiken externer Seiten sind wir nicht verantwortlich. Links stellen keine Empfehlung dar.',
        ],
      },
      {
        heading: 'Anwendbares Recht',
        paragraphs: [
          'Diese Bedingungen unterliegen dem anwendbaren Recht und sind entsprechend auszulegen. Für Streitigkeiten aus der Nutzung dieser Seite sind ausschließlich die zuständigen Gerichte des maßgeblichen Gebiets zuständig.',
        ],
      },
      {
        heading: 'Fragen',
        paragraphs: [`Bei Fragen zu diesen Bedingungen schreib an ${EMAIL}.`],
      },
    ],
  },

  pt: {
    metaTitle: 'Termos e condições | Calculadora de Cru para Cozido',
    metaDescription:
      'Termos e condições do rawtocookedcalculator.com. Os dados de rendimento vêm do USDA e são fornecidos para fins informativos — não são orientação médica nem dietética.',
    eyebrow: 'Jurídico',
    heading: 'Termos e condições',
    lastUpdatedLabel: 'Última atualização',
    lastUpdated: '31 de agosto de 2026',
    sections: [
      {
        heading: 'Aceitação dos termos',
        paragraphs: [
          'Ao acessar ou usar o rawtocookedcalculator.com, você concorda em ficar vinculado a estes Termos e condições. Se não concordar, por favor não use o site. Reservamo-nos o direito de atualizar estes termos a qualquer momento; continuar usando o site depois que as alterações forem publicadas significa aceitá-las.',
        ],
      },
      {
        heading: 'Uso do site',
        paragraphs: [
          'A Calculadora de Cru para Cozido é uma ferramenta gratuita para uso pessoal e não comercial. Você pode usar a calculadora e compartilhar seu endereço livremente. Não é permitido raspar (scraping), reproduzir ou republicar o conteúdo do site em massa sem autorização.',
          'O site não pode ser usado para qualquer finalidade ilícita nem de forma que possa danificar, desabilitar ou prejudicar seu funcionamento.',
        ],
      },
      {
        heading: 'Apenas para fins informativos',
        paragraphs: [
          'Todo o conteúdo deste site — incluindo percentuais de rendimento, cálculos de macros e material educativo — é fornecido apenas para fins informativos gerais. Não pretende substituir avaliação nutricional profissional ou planejamento dietético.',
          `${strong('Nada neste site constitui orientação médica, dietética ou nutricional.')} Se você tem condições de saúde específicas, restrições alimentares ou necessidades médicas, consulte um profissional de saúde qualificado ou nutricionista registrado antes de fazer mudanças alimentares com base nas informações deste site.`,
        ],
      },
      {
        heading: 'Precisão e limites dos dados',
        paragraphs: [
          'Os percentuais de rendimento vêm de publicações do USDA e representam médias baseadas em pesquisa, não garantias para qualquer peça específica de alimento. Os resultados reais variam conforme o corte, o tamanho, o teor inicial de umidade e o rigor com que o método de cozimento é seguido.',
          'O número de rendimento de cada alimento vem de uma fonte publicada e identificada — uma publicação do USDA em quase todos os casos — indicada na página do alimento. Nenhum número se baseia em uma estimativa informal ou não divulgada.',
          'Embora façamos esforços razoáveis para garantir a precisão, não garantimos que todos os dados sejam completos, atuais ou livres de erros. O USDA atualiza suas bases de dados periodicamente e pode haver um intervalo até que essas atualizações apareçam aqui.',
        ],
      },
      {
        heading: 'Ausência de garantias',
        paragraphs: [
          'Este site é fornecido "no estado em que se encontra" e "conforme disponível", sem garantia de qualquer natureza, expressa ou implícita. Não oferecemos nenhuma garantia quanto à integridade, precisão, confiabilidade, adequação ou disponibilidade do site, de seu conteúdo ou de seus cálculos para qualquer finalidade.',
        ],
      },
      {
        heading: 'Limitação de responsabilidade',
        paragraphs: [
          'Na máxima extensão permitida por lei, a Calculadora de Cru para Cozido e seus operadores não serão responsáveis por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso — ou da impossibilidade de uso — deste site ou de seus cálculos. O uso do site é por sua conta e risco.',
        ],
      },
      {
        heading: 'Propriedade intelectual',
        paragraphs: [
          'Os dados do USDA usados neste site são de domínio público. O conteúdo original do site — incluindo textos editoriais, estrutura das páginas e código — é propriedade da Calculadora de Cru para Cozido. Os dados nutricionais subjacentes vêm do USDA e não são reivindicados como proprietários.',
        ],
      },
      {
        heading: 'Links externos',
        paragraphs: [
          'Este site pode direcionar a sites externos, como a USDA FoodData Central. Não somos responsáveis pelo conteúdo, pela precisão ou pelas práticas de privacidade de qualquer site externo. Os links não constituem endosso.',
        ],
      },
      {
        heading: 'Lei aplicável',
        paragraphs: [
          'Estes termos são regidos e interpretados de acordo com a legislação aplicável. Quaisquer disputas decorrentes do uso deste site ficarão sujeitas à jurisdição exclusiva dos tribunais competentes do território aplicável.',
        ],
      },
      {
        heading: 'Dúvidas',
        paragraphs: [`Se tiver dúvidas sobre estes termos, escreva para ${EMAIL}.`],
      },
    ],
  },



  it: {
    metaTitle: 'Termini e condizioni | Calcolatore Crudo-Cotto',
    metaDescription:
      'Termini e condizioni di rawtocookedcalculator.com. I dati sulle rese provengono dall’USDA e hanno finalità informativa — non costituiscono consulenza medica o dietetica.',
    eyebrow: 'Note legali',
    heading: 'Termini e condizioni',
    lastUpdatedLabel: 'Ultimo aggiornamento',
    lastUpdated: '31 agosto 2026',
    sections: [
      {
        heading: 'Accettazione dei termini',
        paragraphs: [
          'Accedendo a rawtocookedcalculator.com o utilizzandolo, accetti di essere vincolato dai presenti Termini e condizioni. Se non li accetti, ti invitiamo a non usare il sito. Ci riserviamo il diritto di aggiornare questi termini in qualsiasi momento; continuare a usare il sito dopo la pubblicazione delle modifiche equivale ad accettarle.',
        ],
      },
      {
        heading: 'Uso del sito',
        paragraphs: [
          'Il Calcolatore Crudo-Cotto è uno strumento gratuito per uso personale e non commerciale. Puoi usare il calcolatore e condividerne liberamente l’indirizzo. Non puoi effettuare scraping, riprodurre o ripubblicare in blocco i contenuti del sito senza autorizzazione.',
          'Il sito non deve essere utilizzato per finalità illecite né in modi che possano danneggiarne, disabilitarne o comprometterne il funzionamento.',
        ],
      },
      {
        heading: 'Solo a scopo informativo',
        paragraphs: [
          'Tutti i contenuti di questo sito — comprese le percentuali di resa, i calcoli dei macro e il materiale divulgativo — sono forniti a solo scopo informativo generale. Non intendono sostituire una valutazione nutrizionale professionale o una pianificazione dietetica.',
          `${strong('Nulla in questo sito costituisce consulenza medica, dietetica o nutrizionale.')} In presenza di condizioni di salute particolari, restrizioni alimentari o esigenze mediche, consulta un professionista sanitario qualificato o un dietista prima di modificare la tua alimentazione sulla base delle informazioni presenti qui.`,
        ],
      },
      {
        heading: 'Accuratezza e limiti dei dati',
        paragraphs: [
          'Le percentuali di resa provengono da pubblicazioni USDA e rappresentano medie basate su ricerche, non garanzie per un singolo pezzo di alimento. I risultati reali variano in base al taglio, alla pezzatura, all’umidità iniziale e alla precisione con cui viene seguito il metodo di cottura.',
          'Il valore di resa di ogni alimento proviene da una fonte pubblicata e citata — una pubblicazione USDA in quasi tutti i casi — indicata nella pagina dell’alimento. Nessun valore si basa su una stima informale o non dichiarata.',
          'Pur adoperandoci ragionevolmente per garantire l’accuratezza, non garantiamo che tutti i dati siano completi, aggiornati o privi di errori. L’USDA aggiorna periodicamente i propri database; può quindi trascorrere del tempo prima che tali aggiornamenti si riflettano qui.',
        ],
      },
      {
        heading: 'Esclusione di garanzie',
        paragraphs: [
          'Questo sito è fornito "così com’è" e "come disponibile", senza garanzie di alcun tipo, espresse o implicite. Non forniamo alcuna garanzia circa la completezza, l’accuratezza, l’affidabilità, l’idoneità o la disponibilità del sito, dei suoi contenuti o dei suoi calcoli per qualsiasi finalità.',
        ],
      },
      {
        heading: 'Limitazione di responsabilità',
        paragraphs: [
          'Nella misura massima consentita dalla legge, il Calcolatore Crudo-Cotto e i suoi gestori non saranno responsabili per danni diretti, indiretti, incidentali, consequenziali o punitivi derivanti dall’uso — o dall’impossibilità di usare — questo sito o i suoi calcoli. L’uso del sito avviene a tuo rischio.',
        ],
      },
      {
        heading: 'Proprietà intellettuale',
        paragraphs: [
          'I dati USDA utilizzati su questo sito sono di pubblico dominio. I contenuti originali del sito — inclusi testi redazionali, struttura delle pagine e codice — sono di proprietà del Calcolatore Crudo-Cotto. I dati nutrizionali sottostanti provengono dall’USDA e non sono rivendicati come proprietari.',
        ],
      },
      {
        heading: 'Link esterni',
        paragraphs: [
          'Questo sito può rimandare a siti esterni come USDA FoodData Central. Non siamo responsabili dei contenuti, dell’accuratezza o delle pratiche sulla privacy di alcun sito esterno. I link non costituiscono un’approvazione.',
        ],
      },
      {
        heading: 'Legge applicabile',
        paragraphs: [
          'I presenti termini sono regolati e interpretati in conformità alla legge applicabile. Eventuali controversie derivanti dall’uso di questo sito saranno soggette alla giurisdizione esclusiva dei tribunali competenti del territorio applicabile.',
        ],
      },
      {
        heading: 'Domande',
        paragraphs: [`Per domande su questi termini, scrivi a ${EMAIL}.`],
      },
    ],
  },

};

export function getPrivacy(locale: Locale): LegalPage {
  return PRIVACY[locale] ?? PRIVACY.en;
}

export function getTerms(locale: Locale): LegalPage {
  return TERMS[locale] ?? TERMS.en;
}
