import { useState, useEffect } from "react";
import ColoredSection from "./ColoredSection";
import { ButtonLeft, ButtonRight } from "./ArrowButton";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Power Rangers",
      description: "Un site vitrine original inspiré des Power Rangers pour présenter notre équipe et nos projets.",
      image: "/img/project1.png",
    },
    {
      title: "Asso 404",
      description: "Site officiel de l’association 404 MIASHS avec blog, infos et projets étudiants.",
      image: "/img/project2.png",
    },
    {
      title: "Projet mystère",
      description: "Un nouveau projet arrive bientôt... restez connectés !",
      image: "/img/project3.png",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const project = projects[index];

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setIsFading(false);
    }, 600);
  };

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      setIsFading(false);
    }, 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ColoredSection
      id="projects"
      colorClass="bg-purple-500 py-24 min-h-[80vh] flex flex-col justify-center items-center mb-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Nos Projets</h2>

      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className={`relative overflow-hidden rounded-lg shadow-xl bg-black/30 backdrop-blur-md p-6 transition-opacity duration-700 ease-in-out ${isFading ? "opacity-0" : "opacity-100"}`}>
          <img
            src={project.image}
            alt={project.title}
            className="mx-auto rounded mb-4 max-h-64 object-cover"
          />
          <h3 className="text-xl font-semibold text-white/80">{project.title}</h3>
          <p className="text-sm mt-2 text-white/80">{project.description}</p>
        </div>

        <div className="flex justify-center gap-6">
          <ButtonRight onClick={handlePrev} />
          <ButtonLeft onClick={handleNext} />
          
          
          
        </div>
      </div>
    </ColoredSection>
  );
}
