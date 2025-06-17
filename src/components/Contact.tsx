import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white glow-text">Get In Touch</h2>
          <p className="mt-4 text-blue-200 max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full glow"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl border border-blue-500/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-blue-900/30 text-blue-400 rounded-lg mr-4 border border-blue-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <a href="mailto:divyadharshinidd19@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    divyadharshinidd19@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-blue-900/30 text-blue-400 rounded-lg mr-4 border border-blue-500/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <a href="tel:+916379709526" className="text-blue-400 hover:text-blue-300 transition-colors">
                    +91 63797 09526
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-blue-900/30 text-blue-400 rounded-lg mr-4 border border-blue-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-blue-200">
                    Coimbatore, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-white mb-4">Social Profiles</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/divyadharshinidd19" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-900/30 text-blue-400 rounded-lg hover:bg-blue-800/30 transition-colors border border-blue-500/30"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/divyadharshinidd19" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-900/30 text-blue-400 rounded-lg hover:bg-blue-800/30 transition-colors border border-blue-500/30"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-blue-500/30">
              <h4 className="font-semibold text-white mb-4">Download Resume</h4>
              <a 
                href="https://drive.google.com/file/d/1QTlgztX97wdvu1cEngJvGi8tTOkOJNMC/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 font-medium group"
              >
                Download Resume
                <ExternalLink className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl border border-blue-500/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-900/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-900/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-blue-200 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-900/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-900/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full px-6 py-3 flex items-center justify-center rounded-lg shadow font-medium transition-all duration-300 ${
                    formStatus === 'submitting'
                      ? 'bg-blue-900/50 cursor-not-allowed'
                      : formStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gradient-to-r from-blue-600 to-blue-400 hover:shadow-blue-500/50'
                  }`}
                >
                  {formStatus === 'submitting' ? (
                    <span className="inline-flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : formStatus === 'success' ? (
                    <span className="inline-flex items-center">
                      Message Sent!
                    </span>
                  ) : (
                    <span className="inline-flex items-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;