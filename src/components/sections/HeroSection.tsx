import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Download, ExternalLink } from 'lucide-react';
import { toolBadges } from '../../data/portfolioData';
import { useWaterRipple } from '../../hooks/useGSAP';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useWaterRipple();

  useEffect(() => {
    // Parallax effect for hero background
    const handleParallax = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        heroRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden water-ripple-cursor">
      {/* Background */}
      <div 
        ref={heroRef}
        className="absolute inset-0 hero-bg parallax-bg"
        style={{
          backgroundImage: `url('https://i.ibb.co/LDtfyjWR/Bhavesh-Goyal-ds-Portfolio-Adance-Video-Editor-motion-Graphics-Designer.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-panel p-8 md:p-12">
          
          {/* Main Headline */}
          <h1 className="hero-title text-reveal mb-6">
                 Creative Video Editor &
            <span className="neon-text font-semibold">           Graphics Designer</span>
          </h1>
          
          {/* Sub-headline */}
          <h2 className="text-xl md:text-2xl font-medium text-text-primary mb-4 scroll-reveal">
            Crafting High-Impact Visual Stories for Social-First Platforms
          </h2>
          
          {/* Location & Availability */}
          <p className="text-lg text-text-subtle mb-8 scroll-reveal">
            Mumbai • Available for Freelance & Full-Time
          </p>
          
          {/* Value Proposition */}
          <div className="max-w-4xl mx-auto mb-12 scroll-reveal">
            <p className="body-large leading-relaxed">
              With <span className="neon-text font-semibold">3+ years</span> of creative expertise, I've edited content for 
              <span className="neon-text font-semibold"> TECH-iELA Shorts (8M+ subscribers)</span> and specialize in 
              platform-optimized videos for YouTube and Instagram Shorts. My AI-enhanced workflow combines traditional 
              editing mastery with cutting-edge tools like Veo, ChatGPT, and Freepik to deliver scroll-stopping content 
              that drives engagement and conversions.
            </p>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 scroll-reveal">
            <button
              onClick={scrollToContact}
              className="btn-primary group"
            >
              Hire Me Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={scrollToWork}
              className="btn-secondary group"
            >
              <Play className="w-5 h-5" />
              View My Work
            </button>
          </div>
          
          {/* Tool Badges */}
          <div className="scroll-reveal">
            <p className="accent-title mb-4">Tools & Expertise</p>
            <div className="flex flex-wrap justify-center gap-3">
              {toolBadges.map((tool, index) => (
                <div
                  key={index}
                  className="px-4 py-2 glass-button text-sm font-medium hover:scale-105 transition-all duration-300 floating-element stagger-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-reveal">
          <div className="flex flex-col items-center text-text-subtle">
            <p className="text-sm mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-glass-border rounded-full flex justify-center">
              <div className="w-1 h-3 bg-neon-green rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-neon-green/10 rounded-full floating-element" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-neon-green/5 rounded-full floating-element" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-neon-green/8 rounded-full floating-element" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;
