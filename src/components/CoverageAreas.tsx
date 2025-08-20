import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Plane, Mountain, Waves } from "lucide-react";

const CoverageAreas = () => {
  const cities = [
    {
      name: "Istanbul",
      description: "Airport transfers and city tours",
      airports: ["IST", "SAW"],
      icon: Plane,
      image: "🏛️",
      popular: true
    },
    {
      name: "Antalya",
      description: "Mediterranean coast gateway",
      airports: ["AYT"],
      icon: Waves,
      image: "🏖️",
      popular: true
    },
    {
      name: "Bodrum",
      description: "Aegean paradise destination",
      airports: ["BJV"],
      icon: Waves,
      image: "⛵",
      popular: false
    },
    {
      name: "Dalaman",
      description: "Southwest Turkey hub",
      airports: ["DLM"],
      icon: Mountain,
      image: "🏔️",
      popular: false
    },
    {
      name: "Izmir",
      description: "Aegean region center",
      airports: ["ADB"],
      icon: Plane,
      image: "🏛️",
      popular: true
    },
    {
      name: "Trabzon",
      description: "Black Sea coastal city",
      airports: ["TZX"],
      icon: Mountain,
      image: "🌊",
      popular: false
    },
    {
      name: "Nevşehir",
      description: "Cappadocia gateway",
      airports: ["NAV"],
      icon: Mountain,
      image: "🎈",
      popular: true
    },
    {
      name: "Kayseri",
      description: "Central Anatolia hub",
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
          <Badge variant="secondary" className="mb-4">Coverage Areas</Badge>
          <h2 className="text-4xl font-bold mb-4">We Cover All Major Turkish Destinations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From bustling metropolitan areas to stunning coastal cities and historic sites, we provide reliable shuttle services across Turkey's most popular destinations.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cities.map((city, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-0 bg-gradient-to-br from-white to-warm-gray ${city.popular ? 'ring-2 ring-primary/20' : ''}`}>
              {city.popular && (
                <Badge className="absolute top-3 right-3 z-10 bg-accent text-accent-foreground">
                  Popular
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
                    View Routes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Don't See Your Destination?</h3>
          <p className="text-muted-foreground mb-6">
            We're constantly expanding our coverage. Contact us for custom routes and special requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
              Request Custom Route
            </Button>
            <Button size="lg" variant="outline">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageAreas;