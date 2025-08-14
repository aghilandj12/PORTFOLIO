import { useEffect, useRef } from "react";
import { Code, Trophy, Award, Briefcase } from "lucide-react";

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.achievement-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up');
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

  const achievements = [
    {
      id: 1,
      title: "LeetCode Excellence",
      description: "Solved 140+ problems with a rating of 1559, demonstrating strong problem-solving skills in data structures and algorithms.",
      icon: Code,
      color: "blue",
      badges: ["140+ Problems", "1559 Rating"],
    },
    {
      id: 2,
      title: "Competition Winner",
      description: "Secured 1st position in multiple project exhibitions and hackathons, showcasing innovative solutions and technical excellence.",
      icon: Trophy,
      color: "yellow",
      details: [
        "Intra College Project Expo 2025 - 1st Place",
        "Karpagam College Project Expo - 1st Place", 
        "Intra College Hackathon 2024 - 1st Place",
      ],
    },
    {
      id: 3,
      title: "Professional Certifications",
      description: "Completed multiple comprehensive courses covering full-stack development, data science, and machine learning.",
      icon: Award,
      color: "purple",
      badges: ["Flutter & Dart", "Data Science", "Machine Learning"],
    },
    {
      id: 4,
      title: "Industry Experience",
      description: "Gained practical experience through specialized internships in MERN stack and Flutter development.",
      icon: Briefcase,
      color: "green",
      details: [
        "MERN Stack Intern - Better Tomorrow (Jan 2025)",
        "Flutter Development Intern (July 2025)",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-600/10", text: "text-blue-600" },
      yellow: { bg: "bg-yellow-600/10", text: "text-yellow-600" },
      purple: { bg: "bg-purple-600/10", text: "text-purple-600" },
      green: { bg: "bg-green-600/10", text: "text-green-600" },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="achievements" className="py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Recognition and milestones in my journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const colorClasses = getColorClasses(achievement.color);

            return (
              <div
                key={achievement.id}
                className="achievement-card bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
                data-testid={`achievement-${achievement.id}`}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex items-start space-x-4 relative z-10">
                  <div className={`w-16 h-16 ${colorClasses.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:animate-rotate-in group-hover:scale-110 transition-all duration-300 relative`}>
                    <Icon className={`${colorClasses.text} text-2xl group-hover:animate-bounce-subtle`} />
                    {/* Animated pulse rings */}
                    <div className="absolute inset-0 rounded-xl border border-current opacity-0 group-hover:opacity-30 animate-ping"></div>
                    <div className="absolute inset-0 rounded-xl border-2 border-current opacity-0 group-hover:opacity-20 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:animate-slide-in-left group-hover:text-blue-600 transition-colors duration-300">{achievement.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 group-hover:animate-fade-in">
                      {achievement.description}
                    </p>
                    {achievement.badges && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {achievement.badges.map((badge, badgeIndex) => (
                          <span
                            key={badge}
                            className={`${colorClasses.bg} ${colorClasses.text} text-sm px-3 py-1 rounded-full font-medium hover:animate-bounce-subtle hover:scale-110 transition-all duration-300 group-hover:animate-heartbeat`}
                            style={{ animationDelay: `${badgeIndex * 0.1}s` }}
                            onMouseEnter={(e) => {
                              e.currentTarget.classList.add('animate-wobble');
                              setTimeout(() => {
                                e.currentTarget.classList.remove('animate-wobble');
                              }, 1000);
                            }}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                    {achievement.details && (
                      <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        {achievement.details.map((detail, detailIndex) => (
                          <div 
                            key={detailIndex} 
                            className="group-hover:animate-slide-in-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ animationDelay: `${detailIndex * 0.1 + 0.5}s` }}
                          >
                            • {detail}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 animate-float transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60 animate-float transition-opacity duration-300" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-green-400 rounded-full opacity-0 group-hover:opacity-60 animate-float transition-opacity duration-300" style={{ animationDelay: '0.7s' }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
