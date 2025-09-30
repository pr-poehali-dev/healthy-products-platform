import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { RefObject } from "react";

interface HeroSectionProps {
  heroRef: RefObject<HTMLElement>;
  isVisible: boolean;
}

export const HeroSection = ({ heroRef, isVisible }: HeroSectionProps) => {
  return (
    <section ref={heroRef} id="hero" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-eco-cream via-white to-eco-cream opacity-60"></div>
      
      {/* Decorative botanical background */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="botanical-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Vine curves */}
            <path d="M0,100 Q50,80 100,100 T200,100" stroke="#4ade80" strokeWidth="2" fill="none" opacity="0.4"/>
            <path d="M0,150 Q50,130 100,150 T200,150" stroke="#4ade80" strokeWidth="1.5" fill="none" opacity="0.3"/>
            
            {/* Leaves */}
            <path d="M40,90 Q45,85 50,90 Q45,95 40,90" stroke="#22c55e" strokeWidth="1.5" fill="none" opacity="0.5"/>
            <path d="M90,110 Q95,105 100,110 Q95,115 90,110" stroke="#22c55e" strokeWidth="1.5" fill="none" opacity="0.5"/>
            <path d="M140,90 Q145,85 150,90 Q145,95 140,90" stroke="#22c55e" strokeWidth="1.5" fill="none" opacity="0.5"/>
            
            {/* Small flowers */}
            <circle cx="30" cy="100" r="3" stroke="#4ade80" strokeWidth="1.5" fill="none" opacity="0.6"/>
            <circle cx="30" cy="100" r="1.5" fill="#22c55e" opacity="0.4"/>
            
            <circle cx="120" cy="100" r="3" stroke="#4ade80" strokeWidth="1.5" fill="none" opacity="0.6"/>
            <circle cx="120" cy="100" r="1.5" fill="#22c55e" opacity="0.4"/>
            
            {/* Small leaf details */}
            <ellipse cx="70" cy="95" rx="4" ry="8" stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.4"/>
            <ellipse cx="160" cy="105" rx="4" ry="8" stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.4"/>
          </pattern>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#botanical-pattern)"/>
      </svg>
      
      <div className={`container mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
        <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
          Healthy Living
          <span className="block text-primary">Starts Today</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover the world of organic products, healthy recipes, and effective workouts for a healthy lifestyle
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-eco-dark-green text-lg px-8 py-6 rounded-2xl">
            <Icon name="ShoppingBag" className="mr-2 h-5 w-5" />
            Start Shopping
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-2xl border-primary text-primary hover:bg-primary hover:text-white">
            <Icon name="Play" className="mr-2 h-5 w-5" />
            Watch Video
          </Button>
        </div>
      </div>
      
      <div className="absolute top-10 right-10 opacity-20">
        <Icon name="Leaf" className="h-32 w-32 text-primary" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-20">
        <Icon name="Heart" className="h-24 w-24 text-eco-green" />
      </div>
    </section>
  );
};
