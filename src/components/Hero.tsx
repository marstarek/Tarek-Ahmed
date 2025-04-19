
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Front-end Developer
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Skilled front-end developer experienced in creating and maintaining interactive,
            and performance-optimized web applications. Proficient in modern front-end technologies
            including React.js, Next.js, and more.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/marstarek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-sky-600"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/tarek-ahmed-iti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-sky-600"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:tarekahmed1568@gmail.com"
              className="p-2 text-slate-600 hover:text-sky-600"
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
