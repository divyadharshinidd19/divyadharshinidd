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
    <section id="certifications" className="py-20 px-6 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white glow-text">Certifications</h2>
          <p className="mt-4 text-blue-200 max-w-2xl mx-auto">
            Selected certifications showcasing my continuous learning journey.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full glow"></div>
        </div>
        
        <div className="space-y-4">
          {displayedCertifications.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-dark-800/50 backdrop-blur-sm border border-blue-500/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div 
                className="p-6 cursor-pointer flex items-center justify-between"
                onClick={() => toggleExpand(cert.id)}
              >
                <div className="flex items-center">
                  <div className="p-3 bg-blue-900/30 text-blue-400 rounded-lg mr-4 border border-blue-500/30">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">{cert.title}</h3>
                    <p className="text-blue-300 text-sm">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
                {expandedId === cert.id ? 
                  <ChevronUp className="w-5 h-5 text-blue-400" /> : 
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                }
              </div>
              
              {expandedId === cert.id && (
                <div className="px-6 pb-6 pt-2 border-t border-blue-500/30">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={cert.credential} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group"
                  >
                    View Credential
                    <ExternalLink className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-blue-200 mb-4">
            View my complete collection of 40+ certificates:
          </p>
          <a 
            href="https://drive.google.com/drive/folders/example" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 inline-flex items-center font-medium group"
          >
            View All Certificates
            <ExternalLink className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;