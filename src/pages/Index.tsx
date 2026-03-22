import CustomCursor from "@/components/CustomCursor";
import FloatingNavbar from "@/components/FloatingNavbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";

import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen relative">
      {/* Grain overlay */}
      <div className="noise-overlay" />
      
      <CustomCursor />
      <FloatingNavbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
      
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
