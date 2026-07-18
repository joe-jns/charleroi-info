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

// Établissements supplémentaires (placeholder) via factory avec valeurs par défaut.
type MkInput = Omit<Business, 'priceLevel' | 'hours' | 'gallery' | 'reviewList'> &
  Partial<Pick<Business, 'priceLevel' | 'hours' | 'gallery' | 'reviewList'>>;
function mk(o: MkInput): Business {
  return {
    priceLevel: '€€',
    hours: H_COMMERCE,
    gallery: [`${o.imageSeed}-a`, `${o.imageSeed}-b`, `${o.imageSeed}-c`],
    reviewList: [],
    ...o,
  };
}

businesses.push(
  mk({ slug: 'friterie-de-la-place', name: 'Friterie de la Place', category: 'Friterie', categorySlug: 'restauration', commune: 'Charleroi', rating: 4.3, reviews: 187, blurb: 'Fricadelles, mitraillettes et frites fraîches sur la place du Manège.', imageSeed: 'friterie-frites', openNow: true, address: 'Place du Manège 3, 6000 Charleroi', phone: '+32 71 30 22 45', website: 'friteriedelaplace.be', lat: 50.4099, lng: 4.4432, priceLevel: '€', hours: H_RESTO, description: 'La friterie de référence du centre : frites fraîches coupées maison, sauces artisanales et snacks du soir.', services: ['À emporter', 'Sur place', 'Sauces maison', 'Tard le soir'] }),
  mk({ slug: 'pizzeria-napoli', name: 'Pizzeria Napoli', category: 'Pizzeria', categorySlug: 'restauration', commune: 'Gilly', rating: 4.5, reviews: 142, blurb: 'Pizzas au feu de bois et pâtes fraîches, à emporter ou en salle.', imageSeed: 'pizzeria-four', openNow: false, address: 'Chaussée de Fleurus 88, 6060 Gilly', phone: '+32 71 28 61 30', website: 'napoli-gilly.be', lat: 50.4242, lng: 4.4705, hours: H_RESTO, description: 'Vraie pizza napolitaine cuite au feu de bois, pâte levée 48h et produits italiens importés.', services: ['Feu de bois', 'À emporter', 'Livraison', 'Végétarien'] }),
  mk({ slug: 'epicerie-coquelicot', name: 'Épicerie Coquelicot', category: 'Épicerie bio', categorySlug: 'commerces', commune: 'Charleroi', rating: 4.7, reviews: 88, blurb: 'Produits locaux, vrac et bio, à deux pas de la gare.', imageSeed: 'epicerie-bio-vrac', openNow: true, address: 'Rue du Grand Central 12, 6000 Charleroi', phone: '+32 71 33 09 74', website: 'coquelicot-charleroi.be', lat: 50.4122, lng: 4.4389, description: 'Épicerie de circuit court : fruits et légumes locaux, vrac, fromages et bières artisanales de la région.', services: ['Vrac', 'Bio', 'Produits locaux', 'Paniers'] }),
  mk({ slug: 'librairie-moliere', name: 'Librairie Molière', category: 'Librairie', categorySlug: 'commerces', commune: 'Charleroi', rating: 4.8, reviews: 63, blurb: 'Librairie indépendante, rencontres d’auteurs et rayon jeunesse.', imageSeed: 'librairie-livres', openNow: true, address: 'Boulevard Tirou 54, 6000 Charleroi', phone: '+32 71 32 45 11', website: 'librairie-moliere.be', lat: 50.4085, lng: 4.4451, description: 'Librairie généraliste indépendante avec un fort rayon BD et jeunesse, et des rencontres régulières.', services: ['Commande 24h', 'Rencontres', 'Rayon BD', 'Carte cadeau'] }),
  mk({ slug: 'toiture-demoulin', name: 'Toitures Demoulin', category: 'Couvreur', categorySlug: 'artisans', commune: 'Jumet', rating: 4.6, reviews: 51, blurb: 'Rénovation et réparation de toitures, zinguerie, devis gratuit.', imageSeed: 'toiture-couvreur', openNow: true, address: 'Rue de la Station 19, 6040 Jumet', phone: '+32 71 34 77 20', website: 'toitures-demoulin.be', lat: 50.4461, lng: 4.4312, description: 'Entreprise de toiture familiale : rénovation complète, réparation, isolation et zinguerie sur toute la métropole.', services: ['Devis gratuit', 'Zinguerie', 'Isolation', 'Urgences'] }),
  mk({ slug: 'electricite-servais', name: 'Électricité Servais', category: 'Électricien', categorySlug: 'artisans', commune: 'Gosselies', rating: 4.4, reviews: 39, blurb: 'Installations, mises en conformité et dépannage électrique.', imageSeed: 'electricien-tableau', openNow: false, address: 'Rue de Ransart 5, 6041 Gosselies', phone: '+32 71 35 88 12', website: 'electricite-servais.be', lat: 50.4635, lng: 4.4318, description: 'Électricien agréé : nouvelles installations, mise en conformité RGIE, bornes de recharge et dépannage.', services: ['Mise en conformité', 'Bornes de recharge', 'Dépannage', 'Domotique'] }),
  mk({ slug: 'cabinet-dentaire-sourire', name: 'Cabinet dentaire Sourire', category: 'Dentiste', categorySlug: 'sante', commune: 'Charleroi', rating: 4.5, reviews: 96, blurb: 'Soins dentaires, orthodontie et urgences, sur rendez-vous.', imageSeed: 'cabinet-dentaire', openNow: true, address: 'Avenue de Waterloo 30, 6000 Charleroi', phone: '+32 71 31 50 40', website: 'cabinet-sourire.be', lat: 50.4071, lng: 4.4402, description: 'Cabinet dentaire pluridisciplinaire : soins généraux, esthétique, orthodontie et gestion des urgences.', services: ['Sur rendez-vous', 'Orthodontie', 'Urgences', 'Tiers payant'] }),
  mk({ slug: 'kine-mobilite-plus', name: 'Kiné Mobilité+', category: 'Kinésithérapie', categorySlug: 'sante', commune: 'Montignies-sur-Sambre', rating: 4.9, reviews: 72, blurb: 'Rééducation, sport et thérapie manuelle, à domicile possible.', imageSeed: 'kine-cabinet', openNow: true, address: 'Rue Paul Pastur 61, 6061 Montignies-sur-Sambre', phone: '+32 71 47 12 88', website: 'kine-mobilite.be', lat: 50.4049, lng: 4.4728, description: 'Cabinet de kinésithérapie : rééducation post-opératoire, kiné du sport, thérapie manuelle et séances à domicile.', services: ['Kiné du sport', 'À domicile', 'Thérapie manuelle', 'Sur rendez-vous'] }),
  mk({ slug: 'barbier-le-rasoir', name: 'Le Rasoir', category: 'Barbier', categorySlug: 'beaute', commune: 'Charleroi', rating: 4.7, reviews: 128, blurb: 'Barbier traditionnel : coupe, taille de barbe et rasage à l’ancienne.', imageSeed: 'barbier-salon', openNow: true, address: 'Rue de Marchienne 22, 6000 Charleroi', phone: '+32 71 30 66 19', website: 'lerasoir-charleroi.be', lat: 50.4102, lng: 4.4409, description: 'Barbershop à l’ambiance vintage : coupes homme, taille de barbe et rasage à la serviette chaude.', services: ['Sans rendez-vous', 'Rasage', 'Barbe', 'Enfants'] }),
  mk({ slug: 'carrosserie-lemaire', name: 'Carrosserie Lemaire', category: 'Carrosserie', categorySlug: 'auto', commune: 'Couillet', rating: 4.5, reviews: 84, blurb: 'Réparation carrosserie, débosselage et gestion sinistre.', imageSeed: 'carrosserie-atelier', openNow: false, address: 'Route de Philippeville 210, 6010 Couillet', phone: '+32 71 36 40 77', website: 'carrosserie-lemaire.be', lat: 50.3888, lng: 4.4692, description: 'Carrosserie toutes marques : réparation, peinture, débosselage sans peinture et prise en charge des sinistres.', services: ['Gestion sinistre', 'Véhicule de prêt', 'Peinture', 'Débosselage'] }),
  mk({ slug: 'sambre-immo', name: 'Sambre Immo', category: 'Agence immobilière', categorySlug: 'immobilier', commune: 'Charleroi', rating: 4.2, reviews: 57, blurb: 'Vente, location et estimation gratuite sur la métropole.', imageSeed: 'agence-immobiliere', openNow: true, address: 'Boulevard Joseph Tirou 130, 6000 Charleroi', phone: '+32 71 20 33 55', website: 'sambre-immo.be', lat: 50.4079, lng: 4.4462, description: 'Agence immobilière locale : vente, location, gestion locative et estimation gratuite de votre bien.', services: ['Estimation gratuite', 'Location', 'Gestion locative', 'Vente'] }),
  mk({ slug: 'bloc6000-escalade', name: 'Bloc 6000', category: 'Salle d’escalade', categorySlug: 'loisirs', commune: 'Marcinelle', rating: 4.8, reviews: 203, blurb: 'Salle de bloc indoor, cours et espace convivial.', imageSeed: 'salle-escalade-bloc', openNow: true, address: 'Rue de l’Éclipse 4, 6001 Marcinelle', phone: '+32 71 27 90 04', website: 'bloc6000.be', lat: 50.3899, lng: 4.4371, description: 'Salle d’escalade de bloc : 250 blocs renouvelés chaque mois, cours tous niveaux, bar et coworking.', services: ['Cours', 'Location matériel', 'Bar', 'Abonnements'] }),
  mk({ slug: 'cinema-le-parc', name: 'Cinéma Le Parc', category: 'Cinéma', categorySlug: 'culture', commune: 'Charleroi', rating: 4.6, reviews: 311, blurb: 'Cinéma art & essai, films en VO et rencontres.', imageSeed: 'cinema-salle', openNow: true, address: 'Rue de Montigny 58, 6000 Charleroi', phone: '+32 71 31 71 47', website: 'cinemaleparc.be', lat: 50.4093, lng: 4.4478, description: 'Cinéma art et essai du centre : films en version originale, avant-premières et rencontres avec les équipes.', services: ['VO sous-titrée', 'Art & essai', 'Abonnement', 'Accessible PMR'] }),
);

// Sélection mise en avant sur la home (sous-ensemble).
export const featuredBusinesses = businesses.slice(0, 6);

export function getBusiness(slug: string): Business | undefined {
  return businesses.find((b) => b.slug === slug);
}
