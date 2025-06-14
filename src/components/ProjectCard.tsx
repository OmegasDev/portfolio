import React from 'react';
import { ExternalLink, Github, Clock, CheckCircle, Play } from 'lucide-react';
import { GlassCard } from './GlassCard';

interface ProjectCardProps {
  title: string;
  description: string;
  progress: number;
  status: 'In Development' | 'Completed' | 'Live';
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
  backgroundImage?: string;
  delay?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  progress,
  status,
  technologies,
  liveUrl,
  githubUrl,
  gradient,
  backgroundImage,
  delay = 0
}) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'In Development':
        return <Clock className="h-4 w-4" />;
      case 'Completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'Live':
        return <Play className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'In Development':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/40 shadow-yellow-400/20';
      case 'Completed':
        return 'bg-green-500/20 text-green-300 border-green-400/40 shadow-green-400/20';
      case 'Live':
        return 'bg-blue-500/20 text-blue-300 border-blue-400/40 shadow-blue-400/20';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div 
      className="animate-scale-in h-full"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="group h-full relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {backgroundImage && (
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
          )}
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
          {/* Colored overlay for branding */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
        </div>

        {/* Glowing Border Effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
        
        {/* Content */}
        <GlassCard className="h-full relative z-10 border-white/10 group-hover:border-white/20 backdrop-blur-md bg-white/5 group-hover:bg-white/10">
          <div className="space-y-4 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className={`p-3 bg-gradient-to-r ${gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <div className="w-6 h-6 bg-white/30 rounded backdrop-blur-sm"></div>
              </div>
              <div className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm shadow-lg ${getStatusColor()}`}>
                {getStatusIcon()}
                <span>{status}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                {title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                {description}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Progress</span>
                <span className="text-xs font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{progress}%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                <div 
                  className={`bg-gradient-to-r ${gradient} h-2 rounded-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden`}
                  style={{ width: `${progress}%` }}
                >
                  {/* Shimmer effect on progress bar */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5">
              {technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-gray-300 group-hover:text-white group-hover:bg-white/15 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="px-2.5 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-gray-400 group-hover:text-gray-300 transition-all duration-300">
                  +{technologies.length - 3}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex space-x-2 pt-2">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 bg-gradient-to-r ${gradient} hover:shadow-lg text-white py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-1 relative overflow-hidden group/btn`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  <ExternalLink className="h-3.5 w-3.5 relative z-10" />
                  <span className="relative z-10">View Live</span>
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-white/30 hover:bg-white/10 backdrop-blur-sm text-gray-300 hover:text-white py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-1 hover:border-white/50"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};