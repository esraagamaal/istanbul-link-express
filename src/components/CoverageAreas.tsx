import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Plane, Mountain, Waves } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CoverageAreas = () => {
  const { t } = useLanguage();

  const cities = [
    {
      name: t.areas.cities.istanbul.name,
      description: t.areas.cities.istanbul.description,
      airports: ["IST", "SAW"],
      icon: Plane,
      image: "🏛️",
      popular: true
    },
    {
      name: t.areas.cities.antalya.name,
      description: t.areas.cities.antalya.description,
      airports: ["AYT"],
      icon: Waves,
      image: "🏖️",
      popular: true
    },
    {
      name: t.areas.cities.bodrum.name,
      description: t.areas.cities.bodrum.description,
      airports: ["BJV"],
      icon: Waves,
      image: "⛵",
      popular: false
    },
    {
      name: t.areas.cities.dalaman.name,
      description: t.areas.cities.dalaman.description,
      airports: ["DLM"],
      icon: Mountain,
      image: "🏔️",
      popular: false
    },
    {
      name: t.areas.cities.izmir.name,
      description: t.areas.cities.izmir.description,
      airports: ["ADB"],
      icon: Plane,
      image: "🏛️",
      popular: true
    },
    {
      name: t.areas.cities.trabzon.name,
      description: t.areas.cities.trabzon.description,
      airports: ["TZX"],
      icon: Mountain,
      image: "🌊",
      popular: false
    },
    {
      name: t.areas.cities.nevsehir.name,
      description: t.areas.cities.nevsehir.description,
      airports: ["NAV"],
      icon: Mountain,
      image: "🎈",
      popular: true
    },
    {
      name: t.areas.cities.kayseri.name,
      description: t.areas.cities.kayseri.description,
      airports: ["ASR"],
      icon: Mountain,
      image: "🏔️",
      popular: false
    }
  ];

  return (
    <section id="areas" className="py-16 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">{t.areas.badge}</Badge>
          <h2 className="text-4xl font-bold mb-4">{t.areas.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.areas.subtitle}
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cities.map((city, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-0 bg-gradient-to-br from-white to-warm-gray ${city.popular ? 'ring-2 ring-primary/20' : ''}`}>
              {city.popular && (
                <Badge className="absolute top-3 right-3 z-10 bg-accent text-accent-foreground">
                  {t.areas.popular}
                </Badge>
              )}
              
              <CardContent className="p-6 relative">
                {/* City Icon/Image */}
                <div className="text-center mb-4">
                  <div className="text-6xl mb-2">{city.image}</div>
                  <city.icon className="h-6 w-6 text-primary mx-auto" />
                </div>

                {/* City Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {city.description}
                  </p>
                  
                  {/* Airports */}
                  <div className="flex justify-center gap-1 mb-4">
                    {city.airports.map((airport, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {airport}
                      </Badge>
                    ))}
                  </div>

                  {/* Action */}
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    {t.areas.viewRoutes}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">{t.areas.cta.title}</h3>
          <p className="text-muted-foreground mb-6">
            {t.areas.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
              {t.areas.cta.customRoute}
            </Button>
            <Button size="lg" variant="outline">
              {t.areas.cta.support}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageAreas;