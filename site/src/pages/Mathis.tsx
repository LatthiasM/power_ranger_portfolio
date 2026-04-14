// Mathis.tsx
import MemberPage from '../components/MemberPage';

export default function Mathis() {
  return (
    <MemberPage
      name="Mathis"
      rangerLabel="Power Ranger Rouge"
      photo="/img/mathis.jpg"
      bio="En mission comme un Power Ranger du code, je mène des projets de développement de A à Z pour une entreprise néerlandaise. Fort d'un parcours universitaire exigeant, je combine rigueur académique et pratique professionnelle pour livrer des solutions robustes et innovantes."
      cvHref="/cv/Cv_Mathis_2025.pdf"
      email="mathis.dugue@etu.univ-tlse2.fr"
      linkedin="https://www.linkedin.com/in/mathis-dugue-0494a61b0/"
      skills={[
        { icon: "💻", title: "Développement", items: "Java, C++, JavaScript, Python, Haskell, HTML, CSS, React" },
        { icon: "🗄️", title: "Bases de données", items: "Optimisation SQL, gestion de bases, cycle complet de développement" },
        { icon: "📋", title: "Gestion de Projet", items: "Modélisation des processus métier, coordination de projets, documentation technique" },
        { icon: "🌍", title: "Langues", items: "Communication professionnelle en anglais (C1 – TOEIC 2026)" },
      ]}
      experiences={[
        { period: "Depuis oct. 2023", title: "Software Development Engineer en alternance – SemWare" },
        { period: "2024 – 2026", title: "Master ICE-LD – Université Toulouse Jean Jaurès" },
        { period: "2021 – 2024", title: "Licence MIASHS – Université Toulouse Jean Jaurès" },
      ]}
      hobbies={[
        { icon: "🎮", label: "Jeux Vidéo" },
        { icon: "⚽", label: "Sports collectifs" },
      ]}
      theme={{
        border: "border-red-300",
        nameColor: "text-red-900",
        cvBg: "bg-red-200 hover:bg-red-300",
        accent: "text-red-600",
        dot: "bg-red-500",
        sectionTitle: "text-red-700 dark:text-red-400",
      }}
    />
  );
}
