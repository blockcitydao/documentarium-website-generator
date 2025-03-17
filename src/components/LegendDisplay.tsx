
import { motion } from "framer-motion";

const LegendDisplay = () => {
  return (
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
  );
};

export default LegendDisplay;
