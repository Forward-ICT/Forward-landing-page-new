import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "contact@forwardict.com",
      subtitle: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+251 99 375 2201",
      subtitle: "Mon-Fri 9AM-6PM EST",
    },
    // {
    //   icon: MapPin,
    //   title: "Visit Us",
    //   content: "123 Tech Street, Digital City",
    //   subtitle: "Schedule an appointment",
    // },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and see
            how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card
                key={index}
                className="bg-emerald-950/60 border-emerald-800 text-center hover:bg-emerald-950/70 transition-colors duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 font-medium mb-2">
                    {info.content}
                  </p>
                  <p className="text-gray-400 text-sm">{info.subtitle}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Send us a message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-emerald-950/60 border-emerald-800 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-emerald-950/60 border-emerald-800 text-white placeholder-gray-400"
                  />
                </div>
              </div>
              <div>
                <Input
                  placeholder="Subject"
                  className="bg-emerald-950/60 border-emerald-800 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="bg-emerald-950/60 border-emerald-800 text-white placeholder-gray-400 resize-none"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-3">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          <div className="bg-emerald-950/40 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Why Choose Us?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-medium mb-1">Expert Team</h4>
                  <p className="text-gray-400 text-sm">
                    Skilled developers with years of experience in cutting-edge
                    technologies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Custom Solutions
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Tailored applications designed specifically for your
                    business needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Ongoing Support
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Continuous maintenance and support to ensure optimal
                    performance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Competitive Pricing
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Quality solutions at affordable rates with transparent
                    pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
