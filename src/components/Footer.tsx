import React from 'react';
import { Github, Linkedin, Twitter, Mail, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Emmanuel I. Sunday
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Building global AI SaaS & automation ecosystems. Founder of Dayloop, Creator of MoonWay.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm">
                About Me
              </a>
              <a href="/projects" className="block text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm">
                Projects
              </a>
              <a href="/tech-stack" className="block text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm">
                Tech Stack
              </a>
              <a href="/contact" className="block text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="mailto:omegasantiago444@gmail.com"
                className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Emmanuel I. Sunday (Omega). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};