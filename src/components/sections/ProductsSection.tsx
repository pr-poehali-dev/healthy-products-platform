import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { RefObject } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  organic: boolean;
}

interface ProductsSectionProps {
  productsRef: RefObject<HTMLElement>;
  isVisible: boolean;
  products: Product[];
  onAddToCart: () => void;
}

export const ProductsSection = ({ productsRef, isVisible, products, onAddToCart }: ProductsSectionProps) => {
  return (
    <section ref={productsRef} id="products" className="py-20 px-4">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
            Organic Products
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fresh and healthy products straight from farm to your table
          </p>
        </div>

        <div className="relative">
          <Button 
            variant="outline" 
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 h-12 w-12 rounded-full bg-white shadow-lg hover:bg-eco-cream border-2 border-primary"
            onClick={() => {
              const container = document.getElementById('products-scroll');
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
              const container = document.getElementById('products-scroll');
              if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
            }}
          >
            <Icon name="ChevronRight" className="h-6 w-6 text-primary" />
          </Button>

          <div id="products-scroll" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto scrollbar-hide scroll-smooth">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className={`group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-3xl overflow-hidden ${
                  isVisible 
                    ? 'animate-scale-in opacity-100' 
                    : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.organic && (
                    <Badge className="absolute top-4 right-4 bg-eco-green">
                      <Icon name="Leaf" className="mr-1 h-3 w-3" />
                      Organic
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-heading">{product.name}</CardTitle>
                    <span className="text-2xl font-bold text-primary">$26</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                </CardHeader>
                <CardContent className="pt-2">
                  <Button 
                    onClick={onAddToCart}
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
      </div>
    </section>
  );
};