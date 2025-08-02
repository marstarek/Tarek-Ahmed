import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Front End Track",
      period: "Aug 2021 - Dec 2021",
      institution: "Information Technology Institute (ITI), Alexandria Branch",
      location: "Alexandria, Egypt",
      achievements: [
        "Graduated with a grade of Very Good.",
        "Graduation Project: “ITIian” – A social media app that provides a community including ITI graduates, students, and companies.",
        "Reference: https://github.com/marstarek/ITIian.git"
      ]
    },
    {
      degree: "Bachelor's Degree in Management Information Systems (MIS)",
      period: "Sep 2015 - Jun 2019",
      institution: "Alexandria University, Faculty of Commerce",
      location: "Alexandria, Egypt",
      achievements: [
        "Graduated with a grade of Very Good.",
        "Ranked seventh in the department.",
        "Graduation Project: “#shebak” – An Android app and web application that helps students obtain scholarships easily.",
        "Project Grade: Excellent"
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
