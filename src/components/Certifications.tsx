import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

type Certification = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credential: string;
  skills: string[];
};

const certifications: Certification[] = [
  {
    id: 1,
    title: "Machine Learning with Python",
    issuer: "IBM",
    date: "Aug 2023",
    credential: "https://credentials.example.com/1234",
    skills: ["Machine Learning", "Python", "Algorithms", "Data Analysis"]
  },
  {
    id: 2,
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    date: "Oct 2023",
    credential: "https://credentials.example.com/5678",
    skills: ["Neural Networks", "TensorFlow", "Computer Vision", "NLP"]
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner",
    issuer: "AWS",
    date: "Dec 2023",
    credential: "https://credentials.example.com/9012",
    skills: ["Cloud Computing", "AWS Services", "Security", "Architecture"]
  },
  {
    id: 4,
    title: "Full Stack Web Development",
    issuer: "Infosys Springboard",
    date: "Feb 2024",
    credential: "https://credentials.example.com/3456",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"]
  },
  {
    id: 5,
    title: "Data Science with Python",
    issuer: "IBM",
    date: "Mar 2024",
    credential: "https://credentials.example.com/7890",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Visualization"]
  },
  {
    id: 6,
    title: "Java Programming",
    issuer: "Coursera",
    date: "Apr 2024",
    credential: "https://credentials.example.com/1234",
    skills: ["Java", "OOP", "Data Structures", "Algorithms"]
  },
  {
    id: 7,
    title: "AI Fundamentals",
    issuer: "Microsoft",
    date: "May 2024",
    credential: "https://credentials.example.com/5678",
    skills: ["AI Ethics", "Machine Learning", "Neural Networks", "Decision Trees"]
  },
  {
    id: 8,
    title: "Advanced SQL for Data Science",
    issuer: "Coursera",
    date: "Jun 2024",
    credential: "https://credentials.example.com/9012",
    skills: ["SQL", "Database Design", "Query Optimization", "Data Modeling"]
  }
];

const Certifications: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedCertifications = showAll ? certifications : certifications.slice(0, 5);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="certifications" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Certifications</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Selected certifications from various platforms showcasing my continuous learning journey.
          </p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="space-y-4">
          {displayedCertifications.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-indigo-200 hover:shadow-md"
            >
              <div 
                className="p-6 cursor-pointer flex items-center justify-between"
                onClick={() => toggleExpand(cert.id)}
              >
                <div className="flex items-center">
                  <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg mr-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{cert.title}</h3>
                    <p className="text-gray-600 text-sm">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
                {expandedId === cert.id ? 
                  <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                }
              </div>
              
              {expandedId === cert.id && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={cert.credential} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                  >
                    View Credential
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {certifications.length > 5 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium"
            >
              {showAll ? "Show Less" : `Show All (${certifications.length})`}
            </button>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            View my complete collection of 40+ certificates:
          </p>
          <a 
            href="https://drive.google.com/drive/folders/example" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors inline-flex items-center font-medium"
          >
            View All Certificates
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;