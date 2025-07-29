// Roxana.tsx
export default function Roxana() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <section className="flex flex-col md:flex-row items-center bg-white bg-opacity-60 backdrop-blur-md p-6 rounded-2xl shadow-lg">
        <img src="/img/rox.png" alt="Roxana - Power Ranger Rose" className="w-40 h-40 rounded-full border-4 border-pink-300 shadow-md mb-4 md:mb-0 md:mr-6" />
        <div>
          <h1 className="text-4xl font-extrabold text-pink-900 mb-2">Roxana - Power Ranger Rose 💻🦸‍♀️</h1>
          <p className="text-lg leading-relaxed">
            Étudiante en Master ICE-LD à l’Université Toulouse Jean Jaurès, passionnée par la data, le développement et l’UX Design.
            Je me transforme en Power Ranger Rose pour combattre les bugs et protéger les données. Mon arme ? Le code !
          </p>
          <a
            href="/cv/cv_rox.pdf"
            download
            className="inline-block mt-4 px-5 py-2 bg-pink-200 text-gray-900 font-semibold rounded-xl shadow hover:bg-pink-300 transition"
          >
            📄 Télécharger mon CV
          </a>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-white">🧠 Mes Super-Pouvoirs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">💻 Développement Web</h3>
            <p>HTML, CSS, JavaScript, React, Node.js, MongoDB</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">📊 Analyse de Données</h3>
            <p>Python (Pandas, Numpy), SQL, Power BI</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">🛠️ Outils</h3>
            <p>Git, Docker, Figma, VSCode</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">🎨 UI/UX Design</h3>
            <p>Accessibilité, Design Thinking, Prototypage</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-white">🎓 Mon Parcours de Héroïne</h2>
        <div className="space-y-2">
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition">
            <p className="text-lg font-semibold">2024 – 2026</p>
            <p>Master ICE-LD – Université Toulouse Jean Jaurès</p>
            <p className="text-sm text-gray-600">Ingénierie Continue pour les Écosystèmes Logiciels et Données</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition">
            <p className="text-lg font-semibold">2021 – 2024</p>
            <p>Licence MIASHS – UT2J</p>
            <p className="text-sm text-gray-600">Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition">
            <p className="text-lg font-semibold">2017 – 2020</p>
            <p>Baccalauréat Scientifique – Spécialité ISN</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-white">🎮 Loisirs et Passion</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition flex items-center space-x-3">
            <span className="text-2xl">🏊‍♀️</span>
            <p className="text-lg">Sports : Natation, Escalade, Judo</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition flex items-center space-x-3">
            <span className="text-2xl">🎮</span>
            <p className="text-lg">Jeux Vidéo</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition flex items-center space-x-3">
            <span className="text-2xl">🎨</span>
            <p className="text-lg">Dessin Traditionnel et Digital</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition flex items-center space-x-3">
            <span className="text-2xl">🎲</span>
            <p className="text-lg">Jeu de Rôle</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-2 text-white">📬 Me Contacter</h2>
        <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition">
          <div className="flex items-center space-x-3">
            <span className="text-xl">✉️</span>
            <a href="mailto:roxana.grosfils@etu.univ-tlse2.fr" className="text-lg underline text-pink-600">roxana.grosfils@etu.univ-tlse2.fr</a>
          </div>
          <div className="flex items-center space-x-3 mt-2">
            <span className="text-xl">🔗</span>
            <a href="https://fr.linkedin.com/in/roxana-grosfils-004580208/" className="text-lg underline text-pink-600">Mon LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}
