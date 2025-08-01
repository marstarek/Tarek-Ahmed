import React from 'react';
import { Calendar, MapPin, Clock, Building } from 'lucide-react';

const ExperienceNew = () => {
  const experiences = [
    {
      title: "Frontend Instructor",
      company: "EraaSoft",
      period: "March 2023 - July 2024",
      type: "Part-time",
      location: "Hybrid (Cairo, Egypt)",
      technologies: ["HTML & CSS", "JavaScript", "Bootstrap", "React.js", "Redux", "Git & GitHub", "Figma"],
      description: "Led frontend development training for aspiring developers, focusing on practical skills and real-world applications.",
      responsibilities: [
        "Conduct two weekly online meetings with each student group",
        "Equip students with the necessary skills for frontend developer roles",
        "Convene in-person in Cairo for semi-final and graduation project discussions",
        "Provide feedback and engage in discourse with the students"
      ]
    },
    {
      title: "Mid-Level Frontend Developer",
      company: "Valinteca",
      period: "April 2022 - July 2024",
      type: "Full-time",
      location: "Remote (Dubai, UAE)",
      technologies: ["HTML & CSS", "JavaScript", "Bootstrap", "Sass", "jQuery", "Gulp.js", "React.js", "Git & GitHub", "Figma", "ClickUp", "CI/CD", "Twig.js", "Blade Templating"],
      description: "Developed and maintained web applications with a focus on performance and user experience, collaborating with cross-functional teams.",
      responsibilities: [
        "Mentor and manage a group of junior and intern frontend developers",
        "Design and implement user interfaces using React.js and JavaScript",
        "Participate in code reviews and refactoring to maintain clean and reusable code",
        "Optimize performance and ensure cross-browser compatibility",
        "Collaborate with backend developers to integrate APIs",
        "Maintain legacy code and implement new features",
        "Work closely with the design team to ensure UI/UX consistency",
        "Contribute to the development of internal tools and libraries"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Orizon PR & Marketing",
      period: "January 2023 - July 2023",
      type: "Freelance",
      location: "Remote (Doha, Qatar)",
      technologies: ["HTML & CSS", "JavaScript", "Tailwind CSS", "React.js", "Redux", "Next.js", "Git & GitHub", "Figma", "Trello"],
      description: "Developed responsive and user-friendly web applications, focusing on E-commerce solutions and landing pages.",
      responsibilities: [
        "Partner with a cross-functional team to develop a range of notable projects",
        "Build and maintain E-commerce websites and landing pages",
        "Contribute to project planning, design discussions and time estimation"
      ]
    },
    {
      title: "React JS Developer",
      company: "Across The Globe (ATG)",
      period: "April 2022 - May 2022",
      type: "Internship",
      location: "Remote (Bengaluru, India)",
      technologies: ["HTML & CSS", "JavaScript", "React.js", "Redux", "React Native", "Git & GitHub", "Figma"],
      description: "Gained hands-on experience in developing web applications using React.js and contributed to various projects.",
      responsibilities: [
        "Collaborate with multinational teams to build web applications with React.js",
        "Fix non-urgent bugs in mobile applications built with React Native and Expo",
        "Contribute to the development of a simpler websites built with JavaScript"
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
              
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceNew;