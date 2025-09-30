import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  cartItems: number;
}

export const Header = ({ cartItems }: HeaderProps) => {
  return (
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
          <a href="#delivery" className="text-foreground hover:text-primary transition-colors">Delivery</a>
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
  );
};