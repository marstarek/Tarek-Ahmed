import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, Download } from 'lucide-react';

const Certificates = () => {
  const certificateCategories = [
    {
      title: "Frontend Development",
      count: 8,
      description: "React, JavaScript, HTML5, CSS3, and modern frontend frameworks"
    },
    {
      title: "Programming Languages",
      count: 6,
      description: "JavaScript, TypeScript, PHP, and programming fundamentals"
    },
    {
      title: "Web Technologies",
      count: 5,
      description: "Node.js, MongoDB, Firebase, and backend technologies"
    },
    {
      title: "Design & UX",
      count: 4,
      description: "Adobe XD, Photoshop, UI/UX design principles"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Certificates & Achievements
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Professional certifications and continuous learning achievements
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certificateCategories.map((category, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 p-3 bg-sky-500/10 rounded-full border border-sky-500/20">
                  <Award className="w-6 h-6 text-sky-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.title}</h3>
                <div className="text-2xl font-bold text-sky-300 mb-2">{category.count}+</div>
                <p className="text-slate-300 text-sm">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block bg-white/5 backdrop-blur-lg border-white/10">
            <CardContent className="p-8">
              <Award className="w-16 h-16 text-sky-300 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">
                25+ Professional Certificates
              </h3>
              <p className="text-slate-300 mb-6 max-w-md">
                Continuously updating skills through professional courses and certifications 
                in frontend development, programming languages, and modern web technologies.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://jealous-beef.surge.sh/files/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certificates;