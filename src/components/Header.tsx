import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-800/80 backdrop-blur-lg shadow-lg shadow-primary-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <Code className="h-8 w-8 text-primary-400" />
          <span className="ml-2 text-xl font-display font-bold text-white">Portfolio</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['about', 'projects', 'skills', 'experience', 'certifications', 'contact'].map(
            (item) => (
              <motion.button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-gray-300 hover:text-primary-400 font-medium capitalize transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            )
          )}
        </nav>

        <div className="hidden md:flex space-x-4">
          {[
            { icon: Github, href: "https://github.com/divyadharshinidd19", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/divyadharshinidd19", label: "LinkedIn" },
            { icon: Mail, href: "mailto:divyadharshinidd19@gmail.com", label: "Email" }
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-300 hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <motion.button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-dark-800/95 backdrop-blur-lg shadow-lg py-4 px-6 flex flex-col space-y-4"
          >
            {['about', 'projects', 'skills', 'experience', 'certifications', 'contact'].map(
              (item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-gray-300 hover:text-primary-400 py-2 capitalize transition-colors"
                  whileHover={{ x: 10 }}
                >
                  {item}
                </motion.button>
              )
            )}
            <div className="flex space-x-4 pt-2">
              {[
                { icon: Github, href: "https://github.com/divyadharshinidd19", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/divyadharshinidd19", label: "LinkedIn" },
                { icon: Mail, href: "mailto:divyadharshinidd19@gmail.com", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-300 hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;