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
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Istanbul Express Link" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold">{t.header.companyName}</h3>
                <p className="text-sm text-gray-300">{t.header.tagline}</p>
              </div>
            </div>
            <p className="text-gray-300">
              {t.footer.companyDesc}
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
            <h4 className="text-lg font-semibold">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t.footer.links.home}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{t.footer.links.services}</a></li>
              <li><a href="#areas" className="text-gray-300 hover:text-white transition-colors">{t.footer.links.areas}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t.footer.links.about}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t.footer.links.faq}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t.footer.links.contact}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t.footer.ourServices}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t.footer.links.airportTransfer}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t.footer.links.cityTransfer}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t.footer.links.hourlyRental}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t.footer.links.corporate}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t.footer.links.tours}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t.footer.links.groupBookings}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t.footer.contactUs}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-gray-300">{t.header.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-gray-300">{t.header.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-gray-300">Istanbul, Turkey</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-medium mb-2">{t.footer.stayUpdated}</h5>
              <div className="flex gap-2">
                <Input 
                  placeholder={t.footer.emailPlaceholder} 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="bg-accent hover:bg-accent/80 text-accent-foreground">
                  {t.footer.subscribe}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-300">
            {t.footer.copyright}
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">{t.footer.links.privacy}</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">{t.footer.links.terms}</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">{t.footer.links.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;