import React from 'react';
import { Code, Palette, Users, Zap, Video, Brain } from 'lucide-react';
import { skillsData } from '../../data/portfolioData';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: Code,
      skills: skillsData.technical,
      color: 'text-blue-400',
      description: 'Proficient in industry-standard software and cutting-edge AI tools'
    },
    {
      title: 'Creative Skills',
      icon: Palette,
      skills: skillsData.creative,
      color: 'text-purple-400',
      description: 'Specialized in visual storytelling and brand-consistent design'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: skillsData.soft,
      color: 'text-neon-green',
      description: 'Strong communication and leadership in creative environments'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="text-xl text-text-subtle max-w-3xl mx-auto">
            A comprehensive toolkit combining traditional creative skills with modern AI-enhanced workflows
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className="scroll-reveal stagger-item" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="glass-panel p-8 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-neon-green/10 rounded-lg">
                      <Icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="component-title">{category.title}</h3>
                      <p className="text-sm text-text-subtle">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-3 p-3 bg-glass-bg/50 rounded-lg hover:bg-neon-green/5 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-neon-green rounded-full" />
                        <span className="body-text flex-1">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Skills Showcase */}
        <div className="scroll-reveal">
          <div className="glass-panel p-8">
            <h3 className="subsection-title text-center mb-8">
              <Zap className="w-8 h-8 text-neon-green inline-block mr-3" />
              AI-Enhanced Workflow Specialties
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center stagger-item">
                <div className="p-4 bg-neon-green/10 rounded-lg mb-4 mx-auto w-fit">
                  <Video className="w-8 h-8 text-neon-green" />
                </div>
                <h4 className="font-semibold text-text-heading mb-2">Video Editing</h4>
                <p className="text-sm text-text-subtle">Adobe Premiere Pro, After Effects, DaVinci Resolve</p>
              </div>
              
              <div className="text-center stagger-item">
                <div className="p-4 bg-neon-green/10 rounded-lg mb-4 mx-auto w-fit">
                  <Brain className="w-8 h-8 text-neon-green" />
                </div>
                <h4 className="font-semibold text-text-heading mb-2">AI Integration</h4>
                <p className="text-sm text-text-subtle">Veo, ChatGPT, Minimex, Freepik AI</p>
              </div>
              
              <div className="text-center stagger-item">
                <div className="p-4 bg-neon-green/10 rounded-lg mb-4 mx-auto w-fit">
                  <Palette className="w-8 h-8 text-neon-green" />
                </div>
                <h4 className="font-semibold text-text-heading mb-2">Design Systems</h4>
                <p className="text-sm text-text-subtle">Brand consistency, UI/UX principles</p>
              </div>
              
              <div className="text-center stagger-item">
                <div className="p-4 bg-neon-green/10 rounded-lg mb-4 mx-auto w-fit">
                  <Users className="w-8 h-8 text-neon-green" />
                </div>
                <h4 className="font-semibold text-text-heading mb-2">Platform Optimization</h4>
                <p className="text-sm text-text-subtle">YouTube Shorts, Instagram Reels, TikTok</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Progress Visualization */}
        <div className="mt-16 scroll-reveal">
          <div className="glass-panel p-8">
            <h3 className="subsection-title text-center mb-8">Proficiency Levels</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="accent-title">Core Creative Tools</h4>
                {[
                  { name: 'Adobe Premiere Pro', level: 95 },
                  { name: 'After Effects', level: 90 },
                  { name: 'Photoshop', level: 88 },
                  { name: 'DaVinci Resolve', level: 85 }
                ].map((skill, index) => (
                  <div key={skill.name} className="stagger-item">
                    <div className="flex justify-between mb-2">
                      <span className="body-text">{skill.name}</span>
                      <span className="text-neon-green font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-glass-bg rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-neon-green to-neon-green/70 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                <h4 className="accent-title">AI & Emerging Tech</h4>
                {[
                  { name: 'AI-Assisted Workflow', level: 92 },
                  { name: 'ChatGPT Integration', level: 88 },
                  { name: 'Veo Video AI', level: 85 },
                  { name: 'Social Media Strategy', level: 90 }
                ].map((skill, index) => (
                  <div key={skill.name} className="stagger-item">
                    <div className="flex justify-between mb-2">
                      <span className="body-text">{skill.name}</span>
                      <span className="text-neon-green font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-glass-bg rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-400 to-neon-green h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
