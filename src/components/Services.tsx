import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  MapPin, 
  Shield, 
  Clock, 
  Star, 
  CreditCard,
  Headphones,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock availability for all your transfer needs"
    },
    {
      icon: Shield,
      title: "Insurance Covered",
      description: "Full insurance coverage for your peace of mind"
    },
    {
      icon: Star,
      title: "Professional Drivers",
      description: "Licensed and experienced drivers with local knowledge"
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Multiple payment options available for your convenience"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Customer support available whenever you need assistance"
    },
    {
      icon: CheckCircle,
      title: "On-Time Guarantee",
      description: "Punctual service with real-time tracking"
    }
  ];

  const serviceTypes = [
    {
      title: "Airport Transfer",
      description: "Direct transfers from/to all major Turkish airports",
      features: ["Door-to-door service", "Flight monitoring", "Meet & greet"],
      price: "Starting from ₺120",
      popular: true
    },
    {
      title: "City Transfer",
      description: "Comfortable rides between cities and tourist destinations",
      features: ["Inter-city travel", "Tourist locations", "Hotel pickups"],
      price: "Starting from ₺200",
      popular: false
    },
    {
      title: "Hourly Rental",
      description: "Rent our vehicles by the hour for flexible transportation",
      features: ["Flexible timing", "Multiple stops", "Personal driver"],
      price: "Starting from ₺80/hour",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-background to-warm-gray">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Services</Badge>
          <h2 className="text-4xl font-bold mb-4">Why Choose Istanbul Express Link?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience premium shuttle services with guaranteed comfort, safety, and reliability across Turkey's major destinations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Types */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceTypes.map((service, index) => (
            <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${service.popular ? 'border-primary border-2' : 'border-0'} bg-white/90 backdrop-blur-sm`}>
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-primary">{service.price}</p>
                  </div>
                  <Button 
                    className={service.popular ? 
                      "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70" : 
                      "bg-secondary hover:bg-secondary/80"
                    }
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;