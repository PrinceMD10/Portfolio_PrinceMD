import { useState, useEffect } from 'react';
import "../../styles/SkillCategory.css";

const SkillCategory = ({ category, index, isVisible }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !animated) {
      const timer = setTimeout(() => {
        setAnimated(true);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, animated, index]);

  return (
    <div 
      className={`skill-category glass-effect ${animated ? 'animate' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Category Header */}
      <div className="category-header">
        <div className="category-icon">{category.icon}</div>
        <h3 className="category-title">{category.category}</h3>
      </div>

      {/* Skills List */}
      <div className="skills-list">
        {category.skills.map((skill, skillIndex) => (
          <div 
            key={skillIndex} 
            className="skill-item"
            style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
          >
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar-container">
              <div 
                className="skill-bar"
                style={{ 
                  width: animated ? `${skill.level}%` : '0%',
                  background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}99 100%)`,
                  boxShadow: `0 0 20px ${skill.color}40`
                }}
              >
                <div className="skill-bar-glow"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;