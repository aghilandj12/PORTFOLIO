import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aghilan51515151@gmail.com",
      href: "mailto:aghilan51515151@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+91 6381365151",
      href: "tel:6381365151",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/aghilandj",
      href: "#",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/aghilan-dj",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Let's collaborate on something amazing together</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={info.label} 
                  className="flex items-center space-x-4 group hover:animate-slide-in-right transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center group-hover:animate-bounce-subtle group-hover:scale-110 transition-all duration-300 relative">
                    <Icon className="text-blue-600 text-xl group-hover:animate-heartbeat" />
                    {/* Animated pulse ring */}
                    <div className="absolute inset-0 rounded-lg border border-blue-600/30 opacity-0 group-hover:opacity-100 animate-ping"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:animate-slide-in-left group-hover:text-blue-600 transition-colors duration-300">{info.label}</h3>
                    <a 
                      href={info.href} 
                      className="text-blue-600 hover:text-blue-700 transition-all duration-300 group-hover:animate-pulse-glow hover:scale-105"
                      data-testid={`link-${info.label.toLowerCase()}`}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-slate-900 p-8 rounded-2xl animate-slide-in-right relative overflow-hidden group">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10" data-testid="form-contact">
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white hover:animate-scale-in focus:animate-pulse-glow transition-all duration-300"
                  data-testid="input-name"
                />
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white hover:animate-scale-in focus:animate-pulse-glow transition-all duration-300"
                  data-testid="input-email"
                />
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white hover:animate-scale-in focus:animate-pulse-glow transition-all duration-300"
                  data-testid="input-subject"
                />
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white resize-none hover:animate-scale-in focus:animate-pulse-glow transition-all duration-300"
                  data-testid="textarea-message"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group hover:animate-pulse-glow animate-fade-in"
                style={{ animationDelay: '0.5s' }}
                data-testid="button-send-message"

              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2 group-hover:animate-bounce-subtle" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
