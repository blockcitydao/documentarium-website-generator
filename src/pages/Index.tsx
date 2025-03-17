import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Map, Grid, Users, Award, Brain, BarChart3, Layers, 
  ChevronDown, Play, ArrowRight, Github, Twitter
} from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import GridSection from "@/components/GridSection";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import ValuePillar from "@/components/ValuePillar";
import RoadmapItem from "@/components/RoadmapItem";
import CityGrid from "@/components/CityGrid";
import FAQ from "@/components/FAQ";

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "") {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success("Thank you for joining! We'll be in touch.");
    setEmail("");
  };

  return (
    <div className="min-h-screen overflow-x-hidden pixel-bg scanline">
      {/* Hero Section */}
      <HeroSection scrollToFeatures={scrollToFeatures} />
      
      {/* City Grid System */}
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
      
      {/* New York City Grid Showcase */}
      <CityGrid />
      
      {/* Video Section */}
      <VideoSection />
      
      {/* Value Pillars */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-pink-900/90 via-purple-900/90 to-blue-900/90">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-pixel text-2xl md:text-3xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 leading-relaxed"
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
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* CTA Section with Email Signup */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-pink-600/90 via-purple-600/90 to-blue-600/90 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 grid-animation"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-pixel text-2xl md:text-3xl font-bold mb-4 text-white"
          >
            Ready to Join Block City?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-pixel-alt mb-8 text-purple-100 max-w-2xl mx-auto"
          >
            Become a permanent resident and help shape the future of our digital metropolis
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          >
            <form onSubmit={handleSubmitEmail} className="w-full flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pixel-corners bg-white/20 border-white/30 text-white placeholder:text-white/70 font-pixel-alt"
              />
              <Button type="submit" size="lg" className="pixel-button font-pixel text-sm bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-none">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 bg-purple-950 text-purple-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" className="w-16 h-12 mr-3">
                <defs>
                  <linearGradient id="footerPhysicalCityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2B50AA"/>
                    <stop offset="100%" stopColor="#4B7BE5"/>
                  </linearGradient>
                  <linearGradient id="footerDigitalCityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#34D399"/>
                    <stop offset="100%" stopColor="#6EE7B7"/>
                  </linearGradient>
                  <filter id="footerGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur"/>
                    <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                  </filter>
                </defs>
                <g transform="translate(50, 40)">
                  <g transform="rotate(-15, 100, 60)" filter="url(#footerGlow)">
                    <rect x="40" y="30" width="20" height="70" fill="url(#footerPhysicalCityGradient)"/>
                    <rect x="70" y="20" width="20" height="80" fill="url(#footerPhysicalCityGradient)"/>
                    <rect x="100" y="10" width="25" height="90" fill="url(#footerPhysicalCityGradient)"/>
                    <rect x="135" y="25" width="15" height="75" fill="url(#footerPhysicalCityGradient)"/>
                    <polygon points="160,40 180,40 170,20 160,40" fill="url(#footerPhysicalCityGradient)"/>
                  </g>
                  <g transform="rotate(15, 100, 110)" filter="url(#footerGlow)">
                    <g fill="url(#footerDigitalCityGradient)">
                      <rect x="40" y="100" width="20" height="5" />
                      <rect x="40" y="110" width="20" height="5" />
                      <rect x="40" y="120" width="20" height="5" />
                      <rect x="40" y="130" width="20" height="5" />
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
                      <rect x="100" y="85" width="25" height="5" />
                      <rect x="100" y="95" width="25" height="5" />
                      <rect x="100" y="105" width="25" height="5" />
                      <rect x="100" y="115" width="25" height="5" />
                      <rect x="100" y="125" width="25" height="5" />
                      <rect x="100" y="135" width="25" height="5" />
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
              <h3 className="font-pixel text-lg font-bold text-white">Block City DAO</h3>
            </div>
            <p className="font-pixel-alt mb-4">A community-governed, AI-empowered digital city ecosystem on the blockchain</p>
          </div>
          
          <div>
            <h4 className="font-pixel text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="font-pixel-alt hover:text-white transition flex items-center gap-2 pixel-text">
                <span>Whitepaper</span>
              </a></li>
              <li><a href="#" className="font-pixel-alt hover:text-white transition flex items-center gap-2 pixel-text">
                <span>Tokenomics</span>
              </a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="font-pixel-alt hover:text-white transition flex items-center gap-2 pixel-text">
                <Twitter className="h-4 w-4" /> <span>Twitter</span>
              </a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="font-pixel-alt hover:text-white transition flex items-center gap-2 pixel-text">
                <Github className="h-4 w-4" /> <span>GitHub</span>
              </a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-purple-800 text-center text-sm font-pixel-alt text-purple-400">
          &copy; {new Date().getFullYear()} Block City DAO. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
