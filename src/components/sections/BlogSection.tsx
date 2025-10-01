import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { RefObject } from "react";

interface BlogSectionProps {
  blogRef: RefObject<HTMLElement>;
  isVisible: boolean;
}

export const BlogSection = ({ blogRef, isVisible }: BlogSectionProps) => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Superfoods You Should Eat Every Day",
      excerpt: "Discover the most nutrient-dense foods that can transform your health and boost your energy levels naturally.",
      image: "/img/7458c308-314b-4652-9713-8bca97d3f008.jpg",
      category: "Nutrition",
      date: "May 15, 2024",
      readTime: "5 min read",
      author: "Dr. Sarah Johnson"
    },
    {
      id: 2,
      title: "Beginner's Guide to Organic Living",
      excerpt: "Learn how to transition to an organic lifestyle without breaking the bank. Practical tips for beginners.",
      image: "/img/216c7d73-380c-45bf-a70b-ea2017243eb5.jpg",
      category: "Lifestyle",
      date: "May 10, 2024",
      readTime: "7 min read",
      author: "Mark Anderson"
    },
    {
      id: 3,
      title: "The Science Behind Plant-Based Diets",
      excerpt: "Understanding the health benefits of plant-based nutrition backed by recent scientific research.",
      image: "/img/24835e3b-8c57-42b2-8d7f-f21c8383b509.jpg",
      category: "Science",
      date: "May 5, 2024",
      readTime: "10 min read",
      author: "Prof. Lisa Chen"
    },
    {
      id: 4,
      title: "Meal Prep Made Simple: Weekly Guide",
      excerpt: "Save time and eat healthier with our comprehensive meal prep strategies for busy professionals.",
      image: "/img/7efc2ee4-baff-4281-99ee-ee7afdaefec7.jpg",
      category: "Cooking",
      date: "April 28, 2024",
      readTime: "6 min read",
      author: "Chef Michael Ross"
    },
    {
      id: 5,
      title: "Sustainable Farming: Our Partners' Stories",
      excerpt: "Meet the dedicated farmers who grow the organic products we deliver to your door every day.",
      image: "/img/c5bf7599-85cc-4fd7-803a-61280c7a807f.jpg",
      category: "Sustainability",
      date: "April 20, 2024",
      readTime: "8 min read",
      author: "Emma Green"
    },
    {
      id: 6,
      title: "Boosting Immunity Naturally",
      excerpt: "Natural ways to strengthen your immune system through nutrition, exercise, and lifestyle changes.",
      image: "/img/cb14f09e-d13d-4700-bd5b-5812aa2a4031.jpg",
      category: "Health",
      date: "April 15, 2024",
      readTime: "6 min read",
      author: "Dr. James White"
    }
  ];

  const categories = [
    { name: "All", count: 45 },
    { name: "Nutrition", count: 12 },
    { name: "Lifestyle", count: 8 },
    { name: "Recipes", count: 15 },
    { name: "Fitness", count: 10 }
  ];

  return (
    <section ref={blogRef} id="blog" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
            Health & Wellness Blog
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert advice, tips, and insights for your healthy living journey
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-800 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={`rounded-full ${index === 0 ? 'bg-primary hover:bg-eco-dark-green' : 'hover:bg-eco-cream'}`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 bg-white/20">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id}
              className={`group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-3xl overflow-hidden ${
                isVisible 
                  ? 'animate-scale-in opacity-100' 
                  : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary">
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                  <div className="flex items-center">
                    <Icon name="Calendar" className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl font-heading line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-eco-cream flex items-center justify-center">
                      <Icon name="User" className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{post.author}</span>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-primary hover:text-eco-dark-green">
                    Read More
                    <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-800 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <Button size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
            View All Articles
            <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};