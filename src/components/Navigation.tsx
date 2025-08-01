
import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-foreground">
            Tarek Ahmed
          </Link>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About</a>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Skills</a>
              <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Experience</a>
              <a href="#education" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Education</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Projects</a>
              <a href="#open-source" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Open Source</a>
              <a href="#youtube" className="text-muted-foreground hover:text-foreground transition-colors text-sm">YouTube</a>
              <a href="#articles" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Articles</a>
              <a href="#connect" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Connect</a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
