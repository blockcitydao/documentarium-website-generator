
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Map, Grid, Users, Award, Brain, BarChart3, Layers, 
  ChevronDown, Play, ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import GridSection from "@/components/GridSection";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import ValuePillar from "@/components/ValuePillar";
import RoadmapItem from "@/components/RoadmapItem";
import FAQ from "@/components/FAQ";

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-purple-900 via-purple-800 to-pink-900">
      {/* Hero Section */}
      <HeroSection scrollToFeatures={scrollToFeatures} />
      
      {/* City Grid System */}
      <section ref={featuresRef} className="relative py-20 px-4 md:px-8">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://i.imgur.com/8gPofmZ.jpg')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300"
            >
              Digital City, Real Value
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-purple-100 max-w-2xl mx-auto"
            >
              Own a piece of the future with our grid-based digital city
            </motion.p>
          </div>
          
          <GridSection />
        </div>
      </section>
      
      {/* Video Section */}
      <VideoSection />
      
      {/* Value Pillars */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-pink-900/90 via-purple-900/90 to-blue-900/90">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300"
          >
            Six Dimensions of Value
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValuePillar 
              icon={<Map className="w-10 h-10 text-cyan-300" />}
              title="Location Value"
              description="Premium positions with zone differentiation. Center areas and special locations have higher scarcity and value."
            />
            <ValuePillar 
              icon={<Users className="w-10 h-10 text-pink-300" />}
              title="Identity & Social"
              description="Your grid number is your digital identity. Connect with neighbors and build vibrant communities."
            />
            <ValuePillar 
              icon={<Layers className="w-10 h-10 text-purple-300" />}
              title="Creative Expression"
              description="Customize your grid with AI-assisted tools. Display your creativity and build your digital presence."
            />
            <ValuePillar 
              icon={<BarChart3 className="w-10 h-10 text-green-300" />}
              title="Economic Value"
              description="Asset appreciation, trading opportunities, and rental income through our marketplace."
            />
            <ValuePillar 
              icon={<Brain className="w-10 h-10 text-yellow-300" />}
              title="Data & Intelligence"
              description="Leverage AI to optimize your content and gain valuable insights from interaction data."
            />
            <ValuePillar 
              icon={<Award className="w-10 h-10 text-blue-300" />}
              title="Governance Rights"
              description="Participate in city development decisions and shape the future of the digital metropolis."
            />
          </div>
        </div>
      </section>
      
      {/* Roadmap */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-purple-900 via-purple-800 to-pink-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300"
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
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-pink-600/90 via-purple-600/90 to-blue-600/90 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://i.imgur.com/JFuXgPK.jpg')] bg-cover bg-center"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Ready to Join Block City?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-purple-100 max-w-2xl mx-auto"
          >
            Become a permanent resident and help shape the future of our digital metropolis
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-none">
              Reserve Your Grid
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              Join Community <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 bg-purple-950 text-purple-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white">Block City DAO</h3>
            <p className="mb-4">A community-governed, AI-empowered digital city ecosystem on the blockchain</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">City Map</a></li>
              <li><a href="#" className="hover:text-white transition">Marketplace</a></li>
              <li><a href="#" className="hover:text-white transition">Governance</a></li>
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Whitepaper</a></li>
              <li><a href="#" className="hover:text-white transition">Tokenomics</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Community</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Discord</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">Telegram</a></li>
              <li><a href="#" className="hover:text-white transition">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-purple-800 text-center text-sm text-purple-400">
          &copy; {new Date().getFullYear()} Block City DAO. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
