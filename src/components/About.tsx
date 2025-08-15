import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, Code } from "lucide-react";
import ScrollAnimation from "./ScrollAnimations";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      content: "B.Tech in Computer Science from IIIT Sri City",
      detail: "CGPA: 7.90 (2022-Present)"
    },
    {
      icon: Code,
      title: "Experience",
      content: "Full-Stack Development at InternPE",
      detail: "Built eCommerce applications with modern JS stack"
    },
    {
      icon: Users,
      title: "Leadership",
      content: "NSS Volunteer",
      detail: "Increased campus event turnout from 200 to 400+"
    },
    {
      icon: Award,
      title: "Certifications",
      content: "JavaScript, DSA, TypeScript, Web Development",
      detail: "Industry-recognized credentials"
    }
  ];

  return (
    <ScrollAnimation>
      <section id="about" className="py-20 section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glass border-primary/20">
            About Me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
            Crafting Digital{' '}
            <span className="gradient-text">Experiences</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I am a backend and full-stack developer with a foundation in scalable system design, 
              API development, and modern web architectures. I'm currently diving into the world of 
              <span className="text-primary font-semibold"> Generative AI</span>, exploring LLMs and 
              multi-agent systems to expand my problem-solving capabilities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
            Part engineer, part artist, part night owl—I build smart solutions with style and just the right amount of debugging trauma.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="glass border-border/50 hover-lift magnetic group transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{item.content}</p>
                <p className="text-xs text-primary font-medium">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {highlights.map((item, index) => (
    <Card
      key={index}
      className={`
        rounded-xl shadow-lg border border-transparent 
        bg-white/70 dark:bg-black/30 
        backdrop-blur-md 
        hover:border-orange-400/30 
        hover:shadow-orange-400/20 
        transition-all duration-300
        group
      `}
    >
      <CardContent className="p-6 text-center">
        <div
          className={`
            inline-flex items-center justify-center w-12 h-12 
            bg-orange-100 dark:bg-orange-400/10 
            rounded-lg mb-4 
            transition-colors duration-300 
            group-hover:bg-orange-200 dark:group-hover:bg-orange-500/10
          `}
        >
          <item.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
          {item.title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-orange-200 mb-2">
          {item.content}
        </p>
        <p className="text-xs font-medium text-orange-600 dark:text-orange-400">
          {item.detail}
        </p>
      </CardContent>
    </Card>
  ))}
</div>


        {/* Journey Timeline Preview */}
        

      </div>
      </section>
    </ScrollAnimation>
  );
};

export default About;