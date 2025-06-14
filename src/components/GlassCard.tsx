import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  return (
    <div
      className={`
        backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6
        ${hover ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-primary-500/10' : ''}
        transition-all duration-300 ${className}
      `}
    >
      {children}
    </div>
  );
};