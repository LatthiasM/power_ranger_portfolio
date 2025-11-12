// TeamGallery.tsx
import ColoredSection from "./ColoredSection";

// 💡 MODIFIÉ : Les "textColor" ont des versions claires (ex: -600) et sombres (ex: -400)
const teamMembers = [
  {
    name: "Paul",
    label: "Power Ranger Bleu",
    color: "#bae6fd",
    color2: "#38bdf8",
    color3: "#0E7EE9",
    text: "Développeur Front",
    href: "/paul",
    textColor: "text-blue-600 dark:text-blue-400", // Modifié
  },
  {
    name: "Roxana",
    label: "Power Ranger Mauve",
    color: "#E3AFF1",
    color2: "#CE6DE8",
    color3: "#A813D0",
    text: "Design & UX",
    href: "/roxana",
    textColor: "text-purple-600 dark:text-purple-300", // Modifié
  },
  {
    name: "Mathis",
    label: "Power Ranger Rouge",
    color: "#fecaca",
    color2: "#f87171",
    color3: "#dc2626",
    text: "DevOps / Backend",
    href: "/mathis",
    textColor: "text-red-600 dark:text-red-400", // Modifié
  },
  {
    name: "Matthias",
    label: "Power Ranger Vert",
    color: "#bbf7d0",
    color2: "#34d399",
    color3: "#0FB51D",
    text: "Chef de projet",
    href: "/matthias",
    textColor: "text-green-600 dark:text-green-400", // Modifié
  },
  {
    name: "Steven",
    label: "Power Ranger Jaune",
    color: "#fef9c3",
    color2: "#facc15",
    color3: "#eab308",
    text: "Support & Tests",
    href: "/steven",
    textColor: "text-yellow-600 dark:text-yellow-400", // Modifié
  },
];

export default function TeamGallery() {
  return (
    <ColoredSection id="team" className="py-24 px-6 text-center relative" colorClass="bg-green-500">

      {/* 💡 MODIFIÉ : "text-white" retiré (géré par ColoredSection) */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 relative z-10">
        Notre Équipe
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-7xl mx-auto relative z-10">
        {teamMembers.map((member, index) => (
          <a
            key={index}
            href={member.href}
            // 💡 MODIFIÉ : "bg-neutral-900 text-white" remplacé par les classes dark/light
            className="relative overflow-hidden rounded-xl h-40 flex items-center justify-center 
                       bg-gray-100 dark:bg-neutral-900 text-gray-900 dark:text-white 
                       group transition transform hover:scale-105 hover:shadow-xl"
          >
            {/* VOTRE LOGIQUE D'ANIMATION (100% CONSERVÉE) */}
            <span
              style={{ backgroundColor: member.color }}
              className={`absolute w-[150%] h-[200%] -bottom-20 right-0 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1500 duration-2000 origin-bottom-right`}
            ></span>
            <span
              style={{ backgroundColor: member.color2 }}
              className={`absolute w-[160%] h-[210%] -bottom-24 right-1 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1800 duration-1800 origin-bottom-right opacity-70`}
            ></span>
            <span
              style={{ backgroundColor: member.color3 }}
              className={`absolute w-[160%] h-[210%] -bottom-28 right-2 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-2000 duration-1500 origin-bottom-right opacity-100`}
            ></span>
            
            {/* Texte initial */}
            {/* 💡 MODIFIÉ : Utilise la "textColor" mise à jour de l'array */}
            <span
              className={`relative z-10 text-lg font-bold transition-opacity duration-300 group-hover:opacity-0 ${member.textColor}`}
            >
              {member.label}
            </span>

            {/* Texte au survol (100% CONSERVÉ) */}
            {/* Le texte blanc est correct ici car le fond est toujours coloré */}
            <span className="absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-sm text-white">{member.text}</p>
            </span>
          </a>
        ))}
      </div>
    </ColoredSection>
  );
}