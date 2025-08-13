import React, { useState } from 'react';
import { Quote, Star, Linkedin, ExternalLink, Upload, Send, Video, FileText } from 'lucide-react';
import { testimonialsData, brandLogos } from '../../data/portfolioData';

const TestimonialsSection: React.FC = () => {
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [submissionType, setSubmissionType] = useState<'text' | 'video'>('text');
  const [submissionForm, setSubmissionForm] = useState({
    name: '',
    position: '',
    company: '',
    testimonial: '',
    videoFile: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmissionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSubmissionForm(prev => ({ ...prev, [name]: value }));
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSubmissionForm(prev => ({ ...prev, videoFile: file }));
    }
  };

  const handleSubmitTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Try edge function first, then fallback to email
      try {
        const formData = new FormData();
        formData.append('name', submissionForm.name);
        formData.append('position', submissionForm.position);
        formData.append('company', submissionForm.company);
        formData.append('type', submissionType);
        
        if (submissionType === 'text') {
          formData.append('testimonial', submissionForm.testimonial);
        } else if (submissionForm.videoFile) {
          formData.append('video', submissionForm.videoFile);
        }

        const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-testimonial`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: formData
        });

        const result = await response.json();
        
        if (response.ok) {
          setSubmitMessage('Thank you for your testimonial! We\'ll review it and get back to you soon.');
          setSubmissionForm({ name: '', position: '', company: '', testimonial: '', videoFile: null });
          setShowSubmissionForm(false);
        } else {
          throw new Error('Email service not configured');
        }
      } catch (emailError) {
        // Fallback: Create mailto for testimonial submission
        const mailtoSubject = encodeURIComponent(`${submissionType === 'video' ? 'Video' : 'Written'} Testimonial from ${submissionForm.name}`);
        const mailtoBody = encodeURIComponent(
          `Hi Bhavesh,\n\n` +
          `I'd like to submit a testimonial for your portfolio.\n\n` +
          `Name: ${submissionForm.name}\n` +
          `Position: ${submissionForm.position || 'Not specified'}\n` +
          `Company: ${submissionForm.company || 'Not specified'}\n` +
          `Type: ${submissionType === 'video' ? 'Video Testimonial' : 'Written Testimonial'}\n\n` +
          (submissionType === 'text' ? `Testimonial: ${submissionForm.testimonial}\n\n` : 'Video testimonial file attached separately.\n\n') +
          `Submitted from your portfolio website.`
        );
        
        const mailtoLink = `mailto:creativebhavesh.ds@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
        window.open(mailtoLink, '_blank');
        
        setSubmitMessage('Your email client has been opened with your testimonial pre-filled. Please send the email to submit your testimonial. For video testimonials, please attach the video file to the email.');
        setSubmissionForm({ name: '', position: '', company: '', testimonial: '', videoFile: null });
        setShowSubmissionForm(false);
      }
    } catch (error) {
      console.error('Testimonial submission error:', error);
      setSubmitMessage('Sorry, there was an error. Please email your testimonial directly to creativebhavesh.ds@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="scroll-reveal text-center mb-16">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="text-xl text-text-subtle max-w-3xl mx-auto">
            Real feedback from clients who've experienced the power of AI-enhanced creative workflows and professional video editing
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="glass-panel p-8 stagger-item hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-neon-green" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Testimonial Content */}
              <blockquote className="body-text mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              {/* Project Info */}
              <div className="mb-6 p-4 bg-glass-bg/50 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-neon-green text-sm">{testimonial.project}</h4>
                    <p className="text-xs text-text-subtle">{testimonial.results}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-text-subtle" />
                </div>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-glass-border"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-text-heading">{testimonial.author}</h4>
                  <p className="text-sm text-text-subtle">{testimonial.position}</p>
                  <p className="text-sm text-neon-green">{testimonial.company}, {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos/Stats Section */}
        <div className="scroll-reveal">
          <div className="glass-panel p-8">
            <h3 className="subsection-title text-center mb-8">Trusted by Creative Professionals</h3>
            
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center stagger-item">
                <div className="text-3xl font-bold neon-text mb-2">98%</div>
                <div className="text-sm text-text-subtle">Client Satisfaction Rate</div>
              </div>
              
              <div className="text-center stagger-item">
                <div className="text-3xl font-bold neon-text mb-2">100+</div>
                <div className="text-sm text-text-subtle">Successful Projects</div>
              </div>
              
              <div className="text-center stagger-item">
                <div className="text-3xl font-bold neon-text mb-2">100%</div>
                <div className="text-sm text-text-subtle">On-Time Delivery</div>
              </div>
              
              <div className="text-center stagger-item">
                <div className="text-3xl font-bold neon-text mb-2">8M+</div>
                <div className="text-sm text-text-subtle">Total Audience Reach</div>
              </div>
            </div>
            
            {/* Brand Logo Slider */}
            <div className="border-t border-glass-border pt-8">
              <p className="text-center text-text-subtle mb-6">Collaborated with industry leaders:</p>
              <div className="relative overflow-hidden">
                <div className="flex animate-scroll space-x-8">
                  {[...brandLogos, ...brandLogos].map((brand, index) => (
                    <div key={`${brand.name}-${index}`} className="flex-shrink-0 px-6 py-3 bg-glass-bg/50 rounded-lg border border-glass-border hover:border-neon-green/30 transition-colors duration-300">
                      <span className="font-semibold text-text-heading whitespace-nowrap">{brand.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof & Testimonial Submission */}
        <div className="mt-16 scroll-reveal">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass-panel p-8">
              <h3 className="component-title mb-4">
                <Linkedin className="w-6 h-6 text-blue-400 inline-block mr-3" />
                LinkedIn Recommendations
              </h3>
              <p className="body-text mb-4">
                Connect with me on LinkedIn to see detailed recommendations from colleagues, clients, and industry professionals.
              </p>
              <a 
                href="https://www.linkedin.com/in/bhaveshgoyal-ds/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                View LinkedIn Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <div className="glass-panel p-8">
              <h3 className="component-title mb-4">
                <Star className="w-6 h-6 text-yellow-400 inline-block mr-3" />
                Want to Share Your Experience?
              </h3>
              <p className="body-text mb-4">
                If we've worked together, I'd love to feature your feedback. Submit a video testimonial or written review to help other clients understand the value of professional creative services.
              </p>
              <button 
                onClick={() => setShowSubmissionForm(true)}
                className="btn-secondary text-sm"
              >
                Submit Testimonial
                <Upload className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center scroll-reveal">
          <div className="glass-panel p-8">
            <h3 className="subsection-title mb-4">Ready to Join These Success Stories?</h3>
            <p className="body-text mb-6 max-w-2xl mx-auto">
              Let's create compelling visual content that drives engagement and achieves your goals. 
              From AI-enhanced workflows to traditional storytelling, I'll bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Start Your Project
                <ExternalLink className="w-5 h-5" />
              </a>
              <a href="#work" className="btn-secondary">
                View Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Testimonial Submission Form Modal */}
        {showSubmissionForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass-panel p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h3 className="subsection-title mb-6">Submit Your Testimonial</h3>
              
              {/* Submission Type Toggle */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setSubmissionType('text')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    submissionType === 'text'
                      ? 'bg-neon-green text-black font-semibold'
                      : 'bg-glass-bg text-text-subtle hover:text-text-primary'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  Written Testimonial
                </button>
                <button
                  onClick={() => setSubmissionType('video')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    submissionType === 'video'
                      ? 'bg-neon-green text-black font-semibold'
                      : 'bg-glass-bg text-text-subtle hover:text-text-primary'
                  }`}
                >
                  <Video className="w-4 h-4" />
                  Video Testimonial
                </button>
              </div>

              <form onSubmit={handleSubmitTestimonial} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-heading mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={submissionForm.name}
                      onChange={handleSubmissionChange}
                      required
                      className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent text-text-primary"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-heading mb-2">Position</label>
                    <input
                      type="text"
                      name="position"
                      value={submissionForm.position}
                      onChange={handleSubmissionChange}
                      className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent text-text-primary"
                      placeholder="Your Job Title"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-heading mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={submissionForm.company}
                    onChange={handleSubmissionChange}
                    className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent text-text-primary"
                    placeholder="Company Name"
                  />
                </div>

                {submissionType === 'text' ? (
                  <div>
                    <label className="block text-sm font-medium text-text-heading mb-2">Your Testimonial *</label>
                    <textarea
                      name="testimonial"
                      value={submissionForm.testimonial}
                      onChange={handleSubmissionChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent text-text-primary resize-none"
                      placeholder="Share your experience working with Bhavesh..."
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-text-heading mb-2">Upload Video Testimonial *</label>
                    <div className="border-2 border-dashed border-glass-border rounded-lg p-6 text-center hover:border-neon-green/30 transition-colors duration-300">
                      <Video className="w-12 h-12 text-text-subtle mx-auto mb-4" />
                      <input
                        type="file"
                        accept="video/*"
                        onChange={handleVideoUpload}
                        className="hidden"
                        id="video-upload"
                        required={submissionType === 'video'}
                      />
                      <label htmlFor="video-upload" className="cursor-pointer">
                        <span className="text-neon-green hover:underline">Click to upload video</span>
                        <p className="text-sm text-text-subtle mt-2">MP4, MOV, AVI up to 50MB</p>
                      </label>
                      {submissionForm.videoFile && (
                        <p className="text-sm text-neon-green mt-2">Selected: {submissionForm.videoFile.name}</p>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowSubmissionForm(false)}
                    className="flex-1 btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 btn-primary disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </div>
                    ) : (
                      <>
                        Submit Testimonial
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Submission Message */}
        {submitMessage && (
          <div className="mt-4 p-4 bg-neon-green/20 border border-neon-green/30 rounded-lg text-center">
            <p className="text-neon-green">{submitMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
