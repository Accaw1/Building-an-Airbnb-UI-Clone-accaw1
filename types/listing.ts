export type Category =
  "All homes" | "Beach" | "Cabins" | "Design" | "Countryside" | "Mansions" | "Trending" | "Amazing views";

export interface Listing {
  id: string;
  title: string;
  location: string;
  description: string;
  category: Category;
  price: number;
  rating: number;
  image: string;
  dates: string;
  favorite: boolean;
}

export interface Room extends Listing {
  photos: string[];
  reviews: number;
  host: { name: string; years: number; avatar: string };
  amenities: string[];
  maxGuests: number;
  bedrooms: number;
}
