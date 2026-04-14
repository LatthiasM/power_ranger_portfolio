// Hero.tsx
import { useEffect, useState } from "react";
import ColoredSection from "./ColoredSection";

const rangers = [
  { label: "Paul",     color: "bg-blue-600",   ring: "ring-blue-400"   },
  { label: "Roxana",   color: "bg-purple-600", ring: "ring-purple-400" },
  { label: "Mathis",   color: "bg-red-600",    ring: "ring-red-400"    },
  { label: "Matthias", color: "bg-green-600",  ring: "ring-green-400"  },
  { label: "Steven",   color: "bg-yellow-500", ring: "ring-yellow-400" },
];

const words = [
  { text: "Applications", color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-900/40" },
  { text: "Sites Web",    color: "text-green-600 dark:text-green-400",   bg: "bg-green-100 dark:bg-green-900/40" },
  { text: "Dashboards",  color: "text-yellow-600 dark:text-yellow-400", bg: "bg-yellow-100 dark:bg-yellow-900/40" },
  { text: "Scripts",     color: "text-blue-600 dark:text-blue-400",     bg: "bg-blue-100 dark:bg-blue-900/40" },
  { text: "Bots",        color: "text-red-600 dark:text-red-400",       bg: "bg-red-100 dark:bg-red-900/40" },
];


export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;

    if (typing) {
      if (letterIndex < words[index].text.length) {
        interval = setTimeout(() => {
          setDisplayText((prev) => prev + words[index].text[letterIndex]);
          setLetterIndex((prev) => prev + 1);
        }, 100);
      } else {
        interval = setTimeout(() => setTyping(false), 2500);
      }
    } else {
      if (letterIndex > 0) {
        interval = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setLetterIndex((prev) => prev - 1);
        }, 50);
      } else {
        setTyping(true);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(interval);
  }, [typing, letterIndex, index]);

  return (
    <ColoredSection
      id="home"
      colorClass="bg-blue-500"
      className="min-h-screen py-24"
    >
      <div className="max-w-3xl">

        {/* Texte */}
        <div className="text-left">

          {/* Badge équipe */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6
                           bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/20">
            ⚡ Une équipe de 5 Power Rangers
          </span>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Des solutions{" "}
            <span className="text-indigo-600 dark:text-indigo-400">sur-mesure</span>
            <br />
            pour vos projets{" "}
            <span className={`${words[index].color} font-bold transition-colors duration-300`}>
              {displayText}
            </span>
            <span className={`${words[index].color} animate-pulse`}>|</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-8 leading-relaxed">
            Cinq développeurs passionnés, cinq expertises complémentaires.
            Ensemble, nous concevons des solutions numériques qui font la différence.
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500
                         dark:bg-indigo-500 dark:hover:bg-indigo-400 transition shadow-lg shadow-indigo-500/30"
            >
              Voir nos projets →
            </a>
            <a
              href="#team"
              className="px-6 py-3 rounded-xl font-semibold
                         bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white
                         hover:bg-gray-200 dark:hover:bg-white/20 transition border border-gray-200 dark:border-white/20"
            >
              Notre équipe
            </a>
          </div>

          {/* Badges Rangers */}
          <div className="flex flex-wrap gap-3">
            {rangers.map((r) => (
              <a
                key={r.label}
                href="#team"
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-white
                            ${r.color} ring-2 ${r.ring} hover:scale-105 transition-transform`}
              >
                <span className="w-2 h-2 rounded-full bg-white/70" />
                {r.label}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Scroll-down indicator */}
      <a
        href="#projects"
        aria-label="Défiler vers les projets"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1
                   text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400
                   transition-colors duration-200 group"
      >
        <span className="text-xs font-medium tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
          Découvrir
        </span>
        <svg
          className="w-6 h-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </ColoredSection>
  );
}