// Actualités locales — DONNÉES PLACEHOLDER (mock). Contenus fictifs.
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  imageSeed: string;
  content: string[];
}

function mk(o: Omit<Article, 'content'> & Partial<Article>): Article {
  return {
    content: [
      'La métropole carolo poursuit sa transformation, portée par de nombreux projets qui redessinent la ville et son quotidien. Les habitants comme les commerçants suivent de près ces évolutions.',
      'Sur le terrain, les acteurs locaux saluent une dynamique qui profite à l’ensemble de l’entité. Les prochains mois seront décisifs pour concrétiser les ambitions annoncées.',
      'Restez informé des dernières actualités de Charleroi et de ses communes sur charleroi.info.',
    ],
    ...o,
  };
}

export const articles: Article[] = [
  mk({
    slug: 'quais-de-sambre-reamenages',
    title: 'Les quais de Sambre rouverts après réaménagement',
    excerpt: 'Promenade élargie, pistes cyclables et terrasses : les quais de la Ville Basse font peau neuve et retrouvent les promeneurs.',
    category: 'Urbanisme',
    author: 'Rédaction',
    date: '18 décembre 2025',
    readingTime: '3 min',
    imageSeed: 'actu-quais-sambre',
    content: [
      'Après plusieurs mois de travaux, les quais de Sambre rouvrent au public avec un visage résolument tourné vers les piétons et les cyclistes. La promenade a été élargie, de nouvelles plantations installées et un éclairage repensé sécurise les abords en soirée.',
      'Côté commerces, plusieurs terrasses profitent désormais de la vue sur l’eau. « C’est un vrai changement d’ambiance, on sent que les gens réinvestissent le centre », confie un restaurateur des environs.',
      'Le réaménagement s’inscrit dans un plan plus large de revalorisation de la Ville Basse, qui doit se poursuivre l’an prochain avec la rénovation de plusieurs places.',
    ],
  }),
  mk({
    slug: 'rockerill-programmation-hiver',
    title: 'Le Rockerill dévoile sa programmation d’hiver',
    excerpt: 'Concerts, expos et soirées : la friche industrielle de Marchienne annonce une saison hivernale dense.',
    category: 'Culture',
    author: 'Rédaction',
    date: '16 décembre 2025',
    readingTime: '2 min',
    imageSeed: 'actu-rockerill',
    content: [
      'Le Rockerill, lieu culturel emblématique installé dans une ancienne forge de Marchienne-au-Pont, a dévoilé une programmation hivernale mêlant concerts, expositions et soirées festives.',
      'La saison s’ouvre sur une série de dates électro-rock, avant plusieurs rendez-vous consacrés à la scène locale. Les organisateurs promettent « une programmation exigeante et accessible ».',
    ],
  }),
  mk({
    slug: 'parc-activites-gosselies',
    title: 'Un nouveau parc d’activités à Gosselies',
    excerpt: 'Le projet doit accueillir PME et start-ups à proximité de l’aéroport, avec plusieurs centaines d’emplois attendus.',
    category: 'Économie',
    author: 'Rédaction',
    date: '14 décembre 2025',
    readingTime: '3 min',
    imageSeed: 'actu-parc-activites',
    content: [
      'Un nouveau parc d’activités économiques doit voir le jour à Gosselies, à proximité immédiate de l’aéroport. Le site vise en priorité les PME et les jeunes entreprises innovantes.',
      'Les porteurs du projet évoquent plusieurs centaines d’emplois à terme et une attention particulière portée à la mobilité douce et à la performance énergétique des bâtiments.',
    ],
  }),
  mk({
    slug: 'sporting-quatrieme-victoire',
    title: 'Le Sporting enchaîne une 4ᵉ victoire',
    excerpt: 'Les Zèbres poursuivent leur belle série et confortent leur place dans le haut du classement.',
    category: 'Sport',
    author: 'Rédaction',
    date: '13 décembre 2025',
    readingTime: '2 min',
    imageSeed: 'actu-sporting',
    content: [
      'Le Sporting de Charleroi a signé une quatrième victoire consécutive, portée par une défense solide et un collectif retrouvé. Le Stade du Pays de Charleroi a de nouveau fait le plein.',
      'Les supporters carolos peuvent rêver d’une place européenne si la dynamique se confirme dans les prochaines semaines.',
    ],
  }),
  mk({
    slug: 'ligne-bus-express-aeroport',
    title: 'Une ligne de bus express vers l’aéroport',
    excerpt: 'La nouvelle liaison relie le centre-ville à l’aéroport en une vingtaine de minutes, à cadence renforcée.',
    category: 'Mobilité',
    author: 'Rédaction',
    date: '11 décembre 2025',
    readingTime: '2 min',
    imageSeed: 'actu-bus-express',
    content: [
      'Une ligne de bus express relie désormais le centre de Charleroi à l’aéroport de Gosselies en une vingtaine de minutes, avec une fréquence renforcée aux heures de pointe.',
      'La liaison vise à faciliter les déplacements des voyageurs comme des travailleurs du pôle aéroportuaire, tout en réduisant la pression automobile sur les axes concernés.',
    ],
  }),
  mk({
    slug: 'marche-noel-record',
    title: 'Marché de Noël : record d’affluence en Ville Basse',
    excerpt: 'Chalets d’artisans, patinoire et animations : le marché de Noël attire les foules cette année.',
    category: 'Vie locale',
    author: 'Rédaction',
    date: '9 décembre 2025',
    readingTime: '2 min',
    imageSeed: 'actu-marche-noel',
    content: [
      'Le marché de Noël de la Ville Basse connaît une affluence record cette année, portée par une météo clémente et une offre élargie de chalets d’artisans locaux.',
      'Entre patinoire, animations pour enfants et petite restauration, le rendez-vous s’impose comme un temps fort des fêtes pour toute la métropole.',
    ],
  }),
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
