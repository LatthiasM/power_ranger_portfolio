// MemberPage.tsx — Template partagé pour toutes les pages membres
import { Link } from 'react-router-dom';

export interface Skill {
  icon: string;
  title: string;
  items: string;
}

export interface Experience {
  period: string;
  title: string;
  subtitle?: string;
}

export interface Hobby {
  icon: string;
  label: string;
}

export interface MemberTheme {
  border: string;       // ex: "border-green-300"
  nameColor: string;    // ex: "text-green-900"
  cvBg: string;         // ex: "bg-green-200 hover:bg-green-300"
  accent: string;       // ex: "text-green-600"
  dot: string;          // ex: "bg-green-500"
  sectionTitle: string; // ex: "text-green-700 dark:text-green-400"
}

interface MemberPageProps {
  name: string;
  rangerLabel: string;
  photo: string;
  bio: string;
  cvHref: string;
  email: string;
  linkedin: string;
  skills: Skill[];
  experiences: Experience[];
  hobbies: Hobby[];
  theme: MemberTheme;
}

export default function MemberPage({
  name,
  rangerLabel,
  photo,
  bio,
  cvHref,
  email,
  linkedin,
  skills,
  experiences,
  hobbies,
  theme,
}: MemberPageProps) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">

      {/* Breadcrumb */}
      <div className="mb-8">
        <Link to="/" className="text-sm text-gray-500 dark:text-gray-400 hover:underline">
          ← Retour à l'accueil
        </Link>
      </div>

      {/* Hero membre */}
      <section className="flex flex-col md:flex-row items-center gap-8
                          bg-white/60 dark:bg-white/5 backdrop-blur-md
                          p-8 rounded-2xl shadow-lg border border-white/20 mb-10">
        <img
          src={photo}
          alt={name}
          className={`w-36 h-36 rounded-full border-4 ${theme.border} shadow-md object-cover flex-shrink-0`}
        />
        <div className="flex-1">
          <p className={`text-sm font-semibold uppercase tracking-widest mb-1 ${theme.accent}`}>
            {rangerLabel}
          </p>
          <h1 className={`text-4xl font-extrabold mb-3 ${theme.nameColor} dark:text-white`}>
            {name}
          </h1>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-5">
            {bio}
          </p>
          <a
            href={cvHref}
            download
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold shadow transition ${theme.cvBg} text-gray-900`}
          >
            📄 Télécharger mon CV
          </a>
        </div>
      </section>

      {/* Super-Pouvoirs */}
      <section className="mb-10">
        <h2 className={`text-2xl font-bold mb-5 ${theme.sectionTitle}`}>🧠 Mes Super-Pouvoirs</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white/70 dark:bg-white/5 backdrop-blur-sm p-5 rounded-xl
                         border border-white/20 hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">
                {skill.icon} {skill.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Parcours */}
      <section className="mb-10">
        <h2 className={`text-2xl font-bold mb-5 ${theme.sectionTitle}`}>🎓 Mon Parcours</h2>
        <ol className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 space-y-4">
          {experiences.map((exp, i) => (
            <li key={i} className="ml-6">
              <span className={`absolute -left-[9px] w-4 h-4 rounded-full ${theme.dot} ring-2 ring-white dark:ring-gray-900`} />
              <div className="bg-white/70 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <p className="text-sm font-bold text-gray-800 dark:text-white">{exp.period}</p>
                <p className="text-sm text-gray-700 dark:text-gray-200">{exp.title}</p>
                {exp.subtitle && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{exp.subtitle}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Loisirs */}
      <section className="mb-10">
        <h2 className={`text-2xl font-bold mb-5 ${theme.sectionTitle}`}>🎮 Loisirs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {hobbies.map((hobby, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white/70 dark:bg-white/5 backdrop-blur-sm
                         p-4 rounded-xl border border-white/20 hover:scale-[1.02] transition-transform"
            >
              <span className="text-2xl">{hobby.icon}</span>
              <p className="text-sm text-gray-700 dark:text-gray-200">{hobby.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className={`text-2xl font-bold mb-5 ${theme.sectionTitle}`}>📬 Me Contacter</h2>
        <div className="bg-white/70 dark:bg-white/5 backdrop-blur-sm p-5 rounded-xl
                        border border-white/20 flex flex-col sm:flex-row gap-4">
          <a
            href={`mailto:${email}`}
            className={`flex items-center gap-2 font-medium ${theme.accent} hover:underline`}
          >
            ✉️ {email}
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 font-medium ${theme.accent} hover:underline`}
          >
            🔗 Mon LinkedIn
          </a>
        </div>
      </section>

    </div>
  );
}
