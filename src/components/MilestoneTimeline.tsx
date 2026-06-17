import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { milestones } from '../data';
import { 
  Target, Activity, Trophy, Star, Zap, Globe, ChevronLeft, ChevronRight, X, Share2
} from 'lucide-react';
import { ShareData } from './ShareModal';

const iconMap: Record<string, React.ElementType> = {
  Target, Activity, Trophy, Star, Zap, Globe
};

interface MilestoneTimelineProps {
  onShare: (data: ShareData) => void;
}

export default function MilestoneTimeline({ onShare }: MilestoneTimelineProps) {
  const [activeMilestoneId, setActiveMilestoneId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const activeMilestone = milestones.find(m => m.id === activeMilestoneId);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10 w-full mb-10 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="font-display text-4xl md:text-6xl font-black text-white italic mb-2">CAREER <span className="text-[#d4af37]">MILESTONES</span></h2>
        <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Decades of Dominance</p>
      </motion.div>

      <div className="relative group">
        {/* Navigation buttons */}
        <button 
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 z-20 w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-white/50 hover:text-white hover:bg-white/10 hover:scale-105 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 z-20 w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-white/50 hover:text-white hover:bg-white/10 hover:scale-105 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Timeline Line under items */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/5 -translate-y-1/2 z-0 pointer-events-none" />

        <div 
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-8 overflow-x-auto hide-scrollbar py-12 px-4 scroll-smooth snap-x relative z-10"
        >
          {milestones.map((milestone, idx) => {
            const Icon = iconMap[milestone.icon] || Star;
            const isActive = activeMilestoneId === milestone.id;
            
            return (
              <motion.button
                key={milestone.id}
                onClick={() => setActiveMilestoneId(isActive ? null : milestone.id)}
                className={`snap-center flex-shrink-0 flex flex-col items-center justify-center relative w-[160px] h-[160px] cursor-pointer group transition-all duration-300 ${isActive ? 'scale-110' : 'hover:scale-105'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
              >
                {/* Year Label */}
                <div className={`absolute top-0 -translate-y-full mb-4 font-mono font-bold tracking-widest text-[#d4af37] transition-all duration-300 ${isActive ? 'text-lg text-[#d4af37]' : 'text-xs text-white/40 group-hover:text-white/70'}`}>
                  {milestone.year}
                </div>

                {/* Node */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center border-[3px] transition-all duration-500 z-10 ${
                  isActive 
                    ? 'bg-gradient-to-br from-[#d4af37]/20 to-transparent border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.4)]' 
                    : 'bg-[#050505] border-white/20 group-hover:border-[#d4af37]/50 group-hover:bg-white/5'
                }`}>
                  <Icon className={`w-6 h-6 transition-colors duration-300 ${isActive ? 'text-[#d4af37]' : 'text-white/40 group-hover:text-[#d4af37]/70'}`} />
                </div>
                
                {/* Connecting dots */}
                {isActive && (
                  <motion.div 
                    layoutId="active-connector"
                    className="absolute bottom-0 w-[2px] h-8 bg-[#d4af37] translate-y-full opacity-50"
                  />
                )}
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Details Display Area */}
      <div className="mt-8 flex justify-center min-h-[220px]">
        <AnimatePresence mode="wait">
          {activeMilestone ? (
            <motion.div
              key={activeMilestone.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl bg-white/5 border border-[#d4af37]/30 rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-500 scale-150 origin-top-right">
                <Target className="w-64 h-64 text-white" />
              </div>
              
              <button 
                onClick={() => setActiveMilestoneId(null)}
                className="absolute top-4 right-4 p-2 text-white/30 hover:text-white transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                onClick={() => onShare({
                  type: 'milestone',
                  title: activeMilestone.title,
                  value: activeMilestone.year,
                  subtitle: 'Career Milestone',
                  icon: activeMilestone.icon
                })}
                className="absolute top-4 right-14 p-2 text-white/30 hover:text-white transition-colors hover:bg-white/5 rounded-full"
                title="Share this milestone"
              >
                <Share2 className="w-5 h-5" />
              </button>

              <div className="relative z-10 flex flex-col items-center text-center pt-4">
                <span className="text-[#d4af37] font-black text-2xl mb-2 italic tracking-wider">{activeMilestone.year}</span>
                <h3 className="font-display text-2xl md:text-3xl font-black text-white uppercase mb-4 tracking-tight leading-tight">{activeMilestone.title}</h3>
                <div className="w-12 h-1 bg-white/10 mx-auto mb-6 rounded-full">
                  <div className="w-1/2 h-full bg-[#d4af37] rounded-full mx-auto" />
                </div>
                <p className="text-[#e0e0e0]/70 md:text-lg leading-relaxed max-w-xl">
                  {activeMilestone.description}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-2xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 flex items-center justify-center border-dashed"
            >
              <p className="text-white/30 font-mono text-xs uppercase tracking-widest text-center">
                Select a milestone to view details
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}
