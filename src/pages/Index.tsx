import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState, useEffect, useRef } from "react";

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
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-3">
              <img 
                src="https://cdn.poehali.dev/files/3980e36b-a71d-41ac-8ebe-c70e5bf95824.png" 
                alt="Healthy Way Logo" 
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-gray-800 leading-none">Healthy</span>
                <span className="font-heading text-xl font-bold text-primary leading-none">Way</span>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-foreground hover:text-primary transition-colors">Products</a>
            <a href="#recipes" className="text-foreground hover:text-primary transition-colors">Recipes</a>
            <a href="#workouts" className="text-foreground hover:text-primary transition-colors">Workouts</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-eco-green">
                  {cartItems}
                </Badge>
              )}
            </Button>
            <Button size="sm" className="bg-primary hover:bg-eco-dark-green">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-eco-cream via-white to-eco-cream opacity-60"></div>
        <div className={`container mx-auto text-center relative z-10 transition-all duration-1000 ${visibleSections.includes('hero') ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
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

      {/* Products Section */}
      <section ref={productsRef} id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <div className={`text-center mb-16 transition-all duration-800 ${visibleSections.includes('products') ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
              Organic Products
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fresh and healthy products straight from farm to your table
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className={`group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-3xl overflow-hidden ${
                  visibleSections.includes('products') 
                    ? 'animate-scale-in opacity-100' 
                    : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={
                      product.name === "Organic Avocado" 
                        ? "https://cdn.poehali.dev/files/825f660c-794e-4558-8e69-d7102eec7000.jpg"
                        : product.name === "Red Quinoa"
                        ? "https://cdn.poehali.dev/files/df6d21be-c0c6-4dfd-ab80-9df0e2f2f59f.jpg"
                        : product.name === "Coconut Oil"
                        ? "https://cdn.poehali.dev/files/55746c97-f202-4839-bf06-827f5cdf6b3a.jpg"
                        : product.image
                    }
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.organic && (
                    <Badge className="absolute top-4 left-4 bg-eco-green hover:bg-eco-green">
                      <Icon name="Leaf" className="mr-1 h-3 w-3" />
                      Organic
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-heading">{product.name}</CardTitle>
                    <span className="text-2xl font-bold text-primary">${product.price/10}</span>
                  </div>
                  <Badge variant="secondary" className="w-fit">{product.category}</Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    onClick={addToCart}
                    className="w-full bg-primary hover:bg-eco-dark-green rounded-2xl"
                  >
                    <Icon name="Plus" className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section ref={recipesRef} id="recipes" className="py-20 px-4 bg-eco-cream/30">
        <div className="container mx-auto">
          <div className={`text-center mb-16 transition-all duration-800 ${visibleSections.includes('recipes') ? 'animate-fade-in-left opacity-100' : 'opacity-0'}`}>
            <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
              Healthy Recipes
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delicious and nutritious meals for your health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <Card 
                key={recipe.id} 
                className={`group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-3xl overflow-hidden ${
                  visibleSections.includes('recipes') 
                    ? 'animate-fade-in-right opacity-100' 
                    : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 text-sm font-medium">
                    {recipe.calories} cal
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-heading">{recipe.name}</CardTitle>
                  <div className="flex items-center text-muted-foreground">
                    <Icon name="Clock" className="mr-1 h-4 w-4" />
                    <span>{recipe.time}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {recipe.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full rounded-2xl border-primary text-primary hover:bg-primary hover:text-white">
                    <Icon name="BookOpen" className="mr-2 h-4 w-4" />
                    View Recipe
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workouts Section */}
      <section ref={workoutsRef} id="workouts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className={`text-center mb-16 transition-all duration-800 ${visibleSections.includes('workouts') ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
              Health Workouts
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Effective programs to maintain fitness and energy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workouts.map((workout, index) => (
              <Card 
                key={workout.id} 
                className={`group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-3xl overflow-hidden ${
                  visibleSections.includes('workouts') 
                    ? 'animate-scale-in opacity-100' 
                    : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={workout.image} 
                    alt={workout.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 rounded-full px-3 py-1 text-sm font-medium">
                    {workout.type}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-heading">{workout.name}</CardTitle>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <div className="flex items-center">
                      <Icon name="Clock" className="mr-1 h-4 w-4" />
                      <span>{workout.duration}</span>
                    </div>
                    <Badge variant={workout.level === 'Beginner' ? 'secondary' : workout.level === 'Intermediate' ? 'default' : 'destructive'}>
                      {workout.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button className="w-full bg-primary hover:bg-eco-dark-green rounded-2xl">
                    <Icon name="Play" className="mr-2 h-4 w-4" />
                    Start Workout
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Leaf" className="h-8 w-8 text-eco-green" />
                <h4 className="text-2xl font-heading font-semibold">Healthyway</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your path to a healthy and happy life through proper nutrition and an active lifestyle.
              </p>
            </div>
            
            <div>
              <h5 className="font-heading font-semibold text-lg mb-4">Products</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-eco-green transition-colors">Organic Vegetables</a></li>
                <li><a href="#" className="hover:text-eco-green transition-colors">Superfoods</a></li>
                <li><a href="#" className="hover:text-eco-green transition-colors">Natural Oils</a></li>
                <li><a href="#" className="hover:text-eco-green transition-colors">Eco Snacks</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-heading font-semibold text-lg mb-4">Recipes</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-eco-green transition-colors">Breakfast</a></li>
                <li><a href="#" className="hover:text-eco-green transition-colors">Lunch</a></li>
                <li><a href="#" className="hover:text-eco-green transition-colors">Dinner</a></li>
                <li><a href="#" className="hover:text-eco-green transition-colors">Desserts</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-heading font-semibold text-lg mb-4">Support</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-eco-green transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-eco-green transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-eco-green transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-eco-green transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">© 2024 EcoLife. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Icon name="Instagram" className="h-6 w-6 text-gray-300 hover:text-eco-green cursor-pointer transition-colors" />
              <Icon name="Facebook" className="h-6 w-6 text-gray-300 hover:text-eco-green cursor-pointer transition-colors" />
              <Icon name="Twitter" className="h-6 w-6 text-gray-300 hover:text-eco-green cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;