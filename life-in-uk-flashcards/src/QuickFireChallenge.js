import React, { useState, useEffect, useRef, useCallback } from 'react';
import { mockExams } from './mockExamsData';

const TOTAL_TIME = 60;
const AUTO_ADVANCE_DELAY = 3000; // 3 seconds to read explanation

const QuickFireChallenge = ({ onClose }) => {
    const [phase, setPhase] = useState('intro'); // 'intro' | 'playing' | 'finished'
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(null); // index of chosen answer or null
    const [isCorrect, setIsCorrect] = useState(null);
    const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);
    const [totalAnswered, setTotalAnswered] = useState(0);
    const [history, setHistory] = useState([]); // { question, chosen, correct, isCorrect }
    const timerRef = useRef(null);
    const advanceRef = useRef(null);

    // Shuffle and pick questions from all mock exams
    const prepareQuestions = useCallback(() => {
        const all = [];
        mockExams.forEach(exam => {
            exam.questions.forEach(q => {
                all.push({
                    text: q.text,
                    choices: q.choices,
                    correct: q.correct,
                    multiple: q.multiple || false,
                    explanation: q.explanation || ''
                });
            });
        });
        // Fisher-Yates shuffle
        for (let i = all.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [all[i], all[j]] = [all[j], all[i]];
        }
        return all;
    }, []);

    const startGame = () => {
        const shuffled = prepareQuestions();
        setQuestions(shuffled);
        setCurrentIndex(0);
        setScore(0);
        setAnswered(null);
        setIsCorrect(null);
        setTimeLeft(TOTAL_TIME);
        setStreak(0);
        setBestStreak(0);
        setTotalAnswered(0);
        setHistory([]);
        setPhase('playing');
    };

    // Timer
    useEffect(() => {
        if (phase !== 'playing') return;
        timerRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    setPhase('finished');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timerRef.current);
    }, [phase]);

    // Auto-advance after answering (3s delay)
    useEffect(() => {
        if (answered !== null && phase === 'playing') {
            advanceRef.current = setTimeout(() => {
                if (currentIndex < questions.length - 1) {
                    setCurrentIndex(prev => prev + 1);
                    setAnswered(null);
                    setIsCorrect(null);
                } else {
                    setPhase('finished');
                }
            }, AUTO_ADVANCE_DELAY);
            return () => clearTimeout(advanceRef.current);
        }
    }, [answered, currentIndex, questions.length, phase]);

    const handleAnswer = (choiceIndex) => {
        if (answered !== null) return; // already answered this question
        const q = questions[currentIndex];
        if (!q) return;

        let correct = false;
        if (q.multiple) {
            // For multiple-answer questions, check if the selected choice is in the correct array
            correct = Array.isArray(q.correct) && q.correct.includes(choiceIndex);
        } else {
            correct = choiceIndex === q.correct;
        }

        setAnswered(choiceIndex);
        setIsCorrect(correct);
        setTotalAnswered(prev => prev + 1);

        // Save to history for back navigation
        setHistory(prev => [...prev, {
            question: q,
            chosen: choiceIndex,
            correct: q.multiple ? (Array.isArray(q.correct) ? q.correct : [q.correct]) : q.correct,
            isCorrect: correct
        }]);

        if (correct) {
            setScore(prev => prev + 1);
            const newStreak = streak + 1;
            setStreak(newStreak);
            if (newStreak > bestStreak) setBestStreak(newStreak);
        } else {
            setStreak(0);
        }
    };

    const goBack = () => {
        if (currentIndex <= 0 || history.length === 0) return;
        // Remove last history entry
        const prevEntry = history[history.length - 1];
        setHistory(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
        // Restore the previous question's answer state from history
        // The previous entry in history (if any) tells us what was answered before
        if (history.length >= 2) {
            const prevPrevEntry = history[history.length - 2];
            setAnswered(prevPrevEntry.chosen);
            setIsCorrect(prevPrevEntry.isCorrect);
        } else {
            setAnswered(null);
            setIsCorrect(null);
        }
        // Undo score if it was correct
        if (prevEntry.isCorrect) {
            setScore(prev => Math.max(0, prev - 1));
        }
        setTotalAnswered(prev => Math.max(0, prev - 1));
        // Reset streak to previous state (approximate)
        setStreak(0);
    };

    const formatTime = (seconds) => {
        const s = Math.floor(seconds);
        return `${s}s`;
    };

    // Progress ring SVG
    const ringRadius = 36;
    const ringCircumference = 2 * Math.PI * ringRadius;
    const ringProgress = (timeLeft / TOTAL_TIME) * ringCircumference;
    const ringColor = timeLeft > 30 ? '#22c55e' : timeLeft > 15 ? '#eab308' : '#ef4444';

    if (phase === 'intro') {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl text-center">
                    <div className="text-5xl mb-4">⚡</div>
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Quick-Fire Challenge</h2>
                    <p className="text-slate-600 mb-6">60 seconds of rapid-fire questions. Answer as many as you can!</p>
                    <div className="bg-indigo-50 rounded-xl p-4 mb-6 text-left text-sm text-slate-700 space-y-2">
                        <p>⏱️ <strong>60 seconds</strong> on the clock</p>
                        <p>⚡ Answer fast — questions auto-advance after 3s</p>
                        <p>🔥 Build streaks for bonus points</p>
                        <p>🎯 Questions from all topics</p>
                        <p>🔙 You can go back to review previous questions</p>
                        <p className="text-xs text-slate-500 mt-2">⚠️ This is a fast-paced practice mode, not a real test simulation.</p>
                    </div>
                    <button
                        onClick={startGame}
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all shadow-md"
                    >
                        🚀 Start Challenge!
                    </button>
                    <button onClick={onClose} className="mt-3 text-sm text-slate-400 hover:text-slate-600 transition">Cancel</button>
                </div>
            </div>
        );
    }

    if (phase === 'finished') {
        const pct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;
        return (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl text-center">
                    <div className="text-5xl mb-4">⏰</div>
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Time's Up!</h2>
                    <div className="grid grid-cols-2 gap-4 my-6">
                        <div className="bg-green-50 rounded-xl p-4">
                            <p className="text-3xl font-bold text-green-700">{score}</p>
                            <p className="text-xs text-green-600">Correct</p>
                        </div>
                        <div className="bg-red-50 rounded-xl p-4">
                            <p className="text-3xl font-bold text-red-600">{totalAnswered - score}</p>
                            <p className="text-xs text-red-600">Incorrect</p>
                        </div>
                        <div className="bg-indigo-50 rounded-xl p-4">
                            <p className="text-3xl font-bold text-indigo-700">{totalAnswered}</p>
                            <p className="text-xs text-indigo-600">Answered</p>
                        </div>
                        <div className="bg-amber-50 rounded-xl p-4">
                            <p className="text-3xl font-bold text-amber-600">{pct}%</p>
                            <p className="text-xs text-amber-600">Accuracy</p>
                        </div>
                    </div>
                    {bestStreak >= 3 && (
                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 mb-4">
                            <p className="text-orange-700 font-bold">🔥 Best Streak: {bestStreak} in a row!</p>
                        </div>
                    )}
                    <div className="flex gap-3">
                        <button
                            onClick={startGame}
                            className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-md"
                        >
                            🔄 Play Again
                        </button>
                        <button
                            onClick={onClose}
                            className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-200 transition"
                        >
                            Done
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Playing phase
    const q = questions[currentIndex];
    if (!q) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl text-center">
                    <p className="text-xl">Loading questions...</p>
                </div>
            </div>
        );
    }

    // Determine if current question has multiple correct answers
    const hasMultipleCorrect = q.multiple && Array.isArray(q.correct) && q.correct.length > 1;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden">
                {/* Top bar: timer + score + streak - better spaced */}
                <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <svg width="52" height="52" className="transform -rotate-90">
                            <circle cx="26" cy="26" r={ringRadius} fill="none" stroke="#374151" strokeWidth="5" />
                            <circle cx="26" cy="26" r={ringRadius} fill="none" stroke={ringColor} strokeWidth="5"
                                strokeDasharray={ringCircumference}
                                strokeDashoffset={ringCircumference - ringProgress}
                                strokeLinecap="round"
                                className="transition-all duration-1000 ease-linear"
                            />
                            <text x="26" y="26" textAnchor="middle" dominantBaseline="central" fill="white" fontSize="15" fontWeight="bold">
                                {formatTime(timeLeft)}
                            </text>
                        </svg>
                        <div className="text-left">
                            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Question</p>
                            <p className="text-lg font-bold">{currentIndex + 1}/{Math.min(questions.length, 50)}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="text-center">
                            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Score</p>
                            <p className="text-xl font-bold">{score}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Streak</p>
                            <p className="text-xl font-bold">{streak > 0 ? `🔥${streak}` : '-'}</p>
                        </div>
                    </div>
                    <button onClick={() => setPhase('finished')} className="text-slate-400 hover:text-white text-sm transition p-1">✕</button>
                </div>

                {/* Question area */}
                <div className="p-6">
                    {/* Back button - always visible at top when not on first question */}
                    {currentIndex > 0 && (
                        <button
                            onClick={goBack}
                            className="mb-3 text-xs text-indigo-600 hover:text-indigo-800 font-medium transition flex items-center gap-1"
                        >
                            ← Back to previous question
                        </button>
                    )}

                    <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-slate-400">
                            {answered !== null ? 'Answered' : 'Select an answer'}
                        </p>
                        {hasMultipleCorrect && (
                            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-medium">
                                Select all correct answers
                            </span>
                        )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-5 leading-relaxed">{q.text}</h3>

                    <div className="space-y-2.5">
                        {q.choices.map((choice, idx) => {
                            let bg = 'bg-slate-50 hover:bg-slate-100 border-slate-200';
                            let textColor = 'text-slate-800';

                            if (answered !== null) {
                                const isSelected = answered === idx;
                                const isChoiceCorrect = q.multiple
                                    ? (Array.isArray(q.correct) && q.correct.includes(idx))
                                    : idx === q.correct;

                                if (isChoiceCorrect) {
                                    bg = 'bg-green-100 border-green-500';
                                    textColor = 'text-green-800';
                                } else if (isSelected) {
                                    bg = 'bg-red-100 border-red-500';
                                    textColor = 'text-red-800';
                                } else {
                                    bg = 'bg-slate-50 border-slate-200 opacity-60';
                                }
                            }

                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(idx)}
                                    disabled={answered !== null}
                                    className={`w-full text-left p-3.5 rounded-xl border-2 transition-all ${bg} ${textColor} ${answered === null ? 'cursor-pointer' : 'cursor-default'}`}
                                >
                                    <span className="font-semibold mr-2">{String.fromCharCode(65 + idx)}.</span>
                                    {choice}
                                    {answered !== null && (
                                        <span className="float-right">
                                            {q.multiple
                                                ? (Array.isArray(q.correct) && q.correct.includes(idx) ? '✅' : (answered === idx ? '❌' : ''))
                                                : (idx === q.correct ? '✅' : (answered === idx ? '❌' : ''))
                                            }
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Feedback bar */}
                    {answered !== null && (
                        <div className={`mt-4 p-3 rounded-xl text-sm ${isCorrect ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                            <p className="font-semibold">{isCorrect ? '✅ Correct!' : '❌ Incorrect'}</p>
                            {hasMultipleCorrect && (
                                <p className="text-xs mt-1">
                                    Correct answer{q.multiple && Array.isArray(q.correct) && q.correct.length > 1 ? 's' : ''}: {q.multiple && Array.isArray(q.correct)
                                        ? q.correct.map(i => `${String.fromCharCode(65 + i)}`).join(', ')
                                        : String.fromCharCode(65 + q.correct)}
                                </p>
                            )}
                            {q.explanation && <p className="text-xs mt-1 opacity-80">{q.explanation}</p>}
                        </div>
                    )}
                </div>

                {/* Progress bar at bottom */}
                <div className="h-1.5 bg-slate-200">
                    <div
                        className="h-full bg-indigo-600 transition-all duration-300"
                        style={{ width: `${((currentIndex + 1) / Math.min(questions.length, 50)) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default QuickFireChallenge;
