
import React from 'react';

const skillsData = {
  "Frontend": ["React.js", "Next.js", "HTML", "CSS", "JavaScript/ECMAScript", "Tailwind", "Bootstrap"],
  "Tools & Others": ["Git", "Firebase", "Postman", "Adobe XD", "Adobe Photoshop"],
  "Testing": ["Unit Testing", "TypeScript"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container">
        <h2 className="section-title text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="card">
              <h3 className="text-lg font-semibold mb-4 text-sky-600">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="tech-badge">
                    {skill}
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

export default Skills;
