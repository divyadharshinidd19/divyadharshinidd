import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Brain, Database } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-gradient-to-b from-dark-900 via-dark-800 to-dark-700">
      {/* 3D Animated Background */}
      <div className="absolute inset-0">
        <div className="geometric-bg opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              backgroundColor: 'rgba(56, 189, 248, 0.3)',
              borderRadius: '50%',
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <motion.div 
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card p-8 rounded-2xl">
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
            <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              Aspiring AI/ML Developer with experience in web development and data-driven projects. 
              Currently pursuing B.Tech in AI & DS with internship experience at leading companies.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
        
        {/* 3D Animated Element */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-80 h-80">
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-primary-400 opacity-20 blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.img
              src="/IMG_7854.JPG"
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-2xl border-2 border-primary-500/30"
              animate={{ 
                boxShadow: ['0 0 20px rgba(14, 165, 233, 0.3)', '0 0 40px rgba(14, 165, 233, 0.5)', '0 0 20px rgba(14, 165, 233, 0.3)']
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
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