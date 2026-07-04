import React, { useState, useEffect, useCallback } from 'react';
import { mockExams } from './mockExamsData';
import confetti from 'canvas-confetti';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { sections } from './studyGuideData';


const STORAGE_KEY = 'lifeInUkMockResults';
const PREMIUM_KEY = 'lifeInUkPremium';

// Helper to trigger confetti
const triggerConfetti = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
};

// Contact Modal (unchanged)
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

const ExitConfirmModal = ({ isOpen, onConfirm, onCancel }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-xl text-center">
                <div className="text-4xl mb-3">⚠️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Exit Exam?</h3>
                <p className="text-gray-600 mb-6">Your progress will be lost if you leave now. Are you sure you want to exit?</p>
                <div className="flex gap-3">
                    <button onClick={onConfirm} className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 font-semibold">Yes, Exit</button>
                    <button onClick={onCancel} className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300">Keep Going</button>
                </div>
            </div>
        </div>
    );
};



// Helper function (outside the main component)
// const calculateConfidenceScore = (results) => {
//     if (!results || results.length === 0) return 0;
//     // Take last 5 scores, most recent weighted more
//     const lastFive = results.slice(-5);
//     let weightedSum = 0;
//     let totalWeight = 0;
//     lastFive.forEach((res, idx) => {
//         const weight = idx + 1; // 1,2,3,4,5
//         weightedSum += res.score * weight;
//         totalWeight += weight;
//     });
//     let rawScore = weightedSum / totalWeight;
//     // Bonus for consistency (if at least 3 exams and std dev < 10)
//     if (lastFive.length >= 3) {
//         const scores = lastFive.map(r => r.score);
//         const mean = scores.reduce((a, b) => a + b, 0) / scores.length;
//         const variance = scores.map(s => Math.pow(s - mean, 2)).reduce((a, b) => a + b, 0) / scores.length;
//         const stdDev = Math.sqrt(variance);
//         if (stdDev < 10) rawScore += 5;
//     }
//     return Math.min(100, Math.round(rawScore));
// };

export default function MockExam({ onBack, isPremium, setIsPremium, onUnlockPremium }) {
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

    // Load previous results
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
    // Example calculation for Confidence Score
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
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 max-w-md mx-auto shadow-md">
                        <p className="text-gray-600 mb-2">🔒 Your performance dashboard is locked</p>
                        <p className="text-gray-500 text-sm mb-4">Upgrade to Premium to see your strengths, weaknesses, and a personalised 5‑day study plan.</p>
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
                    <p className="text-gray-500 mb-6">No mock exams taken yet. Complete an exam to see your performance dashboard.</p>
                    <div className="text-center">
                        <button
                            onClick={() => {
                                const doc = new jsPDF();
                                doc.setFontSize(22);
                                doc.setTextColor(63, 81, 181);
                                doc.text("Life in the UK 2026 - Premium Study Guide", 14, 20);
                                doc.setFontSize(11);
                                doc.setTextColor(100, 100, 100);
                                doc.text("Exclusive offline review material for premium users.", 14, 28);
                                let startY = 35;
                                sections.forEach((section, index) => {
                                    doc.setFontSize(14);
                                    doc.setTextColor(33, 33, 33);
                                    doc.text(section.title.replace(/[^\x20-\x7E\n\r]/g, "").trim(), 14, startY);
                                    startY += 6;
                                    const tableData = section.cards.map(card => [
                                        card.front.replace(/[^\x20-\x7E\n\r]/g, "").trim(),
                                        card.back.replace(/[^\x20-\x7E\n\r]/g, "").trim()
                                    ]);
                                    autoTable(doc, {
                                        startY: startY,
                                        head: [['Topic / Question', 'Answer / Details']],
                                        body: tableData,
                                        theme: 'striped',
                                        headStyles: { fillColor: [63, 81, 181] },
                                        styles: { fontSize: 10, cellPadding: 3 },
                                        columnStyles: {
                                            0: { cellWidth: 70 },
                                            1: { cellWidth: 'auto' }
                                        },
                                        margin: { top: 10 }
                                    });
                                    startY = doc.lastAutoTable.finalY + 15;
                                    if (startY > 260 && index < sections.length - 1) {
                                        doc.addPage();
                                        startY = 20;
                                    }
                                });
                                doc.save("Life_in_the_UK_Cheat_Sheet_2026.pdf");
                            }}
                            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-md"
                        >
                            📥 Download Your Offline PDF Guide
                        </button>
                        <p className="text-sm text-gray-500 mt-2">Printable flashcards & notes for offline studying</p>
                    </div>
                    <button onClick={resetExam} className="mt-8 text-indigo-600 underline hover:text-indigo-800">← Back to Exams</button>
                </div>
            );
        }
        const confidenceScore = calculateConfidenceScore(allResults);
        const averageScore = allResults.reduce((sum, r) => sum + r.score, 0) / allResults.length;
        const bestScore = Math.max(...allResults.map(r => r.score));
        const weakTopics = [];
        if (averageScore < 60) weakTopics.push("History dates & events");
        if (averageScore < 70) weakTopics.push("Government & law");
        if (averageScore < 65) weakTopics.push("British values & symbols");
        const sevenDayPlan = weakTopics.length > 0
            ? `Focus on ${weakTopics.join(', ')}. Study flashcards daily, take 1-2 mock exams daily, and review explanations.`
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
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                    <p className="text-sm text-indigo-600">Your Confidence Score</p>
                    <p className="text-4xl font-bold text-indigo-800">{confidenceScore}%</p>
                    {confidenceScore >= 80 && <p className="text-xs text-green-600">⭐ Ready to pass! ⭐</p>}
                    {confidenceScore < 80 && <p className="text-xs text-amber-600">📚 Keep practicing – you're getting there!</p>}
                </div>
                <div className="text-center mt-6">
                    <button
                        onClick={() => {
                            const doc = new jsPDF();
                            doc.setFontSize(22);
                            doc.setTextColor(63, 81, 181);
                            doc.text("Life in the UK 2026 - Premium Study Guide", 14, 20);
                            doc.setFontSize(11);
                            doc.setTextColor(100, 100, 100);
                            doc.text("Exclusive offline review material for premium users.", 14, 28);
                            let startY = 35;
                            sections.forEach((section, index) => {
                                doc.setFontSize(14);
                                doc.setTextColor(33, 33, 33);
                                doc.text(section.title.replace(/[^\x20-\x7E\n\r]/g, "").trim(), 14, startY);
                                startY += 6;
                                const tableData = section.cards.map(card => [
                                    card.front.replace(/[^\x20-\x7E\n\r]/g, "").trim(),
                                    card.back.replace(/[^\x20-\x7E\n\r]/g, "").trim()
                                ]);
                                autoTable(doc, {
                                    startY: startY,
                                    head: [['Topic / Question', 'Answer / Details']],
                                    body: tableData,
                                    theme: 'striped',
                                    headStyles: { fillColor: [63, 81, 181] },
                                    styles: { fontSize: 10, cellPadding: 3 },
                                    columnStyles: {
                                        0: { cellWidth: 70 },
                                        1: { cellWidth: 'auto' }
                                    },
                                    margin: { top: 10 }
                                });
                                startY = doc.lastAutoTable.finalY + 15;
                                if (startY > 260 && index < sections.length - 1) {
                                    doc.addPage();
                                    startY = 20;
                                }
                            });
                            doc.save("Life_in_the_UK_Cheat_Sheet_2026.pdf");
                        }}
                        className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-md"
                    >
                        📥 Download Your Offline PDF Guide
                    </button>
                    <p className="text-sm text-gray-500 mt-2">Printable flashcards & notes for offline studying</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 shadow-sm mt-6">
                    <h4 className="font-bold text-yellow-800 flex items-center gap-2">🎯 Your 5‑Day Guaranteed Pass Path</h4>
                    <p className="text-gray-700 mt-2">{sevenDayPlan}</p>
                    <div className="mt-3 text-sm text-gray-600"><strong>Daily checklist:</strong><ul className="list-disc list-inside mt-1 space-y-1"><li>Review weak area flashcards (20 min)</li><li>Take one timed mock exam (45 min)</li><li>Review all incorrect answers (15 min)</li></ul></div>
                </div>
                <div><h4 className="font-semibold text-gray-700 mb-2">Exam History</h4><div className="space-y-2 max-h-96 overflow-y-auto">{allResults.slice().reverse().map((res, idx) => (<div key={idx} className="bg-white border rounded-lg p-3 flex justify-between items-center shadow-sm"><div><p className="font-medium">{res.examTitle}</p><p className="text-xs text-gray-400">{new Date(res.date).toLocaleString()}</p></div><div className="text-right"><p className="text-lg font-bold">{res.score}%</p><p className="text-xs">{res.correctCount}/{res.totalQuestions} correct</p></div></div>))}</div></div>
            </div>
        );
    };

    const TopBar = () => (
        <div className="flex justify-between items-center mb-6">
            <button onClick={() => confirmExit(onBack)} className="text-gray-500 hover:text-gray-700 transition">← Back to Flashcards</button>
            <div className="flex gap-3">
                <button onClick={() => setShowContactModal(true)} className="text-sm text-gray-500 hover:text-indigo-600 transition">📧 Contact</button>
                {!isPremium ? (
                    <button
                        onClick={onUnlockPremium}
                        className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition"
                    >
                        ⭐ Unlock Premium
                    </button>
                ) : (
                    <div className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-bold border border-indigo-200 flex items-center gap-1">
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
                <h2 className="text-2xl font-bold text-indigo-800 mb-6">📝 Mock Exams</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Array.from({ length: 45 }).map((_, index) => {
                        const exam = mockExams[index];
                        const isLocked = !isPremium && index >= 3;
                        return (
                            <div key={index} className={`bg-white rounded-xl shadow-md p-6 border border-gray-200 transition ${isLocked ? 'opacity-75 bg-gray-50' : 'hover:shadow-lg'}`}>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold">{exam ? exam.title : `Practice Exam ${index + 1}`}</h3>
                                    {isLocked && <span className="text-gray-400 text-xl" title="Premium Required">🔒</span>}
                                </div>
                                <p className="text-gray-500 mb-4">24 questions • 45 minutes</p>
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
                                    className={`w-full px-4 py-2 rounded-lg transition font-medium ${isLocked ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                                >
                                    {isLocked ? 'Unlock Premium' : 'Start Exam'}
                                </button>
                            </div>
                        );
                    })}
                </div>
                {allResults.length > 0 && (<div className="mt-8 text-center"><button onClick={() => setShowDashboard(true)} className="text-indigo-600 underline hover:text-indigo-800">View Your Performance Dashboard</button></div>)}
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
                            className={`px-6 py-2 rounded-lg font-bold shadow-md transition ${isPremium ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' : 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:shadow-lg'}`}
                        >
                            {isPremium ? '📊 View Performance Dashboard' : '📊 View Performance Dashboard 🔒'}
                        </button>
                        {score >= 75 && (
                            <button
                                onClick={() => {
                                    const msg = encodeURIComponent(`🎉 I just scored ${score}% on my Life in the UK mock test! Feeling confident for the real thing. Try it free at lifeinuktest.co.uk`);
                                    window.open(`https://wa.me/?text=${msg}`, '_blank');
                                }}
                                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition font-semibold"
                            >
                                📲 Share Score
                            </button>
                        )}
                    </div>
                </div>
                <div className="space-y-4"><h3 className="text-xl font-bold">Detailed Answers</h3>{detailedResults.map((res, idx) => (<div key={idx} className={`border-l-4 p-4 rounded-r-lg ${res.isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}><p className="font-medium">{idx + 1}. {res.question}</p><p className="text-sm mt-1"><span className="font-semibold">Your answer:</span> {res.multiple ? (Array.isArray(res.userAnswer) ? res.userAnswer.map(i => res.choices[i]).join(', ') : 'Not answered') : (res.userAnswer !== undefined ? res.choices[res.userAnswer] : 'Not answered')}</p>{!res.isCorrect && (<p className="text-sm mt-1"><span className="font-semibold">Correct answer:</span> {res.multiple ? res.correct.map(i => res.choices[i]).join(', ') : res.choices[res.correct]}</p>)}<p className="text-sm mt-2 text-gray-600">{res.explanation}</p></div>))}</div>
                <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} contactForm={contactForm} setContactForm={setContactForm} contactStatus={contactStatus} onSubmit={handleContactSubmit} />
            </div>
        );
    }

    const currentQ = selectedExam.questions[currentQuestionIndex];
    const currentAnswer = answers[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / selectedExam.questions.length) * 100;
    const warning = timeLeft <= 300 ? 'text-red-600 font-bold animate-pulse' : 'text-gray-700';

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <TopBar />
            <div className="flex justify-between items-center mb-4"><button onClick={() => confirmExit(resetExam)} className="text-gray-500 hover:text-gray-700">← Exit Exam</button><div className={`text-xl font-mono ${warning}`}>⏱️ {formatTime(timeLeft)}</div></div>
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
            <ExitConfirmModal isOpen={showExitModal} onConfirm={() => { setShowExitModal(false); if (exitCallbackRef.current) exitCallbackRef.current(); }} onCancel={() => setShowExitModal(false)} />
            <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} contactForm={contactForm} setContactForm={setContactForm} contactStatus={contactStatus} onSubmit={handleContactSubmit} />
        </div>
    );
}