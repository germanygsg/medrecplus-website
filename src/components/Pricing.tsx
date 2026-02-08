import { CheckCircle, Sparkle } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';

const INCLUDED = [
  'Patient records management',
  'Appointment scheduling',
  'Clinical notes & vital signs',
  'Billing & invoice generation',
  'Reports & analytics dashboard',
  'Offline-first operation',
  'Data encryption (AES-256)',
  'Optional cloud sync',
  'Lifetime updates',
  'Mobile & tablet support'
];

export default function Pricing() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll direction="up" className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Simple, honest pricing
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            No tiers. No per-seat charges. One price for everything.
          </p>
        </AnimateOnScroll>

        {/* Pricing card */}
        <AnimateOnScroll direction="up" delay={0.2} className="max-w-lg mx-auto">
          <motion.div
            whileHover={{ y: -5 }}
            className="relative rounded-3xl bg-gradient-to-br from-primary-600 to-primary-700 p-px shadow-2xl shadow-primary-600/20"
          >
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-primary-700 bg-primary-50 rounded-full border border-primary-200 shadow-sm whitespace-nowrap">
                <Sparkle size={14} weight="fill" className="text-amber-400" />
                LIFETIME ACCESS
              </span>
            </div>

            <div className="rounded-[calc(1.5rem-1px)] bg-white p-8 sm:p-10 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-primary-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

              {/* Price */}
              <div className="text-center relative">
                <p className="text-sm font-medium text-slate-500 mb-1">One-time payment</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl sm:text-6xl font-extrabold text-slate-900">$20</span>
                  <span className="text-lg text-slate-400 font-medium">USD</span>
                </div>
                <p className="text-sm text-slate-500 mt-2">
                  Pay once. Use forever. No subscription.
                </p>
              </div>

              {/* Divider */}
              <div className="my-8 border-t border-slate-100" />

              {/* Features list */}
              <ul className="space-y-3 mb-8">
                {INCLUDED.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.05) }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 shrink-0 mt-0.5 rounded-full bg-accent-100 flex items-center justify-center">
                      <CheckCircle size={14} weight="bold" className="text-accent-600" />
                    </div>
                    <span className="text-sm text-slate-700">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <Link to="/buy">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full py-4 text-center text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-2xl transition-all shadow-lg shadow-primary-600/20 btn-shimmer"
                >
                  Buy MedRecPlus — $20
                </motion.div>
              </Link>

              <p className="text-center text-xs text-slate-400 mt-4">
                Secure payment • Instant access • 30-day money-back guarantee
              </p>
            </div>
          </motion.div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
