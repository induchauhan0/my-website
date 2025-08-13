import React, { useState, useEffect } from 'react';
import { useGSAPAnimations, useScrollSpy } from './hooks/useGSAP';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Section Components
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import PortfolioSection from './components/sections/PortfolioSection';
import AICreationsSection from './components/sections/AICreationsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  
  // Initialize GSAP animations
  useGSAPAnimations();
  
  // Track active section for navigation
  const sections = ['hero', 'about', 'skills', 'work', 'ai-creations', 'experience', 'testimonials', 'contact'];
  
  useEffect(() => {
    const handleSectionChange = (event: CustomEvent) => {
      setActiveSection(event.detail.activeSection);
    };
    
    window.addEventListener('section-change', handleSectionChange as EventListener);
    
    return () => {
      window.removeEventListener('section-change', handleSectionChange as EventListener);
    };
  }, []);
  
  // Initialize scroll spy
  useScrollSpy(sections);
  
  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Bhavesh Goyal",
      "jobTitle": "Creative Video Editor & Graphics Designer",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressCountry": "IN"
      },
      "email": "creativebhavesh.ds@gmail.com",
      "url": window.location.origin,
      "sameAs": [
        "[PLACEHOLDER: LINKEDIN URL]",
        "[PLACEHOLDER: INSTAGRAM URL]",
        "[PLACEHOLDER: YOUTUBE URL]",
        "[PLACEHOLDER: BEHANCE URL]"
      ],
      "knowsAbout": [
        "Video Editing",
        "Motion Graphics", 
        "Graphic Design",
        "AI-Enhanced Workflows",
        "Social Media Content",
        "Adobe Creative Suite",
        "Brand Identity Design"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Creative Video Editor & Graphics Designer",
        "description": "Specialized in high-impact content for YouTube and Instagram Shorts with AI-enhanced workflows",
        "skills": "Adobe Premiere Pro, After Effects, AI Tools, Social Media Optimization"
      }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  return (
    <div className="App">
      {/* SEO Meta Tags */}
      <head>
        <title>Bhavesh Goyal - Creative Video Editor & Graphics Designer | AI-Enhanced Workflows</title>
        <meta 
          name="description" 
          content="Professional video editor and graphic designer from Mumbai specializing in AI-enhanced workflows, social media content, and platform optimization. 3+ years experience with TECH-iELA Shorts (8M+ subscribers)."
        />
        <meta name="keywords" content="video editor, graphic designer, AI workflows, social media content, YouTube Shorts, Instagram Reels, Mumbai, freelance" />
        <meta name="author" content="Bhavesh Goyal" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Bhavesh Goyal - Creative Video Editor & Graphics Designer" />
        <meta property="og:description" content="Professional video editor and graphic designer specializing in AI-enhanced workflows and social media content optimization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/images/hero/futuristic_glassmorphism_neon_green_background.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bhavesh Goyal - Creative Video Editor & Graphics Designer" />
        <meta name="twitter:description" content="Professional video editor and graphic designer specializing in AI-enhanced workflows and social media content optimization." />
        <meta name="twitter:image" content="/images/hero/futuristic_glassmorphism_neon_green_background.jpg" />
      </head>
      
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 btn-primary"
      >
        Skip to main content
      </a>
      
      {/* Header Navigation */}
      <Header activeSection={activeSection} />
      
      {/* Main Content */}
      <main id="main-content" className="relative">
        {/* Hero Section */}
        <div id="hero">
          <HeroSection />
        </div>
        
        {/* About Section */}
        <div id="about">
          <AboutSection />
        </div>
        
        {/* Skills Section */}
        <div id="skills">
          <SkillsSection />
        </div>
        
        {/* Portfolio Section */}
        <div id="work">
          <PortfolioSection />
        </div>
        
        {/* AI Creations Section */}
        <div id="ai-creations">
          <AICreationsSection />
        </div>
        
        {/* Experience Section */}
        <div id="experience">
          <ExperienceSection />
        </div>
        
        {/* Testimonials Section */}
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        
        {/* Contact Section */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Animated background particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-green/20 rounded-full floating-element" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-neon-green/10 rounded-full floating-element" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-neon-green/30 rounded-full floating-element" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-neon-green/15 rounded-full floating-element" style={{ animationDelay: '6s' }} />
      </div>
    </div>
  );
}

export default App;