import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { RefObject } from "react";

interface DeliverySectionProps {
  deliveryRef: RefObject<HTMLElement>;
  isVisible: boolean;
}

export const DeliverySection = ({ deliveryRef, isVisible }: DeliverySectionProps) => {
  const deliveryOptions = [
    {
      id: 1,
      icon: "Truck",
      title: "Free Delivery",
      description: "Free delivery on orders over ₽1000",
      details: "Standard delivery takes 2-3 business days"
    },
    {
      id: 2,
      icon: "Zap",
      title: "Express Delivery",
      description: "Get your order within 24 hours",
      details: "Available in select areas for ₽200"
    },
    {
      id: 3,
      icon: "Package",
      title: "Pickup Points",
      description: "Collect from our convenient locations",
      details: "Over 50 pickup points across the city"
    }
  ];

  const deliveryFeatures = [
    {
      icon: "Shield",
      title: "Safe Packaging",
      text: "Eco-friendly materials protecting your products"
    },
    {
      icon: "Thermometer",
      title: "Temperature Control",
      text: "Cold chain maintained for fresh products"
    },
    {
      icon: "Clock",
      title: "Flexible Timing",
      text: "Choose your preferred delivery time slot"
    },
    {
      icon: "MapPin",
      title: "Real-time Tracking",
      text: "Track your order from warehouse to doorstep"
    }
  ];

  return (
    <section ref={deliveryRef} id="delivery" className="py-20 px-4 bg-eco-cream/30">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
            Delivery Options
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fast and reliable delivery to keep your products fresh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {deliveryOptions.map((option, index) => (
            <Card 
              key={option.id}
              className={`group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-3xl overflow-hidden ${
                isVisible 
                  ? 'animate-scale-in opacity-100' 
                  : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="h-20 w-20 rounded-full bg-eco-cream flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Icon name={option.icon} className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-heading">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-foreground font-medium mb-2">{option.description}</p>
                <p className="text-sm text-muted-foreground">{option.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`transition-all duration-800 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
          <h4 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Why Choose Our Delivery
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="h-16 w-16 rounded-full bg-eco-cream flex items-center justify-center mb-4">
                  <Icon name={feature.icon} className="h-8 w-8 text-primary" />
                </div>
                <h5 className="font-heading font-semibold text-lg mb-2">{feature.title}</h5>
                <p className="text-sm text-muted-foreground">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-16 bg-primary rounded-3xl p-8 md:p-12 text-center transition-all duration-800 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
          <Icon name="TruckIcon" className="h-16 w-16 text-white mx-auto mb-6" />
          <h4 className="text-3xl font-heading font-bold text-white mb-4">
            Delivery Across the City
          </h4>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            We deliver fresh organic products to your door. Order before 2 PM for same-day delivery in select areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white">
            <div className="flex items-center">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              <span className="font-medium">+7 (495) 123-45-67</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center">
              <Icon name="Mail" className="h-5 w-5 mr-2" />
              <span className="font-medium">delivery@healthyway.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
