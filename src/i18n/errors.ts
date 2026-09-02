import type { Locale } from './ui';

/**
 * 404 and 500 copy, per locale.
 *
 * These two pages are served as single static files (`/404.html`, `/500.html`)
 * for every URL on the site, so there is no per-locale route to build. The
 * pages ship every locale's strings and pick the right one in the browser from
 * the first path segment, falling back to English without JavaScript.
 */

export interface NotFoundPage {
  metaTitle: string;
  metaDescription: string;
  heading: string;
  body: string;
  homeCta: string;
  popularLabel: string;
  allFoods: string;
}

export interface ServerErrorPage {
  metaTitle: string;
  metaDescription: string;
  heading: string;
  body: string;
  homeCta: string;
  reload: string;
  helpLabel: string;
  helpBefore: string;
  helpAfter: string;
}

export const NOT_FOUND: Record<Locale, NotFoundPage> = {
  en: {
    metaTitle: 'Page Not Found | Raw to Cooked Calculator',
    metaDescription:
      'The page you’re looking for doesn’t exist. Use the Raw to Cooked Calculator to convert raw and cooked food weights.',
    heading: 'Page not found',
    body: 'This page doesn’t exist or has moved. If you typed the URL manually, check for a typo. Otherwise, the links below should get you back on track.',
    homeCta: '← Back to homepage',
    popularLabel: 'Popular calculators',
    allFoods: 'All foods →',
  },
  es: {
    metaTitle: 'Página no encontrada | Calculadora Crudo a Cocido',
    metaDescription:
      'La página que buscas no existe. Usa la Calculadora Crudo a Cocido para convertir pesos de alimentos crudos y cocidos.',
    heading: 'Página no encontrada',
    body: 'Esta página no existe o se ha movido. Si escribiste la dirección a mano, comprueba que no haya una errata. Si no, los enlaces de abajo deberían ayudarte a retomar el hilo.',
    homeCta: '← Volver al inicio',
    popularLabel: 'Calculadoras populares',
    allFoods: 'Todos los alimentos →',
  },
  fr: {
    metaTitle: 'Page introuvable | Calculateur Cru-Cuit',
    metaDescription:
      'La page que vous cherchez n’existe pas. Utilisez le Calculateur Cru-Cuit pour convertir les poids d’aliments crus et cuits.',
    heading: 'Page introuvable',
    body: 'Cette page n’existe pas ou a été déplacée. Si vous avez saisi l’adresse à la main, vérifiez qu’il n’y a pas de faute de frappe. Sinon, les liens ci-dessous devraient vous remettre sur la bonne voie.',
    homeCta: '← Retour à l’accueil',
    popularLabel: 'Calculateurs populaires',
    allFoods: 'Tous les aliments →',
  },
  de: {
    metaTitle: 'Seite nicht gefunden | Roh-zu-Gegart-Rechner',
    metaDescription:
      'Die gesuchte Seite gibt es nicht. Nutze den Roh-zu-Gegart-Rechner, um rohe und gegarte Lebensmittelgewichte umzurechnen.',
    heading: 'Seite nicht gefunden',
    body: 'Diese Seite existiert nicht oder wurde verschoben. Wenn du die Adresse von Hand eingegeben hast, prüfe sie auf Tippfehler. Andernfalls helfen dir die Links unten weiter.',
    homeCta: '← Zurück zur Startseite',
    popularLabel: 'Beliebte Rechner',
    allFoods: 'Alle Lebensmittel →',
  },
  pt: {
    metaTitle: 'Página não encontrada | Calculadora de Cru para Cozido',
    metaDescription:
      'A página que você procura não existe. Use a Calculadora de Cru para Cozido para converter pesos de alimentos crus e cozidos.',
    heading: 'Página não encontrada',
    body: 'Esta página não existe ou foi movida. Se você digitou o endereço manualmente, confira se não há erro de digitação. Caso contrário, os links abaixo devem colocar você de volta no caminho.',
    homeCta: '← Voltar para a página inicial',
    popularLabel: 'Calculadoras populares',
    allFoods: 'Todos os alimentos →',
  },
  ja: {
    metaTitle: 'ページが見つかりません | 生・加熱後計算機',
    metaDescription:
      'お探しのページは見つかりませんでした。生・加熱後計算機で、食材の生と加熱後の重量を換算できます。',
    heading: 'ページが見つかりません',
    body: 'このページは存在しないか、移動された可能性があります。URLを手入力された場合は、入力ミスがないかご確認ください。そうでなければ、以下のリンクからお探しの内容にたどり着けます。',
    homeCta: '← ホームに戻る',
    popularLabel: 'よく使われる計算機',
    allFoods: 'すべての食材 →',
  },
  ko: {
    metaTitle: '페이지를 찾을 수 없습니다 | 생·조리 계산기',
    metaDescription:
      '찾으시는 페이지가 존재하지 않습니다. 생·조리 계산기로 식품의 생 중량과 조리 후 중량을 변환해 보세요.',
    heading: '페이지를 찾을 수 없습니다',
    body: '이 페이지는 존재하지 않거나 위치가 바뀌었습니다. 주소를 직접 입력하셨다면 오타가 없는지 확인해 주세요. 그렇지 않다면 아래 링크에서 원하시는 내용을 찾으실 수 있습니다.',
    homeCta: '← 홈으로 돌아가기',
    popularLabel: '많이 쓰는 계산기',
    allFoods: '전체 식품 →',
  },
  it: {
    metaTitle: 'Pagina non trovata | Calcolatore Crudo-Cotto',
    metaDescription:
      'La pagina che cerchi non esiste. Usa il Calcolatore Crudo-Cotto per convertire i pesi degli alimenti crudi e cotti.',
    heading: 'Pagina non trovata',
    body: 'Questa pagina non esiste o è stata spostata. Se hai digitato l’indirizzo a mano, controlla che non ci siano errori di battitura. Altrimenti, i link qui sotto dovrebbero rimetterti sulla strada giusta.',
    homeCta: '← Torna alla home',
    popularLabel: 'Calcolatori più usati',
    allFoods: 'Tutti gli alimenti →',
  },
  hi: {
    metaTitle: 'पेज नहीं मिला | कच्चे से पके का कैलकुलेटर',
    metaDescription:
      'आप जो पेज ढूंढ रहे हैं वह मौजूद नहीं है। कच्चे और पके भोजन का वजन बदलने के लिए कच्चे से पके का कैलकुलेटर इस्तेमाल करें।',
    heading: 'पेज नहीं मिला',
    body: 'यह पेज मौजूद नहीं है या हटाया जा चुका है। अगर आपने पता खुद टाइप किया है, तो वर्तनी जांच लें। वरना नीचे दिए लिंक आपको सही जगह पहुंचा देंगे।',
    homeCta: '← होमपेज पर वापस जाएं',
    popularLabel: 'लोकप्रिय कैलकुलेटर',
    allFoods: 'सभी खाद्य पदार्थ →',
  },
};

export const SERVER_ERROR: Record<Locale, ServerErrorPage> = {
  en: {
    metaTitle: 'Server Error | Raw to Cooked Calculator',
    metaDescription:
      'Something went wrong on our end. The Raw to Cooked Calculator will be back shortly.',
    heading: 'Something went wrong',
    body: 'There was an unexpected error on our end. This is usually temporary — try refreshing the page. If the problem persists, check back in a few minutes.',
    homeCta: '← Back to homepage',
    reload: 'Reload page',
    helpLabel: 'If this keeps happening',
    helpBefore: 'Email us at',
    helpAfter: 'and we’ll look into it.',
  },
  es: {
    metaTitle: 'Error del servidor | Calculadora Crudo a Cocido',
    metaDescription:
      'Algo ha fallado por nuestra parte. La Calculadora Crudo a Cocido volverá en breve.',
    heading: 'Algo ha salido mal',
    body: 'Se ha producido un error inesperado por nuestra parte. Suele ser algo temporal: prueba a recargar la página. Si el problema continúa, vuelve a intentarlo en unos minutos.',
    homeCta: '← Volver al inicio',
    reload: 'Recargar la página',
    helpLabel: 'Si esto se repite',
    helpBefore: 'Escríbenos a',
    helpAfter: 'y lo revisaremos.',
  },
  fr: {
    metaTitle: 'Erreur serveur | Calculateur Cru-Cuit',
    metaDescription:
      'Un problème est survenu de notre côté. Le Calculateur Cru-Cuit sera de retour sous peu.',
    heading: 'Une erreur est survenue',
    body: 'Une erreur inattendue s’est produite de notre côté. C’est généralement temporaire : essayez de recharger la page. Si le problème persiste, revenez dans quelques minutes.',
    homeCta: '← Retour à l’accueil',
    reload: 'Recharger la page',
    helpLabel: 'Si cela se reproduit',
    helpBefore: 'Écrivez-nous à',
    helpAfter: 'et nous examinerons le problème.',
  },
  de: {
    metaTitle: 'Serverfehler | Roh-zu-Gegart-Rechner',
    metaDescription:
      'Auf unserer Seite ist etwas schiefgelaufen. Der Roh-zu-Gegart-Rechner ist in Kürze wieder da.',
    heading: 'Da ist etwas schiefgelaufen',
    body: 'Auf unserer Seite ist ein unerwarteter Fehler aufgetreten. Das ist meist vorübergehend — lade die Seite einfach neu. Wenn das Problem bestehen bleibt, versuch es in ein paar Minuten noch einmal.',
    homeCta: '← Zurück zur Startseite',
    reload: 'Seite neu laden',
    helpLabel: 'Wenn das öfter passiert',
    helpBefore: 'Schreib uns an',
    helpAfter: 'und wir sehen uns die Sache an.',
  },
  pt: {
    metaTitle: 'Erro no servidor | Calculadora de Cru para Cozido',
    metaDescription:
      'Algo deu errado do nosso lado. A Calculadora de Cru para Cozido volta em breve.',
    heading: 'Algo deu errado',
    body: 'Houve um erro inesperado do nosso lado. Normalmente é algo temporário — tente atualizar a página. Se o problema continuar, volte daqui a alguns minutos.',
    homeCta: '← Voltar para a página inicial',
    reload: 'Recarregar a página',
    helpLabel: 'Se isso continuar acontecendo',
    helpBefore: 'Escreva para',
    helpAfter: 'e nós vamos verificar.',
  },
  ja: {
    metaTitle: 'サーバーエラー | 生・加熱後計算機',
    metaDescription:
      'サーバー側で問題が発生しました。生・加熱後計算機はまもなく復旧します。',
    heading: '問題が発生しました',
    body: 'サーバー側で予期しないエラーが発生しました。多くの場合は一時的なものです。ページを再読み込みしてみてください。解消しない場合は、数分後に改めてお試しください。',
    homeCta: '← ホームに戻る',
    reload: 'ページを再読み込み',
    helpLabel: '繰り返し発生する場合',
    helpBefore: 'お手数ですが',
    helpAfter: 'までご連絡ください。確認いたします。',
  },
  ko: {
    metaTitle: '서버 오류 | 생·조리 계산기',
    metaDescription:
      '서버 쪽에서 문제가 발생했습니다. 생·조리 계산기는 곧 정상으로 돌아옵니다.',
    heading: '문제가 발생했습니다',
    body: '서버 쪽에서 예기치 못한 오류가 발생했습니다. 대개는 일시적인 문제이니 페이지를 새로고침해 보세요. 계속된다면 몇 분 뒤에 다시 확인해 주세요.',
    homeCta: '← 홈으로 돌아가기',
    reload: '페이지 새로고침',
    helpLabel: '문제가 계속된다면',
    helpBefore: '이메일',
    helpAfter: '(으)로 알려주시면 확인하겠습니다.',
  },
  it: {
    metaTitle: 'Errore del server | Calcolatore Crudo-Cotto',
    metaDescription:
      'Qualcosa è andato storto dalla nostra parte. Il Calcolatore Crudo-Cotto tornerà a breve.',
    heading: 'Qualcosa è andato storto',
    body: 'Si è verificato un errore imprevisto dalla nostra parte. Di solito è temporaneo: prova a ricaricare la pagina. Se il problema persiste, riprova tra qualche minuto.',
    homeCta: '← Torna alla home',
    reload: 'Ricarica la pagina',
    helpLabel: 'Se continua a succedere',
    helpBefore: 'Scrivici a',
    helpAfter: 'e ce ne occuperemo.',
  },
  hi: {
    metaTitle: 'सर्वर त्रुटि | कच्चे से पके का कैलकुलेटर',
    metaDescription:
      'हमारी तरफ कुछ गड़बड़ हो गई। कच्चे से पके का कैलकुलेटर जल्द ही वापस आ जाएगा।',
    heading: 'कुछ गड़बड़ हो गई',
    body: 'हमारी तरफ एक अप्रत्याशित त्रुटि हुई है। यह आमतौर पर अस्थायी होती है — पेज को रीलोड करके देखें। अगर दिक्कत बनी रहे, तो कुछ मिनट बाद फिर आजमाएं।',
    homeCta: '← होमपेज पर वापस जाएं',
    reload: 'पेज रीलोड करें',
    helpLabel: 'अगर यह बार-बार हो रहा है',
    helpBefore: 'हमें',
    helpAfter: 'पर ईमेल करें, हम देख लेंगे।',
  },
};
