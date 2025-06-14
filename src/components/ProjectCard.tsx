import React from 'react';
import { ExternalLink, Github, Clock, CheckCircle, Play } from 'lucide-react';

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
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {backgroundImage && (
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
          )}
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Branding Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-15 group-hover:opacity-20 transition-opacity duration-500`}></div>
        </div>

        {/* Glowing Border Effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>

        {/* Card Content */}
        <div className="h-full relative z-10 p-5 flex flex-col justify-between space-y-4">
          <div className="flex items-start justify-between">
            <div className={`p-3 bg-gradient-to-r ${gradient} rounded-xl shadow-lg`}>
              <div className="w-6 h-6 bg-white/30 rounded"></div>
            </div>
            <div className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm shadow-lg ${getStatusColor()}`}>
              {getStatusIcon()}
              <span>{status}</span>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300 text-sm mb-3">{description}</p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-400">Progress</span>
              <span className="text-xs font-medium text-white">{progress}%</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-2">
              <div 
                className={`bg-gradient-to-r ${gradient} h-2 rounded-full`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="px-2.5 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white">
                +{technologies.length - 3}
              </span>
            )}
          </div>

          <div className="flex space-x-2 pt-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 bg-gradient-to-r ${gradient} text-white py-2.5 px-3 rounded-lg text-sm font-medium flex items-center justify-center space-x-1`}
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live</span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-white/30 text-white py-2.5 px-3 rounded-lg text-sm font-medium flex items-center justify-center space-x-1"
              >
                <Github className="h-4 w-4" />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
