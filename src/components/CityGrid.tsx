
import { useState } from "react";
import { motion } from "framer-motion";
import { Building, Home, Coffee, Music, ShoppingBag, Landmark, Park, Theater, Utensils, Glasses } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface GridCell {
  id: string;
  icon?: React.ReactNode;
  name?: string;
  color?: string;
  description?: string;
}

const CityGrid = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const zones = ["A Zone", "B Zone", "C Zone"];
  
  // Create grid data for NYC
  const gridData: GridCell[][] = generateNYCGrid();
  
  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30 grid-animation"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-pixel text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 leading-relaxed"
          >
            BlockCity - New York
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-pixel-alt text-xl text-purple-100 max-w-2xl mx-auto"
          >
            Explore your digital future in the city that never sleeps
          </motion.p>
        </div>
        
        {/* Zone Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {zones.map((zone, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`py-3 px-8 font-pixel text-sm pixel-corners ${
                activeTabIndex === index 
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                  : "bg-purple-900/40 text-purple-200 hover:bg-purple-800/50"
              }`}
              onClick={() => setActiveTabIndex(index)}
            >
              {zone}
            </motion.button>
          ))}
        </div>
        
        {/* Grid Display */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-purple-900/30 rounded-lg pixel-corners p-4 border border-purple-500/30 backdrop-blur-sm"
        >
          <div className="grid grid-cols-12 gap-1">
            {gridData.map((row, rowIndex) => (
              row.map((cell, colIndex) => (
                <GridCellItem key={`${rowIndex}-${colIndex}`} cell={cell} />
              ))
            ))}
          </div>
        </motion.div>
        
        <div className="flex justify-center mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-3 items-center bg-gradient-to-r from-purple-900/60 to-pink-900/60 py-2 px-4 rounded-lg pixel-corners"
          >
            <div className="w-4 h-4 bg-green-400 rounded-sm animate-pulse"></div>
            <span className="font-pixel-alt text-green-400">Available</span>
            <div className="w-4 h-4 bg-yellow-400 rounded-sm ml-3"></div>
            <span className="font-pixel-alt text-yellow-400">Popular</span>
            <div className="w-4 h-4 bg-red-400 rounded-sm ml-3"></div>
            <span className="font-pixel-alt text-red-400">Premium</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// Component for individual grid cells
const GridCellItem = ({ cell }: { cell: GridCell }) => {
  const [hovered, setHovered] = useState(false);
  
  if (!cell.id) {
    return <div className="aspect-square"></div>;
  }
  
  const bgColor = cell.color || "bg-purple-900/40";
  const hoverEffect = hovered ? "shadow-[0_0_15px_rgba(138,43,226,0.7)] scale-105 z-10" : "";
  
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <motion.div
          className={`aspect-square relative transition-all duration-200 ${bgColor} pixel-corners ${hoverEffect}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.05 }}
        >
          <div className={`absolute inset-0 ${hovered ? 'grid-animation opacity-70' : 'opacity-20'}`}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            {cell.icon && (
              <div className="text-white">
                {cell.icon}
              </div>
            )}
            {!cell.icon && (
              <span className="font-pixel text-xs text-white">{cell.id}</span>
            )}
          </div>
          {cell.name && hovered && (
            <div className="absolute inset-x-0 bottom-0 bg-black/70 py-1 px-1 text-center">
              <span className="font-pixel text-[8px] text-cyan-300">{cell.name}</span>
            </div>
          )}
        </motion.div>
      </HoverCardTrigger>
      {cell.description && (
        <HoverCardContent className="font-pixel-alt bg-purple-900/90 border-purple-500 text-purple-100 w-48 p-3 pixel-corners">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {cell.icon}
              <span className="font-pixel text-xs text-cyan-300">{cell.name}</span>
            </div>
            <p className="text-sm">{cell.description}</p>
            <div className="text-right">
              <span className="text-xs text-pink-300">Grid: {cell.id}</span>
            </div>
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};

// Generate NYC grid data
function generateNYCGrid(): GridCell[][] {
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
      icon: <Park className="h-5 w-5 text-green-300" />, 
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

export default CityGrid;
