
import React from 'react';
import { Github, Linkedin, Mail, Youtube, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Tarek Ahmed
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Front-End Developer & Content Creator
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            T-shaped software developer specialized in frontend web development, driven by a passion for teaching, mentoring, and content creation, and actively engaged in open-source initiatives.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/marstarek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-foreground hover:text-muted-foreground transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/tarek-ahmed-iti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-foreground hover:text-muted-foreground transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com/@tarekahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-foreground hover:text-muted-foreground transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="mailto:tarekahmed1568@gmail.com"
              className="p-3 text-foreground hover:text-muted-foreground transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <a href="#projects" className="inline-flex items-center">
                View My Work
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button size="lg" asChild>
              <a href="#connect">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
