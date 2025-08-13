import React, { useState } from 'react';
import { Calendar, MapPin, TrendingUp, Users, Award, ExternalLink, Briefcase, GraduationCap } from 'lucide-react';
import { experienceData, educationData, awardsData } from '../../data/portfolioData';

const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Professional Experience', icon: Briefcase },
    { id: 'education', label: 'Education & Training', icon: GraduationCap },
    { id: 'awards', label: 'Awards & Recognition', icon: Award }
  ];

  const experienceTypes = [
    { id: 'all', label: 'All Experience' },
    { id: 'freelance', label: 'Freelance (3 Years)' },
    { id: 'full-time', label: 'Full-Time Roles' },
    { id: 'part-time', label: 'Teaching & Training' }
  ];

  const [selectedType, setSelectedType] = useState('all');

  const filteredExperience = selectedType === 'all' 
    ? experienceData 
    : experienceData.filter(exp => exp.type === selectedType);

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="scroll-reveal text-center mb-16">
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-xl text-text-subtle max-w-3xl mx-auto">
            A journey of creative growth, client success, and continuous learning in video editing and graphic design
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 scroll-reveal">
          <div className="flex bg-glass-bg border border-glass-border rounded-xl p-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-neon-green text-black font-semibold'
                      : 'text-text-subtle hover:text-text-primary hover:bg-glass-bg/50'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:block">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Experience Tab Content */}
        {activeTab === 'experience' && (
          <>
            {/* Experience Type Filter */}
            <div className="flex justify-center mb-12 scroll-reveal">
              <div className="flex flex-wrap gap-2 bg-glass-bg border border-glass-border rounded-xl p-2">
                {experienceTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm ${
                      selectedType === type.id
                        ? 'bg-neon-green/20 text-neon-green border border-neon-green/30'
                        : 'text-text-subtle hover:text-text-primary hover:bg-glass-bg/50'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-green via-neon-green/50 to-transparent transform md:-translate-x-0.5" />
              
              <div className="space-y-12">
                {filteredExperience.map((experience, index) => (
                  <div key={experience.id} className={`relative scroll-reveal stagger-item flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`} style={{ animationDelay: `${index * 0.2}s` }}>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-neon-green rounded-full transform md:-translate-x-2 z-10 pulse-glow" />
                    
                    {/* Content Card */}
                    <div className={`ml-12 md:ml-0 glass-panel p-8 w-full ${
                      index % 2 === 0 ? 'md:mr-8 md:w-5/12' : 'md:ml-8 md:w-5/12'
                    }`}>
                      
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="component-title mb-1">{experience.position}</h3>
                            <h4 className="text-lg font-semibold text-neon-green">{experience.company}</h4>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                            experience.duration.end === 'Present' 
                              ? 'bg-neon-green/20 text-neon-green' 
                              : experience.type === 'freelance'
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-glass-bg text-text-subtle'
                          }`}>
                            {experience.type}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-text-subtle mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {experience.duration.display}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {experience.location}
                          </div>
                        </div>
                        
                        <p className="body-text">{experience.description}</p>
                      </div>
                      
                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="accent-title mb-3">
                          <TrendingUp className="w-4 h-4 inline-block mr-2" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-neon-green rounded-full mt-2 flex-shrink-0" />
                              <span className="body-text">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Metrics */}
                      <div className="mb-6">
                        <h5 className="accent-title mb-3">
                          <Award className="w-4 h-4 inline-block mr-2" />
                          Impact Metrics
                        </h5>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(experience.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-glass-bg/50 rounded-lg">
                              <div className="text-lg font-bold text-neon-green">{value}</div>
                              <div className="text-xs text-text-subtle capitalize">
                                {key.replace('_', ' ')}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Skills Used */}
                      <div>
                        <h5 className="accent-title mb-3">
                          <Users className="w-4 h-4 inline-block mr-2" />
                          Skills & Tools
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.skillsUsed.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-glass-bg border border-glass-border rounded text-xs text-text-subtle hover:border-neon-green/50 transition-colors duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Highlights */}
            <div className="mt-20 scroll-reveal">
              <div className="glass-panel p-8">
                <h3 className="subsection-title text-center mb-8">
                  <Award className="w-8 h-8 text-neon-green inline-block mr-3" />
                  Career Highlights
                </h3>
                
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center stagger-item">
                    <div className="text-3xl font-bold neon-text mb-2">3+</div>
                    <div className="text-sm text-text-subtle">Years Professional Experience</div>
                  </div>
                  
                  <div className="text-center stagger-item">
                    <div className="text-3xl font-bold neon-text mb-2">100+</div>
                    <div className="text-sm text-text-subtle">Projects Successfully Delivered</div>
                  </div>
                  
                  <div className="text-center stagger-item">
                    <div className="text-3xl font-bold neon-text mb-2">8M+</div>
                    <div className="text-sm text-text-subtle">Cumulative Audience Reach</div>
                  </div>
                  
                  <div className="text-center stagger-item">
                    <div className="text-3xl font-bold neon-text mb-2">98%</div>
                    <div className="text-sm text-text-subtle">Average Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Education & Training Tab Content */}
        {activeTab === 'education' && (
          <div className="scroll-reveal">
            <div className="glass-panel p-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                {educationData.map((item, index) => (
                  <div key={item.id} className="p-6 bg-glass-bg/50 rounded-lg border border-glass-border hover:border-neon-green/30 transition-colors duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-heading mb-2">
                          {item.type === 'degree' ? '🎓' : item.type === 'certification' ? '📜' : '📚'} 
                          {item.degree || item.certification || item.training}
                        </h4>
                        <p className="text-sm text-text-subtle mb-1">{item.institution}</p>
                        <p className="text-xs text-neon-green font-medium">{item.year}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                        item.type === 'degree' ? 'bg-blue-500/20 text-blue-400' :
                        item.type === 'certification' ? 'bg-green-500/20 text-green-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {item.type}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Awards & Recognition Tab Content */}
        {activeTab === 'awards' && (
          <div className="scroll-reveal">
            <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
              {awardsData.map((award, index) => (
                <div key={award.id} className="glass-panel p-8 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{award.icon}</div>
                    <div className="flex-1">
                      <h4 className="component-title mb-2">{award.title}</h4>
                      <p className="body-text mb-3">{award.description}</p>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-neon-green" />
                        <span className="text-sm text-neon-green font-medium">{award.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center scroll-reveal">
          <div className="glass-panel p-8">
            <h3 className="subsection-title mb-4">Ready to Add Value to Your Team?</h3>
            <p className="body-text mb-6 max-w-2xl mx-auto">
              With proven experience in video editing, graphic design, and AI-enhanced workflows, I'm ready to contribute 
              to your next project or join your creative team. Let's discuss how my skills can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Get In Touch
                <ExternalLink className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/bhaveshgoyal-ds/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View LinkedIn Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;