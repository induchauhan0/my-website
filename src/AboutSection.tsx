import React from 'react';
import { Sparkles, Target, Lightbulb } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="text-xl text-text-subtle max-w-3xl mx-auto">
            Passionate creator merging traditional storytelling with AI-enhanced workflows
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="scroll-reveal">
            <div className="space-y-6">
              <div className="glass-panel p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-neon-green/10 rounded-lg">
                    <Sparkles className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <h3 className="component-title mb-2">Creative Journey</h3>
                    <p className="body-text">
                      I'm a passionate Creative Video Editor and Graphics Designer based in Mumbai, specializing in 
                      high-impact content for YouTube and Instagram Shorts. Over the past 3+ years, I've honed my craft 
                      working with major channels like <span className="neon-text font-semibold">TECH-iELA Shorts (8M+ subscribers)</span>, 
                      developing a keen understanding of what makes content stop the scroll and drive engagement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-neon-green/10 rounded-lg">
                    <Target className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <h3 className="component-title mb-2">Creative Philosophy</h3>
                    <p className="body-text">
                      My creative philosophy centers on merging traditional storytelling with modern AI-assisted workflows. 
                      I believe great content starts with understanding your audience, then leveraging the right tools – from 
                      Adobe Creative Suite to cutting-edge AI platforms like Veo and ChatGPT – to bring ideas to life 
                      efficiently and effectively.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-neon-green/10 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <h3 className="component-title mb-2">Fun Fact</h3>
                    <p className="body-text">
                      I once turned a 45-minute product demo into a 30-second viral ad that generated 
                      <span className="neon-text font-semibold"> 2M+ views</span> and drove a 
                      <span className="neon-text font-semibold">300% spike</span> in product inquiries!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Image */}
          <div className="scroll-reveal">
            <div className="relative">
              <div className="glass-panel p-2">
                <img
                  src="/images/professional/creative_designer_modern_workspace_portrait.jpg"
                  alt="Bhavesh Goyal - Creative Video Editor and Graphics Designer"
                  className="w-full h-auto rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 glass-panel p-4 text-center floating-element">
                <div className="text-2xl font-bold neon-text">3+</div>
                <div className="text-sm text-text-subtle">Years Experience</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-panel p-4 text-center floating-element" style={{ animationDelay: '1s' }}>
                <div className="text-2xl font-bold neon-text">8M+</div>
                <div className="text-sm text-text-subtle">Subscriber Reach</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Highlights */}
        <div className="mt-16 scroll-reveal">
          <div className="glass-panel p-8">
            <h3 className="subsection-title text-center mb-8">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center stagger-item">
                <div className="text-3xl font-bold neon-text mb-2">25%</div>
                <div className="text-sm text-text-subtle">Video Engagement Increase</div>
              </div>
              <div className="text-center stagger-item">
                <div className="text-3xl font-bold neon-text mb-2">15%</div>
                <div className="text-sm text-text-subtle">Ad Conversion Boost</div>
              </div>
              <div className="text-center stagger-item">
                <div className="text-3xl font-bold neon-text mb-2">50+</div>
                <div className="text-sm text-text-subtle">Students Mentored</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;