import { useEffect, useState } from "react";
import ColoredSection from "./ColoredSection";

const words = [
  { text: "Applications", color: "text-purple-400" },
  { text: "Sites Web", color: "text-green-400" },
  { text: "Dashboards", color: "text-yellow-400" },
  { text: "Scripts", color: "text-blue-400" },
  { text: "Bots", color: "text-red-400" },
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;

    if (typing) {
      if (letterIndex < words[index].text.length) {
        interval = setTimeout(() => {
          setDisplayText((prev) => prev + words[index].text[letterIndex]);
          setLetterIndex((prev) => prev + 1);
        }, 100);
      } else {
        interval = setTimeout(() => setTyping(false), 2500);
      }
    } else {
      if (letterIndex > 0) {
        interval = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setLetterIndex((prev) => prev - 1);
        }, 50);
      } else {
        setTyping(true);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(interval);
  }, [typing, letterIndex, index]);

  return (
    <ColoredSection
      id="home"
      colorClass="bg-blue-500 py-24 min-h-[80vh] flex flex-col justify-center items-start mb-24"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-white text-left">
        Des solutions <span className="text-indigo-400">sur-mesure</span>
        <br />
        pour vos projets{" "}
        <span className={`${words[index].color} font-bold`}>
          {displayText}
        </span>
        <span className={`${words[index].color} animate-pulse`}>|</span>
      </h1>
    </ColoredSection>
  );
}
