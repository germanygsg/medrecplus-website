import { ShieldCheck, WifiSlash, EyeSlash, LockKey, CloudSlash, Fingerprint } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

const ITEMS = [
  {
    icon: LockKey,
    title: 'Encrypted Storage',
    desc: 'Patient data is encrypted with AES-256 via SQLCipher. Only your password unlocks it.'
  },
  {
    icon: WifiSlash,
    title: 'Offline by Default',
    desc: 'No internet connection required. Your records are always available, always fast.'
  },
  {
    icon: CloudSlash,
    title: 'No Third-Party Servers',
    desc: 'Data lives on your device, not ours. We never see, store, or transmit patient information.'
  },
  {
    icon: EyeSlash,
    title: 'No Tracking',
    desc: 'Zero analytics, zero telemetry, zero ads. MedRecPlus respects your privacy completely.'
  },
  {
    icon: Fingerprint,
    title: 'Auto-Lock Protection',
    desc: 'Automatic screen lock after inactivity prevents unauthorized access.'
  },
  {
    icon: ShieldCheck,
    title: 'You Own Your Data',
    desc: 'Export everything anytime. No vendor lock-in, no data hostage scenarios.'
  }
];

export default function Security() {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white" id="security">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll direction="up" className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary-400 tracking-wide uppercase mb-3">
            Security & Privacy
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Your patients' data deserves better
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            MedRecPlus was designed from the ground up for data sovereignty.
            No cloud, no compromise.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <AnimateOnScroll
              key={item.title}
              direction="up"
              delay={0.2 + (i * 0.1)}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -5, backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
                className="h-full p-6 rounded-2xl bg-slate-800/60 border border-slate-700/40 hover:border-primary-500/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-600/15 flex items-center justify-center mb-4">
                  <item.icon size={24} weight="duotone" className="text-primary-400" />
                </div>
                <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">{item.desc}</p>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
