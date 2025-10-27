import { useState, useEffect } from "react";
import {
  ArrowRight,
  Code,
  Database,
  Bot,
  Zap,
  Globe,
  Users,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import RippleGrid from "@/components/BitsComponents/RippleGrid";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950">
      <Navigation isScrolled={isScrolled} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        {/* Ripple Background */}
        <div className="absolute inset-0">
          <RippleGrid
            enableRainbow={false}
            gridColor="#1a9b81ff"
            rippleIntensity={0.05}
            gridSize={12}
            gridThickness={10}
            fadeDistance={1.8}
            vignetteStrength={2.5}
            glowIntensity={0.15}
            opacity={0.5}
            gridRotation={15}
            mouseInteraction={true}
            mouseInteractionRadius={1.5}
          />
        </div>

        <div className="relative z-10 py-8 px-4 mx-auto max-w-screen-xl text-center h-screen flex flex-col justify-center lg:py-16 lg:px-12">
          <div className="mb-4 text-sm font-semibold text-emerald-300 uppercase tracking-wider animate-fade-in">
            💡 Innovative IT Solutions
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl animate-fade-in">
            Transforming Business Through
            <span className="bg-gradient-to-r from-emerald-300 to-lime-500 bg-clip-text text-transparent">
              {" "}
              Technology
            </span>
          </h1>

          <div className="mb-8 animate-fade-in delay-300">
            <p className="text-lg font-normal text-emerald-100 lg:text-xl sm:px-16 xl:px-48">
              We deliver cutting-edge solutions in web development, CRM, ERP,
              automation, and AI-powered systems. Partner with us to digitize
              your business and stay ahead in the modern world.
            </p>
          </div>

          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 animate-fade-in delay-500">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-emerald-200/40 text-emerald-50 hover:bg-emerald-500/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              <div className=" mr-2">
                {" "}
                <Code className=" w-5 h-5 text-black" />
              </div>
              <span className="text-black">View Portfolio</span>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-emerald-100/70 text-sm animate-fade-in delay-700">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-300" />
              <span>7+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-300" />
              <span>5+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-emerald-300" />
              <span>5-Star Rated</span>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      {/* <ContactSection /> */}
      <Footer />
    </main>
  );
};

export default Index;
