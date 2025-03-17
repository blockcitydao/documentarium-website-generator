
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  scrollToFeatures: () => void;
}

const HeroSection = ({ scrollToFeatures }: HeroSectionProps) => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Vaporwave background with grid overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-purple-800 to-pink-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://i.imgur.com/NZMunUd.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/90"></div>
        <div className="absolute inset-0 bg-[url('https://i.imgur.com/0vGhUC8.png')] bg-repeat opacity-20"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300">
            Block City DAO
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
            A blockchain-powered digital metropolis where every grid is a unique digital asset, your digital identity, and creative canvas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-none">
              Explore the City
            </Button>
            <Button variant="outline" size="lg" className="border-purple-300 text-purple-300 hover:bg-purple-300/20">
              Learn More
            </Button>
          </div>
          
          <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={scrollToFeatures}
              className="rounded-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300"
            >
              <ChevronDown className="h-6 w-6" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
