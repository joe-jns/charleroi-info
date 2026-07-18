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
}

export const upcomingEvents: Event[] = [
  { slug: 'marche-de-noel-ville-basse', title: 'Marché de Noël de la Ville Basse', day: '12', month: 'DÉC', time: '11:00', venue: 'Place Charles II', commune: 'Charleroi', category: 'Marché' },
  { slug: 'concert-eclipse-rockerill', title: 'Concert : Éclipse au Rockerill', day: '18', month: 'DÉC', time: '20:30', venue: 'Rockerill', commune: 'Marchienne-au-Pont', category: 'Concert' },
  { slug: 'brocante-de-gilly', title: 'Brocante de Gilly', day: '21', month: 'DÉC', time: '08:00', venue: 'Place Ferrer', commune: 'Gilly', category: 'Brocante' },
  { slug: 'sporting-charleroi-match', title: 'Sporting de Charleroi — journée de championnat', day: '27', month: 'DÉC', time: '18:15', venue: 'Stade du Pays de Charleroi', commune: 'Charleroi', category: 'Sport' },
  { slug: 'atelier-zero-dechet-eden', title: 'Atelier zéro déchet', day: '07', month: 'JAN', time: '14:00', venue: 'L’Éden', commune: 'Charleroi', category: 'Atelier' },
  // Événements d'établissements
  { slug: 'degustation-bieres-comptoir', title: 'Soirée dégustation de bières wallonnes', day: '19', month: 'DÉC', time: '19:00', venue: 'Le Comptoir de la Sambre', commune: 'Charleroi', category: 'Dégustation', businessSlug: 'le-comptoir-de-la-sambre' },
  { slug: 'reveillon-comptoir-sambre', title: 'Réveillon du Nouvel An', day: '31', month: 'DÉC', time: '19:30', venue: 'Le Comptoir de la Sambre', commune: 'Charleroi', category: 'Menu spécial', businessSlug: 'le-comptoir-de-la-sambre' },
  { slug: 'portes-ouvertes-institut-eclat', title: 'Journée portes ouvertes & diagnostics offerts', day: '11', month: 'JAN', time: '10:00', venue: 'Institut Éclat', commune: 'Jumet', category: 'Portes ouvertes', businessSlug: 'institut-eclat' },
];
