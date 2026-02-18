import { useScrollAnimation } from '../../hooks/Usescrollanimation';
import { Code2, Rocket, Users, Trophy } from 'lucide-react';
import "../../styles/AboutSection.css";

const AboutSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const stats = [
    { icon: Code2, value: '13+', label: 'Projets réalisés' },
    { icon: Rocket, value: '2+', label: 'Années d\'expérience' },
    { icon: Users, value: '10+', label: 'Collaborations' },
    { icon: Trophy, value: '5+', label: 'Technologies maîtrisées' }
  ];

  const timeline = [
    {
      year: '2023 - 2025',
      title: 'Formation Développement Web',
      description: 'Études en développement web full stack avec spécialisation en technologies modernes',
      current: true
    },
    {
      year: '2023',
      title: 'Premiers Projets Web',
      description: 'Création de sites web et applications pour des clients et projets personnels',
      current: false
    },
    {
      year: '2022',
      title: 'Découverte du Code',
      description: 'Initiation à la programmation et passion pour le développement web',
      current: false
    }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div ref={ref} className={`about-content ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="section-header">
            <span className="section-label">Qui suis-je ?</span>
            <h2 className="section-title">À Propos</h2>
            <p className="section-description">
              Développeur passionné par la création d'expériences web modernes et performantes
            </p>
          </div>

          {/* About Grid */}
          <div className="about-grid">
            {/* Left: Bio */}
            <div className="about-bio">
              <div className="bio-card glass-effect">
                <h3>Mon Parcours</h3>
                <p>
                  Actuellement en deuxième année de formation en développement web, je me 
                  spécialise dans la création d'applications web modernes et performantes. 
                  Mon parcours m'a permis d'acquérir une solide expertise en développement 
                  full stack.
                </p>
                <p>
                  À travers mes projets académiques, j'ai développé des compétences variées 
                  allant de la gestion de bases de données avec MySQL et PHP, au développement 
                  d'interfaces utilisateur réactives avec React, en passant par l'intégration 
                  de solutions cloud comme Firebase.
                </p>
                <p>
                  Passionné par l'innovation technologique et le travail collaboratif, je 
                  cherche constamment à améliorer mes compétences et à relever de nouveaux 
                  défis dans le domaine du développement web.
                </p>

                <div className="bio-highlight">
                  <div className="highlight-icon">💡</div>
                  <div>
                    <h4>Ma philosophie</h4>
                    <p>
                      "Le code est un art qui allie créativité et rigueur. Chaque ligne 
                      écrite est une opportunité d'apprendre et de créer quelque chose 
                      d'exceptionnel."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Stats & Timeline */}
            <div className="about-details">
              {/* Stats */}
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="stat-card glass-effect"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="stat-icon">
                      <stat.icon size={24} />
                    </div>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Timeline */}
              <div className="timeline-container">
                <h3 className="timeline-title">Mon Parcours</h3>
                <div className="timeline">
                  {timeline.map((item, index) => (
                    <div 
                      key={index} 
                      className={`timeline-item ${item.current ? 'current' : ''}`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="timeline-marker"></div>
                      <div className="timeline-content glass-effect">
                        <div className="timeline-year">{item.year}</div>
                        <h4 className="timeline-item-title">{item.title}</h4>
                        <p className="timeline-description">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;