import { CheckCircle, Users, Award, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "5+", label: "Happy Clients" },
    { icon: Award, value: "7+", label: "Projects Completed" },
    { icon: Clock, value: "1+", label: "Years Experience" },
    // { icon: CheckCircle, value: "99%", label: "Success Rate" },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions.",
    },
    {
      title: "Quality",
      description:
        "Every project is built with attention to detail and highest standards.",
    },
    {
      title: "Partnership",
      description:
        "We work closely with clients to understand and exceed their expectations.",
    },
    {
      title: "Support",
      description: "Ongoing support and maintenance to ensure your success.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              About Our Company
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              We are a team of passionate developers, designers, and IT
              specialists dedicated to transforming businesses through
              innovative technology solutions. With years of experience in web
              development, automation, and enterprise systems, we help companies
              streamline operations and achieve digital excellence.
            </p>
            <p className="text-lg text-gray-300">
              Our expertise spans across modern web technologies, cloud
              solutions, artificial intelligence, and business process
              automation. We believe in building long-term partnerships with our
              clients and providing ongoing support for sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="bg-emerald-950/60 border-emerald-800 text-center p-6"
                >
                  <CardContent className="p-0">
                    <Icon className="w-8 h-8 text-emerald-300 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Our Values</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-emerald-950/60 border-emerald-800 hover:bg-emerald-950/70 transition-colors duration-300"
            >
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
