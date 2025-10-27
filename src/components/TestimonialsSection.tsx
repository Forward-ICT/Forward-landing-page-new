
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dawit Tekle",
      location: "Addis Ababa",
      rating: 5,
      comment: "ZEN has revolutionized online gaming in Ethiopia. The games are fair, payouts are instant, and the customer support is exceptional.",
      avatar: "DT"
    },
    {
      name: "Sarah Mehari",
      location: "Mekelle",
      rating: 5,
      comment: "I love how ZEN incorporates Ethiopian culture while providing world-class gaming experiences. The mobile app is fantastic!",
      avatar: "SM"
    },
    {
      name: "Kebede Alemu",
      location: "Bahir Dar",
      rating: 5,
      comment: "Finally, a gaming platform that understands Ethiopian players. The local payment methods and support make all the difference.",
      avatar: "KA"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-emerald-950/40 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="bg-gradient-to-r from-emerald-400 to-lime-500 bg-clip-text text-transparent">Players</span> Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real feedback from our growing community of Ethiopian gamers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-emerald-300 text-emerald-300" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-lime-500 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

