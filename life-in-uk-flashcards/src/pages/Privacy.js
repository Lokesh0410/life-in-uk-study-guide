import React from 'react';
import useDocumentMeta from '../useDocumentMeta';

const Privacy = () => {
    useDocumentMeta({
        title: "Privacy Policy | Life in the UK Test Coach",
        description: "How Life in the UK Test Coach handles your data: payment processing via Stripe, local browser storage, and your GDPR rights.",
        path: "/privacy",
    });

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm p-6 sm:p-8">
                <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Privacy Policy</h1>
                <div className="text-sm text-gray-600 dark:text-slate-300 space-y-4">
                    <p><strong>Last updated: July 2026</strong></p>
                    <p>This Privacy Policy explains how <strong>Life in the UK Study Guide</strong> ("we", "us") handles your information when you use our website.</p>
                    <h2 className="font-semibold text-gray-800 dark:text-slate-200">What we collect</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Payment information:</strong> When you purchase Premium, your payment is processed securely by <strong>Stripe</strong>. We do not store your card details. Stripe stores your email address to process the transaction.</li>
                        <li><strong>Local data:</strong> Your exam results and premium status are stored in your browser's localStorage only. We do not store this on any server.</li>
                        <li><strong>Contact form:</strong> If you contact us via the in-app form, your name, email, and message are sent to us via Formspree.</li>
                    </ul>
                    <h2 className="font-semibold text-gray-800 dark:text-slate-200">How we use it</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>To process and verify your Premium purchase</li>
                        <li>To respond to support enquiries</li>
                        <li>We do not sell, share, or use your data for advertising</li>
                    </ul>
                    <h2 className="font-semibold text-gray-800 dark:text-slate-200">Your rights (GDPR)</h2>
                    <p>You have the right to request deletion of any personal data we hold. Email us at <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-600 dark:text-indigo-400 underline">help@lifeinukcoach.co.uk</a> and we will respond within 30 days.</p>
                    <h2 className="font-semibold text-gray-800 dark:text-slate-200">Cookies</h2>
                    <p>We use only essential browser localStorage. No tracking cookies or third-party analytics scripts are used beyond standard Netlify and Stripe integrations.</p>
                    <p className="text-xs text-gray-400 dark:text-slate-500 pt-2">Questions? Contact us at <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-600 dark:text-indigo-400 underline">help@lifeinukcoach.co.uk</a></p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
