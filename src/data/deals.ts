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
  businessSlug?: string;
  description: string;
  conditions: string[];
}

const d = {
  conditions: ['Non cumulable avec d’autres promotions', 'Dans la limite des stocks disponibles'],
};

function mk(o: Omit<Deal, 'conditions'> & Partial<Deal>): Deal {
  return { ...d, ...o };
}

export const deals: Deal[] = [
  mk({ slug: 'menu-midi-comptoir-sambre', business: 'Le Comptoir de la Sambre', businessSlug: 'le-comptoir-de-la-sambre', title: 'Menu du midi', discount: '-20%', category: 'Restauration', commune: 'Charleroi', blurb: 'Entrée + plat + café du lundi au vendredi.', validUntil: '31 déc', imageSeed: 'deal-restaurant-menu', description: 'Profitez de -20% sur notre formule du midi (entrée + plat + café) du lundi au vendredi. Une cuisine belge de saison à petit prix, en salle ou en terrasse sur les quais.', conditions: ['Valable le midi en semaine', 'Hors boissons alcoolisées', 'Sur présentation de l’offre'] }),
  mk({ slug: 'soin-offert-institut-eclat', business: 'Institut Éclat', businessSlug: 'institut-eclat', title: 'Soin visage offert', discount: 'Offert', category: 'Beauté', commune: 'Jumet', blurb: 'Un soin offert dès deux prestations réservées.', validUntil: '15 jan', imageSeed: 'deal-beaute-spa', description: 'Un soin du visage offert dès deux prestations réservées lors du même rendez-vous. L’occasion de tester nos soins tout en profitant de votre coupe ou coloration.', conditions: ['Sur rendez-vous', 'Deux prestations minimum', 'Une offre par client'] }),
  mk({ slug: 'vidange-controle-garage-piazza', business: 'Garage Piazza', businessSlug: 'garage-piazza', title: 'Vidange + contrôle', discount: '-15%', category: 'Auto', commune: 'Marcinelle', blurb: 'Forfait entretien toutes marques, sur rendez-vous.', validUntil: '28 déc', imageSeed: 'deal-garage-auto', description: 'Forfait vidange + contrôle des points de sécurité à -15%, toutes marques. Idéal avant l’hiver pour partir l’esprit tranquille.', conditions: ['Sur rendez-vous', 'Huile et filtre inclus', 'Devis avant intervention'] }),
  mk({ slug: 'charcuterie-boucherie-vandamme', business: 'Boucherie Vandamme', businessSlug: 'boucherie-vandamme', title: 'Charcuterie maison', discount: '3 = 2', category: 'Commerces', commune: 'Gilly', blurb: 'Trois produits achetés, le moins cher offert.', validUntil: '24 déc', imageSeed: 'deal-boucherie-charcuterie', description: 'Sur toute notre charcuterie maison : trois produits achetés, le moins cher offert. De quoi préparer vos plateaux de fêtes à prix doux.', conditions: ['Sur la charcuterie maison uniquement', 'Le produit offert est le moins cher des trois'] }),
  mk({ slug: 'bouquets-fleurs-terrils', business: 'Fleurs & Terrils', businessSlug: 'fleurs-et-terrils', title: 'Bouquets de saison', discount: '-10%', category: 'Fleuriste', commune: 'Montignies-sur-Sambre', blurb: 'Sur toute la collection d’hiver, en boutique.', validUntil: '05 jan', imageSeed: 'deal-fleuriste-bouquet', description: '-10% sur toute la collection d’hiver en boutique. Bouquets de saison et compositions sur mesure, à offrir ou à s’offrir.', conditions: ['En boutique', 'Hors livraison', 'Sur la collection d’hiver'] }),
  mk({ slug: 'audit-web-nalinnes-digital', business: 'Nalinnes Digital', title: 'Audit de site web', discount: 'Offert', category: 'Services pros', commune: 'Charleroi', blurb: 'Diagnostic complet offert pour les commerces locaux.', validUntil: '31 jan', imageSeed: 'deal-bureau-web', description: 'Un audit complet de votre site web offert pour les commerces de la métropole : performance, référencement et expérience mobile. Rapport clair et recommandations concrètes.', conditions: ['Réservé aux commerces locaux', 'Un audit par entreprise', 'Sur rendez-vous'] }),
];

export function getDeal(slug: string): Deal | undefined {
  return deals.find((x) => x.slug === slug);
}
