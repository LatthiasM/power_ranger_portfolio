// components/StatsSection.tsx
import ColoredSection from "./ColoredSection";

const stats = [
  { label: "Projets", value: 5 },
  { label: "Membres", value: 5 },
  { label: "Année", value: 2025 },
];

export function StatsSection() {
  return (
    <ColoredSection
      id="stats"
      colorClass="bg-red-500 py-24 min-h-[80vh] flex flex-col justify-center items-center mb-24"
    >
      <h2 className="text-4xl font-bold text-white mb-10 text-center">Nos Statistiques</h2>
      <div className="flex justify-center gap-10 flex-wrap">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-neutral-900 p-6 rounded-xl shadow-md w-40 text-white text-center"
          >
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </ColoredSection>
  );
}
