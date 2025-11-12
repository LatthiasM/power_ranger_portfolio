// src/components/Contact.tsx
import ColoredSection from "./ColoredSection";

export default function Contact() {
  return (
    <ColoredSection
      id="contact"
      className="py-20 px-6 text-center transition-all duration-500"
      colorClass='bg-yellow-500'
    >
      {/* 💡 MODIFIÉ : Le titre n'a pas besoin de "text-white" */}
      <h2 className="text-4xl font-bold mb-6">Contact</h2>
      
      {/* 💡 MODIFIÉ : "text-gray-400" remplacé */}
      <p className="text-gray-700 dark:text-gray-400 max-w-xl mx-auto mb-8">
        Une question, une idée, une collaboration ? N'hésitez pas à nous écrire !
      </p>
      <form
        className="max-w-md mx-auto grid grid-cols-1 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Message envoyé ! 🚀');
        }}
      >
        <input
          type="text"
          required
          placeholder="Votre nom"
          // 💡 MODIFIÉ : "bg-gray-800 text-white" remplacé
          className="p-3 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none"
        />
        <input
          type="email"
          required
          placeholder="Votre email"
          // 💡 MODIFIÉ : "bg-gray-800 text-white" remplacé
          className="p-3 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none"
        />
        <textarea
          required
          placeholder="Votre message"
          rows={5}
          // 💡 MODIFIÉ : "bg-gray-800 text-white" remplacé
          className="p-3 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none"
        />
        <button
          type="submit"
          // Ce bouton est OK car ses couleurs (jaune/noir) sont explicites
          className="bg-yellow-400 text-black py-3 px-6 rounded font-semibold hover:bg-yellow-300 transition"
        >
          Envoyer
        </button>
      </form>
    </ColoredSection>
  );
}