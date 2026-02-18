import { Heart, ArrowUp } from 'lucide-react';
import "../../styles/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'À propos', href: '#about' },
        { label: 'Projets', href: '#projects' },
        { label: 'Compétences', href: '#skills' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Réseaux',
      links: [
        { label: 'GitHub', href: 'https://github.com/PrinceMD10', external: true },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/PrinceMD10', external: true },
        { label: 'Twitter', href: 'https://twitter.com/PrinceMD10', external: true }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Footer Top */}
          <div className="footer-top">
            <div className="footer-brand">
              <h3 className="brand-name gradient-text">DPM</h3>
              <p className="brand-tagline">
                Développeur Web Full Stack
              </p>
              <p className="brand-description">
                Créer des expériences web exceptionnelles, une ligne de code à la fois.
              </p>
            </div>

            {/* Footer Links */}
            <div className="footer-links">
              {footerLinks.map((section, index) => (
                <div key={index} className="footer-section">
                  <h4 className="footer-title">{section.title}</h4>
                  <ul className="footer-list">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          target={link.external ? '_blank' : undefined}
                          rel={link.external ? 'noopener noreferrer' : undefined}
                          className="footer-link"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="copyright">
              <p>
                © {currentYear} DIOMANDE Prince Moussa. Fait avec{' '}
                <Heart size={16} className="heart-icon" fill="currentColor" />{' '}
                et React
              </p>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="scroll-top-btn"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;