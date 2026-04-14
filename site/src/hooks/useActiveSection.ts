// hooks/useActiveSection.ts
import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (id: string) => (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(id);
      });
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(handleIntersect(id), {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      });
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds]);

  return activeId;
}
