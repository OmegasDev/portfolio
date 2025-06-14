import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, ExternalLink, Code, Zap, Users, Target, TrendingUp, Award, Sparkles, Rocket, Globe } from 'lucide-react';
import { TypewriterText } from '../components/TypewriterText';
import { GlassCard } from '../components/GlassCard';
import { ProjectCard } from '../components/ProjectCard';

export const Home: React.FC = () => {
  const rotatingWords = [
    'SaaS Builder',
    'AI Founder',
    'Automation Architect',
    'Full-Stack Developer',
    'Startup Operator'
  ];

  const projects = [
    {
      title: 'Dayloop',
      description: 'AI startup studio building SaaS tools, AI agents, and automation platforms for global businesses.',
      progress: 80,
      status: 'In Development' as const,
      technologies: ['React', 'Node.js', 'AI APIs', 'Docker'],
      liveUrl: 'https://dayloop.vercel.app',
      githubUrl: 'https://github.com/omegasunday/dayloop',
      gradient: 'from-electric-400 to-electric-600',
      backgroundImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'MoonWay',
      description: 'AI-powered social media profile optimizer helping creators optimize their bios and audience reach.',
      progress: 65,
      status: 'In Development' as const,
      technologies: ['React Native', 'OpenRouter', 'LLMs'],
      gradient: 'from-accent-400 to-accent-600',
      backgroundImage: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'ziPay',
      description: 'Fintech platform for seamless money transfers from Africa to global destinations.',
      progress: 100,
      status: 'Live' as const,
      technologies: ['Next.js', 'Stripe', 'Node.js'],
      liveUrl: 'https://zipay-fintech.vercel.app',
      githubUrl: 'https://github.com/omegasunday/zipay',
      gradient: 'from-neon-400 to-neon-600',
      backgroundImage: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Favourite Design',
      description: 'Portfolio website for a graphic designer showcasing creative works and design services.',
      progress: 100,
      status: 'Live' as const,
      technologies: ['React', 'Tailwind', 'Framer Motion'],
      liveUrl: 'https://favourite-design.vercel.app',
      githubUrl: 'https://github.com/omegasunday/favourite-design',
      gradient: 'from-purple-400 to-purple-600',
      backgroundImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Nova Learn',
      description: 'Simple and elegant book display platform for discovering and exploring literature.',
      progress: 100,
      status: 'Completed' as const,
      technologies: ['React', 'API Integration', 'CSS3'],
      liveUrl: 'https://nova-learn.vercel.app',
      githubUrl: 'https://github.com/omegasunday/nova-learn',
      gradient: 'from-indigo-400 to-indigo-600',
      backgroundImage: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Portfolio V1',
      description: 'Previous iteration of personal portfolio showcasing early projects and development journey.',
      progress: 100,
      status: 'Completed' as const,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://omegasunday-portfolio-v1.vercel.app',
      githubUrl: 'https://github.com/omegasunday/portfolio-v1',
      gradient: 'from-orange-400 to-orange-600',
      backgroundImage: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15+', color: 'from-electric-400 to-electric-600' },
    { icon: Users, label: 'Clients Served', value: '25+', color: 'from-neon-400 to-neon-600' },
    { icon: TrendingUp, label: 'Years Experience', value: '5+', color: 'from-accent-400 to-accent-600' },
    { icon: Award, label: 'Success Rate', value: '98%', color: 'from-purple-400 to-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-500/15 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-electric-400 to-neon-400 rounded-full blur-2xl opacity-30 animate-bounce-subtle"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-accent-400 to-purple-400 rounded-full blur-2xl opacity-25 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Rotating Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-electric-400/20 rounded-full animate-rotate-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-neon-400/20 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Enhanced Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-44 h-44 mx-auto mb-6 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-electric-400 via-neon-400 to-accent-400 p-1 animate-glow-pulse">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden relative">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Emmanuel I. Sunday (Omega)"
                    className="w-full h-full rounded-full object-cover"
                  />
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                </div>
              </div>
              {/* Floating Icons */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-electric-400 to-electric-600 rounded-full flex items-center justify-center animate-bounce-subtle">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          {/* Enhanced Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-white via-electric-200 to-neon-200 bg-clip-text text-transparent">
              Emmanuel I. Sunday
            </span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-300 mt-4 block">
              Building Global AI SaaS & Automation Ecosystems
            </span>
          </h1>

          {/* Enhanced Company Info */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-gray-400 mb-4">
              Founder of <span className="text-electric-400 font-semibold bg-electric-400/10 px-2 py-1 rounded-lg">Dayloop</span> | 
              Creator of <span className="text-neon-400 font-semibold bg-neon-400/10 px-2 py-1 rounded-lg">MoonWay</span>
            </p>
            <div className="text-lg md:text-xl text-gray-500 h-8 flex items-center justify-center">
              <TypewriterText 
                words={rotatingWords} 
                className="text-electric-300 font-medium"
              />
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/projects"
              className="group bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-600 hover:to-electric-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 hover:shadow-2xl hover:shadow-electric-500/40 hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              <span className="relative z-10">View My Work</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </Link>
            <Link
              to="/contact"
              className="group border-2 border-neon-500 hover:bg-neon-500 text-neon-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 hover:shadow-2xl hover:shadow-neon-500/40 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-400/10 to-transparent animate-shimmer"></div>
              <span className="relative z-10">Work With Me</span>
              <ExternalLink className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section - Moved Up */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-500/20 to-neon-500/20 backdrop-blur-sm border border-electric-500/30 rounded-full px-6 py-2 mb-6">
              <Rocket className="h-5 w-5 text-electric-400" />
              <span className="text-electric-300 font-medium">Featured Projects</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-electric-400 via-neon-400 to-accent-400 bg-clip-text text-transparent">
              Building the Future
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Scalable AI ecosystems and automation solutions that empower businesses worldwide
            </p>
          </div>

          {/* Enhanced Mobile Layout: Staggered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`
                  ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
                  ${index === 1 ? 'md:col-start-1 lg:col-start-2' : ''}
                  ${index === 2 ? 'md:col-start-2 lg:col-start-3' : ''}
                  ${index === 3 ? 'md:col-span-2 lg:col-span-1 lg:col-start-1' : ''}
                  ${index === 4 ? 'md:col-start-1 lg:col-start-2' : ''}
                  ${index === 5 ? 'md:col-start-2 lg:col-start-3' : ''}
                `}
              >
                <ProjectCard
                  {...project}
                  delay={index * 0.1}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-500 to-neon-600 hover:from-neon-600 hover:to-neon-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-neon-500/40 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              <span className="relative z-10">View All Projects</span>
              <ArrowRight className="h-4 w-4 relative z-10" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Moved Below Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-500/5 via-transparent to-purple-500/5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-500/20 to-purple-500/20 backdrop-blur-sm border border-accent-500/30 rounded-full px-6 py-2 mb-6">
              <Globe className="h-5 w-5 text-accent-400" />
              <span className="text-accent-300 font-medium">Global Impact</span>
            </div>
          </div>
          
          {/* Enhanced Mobile Stats Layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={stat.label}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <GlassCard className="text-center group hover:scale-105 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className={`p-4 bg-gradient-to-r ${stat.color} rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center relative z-10 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1 relative z-10">{stat.value}</div>
                    <div className="text-gray-400 text-sm relative z-10">{stat.label}</div>
                  </GlassCard>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced About Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-500/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-500/20 to-electric-500/20 backdrop-blur-sm border border-neon-500/30 rounded-full px-6 py-2 mb-6">
                <Target className="h-5 w-5 text-neon-400" />
                <span className="text-neon-300 font-medium">About Me</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-electric-400 to-neon-400 bg-clip-text text-transparent">
                Building the Future of AI & SaaS
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Emmanuel I. Sunday (Omega) is a startup founder, product architect, and AI automation specialist. 
                Currently building Dayloop, an AI startup company developing SaaS platforms, no-code automation 
                solutions, and scalable AI-powered products.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                With expertise in full-stack development, backend infrastructure, and AI integration, Emmanuel 
                combines advanced automation tools to create highly efficient software systems for startups, 
                businesses, and creators worldwide.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 border-2 border-electric-500 hover:bg-electric-500 text-electric-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-400/10 to-transparent animate-shimmer"></div>
                <span className="relative z-10">Learn More About Me</span>
                <ArrowRight className="h-4 w-4 relative z-10" />
              </Link>
            </div>

            <div className="animate-slide-in-right">
              <GlassCard className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-500/10 via-transparent to-neon-500/10"></div>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-electric-400 to-electric-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-electric-400/30 transition-all duration-300">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI Integration</h3>
                      <p className="text-gray-400 text-sm">OpenRouter, LLMs, and AI APIs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-400 to-neon-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-neon-400/30 transition-all duration-300">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">SaaS Platforms</h3>
                      <p className="text-gray-400 text-sm">Scalable, user-centric products</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-accent-400/30 transition-all duration-300">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Automation</h3>
                      <p className="text-gray-400 text-sm">n8n, Make, Zapier workflows</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-500/10 via-neon-500/10 to-accent-500/10"></div>
        <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
          <GlassCard className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-500/5 via-neon-500/5 to-accent-500/5"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-500/20 to-accent-500/20 backdrop-blur-sm border border-electric-500/30 rounded-full px-6 py-2 mb-6">
                <Sparkles className="h-5 w-5 text-electric-400" />
                <span className="text-electric-300 font-medium">Let's Collaborate</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                Whether you need a custom AI solution, automation workflow, or a full SaaS platform, 
                let's discuss how we can bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-600 hover:to-electric-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/40 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                  <span className="relative z-10">Start a Project</span>
                  <ArrowRight className="h-4 w-4 relative z-10" />
                </Link>
                <a
                  href="https://github.com/omegasunday"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 border-2 border-neon-500 hover:bg-neon-500 text-neon-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-400/10 to-transparent animate-shimmer"></div>
                  <span className="relative z-10">View GitHub</span>
                  <ExternalLink className="h-4 w-4 relative z-10" />
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};