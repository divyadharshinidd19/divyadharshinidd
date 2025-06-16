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
    title: "Portfolio",
    description: "A dynamic portfolio showcasing my projects, skills, and passion for AI, web development, and coding. Explore innovative apps, live demos, and real-world solutions built with modern technologies.",
    image: "https://www.swic.edu/wp-content/uploads/2021/05/portfolio.png",
    technologies: ["Spring Boot", "MySQL", "Java", "REST API"],
    github: "https://github.com/iamneo-production/1b54fc67-cd30-4a51-acb5-59d2217ab2a6-15bff1f1-c779-4d7c-abe7-2f1dc0de8022",
    demo: "https://divyadharshinidd19.netlify.app",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Customized Coupon System",
    description: "Built REST APIs for coupon generation and validation as part of an internship. The system manages coupon creation, distribution, and redemption with authentication.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Spring Boot", "MySQL", "Java", "REST API"],
    github: "https://github.com/iamneo-production/1b54fc67-cd30-4a51-acb5-59d2217ab2a6-15bff1f1-c779-4d7c-abe7-2f1dc0de8022",
    category: "Springboot-project"
  },
  {
    id: 3,
    title: "Enigma - Master the code",
    description: "Enigma is a next-gen coding platform inspired by LeetCode, offering AI-powered learning, live mock interviews, and competitive coding challenges. It helps students and job seekers practice, learn, and grow with real-time feedback and personalized guidance.",
    image: "https://www.shutterstock.com/image-photo/hands-typing-on-laptop-programming-600nw-2480023489.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Monaco Editor", "JWT", "Tailwind CSS"],
    github: "https://github.com/divyadharshinidd19/enigma",
    demo: "https://enigmathecoder.netlify.app",
    category: "Web Development"
  },
  {
    id: 4,
    title: "Image Classification Model",
    description: "Built and trained a convolutional neural network for image classification. Achieved 92% accuracy on the test dataset.",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Python", "TensorFlow", "Keras", "CNN"],
    github: "https://github.com/divyadharshinidd19/student_prediction",
    category: "Machine Learning"
  },
  {
    id: 5,
    title: "AI - Resume Creater",
    description: "An AI-powered resume builder that generates personalized, professional resumes in minutes based on user input. Includes real-time suggestions, formatting options, and PDF export for job-ready results.",
    image: "https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1664371057/learnhowtobecome.org/04-Resume-Guide-1203940958_3962dd640/04-Resume-Guide-1203940958_3962dd640.jpg?_i=AA",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Monaco Editor", "JWT", "Tailwind CSS"],
    github: "https://github.com/divyadharshinidd19/resume_creater",
    demo: "https://resumecreater.netlify.app",
    category: "Web Development"
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