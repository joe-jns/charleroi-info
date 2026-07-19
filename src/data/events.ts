// Événements — DONNÉES PLACEHOLDER (mock). Dates/lieux fictifs.
export interface Event {
  slug: string;
  title: string;
  day: string;
  month: string;
  time: string;
  venue: string;
  commune: string;
  category: string;
  businessSlug?: string;
  // Détail
  fullDate: string;
  address: string;
  price: string;
  description: string;
  imageSeed: string;
}

const d = {
  fullDate: 'Date à confirmer',
  address: 'Charleroi Métropole',
  price: 'Gratuit',
  description:
    'Un rendez-vous à ne pas manquer sur la métropole carolo. Retrouvez toutes les informations pratiques ci-dessous et venez nombreux.',
  imageSeed: 'event-charleroi',
};

function mk(o: Omit<Event, keyof typeof d> & Partial<Event>): Event {
  return { ...d, ...o };
}

export const upcomingEvents: Event[] = [
  mk({ slug: 'marche-de-noel-ville-basse', title: 'Marché de Noël de la Ville Basse', day: '12', month: 'DÉC', time: '11:00', venue: 'Place Charles II', commune: 'Charleroi', category: 'Marché', fullDate: 'Vendredi 12 décembre 2025', address: 'Place Charles II, 6000 Charleroi', price: 'Gratuit', imageSeed: 'marche-de-noel', description: 'Chalets d’artisans, vin chaud et animations pour toute la famille au cœur de la Ville Basse. Petite restauration et idées cadeaux locales tout au long de la journée.' }),
  mk({ slug: 'concert-eclipse-rockerill', title: 'Concert : Éclipse au Rockerill', day: '18', month: 'DÉC', time: '20:30', venue: 'Rockerill', commune: 'Marchienne-au-Pont', category: 'Concert', fullDate: 'Jeudi 18 décembre 2025', address: 'Rue de la Providence 1, 6030 Marchienne-au-Pont', price: '18 € · prévente 14 €', imageSeed: 'concert-rockerill', description: 'Soirée live dans le cadre industriel mythique du Rockerill. Première partie locale, puis le groupe Éclipse pour un set électro-rock. Bar et food trucks sur place.' }),
  mk({ slug: 'brocante-de-gilly', title: 'Brocante de Gilly', day: '21', month: 'DÉC', time: '08:00', venue: 'Place Ferrer', commune: 'Gilly', category: 'Brocante', fullDate: 'Dimanche 21 décembre 2025', address: 'Place Ferrer, 6060 Gilly', price: 'Gratuit', imageSeed: 'brocante-marche', description: 'Grande brocante dominicale : particuliers et professionnels, chine, vintage et bonnes affaires. Buvette et petite restauration assurées par les commerçants du quartier.' }),
  mk({ slug: 'sporting-charleroi-match', title: 'Sporting de Charleroi — journée de championnat', day: '27', month: 'DÉC', time: '18:15', venue: 'Stade du Pays de Charleroi', commune: 'Charleroi', category: 'Sport', fullDate: 'Samedi 27 décembre 2025', address: 'Boulevard Zoé Drion 91, 6000 Charleroi', price: 'À partir de 20 €', imageSeed: 'stade-football', description: 'Venez soutenir les Zèbres au Stade du Pays de Charleroi pour cette journée de championnat. Ambiance garantie dans les tribunes.' }),
  mk({ slug: 'atelier-zero-dechet-eden', title: 'Atelier zéro déchet', day: '07', month: 'JAN', time: '14:00', venue: 'L’Éden', commune: 'Charleroi', category: 'Atelier', fullDate: 'Mercredi 7 janvier 2026', address: 'Boulevard Jacques Bertrand 1, 6000 Charleroi', price: '5 € · sur inscription', imageSeed: 'atelier-zero-dechet', description: 'Atelier pratique pour réduire ses déchets au quotidien : produits ménagers maison, courses en vrac et astuces zéro déchet. Places limitées, inscription conseillée.' }),
  mk({ slug: 'degustation-bieres-comptoir', title: 'Soirée dégustation de bières wallonnes', day: '19', month: 'DÉC', time: '19:00', venue: 'Le Comptoir de la Sambre', commune: 'Charleroi', category: 'Dégustation', businessSlug: 'le-comptoir-de-la-sambre', fullDate: 'Vendredi 19 décembre 2025', address: 'Quai de Brabant 18, 6000 Charleroi', price: '25 € · 5 bières + planche', imageSeed: 'degustation-bieres', description: 'Cinq bières artisanales wallonnes commentées, accompagnées d’une planche de produits locaux. Une soirée conviviale pour découvrir les brasseries de la région.' }),
  mk({ slug: 'reveillon-comptoir-sambre', title: 'Réveillon du Nouvel An', day: '31', month: 'DÉC', time: '19:30', venue: 'Le Comptoir de la Sambre', commune: 'Charleroi', category: 'Menu spécial', businessSlug: 'le-comptoir-de-la-sambre', fullDate: 'Mercredi 31 décembre 2025', address: 'Quai de Brabant 18, 6000 Charleroi', price: '75 € · menu 5 services', imageSeed: 'reveillon-menu', description: 'Menu gastronomique en 5 services pour passer au Nouvel An en beauté, avec coupe de mousseux à minuit. Réservation obligatoire.' }),
  mk({ slug: 'portes-ouvertes-institut-eclat', title: 'Journée portes ouvertes & diagnostics offerts', day: '11', month: 'JAN', time: '10:00', venue: 'Institut Éclat', commune: 'Jumet', category: 'Portes ouvertes', businessSlug: 'institut-eclat', fullDate: 'Dimanche 11 janvier 2026', address: 'Rue de Bruxelles 112, 6040 Jumet', price: 'Gratuit', imageSeed: 'institut-portes-ouvertes', description: 'Découvrez l’institut, rencontrez l’équipe et profitez d’un diagnostic capillaire ou de peau offert. Offres spéciales sur les soins réservés durant la journée.' }),
];

export function getEvent(slug: string): Event | undefined {
  return upcomingEvents.find((e) => e.slug === slug);
}
