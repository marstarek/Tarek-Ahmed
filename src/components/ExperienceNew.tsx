import React from 'react';
import { Calendar, MapPin, Clock, Building } from 'lucide-react';

const ExperienceNew = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Caduceus Lane",
      period: "June 2023 – Present",
      type: "Full-time",
      location: "Alexandria, Egypt",
      technologies: ["Three.js", "TypeScript", "HTML", "CSS", "Next.js", "Fabric.js", "Node.js", "React.js", "Vite", "Tailwind", "Laravel"],
      description:
        "Design and implement innovative digital solutions, transforming traditional medical content tools into cutting-edge platforms. Collaborate with cross-functional teams to deliver large-scale projects.",
      responsibilities: [
        "Developed Exhibit Package: A tool displaying customizable 3D booths and event items.",
        "Built Exhibit Marketplace: A 3D product exploration and customization platform with shopping features.",
        "Worked on Inform, Certify, Assent, and Nametag: An all-in-one event management platform.",
        "Created invitation systems, surveys, reports, and interactive event components.",
        "Built Themis: A platform for managing purchase orders and generating reports."
      ]
    },
    {
      title: "Frontend Developer",
      company: "Sphinx",
      period: "May 2022 – June 2023",
      type: "Full-time",
      location: "Alexandria, Egypt",
      technologies: ["jQuery", "Bootstrap", "HTML", "CSS", "SQL", "PHP"],
      description:
        "Developed and maintained educational web applications, converting traditional educational content into digital interactive experiences.",
      responsibilities: [
        "Developed York: A digital educational platform including Assessment Bank, Digital Library, and Games.",
        "Maintained My-HCMS: A human capital management system handling reports, leave, tasks, and job hierarchy.",
        "Provided continuous maintenance and enhancement for digital educational tools."
      ]
    },
    {
      title: "Software Tester",
      company: "Civil Soft",
      period: "Feb 2022 – May 2022",
      type: "Full-time",
      location: "Alexandria, Egypt",
      technologies: [],
      description: "Performed software testing and validation for enterprise applications.",
      responsibilities: [
        "Executed test cases and documented results.",
        "Worked closely with the dev team to report and verify bugs."
      ]
    },
    {
      title: "IT Help Desk",
      company: "GIECO",
      period: "Dec 2020 – Aug 2021",
      type: "Full-time",
      location: "Cairo, Egypt",
      technologies: [],
      description: "Provided technical support and IT services to internal teams.",
      responsibilities: [
        "Assisted users with hardware/software issues.",
        "Monitored system health and network connectivity."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey and contributions</p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Building className="w-4 h-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col items-start lg:items-end text-sm text-muted-foreground">
                  <div className="flex items-center gap-1 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    <Clock className="w-4 h-4" />
                    <span>{exp.type}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              {exp.responsibilities.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-1">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="inline-block w-2 h-2 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceNew;
