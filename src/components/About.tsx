import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code following best practices."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and excellent user experience."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams using modern development workflows and tools."
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Analyzing complex requirements and delivering innovative technical solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          About Me
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Passionate about creating exceptional digital experiences through code
        </p>
        
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardContent className="p-8">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I'm a dedicated frontend developer with a passion for creating interactive and performance-optimized web applications. 
                My journey in web development has led me to master modern technologies like React.js, Next.js, and TypeScript, 
                allowing me to build scalable and maintainable solutions.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Based in Alexandria, Egypt, I bring a combination of technical expertise and creative problem-solving to every project. 
                I'm committed to writing clean, efficient code and staying up-to-date with the latest industry trends and best practices.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 p-3 bg-sky-500/10 rounded-full border border-sky-500/20">
                  <item.icon className="w-6 h-6 text-sky-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;