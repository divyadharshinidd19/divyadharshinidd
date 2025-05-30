import React, { useState } from 'react';
import { Github, ExternalLink, FolderOpen } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  category: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Customized Coupon System",
    description: "Built REST APIs for coupon generation and validation as part of an internship. The system manages coupon creation, distribution, and redemption with authentication.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Spring Boot", "MySQL", "Java", "REST API"],
    github: "https://github.com/yourusername/coupon-system",
    demo: "https://example.com/demo",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Sentiment Analysis Tool",
    description: "Developed a machine learning model to analyze sentiment in customer reviews. Implemented data preprocessing, feature extraction, and model training.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Python", "scikit-learn", "NLTK", "Pandas"],
    github: "https://github.com/yourusername/sentiment-analysis",
    category: "Machine Learning"
  },
  {
    id: 3,
    title: "Smart Home Dashboard",
    description: "Created an interactive dashboard for monitoring and controlling smart home devices. Features include real-time data visualization and device control.",
    image: "https://images.pexels.com/photos/1268124/pexels-photo-1268124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Node.js", "Socket.io", "Chart.js"],
    github: "https://github.com/yourusername/smart-home-dashboard",
    demo: "https://example.com/smart-home",
    category: "Web Development"
  },
  {
    id: 4,
    title: "Image Classification Model",
    description: "Built and trained a convolutional neural network for image classification. Achieved 92% accuracy on the test dataset.",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Python", "TensorFlow", "Keras", "CNN"],
    github: "https://github.com/yourusername/image-classifier",
    category: "Machine Learning"
  },
  {
    id: 5,
    title: "Personal Finance Tracker",
    description: "Developed a web application for tracking personal finances. Features include expense categorization, budget planning, and visualization.",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Firebase", "ChartJS", "Tailwind CSS"],
    github: "https://github.com/yourusername/finance-tracker",
    demo: "https://example.com/finance",
    category: "Web Development"
  },
  {
    id: 6,
    title: "Sales Prediction Algorithm",
    description: "Created a time-series prediction model for retail sales forecasting. Implemented feature engineering and model optimization.",
    image: "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Python", "scikit-learn", "Pandas", "Time Series Analysis"],
    github: "https://github.com/yourusername/sales-prediction",
    category: "Data Science"
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", "Web Development", "Data Science", "Machine Learning"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white glow-text">My Projects</h2>
          <p className="mt-4 text-blue-200 max-w-2xl mx-auto">
            Here are some of my recent projects spanning web development, data science, and machine learning.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full glow"></div>
        </div>

        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-dark-800/50 text-blue-200 hover:bg-blue-900/30 border border-blue-500/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-dark-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4">
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-900/30 backdrop-blur-sm rounded-full text-white hover:bg-blue-800/50 transition-colors border border-blue-500/30"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-900/30 backdrop-blur-sm rounded-full text-white hover:bg-blue-800/50 transition-colors border border-blue-500/30"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-400 mt-1">{project.category}</p>
                  </div>
                  <div className="p-2 bg-blue-900/30 text-blue-400 rounded-lg border border-blue-500/30">
                    <FolderOpen className="w-5 h-5" />
                  </div>
                </div>
                
                <p className="mt-4 text-blue-200 text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;