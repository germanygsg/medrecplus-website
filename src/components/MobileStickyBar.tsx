import { AppWindow, ShoppingCart } from '@phosphor-icons/react';
import { useScrollDirection } from '../hooks/useScrollDirection';

export default function MobileStickyBar() {
  const scrollDir = useScrollDirection();
  // Hide when scrolling DOWN, show when scrolling UP or initial
  const isHidden = scrollDir === 'down';

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/60 shadow-[0_-2px_10px_rgba(0,0,0,0.06)] px-4 py-3 safe-area-pb transition-transform duration-300"
      style={{
        transform: isHidden ? 'translateY(100%)' : 'translateY(0)'
      }}
    >
      <div className="flex items-center gap-3">
        <a
          href="/app/"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 text-center text-sm font-semibold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
        >
          <AppWindow size={18} weight="duotone" className="text-slate-500" />
          Open App
        </a>
        <a
          href="#pricing"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 text-center text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-colors shadow-sm"
        >
          <ShoppingCart size={18} weight="duotone" className="text-white/90" />
          Buy — $20
        </a>
      </div>
    </div>
  );
}
