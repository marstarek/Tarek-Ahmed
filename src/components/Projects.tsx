
import React from 'react';
import { Github, Link } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

const projectsData: Project[] = [
  {
    title: "Exhibit Package",
    description: "A package displays 3D booths and event items on the web and enables the user to customize designs by adding materials or logos, images, videos to imagine the final designs before purchase.",
    techStack: ["Three.js", "TypeScript", "HTML", "CSS"],
    githubUrl: "https://github.com/marstarek",
    image: "/lovable-uploads/2d52a687-cec4-467f-a539-c61f87910077.png"
  },
  {
    title: "York-E System",
    description: "Innovative educational solutions platform that transforms traditional solutions into digital, such as Assessment Bank and Digital Library, Interactive Games and Resources.",
    techStack: ["jQuery", "Bootstrap", "HTML", "CSS"],
    githubUrl: "https://york-e.com/",
    liveUrl: "https://york-e.com/",
    image: "/lovable-uploads/7a9f2f7c-f53b-49b7-8744-9e45af28a764.png"
  },
  {
    title: "Andalus Programming Education Center",
    description: "Educational platform for programming courses and training programs with modern UI and comprehensive course management system.",
    techStack: ["React", "CSS", "JavaScript"],
    githubUrl: "https://github.com/marstarek/andalus",
    liveUrl: "https://alandalous.netlify.app/",
    image: "/lovable-uploads/2d52a687-cec4-467f-a539-c61f87910077.png"
  },
  {
    title: "Hotel Booking Website",
    description: "Full-featured hotel booking platform with search functionality, room selection, and reservation management system.",
    techStack: ["React", "JavaScript", "CSS", "HTML"],
    githubUrl: "https://github.com/marstarek/hotel-booking-website",
    liveUrl: "https://hotel-booking-website-khaki.vercel.app/",
    image: "/lovable-uploads/7a9f2f7c-f53b-49b7-8744-9e45af28a764.png"
  },
  {
    title: "React Movies Platform",
    description: "Movie discovery platform with search, filtering, and detailed movie information using modern React patterns.",
    techStack: ["React", "JavaScript", "CSS", "API Integration"],
    githubUrl: "https://github.com/marstarek/React.JS-movies-platform",
    liveUrl: "https://industrious-digestion.surge.sh/",
    image: "/lovable-uploads/2d52a687-cec4-467f-a539-c61f87910077.png"
  },
  {
    title: "Netflix Clone",
    description: "Netflix-inspired streaming platform built with Sass, Gulp, and Bootstrap featuring responsive design and modern UI.",
    techStack: ["Sass", "Gulp", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/marstarek/Netflix-using-sass-Gulp-bootstrap",
    liveUrl: "https://marstarek.github.io/Netflix-using-sass-Gulp-bootstrap/",
    image: "/lovable-uploads/7a9f2f7c-f53b-49b7-8744-9e45af28a764.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Explore some of my recent work and technical projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="group bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="aspect-video mb-6 overflow-hidden rounded-lg bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-300 hover:text-white transition-colors"
                    >
                      <Link className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
