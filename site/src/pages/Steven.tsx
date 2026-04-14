// Steven.tsx
import MemberPage from '../components/MemberPage';

export default function Steven() {
  return (
    <MemberPage
      name="Steven"
      rangerLabel="Power Ranger Jaune"
      photo=""
      bio="Page en cours de construction. Revenez bientôt pour découvrir le profil de Steven !"
      cvHref="#"
      email="steven@power-rangers.dev"
      linkedin="#"
      skills={[
        { icon: "🧪", title: "Tests & QA", items: "Tests fonctionnels, recette, validation" },
        { icon: "🛠️", title: "Support", items: "Assistance utilisateur, documentation" },
      ]}
      experiences={[
        { period: "2024 – 2026", title: "Master ICE-LD – Université Toulouse Jean Jaurès" },
      ]}
      hobbies={[
        { icon: "⚡", label: "À découvrir bientôt..." },
      ]}
      theme={{
        border: "border-yellow-300",
        nameColor: "text-yellow-900",
        cvBg: "bg-yellow-200 hover:bg-yellow-300",
        accent: "text-yellow-600",
        dot: "bg-yellow-500",
        sectionTitle: "text-yellow-700 dark:text-yellow-400",
      }}
    />
  );
}
