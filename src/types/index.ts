export interface Drink {
  id: string;
  name: string;
  price: number;
  icon: string; // emoji or icon name
  image: string;
}

export interface BestSeller {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  image: string;
  alt: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
}

export interface NavLink {
  label: string;
  href: string;
}