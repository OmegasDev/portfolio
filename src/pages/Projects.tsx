import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { ExternalLink, Github, Zap, Bot, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Dayloop',
      subtitle: 'AI Startup Studio',
      description: 'Building SaaS tools, AI agents, and automation platforms for global businesses. A comprehensive ecosystem of AI-powered solutions designed to streamline operations and enhance productivity.',
      features: [
        'AI-powered automation workflows',
        'Scalable SaaS infrastructure',
        'Global business solutions',
        'Enterprise-grade security'
      ],
      icon: Zap,
      gradient: 'from-primary-500 to-primary-600',
      status: 'Active Development',
      tech: ['React', 'Node.js', 'AI APIs', 'Docker']
    },
    {
      title: 'MoonWay',
      subtitle: 'AI Social Profile Optimizer',
      description: 'AI-powered profile optimization tool helping creators optimize their bios and audience reach using advanced AI algorithms and automation workflows.',
      features: [
        'AI-driven bio optimization',
        'Audience reach analytics',
        'Content strategy recommendations',
        'Multi-platform integration'
      ],
      icon: Bot,
      gradient: 'from-secondary-500 to-secondary-600',
      status: 'Beta Testing',
      tech: ['OpenRouter', 'LLMs', 'n8n', 'React']
    },
    {
      title: 'Custom AI Agents & Automations',
      subtitle: 'Bespoke Solutions',
      description: 'SaaS tools & no-code AI automation solutions for small businesses, creators, and early startups. Tailored automation workflows that scale with business needs.',
      features: [
        'No-code automation setup',
        'Custom AI agent development',
        'Business process optimization',
        'Scalable workflow design'
      ],
      icon: Sparkles,
      gradient: 'from-accent-500 to-accent-600',
      status: 'Client Services',
      tech: ['Zapier', 'Make', 'n8n', 'AI APIs']
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building scalable AI ecosystems and automation solutions that empower businesses and creators worldwide
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <GlassCard 
                key={project.title} 
                className="animate-slide-up" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Project Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 bg-gradient-to-r ${project.gradient} rounded-xl flex-shrink-0`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                            project.status === 'Active Development' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                            project.status === 'Beta Testing' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                            'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <p className="text-lg text-primary-300 font-medium mb-4">{project.subtitle}</p>
                        <p className="text-gray-300 leading-relaxed">{project.description}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-sm text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Area */}
                  <div className="flex flex-col justify-between space-y-6">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                      <h4 className="text-lg font-semibold text-white mb-4">Project Status</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Progress</span>
                          <span className="text-primary-400 font-medium">
                            {project.status === 'Active Development' ? '75%' :
                             project.status === 'Beta Testing' ? '90%' : '100%'}
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`bg-gradient-to-r ${project.gradient} h-2 rounded-full transition-all duration-1000`}
                            style={{ width: project.status === 'Active Development' ? '75%' :
                                           project.status === 'Beta Testing' ? '90%' : '100%' }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-primary-500/30">
                        <ExternalLink className="h-4 w-4" />
                        <span>Learn More</span>
                      </button>
                      <button className="w-full border border-gray-600 hover:bg-gray-700/50 text-gray-300 hover:text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                        <Github className="h-4 w-4" />
                        <span>View Code</span>
                      </button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <GlassCard>
            <h3 className="text-2xl font-bold text-white mb-4">Interested in Collaboration?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Looking for custom AI solutions or automation workflows for your business? 
              Let's discuss how we can build something amazing together.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-secondary-500/30"
            >
              <span>Start a Project</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};