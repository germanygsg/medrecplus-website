import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck } from '@phosphor-icons/react';

export default function PrivacyPage() {
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 mb-4">
                        <ShieldCheck size={32} weight="duotone" className="text-primary-600" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-500">
                        Last updated: February 8, 2026
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="prose prose-slate max-w-none bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm"
                >
                    <h2 className="text-xl font-semibold text-slate-900">1. Introduction</h2>
                    <p className="text-slate-600 leading-relaxed">
                        BSP Center Clinic ("we," "our," or "us") operates MedRecPlus, an offline-first medical records management application. We are committed to protecting your privacy and the privacy of your patients. This Privacy Policy explains how we handle data in connection with MedRecPlus.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">2. Our Privacy-First Approach</h2>
                    <p className="text-slate-600 leading-relaxed">
                        MedRecPlus is designed with privacy as a core principle:
                    </p>
                    <ul className="text-slate-600 space-y-2">
                        <li><strong>Offline-First:</strong> All patient data is stored locally on your device by default. No data is transmitted to our servers unless you explicitly enable cloud sync.</li>
                        <li><strong>Local Encryption:</strong> Your data is encrypted using AES-256 encryption before being stored on your device.</li>
                        <li><strong>No Tracking:</strong> We do not track your usage of the application or collect analytics data from your device.</li>
                        <li><strong>Your Data, Your Control:</strong> You have complete control over your data. You can export, backup, or delete all data at any time.</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">3. Information We Collect</h2>

                    <h3 className="text-lg font-medium text-slate-800 mt-6">3.1 When You Purchase</h3>
                    <p className="text-slate-600 leading-relaxed">
                        When you purchase MedRecPlus, we collect:
                    </p>
                    <ul className="text-slate-600 space-y-2">
                        <li>Email address (for license delivery and support)</li>
                        <li>Payment information (processed securely by our payment provider; we do not store card details)</li>
                    </ul>

                    <h3 className="text-lg font-medium text-slate-800 mt-6">3.2 When You Use Cloud Sync (Optional)</h3>
                    <p className="text-slate-600 leading-relaxed">
                        If you choose to enable cloud sync:
                    </p>
                    <ul className="text-slate-600 space-y-2">
                        <li>Your encrypted data is transmitted to and stored in our secure cloud infrastructure</li>
                        <li>We cannot read or access the contents of your encrypted data</li>
                        <li>Connection logs may be kept for security purposes</li>
                    </ul>

                    <h3 className="text-lg font-medium text-slate-800 mt-6">3.3 Patient Data</h3>
                    <p className="text-slate-600 leading-relaxed">
                        <strong>We do not have access to your patient data.</strong> All patient records, clinical notes, appointments, and other medical information you enter into MedRecPlus remains on your device unless you enable cloud sync. Even with cloud sync enabled, your data is encrypted end-to-end and we cannot decrypt it.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">4. How We Use Information</h2>
                    <p className="text-slate-600 leading-relaxed">
                        The limited information we collect is used for:
                    </p>
                    <ul className="text-slate-600 space-y-2">
                        <li>Delivering your license and product updates</li>
                        <li>Providing customer support when you contact us</li>
                        <li>Processing refund requests</li>
                        <li>Maintaining the security of cloud sync services (if enabled)</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">5. Data Sharing</h2>
                    <p className="text-slate-600 leading-relaxed">
                        We do not sell, trade, or share your personal information with third parties except:
                    </p>
                    <ul className="text-slate-600 space-y-2">
                        <li>With payment processors to complete transactions</li>
                        <li>When required by law or to respond to legal processes</li>
                        <li>To protect our rights, privacy, safety, or property</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">6. Data Security</h2>
                    <p className="text-slate-600 leading-relaxed">
                        We implement robust security measures:
                    </p>
                    <ul className="text-slate-600 space-y-2">
                        <li>AES-256 encryption for all stored data</li>
                        <li>Secure HTTPS connections for any data transmission</li>
                        <li>Regular security audits and updates</li>
                        <li>No plain-text storage of sensitive information</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">7. Your Rights</h2>
                    <p className="text-slate-600 leading-relaxed">
                        You have the right to:
                    </p>
                    <ul className="text-slate-600 space-y-2">
                        <li>Access the personal information we hold about you</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your account and associated data</li>
                        <li>Export all your data from the application</li>
                        <li>Disable cloud sync at any time</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">8. HIPAA Compliance</h2>
                    <p className="text-slate-600 leading-relaxed">
                        While MedRecPlus is designed with healthcare privacy best practices, individual compliance with HIPAA and other healthcare regulations is the responsibility of the healthcare provider using the software. We provide the tools for secure, encrypted storage and recommend following your organization's compliance guidelines.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">9. Children's Privacy</h2>
                    <p className="text-slate-600 leading-relaxed">
                        MedRecPlus is designed for healthcare professionals. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">10. Changes to This Policy</h2>
                    <p className="text-slate-600 leading-relaxed">
                        We may update this Privacy Policy from time to time. We will notify you of any material changes by email or by posting a notice in the application. Your continued use of MedRecPlus after such modifications constitutes acceptance of the updated policy.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">11. Contact Us</h2>
                    <p className="text-slate-600 leading-relaxed">
                        If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                    </p>
                    <p className="text-slate-600">
                        <strong>Email:</strong>{' '}
                        <a href="mailto:support@medrecplus.my.id" className="text-primary-600 hover:underline">
                            support@medrecplus.my.id
                        </a>
                    </p>
                    <p className="text-slate-600 mt-4">
                        <strong>BSP Center Clinic</strong><br />
                        Operating MedRecPlus
                    </p>
                </motion.div>

                {/* Related Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 flex flex-wrap justify-center gap-4"
                >
                    <Link
                        to="/terms"
                        className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
                    >
                        Terms of Service →
                    </Link>
                    <Link
                        to="/refund"
                        className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
                    >
                        Refund Policy →
                    </Link>
                    <Link
                        to="/contact"
                        className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
                    >
                        Contact Us →
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
