import { Link } from "wouter";
import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <a href="#services" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Services</a>
      <a href="#about" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>About</a>
      <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex flex-col">
          <span className="font-heading text-2xl font-bold uppercase tracking-tighter leading-none text-primary">
            Albert's
          </span>
          <span className="font-heading text-sm font-bold uppercase tracking-widest text-accent leading-none">
            Handyman Services
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <Button asChild className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider rounded-none">
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-8 mt-8">
              <NavLinks />
              <div className="flex flex-col gap-4 mt-4 pt-4 border-t">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 text-accent" />
                  <a href="tel:9097884304" className="hover:text-foreground transition-colors">(909) 788-4304</a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 text-accent" />
                  <a href="mailto:beeterstix@gmail.com" className="hover:text-foreground transition-colors">beeterstix@gmail.com</a>
                </div>
              </div>
              <Button asChild className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider rounded-none w-full">
                <a href="#contact" onClick={() => setIsOpen(false)}>Get a Quote</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
