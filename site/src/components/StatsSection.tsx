// StatsSection.tsx
import { useEffect, useRef, useState } from 'react';
import ColoredSection from './ColoredSection';

const stats = [
  { label: 'Projets réalisés', value: 5, suffix: '+' },
  { label: 'Membres',          value: 5, suffix: ''  },
  { label: 'Technologies',     value: 20, suffix: '+' },
  { label: 'Commits',          value: 42, suffix: '+'  },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {active ? suffix : ''}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <ColoredSection id="stats" colorClass="bg-red-500" className="py-24">
      <h2 className="text-4xl font-bold mb-12 text-center">Nos Statistiques</h2>
      <div ref={ref} className="flex justify-center gap-6 flex-wrap">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-gray-100/80 dark:bg-white/10 backdrop-blur-sm
                       border border-gray-200 dark:border-white/20
                       p-8 rounded-2xl shadow-lg w-44 text-center
                       hover:scale-105 transition-transform duration-300"
          >
            <p className="text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
              <CountUp target={stat.value} suffix={stat.suffix} active={active} />
            </p>
            <p className="text-sm text-gray-600 dark:text-white/80 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </ColoredSection>
  );
}
