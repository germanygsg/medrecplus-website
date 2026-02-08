import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { useEffect, useRef, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  viewportAmount?: number;
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.5,
  viewportAmount = 0.3,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: viewportAmount, once });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  const getVariants = (): Variants => {
    const hidden: any = { opacity: 0 };
    const visible: any = { 
      opacity: 1, 
      transition: { duration, delay, ease: 'easeOut' }
    };

    switch (direction) {
      case 'up':
        hidden.y = 30;
        visible.y = 0;
        break;
      case 'down':
        hidden.y = -30;
        visible.y = 0;
        break;
      case 'left':
        hidden.x = 30;
        visible.x = 0;
        break;
      case 'right':
        hidden.x = -30;
        visible.x = 0;
        break;
      case 'none':
        // Just fade
        break;
    }

    return { hidden, visible };
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
