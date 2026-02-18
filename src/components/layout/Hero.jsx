import { useState, useEffect } from 'react';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';
import "../../styles/Hero.css";

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const roles = [
    'Développeur Web Full Stack',
    'Créateur d\'Applications Modernes',
    'Passionné par l\'Innovation'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentRole.slice(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentRoleIndex]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Main Heading */}
          <div className="hero-label">
            <span className="hero-label-icon">✨</span>
            Bienvenue sur mon portfolio
          </div>

          <h1 className="hero-title">
            <span className="hero-name">DIOMANDE</span>
            <span className="hero-name gradient-text">Prince Moussa</span>
          </h1>

          <div className="hero-subtitle">
            <span className="typing-text">{typedText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-description">
            Étudiant en 2ème année de développement web, passionné par la création 
            d'applications innovantes et l'apprentissage de nouvelles technologies. 
            Je transforme les idées en expériences numériques exceptionnelles.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <button 
              onClick={() => scrollToSection('#projects')}
              className="btn btn-primary"
            >
              Voir mes projets
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="btn btn-secondary"
            >
              Me contacter
            </button>
          </div>

          {/* Download CV */}
          <a href="CV PrinceMD.pdf" className="cv-download" download>
            <Download size={18} />
            Télécharger mon CV
          </a>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('#about')}
          className="scroll-indicator"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;