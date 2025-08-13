import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'work', label: 'Work', href: '#work' },
    { id: 'ai-creations', label: 'AI Creations', href: '#ai-creations' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isScrolled) return null;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <nav className="glass-panel mx-4 mt-4 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="text-xl font-bold neon-text hover:scale-105 transition-transform duration-300 focus-ring"
              aria-label="Go to top"
            >
              BG
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium transition-all duration-300 focus-ring ${
                    activeSection === item.id
                      ? 'neon-text'
                      : 'text-text-primary hover:text-text-heading'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="btn-primary"
              >
                Hire Me
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden glass-button p-2 focus-ring"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-20 left-4 right-4">
            <nav className="glass-panel p-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-left py-2 text-base font-medium transition-all duration-300 focus-ring ${
                      activeSection === item.id
                        ? 'neon-text'
                        : 'text-text-primary hover:text-text-heading'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-glass-border">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#contact');
                    }}
                    className="btn-primary w-full justify-center"
                  >
                    Hire Me
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
