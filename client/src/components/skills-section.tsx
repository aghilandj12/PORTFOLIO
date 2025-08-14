import { useEffect, useRef } from "react";
import { Code, Layers, Database, Settings } from "lucide-react";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar) => {
              const width = bar.getAttribute('data-width');
              setTimeout(() => {
                (bar as HTMLElement).style.width = width || '0%';
              }, 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      color: "blue",
      skills: [
        { name: "Java", percentage: 90 },
        { name: "Python", percentage: 85 },
        { name: "C/C++", percentage: 80 },
      ],
    },
    {
      title: "Frameworks",
      icon: Layers,
      color: "purple",
      skills: [
        { name: "React.js", percentage: 88 },
        { name: "Flutter", percentage: 85 },
        { name: "Node.js", percentage: 82 },
      ],
    },
    {
      title: "Database",
      icon: Database,
      color: "green",
      skills: [
        { name: "MongoDB", percentage: 85 },
        { name: "MySQL", percentage: 80 },
        { name: "Firebase", percentage: 75 },
      ],
    },
    {
      title: "Tools",
      icon: Settings,
      color: "yellow",
      tools: ["VS Code", "Git", "Figma", "FlutterFlow", "Canva", "Oracle"],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-600/10", text: "text-blue-600", progress: "bg-blue-600" },
      purple: { bg: "bg-purple-600/10", text: "text-purple-600", progress: "bg-purple-600" },
      green: { bg: "bg-green-600/10", text: "text-green-600", progress: "bg-green-600" },
      yellow: { bg: "bg-yellow-600/10", text: "text-yellow-600", progress: "bg-yellow-600" },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Technologies and tools I work with</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const colorClasses = getColorClasses(category.color);

            return (
              <div
                key={category.title}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group hover:animate-pulse-glow relative overflow-hidden"
                data-testid={`skill-category-${category.title.toLowerCase()}`}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center mb-4 relative z-10 group-hover:animate-rotate-in group-hover:scale-110 transition-all duration-300`}>
                  <Icon className={`${colorClasses.text} text-xl group-hover:animate-bounce-subtle`} />
                  {/* Animated pulse ring */}
                  <div className="absolute inset-0 rounded-lg border border-current opacity-0 group-hover:opacity-30 animate-ping"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 relative z-10 group-hover:animate-wobble">{category.title}</h3>
                
                {category.skills ? (
                  <div className="space-y-3 relative z-10">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="skill-item group/skill hover:animate-scale-in">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/skill:animate-slide-in-left">{skill.name}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover/skill:animate-slide-in-right group-hover/skill:text-blue-600 font-bold transition-colors duration-300">{skill.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 relative overflow-hidden">
                          <div 
                            className={`progress-bar ${colorClasses.progress} h-2 rounded-full transition-all duration-2000 ease-in-out relative group-hover/skill:animate-pulse-glow`}
                            style={{ width: '0%', animationDelay: `${skillIndex * 0.2}s` }}
                            data-width={`${skill.percentage}%`}
                          >
                            {/* Animated shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {category.tools?.map((tool, toolIndex) => (
                      <span
                        key={tool}
                        className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} rounded-full text-sm font-medium hover:animate-bounce-subtle hover:scale-110 transition-all duration-300 cursor-pointer`}
                        style={{ animationDelay: `${toolIndex * 0.1}s` }}
                        onMouseEnter={(e) => {
                          e.currentTarget.classList.add('animate-wobble');
                          setTimeout(() => {
                            e.currentTarget.classList.remove('animate-wobble');
                          }, 1000);
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
