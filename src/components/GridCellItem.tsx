
import { useState } from "react";
import { motion } from "framer-motion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { GridCell, cellMetadata, getIconComponent, corporatePairs } from "@/utils/cityGridData";

interface GridCellItemProps {
  cell: GridCell;
}

const GridCellItem = ({ cell }: GridCellItemProps) => {
  const [hovered, setHovered] = useState(false);
  
  if (!cell.id) {
    return <div className="aspect-square"></div>;
  }
  
  // Get basic cell styling
  let bgColor = cell.color || "bg-purple-900/40";
  const hoverEffect = hovered ? "shadow-[0_0_15px_rgba(138,43,226,0.7)] scale-105 z-10" : "";
  
  // Get icon metadata if available
  const metadata = cell.id ? cellMetadata[cell.id] : undefined;
  const IconComponent = metadata?.iconType ? getIconComponent(metadata.iconType) : null;
  
  // Check if this is part of a corporate pair
  const corporatePair = corporatePairs.find(
    pair => pair.id1 === cell.id || pair.id2 === cell.id
  );
  
  if (corporatePair && cell.state === "corporate") {
    bgColor = corporatePair.color;
  }
  
  // Determine overlay content based on cell state
  let overlayContent = null;
  if (cell.state === "forRent") {
    overlayContent = (
      <div className="absolute inset-0 flex items-center justify-center bg-blue-500/30 z-10">
        <span className="font-pixel text-[10px] text-cyan-300 bg-black/50 px-1 py-0.5">FOR RENT</span>
      </div>
    );
  } else if (cell.state === "forSale") {
    overlayContent = (
      <div className="absolute inset-0 flex items-center justify-center bg-yellow-500/30 z-10">
        <span className="font-pixel text-[10px] text-yellow-300 bg-black/50 px-1 py-0.5">FOR SALE</span>
      </div>
    );
  } else if (cell.state === "preOrdered") {
    overlayContent = (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-500/30 z-10">
        <span className="font-pixel text-[10px] text-gray-300 bg-black/50 px-1 py-0.5">RESERVED</span>
      </div>
    );
  } else if (cell.state === "celebrity") {
    bgColor = "bg-purple-600/70"; // Special background for celebrity cells
  }
  
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
          
          {/* Cell state overlay */}
          {overlayContent}
          
          {/* Icon or Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            {IconComponent && (
              <div className="text-white">
                <IconComponent className={`h-5 w-5 ${metadata?.color || 'text-white'}`} />
              </div>
            )}
            {!IconComponent && !cell.state && (
              <span className="font-pixel text-xs text-white">{cell.id}</span>
            )}
          </div>
          
          {/* Cell Label */}
          {cell.name && hovered && (
            <div className="absolute inset-x-0 bottom-0 bg-black/70 py-1 px-1 text-center z-20">
              <span className="font-pixel text-[8px] text-cyan-300">{cell.name}</span>
            </div>
          )}
          
          {/* Corporate Cell Label */}
          {cell.state === "corporate" && cell.pairId && !hovered && (
            <div className="absolute inset-x-0 bottom-0 bg-black/70 py-1 px-1 text-center">
              <span className="font-pixel text-[8px] text-white">{cell.name}</span>
            </div>
          )}
        </motion.div>
      </HoverCardTrigger>
      
      {/* Hover Card Content */}
      {(cell.description || cell.state) && (
        <HoverCardContent className="font-pixel-alt bg-purple-900/90 border-purple-500 text-purple-100 w-48 p-3 pixel-corners">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {IconComponent && <IconComponent className={`h-5 w-5 ${metadata?.color || 'text-white'}`} />}
              <span className="font-pixel text-xs text-cyan-300">{cell.name || `Grid ${cell.id}`}</span>
            </div>
            
            {cell.description && <p className="text-sm">{cell.description}</p>}
            
            {cell.state && (
              <div className="mt-1 py-1 px-2 rounded bg-black/50">
                {cell.state === "forRent" && (
                  <span className="text-xs text-blue-300">Available for Rent</span>
                )}
                {cell.state === "forSale" && (
                  <span className="text-xs text-yellow-300">For Sale</span>
                )}
                {cell.state === "owned" && (
                  <span className="text-xs text-green-300">Owned by {cell.owner}</span>
                )}
                {cell.state === "celebrity" && (
                  <span className="text-xs text-purple-300">Celebrity Space - {cell.owner}</span>
                )}
                {cell.state === "preOrdered" && (
                  <span className="text-xs text-gray-300">Pre-ordered - No Content Yet</span>
                )}
                {cell.state === "corporate" && cell.pairId && (
                  <span className="text-xs text-indigo-300">Corporate Space - {cell.owner}</span>
                )}
              </div>
            )}
            
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
