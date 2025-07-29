// Paul.tsx
export default function Paul() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <section className="flex flex-col md:flex-row items-center bg-white bg-opacity-60 backdrop-blur-md p-6 rounded-2xl shadow-lg">
        <img src="/img/paul_cv.png" alt="Paul - Power Ranger Beige" className="w-40 h-40 rounded-full border-4 border-yellow-300 shadow-md mb-4 md:mb-0 md:mr-6" />
        <div>
          <h1 className="text-4xl font-extrabold text-yellow-900 mb-2">Paul - Power Ranger Beige 🏳️</h1>
          <p className="text-lg leading-relaxed">
            Étudiant en Master MIASHS ICE-LD à l’UT2J, passionné par la data, le développement et l’UX design. Fan de mangas,
            de sport et de jeux vidéo, j’aime allier créativité et efficacité dans mes projets.
          </p>
          <a
            href="/cv/cv_canva.pdf"
            download
            className="inline-block mt-4 px-5 py-2 bg-yellow-200 text-gray-900 font-semibold rounded-xl shadow hover:bg-yellow-300 transition"
          >
            📄 Télécharger mon CV
          </a>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">🧠 Mes Super-Pouvoirs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">💻 Développement Web</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">📊 Analyse de Données</h3>
            <p>Python (Pandas, Numpy), SQL</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">🛠️ Outils</h3>
            <p>Git, Figma, Power BI</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">🎨 UI/UX Design</h3>
            <p>Accessibilité, Design Thinking</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-2">🎓 Mon Parcours</h2>
        <div className="space-y-2">
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition">
            <p className="text-lg font-semibold">2023 – 2025</p>
            <p>Master MIASHS ICE-LD – UT2J</p>
            <p className="text-sm text-gray-600">Ingénierie Continue pour les Écosystèmes Logiciels et Données</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition">
            <p className="text-lg font-semibold">2020 – 2023</p>
            <p>Licence MIASHS – UT2J</p>
            <p className="text-sm text-gray-600">Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition">
            <p className="text-lg font-semibold">2017 – 2020</p>
            <p>Baccalauréat Scientifique – Spécialité SVT</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-2">🎮 Hobbies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition flex items-center space-x-3">
            <span className="text-2xl">🏉</span>
            <p className="text-lg">Sports : Rugby, Foot, Ping-Pong, Tennis, Badminton</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition flex items-center space-x-3">
            <span className="text-2xl">🎮</span>
            <p className="text-lg">Jeux Vidéo</p>
          </div>
          <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition flex items-center space-x-3">
            <span className="text-2xl">📚</span>
            <p className="text-lg">Manga : <span className="italic">Berserk</span>, <span className="italic">Vagabond</span></p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-2">📬 Me Contacter</h2>
        <div className="bg-white bg-opacity-70 p-5 rounded-xl shadow hover:scale-105 transition">
          <div className="flex items-center space-x-3">
            <span className="text-xl">✉️</span>
            <a href="mailto:paul.crosnier@etu.univ-tlse2.fr" className="text-lg underline">paul.crosnier@etu.univ-tlse2.fr</a>
          </div>
          <div className="flex items-center space-x-3 mt-2">
            <span className="text-xl">🔗</span>
            <a href="https://www.linkedin.com/in/paul-crosnier-2a0388283/" className="text-lg underline">Mon LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}
