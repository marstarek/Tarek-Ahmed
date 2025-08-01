import React from 'react';
import { Star, GitFork, ExternalLink } from 'lucide-react';

const OpenSource = () => {
  const projects = [
    {
      title: "Glide.js",
      role: "contributor",
      description: "A dependency-free JavaScript ES6 slider and carousel. It's lightweight, flexible and fast. Designed to slide. No less, no more.",
      contribution: "Refactored the entire codebase efficiently.",
      technologies: ["JavaScript", "Refactoring"],
      stars: "7.6k",
      forks: "780"
    },
    {
      title: "TheAlgorithms",
      role: "contributor",
      description: "The Algorithms website providing GitHub's largest open-source algorithm library.",
      contribution: "Improved the website's accessibility and readability for Arabic-speaking users. Configured all external links to open in a new tab to preserve the integrity of the SPA routing. Standardized the height of algorithm cards within each row for a consistent layout.",
      technologies: ["Next.js", "Material UI", "i18n", "React.js"],
      stars: "936",
      forks: "202"
    },
    {
      title: "Quran Mailer",
      role: "maintainer",
      description: "Quran Mailer is an open-source Quran mailing free service, where you can subscribe with your email address to receive a Quranic verse daily.",
      contribution: "In April 12, 2024: Quran Mailer has been accepted as an open-source project in JetBrains program.",
      technologies: ["Next.js", "Jest", "MongoDB", "Node.js", "Logging", "Cron Jobs", "React.js"],
      stars: "8",
      forks: "12"
    },
    {
      title: "Saber-Toast.js",
      role: "maintainer",
      description: "Saber-Toast.js is an open-source JavaScript library built to handle all your toasts simply.",
      contribution: "In December 22, 2022: Saber-Toast.js has been recognized by CSS Script as a \"Stylish Toast Notification Library\" that supports RTL languages.",
      technologies: ["HTML & CSS", "JavaScript"],
      stars: "23",
      forks: "4"
    }
  ];

  return (
    <section id="open-source" className="py-20 bg-background">
      <div className="container">
        <h2 className="section-title">Open-Source Contributions</h2>
        <p className="section-subtitle">Showcasing my work across open-source contributions I maintain and contribute to</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="experience-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{project.title}</h3>
                  <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {project.role}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
              
              <p className="text-foreground mb-4 text-sm">{project.contribution}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-card border border-border text-foreground rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;