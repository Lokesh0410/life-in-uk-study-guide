import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockExams } from './mockExamsData';
import confetti from 'canvas-confetti';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { sections } from './studyGuideData';
import { generateCheatSheet } from './utils/generateCheatSheet';
import { safeGetItem, safeSetItem } from './safeStorage';
import { updateMissedQuestions } from './spacedRepetition';
import useDocumentMeta from './useDocumentMeta';


const STORAGE_KEY = 'lifeInUkMockResults';

// Question-per-topic distribution across all 45 mock exams (1,080 questions total).
// Computed from the `topic` tag on every question in mockExamsData.js.
const topicDistribution = [
    { topic: "Parliament & Government", count: 164 },
    { topic: "The Monarchy", count: 106 },
    { topic: "Religion & Faith", count: 90 },
    { topic: "The 4 Nations", count: 75 },
    { topic: "Government & Law", count: 56 },
    { topic: "Sports & Icons", count: 42 },
    { topic: "Justice System", count: 39 },
    { topic: "Arts, Literature & Culture", count: 38 },
    { topic: "Elections & Voting", count: 29 },
    { topic: "Arts & Science", count: 27 },
];
const TOTAL_QUESTIONS = 1080;

const mockExamFaqs = [
    { q: "How many mock exams are free?", a: "3 full mock exams are free, each with 24 questions and a 45-minute timer. Premium unlocks all 45 mock exams." },
    { q: "Is this mock test updated for 2026?", a: "Yes, all 45 mock exams are updated for 2026 and drawn from the official Life in the United Kingdom handbook, 3rd edition." },
    { q: "How similar is this to the real Life in the UK test?", a: "Each mock exam matches the real test format: 24 multiple-choice questions, a 45-minute timer, and a 75% pass mark." },
    { q: "How many questions are on the real Life in the UK test?", a: "The official test has 24 questions, and you need at least 18 correct (75%) to pass." },
    { q: "What is the pass mark for the Life in the UK test?", a: "You need to answer at least 18 out of 24 questions correctly, a 75% pass mark, within 45 minutes." },
    { q: "Do I need an account to take the mock exams?", a: "No account is required. Your progress and scores are saved locally in your browser." },
];

const mockExamFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mockExamFaqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
    })),
};

// Helper to trigger confetti
const triggerConfetti = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
};

// Contact Modal (unchanged)
const ContactModal = ({ isOpen, onClose, contactForm, setContactForm, contactStatus, onSubmit }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-md w-full p-6 shadow-xl">
                <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-400 mb-2">📧 Contact Us</h3>
                <p className="text-gray-600 dark:text-slate-400 mb-4">Have a question, feedback, or issue? We'd love to hear from you.</p>
                <form onSubmit={onSubmit} className="space-y-4">
                    <input type="text" placeholder="Your name" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className="w-full border border-gray-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required autoFocus />
                    <input type="email" placeholder="Your email address" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className="w-full border border-gray-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                    <textarea placeholder="Your message..." rows="4" value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} className="w-full border border-gray-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                    {contactStatus && <p className="text-sm text-center text-gray-600 dark:text-slate-400">{contactStatus}</p>}
                    <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">Send Message</button>
                    <button type="button" onClick={onClose} className="w-full text-gray-400 dark:text-slate-500 text-sm">Cancel</button>
                </form>
            </div>
        </div>
    );
};

const SubmitConfirmModal = ({ isOpen, onConfirm, onCancel }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-sm w-full p-6 shadow-xl text-center">
                <h3 className="text-xl font-bold text-gray-800 dark:text-slate-100 mb-2">Submit Exam?</h3>
                <p className="text-gray-600 dark:text-slate-400 mb-6">You've answered all questions. Are you ready to submit and see your score?</p>
                <div className="flex gap-3">
                    <button onClick={onConfirm} className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">Yes, Submit</button>
                    <button onClick={onCancel} className="flex-1 bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-slate-100 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600">Cancel</button>
                </div>
            </div>
        </div>
    );
};

const ExitConfirmModal = ({ isOpen, onConfirm, onCancel }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-sm w-full p-6 shadow-xl text-center">
                <div className="text-4xl mb-3">⚠️</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-slate-100 mb-2">Exit Exam?</h3>
                <p className="text-gray-600 dark:text-slate-400 mb-6">Your progress will be lost if you leave now. Are you sure you want to exit?</p>
                <div className="flex gap-3">
                    <button onClick={onConfirm} className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 font-semibold">Yes, Exit</button>
                    <button onClick={onCancel} className="flex-1 bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-slate-100 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600">Keep Going</button>
                </div>
            </div>
        </div>
    );
};



export default function MockExam({ onBack, isPremium, setIsPremium, onUnlockPremium, onResultsUpdate }) {
    useDocumentMeta({
        title: "Life in the UK Mock Test [Updated 2026] | 45 Free Exams",
        description: "Practice the Life in the UK Test with 3 free mock exams and 45 full tests, updated for 2026, with instant scoring and performance tracking.",
        path: "/mock-exams",
        jsonLd: [mockExamFaqSchema],
    });

    const navigate = useNavigate();
    const [showExitModal, setShowExitModal] = useState(false);
    const exitCallbackRef = React.useRef(null);
    const [selectedExam, setSelectedExam] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(null);
    const [detailedResults, setDetailedResults] = useState([]);
    const [timeLeft, setTimeLeft] = useState(45 * 60);
    const [timerActive, setTimerActive] = useState(false);
    const [examFinished, setExamFinished] = useState(false);
    const [allResults, setAllResults] = useState([]);
    const [showDashboard, setShowDashboard] = useState(false);
    const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
    const [validationError, setValidationError] = useState('');
    const [showContactModal, setShowContactModal] = useState(false);
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const [contactStatus, setContactStatus] = useState('');
    const [confettiTriggered, setConfettiTriggered] = useState(false);

    // Load previous results safely (guard against corrupt localStorage data)
    useEffect(() => {
        try {
            const stored = safeGetItem(STORAGE_KEY, []);
            if (Array.isArray(stored) && stored.length > 0) setAllResults(stored);
        } catch {
            console.warn('Could not load previous exam results.');
        }
    }, []);

    // Restore in-progress exam from localStorage (tab close recovery)
    const IN_PROGRESS_KEY = 'lifeInUkExamInProgress';
    useEffect(() => {
        try {
            const saved = safeGetItem(IN_PROGRESS_KEY, null);
            if (saved && saved.examId && saved.answers !== undefined && !selectedExam) {
                const exam = mockExams.find(e => e.id === saved.examId);
                if (exam) {
                    setSelectedExam(exam);
                    setCurrentQuestionIndex(saved.questionIndex || 0);
                    setAnswers(saved.answers || {});
                    setTimeLeft(saved.timeLeft || 45 * 60);
                    setTimerActive(true);
                }
            }
        } catch {
            // ignore
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleAnswer = (choiceIndex) => {
        if (submitted) return;
        const currentQ = selectedExam.questions[currentQuestionIndex];
        if (currentQ.multiple) {
            const current = answers[currentQuestionIndex] || [];
            const newSelection = current.includes(choiceIndex) ? current.filter(i => i !== choiceIndex) : [...current, choiceIndex];
            setAnswers({ ...answers, [currentQuestionIndex]: newSelection });
        } else {
            setAnswers({ ...answers, [currentQuestionIndex]: choiceIndex });
        }
    };
    const calculateConfidenceScore = (userResults) => {
        if (!userResults || userResults.length === 0) return 0;

        // Get last 5 scores, most recent weighted more heavily
        const lastFiveScores = userResults.slice(-5);
        let weightedSum = 0;
        let totalWeight = 0;

        lastFiveScores.forEach((result, index) => {
            const weight = index + 1; // Most recent gets highest weight
            weightedSum += result.score * weight;
            totalWeight += weight;
        });

        let rawScore = weightedSum / totalWeight;

        // Bonus for consistency (if standard deviation is low)
        // This is a simplified example
        return Math.min(100, Math.round(rawScore));
    };
    const handleSubmit = useCallback(() => {
        if (submitted) return;
        setTimerActive(false);
        let correctCount = 0;
        const topicTally = {};
        const wrongQuestions = [];
        const results = selectedExam.questions.map((q, idx) => {
            const userAnswer = answers[idx];
            let isCorrect = false;
            if (q.multiple) {
                if (Array.isArray(userAnswer) && Array.isArray(q.correct)) {
                    const sortedUser = [...userAnswer].sort();
                    const sortedCorrect = [...q.correct].sort();
                    isCorrect = JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect);
                }
            } else {
                isCorrect = userAnswer === q.correct;
            }
            if (isCorrect) correctCount++;

            const topic = q.topic || 'General Knowledge';
            if (!topicTally[topic]) topicTally[topic] = { correct: 0, total: 0 };
            topicTally[topic].total++;
            if (isCorrect) topicTally[topic].correct++;
            else wrongQuestions.push({ text: q.text, topic });

            return {
                question: q.text,
                userAnswer,
                correct: q.correct,
                isCorrect,
                explanation: q.explanation,
                choices: q.choices,
                multiple: q.multiple || false,
                topic
            };
        });
        const finalScore = Math.round((correctCount / selectedExam.questions.length) * 100);
        setScore(finalScore);
        setDetailedResults(results);
        setSubmitted(true);
        setExamFinished(true);

        if (finalScore >= 75 && !confettiTriggered) {
            triggerConfetti();
            setConfettiTriggered(true);
        }

        const newResult = {
            examId: selectedExam.id,
            examTitle: selectedExam.title,
            date: new Date().toISOString(),
            score: finalScore,
            totalQuestions: selectedExam.questions.length,
            correctCount,
            topicBreakdown: topicTally
        };
        const updatedResults = [...allResults, newResult];
        setAllResults(updatedResults);
        safeSetItem(STORAGE_KEY, updatedResults);
        // Clear in-progress save on completion
        safeSetItem('lifeInUkExamInProgress', null);
        // Update spaced-repetition tracker: questions missed resurface more often
        updateMissedQuestions(wrongQuestions);
        // Notify parent component (App.js) so ProgressGraph updates
        if (onResultsUpdate) onResultsUpdate(updatedResults);
    }, [submitted, selectedExam, answers, allResults, confettiTriggered, onResultsUpdate]);

    useEffect(() => {
        if (!timerActive || submitted || examFinished) return;
        if (timeLeft <= 0) { handleSubmit(); return; }
        const interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(interval);
    }, [timerActive, timeLeft, submitted, examFinished, handleSubmit]);

    const validateCurrentQuestion = () => {
        const currentQ = selectedExam.questions[currentQuestionIndex];
        const userAnswer = answers[currentQuestionIndex];
        if (!currentQ.multiple) {
            if (userAnswer === undefined) {
                setValidationError('Please select an answer before continuing.');
                return false;
            }
        } else {
            const requiredCount = currentQ.correct.length;
            const selectedCount = Array.isArray(userAnswer) ? userAnswer.length : 0;
            if (selectedCount === 0) {
                setValidationError(`Please select ${requiredCount} option(s).`);
                return false;
            }
            if (selectedCount !== requiredCount) {
                setValidationError(`This question requires exactly ${requiredCount} answer(s). You selected ${selectedCount}.`);
                return false;
            }
        }
        setValidationError('');
        return true;
    };

    const goToNext = () => {
        if (!validateCurrentQuestion()) return;
        if (currentQuestionIndex < selectedExam.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowSubmitConfirm(true);
        }
    };

    const goToPrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setValidationError('');
        }
    };

    const startExam = (exam) => {
        setSelectedExam(exam);
        setCurrentQuestionIndex(0);
        setAnswers({});
        setSubmitted(false);
        setScore(null);
        setDetailedResults([]);
        setExamFinished(false);
        setTimeLeft(45 * 60);
        setTimerActive(true);
        setShowDashboard(false);
        setValidationError('');
        setConfettiTriggered(false);
        // Save start of exam so tab-close recovery can restore it
        safeSetItem('lifeInUkExamInProgress', {
            examId: exam.id,
            questionIndex: 0,
            answers: {},
            timeLeft: 45 * 60,
        });
    };

    const resetExam = () => {
        setSelectedExam(null);
        setSubmitted(false);
        setExamFinished(false);
        setShowDashboard(false);
        setShowSubmitConfirm(false);
        setValidationError('');
        safeSetItem('lifeInUkExamInProgress', null);
    };

    // Discards the current in-progress attempt (if any) and clears its saved
    // state, so returning to Mock Exams never resumes a stale session with
    // a restarted timer.
    const discardInProgressAttempt = () => {
        setTimerActive(false);
        setSelectedExam(null);
        setCurrentQuestionIndex(0);
        setAnswers({});
        setTimeLeft(45 * 60);
        safeSetItem('lifeInUkExamInProgress', null);
    };

    const goHome = () => {
        discardInProgressAttempt();
        navigate('/');
    };

    // Used when exiting mid-exam — lands back on the Mock Exams list rather
    // than Flashcards, since that's where the user was just choosing from.
    const goToExamList = () => {
        discardInProgressAttempt();
    };

    const confirmExit = (callback) => {
        if (selectedExam && !submitted) {
            exitCallbackRef.current = callback;
            setShowExitModal(true);
        } else {
            callback();
        }
    };



    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setContactStatus('Sending...');
        try {
            const response = await fetch('https://formspree.io/f/mdapqlng', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contactForm)
            });
            if (response.ok) {
                setContactStatus('Message sent! We\'ll get back to you soon.');
                setContactForm({ name: '', email: '', message: '' });
                setTimeout(() => { setContactStatus(''); setShowContactModal(false); }, 2000);
            } else {
                setContactStatus('Error sending. Please try again or email us directly.');
            }
        } catch (err) {
            setContactStatus('Network error. Please try again.');
        }
    };

    // Dashboard render (gated)
    const renderDashboard = () => {
        if (!isPremium) {
            return (
                <div className="text-center py-12">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-2xl p-8 max-w-md mx-auto shadow-md">
                        <p className="text-gray-600 dark:text-slate-400 mb-2">🔒 Your performance dashboard is locked</p>
                        <p className="text-gray-500 dark:text-slate-400 text-sm mb-4">Upgrade to Premium to see your strengths, weaknesses, and a personalised 5‑day study plan.</p>
                        <button
                            onClick={onUnlockPremium}
                            className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:shadow-lg transition"
                        >
                            Unlock Premium Insights (£7.99)
                        </button>
                    </div>
                </div>
            );
        }
        if (allResults.length === 0) {
            return (
                <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-slate-400 mb-6">No mock exams taken yet. Complete an exam to see your performance dashboard.</p>
                    <div className="text-center">
                        <button
                            onClick={() => {
                                const doc = new jsPDF();
                                generateCheatSheet(doc, sections, autoTable);
                            }}
                            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-md"
                        >
                            📥 Download Your Offline PDF Guide
                        </button>
                        <p className="text-sm text-gray-500 dark:text-slate-400 mt-2">Printable flashcards & notes for offline studying</p>
                    </div>
                    <button onClick={resetExam} className="mt-8 text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800 dark:hover:text-indigo-300">← Back to Exams</button>
                </div>
            );
        }
        const confidenceScore = calculateConfidenceScore(allResults);
        const averageScore = allResults.reduce((sum, r) => sum + r.score, 0) / allResults.length;
        const bestScore = Math.max(...allResults.map(r => r.score));

        // Aggregate real per-topic accuracy from every exam's topicBreakdown
        const topicAgg = {};
        allResults.forEach(r => {
            if (!r.topicBreakdown) return;
            Object.entries(r.topicBreakdown).forEach(([topic, { correct, total }]) => {
                if (!topicAgg[topic]) topicAgg[topic] = { correct: 0, total: 0 };
                topicAgg[topic].correct += correct;
                topicAgg[topic].total += total;
            });
        });
        const topicStats = Object.entries(topicAgg)
            .map(([topic, { correct, total }]) => ({ topic, correct, total, pct: Math.round((correct / total) * 100) }))
            .filter(t => t.total >= 2) // ignore topics seen only once (too noisy)
            .sort((a, b) => a.pct - b.pct);
        const weakestTopics = topicStats.slice(0, 3);
        const weakTopics = weakestTopics.map(t => t.topic);
        const sevenDayPlan = weakTopics.length > 0
            ? `Focus on ${weakTopics.join(', ')}. Study flashcards daily, take 1-2 mock exams daily, and review explanations.`
            : topicStats.length > 0
                ? "Great work! Keep practicing with full mock exams to maintain your edge."
                : "Take a couple more mock exams to unlock your personalised weak-topic breakdown.";
        return (
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-400">📊 Your Premium Dashboard</h3>
                    <button onClick={resetExam} className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300 text-sm">← Back to Exams</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg text-center shadow-sm"><p className="text-sm text-green-600 dark:text-green-400">Average Score</p><p className="text-3xl font-bold text-green-800 dark:text-green-300">{averageScore.toFixed(1)}%</p></div>
                    <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg text-center shadow-sm"><p className="text-sm text-blue-600 dark:text-blue-400">Best Score</p><p className="text-3xl font-bold text-blue-800 dark:text-blue-300">{bestScore}%</p></div>
                    <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg text-center shadow-sm"><p className="text-sm text-purple-600 dark:text-purple-400">Exams Taken</p><p className="text-3xl font-bold text-purple-800 dark:text-purple-300">{allResults.length}</p></div>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg text-center">
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">Your Confidence Score</p>
                    <p className="text-4xl font-bold text-indigo-800 dark:text-indigo-300">{confidenceScore}%</p>
                    {confidenceScore >= 80 && <p className="text-xs text-green-600 dark:text-green-400">⭐ Ready to pass! ⭐</p>}
                    {confidenceScore < 80 && <p className="text-xs text-amber-600 dark:text-amber-400">📚 Keep practicing – you're getting there!</p>}
                </div>
                <div className="text-center mt-6">
                    <button
                        onClick={() => {
                            const doc = new jsPDF();
                            generateCheatSheet(doc, sections, autoTable);
                        }}
                        className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-md"
                    >
                        📥 Download Your Offline PDF Guide
                    </button>
                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-2">Printable flashcards & notes for offline studying</p>
                </div>
                {topicStats.length > 0 && (
                    <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-5 shadow-sm mt-6">
                        <h4 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-3">🎯 Your Weak Areas</h4>
                        <div className="space-y-2">
                            {topicStats.slice(0, 8).map(({ topic, correct, total, pct }) => (
                                <div key={topic}>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="font-medium text-slate-700 dark:text-slate-300">{topic}</span>
                                        <span className="text-slate-500 dark:text-slate-400">{correct}/{total} ({pct}%)</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${pct < 60 ? 'bg-red-500' : pct < 80 ? 'bg-amber-500' : 'bg-green-500'}`}
                                            style={{ width: `${pct}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-900 rounded-xl p-5 shadow-sm mt-6">
                    <h4 className="font-bold text-yellow-800 dark:text-yellow-400 flex items-center gap-2">🎯 Your 5‑Day Guaranteed Pass Path</h4>
                    <p className="text-gray-700 dark:text-slate-300 mt-2">{sevenDayPlan}</p>
                    <div className="mt-3 text-sm text-gray-600 dark:text-slate-400"><strong>Daily checklist:</strong><ul className="list-disc list-inside mt-1 space-y-1"><li>Review weak area flashcards (20 min)</li><li>Take one timed mock exam (45 min)</li><li>Review all incorrect answers (15 min)</li></ul></div>
                </div>
                <div><h4 className="font-semibold text-gray-700 dark:text-slate-300 mb-2">Exam History</h4><div className="space-y-2 max-h-96 overflow-y-auto">{allResults.slice().reverse().map((res, idx) => (<div key={idx} className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-lg p-3 flex justify-between items-center shadow-sm"><div><p className="font-medium dark:text-slate-100">{res.examTitle}</p><p className="text-xs text-gray-400 dark:text-slate-500">{new Date(res.date).toLocaleString()}</p></div><div className="text-right"><p className="text-lg font-bold dark:text-slate-100">{res.score}%</p><p className="text-xs dark:text-slate-400">{res.correctCount}/{res.totalQuestions} correct</p></div></div>))}</div></div>
            </div>
        );
    };

    const TopBar = () => (
        <div className="flex justify-between items-center mb-6">
            <button onClick={() => confirmExit(goHome)} className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300 transition">← Back to Flashcards</button>
            <div className="flex gap-3">
                <button onClick={() => setShowContactModal(true)} className="text-sm text-gray-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">📧 Contact</button>
                {!isPremium ? (
                    <button
                        onClick={onUnlockPremium}
                        className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition"
                    >
                        ⭐ Unlock Premium
                    </button>
                ) : (
                    <div className="bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-400 px-4 py-1 rounded-full text-sm font-bold border border-indigo-200 dark:border-indigo-900 flex items-center gap-1">
                        ⭐ Premium Active
                    </div>
                )}
            </div>
        </div>
    );

    if (showDashboard) {
        return (
            <>
                <div className="p-6 max-w-4xl mx-auto"><TopBar />{renderDashboard()}</div>
                <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} contactForm={contactForm} setContactForm={setContactForm} contactStatus={contactStatus} onSubmit={handleContactSubmit} />
            </>
        );
    }

    if (!selectedExam) {
        return (
            <div className="p-6">
                <TopBar />
                <h2 className="text-2xl font-bold text-indigo-800 dark:text-indigo-400 mb-1">📝 Mock Exams</h2>
                <p className="text-xs text-slate-400 dark:text-slate-500 mb-6 flex items-center gap-1">
                    <span>✓</span> Content reviewed: August 2026
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Array.from({ length: 45 }).map((_, index) => {
                        const exam = mockExams.find(e => e.id === `exam${index + 1}`);
                        const isLocked = !isPremium && index >= 3;
                        // Check if this exam has been completed before
                        const completedResult = allResults.find(r => r.examId === (exam ? exam.id : `exam${index + 1}`));
                        return (
                            <div key={index} className={`bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-slate-700 transition ${isLocked ? 'opacity-75 bg-gray-50 dark:bg-slate-900' : 'hover:shadow-lg'}`}>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold dark:text-slate-100">{exam ? exam.title : `Practice Exam ${index + 1}`}</h3>
                                    <div className="flex items-center gap-2">
                                        {completedResult && (
                                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${completedResult.score >= 75 ? 'bg-green-100 dark:bg-green-950 text-green-800 dark:text-green-400' : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400'}`}>
                                                {completedResult.score}%
                                            </span>
                                        )}
                                        {isLocked && <span className="text-gray-400 dark:text-slate-500 text-xl" title="Premium Required">🔒</span>}
                                    </div>
                                </div>
                                <p className="text-gray-500 dark:text-slate-400 mb-4">24 questions • 45 minutes</p>
                                {completedResult && (
                                    <p className="text-xs text-gray-400 dark:text-slate-500 mb-2">
                                        ✅ Completed {new Date(completedResult.date).toLocaleDateString('en-GB')} • {completedResult.correctCount}/{completedResult.totalQuestions} correct
                                    </p>
                                )}
                                <button
                                    onClick={() => {
                                        if (isLocked) {
                                            onUnlockPremium();
                                        } else if (exam) {
                                            startExam(exam);
                                        } else {
                                            alert("This exam is coming soon! Our team is adding it shortly.");
                                        }
                                    }}
                                    className={`w-full px-4 py-2 rounded-lg transition font-medium ${isLocked ? 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-slate-600' : completedResult ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                                >
                                    {isLocked ? 'Unlock Premium' : completedResult ? '🔄 Retake Exam' : 'Start Exam'}
                                </button>
                            </div>
                        );
                    })}
                </div>
                {allResults.length > 0 && (<div className="mt-8 text-center"><button onClick={() => setShowDashboard(true)} className="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800 dark:hover:text-indigo-300">View Your Performance Dashboard</button></div>)}
                <div className="mt-12 max-w-3xl mx-auto">
                    <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Question Breakdown by Topic</h2>
                    <p className="text-sm text-gray-500 dark:text-slate-400 mb-4">All {TOTAL_QUESTIONS} questions across the 45 mock exams are drawn from the official Life in the UK handbook. Here's how the top topics break down:</p>
                    <div className="overflow-x-auto bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-slate-700">
                                    <th className="px-4 py-2 font-semibold text-slate-700 dark:text-slate-200">Topic</th>
                                    <th className="px-4 py-2 font-semibold text-slate-700 dark:text-slate-200 text-right">Questions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topicDistribution.map(({ topic, count }) => (
                                    <tr key={topic} className="border-b border-gray-100 dark:border-slate-700 last:border-0">
                                        <td className="px-4 py-2 text-gray-700 dark:text-slate-300">{topic}</td>
                                        <td className="px-4 py-2 text-gray-500 dark:text-slate-400 text-right">{count}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-12 max-w-3xl mx-auto">
                    <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {mockExamFaqs.map(({ q, a }) => (
                            <div key={q} className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-4">
                                <h3 className="font-semibold text-slate-800 dark:text-slate-100">{q}</h3>
                                <p className="text-sm text-gray-600 dark:text-slate-400 mt-1">{a}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} contactForm={contactForm} setContactForm={setContactForm} contactStatus={contactStatus} onSubmit={handleContactSubmit} />
            </div>
        );
    }

    if (submitted) {
        return (
            <div className="p-6 max-w-3xl mx-auto">
                <TopBar />
                <div className="flex justify-between items-center mb-6"><h2 className="text-2xl font-bold text-indigo-800 dark:text-indigo-400">Results: {selectedExam.title}</h2><button onClick={resetExam} className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300">← Exit</button></div>
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 mb-6 text-center">
                    <p className="text-lg dark:text-slate-100">Your score</p><p className="text-5xl font-bold text-indigo-700 dark:text-indigo-400">{score}%</p><p className="text-gray-500 dark:text-slate-400 mt-2">{detailedResults.filter(r => r.isCorrect).length} / {selectedExam.questions.length} correct</p>
                    {score >= 75 ? <div className="mt-4 bg-green-100 dark:bg-green-950 text-green-800 dark:text-green-400 p-3 rounded-lg">🎉 Well done! You passed the mock test.</div> : <div className="mt-4 bg-yellow-100 dark:bg-yellow-950 text-yellow-800 dark:text-yellow-400 p-3 rounded-lg">📚 Review the flashcards below to improve.</div>}
                    <div className="mt-4 flex flex-wrap justify-center gap-3">
                        <button onClick={resetExam} className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">Take Another Exam</button>
                        <button
                            onClick={() => {
                                if (isPremium) {
                                    setShowDashboard(true);
                                } else {
                                    onUnlockPremium();
                                }
                            }}
                            className={`px-6 py-2 rounded-lg font-bold shadow-md transition ${isPremium ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900' : 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:shadow-lg'}`}
                        >
                            {isPremium ? '📊 View Performance Dashboard' : '📊 View Performance Dashboard 🔒'}
                        </button>
                        {score >= 75 && (
                            <button
                                onClick={() => {
                                    const msg = encodeURIComponent(`🎉 I just scored ${score}% on my Life in the UK mock test! Feeling confident for the real thing. Try it free at lifeinukcoach.co.uk`);
                                    window.open(`https://wa.me/?text=${msg}`, '_blank');
                                }}
                                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition font-semibold"
                            >
                                📲 Share Score
                            </button>
                        )}
                    </div>
                </div>
                <div className="space-y-4"><h3 className="text-xl font-bold dark:text-slate-100">Detailed Answers</h3>{detailedResults.map((res, idx) => (<div key={idx} className={`border-l-4 p-4 rounded-r-lg ${res.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-950' : 'border-red-500 bg-red-50 dark:bg-red-950'}`}><p className="font-medium dark:text-slate-100">{idx + 1}. {res.question}</p><p className="text-sm mt-1 dark:text-slate-300"><span className="font-semibold">Your answer:</span> {res.multiple ? (Array.isArray(res.userAnswer) ? res.userAnswer.map(i => res.choices[i]).join(', ') : 'Not answered') : (res.userAnswer !== undefined ? res.choices[res.userAnswer] : 'Not answered')}</p>{!res.isCorrect && (<p className="text-sm mt-1 dark:text-slate-300"><span className="font-semibold">Correct answer:</span> {res.multiple ? res.correct.map(i => res.choices[i]).join(', ') : res.choices[res.correct]}</p>)}<p className="text-sm mt-2 text-gray-600 dark:text-slate-400">{res.explanation}</p></div>))}</div>
                <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} contactForm={contactForm} setContactForm={setContactForm} contactStatus={contactStatus} onSubmit={handleContactSubmit} />
            </div>
        );
    }

    const currentQ = selectedExam.questions[currentQuestionIndex];
    const currentAnswer = answers[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / selectedExam.questions.length) * 100;
    const warning = timeLeft <= 300 ? 'text-red-600 dark:text-red-400 font-bold animate-pulse' : 'text-gray-700 dark:text-slate-300';

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <TopBar />
            <div className="flex justify-between items-center mb-4"><button onClick={() => confirmExit(goToExamList)} className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300">← Exit Exam</button><div className={`text-xl font-mono ${warning}`}>⏱️ {formatTime(timeLeft)}</div></div>
            <div className="bg-gray-200 dark:bg-slate-700 rounded-full h-2 mb-6"><div className="bg-indigo-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div></div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 mb-6">
                <div className="flex justify-between text-sm text-gray-500 dark:text-slate-400 mb-4"><span>Question {currentQuestionIndex + 1} of {selectedExam.questions.length}</span><span>{Math.round(progress)}% complete</span></div>
                <h3 className="text-xl font-semibold mb-4 dark:text-slate-100">{currentQ.text}</h3>
                <div className="space-y-3">{currentQ.choices.map((choice, idx) => { let isSelected = false; if (currentQ.multiple && Array.isArray(currentAnswer)) { isSelected = currentAnswer.includes(idx); } else { isSelected = currentAnswer === idx; } return (<button key={idx} onClick={() => { setValidationError(''); handleAnswer(idx); }} className={`w-full text-left p-3 rounded-lg border transition-all ${isSelected ? 'bg-indigo-100 dark:bg-indigo-950 border-indigo-500 dark:border-indigo-600 shadow-sm' : 'bg-gray-50 dark:bg-slate-700 border-gray-200 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-600'}`}><span className="font-medium dark:text-slate-100">{String.fromCharCode(65 + idx)}.</span> <span className="dark:text-slate-100">{choice}</span></button>); })}</div>
                {currentQ.multiple && (<p className="text-sm text-gray-500 dark:text-slate-400 mt-3 italic">Select exactly {currentQ.correct.length} answer(s).</p>)}
                {validationError && (<div className="mt-3 text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-950 p-2 rounded border-l-4 border-red-500">⚠️ {validationError}</div>)}
            </div>
            <div className="flex justify-between">
                <button onClick={goToPrev} disabled={currentQuestionIndex === 0} className={`px-4 py-2 rounded-lg transition ${currentQuestionIndex === 0 ? 'bg-gray-200 dark:bg-slate-700 cursor-not-allowed' : 'bg-gray-300 dark:bg-slate-600 hover:bg-gray-400 dark:hover:bg-slate-500'}`}>Previous</button>
                <button onClick={goToNext} className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition shadow-md">{currentQuestionIndex === selectedExam.questions.length - 1 ? 'Submit Exam' : 'Next Question'}</button>
            </div>
            <SubmitConfirmModal isOpen={showSubmitConfirm} onConfirm={() => { setShowSubmitConfirm(false); handleSubmit(); }} onCancel={() => setShowSubmitConfirm(false)} />
            <ExitConfirmModal isOpen={showExitModal} onConfirm={() => { setShowExitModal(false); if (exitCallbackRef.current) exitCallbackRef.current(); }} onCancel={() => setShowExitModal(false)} />
            <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} contactForm={contactForm} setContactForm={setContactForm} contactStatus={contactStatus} onSubmit={handleContactSubmit} />
        </div>
    );
}