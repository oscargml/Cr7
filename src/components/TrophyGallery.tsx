import { motion } from 'motion/react';
import { Trophy, Medal, Star, Globe, Share2 } from 'lucide-react';
import { majorSeasonsTrophies } from '../data';
import { useState } from 'react';
import { ShareData } from './ShareModal';

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Medal,
  Star,
  Globe
};

interface TrophyGalleryProps {
  onShare: (data: ShareData) => void;
}

export default function TrophyGallery({ onShare }: TrophyGalleryProps) {
  const [activeSeason, setActiveSeason] = useState(majorSeasonsTrophies[0].season);

  const activeData = majorSeasonsTrophies.find(s => s.season === activeSeason) || majorSeasonsTrophies[0];

  return (
    <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto mb-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="font-display text-4xl md:text-6xl font-black text-white italic mb-2">TROPHY <span className="text-[#d4af37]">GALLERY</span></h2>
        <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Iconic Seasons</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Season Selector */}
        <div className="lg:w-1/3 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 hide-scrollbar">
          {majorSeasonsTrophies.map((season) => (
            <button
              key={season.season}
              onClick={() => setActiveSeason(season.season)}
              className={`flex-none lg:w-full text-left px-6 py-4 rounded-xl font-mono text-sm transition-all duration-300 border ${
                activeSeason === season.season 
                  ? 'bg-gradient-to-br from-[#d4af37]/20 to-transparent border-[#d4af37]/30 text-[#d4af37]' 
                  : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className="font-bold text-xl mb-1 font-sans tracking-tight">{season.season}</div>
              <div className="text-xs opacity-70 uppercase tracking-widest font-sans font-bold text-[10px]">{season.club}</div>
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="lg:w-2/3 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 min-h-[400px]">
          <motion.div
            key={activeSeason}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 h-full"
          >
            {activeData.trophies.map((trophy, i) => {
              const IconComp = iconMap[trophy.imageIcon] || Trophy;
              return (
                <motion.div 
                  key={trophy.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white/5 rounded-2xl p-6 flex flex-col items-center text-center justify-center border border-white/10 group relative"
                >
                  <button
                    onClick={() => onShare({
                      type: 'trophy',
                      title: trophy.name,
                      value: trophy.season,
                      subtitle: `${trophy.competition} Winner`,
                      icon: trophy.imageIcon
                    })}
                    className="absolute top-3 right-3 p-2 text-white/20 hover:text-white bg-white/5 hover:bg-[#d4af37]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                    title="Share this trophy"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  <div className="w-16 h-16 mb-4 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[inset_0_2px_10px_rgba(255,255,255,0.05)] border border-white/10">
                    <IconComp className="w-8 h-8 text-[#d4af37]" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-display font-semibold text-white mb-1 leading-snug">{trophy.name}</h4>
                  <div className="text-white/40 text-[10px] font-bold tracking-widest uppercase">{trophy.competition}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
