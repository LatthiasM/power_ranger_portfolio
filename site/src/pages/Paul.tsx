// Paul.tsx
import MemberPage from '../components/MemberPage';

export default function Paul() {
  return (
    <MemberPage
      name="Paul"
      rangerLabel="Power Ranger Bleu"
      photo="/img/paul_cv.png"
      bio="Étudiant en Master MIASHS ICE-LD à l'UT2J, passionné par la data, le développement et l'UX design. Fan de mangas, de sport et de jeux vidéo, j'aime allier créativité et efficacité dans mes projets."
      cvHref="/cv/cv_canva.pdf"
      email="paul.crosnier@etu.univ-tlse2.fr"
      linkedin="https://www.linkedin.com/in/paul-crosnier-2a0388283/"
      skills={[
        { icon: "💻", title: "Développement Web", items: "HTML, CSS, JavaScript, React" },
        { icon: "📊", title: "Analyse de Données", items: "Python (Pandas, Numpy), SQL" },
        { icon: "🛠️", title: "Outils", items: "Git, Figma, Power BI" },
        { icon: "🎨", title: "UI/UX Design", items: "Accessibilité, Design Thinking" },
      ]}
      experiences={[
        { period: "2023 – 2025", title: "Master MIASHS ICE-LD – UT2J", subtitle: "Ingénierie Continue pour les Écosystèmes Logiciels et Données" },
        { period: "2020 – 2023", title: "Licence MIASHS – UT2J", subtitle: "Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales" },
        { period: "2017 – 2020", title: "Baccalauréat Scientifique – Spécialité SVT" },
      ]}
      hobbies={[
        { icon: "🏉", label: "Sports : Rugby, Foot, Ping-Pong, Tennis, Badminton" },
        { icon: "🎮", label: "Jeux Vidéo" },
        { icon: "📚", label: "Manga : Berserk, Vagabond" },
      ]}
      theme={{
        border: "border-blue-300",
        nameColor: "text-blue-900",
        cvBg: "bg-blue-200 hover:bg-blue-300",
        accent: "text-blue-600",
        dot: "bg-blue-500",
        sectionTitle: "text-blue-700 dark:text-blue-400",
      }}
    />
  );
}
