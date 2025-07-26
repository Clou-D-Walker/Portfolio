import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'timeline', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    // Set dark theme by default
    document.documentElement.classList.add('dark');
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  return (
    // <nav className={cn(
    //       "fixed top-0 left-0 right-0 z-50 transition-all duration-300 mx-auto w-4/5",
    //       isScrolled ? "glass backdrop-blur-xl py-3" : "py-6"
    //     )}>
    <nav className={`fixed top-3 left-0 right-0 z-50 transition-all duration-300 mx-auto w-3/5 rounded-3xl ${isScrolled ? 'backdrop-blur-xl py-2' : 'py-2'} ${isDark ? ' bg-[#E9A6A6]' : 'bg-[#A3C7D6] '}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-heading text-2xl font-bold gradient-text cursor-pointer"
               onClick={() => scrollToSection('home')}>
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "relative text-sm font-medium transition-all duration-300 hover:text-primary group ",
                  activeSection === item.id 
                    ? "text-black" 
                    : "text-[#1A1A40]"
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-primary rounded-full glow" />
                )}
                <div className="absolute bottom-[-4px] left-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full w-0" />
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="glass border-border/10 hover:glow"
            >
              {isDark ? <Sun className="h-1 w-2" /> : <Moon className="h-1 w-1" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden glass border-border/50"
            >
              {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "block w-full text-left p-2 rounded transition-colors",
                  activeSection === item.id 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;