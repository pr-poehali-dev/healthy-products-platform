import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [cartItems, setCartItems] = useState(0);

  const products = [
    {
      id: 1,
      name: "Органический авокадо",
      price: 250,
      image: "/img/13e61165-ef82-4d39-b6c5-250c09d277e9.jpg",
      category: "Фрукты",
      organic: true
    },
    {
      id: 2,
      name: "Киноа красная",
      price: 380,
      image: "/img/13e61165-ef82-4d39-b6c5-250c09d277e9.jpg",
      category: "Крупы",
      organic: true
    },
    {
      id: 3,
      name: "Кокосовое масло",
      price: 450,
      image: "/img/13e61165-ef82-4d39-b6c5-250c09d277e9.jpg",
      category: "Масла",
      organic: true
    }
  ];

  const recipes = [
    {
      id: 1,
      name: "Зеленый смузи-боул",
      time: "10 мин",
      calories: 320,
      image: "/img/c5f02afe-bfcd-4eda-b6db-1b735de854ea.jpg",
      tags: ["Вегетарианский", "Без глютена"]
    },
    {
      id: 2,
      name: "Салат с киноа и авокадо",
      time: "15 мин",
      calories: 280,
      image: "/img/c5f02afe-bfcd-4eda-b6db-1b735de854ea.jpg",
      tags: ["Веганский", "Протеин"]
    },
    {
      id: 3,
      name: "Запеченный лосось с овощами",
      time: "25 мин",
      calories: 420,
      image: "/img/c5f02afe-bfcd-4eda-b6db-1b735de854ea.jpg",
      tags: ["Омега-3", "Низкие углеводы"]
    }
  ];

  const workouts = [
    {
      id: 1,
      name: "Утренняя йога",
      duration: "20 мин",
      level: "Начинающий",
      image: "/img/bfd971ec-ce08-46d4-9cfa-454b8f587fb8.jpg",
      type: "Гибкость"
    },
    {
      id: 2,
      name: "HIIT тренировка",
      duration: "30 мин",
      level: "Продвинутый",
      image: "/img/bfd971ec-ce08-46d4-9cfa-454b8f587fb8.jpg",
      type: "Кардио"
    },
    {
      id: 3,
      name: "Силовая тренировка",
      duration: "45 мин",
      level: "Средний",
      image: "/img/bfd971ec-ce08-46d4-9cfa-454b8f587fb8.jpg",
      type: "Сила"
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
            <Icon name="Leaf" className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-heading font-bold text-primary">EcoLife</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-foreground hover:text-primary transition-colors">Продукты</a>
            <a href="#recipes" className="text-foreground hover:text-primary transition-colors">Рецепты</a>
            <a href="#workouts" className="text-foreground hover:text-primary transition-colors">Тренировки</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
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
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-eco-cream via-white to-eco-cream opacity-60"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            Здоровая жизнь
            <span className="block text-primary">начинается сегодня</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Откройте для себя мир органических продуктов, полезных рецептов и эффективных тренировок для здорового образа жизни
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-eco-dark-green text-lg px-8 py-6 rounded-2xl">
              <Icon name="ShoppingBag" className="mr-2 h-5 w-5" />
              Начать покупки
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-2xl border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="Play" className="mr-2 h-5 w-5" />
              Смотреть видео
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
      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
              Органические продукты
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свежие и полезные продукты прямо с фермы к вашему столу
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-3xl overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.organic && (
                    <Badge className="absolute top-4 left-4 bg-eco-green hover:bg-eco-green">
                      <Icon name="Leaf" className="mr-1 h-3 w-3" />
                      Органический
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-heading">{product.name}</CardTitle>
                    <span className="text-2xl font-bold text-primary">{product.price}₽</span>
                  </div>
                  <Badge variant="secondary" className="w-fit">{product.category}</Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    onClick={addToCart}
                    className="w-full bg-primary hover:bg-eco-dark-green rounded-2xl"
                  >
                    <Icon name="Plus" className="mr-2 h-4 w-4" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section id="recipes" className="py-20 px-4 bg-eco-cream/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
              Полезные рецепты
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Вкусные и питательные блюда для вашего здоровья
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <Card key={recipe.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-3xl overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 text-sm font-medium">
                    {recipe.calories} ккал
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
                    Смотреть рецепт
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workouts Section */}
      <section id="workouts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
              Тренировки для здоровья
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Эффективные программы для поддержания формы и энергии
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workouts.map((workout) => (
              <Card key={workout.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-3xl overflow-hidden">
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
                    <Badge variant={workout.level === 'Начинающий' ? 'secondary' : workout.level === 'Средний' ? 'default' : 'destructive'}>
                      {workout.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button className="w-full bg-primary hover:bg-eco-dark-green rounded-2xl">
                    <Icon name="Play" className="mr-2 h-4 w-4" />
                    Начать тренировку
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
                <h4 className="text-2xl font-heading font-bold">EcoLife</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Ваш путь к здоровой и счастливой жизни через правильное питание и активный образ жизни.
              </p>
            </div>
            
            <div>
              <h5 className="font-heading font-semibold text-lg mb-4">Продукты</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-eco-green transition-colors">Органические овощи</a></li>
                <li><a href="#" className="hover:text-eco-green transition-colors">Суперфуды</a></li>
                <li><a href="#" className="hover:text-eco-green transition-colors">Натуральные масла</a></li>
                <li><a href="#" className="hover:text-eco-green transition-colors">Эко-снеки</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-heading font-semibold text-lg mb-4">Рецепты</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-eco-green transition-colors">Завтраки</a></li>
                <li><a href="#" className="hover:text-eco-green transition-colors">Обеды</a></li>
                <li><a href="#" className="hover:text-eco-green transition-colors">Ужины</a></li>
                <li><a href="#" className="hover:text-eco-green transition-colors">Десерты</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-heading font-semibold text-lg mb-4">Поддержка</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-eco-green transition-colors">Часто задаваемые вопросы</a></li>
                <li><a href="#" className="hover:text-eco-green transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-eco-green transition-colors">Возврат</a></li>
                <li><a href="#" className="hover:text-eco-green transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">© 2024 EcoLife. Все права защищены.</p>
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