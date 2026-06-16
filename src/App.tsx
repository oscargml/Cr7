/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import StatsOverview from './components/StatsOverview';
import LeagueHistory from './components/LeagueHistory';
import TrophyGallery from './components/TrophyGallery';

export default function App() {
  return (
    <main className="bg-[#050505] min-h-screen relative overflow-hidden font-sans text-[#e0e0e0]">
      {/* Immersive ambient background */}
      <div className="fixed top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0" style={{background: 'radial-gradient(circle at 80% 20%, #d4af37 0%, transparent 40%), radial-gradient(circle at 20% 80%, #004692 0%, transparent 40%)', filter: 'blur(100px)'}}></div>

      <div className="relative z-10">
        <Hero />
        <StatsOverview />
        <LeagueHistory />
        <TrophyGallery />
        
        <footer className="mt-8 mb-12 flex items-center gap-4 relative z-10 max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-white/30 text-[10px] font-bold tracking-widest uppercase flex-shrink-0">CR7 Legacy</div>
          <div className="h-[1px] bg-white/10 flex-grow"></div>
          <div className="text-white/30 text-[10px] font-bold tracking-widest uppercase flex-shrink-0">Unofficial Tribute</div>
        </footer>
      </div>
    </main>
  );
}

