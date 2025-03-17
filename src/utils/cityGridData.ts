
import { Building, Home, Coffee, Music, ShoppingBag, Landmark, Flower, Theater, Utensils, Glasses } from "lucide-react";
import React from "react";

export interface GridCell {
  id: string;
  icon?: React.ReactNode;
  name?: string;
  color?: string;
  description?: string;
}

// Generate NYC grid data
export function generateNYCGrid(): GridCell[][] {
  // Create a 12x12 grid
  const grid: GridCell[][] = [];
  
  // Initialize with empty cells
  for (let i = 0; i < 12; i++) {
    grid[i] = [];
    for (let j = 0; j < 12; j++) {
      const id = `${3000 + i * 100 + j}`;
      grid[i][j] = { id };
    }
  }
  
  // Add NYC landmarks and features
  const landmarks: GridCell[] = [
    { 
      id: "3104", 
      icon: <Landmark className="h-5 w-5 text-cyan-300" />, 
      name: "Empire State", 
      color: "bg-cyan-600/60",
      description: "The iconic skyscraper in Midtown Manhattan with 102 stories." 
    },
    { 
      id: "3205", 
      icon: <Flower className="h-5 w-5 text-green-300" />, 
      name: "Central Park", 
      color: "bg-green-600/60",
      description: "An urban park spanning 843 acres in the heart of Manhattan." 
    },
    { 
      id: "3407", 
      icon: <Building className="h-5 w-5 text-purple-300" />, 
      name: "Times Square", 
      color: "bg-purple-600/60",
      description: "Major commercial intersection known for its bright lights and billboards." 
    },
    { 
      id: "3010", 
      icon: <Landmark className="h-5 w-5 text-blue-300" />, 
      name: "Statue of Liberty", 
      color: "bg-blue-600/60",
      description: "A colossal neoclassical sculpture on Liberty Island in New York Harbor." 
    },
    { 
      id: "3508", 
      icon: <ShoppingBag className="h-5 w-5 text-pink-300" />, 
      name: "5th Avenue", 
      color: "bg-pink-600/60",
      description: "Famous shopping street with luxury flagship stores and boutiques." 
    },
    { 
      id: "3711", 
      icon: <Theater className="h-5 w-5 text-yellow-300" />, 
      name: "Broadway", 
      color: "bg-yellow-600/60",
      description: "Theatrical performances presented in 41 professional theaters." 
    },
    { 
      id: "3309", 
      icon: <Glasses className="h-5 w-5 text-indigo-300" />, 
      name: "Brooklyn Bridge", 
      color: "bg-indigo-600/60",
      description: "A hybrid cable-stayed/suspension bridge connecting Manhattan and Brooklyn." 
    },
    { 
      id: "3602", 
      icon: <Music className="h-5 w-5 text-red-300" />, 
      name: "Radio City", 
      color: "bg-red-600/60",
      description: "Entertainment venue located in Rockefeller Center in Midtown Manhattan." 
    },
    { 
      id: "3412", 
      icon: <Coffee className="h-5 w-5 text-amber-300" />, 
      name: "Soho Cafes", 
      color: "bg-amber-600/60",
      description: "Trendy neighborhood with art galleries, boutiques, and cafés." 
    },
    { 
      id: "3814", 
      icon: <Utensils className="h-5 w-5 text-orange-300" />, 
      name: "Little Italy", 
      color: "bg-orange-600/60",
      description: "Neighborhood in lower Manhattan known for Italian culture and cuisine." 
    },
    { 
      id: "3214", 
      icon: <Home className="h-5 w-5 text-teal-300" />, 
      name: "Village Lofts", 
      color: "bg-teal-600/60",
      description: "Trendy residential area with historic brownstones and loft apartments." 
    }
  ];
  
  // Place landmarks on the grid
  landmarks.forEach(landmark => {
    const row = Math.floor((parseInt(landmark.id) - 3000) / 100);
    const col = (parseInt(landmark.id) - 3000) % 100;
    
    if (row >= 0 && row < 12 && col >= 0 && col < 12) {
      grid[row][col] = landmark;
    }
  });
  
  return grid;
}
