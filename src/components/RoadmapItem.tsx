
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface RoadmapItemProps {
  phase: string;
  items: string[];
}

const RoadmapItem = ({ phase, items }: RoadmapItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-gradient-to-r from-purple-900/60 to-pink-900/60 border-none overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://i.imgur.com/0vGhUC8.png')] bg-repeat opacity-10 mix-blend-overlay"></div>
        
        <CardContent className="p-8 relative z-10">
          <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
            {phase}
          </h3>
          
          <ul className="space-y-4">
            {items.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-start gap-3"
              >
                <div className="mt-1 bg-cyan-500/20 p-1 rounded-full">
                  <Check className="h-4 w-4 text-cyan-300" />
                </div>
                <span className="text-purple-100">{item}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RoadmapItem;
