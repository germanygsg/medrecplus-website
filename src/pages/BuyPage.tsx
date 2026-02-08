import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    CheckCircle,
    ShieldCheck,
    CreditCard,
    GoogleLogo,
    ArrowLeft,
    Sparkle,
    Lightning,
    Desktop,
    DeviceMobile,
    AndroidLogo,
    Globe,
    Info
} from '@phosphor-icons/react';

const INCLUDED = [
    'Full patient records management',
    'Appointment scheduling & reminders',
    'Clinical notes with vital signs',
    'Billing & invoice generation',
    'Reports & analytics dashboard',
    'Offline-first operation',
    'AES-256 data encryption',
    'Optional cloud sync & backup',
    'Lifetime updates included',
    'Cross-platform: Web, Windows, Linux, Android'
];

const PLATFORMS = [
    { icon: Globe, label: 'Web App', available: true },
    { icon: Desktop, label: 'Windows', available: true },
    { icon: Desktop, label: 'Linux', available: true },
    { icon: AndroidLogo, label: 'Android', available: true },
    { icon: DeviceMobile, label: 'iOS', available: false, soon: true }
];

export default function BuyPage() {
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePurchase = () => {
        setIsProcessing(true);
        // Redirect to payment gateway (placeholder - replace with actual payment URL)
        setTimeout(() => {
            window.location.href = 'https://pay.medrecplus.my.id/checkout';
        }, 500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Header */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
                >
                    <ArrowLeft size={18} />
                    Back to home
                </Link>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                {/* Page Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-10"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold text-primary-700 bg-primary-50 rounded-full border border-primary-200 mb-4">
                        <Sparkle size={14} weight="fill" className="text-amber-400" />
                        LIFETIME ACCESS
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
                        Purchase MedRecPlus
                    </h1>
                    <p className="text-lg text-slate-600 max-w-xl mx-auto">
                        One payment, lifetime access. No subscriptions, no hidden fees.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Order Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                            <h2 className="text-lg font-semibold text-slate-900 mb-5">What's Included</h2>

                            <ul className="space-y-3 mb-6">
                                {INCLUDED.map((item, i) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + i * 0.03 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-5 h-5 shrink-0 mt-0.5 rounded-full bg-accent-100 flex items-center justify-center">
                                            <CheckCircle size={14} weight="bold" className="text-accent-600" />
                                        </div>
                                        <span className="text-sm text-slate-700">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="border-t border-slate-100 pt-5">
                                <h3 className="text-sm font-medium text-slate-900 mb-3">Available Platforms</h3>
                                <div className="flex flex-wrap gap-2">
                                    {PLATFORMS.map((platform) => (
                                        <div
                                            key={platform.label}
                                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg ${platform.available
                                                    ? 'bg-slate-100 text-slate-700'
                                                    : 'bg-slate-50 text-slate-400'
                                                }`}
                                        >
                                            <platform.icon size={14} />
                                            {platform.label}
                                            {platform.soon && (
                                                <span className="text-[10px] text-primary-600 font-semibold">Soon</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Trust badges */}
                        <div className="mt-6 grid grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-white rounded-xl border border-slate-100">
                                <ShieldCheck size={24} className="text-accent-600 mx-auto mb-2" />
                                <p className="text-xs font-medium text-slate-700">Secure Payment</p>
                            </div>
                            <div className="text-center p-4 bg-white rounded-xl border border-slate-100">
                                <Lightning size={24} className="text-primary-600 mx-auto mb-2" />
                                <p className="text-xs font-medium text-slate-700">Instant Access</p>
                            </div>
                            <div className="text-center p-4 bg-white rounded-xl border border-slate-100">
                                <CheckCircle size={24} className="text-amber-500 mx-auto mb-2" />
                                <p className="text-xs font-medium text-slate-700">30-Day Refund</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Payment Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg sticky top-8">
                            <div className="text-center mb-6">
                                <p className="text-sm font-medium text-slate-500 mb-1">One-time payment</p>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-5xl font-extrabold text-slate-900">$20</span>
                                    <span className="text-lg text-slate-400 font-medium">USD</span>
                                </div>
                                <p className="text-sm text-slate-500 mt-1">
                                    Pay once. Use forever.
                                </p>
                            </div>

                            <div className="space-y-3 mb-6">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handlePurchase}
                                    disabled={isProcessing}
                                    className="w-full flex items-center justify-center gap-2 py-4 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 rounded-xl transition-all shadow-lg shadow-primary-600/20 btn-shimmer"
                                >
                                    <CreditCard size={20} weight="bold" />
                                    {isProcessing ? 'Processing...' : 'Pay with Card'}
                                </motion.button>

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-slate-200" />
                                    </div>
                                    <div className="relative flex justify-center text-xs">
                                        <span className="px-3 bg-white text-slate-400">or</span>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => {
                                        window.location.href = 'https://pay.medrecplus.my.id/checkout?method=google';
                                    }}
                                    className="w-full flex items-center justify-center gap-2 py-4 text-base font-semibold text-slate-700 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl transition-all"
                                >
                                    <GoogleLogo size={20} weight="bold" />
                                    Pay with Google Pay
                                </motion.button>
                            </div>

                            <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                                <Info size={16} className="text-primary-600 shrink-0 mt-0.5" />
                                <p className="text-xs text-primary-800">
                                    After payment, you'll receive an email with your license key and download links for all platforms.
                                </p>
                            </div>

                            <div className="mt-5 pt-5 border-t border-slate-100 text-center">
                                <p className="text-xs text-slate-500">
                                    By purchasing, you agree to our{' '}
                                    <Link to="/terms" className="text-primary-600 hover:underline">Terms of Service</Link>
                                    {' '}and{' '}
                                    <Link to="/refund" className="text-primary-600 hover:underline">Refund Policy</Link>.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-16"
                >
                    <h2 className="text-xl font-bold text-slate-900 text-center mb-8">
                        Frequently Asked Questions
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-xl border border-slate-100 p-5">
                            <h3 className="font-medium text-slate-900 mb-2">How do I access the app after purchase?</h3>
                            <p className="text-sm text-slate-600">
                                After payment, you'll receive an email with your license key. Use it to unlock the Web App instantly, or download the desktop/mobile versions from the links provided.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl border border-slate-100 p-5">
                            <h3 className="font-medium text-slate-900 mb-2">Is there a subscription for updates?</h3>
                            <p className="text-sm text-slate-600">
                                No! Your one-time payment includes all future updates. No recurring fees, ever.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl border border-slate-100 p-5">
                            <h3 className="font-medium text-slate-900 mb-2">Can I use it on multiple devices?</h3>
                            <p className="text-sm text-slate-600">
                                Yes! Your license works across all your personal devices — desktop, laptop, tablet, and phone.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl border border-slate-100 p-5">
                            <h3 className="font-medium text-slate-900 mb-2">What if I'm not satisfied?</h3>
                            <p className="text-sm text-slate-600">
                                We offer a 30-day money-back guarantee. If MedRecPlus doesn't meet your needs, contact us for a full refund.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
