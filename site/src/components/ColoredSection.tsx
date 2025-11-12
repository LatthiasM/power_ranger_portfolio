// ColoredSection.tsx
import type { ReactNode } from 'react';

interface ColoredSectionProps {
  id: string;
  colorClass: string; // ex: bg-blue-500
  className?: string;
  children: ReactNode;
}

export default function ColoredSection({
  id,
  colorClass,
  className = '',
  children,
}: ColoredSectionProps) {
  return (
    <section
      id={id}
      // 💡 MODIFIÉ : "text-white" remplacé par "text-gray-900 dark:text-white"
      className={`relative flex items-center justify-center text-gray-900 dark:text-white bg-transparent min-h-screen ${className}`}
    >
      {/* Barre colorée à gauche */}
      <div className={`absolute left-0 top-0 h-full w-5 rounded-r-lg ${colorClass}`} />

      {/* Contenu centré avec marges internes */}
      <div className="w-full px-6 py-24 max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}