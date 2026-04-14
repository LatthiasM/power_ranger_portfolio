// Contact.tsx
import { useState } from 'react';
import ColoredSection from './ColoredSection';
import { Toast } from './Toast';

export default function Contact() {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setToast({ message: 'Message envoyé avec succès !', type: 'success' });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <>
      <ColoredSection
        id="contact"
        className="py-20 px-6 text-center transition-all duration-500"
        colorClass="bg-yellow-500"
      >
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="text-gray-700 dark:text-gray-400 max-w-xl mx-auto mb-8">
          Une question, une idée, une collaboration ? N'hésitez pas à nous écrire !
        </p>
        <form
          className="max-w-md mx-auto grid grid-cols-1 gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            required
            placeholder="Votre nom"
            className="p-3 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white
                       placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="email"
            required
            placeholder="Votre email"
            className="p-3 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white
                       placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <textarea
            required
            placeholder="Votre message"
            rows={5}
            className="p-3 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white
                       placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none"
          />
          <button
            type="submit"
            disabled={sending}
            className="bg-yellow-400 text-black py-3 px-6 rounded font-semibold
                       hover:bg-yellow-300 transition disabled:opacity-60 disabled:cursor-not-allowed
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
          >
            {sending ? 'Envoi en cours…' : 'Envoyer'}
          </button>
        </form>
      </ColoredSection>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}
