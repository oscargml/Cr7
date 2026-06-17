import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Activity, Zap, Flame, Trophy, Medal, Star, Globe, Download, Copy, X, Check } from 'lucide-react';
import { toBlob, toPng } from 'html-to-image';

export type ShareData = {
  type: 'stat' | 'trophy' | 'milestone';
  title: string;
  value: string | number;
  subtitle: string;
  icon: string;
};

const iconMap: Record<string, React.ElementType> = {
  Target, Activity, Zap, Flame, Trophy, Medal, Star, Globe
};

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ShareData | null;
}

export default function ShareModal({ isOpen, onClose, data }: ShareModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const t = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(t);
    }
  }, [copied]);

  if (!isOpen || !data) return null;

  const IconComp = iconMap[data.icon] || Star;

  const copyImage = async () => {
    if (!cardRef.current) return;
    try {
      setIsGenerating(true);
      const blob = await toBlob(cardRef.current, { cacheBust: true, style: { margin: "0" } });
      if (blob) {
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        setCopied(true);
      }
    } catch (err) {
      console.error('Failed to copy', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = async () => {
    if (!cardRef.current) return;
    try {
      setIsGenerating(true);
      const dataUrl = await toPng(cardRef.current, { cacheBust: true, style: { margin: "0" } });
      const link = document.createElement('a');
      link.download = `cr7-${data.type}-${data.title.toLowerCase().replace(/ /g, '-')}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to download', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm"
        />

        {/* Modal content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-md bg-neutral-950 border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-6"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center">
            <h3 className="font-display font-black text-xl italic text-white uppercase tracking-tight">Share Legacy</h3>
            <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mt-1">Snapshot Generator</p>
          </div>

          {/* The Shareable Card */}
          <div className="flex justify-center p-4 bg-white/5 rounded-2xl overflow-hidden relative">
            <div 
              ref={cardRef} 
              className="w-[300px] h-[400px] bg-[#050505] rounded-xl border border-[#d4af37]/30 flex flex-col justify-between p-8 relative overflow-hidden shrink-0"
              style={{
                background: 'radial-gradient(circle at 100% 0%, #111 0%, #050505 60%)',
              }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none" style={{background: 'radial-gradient(circle at 80% 20%, #d4af37 0%, transparent 60%)', filter: 'blur(30px)'}}></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6">
                  <IconComp className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-1">{data.subtitle}</div>
                <div className="font-display text-2xl font-black text-white italic uppercase leading-none">{data.title}</div>
              </div>

              <div className="relative z-10">
                <div className="font-display text-7xl font-black text-[#d4af37] italic tracking-tighter leading-none mb-1 shadow-[#d4af37]/20 drop-shadow-lg">{data.value}</div>
              </div>

              <div className="relative z-10 border-t border-white/10 pt-4 flex justify-between items-center opacity-50">
                <div className="font-sans font-black text-sm tracking-tight text-white italic">CRISTIANO RONALDO</div>
                <div className="font-mono text-[8px] uppercase tracking-widest">CR7 Legacy</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button 
              onClick={copyImage}
              disabled={isGenerating}
              className="flex-1 flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#b5952f] text-black font-bold py-3 px-4 rounded-xl transition-colors disabled:opacity-50"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              {copied ? 'Copied!' : 'Copy Image'}
            </button>
            <button 
              onClick={downloadImage}
              disabled={isGenerating}
              className="flex-1 flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-bold py-3 px-4 rounded-xl transition-colors disabled:opacity-50"
            >
              <Download className="w-5 h-5" />
              Download
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
