import { Mail, Linkedin, Github, Code } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Mail, href: "mailto:aghilan51515151@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aghilan-d-j/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/aghilandj12", label: "GitHub" },
  ];
  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white py-12 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-8 right-16 w-1 h-1 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-8 left-16 w-1.5 h-1.5 bg-green-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-4 right-8 w-1 h-1 bg-yellow-400 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-4 hover:animate-pulse-glow hover:text-blue-400 transition-colors duration-300 cursor-pointer">
            Aghilan DJ
          </h3>
          <p className="text-gray-400 mb-6 animate-slide-in-bottom" style={{ animationDelay: '0.2s' }}>
            Building the future, one line of code at a time.
          </p>
          <div className="flex justify-center space-x-6 mb-8 animate-slide-in-bottom" style={{ animationDelay: '0.4s' }}>
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:animate-bounce-subtle hover:scale-125 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
                  data-testid={`link-footer-${link.label.toLowerCase()}`}

                >
                  <Icon className="w-6 h-6 group-hover:animate-heartbeat" />
                </a>
              );
            })}
          </div>
          <div className="border-t border-gray-800 pt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
              &copy; 2025 Aghilan DJ. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
