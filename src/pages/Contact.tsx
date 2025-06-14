import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Mail, Phone, Send, CheckCircle, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to build something amazing? Get in touch to discuss your next AI SaaS project or automation workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <GlassCard>
              <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <a 
                      href="mailto:omegasantiago444@gmail.com"
                      className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                    >
                      omegasantiago444@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">WhatsApp</h3>
                    <a 
                      href="https://wa.me/2347039312869"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-400 hover:text-secondary-300 transition-colors duration-300 flex items-center space-x-1"
                    >
                      <span>+234 703 931 2869</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Services */}
            <GlassCard>
              <h3 className="text-xl font-bold text-white mb-4">Services Available</h3>
              <div className="space-y-3">
                {[
                  'AI SaaS Development',
                  'Automation Workflow Design',
                  'Full-Stack Web Applications',
                  'API Integration & Development',
                  'Product Architecture Consulting',
                  'Startup Technical Advisory'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Response Time */}
            <GlassCard>
              <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
              <p className="text-gray-300 text-sm mb-3">
                I typically respond to inquiries within 24 hours. For urgent projects, 
                WhatsApp is the fastest way to reach me.
              </p>
              <div className="text-sm text-primary-400">
                Available: Mon-Fri, 9AM-6PM (GMT+1)
              </div>
            </GlassCard>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <GlassCard>
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project or Inquiry Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-2xl hover:shadow-primary-500/30 hover:scale-[1.02]"
                  >
                    <Send className="h-5 w-5" />
                    <span>Let's Build Together</span>
                  </button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <GlassCard>
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Whether you need a custom AI solution, automation workflow, or a full SaaS platform, 
              I'm here to help bring your vision to life with cutting-edge technology and proven expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2347039312869"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
              >
                <Phone className="h-4 w-4" />
                <span>WhatsApp Now</span>
              </a>
              <a
                href="mailto:omegasantiago444@gmail.com"
                className="inline-flex items-center space-x-2 border border-primary-500 hover:bg-primary-500 text-primary-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30"
              >
                <Mail className="h-4 w-4" />
                <span>Send Email</span>
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};