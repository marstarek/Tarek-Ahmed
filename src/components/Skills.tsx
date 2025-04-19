
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const skillsData = {
  "Frontend": ["React.js", "Next.js", "HTML", "CSS", "JavaScript/ECMAScript", "Tailwind", "Bootstrap"],
  "Tools & Others": ["Git", "Firebase", "Postman", "Adobe XD", "Adobe Photoshop"],
  "Testing": ["Unit Testing", "TypeScript"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Skills & Technologies
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          A curated list of my technical skills and expertise
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <Card key={category} className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-colors duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-sky-300">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20"
                    >
                      {skill}
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

export default Skills;
