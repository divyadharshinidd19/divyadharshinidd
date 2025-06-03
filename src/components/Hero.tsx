import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary-400/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const CubeBackground = () => {
  return (
    <div className="absolute inset-0">
      <div className="relative w-full h-full">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              background: `linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(56, 189, 248, 0.05))`,
              backdropFilter: 'blur(8px)',
              borderRadius: '20px',
              border: '1px solid rgba(56, 189, 248, 0.2)',
            }}
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.1, 1],
              y: [0, -30, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-gradient-to-b from-dark-900 via-dark-800 to-dark-700">
      <ParticleBackground />
      <CubeBackground />
      
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div 
          className="w-full max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card p-8 rounded-2xl backdrop-blur-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block font-display">Hi, I'm </span>
              <motion.span 
                className="text-primary-400 glow-text"
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Divya Dharshini
              </motion.span>
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl text-primary-200 font-light">
              AI & Data Science Developer
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
              Aspiring AI/ML Developer with experience in web development and data-driven projects. 
              Currently pursuing B.Tech in AI & DS with internship experience at leading companies.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="#projects" 
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn-outline group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a 
          href="#about" 
          className="text-primary-400 hover:text-primary-300 transition-colors flex flex-col items-center group"
        >
          <span className="text-sm mb-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            Scroll Down
          </span>
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;