
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Twitter } from "lucide-react";

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
          {/* Logo SVG */}
          <div className="flex justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" className="w-48 h-32">
              {/* Definitions for gradients and filters */}
              <defs>
                {/* Physical city gradient */}
                <linearGradient id="physicalCityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2B50AA"/>
                  <stop offset="100%" stopColor="#4B7BE5"/>
                </linearGradient>
                {/* Digital city gradient */}
                <linearGradient id="digitalCityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34D399"/>
                  <stop offset="100%" stopColor="#6EE7B7"/>
                </linearGradient>
                {/* Glow filter for city outlines */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur"/>
                  <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                </filter>
              </defs>
              {/* Logo Group - Centered */}
              <g transform="translate(50, 40)">
                {/* Physical City (rotated 15 degrees) */}
                <g transform="rotate(-15, 100, 60)" filter="url(#glow)">
                  {/* Buildings */}
                  <rect x="40" y="30" width="20" height="70" fill="url(#physicalCityGradient)"/>
                  <rect x="70" y="20" width="20" height="80" fill="url(#physicalCityGradient)"/>
                  <rect x="100" y="10" width="25" height="90" fill="url(#physicalCityGradient)"/>
                  <rect x="135" y="25" width="15" height="75" fill="url(#physicalCityGradient)"/>
                  <polygon points="160,40 180,40 170,20 160,40" fill="url(#physicalCityGradient)"/>
                </g>
                {/* Digital City (rotated -15 degrees) */}
                <g transform="rotate(15, 100, 110)" filter="url(#glow)">
                  {/* Pixel/Grid Buildings */}
                  <g fill="url(#digitalCityGradient)">
                    {/* Building 1 (grid pattern) */}
                    <rect x="40" y="100" width="20" height="5" />
                    <rect x="40" y="110" width="20" height="5" />
                    <rect x="40" y="120" width="20" height="5" />
                    <rect x="40" y="130" width="20" height="5" />
                    {/* Building 2 (grid pattern) */}
                    <rect x="70" y="90" width="5" height="5" />
                    <rect x="80" y="90" width="5" height="5" />
                    <rect x="70" y="100" width="5" height="5" />
                    <rect x="80" y="100" width="5" height="5" />
                    <rect x="70" y="110" width="5" height="5" />
                    <rect x="80" y="110" width="5" height="5" />
                    <rect x="70" y="120" width="5" height="5" />
                    <rect x="80" y="120" width="5" height="5" />
                    <rect x="70" y="130" width="5" height="5" />
                    <rect x="80" y="130" width="5" height="5" />
                    {/* Building 3 (pixel pattern) */}
                    <rect x="100" y="85" width="25" height="5" />
                    <rect x="100" y="95" width="25" height="5" />
                    <rect x="100" y="105" width="25" height="5" />
                    <rect x="100" y="115" width="25" height="5" />
                    <rect x="100" y="125" width="25" height="5" />
                    <rect x="100" y="135" width="25" height="5" />
                    {/* Building 4 (pixel tower) */}
                    <rect x="135" y="100" width="5" height="5" />
                    <rect x="145" y="100" width="5" height="5" />
                    <rect x="135" y="110" width="5" height="5" />
                    <rect x="145" y="110" width="5" height="5" />
                    <rect x="135" y="120" width="5" height="5" />
                    <rect x="145" y="120" width="5" height="5" />
                    <rect x="135" y="130" width="5" height="5" />
                    <rect x="145" y="130" width="5" height="5" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          
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
            <Button variant="outline" size="lg" className="border-purple-300 text-purple-300 hover:bg-purple-300/20" 
              onClick={() => window.open('https://twitter.com', '_blank')}
            >
              <Twitter className="mr-2 h-4 w-4" /> Twitter
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
