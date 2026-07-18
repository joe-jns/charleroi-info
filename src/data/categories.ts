// Secteurs de l'annuaire. `icon` = nom d'un glyphe Phosphor (rendu inline).
// Placeholder — sert aux chips de recherche rapide et à la grille /annuaire.
export interface Category {
  slug: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { slug: 'restauration', name: 'Restauration', icon: 'fork-knife' },
  { slug: 'sante', name: 'Santé', icon: 'first-aid' },
  { slug: 'commerces', name: 'Commerces', icon: 'storefront' },
  { slug: 'artisans', name: 'Artisans & BTP', icon: 'wrench' },
  { slug: 'beaute', name: 'Beauté & bien-être', icon: 'scissors' },
  { slug: 'auto', name: 'Auto & mobilité', icon: 'car' },
  { slug: 'immobilier', name: 'Immobilier', icon: 'house-line' },
  { slug: 'services-pro', name: 'Services aux pros', icon: 'briefcase' },
  { slug: 'education', name: 'Éducation', icon: 'graduation-cap' },
  { slug: 'loisirs', name: 'Sports & loisirs', icon: 'basketball' },
  { slug: 'culture', name: 'Culture & sorties', icon: 'ticket' },
  { slug: 'administrations', name: 'Administrations', icon: 'bank' },
];

// Recherches les plus fréquentes — chips sous la barre de recherche du hero.
export const popularSearches: { label: string; q: string }[] = [
  { label: 'Restaurants', q: 'restaurant' },
  { label: 'Plombiers', q: 'plombier' },
  { label: 'Coiffeurs', q: 'coiffeur' },
  { label: 'Médecins', q: 'medecin' },
  { label: 'Garages', q: 'garage' },
  { label: 'Pharmacies', q: 'pharmacie' },
];
