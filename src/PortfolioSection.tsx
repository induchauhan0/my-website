import React, { useState } from 'react';
import { Filter, ExternalLink, Play } from 'lucide-react';
import TabGroup from '../ui/TabGroup';
import ProjectCard from '../ui/ProjectCard';
import { portfolioProjects, portfolioCategories } from '../../data/portfolioData';

const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const getProjectsByCategory = (category: string) => {
    if (category === 'All') {
      return portfolioProjects;
    }
    return portfolioProjects.filter(project => 
      project.category.includes(category)
    );
  };

  const portfolioTabs = [
    {
      id: 'all',
      label: 'All Work',
      content: (
        <div className="portfolio-grid">
          {portfolioProjects.map((project, index) => (
            <div key={project.id} className="stagger-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard 
                project={project} 
                onClick={() => setSelectedProject(project.id)}
                size={project.featured ? 'featured' : 'default'}
              />
            </div>
          ))}
        </div>
      )
    },
    ...portfolioCategories.map(category => ({
      id: category.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      label: category,
      content: (
        <div className="portfolio-grid">
          {getProjectsByCategory(category).map((project, index) => (
            <div key={project.id} className="stagger-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard 
                project={project} 
                onClick={() => setSelectedProject(project.id)}
                size={project.featured ? 'featured' : 'default'}
              />
            </div>
          ))}
        </div>
      )
    }))
  ];

  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="scroll-reveal text-center mb-16">
          <h2 className="section-title">Portfolio</h2>
          <p className="text-xl text-text-subtle max-w-3xl mx-auto mb-8">
            Explore my diverse range of creative work across multiple disciplines. Each project showcases my ability 
            to deliver high-quality, platform-optimized content that drives results.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 glass-panel p-6 mx-auto max-w-2xl">
            <div className="text-center">
              <div className="text-2xl font-bold neon-text">50+</div>
              <div className="text-sm text-text-subtle">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold neon-text">8M+</div>
              <div className="text-sm text-text-subtle">Total Reach</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold neon-text">95%</div>
              <div className="text-sm text-text-subtle">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Portfolio Tabs */}
        <div className="scroll-reveal">
          <TabGroup tabs={portfolioTabs} defaultTab="all" />
        </div>

        {/* Featured Projects Highlight */}
        <div className="mt-20 scroll-reveal">
          <div className="glass-panel p-8">
            <h3 className="subsection-title text-center mb-8">
              <Filter className="w-8 h-8 text-neon-green inline-block mr-3" />
              Project Highlights
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center stagger-item">
                <div className="p-4 bg-neon-green/10 rounded-lg mb-4 mx-auto w-fit">
                  <Play className="w-8 h-8 text-neon-green" />
                </div>
                <h4 className="font-semibold text-text-heading mb-2">TECH-iELA Shorts</h4>
                <p className="text-sm text-text-subtle mb-3">
                  Platform-optimized video editing for 8M+ subscriber channel
                </p>
                <div className="flex justify-center gap-2">
                  <span className="px-2 py-1 bg-neon-green/20 text-neon-green text-xs rounded">Video Editing</span>
                  <span className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded">Motion Graphics</span>
                </div>
              </div>
              
              <div className="text-center stagger-item">
                <div className="p-4 bg-neon-green/10 rounded-lg mb-4 mx-auto w-fit">
                  <ExternalLink className="w-8 h-8 text-neon-green" />
                </div>
                <h4 className="font-semibold text-text-heading mb-2">Brand X Campaign</h4>
                <p className="text-sm text-text-subtle mb-3">
                  High-converting product ads with AI-assisted workflows
                </p>
                <div className="flex justify-center gap-2">
                  <span className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs rounded">Ads & Campaigns</span>
                  <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded">AI Integration</span>
                </div>
              </div>
              
              <div className="text-center stagger-item">
                <div className="p-4 bg-neon-green/10 rounded-lg mb-4 mx-auto w-fit">
                  <Filter className="w-8 h-8 text-neon-green" />
                </div>
                <h4 className="font-semibold text-text-heading mb-2">Fitness Branding</h4>
                <p className="text-sm text-text-subtle mb-3">
                  Complete visual rebrand with consistent social media assets
                </p>
                <div className="flex justify-center gap-2">
                  <span className="px-2 py-1 bg-pink-400/20 text-pink-400 text-xs rounded">Branding/UI</span>
                  <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded">Design Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center scroll-reveal">
          <div className="glass-panel p-8">
            <h3 className="subsection-title mb-4">Ready to Start Your Project?</h3>
            <p className="body-text mb-6 max-w-2xl mx-auto">
              Let's collaborate to create compelling visual content that drives engagement and achieves your goals. 
              From concept to completion, I'll bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Start a Project
                <ExternalLink className="w-5 h-5" />
              </a>
              <a href="#experience" className="btn-secondary">
                View Experience
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;