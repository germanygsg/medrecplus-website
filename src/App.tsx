import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const BuyPage = lazy(() => import('./pages/BuyPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const RefundPage = lazy(() => import('./pages/RefundPage'));
const Footer = lazy(() => import('./components/Footer'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-10 h-10 rounded-full border-3 border-primary-200 border-t-primary-600 animate-spin" />
  </div>
);

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Layout component for pages that show navbar and footer
function Layout({ children, showNavbar = true }: { children: React.ReactNode; showNavbar?: boolean }) {
  return (
    <>
      {showNavbar && <Navbar />}
      <main>{children}</main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-900 antialiased">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/buy" element={<Layout showNavbar={false}><BuyPage /></Layout>} />
            <Route path="/privacy" element={<Layout showNavbar={false}><PrivacyPage /></Layout>} />
            <Route path="/terms" element={<Layout showNavbar={false}><TermsPage /></Layout>} />
            <Route path="/refund" element={<Layout showNavbar={false}><RefundPage /></Layout>} />
            <Route path="/contact" element={<Layout><HomePage /></Layout>} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}
