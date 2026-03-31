import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { skillsData } from '../../data/skills';
import SkillCategory from '../ui/SkillCategory';
import "../../styles/SkillsSection.css";

const SkillsSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <div ref={ref} className={`skills-content ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="section-header">
            <span className="section-label">Expertise</span>
            <h2 className="section-title">Mes Compétences</h2>
            <p className="section-description">
              Technologies et outils que je maîtrise pour créer des solutions performantes
            </p>
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {skillsData.map((category, index) => (
              <SkillCategory 
                key={index} 
                category={category}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>

          {/* Additional Info */}
          <div className="skills-footer">
            <div className="skills-info-card glass-effect">
              <div className="info-icon">🚀</div>
              <div>
                <h3>En constante évolution</h3>
                <p>
                  Je continue d'apprendre et de me perfectionner chaque jour. 
                  Actuellement en train d'explorer TypeScript, Next.js et les architectures cloud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;