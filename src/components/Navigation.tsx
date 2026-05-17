import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { Globe, MapPin, Calendar } from 'lucide-react';

export default function Navigation() {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/80 backdrop-blur-md shadow-sm border-b border-zinc-800/50 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className={`font-heading font-semibold text-xl tracking-tight flex items-center gap-4 ${scrolled ? 'text-zinc-100' : 'text-white'}`}>
          <div className="flex flex-col text-xs leading-tight sm:flex-row sm:gap-2 sm:text-base">
            <span className="flex items-center gap-1"><Calendar size={14} /> 2026</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> Стадионная 59</span>
          </div>
        </div>
        
        <div className="flex bg-white/20 backdrop-blur-md rounded-full p-1 border border-white/30 text-sm">
          <button
            onClick={() => setLanguage('ky')}
            className={`px-4 py-1.5 rounded-full transition-colors ${
              language === 'ky' ? 'bg-amber-500 text-zinc-950 shadow-sm font-medium' : 'text-white/80 hover:text-white'
            }`}
          >
            Кыргызча
          </button>
          <button
            onClick={() => setLanguage('tr')}
            className={`px-4 py-1.5 rounded-full transition-colors ${
              language === 'tr' ? 'bg-amber-500 text-zinc-950 shadow-sm font-medium' : 'text-white/80 hover:text-white'
            }`}
          >
            Türkçe
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
