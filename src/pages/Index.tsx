import { useState, useEffect, useRef } from "react";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { RecipesSection } from "@/components/sections/RecipesSection";
import { WorkoutsSection } from "@/components/sections/WorkoutsSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  const [cartItems, setCartItems] = useState(0);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  
  const heroRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  const recipesRef = useRef<HTMLElement>(null);
  const workoutsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id || 'hero';
            setVisibleSections(prev => 
              prev.includes(sectionId) ? prev : [...prev, sectionId]
            );
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const sections = [heroRef.current, productsRef.current, recipesRef.current, workoutsRef.current];
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const products = [
    {
      id: 1,
      name: "Organic Avocado",
      price: 250,
      image: "/img/13e61165-ef82-4d39-b6c5-250c09d277e9.jpg",
      category: "Fruits",
      organic: true
    },
    {
      id: 2,
      name: "Red Quinoa",
      price: 380,
      image: "/img/13e61165-ef82-4d39-b6c5-250c09d277e9.jpg",
      category: "Grains",
      organic: true
    },
    {
      id: 3,
      name: "Coconut Oil",
      price: 450,
      image: "/img/13e61165-ef82-4d39-b6c5-250c09d277e9.jpg",
      category: "Oils",
      organic: true
    }
  ];

  const recipes = [
    {
      id: 1,
      name: "Green Smoothie Bowl",
      time: "10 min",
      calories: 320,
      image: "https://cdn.poehali.dev/files/0d30898a-be19-443d-9f57-fc46eba47fae.jpg",
      tags: ["Vegetarian", "Gluten-Free"]
    },
    {
      id: 2,
      name: "Quinoa Avocado Salad",
      time: "15 min",
      calories: 280,
      image: "https://cdn.poehali.dev/files/70cd026f-ddb0-4fd9-a180-6cbd56683536.jpg",
      tags: ["Vegan", "High Protein"]
    },
    {
      id: 3,
      name: "Baked Salmon with Vegetables",
      time: "25 min",
      calories: 420,
      image: "https://cdn.poehali.dev/files/3a4fa02f-9ce1-44f0-92ed-51da9322bc77.jpg",
      tags: ["Omega-3", "Low Carb"]
    }
  ];

  const workouts = [
    {
      id: 1,
      name: "Morning Yoga",
      duration: "20 min",
      level: "Beginner",
      image: "/img/bfd971ec-ce08-46d4-9cfa-454b8f587fb8.jpg",
      type: "Flexibility"
    },
    {
      id: 2,
      name: "HIIT Workout",
      duration: "30 min",
      level: "Advanced",
      image: "https://cdn.poehali.dev/files/b907d2d7-37dc-45d4-8e89-bf15bc63b046.jpg",
      type: "Cardio"
    },
    {
      id: 3,
      name: "Strength Training",
      duration: "45 min",
      level: "Intermediate",
      image: "https://cdn.poehali.dev/files/1dd297a9-b748-4059-a55d-781887dde269.jpg",
      type: "Strength"
    }
  ];

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartItems={cartItems} />
      
      <HeroSection 
        heroRef={heroRef} 
        isVisible={visibleSections.includes('hero')} 
      />
      
      <ProductsSection 
        productsRef={productsRef}
        isVisible={visibleSections.includes('products')}
        products={products}
        onAddToCart={addToCart}
      />
      
      <RecipesSection 
        recipesRef={recipesRef}
        isVisible={visibleSections.includes('recipes')}
        recipes={recipes}
      />
      
      <WorkoutsSection 
        workoutsRef={workoutsRef}
        isVisible={visibleSections.includes('workouts')}
        workouts={workouts}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
