import { useEffect, useRef, useState, type RefObject } from 'react';

/**
 * Hook that triggers a reveal animation when element enters the viewport.
 * Returns a ref to attach to the element and a boolean indicating visibility.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px'
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible];
}

/**
 * Hook for staggered children reveals.
 * Returns a ref for the container and an array of visible states for N children.
 */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  count: number,
  staggerMs = 120,
  threshold = 0.1
): [RefObject<T | null>, boolean[]] {
  const ref = useRef<T | null>(null);
  const [triggered, setTriggered] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(count).fill(false));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (!triggered) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < count; i++) {
      timers.push(
        setTimeout(() => {
          setVisibleItems((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, i * staggerMs)
      );
    }

    return () => timers.forEach(clearTimeout);
  }, [triggered, count, staggerMs]);

  return [ref, visibleItems];
}
