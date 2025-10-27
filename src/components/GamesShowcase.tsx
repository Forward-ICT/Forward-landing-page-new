
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Users, ArrowRight } from "lucide-react";

const GamesShowcase = () => {
  const games = [
    {
      title: "ZEN Crash",
      description: "Watch the multiplier rise and cash out before it crashes!",
      players: "2,847",
      rating: 4.8,
      category: "Crash Game",
      image: "bg-gradient-to-br from-emerald-500 to-green-600"
    },
    {
      title: "ZEN Mines",
      description: "Navigate the minefield for explosive multipliers",
      players: "1,923",
      rating: 4.7,
      category: "Strategy",
      image: "bg-gradient-to-br from-lime-500 to-emerald-600"
    },
    {
      title: "ZEN Dice",
      description: "Classic dice game with modern twists and features",
      players: "3,156",
      rating: 4.9,
      category: "Classic",
      image: "bg-gradient-to-br from-teal-500 to-emerald-600"
    },
    {
      title: "ZEN Roulette",
      description: "European roulette with live dealers and chat",
      players: "4,281",
      rating: 4.6,
      category: "Live Casino",
      image: "bg-gradient-to-br from-green-600 to-emerald-700"
    }
  ];

  return (
    <section id="games" className="py-20 px-4 bg-gradient-to-b from-transparent to-emerald-950/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-emerald-400 to-lime-500 bg-clip-text text-transparent">Games</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our most popular games, designed and developed in Ethiopia for Ethiopian players
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {games.map((game, index) => (
            <Card
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <CardContent className="p-0">
                <div className={`h-48 ${game.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                      {game.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-white/80">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-emerald-300 text-emerald-300" />
                        <span>{game.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{game.players}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 mb-4">{game.description}</p>
                  <Button 
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white group-hover:scale-105 transition-transform duration-300"
                  >
                    Play Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
          >
            View All Games
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GamesShowcase;


