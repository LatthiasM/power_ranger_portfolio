// ColoredSection.tsx
import type { ReactNode } from 'react';

// Mapping colorClass → gradient subtil de fond
const gradientMap: Record<string, string> = {
  'bg-blue-500':   'from-blue-500/5 via-transparent',
  'bg-purple-500': 'from-purple-500/5 via-transparent',
  'bg-green-500':  'from-green-500/5 via-transparent',
  'bg-red-500':    'from-red-500/5 via-transparent',
  'bg-yellow-500': 'from-yellow-500/5 via-transparent',
};

interface ColoredSectionProps {
  id: string;
  colorClass: string;
  className?: string;
  children: ReactNode;
}

export default function ColoredSection({
  id,
  colorClass,
  className = '',
  children,
}: ColoredSectionProps) {
  const gradient = gradientMap[colorClass] ?? 'from-white/0 via-transparent';

  return (
    <section
      id={id}
      className={`relative flex items-center justify-center text-gray-900 dark:text-white min-h-screen ${className}`}
    >
      {/* Fond dégradé subtil */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} to-transparent pointer-events-none`} />

      {/* Barre colorée gauche */}
      <div className={`absolute left-0 top-0 h-full w-5 rounded-r-lg ${colorClass}`} />

      <div className="relative w-full px-6 py-24 max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
