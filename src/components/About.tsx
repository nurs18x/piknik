import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Aesthetic blur circles in background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-900/20 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob"></div>
      <div className="absolute top-0 -left-10 w-[400px] h-[400px] bg-zinc-800/40 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-zinc-100 mb-12">
            {t.about.title}
          </h2>
          
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 p-8 md:p-12 rounded-3xl shadow-xl shadow-zinc-950/50">
            <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed mb-6">
              <span className="font-semibold text-amber-500">{t.about.text1}</span>
              <br />
              {t.about.text2}
            </p>
            <div className="w-16 h-1 bg-amber-500/50 mx-auto my-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
              {t.about.text3}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
