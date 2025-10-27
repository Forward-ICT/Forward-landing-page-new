import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80",
    },
    {
      title: "CRM System",
      category: "Business Software",
      description:
        "Customer relationship management system with lead tracking, sales pipeline, and reporting.",
      technologies: ["Vite.js", "Python", "PostgreSQL", "Redis"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
    },
    {
      title: "AI Chatbot",
      category: "Automation",
      description:
        "Intelligent customer service bot with natural language processing and multi-channel support.",
      technologies: ["Python", "TensorFlow", "FastAPI", "WebSocket"],
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&q=80",
    },
    {
      title: "Inventory Automation",
      category: "Automation",
      description:
        "Automated inventory management with real-time tracking, alerts, and supplier integration.",
      technologies: ["React", "Express.js", "MySQL", "Docker"],
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&q=80",
    },
    {
      title: "Learning Management System",
      category: "Web Development",
      description:
        "Online learning platform with course management, video streaming, and progress tracking.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80",
    },
    {
      title: "Dice Night Experience",
      category: "Entertainment",
      description:
        "Immersive casino-inspired dice game with realtime odds and social play rooms.",
      technologies: ["React", "Socket.io", "Tailwind CSS", "Supabase"],
      image:
        "https://images.unsplash.com/photo-1518544801958-efcbf8a7ec10?w=500&q=80",
    },
    {
      title: "Bingo Live Platform",
      category: "Entertainment",
      description:
        "Interactive bingo streaming service with automated card management and live draws.",
      technologies: ["Next.js", "WebRTC", "Firebase", "TypeScript"],
      image:
        "https://images.unsplash.com/photo-1601050690597-df56b1a4bf30?w=500&q=80",
    },
  ];

  return (
    <section className="py-20 px-4 bg-emerald-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore some of our recent projects that showcase our expertise and
            innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-emerald-950/60 border-emerald-800 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-white text-xl">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-emerald-900/60 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {/* <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-emerald-700 text-gray-300 hover:bg-emerald-900/60"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button> */}
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600"
                  >
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
