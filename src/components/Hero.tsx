import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 pt-24 pb-16">
      {/* Background graphic */}
      <div className="absolute inset-0 z-0 opacity-[0.03] flex items-center justify-center">
         <span className="font-display font-black text-[35vw] text-white leading-none tracking-tighter mix-blend-overlay">CR7</span>
      </div>
      
      <div className="z-10 text-center max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="text-9xl font-black opacity-[0.03] leading-none absolute -top-8 -right-8 md:-right-16 pointer-events-none">07</div>
          <p className="text-[#d4af37] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4">The Definitive Legacy</p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white italic leading-none mb-6">
            CRISTIANO<br /><span className="text-[#d4af37]">RONALDO</span>
          </h1>
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
              <span className="text-sm font-semibold tracking-wider text-white">ACTIVE CAREER</span>
            </div>
          </div>
        </motion.div>

        <motion.p 
            className="text-lg md:text-xl text-[#e0e0e0]/70 max-w-2xl mx-auto font-sans leading-relaxed mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
        >
          Explore the stats, the history, and the unmatched trophy cabinet of one of the greatest athletes in sports history.
        </motion.p>
      </div>

      <motion.div 
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0 pointer-events-none" />
    </section>
  );
}
