import React from 'react';

const SkillsNew = () => {
  const frontendSkills = [
    { name: 'HTML', iconPath: './images/skills/html.svg' },
    { name: 'CSS', iconPath: './images/skills/css.png' },
    { name: 'JavaScript', iconPath: './images/skills/js.svg' },
    { name: 'jQuery', iconPath: './images/skills/jquery.png' },
    { name: 'Bootstrap', iconPath: './images/skills/Bootstrap_logo.svg.png' },
    { name: 'Sass', iconPath: './images/skills/sass.png' },
    { name: 'Tailwind CSS', iconPath: './images/skills/tailwind-css.svg' },
    { name: 'React', iconPath: './images/skills/react.png' },
    { name: 'Redux', iconPath: './images/skills/redux.svg' },
    { name: 'TypeScript', iconPath: './images/skills/typescript.svg' },
    { name: 'Next.js', iconPath: './images/skills/nextjs.svg' },
    { name: 'Git', iconPath: './images/skills/git.svg' },
    { name: 'Firebase', iconPath: './images/skills/firebase.png' },
    { name: 'Axios', iconPath: './images/skills/axios.png' },
  ];

  const additionalSkills = [
    'REST APIs', 'Jest', 'Webpack', 'Vite', 'GSAP', 'vue.js',
    'Adobe XD', 'ESLint', 'Prettier', 'Socket.IO', 'Styled Components',
    'Framer Motion', 'Three.js', 'Chart.js', 'Vercel','prime React',
   'React Router', 'React Query',
    'Progressive Web Apps (PWA)', 
'Chart.js'
  ];

  const SkillCategory = ({ title, skills }: { title: string; skills: { name: string; iconPath: string }[] }) => (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-6 text-foreground">{title}</h3>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item flex flex-col items-center">
            <img
              src={skill.iconPath}
              alt={skill.name}
              className="w-10 h-10 mb-2 object-contain"
              loading="lazy"
            />
            <h4 className="text-sm font-medium text-foreground text-center">{skill.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        
        <SkillCategory title="Technologies and tools" skills={frontendSkills} />
        
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
