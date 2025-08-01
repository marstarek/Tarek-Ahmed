import React from 'react';

const SkillsNew = () => {
  const frontendSkills = [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'jQuery', icon: '📚' },
    { name: 'Bootstrap', icon: '🎯' },
    { name: 'Sass', icon: '💄' },
    { name: 'Tailwind CSS', icon: '🌊' },
    { name: 'React', icon: '⚛️' },
    { name: 'Redux', icon: '🔄' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Next.js', icon: '▲' },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express.js', icon: '🚂' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Redis', icon: '🔴' },
    { name: 'Next.js', icon: '▲' },
  ];

  const devopsSkills = [
    { name: 'Git', icon: '🌳' },
    { name: 'CI/CD', icon: '🔄' },
    { name: 'Cloudflare', icon: '☁️' },
    { name: 'Serverless', icon: '⚡' },
    { name: 'Microfrontends', icon: '🧩' },
  ];

  const additionalSkills = [
    'REST APIs', 'GraphQL', 'Jest', 'Cypress', 'Webpack', 'Vite', 'Figma', 'Sanity',
    'MySQL', 'SQLite', 'Socket.IO', 'ElectronJS', 'Styled Components', 'Framer Motion',
    'GSAP', 'Three.js', 'D3.js', 'Chart.js', 'Deno', 'Deno Deploy', 'Vercel',
    'React Native', 'Expo'
  ];

  const SkillCategory = ({ title, skills }: { title: string; skills: { name: string; icon: string }[] }) => (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-6 text-foreground">{title}</h3>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="text-2xl mb-3">{skill.icon}</div>
            <h4 className="text-sm font-medium text-foreground">{skill.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies and tools I work with to bring ideas to life</p>
        
        <SkillCategory title="Front-End" skills={frontendSkills} />
        <SkillCategory title="Back-End" skills={backendSkills} />
        <SkillCategory title="DevOps" skills={devopsSkills} />
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Also experienced with</h3>
          <div className="flex flex-wrap gap-2">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-card border border-border rounded-md text-sm text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsNew;