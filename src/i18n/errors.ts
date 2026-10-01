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
};
