import React from 'react';
import { ArrowDown, Code, Brain, Database } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden section-bg">
      <div className="absolute inset-0 geometric-mesh opacity-20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-sphere absolute top-1/4 left-1/4">
          <div className="sphere"></div>
        </div>
        <div className="floating-sphere absolute top-1/3 right-1/4">
          <div className="sphere" style={{ width: '80px', height: '80px' }}></div>
        </div>
        <div className="floating-sphere absolute bottom-1/4 right-1/3">
          <div className="sphere" style={{ width: '60px', height: '60px' }}></div>
        </div>
        
        {/* Tech Icons */}
        <div className="absolute top-1/3 left-1/6 floating-icon">
          <div className="p-4 bg-blue-900/30 rounded-xl backdrop-blur-sm border border-blue-500/20">
            <Code className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="absolute bottom-1/3 right-1/6 floating-icon" style={{ animationDelay: '-2s' }}>
          <div className="p-4 bg-blue-900/30 rounded-xl backdrop-blur-sm border border-blue-500/20">
            <Brain className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="absolute top-2/3 left-1/3 floating-icon" style={{ animationDelay: '-4s' }}>
          <div className="p-4 bg-blue-900/30 rounded-xl backdrop-blur-sm border border-blue-500/20">
            <Database className="w-8 h-8 text-blue-400" />
          </div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="card-bg p-8 rounded-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block">Hi, I'm </span>
              <span className="text-blue-400 glow-text animate-pulse">
                Divya Dharshini
              </span>
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl text-blue-200 font-light">
              AI & Data Science Developer
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              Aspiring AI/ML Developer with experience in web development and data-driven projects. 
              Currently pursuing B.Tech in AI & DS in my 3rd year with internship experience at 
              Cognorize, Codesoft, and nxtLogic.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="group px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 font-medium glow relative overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>
              <a 
                href="#contact" 
                className="group px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition-all duration-300 font-medium relative overflow-hidden"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-blue-400/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>
            </div>
          </div>
        </div>
        
        {/* 3D Grid Animation */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-80 h-80 transform-style-3d animate-rotate-slow">
            <div className="grid-cube"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a 
          href="#about" 
          className="text-blue-400 hover:text-blue-300 transition-colors flex flex-col items-center group"
        >
          <span className="text-sm mb-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            Scroll Down
          </span>
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;