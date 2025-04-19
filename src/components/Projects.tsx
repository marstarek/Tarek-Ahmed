
import React from 'react';
import { Github, Link } from 'lucide-react';

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
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="card group">
              <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-600 mb-4">{project.description}</p>
              <div className="mb-4">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-600 hover:text-sky-600"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Code
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-600 hover:text-sky-600"
                  >
                    <Link className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
