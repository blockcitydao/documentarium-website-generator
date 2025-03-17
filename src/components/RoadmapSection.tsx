
import { motion } from "framer-motion";
import RoadmapItem from "@/components/RoadmapItem";

const RoadmapSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 pixel-bg">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-pixel text-2xl md:text-3xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 leading-relaxed"
        >
          City Construction Timeline
        </motion.h2>
        
        <div className="space-y-12">
          <RoadmapItem 
            phase="Phase One: Foundation Building (1-6 months)"
            items={[
              "Complete city map and grid system development",
              "Implement grid purchase, display, and basic interaction",
              "Release initial limited A zone grid sales",
              "Establish core community and feedback mechanisms"
            ]}
          />
          <RoadmapItem 
            phase="Phase Two: Feature Expansion (6-18 months)"
            items={[
              "Launch basic AI creation tools",
              "Open B and C zone grids",
              "Implement secondary market trading",
              "Establish preliminary community governance"
            ]}
          />
          <RoadmapItem 
            phase="Phase Three: Ecosystem Prosperity (18-36 months)"
            items={[
              "Advanced AI functions and data analysis tools",
              "Refined community self-governance mechanisms",
              "Developer toolkits and API support",
              "Cross-platform interoperability implementation"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
