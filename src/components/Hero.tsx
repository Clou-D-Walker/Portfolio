import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimations";
import profileImage from "@/assets/surya-profile.png";

const Hero = () => {
  const [typingText, setTypingText] = useState('');
  const fullText = 'Turning ideas into smart, powerful, and elegant code.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Clou-D-Walker',
      color: 'hover:text-foreground'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/surya-sujit-d-walker/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:suryasujit.n22@iiits.in',
      color: 'hover:text-primary'
    }
  ];

  return (
    <motion.section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left side - Content */}
          <ScrollAnimation direction="left" delay={0.2}>
            <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="text-base font-medium text-primary uppercase tracking-wider">
              Your Ideas, My Code, Limitless Possibilities.
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold font-heading leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">
                  Surya Sujit
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                AI Engineer & Full Stack Developer
              </h2>
              
              <div className="text-lg text-muted-foreground min-h-[2rem]">
                <span className="border-r-2 border-primary pr-1">
                  {typingText}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full glass hover-lift transition-all duration-300 ${social.color} group`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group hover-lift glow font-semibold"
                onClick={() => {
                  const element = document.getElementById('projects');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="glass border-border/50 hover-lift group font-semibold"
                onClick={() => {
                  window.open('https://drive.google.com/file/d/13f8VbTiGgYmXeIiAXdt-36-_eXvp15rH/view?usp=sharing', '_blank');
                }}
              >
                <Download className="mr-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>
            </div>
            </div>
          </ScrollAnimation>

          {/* Right side - Profile Image */}
          
          <ScrollAnimation direction="right" delay={0.4}>
            <div className="flex-shrink-0">
            <div className="relative group">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <img
                  src={profileImage}
                  alt="Surya Sujit"
                  className=" ml-[-78]  rounded-full border-4 border-border/50 shadow-2xl hover-lift magnetic"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/10 to-transparent" />
              </div>
            </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Scroll indicator */}
        <ScrollAnimation direction="up" delay={0.8}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </motion.section>
  );
};

export default Hero;