import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { User, Target, Heart, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-400">
            Global founder building scalable AI ecosystems
          </p>
        </div>

        {/* Profile Image */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="w-48 h-48 mx-auto relative">
            <div className="w-full h-full rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 p-1">
              <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center overflow-hidden">
                <img
                  src="/my-profile.jpg"
                  alt="Emmanuel I. Sunday (Omega)"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-6 text-white">Emmanuel I. Sunday (Omega)</h2>
          <p className="text-primary-400 font-medium">AI Founder & SaaS Builder</p>
        </div>

        {/* Main Bio */}
        <GlassCard className="mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex-shrink-0">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">My Story</h3>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Emmanuel I. Sunday (Omega) is a startup founder, product architect, and AI automation specialist. 
                  Currently building <span className="text-primary-400 font-semibold">Dayloop</span>, an AI startup 
                  company developing SaaS platforms, no-code automation solutions, and scalable AI-powered products.
                </p>
                <p>
                  With a strong foundation in full-stack development, backend infrastructure, and AI integration, 
                  Emmanuel combines advanced automation tools like n8n, Make, Zapier, and AI APIs (OpenRouter, LLMs) 
                  to create highly efficient software systems for startups, businesses, and creators.
                </p>
                <p>
                  His work revolves around building companies that merge AI, SaaS, automation, and user-centric 
                  product design — launching zero-to-one ventures while operating fully bootstrapped. Passionate 
                  about continuous learning, Emmanuel balances his founder journey with a love for reading, writing, 
                  football, and table tennis.
                </p>
                <p className="text-primary-300 font-medium italic">
                  "I don't chase trends — I build scalable ecosystems."
                </p>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Key Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <GlassCard className="animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex-shrink-0">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Mission</h3>
                <p className="text-gray-300">
                  Building global AI SaaS ecosystems that empower businesses and creators 
                  through intelligent automation and scalable product design.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-lg flex-shrink-0">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Passion</h3>
                <p className="text-gray-300">
                  Combining cutting-edge AI technology with practical business solutions 
                  to create meaningful impact in the startup ecosystem.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Personal Interests */}
        <GlassCard className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg flex-shrink-0">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Beyond Work</h3>
              <p className="text-gray-300 mb-4">
                When not building the next big thing, Emmanuel enjoys continuous learning through 
                reading and writing, staying active with football and table tennis, and exploring 
                new technologies that can shape the future of business automation.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Reading', 'Writing', 'Football', 'Table Tennis', 'Tech Innovation', 'Continuous Learning'].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-sm text-gray-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};