import React from 'react';
import useDocumentMeta from '../useDocumentMeta';

const Terms = () => {
    useDocumentMeta({
        title: "Terms of Service & Refund Policy | Life in the UK Test Coach",
        description: "Terms of Service for Life in the UK Test Coach, including our 100% Pass Guarantee refund policy and intellectual property terms.",
        path: "/terms",
    });

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm p-6 sm:p-8">
                <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Terms of Service & Refund Policy</h1>
                <div className="text-sm text-gray-600 dark:text-slate-300 space-y-4">
                    <p><strong>Last updated: July 2026</strong></p>
                    <p>Welcome to <strong>Life in the UK Test Coach</strong> ("we", "us", "our"). By purchasing or using our services, you agree to these terms.</p>
                    <h2 className="font-semibold text-gray-800 dark:text-slate-200">1. Digital Content & Access</h2>
                    <p>Upon payment of the £7.99 premium fee, you are granted immediate, non-transferable access to advanced mock exams, offline cheat sheets, and personal metrics. This is a one-time charge with no recurring fees.</p>
                    <h2 className="font-semibold text-gray-800 dark:text-slate-200">2. Refund & Pass Guarantee Policy</h2>
                    <p>We stand by our material. We offer a <strong>100% Pass Guarantee</strong> under the following conditions:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>You must have completed and passed all 45 mock tests available on our platform prior to your official test date.</li>
                        <li>If you still fail the official Life in the UK test, we will issue a full refund of your £7.99 purchase fee.</li>
                        <li>To claim, email a copy of your official Home Office fail notification along with your purchase email address to <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-600 dark:text-indigo-400 underline">help@lifeinukcoach.co.uk</a> within 90 days of purchase.</li>
                    </ul>
                    <h2 className="font-semibold text-gray-800 dark:text-slate-200">3. Intellectual Property & License Limitation</h2>
                    <p>All test questions, system scripts, design assets, and compiled PDFs are intellectual property of our platform. Users may download files solely for personal educational use. Commercial redistribution or sharing account access is prohibited.</p>
                    <h2 className="font-semibold text-gray-800 dark:text-slate-200">4. Limitation of Liability</h2>
                    <p>We provide prep resources. Passing our mock exams does not guarantee passing the official Government test. We are not responsible for any official exam rescheduling fees or application costs.</p>
                    <p className="text-xs text-gray-400 dark:text-slate-500 pt-2">Questions? Contact us at <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-600 dark:text-indigo-400 underline">help@lifeinukcoach.co.uk</a></p>
                </div>
            </div>
        </div>
    );
};

export default Terms;
