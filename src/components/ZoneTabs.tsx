
import { motion } from "framer-motion";

interface ZoneTabsProps {
  zones: string[];
  activeTabIndex: number;
  setActiveTabIndex: (index: number) => void;
}

const ZoneTabs = ({ zones, activeTabIndex, setActiveTabIndex }: ZoneTabsProps) => {
  return (
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
  );
};

export default ZoneTabs;
