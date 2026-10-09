import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import EducationSection from '../components/EducationSection'
import ExperienceSection from '../components/ExperienceSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
