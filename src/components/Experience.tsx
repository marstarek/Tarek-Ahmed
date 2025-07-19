import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Building } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    company: "York-E Educational Solutions",
    location: "Remote",
    duration: "2022 - Present",
    description: [
      "Developed and maintained interactive educational web applications",
      "Built responsive user interfaces using modern web technologies",
      "Collaborated with cross-functional teams to deliver high-quality products",
      "Implemented assessment banks and digital library solutions"
    ],
    technologies: ["jQuery", "Bootstrap", "HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "3D Web Developer",
    company: "Exhibit Package",
    location: "Alexandria, Egypt",
    duration: "2021 - 2022",
    description: [
      "Created immersive 3D booth visualizations for trade shows and events",
      "Implemented customization features for materials, logos, and branding",
      "Optimized 3D rendering performance for web browsers",
      "Developed user-friendly interfaces for design customization"
    ],
    technologies: ["Three.js", "TypeScript", "HTML5", "CSS3", "WebGL"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Work Experience
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Professional journey and key contributions in frontend development
        </p>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((experience, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-semibold text-white mb-2">{experience.title}</h3>
                    <div className="flex items-center text-sky-300 mb-2">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="font-medium">{experience.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-slate-400">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ul className="text-slate-300 space-y-2 mb-6">
                  {experience.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;