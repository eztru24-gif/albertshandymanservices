import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for contacting us. We will get back to you shortly.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="py-24 bg-primary text-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">GET A FREE ESTIMATE</h2>
            <div className="w-20 h-1 bg-accent mb-8" />
            <p className="text-gray-300 mb-12 text-lg">
              Looking for estimates for a wrought iron property fence or mold removal? 
              Send us a message or give us a call.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-sm">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Location</h4>
                  <p className="text-gray-300">3990 Turquoise Ln<br />Riverside, CA</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-sm">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Phone</h4>
                  <a href="tel:9097884304" className="text-gray-300 hover:text-accent transition-colors">
                    (909) 788-4304
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-sm">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Email</h4>
                  <a href="mailto:beeterstix@gmail.com" className="text-gray-300 hover:text-accent transition-colors">
                    beeterstix@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-sm shadow-2xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold uppercase">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-gray-50 border-gray-200 text-primary h-12 rounded-none focus:ring-accent" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-bold uppercase">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="email@example.com" {...field} className="bg-gray-50 border-gray-200 text-primary h-12 rounded-none focus:ring-accent" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-bold uppercase">Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 555-5555" {...field} className="bg-gray-50 border-gray-200 text-primary h-12 rounded-none focus:ring-accent" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold uppercase">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project..." 
                          className="bg-gray-50 border-gray-200 text-primary min-h-[120px] rounded-none focus:ring-accent" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider h-14 rounded-none text-lg">
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
