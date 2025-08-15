import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Code, Briefcase } from "lucide-react";
import ScrollAnimation from "./ScrollAnimations";

const Timeline = () => {
  const timelineItems = [
    {
      year: "2023",
      title: "NSS, Leadership & Web Development",
      description: "Led campus events as NSS Volunteer, increasing participation from 200 to 400+.  Been the full stack courses Team Lead for consecutively 3 Semesters and mentored the peers. Joined InternPE for hands-on web development experience.",
      icon: Briefcase,
      color: "text-green-400"
    },
    {
      year: "2024",
      title: "Full-Stack Development Mastery",
      description: "Built multiple MERN applications including AI Chat Assistant and Hotel Booking System. Learned Docker, AWS, and cloud deployment.",
      icon: Code,
      color: "text-purple-400"
    },
    {
      year: "2025",
      title: "AI & Machine Learning Focus",
      description: "Leaning Generative AI, LLMs, multi-agent systems, automation and prompt engineering for intelligent solutions.",
      icon: Calendar,
      color: "text-orange-400"
    }
  ];

  return (
    <ScrollAnimation>
      <section id="timeline" className="py-20 section relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 glass border-primary/20 font-body">
              My Journey
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
              The{' '}
              <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              From curious beginner to AI-focused full-stack developer - my growth story in technology
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

            {timelineItems.map((item, index) => (
              <ScrollAnimation 
                key={index} 
                direction={index % 2 === 0 ? "left" : "right"} 
                delay={index * 0.2}
              >
                <div className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="glass border-border/50 hover-lift magnetic group transition-all duration-500 hover:border-primary/30 hover:shadow-xl">
                      <CardContent className="p-6">
                        <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          <Badge variant="outline" className="glass border-primary/20 font-body">
                            {item.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold font-heading mb-3 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground font-body text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full glass border-2 border-primary/30 flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-20" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12" />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Timeline;