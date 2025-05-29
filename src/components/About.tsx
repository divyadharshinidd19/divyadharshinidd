import React from 'react';
import { UserCircle, GraduationCap, Code, Database, Brain } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              {/* Replace with your image */}
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <UserCircle className="w-24 h-24 opacity-50" />
                <span className="absolute font-medium">Your Profile Image</span>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-[200px]">
              <div className="flex items-center text-indigo-600 mb-2">
                <GraduationCap className="w-5 h-5 mr-2" />
                <h3 className="font-bold">Education</h3>
              </div>
              <p className="text-sm text-gray-700">
                B.Tech in AI & Data Science, 3rd Year
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Aspiring AI/ML Developer with a passion for innovation
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              I'm a third-year B.Tech student specializing in Artificial Intelligence and Data Science. 
              My journey in tech has been driven by curiosity and a desire to solve real-world problems 
              through intelligent systems and data-driven approaches.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              With internship experiences at Cognorize, Codesoft, and nxtLogic, I've had the opportunity 
              to apply my skills in different domains - from web development to machine learning projects. 
              I'm constantly learning and expanding my skillset through courses, certifications, and 
              hands-on projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="flex items-center text-indigo-600 mb-2">
                  <Code className="w-5 h-5 mr-2" />
                  <h4 className="font-semibold">Web Dev</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Building responsive web applications with modern frameworks
                </p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center text-purple-600 mb-2">
                  <Database className="w-5 h-5 mr-2" />
                  <h4 className="font-semibold">Data Science</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Analyzing data to extract meaningful insights
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center text-blue-600 mb-2">
                  <Brain className="w-5 h-5 mr-2" />
                  <h4 className="font-semibold">Machine Learning</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Building intelligent systems that learn from data
                </p>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors inline-block font-medium"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;