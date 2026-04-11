import React, { useState, useEffect, useCallback } from 'react';
import { mockExams } from './mockExamsData';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'lifeInUkMockResults';
const PREMIUM_KEY = 'lifeInUkPremium';

// Helper to trigger confetti
const triggerConfetti = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
};

// ===================== MODAL COMPONENTS (defined outside to prevent focus loss) =====================
const PremiumModal = ({ isOpen, onClose, redeemCode, setRedeemCode, redeemError, onRedeem, onSubscribe }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl">
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">✨ Unlock Premium</h3>
                <p className="text-gray-600 mb-4">Get your personalised 7‑day exam guarantee and advanced insights.</p>
                <ul className="space-y-2 mb-6 text-sm">
                    <li>✓ <strong>7‑day guaranteed pass path</strong> – daily study plan tailored to your weak areas</li>
                    <li>✓ <strong>All 45 mock exams</strong> (unlimited access)</li>
                    <li>✓ <strong>Detailed performance analytics</strong> – topic‑wise breakdown</li>
                    <li>✓ <strong>Priority support & offline PDF guides</strong></li>
                </ul>
                <button onClick={onSubscribe} className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition">
                    Subscribe Now – £4.99
                </button>
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-500">Or enter a code</span></div>
                </div>
                <input
                    type="text"
                    placeholder="Redeem code"
                    value={redeemCode}
                    onChange={(e) => setRedeemCode(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    autoFocus
                />
                {redeemError && <p className="text-red-500 text-xs mb-2">{redeemError}</p>}
                <button onClick={onRedeem} className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition">Redeem Code</button>
                <button onClick={onClose} className="w-full mt-3 text-gray-400 text-sm">Maybe later</button>
            </div>
        </div>
    );
};

const ContactModal = ({ isOpen, onClose, contactForm, setContactForm, contactStatus, onSubmit }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl">
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">📧 Contact Us</h3>
                <p className="text-gray-600 mb-4">Have a question, feedback, or issue? We'd love to hear from you.</p>
                <form onSubmit={onSubmit} className="space-y-4">
                    <input type="text" placeholder="Your name" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required autoFocus />
                    <input type="email" placeholder="Your email address" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                    <textarea placeholder="Your message..." rows="4" value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                    {contactStatus && <p className="text-sm text-center text-gray-600">{contactStatus}</p>}
                    <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">Send Message</button>
                    <button type="button" onClick={onClose} className="w-full text-gray-400 text-sm">Cancel</button>
                </form>
            </div>
        </div>
    );
};

const SubmitConfirmModal = ({ isOpen, onConfirm, onCancel }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-xl text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Submit Exam?</h3>
                <p className="text-gray-600 mb-6">You've answered all questions. Are you ready to submit and see your score?</p>
                <div className="flex gap-3">
                    <button onClick={onConfirm} className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">Yes, Submit</button>
                    <button onClick={onCancel} className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300">Cancel</button>
                </div>
            </div>
        </div>
    );
};

// ===================== MAIN COMPONENT =====================
export default function MockExam({ onBack }) {
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
    const [showPremiumModal, setShowPremiumModal] = useState(false);
    const [isPremium, setIsPremium] = useState(false);
    const [redeemCode, setRedeemCode] = useState('');
    const [redeemError, setRedeemError] = useState('');
    const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
    const [validationError, setValidationError] = useState('');
    const [showContactModal, setShowContactModal] = useState(false);
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const [contactStatus, setContactStatus] = useState('');
    const [confettiTriggered, setConfettiTriggered] = useState(false);

    // Check premium status on mount and URL param
    useEffect(() => {
        const storedPremium = localStorage.getItem(PREMIUM_KEY);
        if (storedPremium === 'true') setIsPremium(true);
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('premium') === 'true') {
            localStorage.setItem(PREMIUM_KEY, 'true');
            setIsPremium(true);
            triggerConfetti();
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, []);

    // Load previous results from localStorage
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) setAllResults(JSON.parse(stored));
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

    const handleSubmit = useCallback(() => {
        if (submitted) return;
        setTimerActive(false);
        let correctCount = 0;
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
            return {
                question: q.text,
                userAnswer,
                correct: q.correct,
                isCorrect,
                explanation: q.explanation,
                choices: q.choices,
                multiple: q.multiple || false
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
            correctCount
        };
        const updatedResults = [...allResults, newResult];
        setAllResults(updatedResults);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedResults));
    }, [submitted, selectedExam, answers, allResults, confettiTriggered]);

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
    };

    const resetExam = () => {
        setSelectedExam(null);
        setSubmitted(false);
        setExamFinished(false);
        setShowDashboard(false);
        setShowSubmitConfirm(false);
        setValidationError('');
    };

    const handleRedeemCode = () => {
        if (redeemCode.trim().toLowerCase() === 'premium2026') {
            localStorage.setItem(PREMIUM_KEY, 'true');
            setIsPremium(true);
            setRedeemError('');
            setShowPremiumModal(false);
            triggerConfetti();
            alert('Premium unlocked! You can now access advanced insights.');
        } else {
            setRedeemError('Invalid code. Please try again or purchase premium.');
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

    // Dashboard render (unchanged)
    const renderDashboard = () => {
        if (!isPremium) {
            return (
                <div className="text-center py-12">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 max-w-md mx-auto shadow-md">
                        <p className="text-gray-600 mb-2">🔒 Your performance dashboard is locked</p>
                        <p className="text-gray-500 text-sm mb-4">Upgrade to Premium to see your strengths, weaknesses, and a personalised 7‑day study plan.</p>
                        <button onClick={() => setShowPremiumModal(true)} className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:shadow-lg transition">Unlock Premium Insights (£7.99)</button>
                    </div>
                </div>
            );
        }
        if (allResults.length === 0) {
            return (
                <div className="text-center py-12">
                    <p className="text-gray-500">No mock exams taken yet. Complete an exam to see your performance dashboard.</p>
                    <button onClick={resetExam} className="mt-4 text-indigo-600 underline hover:text-indigo-800">← Back to Exams</button>
                </div>
            );
        }
        const averageScore = allResults.reduce((sum, r) => sum + r.score, 0) / allResults.length;
        const bestScore = Math.max(...allResults.map(r => r.score));
        const weakTopics = [];
        if (averageScore < 60) weakTopics.push("History dates & events");
        if (averageScore < 70) weakTopics.push("Government & law");
        if (averageScore < 65) weakTopics.push("British values & symbols");
        const sevenDayPlan = weakTopics.length > 0
            ? `Focus on ${weakTopics.join(', ')}. Study flashcards daily, take one mock exam every 2 days, and review explanations.`
            : "Great work! Keep practicing with full mock exams to maintain your edge.";
        return (
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-indigo-800">📊 Your Premium Dashboard</h3>
                    <button onClick={resetExam} className="text-gray-500 hover:text-gray-700 text-sm">← Back to Exams</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg text-center shadow-sm"><p className="text-sm text-green-600">Average Score</p><p className="text-3xl font-bold text-green-800">{averageScore.toFixed(1)}%</p></div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center shadow-sm"><p className="text-sm text-blue-600">Best Score</p><p className="text-3xl font-bold text-blue-800">{bestScore}%</p></div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center shadow-sm"><p className="text-sm text-purple-600">Exams Taken</p><p className="text-3xl font-bold text-purple-800">{allResults.length}</p></div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 shadow-sm">
                    <h4 className="font-bold text-yellow-800 flex items-center gap-2">🎯 Your 7‑Day Guaranteed Pass Path</h4>
                    <p className="text-gray-700 mt-2">{sevenDayPlan}</p>
                    <div className="mt-3 text-sm text-gray-600"><strong>Daily checklist:</strong><ul className="list-disc list-inside mt-1 space-y-1"><li>Review weak area flashcards (20 min)</li><li>Take one timed mock exam (45 min)</li><li>Review all incorrect answers (15 min)</li></ul></div>
                </div>
                <div><h4 className="font-semibold text-gray-700 mb-2">Exam History</h4><div className="space-y-2 max-h-96 overflow-y-auto">{allResults.slice().reverse().map((res, idx) => (<div key={idx} className="bg-white border rounded-lg p-3 flex justify-between items-center shadow-sm"><div><p className="font-medium">{res.examTitle}</p><p className="text-xs text-gray-400">{new Date(res.date).toLocaleString()}</p></div><div className="text-right"><p className="text-lg font-bold">{res.score}%</p><p className="text-xs">{res.correctCount}/{res.totalQuestions} correct</p></div></div>))}</div></div>
            </div>
        );
    };

    const TopBar = () => (
        <div className="flex justify-between items-center mb-6">
            <button onClick={onBack} className="text-gray-500 hover:text-gray-700 transition">← Back to Flashcards</button>
            <div className="flex gap-3">
                <button onClick={() => setShowContactModal(true)} className="text-sm text-gray-500 hover:text-indigo-600 transition">📧 Contact</button>
                <button onClick={() => setShowPremiumModal(true)} className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition">⭐ Unlock Premium</button>
            </div>
        </div>
    );

    // Screens
    if (showDashboard) {
        return (
            <>
                <div className="p-6 max-w-4xl mx-auto"><TopBar />{renderDashboard()}</div>
                <PremiumModal isOpen={showPremiumModal} onClose={() => setShowPremiumModal(false)} redeemCode={redeemCode} setRedeemCode={setRedeemCode} redeemError={redeemError} onRedeem={handleRedeemCode} onSubscribe={() => window.location.href = 'https://buy.stripe.com/your-link-here'} />
                <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} contactForm={contactForm} setContactForm={setContactForm} contactStatus={contactStatus} onSubmit={handleContactSubmit} />
            </>
        );
    }

    if (!selectedExam) {
        return (
            <div className="p-6">
                <TopBar />
                <h2 className="text-2xl font-bold text-indigo-800 mb-6">📝 Mock Exams</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {mockExams.map(exam => (
                        <div key={exam.id} className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition">
                            <h3 className="text-xl font-bold mb-2">{exam.title}</h3>
                            <p className="text-gray-500 mb-4">{exam.questions.length} questions • 45 minutes</p>
                            <button onClick={() => startExam(exam)} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 w-full transition">Start Exam</button>
                        </div>
                    ))}
                </div>
                {allResults.length > 0 && (<div className="mt-8 text-center"><button onClick={() => setShowDashboard(true)} className="text-indigo-600 underline hover:text-indigo-800">View Your Performance Dashboard</button></div>)}
                <PremiumModal isOpen={showPremiumModal} onClose={() => setShowPremiumModal(false)} redeemCode={redeemCode} setRedeemCode={setRedeemCode} redeemError={redeemError} onRedeem={handleRedeemCode} onSubscribe={() => window.location.href = 'https://buy.stripe.com/your-link-here'} />
                <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} contactForm={contactForm} setContactForm={setContactForm} contactStatus={contactStatus} onSubmit={handleContactSubmit} />
            </div>
        );
    }

    if (submitted) {
        return (
            <div className="p-6 max-w-3xl mx-auto">
                <TopBar />
                <div className="flex justify-between items-center mb-6"><h2 className="text-2xl font-bold text-indigo-800">Results: {selectedExam.title}</h2><button onClick={resetExam} className="text-gray-500 hover:text-gray-700">← Exit</button></div>
                <div className="bg-white rounded-xl shadow-md p-6 mb-6 text-center">
                    <p className="text-lg">Your score</p><p className="text-5xl font-bold text-indigo-700">{score}%</p><p className="text-gray-500 mt-2">{detailedResults.filter(r => r.isCorrect).length} / {selectedExam.questions.length} correct</p>
                    {score >= 75 ? <div className="mt-4 bg-green-100 text-green-800 p-3 rounded-lg">🎉 Well done! You passed the mock test.</div> : <div className="mt-4 bg-yellow-100 text-yellow-800 p-3 rounded-lg">📚 Review the flashcards below to improve.</div>}
                    <div className="mt-4 flex justify-center gap-3">
                        <button onClick={resetExam} className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">Take Another Exam</button>
                        <button onClick={() => setShowPremiumModal(true)} className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:shadow-lg transition">Unlock Premium Insights (£7.99)</button>
                    </div>
                </div>
                <div className="space-y-4"><h3 className="text-xl font-bold">Detailed Answers</h3>{detailedResults.map((res, idx) => (<div key={idx} className={`border-l-4 p-4 rounded-r-lg ${res.isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}><p className="font-medium">{idx + 1}. {res.question}</p><p className="text-sm mt-1"><span className="font-semibold">Your answer:</span> {res.multiple ? (Array.isArray(res.userAnswer) ? res.userAnswer.map(i => res.choices[i]).join(', ') : 'Not answered') : (res.userAnswer !== undefined ? res.choices[res.userAnswer] : 'Not answered')}</p>{!res.isCorrect && (<p className="text-sm mt-1"><span className="font-semibold">Correct answer:</span> {res.multiple ? res.correct.map(i => res.choices[i]).join(', ') : res.choices[res.correct]}</p>)}<p className="text-sm mt-2 text-gray-600">{res.explanation}</p></div>))}</div>
                <PremiumModal isOpen={showPremiumModal} onClose={() => setShowPremiumModal(false)} redeemCode={redeemCode} setRedeemCode={setRedeemCode} redeemError={redeemError} onRedeem={handleRedeemCode} onSubscribe={() => window.location.href = 'https://buy.stripe.com/your-link-here'} />
                <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} contactForm={contactForm} setContactForm={setContactForm} contactStatus={contactStatus} onSubmit={handleContactSubmit} />
            </div>
        );
    }

    // Active exam
    const currentQ = selectedExam.questions[currentQuestionIndex];
    const currentAnswer = answers[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / selectedExam.questions.length) * 100;
    const warning = timeLeft <= 300 ? 'text-red-600 font-bold animate-pulse' : 'text-gray-700';

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <TopBar />
            <div className="flex justify-between items-center mb-4"><button onClick={resetExam} className="text-gray-500 hover:text-gray-700">← Exit Exam</button><div className={`text-xl font-mono ${warning}`}>⏱️ {formatTime(timeLeft)}</div></div>
            <div className="bg-gray-200 rounded-full h-2 mb-6"><div className="bg-indigo-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div></div>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="flex justify-between text-sm text-gray-500 mb-4"><span>Question {currentQuestionIndex + 1} of {selectedExam.questions.length}</span><span>{Math.round(progress)}% complete</span></div>
                <h3 className="text-xl font-semibold mb-4">{currentQ.text}</h3>
                <div className="space-y-3">{currentQ.choices.map((choice, idx) => { let isSelected = false; if (currentQ.multiple && Array.isArray(currentAnswer)) { isSelected = currentAnswer.includes(idx); } else { isSelected = currentAnswer === idx; } return (<button key={idx} onClick={() => { setValidationError(''); handleAnswer(idx); }} className={`w-full text-left p-3 rounded-lg border transition-all ${isSelected ? 'bg-indigo-100 border-indigo-500 shadow-sm' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}><span className="font-medium">{String.fromCharCode(65 + idx)}.</span> {choice}</button>); })}</div>
                {currentQ.multiple && (<p className="text-sm text-gray-500 mt-3 italic">Select exactly {currentQ.correct.length} option(s) (you can choose any, not necessarily correct).</p>)}
                {validationError && (<div className="mt-3 text-red-600 text-sm bg-red-50 p-2 rounded border-l-4 border-red-500">⚠️ {validationError}</div>)}
            </div>
            <div className="flex justify-between">
                <button onClick={goToPrev} disabled={currentQuestionIndex === 0} className={`px-4 py-2 rounded-lg transition ${currentQuestionIndex === 0 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-300 hover:bg-gray-400'}`}>Previous</button>
                <button onClick={goToNext} className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition shadow-md">{currentQuestionIndex === selectedExam.questions.length - 1 ? 'Submit Exam' : 'Next Question'}</button>
            </div>
            <SubmitConfirmModal isOpen={showSubmitConfirm} onConfirm={() => { setShowSubmitConfirm(false); handleSubmit(); }} onCancel={() => setShowSubmitConfirm(false)} />
            <PremiumModal isOpen={showPremiumModal} onClose={() => setShowPremiumModal(false)} redeemCode={redeemCode} setRedeemCode={setRedeemCode} redeemError={redeemError} onRedeem={handleRedeemCode} onSubscribe={() => window.location.href = 'https://buy.stripe.com/your-link-here'} />
            <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} contactForm={contactForm} setContactForm={setContactForm} contactStatus={contactStatus} onSubmit={handleContactSubmit} />
        </div>
    );
}