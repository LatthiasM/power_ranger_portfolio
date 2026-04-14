// Matthias.tsx
import MemberPage from '../components/MemberPage';
import cvMatt from '../assets/cv/cv_matt.pdf';

export default function Matthias() {
  return (
    <MemberPage
      name="Matthias"
      rangerLabel="Power Ranger Vert"
      photo="/img/matthias.jfif"
      bio="Étudiant en Master MIASHS ICE-LD et alternant chez Enedis, je développe des solutions mêlant automatisation, traitement de données et interfaces web. Curieux, polyvalent et orienté résultat, je valorise chaque compétence au service d'un objectif concret."
      cvHref={cvMatt}
      email="matthias.labit@gmail.com"
      linkedin="https://www.linkedin.com/in/matthias-labit-016496224/"
      skills={[
        { icon: "💻", title: "Développement", items: "HTML/CSS, JavaScript, Node.js, JAVA, SQL, Python, MongoDB, React.js, R, RStudio, Shell" },
        { icon: "📊", title: "Data", items: "Python (Pandas, NumPy), SQL, R, Power BI" },
        { icon: "🛠️", title: "Outils", items: "Git, Docker, Kubernetes, Figma, Shell, ChatGPT" },
        { icon: "👥", title: "Gestion de Projet", items: "Trello, Teams, Git, Agile" },
      ]}
      experiences={[
        { period: "2024 – 2026", title: "Master ICE-LD – Université Toulouse Jean Jaurès" },
        { period: "2022 – 2024", title: "Licence MIASHS – UT2J" },
        { period: "2020 – 2022", title: "DUT – UT2J" },
        { period: "2017 – 2020", title: "Baccalauréat Scientifique Sciences de l'Ingénieur" },
      ]}
      hobbies={[
        { icon: "🏊‍♀️", label: "Sports : Natation/Sauvetage, Volley" },
        { icon: "🎮", label: "Jeux Vidéos, Manga, Comics, Culture Pop" },
      ]}
      theme={{
        border: "border-green-300",
        nameColor: "text-green-900",
        cvBg: "bg-green-200 hover:bg-green-300",
        accent: "text-green-600",
        dot: "bg-green-500",
        sectionTitle: "text-green-700 dark:text-green-400",
      }}
    />
  );
}
