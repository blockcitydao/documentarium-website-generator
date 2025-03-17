
import { useRef } from "react";
import { motion } from "framer-motion";
import GridSection from "@/components/GridSection";

const DigitalCitySection = ({ featuresRef }: { featuresRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <section ref={featuresRef} className="relative py-20 px-4 md:px-8">
      <div className="absolute inset-0 z-0 opacity-20 pixel-bg"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-pixel text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 leading-relaxed"
          >
            Digital City, Real Value
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-pixel-alt text-xl text-purple-100 max-w-2xl mx-auto"
          >
            Own a piece of the future with our grid-based digital city
          </motion.p>
        </div>
        
        <GridSection />
      </div>
    </section>
  );
};

export default DigitalCitySection;
