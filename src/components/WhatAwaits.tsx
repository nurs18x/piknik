import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { Gamepad2, Trophy, Gift, Camera, Music, Utensils, MessagesSquare, MountainSnow, Wind, Heart } from 'lucide-react';

export default function WhatAwaits() {
  const { t } = useLanguage();

  const cards = [
    { icon: Gamepad2, text: t.whatAwaits.games, color: 'text-amber-400', border: 'border-amber-400/20' },
    { icon: Trophy, text: t.whatAwaits.sports, color: 'text-amber-500', border: 'border-amber-500/20' },
    { icon: Gift, text: t.whatAwaits.gifts, color: 'text-amber-300', border: 'border-amber-300/20' },
    { icon: Camera, text: t.whatAwaits.photo, color: 'text-yellow-400', border: 'border-yellow-400/20' },
    { icon: Music, text: t.whatAwaits.music, color: 'text-yellow-500', border: 'border-yellow-500/20' },
    { icon: Utensils, text: t.whatAwaits.food, color: 'text-amber-500', border: 'border-amber-500/20' },
    { icon: MessagesSquare, text: t.whatAwaits.chat, color: 'text-orange-400', border: 'border-orange-400/20' },
    { icon: MountainSnow, text: t.whatAwaits.views, color: 'text-amber-200', border: 'border-amber-200/20' },
    { icon: Wind, text: t.whatAwaits.air, color: 'text-yellow-200', border: 'border-yellow-200/20' },
    { icon: Heart, text: t.whatAwaits.memories, color: 'text-amber-500', border: 'border-amber-500/20' },
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="font-heading text-3xl md:text-5xl font-bold text-center text-zinc-100 mb-16"
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
              className={`p-6 rounded-3xl bg-zinc-900 border ${card.border} shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center gap-4 transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:border-amber-500/40 cursor-default`}
            >
              <div className={`p-4 rounded-full bg-zinc-950 shadow-inner ${card.color}`}>
                <card.icon size={28} strokeWidth={1.5} />
              </div>
              <span className="font-medium text-zinc-300 text-sm md:text-base leading-tight">
                {card.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
