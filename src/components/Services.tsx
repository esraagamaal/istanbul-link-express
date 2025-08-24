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
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Clock,
      title: t.services.features["24-7"],
      description: t.services.features["24-7-desc"]
    },
    {
      icon: Shield,
      title: t.services.features.insurance,
      description: t.services.features.insuranceDesc
    },
    {
      icon: Star,
      title: t.services.features.drivers,
      description: t.services.features.driversDesc
    },
    {
      icon: CreditCard,
      title: t.services.features.payment,
      description: t.services.features.paymentDesc
    },
    {
      icon: Headphones,
      title: t.services.features.support,
      description: t.services.features.supportDesc
    },
    {
      icon: CheckCircle,
      title: t.services.features.onTime,
      description: t.services.features.onTimeDesc
    }
  ];

  const serviceTypes = [
    {
      title: t.services.types.airport.title,
      description: t.services.types.airport.description,
      features: t.services.types.airport.features,
      price: t.services.types.airport.price,
      popular: t.services.types.airport.popular
    },
    {
      title: t.services.types.city.title,
      description: t.services.types.city.description,
      features: t.services.types.city.features,
      price: t.services.types.city.price,
      popular: false
    },
    {
      title: t.services.types.hourly.title,
      description: t.services.types.hourly.description,
      features: t.services.types.hourly.features,
      price: t.services.types.hourly.price,
      popular: false
    }
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-background to-warm-gray">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">{t.services.badge}</Badge>
          <h2 className="text-4xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
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
                  {t.services.types.airport.popular}
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
                     {t.services.bookNow}
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