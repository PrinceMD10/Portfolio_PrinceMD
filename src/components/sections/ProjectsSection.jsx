import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/Usescrollanimation';
import { projects, projectCategories } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import "../../styles/ProjectsSection.css";

const ProjectsSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [displayCount, setDisplayCount] = useState(6);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const visibleProjects = filteredProjects.slice(0, displayCount);
  const hasMore = displayCount < filteredProjects.length;

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <div ref={ref} className={`projects-content ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="section-header">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">Mes Projets</h2>
            <p className="section-description">
              Découvrez une sélection de mes réalisations récentes
            </p>
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setDisplayCount(6);
                }}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {visibleProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="load-more-container">
              <button
                onClick={() => setDisplayCount(prev => prev + 3)}
                className="load-more-btn"
              >
                Voir plus de projets
              </button>
            </div>
          )}

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">📦</div>
              <h3>Aucun projet dans cette catégorie</h3>
              <p>Explorez d'autres catégories pour découvrir mes réalisations</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;