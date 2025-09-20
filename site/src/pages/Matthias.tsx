// Matthias.tsx
export default function Matthias() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <section className="flex flex-col md:flex-row items-center bg-white bg-opacity-60 backdrop-blur-md p-6 rounded-2xl shadow-lg">
        <img src="/img/matthias.jfif" alt="Matthias - Power Ranger Vert" className="w-40 h-40 rounded-full border-4 border-green-300 shadow-md mb-4 md:mb-0 md:mr-6" />
        <div>
          <h1 className="text-4xl font-extrabold text-green-900 mb-2">Matthias - Power Ranger Vert</h1>
          <p className="text-lg leading-relaxed text-white">
            Étudiant en Master MIASHS ICE-LD et alternant chez Enedis, je développe des solutions mêlant automatisation, traitement de données et interfaces web. Curieux, polyvalent et orienté résultat, je valorise chaque compétence au service d’un objectif concret.
          </p>
          <a href="../assets/cv/cv_matt.pdf" download className="inline-block mt-4 px-5 py-2 bg-green-200 text-gray-900 font-semibold rounded-xl shadow hover:bg-green-300 transition">📄 Télécharger mon CV</a>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-white">🧠 Mes Super-Pouvoirs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white bg-opacity-70 p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">💻 Développement</h3>
            <p>HTML/CSS, JavaScript, Node.js, JAVA, SQL, Python, MongoDB, React.js, R, RStudio, Shell</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">📊 Data</h3>
            <p>Python (Pandas, NumPy), SQL, R, Power BI</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">🛠️ Outils</h3>
            <p>Git, Docker, Kubernetes, Figma, Shell, ChatGPT</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">👥 Gestion de Projet</h3>
            <p>Trello, Teams, Git, Agile</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-white">🎓 Mon Parcours</h2>
        <div className="space-y-2">
          <div className="bg-white bg-opacity-70 p-5 rounded-xl">
            <p className="text-lg font-semibold">2024 – 2026</p>
            <p>Master ICE-LD – Université Toulouse Jean Jaurès</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl">
            <p className="text-lg font-semibold">2022 – 2024</p>
            <p>Licence MIASHS – UT2J</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl">
            <p className="text-lg font-semibold">2020 – 2022</p>
            <p>DUT – UT2J</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl">
            <p className="text-lg font-semibold">2017 – 2020</p>
            <p>Baccalauréat Scientifique Sciences de l'Ingénieur</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-white">🎮 Loisirs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-70 p-5 rounded-xl flex items-center space-x-3">
            <span className="text-2xl">🏊‍♀️</span>
            <p className="text-lg">Sports : Natation/Sauvetage, Volley</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl flex items-center space-x-3">
            <span className="text-2xl">🎮</span>
            <p className="text-lg">Jeux Vidéos, Manga, Comics, Culture Pop</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-2 text-white">📬 Me Contacter</h2>
        <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition">
          <div className="flex items-center space-x-3">
            <span className="text-xl">✉️</span>
            <a href="mailto:matthias.labit@gmail.com" className="text-lg underline text-green-600">matthias.labit@gmail.com</a>
          </div>
          <div className="flex items-center space-x-3 mt-2">
            <span className="text-xl">🔗</span>
            <a href="https://www.linkedin.com/in/matthias-labit-016496224/" target="_blank" className="text-lg underline text-green-600">Mon LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}