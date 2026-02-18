import { useEffect, useState } from "react";
import { useScrollProgress } from "./hooks/Usescrollanimation";

import Navigation from "./components/layout/Navigation";
import Hero from "./components/layout/Hero";
import Footer from "./components/layout/Footer";

import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import ContactSection from "./components/sections/ContactSection";

import "./App.css";

function App() {
  // Progression du scroll (0 → 1)
  const scrollProgress = useScrollProgress();

  // Affichage de la barre après un certain scroll
  const [showScrollProgress, setShowScrollProgress] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollProgress(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Scroll Progress Bar */}
      <div
        className={`scroll-progress-bar ${
          showScrollProgress ? "visible" : ""
        }`}
      >
        <div
          className="scroll-progress-fill"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="main-content">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
