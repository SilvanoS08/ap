export interface ApartmentTypology {
  id: string;
  name: string;
  tagline: string;
  area: string;
  bedrooms: number;
  suites: number;
  bathrooms: number;
  parkingSpots: number;
  priceFrom: string;
  image: string;
  floorPlanImage: string;
  features: string[];
  description: string;
}

export interface Amenity {
  id: string;
  title: string;
  category: 'lazer' | 'bem-estar' | 'facilidade' | 'esporte';
  description: string;
  iconName: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'fachada' | 'interiores' | 'lazer' | 'decorado';
  imageUrl: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LocationHighlight {
  place: string;
  distance: string;
  category: 'parque' | 'shopping' | 'transporte' | 'saude' | 'educacao';
  description: string;
}
