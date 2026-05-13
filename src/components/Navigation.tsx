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
        scrolled ? 'bg-white/70 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className={`font-heading font-semibold text-xl tracking-tight flex items-center gap-4 ${scrolled ? 'text-slate-800' : 'text-white'}`}>
          <div className="flex flex-col text-xs leading-tight sm:flex-row sm:gap-2 sm:text-base">
            <span className="flex items-center gap-1"><Calendar size={14} /> 2026</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> Кашка-Суу</span>
          </div>
        </div>
        
        <div className="flex bg-white/20 backdrop-blur-md rounded-full p-1 border border-white/30 text-sm">
          <button
            onClick={() => setLanguage('ky')}
            className={`px-4 py-1.5 rounded-full transition-colors ${
              language === 'ky' ? 'bg-white text-slate-900 shadow-sm' : 'text-white/80 hover:text-white'
            } ${scrolled && language !== 'ky' ? 'text-slate-600 hover:text-slate-900' : ''}`}
          >
            Кыргызча
          </button>
          <button
            onClick={() => setLanguage('tr')}
            className={`px-4 py-1.5 rounded-full transition-colors ${
              language === 'tr' ? 'bg-white text-slate-900 shadow-sm' : 'text-white/80 hover:text-white'
            } ${scrolled && language !== 'tr' ? 'text-slate-600 hover:text-slate-900' : ''}`}
          >
            Türkçe
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
