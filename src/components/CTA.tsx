import { ArrowRight } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

export default function CTA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl"
        />
      </div>

      <AnimateOnScroll direction="up" className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Ready to simplify your clinic?
        </h2>
        <p className="mt-5 text-lg sm:text-xl text-primary-100 max-w-xl mx-auto">
          Join clinics worldwide who've switched to MedRecPlus — fast, private, and
          yours forever.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <motion.a
            whileHover={{ y: -4, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-primary-700 bg-white hover:bg-primary-50 rounded-2xl transition-all shadow-xl shadow-primary-900/20"
          >
            Buy MedRecPlus — $20 <ArrowRight size={20} weight="bold" />
          </motion.a>
          <motion.a
            whileHover={{ y: -2, borderColor: 'rgba(255, 255, 255, 0.6)' }}
            whileTap={{ scale: 0.98 }}
            href="/app/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-2xl transition-all"
          >
            Open App →
          </motion.a>
        </div>

        <p className="mt-6 text-sm text-primary-200">
          One-time payment • Instant access • 30-day money-back guarantee
        </p>
      </AnimateOnScroll>
    </section>
  );
}
