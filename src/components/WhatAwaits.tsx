import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { Gamepad2, Trophy, Gift, Camera, Music, Utensils, MessagesSquare, MountainSnow, Wind, Heart } from 'lucide-react';

export default function WhatAwaits() {
  const { t } = useLanguage();

  const cards = [
    { icon: Gamepad2, text: t.whatAwaits.games, color: 'text-rose-500', bg: 'bg-rose-50' },
    { icon: Trophy, text: t.whatAwaits.sports, color: 'text-orange-500', bg: 'bg-orange-50' },
    { icon: Gift, text: t.whatAwaits.gifts, color: 'text-purple-500', bg: 'bg-purple-50' },
    { icon: Camera, text: t.whatAwaits.photo, color: 'text-blue-500', bg: 'bg-blue-50' },
    { icon: Music, text: t.whatAwaits.music, color: 'text-pink-500', bg: 'bg-pink-50' },
    { icon: Utensils, text: t.whatAwaits.food, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { icon: MessagesSquare, text: t.whatAwaits.chat, color: 'text-indigo-500', bg: 'bg-indigo-50' },
    { icon: MountainSnow, text: t.whatAwaits.views, color: 'text-cyan-500', bg: 'bg-cyan-50' },
    { icon: Wind, text: t.whatAwaits.air, color: 'text-teal-500', bg: 'bg-teal-50' },
    { icon: Heart, text: t.whatAwaits.memories, color: 'text-red-500', bg: 'bg-red-50' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="font-heading text-3xl md:text-5xl font-bold text-center text-slate-900 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.whatAwaits.title}
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-6 rounded-3xl ${card.bg} border border-white shadow-sm flex flex-col items-center text-center gap-4 transition-all hover:shadow-md cursor-default`}
            >
              <div className={`p-4 rounded-full bg-white shadow-sm ${card.color}`}>
                <card.icon size={28} strokeWidth={1.5} />
              </div>
              <span className="font-medium text-slate-700 text-sm md:text-base leading-tight">
                {card.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
