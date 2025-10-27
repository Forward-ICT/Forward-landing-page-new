import { Code, Database, Bot, Zap, Globe, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Secure & Scalable"]
    },
    {
      icon: Database,
      title: "CRM & ERP Systems", 
      description: "Comprehensive business management solutions to streamline your operations and customer relationships.",
      features: ["Customer Management", "Inventory Control", "Financial Tracking", "Reporting & Analytics"]
    },
    {
      icon: Bot,
      title: "AI Bots & Automation",
      description: "Intelligent chatbots and automation systems to enhance customer service and operational efficiency.",
      features: ["24/7 Customer Support", "Process Automation", "Data Processing", "Smart Workflows"]
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions designed specifically for your unique business requirements.",
      features: ["API Development", "Database Design", "Third-party Integration", "Mobile Apps"]
    },
    {
      icon: Zap,
      title: "Business Automation",
      description: "Automate repetitive tasks and workflows to increase productivity and reduce operational costs.",
      features: ["Workflow Automation", "Document Processing", "Email Marketing", "Task Scheduling"]
    },
    {
      icon: Settings,
      title: "IT Consulting",
      description: "Expert guidance on technology strategy, digital transformation, and system optimization.",
      features: ["Technology Strategy", "System Architecture", "Performance Optimization", "Security Audit"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-emerald-950/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive IT solutions to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="bg-emerald-950/60 border-emerald-800 hover:bg-emerald-950/70 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
