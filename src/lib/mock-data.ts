export type Category = {
  name: string;
  icon: string;
  image: string;
  count: string;
};

export type Product = {
  id: number;
  title: string;
  price: number; // Storing as number makes sorting easier
  formattedPrice: string;
  rating: number;
  image: string;
  category: string;
  vibe: string;
  isTrending: boolean;
};

export const categories: Category[] = [
  { name: "Anime", icon: "🎌", image: "/images/anime.png", count: "120+" },
  { name: "Gaming", icon: "🎮", image: "/images/car.png", count: "80+" },
  { name: "Cars", icon: "🏎️", image: "/images/car.png", count: "150+" },
  { name: "Movies", icon: "🎬", image: "/images/anime.png", count: "200+" },
  { name: "Vintage", icon: "🎞️", image: "/images/hero.png", count: "90+" },
  { name: "Music", icon: "🎵", image: "/images/car.png", count: "110+" },
];

export const products: Product[] = [
  { id: 1, title: "Cyberpunk Nights", price: 799, formattedPrice: "₹799", rating: 4.8, image: "/images/anime.png", category: "Anime", vibe: "Cyberpunk", isTrending: true },
  { id: 2, title: "JDM Legend Drift", price: 999, formattedPrice: "₹999", rating: 4.9, image: "/images/car.png", category: "Cars", vibe: "Racing", isTrending: true },
  { id: 3, title: "Neon Tokyo", price: 799, formattedPrice: "₹799", rating: 4.7, image: "/images/hero.png", category: "Movies", vibe: "Cyberpunk", isTrending: true },
  { id: 4, title: "Retro Arcade", price: 499, formattedPrice: "₹499", rating: 4.6, image: "/images/anime.png", category: "Gaming", vibe: "Retro", isTrending: true },
  { id: 5, title: "Initial D AE86", price: 899, formattedPrice: "₹899", rating: 5.0, image: "/images/car.png", category: "Anime", vibe: "Racing", isTrending: true },
  { id: 6, title: "Akira Bike", price: 799, formattedPrice: "₹799", rating: 4.8, image: "/images/anime.png", category: "Anime", vibe: "Cyberpunk", isTrending: true },
  { id: 7, title: "Vaporwave Sunset", price: 599, formattedPrice: "₹599", rating: 4.5, image: "/images/hero.png", category: "Vintage", vibe: "Retro", isTrending: true },
  { id: 8, title: "Midnight Club", price: 899, formattedPrice: "₹899", rating: 4.9, image: "/images/car.png", category: "Gaming", vibe: "Racing", isTrending: true },
  { id: 9, title: "Ghibli Magic", price: 699, formattedPrice: "₹699", rating: 4.7, image: "/images/anime.png", category: "Anime", vibe: "Minimalist", isTrending: true },
  { id: 10, title: "90s Room Setup", price: 599, formattedPrice: "₹599", rating: 4.6, image: "/images/hero.png", category: "Gaming", vibe: "Retro", isTrending: true },
  
  { id: 11, title: "God of War Leviathan", price: 1099, formattedPrice: "₹1,099", rating: 4.9, image: "/images/car.png", category: "Gaming", vibe: "Dark", isTrending: false },
  { id: 12, title: "Pulp Fiction Dance", price: 899, formattedPrice: "₹899", rating: 4.8, image: "/images/anime.png", category: "Movies", vibe: "Vintage", isTrending: false },
  { id: 13, title: "Porsche 911 Classic", price: 1199, formattedPrice: "₹1,199", rating: 5.0, image: "/images/hero.png", category: "Cars", vibe: "Minimalist", isTrending: false },
  { id: 14, title: "Spirited Away Bathhouse", price: 799, formattedPrice: "₹799", rating: 4.9, image: "/images/anime.png", category: "Anime", vibe: "Chill", isTrending: false },
  { id: 15, title: "Daft Punk Discovery", price: 899, formattedPrice: "₹899", rating: 4.8, image: "/images/car.png", category: "Music", vibe: "Retro", isTrending: false },
  { id: 16, title: "Lofi Girl Study", price: 499, formattedPrice: "₹499", rating: 4.7, image: "/images/hero.png", category: "Anime", vibe: "Chill", isTrending: false },
  { id: 17, title: "Elden Ring Erdtree", price: 999, formattedPrice: "₹999", rating: 4.9, image: "/images/anime.png", category: "Gaming", vibe: "Dark", isTrending: false },
  { id: 18, title: "Blade Runner 2049", price: 899, formattedPrice: "₹899", rating: 4.8, image: "/images/hero.png", category: "Movies", vibe: "Cyberpunk", isTrending: false },
  { id: 19, title: "F1 Monaco Grand Prix", price: 799, formattedPrice: "₹799", rating: 4.6, image: "/images/car.png", category: "Cars", vibe: "Racing", isTrending: false },
  { id: 20, title: "The Beatles Abbey Road", price: 999, formattedPrice: "₹999", rating: 4.9, image: "/images/anime.png", category: "Music", vibe: "Vintage", isTrending: false },
  { id: 21, title: "Dark Souls Bonfire", price: 699, formattedPrice: "₹699", rating: 4.8, image: "/images/hero.png", category: "Gaming", vibe: "Dark", isTrending: false },
  { id: 22, title: "Evangelion Unit-01", price: 899, formattedPrice: "₹899", rating: 4.9, image: "/images/anime.png", category: "Anime", vibe: "Cyberpunk", isTrending: false },
  { id: 23, title: "Interstellar Gargantua", price: 1099, formattedPrice: "₹1,099", rating: 5.0, image: "/images/car.png", category: "Movies", vibe: "Dark", isTrending: false },
  { id: 24, title: "Mac Miller Swimming", price: 799, formattedPrice: "₹799", rating: 4.8, image: "/images/hero.png", category: "Music", vibe: "Chill", isTrending: false },
];
