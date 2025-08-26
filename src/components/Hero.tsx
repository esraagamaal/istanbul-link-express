import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, ArrowRightLeft, Search, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import heroImage from "@/assets/hero-shuttle.jpg";

const Hero = () => {
  const { t } = useLanguage();
  const [bookingType, setBookingType] = useState<'transfer' | 'rentByHour' | 'tours'>('transfer');
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white">
            <div className="mb-6">
              <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t.hero.badge}
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {t.hero.title}{" "}
                <span className="text-accent">{t.hero.titleHighlight}</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="text-accent text-2xl font-bold">10%</div>
                <div className="text-sm">{t.hero.features.discount}</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="text-accent text-2xl font-bold">100%</div>
                <div className="text-sm">{t.hero.features.refund}</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="text-accent text-2xl font-bold">24/7</div>
                <div className="text-sm">{t.hero.features.price}</div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex bg-muted rounded-lg p-1">
                <Button 
                  size="sm" 
                  onClick={() => setBookingType('transfer')}
                  className={bookingType === 'transfer' ? "bg-primary text-primary-foreground" : "bg-transparent text-foreground hover:bg-muted-foreground/10"}
                >
                  {t.hero.booking.transfer}
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => setBookingType('rentByHour')}
                  className={bookingType === 'rentByHour' ? "bg-primary text-primary-foreground" : "bg-transparent text-foreground hover:bg-muted-foreground/10"}
                >
                  {t.hero.booking.rentByHour}
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => setBookingType('tours')}
                  className={bookingType === 'tours' ? "bg-primary text-primary-foreground" : "bg-transparent text-foreground hover:bg-muted-foreground/10"}
                >
                  {t.hero.booking.tours}
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {/* From/To Locations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t.hero.booking.fromWhere}</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder={t.hero.booking.fromPlaceholder} 
                      className="pl-10 h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t.hero.booking.toWhere}</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder={t.hero.booking.toPlaceholder} 
                      className="pl-10 h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t.hero.booking.departureDate}</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="date" 
                      className="pl-10 h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t.hero.booking.time}</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder={t.hero.booking.selectTime} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="00:00">00:00</SelectItem>
                      <SelectItem value="00:30">00:30</SelectItem>
                      <SelectItem value="01:00">01:00</SelectItem>
                      <SelectItem value="01:30">01:30</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Passengers & Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t.hero.booking.passengers}</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Select>
                      <SelectTrigger className="pl-10 h-12">
                        <SelectValue placeholder={`1 ${t.hero.booking.person}`} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">{`1 ${t.hero.booking.person}`}</SelectItem>
                        <SelectItem value="2">{`2 ${t.hero.booking.people}`}</SelectItem>
                        <SelectItem value="3">{`3 ${t.hero.booking.people}`}</SelectItem>
                        <SelectItem value="4">{`4 ${t.hero.booking.people}`}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t.hero.booking.tripType}</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder={t.hero.booking.oneWay} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="oneway">{t.hero.booking.oneWay}</SelectItem>
                      <SelectItem value="roundtrip">{t.hero.booking.roundTrip}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Search Button */}
              <Button 
                size="lg" 
                className="w-full h-14 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Search className="mr-2 h-5 w-5" />
                {t.hero.booking.searchButton}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;