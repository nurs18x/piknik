import React from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import WhatAwaits from './components/WhatAwaits';
import Location from './components/Location';
import Registration from './components/Registration';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-amber-500/30 selection:text-amber-200">
        <Navigation />
        <main>
          <Hero />
          <About />
          <WhatAwaits />
          <Location />
          <Registration />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
