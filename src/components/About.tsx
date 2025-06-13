import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle, GraduationCap, Code, Database, Brain } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white glow-text">About Me</h2>
          <p className="mt-4 text-primary-200 max-w-2xl mx-auto">
            Get to know more about my journey and expertise in Artificial Intelligence and Data Science.
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto mt-4 rounded-full glow"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative overflow-hidden rounded-2xl border border-primary-500/30 backdrop-blur-sm">
              <motion.img 
                src="/IMG_7854.png"
                alt="Profile"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
              />
              
              <div className="absolute -bottom-6 -right-6 bg-dark-800/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-[250px] border border-primary-500/30">
                <div className="flex items-center text-primary-400 mb-3">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  <h3 className="font-bold">Education</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-primary-100 font-medium">
                    B.Tech in AI & DS
                  </p>
                  <p className="text-xs text-primary-300">
                    Sri Krishna College of Technology
                  </p>
                  <p className="text-xs text-primary-400">
                    2023 - 2027 | CGPA: 8.45
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white glow-text">
              Aspiring AI/DS Developer with a passion for innovation
            </h3>
            
            <p className="text-primary-100 leading-relaxed">
              I'm a third-year B.Tech student specializing in Artificial Intelligence and Data Science. 
              My journey in tech has been driven by curiosity and a desire to solve real-world problems 
              through intelligent systems and data-driven approaches.
            </p>
            
            <p className="text-primary-100 leading-relaxed">
              With internship experiences at CognoRize, Codesoft, and NxtLogic, I've had the opportunity 
              to apply my skills in different domains - from web development to machine learning projects. 
              I'm constantly learning and expanding my skillset through courses, certifications, and 
              hands-on projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <motion.div 
                className="glass-card p-4 rounded-lg card-hover"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center text-primary-400 mb-2">
                  <Code className="w-5 h-5 mr-2" />
                  <h4 className="font-semibold">Web Dev</h4>
                </div>
                <p className="text-sm text-primary-200">
                  Building responsive web applications with modern frameworks
                </p>
              </motion.div>
              
              <motion.div 
                className="glass-card p-4 rounded-lg card-hover"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center text-primary-400 mb-2">
                  <Database className="w-5 h-5 mr-2" />
                  <h4 className="font-semibold">Data Science</h4>
                </div>
                <p className="text-sm text-primary-200">
                  Analyzing data to extract meaningful insights
                </p>
              </motion.div>
              
              <motion.div 
                className="glass-card p-4 rounded-lg card-hover"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center text-primary-400 mb-2">
                  <Brain className="w-5 h-5 mr-2" />
                  <h4 className="font-semibold">Machine Learning</h4>
                </div>
                <p className="text-sm text-primary-200">
                  Building intelligent systems that learn from data
                </p>
              </motion.div>
            </div>
            
            <div className="pt-4">
              <motion.a 
                href="#contact" 
                className="btn-primary group inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Let'z talk</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;