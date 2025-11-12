// Navbar.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // ... (votre logique useEffect et toggleDarkMode reste la même) ...
  useEffect(() => {
    const isDarkMode = 
      localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && 
       window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    }
  };


  return (
    // 💡 MODIFIÉ : Fond clair/sombre et texte clair/sombre
    <nav className="fixed top-0 w-full z-50 backdrop-blur 
                   bg-white/80 dark:bg-black/50 
                   text-gray-900 dark:text-white 
                   py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* ... (Logo inchangé) ... */}
        <div className="flex items-center space-x-3">
          <img src="/vite.svg" alt="Logo Power Rangers" className="h-8 w-8" />
        </div>

        {/* Menu principal (desktop) */}
        {/* 💡 MODIFIÉ : Couleurs de hover pour clair/sombre */}
        <ul className="hidden md:flex space-x-10 text-lg font-semibold justify-center flex-grow">
          <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 hover:ring-2 hover:ring-gray-800 dark:hover:ring-white hover:rounded px-3 py-1 transition-all duration-200">Accueil</Link></li>
          <li><a href="#projects" className="hover:text-purple-600 dark:hover:text-purple-400 hover:ring-2 hover:ring-gray-800 dark:hover:ring-white hover:rounded px-3 py-1 transition-all duration-200">Projets</a></li>
          <li><a href="#team" className="hover:text-green-600 dark:hover:text-green-400 hover:ring-2 hover:ring-gray-800 dark:hover:ring-white hover:rounded px-3 py-1 transition-all duration-200">Équipe</a></li>
          <li><a href="#stats" className="hover:text-red-600 dark:hover:text-red-400 hover:ring-2 hover:ring-gray-800 dark:hover:ring-white hover:rounded px-3 py-1 transition-all duration-200">Stats</a></li>
          <li><a href="#contact" className="hover:text-yellow-600 dark:hover:text-yellow-400 hover:ring-2 hover:ring-gray-800 dark:hover:ring-white hover:rounded px-3 py-1 transition-all duration-200">Contact</a></li>
        </ul>

        {/* Boutons à droite */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            // 💡 MODIFIÉ : Fond de hover clair/sombre
            className="hidden md:inline-block p-2 rounded hover:bg-gray-200/50 dark:hover:bg-white/10 transition-all duration-500"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>

          {/* Burger menu (mobile) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              {/* 💡 MODIFIÉ : L'icône doit être sombre en mode clair */}
              <svg className="h-6 w-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile (toggle) */}
      {menuOpen && (
        // 💡 MODIFIÉ : Fond clair/sombre
        <ul className="md:hidden px-4 pt-4 pb-6 flex flex-col space-y-4 text-lg font-semibold 
                     bg-white/95 dark:bg-black/90 backdrop-blur">
          {/* ... (Liens mobiles à mettre à jour de la même manière si nécessaire) ... */}
          <li>
            <button onClick={toggleDarkMode} className="p-2 rounded hover:bg-gray-200/50 dark:hover:bg-white/10 transition">
              {darkMode ? '🌙 Mode sombre' : '☀️ Mode clair'}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}