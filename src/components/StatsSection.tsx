
import { Card, CardContent } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    {
      number: "10,000+",
      label: "Active Players",
      description: "Growing community of Ethiopian gamers"
    },
    {
      number: "5",
      label: "Exclusive Games",
      description: "Custom-built for the Ethiopian market"
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Reliable platform you can trust"
    },
    {
      number: "₹50M+",
      label: "Payouts",
      description: "Total winnings distributed to players"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Numbers that showcase our commitment to excellence and growth in Ethiopia's gaming industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:from-white/10 hover:to-white/15 transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-gray-300 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
