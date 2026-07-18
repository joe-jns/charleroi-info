// Offres d'emploi — DONNÉES PLACEHOLDER (mock). Employeurs/délais fictifs.
export interface Job {
  slug: string;
  title: string;
  company: string;
  commune: string;
  contract: string;
  sector: string;
  posted: string;
  businessSlug?: string;
}

export const latestJobs: Job[] = [
  { slug: 'serveur-comptoir-sambre', title: 'Serveur / Serveuse', company: 'Le Comptoir de la Sambre', commune: 'Charleroi', contract: 'CDI', sector: 'Horeca', posted: 'il y a 2 j', businessSlug: 'le-comptoir-de-la-sambre' },
  { slug: 'commis-cuisine-comptoir-sambre', title: 'Commis de cuisine', company: 'Le Comptoir de la Sambre', commune: 'Charleroi', contract: 'CDD', sector: 'Horeca', posted: 'il y a 6 j', businessSlug: 'le-comptoir-de-la-sambre' },
  { slug: 'mecanicien-garage-piazza', title: 'Mécanicien automobile', company: 'Garage Piazza', commune: 'Marcinelle', contract: 'CDI', sector: 'Auto', posted: 'il y a 3 j', businessSlug: 'garage-piazza' },
  { slug: 'aide-soignant-tilleuls', title: 'Aide-soignant(e)', company: 'Résidence Les Tilleuls', commune: 'Gilly', contract: 'CDD', sector: 'Santé', posted: 'il y a 1 j' },
  { slug: 'vendeur-boucherie-vandamme', title: 'Vendeur / Vendeuse', company: 'Boucherie Vandamme', commune: 'Gilly', contract: 'Temps partiel', sector: 'Commerce', posted: 'il y a 5 j', businessSlug: 'boucherie-vandamme' },
  { slug: 'developpeur-web-nalinnes-digital', title: 'Développeur web', company: 'Nalinnes Digital', commune: 'Charleroi', contract: 'CDI', sector: 'IT', posted: 'il y a 4 j' },
];
