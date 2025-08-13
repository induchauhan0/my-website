import React from 'react';
import { Linkedin, Instagram, Youtube, ExternalLink, Mail, Phone } from 'lucide-react';
import { contactInfo } from '../../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: contactInfo.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      href: contactInfo.instagram,
      icon: Instagram,
      color: 'hover:text-pink-400'
    },
    {
      name: 'Email',
      href: `mailto:${contactInfo.email}`,
      icon: Mail,
      color: 'hover:text-neon-green'
    }
  ];

  return (
    <footer className="mt-20 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-panel p-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            
            {/* Logo and Description */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold neon-text mb-2">Bhavesh Goyal</h3>
              <p className="caption-text">
                Creative Video Editor & Graphics Designer
              </p>
              <p className="caption-text">
                {contactInfo.location} • {contactInfo.availability}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass-button transition-colors duration-300 ${link.color} focus-ring`}
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right space-y-2">
              <a
                href={`mailto:${contactInfo.email}`}
                className="block text-text-primary hover:text-neon-green transition-colors duration-300 focus-ring"
              >
                <Mail className="w-4 h-4 inline mr-2" />
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="block text-text-primary hover:text-neon-green transition-colors duration-300 focus-ring"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                {contactInfo.phone}
              </a>
              <div className="mt-4">
                <a
                  href="#contact"
                  className="btn-secondary text-sm"
                >
                  Get In Touch
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-glass-border text-center">
            <p className="caption-text">
              © {currentYear} Bhavesh Goyal. All rights reserved.
            </p>
            <p className="caption-text mt-1">
              Crafted with cutting-edge technology and creative passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
