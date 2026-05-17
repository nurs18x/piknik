import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { ChevronDown } from 'lucide-react';

const TARGET_DATE = new Date('2026-05-24T07:00:00').getTime(); // Just picking a future date for demo

export default function Hero() {
  const { t } = useLanguage();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2850&q=80" 
          alt="Villa" 
          className="w-full h-full object-cover scale-105 transform transition-transform duration-[20s] hover:scale-100"
        />
        {/* Soft daylight gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-900/40 to-zinc-950/90" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 mb-6 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 rounded-full text-amber-200 text-sm font-medium tracking-wide uppercase">
            {t.hero.badge || 'Узатуу кечеси'}
          </span>
        </motion.div>

        <motion.h1 
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight leading-tight mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {t.hero.title}
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 font-light drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Countdown */}
        <motion.div 
          className="flex justify-center gap-4 md:gap-8 mb-12 text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Mins', value: timeLeft.minutes },
            { label: 'Secs', value: timeLeft.seconds }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-zinc-900/60 backdrop-blur-md rounded-2xl border border-amber-500/30 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <span className="font-heading text-2xl md:text-4xl font-semibold text-amber-400">{item.value}</span>
              </div>
              <span className="text-xs md:text-sm text-zinc-400 uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button 
            onClick={() => scrollToSection('register')}
            className="px-8 py-4 bg-amber-500 text-zinc-950 rounded-full font-medium hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.4)]"
          >
            {t.hero.joinBtn}
          </button>
        </motion.div>
      </div>

      {/* Floating particles aesthetic (Gold/Amber dust) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-400/30 blur-[1px]"
            style={{
              width: Math.random() * 8 + 4 + 'px',
              height: Math.random() * 8 + 4 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
}
