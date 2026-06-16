import { motion } from 'motion/react';
import { clubHistory } from '../data';

export default function LeagueHistory() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="font-display text-4xl md:text-6xl font-black text-white italic mb-2">CLUB <span className="text-[#d4af37]">HISTORY</span></h2>
        <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Historical Performance</p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2" />

        <div className="space-y-12 md:space-y-24">
          {clubHistory.map((stint, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div 
                key={`${stint.id}-${stint.startYear}`}
                className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#050505] border-[3px] border-[#d4af37] z-10 md:-translate-x-1/2 -ml-[7px] md:ml-0 shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'} w-full`}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                     <div className={`flex items-center gap-4 mb-4 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${stint.colorCode} ${stint.colorCode === 'bg-zinc-100' ? 'text-black' : 'text-white'}`}>
                          {stint.logoText}
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-white leading-tight italic uppercase">{stint.club}</h3>
                          <div className="font-bold text-[10px] tracking-wider text-[#d4af37] mt-1">{stint.startYear} - {stint.endYear}</div>
                        </div>
                     </div>
                     
                     <div className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-6">
                        {stint.league}
                     </div>

                     <div className={`grid grid-cols-3 gap-2 ${isEven ? '' : 'md:text-left'} bg-white/5 rounded-lg p-4 border border-white/5`}>
                        <div className="flex flex-col">
                          <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Apps</span>
                          <span className="font-sans font-black text-xl text-white">{stint.apps}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Goals</span>
                          <span className="font-sans font-black text-xl text-[#d4af37]">{stint.goals}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Assists</span>
                          <span className="font-sans font-black text-xl text-white">{stint.assists}</span>
                        </div>
                     </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
