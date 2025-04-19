
import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyOHYySDI0di0yaDEyek0zNiAyMnYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 inline-block p-2 bg-white/5 backdrop-blur-lg rounded-full">
            <h2 className="text-sm font-medium text-sky-300">Front-end Developer</h2>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent">
            Tarek Ahmed Elrashidy
          </h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Skilled front-end developer experienced in creating and maintaining interactive, 
            and performance-optimized web applications. Proficient in modern front-end technologies 
            including HTML5, CSS3, JavaScript, and popular frameworks such as React.js and Next.js.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <p className="flex items-center text-slate-300">
              <span className="font-medium text-sky-300 mr-2">Location:</span> Alexandria, Egypt
            </p>
            <p className="flex items-center text-slate-300">
              <span className="font-medium text-sky-300 mr-2">Phone:</span>
              <a href="tel:+201129689368" className="hover:text-white transition-colors">+20 1129689368</a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/marstarek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 text-white bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-lg transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/tarek-ahmed-iti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 text-white bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-lg transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:tarekahmed1568@gmail.com"
              className="p-4 text-white bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-lg transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
