// Communes de Charleroi Métropole (entité + périphérie proche).
// Coordonnées approximatives (placeholder) pour la carte.
export interface Commune {
  slug: string;
  name: string;
  postal: string;
  lat: number;
  lng: number;
}

export const communes: Commune[] = [
  { slug: 'charleroi', name: 'Charleroi', postal: '6000', lat: 50.4106, lng: 4.4447 },
  { slug: 'marcinelle', name: 'Marcinelle', postal: '6001', lat: 50.3906, lng: 4.4386 },
  { slug: 'couillet', name: 'Couillet', postal: '6010', lat: 50.3893, lng: 4.4700 },
  { slug: 'montignies-sur-sambre', name: 'Montignies-sur-Sambre', postal: '6061', lat: 50.4056, lng: 4.4739 },
  { slug: 'gilly', name: 'Gilly', postal: '6060', lat: 50.4230, lng: 4.4720 },
  { slug: 'jumet', name: 'Jumet', postal: '6040', lat: 50.4470, lng: 4.4300 },
  { slug: 'gosselies', name: 'Gosselies', postal: '6041', lat: 50.4640, lng: 4.4310 },
  { slug: 'ransart', name: 'Ransart', postal: '6043', lat: 50.4530, lng: 4.4560 },
  { slug: 'roux', name: 'Roux', postal: '6044', lat: 50.4380, lng: 4.4030 },
  { slug: 'lodelinsart', name: 'Lodelinsart', postal: '6042', lat: 50.4330, lng: 4.4520 },
  { slug: 'dampremy', name: 'Dampremy', postal: '6020', lat: 50.4230, lng: 4.4270 },
  { slug: 'marchienne-au-pont', name: 'Marchienne-au-Pont', postal: '6030', lat: 50.4110, lng: 4.4030 },
  { slug: 'monceau-sur-sambre', name: 'Monceau-sur-Sambre', postal: '6031', lat: 50.4180, lng: 4.3830 },
  { slug: 'goutroux', name: 'Goutroux', postal: '6032', lat: 50.4230, lng: 4.3630 },
  { slug: 'mont-sur-marchienne', name: 'Mont-sur-Marchienne', postal: '6032', lat: 50.3960, lng: 4.4130 },
];
