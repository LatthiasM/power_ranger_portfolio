// src/components/ProjectsSection.tsx
import { useState, useRef } from 'react';
import ColoredSection from './ColoredSection';
import FadeInSection from './FadeInSection';
import { ButtonLeft, ButtonRight } from './ArrowButton';

const projectsData = [
  {
    title: "Duo Project",
    description: "Une application qui permet aux gens de pouvoir renseigner leurs histoires et de pouvoir continuer a l'écrire à deux.",
    imageUrl: "/img/coeur.jpg",
    link: "https://duoproject.netlify.app/",
    tech: ["React", "TypeScript", "Netlify"]
  },
  {
    title: "Rivality",
    description: "Une plateforme pour tracker ses performances sportives et les partager avec ses amis.",
    imageUrl: "/img/eclair.jpg",
    link: "https://rivality.netlify.app/",
    tech: ["React", "Tailwind CSS", "Netlify"]
  },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const transitioning = useRef(false);

  const navigate = (nextIndex: number) => {
    if (transitioning.current) return;
    transitioning.current = true;
    setVisible(false);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setVisible(true);
      transitioning.current = false;
    }, 300);
  };

  const goToPrevious = () => {
    navigate(currentIndex === 0 ? projectsData.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    navigate(currentIndex === projectsData.length - 1 ? 0 : currentIndex + 1);
  };

  const project = projectsData[currentIndex];
  if (!project) return null;

  return (
    <ColoredSection
      id="projects"
      colorClass="bg-purple-500"
      className="py-20 px-6 text-center"
    >
      <FadeInSection>
        <h2 className="text-4xl font-bold mb-6">Projets</h2>

        <div className="relative max-w-5xl mx-auto">

          {/* Bouton Gauche */}
          <div className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <ButtonLeft onClick={goToPrevious} />
          </div>

          {/* Encart du projet */}
          <div
            className="max-w-4xl mx-auto bg-gray-200/70 dark:bg-gray-800/50 backdrop-blur-sm
                       rounded-lg shadow-xl overflow-hidden p-8
                       transition-all duration-300 ease-in-out"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(12px)' }}
          >
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-auto object-cover rounded-lg shadow-lg aspect-video"
                  />
                </div>

                {/* Infos */}
                <div className="w-full md:w-1/2 text-left">
                  <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-100
                                   text-xs font-semibold px-2.5 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-600 dark:bg-purple-500 text-white py-2 px-5 rounded font-semibold
                               hover:bg-purple-500 dark:hover:bg-purple-400 transition
                               focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
                  >
                    Voir le projet
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bouton Droit */}
          <div className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <ButtonRight onClick={goToNext} />
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {projectsData.map((_, index) => (
            <button
              key={index}
              onClick={() => navigate(index)}
              aria-label={`Aller au projet ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-purple-600 dark:bg-purple-400 scale-125'
                  : 'bg-gray-400 dark:bg-gray-600 hover:bg-purple-400'
              }`}
            />
          ))}
        </div>

      </FadeInSection>
    </ColoredSection>
  );
}
