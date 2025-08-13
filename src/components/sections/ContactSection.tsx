import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import { contactInfo, faqData } from '../../data/portfolioData';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const projectTypes = [
    'Video Editing',
    'Motion Graphics',
    'Graphic Design',
    'Branding/UI Design',
    'Social Media Content',
    'AI-Enhanced Workflow',
    'Full Creative Package',
    'Consultation',
    'Other'
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'Let\'s discuss'
  ];

  const timelineOptions = [
    'ASAP (Rush job)',
    '1-2 weeks',
    '2-4 weeks',
    '1-2 months',
    '2-3 months',
    'Flexible'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Sending your message...' });
    
    try {
      // Try to send to Supabase edge function first
      try {
        const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact-form`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            company: formData.company,
            projectType: formData.projectType,
            budget: formData.budget,
            timeline: formData.timeline,
            message: formData.message
          })
        });

        const result = await response.json();
        
        if (response.ok) {
          setFormStatus({ 
            type: 'success', 
            message: result.data?.message || 'Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.' 
          });
        } else {
          throw new Error('Email service not configured');
        }
      } catch (emailError) {
        // Fallback: Create mailto link and show instructions
        const mailtoSubject = encodeURIComponent(`Project Inquiry from ${formData.name} - ${formData.projectType || 'General Inquiry'}`);
        const mailtoBody = encodeURIComponent(
          `Hi Bhavesh,\n\n` +
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Mobile: ${formData.mobile}\n` +
          `Company: ${formData.company || 'Not specified'}\n` +
          `Project Type: ${formData.projectType || 'Not specified'}\n` +
          `Budget: ${formData.budget || 'Not specified'}\n` +
          `Timeline: ${formData.timeline || 'Not specified'}\n\n` +
          `Message: ${formData.message}\n\n` +
          `Sent from your portfolio website.`
        );
        
        const mailtoLink = `mailto:${contactInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
        
        // Open mailto link
        window.open(mailtoLink, '_blank');
        
        setFormStatus({ 
          type: 'success', 
          message: 'Your email client has been opened with your message pre-filled. Please send the email to complete your inquiry. Alternatively, you can call directly at +91 99751 99610 or connect on LinkedIn.' 
        });
      }
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        mobile: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      console.error('Contact form error:', error);
      setFormStatus({ 
        type: 'error', 
        message: `Sorry, there was an error. Please contact me directly: Email: ${contactInfo.email} | Phone: ${contactInfo.phone} | LinkedIn: ${contactInfo.linkedin}` 
      });
    }
  };

  const isFormValid = () => {
    return formData.name && formData.email && formData.mobile && formData.message;
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="scroll-reveal text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-xl text-text-subtle max-w-3xl mx-auto">
            Ready to create something amazing together? I'm available for freelance projects and full-time opportunities. 
            Whether you need a single video edit or a complete visual rebrand, let's discuss how I can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="scroll-reveal">
            <div className="glass-panel p-8 mb-8">
              <h3 className="subsection-title mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-neon-green/10 rounded-lg">
                    <Mail className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-heading">Email</h4>
                    <a 
                      href="mailto:creativebhavesh.ds@gmail.com"
                      className="text-neon-green hover:underline transition-colors duration-300"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-neon-green/10 rounded-lg">
                    <Phone className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-heading">Phone</h4>
                    <a 
                      href="tel:+919975199610"
                      className="text-neon-green hover:underline transition-colors duration-300"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-neon-green/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-heading">Location</h4>
                    <p className="text-text-subtle">{contactInfo.location}</p>
                    <p className="text-sm text-text-subtle">Available for remote work worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-neon-green/10 rounded-lg">
                    <Calendar className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-heading">Availability</h4>
                    <p className="text-text-subtle">{contactInfo.availability}</p>
                    <p className="text-sm text-text-subtle">Quick turnaround for urgent requests</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Contact Options */}
            <div className="glass-panel p-6">
              <h4 className="component-title mb-4">Prefer Direct Contact?</h4>
              <div className="space-y-3">
                <a
                  href="mailto:creativebhavesh.ds@gmail.com?subject=Project Inquiry&body=Hi Bhavesh, I'm interested in discussing a project with you."
                  className="block w-full btn-secondary text-center"
                >
                  <Mail className="w-4 h-4" />
                  Send Direct Email
                </a>
                
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full btn-secondary text-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
                
                <a
                  href="tel:+919975199610"
                  className="block w-full btn-secondary text-center"
                >
                  <Phone className="w-4 h-4" />
                  Call Directly
                </a>
                
                <a
                  href="#" // PLACEHOLDER: Calendar booking link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full btn-secondary text-center"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-reveal">
            <div className="glass-panel p-8">
              <h3 className="subsection-title mb-6">Project Inquiry Form</h3>
              
              {/* Form Status */}
              {formStatus.type !== 'idle' && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  formStatus.type === 'success' ? 'bg-green-500/20 border border-green-500/30' :
                  formStatus.type === 'error' ? 'bg-red-500/20 border border-red-500/30' :
                  'bg-blue-500/20 border border-blue-500/30'
                }`}>
                  {formStatus.type === 'success' && <CheckCircle className="w-5 h-5 text-green-400" />}
                  {formStatus.type === 'error' && <AlertCircle className="w-5 h-5 text-red-400" />}
                  {formStatus.type === 'loading' && <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />}
                  <p className="text-sm">{formStatus.message}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-heading mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent text-text-primary placeholder-text-subtle"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-heading mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent text-text-primary placeholder-text-subtle"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-text-heading mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent text-text-primary placeholder-text-subtle"
                      placeholder="+91 99751 99610"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-heading mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent text-text-primary placeholder-text-subtle"
                      placeholder="Company name (optional)"
                    />
                  </div>
                </div>
                

                
                {/* Project Details */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-text-heading mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent text-text-primary"
                    >
                      <option value="">Select type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-text-heading mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent text-text-primary"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-text-heading mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent text-text-primary"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-heading mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent text-text-primary placeholder-text-subtle resize-none"
                    placeholder="Tell me about your project... What are your goals? What style are you looking for? Any specific requirements or inspiration?"
                  />
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isFormValid() || formStatus.type === 'loading'}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus.type === 'loading' ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
                
                <p className="text-xs text-text-subtle text-center">
                  I typically respond within 24 hours. For urgent requests, please call directly at {contactInfo.phone} or mention it in your message.
                </p>
              </form>
            </div>
          </div>
        </div>
        
        {/* Enhanced FAQ Section */}
        <div className="mt-20 scroll-reveal">
          <div className="glass-panel p-8">
            <h3 className="subsection-title text-center mb-8">Frequently Asked Questions</h3>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <details key={faq.id} className="bg-glass-bg/50 rounded-lg border border-glass-border hover:border-neon-green/30 transition-colors duration-300">
                  <summary className="p-6 cursor-pointer flex items-center justify-between font-semibold text-text-heading hover:text-neon-green transition-colors duration-300">
                    <span>{faq.question}</span>
                    <span className="text-neon-green text-xl transition-transform duration-300">+</span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="body-text">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="body-text mb-4">Have more questions? I'm here to help!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:creativebhavesh.ds@gmail.com" className="btn-secondary">
                  Email Me Directly
                </a>
                <a href="tel:+919975199610" className="btn-secondary">
                  Call Now
                </a>
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  LinkedIn Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
