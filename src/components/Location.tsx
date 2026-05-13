import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  const { t } = useLanguage();

  const handleOpenMap = () => {
    window.open('https://maps.google.com/?q=Kashka-Suu,+Kyrgyzstan', '_blank');
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=2850&q=80" 
          alt="Kashka-Suu" 
          className="w-full h-full object-cover scale-105 transform"
        />
        <div className="absolute inset-0 bg-slate-900/40" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/20 backdrop-blur-xl border border-white/30 p-10 md:p-16 rounded-[2.5rem] shadow-2xl text-center"
        >
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
            <MapPin className="text-white" size={32} />
          </div>
          
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-sm">
            {t.location.title}
          </h2>
          
          <p className="text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto drop-shadow-sm">
            {t.location.text}
          </p>

          <button 
            onClick={handleOpenMap}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-50 transition-colors shadow-lg"
          >
            <Navigation size={18} />
            {t.location.openMap}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
