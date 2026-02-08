import { Heart } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Helper to render anchor or Link based on whether we're on home page
  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    if (href.startsWith('#')) {
      if (isHomePage) {
        return <a href={href} className="text-sm text-slate-400 hover:text-white transition-colors">{children}</a>;
      }
      return <Link to={`/${href}`} className="text-sm text-slate-400 hover:text-white transition-colors">{children}</Link>;
    }
    return <Link to={href} className="text-sm text-slate-400 hover:text-white transition-colors">{children}</Link>;
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <motion.img
                whileHover={{ rotate: 10 }}
                src={logo}
                alt="MedRecPlus"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-bold text-white tracking-tight">
                MedRec<span className="text-primary-400">Plus</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Secure, offline-first medical records management.
              One-time purchase. No subscription.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              <li><NavLink href="#features">Features</NavLink></li>
              <li><NavLink href="#security">Security</NavLink></li>
              <li><NavLink href="#pricing">Pricing</NavLink></li>
              <li><NavLink href="#faq">FAQ</NavLink></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li><NavLink href="/privacy">Privacy Policy</NavLink></li>
              <li><NavLink href="/terms">Terms of Service</NavLink></li>
              <li><NavLink href="/refund">Refund Policy</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:support@medrecplus.my.id"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  support@medrecplus.my.id
                </a>
              </li>
              <li><NavLink href="#contact">Contact Us</NavLink></li>
              <li>
                <a href="/app/" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Open App
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {year} BSP Center Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart weight="fill" className="text-rose-500" size={12} />
            </motion.div>
            <span>for privacy-conscious healthcare providers.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
