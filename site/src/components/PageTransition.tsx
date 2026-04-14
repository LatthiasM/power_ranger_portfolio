// PageTransition.tsx
import { useEffect, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState(location.key);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => {
      setKey(location.key);
      setVisible(true);
    }, 150);
    return () => clearTimeout(timer);
  }, [location.key]);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      key={key}
      className="transition-all duration-500 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
      }}
    >
      {children}
    </div>
  );
}
