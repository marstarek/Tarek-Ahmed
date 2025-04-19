
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-sky-600">
            Tarek Ahmed
          </Link>
          <div className="hidden md:flex space-x-8">
            <a href="#projects" className="text-slate-600 hover:text-sky-600">Projects</a>
            <a href="#skills" className="text-slate-600 hover:text-sky-600">Skills</a>
            <a href="#contact" className="text-slate-600 hover:text-sky-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
