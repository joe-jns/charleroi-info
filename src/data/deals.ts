// Bons plans — DONNÉES PLACEHOLDER (mock). Offres/dates fictives.
export interface Deal {
  slug: string;
  business: string;
  title: string;
  discount: string;
  category: string;
  commune: string;
  blurb: string;
  validUntil: string;
  imageSeed: string;
}

export const deals: Deal[] = [
  { slug: 'menu-midi-comptoir-sambre', business: 'Le Comptoir de la Sambre', title: 'Menu du midi', discount: '-20%', category: 'Restauration', commune: 'Charleroi', blurb: 'Entrée + plat + café du lundi au vendredi.', validUntil: '31 déc', imageSeed: 'deal-restaurant-menu' },
  { slug: 'soin-offert-institut-eclat', business: 'Institut Éclat', title: 'Soin visage offert', discount: 'Offert', category: 'Beauté', commune: 'Jumet', blurb: 'Un soin offert dès deux prestations réservées.', validUntil: '15 jan', imageSeed: 'deal-beaute-spa' },
  { slug: 'vidange-controle-garage-piazza', business: 'Garage Piazza', title: 'Vidange + contrôle', discount: '-15%', category: 'Auto', commune: 'Marcinelle', blurb: 'Forfait entretien toutes marques, sur rendez-vous.', validUntil: '28 déc', imageSeed: 'deal-garage-auto' },
  { slug: 'charcuterie-boucherie-vandamme', business: 'Boucherie Vandamme', title: 'Charcuterie maison', discount: '3 = 2', category: 'Commerces', commune: 'Gilly', blurb: 'Trois produits achetés, le moins cher offert.', validUntil: '24 déc', imageSeed: 'deal-boucherie-charcuterie' },
  { slug: 'bouquets-fleurs-terrils', business: 'Fleurs & Terrils', title: 'Bouquets de saison', discount: '-10%', category: 'Fleuriste', commune: 'Montignies-sur-Sambre', blurb: 'Sur toute la collection d’hiver, en boutique.', validUntil: '05 jan', imageSeed: 'deal-fleuriste-bouquet' },
  { slug: 'audit-web-nalinnes-digital', business: 'Nalinnes Digital', title: 'Audit de site web', discount: 'Offert', category: 'Services pros', commune: 'Charleroi', blurb: 'Diagnostic complet offert pour les commerces locaux.', validUntil: '31 jan', imageSeed: 'deal-bureau-web' },
];
