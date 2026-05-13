import React from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import WhatAwaits from './components/WhatAwaits';
import Timeline from './components/Timeline';
import Location from './components/Location';
import Registration from './components/Registration';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-200 selection:text-sky-900">
        <Navigation />
        <main>
          <Hero />
          <About />
          <WhatAwaits />
          <Timeline />
          <Location />
          <Registration />
          <Gallery />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
