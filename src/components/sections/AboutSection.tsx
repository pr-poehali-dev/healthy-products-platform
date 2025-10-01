import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { RefObject } from "react";

interface AboutSectionProps {
  aboutRef: RefObject<HTMLElement>;
  isVisible: boolean;
}

export const AboutSection = ({ aboutRef, isVisible }: AboutSectionProps) => {
  const values = [
    {
      icon: "Leaf",
      title: "100% Organic",
      description: "All our products are certified organic and sourced from trusted farms"
    },
    {
      icon: "Heart",
      title: "Health First",
      description: "We prioritize your health with nutritious, clean ingredients"
    },
    {
      icon: "Globe",
      title: "Eco-Friendly",
      description: "Sustainable practices and packaging to protect our planet"
    },
    {
      icon: "Users",
      title: "Community",
      description: "Join thousands of health-conscious customers worldwide"
    }
  ];

  const stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "500+", label: "Organic Products" },
    { value: "50+", label: "Partner Farms" },
    { value: "24/7", label: "Customer Support" }
  ];

  return (
    <section ref={aboutRef} id="about" className="py-20 px-4 bg-gradient-to-br from-eco-cream/50 to-white">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
            About Healthy Way
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe that healthy living should be accessible, enjoyable, and sustainable. 
            Since 2020, we've been delivering premium organic products and wellness solutions to families across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className={`transition-all duration-800 ${isVisible ? 'animate-fade-in-left opacity-100' : 'opacity-0'}`}>
            <img 
              src="https://cdn.poehali.dev/files/0d30898a-be19-443d-9f57-fc46eba47fae.jpg"
              alt="Organic Farm"
              className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>

          <div className={`flex flex-col justify-center transition-all duration-800 ${isVisible ? 'animate-fade-in-right opacity-100' : 'opacity-0'}`}>
            <h4 className="text-3xl font-heading font-bold text-foreground mb-6">
              Our Mission
            </h4>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              To make healthy, organic living simple and accessible for everyone. We work directly with local farmers 
              who share our values of sustainability, quality, and care for the environment.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every product we offer is carefully selected and tested to ensure it meets our high standards. 
              From farm to table, we maintain complete transparency in our supply chain.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={value.icon} className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-heading font-semibold text-foreground mb-1">{value.title}</h5>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`transition-all duration-800 ${isVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
          <Card className="bg-primary rounded-3xl border-0 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white/90 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
