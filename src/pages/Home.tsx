import AboutSection from "../components/AboutSection";
import CareerSection from "../components/CareerSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import SkillsSection from "../components/SkillsSection";
import StarBackground from "../components/StarBackground";
// import ThemeToggle from "../components/ThemeToggle";


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      {/* <ThemeToggle /> */}

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CareerSection />
        {/* <ProjectsSection /> */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
