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

export const PRIVACY: Record<Locale, LegalPage> = {
  en: {
    metaTitle: 'Privacy Policy | Raw to Cooked Calculator',
    metaDescription:
      'Privacy policy for rawtocookedcalculator.com. No accounts, no personal data collection. Learn exactly what data this site does and does not collect.',
    eyebrow: 'Legal',
    heading: 'Privacy Policy',
    lastUpdatedLabel: 'Last updated',
    lastUpdated: 'August 31, 2026',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Raw to Cooked Calculator is a static website. We do not have user accounts, we do not collect personal information through forms, and we do not sell or share data with third parties for commercial purposes. This page explains what minimal data interactions do occur when you use the site.',
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
          'This site may use privacy-respecting analytics tools to understand aggregate traffic patterns — for example, which pages are visited most often and what devices visitors use. If used, these tools collect non-personal, aggregated data such as page views, approximate geographic region (country/city level), device type, and referring URL.',
          `No analytics data is linked to individual identities. If we use Google Analytics, you can opt out using the ${gaOptOut('Google Analytics Opt-Out browser add-on')}.`,
        ],
      },
      {
        heading: 'Third-party services',
        paragraphs: [
          `The site loads fonts from Google Fonts. When your browser requests these fonts, Google may log the request. You can review Google's privacy practices at ${GOOGLE_PRIVACY}.`,
          'We do not embed third-party video players, social media widgets, or advertising networks.',
        ],
      },
      {
        heading: 'Cookies',
        paragraphs: [
          'This site does not set first-party cookies. If analytics are active, the analytics provider may set its own cookies to distinguish unique visits. You can block or delete cookies through your browser settings at any time.',
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
          'This site is not directed at children under 13 and does not knowingly collect any information from children.',
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
      'Política de privacidad de rawtocookedcalculator.com. Sin cuentas ni recopilación de datos personales. Consulta exactamente qué datos recoge y qué no recoge este sitio.',
    eyebrow: 'Legal',
    heading: 'Política de privacidad',
    lastUpdatedLabel: 'Última actualización',
    lastUpdated: '31 de agosto de 2026',
    sections: [
      {
        heading: 'Resumen',
        paragraphs: [
          'La Calculadora Crudo a Cocido es un sitio web estático. No tenemos cuentas de usuario, no recopilamos información personal mediante formularios y no vendemos ni compartimos datos con terceros con fines comerciales. Esta página explica las escasas interacciones de datos que sí se producen cuando usas el sitio.',
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
          'Este sitio puede usar herramientas de analítica respetuosas con la privacidad para entender patrones de tráfico agregados: por ejemplo, qué páginas se visitan más y qué dispositivos usan los visitantes. En caso de usarse, estas herramientas recogen datos agregados y no personales, como páginas vistas, región geográfica aproximada (nivel de país o ciudad), tipo de dispositivo y URL de procedencia.',
          `Ningún dato de analítica se vincula a identidades individuales. Si usamos Google Analytics, puedes darte de baja con el ${gaOptOut('complemento de inhabilitación para navegadores de Google Analytics')}.`,
        ],
      },
      {
        heading: 'Servicios de terceros',
        paragraphs: [
          `El sitio carga tipografías desde Google Fonts. Cuando tu navegador solicita esas fuentes, Google puede registrar la petición. Puedes consultar las prácticas de privacidad de Google en ${GOOGLE_PRIVACY}.`,
          'No incrustamos reproductores de vídeo de terceros, widgets de redes sociales ni redes publicitarias.',
        ],
      },
      {
        heading: 'Cookies',
        paragraphs: [
          'Este sitio no instala cookies propias. Si la analítica está activa, el proveedor de analítica puede instalar sus propias cookies para distinguir visitas únicas. Puedes bloquear o eliminar las cookies desde la configuración de tu navegador en cualquier momento.',
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
          'Este sitio no está dirigido a menores de 13 años y no recopila conscientemente ninguna información de menores.',
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
      'Politique de confidentialité de rawtocookedcalculator.com. Pas de compte, pas de collecte de données personnelles. Voyez précisément ce que ce site collecte et ne collecte pas.',
    eyebrow: 'Mentions légales',
    heading: 'Politique de confidentialité',
    lastUpdatedLabel: 'Dernière mise à jour',
    lastUpdated: '31 août 2026',
    sections: [
      {
        heading: 'Aperçu',
        paragraphs: [
          'Le Calculateur Cru-Cuit est un site web statique. Il n’y a pas de comptes utilisateur, nous ne collectons pas d’informations personnelles via des formulaires et nous ne vendons ni ne partageons de données avec des tiers à des fins commerciales. Cette page décrit les rares interactions de données qui ont effectivement lieu lorsque vous utilisez le site.',
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
          'Ce site peut recourir à des outils de mesure d’audience respectueux de la vie privée afin de comprendre des tendances de trafic agrégées : par exemple, quelles pages sont les plus consultées et quels appareils utilisent les visiteurs. Le cas échéant, ces outils collectent des données agrégées et non personnelles telles que les pages vues, la région géographique approximative (niveau pays ou ville), le type d’appareil et l’URL de provenance.',
          `Aucune donnée de mesure d’audience n’est reliée à une identité individuelle. Si nous utilisons Google Analytics, vous pouvez vous y opposer grâce au ${gaOptOut('module complémentaire de désactivation de Google Analytics')}.`,
        ],
      },
      {
        heading: 'Services tiers',
        paragraphs: [
          `Le site charge des polices depuis Google Fonts. Lorsque votre navigateur demande ces polices, Google peut en enregistrer la requête. Vous pouvez consulter les pratiques de confidentialité de Google sur ${GOOGLE_PRIVACY}.`,
          'Nous n’intégrons ni lecteurs vidéo tiers, ni widgets de réseaux sociaux, ni régies publicitaires.',
        ],
      },
      {
        heading: 'Cookies',
        paragraphs: [
          'Ce site ne dépose pas de cookies propriétaires. Si la mesure d’audience est active, le prestataire peut déposer ses propres cookies pour distinguer les visites uniques. Vous pouvez bloquer ou supprimer les cookies depuis les réglages de votre navigateur à tout moment.',
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
          'Ce site ne s’adresse pas aux enfants de moins de 13 ans et ne collecte sciemment aucune information les concernant.',
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
      'Datenschutzerklärung für rawtocookedcalculator.com. Keine Konten, keine Erhebung personenbezogener Daten. Hier steht genau, welche Daten diese Seite erhebt — und welche nicht.',
    eyebrow: 'Rechtliches',
    heading: 'Datenschutzerklärung',
    lastUpdatedLabel: 'Zuletzt aktualisiert',
    lastUpdated: '31. August 2026',
    sections: [
      {
        heading: 'Überblick',
        paragraphs: [
          'Der Roh-zu-Gegart-Rechner ist eine statische Website. Es gibt keine Benutzerkonten, wir erheben keine personenbezogenen Daten über Formulare und wir verkaufen oder teilen keine Daten zu kommerziellen Zwecken mit Dritten. Diese Seite erklärt, welche wenigen Datenvorgänge bei der Nutzung tatsächlich stattfinden.',
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
          'Diese Seite kann datenschutzfreundliche Analysewerkzeuge einsetzen, um aggregierte Zugriffsmuster zu verstehen — etwa welche Seiten am häufigsten aufgerufen werden und welche Geräte Besucher nutzen. Falls eingesetzt, erfassen diese Werkzeuge nicht personenbezogene, aggregierte Daten wie Seitenaufrufe, ungefähre geografische Region (Land- oder Stadtebene), Gerätetyp und verweisende URL.',
          `Analysedaten werden mit keiner einzelnen Person verknüpft. Falls wir Google Analytics einsetzen, kannst du der Erfassung mit dem ${gaOptOut('Google-Analytics-Deaktivierungs-Add-on für Browser')} widersprechen.`,
        ],
      },
      {
        heading: 'Dienste Dritter',
        paragraphs: [
          `Die Seite lädt Schriftarten von Google Fonts. Wenn dein Browser diese Schriften anfordert, kann Google die Anfrage protokollieren. Googles Datenschutzpraktiken kannst du unter ${GOOGLE_PRIVACY} einsehen.`,
          'Wir binden keine Videoplayer Dritter, keine Social-Media-Widgets und keine Werbenetzwerke ein.',
        ],
      },
      {
        heading: 'Cookies',
        paragraphs: [
          'Diese Seite setzt keine eigenen Cookies. Wenn die Analyse aktiv ist, kann der Analyseanbieter eigene Cookies setzen, um einzelne Besuche zu unterscheiden. Du kannst Cookies jederzeit über die Einstellungen deines Browsers blockieren oder löschen.',
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
          'Diese Seite richtet sich nicht an Kinder unter 13 Jahren und erhebt wissentlich keine Daten von Kindern.',
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
      'Política de privacidade do rawtocookedcalculator.com. Sem contas e sem coleta de dados pessoais. Veja exatamente quais dados este site coleta e quais não coleta.',
    eyebrow: 'Jurídico',
    heading: 'Política de privacidade',
    lastUpdatedLabel: 'Última atualização',
    lastUpdated: '31 de agosto de 2026',
    sections: [
      {
        heading: 'Visão geral',
        paragraphs: [
          'A Calculadora de Cru para Cozido é um site estático. Não temos contas de usuário, não coletamos informações pessoais por formulários e não vendemos nem compartilhamos dados com terceiros para fins comerciais. Esta página explica as poucas interações de dados que de fato acontecem quando você usa o site.',
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
          'Este site pode usar ferramentas de análise que respeitam a privacidade para entender padrões agregados de tráfego — por exemplo, quais páginas são mais visitadas e que dispositivos os visitantes usam. Quando usadas, essas ferramentas coletam dados agregados e não pessoais, como visualizações de página, região geográfica aproximada (nível de país ou cidade), tipo de dispositivo e URL de origem.',
          `Nenhum dado de análise é vinculado a identidades individuais. Se usarmos o Google Analytics, você pode recusar a coleta com o ${gaOptOut('complemento do navegador para desativação do Google Analytics')}.`,
        ],
      },
      {
        heading: 'Serviços de terceiros',
        paragraphs: [
          `O site carrega fontes do Google Fonts. Quando seu navegador solicita essas fontes, o Google pode registrar a requisição. Você pode consultar as práticas de privacidade do Google em ${GOOGLE_PRIVACY}.`,
          'Não incorporamos players de vídeo de terceiros, widgets de redes sociais ou redes de publicidade.',
        ],
      },
      {
        heading: 'Cookies',
        paragraphs: [
          'Este site não define cookies próprios. Se a análise estiver ativa, o provedor de análise pode definir os próprios cookies para distinguir visitas únicas. Você pode bloquear ou excluir cookies pelas configurações do navegador a qualquer momento.',
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
          'Este site não é dirigido a crianças menores de 13 anos e não coleta intencionalmente nenhuma informação de crianças.',
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

  ja: {
    metaTitle: 'プライバシーポリシー | 生・加熱後計算機',
    metaDescription:
      'rawtocookedcalculator.com のプライバシーポリシーです。アカウントも個人データの収集もありません。当サイトが取得する情報と取得しない情報を明記しています。',
    eyebrow: '法的事項',
    heading: 'プライバシーポリシー',
    lastUpdatedLabel: '最終更新日',
    lastUpdated: '2026年8月31日',
    sections: [
      {
        heading: '概要',
        paragraphs: [
          '生・加熱後計算機は静的なウェブサイトです。ユーザーアカウントはなく、フォームによる個人情報の収集も行わず、商業目的で第三者にデータを販売・共有することもありません。このページでは、サイトのご利用時に実際に発生するごく限られたデータのやり取りについて説明します。',
        ],
      },
      {
        heading: '取得する情報',
        paragraphs: [
          '当サイトでは、氏名、メールアドレス、その他の個人を特定できる情報を一切取得しません。登録フォーム、ログイン機能、コメント欄はいずれも設けていません。',
          '計算機のご利用時、すべての計算はお使いのブラウザ内で完結します。入力された値（食材、重量、計算結果）がサーバーに送信されることはありません。',
        ],
      },
      {
        heading: 'ブラウザへの保存',
        paragraphs: [
          `当サイトが保存する設定は、ライト／ダークモードの選択の1件のみで、お使いのブラウザの${LOCAL_STORAGE}に保存されます。このデータが端末の外に出ることはなく、いかなるサーバーにも送信されません。ブラウザのサイトデータを消去すれば、いつでも削除できます。`,
        ],
      },
      {
        heading: 'アクセス解析',
        paragraphs: [
          '当サイトでは、全体的なアクセス傾向（よく閲覧されているページ、訪問者の使用端末など）を把握するため、プライバシーに配慮した解析ツールを使用する場合があります。使用する場合に収集するのは、ページビュー、おおよその地域（国・都市レベル）、端末の種類、参照元URLなど、個人を特定しない集計データのみです。',
          `解析データが個人の身元と結び付けられることはありません。Google アナリティクスを使用する場合は、${gaOptOut('Google アナリティクス オプトアウト アドオン')}で無効化できます。`,
        ],
      },
      {
        heading: '第三者のサービス',
        paragraphs: [
          `当サイトは Google Fonts からフォントを読み込みます。ブラウザがフォントを要求する際、Google がそのリクエストを記録する場合があります。Google のプライバシーに関する取り扱いは ${GOOGLE_PRIVACY} でご確認いただけます。`,
          '第三者の動画プレーヤー、SNSウィジェット、広告ネットワークは一切埋め込んでいません。',
        ],
      },
      {
        heading: 'Cookie',
        paragraphs: [
          '当サイトはファーストパーティCookieを設定しません。解析が有効な場合、解析事業者が固有の訪問を区別するために独自のCookieを設定することがあります。Cookieはブラウザの設定からいつでもブロックまたは削除できます。',
        ],
      },
      {
        heading: '外部リンク',
        paragraphs: [
          '当サイトは USDA FoodData Central や USDA の刊行物などの外部サイトにリンクしています。これらのサイトのプライバシーの取り扱いや内容について、当方は責任を負いません。各プラットフォームでのデータ収集には、それぞれのポリシーが適用されます。',
        ],
      },
      {
        heading: '子どものプライバシー',
        paragraphs: [
          '当サイトは13歳未満の子どもを対象としておらず、子どもからの情報を意図的に収集することはありません。',
        ],
      },
      {
        heading: '本ポリシーの変更',
        paragraphs: [
          '本ページは随時更新することがあります。ページ上部の「最終更新日」が直近の改訂を示します。変更の掲載後もサイトのご利用を続けられた場合、更新後のポリシーに同意されたものとみなします。',
        ],
      },
      {
        heading: 'お問い合わせ',
        paragraphs: [`プライバシーに関するご質問は ${EMAIL} までメールでお寄せください。`],
      },
    ],
  },

  ko: {
    metaTitle: '개인정보 처리방침 | 생·조리 계산기',
    metaDescription:
      'rawtocookedcalculator.com의 개인정보 처리방침입니다. 계정도 개인정보 수집도 없습니다. 이 사이트가 수집하는 것과 수집하지 않는 것을 정확히 알려드립니다.',
    eyebrow: '법적 고지',
    heading: '개인정보 처리방침',
    lastUpdatedLabel: '최종 수정일',
    lastUpdated: '2026년 8월 31일',
    sections: [
      {
        heading: '개요',
        paragraphs: [
          '생·조리 계산기는 정적 웹사이트입니다. 사용자 계정이 없고, 양식을 통해 개인정보를 수집하지 않으며, 상업적 목적으로 제3자에게 데이터를 판매하거나 공유하지 않습니다. 이 페이지는 사이트를 이용할 때 실제로 발생하는 최소한의 데이터 처리에 대해 설명합니다.',
        ],
      },
      {
        heading: '수집하는 정보',
        paragraphs: [
          '이 사이트를 통해 이름, 이메일 주소를 비롯한 어떠한 개인 식별 정보도 수집하지 않습니다. 가입 양식, 로그인 시스템, 댓글 기능이 모두 없습니다.',
          '계산기를 사용할 때 모든 연산은 이용자의 브라우저 안에서 이루어집니다. 입력값(식품, 중량, 결과)은 서버로 전송되지 않습니다.',
        ],
      },
      {
        heading: '브라우저 저장소',
        paragraphs: [
          `이 사이트가 저장하는 설정은 라이트/다크 모드 선택 한 가지뿐이며, 브라우저의 ${LOCAL_STORAGE}에 저장됩니다. 이 데이터는 이용자의 기기를 벗어나지 않으며 어떤 서버로도 전송되지 않습니다. 브라우저의 사이트 데이터를 지우면 언제든 삭제할 수 있습니다.`,
        ],
      },
      {
        heading: '분석 도구',
        paragraphs: [
          '이 사이트는 전체적인 트래픽 흐름 — 예를 들어 어떤 페이지가 자주 조회되는지, 방문자가 어떤 기기를 쓰는지 — 을 파악하기 위해 프라이버시를 존중하는 분석 도구를 사용할 수 있습니다. 사용하는 경우, 페이지 조회수, 대략적인 지역(국가·도시 수준), 기기 유형, 유입 URL 같은 비개인 집계 데이터만 수집합니다.',
          `분석 데이터가 개인의 신원과 연결되는 일은 없습니다. Google 애널리틱스를 사용하는 경우 ${gaOptOut('Google 애널리틱스 차단 브라우저 부가기능')}으로 수집을 거부할 수 있습니다.`,
        ],
      },
      {
        heading: '제3자 서비스',
        paragraphs: [
          `이 사이트는 Google Fonts에서 글꼴을 불러옵니다. 브라우저가 글꼴을 요청할 때 Google이 해당 요청을 기록할 수 있습니다. Google의 개인정보 처리 방식은 ${GOOGLE_PRIVACY}에서 확인할 수 있습니다.`,
          '제3자 동영상 플레이어, 소셜 미디어 위젯, 광고 네트워크는 일절 삽입하지 않습니다.',
        ],
      },
      {
        heading: '쿠키',
        paragraphs: [
          '이 사이트는 자체 쿠키를 설정하지 않습니다. 분석이 활성화된 경우, 분석 제공업체가 고유 방문을 구분하기 위해 자체 쿠키를 설정할 수 있습니다. 쿠키는 브라우저 설정에서 언제든 차단하거나 삭제할 수 있습니다.',
        ],
      },
      {
        heading: '외부 링크',
        paragraphs: [
          '이 사이트는 USDA FoodData Central과 USDA 발간물을 비롯한 외부 자료로 연결됩니다. 해당 사이트의 개인정보 처리 방식이나 내용에 대해서는 책임지지 않습니다. 그 플랫폼에서의 데이터 수집은 각자의 방침을 따릅니다.',
        ],
      },
      {
        heading: '아동의 개인정보',
        paragraphs: [
          '이 사이트는 만 13세 미만 아동을 대상으로 하지 않으며, 아동으로부터 어떠한 정보도 고의로 수집하지 않습니다.',
        ],
      },
      {
        heading: '방침 변경',
        paragraphs: [
          '이 페이지는 수시로 갱신될 수 있습니다. 페이지 상단의 "최종 수정일"이 가장 최근 개정 시점을 나타냅니다. 변경 사항이 게시된 뒤에도 사이트를 계속 이용하면 갱신된 방침에 동의한 것으로 간주됩니다.',
        ],
      },
      {
        heading: '문의',
        paragraphs: [`개인정보 관련 문의는 ${EMAIL}으로 이메일 주시기 바랍니다.`],
      },
    ],
  },

  it: {
    metaTitle: 'Informativa sulla privacy | Calcolatore Crudo-Cotto',
    metaDescription:
      'Informativa sulla privacy di rawtocookedcalculator.com. Nessun account, nessuna raccolta di dati personali. Ecco esattamente quali dati questo sito raccoglie e quali no.',
    eyebrow: 'Note legali',
    heading: 'Informativa sulla privacy',
    lastUpdatedLabel: 'Ultimo aggiornamento',
    lastUpdated: '31 agosto 2026',
    sections: [
      {
        heading: 'Panoramica',
        paragraphs: [
          'Il Calcolatore Crudo-Cotto è un sito web statico. Non esistono account utente, non raccogliamo informazioni personali tramite moduli e non vendiamo né condividiamo dati con terzi per finalità commerciali. Questa pagina spiega le poche interazioni con i dati che avvengono realmente quando usi il sito.',
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
          'Questo sito può utilizzare strumenti di analisi rispettosi della privacy per comprendere l’andamento aggregato del traffico — ad esempio quali pagine vengono visitate più spesso e quali dispositivi usano i visitatori. Se utilizzati, questi strumenti raccolgono dati aggregati e non personali come visualizzazioni di pagina, area geografica approssimativa (livello paese o città), tipo di dispositivo e URL di provenienza.',
          `Nessun dato statistico viene collegato a identità individuali. Se utilizziamo Google Analytics, puoi disattivarne la raccolta con il ${gaOptOut('componente aggiuntivo del browser per la disattivazione di Google Analytics')}.`,
        ],
      },
      {
        heading: 'Servizi di terze parti',
        paragraphs: [
          `Il sito carica i caratteri da Google Fonts. Quando il tuo browser richiede questi caratteri, Google può registrare la richiesta. Puoi consultare le pratiche di Google in materia di privacy su ${GOOGLE_PRIVACY}.`,
          'Non integriamo lettori video di terze parti, widget di social media o circuiti pubblicitari.',
        ],
      },
      {
        heading: 'Cookie',
        paragraphs: [
          'Questo sito non imposta cookie di prima parte. Se le statistiche sono attive, il fornitore del servizio può impostare cookie propri per distinguere le visite uniche. Puoi bloccare o eliminare i cookie dalle impostazioni del browser in qualsiasi momento.',
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
          'Questo sito non è rivolto a minori di 13 anni e non raccoglie consapevolmente alcuna informazione che li riguardi.',
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

  hi: {
    metaTitle: 'गोपनीयता नीति | कच्चे से पके का कैलकुलेटर',
    metaDescription:
      'rawtocookedcalculator.com की गोपनीयता नीति। कोई अकाउंट नहीं, कोई निजी डेटा संग्रह नहीं। जानें यह साइट कौन-सा डेटा लेती है और कौन-सा नहीं।',
    eyebrow: 'कानूनी',
    heading: 'गोपनीयता नीति',
    lastUpdatedLabel: 'अंतिम अद्यतन',
    lastUpdated: '31 अगस्त 2026',
    sections: [
      {
        heading: 'संक्षेप में',
        paragraphs: [
          'कच्चे से पके का कैलकुलेटर एक स्थिर (स्टैटिक) वेबसाइट है। यहां कोई उपयोगकर्ता अकाउंट नहीं है, हम फॉर्म के जरिए निजी जानकारी नहीं लेते, और व्यावसायिक उद्देश्यों से किसी तीसरे पक्ष को डेटा न बेचते हैं न साझा करते हैं। यह पेज बताता है कि साइट इस्तेमाल करते समय डेटा से जुड़ी कौन-सी सीमित गतिविधियां वाकई होती हैं।',
        ],
      },
      {
        heading: 'हम क्या एकत्र करते हैं',
        paragraphs: [
          'इस साइट के जरिए हम नाम, ईमेल पता या पहचान बताने वाली कोई भी जानकारी एकत्र नहीं करते। यहां न साइन-अप फॉर्म हैं, न लॉगिन सिस्टम, न टिप्पणी अनुभाग।',
          'जब आप कैलकुलेटर इस्तेमाल करते हैं, तो सारी गणनाएं सीधे आपके ब्राउज़र में होती हैं। आपके डाले गए मान (खाद्य पदार्थ, वजन या परिणाम) कभी किसी सर्वर पर नहीं भेजे जाते।',
        ],
      },
      {
        heading: 'ब्राउज़र में संग्रहण',
        paragraphs: [
          `साइट सिर्फ एक प्राथमिकता सहेजती है — आपकी लाइट/डार्क मोड की पसंद — जो आपके ब्राउज़र के ${LOCAL_STORAGE} में रखी जाती है। यह डेटा कभी आपके डिवाइस से बाहर नहीं जाता और किसी सर्वर पर नहीं भेजा जाता। आप अपने ब्राउज़र का साइट डेटा साफ करके इसे कभी भी हटा सकते हैं।`,
        ],
      },
      {
        heading: 'एनालिटिक्स',
        paragraphs: [
          'यह साइट कुल मिलाकर ट्रैफिक के रुझान समझने के लिए गोपनीयता का सम्मान करने वाले एनालिटिक्स टूल इस्तेमाल कर सकती है — जैसे कौन-से पेज सबसे ज्यादा देखे जाते हैं और आगंतुक किन डिवाइसों का उपयोग करते हैं। इस्तेमाल किए जाने पर ये टूल केवल गैर-व्यक्तिगत, समेकित डेटा लेते हैं, जैसे पेज व्यू, अनुमानित भौगोलिक क्षेत्र (देश/शहर स्तर), डिवाइस का प्रकार और रेफ़रिंग URL।',
          `कोई भी एनालिटिक्स डेटा किसी व्यक्ति की पहचान से नहीं जोड़ा जाता। अगर हम Google Analytics इस्तेमाल करते हैं, तो आप ${gaOptOut('Google Analytics ऑप्ट-आउट ब्राउज़र ऐड-ऑन')} से इससे बाहर निकल सकते हैं।`,
        ],
      },
      {
        heading: 'तीसरे पक्ष की सेवाएं',
        paragraphs: [
          `साइट Google Fonts से फ़ॉन्ट लोड करती है। जब आपका ब्राउज़र ये फ़ॉन्ट मांगता है, तो Google उस अनुरोध को दर्ज कर सकता है। Google की गोपनीयता संबंधी नीतियां आप ${GOOGLE_PRIVACY} पर देख सकते हैं।`,
          'हम तीसरे पक्ष के वीडियो प्लेयर, सोशल मीडिया विजेट या विज्ञापन नेटवर्क नहीं जोड़ते।',
        ],
      },
      {
        heading: 'कुकीज़',
        paragraphs: [
          'यह साइट अपनी ओर से कोई कुकी सेट नहीं करती। अगर एनालिटिक्स सक्रिय है, तो एनालिटिक्स प्रदाता अलग-अलग विज़िट पहचानने के लिए अपनी कुकीज़ सेट कर सकता है। आप अपने ब्राउज़र की सेटिंग से कुकीज़ कभी भी रोक या हटा सकते हैं।',
        ],
      },
      {
        heading: 'बाहरी लिंक',
        paragraphs: [
          'यह साइट USDA FoodData Central और USDA प्रकाशनों सहित बाहरी स्रोतों से जुड़ती है। उन साइटों की गोपनीयता नीतियों या सामग्री के लिए हम जिम्मेदार नहीं हैं। उनके प्लेटफ़ॉर्म पर डेटा संग्रह उनकी अपनी नीतियों से तय होता है।',
        ],
      },
      {
        heading: 'बच्चों की गोपनीयता',
        paragraphs: [
          'यह साइट 13 वर्ष से कम उम्र के बच्चों के लिए नहीं है और बच्चों से जानबूझकर कोई जानकारी एकत्र नहीं करती।',
        ],
      },
      {
        heading: 'इस नीति में बदलाव',
        paragraphs: [
          'हम इस पेज को समय-समय पर अपडेट कर सकते हैं। पेज के ऊपर दी गई "अंतिम अद्यतन" तारीख सबसे हालिया संशोधन दर्शाती है। बदलाव प्रकाशित होने के बाद साइट का उपयोग जारी रखना अद्यतन नीति की स्वीकृति माना जाएगा।',
        ],
      },
      {
        heading: 'संपर्क',
        paragraphs: [`गोपनीयता से जुड़े सवालों के लिए हमें ${EMAIL} पर ईमेल करें।`],
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
          'A small number of foods use industry-standard estimates where USDA has not published direct cooking-yield data. These are disclosed on the relevant food pages.',
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
          'Un pequeño número de alimentos usa estimaciones estándar del sector allí donde el USDA no ha publicado datos directos de rendimiento de cocción. Esto se indica en las páginas de dichos alimentos.',
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
          'Quelques aliments reposent sur des estimations standard du secteur là où l’USDA n’a pas publié de données de rendement. Ces cas sont signalés sur les pages concernées.',
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
          'Für einige wenige Lebensmittel kommen branchenübliche Schätzwerte zum Einsatz, wo das USDA keine direkten Garausbeuten veröffentlicht hat. Auf den betreffenden Seiten ist das gekennzeichnet.',
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
          'Um pequeno número de alimentos usa estimativas padrão do setor onde o USDA não publicou dados diretos de rendimento de cocção. Isso é informado nas páginas dos alimentos em questão.',
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

  ja: {
    metaTitle: '利用規約 | 生・加熱後計算機',
    metaDescription:
      'rawtocookedcalculator.com の利用規約です。調理歩留まりデータはUSDAを出典とし、情報提供のみを目的としています。医療・栄養上の助言ではありません。',
    eyebrow: '法的事項',
    heading: '利用規約',
    lastUpdatedLabel: '最終更新日',
    lastUpdated: '2026年8月31日',
    sections: [
      {
        heading: '規約への同意',
        paragraphs: [
          'rawtocookedcalculator.com にアクセスまたはこれを利用することにより、本利用規約に拘束されることに同意したものとみなされます。同意されない場合は、当サイトのご利用をお控えください。当方は本規約をいつでも改定する権利を留保します。変更の掲載後も引き続きご利用いただいた場合、改定後の規約に同意されたものとみなします。',
        ],
      },
      {
        heading: 'サイトの利用',
        paragraphs: [
          '生・加熱後計算機は、個人的かつ非商業的な利用を目的とした無料のツールです。計算機のご利用およびURLの共有は自由に行っていただけます。ただし、許可なくサイトのコンテンツを大量に取得（スクレイピング）、複製、再公開することはできません。',
          '当サイトを違法な目的で利用したり、その運営を損なう、停止させる、または妨げるおそれのある方法で利用したりしてはなりません。',
        ],
      },
      {
        heading: '情報提供のみを目的とすること',
        paragraphs: [
          '歩留まり率、栄養素の計算、解説記事を含む当サイトのすべてのコンテンツは、一般的な情報提供のみを目的として提供されます。専門的な栄養評価や食事計画に代わるものではありません。',
          `${strong('当サイトのいかなる内容も、医療上、食事療法上、または栄養上の助言を構成するものではありません。')}特定の疾患、食事制限、医療上のニーズをお持ちの方は、当サイトの情報に基づいて食生活を変更する前に、資格を有する医療専門家または管理栄養士にご相談ください。`,
        ],
      },
      {
        heading: 'データの正確性と限界',
        paragraphs: [
          '歩留まり率はUSDAの刊行物を出典とし、研究に基づく平均値を示すものであって、個々の食材について保証するものではありません。実際の調理結果は、部位、大きさ、元の水分量、調理方法をどれだけ忠実に再現するかによって変わります。',
          'ごく一部の食材については、USDAが調理歩留まりを直接公表していないため、業界標準の推定値を使用しています。該当する食材のページにその旨を明記しています。',
          '正確性の確保に合理的な努力を払っていますが、すべてのデータが完全、最新、または誤りがないことを保証するものではありません。USDAはデータベースを定期的に更新しており、その更新が当サイトに反映されるまでに時間差が生じる場合があります。',
        ],
      },
      {
        heading: '保証の否認',
        paragraphs: [
          '当サイトは「現状有姿」かつ「提供可能な範囲」で提供され、明示・黙示を問わずいかなる保証も伴いません。当方は、いかなる目的についても、当サイト、そのコンテンツ、またはその計算結果の完全性、正確性、信頼性、適合性、可用性を保証しません。',
        ],
      },
      {
        heading: '責任の制限',
        paragraphs: [
          '法律で認められる最大限の範囲において、生・加熱後計算機およびその運営者は、当サイトまたはその計算結果の利用（または利用できないこと）に起因する直接的、間接的、付随的、結果的、または懲罰的な損害について一切責任を負いません。当サイトのご利用は、利用者ご自身の責任において行ってください。',
        ],
      },
      {
        heading: '知的財産',
        paragraphs: [
          '当サイトで使用しているUSDAのデータはパブリックドメインです。編集記事、ページ構成、コードを含むサイト独自のコンテンツは、生・加熱後計算機に帰属します。基礎となる栄養データはUSDAを出典とし、当方が独自の権利を主張するものではありません。',
        ],
      },
      {
        heading: '外部リンク',
        paragraphs: [
          '当サイトは USDA FoodData Central などの外部サイトにリンクする場合があります。外部サイトの内容、正確性、プライバシーの取り扱いについて、当方は責任を負いません。リンクは推奨を意味するものではありません。',
        ],
      },
      {
        heading: '準拠法',
        paragraphs: [
          '本規約は、適用される法令に準拠し、これに従って解釈されます。当サイトの利用に起因する紛争については、適用される地域の管轄裁判所を専属的合意管轄裁判所とします。',
        ],
      },
      {
        heading: 'お問い合わせ',
        paragraphs: [`本規約についてご不明な点があれば、${EMAIL} までご連絡ください。`],
      },
    ],
  },

  ko: {
    metaTitle: '이용약관 | 생·조리 계산기',
    metaDescription:
      'rawtocookedcalculator.com의 이용약관입니다. 조리 수율 데이터는 USDA에서 가져온 것이며 정보 제공 목적으로만 제공됩니다 — 의학적·영양학적 조언이 아닙니다.',
    eyebrow: '법적 고지',
    heading: '이용약관',
    lastUpdatedLabel: '최종 수정일',
    lastUpdated: '2026년 8월 31일',
    sections: [
      {
        heading: '약관 동의',
        paragraphs: [
          'rawtocookedcalculator.com에 접속하거나 이를 이용함으로써 귀하는 본 이용약관에 구속되는 데 동의하게 됩니다. 동의하지 않으신다면 사이트를 이용하지 말아 주십시오. 당사는 언제든지 본 약관을 갱신할 권리를 보유하며, 변경 사항이 게시된 뒤에도 사이트를 계속 이용하는 것은 이에 동의하는 것으로 간주됩니다.',
        ],
      },
      {
        heading: '사이트 이용',
        paragraphs: [
          '생·조리 계산기는 개인적·비상업적 용도의 무료 도구입니다. 계산기를 이용하고 그 주소를 자유롭게 공유하실 수 있습니다. 다만 허락 없이 사이트 콘텐츠를 대량으로 수집(스크래핑)하거나 복제·재게시할 수 없습니다.',
          '본 사이트를 불법적인 목적으로 이용하거나, 그 운영을 훼손·중단·저해할 수 있는 방식으로 이용해서는 안 됩니다.',
        ],
      },
      {
        heading: '정보 제공 목적에 한함',
        paragraphs: [
          '수율, 영양소 계산, 설명 자료를 포함한 본 사이트의 모든 콘텐츠는 일반적인 정보 제공 목적으로만 제공됩니다. 전문적인 영양 평가나 식단 설계를 대체하기 위한 것이 아닙니다.',
          `${strong('본 사이트의 어떤 내용도 의학적·식이요법적·영양학적 조언에 해당하지 않습니다.')} 특정 질환, 식이 제한, 의학적 필요가 있으신 경우, 본 사이트의 정보를 근거로 식생활을 바꾸기 전에 자격을 갖춘 의료 전문가나 임상영양사와 상담하시기 바랍니다.`,
        ],
      },
      {
        heading: '데이터 정확성과 한계',
        paragraphs: [
          '수율은 USDA 발간물에서 가져온 것으로, 연구에 기반한 평균값이며 특정 식재료에 대한 보장이 아닙니다. 실제 조리 결과는 부위, 크기, 처음의 수분 함량, 조리법을 얼마나 정확히 따르는지에 따라 달라집니다.',
          '소수의 식품은 USDA가 조리 수율을 직접 발표하지 않아 업계 표준 추정값을 사용합니다. 이는 해당 식품 페이지에 표시되어 있습니다.',
          '정확성을 확보하기 위해 합리적인 노력을 기울이고 있으나, 모든 데이터가 완전하거나 최신이거나 오류가 없음을 보증하지는 않습니다. USDA는 데이터베이스를 주기적으로 갱신하며, 그 갱신이 본 사이트에 반영되기까지 시차가 있을 수 있습니다.',
        ],
      },
      {
        heading: '보증의 부인',
        paragraphs: [
          '본 사이트는 "있는 그대로", "이용 가능한 상태로" 제공되며, 명시적이든 묵시적이든 어떠한 보증도 하지 않습니다. 당사는 어떠한 목적에 대해서도 사이트, 그 콘텐츠, 그 계산 결과의 완전성·정확성·신뢰성·적합성·가용성을 보장하지 않습니다.',
        ],
      },
      {
        heading: '책임의 제한',
        paragraphs: [
          '법이 허용하는 최대한의 범위에서, 생·조리 계산기와 그 운영자는 본 사이트 또는 그 계산 결과의 이용(또는 이용 불가)으로 인해 발생하는 직접적·간접적·부수적·결과적 또는 징벌적 손해에 대해 책임을 지지 않습니다. 사이트 이용에 따르는 위험은 이용자 본인이 부담합니다.',
        ],
      },
      {
        heading: '지식재산권',
        paragraphs: [
          '본 사이트에서 사용하는 USDA 데이터는 퍼블릭 도메인입니다. 편집 문구, 페이지 구성, 코드를 포함한 사이트의 고유 콘텐츠는 생·조리 계산기의 자산입니다. 기반이 되는 영양 데이터는 USDA에서 가져온 것이며 당사의 독점적 권리를 주장하지 않습니다.',
        ],
      },
      {
        heading: '외부 링크',
        paragraphs: [
          '본 사이트는 USDA FoodData Central 등 외부 웹사이트로 연결될 수 있습니다. 외부 사이트의 콘텐츠, 정확성, 개인정보 처리 방식에 대해서는 책임지지 않습니다. 링크는 보증이나 추천을 의미하지 않습니다.',
        ],
      },
      {
        heading: '준거법',
        paragraphs: [
          '본 약관은 적용 법률에 따라 규율되고 해석됩니다. 본 사이트 이용에서 발생하는 모든 분쟁은 해당 관할 지역의 관할 법원의 전속 관할에 따릅니다.',
        ],
      },
      {
        heading: '문의',
        paragraphs: [`본 약관에 관해 궁금한 점이 있으시면 ${EMAIL}으로 이메일 주십시오.`],
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
          'Un numero ridotto di alimenti si basa su stime standard del settore, laddove l’USDA non ha pubblicato dati diretti sulla resa di cottura. La cosa è indicata nelle pagine dei relativi alimenti.',
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

  hi: {
    metaTitle: 'नियम और शर्तें | कच्चे से पके का कैलकुलेटर',
    metaDescription:
      'rawtocookedcalculator.com के नियम और शर्तें। कुकिंग यील्ड डेटा USDA से लिया गया है और केवल जानकारी के लिए है — यह चिकित्सा या आहार संबंधी सलाह नहीं है।',
    eyebrow: 'कानूनी',
    heading: 'नियम और शर्तें',
    lastUpdatedLabel: 'अंतिम अद्यतन',
    lastUpdated: '31 अगस्त 2026',
    sections: [
      {
        heading: 'शर्तों की स्वीकृति',
        paragraphs: [
          'rawtocookedcalculator.com तक पहुंचकर या उसका उपयोग करके आप इन नियमों और शर्तों से बंधने के लिए सहमत होते हैं। यदि आप सहमत नहीं हैं, तो कृपया इस साइट का उपयोग न करें। हम इन शर्तों को कभी भी अद्यतन करने का अधिकार सुरक्षित रखते हैं; बदलाव प्रकाशित होने के बाद साइट का उपयोग जारी रखना उनकी स्वीकृति माना जाएगा।',
        ],
      },
      {
        heading: 'साइट का उपयोग',
        paragraphs: [
          'कच्चे से पके का कैलकुलेटर व्यक्तिगत, गैर-व्यावसायिक उपयोग के लिए एक मुफ्त टूल है। आप कैलकुलेटर का उपयोग कर सकते हैं और उसका URL स्वतंत्र रूप से साझा कर सकते हैं। बिना अनुमति के आप साइट की सामग्री को थोक में स्क्रैप, पुनरुत्पादित या पुनः प्रकाशित नहीं कर सकते।',
          'साइट का उपयोग किसी भी गैरकानूनी उद्देश्य के लिए, या ऐसे किसी तरीके से नहीं किया जाना चाहिए जिससे इसके संचालन को नुकसान पहुंचे, वह बाधित हो या कमजोर पड़े।',
        ],
      },
      {
        heading: 'केवल जानकारी के उद्देश्य से',
        paragraphs: [
          'इस साइट की सारी सामग्री — यील्ड प्रतिशत, मैक्रो गणनाएं और शैक्षिक सामग्री सहित — केवल सामान्य जानकारी के उद्देश्य से दी गई है। इसका उद्देश्य पेशेवर पोषण मूल्यांकन या आहार योजना की जगह लेना नहीं है।',
          `${strong('इस साइट पर कुछ भी चिकित्सा, आहार या पोषण संबंधी सलाह नहीं है।')} यदि आपकी कोई विशेष स्वास्थ्य स्थिति, आहार संबंधी पाबंदी या चिकित्सा आवश्यकता है, तो इस साइट की जानकारी के आधार पर आहार में बदलाव करने से पहले किसी योग्य स्वास्थ्य पेशेवर या पंजीकृत आहार विशेषज्ञ से परामर्श लें।`,
        ],
      },
      {
        heading: 'डेटा की सटीकता और सीमाएं',
        paragraphs: [
          'यील्ड प्रतिशत USDA प्रकाशनों से लिए गए हैं और शोध पर आधारित औसत दर्शाते हैं, किसी विशेष खाद्य पदार्थ के लिए गारंटी नहीं। असली नतीजे कट, आकार, शुरुआती नमी और पकाने की विधि कितनी सटीकता से अपनाई गई, इन सब पर बदलते हैं।',
          'कुछ ही खाद्य पदार्थों के लिए उद्योग-मानक अनुमानों का उपयोग किया गया है, जहां USDA ने सीधे कुकिंग यील्ड डेटा प्रकाशित नहीं किया है। संबंधित पेजों पर यह बताया गया है।',
          'हम सटीकता सुनिश्चित करने के उचित प्रयास करते हैं, फिर भी हम यह गारंटी नहीं देते कि सारा डेटा पूर्ण, अद्यतन या त्रुटिरहित है। USDA अपने डेटाबेस समय-समय पर अद्यतन करता है; उन अद्यतनों के यहां दिखने में कुछ समय लग सकता है।',
        ],
      },
      {
        heading: 'कोई वारंटी नहीं',
        paragraphs: [
          'यह साइट "जैसी है" और "जैसी उपलब्ध है" के आधार पर दी गई है, बिना किसी स्पष्ट या निहित वारंटी के। हम किसी भी उद्देश्य के लिए साइट, उसकी सामग्री या उसकी गणनाओं की पूर्णता, सटीकता, विश्वसनीयता, उपयुक्तता या उपलब्धता की कोई गारंटी नहीं देते।',
        ],
      },
      {
        heading: 'दायित्व की सीमा',
        paragraphs: [
          'कानून द्वारा अनुमत अधिकतम सीमा तक, कच्चे से पके का कैलकुलेटर और इसके संचालक इस साइट या इसकी गणनाओं के उपयोग — या उपयोग न कर पाने — से उत्पन्न किसी भी प्रत्यक्ष, अप्रत्यक्ष, आकस्मिक, परिणामी या दंडात्मक क्षति के लिए उत्तरदायी नहीं होंगे। साइट का उपयोग आपके अपने जोखिम पर है।',
        ],
      },
      {
        heading: 'बौद्धिक संपदा',
        paragraphs: [
          'इस साइट पर उपयोग किया गया USDA डेटा सार्वजनिक डोमेन में है। साइट की मौलिक सामग्री — संपादकीय लेखन, पेज संरचना और कोड सहित — कच्चे से पके के कैलकुलेटर की संपत्ति है। अंतर्निहित पोषण डेटा USDA से लिया गया है और उस पर स्वामित्व का दावा नहीं किया जाता।',
        ],
      },
      {
        heading: 'बाहरी लिंक',
        paragraphs: [
          'यह साइट USDA FoodData Central जैसी बाहरी वेबसाइटों से लिंक कर सकती है। हम किसी भी बाहरी साइट की सामग्री, सटीकता या गोपनीयता नीतियों के लिए जिम्मेदार नहीं हैं। लिंक का मतलब समर्थन नहीं है।',
        ],
      },
      {
        heading: 'लागू कानून',
        paragraphs: [
          'ये शर्तें लागू कानून द्वारा शासित हैं और उसी के अनुसार व्याख्यायित की जाएंगी। इस साइट के उपयोग से उत्पन्न कोई भी विवाद संबंधित क्षेत्र के सक्षम न्यायालयों के विशेष क्षेत्राधिकार के अधीन होगा।',
        ],
      },
      {
        heading: 'प्रश्न',
        paragraphs: [`इन शर्तों के बारे में कोई सवाल हो तो ${EMAIL} पर ईमेल करें।`],
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
