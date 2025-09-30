import Icon from "@/components/ui/icon";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/3980e36b-a71d-41ac-8ebe-c70e5bf95824.png" 
                alt="Healthy Way Logo" 
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-white leading-none">Healthy</span>
                <span className="font-heading text-xl font-bold text-eco-green leading-none">Way</span>
              </div>
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
          <p className="text-gray-300">© 2024 Healthy way. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Icon name="Instagram" className="h-6 w-6 text-gray-300 hover:text-eco-green cursor-pointer transition-colors" />
            <Icon name="Facebook" className="h-6 w-6 text-gray-300 hover:text-eco-green cursor-pointer transition-colors" />
            <Icon name="Twitter" className="h-6 w-6 text-gray-300 hover:text-eco-green cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};
