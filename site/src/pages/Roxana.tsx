// Roxana.tsx
import MemberPage from '../components/MemberPage';

export default function Roxana() {
  return (
    <MemberPage
      name="Roxana"
      rangerLabel="Power Ranger Mauve"
      photo="/img/rox.png"
      bio="Étudiante en Master ICE-LD à l'Université Toulouse Jean Jaurès, passionnée par la data, le développement et l'UX Design. Je me transforme en Power Ranger pour combattre les bugs et protéger les données. Mon arme ? Le code !"
      cvHref="/cv/cv_rox.pdf"
      email="roxana.grosfils@etu.univ-tlse2.fr"
      linkedin="https://fr.linkedin.com/in/roxana-grosfils-004580208/"
      skills={[
        { icon: "💻", title: "Développement Web", items: "HTML, CSS, JavaScript, React, Node.js, MongoDB" },
        { icon: "📊", title: "Analyse de Données", items: "Python (Pandas, Numpy), SQL, Power BI" },
        { icon: "🛠️", title: "Outils", items: "Git, Docker, Figma, VSCode" },
        { icon: "🎨", title: "UI/UX Design", items: "Accessibilité, Design Thinking, Prototypage" },
      ]}
      experiences={[
        { period: "2024 – 2026", title: "Master ICE-LD – Université Toulouse Jean Jaurès", subtitle: "Ingénierie Continue pour les Écosystèmes Logiciels et Données" },
        { period: "2021 – 2024", title: "Licence MIASHS – UT2J", subtitle: "Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales" },
        { period: "2017 – 2020", title: "Baccalauréat Scientifique – Spécialité ISN" },
      ]}
      hobbies={[
        { icon: "🏊‍♀️", label: "Sports : Natation, Escalade, Judo" },
        { icon: "🎮", label: "Jeux Vidéo" },
        { icon: "🎨", label: "Dessin Traditionnel et Digital" },
        { icon: "🎲", label: "Jeu de Rôle" },
      ]}
      theme={{
        border: "border-purple-300",
        nameColor: "text-purple-900",
        cvBg: "bg-purple-200 hover:bg-purple-300",
        accent: "text-purple-600",
        dot: "bg-purple-500",
        sectionTitle: "text-purple-700 dark:text-purple-400",
      }}
    />
  );
}
