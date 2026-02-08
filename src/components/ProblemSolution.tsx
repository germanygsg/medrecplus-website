import { CurrencyDollar, CloudWarning, Timer, ArrowRight, CheckCircle } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

const PROBLEMS = [
  {
    icon: CurrencyDollar,
    title: 'Subscription Fatigue',
    desc: 'Monthly fees for basic record-keeping drain your budget — and lock you in.'
  },
  {
    icon: CloudWarning,
    title: 'Cloud Privacy Risks',
    desc: 'Patient data on third-party servers raises compliance concerns and breach risk.'
  },
  {
    icon: Timer,
    title: 'Slow, Bloated EMRs',
    desc: 'Enterprise systems designed for hospitals, not the speed small clinics need.'
  }
];

const SOLUTIONS = [
  'Pay once, own forever — no recurring fees',
  'Data stays on your device, not in the cloud',
  'Built for speed: loads in under 2 seconds',
  'Works fully offline — even without internet'
];

export default function ProblemSolution() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="why">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateOnScroll direction="up" className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">
            Why MedRecPlus?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Built for clinics tired of the status quo
          </h2>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Problems */}
          <div>
            <AnimateOnScroll direction="right" delay={0.2} className="mb-6">
              <h3 className="text-lg font-semibold text-slate-400 uppercase tracking-wider">
                The Problem
              </h3>
            </AnimateOnScroll>

            <div className="space-y-5">
              {PROBLEMS.map((p, i) => (
                <AnimateOnScroll
                  key={p.title}
                  direction="right"
                  delay={0.3 + (i * 0.1)}
                  className="group"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-red-50/60 border border-red-100/60 transition-colors hover:bg-red-50 hover:border-red-200"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                      <p.icon size={22} weight="duotone" className="text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{p.title}</p>
                      <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Solution */}
          <AnimateOnScroll direction="left" delay={0.4}>
            <div className="relative">
              <h3 className="text-lg font-semibold text-accent-600 uppercase tracking-wider mb-6 flex items-center gap-2">
                <ArrowRight size={18} weight="bold" /> The Solution
              </h3>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50/40 border border-primary-100/60 shadow-lg shadow-primary-900/5"
              >
                <p className="text-xl font-bold text-slate-900 mb-5">
                  MedRecPlus gives you everything you need — nothing you don't.
                </p>
                <ul className="space-y-3.5">
                  {SOLUTIONS.map((s, i) => (
                    <motion.li
                      key={s}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 shrink-0 mt-0.5 rounded-full bg-accent-500 flex items-center justify-center">
                        <CheckCircle size={14} weight="bold" className="text-white" />
                      </div>
                      <span className="text-slate-700 leading-snug">{s}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#pricing"
                  className="mt-7 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all shadow-sm btn-shimmer"
                >
                  Get Started for $20 <ArrowRight size={16} weight="bold" />
                </motion.a>
              </motion.div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
