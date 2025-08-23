import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary py-2">
        <div className="container flex justify-between items-center text-sm text-primary-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@istanbulexpresslink.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+90 542 104 04 53</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>🇹🇷 TR</span>
            <span>🇺🇸 EN</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Istanbul Express Link" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold text-primary">Istanbul Express Link</h1>
              <p className="text-sm text-muted-foreground">Premium Shuttle Service</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#areas" className="text-foreground hover:text-primary transition-colors">Coverage Areas</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;