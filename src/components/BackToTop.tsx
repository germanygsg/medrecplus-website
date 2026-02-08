import { useState, useEffect } from 'react';
import { ArrowUp } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollDirection } from '../hooks/useScrollDirection';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const scrollDir = useScrollDirection();

    // Check if mobile sticky bar is visible (shown when scrolling up)
    const isMobileStickyBarVisible = scrollDir !== 'down';

    useEffect(() => {
        const checkVisibility = () => {
            const featuresSection = document.getElementById('features');
            if (featuresSection) {
                const rect = featuresSection.getBoundingClientRect();
                // Show button when Features section reaches top of viewport
                setIsVisible(rect.top <= 100);
            }
        };

        window.addEventListener('scroll', checkVisibility, { passive: true });
        checkVisibility(); // Initial check

        return () => window.removeEventListener('scroll', checkVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToTop}
                    className="fixed z-40 flex items-center justify-center w-12 h-12 bg-white border border-slate-200 rounded-full shadow-lg shadow-slate-200/50 text-slate-600 hover:text-primary-600 hover:border-primary-200 transition-colors cursor-pointer"
                    style={{
                        right: '1rem',
                        // Account for mobile sticky bar (approx 80px height + safe area)
                        bottom: isMobileStickyBarVisible ? 'calc(5rem + env(safe-area-inset-bottom, 0px) + 1rem)' : '1.5rem',
                        transition: 'bottom 0.3s ease-in-out'
                    }}
                    aria-label="Back to top"
                >
                    <ArrowUp size={22} weight="bold" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
