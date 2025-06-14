import React from 'react';
import { GlassCard } from '../components/GlassCard';

export const TechStack: React.FC = () => {
  const techCategories = [
    {
      title: 'Frontend Development',
      gradient: 'from-primary-500 to-primary-600',
      technologies: [
        { name: 'React', level: 95, description: 'Modern UI development with hooks and context' },
        { name: 'Next.js', level: 90, description: 'Full-stack React framework for production apps' },
        { name: 'React Native', level: 85, description: 'Cross-platform mobile app development' },
        { name: 'TypeScript', level: 88, description: 'Type-safe JavaScript for better development' }
      ]
    },
    {
      title: 'Backend & Database',
      gradient: 'from-secondary-500 to-secondary-600',
      technologies: [
        { name: 'Node.js', level: 92, description: 'Server-side JavaScript runtime' },
        { name: 'Supabase', level: 88, description: 'Backend-as-a-Service with real-time features' },
        { name: 'PostgreSQL', level: 85, description: 'Advanced relational database management' },
        { name: 'MongoDB', level: 80, description: 'NoSQL database for flexible data structures' }
      ]
    },
    {
      title: 'AI & Automation',
      gradient: 'from-accent-500 to-accent-600',
      technologies: [
        { name: 'OpenRouter', level: 90, description: 'AI API gateway for multiple LLM providers' },
        { name: 'LLM APIs', level: 88, description: 'Integration with GPT, Claude, and other models' },
        { name: 'n8n', level: 95, description: 'Self-hosted workflow automation platform' },
        { name: 'Zapier', level: 85, description: 'Cloud-based automation workflows' }
      ]
    },
    {
      title: 'DevOps & Deployment',
      gradient: 'from-purple-500 to-purple-600',
      technologies: [
        { name: 'Docker', level: 88, description: 'Containerization for consistent deployments' },
        { name: 'Vercel', level: 92, description: 'Frontend deployment and hosting platform' },
        { name: 'Netlify', level: 85, description: 'Static site deployment with CI/CD' },
        { name: 'Fly.io', level: 80, description: 'Global application deployment platform' }
      ]
    },
    {
      title: 'Tools & Services',
      gradient: 'from-green-500 to-green-600',
      technologies: [
        { name: 'Stripe', level: 90, description: 'Payment processing and subscription management' },
        { name: 'Make', level: 88, description: 'Visual automation platform (formerly Integromat)' },
        { name: 'Notion', level: 85, description: 'Workspace and project management' },
        { name: 'Google Sheets', level: 80, description: 'Data management and automation triggers' }
      ]
    },
    {
      title: 'Additional Skills',
      gradient: 'from-pink-500 to-pink-600',
      technologies: [
        { name: 'API Design', level: 92, description: 'RESTful and GraphQL API architecture' },
        { name: 'UI/UX Design', level: 85, description: 'User-centered design and prototyping' },
        { name: 'System Architecture', level: 88, description: 'Scalable system design and planning' },
        { name: 'Product Management', level: 80, description: 'Feature planning and roadmap execution' }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Tech Stack
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building scalable AI SaaS platforms and automation solutions
          </p>
        </div>

        {/* Tech Categories */}
        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="animate-slide-up" 
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <GlassCard>
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  </div>
                  <div className={`h-1 w-24 bg-gradient-to-r ${category.gradient} rounded-full`}></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={tech.name} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                        <span className="text-primary-400 font-medium">{tech.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div 
                          className={`bg-gradient-to-r ${category.gradient} h-3 rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${tech.level}%`,
                            animationDelay: `${(categoryIndex * 0.1) + (techIndex * 0.1)}s`
                          }}
                        ></div>
                      </div>
                      
                      <p className="text-gray-400 text-sm">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <GlassCard>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Full-Stack Expertise</h3>
              <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6">
                With expertise spanning frontend development, backend architecture, AI integration, and automation workflows, 
                I build comprehensive solutions that scale from zero to production. My focus is on creating efficient, 
                maintainable systems that leverage the latest technologies while maintaining business objectives and user experience.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-primary-500/20 border border-primary-500/30 text-primary-300 rounded-full text-sm">
                  5+ Years Experience
                </span>
                <span className="px-4 py-2 bg-secondary-500/20 border border-secondary-500/30 text-secondary-300 rounded-full text-sm">
                  50+ Projects Delivered
                </span>
                <span className="px-4 py-2 bg-accent-500/20 border border-accent-500/30 text-accent-300 rounded-full text-sm">
                  AI-First Approach
                </span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};