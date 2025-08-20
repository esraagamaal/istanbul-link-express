import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram,
  MessageCircle
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Istanbul Express Link" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold">Istanbul Express Link</h3>
                <p className="text-sm text-gray-300">Premium Shuttle Service</p>
              </div>
            </div>
            <p className="text-gray-300">
              Turkey's leading shuttle service provider, connecting you to all major airports and destinations with comfort and reliability.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#areas" className="text-gray-300 hover:text-white transition-colors">Coverage Areas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Airport Transfer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">City Transfer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hourly Rental</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Corporate Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tours</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Group Bookings</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-gray-300">+90 542 104 04 53</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-gray-300">info@istanbulexpresslink.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-gray-300">Istanbul, Turkey</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-medium mb-2">Stay Updated</h5>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="bg-accent hover:bg-accent/80 text-accent-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-300">
            © 2024 Istanbul Express Link. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;