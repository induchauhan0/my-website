import React from 'react';
import { ExternalLink, Calendar, User, Tag } from 'lucide-react';
import { ProjectCard as ProjectCardType } from '../../data/portfolioData';

interface ProjectCardProps {
  project: ProjectCardType;
  onClick?: () => void;
  size?: 'default' | 'featured';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  onClick, 
  size = 'default' 
}) => {
  const handleCardClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if ((event.key === 'Enter' || event.key === ' ') && onClick) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={`project-card group cursor-pointer ${
        size === 'featured' ? 'md:col-span-2' : ''
      }`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-glass">
        <img
          src={project.media.coverImage.src}
          alt={project.media.coverImage.alt}
          className="w-full h-48 md:h-56 object-cover"
          loading="lazy"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.category.slice(0, 2).map((cat, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-black/50 backdrop-blur-sm text-xs font-medium text-neon-green rounded border border-neon-green/30"
            >
              {cat}
            </span>
          ))}
        </div>
        
        {/* View Details Button */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="glass-button p-2">
            <ExternalLink className="w-5 h-5 text-neon-green" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Role */}
        <div className="mb-4">
          <h3 className="component-title group-hover:text-neon-green transition-colors duration-300">
            {project.title}
          </h3>
          <p className="accent-title text-sm">
            {project.role}
          </p>
        </div>

        {/* Summary */}
        <p className="body-text mb-4 line-clamp-3">
          {project.summary}
        </p>

        {/* Tools */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.tools.slice(0, 4).map((tool, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-glass-bg border border-glass-border rounded text-xs text-text-subtle"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 4 && (
              <span className="px-2 py-1 bg-glass-bg border border-glass-border rounded text-xs text-text-subtle">
                +{project.tools.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="mb-4 grid grid-cols-2 gap-4">
            {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-sm font-semibold text-neon-green">{value}</div>
                <div className="text-xs text-text-subtle capitalize">
                  {key.replace('_', ' ')}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-glass-border">
          <div className="flex items-center gap-2 text-xs text-text-subtle">
            <Calendar className="w-4 h-4" />
            {new Date(project.dateCompleted).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short'
            })}
          </div>
          
          <div className="flex items-center gap-2 text-xs text-text-subtle">
            <User className="w-4 h-4" />
            {project.client}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;