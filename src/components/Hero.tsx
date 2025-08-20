import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, ArrowRightLeft, Search, Users } from "lucide-react";
import heroImage from "@/assets/hero-shuttle.jpg";

const Hero = () => {
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
                ✨ Premium Turkish Shuttle Service
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                We are with you at the{" "}
                <span className="text-accent">airports</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Antalya, Bodrum, Dalaman, Izmir, Trabzon, Nevşehir and Kayseri
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="text-accent text-2xl font-bold">10%</div>
                <div className="text-sm">Round Trip Discount</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="text-accent text-2xl font-bold">100%</div>
                <div className="text-sm">Refund Guarantee</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="text-accent text-2xl font-bold">24/7</div>
                <div className="text-sm">Fixed Price</div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex bg-muted rounded-lg p-1">
                <Button size="sm" className="bg-primary text-primary-foreground">Transfer</Button>
                <Button variant="ghost" size="sm">Rent by Hour</Button>
                <Button variant="ghost" size="sm">Tours</Button>
              </div>
            </div>

            <div className="space-y-4">
              {/* From/To Locations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">From Where</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Address, Airport, Hotel, Hospital..." 
                      className="pl-10 h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">To Where</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Address, Airport, Hotel, Hospital..." 
                      className="pl-10 h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Departure Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="date" 
                      className="pl-10 h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Time</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select time" />
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
                  <label className="text-sm font-medium text-foreground">Passengers</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Select>
                      <SelectTrigger className="pl-10 h-12">
                        <SelectValue placeholder="1 Person" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Person</SelectItem>
                        <SelectItem value="2">2 People</SelectItem>
                        <SelectItem value="3">3 People</SelectItem>
                        <SelectItem value="4">4 People</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Trip Type</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="One Way" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="oneway">One Way</SelectItem>
                      <SelectItem value="roundtrip">Round Trip (10% OFF)</SelectItem>
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
                Search Available Shuttles
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;