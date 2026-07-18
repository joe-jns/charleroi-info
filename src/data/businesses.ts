// Fiches établissements — DONNÉES PLACEHOLDER (mock). Noms/coordonnées fictifs.
export interface Review {
  author: string;
  rating: number;
  when: string;
  text: string;
}
export interface BusinessHour {
  day: string;
  range: string;
}
export interface Business {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  commune: string;
  rating: number;
  reviews: number;
  blurb: string;
  imageSeed: string;
  openNow: boolean;
  claimed?: boolean;
  // Détail
  address: string;
  phone: string;
  website: string;
  lat: number;
  lng: number;
  priceLevel: string;
  hours: BusinessHour[];
  description: string;
  services: string[];
  gallery: string[];
  reviewList: Review[];
}

const H_COMMERCE: BusinessHour[] = [
  { day: 'Lundi', range: '09:00 – 18:00' },
  { day: 'Mardi', range: '09:00 – 18:00' },
  { day: 'Mercredi', range: '09:00 – 18:00' },
  { day: 'Jeudi', range: '09:00 – 18:00' },
  { day: 'Vendredi', range: '09:00 – 18:30' },
  { day: 'Samedi', range: '09:00 – 17:00' },
  { day: 'Dimanche', range: 'Fermé' },
];

const H_RESTO: BusinessHour[] = [
  { day: 'Lundi', range: 'Fermé' },
  { day: 'Mardi', range: '12:00 – 14:30 · 18:00 – 22:00' },
  { day: 'Mercredi', range: '12:00 – 14:30 · 18:00 – 22:00' },
  { day: 'Jeudi', range: '12:00 – 14:30 · 18:00 – 22:00' },
  { day: 'Vendredi', range: '12:00 – 14:30 · 18:00 – 23:00' },
  { day: 'Samedi', range: '12:00 – 23:00' },
  { day: 'Dimanche', range: '12:00 – 15:00' },
];

export const businesses: Business[] = [
  {
    slug: 'le-comptoir-de-la-sambre',
    name: 'Le Comptoir de la Sambre',
    category: 'Brasserie',
    categorySlug: 'restauration',
    commune: 'Charleroi',
    rating: 4.6,
    reviews: 214,
    blurb: 'Cuisine belge de saison et bières locales, en terrasse sur les quais.',
    imageSeed: 'brasserie-quai-sambre',
    openNow: true,
    address: 'Quai de Brabant 18, 6000 Charleroi',
    phone: '+32 71 30 44 18',
    website: 'lecomptoirdelasambre.be',
    lat: 50.4118,
    lng: 4.4425,
    priceLevel: '€€',
    hours: H_RESTO,
    description:
      'Institution de la Ville Basse, Le Comptoir de la Sambre propose une cuisine belge de saison qui met à l’honneur les producteurs de la région. La carte change au fil des arrivages, la cave privilégie les brasseries wallonnes, et la terrasse donne directement sur les quais réaménagés.',
    services: ['Terrasse', 'Réservation', 'Groupes', 'Bières locales', 'Végétarien', 'Accès PMR'],
    gallery: ['comptoir-salle', 'comptoir-terrasse', 'comptoir-plat', 'comptoir-bar'],
    reviewList: [
      { author: 'Julie Delvaux', rating: 5, when: 'il y a 2 semaines', text: 'Accueil chaleureux, produits frais et une belle sélection de bières. La terrasse sur les quais est un vrai plus l’été.' },
      { author: 'Marco Pirenne', rating: 4, when: 'il y a 1 mois', text: 'Très bonne cuisine de saison. Un peu d’attente le vendredi soir mais ça valait le coup.' },
    ],
  },
  {
    slug: 'boucherie-vandamme',
    claimed: true,
    name: 'Boucherie Vandamme',
    category: 'Boucherie',
    categorySlug: 'commerces',
    commune: 'Gilly',
    rating: 4.8,
    reviews: 96,
    blurb: 'Viandes maturées et charcuterie maison, une institution du quartier.',
    imageSeed: 'boucherie-charcuterie',
    openNow: true,
    address: 'Chaussée de Lodelinsart 233, 6060 Gilly',
    phone: '+32 71 41 22 07',
    website: 'boucherie-vandamme.be',
    lat: 50.4231,
    lng: 4.4712,
    priceLevel: '€€',
    hours: H_COMMERCE,
    description:
      'Boucherie familiale depuis trois générations, la maison Vandamme travaille des viandes maturées sur place et une charcuterie 100 % maison. Commandes pour les fêtes, plats préparés du jour et conseils de cuisson font sa réputation dans tout Gilly.',
    services: ['Charcuterie maison', 'Viande maturée', 'Commandes fêtes', 'Plats préparés', 'Paiement sans contact'],
    gallery: ['vandamme-vitrine', 'vandamme-charcuterie', 'vandamme-etal'],
    reviewList: [
      { author: 'Nadia El Amrani', rating: 5, when: 'il y a 3 jours', text: 'La meilleure boucherie du coin. Les conseils sont toujours au top et la qualité est constante.' },
      { author: 'Christophe Lambert', rating: 5, when: 'il y a 3 semaines', text: 'Charcuterie maison excellente, on sent le savoir-faire. Je recommande les vol-au-vent.' },
    ],
  },
  {
    slug: 'garage-piazza',
    name: 'Garage Piazza',
    category: 'Garage auto',
    categorySlug: 'auto',
    commune: 'Marcinelle',
    rating: 4.4,
    reviews: 132,
    blurb: 'Entretien toutes marques, dépannage et contrôle technique.',
    imageSeed: 'garage-atelier-auto',
    openNow: false,
    address: 'Rue de la Villette 74, 6001 Marcinelle',
    phone: '+32 71 36 90 55',
    website: 'garagepiazza.be',
    lat: 50.3921,
    lng: 4.4402,
    priceLevel: '€€',
    hours: H_COMMERCE,
    description:
      'Garage indépendant multimarques, Piazza assure l’entretien courant, la réparation mécanique, la préparation au contrôle technique et le dépannage sur la région de Charleroi. Devis clair avant intervention et voiture de courtoisie sur demande.',
    services: ['Entretien toutes marques', 'Contrôle technique', 'Dépannage', 'Pneus', 'Voiture de courtoisie'],
    gallery: ['piazza-atelier', 'piazza-mecano', 'piazza-facade'],
    reviewList: [
      { author: 'Sébastien Colin', rating: 5, when: 'il y a 1 semaine', text: 'Diagnostic honnête et tarif correct. Ils n’ont pas cherché à me vendre des réparations inutiles.' },
      { author: 'Fatima Benali', rating: 4, when: 'il y a 2 mois', text: 'Bon travail sur ma voiture, délais respectés. Salle d’attente un peu spartiate.' },
    ],
  },
  {
    slug: 'institut-eclat',
    claimed: true,
    name: 'Institut Éclat',
    category: 'Coiffure & beauté',
    categorySlug: 'beaute',
    commune: 'Jumet',
    rating: 4.7,
    reviews: 158,
    blurb: 'Coupe, couleur et soins du visage sur rendez-vous, du mardi au samedi.',
    imageSeed: 'salon-coiffure-beaute',
    openNow: true,
    address: 'Rue de Bruxelles 112, 6040 Jumet',
    phone: '+32 71 35 61 40',
    website: 'institut-eclat.be',
    lat: 50.4472,
    lng: 4.4321,
    priceLevel: '€€',
    hours: [
      { day: 'Lundi', range: 'Fermé' },
      { day: 'Mardi', range: '09:00 – 18:00' },
      { day: 'Mercredi', range: '09:00 – 18:00' },
      { day: 'Jeudi', range: '09:00 – 20:00' },
      { day: 'Vendredi', range: '09:00 – 18:00' },
      { day: 'Samedi', range: '08:30 – 16:00' },
      { day: 'Dimanche', range: 'Fermé' },
    ],
    description:
      'Salon de coiffure et institut de beauté, Éclat réunit coupe, coloration, soins du visage et manucure dans un cadre calme. L’équipe se forme aux dernières techniques et privilégie des produits respectueux du cuir chevelu.',
    services: ['Coupe & brushing', 'Coloration', 'Soins du visage', 'Manucure', 'Sur rendez-vous'],
    gallery: ['eclat-salon', 'eclat-soin', 'eclat-accueil'],
    reviewList: [
      { author: 'Élodie Mathot', rating: 5, when: 'il y a 5 jours', text: 'Toujours à l’écoute, résultat impeccable. Ma couleur tient super bien.' },
      { author: 'Sarah Deprez', rating: 4, when: 'il y a 1 mois', text: 'Très bon accueil et travail soigné. Prendre rendez-vous à l’avance, c’est souvent complet.' },
    ],
  },
  {
    slug: 'pharmacie-du-beffroi',
    name: 'Pharmacie du Beffroi',
    category: 'Pharmacie',
    categorySlug: 'sante',
    commune: 'Charleroi',
    rating: 4.5,
    reviews: 61,
    blurb: 'Conseil santé, matériel médical et garde de nuit à deux pas de la place.',
    imageSeed: 'pharmacie-officine',
    openNow: true,
    address: 'Rue de la Montagne 41, 6000 Charleroi',
    phone: '+32 71 32 18 90',
    website: 'pharmaciedubeffroi.be',
    lat: 50.4109,
    lng: 4.4451,
    priceLevel: '€',
    hours: H_COMMERCE,
    description:
      'Officine de la Ville Haute, la Pharmacie du Beffroi propose conseil pharmaceutique, préparations, matériel médical et location de matériel de soin. Elle participe au rôle de garde de la région, y compris de nuit.',
    services: ['Conseil santé', 'Matériel médical', 'Préparations', 'Garde de nuit', 'Homéopathie'],
    gallery: ['beffroi-officine', 'beffroi-comptoir', 'beffroi-facade'],
    reviewList: [
      { author: 'Michel Dubois', rating: 5, when: 'il y a 2 semaines', text: 'Pharmacien de garde très arrangeant à 23h, un vrai service pour le quartier.' },
      { author: 'Aline Georges', rating: 4, when: 'il y a 1 mois', text: 'Bon conseil, personnel aimable. Parfois un peu de file en fin de journée.' },
    ],
  },
  {
    slug: 'fleurs-et-terrils',
    claimed: true,
    name: 'Fleurs & Terrils',
    category: 'Fleuriste',
    categorySlug: 'commerces',
    commune: 'Montignies-sur-Sambre',
    rating: 4.9,
    reviews: 74,
    blurb: 'Bouquets de saison et compositions sur mesure, livraison sur la métropole.',
    imageSeed: 'fleuriste-bouquet',
    openNow: false,
    address: 'Rue de la Broucheterre 8, 6061 Montignies-sur-Sambre',
    phone: '+32 71 47 55 12',
    website: 'fleurs-et-terrils.be',
    lat: 50.4061,
    lng: 4.4731,
    priceLevel: '€€',
    hours: H_COMMERCE,
    description:
      'Atelier floral engagé, Fleurs & Terrils compose des bouquets de saison en privilégiant les producteurs locaux. Mariages, deuils, événements et abonnements fleuris, avec livraison sur toute la métropole carolo.',
    services: ['Bouquets de saison', 'Compositions sur mesure', 'Mariages', 'Livraison', 'Abonnements'],
    gallery: ['terrils-boutique', 'terrils-bouquet', 'terrils-atelier'],
    reviewList: [
      { author: 'Camille Renard', rating: 5, when: 'il y a 4 jours', text: 'Des compositions magnifiques et originales. La livraison était pile à l’heure pour l’anniversaire.' },
      { author: 'Thomas Wauters', rating: 5, when: 'il y a 3 semaines', text: 'Fleuriste passionnée, de très bons conseils. Les fleurs ont tenu presque deux semaines.' },
    ],
  },
];

// Sélection mise en avant sur la home (sous-ensemble).
export const featuredBusinesses = businesses;

export function getBusiness(slug: string): Business | undefined {
  return businesses.find((b) => b.slug === slug);
}
