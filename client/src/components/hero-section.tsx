import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer & Problem Solver";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleResumeDownload = () => {
    // Create a simple PDF with resume content
    const resumeContent = `
      AGHILAN DJ
      Phone: 6381365151 | Email: aghilan51515151@gmail.com
      
      EDUCATION
      B. TECH (CSBS) - Sri Eshwar College of Engineering - CGPA: 8.02 (2023-2027)
      HSC - Ponnu Matriculation Hr.Sec School - 84.6% (2021-2023)
      
      SKILLS
      Programming: Java, Python, C/C++, Node.js, Dart
      Frameworks: React.js, Flutter, Express.js, Node.js
      Database: MongoDB, MySQL, Firebase
      Tools: VS Code, Git, Figma, FlutterFlow, Canva
      
      PROJECTS
      • RENTIFY - MERN stack rental platform
      • CIVICFIX - Government transparency system
      • RELIV - Flutter disaster management app
      • AGRO-CLIMA INSIGHTS - Django climate analysis platform
      
      ACHIEVEMENTS
      • LeetCode: 140+ problems solved, Rating: 1559
      • Multiple 1st place wins in project exhibitions and hackathons
      • Professional certifications in Flutter, Data Science, ML
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Aghilan_DJ_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-500/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm <span className="text-blue-600 animate-pulse-glow">Aghilan DJ</span>
              </h1>
            </div>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-8 animate-slide-up-delayed">
              <span className="border-r-2 border-blue-600 pr-1 animate-pulse">
                {typedText}
              </span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
              A passionate Computer Science student specializing in MERN stack development, Flutter mobile apps, 
              and innovative problem-solving. Currently pursuing B.Tech in CSBS at Sri Eshwar College of Engineering 
              with a CGPA of 8.02.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-bottom" style={{ animationDelay: '0.8s' }}>
              <Button
                onClick={handleResumeDownload}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-glow hover:animate-wobble"
                data-testid="button-download-resume"
              >
                <Download className="w-4 h-4 mr-2 animate-bounce-subtle" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                data-testid="button-contact"
              >
                <a href="#contact" className="animate-heartbeat">Get In Touch</a>
              </Button>
            </div>
          </div>
          <div className="animate-slide-in-right relative">
            <div className="relative group">
              {/* Profile Photo with animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl animate-gradient-shift opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white dark:bg-slate-900 p-2 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Aghilan DJ - Full Stack Developer" 
                  className="rounded-xl shadow-2xl w-full h-auto transform hover:scale-105 transition-all duration-500 animate-float"
                  data-testid="img-hero"
                />
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle">
                <span className="text-white font-bold text-sm">React</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
                <span className="text-white font-bold text-xs">Flutter</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle" style={{ animationDelay: '1s' }}>
                <span className="text-white font-bold text-xs">JS</span>
              </div>
              <div className="absolute top-1/4 -right-8 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle" style={{ animationDelay: '1.5s' }}>
                <span className="text-white font-bold text-xs">Python</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: '1s' }}>
          <div className="text-center group hover:animate-scale-in">
            <div className="text-3xl font-bold text-blue-600 animate-heartbeat">140+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">LeetCode Problems</div>
          </div>
          <div className="text-center group hover:animate-scale-in">
            <div className="text-3xl font-bold text-green-600 animate-heartbeat">8.02</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
          </div>
          <div className="text-center group hover:animate-scale-in">
            <div className="text-3xl font-bold text-purple-600 animate-heartbeat">5+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Major Projects</div>
          </div>
          <div className="text-center group hover:animate-scale-in">
            <div className="text-3xl font-bold text-yellow-600 animate-heartbeat">3</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Competition Wins</div>
          </div>
        </div>
      </div>
    </section>
  );
}
