import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY || "default_key"
});

const PORTFOLIO_CONTEXT = `
You are an AI assistant for Aghilan DJ's portfolio website. Here's information about him:

PERSONAL INFO:
- Name: Aghilan DJ
- Phone: 6381365151
- Email: aghilan51515151@gmail.com
- Currently pursuing B.Tech in Computer Science and Business Systems at Sri Eshwar College of Engineering
- CGPA: 8.02 (up to 3rd semester)

EDUCATION:
- B.Tech CSBS at Sri Eshwar College of Engineering (2023-2027) - CGPA: 8.02
- HSC at Ponnu Matriculation Hr.Sec School (2021-2023) - 84.6%
- SSLC at Ponnu Matriculation Hr.Sec School (2020-2021) - Pass

SKILLS:
Programming Languages: Java (90%), Python (85%), C/C++ (80%), Node.js, Dart
Frameworks: React.js (88%), Flutter (85%), Node.js (82%), Express.js
Database: MongoDB (85%), MySQL (80%), Firebase (75%)
Tools: VS Code, Git, Figma, FlutterFlow, Canva, Oracle
Core: Data Structures & Algorithms, Object-Oriented Programming

PROJECTS:
1. RENTIFY (May 2025) - MERN stack rental platform allowing time-based product rentals with seamless posting and management
2. CIVICFIX (April 2025) - Government transparency system for controlling corruption through real-time tracking
3. RELIV (March 2024) - Flutter disaster management app with network-less communication using Beacon technology
4. AGRO-CLIMA INSIGHTS (April 2024) - Django platform analyzing real-time climate data for sustainable land use
5. ROAD SAFETY TOOL (August 2024) - HTML/CSS app providing alerts for caution zones using Street MapAPI

ACHIEVEMENTS:
- LeetCode: 160+ problems solved, Rating: 1559
- Mini Project Expo 2025: 1st Position (Intra College)
- Karpagam College Project Expo: 1st Position with cash prize
- Freshathon 2024: 1st Position (Intra College Hackathon)

INTERNSHIPS:
- MERN Stack Intern at Better Tomorrow (January 2025)
- Flutter Intern (July 2025) - College-conducted program

CERTIFICATIONS:
- Flutter & Dart - The Complete Guide [2025 Edition]
- The Data Science Course: Complete Data Science Bootcamp 2025
- Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2025]
- Learn JAVA Programming - Beginner to Master
- Mastering Data Structures & Algorithms using C and C++
- Learn Python: The Complete Python Programming Course
- C Programming Bootcamp-The Complete C Language Course

Answer questions about Aghilan's background, skills, projects, achievements, and experience. Be conversational, helpful, and enthusiastic about his accomplishments.
`;

export async function chatWithAI(message: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: PORTFOLIO_CONTEXT
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    return response.choices[0].message.content || "I'm sorry, I couldn't process your request right now.";
  } catch (error) {
    console.error('OpenAI API error:', error);
    
    // Fallback responses based on message content
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('programming')) {
      return "Aghilan is proficient in multiple programming languages including Java (90%), Python (85%), and C/C++ (80%). He works with modern frameworks like React.js (88%), Flutter (85%), and Node.js (82%), and is experienced with databases like MongoDB, MySQL, and Firebase. He also uses tools like VS Code, Git, Figma, and FlutterFlow for development.";
    } else if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('portfolio')) {
      return "Aghilan's standout projects include RENTIFY (a MERN stack rental platform), CIVICFIX (a transparency system for governance), and RELIV (a Flutter disaster management app with Beacon technology). He also built AGRO-CLIMA INSIGHTS using Django for climate data analysis and a Road Safety Tool with real-time location alerts.";
    } else if (lowerMessage.includes('achievement') || lowerMessage.includes('award') || lowerMessage.includes('leetcode') || lowerMessage.includes('competition')) {
      return "Aghilan has solved 160+ problems on LeetCode with a rating of 1559, won 1st place in multiple project exhibitions including Intra College Project Expo 2025 and Karpagam College Project Expo, and secured 1st position in Intra College Hackathon 2024. He also completed several professional certifications in Flutter, Data Science, and Machine Learning.";
    } else if (lowerMessage.includes('education') || lowerMessage.includes('college') || lowerMessage.includes('study') || lowerMessage.includes('degree')) {
      return "Aghilan is currently pursuing B.Tech in Computer Science and Business Systems at Sri Eshwar College of Engineering with a CGPA of 8.02. He completed his HSC from Ponnu Matriculation Hr.Sec School with 84.6% and has gained practical experience through MERN stack and Flutter development internships.";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('reach')) {
      return "You can reach Aghilan at aghilan51515151@gmail.com or call him at +91 6381365151. He's also available on LinkedIn and GitHub. He's always open to discussing new opportunities and collaborations!";
    } else {
      return "I can tell you about Aghilan's skills, projects, education, achievements, and contact information. What would you like to know more about?";
    }
  }
}
