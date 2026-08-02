export interface Category {
    id: string;
    label: string;
    emoji: string;
}
  
export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    emoji: string;
    imageurl: string;
}

export interface Restaurant {
    id: string;
    name: string;
    emoji: string;
    rating: number;
    distanceKm: number;
    deliveryTime: string;

    tags: string[];
    description: string;
    menu: MenuItem[];
}