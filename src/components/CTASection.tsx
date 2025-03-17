
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const CTASection = () => {
  const [email, setEmail] = useState("");

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
  );
};

export default CTASection;
