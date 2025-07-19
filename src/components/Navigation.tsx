
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/50 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-sky-400 to-sky-200 bg-clip-text text-transparent">
            Tarek Ahmed
          </Link>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-slate-300 hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</a>
            <a href="#certificates" className="text-slate-300 hover:text-white transition-colors">Certificates</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
