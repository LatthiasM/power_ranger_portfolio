// Home.tsx
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import TeamGallery from '../components/TeamGallery';
import { StatsSection } from '../components/StatsSection';
import ProjectsSection from '../components/ProjectsSection';
import FadeInSection from '../components/FadeInSection';

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">

      <FadeInSection>
        <Hero />
      </FadeInSection>

      <FadeInSection>
        <ProjectsSection />
      </FadeInSection>
            
      <FadeInSection>
        <TeamGallery />
      </FadeInSection>
            
      <FadeInSection>
        <StatsSection />
      </FadeInSection>
      

      <div className="bg-black/20 backdrop-blur-sm">
        <Contact />
      </div>
    </div>
    
  );
}
