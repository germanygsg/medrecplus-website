import { DeviceMobile, Monitor, ChartBar } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

export default function MobileSupport() {
  return (
    <section className="py-20 sm:py-32 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll direction="up" className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Scale without <br className="hidden sm:block" />
            switching tools
          </h2>
          <p className="text-lg text-slate-400 max-w-xl">
            From pocket-sized patient rounds to full-screen administrative power.
            MedRecPlus adapts to your workflow, not the other way around.
          </p>
        </AnimateOnScroll>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">

          {/* Card 1: Analytics (Tall Left) */}
          <AnimateOnScroll
            direction="up"
            delay={0.1}
            className="lg:row-span-2 relative group overflow-hidden rounded-3xl bg-slate-800 border border-slate-700/50"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/90 z-10" />
            <div className="relative z-20 p-8 h-full flex flex-col">
              <div className="mb-auto">
                <h3 className="text-xl font-bold text-white mb-2">Analytics & Insights</h3>
                <p className="text-sm text-slate-400">Track patient volume, revenue trends, and clinic performance in real-time.</p>
              </div>
            </div>
            <motion.div
              className="absolute inset-x-4 bottom-4 top-32 rounded-xl overflow-hidden shadow-2xl border border-slate-700/30 bg-slate-900"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/ss/Reports.webp"
                alt="Analytics Dashboard"
                className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          </AnimateOnScroll>

          {/* Card 2: Wide Dashboard (Top Right) */}
          <AnimateOnScroll
            direction="up"
            delay={0.2}
            className="lg:col-span-2 relative group overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-700"
          >
            <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
            <div className="relative z-20 p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Desktop Powerhouse</h3>
                  <p className="text-sm text-indigo-100 max-w-sm">Full administrative control with keyboard shortcuts and bulk actions.</p>
                </div>
              </div>

              <motion.div
                className="relative flex-1 rounded-t-xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 ml-8"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <img
                  src="/ss/DashboardDark.webp"
                  alt="Desktop Dashboard"
                  className="w-full h-auto object-cover object-left-top"
                />
              </motion.div>
            </div>
          </AnimateOnScroll>

          {/* Card 3: Mobile/Tablet (Bottom Right 1) */}
          <AnimateOnScroll
            direction="up"
            delay={0.3}
            className="relative group overflow-hidden rounded-3xl bg-slate-800 border border-slate-700/50"
          >
            <div className="p-8 pb-0 h-full flex flex-col">
              <h3 className="text-lg font-bold text-white mb-2">Tablet Mode</h3>
              <p className="text-sm text-slate-400 mb-6">Perfect for bedside charting.</p>
              <motion.div
                className="flex-1 relative"
                whileHover={{ y: -5 }}
              >
                <img
                  src="/ss/TabletDashboard.webp"
                  alt="Tablet Interface"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] max-w-none rounded-t-xl shadow-2xl border border-slate-700"
                />
              </motion.div>
            </div>
          </AnimateOnScroll>

          {/* Card 4: Security/Mobile (Bottom Right 2) */}
          <AnimateOnScroll
            direction="up"
            delay={0.4}
            className="relative group overflow-hidden rounded-3xl bg-slate-800 border border-slate-700/50"
          >
            <div className="p-8 pb-0 h-full flex flex-col">
              <h3 className="text-lg font-bold text-white mb-2">Secure Lockscreen</h3>
              <p className="text-sm text-slate-400 mb-6">Privacy protection built-in.</p>
              <div className="flex-1 relative flex justify-center">
                <motion.div
                  className="w-3/4 relative top-2 rounded-t-2xl overflow-hidden shadow-2xl border border-slate-700"
                  whileHover={{ y: -10 }}
                >
                  <img
                    src="/ss/Lockscreen.webp"
                    alt="Security Lockscreen"
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
