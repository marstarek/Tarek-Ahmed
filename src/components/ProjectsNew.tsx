import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsNew = () => {
  const projects = [
    {
      title: "Intern2Grow",
      description: "Virtual internship programs provider, which offers virtual internships with real tasks, so users can work on some real projects to gain work experience, and be job-ready.",
      technologies: ["Next.js", "MongoDB", "Deno KV", "YouTube API", "Deno Runtime", "Deno Deploy", "Vercel", "Cloudflare"],
      image: "/lovable-uploads/2d52a687-cec4-467f-a539-c61f87910077.png"
    },
    {
      title: "ContentAt",
      description: "Content creation tool that allows users to create high-quality covers, thumbnails and PDF carousels for their social media posts, blogs, and other content.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React.js"],
      image: "/lovable-uploads/7a9f2f7c-f53b-49b7-8744-9e45af28a764.png"
    },
    {
      title: "QGame",
      description: "Online game platform that allows users to play a collection of word, math, and memory games designed to sharpen their mind and improve their skills.",
      technologies: ["Web Components", "MicroFrontends", "JavaScript", "HTML & CSS", "Cloudflare"],
      image: "/lovable-uploads/2d52a687-cec4-467f-a539-c61f87910077.png"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container">
        <h2 className="section-title">Hobby & Side Projects</h2>
        <p className="section-subtitle">Showcasing my work across personal projects</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                {project.technologies.length > 3 && (
                  <div className="text-xs text-muted-foreground mb-4">
                    {project.technologies.slice(3).join(', ')}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsNew;