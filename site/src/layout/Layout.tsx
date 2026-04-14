// src/layout/Layout.tsx
import Navbar from '../components/Navbar';
import ParticlesBackground from '../components/ParticlesBackground';
import PageTransition from '../components/PageTransition';
import BackToTop from '../components/BackToTop';
import CustomCursor from '../components/CustomCursor';
import FaviconManager from '../components/FaviconManager';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col text-white font-sans">
      <FaviconManager />
      <CustomCursor />
      <Navbar />
      <main className="relative w-full overflow-x-hidden">
        <ParticlesBackground />
        <PageTransition>{children}</PageTransition>
      </main>
      <footer className="text-center text-sm text-gray-400 py-4 bg-black/90">
        © 2025 Power Rangers Portfolio — Tous droits réservés.
      </footer>
      <BackToTop />
    </div>
  );
}
