import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      
      <footer className="bg-primary-foreground border-t py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Albert's Handyman Services. All rights reserved.</p>
          <p className="mt-2">Serving Riverside, CA and surrounding areas.</p>
        </div>
      </footer>
    </main>
  );
}
