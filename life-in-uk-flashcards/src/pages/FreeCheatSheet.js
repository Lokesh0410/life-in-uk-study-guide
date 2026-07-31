// src/pages/FreeCheatSheet.js
// Shareable HTML companion to the free lead-magnet PDF (utils/generateLeadMagnet.js).
// Gated the same way as the PDF: only reachable after LeadMagnetModal records
// 'leadMagnetDownloaded' in localStorage. Same facts as the PDF, sourced from
// utils/leadMagnetData.js so the two never drift apart.
import { Link } from 'react-router-dom';
import useDocumentMeta from '../useDocumentMeta';
import { safeGetItem } from '../safeStorage';
import { TOP_KEY_DATES, PATRON_SAINTS } from '../utils/leadMagnetData';

export default function FreeCheatSheet() {
    useDocumentMeta({
        title: 'Free Cheat Sheet: Key Dates & Patron Saints | Life in the UK Coach',
        description: 'Handbook-verified Key Dates and Patron Saints cheat sheet for the Life in the UK Test.',
        path: '/free-cheat-sheet',
    });

    const unlocked = safeGetItem('leadMagnetDownloaded', false) === true;

    if (!unlocked) {
        return (
            <div className="max-w-lg mx-auto text-center py-20 px-4">
                <div className="text-5xl mb-4">🔒</div>
                <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">This page is unlocked by email</h1>
                <p className="text-slate-500 dark:text-slate-400 mb-6">
                    Grab the free cheat sheet from the home page to unlock this shareable version.
                </p>
                <Link to="/" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl transition shadow-md">
                    ← Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-10 print:py-0">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-10 text-center">
                    <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-2">Life in the UK Test</p>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Free Cheat Sheet</h1>
                    <p className="text-indigo-100 text-sm">Key Dates &amp; Patron Saints, handbook-verified</p>
                </div>

                <div className="p-6 md:p-10">
                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full flex items-center justify-center text-sm shrink-0">📅</span>
                            Key Dates
                        </h2>
                        <div className="overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-800">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-slate-800 text-left text-slate-500 dark:text-slate-400">
                                        <th className="px-4 py-3 font-semibold">Year</th>
                                        <th className="px-4 py-3 font-semibold">Event</th>
                                        <th className="px-4 py-3 font-semibold">What it means</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TOP_KEY_DATES.map(([year, event, meaning], i) => (
                                        <tr key={year} className={i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-800/50'}>
                                            <td className="px-4 py-3 font-bold text-indigo-600 dark:text-indigo-400 whitespace-nowrap">{year}</td>
                                            <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-100">{event}</td>
                                            <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{meaning}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full flex items-center justify-center text-sm shrink-0">⛪</span>
                            Patron Saints of the UK
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {PATRON_SAINTS.map(([nation, saint, day, status]) => (
                                <div key={nation} className="border border-slate-100 dark:border-slate-800 rounded-xl p-4">
                                    <p className="text-xs font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400 mb-1">{nation}</p>
                                    <p className="font-bold text-slate-800 dark:text-slate-100">{saint}</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{day} &middot; {status}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 rounded-2xl p-6 text-center print:hidden">
                        <h3 className="font-bold text-indigo-900 dark:text-indigo-200 mb-1">Want the full study guide?</h3>
                        <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-4">1,000+ practice questions, all 45 mock exams, and the complete offline cheat sheet.</p>
                        <Link to="/pricing" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl transition shadow-md">
                            Unlock Premium
                        </Link>
                    </div>
                </div>
            </div>

            <div className="text-center mt-8 print:hidden">
                <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}
