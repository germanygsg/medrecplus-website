import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from '@phosphor-icons/react';

export default function TermsPage() {
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
                        <FileText size={32} weight="duotone" className="text-primary-600" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
                        Terms of Service
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
                    <h2 className="text-xl font-semibold text-slate-900">1. Agreement to Terms</h2>
                    <p className="text-slate-600 leading-relaxed">
                        By purchasing, downloading, installing, or using MedRecPlus ("the Software"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Software. These Terms constitute a legally binding agreement between you and BSP Center Clinic ("we," "our," or "us").
                    </p>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">2. License Grant</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Upon purchase, we grant you a non-exclusive, non-transferable, perpetual license to:
                    </p>
                    <ul className="text-slate-600 space-y-2">
                        <li>Install and use MedRecPlus on any devices you personally own or control</li>
                        <li>Use the Software for personal or commercial purposes (e.g., in your medical practice)</li>
                        <li>Receive lifetime updates and improvements to the Software</li>
                    </ul>
                    <p className="text-slate-600 leading-relaxed mt-4">
                        This license is for a single user (individual or single organization). Multiple users or separate organizations require additional licenses.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">3. Restrictions</h2>
                    <p className="text-slate-600 leading-relaxed">
                        You may not:
                    </p>
                    <ul className="text-slate-600 space-y-2">
                        <li>Resell, sublicense, rent, lease, or lend the Software</li>
                        <li>Modify, reverse engineer, decompile, or disassemble the Software</li>
                        <li>Copy or distribute the Software to others</li>
                        <li>Share your license key with unauthorized users</li>
                        <li>Remove or alter any proprietary notices or labels</li>
                        <li>Use the Software in violation of any applicable laws</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">4. Your Responsibilities</h2>
                    <p className="text-slate-600 leading-relaxed">
                        As a user of MedRecPlus, you are responsible for:
                    </p>
                    <ul className="text-slate-600 space-y-2">
                        <li><strong>Data Accuracy:</strong> Ensuring all patient information you enter is accurate and up-to-date</li>
                        <li><strong>Data Backup:</strong> Maintaining regular backups of your data using the built-in backup features</li>
                        <li><strong>Compliance:</strong> Ensuring your use of the Software complies with all applicable healthcare regulations, including HIPAA, GDPR, and local privacy laws</li>
                        <li><strong>Access Control:</strong> Protecting your device and application with appropriate passwords and security measures</li>
                        <li><strong>License Security:</strong> Keeping your license key confidential</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">5. Medical Disclaimer</h2>
                    <p className="text-slate-600 leading-relaxed">
                        MedRecPlus is a record-keeping and practice management tool. It is <strong>not</strong> intended to:
                    </p>
                    <ul className="text-slate-600 space-y-2">
                        <li>Provide medical advice, diagnosis, or treatment recommendations</li>
                        <li>Replace professional medical judgment</li>
                        <li>Be used as the sole basis for clinical decisions</li>
                    </ul>
                    <p className="text-slate-600 leading-relaxed mt-4">
                        All clinical decisions remain the responsibility of qualified healthcare professionals. We are not liable for any medical outcomes related to the use of this Software.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">6. Intellectual Property</h2>
                    <p className="text-slate-600 leading-relaxed">
                        MedRecPlus, including its code, design, documentation, and branding, is and remains the intellectual property of BSP Center Clinic. Your purchase grants you a license to use the Software, not ownership of the Software itself. All rights not expressly granted are reserved.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">7. Updates and Support</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Your one-time purchase includes:
                    </p>
                    <ul className="text-slate-600 space-y-2">
                        <li>All future updates and new features at no additional cost</li>
                        <li>Email support for technical issues</li>
                        <li>Access to documentation and guides</li>
                    </ul>
                    <p className="text-slate-600 leading-relaxed mt-4">
                        While we strive to provide regular updates and improvements, we do not guarantee any specific update frequency or the addition of particular features.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">8. Data Ownership</h2>
                    <p className="text-slate-600 leading-relaxed">
                        <strong>You own all data you enter into MedRecPlus.</strong> We do not claim any ownership or rights to your patient records, clinical notes, or any other information you store in the application. You may export or delete your data at any time.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">9. Disclaimer of Warranties</h2>
                    <p className="text-slate-600 leading-relaxed">
                        MedRecPlus is provided "AS IS" without warranty of any kind, express or implied. We do not warrant that:
                    </p>
                    <ul className="text-slate-600 space-y-2">
                        <li>The Software will be error-free or uninterrupted</li>
                        <li>The Software will meet all your specific requirements</li>
                        <li>Any errors will be corrected within a specific timeframe</li>
                    </ul>
                    <p className="text-slate-600 leading-relaxed mt-4">
                        We disclaim all implied warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">10. Limitation of Liability</h2>
                    <p className="text-slate-600 leading-relaxed">
                        To the maximum extent permitted by law, BSP Center Clinic shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                    </p>
                    <ul className="text-slate-600 space-y-2">
                        <li>Loss of data or data corruption</li>
                        <li>Loss of profits or revenue</li>
                        <li>Business interruption</li>
                        <li>Medical malpractice or patient harm</li>
                    </ul>
                    <p className="text-slate-600 leading-relaxed mt-4">
                        Our total liability shall not exceed the amount you paid for the Software.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">11. Indemnification</h2>
                    <p className="text-slate-600 leading-relaxed">
                        You agree to indemnify and hold harmless BSP Center Clinic from any claims, damages, losses, or expenses arising from your use of the Software, your violation of these Terms, or your violation of any third-party rights.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">12. Termination</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Your license may be terminated if you:
                    </p>
                    <ul className="text-slate-600 space-y-2">
                        <li>Violate any provision of these Terms</li>
                        <li>Engage in fraudulent activity</li>
                        <li>Share or redistribute your license key</li>
                    </ul>
                    <p className="text-slate-600 leading-relaxed mt-4">
                        Upon termination, you must cease using the Software and delete all copies. Your data remains yours and can be exported before uninstalling.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">13. Changes to Terms</h2>
                    <p className="text-slate-600 leading-relaxed">
                        We may modify these Terms at any time. Material changes will be communicated via email or in-app notification. Your continued use after such changes constitutes acceptance of the new Terms. If you disagree with the changes, you may stop using the Software (refund eligibility applies per our Refund Policy for recent purchases).
                    </p>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">14. Governing Law</h2>
                    <p className="text-slate-600 leading-relaxed">
                        These Terms shall be governed by the laws of Indonesia, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Indonesia.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-900 mt-8">15. Contact Information</h2>
                    <p className="text-slate-600 leading-relaxed">
                        For questions about these Terms, please contact us at:
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
                        to="/privacy"
                        className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
                    >
                        Privacy Policy →
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
