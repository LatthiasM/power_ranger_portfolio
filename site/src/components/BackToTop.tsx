// BackToTop.tsx
import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Retour en haut"
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full
                  bg-indigo-600 hover:bg-indigo-500
                  dark:bg-indigo-500 dark:hover:bg-indigo-400
                  text-white shadow-lg shadow-indigo-500/40 dark:shadow-indigo-400/40
                  border border-indigo-400 dark:border-indigo-300
                  flex items-center justify-center
                  transition-all duration-300
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
