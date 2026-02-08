import { motion } from 'framer-motion';
import {
  ShieldCheck,
  WifiSlash,
  WifiHigh,
  CreditCard,
  ArrowRight
} from '@phosphor-icons/react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50/40 pt-24 sm:pt-32 pb-16 sm:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-100/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-accent-100/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-xs font-semibold text-primary-700 bg-primary-50 border border-primary-100 rounded-full"
            >
              <ShieldCheck size={16} weight="duotone" className="text-primary-600" />
              Trusted by privacy-first clinics
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
            >
              Medical Records,{' '}
              <span className="gradient-text-animated">
                Simplified.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-lg sm:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Manage patients, appointments, billing, and clinical notes — all in one
              fast, offline-capable app you own forever. No subscription. No cloud uploads. Just{' '}
              <strong className="text-slate-800">your data, your control.</strong>
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6 text-sm text-slate-500"
            >
              <span className="inline-flex items-center gap-1.5 group hover:text-primary-600 transition-colors">
                <CreditCard size={18} weight="duotone" className="text-accent-600 group-hover:scale-110 transition-transform" />
                One-time $20
              </span>
              <span className="inline-flex items-center gap-1.5 group hover:text-primary-600 transition-colors">
                <WifiSlash size={18} weight="duotone" className="text-accent-600 group-hover:scale-110 transition-transform" />
                Works offline
              </span>
              <span className="inline-flex items-center gap-1.5 group hover:text-primary-600 transition-colors">
                <WifiHigh size={18} weight="duotone" className="text-accent-600 group-hover:scale-110 transition-transform" />
                Optional sync
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-2xl shadow-lg shadow-primary-600/20 transition-all btn-shimmer"
              >
                Buy MedRecPlus — $20
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/app/"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:border-primary-200 hover:text-primary-600 rounded-2xl transition-all shadow-sm group"
              >
                Open App
                <ArrowRight size={16} weight="bold" className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>

          {/* Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative shadow-2xl shadow-slate-900/10"
            >
              <img
                src="/ss/Dashboard.webp"
                alt="MedRecPlus Dashboard showing patient overview, appointments, and quick actions"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
                loading="eager"
              />
            </motion.div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-3 animate-float"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-accent-100 flex items-center justify-center">
                  <ShieldCheck size={20} weight="duotone" className="text-accent-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">100% Local</p>
                  <p className="text-xs text-slate-500">Data never leaves your device</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
