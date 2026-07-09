import React from 'react';
import { Link } from 'react-router-dom';

export default function HistoryChapter() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
                <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm mb-6 inline-block">
                    ← Back to Flashcards
                </Link>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-4">
                    British History Study Guide — Life in the UK Test 2026
                </h1>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Master the complete British History chapter of the official Life in the UK Test handbook.
                    This comprehensive study guide covers everything from the early prehistoric settlements to the 20th century.
                </p>

                <h2 className="text-xl font-bold text-slate-800 mt-8 mb-3">Key History Eras Covered</h2>
                <ul className="list-disc pl-5 text-slate-700 space-y-2 mb-6">
                    <li><strong>Prehistoric & Roman Britain:</strong> Understand the impact of Julius Caesar's invasions and the building of Hadrian's Wall.</li>
                    <li><strong>Middle Ages:</strong> Study the signing of the Magna Carta in 1215 and the Black Death of 1348.</li>
                    <li><strong>Tudors & Stuarts:</strong> Learn about Henry VIII's six wives, the Spanish Armada, and the English Civil War.</li>
                    <li><strong>The Global Empire:</strong> Explore the Industrial Revolution, the Enlightenment, and the abolition of slavery.</li>
                    <li><strong>The 20th Century:</strong> Read up on WWI, WWII, Winston Churchill, and the introduction of the NHS in 1948.</li>
                </ul>

                <h2 className="text-xl font-bold text-slate-800 mt-8 mb-3">Practice Mock Exams</h2>
                <p className="text-slate-600 mb-6">
                    We offer over 45 realistic, timed mock exams to test your knowledge of British history, government, and values.
                </p>

                <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 mb-8">
                    <h3 className="font-bold text-indigo-950 mb-2">Did you know?</h3>
                    <p className="text-sm text-indigo-900">
                        History questions make up a significant portion of the real exam. Make sure you memorize key dates like 1066 (Battle of Hastings), 1215 (Magna Carta), and 1588 (defeat of the Spanish Armada).
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
