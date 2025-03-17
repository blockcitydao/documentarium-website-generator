
import { ReactNode } from "react";
import { Building, Home, Coffee, Music, ShoppingBag, Landmark, Flower, Theater, Utensils, Glasses } from "lucide-react";

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

export const cityZones: CityZone[] = [
  {
    name: "Downtown",
    grid: [
      [
        { 
          id: "1101", 
          icon: <Building className="h-5 w-5 text-blue-300" />, 
          name: "Empire State Building", 
          color: "bg-blue-600/60",
          description: "An iconic landmark and skyscraper in Midtown Manhattan."
        },
        { 
          id: "1102", 
          icon: <Home className="h-5 w-5 text-pink-300" />, 
          name: "Luxury Apartment", 
          color: "bg-pink-600/60",
          description: "High-end residential apartment with a view of the skyline."
        },
        { 
          id: "1103", 
          icon: <Coffee className="h-5 w-5 text-yellow-300" />, 
          name: "NY Coffee Shop", 
          color: "bg-yellow-600/60",
          description: "A cozy coffee shop serving artisanal brews."
        },
        { 
          id: "1104", 
          icon: <Music className="h-5 w-5 text-purple-300" />, 
          name: "Jazz Club", 
          color: "bg-purple-600/60",
          description: "A sophisticated venue for live jazz performances."
        },
        { 
          id: "1105", 
          icon: <ShoppingBag className="h-5 w-5 text-red-300" />, 
          name: "Fifth Avenue Store", 
          color: "bg-red-600/60",
          description: "A high-end retail store on the famous shopping street."
        },
      ],
      [
        { 
          id: "1201", 
          icon: <Landmark className="h-5 w-5 text-cyan-300" />, 
          name: "Financial District", 
          color: "bg-cyan-600/60",
          description: "The heart of New York's financial world, including Wall Street."
        },
        { 
          id: "1202", 
          icon: <Flower className="h-5 w-5 text-green-300" />, 
          name: "City Park", 
          color: "bg-green-600/60",
          description: "A green space with trees, benches, and walking paths."
        },
        { 
          id: "1203", 
          icon: <Theater className="h-5 w-5 text-indigo-300" />, 
          name: "Broadway Theater", 
          color: "bg-indigo-600/60",
          description: "A prestigious theater showcasing renowned Broadway productions."
        },
        { 
          id: "1204", 
          icon: <Utensils className="h-5 w-5 text-orange-300" />, 
          name: "Upscale Restaurant", 
          color: "bg-orange-600/60",
          description: "A fine dining establishment with acclaimed chefs."
        },
        { 
          id: "1205", 
          icon: <Glasses className="h-5 w-5 text-teal-300" />, 
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
          icon: <Flower className="h-5 w-5 text-green-300" />, 
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
