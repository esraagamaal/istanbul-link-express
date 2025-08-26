import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Menu, Phone, Mail, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary py-2">
        <div className="container">
          {/* Desktop layout */}
          <div className="hidden md:flex justify-between items-center text-sm text-primary-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{t.header.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{t.header.phone}</span>
              </div>
            </div>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-20 h-8 bg-transparent border-none text-primary-foreground hover:bg-white/10 focus:ring-0 focus:ring-offset-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm">{language === 'en' ? '🇺🇸' : '🇹🇷'}</span>
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                </div>
                <ChevronDown className="h-3 w-3 opacity-70" />
              </SelectTrigger>
              <SelectContent className="min-w-24 bg-background border border-border shadow-lg z-50">
                <SelectItem value="en" className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    <span>🇺🇸</span>
                    <span>EN</span>
                  </div>
                </SelectItem>
                <SelectItem value="tr" className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    <span>🇹🇷</span>
                    <span>TR</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Mobile layout */}
          <div className="md:hidden text-sm text-primary-foreground">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{t.header.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{t.header.phone}</span>
                </div>
              </div>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-16 h-8 bg-transparent border-none text-primary-foreground hover:bg-white/10 focus:ring-0 focus:ring-offset-0">
                  <div className="flex items-center gap-1">
                    <span className="text-xs">{language === 'en' ? '🇺🇸' : '🇹🇷'}</span>
                    <span className="text-xs font-medium">{language.toUpperCase()}</span>
                  </div>
                  <ChevronDown className="h-3 w-3 opacity-70" />
                </SelectTrigger>
                <SelectContent className="min-w-20 bg-background border border-border shadow-lg z-50">
                  <SelectItem value="en" className="cursor-pointer">
                    <div className="flex items-center gap-1">
                      <span>🇺🇸</span>
                      <span>EN</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="tr" className="cursor-pointer">
                    <div className="flex items-center gap-1">
                      <span>🇹🇷</span>
                      <span>TR</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Istanbul Express Link" className="h-12 w-12" />
            <div>
            <h1 className="text-xl font-bold text-primary">{t.header.companyName}</h1>
            <p className="text-sm text-muted-foreground">{t.header.tagline}</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">{t.header.nav.services}</a>
            <a href="#areas" className="text-foreground hover:text-primary transition-colors">{t.header.nav.areas}</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">{t.header.nav.about}</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">{t.header.nav.contact}</a>
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