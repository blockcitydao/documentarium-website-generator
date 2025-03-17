
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import GridCellItem from "./GridCellItem";
import ZoneTabs from "./ZoneTabs";
import LegendDisplay from "./LegendDisplay";
import { generateNYCGrid } from "@/utils/cityGridData";

const CityGrid = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const zones = ["A Zone", "B Zone", "C Zone"];
  
  // Create grid data for NYC
  const gridData = generateNYCGrid();
  
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
        <ZoneTabs 
          zones={zones} 
          activeTabIndex={activeTabIndex} 
          setActiveTabIndex={setActiveTabIndex} 
        />
        
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
        
        {/* Legend Display */}
        <LegendDisplay />
      </motion.div>
    </section>
  );
};

export default CityGrid;
