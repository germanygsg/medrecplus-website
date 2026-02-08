import { CreditCard, CursorClick, Stethoscope, ArrowRight } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

const STEPS = [
  {
    icon: CreditCard,
    num: '1',
    title: 'Buy Once',
    desc: 'One-time $20 payment. No subscription, no hidden fees, no upsells.'
  },
  {
    icon: CursorClick,
    num: '2',
    title: 'Open the App',
    desc: 'Access MedRecPlus instantly in your browser. Nothing to install.'
  },
  {
    icon: Stethoscope,
    num: '3',
    title: 'Start Managing Patients',
    desc: 'Add your first patient, schedule appointments, and generate invoices in minutes.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll direction="up" className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Up and running in 3 steps
          </h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
          {STEPS.map((s, i) => (
            <AnimateOnScroll
              key={s.title}
              direction="up"
              delay={i * 0.2}
              className="relative text-center group"
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden sm:block absolute top-10 left-[60%] right-0 h-px bg-gradient-to-r from-primary-200 to-primary-50" />
              )}

              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white border-2 border-primary-100 shadow-sm mb-5"
              >
                <s.icon size={32} weight="duotone" className="text-primary-600" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center shadow ring-2 ring-white">
                  {s.num}
                </span>
              </motion.div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 max-w-xs mx-auto leading-relaxed">
                {s.desc}
              </p>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll direction="up" delay={0.8} className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors hover:underline underline-offset-4"
          >
            Get Started Now <ArrowRight size={16} weight="bold" />
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
