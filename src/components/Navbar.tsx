import { useState, useEffect, useCallback } from 'react';
import { List, X } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Security', href: '#security' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const isCompact = scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section for highlighting nav links
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const smoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    },
    []
  );

  return (
    <nav
      className="fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out"
      style={{
        top: isCompact ? '12px' : '0px',
        width: isCompact ? 'min(600px, calc(100% - 2rem))' : '100%',
        backgroundColor: isCompact || open ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isCompact || open ? 'blur(12px)' : 'none',
        boxShadow: isCompact
          ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)'
          : open
            ? '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
            : 'none',
        borderRadius: isCompact ? '16px' : '0px',
        borderTop: isCompact ? '1px solid rgba(226, 232, 240, 0.6)' : 'none',
        borderRight: isCompact ? '1px solid rgba(226, 232, 240, 0.6)' : 'none',
        borderBottom: isCompact ? '1px solid rgba(226, 232, 240, 0.6)' : open ? '1px solid rgba(226, 232, 240, 0.6)' : 'none',
        borderLeft: isCompact ? '1px solid rgba(226, 232, 240, 0.6)' : 'none'
      }}
    >
      <div
        className="transition-all duration-500 ease-in-out"
        style={{
          maxWidth: isCompact ? '600px' : '1280px',
          margin: '0 auto',
          padding: isCompact ? '0 1rem' : '0 1rem'
        }}
      >
        <div
          className="flex items-center justify-between transition-all duration-500 ease-in-out"
          style={{
            height: isCompact ? '3.5rem' : '4rem'
          }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0 transition-all duration-500 ease-in-out"
            style={{ gap: isCompact ? '0.5rem' : '0.625rem' }}>
            <img
              src={logo}
              alt="MedRecPlus"
              className="rounded-lg transition-all duration-500 ease-in-out"
              style={{
                width: isCompact ? '28px' : '36px',
                height: isCompact ? '28px' : '36px'
              }}
            />
            <span
              className="font-bold text-slate-900 tracking-tight transition-all duration-500 ease-in-out"
              style={{ fontSize: isCompact ? '0.875rem' : '1.125rem' }}
            >
              MedRec<span className="text-primary-600">Plus</span>
            </span>
          </a>

          {/* Desktop links - centered when compact */}
          <div className={`hidden md:flex items-center gap-1 transition-all duration-500 ease-in-out ${isCompact ? 'absolute left-1/2 -translate-x-1/2' : ''
            }`}>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => smoothScroll(e, l.href)}
                className={`relative rounded-lg font-medium transition-all duration-500 ease-in-out ${isCompact
                  ? activeSection === l.href
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  : activeSection === l.href
                    ? 'text-primary-600'
                    : 'text-slate-600 hover:text-primary-600'
                  }`}
                style={{
                  padding: isCompact ? '0.375rem 0.625rem' : '0.5rem 0.875rem',
                  fontSize: isCompact ? '0.75rem' : '0.875rem'
                }}
              >
                {l.label}
                {activeSection === l.href && !isCompact && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary-600 rounded-full"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className={`hidden md:flex items-center transition-all duration-500 ease-in-out ${isCompact ? 'gap-2' : 'gap-3'
            }`}>
            <a
              href="/app/"
              className="font-medium text-slate-700 hover:text-primary-600 transition-all duration-300"
              style={{
                padding: isCompact ? '0' : '0.5rem 1rem',
                fontSize: isCompact ? '0' : '0.875rem',
                opacity: isCompact ? 0 : 1,
                width: isCompact ? '0' : 'auto',
                overflow: 'hidden',
                whiteSpace: 'nowrap'
              }}
            >
              Open App
            </a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#pricing"
              onClick={(e) => smoothScroll(e, '#pricing')}
              className="font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all duration-500 ease-in-out shadow-sm shadow-primary-600/20"
              style={{
                padding: isCompact ? '0.375rem 0.875rem' : '0.625rem 1.25rem',
                fontSize: isCompact ? '0.75rem' : '0.875rem'
              }}
            >
              {isCompact ? 'Buy' : 'Buy — $20'}
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden -mr-1 rounded-lg text-slate-600 hover:bg-slate-100 transition-all duration-500 ease-in-out"
            style={{
              padding: isCompact ? '0.375rem' : '0.5rem'
            }}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? (
              <X size={isCompact ? 20 : 22} weight="bold" />
            ) : (
              <List size={isCompact ? 20 : 22} weight="bold" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/60 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => smoothScroll(e, l.href)}
                  className="block px-3 py-2.5 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="/app/"
                  className="block px-3 py-2.5 text-base font-medium text-center text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Open App
                </a>
                <a
                  href="#pricing"
                  onClick={(e) => smoothScroll(e, '#pricing')}
                  className="block px-3 py-2.5 text-base font-semibold text-center text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-colors"
                >
                  Buy MedRecPlus — $20
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
