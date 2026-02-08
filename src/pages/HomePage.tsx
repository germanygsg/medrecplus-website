import { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import MobileStickyBar from '../components/MobileStickyBar';
import BackToTop from '../components/BackToTop';

// Lazy load below-the-fold components
const ProblemSolution = lazy(() => import('../components/ProblemSolution'));
const Features = lazy(() => import('../components/Features'));
const MobileSupport = lazy(() => import('../components/MobileSupport'));
const Security = lazy(() => import('../components/Security'));
const HowItWorks = lazy(() => import('../components/HowItWorks'));
const Pricing = lazy(() => import('../components/Pricing'));
const Contact = lazy(() => import('../components/Contact'));
const FAQ = lazy(() => import('../components/FAQ'));
const CTA = lazy(() => import('../components/CTA'));

const SectionLoader = () => (
    <div className="w-full py-24 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-primary-200 border-t-primary-600 animate-spin" />
    </div>
);

export default function HomePage() {
    return (
        <>
            <Hero />

            <Suspense fallback={<SectionLoader />}>
                <ProblemSolution />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <Features />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <MobileSupport />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <Security />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <HowItWorks />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <Pricing />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <Contact />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <FAQ />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <CTA />
            </Suspense>

            <BackToTop />
            <MobileStickyBar />
            {/* Bottom spacer for mobile sticky bar */}
            <div className="h-20 md:hidden" aria-hidden="true" />
        </>
    );
}
