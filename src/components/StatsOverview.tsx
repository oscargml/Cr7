import { motion } from 'motion/react';
import { careerOverview } from '../data';
import { Target, Activity, Zap, Flame } from 'lucide-react';

export default function StatsOverview() {
  const stats = [
    { label: 'Career Goals', value: careerOverview.goals, icon: Target, suffix: '+' },
    { label: 'Appearances', value: careerOverview.appearances, icon: Activity, suffix: '+' },
    { label: 'Assists', value: careerOverview.assists, icon: Zap, suffix: '' },
    { label: 'Hat-Tricks', value: careerOverview.hatTricks, icon: Flame, suffix: '' },
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              key={stat.label}
              className={`bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-[#d4af37]/30 transition-colors duration-500 ${i === 3 ? 'bg-gradient-to-br from-[#d4af37]/20 to-transparent border-[#d4af37]/30' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`font-display text-4xl md:text-6xl font-black text-${i === 3 ? '[#d4af37]' : 'white'} mb-1 italic`}>
                {stat.value}<span className="text-[#d4af37]">{stat.suffix}</span>
              </div>
              <div className="font-mono text-[10px] font-bold tracking-widest uppercase text-white/40">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
