import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";

import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen relative w-full overflow-x-hidden max-w-[100vw]">
      {/* Grain overlay - Hidden on mobile to prevent extreme GPU render lag during fast scrolling */}
      <div className="noise-overlay hidden sm:block" />
      
      <CustomCursor />
      
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
