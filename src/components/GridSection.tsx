
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Grid, Map, Zap } from "lucide-react";

const GridSection = () => {
  const gridItems = [
    { x: 0, y: 0, color: "from-cyan-500 to-blue-500", number: "1234" },
    { x: 1, y: 0, color: "from-blue-500 to-purple-500", number: "2345" },
    { x: 2, y: 0, color: "from-purple-500 to-pink-500", number: "3456" },
    { x: 0, y: 1, color: "from-pink-500 to-red-500", number: "4567" },
    { x: 1, y: 1, color: "from-orange-500 to-yellow-500", number: "5678" },
    { x: 2, y: 1, color: "from-yellow-500 to-green-500", number: "6789" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        <h3 className="font-pixel text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 leading-relaxed">
          The City Grid System
        </h3>
        
        <div className="space-y-6 text-purple-100">
          <div className="flex gap-4">
            <div className="mt-1 bg-cyan-500/20 p-2 rounded-lg pixel-corners">
              <Map className="h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <h4 className="font-pixel text-lg font-semibold text-cyan-300 mb-2">Multi-level City Map</h4>
              <p className="font-pixel-alt">From global view to specific blocks, with A, B, C zones and a unique four-digit coordinate system.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="mt-1 bg-purple-500/20 p-2 rounded-lg pixel-corners">
              <Grid className="h-6 w-6 text-purple-300" />
            </div>
            <div>
              <h4 className="font-pixel text-lg font-semibold text-purple-300 mb-2">Unique Grid Assets</h4>
              <p className="font-pixel-alt">Each grid has a unique number that serves as your digital identity. One-time purchase grants permanent ownership.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="mt-1 bg-pink-500/20 p-2 rounded-lg pixel-corners">
              <Zap className="h-6 w-6 text-pink-300" />
            </div>
            <div>
              <h4 className="font-pixel text-lg font-semibold text-pink-300 mb-2">Dynamic City Environment</h4>
              <p className="font-pixel-alt">Visualized activity, day-night cycles, and neighborhood relationships forming unique street cultures.</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex-1"
      >
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {gridItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative aspect-square pixel-corners"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-lg opacity-80`}></div>
              <div className="absolute inset-0 grid-animation rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center font-pixel text-white text-lg">{item.number}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default GridSection;
