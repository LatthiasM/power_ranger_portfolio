// BackToTop.tsx
import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className={`fixed bottom-6 right-6 z-50 group transition-all duration-300
                     ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>

      {/* Tooltip */}
      <span className="absolute bottom-full right-0 mb-2 px-2 py-1 rounded text-xs font-medium
                       bg-gray-900 text-white dark:bg-white dark:text-gray-900
                       opacity-0 group-hover:opacity-100 transition-opacity duration-200
                       whitespace-nowrap pointer-events-none">
        Haut de page
      </span>

      <button
        onClick={scrollToTop}
        aria-label="Retour en haut de la page"
        className="w-11 h-11 rounded-full flex items-center justify-center
                   bg-indigo-600 hover:bg-indigo-500
                   dark:bg-indigo-500 dark:hover:bg-indigo-400
                   text-white
                   shadow-lg shadow-indigo-500/50 dark:shadow-indigo-400/50
                   border-2 border-white/30 dark:border-white/20
                   hover:scale-110 active:scale-95
                   transition-all duration-200
                   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
