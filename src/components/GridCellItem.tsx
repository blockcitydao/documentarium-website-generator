
import { useState } from "react";
import { motion } from "framer-motion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { GridCell } from "@/utils/cityGridData";

interface GridCellItemProps {
  cell: GridCell;
}

const GridCellItem = ({ cell }: GridCellItemProps) => {
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

export default GridCellItem;
