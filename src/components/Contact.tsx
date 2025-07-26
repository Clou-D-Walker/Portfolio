import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollAnimation from "./ScrollAnimations";
import emailjs from 'emailjs-com';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;



const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "suryasujit.n22@iiits.in",
      href: "mailto:suryasujit.n22@iiits.in"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "IIIT Sri City, Andhra Pradesh",
      href: "#"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Clou-D-Walker",
      href: "https://github.com/Clou-D-Walker"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "surya-sujit-d-walker",
      href: "https://www.linkedin.com/in/surya-sujit-d-walker/"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        publicKey
      );
  
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
  
      setFormData({ name: '', email: '', subject: '', message: '' });
  
    } catch (error) {
      console.error("Email send error:", error);
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <ScrollAnimation>
      <section id="contact" className="py-20 section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 glass border-primary/20 font-body">
              Get In Touch
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
              Let's{' '}
              <span className="gradient-text">Collaborate</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-heading mb-6">Get in touch</h3>
                <p className="text-muted-foreground font-body mb-8 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. Feel free to reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="block group"
                  >
                    <Card className="glass border-border/50 hover-lift magnetic hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-6 flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold font-body text-sm text-muted-foreground">{item.label}</h4>
                          <p className="font-medium font-body group-hover:text-primary transition-colors">{item.value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <Card className="glass border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold font-heading mb-2">Current Status</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm font-body text-muted-foreground">
                      Available for new opportunities
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="glass border-border/50 magnetic">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-heading mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium font-body mb-2 block">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="glass border-border/50 font-body"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium font-body mb-2 block">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="glass border-border/50 font-body"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium font-body mb-2 block">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="glass border-border/50 font-body"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium font-body mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={5}
                      required
                      className="glass border-border/50 font-body resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full group hover-lift glow font-body font-semibold"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Contact;