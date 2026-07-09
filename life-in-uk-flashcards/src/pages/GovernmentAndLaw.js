import React from 'react';
import { Link } from 'react-router-dom';

export default function GovernmentAndLaw() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
                <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm mb-6 inline-block">
                    ← Back to Flashcards
                </Link>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-4">
                    Government and Law Study Guide — Life in the UK Test 2026
                </h1>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Master the complete Government, Parliament, and Law chapter of the official Life in the UK Test handbook.
                    This guide covers the structure of UK democracy, the justice system, and your role as a British citizen.
                </p>

                <h2 className="text-xl font-bold text-slate-800 mt-8 mb-3">Key Government Topics Covered</h2>
                <ul className="list-disc pl-5 text-slate-700 space-y-2 mb-6">
                    <li><strong>The British Constitution:</strong> Understand that the UK constitution is unwritten and based on common law and conventions.</li>
                    <li><strong>The Monarchy:</strong> Learn about the role of the King as Head of State, and how the UK operates as a constitutional monarchy.</li>
                    <li><strong>Parliament:</strong> Study the roles of the House of Commons, the House of Lords, and how laws are debated and passed.</li>
                    <li><strong>The Government:</strong> Discover how the Prime Minister, Cabinet, and Opposition parties lead the nation.</li>
                    <li><strong>The Justice System:</strong> Memorize the differences between civil and criminal courts, and police/magistrate structures.</li>
                </ul>

                <h2 className="text-xl font-bold text-slate-800 mt-8 mb-3">Practice Mock Exams</h2>
                <p className="text-slate-600 mb-6">
                    We offer over 45 realistic, timed mock exams to test your knowledge of British history, government, and values.
                </p>

                <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 mb-8">
                    <h3 className="font-bold text-indigo-950 mb-2">Did you know?</h3>
                    <p className="text-sm text-indigo-900">
                        Government & Law questions make up a huge part of the real exam. Make sure you know details like the minimum voting age (18), the number of MPs in Parliament (650), and the unwritten nature of the British Constitution.
                    </p>
                </div>

                <Link
                    to="/mock-exams"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl transition shadow-md"
                >
                    Start Practice Mock Exams
                </Link>
            </div>
        </div>
    );
}
