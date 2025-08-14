import { useEffect, useRef } from "react";
import { GraduationCap, School, Award } from "lucide-react";

export default function EducationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.timeline-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.remove('opacity-0', 'translate-y-8');
                item.classList.add('opacity-100', 'translate-y-0');
              }, index * 200);
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

  const educationData = [
    {
      id: 1,
      title: "B. TECH (CSBS)",
      institution: "Sri Eshwar College of Engineering",
      details: "CGPA: 8.02 (Up to 3rd Semester)",
      period: "2023-2027",
      icon: GraduationCap,
      color: "blue",
    },
    {
      id: 2,
      title: "HSC",
      institution: "Ponnu Matriculation Hr.Sec School",
      details: "Score: 84.6%",
      period: "2021-2023",
      icon: School,
      color: "green",
    },
    {
      id: 3,
      title: "SSLC",
      institution: "Ponnu Matriculation Hr.Sec School",
      details: "Status: Pass",
      period: "2020-2021",
      icon: Award,
      color: "yellow",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-600 text-blue-600",
      green: "bg-green-600 text-green-600", 
      yellow: "bg-yellow-600 text-yellow-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">My academic journey and learning path</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-600"></div>
          
          {/* Education entries */}
          <div className="space-y-12">
            {educationData.map((item, index) => {
              const Icon = item.icon;
              const colorClasses = getColorClasses(item.color);
              const isEven = index % 2 === 0;

              return (
                <div key={item.id} className="timeline-item opacity-0 transform translate-y-8 transition-all duration-500 group hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className={`w-5/12 ${isEven ? 'text-right pr-8' : 'order-3 pl-8'} group-hover:animate-slide-in-${isEven ? 'right' : 'left'}`}>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:animate-pulse-glow">{item.title}</h3>
                      <p className={`font-medium ${item.color === 'blue' ? 'text-blue-600' : item.color === 'green' ? 'text-green-600' : 'text-yellow-600'} group-hover:animate-wobble`}>
                        {item.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:animate-fade-in">{item.details}</p>
                    </div>
                    <div className={`relative z-10 flex items-center justify-center w-12 h-12 ${colorClasses.split(' ')[0]} rounded-full border-4 border-white dark:border-slate-800 order-2 group-hover:animate-rotate-in group-hover:scale-125 transition-all duration-300`}>
                      <Icon className="w-6 h-6 text-white group-hover:animate-bounce-subtle" />
                      {/* Animated pulse rings */}
                      <div className="absolute inset-0 rounded-full border-2 border-current opacity-20 animate-ping group-hover:opacity-40"></div>
                      <div className="absolute inset-0 rounded-full border border-current opacity-10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                    <div className={`w-5/12 ${isEven ? 'order-3 pl-8' : 'text-right pr-8'} group-hover:animate-slide-in-${isEven ? 'left' : 'right'}`}>
                      <span className={`${colorClasses.split(' ')[0]} text-white px-3 py-1 rounded-full text-sm font-medium group-hover:animate-heartbeat inline-block`}>
                        {item.period}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
