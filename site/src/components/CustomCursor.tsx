// CustomCursor.tsx — Curseur avec trail de particules aux couleurs Rangers
import { useEffect, useRef, useState, useCallback } from 'react';

const RANGER_COLORS = ['#3b82f6', '#A813D0', '#ef4444', '#22c55e', '#eab308'];

interface TrailDot {
  id: number;
  x: number;
  y: number;
  color: string;
  opacity: number;
}

const MAX_TRAIL = 12;
let trailId = 0;
let colorIndex = 0;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const posRef = useRef({ x: -100, y: -100 });
  const frameRef = useRef<number>(0);
  const lastTrailPos = useRef({ x: -999, y: -999 });

  const addTrailDot = useCallback((x: number, y: number) => {
    const dx = x - lastTrailPos.current.x;
    const dy = y - lastTrailPos.current.y;
    if (Math.sqrt(dx * dx + dy * dy) < 10) return; // seuil de distance
    lastTrailPos.current = { x, y };

    const dot: TrailDot = {
      id: trailId++,
      x,
      y,
      color: RANGER_COLORS[colorIndex % RANGER_COLORS.length],
      opacity: 1,
    };
    colorIndex++;

    setTrail((prev) => [...prev.slice(-MAX_TRAIL + 1), dot]);

    // fade out progressif
    let step = 0;
    const fade = setInterval(() => {
      step++;
      if (step >= 8) {
        clearInterval(fade);
        setTrail((prev) => prev.filter((d) => d.id !== dot.id));
      } else {
        setTrail((prev) =>
          prev.map((d) => (d.id === dot.id ? { ...d, opacity: 1 - step / 8 } : d))
        );
      }
    }, 40);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      addTrailDot(e.clientX, e.clientY);
    };

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
      }
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [role="button"]'))
        setHovering(true);
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [role="button"]'))
        setHovering(false);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mouseout', onOut);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mouseout', onOut);
    };
  }, [addTrailDot]);

  return (
    <>
      {/* Trail de particules */}
      {trail.map((dot, i) => {
        const size = 6 + (i / MAX_TRAIL) * 6; // les plus récentes sont plus grosses
        return (
          <div
            key={dot.id}
            className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full"
            style={{
              transform: `translate(${dot.x}px, ${dot.y}px) translate(-50%, -50%)`,
              width: size,
              height: size,
              backgroundColor: dot.color,
              opacity: dot.opacity,
              boxShadow: `0 0 ${size * 1.5}px ${dot.color}`,
              transition: 'opacity 0.04s linear',
              willChange: 'transform, opacity',
            }}
          />
        );
      })}

      {/* Point principal */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          willChange: 'transform',
          transform: 'translate(-100px, -100px)',
        }}
      >
        <div
          className="rounded-full transition-all duration-150"
          style={{
            width:  clicking ? 6 : hovering ? 20 : 12,
            height: clicking ? 6 : hovering ? 20 : 12,
            marginLeft: clicking ? -3 : hovering ? -10 : -6,
            marginTop:  clicking ? -3 : hovering ? -10 : -6,
            backgroundColor: hovering ? '#facc15' : '#6366f1',
            boxShadow: hovering
              ? '0 0 12px 4px #facc1588'
              : clicking
              ? '0 0 8px 2px #6366f188'
              : '0 0 6px 2px #6366f166',
          }}
        />
      </div>
    </>
  );
}
