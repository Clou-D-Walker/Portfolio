import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Github, ExternalLink, Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "MERN Chat + AI Assistant",
      description: "A sophisticated chat application built with the MERN stack, featuring real-time messaging and an integrated AI assistant for enhanced user interaction.",
      longDescription: "This project demonstrates full-stack capabilities with real-time communication, user authentication, message persistence, and AI integration. Features include typing indicators, message history, user profiles, and intelligent AI responses powered by modern language models.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "AI API", "JWT"],
      category: ["Full-Stack", "AI/ML"], 
      github: "https://github.com/Clou-D-Walker/AI_assistant",
      demo: "#",
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: "Hotel Booking Management",
      description: "A comprehensive hotel booking system with user authentication, room management, and booking functionality.",
      longDescription: "Complete hotel management solution featuring room availability tracking, booking management, user authentication, payment integration, and admin dashboard for hotel operations.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
      category: ["Full-Stack"],
      github: "https://github.com/Clou-D-Walker/Hotel_Booking",
      demo: "#",
      featured: false,
      year: "2024"
    },
    {
      id: 3,
      title: "Next.js Production App",
      description: "A production-ready Next.js application showcasing modern web development practices and deployment strategies.",
      longDescription: "Enterprise-level Next.js application with server-side rendering, API routes, optimized performance, SEO best practices, and production deployment on Vercel.",
      tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Vercel", "API Routes"],
      category: ["Frontend"],
      github: "https://github.com/Clou-D-Walker/nextjs-production-app",
      demo: "#",
      featured: false,
      year: "2024"
    },
    {
      id: 4,
      title: "LibroSphere CRUD System",
      description: "A comprehensive book management system with full CRUD operations built using the MERN stack.",
      longDescription: "Complete library management system with book cataloging, user management, borrowing system, search functionality, and administrative controls for managing library operations.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Bootstrap", "JWT"],
      category: ["Backend"],
      github: "https://github.com/Clou-D-Walker/LibroSphere-A-MERN-CRUD-Book-Management-System",
      demo: "#",
      featured: false,
      year: "2023"
    }
  ];

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'AI/ML'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
const matchesFilter =
selectedFilter === "All" || project.category?.includes(selectedFilter);
                       
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <Button
            variant="outline"
            className="glass border-border/50 hover-lift mb-6 font-body"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4 glass border-primary/20 font-body">
              Portfolio
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-6">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              A collection of projects showcasing my journey in full-stack development, AI integration, and modern web technologies.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glass border-border/50 font-body"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(category)}
                  className={`font-body ${selectedFilter === category ? 'glow' : 'glass border-border/50'}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="glass border-border/50 hover-lift group transition-all duration-500 hover:border-primary/30 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-primary/90 font-body text-xs">
                    Featured
                  </Badge>
                )}
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">
                    <span className="text-3xl">
                    <span className="text-3xl">
  {(() => {
    const cat = project.category?.[0]; // Get the first category

    if (project.title.includes("AI Assistant")) return "🤖";
    if (project.title.includes("Hotel Booking")) return "🏨";
    if (project.title.includes("LibroSphere")) return "📚";

    switch (cat) {
      case "AI/ML":
        return "🤖";
      case "Full-Stack":
        return "🚀";
      case "Frontend":
        return "🎨";
      case "Backend":
        return "⚙️";
      default:
        return "🔧";
    }
  })()}
</span>

                    </span>
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-body">{project.year}</p>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs font-body">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="secondary" className="text-xs font-body">
                      +{project.tech.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 glass border-border/50 hover-lift font-body text-xs"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-3 h-3 mr-2" />
                    Code
                  </Button>
                  {/* <Button
                    size="sm"
                    className="flex-1 hover-lift font-body text-xs"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    Demo
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold font-heading mb-2">No projects found</h3>
            <p className="text-muted-foreground font-body">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { label: "Total Projects", value: projects.length },
              { label: "Technologies", value: "15+" },
              { label: "Years Coding", value: "3+" },
              { label: "Repositories", value: "20+" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold font-heading gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;