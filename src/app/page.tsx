import Navbar from "@/components/layout/Navbar";
import ParticleBackground from "@/components/ui/ParticleBackground";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="relative min-h-screen">
        <Navbar />
        <ParticleBackground />
        
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />

        {/* Footer simple */}
        <footer className="py-10 text-center text-sm lowercase opacity-30 tracking-[0.2em]">
          &copy; {new Date().getFullYear()} VALISOA | FAIT AVEC PASSION
        </footer>
      </main>
    </SmoothScrollProvider>
  );
}
