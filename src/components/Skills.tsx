import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code2, Database, Wrench, Sparkles } from "lucide-react";
import ScrollAnimation from "./ScrollAnimations";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS"],
      color: "text-blue-400"
    },
    {
      icon: Wrench,
      title: "Frameworks",
      skills: ["React", "Next.js", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      color: "text-green-400"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
      color: "text-purple-400"
    },
    {
      icon: Sparkles,
      title: "Tools & Platforms",
      skills: ["Docker", "AWS", "Git", "Vercel", "Postman", "VS Code"],
      color: "text-orange-400"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: ["LLMs", "Gemini API", "Prompt Engineering", "Agent Automation", "OpenAI"],
      color: "text-pink-400"
    }
  ];

  const inspirationalQuotes = [
    "Be so good they can’t ignore you.",
    "Creativity is intelligence having fun.",
    "Don’t wait for the opportunity — create it.",
    "Dream big. Start small. Act now.",
    "The only limit is the one you don't challenge."
  ];
  return (
    <ScrollAnimation>
      <section id="skills" className="py-20 section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glass border-primary/20 font-body">
            Technical Skills
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
            My Tech{' '}
            <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            A comprehensive toolkit spanning full-stack development, cloud platforms, and cutting-edge AI technologies
          </p>
        </div>

        {/* Scrolling Text Animation - Improved readability */}
        <div className="mb-16 overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {inspirationalQuotes.concat(inspirationalQuotes).map((quote, index) => (
              <span key={index} className="inline-block text-4xl md:text-6xl font-heading font-bold text-scroll-improved mx-8">
                {quote} •
              </span>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="glass border-border/50 hover-lift magnetic tilt group transition-all duration-500 hover:border-primary/30 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-background/50 mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold font-heading">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center justify-between p-2 rounded-lg bg-background/30 hover:bg-background/50 transition-all duration-200"
                    >
                      <span className="font-medium font-body text-sm">{skill}</span>
                      <div className="w-2 h-2 rounded-full bg-primary/60" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {skillCategories.map((category, index) => (
    <Card
      key={index}
      className={`
        rounded-xl overflow-hidden 
        bg-white/70 dark:bg-zinc-900/50 
        border border-transparent hover:border-[#ff974d]/30 
        shadow-md hover:shadow-[#ff974d]/20 
        backdrop-blur-md transition-all duration-500 
        group transform hover:-translate-y-1
      `}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center mb-6 justify-center">
          <div className={`
            p-3 rounded-lg 
            bg-[#ff974d]/10 
            mr-4 group-hover:scale-110 transition-transform duration-300
          `}>
            <category.icon className="w-6 h-6 text-[#ff974d]" />
          </div>
          <h3 className="text-xl font-semibold font-heading text-zinc-900 dark:text-white">
            {category.title}
          </h3>
        </div>

        <div className="flex flex-col items-center space-y-3">
          {category.skills.map((skill, skillIndex) => (
            <div
              key={skillIndex}
              className={`
                w-2/3 text-center
                p-2 rounded-xl 
                bg-[#ff974d]/10 
                hover:bg-[#ff974d]/20 
                dark:bg-white/10 
                dark:hover:bg-white/20 
                transition-all duration-200
              `}
            >
              <span className="font-medium font-body text-sm text-zinc-800 dark:text-[#ffffff]">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ))}
</div>


        {/* Certifications */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold font-heading mb-8">
            <span className="gradient-text">Certifications</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "JavaScript Certification", url: "https://drive.google.com/file/d/1Ics5SIIFqsXkIaTdZ38gjkSzK-SyrQOH/view" },
              { name: "Web Development", url: "https://drive.google.com/file/d/1fkCRdNc9X2-NXWoINyYKUPgbN_7Ob9M5/view" },
              { name: "TypeScript", url: "https://drive.google.com/file/d/1l-uxek4R_vZwVyznjqAXzb5rc5HmalY3/view" }
            ].map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 rounded-lg border-border/50 hover-lift hover:border-primary/30 transition-all duration-300 group"
              >
                <span className="font-medium font-body text-sm group-hover:text-primary transition-colors">
                  {cert.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      </section>
    </ScrollAnimation>
  );
};

export default Skills;