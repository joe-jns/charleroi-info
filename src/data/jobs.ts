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
  // Détail
  description: string;
  profile: string[];
  schedule: string;
  applyEmail: string;
}

const defaults = {
  description:
    'Nous recherchons une personne motivée pour rejoindre notre équipe. Le poste est basé sur la métropole carolo et à pourvoir rapidement. Une expérience dans le secteur est un atout mais les débutants motivés sont les bienvenus.',
  profile: ['Motivé(e) et fiable', 'Bon contact et esprit d’équipe', 'Ponctuel(le) et autonome'],
  schedule: 'Temps plein',
  applyEmail: 'recrutement@charleroi.info',
};

function mk(o: Omit<Job, 'description' | 'profile' | 'schedule' | 'applyEmail'> & Partial<Job>): Job {
  return { ...defaults, ...o };
}

export const latestJobs: Job[] = [
  mk({ slug: 'serveur-comptoir-sambre', title: 'Serveur / Serveuse', company: 'Le Comptoir de la Sambre', commune: 'Charleroi', contract: 'CDI', sector: 'Horeca', posted: 'il y a 2 j', businessSlug: 'le-comptoir-de-la-sambre', schedule: 'Temps plein · coupures', description: 'Brasserie de la Ville Basse, nous cherchons un(e) serveur(se) pour le service midi et soir. Vous assurez l’accueil, la prise de commande et le service en salle et en terrasse, dans une ambiance conviviale.', profile: ['Expérience en salle appréciée', 'Sens du service et sourire', 'Disponible en soirée et week-end'], applyEmail: 'emploi@lecomptoirdelasambre.be' }),
  mk({ slug: 'commis-cuisine-comptoir-sambre', title: 'Commis de cuisine', company: 'Le Comptoir de la Sambre', commune: 'Charleroi', contract: 'CDD', sector: 'Horeca', posted: 'il y a 6 j', businessSlug: 'le-comptoir-de-la-sambre', description: 'En soutien du chef, vous participez à la mise en place, au dressage et à l’entretien de la cuisine. Idéal pour un profil junior souhaitant apprendre une cuisine de saison.', profile: ['Première expérience ou école hôtelière', 'Rigueur et hygiène (HACCP)', 'Envie d’apprendre'], applyEmail: 'emploi@lecomptoirdelasambre.be' }),
  mk({ slug: 'mecanicien-garage-piazza', title: 'Mécanicien automobile', company: 'Garage Piazza', commune: 'Marcinelle', contract: 'CDI', sector: 'Auto', posted: 'il y a 3 j', businessSlug: 'garage-piazza', description: 'Garage multimarques, nous renforçons notre atelier avec un(e) mécanicien(ne) pour l’entretien, la réparation et la préparation au contrôle technique.', profile: ['Diplôme ou expérience en mécanique', 'Permis B', 'Autonomie sur l’entretien courant'], applyEmail: 'contact@garagepiazza.be' }),
  mk({ slug: 'aide-soignant-tilleuls', title: 'Aide-soignant(e)', company: 'Résidence Les Tilleuls', commune: 'Gilly', contract: 'CDD', sector: 'Santé', posted: 'il y a 1 j', schedule: 'Temps partiel possible', description: 'Maison de repos familiale, nous recherchons un(e) aide-soignant(e) pour accompagner nos résidents dans les gestes du quotidien, avec bienveillance et professionnalisme.', profile: ['Brevet d’aide-soignant(e)', 'Empathie et patience', 'Travail en équipe'], applyEmail: 'rh@residencelestilleuls.be' }),
  mk({ slug: 'vendeur-boucherie-vandamme', title: 'Vendeur / Vendeuse', company: 'Boucherie Vandamme', commune: 'Gilly', contract: 'Temps partiel', sector: 'Commerce', posted: 'il y a 5 j', businessSlug: 'boucherie-vandamme', schedule: 'Temps partiel', description: 'Boucherie-charcuterie de quartier, nous cherchons un(e) vendeur(se) pour l’accueil, le conseil et la vente au comptoir.', profile: ['Contact client agréable', 'Sens de l’hygiène', 'Expérience en commerce alimentaire appréciée'], applyEmail: 'boucherie.vandamme@charleroi.info' }),
  mk({ slug: 'developpeur-web-nalinnes-digital', title: 'Développeur web', company: 'Nalinnes Digital', commune: 'Charleroi', contract: 'CDI', sector: 'IT', posted: 'il y a 4 j', description: 'Agence web en croissance, nous recherchons un(e) développeur(se) front-end pour construire des sites et applications performants pour nos clients locaux.', profile: ['Maîtrise HTML/CSS/JS', 'Une expérience React/Astro est un plus', 'Autonomie et curiosité'], applyEmail: 'jobs@nalinnes-digital.be' }),
];

export function getJob(slug: string): Job | undefined {
  return latestJobs.find((j) => j.slug === slug);
}
