import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Envelope, User, PaperPlaneTilt, CheckCircle, Warning, CircleNotch, ChatCircleDots } from '@phosphor-icons/react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Contact form error:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                        <ChatCircleDots size={16} weight="fill" />
                        Get in Touch
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                        Have Questions?
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                        We'd love to hear from you. Send us a message and we'll respond within 24-48 hours.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-lg shadow-slate-200/50">
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-10"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 mb-4">
                                        <CheckCircle size={32} weight="fill" className="text-accent-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Message Sent!</h3>
                                    <p className="text-slate-600 mb-6">Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="text-primary-600 font-medium hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                                                Name
                                            </label>
                                            <div className="relative">
                                                <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                                                <input
                                                    type="text"
                                                    id="contact-name"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                                                Email
                                            </label>
                                            <div className="relative">
                                                <Envelope size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                                                <input
                                                    type="email"
                                                    id="contact-email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                                            Message
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none bg-slate-50 focus:bg-white"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-4 py-3 rounded-xl"
                                        >
                                            <Warning size={18} weight="fill" />
                                            <span>Something went wrong. Please try again or email us directly.</span>
                                        </motion.div>
                                    )}

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full flex items-center justify-center gap-2 py-3.5 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 rounded-xl transition-all shadow-lg shadow-primary-600/25 cursor-pointer disabled:cursor-not-allowed"
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
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2 space-y-5"
                    >
                        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg shadow-slate-200/50">
                            <h3 className="font-semibold text-slate-900 mb-3">Direct Email</h3>
                            <a
                                href="mailto:support@medrecplus.my.id"
                                className="flex items-center gap-3 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                                    <Envelope size={20} weight="duotone" className="text-primary-600" />
                                </div>
                                support@medrecplus.my.id
                            </a>
                        </div>

                        <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-6 text-white">
                            <h3 className="font-semibold mb-2">Response Time</h3>
                            <p className="text-sm text-primary-100">
                                We typically respond within 24-48 hours on business days. For urgent matters, please indicate so in your message.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg shadow-slate-200/50">
                            <h3 className="font-semibold text-slate-900 mb-3">Why Contact Us?</h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} weight="fill" className="text-accent-500 mt-0.5 shrink-0" />
                                    Technical support & troubleshooting
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} weight="fill" className="text-accent-500 mt-0.5 shrink-0" />
                                    Feature requests & feedback
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} weight="fill" className="text-accent-500 mt-0.5 shrink-0" />
                                    Partnership inquiries
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} weight="fill" className="text-accent-500 mt-0.5 shrink-0" />
                                    General questions
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
