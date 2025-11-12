// ParticlesBackground.tsx
import { useEffect, useMemo, useState } from "react";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // Option A — typage direct
  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
          resize: { enable: true },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: {
          value: ["#3b82f6", "#A813D0", "#ef4444", "#22c55e", "#eab308"],
        },
        links: { enable: true, color: "#ffffff", distance: 150, opacity: 0.2, width: 1 },
        collisions: { enable: true },
        move: {
          enable: true,
          speed: 1,
          // <- littéral reconnu par ISourceOptions
          outModes: { default: "bounce" },
        },
        number: { value: 60, density: { enable: true, area: 800 } },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    []
  );

  // Option B — alternative équivalente :
  // const options = useMemo(() => ({ ... } satisfies ISourceOptions), []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
