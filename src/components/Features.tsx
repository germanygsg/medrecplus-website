import { useState, useEffect, useCallback, useRef } from 'react';
import {
  Users,
  CalendarCheck,
  FileText,
  Receipt,
  ChartBar,
  Database,
  CaretLeft,
  CaretRight,
  Pause,
  Play
} from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

const FEATURES = [
  {
    icon: Users,
    title: 'Patient Records',
    desc: 'Complete patient profiles with demographics, history, and diagnoses — searchable in milliseconds.',
    screenshot: '/ss/PatientTables.webp',
    alt: 'Patient list view with search and filtering'
  },
  {
    icon: CalendarCheck,
    title: 'Appointments',
    desc: 'Schedule, track, and manage appointments with vital signs, treatments, and clinical notes.',
    screenshot: '/ss/NewAppointment.webp',
    alt: 'New appointment form with vital signs and treatment entry'
  },
  {
    icon: FileText,
    title: 'Clinical Notes',
    desc: 'Detailed appointment records with vital signs tracking, treatment plans, and patient analysis.',
    screenshot: '/ss/PatientAnalysis.webp',
    alt: 'Patient analysis view with clinical data'
  },
  {
    icon: Receipt,
    title: 'Billing & Invoices',
    desc: 'Generate invoices automatically from appointments. Track payments and outstanding balances.',
    screenshot: '/ss/InvoiceDetails.webp',
    alt: 'Invoice details showing itemized billing'
  },
  {
    icon: ChartBar,
    title: 'Reports & Analytics',
    desc: 'Visual dashboards for patient trends, revenue insights, and clinic performance metrics.',
    screenshot: '/ss/Reports.webp',
    alt: 'Reports dashboard with charts and analytics'
  },
  {
    icon: Database,
    title: 'Backup & Restore',
    desc: 'Export your data anytime. Optional cloud sync keeps your records safe across devices.',
    screenshot: '/ss/PatientDetails.webp',
    alt: 'Patient details with comprehensive record view'
  }
];

const INTERVAL_MS = 5000;

export default function Features() {
  const [active, setActive] = useState(FEATURES.length); // Start at middle set
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const count = FEATURES.length;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const feat = FEATURES[active % count];

  // Create extended array for infinite loop - triple it to handle wrap-around smoothly
  const extendedFeatures = [...FEATURES, ...FEATURES, ...FEATURES];

  const goTo = useCallback((idx: number) => {
    setIsTransitioning(true);
    setActive(idx);
    setProgressKey((k) => k + 1);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Reset position for infinite loop - snap from second set to first set
  useEffect(() => {
    if (active >= count * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActive(count);
      }, 600);
      return () => clearTimeout(timer);
    } else if (active < count) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActive(count * 2 - 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [active, count]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timerRef.current);
  }, [paused, next]);

  // Touch swipe support
  const touchStart = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStart.current = null;
  };

  return (
    <section
      className="py-8 sm:py-10 bg-slate-50 overflow-hidden"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll direction="up" className="text-center max-w-2xl mx-auto mb-4">
          <p className="text-xs sm:text-sm font-semibold text-primary-600 tracking-wide uppercase mb-2">
            Features
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Everything your clinic needs
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600">
            From patient intake to invoicing — MedRecPlus handles your entire workflow.
          </p>
        </AnimateOnScroll>

        {/* Carousel */}
        <AnimateOnScroll
          direction="up"
          delay={0.2}
          className=""
        >
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Screenshot area - 3D Carousel */}
            <div
              className="relative"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              style={{ perspective: '2000px' }}
            >
              {/* Carousel container */}
              <div className="relative h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center">
                {/* Cards positioned individually */}
                {extendedFeatures.map((f, i) => {
                  const offset = i - active;
                  const isCenter = offset === 0;
                  const isVisible = Math.abs(offset) <= 3; // Show more cards for better endless effect

                  // Calculate horizontal position based on offset
                  const baseSpacing = 500; // pixels between card centers
                  const horizontalOffset = offset * baseSpacing;

                  return (
                    <div
                      key={i}
                      className="absolute flex-shrink-0 transition-all duration-600"
                      style={{
                        width: isCenter ? '90vw' : '40vw',
                        maxWidth: isCenter ? '1000px' : '500px',
                        minWidth: isCenter ? '300px' : '250px',
                        left: '50%',
                        opacity: isVisible ? (isCenter ? 1 : 0.5) : 0,
                        transform: `
                          translateX(calc(-50% + ${horizontalOffset}px))
                          scale(${isCenter ? 1.05 : 0.88})
                          translateZ(${isCenter ? '0px' : '-150px'})
                          rotateY(${offset * -5}deg)
                        `,
                        transformStyle: 'preserve-3d',
                        transition: isTransitioning ? 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                        zIndex: isCenter ? 20 : 10 - Math.abs(offset),
                        filter: isCenter ? 'none' : 'blur(1px) brightness(0.85)',
                        pointerEvents: isCenter ? 'auto' : 'none'
                      }}
                    >
                      <div className="relative shadow-2xl">
                        <img
                          src={f.screenshot}
                          alt={f.alt}
                          width={1200}
                          height={800}
                          className="w-full h-auto rounded-lg"
                          loading="lazy"
                        />
                        {/* Info overlay at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 sm:p-5 rounded-b-lg">
                          <div className="flex items-start gap-2">
                            <div className={`shrink-0 rounded-lg bg-white/25 backdrop-blur-sm flex items-center justify-center ${isCenter ? 'w-9 h-9 sm:w-10 sm:h-10' : 'w-7 h-7 sm:w-8 sm:h-8'}`}>
                              <f.icon weight="duotone" size={isCenter ? 22 : 18} className="text-white" />
                            </div>
                            <div className="min-w-0">
                              <h3 className={`font-bold text-white truncate ${isCenter ? 'text-base sm:text-lg' : 'text-sm'}`}>{f.title}</h3>
                              {isCenter && (
                                <p className="text-xs sm:text-sm text-white/90 mt-1 line-clamp-2 leading-relaxed">
                                  {f.desc}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Prev/Next arrows */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 z-30 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/60 shadow-lg flex items-center justify-center text-slate-600 hover:text-primary-600 hover:bg-white transition-colors"
                aria-label="Previous feature"
              >
                <CaretLeft weight="bold" size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 z-30 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/60 shadow-lg flex items-center justify-center text-slate-600 hover:text-primary-600 hover:bg-white transition-colors"
                aria-label="Next feature"
              >
                <CaretRight weight="bold" size={20} />
              </motion.button>
            </div>

            {/* Dot indicators + play/pause */}
            <div className="flex items-center justify-center gap-3 mt-3">
              <button
                onClick={() => setPaused(!paused)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                aria-label={paused ? 'Resume auto-play' : 'Pause auto-play'}
              >
                {paused ? <Play weight="fill" size={14} /> : <Pause weight="fill" size={14} />}
              </button>

              <div className="flex items-center gap-2">
                {FEATURES.map((f, i) => (
                  <button
                    key={f.title}
                    onClick={() => goTo(i + count)}
                    className="relative group/dot flex items-center justify-center py-2"
                    aria-label={`Go to ${f.title}`}
                    aria-current={(active % count) === i ? 'true' : undefined}
                  >
                    <div
                      className={`h-2 rounded-full transition-all duration-300 overflow-hidden ${(active % count) === i
                        ? 'w-8 bg-primary-200'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                        }`}
                    >
                      {(active % count) === i && (
                        <div
                          key={progressKey}
                          className="h-full bg-primary-600 rounded-full animate-carousel-progress"
                          style={{
                            animationDuration: `${INTERVAL_MS}ms`,
                            animationPlayState: paused ? 'paused' : 'running'
                          }}
                        />
                      )}
                    </div>
                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-slate-800 rounded-md opacity-0 group-hover/dot:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {f.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Feature pills row (desktop) */}
            <div className="hidden lg:flex items-center justify-center gap-2 mt-2">
              {FEATURES.map((f, i) => (
                <motion.button
                  key={f.title}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => goTo(i + count)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${(active % count) === i
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-600/20'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-primary-200 hover:text-primary-600'
                    }`}
                >
                  <f.icon weight={(active % count) === i ? "duotone" : "regular"} size={18} />
                  {f.title}
                </motion.button>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
