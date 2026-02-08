import { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

const FAQS = [
  {
    q: 'Is MedRecPlus a web app or desktop software?',
    a: 'MedRecPlus is a web application you access through your browser at medrecplus.my.id/app/. There\'s nothing to download or install — just open it and start working. It also works as a Progressive Web App (PWA), so you can "install" it on your device for quick access.'
  },
  {
    q: 'Does it really work offline?',
    a: 'Yes. After your first visit, MedRecPlus caches everything locally. You can access patient records, create appointments, and generate invoices without any internet connection. Data syncs automatically when you reconnect (if you enable cloud sync).'
  },
  {
    q: 'Is my patient data uploaded to the cloud?',
    a: 'No. By default, all data stays on your device using encrypted local storage. Cloud sync is optional — and when enabled, data is encrypted end-to-end. We never have access to your patient records.'
  },
  {
    q: 'Can I use it on my phone or tablet?',
    a: 'Absolutely. MedRecPlus is fully responsive and touch-optimized. It works great on phones during patient rounds and on tablets for bedside charting. The interface adapts to any screen size.'
  },
  {
    q: 'What do I get for $20?',
    a: 'Full lifetime access to the complete application — patient records, appointment scheduling, clinical notes, billing, reports, cloud sync, and all future updates. No feature gates, no per-user pricing.'
  },
  {
    q: 'Is there a free trial?',
    a: 'We offer a 30-day money-back guarantee instead. Buy with confidence — if MedRecPlus doesn\'t meet your needs, get a full refund, no questions asked.'
  },
  {
    q: 'Can multiple staff members use it?',
    a: 'Yes. You can set up multiple operator profiles within the app, each with their own records and preferences. The license covers your entire clinic.'
  },
  {
    q: 'How do I back up my data?',
    a: 'MedRecPlus offers built-in export functionality so you can download your data anytime. If you enable optional cloud sync via Supabase, your data is also backed up securely in the cloud.'
  }
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group/faq"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-slate-900 group-hover/faq:text-primary-600 transition-colors duration-300">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-slate-400"
        >
          <CaretDown size={20} weight="bold" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-5 pr-8">
              <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll direction="up" className="text-center mb-12">
          <p className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently asked questions
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll direction="up" delay={0.2} className="bg-white rounded-2xl shadow-sm border border-slate-200/60 divide-y-0 px-6 sm:px-8">
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
