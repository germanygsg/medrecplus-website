import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Envelope, User, PaperPlaneTilt, CheckCircle, Warning, CircleNotch } from '@phosphor-icons/react';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Create mailto link as fallback (works without backend)
        const subject = encodeURIComponent(`Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);

        // Try to send via mailto
        window.location.href = `mailto:support@medrecplus.my.id?subject=${subject}&body=${body}`;

        // Show success after a brief delay
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1000);
    };

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
                        <Envelope size={32} weight="duotone" className="text-primary-600" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">Contact Us</h1>
                    <p className="text-lg text-slate-600 max-w-xl mx-auto">Have a question or need help? We'd love to hear from you.</p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-10">
                    {/* Contact Form */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-3">
                        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                            <h2 className="text-lg font-semibold text-slate-900 mb-6">Send us a message</h2>

                            {status === 'success' ? (
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 mb-4">
                                        <CheckCircle size={32} weight="fill" className="text-accent-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Message Sent!</h3>
                                    <p className="text-slate-600 mb-6">Your email client should have opened. If not, please email us directly.</p>
                                    <button onClick={() => setStatus('idle')} className="text-primary-600 font-medium hover:underline">Send another message</button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
                                        <div className="relative">
                                            <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                                placeholder="Your name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                                        <div className="relative">
                                            <Envelope size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <div className="flex items-center gap-2 text-red-600 text-sm">
                                            <Warning size={16} weight="fill" />
                                            <span>Something went wrong. Please try again or email us directly.</span>
                                        </div>
                                    )}

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full flex items-center justify-center gap-2 py-3.5 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 rounded-xl transition-all shadow-lg shadow-primary-600/20"
                                    >
                                        {status === 'sending' ? (
                                            <>
                                                <CircleNotch size={20} className="animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <PaperPlaneTilt size={20} weight="bold" />
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                            <h3 className="font-semibold text-slate-900 mb-4">Direct Email</h3>
                            <a href="mailto:support@medrecplus.my.id" className="flex items-center gap-3 text-primary-600 hover:text-primary-700 font-medium">
                                <Envelope size={20} />
                                support@medrecplus.my.id
                            </a>
                        </div>

                        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl border border-primary-200 p-6">
                            <h3 className="font-semibold text-slate-900 mb-2">Response Time</h3>
                            <p className="text-sm text-slate-600">We typically respond within 24-48 hours on business days.</p>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                            <h3 className="font-semibold text-slate-900 mb-3">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link to="/privacy" className="text-sm text-slate-600 hover:text-primary-600">Privacy Policy</Link></li>
                                <li><Link to="/terms" className="text-sm text-slate-600 hover:text-primary-600">Terms of Service</Link></li>
                                <li><Link to="/refund" className="text-sm text-slate-600 hover:text-primary-600">Refund Policy</Link></li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
