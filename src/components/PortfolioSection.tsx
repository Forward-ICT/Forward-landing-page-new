import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80"
    },
    {
      title: "CRM System",
      category: "Business Software",
      description: "Customer relationship management system with lead tracking, sales pipeline, and reporting.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80"
    },
    {
      title: "AI Chatbot",
      category: "Automation",
      description: "Intelligent customer service bot with natural language processing and multi-channel support.",
      technologies: ["Python", "TensorFlow", "FastAPI", "WebSocket"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&q=80"
    },
    {
      title: "Healthcare Management",
      category: "ERP System",
      description: "Comprehensive healthcare management system with patient records, appointments, and billing.",
      technologies: ["Angular", "C#", "SQL Server", "Azure"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&q=80"
    },
    {
      title: "Inventory Automation",
      category: "Automation",
      description: "Automated inventory management with real-time tracking, alerts, and supplier integration.",
      technologies: ["React", "Express.js", "MySQL", "Docker"],
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&q=80"
    },
    {
      title: "Learning Management System",
      category: "Web Development",
      description: "Online learning platform with course management, video streaming, and progress tracking.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80"
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore some of our recent projects that showcase our expertise and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-700 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-slate-800 text-gray-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 border-slate-600 text-gray-300 hover:bg-slate-800">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;