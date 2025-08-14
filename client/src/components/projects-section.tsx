import { ExternalLink, Github } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

interface ProjectsSectionProps {
  onProjectClick: (projectId: string) => void;
}

export default function ProjectsSection({ onProjectClick }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Some of my recent work and contributions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card bg-gray-50 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group animate-fade-in relative"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => onProjectClick(project.id)}
              data-testid={`card-project-${project.id}`}
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift"></div>
              
              <div className="relative z-10">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.imageAlt}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Floating project status */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce-subtle">
                    <span className={`${project.color} text-white text-xs px-3 py-1 rounded-full shadow-lg animate-pulse-glow`}>
                      Latest
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:animate-slide-in-left group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                    <span className={`${project.color} text-white text-xs px-2 py-1 rounded-full group-hover:animate-heartbeat`}>
                      {project.date}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed group-hover:animate-fade-in">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded group-hover:animate-bounce-subtle hover:scale-110 transition-all duration-300"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                        onMouseEnter={(e) => {
                          e.currentTarget.classList.add('animate-wobble');
                          setTimeout(() => {
                            e.currentTarget.classList.remove('animate-wobble');
                          }, 1000);
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <button 
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group-hover:animate-slide-in-left hover:animate-pulse-glow transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        onProjectClick(project.id);
                      }}
                      data-testid={`button-view-details-${project.id}`}
                    >
                      <ExternalLink className="w-3 h-3 mr-1 group-hover:animate-bounce-subtle" />
                      View Details
                    </button>
                    <a 
                      href="#" 
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 group-hover:animate-rotate-in hover:scale-125 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                      data-testid={`link-github-${project.id}`}
                    >
                      <Github className="w-5 h-5 hover:animate-heartbeat" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Animated floating particles */}
              <div className="absolute top-2 left-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 animate-float transition-opacity duration-300"></div>
              <div className="absolute top-4 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60 animate-float transition-opacity duration-300" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-green-400 rounded-full opacity-0 group-hover:opacity-60 animate-float transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
