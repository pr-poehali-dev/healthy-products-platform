import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { RefObject } from "react";

interface Recipe {
  id: number;
  name: string;
  time: string;
  calories: number;
  image: string;
  tags: string[];
}

interface RecipesSectionProps {
  recipesRef: RefObject<HTMLElement>;
  isVisible: boolean;
  recipes: Recipe[];
}

export const RecipesSection = ({ recipesRef, isVisible, recipes }: RecipesSectionProps) => {
  return (
    <section ref={recipesRef} id="recipes" className="py-20 px-4 bg-eco-cream/30">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'animate-fade-in-left opacity-100' : 'opacity-0'}`}>
          <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
            Healthy Recipes
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delicious and nutritious meals for your health
          </p>
        </div>

        <div className="relative">
          <Button 
            variant="outline" 
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 h-12 w-12 rounded-full bg-white shadow-lg hover:bg-eco-cream border-2 border-primary"
            onClick={() => {
              const container = document.getElementById('recipes-scroll');
              if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
            }}
          >
            <Icon name="ChevronLeft" className="h-6 w-6 text-primary" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 h-12 w-12 rounded-full bg-white shadow-lg hover:bg-eco-cream border-2 border-primary"
            onClick={() => {
              const container = document.getElementById('recipes-scroll');
              if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
            }}
          >
            <Icon name="ChevronRight" className="h-6 w-6 text-primary" />
          </Button>

          <div id="recipes-scroll" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto scrollbar-hide scroll-smooth">
            {recipes.map((recipe, index) => (
              <Card 
                key={recipe.id} 
                className={`group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-3xl overflow-hidden ${
                  isVisible 
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
                <CardContent className="pt-2">
                  <div className="flex gap-2 flex-wrap mb-4">
                    {recipe.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-2xl"
                  >
                    View Recipe
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
