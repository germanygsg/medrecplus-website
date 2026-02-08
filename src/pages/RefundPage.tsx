import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowsCounterClockwise, CheckCircle, Clock, Envelope, XCircle } from '@phosphor-icons/react';

export default function RefundPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
                    <ArrowLeft size={18} />
                    Back to home
                </Link>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 mb-4">
                        <ArrowsCounterClockwise size={32} weight="duotone" className="text-primary-600" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">Refund Policy</h1>
                    <p className="text-slate-500">Last updated: February 8, 2026</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="grid sm:grid-cols-3 gap-4 mb-10">
                    <div className="bg-accent-50 border border-accent-200 rounded-xl p-5 text-center">
                        <Clock size={28} weight="duotone" className="text-accent-600 mx-auto mb-2" />
                        <h3 className="font-semibold text-slate-900 text-sm">30-Day Window</h3>
                        <p className="text-xs text-slate-600 mt-1">Full refund within 30 days</p>
                    </div>
                    <div className="bg-primary-50 border border-primary-200 rounded-xl p-5 text-center">
                        <Envelope size={28} weight="duotone" className="text-primary-600 mx-auto mb-2" />
                        <h3 className="font-semibold text-slate-900 text-sm">Simple Process</h3>
                        <p className="text-xs text-slate-600 mt-1">Just email us</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
                        <CheckCircle size={28} weight="duotone" className="text-amber-600 mx-auto mb-2" />
                        <h3 className="font-semibold text-slate-900 text-sm">No Questions Asked</h3>
                        <p className="text-xs text-slate-600 mt-1">We respect your decision</p>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="prose prose-slate max-w-none bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
                    <h2 className="text-xl font-semibold text-slate-900">30-Day Money-Back Guarantee</h2>
                    <p className="text-slate-600">We want you to be completely satisfied. Request a full refund within <strong>30 days</strong> of purchase — no questions asked.</p>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">Eligibility</h2>
                    <div className="flex items-start gap-3 bg-accent-50 border border-accent-200 rounded-lg p-4 my-4">
                        <CheckCircle size={24} weight="fill" className="text-accent-600 shrink-0" />
                        <div>
                            <h4 className="font-medium text-slate-900">Eligible for Refund</h4>
                            <ul className="text-slate-600 text-sm mt-2 space-y-1 ml-0 pl-0 list-none">
                                <li>• Request within 30 days of purchase</li>
                                <li>• First-time purchase</li>
                                <li>• Valid order confirmation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4 my-4">
                        <XCircle size={24} weight="fill" className="text-red-500 shrink-0" />
                        <div>
                            <h4 className="font-medium text-slate-900">Not Eligible</h4>
                            <ul className="text-slate-600 text-sm mt-2 space-y-1 ml-0 pl-0 list-none">
                                <li>• Requests after 30 days</li>
                                <li>• Repeat refund requests</li>
                                <li>• Unauthorized reseller purchases</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">How to Request</h2>
                    <ol className="text-slate-600 space-y-2">
                        <li>Email <a href="mailto:support@medrecplus.my.id" className="text-primary-600 hover:underline">support@medrecplus.my.id</a> with subject "Refund Request"</li>
                        <li>Include your email and order/transaction ID</li>
                        <li>We'll respond within 1-2 business days</li>
                    </ol>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">Processing</h2>
                    <ul className="text-slate-600 space-y-2">
                        <li>Refund to original payment method in 5-10 business days</li>
                        <li>License key will be deactivated</li>
                        <li>Your local data remains on your device</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">Contact</h2>
                    <p className="text-slate-600">Email: <a href="mailto:support@medrecplus.my.id" className="text-primary-600 hover:underline">support@medrecplus.my.id</a></p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 text-center">
                    <h2 className="text-xl font-bold text-white mb-2">Need a Refund?</h2>
                    <p className="text-primary-100 mb-4">We're here to help.</p>
                    <a href="mailto:support@medrecplus.my.id?subject=Refund%20Request" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-colors">
                        <Envelope size={20} />
                        Contact Support
                    </a>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link to="/privacy" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Privacy Policy →</Link>
                    <Link to="/terms" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Terms of Service →</Link>
                    <Link to="/contact" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Contact Us →</Link>
                </motion.div>
            </div>
        </div>
    );
}
