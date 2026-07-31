import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { generateLeadMagnet } from './utils/generateLeadMagnet';
import { safeSetItem } from './safeStorage';

export default function LeadMagnetModal({ isOpen, onClose }) {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const downloadPdf = () => {
        const doc = new jsPDF();
        generateLeadMagnet(doc, autoTable);
        doc.save('Life-in-the-UK-Free-Cheat-Sheet.pdf');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await fetch('https://formspree.io/f/mbdneozj', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source: 'study-guide-lead-magnet' }),
            });
            if (res.ok) {
                setSubmitted(true);
                safeSetItem('leadMagnetDownloaded', 'true');
                downloadPdf();
            } else {
                setError('Something went wrong. Please try again.');
            }
        } catch {
            setError('Network error. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">📥 Free Cheat Sheet</h3>
                    <button onClick={onClose} className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 text-2xl leading-none">&times;</button>
                </div>
                {submitted ? (
                    <div className="text-center py-6">
                        <div className="text-4xl mb-3">✅</div>
                        <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Downloaded!</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Your free cheat sheet should be downloading now. Check your downloads folder.</p>
                        <Link
                            to="/free-cheat-sheet"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onClose}
                            className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-xl font-bold transition"
                        >
                            📖 Open Shareable Web Version
                        </Link>
                        <button onClick={onClose} className="mt-3 block mx-auto text-sm text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition">Close</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Get the free 1-page Key Dates &amp; Patron Saints cheat sheet: handbook-verified, downloadable, print-ready.
                        </p>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                            />
                        </div>
                        {error && <p className="text-red-600 text-xs">{error}</p>}
                        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold transition shadow-md">
                            Get My Free Cheat Sheet
                        </button>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 text-center">No spam. Just your free PDF and occasional study tips.</p>
                    </form>
                )}
            </div>
        </div>
    );
}
