import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { RefObject } from "react";

interface Workout {
  id: number;
  name: string;
  duration: string;
  level: string;
  image: string;
  type: string;
}

interface WorkoutsSectionProps {
  workoutsRef: RefObject<HTMLElement>;
  isVisible: boolean;
  workouts: Workout[];
}

export const WorkoutsSection = ({ workoutsRef, isVisible, workouts }: WorkoutsSectionProps) => {
  return (
    <section ref={workoutsRef} id="workouts" className="py-20 px-4">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
            Health Workouts
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Effective programs to maintain fitness and energy
          </p>
        </div>

        <div className="relative">
          <Button 
            variant="outline" 
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 h-12 w-12 rounded-full bg-white shadow-lg hover:bg-eco-cream border-2 border-primary"
            onClick={() => {
              const container = document.getElementById('workouts-scroll');
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
              const container = document.getElementById('workouts-scroll');
              if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
            }}
          >
            <Icon name="ChevronRight" className="h-6 w-6 text-primary" />
          </Button>

          <div id="workouts-scroll" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto scrollbar-hide scroll-smooth">
            {workouts.map((workout, index) => (
              <Card 
                key={workout.id} 
                className={`group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-3xl overflow-hidden ${
                  isVisible 
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
                <CardContent className="pt-2">
                  <Button 
                    className="w-full bg-primary hover:bg-eco-dark-green rounded-2xl"
                  >
                    <Icon name="Play" className="mr-2 h-4 w-4" />
                    Start Workout
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
