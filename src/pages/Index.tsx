import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import FeaturedProject from "@/components/FeaturedProject";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
      <Timeline />
      <Contact />
    </div>
  );
};

export default Index;
