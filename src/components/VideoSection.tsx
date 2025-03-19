
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Custom video URL - you can replace this with your own video URL
  const videoUrl = "https://www.example.com/your-video.mp4"; // Replace with your actual video URL

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-pink-900/90 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://i.imgur.com/0vGhUC8.png')] bg-repeat mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300"
        >
          Experience Block City
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mx-auto max-w-4xl rounded-xl overflow-hidden aspect-video shadow-2xl shadow-purple-500/30"
        >
          {isPlaying ? (
            <video 
              src={videoUrl} 
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay 
              controls
              playsInline
            />
          ) : (
            <div className="relative w-full h-full bg-gradient-to-br from-purple-900 to-pink-900 cursor-pointer" onClick={() => setIsPlaying(true)}>
              <div className="absolute inset-0 bg-[url('https://i.imgur.com/NZMunUd.jpg')] bg-cover bg-center opacity-80"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 to-pink-900/60"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="w-20 h-20 rounded-full border-4 border-white/70 bg-white/10 backdrop-blur-sm hover:bg-white/20"
                >
                  <Play className="h-8 w-8 text-white ml-1" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-center text-white font-medium text-lg">
                Click to watch our introduction video
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
