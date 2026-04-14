// Toast.tsx
import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
}

export function Toast({ message, type = 'success', onClose }: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Entrée
    const showTimer = setTimeout(() => setVisible(true), 10);
    // Sortie
    const hideTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 400);
    }, 3500);
    return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
  }, [onClose]);

  const bg = type === 'success'
    ? 'bg-green-600 dark:bg-green-500'
    : 'bg-red-600 dark:bg-red-500';

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-[100] flex items-center gap-3
                  px-5 py-4 rounded-xl shadow-2xl text-white font-medium
                  transition-all duration-400 ease-in-out
                  ${bg}
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <span className="text-xl">{type === 'success' ? '✅' : '❌'}</span>
      <span>{message}</span>
      <button
        onClick={() => { setVisible(false); setTimeout(onClose, 400); }}
        className="ml-2 text-white/70 hover:text-white transition-colors"
        aria-label="Fermer"
      >
        ✕
      </button>
    </div>
  );
}
