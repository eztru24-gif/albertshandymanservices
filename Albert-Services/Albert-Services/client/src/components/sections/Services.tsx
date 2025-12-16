import { motion } from "framer-motion";
import { Hammer, ShieldAlert, Grid, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import fenceImg from "@assets/generated_images/close_up_of_wrought_iron_detail.png";
import moldImg from "@assets/generated_images/mold_testing_equipment.png";
import toolsImg from "@assets/generated_images/handyman_tools_on_workbench.png";

const services = [
  {
    title: "Wrought Iron Fences",
    description: "Custom design, fabrication, and installation of durable wrought iron property fences and gates.",
    icon: Grid,
    image: fenceImg,
  },
  {
    title: "Mold Removal",
    description: "Professional mold inspection and remediation services to keep your home safe and healthy.",
    icon: ShieldAlert,
    image: moldImg,
  },
  {
    title: "Metal Fabrication",
    description: "Expert welding and custom metal work for residential and commercial projects.",
    icon: Hammer,
    image: toolsImg,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">OUR SERVICES</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Specializing in metal work and home maintenance solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full border-none shadow-lg overflow-hidden group rounded-none">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 bg-primary p-4 z-20">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold uppercase">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    {service.description}
                  </CardDescription>
                  <Button variant="link" className="p-0 text-accent font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
