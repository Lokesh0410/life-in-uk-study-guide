import React from 'react';
import useDocumentMeta from '../useDocumentMeta';

const Disclaimer = () => {
    useDocumentMeta({
        title: "Legal Disclaimer & Copyright Notice | Life in the UK Test Coach",
        description: "Life in the UK Test Coach is an independent educational platform, not affiliated with the UK Home Office or UK Government.",
        path: "/disclaimer",
    });

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm p-6 sm:p-8">
                <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Legal Disclaimer & Copyright Notice</h1>
                <div className="text-sm text-gray-600 dark:text-slate-300 space-y-4">
                    <p>
                        <strong>lifeinukcoach.co.uk</strong> is an independent educational platform
                        privately owned and operated. This website is <strong>not affiliated with,
                            endorsed by, or connected to the UK Home Office or the UK Government</strong>.
                    </p>
                    <p>
                        The practice questions, study guides, and mock exams provided on this platform
                        are intended solely for educational preparation purposes. While we strive to
                        replicate authentic exam conditions, passing these mock exams does not guarantee
                        success on the official Life in the UK test.
                    </p>
                    <p>
                        <strong>Public Sector Information:</strong> Materials on this website contain
                        public sector information licensed under the{' '}
                        <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline">
                            Open Government Licence v3.0
                        </a>.
                        Official test guidelines and registration should always be verified via the official{' '}
                        <a href="https://www.gov.uk" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline">GOV.UK portal</a>.
                    </p>
                    <p className="text-xs text-gray-400 dark:text-slate-500 pt-2">Questions? Contact us at <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-600 dark:text-indigo-400 underline">help@lifeinukcoach.co.uk</a></p>
                </div>
            </div>
        </div>
    );
};

export default Disclaimer;
