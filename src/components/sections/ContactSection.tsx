import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { RefObject } from "react";

interface ContactSectionProps {
  contactRef: RefObject<HTMLElement>;
  isVisible: boolean;
}

export const ContactSection = ({ contactRef, isVisible }: ContactSectionProps) => {
  const contactInfo = [
    {
      icon: "MapPin",
      title: "Visit Us",
      details: ["123 Organic Avenue", "Green District, City 12345"],
      action: "Get Directions"
    },
    {
      icon: "Phone",
      title: "Call Us",
      details: ["+7 (495) 123-45-67", "Mon-Fri: 9AM - 6PM"],
      action: "Call Now"
    },
    {
      icon: "Mail",
      title: "Email Us",
      details: ["info@healthyway.com", "support@healthyway.com"],
      action: "Send Email"
    }
  ];

  const socialLinks = [
    { icon: "Instagram", label: "@healthyway", color: "hover:text-pink-500" },
    { icon: "Facebook", label: "/healthyway", color: "hover:text-blue-600" },
    { icon: "Twitter", label: "@healthyway", color: "hover:text-sky-500" },
    { icon: "Youtube", label: "Healthy Way", color: "hover:text-red-600" }
  ];

  return (
    <section ref={contactRef} id="contact" className="py-20 px-4 bg-eco-cream/30">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
            Get In Touch
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-3xl overflow-hidden ${
                isVisible 
                  ? 'animate-scale-in opacity-100' 
                  : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-eco-cream flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Icon name={info.icon} className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
                <CardTitle className="text-xl font-heading">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground mb-1">
                    {detail}
                  </p>
                ))}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-3 text-primary hover:text-eco-dark-green hover:bg-eco-cream"
                >
                  {info.action}
                  <Icon name="ExternalLink" className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className={`border-0 bg-white rounded-3xl overflow-hidden transition-all duration-800 ${isVisible ? 'animate-fade-in-left opacity-100' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-heading">Send Us a Message</CardTitle>
              <p className="text-muted-foreground">Fill out the form and we'll get back to you within 24 hours</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <Input placeholder="John" className="rounded-xl" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input placeholder="Doe" className="rounded-xl" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input type="email" placeholder="john.doe@example.com" className="rounded-xl" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                <Input type="tel" placeholder="+7 (XXX) XXX-XX-XX" className="rounded-xl" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us how we can help you..." 
                  className="rounded-xl min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-primary hover:bg-eco-dark-green rounded-xl py-6 text-lg">
                <Icon name="Send" className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          <div className={`space-y-8 transition-all duration-800 ${isVisible ? 'animate-fade-in-right opacity-100' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
            <Card className="border-0 bg-white rounded-3xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-eco-cream rounded-2xl h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="MapPin" className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive Map</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-primary rounded-3xl overflow-hidden text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-white">Follow Us</CardTitle>
                <p className="text-white/90">Stay connected on social media</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary rounded-xl justify-start"
                    >
                      <Icon name={social.icon} className="mr-2 h-5 w-5" />
                      {social.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className={`mt-12 bg-gradient-to-r from-primary to-eco-dark-green rounded-3xl p-8 text-center transition-all duration-800 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
          <Icon name="Headphones" className="h-12 w-12 text-white mx-auto mb-4" />
          <h4 className="text-2xl font-heading font-bold text-white mb-2">
            Need Immediate Help?
          </h4>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Our customer support team is available 24/7 to assist you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-eco-cream rounded-full">
              <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
              Live Chat
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-full">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Call Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
