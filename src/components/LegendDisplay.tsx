
import { motion } from "framer-motion";
import { HandCoins, DollarSign, User, Images, Users } from "lucide-react";

const LegendDisplay = () => {
  return (
    <div className="flex justify-center mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5 bg-gradient-to-r from-purple-900/60 to-pink-900/60 py-3 px-4 rounded-lg pixel-corners"
      >
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-400 rounded-sm"></div>
          <span className="font-pixel-alt text-green-400 text-xs">Available</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-5 h-5 bg-yellow-500/40 rounded-sm">
            <DollarSign className="h-3 w-3 text-yellow-300" />
          </div>
          <span className="font-pixel-alt text-yellow-400 text-xs">For Sale</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-5 h-5 bg-blue-500/40 rounded-sm">
            <HandCoins className="h-3 w-3 text-blue-300" />
          </div>
          <span className="font-pixel-alt text-blue-400 text-xs">For Rent</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-5 h-5 bg-purple-600/40 rounded-sm">
            <Images className="h-3 w-3 text-purple-300" />
          </div>
          <span className="font-pixel-alt text-purple-400 text-xs">Celebrity</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-5 h-5 bg-indigo-600/40 rounded-sm">
            <Users className="h-3 w-3 text-indigo-300" />
          </div>
          <span className="font-pixel-alt text-indigo-400 text-xs">Corporate</span>
        </div>
      </motion.div>
    </div>
  );
};

export default LegendDisplay;
