
import { BadgeCheck, DollarSign, Radio, ShieldCheck, Star, Gift, Users, Gamepad } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: BadgeCheck,
      title: "Provably Fair Gaming",
      description: "Transparent algorithms ensure every game outcome is verifiable and fair.",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: DollarSign,
      title: "Multiple Payment Options",
      description: "Secure local and international payment methods for seamless transactions.",
      color: "from-emerald-400 to-green-500"
    },
    {
      icon: ShieldCheck,
      title: "Secure & Transparent",
      description: "Bank-grade security with full transparency in all operations.",
      color: "from-lime-500 to-emerald-600"
    },
    {
      icon: Radio,
      title: "Live Gaming Experience",
      description: "Real-time multiplayer games with interactive features.",
      color: "from-emerald-600 to-green-700"
    },
    {
      icon: Gift,
      title: "Exclusive Bonuses",
      description: "Generous welcome bonuses and ongoing promotional rewards.",
      color: "from-lime-400 to-green-500"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of Ethiopian players in an active gaming community.",
      color: "from-teal-500 to-emerald-600"
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="bg-gradient-to-r from-emerald-400 to-lime-500 bg-clip-text text-transparent">ZEN</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the future of online gaming with features designed for the modern Ethiopian player
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <CardContent className="p-0">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

