import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { Quote } from 'lucide-react';

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
          
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 p-8 md:p-14 rounded-[2.5rem] shadow-2xl shadow-zinc-950/50 relative overflow-hidden">
            <div className="absolute -top-6 -right-6 text-amber-500/5 transform rotate-12">
              <Quote size={180} />
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-amber-500/20 rotate-[-10deg] shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                <Quote className="text-amber-400" size={24} />
              </div>

              <h3 className="font-heading text-2xl md:text-4xl text-zinc-300 font-medium leading-snug md:leading-normal mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 font-bold tracking-wide uppercase text-xl md:text-2xl block mb-4">
                  {t.about.text1}
                </span>
                <span className="italic text-zinc-200">{t.about.text2}</span>
              </h3>

              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mx-auto my-8"></div>
              
              <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                {t.about.text3}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
