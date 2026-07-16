import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'lifeInUkTestDate';

const TestDatePicker = () => {
    const [showModal, setShowModal] = useState(false);
    const [hasDate, setHasDate] = useState(() => !!localStorage.getItem(STORAGE_KEY));
    const [testDate, setTestDate] = useState(() => localStorage.getItem(STORAGE_KEY) || '');
    const [step, setStep] = useState('ask'); // 'ask' | 'pick' | 'done' | 'notYet'
    const [daysLeft, setDaysLeft] = useState(0);

    // Recalculate days left
    useEffect(() => {
        if (testDate) {
            const diff = Math.ceil((new Date(testDate) - new Date()) / (1000 * 60 * 60 * 24));
            setDaysLeft(diff > 0 ? diff : 0);
        }
    }, [testDate]);

    const handleSaveDate = () => {
        if (!testDate) return;
        const diff = Math.ceil((new Date(testDate) - new Date()) / (1000 * 60 * 60 * 24));
        if (diff < 0) {
            alert('Test date cannot be in the past. Please select a future date.');
            return;
        }
        if (diff > 365) {
            alert('You have selected a date more than 1 year away. Please check if this is correct, or select a closer date.');
            return;
        }
        localStorage.setItem(STORAGE_KEY, testDate);
        setHasDate(true);
        setStep('done');
    };

    const handleClear = () => {
        localStorage.removeItem(STORAGE_KEY);
        setTestDate('');
        setHasDate(false);
        setShowModal(false);
        setStep('ask');
    };

    // Generate 7-day study plan
    const generateStudyPlan = () => {
        const plan = [
            { day: 1, focus: 'The 4 Nations & Early History', action: 'Review flashcards (Sections 1-2), take Mock Exam #1' },
            { day: 2, focus: 'Middle Ages, Rights & Tudors', action: 'Review flashcards (Sections 3-4), take Mock Exam #2' },
            { day: 3, focus: 'Enlightenment, Empire & 20th Century', action: 'Review flashcards (Sections 5-6), take Mock Exam #3' },
            { day: 4, focus: 'Government, Law & British Values', action: 'Review flashcards (Sections 7-8, 11), take Mock Exam #4' },
            { day: 5, focus: 'Symbols, Traditions & Arts', action: 'Review flashcards (Sections 8-10), take Mock Exam #5' },
            { day: 6, focus: 'Full Review & Weak Areas', action: 'Revisit weak flashcards, take Mock Exam #6' },
            { day: 7, focus: 'Final Preparation', action: 'Take a full timed mock exam, review all incorrect answers' },
        ];
        return plan;
    };

    // Get custom message based on days until test
    const getCustomMessage = () => {
        if (daysLeft <= 0) return { emoji: '⚠️', title: 'Date has passed!', message: 'Please update your test date.' };
        if (daysLeft < 7) {
            return {
                emoji: '🔥',
                title: 'Your test is very soon!',
                message: `Only ${daysLeft} ${daysLeft === 1 ? 'day' : 'days'} to go! Focus on quick revision — review your weak flashcards and take a mock exam to check your readiness.`
            };
        }
        if (daysLeft <= 30) {
            return {
                emoji: '🎯',
                title: 'Perfect timing!',
                message: `You have ${daysLeft} days — that's enough time for our structured 7-day study plan. On average, it takes 2 to 3 weeks to prepare thoroughly.`
            };
        }
        if (daysLeft <= 365) {
            return {
                emoji: '🧘',
                title: 'You have plenty of time!',
                message: `Your test is ${daysLeft} days away. Why not check your readiness by trying some mock exams or reviewing flashcards to gauge your current knowledge level?`
            };
        }
        return {
            emoji: '❓',
            title: 'Please check your date',
            message: 'You have selected a date more than 1 year away. Please verify this is correct.'
        };
    };

    // Badge in header
    const badge = hasDate && testDate ? (
        <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-1.5 text-sm shadow-sm">
            <span className="text-indigo-600">📅</span>
            <span className="text-indigo-800 font-medium">
                Test in <strong>{daysLeft}</strong> {daysLeft === 1 ? 'day' : 'days'}
            </span>
            <button
                onClick={() => setShowModal(true)}
                className="text-indigo-500 hover:text-indigo-700 text-xs ml-1 underline"
            >
                Edit
            </button>
        </div>
    ) : (
        <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-1.5 bg-white border border-indigo-200 rounded-full px-4 py-1.5 text-sm text-indigo-600 hover:bg-indigo-50 transition shadow-sm"
        >
            📅 Set Test Date
        </button>
    );

    const customMsg = getCustomMessage();

    return (
        <>
            {badge}

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
                        {step === 'ask' && (
                            <div className="text-center">
                                <div className="text-4xl mb-3">📅</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Have you booked your test date?</h3>
                                <div className="flex gap-3 mt-6">
                                    <button
                                        onClick={() => setStep('pick')}
                                        className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-md"
                                    >
                                        Yes, I have a date
                                    </button>
                                    <button
                                        onClick={() => setStep('notYet')}
                                        className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-200 transition"
                                    >
                                        Not yet
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 'notYet' && (
                            <div className="text-center">
                                <div className="text-4xl mb-3">🎯</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Check Your Readiness!</h3>
                                <p className="text-slate-600 mb-6">
                                    No problem! Why not try a free mock exam to check your current knowledge level?
                                    It only takes 45 minutes and will show you exactly where you stand.
                                </p>
                                <div className="flex gap-3">
                                    <Link
                                        to="/mock-exams"
                                        onClick={() => setShowModal(false)}
                                        className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-md text-center"
                                    >
                                        Take a Mock Exam 🚀
                                    </Link>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-200 transition"
                                    >
                                        Maybe Later
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 'pick' && (
                            <div className="text-center">
                                <div className="text-4xl mb-3">🗓️</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">When is your test?</h3>
                                <p className="text-sm text-slate-500 mb-4">We'll create a personalised countdown and study plan.</p>
                                <input
                                    type="date"
                                    value={testDate}
                                    onChange={(e) => setTestDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                    max={new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                                    className="w-full border-2 border-indigo-200 rounded-xl p-3 text-lg text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <div className="flex gap-3 mt-6">
                                    <button
                                        onClick={handleSaveDate}
                                        disabled={!testDate}
                                        className={`flex-1 py-3 rounded-xl font-bold transition shadow-md ${testDate ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                                    >
                                        Save Date
                                    </button>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-200 transition"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 'done' && (
                            <div className="text-center">
                                <div className="text-4xl mb-3">{customMsg.emoji}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{customMsg.title}</h3>
                                <div className="bg-indigo-50 rounded-xl p-4 mb-4">
                                    <p className="text-sm text-indigo-600">Your test is in</p>
                                    <p className="text-5xl font-extrabold text-indigo-800">{daysLeft}</p>
                                    <p className="text-sm text-indigo-600">{daysLeft === 1 ? 'day' : 'days'}</p>
                                </div>

                                <p className="text-sm text-slate-600 mb-4">{customMsg.message}</p>

                                {/* Show 7-day plan only if 7-30 days */}
                                {daysLeft >= 7 && daysLeft <= 30 && (
                                    <div className="text-left mb-4">
                                        <h4 className="font-bold text-slate-800 mb-2">📚 Your 7-Day Study Plan</h4>
                                        <div className="space-y-2 max-h-48 overflow-y-auto">
                                            {generateStudyPlan().map((item, idx) => (
                                                <div key={idx} className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                                                    <p className="text-sm font-semibold text-indigo-700">Day {item.day}: {item.focus}</p>
                                                    <p className="text-xs text-slate-600">{item.action}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="flex gap-3">
                                    <Link
                                        to="/mock-exams"
                                        onClick={() => setShowModal(false)}
                                        className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-md text-center"
                                    >
                                        {daysLeft <= 30 ? 'Start Studying 🚀' : 'Try a Mock Exam 📝'}
                                    </Link>
                                    <button
                                        onClick={handleClear}
                                        className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-200 transition"
                                    >
                                        Clear Date
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default TestDatePicker;
