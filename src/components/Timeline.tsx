import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Timeline() {
  const { t } = useLanguage();

  const program = [
    { time: '07:00', event: t.timeline.t0700 },
    { time: '07:30', event: t.timeline.t0730 },
    { time: '09:30', event: t.timeline.t0930 },
    { time: '10:00', event: t.timeline.t1000 },
    { time: '11:00', event: t.timeline.t1100 },
    { time: '11:30', event: t.timeline.t1130 },
    { time: '12:00', event: t.timeline.t1200 },
    { time: '13:00', event: t.timeline.t1300 },
    { time: '14:00', event: t.timeline.t1400 },
    { time: '15:30', event: t.timeline.t1530 },
    { time: '16:30', event: t.timeline.t1630 },
    { time: '17:00', event: t.timeline.t1700 },
    { time: '18:30', event: t.timeline.t1830 },
    { time: '18:50', event: t.timeline.t1850 },
  ];

  return (
    <section id="program" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2 
          className="font-heading text-3xl md:text-5xl font-bold text-center text-slate-900 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.timeline.title}
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[39px] md:left-[50%] top-0 bottom-0 w-px bg-sky-200"></div>

          <div className="space-y-6 md:space-y-8">
            {program.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-50px", once: true }}
                transition={{ duration: 0.5, delay: idx % 2 === 0 ? 0 : 0.1 }}
                className={`relative flex items-center ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                } flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[35px] md:left-1/2 -ml-[4px] w-[9px] h-[9px] rounded-full bg-sky-500 ring-4 ring-sky-100 z-10"></div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 flex flex-row items-center ${
                  idx % 2 === 0 ? 'pl-24 md:pl-0 md:pr-12 md:justify-end' : 'pl-24 md:pl-12 md:justify-start'
                }`}>
                  <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between w-full md:w-auto md:min-w-[250px] gap-4 transition-transform hover:-translate-y-1">
                    <span className="font-heading font-semibold text-sky-600 text-lg">{item.time}</span>
                    <span className="text-slate-700 font-medium text-right md:text-left">{item.event}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
