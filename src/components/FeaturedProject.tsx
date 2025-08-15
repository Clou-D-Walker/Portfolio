import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScrollAnimation from "./ScrollAnimations";

const FeaturedProject = () => {
  const navigate = useNavigate();

  const featuredProject = {
    project1: {
      title: "Streamify - Fullstack Chat & Video Calling App ✨",
      description:
        "A real-time communication platform offering instant messaging with typing indicators, emoji reactions, private chats, and 1-on-1 video calls. Designed as a language exchange platform with 32 unique UI themes, robust JWT authentication, and scalable architecture. Includes global state management with Zustand, error handling across frontend and backend, and built with Stream API for high-performance messaging and video services.",
      tech: [
        "React",
        "Express",
        "MongoDB",
        "TailwindCSS",
        "TanStack Query",
        "Zustand",
        "Stream API"
      ],
      github: "https://github.com/Clou-D-Walker/Streamify",
      demo: "https://streamify-q9w6.onrender.com/",
      image: "/api/placeholder/600/400"
    },
    project2: {
      title: "MERN Chat + AI Assistant",
      description:
        "A sophisticated chat application built with the MERN stack, featuring real-time messaging and an integrated AI assistant for enhanced user interaction. Includes authentication, message history, and intelligent responses.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "AI API"],
      github: "https://github.com/Clou-D-Walker/AI_assistant",
      demo: "#",
      image: "/api/placeholder/600/400"
    }
    
  };
  

  return (
    <ScrollAnimation>
      <section id="projects" className="py-20 section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 glass border-primary/20 font-body">
              Featured Work
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
              Latest{' '}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Showcasing my most recent work combining full-stack development with AI integration
            </p>
          </div>
  
          {/* Featured Project Cards */}
          <div className="max-w-6xl mx-auto mb-12 space-y-8">
            {Object.values(featuredProject).map((project, idx) => (
              <Card
                key={idx}
                className="glass border-border/50 overflow-hidden hover-lift magnetic tilt group transition-all duration-500 hover:border-primary/30 hover:shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="relative h-64 lg:h-auto bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🤖</span>
                      </div>
                      <h3 className="text-2xl font-bold font-heading gradient-text">{project.title}</h3>
                      <p className="text-muted-foreground font-body">
                        {project.tech.slice(0, 2).join(" + ")}
                      </p>
                    </div>
                  </div>
  
                  {/* Project Info */}
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold font-heading mb-4">{project.title}</h3>
                    <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                      {project.description}
                    </p>
  
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="font-body text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
  
                    {/* Project Links */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="glass border-border/50 hover-lift font-body"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="hover-lift font-body"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
  
          {/* View All Projects Button */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="group hover-lift glow magnetic font-body font-semibold"
              onClick={() => navigate('/projects')}
            >
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
  
};

export default FeaturedProject;