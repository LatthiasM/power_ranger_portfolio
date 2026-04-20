// CustomCursor.tsx — Spotlight subtil qui suit le curseur
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const spotRef = useRef<HTMLDivElement>(null);

  // Désactivé sur mobile/touch
  const isTouch =
    typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

  useEffect(() => {
    if (isTouch) return;

    const el = spotRef.current;
    if (!el) return;

    let rafId: number;
    let targetX = -9999;
    let targetY = -9999;
    let currentX = -9999;
    let currentY = -9999;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    // Lerp pour un suivi souple (pas instantané)
    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      el.style.background = `radial-gradient(
        120px circle at ${currentX}px ${currentY}px,
        rgba(99, 102, 241, 0.06),
        transparent 100%
      )`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    window.addEventListener('mousemove', onMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <div
      ref={spotRef}
      className="fixed inset-0 z-[10] pointer-events-none transition-opacity duration-500"
      aria-hidden="true"
    />
  );
}
