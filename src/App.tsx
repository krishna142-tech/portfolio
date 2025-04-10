import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import emailjs from '@emailjs/browser';

import { 
  Github, Linkedin, Mail, ExternalLink, 
  ChevronDown, Briefcase
} from 'lucide-react';

interface EmailJSResponse {
  text: string;
  status: number;
}

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Project data
  const projects = [
    {
      title: "BizVentory – Inventory Management System",
      description: "A full-stack web application to manage business inventory. Features include adding, updating, deleting, and searching items; automatic stock alerts; and monthly sales reports.",
      images: ["/Dashboardpagewebsite.png", "/indexpagewebsite.png"],
      tags: ["Python", "Flask", "HTML", "CSS", "JavaScript", "MongoDB"],
      demoLink: "#",
      codeLink: "https://github.com/krishna142-tech/BizVentory"
    }
  ];

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm('service_0gtfwep', 'template_3470q3b', e.currentTarget, 'dxgdiGjq_ydGVPnF5')
      .then((result: EmailJSResponse) => {
        console.log(result.text);
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 3000);
      }, (error: EmailJSResponse) => {
        console.log(error.text);
      });
  };

  // Handle scroll indicator visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-inter">
      {/* Navigation */}
      <header className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 py-4 shadow-md">
        <div className="container flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold font-poppins"
          >
            <span className="text-accent-green">Dev</span>Portfolio
          </motion.div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="p-2 text-gray-200 hover:text-accent-green"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['about', 'skills', 'projects', 'contact', 'certifications'].map((item) => (
              <ScrollLink
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-accent-green transition-colors capitalize cursor-pointer"
              >
                {item}
              </ScrollLink>
            ))}
            <a href="https://github.com/krishna142-tech" className="text-gray-300 hover:text-accent-green transition-colors capitalize cursor-pointer" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </nav>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800 shadow-lg"
          >
            <div className="container py-4 flex flex-col space-y-4">
              {['about', 'skills', 'projects', 'contact'].map((item) => (
                <ScrollLink
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-accent-green transition-colors capitalize py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="container py-32 min-h-screen flex flex-col justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl z-10"
        >
          <span className="text-accent-blue text-lg md:text-xl font-medium">Hello, I am</span>
          <h1 className="text-5xl md:text-7xl font-bold font-poppins mt-2 mb-6 bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
            Krishna Sevak<br />
            Full Stack Developer <br />
            & AI Enthusiast
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            Crafting innovative digital solutions at the intersection of web development and artificial intelligence.
          </p>
          <div className="flex flex-wrap gap-4">
            <ScrollLink
              to="contact"
              smooth={true}
              className="btn-primary shadow-lg shadow-accent-green/20"
              duration={500}
            >
              Get in Touch
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              className="btn-outline shadow-lg shadow-accent-blue/20"
              duration={500}
            >
              View Projects
            </ScrollLink>
            <a href="/Krishna_Sevak_resume.pdf" className="btn-secondary shadow-lg" download>
              Download Resume
            </a>
          </div>

          <div className="flex items-center space-x-4 mt-12">
            <a href="https://github.com/krishna142-tech" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/krishna-sevak" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:krishna.8.sevak@gmail.com" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ScrollLink to="about" smooth={true} duration={500}>
            <ChevronDown className="text-accent-green" size={32} />
          </ScrollLink>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">About Me</h2>
            <div className="w-20 h-1 bg-accent-green mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in modern web technologies
                and a deep interest in artificial intelligence and machine learning.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in tech has led me to work on diverse projects, from responsive
                web applications to AI-powered solutions. I love solving complex problems and creating
                intuitive, user-friendly experiences.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center text-accent-green">
                  <Briefcase size={20} className="mr-2" />
                  <span>Aspiring Full Stack Developer | Building real-world projects while pursuing a B.Tech in Ai & Ml at Universal AI University, Karjat.</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-accent-green to-accent-blue p-1 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                  <img 
                    src="/Profile.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">My Skills</h2>
            <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Full Stack Development */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold font-poppins mb-4">Full Stack Development</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <span className="text-gray-300">ReactJs</span>
                  <br />
                  <span className="text-sm text-gray-400">Intermediate</span>
                </div>
                <div className="text-center">
                  <span className="text-gray-300">Bootstrap</span>
                  <br />
                  <span className="text-sm text-gray-400">Advanced</span>
                </div>
                <div className="text-center">
                  <span className="text-gray-300">Tailwind CSS</span>
                  <br />
                  <span className="text-sm text-gray-400">Intermediate</span>
                </div>
                <div className="text-center">
                  <span className="text-gray-300">NodeJs</span>
                  <br />
                  <span className="text-sm text-gray-400">Intermediate</span>
                </div>
                <div className="text-center">
                  <span className="text-gray-300">JavaScript</span>
                  <br />
                  <span className="text-sm text-gray-400">Intermediate</span>
                </div>
                <div className="text-center">
                  <span className="text-gray-300">MongoDB</span>
                  <br />
                  <span className="text-sm text-gray-400">Advanced</span>
                </div>
              </div>
            </div>
            
            {/* Programming Skills */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold font-poppins mb-4">Programming Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <span className="text-gray-300">C</span>
                  <br />
                  <span className="text-sm text-gray-400">Intermediate</span>
                </div>
                <div className="text-center">
                  <span className="text-gray-300">Java</span>
                  <br />
                  <span className="text-sm text-gray-400">Basic</span>
                </div>
                <div className="text-center">
                  <span className="text-gray-300">C++</span>
                  <br />
                  <span className="text-sm text-gray-400">Intermediate</span>
                </div>
                <div className="text-center">
                  <span className="text-gray-300">JavaScript</span>
                  <br />
                  <span className="text-sm text-gray-400">Intermediate</span>
                </div>
                <div className="text-center">
                  <span className="text-gray-300">Python</span>
                  <br />
                  <span className="text-sm text-gray-400">Advanced</span>
                </div>
                <div className="text-center">
                  <span className="text-gray-300">SQL</span>
                  <br />
                  <span className="text-sm text-gray-400">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-gray-800">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Certifications & Additional Skills</h2>
            <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-4">
              <li><strong>CODING CONTEST CODERarena</strong> - Project Contest Innovations LLP (Feb 2025)</li>
              <li><strong>Climate Change: Carbon Capture and Storage</strong> - edX Verified Certificate (Feb 2025)</li>
              <li><strong>Artificial Intelligence Trainee Certification</strong> - Acmegrade (Nov 2024)</li>
              <li><strong>Prompt Design in Vertex AI</strong> - Google (Nov 2024)</li>
              <li><strong>Understanding Prompt Engineering</strong> - DataCamp (2024)</li>
              <li><strong>Data Analysis in Excel</strong> - DataCamp (2024)</li>
              <li><strong>Sports Leadership</strong>: Active participant in Badminton, Football, and Cricket</li>
              <li><strong>Soft Skills</strong>: Team Collaboration, Project Management, Communication</li>
              <li><strong>Robotics</strong>: 3D Modeling, Robot Programming</li>
              <li><strong>Core Competencies</strong>: Problem-Solving, Analytical Thinking, System Design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-800">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Featured Projects</h2>
            <div className="w-20 h-1 bg-accent-green mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="overflow-hidden h-48 flex">
                  {project.images.map((image, imgIndex) => (
                    <img 
                      key={imgIndex}
                      src={image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  ))}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-poppins mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs px-2 py-1 bg-gray-800 text-accent-green rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoLink}
                      className="flex items-center space-x-1 px-4 py-2 bg-accent-green text-gray-900 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                    <a 
                      href={project.codeLink}
                      className="flex items-center space-x-1 px-4 py-2 border border-accent-blue text-accent-blue rounded-lg font-medium hover:bg-accent-blue hover:text-white transition-all duration-300"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Get in Touch</h2>
            <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-5 gap-10 max-w-4xl mx-auto">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-800 rounded-lg text-accent-green">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <a href="mailto:krishna.8.sevak@gmail.com" className="text-gray-300 hover:text-accent-green transition-colors">
                    krishna.8.sevak@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-800 rounded-lg text-accent-blue">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/krishna-sevak/" className="text-gray-300 hover:text-accent-blue transition-colors" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/krishna-sevak
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-800 rounded-lg text-accent-green">
                  <Github size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">GitHub</h3>
                  <a href="https://github.com/krishna142-tech" className="text-gray-300 hover:text-accent-green transition-colors" target="_blank" rel="noopener noreferrer">
                    github.com/krishna142-tech
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-4 relative">
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 bg-gray-900 bg-opacity-95 rounded-2xl flex items-center justify-center"
                  >
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-green text-gray-900 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-gray-300">I'll get back to you soon.</p>
                    </div>
                  </motion.div>
                )}
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 block mb-2">Name</label>
                    <input 
                      type="text"
                      name="name" 
                      className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-green"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 block mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-green"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-gray-300 block mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-green"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 block mb-2">Message</label>
                  <textarea 
                    className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-green resize-none h-32"
                    placeholder="Your message"
                    name="message"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="btn-primary w-full md:w-auto flex items-center justify-center shadow-lg shadow-accent-green/20"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <div className="container">
          <p className="text-gray-400">
            © {new Date().getFullYear()} | Designed & Built with ❤️
          </p>
          <a href="https://github.com/krishna142-tech" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            EmailJS
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;