import React, { useEffect, useRef } from 'react';
import { Code, Database, Server, Cpu, Cloud, Monitor } from 'lucide-react';

type Skill = {
  name: string;
  level: number; // 0-100
  category: 'language' | 'framework' | 'tool' | 'cloud';
};

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: 'Python', level: 90, category: 'language' },
      { name: 'C++', level: 75, category: 'language' },
      { name: 'Java', level: 80, category: 'language' },
      { name: 'JavaScript', level: 85, category: 'language' },
      { name: 'HTML', level: 95, category: 'language' },
      { name: 'CSS', level: 85, category: 'language' },
    ],
  },
  {
    name: 'Frameworks',
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: 'Spring Boot', level: 75, category: 'framework' },
      { name: 'React', level: 80, category: 'framework' },
      { name: 'TensorFlow', level: 70, category: 'framework' },
      { name: 'PyTorch', level: 65, category: 'framework' },
    ],
  },
  {
    name: 'Tools & Databases',
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: 'MySQL', level: 85, category: 'tool' },
      { name: 'Git', level: 90, category: 'tool' },
      { name: 'scikit-learn', level: 75, category: 'tool' },
      { name: 'Pandas', level: 85, category: 'tool' },
      { name: 'VS Code', level: 95, category: 'tool' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      { name: 'AWS', level: 60, category: 'cloud' },
      { name: 'Docker', level: 50, category: 'cloud' },
      { name: 'CI/CD', level: 45, category: 'cloud' },
    ],
  },
];

const SkillBar: React.FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = `${skill.level}%`;
                barRef.current.style.opacity = '1';
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [delay, skill.level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-blue-200">{skill.name}</span>
        <span className="text-sm font-medium text-blue-300">{skill.level}%</span>
      </div>
      <div className="w-full bg-dark-900/50 rounded-full h-2.5 border border-blue-500/30">
        <div
          ref={barRef}
          className="h-2.5 rounded-full transition-all duration-1000 ease-out opacity-0 glow"
          style={{ 
            width: '0%', 
            backgroundColor: 
              skill.category === 'language' ? '#3B82F6' : 
              skill.category === 'framework' ? '#8B5CF6' : 
              skill.category === 'tool' ? '#10B981' : 
              '#0EA5E9'
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white glow-text">My Skills</h2>
          <p className="mt-4 text-blue-200 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full glow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-900/30 text-blue-400 rounded-lg mr-4 border border-blue-500/30">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>
              <div>
                {category.skills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} delay={index * 100} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white shadow-lg border border-blue-500/30">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold">Looking for collaboration?</h3>
              <p className="mt-2 text-blue-100">
                I'm always open to discussing new projects and opportunities.
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-lg hover:shadow-white/50 transition-all duration-300 font-medium group"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;