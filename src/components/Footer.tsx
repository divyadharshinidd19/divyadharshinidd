import React from 'react';
import { Heart, ChevronUp, Code, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Code className="h-8 w-8 text-indigo-400" />
            <span className="ml-2 text-xl font-bold">Portfolio</span>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/divyadharshinidd19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/divyadharshinidd19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:divyadharshinidd19@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Divya Dharshini. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <p className="text-gray-400 text-sm mr-2">Made with</p>
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            <p className="text-gray-400 text-sm">using React & TailwindCSS</p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;