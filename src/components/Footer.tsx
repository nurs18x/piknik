import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-slate-900 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <p className="text-xl md:text-2xl text-white/90 font-light italic mb-8 drop-shadow-sm font-heading">
          "{t.footer.quote}"
        </p>
        <div className="w-12 h-px bg-white/20 mx-auto mb-8"></div>
        <p className="text-sm text-white/50 tracking-wider">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
