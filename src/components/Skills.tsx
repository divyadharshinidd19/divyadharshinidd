import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Server, Cpu, Cloud, Monitor, Star, Zap, Award, Target } from 'lucide-react';

type Skill = {
  name: string;
  level: number; // 0-100
  category: 'language' | 'framework' | 'tool' | 'cloud';
  icon?: React.ReactNode;
};

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
};

const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    icon: <Code className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'Python', level: 90, category: 'language', icon: <Zap className="w-4 h-4" /> },
      { name: 'C++', level: 75, category: 'language', icon: <Target className="w-4 h-4" /> },
      { name: 'Java', level: 80, category: 'language', icon: <Award className="w-4 h-4" /> },
      { name: 'JavaScript', level: 85, category: 'language', icon: <Star className="w-4 h-4" /> },
      { name: 'HTML', level: 95, category: 'language', icon: <Monitor className="w-4 h-4" /> },
      { name: 'CSS', level: 85, category: 'language', icon: <Code className="w-4 h-4" /> },
    ],
  },
  {
    name: 'Frameworks',
    icon: <Server className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-400',
    skills: [
      { name: 'Spring Boot', level: 75, category: 'framework', icon: <Server className="w-4 h-4" /> },
      { name: 'React', level: 80, category: 'framework', icon: <Zap className="w-4 h-4" /> },
      { name: 'TensorFlow', level: 70, category: 'framework', icon: <Cpu className="w-4 h-4" /> },
      { name: 'PyTorch', level: 65, category: 'framework', icon: <Target className="w-4 h-4" /> },
    ],
  },
  {
    name: 'Tools & Databases',
    icon: <Database className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-400',
    skills: [
      { name: 'MySQL', level: 85, category: 'tool', icon: <Database className="w-4 h-4" /> },
      { name: 'Git', level: 90, category: 'tool', icon: <Star className="w-4 h-4" /> },
      { name: 'scikit-learn', level: 75, category: 'tool', icon: <Cpu className="w-4 h-4" /> },
      { name: 'Pandas', level: 85, category: 'tool', icon: <Award className="w-4 h-4" /> },
      { name: 'VS Code', level: 95, category: 'tool', icon: <Code className="w-4 h-4" /> },
    ],
  },
  {
    name: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-orange-500 to-red-400',
    skills: [
      { name: 'AWS', level: 60, category: 'cloud', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Docker', level: 50, category: 'cloud', icon: <Server className="w-4 h-4" /> },
      { name: 'CI/CD', level: 45, category: 'cloud', icon: <Target className="w-4 h-4" /> },
    ],
  },
];

const CircularProgress: React.FC<{ skill: Skill; delay: number; color: string }> = ({ skill, delay, color }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => {
              setProgress(skill.level);
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, [delay, skill.level]);

  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div ref={circleRef} className="flex flex-col items-center group">
      <div className="relative w-24 h-24 mb-3">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="6"
            fill="transparent"
            className="drop-shadow-sm"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={isVisible ? strokeDashoffset : circumference}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out drop-shadow-lg"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
              <stop offset="100%" stopColor="rgba(147, 197, 253, 0.6)" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-blue-300 mb-1 group-hover:scale-110 transition-transform duration-300">
            {skill.icon}
          </div>
          <span className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
            {isVisible ? progress : 0}%
          </span>
        </div>
      </div>
      
      <h4 className="text-sm font-medium text-blue-200 text-center group-hover:text-white transition-colors duration-300">
        {skill.name}
      </h4>
    </div>
  );
};

const SkillCard: React.FC<{ category: SkillCategory; index: number }> = ({ category, index }) => {
  return (
    <div className="relative group">
      {/* Animated background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
      
      <div className="relative bg-dark-800/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
        {/* Header */}
        <div className="flex items-center mb-8">
          <div className={`p-4 bg-gradient-to-br ${category.color} rounded-xl mr-4 shadow-lg`}>
            <div className="text-white">
              {category.icon}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
              {category.name}
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full mt-2"></div>
          </div>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {category.skills.map((skill, skillIndex) => (
            <CircularProgress 
              key={skillIndex} 
              skill={skill} 
              delay={index * 200 + skillIndex * 100}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-500/5 to-transparent rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white glow-text mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of my technical expertise and proficiency levels across various technologies.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 mx-auto mt-6 rounded-full glow"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 rounded-2xl blur-xl"></div>
          <div className="relative bg-dark-800/40 backdrop-blur-sm rounded-2xl p-8 text-white shadow-2xl border border-blue-500/20">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-6 lg:mb-0 text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Ready to Collaborate?
                </h3>
                <p className="text-xl text-blue-100 leading-relaxed">
                  I'm always excited to work on innovative projects and explore new technologies.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 font-semibold group transform hover:scale-105"
                >
                  <span className="flex items-center">
                    Let's Connect
                    <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-xl hover:bg-blue-400/10 transition-all duration-300 font-semibold group transform hover:scale-105"
                >
                  <span className="flex items-center">
                    View Projects
                    <Award className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;