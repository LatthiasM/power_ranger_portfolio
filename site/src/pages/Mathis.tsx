// Mathis.tsx
export default function Mathis() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <section className="bg-white bg-opacity-80 rounded-xl shadow-xl p-6 my-10">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Mathis - Power Ranger Rouge</h1>
        <p className="text-md leading-relaxed">
          En mission comme un Power Ranger du code 💻🔧, je mène des projets de développement de A à Z pour une entreprise néerlandaise.
          Fort d’un parcours universitaire exigeant, je combine rigueur académique et pratique professionnelle pour livrer des solutions robustes et innovantes.
        </p>
      </section>

      <section className="bg-white bg-opacity-80 rounded-xl shadow-xl p-6 my-10">
        <h2 className="text-2xl font-bold text-red-600 mb-4">🧠 Compétences clés</h2>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
          <ul className="list-disc list-inside">
            <li>Java, C++, JavaScript, Python, Haskell</li>
            <li>HTML, CSS, React</li>
            <li>Optimisation SQL & gestion de bases</li>
            <li>Cycle complet de développement</li>
          </ul>
          <ul className="list-disc list-inside">
            <li>Modélisation des processus métier</li>
            <li>Rédaction de documentation technique</li>
            <li>Coordination de projets</li>
            <li>Communication professionnelle en anglais (C1)</li>
          </ul>
        </div>
      </section>

      <section className="bg-white bg-opacity-80 rounded-xl shadow-xl p-6 my-10">
        <h2 className="text-2xl font-bold text-red-600 mb-4">📜 Parcours</h2>
        <ol className="relative border-l border-gray-300 ml-4">
          <li className="mb-4 ml-4">
            <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -left-1.5"></div>
            <p className="font-semibold">Depuis oct. 2023 - SemWare</p>
            <p className="text-sm text-gray-700">Software Development Engineer en alternance</p>
          </li>
          <li className="mb-4 ml-4">
            <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -left-1.5"></div>
            <p className="font-semibold">2024-2026 - Master ICE-LD</p>
            <p className="text-sm text-gray-700">Université Toulouse - Jean Jaurès</p>
          </li>
          <li className="mb-4 ml-4">
            <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -left-1.5"></div>
            <p className="font-semibold">2021-2024 - Licence MIASHS</p>
            <p className="text-sm text-gray-700">Université Toulouse - Jean Jaurès</p>
          </li>
          <li className="mb-4 ml-4">
            <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -left-1.5"></div>
            <p className="font-semibold">TOEIC 2026</p>
            <p className="text-sm text-gray-700">Anglais C1</p>
          </li>
        </ol>
      </section>

      <section className="flex justify-center mt-6">
        <a href="https://www.linkedin.com/in/mathis-dugue-0494a61b0/" target="_blank"
          className="flex items-center space-x-3 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.3h.1c.7-1.3 2.4-2.7 5-2.7 5.4 0 6.4 3.5 6.4 8v9.4H18V17c0-2.4 0-5.5-3.3-5.5-3.3 0-3.8 2.6-3.8 5.3v7H7.5V8z"/>
          </svg>
          <span className="font-semibold">Mon LinkedIn</span>
        </a>
      </section>

      <div className="flex justify-center items-center my-10">
        <a href="/cv/Cv_Mathis_2025.pdf" download className="bg-red-600 text-white px-6 py-4 rounded-xl shadow-lg hover:bg-red-700 transition">
          📄 Télécharger mon CV
        </a>
      </div>
    </div>
  );
}
