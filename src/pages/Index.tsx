
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SkillsNew from '@/components/SkillsNew';
import ExperienceNew from '@/components/ExperienceNew';
import Education from '@/components/Education';
import ProjectsNew from '@/components/ProjectsNew';
import OpenSource from '@/components/OpenSource';
import ConnectNew from '@/components/ConnectNew';
import ProjectsSection from '@/components/ProjectsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <SkillsNew />
        <ExperienceNew />
        <Education />
        <ProjectsNew />
        <ProjectsSection />
        <ConnectNew />
      </main>
    </div>
  );
};

export default Index;
