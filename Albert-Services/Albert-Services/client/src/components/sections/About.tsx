import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary leading-tight">
              MEET ALBERTO GUERRERO
            </h2>
            <div className="w-20 h-1 bg-accent mb-8" />
            
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-6">
                "Hi, I'm Alberto. I'm a metal fabricator and home service specialist based in Riverside."
              </p>
              <p className="mb-6">
                With years of experience in custom wrought iron work and property maintenance, 
                I pride myself on delivering durable, high-quality results. Whether you need a 
                secure property fence or specialized mold removal services, I bring professional 
                expertise to every job.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Licensed & Professional Service",
                "Custom Wrought Iron Designs",
                "Riverside Local Expert",
                "Free Estimates Available"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 bg-muted border border-border"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-accent text-white px-6 py-3 font-bold uppercase tracking-wider text-sm shadow-lg">
              Contact Me Directly
            </div>
            
            <div className="space-y-6">
              <blockquote className="text-xl italic text-muted-foreground border-l-4 border-accent pl-6 py-2">
                "I can help with the wrought iron. Give me a call."
              </blockquote>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="p-4 bg-background border border-border">
                  <h4 className="font-heading font-bold text-lg mb-1 text-primary">Phone</h4>
                  <a href="tel:9097884304" className="text-accent font-bold text-xl hover:underline">
                    (909) 788-4304
                  </a>
                </div>
                <div className="p-4 bg-background border border-border">
                  <h4 className="font-heading font-bold text-lg mb-1 text-primary">Email</h4>
                  <a href="mailto:beeterstix@gmail.com" className="text-accent font-bold text-lg break-all hover:underline">
                    beeterstix@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
