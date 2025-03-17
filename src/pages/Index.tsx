
import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import DigitalCitySection from "@/components/DigitalCitySection";
import CityGrid from "@/components/CityGrid";
import VideoSection from "@/components/VideoSection";
import ValuePillarsSection from "@/components/ValuePillarsSection";
import RoadmapSection from "@/components/RoadmapSection";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden pixel-bg scanline">
      {/* Hero Section */}
      <HeroSection scrollToFeatures={scrollToFeatures} />
      
      {/* City Grid System */}
      <DigitalCitySection featuresRef={featuresRef} />
      
      {/* New York City Grid Showcase */}
      <CityGrid />
      
      {/* Video Section */}
      <VideoSection />
      
      {/* Value Pillars */}
      <ValuePillarsSection />
      
      {/* Roadmap */}
      <RoadmapSection />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* CTA Section with Email Signup */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
