import { ExternalLink, Github, Star } from 'lucide-react';
import "../../styles/ProjectCard.css";

const ProjectCard = ({ project, index }) => {
  return (
    <div 
      className="project-card glass-effect"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="featured-badge">
          <Star size={14} fill="currentColor" />
          <span>Featured</span>
        </div>
      )}

      {/* Project Image */}
      <div className="project-image">
        <img 
          src={project.image} 
          alt={project.title}
          loading="lazy"
        />
        <div className="project-overlay">
          <div className="project-links">
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label="View on GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label="View live demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {/* Technologies */}
        <div className="project-technologies">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;