import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/welding_sparks_close_up.png";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Metal fabrication work" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 py-20 text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-block mb-4 px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-bold uppercase tracking-widest text-sm rounded-sm backdrop-blur-sm">
            Serving Riverside & Surrounding Areas
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            EXPERT METAL FABRICATION <br />
            <span className="text-accent">& HANDYMAN SERVICES</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            From custom wrought iron fences to professional mold removal. 
            Quality craftsmanship built to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider rounded-none h-14 px-8 text-lg" asChild>
              <a href="#contact">
                Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white font-bold uppercase tracking-wider rounded-none h-14 px-8 text-lg" asChild>
              <a href="#services">
                Our Services
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
