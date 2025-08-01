import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Applied Science in Physics",
      period: "2019 - 2023",
      institution: "Kafr El-Sheikh University",
      location: "Kafr El-Sheikh, Egypt",
      achievements: [
        "Our graduation project focuses on the development of a laser-controlled alert circuit, and studying some of its applications, including security systems, and measuring the level of wheat stored in silos, and by adjusting the sensitivity of the device to detect the absence of natural light, it can be used to turn on the street lamps automatically when it becomes dark outside."
      ]
    },
    {
      degree: "Specialization Diploma in Software Engineering",
      period: "2024 - 2025",
      institution: "Coursera",
      location: "Online",
      achievements: [
        "IBM's Applied Software Engineering Fundamentals - Specialization",
        "The Hong Kong University of Science and Technology's Software Engineering - Specialization",
        "IBM's Introduction to DevOps - Course"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container">
        <h2 className="section-title">Education & Certificates</h2>
        <p className="section-subtitle">My academic achievements</p>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="experience-card">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <GraduationCap className="w-4 h-4" />
                    <span className="font-medium">{edu.institution}</span>
                  </div>
                </div>
                <div className="flex flex-col items-start lg:items-end text-sm text-muted-foreground">
                  <div className="flex items-center gap-1 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="inline-block w-1 h-1 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {achievement}
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

export default Education;