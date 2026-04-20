// MagneticButton.tsx
// Wrapper qui attire l'élément vers le curseur quand il s'en approche
import { useRef, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  strength?: number;   // intensité de l'attraction (0–1), défaut 0.35
  radius?: number;     // distance de détection en px, défaut 90
}

export default function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  radius = 90,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  const animate = () => {
    const el = ref.current;
    if (!el) return;
    currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.15;
    currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.15;
    el.style.transform = `translate(${currentRef.current.x}px, ${currentRef.current.y}px)`;
    if (
      Math.abs(targetRef.current.x - currentRef.current.x) > 0.1 ||
      Math.abs(targetRef.current.y - currentRef.current.y) > 0.1
    ) {
      rafRef.current = requestAnimationFrame(animate);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < radius) {
      targetRef.current = { x: dx * strength, y: dy * strength };
    } else {
      targetRef.current = { x: 0, y: 0 };
    }
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  };

  const onMouseLeave = () => {
    targetRef.current = { x: 0, y: 0 };
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  };

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
