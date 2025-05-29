import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

type Experience = {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    company: "Cognorize",
    position: "Web Development Intern",
    duration: "May 2024 - Jul 2024",
    location: "Remote",
    description: [
      "Developed responsive web applications using React and Node.js",
      "Implemented RESTful APIs for data management and user authentication",
      "Collaborated with a team of 5 developers using Git for version control"
    ],
    skills: ["React", "Node.js", "Express", "MongoDB", "Git"]
  },
  {
    id: 2,
    company: "Codesoft",
    position: "C++ Programming Intern",
    duration: "Jan 2024 - Mar 2024",
    location: "Remote",
    description: [
      "Built efficient algorithms for data processing and analysis",
      "Developed a console-based application for inventory management",
      "Optimized existing codebase, improving performance by 30%"
    ],
    skills: ["C++", "Data Structures", "Algorithms", "OOP"]
  },
  {
    id: 3,
    company: "nxtLogic",
    position: "Machine Learning Intern",
    duration: "Aug 2023 - Nov 2023",
    location: "Remote",
    description: [
      "Trained and evaluated machine learning models for text classification",
      "Preprocessed and cleaned datasets for model training",
      "Implemented feature engineering techniques to improve model accuracy"
    ],
    skills: ["Python", "scikit-learn", "TensorFlow", "NLP", "Data Analysis"]
  }
];

const ExperienceCard: React.FC<{ experience: Experience; isLast: boolean }> = ({ 
  experience, 
  isLast 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="relative opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-gray-200"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-8 top-8 w-8 h-8 rounded-full bg-indigo-600 transform -translate-x-1/2 flex items-center justify-center">
        <Briefcase className="w-4 h-4 text-white" />
      </div>
      
      {/* Content */}
      <div className="ml-12 relative">
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">{experience.position}</h3>
            <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mt-2 sm:mt-0 px-3 py-1 rounded-full">
              {experience.company}
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-4 space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-gray-500" />
              <span className="text-sm">{experience.duration}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-gray-500" />
              <span className="text-sm">{experience.location}</span>
            </div>
          </div>
          
          <ul className="mt-4 space-y-2">
            {experience.description.map((item, index) => (
              <li key={index} className="flex">
                <span className="mr-2">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 flex flex-wrap gap-2">
            {experience.skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Experience</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My professional journey and internship experiences.
          </p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
              isLast={index === experiences.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;