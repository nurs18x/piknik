import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  const { t } = useLanguage();

  const handleOpenMap = () => {
    window.open('https://2gis.kg/bishkek/search/%D1%81%D1%82%D0%B0%D0%B4%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F%2059/geo/15763234351027441/74.570976%2C42.816235', '_blank');
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2850&q=80" 
          alt="Villa Location" 
          className="w-full h-full object-cover scale-105 transform"
        />
        <div className="absolute inset-0 bg-zinc-950/60" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900/40 backdrop-blur-xl border border-amber-500/20 p-10 md:p-16 rounded-[2.5rem] shadow-2xl text-center shadow-zinc-950/50"
        >
          <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
            <MapPin className="text-amber-400" size={32} />
          </div>
          
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-sm">
            {t.location.title}
          </h2>
          
          <p className="text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto drop-shadow-sm">
            {t.location.text}
          </p>

          <button 
            onClick={handleOpenMap}
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-zinc-950 rounded-full font-medium hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.4)]"
          >
            <Navigation size={18} />
            {t.location.openMap}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
