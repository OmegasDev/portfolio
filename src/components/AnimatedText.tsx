import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  words: string[];
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ words, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span
      className={`inline-block transition-all duration-300 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'
      } ${className}`}
    >
      {words[currentIndex]}
    </span>
  );
};