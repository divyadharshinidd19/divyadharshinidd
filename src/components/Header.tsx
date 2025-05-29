import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Github, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Code className="h-8 w-8 text-indigo-600" />
          <span className="ml-2 text-xl font-bold text-gray-800">Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['about', 'projects', 'skills', 'experience', 'certifications', 'contact'].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-gray-700 hover:text-indigo-600 font-medium capitalize transition-colors"
              >
                {item}
              </button>
            )
          )}
        </nav>

        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/divyadharshinidd19"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-700 hover:text-indigo-600 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/divyadharshinidd19"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-700 hover:text-indigo-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:divyadharshinidd19@gmail.com"
            className="p-2 text-gray-700 hover:text-indigo-600 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
          {['about', 'projects', 'skills', 'experience', 'certifications', 'contact'].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-gray-700 hover:text-indigo-600 py-2 capitalize transition-colors"
              >
                {item}
              </button>
            )
          )}
          <div className="flex space-x-4 pt-2">
            <a
              href="https://github.com/divyadharshinidd19"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-indigo-600 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/divyadharshinidd19"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-indigo-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:divyadharshinidd19@gmail.com"
              className="p-2 text-gray-700 hover:text-indigo-600 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;