// Navbar.tsx
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useActiveSection } from '../hooks/useActiveSection';

const SECTION_IDS = ['home', 'projects', 'team', 'stats', 'contact'];

const navLinks = [
  {
    label: 'Accueil', href: '#home', section: 'home',
    activeColor: 'text-blue-600 dark:text-blue-400',
    hoverColor:  'hover:text-blue-600 dark:hover:text-blue-400',
    hoverRing:   'hover:ring-blue-600 dark:hover:ring-blue-400',
    activeRing:  'ring-blue-600 dark:ring-blue-400',
  },
  {
    label: 'Projets', href: '#projects', section: 'projects',
    activeColor: 'text-purple-600 dark:text-purple-400',
    hoverColor:  'hover:text-purple-600 dark:hover:text-purple-400',
    hoverRing:   'hover:ring-purple-600 dark:hover:ring-purple-400',
    activeRing:  'ring-purple-600 dark:ring-purple-400',
  },
  {
    label: 'Équipe', href: '#team', section: 'team',
    activeColor: 'text-green-600 dark:text-green-400',
    hoverColor:  'hover:text-green-600 dark:hover:text-green-400',
    hoverRing:   'hover:ring-green-600 dark:hover:ring-green-400',
    activeRing:  'ring-green-600 dark:ring-green-400',
  },
  {
    label: 'Stats', href: '#stats', section: 'stats',
    activeColor: 'text-red-600 dark:text-red-400',
    hoverColor:  'hover:text-red-600 dark:hover:text-red-400',
    hoverRing:   'hover:ring-red-600 dark:hover:ring-red-400',
    activeRing:  'ring-red-600 dark:ring-red-400',
  },
  {
    label: 'Contact', href: '#contact', section: 'contact',
    activeColor: 'text-yellow-600 dark:text-yellow-400',
    hoverColor:  'hover:text-yellow-600 dark:hover:text-yellow-400',
    hoverRing:   'hover:ring-yellow-500 dark:hover:ring-yellow-400',
    activeRing:  'ring-yellow-500 dark:ring-yellow-400',
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const isDarkMode =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDarkMode);
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    if (next) { localStorage.theme = 'dark'; document.documentElement.classList.add('dark'); }
    else       { localStorage.theme = 'light'; document.documentElement.classList.remove('dark'); }
  };

  // Gestion du clic sur un lien de section
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const sectionId = href.replace('#', '');

    if (isHome) {
      // Déjà sur la home : scroll doux vers la section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Sur une autre page : naviguer vers / puis scroller après le rendu
      navigate('/');
      // Petit délai pour laisser le temps au composant de se monter
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  const isActive = (link: typeof navLinks[0]) => isHome && activeSection === link.section;

  const linkClass = (link: typeof navLinks[0]) => {
    const active = isActive(link);
    return [
      'px-3 py-1 rounded transition-all duration-200 font-semibold text-lg ring-2',
      active
        ? `${link.activeColor} ${link.activeRing}`
        : `text-gray-700 dark:text-gray-300 ring-transparent ${link.hoverColor} ${link.hoverRing}`,
    ].join(' ');
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-4
        ${scrolled
          ? 'bg-white/90 dark:bg-black/70 shadow-lg backdrop-blur-md'
          : 'bg-white/60 dark:bg-black/30 backdrop-blur-sm'
        }
        text-gray-900 dark:text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        <div className="flex items-center space-x-3">
          <img src="/img/eclairmulticolor.png" alt="Logo Power Rangers" className="h-8 w-8 object-contain" />
        </div>

        <ul className="hidden md:flex space-x-10 justify-center flex-grow">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={linkClass(link)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="hidden md:inline-block p-2 rounded hover:bg-gray-200/50 dark:hover:bg-white/10 transition-all duration-300"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              <svg className="h-6 w-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <ul className="md:hidden px-4 pt-4 pb-6 flex flex-col space-y-4 text-lg font-semibold
                       bg-white/95 dark:bg-black/90 backdrop-blur">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block ${link.hoverColor} transition`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded hover:bg-gray-200/50 dark:hover:bg-white/10 transition"
            >
              {darkMode ? '🌙 Mode sombre' : '☀️ Mode clair'}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
