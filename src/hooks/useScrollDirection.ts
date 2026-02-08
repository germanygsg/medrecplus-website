import { useState, useEffect, useRef } from 'react';

type ScrollDirection = 'up' | 'down' | null;

/**
 * Tracks scroll direction with a threshold to avoid jitter.
 * Returns 'down' when user scrolls down, 'up' when scrolling up.
 */
export function useScrollDirection(threshold = 8): ScrollDirection {
  const [direction, setDirection] = useState<ScrollDirection>(null);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;
        const diff = y - lastY.current;

        if (Math.abs(diff) >= threshold) {
          setDirection(diff > 0 ? 'down' : 'up');
          lastY.current = y;
        }

        ticking.current = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return direction;
}
