
import { motion } from "framer-motion";
import { Map, Grid, Users, Award, Brain, BarChart3, Layers } from "lucide-react";
import ValuePillar from "@/components/ValuePillar";

const ValuePillarsSection = () => {
  return (
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
  );
};

export default ValuePillarsSection;
