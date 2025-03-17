
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface ValuePillarProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ValuePillar = ({ icon, title, description }: ValuePillarProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card className="h-full pixel-corners bg-gradient-to-br from-purple-900/80 to-pink-900/80 border-none shadow-lg overflow-hidden relative">
        <div className="absolute inset-0 grid-animation"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-300"></div>
        
        <CardContent className="p-6 relative z-10">
          <div className="mb-4 pixel-glow">
            {icon}
          </div>
          <h3 className="font-pixel text-lg font-bold mb-2 text-white">{title}</h3>
          <p className="font-pixel-alt text-purple-200/90">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ValuePillar;
