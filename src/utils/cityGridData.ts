
import { Building, Home, Coffee, Music, ShoppingBag, Landmark, Flower, Theater, Utensils, Glasses } from "lucide-react";
import { ReactNode } from "react";

export interface GridCell {
  id?: string;
  icon?: ReactNode;
  name?: string;
  color?: string;
  description?: string;
}

export type CityZone = {
  name: string;
  grid: (GridCell | null)[][];
};

// This is needed because we can't use JSX in .ts files, only in .tsx files
const iconMap = {
  building: Building,
  home: Home,
  coffee: Coffee,
  music: Music,
  shoppingBag: ShoppingBag,
  landmark: Landmark,
  flower: Flower,
  theater: Theater,
  utensils: Utensils,
  glasses: Glasses
};

export const cityZones: CityZone[] = [
  {
    name: "Downtown",
    grid: [
      [
        { 
          id: "1101", 
          icon: undefined, // Will be set in React components
          name: "Empire State Building", 
          color: "bg-blue-600/60",
          description: "An iconic landmark and skyscraper in Midtown Manhattan."
        },
        { 
          id: "1102", 
          icon: undefined, 
          name: "Luxury Apartment", 
          color: "bg-pink-600/60",
          description: "High-end residential apartment with a view of the skyline."
        },
        { 
          id: "1103", 
          icon: undefined, 
          name: "NY Coffee Shop", 
          color: "bg-yellow-600/60",
          description: "A cozy coffee shop serving artisanal brews."
        },
        { 
          id: "1104", 
          icon: undefined, 
          name: "Jazz Club", 
          color: "bg-purple-600/60",
          description: "A sophisticated venue for live jazz performances."
        },
        { 
          id: "1105", 
          icon: undefined, 
          name: "Fifth Avenue Store", 
          color: "bg-red-600/60",
          description: "A high-end retail store on the famous shopping street."
        },
      ],
      [
        { 
          id: "1201", 
          icon: undefined, 
          name: "Financial District", 
          color: "bg-cyan-600/60",
          description: "The heart of New York's financial world, including Wall Street."
        },
        { 
          id: "1202", 
          icon: undefined, 
          name: "City Park", 
          color: "bg-green-600/60",
          description: "A green space with trees, benches, and walking paths."
        },
        { 
          id: "1203", 
          icon: undefined, 
          name: "Broadway Theater", 
          color: "bg-indigo-600/60",
          description: "A prestigious theater showcasing renowned Broadway productions."
        },
        { 
          id: "1204", 
          icon: undefined, 
          name: "Upscale Restaurant", 
          color: "bg-orange-600/60",
          description: "A fine dining establishment with acclaimed chefs."
        },
        { 
          id: "1205", 
          icon: undefined, 
          name: "Rooftop Bar", 
          color: "bg-teal-600/60",
          description: "A stylish bar offering panoramic views of the city skyline."
        },
      ],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ]
  },
  {
    name: "Midtown", 
    grid: [
      [null, null, null, null, null],
      [
        { id: "2101", color: "bg-purple-500/40" },
        { id: "2102", color: "bg-purple-500/40" },
        { id: "2103", color: "bg-purple-500/40" },
        { id: "2104", color: "bg-purple-500/40" },
        { id: "2105", color: "bg-purple-500/40" },
      ],
      [
        { id: "2201", color: "bg-purple-500/40" },
        { id: "2202", color: "bg-purple-500/40" },
        { id: "2203", color: "bg-yellow-500/50" },
        { id: "2204", color: "bg-yellow-500/50" },
        { id: "2205", color: "bg-purple-500/40" },
      ],
      [
        { id: "2301", color: "bg-purple-500/40" },
        { id: "2302", color: "bg-yellow-500/50" },
        { id: "2303", color: "bg-green-500/50" },
        { id: "2304", color: "bg-green-500/50" },
        { id: "2305", color: "bg-purple-500/40" },
      ],
      [
        { id: "2401", color: "bg-purple-500/40" },
        { id: "2402", color: "bg-purple-500/40" },
        { id: "2403", color: "bg-purple-500/40" },
        { id: "2404", color: "bg-purple-500/40" },
        { id: "2405", color: "bg-purple-500/40" },
      ],
    ]
  },
  {
    name: "Uptown",
    grid: [
      [
        { id: "3101", color: "bg-purple-500/40" },
        { id: "3102", color: "bg-purple-500/40" },
        { id: "3103", color: "bg-purple-500/40" },
        { id: "3104", color: "bg-purple-500/40" },
        { id: "3105", color: "bg-purple-500/40" },
      ],
      [
        { id: "3201", color: "bg-purple-500/40" },
        { id: "3202", color: "bg-green-600/60" },
        { id: "3203", color: "bg-green-600/60" },
        { id: "3204", color: "bg-green-600/60" },
        { id: "3205", 
          name: "Central Park", 
          color: "bg-green-600/60",
          description: "An urban park spanning 843 acres in the heart of Manhattan." 
        },
      ],
      [
        { id: "3301", color: "bg-purple-500/40" },
        { id: "3302", color: "bg-green-600/60" },
        { id: "3303", color: "bg-green-600/60" },
        { id: "3304", color: "bg-green-600/60" },
        { id: "3305", color: "bg-purple-500/40" },
      ],
      [
        { id: "3401", color: "bg-purple-500/40" },
        { id: "3402", color: "bg-red-500/40" },
        { id: "3403", color: "bg-red-500/40" },
        { id: "3404", color: "bg-red-500/40" },
        { id: "3405", color: "bg-purple-500/40" },
      ],
      [null, null, null, null, null],
    ]
  }
];

// Map for icon types, to be used in React components
export type IconType = 
  | "building" 
  | "home" 
  | "coffee" 
  | "music" 
  | "shoppingBag" 
  | "landmark" 
  | "flower" 
  | "theater" 
  | "utensils" 
  | "glasses";

// Cell metadata to add icons in React components  
export const cellMetadata: Record<string, { iconType: IconType, color: string }> = {
  "1101": { iconType: "building", color: "text-blue-300" },
  "1102": { iconType: "home", color: "text-pink-300" },
  "1103": { iconType: "coffee", color: "text-yellow-300" },
  "1104": { iconType: "music", color: "text-purple-300" },
  "1105": { iconType: "shoppingBag", color: "text-red-300" },
  "1201": { iconType: "landmark", color: "text-cyan-300" },
  "1202": { iconType: "flower", color: "text-green-300" },
  "1203": { iconType: "theater", color: "text-indigo-300" },
  "1204": { iconType: "utensils", color: "text-orange-300" },
  "1205": { iconType: "glasses", color: "text-teal-300" },
  "3205": { iconType: "flower", color: "text-green-300" }
};

// Function to get proper Lucide icon component
export const getIconComponent = (iconType: IconType) => {
  return iconMap[iconType];
};
