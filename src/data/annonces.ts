// Petites annonces — DONNÉES PLACEHOLDER (mock). Vendeurs/prix fictifs.
export interface Annonce {
  slug: string;
  title: string;
  price: string;
  category: string;
  commune: string;
  blurb: string;
  description: string;
  seller: string;
  posted: string;
  imageSeed: string;
  condition?: string;
}

const d = {
  description:
    'Article en bon état, visible sur rendez-vous. Remise en main propre sur la métropole carolo. Contactez le vendeur via le bouton ci-dessous pour convenir d’un rendez-vous.',
};

function mk(o: Omit<Annonce, 'description'> & Partial<Annonce>): Annonce {
  return { ...d, ...o };
}

export const annonces: Annonce[] = [
  mk({ slug: 'velo-electrique-ville', title: 'Vélo électrique de ville', price: '850 €', category: 'Véhicules', commune: 'Charleroi', blurb: 'Batterie 500 Wh, autonomie 70 km, peu servi.', imageSeed: 'annonce-velo-electrique', condition: 'Très bon état', seller: 'Damien V.', posted: 'il y a 2 j', description: 'Vélo électrique de ville acheté l’an dernier, très peu utilisé. Batterie 500 Wh (autonomie ~70 km), moteur central, freins à disque, éclairage intégré. Entretien à jour. Visible à Charleroi, essai possible.' }),
  mk({ slug: 'appartement-2ch-gilly', title: 'Appartement 2 chambres à louer', price: '720 €/mois', category: 'Immobilier', commune: 'Gilly', blurb: 'Lumineux, proche commerces, libre de suite.', imageSeed: 'annonce-appartement', seller: 'Agence Sambre Immo', posted: 'il y a 1 j', description: 'Bel appartement de 2 chambres au 1er étage, lumineux et rénové. Cuisine équipée, salle de bain avec douche, cave. Proche commerces et transports. Charges 60 €/mois. Libre immédiatement, garantie 2 mois.' }),
  mk({ slug: 'canape-angle-gris', title: 'Canapé d’angle gris', price: '200 €', category: 'Maison', commune: 'Marcinelle', blurb: 'Convertible, 5 places, à venir chercher.', imageSeed: 'annonce-canape', condition: 'Bon état', seller: 'Sophie L.', posted: 'il y a 4 j', description: 'Canapé d’angle convertible 5 places, tissu gris. Quelques traces d’usage mais très confortable. Dimensions 275 x 200 cm. À venir chercher à Marcinelle (démontable).' }),
  mk({ slug: 'iphone-13-128', title: 'iPhone 13 128 Go', price: '380 €', category: 'Multimédia', commune: 'Charleroi', blurb: 'Débloqué, batterie 89 %, avec coque.', imageSeed: 'annonce-iphone', condition: 'Très bon état', seller: 'Karim B.', posted: 'il y a 3 j', description: 'iPhone 13 128 Go, coloris minuit, débloqué tout opérateur. État de la batterie 89 %. Aucune rayure, toujours sous coque et verre trempé (fournis). Boîte et câble inclus.' }),
  mk({ slug: 'cours-guitare-jumet', title: 'Cours de guitare à domicile', price: '20 €/h', category: 'Services', commune: 'Jumet', blurb: 'Tous niveaux, débutants bienvenus.', imageSeed: 'annonce-guitare', seller: 'Luc M.', posted: 'il y a 6 j', description: 'Professeur de guitare propose des cours à domicile sur la région de Charleroi. Tous niveaux et tous styles (acoustique, électrique). Première séance découverte à tarif réduit. Matériel de prêt possible.' }),
  mk({ slug: 'table-chene-massif', title: 'Table à manger chêne massif', price: '150 €', category: 'Maison', commune: 'Montignies-sur-Sambre', blurb: '6 personnes, robuste, style rustique.', imageSeed: 'annonce-table-chene', condition: 'Bon état', seller: 'Marie D.', posted: 'il y a 1 sem.', description: 'Table à manger en chêne massif pour 6 personnes, style rustique. Très robuste, quelques marques d’usage sur le plateau. Dimensions 180 x 90 cm. À enlever à Montignies-sur-Sambre.' }),
  mk({ slug: 'trottinette-electrique', title: 'Trottinette électrique', price: '250 €', category: 'Véhicules', commune: 'Charleroi', blurb: 'Autonomie 30 km, pliable, avec chargeur.', imageSeed: 'annonce-trottinette', condition: 'Très bon état', seller: 'Enzo P.', posted: 'il y a 5 j', description: 'Trottinette électrique pliable, autonomie 30 km, vitesse max 25 km/h. Freins électrique et mécanique, éclairage avant/arrière. Chargeur inclus. Idéale pour les trajets en ville.' }),
  mk({ slug: 'manteau-hiver-femme', title: 'Manteau d’hiver femme (T. M)', price: '35 €', category: 'Mode & Beauté', commune: 'Gilly', blurb: 'Neuf avec étiquette, taille M, couleur camel.', imageSeed: 'annonce-manteau', condition: 'Neuf', seller: 'Nadia E.', posted: 'il y a 3 j', description: 'Manteau d’hiver femme taille M, couleur camel, neuf avec étiquette (jamais porté). Coupe longue, chaud et élégant. Erreur de taille, d’où la vente. Remise en main propre à Gilly.' }),
  mk({ slug: 'garde-enfants-marcinelle', title: 'Garde d’enfants après l’école', price: '12 €/h', category: 'Services', commune: 'Marcinelle', blurb: 'Étudiante sérieuse, références disponibles.', imageSeed: 'annonce-garde-enfants', seller: 'Camille R.', posted: 'il y a 2 j', description: 'Étudiante en pédagogie propose de garder vos enfants après l’école (sortie, goûter, devoirs). Sérieuse et expérimentée, références disponibles. Disponible en semaine sur Marcinelle et alentours.' }),
  mk({ slug: 'poussette-3-roues', title: 'Poussette 3 roues', price: '90 €', category: 'Loisirs', commune: 'Couillet', blurb: 'Tout-terrain, avec nacelle et habillage pluie.', imageSeed: 'annonce-poussette', condition: 'Bon état', seller: 'Julie T.', posted: 'il y a 1 sem.', description: 'Poussette 3 roues tout-terrain, avec nacelle, habillage pluie et ombrelle. Pliage facile, roues gonflables. Bon état général, quelques traces d’usage. À enlever à Couillet.' }),
];

export function getAnnonce(slug: string): Annonce | undefined {
  return annonces.find((a) => a.slug === slug);
}
